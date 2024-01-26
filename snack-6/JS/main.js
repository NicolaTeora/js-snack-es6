const products = [
    { title: 'Mela', price: 2.30},
    { title: 'Banana', price: 1.50 },
    { title: 'Mango', price: 2},
    { title: 'Pesca', price: 1.80},
    { title: 'Pera', price: 1.50},
    { title: 'Arancia', price: 2.20}
  ];
  
  console.table(products);
  
  let fruitRandom = Math.floor(Math.random() * 6) + 1;
  
  console.log(fruitRandom);
  
  let priceMacedonia = 0
  for (let i = 0; i < fruitRandom; i++){
    console.log(products[i])
    priceMacedonia += products[i].price 
  }
  
  console.log(priceMacedonia)