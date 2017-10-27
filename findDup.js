var arr1 = ["Los Angeles", "Corona", "Riverside", "Corona", "Ontario", "Yorba Linda", "Los Angeles"];
var dups = [];
function findDup(arr1) {
for ( i=0; i < arr1.length; i++) {
    let cake;
    cake = arr1[i];
    for ( k=i+1; k < arr1.length; k++) {
        if (cake == arr1[k]){
        dups.push(cake);
        }
    }
  }
}

var answer = findDup(arr1);
console.log(dups);
