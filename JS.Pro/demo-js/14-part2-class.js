// Clase define factura (Invoice)
// Numero de factura
// Concepto
// Numero
// precio unidad
// print: La factura:
//  - Su numero
//  - El concepto X número --- precio
//  - Total + IVA

class Company {
    #nif;
    #name;

    constructor(nif, name) {
        this.#nif = nif;
        this.#name = name;
    }

    get nif() {
        return this.#nif.toUpperCase();
    }
    get name() {
        return this.#name;
    }
}

class Item {
    #product;
    #amount;
    #unityPrice;

    constructor(product, amount, unityPrice) {
        this.#product = product;
        this.#amount = amount;
        this.#unityPrice = unityPrice;
    }

    get product() {
        return this.#product;
    }
    get amount() {
        return this.#amount;
    }
    get unityPrice() {
        return this.#unityPrice;
    }

    calculatePrice() {
        return this.#amount * this.#unityPrice;
    }
}
export class Invoice {
    // propiedades y métodos static:
    static #brand = new Company('68323392y', 'Boracay');
    static #lastId = 0;

    static #getID() {
        const year = new Date().getFullYear();
        const id = String(year) + '/' + String(++this.#lastId);
        return id;
    }

    // declaración de propiedades preferiblemente privadas:
    #id = Invoice.#getID();
    #client;
    #items = [];
    #iva;

    // constructor
    constructor(client, items, iva = 1.21) {
        this.#client = client;
        this.#items = items;
        this.#iva = iva;
    }

    get client() {
        return this.#client;
    }

    #calculateTotal() {
        return this.#items.reduce((total, item) => total + item.calculatePrice(), 0);
    }

    printInvoice() {
        const price = this.#calculateTotal();
        const total = price * this.#iva;

        let itemsDescription = '';
        this.#items.forEach(item => {
            itemsDescription += ${item.product} + ${item.amount} unidades a ${item.unityPrice}€\n        ;
        });

        const invoice = 
        ${Invoice.#brand.name}
        Nif: ${Invoice.#brand.nif}

        Datos cliente:
        Nombre: ${this.#client.name}
        Nif: ${this.#client.nif}

        Factura: ${this.#id}
        ${itemsDescription}
        Total.................. ${price}€
        ----------------------------------
        Total + IVA ........... ${total}€
        ;
        console.log(invoice);
    }
}
const client1 = new Company('5656565843D', 'Acme');
const items1 = [
    new Item('apples', 20, 4),
    new Item('bananas', 10, 2)
];
const invoice1 = new Invoice(client1, items1, 1.04);

const client2 = new Company('6567565843D', 'CAS');
const items2 = [
    new Item('mobile', 1, 400),
    new Item('tablet', 2, 300)
];
const invoice2 = new Invoice(client2, items2);

console.log(invoice1, invoice2);
invoice1.printInvoice();
invoice2.printInvoice();
// Relaciones entre clases
// Agregación / Composición v. Asociación
// Herencia

// Añadimos
// - la empresa (NIF - nombre)
// - el cliente (NIF - nombre)

// - Diversos conceptos --> Array
// - Se refleja todo a imprimir la factura

// - La posibilidad de añadirlos mediante un método

 
 
