
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

// ======================================================================================

    // let stop_botLane = document.getElementById('stop_botLane')
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


// <div class="displayNone" id="contenedor-carrito">
// <br>
// <h4  style="color: white; text-align:center;">Carrito de compras</h4>
// <br>


// </div>
s
// <section>
// <!-- tamplate productos -->
// <div class="container py-4 px-8">
//     <div class="row" id="cardHombres">
//         <template class="templated-card">
//             <div class="col col-sm-6 col-md-4 mb-4">
//                 <div class="card p-2" style="width: 18rem;">
//                     <img src="..." class="card-img-top" alt="...">
//                     <div class="card-body">
//                         <h5 class="card-title">Card title</h5>
//                         <p class="card-text">Precio</p>
//                         <i class="fas fa-cart-plus fs-3"  class="primary" id="btn-carrito"></i>
//                     </div>
//                 </div>        
//             </div>
//         </template>
//     </div>
// </div>
// </section>  

// <footer>
// <div class="pie-pagina" style="display:flex; flex-direction: column; align-items: center;">
//     <img class = "img1" src="https://res.cloudinary.com/danimel/image/upload/v1630440436/cover_ehjtic.png" alt="">
//     <div style="display: flex;"><img class = "img2" src="https://res.cloudinary.com/dobboq5dt/image/upload/v1630421638/Workshop%2031Agosto/Iconos/Vector_2_hjr3ze.png" alt="">
//     <img class = "img3" src="https://res.cloudinary.com/dobboq5dt/image/upload/v1630421638/Workshop%2031Agosto/Iconos/Vector_1_wyuxsg.png" alt=""></div>
// </div>

// </footer>

// </main>


// <!-- carro de compras -->
// <template id="template-carrito">
// <tr>
// <th scope="row">id</th>
// <td>Café</td>
// <td>1</td>
// <td>
// <button class="btn btn-info btn-sm sumar"  style="color: white; font-size:16px;">
//     +
// </button>
// <button class="btn btn-danger btn-sm restar"  style="color: white; font-size:16px;">
//     -
// </button>
// </td>
// <td>$ <span>500</span></td>
// </tr>
// </template>


// <!-- footer carrito-->
// <template id="template-footer">
// <th scope="row" colspan="2">Total productos</th>
// <td>10</td>
// <td>
// <button class="btn btn-danger btn-sm" id="vaciar-carrito" style="color: white; font-size:16px;">
//     Vaciar todo
// </button>
// <button class="btn btn-info btn-sm" id="finalizar-compra" style="color: white; font-size:16px;">
//     Finalizar compras
// </button>  
// </td>
// <td class="font-weight-bold">$ <span>5000</span></td>
// </template>


// <!-- formulario-compra -->

// <template class = "formulario-compra">
// <form class="row g-3" id = "formCompra">
// <div class="md-4">
//   <label for="validationDefault01" class="form-label"> Nombre comprador</label>
//   <input type="text" class="form-control" id="nombre-comprador" value="" required>
// </div>
// <div class="md-4">
//   <label for="validationDefaultUsername" class="form-label"> Fecha de compra</label>
//   <div class="input-fecha">
//     <input type="date" class="form-control" id="fecha-compra"  aria-describedby="inputGroupPrepend2" required>
//   </div>
// </div>
// <div class="md-6">
//   <label for="validationDefault03" class="form-label">Cantidad de productos</label>
//   <input type="text" class="form-control" id="cantidad-producto"  readonly ="true">
// </div>
// <div class="md-6">
//     <label for="validationDefault03" class="form-label"> Valor por producto</label>
//     <input type="text" class="form-control" id="valor-producto" readonly ="true">
//   </div>
// <div class="md-3">
//   <label for="validationDefault05" class="form-label">Valor total</label>
//   <input type="text" class="form-control" id="valor-total" readonly ="true">
// </div>
// <div class="col-12">
//   <div class="form-check">
//     <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
//     <label class="form-check-label" for="invalidCheck2">
//       Aceptar terminos y condiciones de compra
//     </label>
//   </div>
// </div>
// <div class="col-12">
//   <button class="btn btn-primary" type="submit">Submit form</button>
// </div>
// </form>
// </template>