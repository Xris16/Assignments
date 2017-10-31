let arr1 = [1,2,3,5,7,9];
let arr2 = [1,2,5,7];

function findDiff(first, second){
    for (let i = 0; i < first.length; i++) {
       
        for (let k = 0; k < second.length; k++) {
            if (first[i] === second[k]) {
                break;
            }
            else if(k == second.length - 1) {
                console.log(first[i]);
            }
            else if(first[i] != second[k]) {
                continue;
            }
       }
   }
   for (let i =0; i < second.length; i++) {
       for (let k = 0; k < first.length; k++) {
           if (first[i] === second[k]) {
               break;
           }
           else if(k == first.length - 1) {
               console.log(second[i])
           }
           else if(second[i] != first[k]) {
               continue;
           }
       }
   }
}

let first = arr1;
let second = arr2;
findDiff(first, second);
