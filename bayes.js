// author: Jess Arbuckle


list = require('./correcteddata.json')

survive=[]
die=[]
list.data.forEach(function(item){if(item.Survived==1){
    survive.push(item)
}
else{die.push(item)
}})

survnum=survive.length
dienum=die.legth
totalnum=list.data.length
console.log("percent survive=" +survnum/891)

class1=[]
class2=[]
class3=[]
list.data.forEach(function(item){
    if(item.Pclass==1){
        class1.push(item)
    }if(item.Pclass==2){
        class2.push(item)
    }if(item.Pclass==3){
        class3.push(item)
    }
})

c1num=class1.length
c2num=class2.length
c3num=class3.length

class1s=[]
class2s=[]
class3s=[]
list.data.forEach(function(item){
    if(item.Pclass==1 && item.Survived==1){
        class1s.push(item)
    }if(item.Pclass==2 && item.Survived==1){
        class2s.push(item)
    }if(item.Pclass==3 && item.Survived==1){
        class3s.push(item)
    }
})

c1nums=class1s.length
c2nums=class2s.length
c3nums=class3s.length
//console.log("prob surv if c1="+c1nums/survnum*survnum/891/(c1num/891))
console.log("percent survive c1=" +c1nums/c1num)
console.log("percent survive c2=" +c2nums/c2num)
console.log("percent survive c3=" +c3nums/c3num)

fem=[]
mal=[]
list.data.forEach(function(item){
    if(item.Sex=='female'){
        fem.push(item)
    }if(item.Sex=='male'){
        mal.push(item)
}})

femnum=fem.length
malnum=mal.length

fems=[]
mals=[]
list.data.forEach(function(item){
    if(item.Sex=='female' && item.Survived==1){
        fems.push(item)
    }if(item.Sex=='male' && item.Survived==1){
        mals.push(item)
}})
femnums=fems.length
malnums=mals.length

console.log("percent survive female=" +femnums/femnum)
console.log("percent survive male=" +malnums/malnum)

age10=[]
age20=[]
age30=[]
age40=[]
age50=[]
age60=[]
ageabove=[]
agenone=[]
list.data.forEach(function(item){
    if(item.Age<=10){
        age10.push(item)
    }if(item.Age<=20 && item.Age>10){
        age20.push(item)
    }if(item.Age<=30 && item.Age>20){
        age30.push(item)
    }if(item.Age<=40 && item.Age>30){
        age40.push(item)
    }if(item.Age<=50 && item.Age>40){
        age50.push(item)
    }if(item.Age<=60 && item.Age>50){
        age60.push(item)
    }if(item.Age>60){
        ageabove.push(item)
    }if(item.Age=='none'){
        agenone.push(item)
    }
})
age10num=age10.length
age20num=age20.length
age30num=age30.length
age40num=age40.length
age50num=age50.length
age60num=age60.length
ageabovenum=ageabove.length
agenonenum=agenone.length

age10s=[]
age20s=[]
age30s=[]
age40s=[]
age50s=[]
age60s=[]
ageaboves=[]
agenones=[]
list.data.forEach(function(item){
    if(item.Age<=10 && item.Survived==1){
        age10s.push(item)
    }if(item.Age<=20 && item.Age>10 && item.Survived==1){
        age20s.push(item)
    }if(item.Age<=30 && item.Age>20 && item.Survived==1){
        age30s.push(item)
    }if(item.Age<=40 && item.Age>30 && item.Survived==1){
        age40s.push(item)
    }if(item.Age<=50 && item.Age>40 && item.Survived==1){
        age50s.push(item)
    }if(item.Age<=60 && item.Age>50 && item.Survived==1){
        age60s.push(item)
    }if(item.Age>60 && item.Survived==1){
        ageaboves.push(item)
    }if(item.Age=='none' && item.Survived==1){
        agenones.push(item)
    }
})

age10nums=age10s.length
age20nums=age20s.length
age30nums=age30s.length
age40nums=age40s.length
age50nums=age50s.length
age60nums=age60s.length
ageabovenums=ageaboves.length
agenonenums=agenones.length

console.log("percent survive age 10 & less=" +age10nums/age10num)
console.log("percent survive age 11-20s=" +age20nums/age20num)
console.log("percent survive age 21-30=" +age30nums/age30num)
console.log("percent survive age 31-40=" +age40nums/age40num)
console.log("percent survive age 41-50=" +age50nums/age50num)
console.log("percent survive age 51-60=" +age60nums/age60num)
console.log("percent survive age above 60=" +ageabovenums/ageabovenum)
console.log("percent survive age 'none'=" +agenonenums/agenonenum)
sibsp0=[]
sibsp1=[]
sibspmore=[]
list.data.forEach(function(item){
    if(item.SibSp==0){
        sibsp0.push(item)
    }if(item.SibSp==1){
        sibsp1.push(item)
    }if(item.SibSp>1){
        sibspmore.push(item)
    }
})

sibsp0num=sibsp0.length
sibsp1num=sibsp1.length
sibspmorenum=sibspmore.length

sibsp0s=[]
sibsp1s=[]
sibspmores=[]
list.data.forEach(function(item){
    if(item.SibSp==0 && item.Survived==1){
        sibsp0s.push(item)
    }if(item.SibSp==1 && item.Survived==1){
        sibsp1s.push(item)
    }if(item.SibSp>1 && item.Survived==1){
        sibspmores.push(item)
    }
})

