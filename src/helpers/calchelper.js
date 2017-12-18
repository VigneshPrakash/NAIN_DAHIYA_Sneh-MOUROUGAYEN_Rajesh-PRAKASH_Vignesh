
function percent(addChoice)
{
 var i, sum=0;
 var newarray = addChoice;

 
sum=addChoice.reduce(add(newarray[0],newarray[1]), 0);

function add(a, b) {
    return a + b;
}
 
 for (i=0; i<addChoice.length; i++)
  newarray[i] = ((addChoice[i] * 100) / sum).toFixed(2);
 
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
}