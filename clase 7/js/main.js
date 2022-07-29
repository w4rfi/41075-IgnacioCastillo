class Zonas__depilacion {

    constructor (zona) {
    this.zona = zona;
        }
    }    

class Precios {
    constructor (precio) {

    this.precio = parseInt(precio);

        }

    totalPrecioconIva () {
    return  this.precio = this.precio * 1.21;
        }

    }    
    
    const zonasAdepilar = [];
    const preciosDepi = [];

    
    let nombreZona 
    let precioZona

    alert('Bienvenido, ingrese la zona a depilar y el costo (se devolvera el costo + iva). Para finalizar ingrese FIN');

    while (nombreZona !== "FIN") {
        nombreZona = prompt("Ingrese zona:");
        precioZona = prompt("Ingrese precio");
        if (nombreZona !== "FIN") {
            zonasAdepilar.push(new Zonas__depilacion(nombreZona));
            preciosDepi.push(new Precios(precioZona));
        }

    }

    for (const precios of preciosDepi) {
        console.log('Precio con iva ' + precios.totalPrecioconIva());
    }


    const zonas = zonasAdepilar.map((la) => {
        return {
            Zonas: la.zona
        }
    });  

    console.log(zonas);



