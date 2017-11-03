let arr1 = [1,2,3,4,5];
let pos = 2;

function deletePos(arr1, pos){
    for (let i = pos; i < arr1.length; i++){
        arr1[i] = arr1[i + 1];
    }
    arr1[arr1.length - 1] = 0;
    arr1.length = arr1.length -1;
}

deletePos(arr1, pos);
console.log(arr1);
