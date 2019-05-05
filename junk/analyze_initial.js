var json = require('./train.json');

var data = json.data;


function passengerList(){
    var passengerList = [];
    data.forEach(function(passenger){
        passengerList.push(passenger);
    });

    return passengerList;
};

var passengers = passengerList();
var numpassengers = passengers.length;

function overallSurvivalProbability(){

    var totalSurvived = 0;

    passengers.forEach(function(passenger){
        if (passenger.Survived === 1){
            totalSurvived += 1;
        };
    });

    var survivalProbability = totalSurvived/numpassengers;
    return survivalProbability;
};




function genderProbability(){
    var numfem = 0;
    var numsurvived = 0;
    passengers.forEach(function(passenger){
        if (passenger.Sex === "female"){
            numfem += 1;

            if (passenger.Survived === 1){
                numsurvived += 1;
            };
        };
    });

    var femaleSurvival = numsurvived/numfem;

    return femaleSurvival;
};



function classProbability(classnum){
    var numInClass = 0;
    var classSurvived = 0;

    passengers.forEach(function(passenger){
        if(passenger.Pclass === classnum){
            numInClass += 1;

            if (passenger.Survived === 1){
                classSurvived += 1;
            };
        };
    });

    var probability = classSurvived/numInClass;

    return probability;
};

function probabilityByClass(){
    var classes = [1, 2, 3];

    classes.forEach(function(num){
        var probability = classProbability(num);
        console.log("the probability of someone surviving from class " + JSON.stringify(num) + " is " + JSON.stringify(probability));
    });
}





console.log(overallSurvivalProbability());

console.log(genderProbability());

console.log(classProbability(3));

probabilityByClass(); 