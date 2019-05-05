
var real_survivals = [];
training_data.forEach(function(trainPassenger){
    var real_survival = trainPassenger.Survived;
    real_survivals.push(real_survival);
});

//Compare survivals and real_survivals

var l1 = survivals.length;
var l2 = real_survivals.length;

// go through each item in survivals and real_survivals
var num_inaccuracies = 0;
if (l1 === l2){
    survivals.forEach(function(boolean, index){
        var predicted = boolean;
        var actual = real_survivals[index];

        if(predicted != actual){
            num_inaccuracies += 1;
        }
    })

    var percent_inaccuracy = num_inaccuracies/l1;
    console.log("percent_inaccuracy = " + JSON.stringify(percent_inaccuracy));
}


// ==== find largest and smallest fare ======
var max = 0;
    fares.forEach(function(fare){
        if (fare > max){
            max = fare;
        }
    });
    console.log("max = " + JSON.stringify(max));

    var min = 512;
    fares.forEach(function(fare){
        if(fare < min){
            min = fare;
        }
    });