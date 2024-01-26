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

let [bikeControl] = bicycles;
console.log(bikeControl)


bicycles.forEach((bike) => {
  const {name, peso} = bike
  if (bikeControl.peso < peso){
    
    console.log()
  } else {
    
  }
});
