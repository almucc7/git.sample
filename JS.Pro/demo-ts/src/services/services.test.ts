import { add } from "./services";

console.log(add(0, 1)); //1
console.log(add(1, -2)); //-1
console.log(add(1.5, 3.4)); //4.9

//OYE, QUIERO HACER UN TEST
test('Add function with 0 and 1 should return 1', () => {

    expect(add(0, 1)).toBe(1)  //Espero que esto valga 1
});

test('Add function with 1 and -2 should return -1', () => {

    expect(add(1, -2)).toBe(-1)  //Espero que esto valga -1
});

test('Add function with 1.5 and 3.4 should return 4.9', () => {

    expect(add(1.5, 3.4)).toBe(4.9)  //Espero que esto valga 4.9
});








