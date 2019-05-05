var fare=1000//what the person inputs
//average first class ticket $2,131.61
//average second class ticket $528.51
//average third class ticket $341.21
//cheapest ticket $99.22
var fareclass = function(fare){
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

var myclass = fareclass(1000);
console.log("myclass = " + JSON.stringify(myclass));

module.exports = fareclass;
