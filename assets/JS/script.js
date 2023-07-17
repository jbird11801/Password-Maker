// Assignment Code

var generateBtn = document.querySelector("#generate");

var specialChar = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|",":",";","<",">",",","?",".","/"];

var AlphLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var AlphUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var number = ["0","1","2","3","4","5","6","7","8","9"];

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

var passwordLength = prompt("How long is your new password ( 8 characters <= password <= 128 characters)");

var passwordArry = [];

var password = "";

if ( passwordLength >= 8 && passwordLength <= 128){

var SpecialCheck = window.confirm("Do you want special characters ( ex ! , @ , #)");

var LowerCheck = window.confirm("Do you want lowwer case characters ( ex a , b , c)");

var UpperCheck = window.confirm("Do you want upper case characters ( ex A , B , C)");

var NumberCheck = window.confirm("Do you want numbers ( ex 1 , 2 , 3)");

if (SpecialCheck === true || LowerCheck === true || UpperCheck === true || NumberCheck === true){

var i = 0;
var Uppr = 0;
var Numb = 1;
var Lower = 2;
var spec = 3;

var Upprbool = false;
var Numbbool = false;
var Lowerbool = false;
var specbool = false;



  while (i < passwordLength){
   
    if (Random(4) === Uppr && UpperCheck === true && (Upprbool === false || (Numbbool === true && Lowerbool === true && specbool === true))){
      passwordArry[i] = AlphUpper[Random(AlphUpper.length)];
      Upprbool = true;
      i++
    }
      else if (Random(4) === Numb && NumberCheck === true && (Numbbool === false || (Upprbool === true && Lowerbool === true && specbool === true))){
        passwordArry[i] = number[Random(number.length)];
        Numbbool = true;
        i++
      }
        else if (Random(4) === Lower && LowerCheck === true && (Lowerbool === false || (Numbbool === true && Upprbool === true && specbool === true))){
          passwordArry[i] = AlphLower[Random(AlphLower.length)];
          Lowerbool = true;
          i++;
        }
          else if (Random(4) === spec && SpecialCheck === true && (specbool === false || (Numbbool === true && Lowerbool === true && Upprbool === true))) {
            passwordArry[i] = specialChar[Random(specialChar.length)];
            specbool = true;
            i++
          }
  }
  for (i = 0; i < passwordLength ; i++){

    var lastIndex = (passwordArry.length) - 1;

    var randomRndex = random(passwordArry.length)

    var temp = passwordArry[lastIndex];

    password = password + passwordArry[randomRndex];

    passwordArry[randomRndex] = temp ;

    passwordArry.pop;
    
  }
  return password;

}
else{
  alert("Password must have at least one character type ");
  return;
}

}else{

  alert("Please enter a valid length ( 8 characters <= password <= 128 characters) ");
  return;

}
}
// gets a random int between 0 and X - 1
var Random = function(X) {

  return Math.floor(Math.random() * X);

};





