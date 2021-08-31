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