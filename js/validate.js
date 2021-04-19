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
        activities.classList.add('not-valid');
        activityError.style.display = 'block';
        return false;
      } if(totalCost > 0) {
        activities.classList.remove('not-valid');
        activities.classList.add('valid');
        activities.classList.remove('error-border');
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
        cvvInput.parentElement.classList.remove('valid');
        validate = false;
      } else {
        cvvInput.parentElement.classList.remove('not-valid');
        cvvError.style.display = 'none';
        cvvInput.classList.remove('error-border');
        cvvInput.parentElement.classList.add('valid');
        validate = true;
      }
};

//check if an expiration month has been selected
function isMonthSelected() {
  //create a variable that targets the month box
    //give month box class name of not-valid if value not selected
    const monthBox = document.querySelector('.month-box');
    const expMon = document.querySelector('#exp-month');
      monthBox.addEventListener('click', (e) => {
        if(monthBox != null) {
          expMon.classList.remove('error-border');
          monthBox.classList.remove('not-valid');
          monthBox.classList.add('valid');
          return true;
        } else {  
          expMon.classList.add('error-border');
          monthBox.classList.add('not-valid');
          monthBox.classList.remove('valid');
        }
        
        });
    }

    function isYearSelected() {
      //create a variable that targets the month box
        const expyear = document.querySelector('#exp-year');
        const yearBox = document.querySelector('.year-box');

        expyear.addEventListener('click', (e) => {
            if(yearBox != null) {
              expyear.classList.remove('error-border');
              yearBox.classList.add('valid');
            } else {
              expyear.classList.add('error-border');
              yearBox.classList.add('not-valid');
              yearBox.classList.remove('valid');
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
  document.getElementById('activities').addEventListener('change', checkActivities);
  document.getElementById('exp-month').addEventListener('change', isMonthSelected);
  document.getElementById('exp-year').addEventListener('change', isYearSelected);


  form.addEventListener("submit", (e) => {
    if (isNameValid() && isEmailValid() && isCcValid() && validateCcv && validateZip && isMonthSelected && isYearSelected && checkActivities()) {
      alert('registration is Complete');

    } else {
      e.preventDefault();
  
      isNameValid();
      isEmailValid();
      isCcValid();
      checkActivities();
      validateCcv();
      validateZip();
      isMonthSelected();
  
    }
    //alert('submit button works')
  });
  