sibsp0nums=sibsp0s.length
sibsp1nums=sibsp1s.length
sibspmorenums=sibspmores.length
console.log("percent survive sibsp0=" +sibsp0nums/sibsp0num)
console.log("percent survive sibsp1=" +sibsp1nums/sibsp1num)
console.log("percent survive sibspmore=" +sibspmorenums/sibspmorenum)

parch0=[]
parch1=[]
parchmore=[]
list.data.forEach(function(item){
    if(item.Parch==0){
        parch0.push(item)
    }if(item.Parch==1){
        parch1.push(item)
    }if(item.Parch>1){
        parchmore.push(item)
    }
})

parch0num=parch0.length
parch1num=parch1.length
parchmorenum=parchmore.length

parch0s=[]
parch1s=[]
parchmores=[]
list.data.forEach(function(item){
    if(item.Parch==0 && item.Survived==1){
        parch0s.push(item)
    }if(item.Parch==1 && item.Survived==1){
        parch1s.push(item)
    }if(item.Parch>1 && item.Survived==1){
        parchmores.push(item)
    }
})

parch0nums=parch0s.length
parch1nums=parch1s.length
parchmorenums=parchmores.length

console.log("percent survive parch0=" +parch0nums/parch0num)
console.log("percent survive parch1=" +parch1nums/parch1num)
console.log("percent survive parchmore=" +parchmorenums/parchmorenum)

fare10=[]
fare20=[]
fare30=[]
fare40=[]
fare50=[]
fare60=[]
fareabove=[]
list.data.forEach(function(item){
    if(item.Fare<=10){
        fare10.push(item)
    }if(item.Fare<=20 && item.Fare>10){
        fare20.push(item)
    }if(item.Fare<=30 && item.Fare>20){
        fare30.push(item)
    }if(item.Fare<=40 && item.Fare>30){
        fare40.push(item)
    }if(item.Fare<=50 && item.Fare>40){
        fare50.push(item)
    }if(item.Fare<=60 && item.Fare>50){
        fare60.push(item)
    }if(item.Fare>60){
        fareabove.push(item)
    }
})
fare10num=fare10.length
fare20num=fare20.length
fare30num=fare30.length
fare40num=fare40.length
fare50num=fare50.length
fare60num=fare60.length
fareabovenum=fareabove.length

fare10s=[]
fare20s=[]
fare30s=[]
fare40s=[]
fare50s=[]
fare60s=[]
fareaboves=[]
list.data.forEach(function(item){
    if(item.Fare<=10 && item.Survived==1){
        fare10s.push(item)
    }if(item.Fare<=20 && item.Fare>10 && item.Survived==1){
        fare20s.push(item)
    }if(item.Fare<=30 && item.Fare>20 && item.Survived==1){
        fare30s.push(item)
    }if(item.Fare<=40 && item.Fare>30 && item.Survived==1){
        fare40s.push(item)
    }if(item.Fare<=50 && item.Fare>40 && item.Survived==1){
        fare50s.push(item)
    }if(item.Fare<=60 && item.Fare>50 && item.Survived==1){
        fare60s.push(item)
    }if(item.Fare>60 && item.Survived==1){
        fareaboves.push(item)
    }
})
fare10nums=fare10s.length
fare20nums=fare20s.length
fare30nums=fare30s.length
fare40nums=fare40s.length
fare50nums=fare50s.length
fare60nums=fare60s.length
fareabovenums=fareaboves.length
console.log("percent survive fare 10 & less=" +fare10nums/fare10num)
console.log("percent survive fare 11-20=" +fare20nums/fare20num)
console.log("percent survive fare 21-30=" +fare30nums/fare30num)
console.log("percent survive fare 31-40=" +fare40nums/fare40num)
console.log("percent survive fare 41-50=" +fare50nums/fare50num)
console.log("percent survive fare 51-60=" +fare60nums/fare60num)
console.log("percent survive fare above 60=" +fareabovenums/fareabovenum)

portQ=[]
portS=[]
portC=[]
list.data.forEach(function(item){
    if(item.Embarked=='Q'){
        portQ.push(item)
    }if(item.Embarked=='S'){
        portS.push(item)
    }else{
        portC.push(item)
    }
})

portQnum=portQ.length
portSnum=portS.length
portCnum=portC.length

portQs=[]
portSs=[]
portCs=[]
list.data.forEach(function(item){
    if(item.Embarked=='Q'&& item.Survived==1){
        portQs.push(item)
    }if(item.Embarked=='S'&& item.Survived==1){
        portSs.push(item)
    }if(item.Embarked=='C' && item.Survived==1){
        portCs.push(item)
    }
})

portQnums=portQs.length
portSnums=portSs.length
portCnums=portCs.length
console.log("percent survive portS=" +portSnums/portSnum)
console.log("percent survive portQ=" +portQnums/portQnum)
console.log("percent survive portC=" +portCnums/portCnum)

person=[]
persons=[]
list.data.forEach(function(item){
     //if(item.Embarked=='Q'){
        if(item.Fare<=30 && item.Fare>20){
            if(item.Parch==0){
                if(item.SibSp==0){
                   if(item.Age<=30 && item.Age>10){
                        if(item.Sex=='male'){
                            if(item.Pclass==2){
                                person.push(item)
                                }

                            }
                        }
                    }
                }
            }
  // }
})
person.forEach(function(item){
    if(item.Survived==1){
        persons.push(item)
    }
})
personnum=person.length
personsnum=persons.length
// console.log(list.data)
console.log("percent survive random person="+personsnum/personnum)
// console.log(person)