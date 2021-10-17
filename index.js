function map(array, callback) {
  const result = [];
  for (const element of array) {
    let newElement = callback(element);
    result.push(newElement);
  }
  return result;
}

//This took me a while to figure out. Adding comments for notes later...
function reduce(array, callback, startingValue) {
//If a startingValue is present, "memo" will be equal that...
//...otherwise it will equal the first element of array...
  let memo = (!!startingValue) ? startingValue : array[0];
//"i" is defined here so that when we enter the loop...
//...we start from array[0] if startingValue is present...
//...and array[1] if not.

  let i = (!!startingValue) ? 0 : 1;
//This is all done to prevent the function calls that evaluate...
//...truthiness of all values from catching a false startingValue...
//...which would occur if we were to set it to a default value of 0.

  for (; i < array.length; i++) {
    memo = callback(array[i], memo)
  }
  return memo;
}
