// author: Neosha Narayanan

var express = require('express');
var app     = express();

var decision_tree2 = require('./decision_tree_2.js');

console.log(decision_tree2);

// configure express to serve static files from public directory
// ------------------------------------------------------------------
app.use(express.static('public/brandi')); // allows you to denote folder from which you can serve static files


// allow Cross-Origin Resource Sharing (CORS)
var cors = require('cors');
app.use(cors());


// list posts
app.get('/data/:sex/:fare/:age', function(req, res){     

    //res.send(db.get('posts').value());

    var sex  = req.params.sex;
    var fare = req.params.fare;
    var age = req.params.age;
    var Pclass = decision_tree2.decideClass(fare);

    console.log(sex);
    console.log(fare);
    console.log(age);
    console.log(Pclass);

    var passenger = {
        "Pclass": Pclass,
        "Sex": sex,
        "Age": age,
        "SibSp": 1,
        "Parch": 0,
        "Fare": fare,
      };
    

    // sends an error instead of a sex if the user has not inputted a viable sex
    var survival;
    if(sex === "option 1" || age < 0 || fare < 0){
        survival = "error";
    }else{
        survival = decision_tree2.predictSurvival(passenger); // use decision tree if all parameters are viable
    }
    console.log(survival);

    var message;

    var deathMessage = "Sorry, you would have died.";
    var surviveMessage = "Congrats, you would have survived the sinking of the Titanic!";

    var errorMessage = "Please try again. You didn't enter the information properly.";

    if(survival === 0){
        message = deathMessage;
        }else if(survival === 1){
            message = surviveMessage;
        }else if(survival === "error"){
            message = errorMessage;
        }

    res.send(message);
});

var port = 3000;
app.listen(port, function(){
    console.log('Server running on port: ' + port);
});
