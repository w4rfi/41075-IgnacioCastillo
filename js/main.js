alert('Bienvenido al indice de masa corporal.')

const indice = (p,m) => p / (m*m);

let suPeso;
let alturaEnMetros; 
let indiceMasaCorporal;

do {
    let suPeso = prompt ('Ingrese su peso');
    let alturaEnMetros = prompt ('Ingrese su altura en metros');
    const suPesoParseado = parseFloat(suPeso);
    const alturaEnMetrosParseada = parseFloat(alturaEnMetros);
    indiceMasaCorporal = indice(suPesoParseado,alturaEnMetrosParseada);
    if (indiceMasaCorporal < 18.5) {
        alert('Su IMC es ' + indiceMasaCorporal + ', lo que indica que su peso está en la categoría de Bajo peso para adultos de su misma estatura.');
    }
    else if (indiceMasaCorporal >= 18.5 && indiceMasaCorporal < 25) {
        alert('Su IMC es ' + indiceMasaCorporal + ', lo que indica que su peso está en la categoría Normal para adultos de su misma estatura.');
    }
    else if (indiceMasaCorporal >= 25 && indiceMasaCorporal < 30) {
        alert('Su IMC es ' + indiceMasaCorporal + ', lo que indica que su peso está en la categoría de Sobrepeso para adultos de su misma estatura.');
    }
    else if (indiceMasaCorporal >= 30) {
        alert('Su IMC es ' + indiceMasaCorporal + ', lo que indica que su peso está en la categoría de Obeso para adultos de su misma estatura.');
    }
    else {
        alert('Muchas gracias por usar el Indice de Masa Corporal by w4rfi.')
    }

}while (suPeso != 'FIN')

