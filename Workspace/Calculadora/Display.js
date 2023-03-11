class Display {
    constructor (displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';  
    }
   
    borrar() {
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

   borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

   computar(tipo) {
        this.tipoOperacion !== 'igual' && this.calculador();
   }


    agregarNumero(numero) {
        this.valorActual = this.valorActual + numero;
        this.imprimirValores();
     }
    
    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = valorAnterior;
    }

    calcular() {
        const valorAnterior = parsefloat(this.valorAnterior);
        const valorActual = parsefloat(this.valorActual);

        if( isNaN(valorActual) || isNaN(valorAnterior) ) return
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    }
}