//DESAFIOS DE JAVASCRIPT:
//Generar un mensaje de alerta cuando se registre un gasto mayor a 150$ dólares.
//Agregar un nuevo campo donde se pueda colocar una descripción más detallada del gasto.
//Agregar un botón que permita modificar los gastos registrados.

let listaNombresDeGastos = [];
let listasValoresGastos = [];
let listasDescripcionGastos = [];

function clickBoton() {
  let nombreGasto = document.getElementById("nombreGasto").value;
  let valorGasto = document.getElementById("valorGasto").value;

  listaNombresDeGastos.push(nombreGasto);
  listasValoresGastos.push(valorGasto);

  actualizarListaGastos();
}

function actualizarListaGastos() {
    const listaElementos = document.getElementById("listaDeGastos");
    const totalElemento = document.getElementById("totalGastos");
  
    let htmlLista = '';
    let totalGastos = 0;
  
    listaNombresDeGastos.forEach((gasto, index) => {
      const valorGastos = Number(listasValoresGastos[index]);
  
      if (valorGastos <= 150) {
        htmlLista += `<li>${gasto}: US ${valorGastos.toFixed(2)} - ${listasDescripcionGastos[index] || ''}
          <button onclick="eliminarGasto(${index});">Eliminar</button>
          <button onclick="modificarGasto(${index});">Modificar</button>
          <button onclick="descripciónGasto(${index});">Descripción</button>
        </li>`;
  
        totalGastos += valorGastos;
      } 
      else {
        alert('No puedes gastar más de $150');
      }
    });

    listaElementos.innerHTML = htmlLista;
    totalElemento.innerHTML = totalGastos.toFixed(2);
    limpiarFormulario();
  }

  function modificarGasto(index) {
    let nuevoNombre = prompt("Ingrese el nuevo nombre del gasto");
    let nuevoValor = prompt("Ingrese el nuevo valor del gasto");
  
    listaNombresDeGastos[index] = nuevoNombre;
    listasValoresGastos[index] = nuevoValor;
  
    actualizarListaGastos();
  }

  function descripciónGasto(index) {
    let nuevaDescripcion = prompt("Ingrese la nueva descripción del gasto");
  
    if (nuevaDescripcion === " ") {
        alert("por favor inntroduzca una descripción");
        return;
    }
    listasDescripcionGastos[index] = nuevaDescripcion;
  
    actualizarListaGastos();
  }

function limpiarFormulario() {
  document.getElementById("nombreGasto").value = '';
  document.getElementById("valorGasto").value = '';
}

function eliminarGasto(index) {
  listaNombresDeGastos.splice(index, 1);
  listasValoresGastos.splice(index, 1);
  actualizarListaGastos();
}