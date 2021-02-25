//insert your pseudocode below
/*
here
*/

/*create a list of numbers
sort the numbers by ascending order
print the numbers


//insert your code below
/*var num;

function listsGetSortCompare(type, direction) {
  var compareFuncs = {
    "NUMERIC": function(a, b) {
        return Number(a) - Number(b); },
    "TEXT": function(a, b) {
        return a.toString() > b.toString() ? 1 : -1; },
    "IGNORE_CASE": function(a, b) {
        return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1; },
  };
  var compare = compareFuncs[type];
  return function(a, b) { return compare(a, b) * direction; }
}


num = [5, 4, 3];
window.alert(num.slice().sort(listsGetSortCompare("NUMERIC", 1)));*/