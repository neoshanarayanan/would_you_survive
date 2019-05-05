var training_data_2 = require('./train.js');
training_data_2.forEach(function(item){
    delete item.Survived;
});


module.exports = training_data_2;