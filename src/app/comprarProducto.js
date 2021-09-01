
// const comprarDirecto = objeto => {
//     let elementos = {
//         nombre: objeto.querySelector('h5').textContent,
//         precio: objeto.querySelector('h5').textContent,
//         talla: objeto.querySelector('p').textContent
//     }

//     localStorage.setItem('compraDirecto', JSON.stringify(elementos))
// }



// function pintar(data) {
//     let items_pequeños = document.getElementById('items_pequeños')
//     for(let i = 0; i < data[0].carrusel.length; i++){
//     items_pequeños.innerHTML += `
//     <div class="grid-item-pequeño">
//     <img src="${data[0].carrusel[i]}" alt="" >
//     </div>
//     `   
//     }

// // =======================================================================================
//     let items_grande = document.getElementById('items_grande')
    
//     items_grande.innerHTML = `
//     <img src="${data[0].imagen}" alt="">
//     `

// // ======================================================================================

//     let stop_botLane = document.getElementById('stop_botLane')
//     for(let i = 0; i < data.length; i++){
//         stop_botLane.innerHTML += `
//         <div class="grid-column-producto">
//         <div class="imagen-producto">
//             <img src="${data[i].imagen}" alt="">
//         </div>
//         <div class="descripcion-producto">
//             <p class="nombre-producto">${data[i].nombre}</p>
//             <p class="precio-producto">$${data[i].precio}</p>
//         </div>
//         </div>
//         `
//     }

//     let botones = document.getElementById('botones')

//     botones.innerHTML=`
//     <div>
//     <button class="btn1" id="añadirCarrito">ADD TO CART</button>
//     </div>
//     <div>
//     <div style="display:none" class="comprarYaDiv">
//     <p class="nombre-producto">${data[0].nombre}</p>
//     <h1 class="precio-producto">$${data[0].precio}</h1>
//     </div>
//     <button class="btn2 comprarYa">BUY  IT NOW</button>
//     </div>
//     `
// }