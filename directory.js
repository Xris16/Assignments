directory = [
   [ "NAME", "ADDRESS", "AGE"],
   [ "Chris", "Via Viento", "21"],
   [ "James", "Nectane", "46"],
   [ "Patricia", "Lincoln", "41"],
   [ "Nima", "Fullerton", "26"],
   [ "Rocko", "Via Viento", "5"],
   [ "Heidi", "Via Viento", "9"],
   [ "OJ" , "Prison", "50"],
   [ "Frank", "Candy Cane", "24"],
   [ "Troy", "Greece", "100"],
   [ "Haley", "Comet", "86"]
];

function listDirectory (directory) {
    if ( directory === null || directory === undefined){
        console.log("The Directory was either null or undefine");
        return;
    }
    for (i = 0; i <= 10; i+=1) {
        console.log(directory[i][0] + " " + directory[i][2]);
    }
}

listDirectory(directory);


