var maxProfit = function(prices) {
 let min1 = Number.MAX_VALUE,max1 = 0,min2 = Number.MAX_VALUE,max2 = 0;
        for(let i=0;i<prices.length;i++)
        {
            min1=Math.min(prices[i],min1);
            max1=Math.max(max1,prices[i]-min1);
			//Effective price to buy the second stock is difference between the price of the stock and the profit made from the previous stock
			//So the final answer is max2 as it is calculated based on the value of the profit made on the first stock
            min2=Math.min(prices[i]-max1,min2);
            max2 = Math.max(max2,prices[i]-min2);
        }
        return max2;
    }
    
    
    /*
    Success
Details 
Runtime: 100 ms, faster than 83.92% of JavaScript online submissions for Best Time to Buy and Sell Stock III.
Memory Usage: 49.6 MB, less than 77.39% of JavaScript online submissions for Best Time to Buy and Sell Stock III.

*/
