import './style.css'

document.addEventListener('click', e => {
    conseguirId(e)
})

const añadirAlCarrito = document.getElementById('añadirCarrito')

añadirAlCarrito.addEventListener('click', () => {
    alert(2)
})

const combrarYa = document.getElementById('combrarYa')

combrarYa.addEventListener('click', () => {
    alert(3)
})

let items_pequeños = document.getElementById('items_pequeños')

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

let items_grande = document.getElementById('items_grande')

items_grande.innerHTML = `
<img src="https://res.cloudinary.com/dobboq5dt/image/upload/v1630421820/Workshop%2031Agosto/Frame_16_babliz.png" alt="">

`