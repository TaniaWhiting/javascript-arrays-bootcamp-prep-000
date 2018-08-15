var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var candyString = "foo";

function addElementToBeginningOfArray(chocolateBars, candyString){
  return [candyString, ...chocolateBars];
  }


function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString){
  chocolateBars.unshift(candyString);
  return chocolateBars;
}


function addElementToEndOfArray(chocolateBars, candyString){
  return [...chocolateBars, candyString];
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