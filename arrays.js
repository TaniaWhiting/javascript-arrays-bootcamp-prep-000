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
  chocolateBars.push(candyString);
  return chocolateBars;
}

function accessElementInArray(chocolateBars, index){
  return (chocolateBars[2]);
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift();
  return(chocolateBars);
}

function removeElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  return chocolateBars.pop();
  
}
  
function removeElementFromEndOfArray(array){
  return array.slice(0,array.length - 1);

  
  
  


https://learn.co/tracks/bootcamp-prep/javascript-fundamentals/data-structures/javascript-arrays#

  
  
  
  
}