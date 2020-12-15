// Write a function, makeChange, that returns an \
// integer that represents the least number of coins
// that add up to an amount where the amount is always divisible by 5.
// coin values: 5, 10, 25

//makeChangeGredyWay([25,10,5],50)

function makeChangeGredyWay(coin,amount){
    let coinCount = 0
    let i = 0 
    while(amount > 0){
        if(coin[i] <= amount){
            amount -= coin[i]
            coinCount++
        }else{
            i++
        }
    }
    return (coinCount)
}

// Write a function, makeChange, that returns an integer that represents 
// the least number of coins that add up to the amount, n.

let recursionCounter = 0;
const coins = [10, 6, 1];

const makeChange = (value) => {
  if (value === 0) return 0;
  let minCoins; 
  coins.forEach((coin) => {
    if (value - coin >= 0) {
      let currMinCoins = makeChange(value - coin);
      if(minCoins === undefined || 
            currMinCoins < minCoins) 
        {
            minCoins = currMinCoins;
        }
    }
  });
  return minCoins + 1;
};

makeChange(12);