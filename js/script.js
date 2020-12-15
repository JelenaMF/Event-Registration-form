/*
 */
document.getElementById("name").focus();
const form = document.querySelector("form");
const submitButton = document.querySelector("button");
const designMenu = document.querySelector("#design");
const colorOption = document.querySelectorAll("#color option");
const shirtColors = document.querySelector('#shirt-colors');
console.log(shirtColors);
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
const paymentOption = document.querySelectorAll("#payment option");
const creditCard = document.querySelector("#credit-card");
const payPal = document.querySelector("#paypal");
const bitcoin = document.querySelector("#bitcoin");
paymentOption[0].hidden = true;
payments.value = "credit card";
payPal.style.display = "none";
bitcoin.style.display = "none";
//show/hide pym options depending on the users selection
payment.addEventListener("change", (e) => {
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
function createError(formField) {
  if(!formField.previousElementSibling.classList.contains('error-border')) {
    const errorMessage = documents.querySelector('.hint');
    formField.setAttribute('required', true);
  }
}
function removeError(error) {
  if(formField.previousElementSibling.classList.contains('error-border')) {
    formField.previousElementSibling.remove('');
    formField.setAttribute('required', false);

  }
}
function isNameValid() {
  const nameInput = document.getElementById("name");
  if(nameInput.value === '') {
    removeError(nameInput);
    createError(nameInput);
    return false;
  } 
  if(nameInput.value.search(/\d/) != -1) {
    removeError(nameInput);
    createError(nameInput);
    return false;
  } else {
    removeError(nameInput);
    return true;  
  }
}

function isEmailValid() {
     const regEmail = /^[^@]+@[^@.]+\.[\w+]+$/i;
     const emailInput = document.getElementById("email");
    if(emailInput.value === '') {
      removeError(emailInput);
      createError(emailInput, '* Email is Empty');
      return false;
    } 
    if (!regEmail.test(emailInput.value)) {
      removeError(emailInput);
      createError(emailInput, '* Please enter a valid Email Address');
      return false;
    } else {
      removeError(emailInput);
      return true;
    }
   }
// const pickActivity = document.createElement("div");
// const checkbox1 = document.querySelectorAll(".activities label")[0];
// activities.insertBefore(pickActivity, checkbox1);
// function checkActivities() {
//   for (let i = 0; i < checkboxes.length; i++) {
//     if (!checkboxes[i].checked) {
//       checkboxes[i].setAttribute("required", true);
//       createError(activities, '*Please select');
//       return false;
//     } else {
//       return true;
//     }
//   }
// }

// function isCcValid() {
//   const ccNum = document.getElementById("cc-num");
//   const regexNums = /^(\d{13,16})$/;
//   const zip = document.getElementById("zip");
//   const regexZip = /\b\d{5}\b/;
//   const cvvInput = document.getElementById("cvv");
//   const regexCvv = /^\d{3}$/;
//   if(payments.value === 'credit card') {
//     let validate = true;
//     if(!regexNums.test(ccNum.value)) {
//       createError(ccNum, '*Please Enter a Valid Credit Card');
//       validate = false;
//     } else {
//       removeError(ccNum);
//     }
//     if(!regexZip.test(zip.value)){
//       createError(zip, '*Invalid zip code');
//       validate = false;
//     } else {
//       removeError(zip);
//     }
//     if(!regexCvv.test(cvvInput.value)) {
//       createError(cvvInput, '*3 digits on back')
//       validate = false;
//     } else {
//       removeError(cvvInput);
//     }
//     if(validate === true) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   return true;
// }
// //an eventlistener that calls tha validate funtions and verifies fieldsets
// document.getElementById("name").addEventListener("keyup", isNameValid);
// document.getElementById("email").addEventListener("keyup", isEmailValid);
// document.getElementById("cc-num").addEventListener("keyup", isCcValid);
// document.getElementById('zip').addEventListener('keyup', isCcValid);
// document.getElementById('cvv').addEventListener('keyup', isCcValid)
// submitButton.addEventListener("click", (e) => {
//   if (isNameValid() && isEmailValid() && isCcValid() && checkActivities()) {
//     alert('registration is Complete');
//   } else {
//     e.preventDefault();

//     isNameValid();
//     isEmailValid();
//     isCcValid();
//     checkActivities();

//   }
// });
