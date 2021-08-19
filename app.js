function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    console.log("got 3 digit and calling again", pin);
    return getPin();
  }
}
function generatePin() {
  const pin = getPin();
  const display = (document.getElementById("display-pin").value = pin);
}

document.getElementById("key-pad").addEventListener("click", function (e) {
  const number = event.target.innerText;
  const calcInput = document.getElementById("typed-number");
  if (isNaN(number)) {
    if (number == "C") {
      calcInput.value = "";
    }
    if (number == "<") {
      calcInput.value = calcInput.value.slice(0, -1);
    }
  } else {
    const previouNumber = calcInput.value;
    const newNumber = previouNumber + number;
    calcInput.value = newNumber;
  }
});

function verifyPin() {
  
   const displayPin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-number').value;
    if(displayPin == typedNumber){
        const success = document.getElementById('success')
        success.style.display = 'block';
        wrong.style.display = 'none';
       
    }
    else{
        const wrong = document.getElementById('wrong');
        wrong.style.display = 'block';
        success.style.display = 'none';
       
    } 
}
