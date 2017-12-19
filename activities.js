let activities = [
    [ "Activity", "Hour", "% of Day"],
    [ "Sleeping", 8],
    [ "Working", 8],
    [ "School", 6],
    [ "Eating", 2]
]

function findPercent (activities) {
    for ( i = 1; i <= activities.length -1; i+=1){
       let a = activities [i][1];
       percentage = (a / 24) * 100;
       activities[i][2] = Math.round(percentage) + "%";
    }
}

findPercent(activities);
console.log(activities);
