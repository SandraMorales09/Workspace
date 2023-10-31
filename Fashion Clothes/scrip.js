const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn =document.getElementById('vaciar-carrito');

cargarEvenListeners();

function cargarEvenListeners() {

    elementos1.addEvenListener('click', comprarElemento);
    carrito.addEventListener('click', eleminarElemento);
    vaciarCarritoBtn.addEvenListener('click', vaciarCarrito);

}

function comprarElemento(e) {
    e.preventDefault();
    if(e.target.classList.contains(agregar-carrito)) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }
    insertCarrito(infoElemento);
}

function insertarCarrito(elemento) {

    const row = document.createElement('tr');
    row.innerHTML = '
        <td>
           <img src="$(elemento.imagen)" width=100 />
        </td>        
        <td>
            $(elemento.titulo)
        </td>
        <td>
            $(elemento.precio)
        </td>
        <td>
            <a href="#" class="borrar" "data-id="$(elemento.id)>X </a>     
        </td>
    ';
    lista.appendChild(row);
}

function eliminarElemento(e) {
    e.preventDefault();
    let elemento,
        elementoId;
    if(e.target.classList.contains('borrar')) {
    elemento.paraElement.paraElement.remove();
       elemento = e.target.parentElement.paraElement;
       elementoId = elemento.querySelector('a').getAtribute('data')
    }
}

function vaciarCarrito() {
    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}
