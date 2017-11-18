activities = [
    [ "Activity", "Hour", "% of Day"],
    [ "Sleeping", 8],
    [ "Working", 8],
    [ "School", 6],
    [ "Eating", 2]
]

function percent (activities) {
    for ( i = 1; i <= 4; i+=1){
       a = activities [i][1];
       percentage = (a / 24) * 100;
       activities[i][2] = Math.round(percentage);
    }
}

function listActivity (activities){
    for (i = 0; i <= 4; i+=1){
        console.log(activities[i][0] + " " + activities[i][2]);
    }
}

percent(activities);
listActivity(activities);

