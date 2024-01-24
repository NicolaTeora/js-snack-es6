//snak 1
const vips = [
  "Dwayne Johnson",
  "Brad Pitt",
  "Johnny Depp",
  "Lady Gaga",
  "Cristiano Ronaldo",
  "Georgina Rodriguez",
  "Chiara Ferragni",
  "Fedez",
  "George Clooney",
  "Amal Clooney",
  "Maneskin",
];
let nameVipGuest;
let tableVips = [];

console.log(vips);

//scorro gli elementi dell'array vips per indicizzarli
for (listVip of vips) {
  nameVipGuest = listVip;
  console.log(placeVip(nameVipGuest));
}

//riformulo l'array con gli elementi modificati in object
tableVips = vips.map((elemento, index) => {
  return placeVip(elemento, index);
});
console.log(tableVips);
