import './style.css'
const url = 'http://localhost:4000/producto'
// import conseguirId from './comprarProducto'
// console.log(url)
document.addEventListener('click', e => {
    conseguirId(e)
    // pintar()
})

let carritoComprarYa = []

fetch(url).then((v) => v.json()).then((d) => {pintar(d)})


// const añadirAlCarrito = document.getElementById('añadirCarrito')

// añadirAlCarrito.addEventListener('click', () => {
//     alert(2)
// })

// const combrarYa = document.getElementById('combrarYa')
// combrarYa.addEventListener('click', () => {
//     alert(3)
// })

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

    let botones = document.getElementById('botones')

    botones.innerHTML=`
    <div>
    <button class="btn1" id="añadirCarrito">ADD TO CART</button>
    </div>
    <div>
    <div style="display:none" class="comprarYaDiv">
    <p class="nombre-producto">${data[0].nombre}</p>
    <h1 class="precio-producto">$${data[0].precio}</h1>
    </div>
    <button class="btn2 comprarYa">BUY  IT NOW</button>
    </div>
    `
}

function conseguirId(e){
    if(e.target.classList.contains('comprarYa')){
        comprarYa(e.target.parentElement)
    }
    e.stopPropagation()
}

const comprarYa = object => {
    const elementos = {
        nombre: object.querySelector("p").textContent,
        precio: object.querySelector("h1").textContent
    }

    carritoComprarYa.push(elementos.nombre)
    carritoComprarYa.push(elementos.precio)
    if(localStorage.getItem('carritoCompraYa')){
        localStorage.clear()
        localStorage.setItem('carritoCompraYa', JSON.stringify(carritoComprarYa))
        let mostrarAlert = document.getElementById('mostrarAlert')
        mostrarAlert.innerHTML += `
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Felicidades!</strong> Has comprado ${elementos.nombre} a un precio de ${elementos.precio}.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `
    }
    
}