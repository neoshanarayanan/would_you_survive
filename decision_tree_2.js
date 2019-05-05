var DecisionTree = require('decision-tree');

var training_data = require('./train.js');
var testing_data = require('./test.js');
var classdecider = require('./classdecider.js');

var class_name = "Survived";




var functions = {};


// organize fares into categories
functions.organizeFares = function(){
    var fares = [];
    training_data.forEach(function(passenger){
        fares.push(passenger.Fare);
    });

    // data ranges from 0 - 512 dollars fare

    // categorize fare
    training_data.forEach(function(passenger){
        var fare = passenger.Fare;
        var floored = Math.floor(fare);

        var bin; 
        if(fare > 10){
            floored = Math.floor(floored/10);
            bin = floored*10;
        }else{
            bin = floored;
        }
        
        console.log("fare = " + JSON.stringify(fare) + " and bin = " + JSON.stringify(bin));

        passenger.Bin = bin; // set new attribute of passenger as "bin"

    });
    
}

//organizeFares();
// FINDINGS: WHEN USING BINS INSTEAD OF CONTINUOUS FARES, WE SEE A 3% DROP IN DECISION TREE'S ACCURACY
// from 98% to 95%. so we should use fare instead of bins



var features = ["Sex", "Pclass", "Age", "Fare", "Parch"];
var dt = new DecisionTree(training_data, class_name, features);




var survived_list = []
testing_data.forEach(function(passenger){
    var survived = dt.predict(passenger);
    survived_list.push(survived);
});


functions.createPassenger = function(){
    //creates an object
    var newpassenger;
    return newpassenger;
}


functions.predictSurvival = function(newpassenger){ // takes an object
    var survived = dt.predict(newpassenger)
    
    return survived;
};



functions.decideClass = function(fare){
    if(fare<=247.43){
        var classes=["Class1", "Class2", "Class3"]
var classweight=[00311,0,99688] //weight of each element above
var totalweight=eval(classweight.join("+")) //get total weight (in this case, 10)
var weighedclasses=new Array() //new array to hold "weighted" classes
var currentclass=0
while (currentclass<classes.length){ //step through each class[] element
    for (i=0; i<classweight[currentclass]; i++)
        weighedclasses[weighedclasses.length]=classes[currentclass]
    currentclass++
}
var randomnumber=Math.floor(Math.random()*totalweight)
classtype=(weighedclasses[randomnumber])
console.log(classtype)
    }if(fare<=494.86 && fare>247.43){
        var classes=["Class1", "Class2", "Class3"]
var classweight=[0,54748,45251] //weight of each element above
var totalweight=eval(classweight.join("+")) //get total weight (in this case, 10)
var weighedclasses=new Array() //new array to hold "weighted" classes
var currentclass=0
while (currentclass<classes.length){ //step through each class[] element
    for (i=0; i<classweight[currentclass]; i++)
        weighedclasses[weighedclasses.length]=classes[currentclass]
    currentclass++
}
var randomnumber=Math.floor(Math.random()*totalweight)
classtype=(weighedclasses[randomnumber])
console.log(classtype)
    }if(fare<=742.29 && fare>494.86){
        var classes=["Class1", "Class2", "Class3"]
var classweight=[28873,39436,31690] //weight of each element above
var totalweight=eval(classweight.join("+")) //get total weight (in this case, 10)
var weighedclasses=new Array() //new array to hold "weighted" classes
var currentclass=0
while (currentclass<classes.length){ //step through each class[] element
    for (i=0; i<classweight[currentclass]; i++)
        weighedclasses[weighedclasses.length]=classes[currentclass]
    currentclass++
}
var randomnumber=Math.floor(Math.random()*totalweight)
classtype=(weighedclasses[randomnumber])
console.log(classtype)
    }
    if(fare<=989.72 && fare>742.29){
        var classes=["Class1", "Class2", "Class3"]
var classweight=[39655,24138,36207] //weight of each element above
var totalweight=eval(classweight.join("+")) //get total weight (in this case, 10)
var weighedclasses=new Array() //new array to hold "weighted" classes
var currentclass=0
while (currentclass<classes.length){ //step through each class[] element
    for (i=0; i<classweight[currentclass]; i++)
        weighedclasses[weighedclasses.length]=classes[currentclass]
    currentclass++
}
var randomnumber=Math.floor(Math.random()*totalweight)
classtype=(weighedclasses[randomnumber])
console.log(classtype)
    }if(fare<=1237.15 && fare>989.72){
        var classes=["Class1", "Class2", "Class3"]
var classweight=[4375,1875,3750] //weight of each element above
var totalweight=eval(classweight.join("+")) //get total weight (in this case, 10)
var weighedclasses=new Array() //new array to hold "weighted" classes
var currentclass=0
while (currentclass<classes.length){ //step through each class[] element
    for (i=0; i<classweight[currentclass]; i++)
        weighedclasses[weighedclasses.length]=classes[currentclass]
    currentclass++
}
var randomnumber=Math.floor(Math.random()*totalweight)
classtype=(weighedclasses[randomnumber])
console.log(classtype)
    }if(fare<=1484.58 && fare>1237.15){
        var classes=["Class1", "Class2", "Class3"]
var classweight=[81579,0,18421] //weight of each element above
var totalweight=eval(classweight.join("+")) //get total weight (in this case, 10)
var weighedclasses=new Array() //new array to hold "weighted" classes
var currentclass=0
while (currentclass<classes.length){ //step through each class[] element
    for (i=0; i<classweight[currentclass]; i++)
        weighedclasses[weighedclasses.length]=classes[currentclass]
    currentclass++
}
var randomnumber=Math.floor(Math.random()*totalweight)
classtype=(weighedclasses[randomnumber])
console.log(classtype)
    }
    if(fare>=1484.58){
        var classes=["Class1", "Class2", "Class3"]
var classweight=[88524,05737,05737] //weight of each element above
var totalweight=eval(classweight.join("+")) //get total weight (in this case, 10)
var weighedclasses=new Array() //new array to hold "weighted" classes
var currentclass=0
while (currentclass<classes.length){ //step through each class[] element
    for (i=0; i<classweight[currentclass]; i++)
        weighedclasses[weighedclasses.length]=classes[currentclass]
    currentclass++
}
var randomnumber=Math.floor(Math.random()*totalweight)
classtype=(weighedclasses[randomnumber])
console.log(classtype)
    }

    return classtype;
}




var accuracy = dt.evaluate(training_data);
console.log("accuracy = " + JSON.stringify(accuracy)); // accuracy is 98% according to training data

module.exports = functions;