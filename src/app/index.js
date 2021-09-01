import './style.css'
const url = 'http://localhost:4000/producto'
// import conseguirId from './comprarProducto'
// console.log(url)
document.addEventListener('click', e => {
    pintarBarra(e)
    conseguirId(e)
    conseguirImgTop(e)
    pintarModalCarrito()
})

let carritoComprarYa = []
let carritoComprarDespues = []
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
                <div class="imagen-productos">
                <div class="productos">
                <img src="${data[i].imagen}" class="imagen-producto" style="width:300px; height:400px;" alt="">
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
    pintarBarraDerecha(elemento)
    pintarImgTopLocal()
}

function pintarBarraLocal(elemento){
    let items_pequeños = document.getElementById('items_pequeños')
    items_pequeños.innerHTML =  `
    <div class="grid-item-pequeño">
    <img class="itemMostrar" src="${elemento.img1}" alt="" >
    </div>
    <div class="grid-item-pequeño">
    <img class="itemMostrar" src="${elemento.img2}" alt="" >
    </div>
    <div class="grid-item-pequeño">
    <img class="itemMostrar" src="${elemento.img3}" alt="" >
    </div>
    <div class="grid-item-pequeño">
    <img class="itemMostrar" src="${elemento.img4}" alt="" >
    </div>
    `   

}

function conseguirImgTop(e){
    if(e.target.classList.contains('itemMostrar')){
        cambiarPorfin(e.target.parentElement)
    }
}

const cambiarPorfin = object => {
    const elemento = {
        img: object.querySelector('img').src
    }
    localStorage.setItem('porfin', JSON.stringify(elemento.img))
    pintarImgTopLocal()
}

function pintarImgTopLocal(){
    let img = JSON.parse(localStorage.getItem('porfin'))
    let items_grande = document.getElementById('items_grande')
    
    items_grande.innerHTML = `
    <img src="${img}" alt="">
    `
}

function pintarBarraDerecha(elemento){

    let detalle = document.querySelector(".grid-column-detalle");
    detalle.innerHTML = `
    <div class="nombre-producto">
        <h1>${elemento.nombre}</h1>
    </div>
    <div class="precio">
        <p>${elemento.precio}</p>
    </div>
    <div class="tallas">
        <p>Size</p>
        <ul class="lista-tallas">
            <a class="tallas" href=""><li>S</li></a>
            <a class="tallas" href=""><li>M</li></a>
            <a class="tallas" href=""><li>L</li></a>
            <a class="tallas" href=""><li>XL</li></a>
            <a  class="tallas" href=""><li>XXL</li></a>
        </ul>
    </div>
    <div class="botones" id="botones">
    </div>
    <div id="mostrarAlert"></div>
    `;

    let botones = document.getElementById('botones')
    botones.innerHTML=`
    <div>
        <div>
            <button class="btn1 comprarYaDiv" id="añadirCarrito">ADD TO CART</button>
            <div style="display:none" class="comprarYaDiv">
                <p class="nombre-producto">${elemento.nombre}</p>
                <h1 class="precio-producto">${elemento.precio}</h1>
            </div>
        </div>
    </div>
    <div>
        <div style="display:none" class="comprarYaDiv">
            <p class="nombre-producto">${elemento.nombre}</p>
            <h1 class="precio-producto">${elemento.precio}</h1>
        </div>
            <button class="btn2 comprarYa">BUY  IT NOW</button>
        </div>
    </div>
    `
}


// =========================================================================
function conseguirId(e){
    if(e.target.classList.contains('comprarYa')){
        comprarYa(e.target.parentElement)
    }
    if(e.target.classList.contains('comprarYaDiv')){
        comprarDespues(e.target.parentElement)
    }
    e.stopPropagation()
}

const comprarDespues = object => {
    const elemento = {
        nombre: object.querySelector("p").textContent,
        precio: object.querySelector("h1").textContent,
    }
    carritoComprarDespues.push(elemento)
    localStorage.setItem('carritoComprarDespues', JSON.stringify(carritoComprarDespues))
}
function pintarModalCarrito(){
    let carrito = JSON.parse(localStorage.getItem('carritoComprarDespues'))
    let compras = document.getElementById('items')
    carrito.map((mapeo, index) => {
        let cantidad = 1;
        if(mapeo === mapeo){
        cantidad ++    
    }
    compras.innerHTML += `
    <div class="text-dark">
        <th class="text-dark">${mapeo.nombre}</th>
        <th class="text-dark">${mapeo.nombre}</th>
        <th class="text-dark">${cantidad}</th>
    </div>
    `
    
    let total = document.getElementById('total')
    const {precio} = mapeo

    let precios = parse(precio)
    console.log(precios)
    total.innerHTML = `
    <p>Total: ${precios + precios}</p>
    `

    let alertModal = document.getElementById('alertModal')
    
    
})
}
document.getElementById('comprarProductos').addEventListener('click', () => {
    localStorage.clear()
    alertModal.innerHTML = `
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Felicidades!</strong> .
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `
})

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