var maxProfit = function (prices) {
  let profit = 0;
  let low = Infinity;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < low) {
      low = prices[i];
    } else if (prices[i] - low > profit) {
      profit = prices[i] - low;
    }
  }
  return profit;
};

console.log(maxProfit([7, 1, 2, 3, 5, 8, 1]));
