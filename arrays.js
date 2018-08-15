var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


var array = ["blue", "green", "yellow", "red"];
var element = "orange";

function addElementToBeginningOfArray(array, element){
  var newArray = array;
  newArray = newArray.unshift(element);
  return newArray;
  }


function destructivelyAddElementToBeginningOfArray(array, element){
  array = array.unshift(element);
  return array;
}


function addElementToEndOfArray(array, element){
  return [...array, element];
  }


function destructivelyAddElementToEndOfArray(array, element){
  array = array.push(element);
  return array;
}

function accessElementInArray(array, index){
  return (array[index]);
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return(array);
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop();
  
}
  
function removeElementFromEndOfArray(array){
  return array.slice(0,array.length - 1);

  
  
  


https://learn.co/tracks/bootcamp-prep/javascript-fundamentals/data-structures/javascript-arrays#

  
  
  
  
}