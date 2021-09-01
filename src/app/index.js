import './style.css'
const url = 'http://localhost:4000/producto'
// import conseguirId from './comprarProducto'
// console.log(url)
document.addEventListener('click', e => {
    pintarBarra(e)
    conseguirId(e)
    // pintar()
})

let carritoComprarYa = []
document.addEventListener('DOMContentLoaded', () =>
{
    fetch(url).then((v) => v.json()).then((d) => {pintarProductos(d)})
})


// const añadirAlCarrito = document.getElementById('añadirCarrito')

// añadirAlCarrito.addEventListener('click', () => {
//     alert(2)
// })

// const combrarYa = document.getElementById('combrarYa')
// combrarYa.addEventListener('click', () => {
//     alert(3)
// })

function pintarProductos(data){
    let stop_botLane = document.getElementById('stop_botLane')
    for(let i = 0; i < data.length; i++){
        stop_botLane.classList.add('mostrar')
        stop_botLane.innerHTML += `
                <div class="imagen-producto">
                <img src="${data[i].imagen}" style="width:300px; height:400px;" alt="">
                    <div class="productos">
                    <h5 class="nombre-producto">${data[i].nombre}</h5>
                    <p class="precio-producto">$${data[i].precio}</p>
                    <div style="display:none">
                        <h3>Prueba</h3>
                        <img class="itemI1" src="${data[i].carrusel[0]}">
                        <img class="itemI2" src="${data[i].carrusel[1]}">
                        <img class="itemI3" src="${data[i].carrusel[2]}">
                        <img class="itemI4" src="${data[i].carrusel[3]}">
                    </div>
                    </div>
                    </div>
        `
    }
}



const pintarBarra = e => {
    if(e.target.classList.contains('productos')){
        pintarLocal(e.target.parentElement)
    }
    e.stopPropagation()
}

const pintarLocal = object => {
    const elemento = {
        nombre: object.querySelector('h5').textContent,
        precio: object.querySelector('p').textContent,
        imagenTitle: object.querySelector('img').src,
        img1: object.querySelector('.itemI1').src,
        img2: object.querySelector('.itemI2').src,
        img3: object.querySelector('.itemI3').src,
        img4: object.querySelector('.itemI4').src
    }
    localStorage.setItem('dio', JSON.stringify(elemento))
    localStorage.setItem('porfin', JSON.stringify(elemento.img2))
    pintarBarraLocal(elemento)
}

function pintarBarraLocal(elemento){
    let items_pequeños = document.getElementById('items_pequeños')
    items_pequeños.innerHTML =  `
    <div class="grid-item-pequeño">
    <img src="${elemento.img1}" alt="" >
    </div>
    <div class="grid-item-pequeño">
    <img src="${elemento.img2}" alt="" >
    </div>
    <div class="grid-item-pequeño">
    <img src="${elemento.img3}" alt="" >
    </div>
    <div class="grid-item-pequeño">
    <img src="${elemento.img4}" alt="" >
    </div>
    `   

}

// =========================================================================
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