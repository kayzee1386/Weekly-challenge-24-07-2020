CHALLENGE
A construction company is building a new neighborhood, and they are currently working on the design. Each house will be built using one of three main materials (e.g., wood, brick, or concrete), but no side-by-side houses can be made of the same material. Because each house will be of varying size and complexity, the cost of the materials for each house varies. Given the cost of using each material for each house, what is the minimum cost needed to complete the neighborhood?
For example, let's say there are n = 3 houses to be built. Also, cost = [[1, 2, 3], [1, 2, 3], [3, 3, 1]], denoting the cost of materials for each of the 3 houses. The minimum cost to build all the houses is 4, as seen in the table below:



Material 1
Material 2
Material 3
Cost for House 1
1
2
3
Cost for House 2
1
2
3
Cost for House 3
3
3
1

For the first house, the cheapest material is the first one, which costs 1.  For the second house, the materials cost the same as with the first house, but the same material can't be used because the houses are side by side. The next best option is the second material, which costs 2. Finally, the cheapest material for the third house is the third material, which costs 1. Therefore, the total cost to build all the houses is 1 + 2 + 1 = 4.

YOUR TASK
Write a function minCost which:
has a parameter cost:  a 2-dimensional array of integers where cost[i][j] denotes the cost of using the jth material on the ith house, and
returns minimumCost (an integer which is the minimum cost to build all the houses in the neighborhood)

Constraints
1 ≤ n ≤ 100
0 ≤ cost[i][j] ≤ 100

SUBMISSION
The URL to the github repository is what should be submitted to your TA.
Screenshot(s) of your functions output should be included in the submission



THE ANSWER
const minCost = cost => {
    let arr = []  // the minimum cost to build the houses get pushed here
    let minItem = 100  // this ensures that the minimum cost of a building won't exceed 100

    for (let i = 0; i < cost.length; i++) { // outer loop gets the number of houses (cost[i])
        for (let j = 0; j < cost[i].length; j++) { // inner loop cost gets the cost of building a house (cost[i][j]) the inner loop will run 3 times and compare the 3 items in the first array [1,2,3] to find the minimum item before moving back to the outer loop to repeat thesame process
            if (cost[i][j] < minItem && cost[i][j] != arr.slice(-1)[0]) { //the first part of this statement compares cost of building a house with a particular material with the minItem variable. The second part gets the last item of the arr variable and ensures that we don't have 2 succesive buildings with thesame material
                minItem = cost[i][j] //the minimum item is set to whatever value passes the above conditions
            }
        }
        arr.push(minItem)//the minItem is pushed to our arr variable
        minItem = 100// the minItem is set back to 100 this was done at the end of the outer for loop so that when the outer loops moves to it's second iteration count which is still [1,2,3] the inner for loop will use this figure and run three times comparing all the items before coming back here. it's then rinse and repeat for the outer for loop's third iteration count. 
    }
    let minimumCost = `Minimum cost: ${arr.reduce((a, b) => a + b)}` //this sums up all the numbers in our array to get the minimum cost
    return minimumCost
}
console.log(minCost([[1,2,3],[1,2,3],[3,3,1]]))