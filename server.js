// Step 3: Require/Loads the express module
const express = require('express');
// body-parser is used to read data payload from the http request body
const bodyParser = require('body-parser'); 
//  path is used to set default directories for MVC and also for the static files
const path = require('path'); 
// include the defined package


// Step 4: Creates our express server
const app = express();

//Serves static files inside the public folder
app.use(express.static(path.join(__dirname + '/public')));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));

//Sets a basic route index.hbs when website initially starts and when home is clicked from the nav bar or whenever a process needs to go back to home 
app.get('/', (req, res) => {
    res.render('index.hbs');
})


// Step 5: Start HTTP Server on a port number 3000
// This will create a web service for your own project
const port = 3000;
app.listen(port, () => console.log(`App listening to port ${port}`));

function cipherselect(inputnumber) {
  var cipherinput = inputnumber;
  
  return cipherinput;
}

function coder(cipherinput) {
  var cipher = cipherinput;
  if (cipher == 1)
    CaesarEncode();
}

//Beta only includes Encode Caesar Function for now
      function CaesarEncode() {
        //Get the values of the input and the shift key
        var text = document.getElementById("encodeinput").value + "";
        var key = document.getElementById("encodekeyinput").value;
        //testing if it works
        console.log(text);
        console.log(key);
        //Shift key can go negative. This is to make sure it is equal to the normal positive shift key
        key = key * -1;
        if (key * -1 > 0) {
          key = 26 - key;
        }
        //splitting the characters into an array
        const arr = text.split("");
        console.log(arr);
        //defining the alphabet that the input array will be compared to
        var loweralphabet = [
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
          "m",
          "n",
          "o",
          "p",
          "q",
          "r",
          "s",
          "t",
          "u",
          "v",
          "w",
          "x",
          "y",
          "z",
        ];
        var upperalphabet = [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
        ];
        
        //bool variable to check if the character is a letter or special character
        var check = false;
        //The variable to be outputted
        var strtext = "";

        for (var i = 0; i < arr.length; i++) {
          //reset the check variable back to false
          check = false;
          //checks if the array character is an uppercase letter, and if it is, substitutes another letter by adding the shift key.
          for (var j = 0; j < upperalphabet.length; j = j + 1) {
            if (arr[i] == upperalphabet[j]) {
              //modulo by 26 so that if j + key is more than the alphabet array length, then it will go back to index zero.
              strtext = strtext + upperalphabet[(j + key) % 26];
              //if it is equal to the uppercase letter, check will be true
              check = true;
            }
          }
          //if character has not been identified as an uppercase letter, then it will start to browse through the lowercase letters, following the same tactic.
          if (check == false) {
            for (var j = 0; j < loweralphabet.length; j = j + 1) {
              if (arr[i] == loweralphabet[j]) {
                strtext = strtext + loweralphabet[(j + key) % 26];
                check = true;
              }
            }
          }
          //if it is still not identified as either lowercase or uppercase letter, then it is deemed a special character or a space, and is added into the string as itself.
          if (check == false) {
            strtext = strtext + arr[i];
          }
        }
        //outputs the string
        console.log(strtext);
        document.getElementById("encodeoutput").innerHTML = strtext;
      }