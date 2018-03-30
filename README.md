# _Beep Boop Converter_

#### _A webpage with the user input window to collect user input, convert input into string based on specific rules and return that string._

#### By _**Eva Antipina**_

## Description

_This webpage takes following user input: number, user's name, and lets user to choose the order of the number conversion. The program accept user input only if number contains digits, otherwise it throws an alert message: "Please enter an integer number!" and user name is not an empty string, otherwise it throws an alert message: "Please enter your name!". Then the program returns a range of numbers from 0 to the chosen number with the following exceptions:_

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

* _Program replaces numbers divisible by 3 with "I'm sorry, [user name]. I'm afraid I can't do that."_
  * _Example Input: 1_
  * _Example Output: ["I'm sorry, [user name]. I'm afraid I can't do that."]_

* _If a number contains both 0 and 1, program replaces the whole number with "Boop!"_
  * _Example Input: 10_
  * _Example Output: ["Boop!"]_

* _If a number contains 0 and/or 1, and divisible by 3, program replaces the whole number with "I'm sorry, [user name]. I'm afraid I can't do that."_
  * _Example Input: 180_
  * _Example Output: ["I'm sorry, [user name]. I'm afraid I can't do that."]_

* _If a user checked "From 0 to the chosen number" radio button then program returns numbers in a range from 0 to chosen number with exceptions listed above_
  * _Example Input:_
    * _4_
    * _Dave_
    * _From 0 to the chosen number: checked_
  * _Example Output: [Beep! Boop! 2. I'm sorry, Dave. I'm afraid I can't do that. 4.]_

* _If a user checked "In reversed order" radio button then program returns numbers in a range from chosen number to 0 with exceptions listed above_
  * _Example Input:_
    * _5_
    * _John_
    * _In reversed order: checked_
  * _Example Output: [5. 4. I'm sorry, John. I'm afraid I can't do that. 2. Boop! Beep!]_

* _Program throws an alert message "Please enter an integer number!" if user input contains an empty string._
  * _Example Input: ""_
  * _Example Output: ["Please enter an integer number!"]_

* _Program throws an alert message "Please enter an integer number!" if user input doesn't contain digits (user input contains only letters)._
  * _Example Input: a_
  * _Example Output: ["Please enter an integer number!"]_

* _Program throws an alert message "Please enter an integer number!" if user input contains letters or other signs among the digits._
  * _Example Input: 7i_
  * _Example Output: ["Please enter an integer number!"]_

* _Program throws an alert message "Please enter your name!" if user input at name window is empty string._
  * _Example Input: ""_
  * _Example Output: ["Please enter your name!"]_

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
