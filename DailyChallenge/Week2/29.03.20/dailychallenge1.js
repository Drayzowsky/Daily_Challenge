// Daily Challenge W2D1

//Exercise 1:

var array = ["Banana", "Apples", "Oranges", "Blueberries"];

array.splice(0,1)
["Banana"]
array.sort()
(3) ["Apples", "Blueberries", "Oranges"]
array.push("Kiwi")
4
array
(4) ["Apples", "Blueberries", "Oranges", "Kiwi"]
array.splice(0,1)
["Apples"]
array.reverse()
(3) ["Kiwi", "Oranges", "Blueberries"]


//Exercise 2:

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(array2[1][1]);
1 ["Oranges"]