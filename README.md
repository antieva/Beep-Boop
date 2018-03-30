# _Beep Boop Converter_

#### _A webpage with the user input window to collect user input, convert input into string based on specific rules and return that string._

#### By _**Eva Antipina**_

## Description

_This webpage takes user input only if it contains digits, otherwise it throws an alert message: "Please enter an integer number.", then returns a range of numbers from 0 to the chosen number with the following exceptions:_

* _Numbers that contain a 0 are replaced (all digits) with "Beep!"_
* _Numbers that contain a 1 are replaced (all digits) with "Boop!"_
* _Numbers divisible by 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that."_


## Specifications

* _Program replaces 0 with "Beep!"_
  * _Example Input: 0_
  * _Example Output: ["Beep!"]_

* _Program replaces 1 with "Boop!"_
  * _Example Input: 1_
  * _Example Output: ["Boop!"]_

* _Program replaces numbers divisible by 3 with "I'm sorry, Dave. I'm afraid I can't do that."_
  * _Example Input: 1_
  * _Example Output: ["I'm sorry, Dave. I'm afraid I can't do that."]_

* _If a number contains both 0 and 1, program replaces the whole number with "Boop!"_
  * _Example Input: 10_
  * _Example Output: ["Boop!"]_

* _If a number contains 0 and/or 1, and divisible by 3, program replaces the whole number with "I'm sorry, Dave. I'm afraid I can't do that."_
  * _Example Input: 180_
  * _Example Output: ["I'm sorry, Dave. I'm afraid I can't do that."]_

* _Program throws alert message "Please enter an integer number." if user input contains an empty string._
  * _Example Input: ""_
  * _Example Output: ["Please enter an integer number."]_

* _Program throws alert message "Please enter an integer number." if user input doesn't contain digits (user input contains only letters)._
  * _Example Input: a_
  * _Example Output: ["Please enter an integer number."]_

* _Program throws alert message "Please enter an integer number." if user input contains letters or other signs among the digits._
  * _Example Input: 7i_
  * _Example Output: ["Please enter an integer number."]_

## Setup/Installation Requirements

* _Clone this repository_
* _Find index.html file in the repository_
* _Open index.html file with your web browser of choice._


## Known Bugs

_None_

## Support and contact details

_If You run into any issues or have questions, ideas, concerns or would like to make a contribution to the code, please contact Eva Antipina via email: eva.antipina@gmail.com.}_

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _Bootstrap_
* _jQuery_

### License

_Not licensed_

Copyright (c) 2018 **_Eva Antipina_**
