const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


var firstPassDisplay = document.querySelector("#firstPass");
var secondPassDisplay = document.querySelector("#secondPass");
var maxPassword = document.querySelector("#maxPass");

// Handle number changes
function inputPass() {
	num = maxPassword.valueAsNumber;
};

function newFirstPassword() {
    var newFirstPass = [];
    for (var i = 0; i < num; i++) {
        var idx = Math.floor(Math.random() * characters.length);
        newFirstPass.push(characters[idx]);
        firstPassDisplay.innerHTML = newFirstPass.join("");
        var p = newFirstPass.join("");
      }
}

function newSecondPassword() {
    var newSecondPass = [];
    for (var i = 0; i < num; i++) {
        var idx = Math.floor(Math.random() * characters.length);
       newSecondPass.push(characters[idx]);
       secondPassDisplay.innerHTML = newSecondPass.join("");
       var q = newSecondPass.join("");
      }
}

function copyFirstPass() {
    var copyFirstText = document.querySelector("#firstPass").innerHTML;
    navigator.clipboard.writeText(copyFirstText).then(() => {
        // Alert the user that the action took place.
        alert("Copied to clipboard");
    });
  }

function copySecondPass() {
    var copySecondText = document.querySelector("#secondPass").innerHTML;
    navigator.clipboard.writeText(copySecondText).then(() => {
        // Alert the user that the action took place.
        alert("Copied to clipboard");
    });
  }




