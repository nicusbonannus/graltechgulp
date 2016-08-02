function Sumar() {
    //Este es un comentario modificado
    var resultado = HacerSuma($("#primerNumero").val(),$("#segundoNumero").val());

    //var objetoQueNoSeUsa = new ObjectoViejo();
    //objetoQueNoSeUsa.ejecutarMetodoEnDesuso();

    //Este es otro comentario que no sirve para nada cuando vamos a produccion
    alert(resultado);
}