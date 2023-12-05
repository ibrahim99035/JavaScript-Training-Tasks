function openPopup(sectionid){
    document.getElementById(sectionid).style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}
function closePopup(sectionid) {
    document.getElementById(sectionid).style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function validateEmail() {
    const emailInput = document.getElementById('email').value;
    const emailRegex = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-_]+\.[a-zA-Z]{2,4}$/;

    if (emailRegex.test(emailInput)) {
        document.getElementById('emailerror').innerText = ''; 
        document.getElementById('emailerror').classList.add('hidden');
        document.getElementById('validemail').classList.add('diplayable');
        document.getElementById('validemail').innerText = 'Valid Email Address'
    } else {
        document.getElementById('emailerror').innerText = 'Invalid Email Address';
        document.getElementById('emailerror').classList.add('diplayable');
        document.getElementById('validemail').innerText = '';
        document.getElementById('validemail').classList.add('hidden');
    }
}

function validatePassword() {
    const passwordInput = document.getElementById('password').value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;
    const lowerCaseRegex = /^(?=.*[a-z])/;
    const upperCaseRegex = /^(?=.*[A-Z])/;
    const digitRegex = /^(?=.*\d)/;
    const specialCharRegex = /^(?=.*[!@#$%^&*])/;
  
    if (passwordRegex.test(passwordInput)) {
      // Password is valid
      document.getElementById('passerror').innerText = '';
      document.getElementById('validpass').innerText = 'Valid Password';
    } else {
      // Check for specific issues
      if (!lowerCaseRegex.test(passwordInput)) {
        document.getElementById('passerror').innerText = 'Password must have at least one lowercase letter';
      } else if (!upperCaseRegex.test(passwordInput)) {
        document.getElementById('passerror').innerText = 'Password must have at least one uppercase letter';
      } else if (!digitRegex.test(passwordInput)) {
        document.getElementById('passerror').innerText = 'Password must have at least one digit';
      } else if (!specialCharRegex.test(passwordInput)) {
        document.getElementById('passerror').innerText = 'Password must have at least one special character (!@#$%^&*)';
      } else {
        document.getElementById('passerror').innerText = 'Password does not meet the minimum requirements';
      }
  
      // Clear the "Valid Password" message
      document.getElementById('validpass').innerText = '';
    }
}

function validatePhone() {
    const phoneInput = document.getElementById('phone').value;
    const phoneRegex = /^(\+\d{1,2}\s?)?(\(\d{3}\)|\d{3})([-.\s]?)\d{3}([-.\s]?)\d{4}$/;

    if (phoneRegex.test(phoneInput)) {
        document.getElementById('phoneerror').innerText = ''; 
        document.getElementById('validphone').innerText = 'Valid Phone Number';
    } else {
        document.getElementById('phoneerror').innerText = 'Invalid Phone Number';
        document.getElementById('validphone').innerText = '';
    }
}

function validateURL() {
    const urlInput = document.getElementById('url').value;
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;

    if (urlRegex.test(urlInput)) {
        document.getElementById('urlerror').innerText = ''; 
        document.getElementById('validurl').innerText = 'Valid URL';
    } else {
        document.getElementById('urlerror').innerText = 'Invalid URL';
        document.getElementById('validurl').innerText = '';
    }
}