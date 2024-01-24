function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function placeVip(name, indice){
    return {
        Tavolo: 'Tavolo Vip',
        nome_Vip: name,
        posto: indice,
    };
}