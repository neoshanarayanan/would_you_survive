list = require('./correcteddata.json')



var functions = {};


functions.giveResult = function(fare, parch, sex, Pclass, age){


    person=[]
    persons=[]
    list.data.forEach(function(item){
        if(fare>1484){
            if(item.Fare>fare/24.74-5){
                if(item.Parch>=parch-1 && item.Parch<=parch+1){
                    if(item.Age<=age+5 && item.Age>age-5){
                        if(item.Sex===sex){
                            if(item.Pclass==Pclass){
                                person.push(item)
                                }

                            }
                }
            }
    }

     }else{
     if(item.Fare<=fare/24.74+5 && item.Fare>fare/24.74-5){
             if(item.Parch<=parch+1 && item.Parch>=parch-1){
                   if(item.Age<=age+5 && item.Age>age-5){
                     if(item.Sex===sex){
                          if(item.Pclass==Pclass){
                                person.push(item)
                                }

                          }
                }
            }
  }
    }
    })
    person.forEach(function(item){
        if(item.Survived==1){
            persons.push(item)
        }
    })
    personnum=person.length
    personsnum=persons.length
    if(person.length==0){console.log("Sorry there was no one in the data with your attributes")}
    else{
        console.log("percent survive random person="+personsnum/personnum)
    }

    return personsnum/personnum;

}

module.exports = functions;


