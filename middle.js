var arr1 = ["Messi", "Ronaldo", "Donovan", "Vardy" , "Neymar"];

var middle = Math.floor(arr1.length/2);

console.log(arr1);

arr1.splice(middle, 0, "Chris");

console.log(arr1);
