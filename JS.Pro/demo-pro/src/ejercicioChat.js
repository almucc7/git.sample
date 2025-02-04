class Hotel{

    static #lastHotelId = 0;
    static #generateHotelId() {

        this.#lastHotelId++;
        return `HOTEL - ${this.#lastHotelId}`;
    }

    #id = Hotel.#generateHotelId();
    #name;
    #city;

    constructor(name, city){
        this.#name = name;
        this.#city = city;        
    }

    get name(){
        return this.#name;
    }
    get city(){
        return this.#city;
    }
    get id(){
        return this.#id;
    }

    printInfo() {

        console.log(`
        
            Hotel ID: ${this.#id}
            Name: ${this.#name}
            City: ${this.#city}
        `);
    }    
}


class Booking {

    static #lastBookingId = 0;
    static #generateBookingId() {

        this.#lastBookingId++;
        return `BOOK - ${this.#lastBookingId}`;
    }

    #bookingId = Booking.#generateBookingId();
    #checkIn;
    #nights;
    #priceNight;
    #hotel;
    

    constructor(checkIn, nights, priceNight, hotel){
     
        this.#checkIn = checkIn;
        this.#nights = nights;
        this.#priceNight = priceNight;
        this.#hotel = hotel;
    }

    get totalPrice(){
        return this.#nights * this.#priceNight;
    }

    printBooking(){
        console.log(`
        
            Booking ID: ${this.#bookingId}
            Hotel: ${this.#hotel.id} - ${this.#hotel.name}
            Check-in: ${this.#checkIn}
            Nights: ${this.#nights}
            Price per night: ${this.#priceNight}
            Total price: ${this.totalPrice}      
        `);
    }

}

const hotel1 = new Hotel('Hotel Aurora', 'Valencia');
const hotel2 = new Hotel('Mare Nostrum', 'Barcelona');

hotel1.printInfo();
hotel2.printInfo();

const booking1 = new Booking('2025-05-10', 3, 120, hotel1);
const booking2 = new Booking('2025-06-01', 2, 200, hotel2);
const booking3 = new Booking('2025-07-15', 5, 150, hotel1);


booking1.printBooking();
booking2.printBooking();
booking3.printBooking();