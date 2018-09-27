// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let coinsToChange = {};
    let half = 0;
    let quarter = 0;
    let dime = 0;
    let nickel = 0;
    let pennie = 0;
    let exchenge = (money)=>{
        if(money > 10000){
            coinsToChange.error = 'You are rich, my friend! We don\'t have so much coins for exchange';
        } else if (money === 0){
            return coinsToChange
        } else if(money >= 50){
            half++
            coinsToChange.H = half
            return exchenge(money - 50)
        } else if(money >= 25){
            quarter++
            coinsToChange.Q = quarter
            return exchenge(money - 25)
        } else if(money >= 10){
            dime++
            coinsToChange.D = dime
            return exchenge(money - 10)
        } else if(money >= 5){
            nickel++
            coinsToChange.N = nickel
            return exchenge(money - 5)
        } else if(money > 0){
            pennie++
            coinsToChange.P = pennie
            return exchenge(money - 1)
        };
        return coinsToChange;
    };
   return exchenge(currency)
}
