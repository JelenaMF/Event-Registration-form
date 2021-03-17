/*
 */
//"strict"
document.getElementById("name").focus();
const form = document.querySelector("form");
const submitButton = document.querySelector("button");
const designMenu = document.querySelector("#design");
const colorOption = document.querySelectorAll("#color option");
const shirtColors = document.querySelector('#shirt-colors');
shirtColors.style.display = "none";
const colorPlaceholder = document.createElement("option");
colorPlaceholder.style.display = "none";
/***job role section **/
const otherInput = document.getElementById("other-job-role");
otherInput.style.display = "none";
const title = document.getElementById("title");
title.addEventListener("change", (e) => {
  e.target.value === "other" ?
    (otherInput.style.display = "block") :
    (otherInput.style.display = "none");
});
//T-shirt section
const colors = document.getElementById("color");
for (let i = 0; i < colors.length; i++) {
  //hide the colors in the "color" drop down
  colors[i].style.display = "none";
}


//event listener for displaying colors depending on selected theme
designMenu.addEventListener("change", (e) => {
  colors.appendChild(colorPlaceholder).text = "Choose a Color";
 
  for (let i = 0; i < colors.length; i++) {
    colors[i].style.display = "none";
    shirtColors.style.display = "block";
    if (e.target.value === "js puns") {
      colorOption[0].style.display = "block";
      colorOption[1].style.display = "block";
      colorOption[2].style.display = "block";
    }
    if (e.target.value === "heart js") {
      colorOption[3].style.display = "block";
      colorOption[4].style.display = "block";
      colorOption[5].style.display = "block";
    }
  }
});
/*register for activities section*/
//variables that add the total cost to the activites sections 
const totalCostDiv = document.createElement("div");
totalCostDiv.id = "total-cost";
const totalCostLabel = document.createElement("label");
totalCostDiv.append(totalCostLabel);
let totalCost = 0;
totalCostLabel.innerHTML = `Total Cost: $${totalCost}`;
const activities = document.querySelector(".activities");
activities.appendChild(totalCostDiv);
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
//event listens for the checkbox selection and adds the price to the total
activities.addEventListener("change", (e) => {
  let checkedBox = e.target;
  const cost = parseInt(checkedBox.getAttribute("data-cost"));
  const activityTime = checkedBox.getAttribute("data-day-and-time");
  if (checkedBox.checked === true) {
    totalCost += cost;
    totalCostLabel.innerHTML = `Total Cost: $${totalCost}`;
  } else {
    totalCost -= cost;
    totalCostLabel.innerHTML = `Total Cost: $${totalCost}`;
  }
  for (let i = 0; i < checkboxes.length; i++) {
    const dateAndTime = checkboxes[i].getAttribute("data-day-and-time");
    if (dateAndTime === activityTime && checkedBox !== checkboxes[i]) {
      checkedBox.checked ?
        (checkboxes[i].disabled = true) :
        (checkboxes[i].disabled = false);
    }
  }
});
[...checkboxes].forEach((cb) => {
  cb.addEventListener("focus", (e) => cb.parentElement.classList.add("focus"));
  cb.addEventListener("blur", (e) => {
    const active = document.querySelector(".focus");
    if (active) active.classList.remove("focus");
  });
});
/********* payment section ********/
//variables for separating the payment methods
const payments = document.querySelector("#payment");
const creditCard = document.querySelector("#credit-card");
const payPal = document.querySelector("#paypal");
const bitcoin = document.querySelector("#bitcoin");
payments.value = "credit-card";
payPal.style.display = "none";
bitcoin.style.display = "none";
//show/hide pym options depending on the users selection
payments.addEventListener("change", (e) => {
  if (e.target.value === "credit-card") {
    creditCard.style.display = "block";
    payPal.style.display = "none";
    bitcoin.style.display = "none";
  }
  if (e.target.value === "paypal") {
    payPal.style.display = "block";
    creditCard.style.display = "none";
    bitcoin.style.display = "none";
  }
  if (e.target.value === "bitcoin") {
    bitcoin.style.display = "block";
    creditCard.style.display = "none";
    payPal.style.display = "none";
  }
  
});

/** form Validation section */

