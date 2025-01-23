//Clase define factura(Invoice)
//Número de factura
//Concepto
//Número
//Precio unidad
//print: La factura: 
//  - Recoge su número
//  - El concepto X número --- precio
//  - Total + IVA


class Invoice { //Fábrica de facturas

    //Propiedades y métodos static
    static #lastId = 0;
    static #getID() {
        const year = new Date().getFullYear();
        const id = String(year) + '/' + String(++this.#lastId); //Primero sumo 1 //This se refiere a la clase aquí (+++Invoice.#lastId)
        return id;
    }


    //Declaración de propiedades preferiblemente privadas
        #id = Invoice.#getID();
        #product;
        #amount;
        #unityPrice;
        #iva;

    //Constructor
    constructor(id, product, amount, unityPrice, iva = 1.12){        
        this.#product = product; //this se refiere a cada instancia
        this.#amount = amount;
        this.#unityPrice = unityPrice;
        this.#iva = iva;
    }  

    //Imprimimos la factura
    printInvoice() {

        const price = this.#amount * this.#unityPrice;
        const total = price * this.#iva;

        const invoice = `        
            Factura ${this.#id}
            ${this.#product} + ${this.#amount} unidades a ${this.#unityPrice}€ 
            Total............... ${price}€
            ------------------------------------------------------
            Total + IVA ........ ${total}€
        `;

        console.log(invoice);
    }
}

//Creo las facturas
const invoice1 = new Invoice('apples', 20, 5, 4, 1.04); //Modifico el iva de las manzanas (1.04)
const invoice2 = new Invoice('oranges', 15, 2, 2.5);

console.log(invoice1, invoice2);
invoice1.printInvoice();









