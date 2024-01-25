/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
nome e peso.
*/
const bicycles = [
    {
      name: 'Mountain Bike',
      peso: 50,
    },
    {
      name: 'Superleggera',
      peso: 35,
    },
    {
      name: 'Pinarello Dogma',
      peso: 44,
    },
    {
      name: 'Trek Madone',
      peso: 60, 
    },
    {
      name: 'Giant Propel Advanced',
      peso: 25,      
    },
];
let weightBike = [];
//Stampare in console la bici con peso minore utilizzando destructuring e template literal.

console.table(bicycles);

let [bike1, bike2, bike3, bike5, bike6] = bicycles;
//console.log(bike1, bike2, bike3, bike5, bike6);

for (let index = 0; index < bicycles.length; index++) {
    let bike = bicycles[index].peso;
    console.log(bike);
    weightBike.push(bike);
}
console.log(weightBike)
