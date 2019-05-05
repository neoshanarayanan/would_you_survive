var training_data = require('./train.js');
var training_data_again = require('./train.js');

var training_data_2 = require('./train.js');
training_data_2.forEach(function(item){
    delete item.Survived;
});

console.log(training_data_2);



// evaluate training data

var DecisionTree = require('decision-tree');

var class_name = "Survived";

var features = ["Sex", "Pclass", "Age", "Fare", "Parch", "SibSp", "Cabin"];
var dt = new DecisionTree(training_data, class_name, features);

training_data_2.forEach(function(passenger){
    var survived = dt.predict(passenger);

});





module.exports = training_data_2;