function isNameValid() {
  const nameInput = document.getElementById("name");
  const nameError = document.getElementById('name-hint');
  if(nameInput.value === '') {
    nameError.style.display = 'block';
    nameInput.parentElement.classList.add('not-valid');
    return false;
  } 
  if(nameInput.value.search(/\d/) != -1) {
    nameError.textContent = 'Names should be letters only';
    return false;
  } else {
    nameInput.parentElement.classList.remove('not-valid');
    nameInput.parentElement.classList.add('valid');
    nameError.style.display = 'none';

    return true;  
  }
}

function isEmailValid() {
     const regEmail = /^[^@]+@[^@.]+\.[\w+]+$/i;
     const emailInput = document.getElementById("email");
     const emailError = document.getElementById('email-hint');
    if(emailInput.value === '') {
      emailError.style.display = 'block';
      emailInput.parentElement.classList.add('not-valid');
      return false;
    } 
    if (!regEmail.test(emailInput.value)) {
    emailInput.parentElement.classList.add('not-valid');
    emailError.style.display = 'block';      
      return false;
    } else {
      emailError.style.display = 'none';
      emailInput.parentElement.classList.remove('not-valid');
      emailInput.parentElement.classList.add('valid');
      return true;
    }
   }

function checkActivities() {
  const activityError = document.getElementById('activities-hint');
  for (let i = 0; i < checkboxes.length; i++) {
    if (!totalCost) {
      activities.parentElement.classList.add('not-valid');
      activityError.style.display = 'block';
      return false;
    } else {
      activities.parentElement.classList.remove('not-valid');
      activities.parentElement.classList.add('valid');
      activityError.style.display = 'none';
      return true;
    }
  }
}

function isCcValid() {
  const ccNumInput = document.getElementById("cc-num");
  const regexNums = /^(\d{13,16})$/;
  const zip = document.getElementById("zip");
  const regexZip = /\b\d{5}\b/;
  const cvvInput = document.getElementById("cvv");
  const regexCvv = /^\d{3}$/;
  const ccError = document.getElementById('cc-hint');
  const zipError = document.getElementById('zip-hint');
  const cvvError = document.getElementById('cvv-hint');
  const expMon = document.querySelectorAll('#exp-month');
  const expYear = document.querySelectorAll('#exp-year');
  console.log(expMon);
  console.log(expYear);
   for(const month of expMon) {
     console.log(month);
   }
  if(payments.value === 'credit-card') {
    let validate = true;
    if(!regexNums.test(ccNumInput.value)) {
      ccError.style.display = 'block';
      ccNumInput.parentElement.classList.add('not-valid');
      validate = false;
    } else {
      ccNumInput.parentElement.classList.remove('not-valid');
      ccNumInput.parentElement.classList.add('valid');
      ccNumInput.classList.remove('error-border');
      ccError.style.display = 'none'; 
      validate = true;
    }
    if(!regexZip.test(zip.value)){
      zipError.style.display = 'block';
      zip.parentElement.classList.add('not-valid');

      validate = false;
    } else {
      zipError.style.display = 'none';
      zip.classList.remove('error-border');
      zip.parentElement.classList.remove('not-valid');
      zip.parentElement.classList.add('valid');

      validate = true;

    }
    if(!regexCvv.test(cvvInput.value)) {
      cvvInput.parentElement.classList.add('not-valid');
      cvvError.style.display = 'block';
      validate = false;
    } else {
      cvvInput.parentElement.classList.remove('not-valid');
      cvvInput.style.display = 'none';
      cvvInput.parentElement.classList.add('valid');

    }
    if(validate === true) {
      return true;
    } else {
      return false;
    }
  }
  return true;
 }
//an eventlistener that calls tha validate funtions and verifies fieldsets
document.getElementById("name").addEventListener("keyup", isNameValid);
document.getElementById("email").addEventListener("keyup", isEmailValid);
document.getElementById("cc-num").addEventListener("keyup", isCcValid);
document.getElementById('zip').addEventListener('keyup', isCcValid);
document.getElementById('cvv').addEventListener('keyup', isCcValid)
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (isNameValid() && isEmailValid() && isCcValid() && checkActivities()) {
    alert('registration is Complete');
  } else {
    e.preventDefault();

    isNameValid();
    isEmailValid();
    isCcValid();
    checkActivities();

  }
  //alert('submit button works')
});
