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
          "a","b","c","d","e","f","g","h","i","j","k",
          "l","m","n","o","p","q","r","s","t","u","v",
          "w","x","y","z"
        ];
        var upperalphabet = [
          "A","B","C","D","E","F","G","H","I","J","K",
          "L","M","N","O","P","Q","R","S","T","U","V",
          "W","X","Y","Z"
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

function CaesarDecode() {
        //Get the values of the input and the shift key
        var text = document.getElementById("decodeinput").value + "";
        var key = document.getElementById("decodekeyinput").value;
        //testing if it works
        console.log(text);
        console.log(key);
        //26 - key is the new shift key, turning it back to the original text
          key = 26 - key;
        console.log(key);
        //splitting the characters into an array
        const arr = text.split("");
        console.log(arr);
        //defining the alphabet that the input array will be compared to
        var loweralphabet = [
          "a","b","c","d","e","f","g","h","i","j","k",
          "l","m","n","o","p","q","r","s","t","u","v",
          "w","x","y","z"
        ];
        var upperalphabet = [
          "A","B","C","D","E","F","G","H","I","J","K",
          "L","M","N","O","P","Q","R","S","T","U","V",
          "W","X","Y","Z"
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
        document.getElementById("decodeoutput").innerHTML = strtext;
      }

function MorseEncode() {
        //Get the values of the input and the shift key
        var text = document.getElementById("encodeinput").value + "";
        console.log(text);
        //splitting the characters into an array
        const arr = text.split("");
        console.log(arr);
        //defining the alphabet that the input array will be compared to
        var loweralphabet = [
          "a","b","c","d","e","f","g","h","i","j","k",
          "l","m","n","o","p","q","r","s","t","u","v",
          "w","x","y","z"
        ];
        var upperalphabet = [
          "A","B","C","D","E","F","G","H","I","J","K",
          "L","M","N","O","P","Q","R","S","T","U","V",
          "W","X","Y","Z"
        ];
        var specialchars = [
          "1","2","3","4","5","6","7","8","9","0",
          ",",".","!","?","@","&","(",")","'",'"',
          "-","+","=","/",":"
        ];
        //array that will convert it into morse
        var morsealpha = [
          ".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",
          ".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",
          ".--","-..-","-.--","--..",
          ".----", //start of numbers
          "..---","...--","....-",".....","-....","--...","---..","----.","-----",
          "--..--", //start of special charas
          ".-.-.-","-.-.--","..--..",".--.-.",".-...","-.--.","-.--.-",".----.",".-..-.","-....-",".-.-.",
          "-...-","-..-.","---...","/" //space
        ];
        
        //bool variable to check continuously if it's uppercase, lowercase, or a special character.
        var check = false;
        //The variable to be outputted
        var strtext = "";

        for (var i = 0; i < arr.length; i++) {
          //reset the check variable back to false
          check = false;
          //lowercase and uppercase does not change in conversion to morse code; this is for code case sensitivity
          for (var j = 0; j < upperalphabet.length; j = j + 1) {
            if (arr[i] == upperalphabet[j]) {
              //adds the index of morsealpha in replacement of the letter in the arr
              strtext = strtext + morsealpha[j] + " ";
              //if it is equal to the uppercase letter, check will be true
              check = true;
            }
          }
          //if character has not been identified as an uppercase letter, then it will start to browse through the lowercase letters, following the same tactic.
          if (check == false) {
            for (var j = 0; j < loweralphabet.length; j = j + 1) {
              if (arr[i] == loweralphabet[j]) {
                strtext = strtext + morsealpha[j] + " ";
                check = true;
              }
            }
          }
          //if it is still not identified as either lowercase or uppercase letter, then it is courses through the special character array
          if (check == false) {
             for (var j = 0; j < specialchars.length; j = j + 1) {
              if (arr[i] == specialchars[j]) {
                strtext = strtext + morsealpha[26 + j] + " ";
                check = true;
              }
            }
          }
          
          //if a space, adds the slash convert.
          if (arr[i] == " ") {
            strtext = strtext + morsealpha[morsealpha.length - 1] + " ";
          }
        }
        //outputs the string
        console.log(strtext);
        document.getElementById("encodeoutput").innerHTML = strtext;
      }

function MorseDecode() {
        //Get the values of the input and the shift key
        var text = document.getElementById("decodeinput").value + "";
        console.log(text);
        //splitting the characters into an array
        const arr = text.split(" ");
        console.log(arr);
        //defining the alphabet that the input array will be compared to
        var upperalphabet = [
          "A","B","C","D","E","F","G","H","I","J","K",
          "L","M","N","O","P","Q","R","S","T","U","V",
          "W","X","Y","Z"
        ];
        var specialchars = [
          "1","2","3","4","5","6","7","8","9","0",
          ",",".","!","?","@","&","(",")","'",'"',
          "-","+","=","/",":"
        ];
        var morsealpha = [
          ".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",
          ".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",
          ".--","-..-","-.--","--..",
          ".----", //start of numbers
          "..---","...--","....-",".....","-....","--...","---..","----.","-----",
          "--..--", //start of special charas
          ".-.-.-","-.-.--","..--..",".--.-.",".-...","-.--.","-.--.-",".----.",".-..-.","-....-",".-.-.",
          "-...-","-..-.","---...","/" //space
        ];
        
        //bool variable to check continuously if it's uppercase, lowercase, or a special character
        var check = false;
        //The variable to be outputted
        var strtext = "";

        for (var i = 0; i < arr.length; i++) {
          //reset the check variable back to false
          check = false;
          //checks which index value of morsealpha matches the array index
          for (var j = 0; j < morsealpha.length - 26; j = j + 1) {
            if (arr[i] == morsealpha[j]) {
              //replaces the morse code with the actual alphabet
              strtext = strtext + upperalphabet[j];
              //if it is equal to the uppercase letter, check will be true
              check = true;
            }
          }
          //if it is still not identified as either lowercase or uppercase letter, then it is checked if it's a special character or a space
          if (check == false) {
             for (var j = 26; j < morsealpha.length - 1; j = j + 1) {
              if (arr[i] == morsealpha[j]) {
                strtext = strtext + specialchars[j - 26];
                check = true;
              }
            }
          }
          //if arr index is a slash, it is equal to a space in original text
          if (arr[i] == "/") {
            strtext = strtext + " ";
          }
        }
        //outputs the string
        console.log(strtext);
        document.getElementById("decodeoutput").innerHTML = strtext;
      }

function AffineEncode() {
        //Get the values of the input and the shift key
        var text = document.getElementById("encodeinput").value + "";
        var key = document.getElementById("encodekeyinput").value;
        console.log(text);
        const arr = text.split("");
        const passarr = key.split(" ");
        ////input should be two numbers; a slope, and an intercept.
        var slope = Number(passarr[0]);
        var intercept = Number(passarr[1]);
        if (!intercept) {
          alert("Please add an intercept!")
        }
        console.log(arr);
        console.log(slope + intercept);
        //defining the alphabet that the input array will be compared to
        var loweralphabet = [
          "a","b","c","d","e","f","g","h","i","j","k",
          "l","m","n","o","p","q","r","s","t","u","v",
          "w","x","y","z"
        ];
        var upperalphabet = [
          "A","B","C","D","E","F","G","H","I","J","K",
          "L","M","N","O","P","Q","R","S","T","U","V",
          "W","X","Y","Z"
        ];
  
        if (slope % 2 == 0 || slope % 13 == 0 || slope % 26 == 0) {
          alert("Slope (first input) must be coprime to the size of the alphabet. Please try again.")
        }
  
        else {
          //bool variable to check if the character is a letter or special character
          var check = false;
          //The variable to be outputted
          var strtext = "";

          for (var i = 0; i < arr.length; i++) {
            //reset the check variable back to false
            check = false;
            //checks if the array character is an uppercase letter, and if it is, substitutes another letter by calculating change in slope.
            for (var j = 0; j < upperalphabet.length; j = j + 1) {
              if (arr[i] == upperalphabet[j]) {
                //modulo by 26 so that if slope * j + intercept is more than the alphabet array length, then it will go back to index zero.
                strtext = strtext + upperalphabet[(((slope * j) + intercept) % 26)];
                //if it is equal to the uppercase letter, check will be true
                check = true;
              }
            }
            //if character has not been identified as an uppercase letter, then it will start to browse through the lowercase letters, following the same tactic.
            if (check == false) {
              for (var j = 0; j < loweralphabet.length; j = j + 1) {
                if (arr[i] == loweralphabet[j]) {
                  strtext = strtext + loweralphabet[(((slope * j) + intercept) % 26)];
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
}

function AffineDecode() {
        //Get the values of the input and the shift key
        var text = document.getElementById("decodeinput").value + "";
        var key = document.getElementById("decodekeyinput").value;
        console.log(text);
        const arr = text.split("");
        const passarr = key.split(" ");
        //turns the key into singular integers
        var slope = Number(passarr[0]);
        var intercept = Number(passarr[1]);
        console.log(arr);
        console.log(slope + intercept);
        //defining the alphabet that the input array will be compared to
        var loweralphabet = [
          "a","b","c","d","e","f","g","h","i","j","k",
          "l","m","n","o","p","q","r","s","t","u","v",
          "w","x","y","z"
        ];
        var upperalphabet = [
          "A","B","C","D","E","F","G","H","I","J","K",
          "L","M","N","O","P","Q","R","S","T","U","V",
          "W","X","Y","Z"
        ];
  
        if (slope % 2 == 0 || slope % 13 == 0 || slope % 26 == 0) {
          alert("Slope (first input) must be coprime to the size of the alphabet. Please try again.")
        }
  
        else {
          //bool variable to check if the character is a letter or special character
          var check = false;
          //inverse of slope
          var slopeinv = 0;
          var flag = 0;
          //converts lowercase to uppercase
          var lowup = "";
          //The variable to be outputted
          var strtext = "";
        
          for (let i = 0; i < 26; i++) {
            flag = (slope * i) % 26;
         
            //Check if (a*i)%26 == 1,
            //then i will be the multiplicative inverse of a
            if (flag == 1) { 
              slopeinv = i;
            }
          }

          for (var i = 0; i < arr.length; i++) {
            //reset the check variable back to false
            check = false;
            //checks if the array character is an uppercase letter, and if it is, substitutes another letter by calculating change in slope.
            for (var j = 0; j < upperalphabet.length; j = j + 1) {
              if (arr[i] == upperalphabet[j]) {
                //decryption formula slope^-1 (x - intercept) * 26. Added 'A' to bring it in range of ASCII alphabet[ 65-90 | A-Z ]
                strtext = strtext + String.fromCharCode(((slopeinv * ((arr[i].charCodeAt(0)+65 - intercept)) % 26)) + 65);
                //if it is equal to the uppercase letter, check will be true
                check = true;
              }
            }
            //if character has not been identified as an uppercase letter, then it will start to browse through the lowercase letters, following the same tactic.
            if (check == false) {
              for (var j = 0; j < loweralphabet.length; j = j + 1) {
                if (arr[i] == loweralphabet[j]) {
                  lowup = upperalphabet[j];
                  strtext = strtext + String.fromCharCode(((slopeinv * ((lowup.charCodeAt(0)+65 - intercept)) % 26)) + 65);
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
          document.getElementById("decodeoutput").innerHTML = strtext;
      }
}

function BaconEncode() {
        //Get the values of the input and the shift key
        var text = document.getElementById("encodeinput").value + "";
        console.log(text);
        //splitting the characters into an array
        const arr = text.split("");
        console.log(arr);
        //defining the alphabet that the input array will be compared to
        var loweralphabet = [
          "a","b","c","d","e","f","g","h","i","j","k",
          "l","m","n","o","p","q","r","s","t","u","v",
          "w","x","y","z"
        ];
        var upperalphabet = [
          "A","B","C","D","E","F","G","H","I","J","K",
          "L","M","N","O","P","Q","R","S","T","U","V",
          "W","X","Y","Z"
        ];
        //converter
        var baconalpha = [
          "aaaaa","aaaab","aaaba","aaabb","aabaa","aabab","aabba","aabbb","abaaa","abaaa",
          "abaab","ababa","ababb","abbaa","abbab","abbba","abbbb","baaaa","baaab","baaba",
          "baabb","baabb","babaa","babab","babba","babbb"
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
              strtext = strtext + baconalpha[j] + " ";
              //if it is equal to the uppercase letter, check will be true
              check = true;
            }
          }
          //if character has not been identified as an uppercase letter, then it will start to browse through the lowercase letters, following the same tactic.
          if (check == false) {
            for (var j = 0; j < loweralphabet.length; j = j + 1) {
              if (arr[i] == loweralphabet[j]) {
                strtext = strtext + baconalpha[j] + " ";
                check = true;
              }
            }
          }
          //if it is still not identified as either lowercase or uppercase letter, then it is deemed a special character or a space, and is added into the string as itself.
          if (check == false);
        }
        //outputs the string
        console.log(strtext);
        document.getElementById("encodeoutput").innerHTML = strtext;
      }

function BaconDecode() {
        //Get the values of the input and the shift key
        var text = document.getElementById("decodeinput").value + "";
        console.log(text);
        //Shift key can go negative. This is to make sure it is equal to the normal positive shift key
        //splitting the characters into an array
        const arr = text.split(" ");
        console.log(arr);
        //defining the alphabet that the input array will be compared to
        var loweralphabet = [
          "a","b","c","d","e","f","g","h","i","j","k",
          "l","m","n","o","p","q","r","s","t","u","v",
          "w","x","y","z"
        ];
        var baconalpha = [
          "aaaaa","aaaab","aaaba","aaabb","aabaa","aabab","aabba","aabbb","abaaa","abaaa",
          "abaab","ababa","ababb","abbaa","abbab","abbba","abbbb","baaaa","baaab","baaba",
          "baabb","baabb","babaa","babab","babba","babbb"
        ];
        
        
        //bool variable to check if the character is a letter or special character
        var check = false;
        //The variable to be outputted
        var strtext = "";

        for (var i = 0; i < arr.length; i++) {
          //reset the check variable back to false
          check = false;
          //checks if the array character is an uppercase letter, and if it is, substitutes another letter by adding the shift key.
          for (var j = 0; j < baconalpha.length; j = j + 1) {
            if (arr[i] == baconalpha[j]) {
              //modulo by 26 so that if j + key is more than the alphabet array length, then it will go back to index zero.
              strtext = strtext + loweralphabet[j];
              //if it is equal to the uppercase letter, check will be true
              check = true;
            }
          }
          //if it is still not identified as either lowercase or uppercase letter, then it is deemed a special character or a space, and is added into the string as itself.
          if (check == false);
        }
        //outputs the string
        console.log(strtext);
        document.getElementById("decodeoutput").innerHTML = strtext;
      }

SMSEncode();

function SMSEncode() {
        //Get the values of the input and the shift key
        var text = document.getElementById("encodeinput").value + "";
        console.log(text);
        //Shift key can go negative. This is to make sure it is equal to the normal positive shift key
        //splitting the characters into an array
        const arr = text.split("");
        console.log(arr);
        //defining the alphabet that the input array will be compared to
        var loweralphabet = [
          "a","b","c","d","e","f","g","h","i","j","k",
          "l","m","n","o","p","q","r","s","t","u","v",
          "w","x","y","z"
        ];
        var upperalphabet = [
          "A","B","C","D","E","F","G","H","I","J","K",
          "L","M","N","O","P","Q","R","S","T","U","V",
          "W","X","Y","Z"
        ];
        var SMSalpha = [
          "2","22","222","3","33","333","4","44","444","5","55",
          "555","6","66","666","7","77","777","7777","8","88","888",
          "9","99","999","9999"
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
              strtext = strtext + SMSalpha[j] + " ";
              //if it is equal to the uppercase letter, check will be true
              check = true;
            }
          }
          //if character has not been identified as an uppercase letter, then it will start to browse through the lowercase letters, following the same tactic.
          if (check == false) {
            for (var j = 0; j < loweralphabet.length; j = j + 1) {
              if (arr[i] == loweralphabet[j]) {
                strtext = strtext + SMSalpha[j] + " ";
                check = true;
              }
            }
          }
          //if it is still not identified as either lowercase or uppercase letter, then it is deemed a special character or a space, and is added into the string as itself.
          if (check == false) {
            if (arr[i] == " ") {
              strtext = strtext + "0" + " ";
            }
          }
          
        }
        //outputs the string
        console.log(strtext);
        document.getElementById("encodeoutput").innerHTML = strtext;
      }

function SMSDecode() {
        //Get the values of the input and the shift key
        var text = document.getElementById("decodeinput").value + "";
        console.log(text);
        //Shift key can go negative. This is to make sure it is equal to the normal positive shift key
        //splitting the characters into an array
        const arr = text.split(" ");
        console.log(arr);
        //defining the alphabet that the input array will be compared to
        var loweralphabet = [
          "a","b","c","d","e","f","g","h","i","j","k",
          "l","m","n","o","p","q","r","s","t","u","v",
          "w","x","y","z"
        ];
        var upperalphabet = [
          "A","B","C","D","E","F","G","H","I","J","K",
          "L","M","N","O","P","Q","R","S","T","U","V",
          "W","X","Y","Z"
        ];
        var SMSalpha = [
          "2","22","222","3","33","333","4","44","444","5","55",
          "555","6","66","666","7","77","777","7777","8","88","888",
          "9","99","999","9999"
        ];
        
        //bool variable to check if the character is a letter or special character
        var check = false;
        //The variable to be outputted
        var strtext = "";

        for (var i = 0; i < arr.length; i++) {
          //reset the check variable back to false
          check = false;
          //checks if the array character is an uppercase letter, and if it is, substitutes another letter by adding the shift key.
          for (var j = 0; j < SMSalpha.length; j = j + 1) {
            if (arr[i] == SMSalpha[j]) {
              //modulo by 26 so that if j + key is more than the alphabet array length, then it will go back to index zero.
              strtext = strtext + upperalphabet[j];
              //if it is equal to the uppercase letter, check will be true
              check = true;
            }
          }
          //if character has not been identified as an uppercase letter, then it will start to browse through the lowercase letters, following the same tactic.
          if (check == false) {
            for (var j = 0; j < loweralphabet.length; j = j + 1) {
              if (arr[i] == loweralphabet[j]) {
                strtext = strtext + SMSalpha[j];
                check = true;
              }
            }
          }
          //if it is still not identified as either lowercase or uppercase letter, then it is deemed a special character or a space, and is added into the string as itself.
          if (check == false) {
            if (arr[i] == "0") {
              strtext = strtext + " ";
            }
          }
          
        }
        //outputs the string
        console.log(strtext);
        document.getElementById("decodeoutput").innerHTML = strtext;
      }