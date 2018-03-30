// Business logic.

// Function takes integer as a parameter and returns string.
var beepOrBoop = function(number) {
  var result = "";
  for (var i = 0; i <= number; i++) {
    if (i % 3 === 0 && i != 0) {
      result = result.concat("I'm sorry, Dave. I'm afraid I can't do that. ");
      continue;
    }
    if (i.toString().includes("1")){
      result = result.concat("Boop! ");
      continue;
    }
    if (i.toString().includes("0")) {
      result = result.concat("Beep! ");
      continue;
    }
    result += i.toString();
    result = result.concat(". ");
  }
  return result;
};

// The same function with reversed output.
var beepOrBoopReverse = function(number) {
  var result = "";
  for (var i = number; i >= 0; i--) {
    if (i % 3 === 0 && i != 0) {
      result = result.concat("I'm sorry, Dave. I'm afraid I can't do that. ");
      continue;
    }
    if (i.toString().includes("1")){
      result = result.concat("Boop! ");
      continue;
    }
    if (i.toString().includes("0")) {
      result = result.concat("Beep! ");
      continue;
    }
    result += i.toString();
    result = result.concat(". ");
  }
  return result;
};

// Function to check if the given string is numerical.
var validate = function(string) {
  return /^\d+$/.test(string);
};


// UI logic.
$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    $(".output").hide();
    var userInput = $("#number").val();
    var order = $("input:radio[name=order]:checked").val();

    var validInput = validate(userInput);

    if (!validInput) {
      alert("Please enter an integer number!");
    } else {
        if (order === "1") {
          var output = beepOrBoop(parseInt(userInput));
          $(".result").text(output);
          $(".output").show();
        } else if (order === "2") {
            var output = beepOrBoopReverse(parseInt(userInput));
            $(".result").text(output);
            $(".output").show();
      }
    }
  });
});
