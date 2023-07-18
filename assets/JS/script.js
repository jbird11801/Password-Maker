// Assignment Code

// global variables

var generateBtn = document.querySelector("#generate");

var specialChar = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|",":",";","<",">",",","?",".","/"];

var AlphLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var AlphUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var number = ["0","1","2","3","4","5","6","7","8","9"];

// gets a random int between 0 and X - 1

var random = function(X) {

  return Math.floor(Math.random() * X);

};

// Write password to the #password input

function writePassword() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

//generates the password 

function generatePassword(){

// prompts the user with a questio on how many characters they want

var AmtOfChars = prompt("How long is your new password ( 8 characters <= password <= 128 characters)");

// all things password related 

var password = {

  passString : "", // initializes the password string

  passLength : AmtOfChars, // passes the ammout of characters to password.passLength

passAray : [] // initializes the password array

}

// makes sure password is the right size of characters

if ( password.passLength >= 8 && password.passLength <= 128){

//prompts user with questions on what characters they want

var SpecialCheck = window.confirm("Do you want special characters ( ex ! , @ , #)");

var LowerCheck = window.confirm("Do you want lowwer case characters ( ex a , b , c)");

var UpperCheck = window.confirm("Do you want upper case characters ( ex A , B , C)");

var NumberCheck = window.confirm("Do you want numbers ( ex 1 , 2 , 3)");

// all things relating to characters

var aprovedChars = {

  special : SpecialCheck, // bool depends on if use wishes to iclude 

  lower : LowerCheck, // bool depends on if use wishes to iclude 

  upper : UpperCheck, // bool depends on if use wishes to iclude 

  number : NumberCheck, // bool depends on if use wishes to iclude 

  numAproved : function(){ // give me the number of aprooved character types

    var total = 0;

    if ( this.special){

      total++;

    }

    if ( this.lower){

      total++;

    }

    if ( this.upper){

      total++;

    }

    if ( this.number){

      total++;

    }

    return total;

  },
  
  allChars : [] // initializes allChars array

};

// makes sure one set of characters is enabled 

if (aprovedChars.numAproved() >= 1){

// makes the password.passAray as long as needed and puts blanks in

  for( i = 0; i < password.passLength;i++){

    password.passAray[i] = " ";
  
  }

// sees if the special characters were aproved and seeds one randomly into password.passarray without overideing any other required char types //  adds spec char to aprovedChars.allCharsn array

  if ( aprovedChars.special === true){

    var temp = random(password.passLength);

    if ( password.passAray[temp] === " " ){

    password.passAray[temp] = specialChar[random(specialChar.length)];

    }

    else {

      while((password.passAray[temp] === " ") !== true){

        temp = random(password.passLength);

      }

      password.passAray[temp] = specialChar[random(specialChar.length)];

    }

    aprovedChars.allChars = specialChar.concat(aprovedChars.allChars);

  }

// sees if the lower case characters were aproved and seeds one randomly into password.passarray without overideing any other required char types  //  adds lower case char to aprovedChars.allCharsn array

  if ( aprovedChars.lower === true){

    var temp = random(password.passLength);

    if ( password.passAray[temp] === " " ){

    password.passAray[temp] = AlphLower[random(AlphLower.length)];

    }

    else {

      while((password.passAray[temp] === " ") !== true){

        temp = random(password.passLength);

      }

      password.passAray[temp] = AlphLower[random(AlphLower.length)];

    }

    aprovedChars.allChars = AlphLower.concat(aprovedChars.allChars);

  }

// sees if the upper case characters were aproved and seeds one randomly into password.passarray without overideing any other required char types //  adds upper case char to aprovedChars.allCharsn array

  if ( aprovedChars.upper === true){

     var temp = random(password.passLength);

    if ( password.passAray[temp] === " " ){

    password.passAray[temp] = AlphUpper[random(AlphUpper.length)];

    }

    else {

      while((password.passAray[temp] === " ") !== true){

        temp = random(password.passLength);

      }

      password.passAray[temp] = AlphUpper[random(AlphUpper.length)];

    }

    aprovedChars.allChars = AlphUpper.concat(aprovedChars.allChars);

  }

// sees if the number characters were aproved and seeds one randomly into password.passarray without overideing any other required char types //  adds number char to aprovedChars.allCharsn array

  if ( aprovedChars.number === true){

    var temp = random(password.passLength);

    if ( password.passAray[temp] === " " ){

    password.passAray[temp] = number[random(number.length)];

    }

    else {

      while((password.passAray[temp] === " ") !== true){

        temp = random(password.passLength);

      }

      password.passAray[temp] = number[random(number.length)];

    }

    aprovedChars.allChars = number.concat(aprovedChars.allChars);

  }

// fills in the password blanks with random characters

  for (i = 0; i < password.passLength; i++){

    if (aprovedChars.allChars.includes(password.passAray[i]) === false ){
      
      password.passAray[i] = aprovedChars.allChars[random(aprovedChars.allChars.length)];

    }

  }

// makes the array a string

  for (i = 0; i < password.passLength ; i++){

    password.passString += password.passAray[i];
    
  }
  return password.passString;

}

// what happens dont accept any characters

else{

  alert("Password must have at least one character type ");
  
}

// what happens dont enter a valid length of characters

}

else{

  alert("Please enter a valid length ( 8 characters <= password <= 128 characters) ");
  
  return;

}

}
