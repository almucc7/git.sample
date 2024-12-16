const user = {

    name: 'Pepe',
    age: 22,
    birth: new Date(),
};

const stringUser = JSON.stringify(user);

console.log(user);
console.log(stringUser);
const newObject = JSON.parse(stringUser);
newObject.birth = new Date(newObject.birth);