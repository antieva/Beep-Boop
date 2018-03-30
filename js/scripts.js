// Business logic

// function takes integer as a parameter and returns string
var beepOrBoop = function(number){
  var result = "";
  for (var i = 0; i <= number; i ++){
    if (i % 3 === 0 && i != 0){
      result = result.concat("I'm sorry, Dave. I'm afraid I can't do that. ");
    } else if (/1/.test(i)){
      result = result.concat("Boop! ");
    } else if (/0/.test(i)) {
      result = result.concat("Beep! ");
    } else {
      result += i;
      result = result.concat(", ");
    }
  }
  return result;
}
