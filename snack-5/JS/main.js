console.log('online')

let cars = [
  {
    color: "purple",
    type: "minivan",
    capacity: 7
  },
  {
    color: "red",
    type: "station wagon",
    capacity: 5
  }
];

let numPosti = parseInt(prompt('quanti culi siete?'))

console.log(numPosti);
let theCar;
for (let i = 0; i < cars.length; i++){
  if (numPosti <= cars[i].capacity){
    theCar = cars[i]
  }
}
console.log(theCar)