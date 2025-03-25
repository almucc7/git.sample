"use strict";
/* eslint-disable */
class InvoiceBad {
    company = new Company('Acme Inc.');
    constructor() { }
}
class Invoice {
    company;
    //company: Company;
    constructor(company) {
        this.company = company;
        // this.company = company;
    }
}
class Company {
    name;
    address;
    phone;
    email;
    website;
    logo;
    constructor(name = 'Acme Inc.', address = 'Address', phone = 'Phone', email = 'Email', website = 'Website', logo = 'Logo') {
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.website = website;
        this.logo = logo;
        console.log('Company created');
    }
}
const invoice_a = new InvoiceBad();
const invoice_a2 = new InvoiceBad();
const acme = new Company('Acme');
const invoice = new Invoice(acme);
const invoice2 = new Invoice(new Company('X'));
const invoice3 = new Invoice({
    name: 'Y',
    address: 'Z',
    phone: 'W',
    email: 'V',
    website: 'U',
    logo: 'T',
});
