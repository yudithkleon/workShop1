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
    for(let i = 0; i < data[0].carrusel.length; i++){
    items_pequeños.innerHTML += `
    <div class="grid-item-pequeño">
    <img src="${data[0].carrusel[i]}" alt="" >
    </div>
    `   
    }

// =======================================================================================
    let items_grande = document.getElementById('items_grande')
    
    items_grande.innerHTML = `
    <img src="${data[0].imagen}" alt="">
    `

// ======================================================================================

    let stop_botLane = document.getElementById('stop_botLane')
    for(let i = 0; i < data.length; i++){
        console.log(2)
        stop_botLane.innerHTML += `
        <div class="grid-column-producto">
        <div class="imagen-producto">
            <img src="${data[i].imagen}" alt="">
        </div>
        <div class="descripcion-producto">
            <p class="nombre-producto">${data[i].nombre}</p>
            <p class="precio-producto">$${data[i].precio}</p>
        </div>
        </div>
        `
    }

}