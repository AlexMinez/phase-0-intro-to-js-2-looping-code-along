
// for (let age = 30; age < 40; age++){
//     console.log(`im ${age} years old. Happy brithday to me!`)
    
// }
// const gifts= ["teddybear", "drone", "doll"];

// function wrapGifts(gifts){
//     for (let i = 0; i < gifts.length; i++){
//     console.log(`Wrapped ${gifts[i]} and added a bow!`)
   
//     }
//     return gifts;
// }



function writeCards(cardNames,eventName){
    const messages = []
    for (let i = 0; i<cardNames.length; i++){
       const message = `Thank you, ${cardNames[i]}, for the wonderful ${eventName} gift!`;
       messages.push(message)
    } return messages
}






function countDown(i){
    i = 10
    while (i >= 0) {
        console.log(i--);
    }

}
   
