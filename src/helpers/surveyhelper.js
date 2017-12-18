const surveyHelper={

    addChoice: (survey, newChoice)=>[...survey, {
        id: Math.floor((Math.random()*10000 +1)),
        color: newChoice,
        vote:0,
        result:0
    }],

    updateSurvey: (survey, id, updatedresult)=>
        survey.map(t=>
        t.id !== id
        ? t
        :{
        ...t,
        vote : updatedresult,
        }),
    

    performPercentage:(survey,sum)=>
        survey.map(t=>
            sum === 0
            ? t
            :{
            ...t,
            result : ((t.vote*100)/sum).toFixed(2),
            })
    


    /*toggleChoice: (survey,id)=>{
        survey.map(t=>
            t.id !== id
            ? t
            :{
            ...t,
            })
    }*/
}
export {surveyHelper};


/*function percent(addChoice)
{
 var i, sum=0;
 var newarray = new Array();
 
sum=array.reduce(add, 0);

function add(a, b) {
    return a + b;
}
 
 for (i=0; i<array.length; i++)
  newarray[i] = ((array[i] * 100) / sum).toFixed(2);
 
 return newarray;
}
 
var store =[...survey, {
    id: Math.floor((Math.random()*10000 +1)),
    color: newChoice,
}];
 
store = percent(store);
 
for (var i=0; i<store.length; i++)
{
 document.write(store[i] + "\n");
}*/