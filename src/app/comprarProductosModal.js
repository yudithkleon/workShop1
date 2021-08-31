car = {}

const conseguirId = e => {
    if(e.target.classList.contains('btn')){
        comprarStok(e.target.parentElement)
    }
    e.stopPropagation()
}

const comprarStok = objeto => {
    let elementos = {
        nombre: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('h5').textContent,
        talla: objeto.querySelector('p').textContent
    }

    if(car.hasOwnProperty(elementos.id)) {
        elementos.cantidad = car[elementos.id].cantidad + 1
    }

    car[elementos.id] = {...elementos}
    localStorage.setItem('productos', JSON.stringify(car))
}