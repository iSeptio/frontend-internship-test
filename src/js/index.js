
function loginbarSwitch(show) { document.getElementById('popupbox').style.visibility = show ? "visible" : "hidden"; }

function onClick(selector, fn) { document.querySelector(selector).onclick = fn; }

function onSubmit(selector, fn) { document.querySelector(selector).onsubmit = fn; } 


function validateForm() {
    var x = document.forms["login"]["email"].value;
    var y = document.forms["login"]["password"].value;
    if (x == "") {
      alert("Email must be filled out");
      return false;
    }
    
    else if(y.length<6){
        alert("Password must be at least 6 characters long.")
        return false;
    }
    else{
        setTimeout(loginbarSwitch(0),3000) 
        document.querySelector("#show-popup-form").innerHTML = "Thanks you!"
    }
  }

onSubmit("#loginform", () => validateForm())
onClick("#show-popup-form", () => loginbarSwitch(1))
onClick("#close-button", () => loginbarSwitch(0))


