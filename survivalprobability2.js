//author: Jess Arbuckle

var list = require('./correcteddata.json');


var fare=100
var parch=1
var age=20
var sex="female"
var pclass=3



function giveresult(fare, parch, age, sex, pclass){
    person=[]
  
    persons=[]
    list.data.forEach(function(item){
        if(fare>1484){
              if(item.Fare>fare/24.74-7){
                if(item.Parch>=parch-1 && item.Parch>=parch+1){
                    if(item.Age<=age+7 && item.Age>age-7){
                      if(item.Sex==sex){
                           if(item.Pclass==pclass){
                                 person.push(item)
                                 }
 
                           }
                 }
             }
       }
      
           }else{
           if(item.Fare<=fare/24.74+7 && item.Fare>fare/24.74-7){
                   if(item.Parch>=parch-1 && item.Parch>=parch+1){
                         if(item.Age<=age+7 && item.Age>age-7){
                           if(item.Sex==sex){
                                if(item.Pclass==pclass){
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
var result = giveresult(fare, parch, age, sex, pclass);
console.log("result = " + JSON.stringify(result));
