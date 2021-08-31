import './style.css'
const url = 'http://localhost:4000/producto'
// console.log(url)
document.addEventListener('click', e => {
    // conseguirId(e)
    // pintar()
})

fetch(url).then((v) => v.json()).then((d) => {pintar(d)})


const añadirAlCarrito = document.getElementById('añadirCarrito')

añadirAlCarrito.addEventListener('click', () => {
    alert(2)
})

const combrarYa = document.getElementById('combrarYa')

combrarYa.addEventListener('click', () => {
    alert(3)
})

function pintar(data) {
    let items_pequeños = document.getElementById('items_pequeños')
    data.map((elementos,indice) => {
        for(var i = 0; i <= 4; i++){
            console.log(2)
        }
        items_pequeños.innerHTML = `
        <div class="grid-item-pequeño">
        <img src="https://res.cloudinary.com/dobboq5dt/image/upload/v1630421820/Workshop%2031Agosto/Frame_16_babliz.png" alt="" >
        </div>
        <div class="grid-item-pequeño">
        <img src="https://res.cloudinary.com/dobboq5dt/image/upload/v1630417970/Workshop%2031Agosto/Frame_14_y0u0da.png" alt=""  >
        </div>
        <div class="grid-item-pequeño">
        <img src="https://res.cloudinary.com/dobboq5dt/image/upload/v1630417970/Workshop%2031Agosto/Frame_15_lbxmo0.png" alt=""  >
        </div>
        <div class="grid-item-pequeño">
        <img src="https://res.cloudinary.com/dobboq5dt/image/upload/v1630417970/Workshop%2031Agosto/Frame_15_lbxmo0.png" alt=""  >
        </div>
        `
    })
// =======================================================================================
    let items_grande = document.getElementById('items_grande')
    
    items_grande.innerHTML = `
    <img src="https://res.cloudinary.com/dobboq5dt/image/upload/v1630421820/Workshop%2031Agosto/Frame_16_babliz.png" alt="">
    `

// ======================================================================================

    let stop_botLane = document.getElementById('stop_botLane')

    stop_botLane.innerHTML = `
    <div class="grid-column-producto">
    <div class="imagen-producto">
        <img src="https://res.cloudinary.com/dobboq5dt/image/upload/v1630417957/Workshop%2031Agosto/Rectangle_1_rkjpy2.png" alt="">
    </div>
    <div class="descripcion-producto">
        <p class="nombre-producto">Nombre producto</p>
        <p class="precio-producto">$0000</p>
    </div>
    </div>
    <div class="grid-column-producto">
    <div class="imagen-producto">
        <img src="https://res.cloudinary.com/dobboq5dt/image/upload/v1630417955/Workshop%2031Agosto/Frame_20_ind8rr.png" alt="">
    </div>
    <div class="descripcion-producto">
        <p class="nombre-producto">Nombre producto</p>
        <p class="precio-producto">$0000</p>
    </div>

    </div>
    <div class="grid-column-producto">
    <div class="imagen-producto">
        <img src="https://res.cloudinary.com/dobboq5dt/image/upload/v1630417958/Workshop%2031Agosto/Frame_17_rpc5yn.png" alt="">
    </div>
    <div class="descripcion-producto">
        <p class="nombre-producto">Nombre producto</p>
        <p class="precio-producto">$0000</p>
    </div>
    </div>
    `
}