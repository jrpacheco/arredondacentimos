function arredondarCentimos(valor) {

	var resultado = parseFloat(valor);
	var existeCentimos = valor.toString().indexOf('.') >= 0;

	if (!existeCentimos)
		return resultado;

	var partes = trim(valor, 2).split('.');
	var centimos = parseInt(partes[1]);

	if (centimos === NaN)
		return resultado;

	if (centimos % 10 !== 0) {
		var ultimoDigito = (centimos < 10) ? centimos : (parseInt(centimos)).toString().substr(1, 1);
		var delta = (ultimoDigito >= 5) ? (((10 - ultimoDigito) | 0)) / 100 : ultimoDigito / 100;

		resultado = (ultimoDigito >= 5) ? parseFloat(valor + delta) : parseFloat(valor - delta);
	}

	return resultado;
}

function trim( valor, precisao )
{
	var array = valor.toString().split( "." );
	array.push( array.pop().substring( 0, precisao ) );
	var novoValor = array.join( "." );
	return novoValor;
}