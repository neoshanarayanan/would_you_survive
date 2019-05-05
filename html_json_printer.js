//author: Neosha Narayanan


// translates js file to html to put in table
// we need to have our training data in a data table so that people can look at the real data

// however this requires for each piece of data to be in html
// this will print out our js data into the console as html so we can copy and paste the html into index.html

var data = require('./train.js');

var firstLine = '<table class="table table-bordered" id="dataTable" width="100%" cellspacing="0"></table>';

console.log(firstLine);

data.forEach(function(item){
    console.log(item);
});

// headers and footers are given by thead and tfoot before all the data entries
// all data entries are encapsulated by <tbody></tbody>


// there shall be 5 categories: Name, Sex, Age, Fare, and Class

// use single quotes 