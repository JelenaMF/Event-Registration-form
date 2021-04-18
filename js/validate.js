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
  
  function validateZip () {
    const zip = document.getElementById("zip");
    const regexZip = /\b\d{5}\b/;
    const zipError = document.getElementById('zip-hint');
    if(!regexZip.test(zip.value)){
        zipError.style.display = 'block';
        zip.classList.add('zip-hint')
        zip.parentElement.classList.add('not-valid');
        validate = false;
      } else {
        zipError.style.display = 'none';
        zip.classList.remove('error-border');
        zip.parentElement.classList.remove('not-valid');
        zip.parentElement.classList.add('valid');
  
        validate = true;
  
      }

};

function validateCcv() {
    const cvvInput = document.getElementById("cvv");
    const regexCvv = /^\d{3}$/;
    const cvvError = document.getElementById('cvv-hint');
    if(!regexCvv.test(cvvInput.value)) {
        cvvInput.parentElement.classList.add('not-valid');
        cvvError.style.display = 'block';
        validate = false;
      } else {
        cvvInput.parentElement.classList.remove('not-valid');
        cvvError.style.display = 'none';
        cvvInput.parentElement.classList.add('valid');
        validate = true;
      }
};

function isMonthSelected() {
    const monthBox = document.querySelector('.month-box');
    const expMon = document.querySelector('#exp-month');
    const expYear = document.querySelectorAll('#exp-year');
   
    expMon.addEventListener('change', (e) => {
        if(e.target.value != 'Select Date') {
            expMon.classList.remove('error-border');
        } else {
            expMon.classList.add('remove-error');
        }
        
        });
    }

     

     function isCcValid() {
    const ccNumInput = document.getElementById("cc-num");
    const regexNums = /^(\d{13,16})$/;
    const ccError = document.getElementById('cc-hint');

   
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
  document.getElementById('zip').addEventListener('keyup', validateZip);
  document.getElementById('cvv').addEventListener('keyup', validateCcv);
  document.getElementById('exp-month').addEventListener('keyup', isMonthSelected);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (isNameValid() && isEmailValid() && isCcValid() && validateCcv && validateZip && checkActivities()) {
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
  