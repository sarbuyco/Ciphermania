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
app.use(express.static(path.join(__dirname, 'public')));
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

function CaesarEncode() {
  var code = document.getElementById("encodeinput");
  var key = document.getElementById("encodekeyinput").value;
  console.log(code);
  console.log(key);
  if (key < 0) {
    key = 26 + key;
  }
  console.log(code)
  const arr = code.split("");
  
  var loweralphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 
                  'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var upperalphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 
                  'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  var check = false;
  var strcode = "";
  
  for (var i = 0; i < arr.length; i++) {
    check = false;
    for (var j = 0; j < upperalphabet.length; j++) {
      if (arr[i] == upperalphabet[j]) {
      strcode = strcode + upperalphabet[(j+key) % 26]
      check = true;
      }
    }
    if (check == false) {
      for (var j = 0; j < loweralphabet.length; j++) {
      if (arr[i] == loweralphabet[j]) {
      strcode = strcode + loweralphabet[(j+key) % 26]
      check = true;
      }
    }
    }
    
    if (check == false) {
      strcode = strcode + arr[i]
    }
  }
  console.log(strcode);
  document.getElementById("encodeoutput").innerHTML = strcode;
}