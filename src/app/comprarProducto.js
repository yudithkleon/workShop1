const conseguirId = e => {
    if(e.target.classList.contains('btn')){
        comprarDirecto(e.target.parentElement)
    }
    e.stopPropagation()
}

const comprarDirecto = objeto => {
    let elementos = {
        nombre: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('h5').textContent,
        talla: objeto.querySelector('p').textContent
    }

    localStorage.setItem('compraDirecto', JSON.stringify(elementos))
}