// Business logic.

// Function takes integer and a string and returns a string
var stringWriter = function(num, name) {
  var result = "";
  if (num % 3 === 0 && num != 0) {
    result = "I'm sorry, " + name + ". I'm afraid I can't do that. ";
  } else if (num.toString().includes("1")){
    result = "Boop! ";
  } else if (num.toString().includes("0")) {
    result = "Beep! ";
  } else {
    result += num.toString();
    result = result.concat(". ");
  }
  return result;
};

// Function takes two integers and a string as parameters and returns a string.
var beepOrBoop = function(startNumber,endNumber, name) {
  var result = "";
  if (startNumber < endNumber){
    for (var i = startNumber; i <= endNumber; i++) {
      result += stringWriter(i, name);
    }
    return result;
  } else {
    for (var i = startNumber; i >= endNumber; i--) {
      result += stringWriter(i, name);
    }
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
    var userName = $("#name").val();
    var order = $("input:radio[name=order]:checked").val();

    var validInput = validate(userInput);

    if (!validInput) {
      alert("Please enter an integer number!");
    } else if (!userName) {
        alert("Please enter your name!");
    } else {
        if (order === "1") {
          var output = beepOrBoop(0, parseInt(userInput), userName);
          $(".result").text(output);
          $(".output").show();
        } else {
            var output = beepOrBoop(parseInt(userInput),0, userName);
            $(".result").text(output);
            $(".output").show();
      }
    }
  });
});
