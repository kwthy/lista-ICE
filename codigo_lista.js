
function iniciarPagina () {


    let selectionSeleccionarPropuestas = document.getElementById('propuestas')
    selectionSeleccionarPropuestas.style.display = 'none'
    let selectionSeleccionarNosotros = document.getElementById('sobre-nosotros')
    selectionSeleccionarNosotros.style.display = 'none'
    let selectionSeleccionarAnuarios = document.getElementById('todos-anuarios')
    selectionSeleccionarAnuarios.style.display = 'none'
    let selectionOpciones = document.getElementById('inicio-pagina')
    selectionOpciones.style.display = 'flex'
    let selectionVolver = document.getElementById('reiniciar')
    selectionVolver.style.display = 'none'

    let selectionBotonReiniciar = document.getElementById('boton-reiniciar')
    selectionBotonReiniciar.style.display = true

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
    let botonPoropuestas = document.getElementById('boton-propuestas')
    botonPoropuestas.addEventListener('click', listaPropuestas)
    let botonNosotros = document.getElementById('boton-nosotros')
    botonNosotros.addEventListener('click', mostrarNosotros)
    let botonAnuarios = document.getElementById('boton-anuarios')
    botonAnuarios.addEventListener('click', todosAnuarios)

}

function mostrarNosotros() {

    let selectionOpciones = document.getElementById('inicio-pagina')
    selectionOpciones.style.display = 'none'
    let selectionSeleccionarNosotros = document.getElementById('sobre-nosotros')
    selectionSeleccionarNosotros.style.display = 'flex'
    let selectionVolver = document.getElementById('reiniciar')
    selectionVolver.style.display = 'flex'
    let selectionBotonReiniciar = document.getElementById('boton-reiniciar')
    selectionBotonReiniciar.style.display = true

}

function todosAnuarios() {

    let selectionOpciones = document.getElementById('inicio-pagina')
    selectionOpciones.style.display = 'none'
    let selectionSeleccionarAnuarios = document.getElementById('todos-anuarios')
    selectionSeleccionarAnuarios.style.display = 'flex'
    let selectionVolver = document.getElementById('reiniciar')
    selectionVolver.style.display = 'flex'
    let selectionBotonReiniciar = document.getElementById('boton-reiniciar')
    selectionBotonReiniciar.style.display = true

}

function listaPropuestas () {


    let selectionOpciones = document.getElementById('inicio-pagina')
    selectionOpciones.style.display = 'none'
    let selectionVolver = document.getElementById('reiniciar')
    selectionVolver.style.display = 'flex'
    let selectionSeleccionarPropuestas = document.getElementById('propuestas')
    selectionSeleccionarPropuestas.style.display = 'flex'
    let selectionBotonReiniciar = document.getElementById('boton-reiniciar')
    selectionBotonReiniciar.style.display = true

    
}


function reiniciarJuego(){
    location.reload()
}

window.addEventListener('load', iniciarPagina)