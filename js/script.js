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

