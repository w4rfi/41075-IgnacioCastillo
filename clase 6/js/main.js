class Zonas__depilacion {

    constructor (zona, precio) {
    
    this.zona = zona;
    
    this.precio = parseInt(precio);
    
    }
    
    totalPrecioconIva () {
    
    return  this.precio = this.precio * 1.21;
    
    }
    
    }
    
    const zonasAdepilar = [];
    
    zonasAdepilar.push(new Zonas__depilacion('Cavado', '2000'));
    
    zonasAdepilar.push(new Zonas__depilacion('Pecho', '1500'));
    
    zonasAdepilar.push(new Zonas__depilacion('Axilas', '1000'));
    
    for (const zonas of zonasAdepilar) {

        console.log(zonas.totalPrecioconIva());

    }
    
    