const carrito = document.getElement8yId('carrito');
const elementos1 = document.getElementById('lista');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListenera();

function cargarEventListeners() {
    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento(e) {
    e.preventDeafault();
    if(e.target.classsList.contains('agregar-carrito')) {
        const elemento = e.target.parentElement.parent.Element;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.queryselector('precio').textContent,
        id: elemento.querySelector('a').getAtribute('data-id')

    }
    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento) {
    const row = document.createElement(tr);
    row.innerHTML = '
    <td>
        <img src="${elemento.imagen}" width="100 >
    </td> 
    <td>
        ${elemento.titulo}
    </td>
    <td>
        ${elemento.pecio}
    </td>
    <td>
        <a href="#" class='borrar' data-id"${elemento.id}"> X </a>
    </td>
  ';
  lista.appendChild(row);
}

function eleminarElemento(e) {
    e.proventDefault();
    let elemento,
    elementoId;
    if (e.target.classList.contains("borrar")) {
        e.target.paraElement.parent.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId =elemento.querySelector("a").getAtribute("data-id");
    }
}

function