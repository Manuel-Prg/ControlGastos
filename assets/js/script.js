let listaNombresDeGastos = [];
let listasValoresGastos = [];

//esta función se invoca al momento de hacer click en el boton
function clickBoton(){

    let nombreGasto = document.getElementById("nombreGasto").value;
    let valorGasto = document.getElementById("valorGasto").value;
    
    listaNombresDeGastos.push(nombreGasto);
    listasValoresGastos.push(valorGasto);

    actuiazarListaGastos();
}

function actuiazarListaGastos(){
    const listaElementos = document.getElementById("listaDeGastos");
    const totalElemento = document.getElementById("totalGastos");

    let htmlLista = '';
    let totalGastos = 0;

    listaNombresDeGastos.forEach((gasto, index) => {
        const valorGatos = Number(listasValoresGastos[index]);

        htmlLista += `<li>${gasto.toFixed(2)}: US ${valorGatos}
        <button  onclick="eliminarGasto(${index});">Eliminar Gasto</button>
        </li>`

        //calculamos el total de gastos
        totalGastos += Number(valorGatos);
    });
    
    listaElementos.innerHTML = htmlLista;
    totalElemento.innerHTML = totalGastos.toFixed(2);
    limpiarFortmulario();

}

function limpiarFortmulario(){
        document.getElementById("nombreGasto").value = '';
        document.getElementById("valorGasto").value = '';
}

function eliminarGasto(index){
    listaNombresDeGastos.splice(index,1);
    listasValoresGastos.splice(index,1);
    actuiazarListaGastos();
}