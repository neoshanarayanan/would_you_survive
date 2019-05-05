//author: Neosha Narayanan


// translates js file to html to put in table
// we need to have our training data in a data table so that people can look at the real data

// however this requires for each piece of data to be in html
// this will print out our js data into the console as html so we can copy and paste the html into index.html

var data = require('./train.js');

var firstLine = '<table class="table table-bordered" id="dataTable" width="100%" cellspacing="0"></table>';


// headers and footers are given by thead and tfoot before all the data entries
// all data entries are encapsulated by <tbody></tbody>


// there shall be 6 categories: Name, Sex, Age, Fare, Class, and Survived



var allEntries = '';
// construct html code as concatenated strings
data.forEach(function(passenger){
    var name = passenger.Name;
    var sex = passenger.Sex;
    var age = passenger.Age;
    var fare = passenger.Fare;
    var Pclass = passenger.Pclass;
    var survived = passenger.Survived;
    var survival;
    if(survived === 0){
        survival = "died";
    }else if(survived ===1){
        survival = "survived";
    } 

    var html1 = '<tr>\n   <td>' + name + '</td>\n';
    var html2 = '   <td>' + sex + '</td>\n';
    var html3 = '   <td>'+ age + '</td>\n';
    var html4 = '   <td>' + fare + '</td>\n';
    var html5 = '   <td>' + Pclass + '</td>\n';
    var html6 = '   <td>' + survival + '</td>\n</tr>\n';

    var finalhtml = html1 + html2 + html3 + html4 + html5 + html6;

    //console.log(finalhtml);
    allEntries = allEntries + finalhtml;
});

console.log(allEntries);