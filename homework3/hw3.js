// Remove duplicate definitions. In this version, each validation function only does its own check.
function validateFname() {
  let fname = document.getElementById("fname").value.trim();
  let regex = /^[a-zA-Z'\-]{1,30}$/;
  
  if (!regex.test(fname)) {
    document.getElementById("fname-error").innerHTML = "First name must be 1-30 letters, apostrophes, or dashes.";
    return false;
  } else {
    document.getElementById("fname-error").innerHTML = "";
    return true;
  }
}

function validateMini() {
  // Validates middle initial to ensure it's a single uppercase letter.
  let miniField = document.getElementById("mname");
  let mini = miniField.value.trim().toUpperCase();
  miniField.value = mini;  // Force uppercase in the field
  const namePattern = /^[A-Z]?$/;
  
  if (mini && !namePattern.test(mini)) {
    document.getElementById("mini-error").innerHTML = "Middle initial must be a single uppercase letter";
    return false;
  } else {
    document.getElementById("mini-error").innerHTML = "";
    return true;
  }
}

// rest is just ensuring the correct valid values are put
function validateLname() {
  let lname = document.getElementById("lname").value.trim();
  let regex = /^[a-zA-Z'\-]{1,30}$/;
  
  if (!regex.test(lname)) {
    document.getElementById("lname-error").innerHTML = "Last name must be 1-30 letters, apostrophes, or dashes.";
    return false;
  } else {
    document.getElementById("lname-error").innerHTML = "";
    return true;
  }
}

function validateDob() { 
  let dobField = document.getElementById("dob");
  let dobValue = dobField.value;
  if (!dobValue) {
    document.getElementById("dob-error").innerHTML = "Please enter your date of birth";
    return false;
  }
  let date = new Date(dobValue);
  let maxDate = new Date();
  let minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 120);
  
  if (date > maxDate) {
    document.getElementById("dob-error").innerHTML = "Date can't be in the future";
    dobField.value = "";
    return false;
  } else if (date < minDate) {
    document.getElementById("dob-error").innerHTML = "Date can't be more than 120 years ago";
    dobField.value = "";
    return false;
  } else {
    document.getElementById("dob-error").innerHTML = "";
    return true;
  }
}

function validateSsn() { 
  const ssn = document.getElementById("ssn").value;
  const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;
  
  if (!ssnR.test(ssn)) {
    document.getElementById("ssn-error").innerHTML = "Please enter a valid SSN";
    return false;
  } else {
    document.getElementById("ssn-error").innerHTML = "";
    return true;
  }
}

function validatePhone() {
  var phone = document.getElementById("phone").value;
  var phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
  
  if (!phoneRegex.test(phone)) {
    document.getElementById("phone-error").innerHTML = "Phone number must be in format 000-000-0000";
    return false;
  } else {
    document.getElementById("phone-error").innerHTML = "";
    return true;
  }
}

function validateEmail() {
  let emailInput = document.getElementById("cemail");
  let email = emailInput.value.toLowerCase();
  emailInput.value = email; // update the field to lowercase
  let regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,20}$/;
  if (!regex.test(email)) {
    document.getElementById("email-error").innerHTML = "Please enter a valid email address";
    return false;
  } else {
    document.getElementById("email-error").innerHTML = "";
    return true;
  }
}

function validateUid() {
  let uidField = document.getElementById("uid");
  let uid = uidField.value.toLowerCase();
  uidField.value = uid;
  
  if (uid.length === 0) {
    document.getElementById("uid-error").innerHTML = "User ID can't be blank";
    return false;
  }
  if (!isNaN(uid.charAt(0))) {
    document.getElementById("uid-error").innerHTML = "User ID can't start with a number";
    return false;
  }
  let regex = /^[a-zA-Z0-9_-]+$/;
  if (!regex.test(uid)) {
    document.getElementById("uid-error").innerHTML = "User ID can only have letters, numbers, underscores, and dashes";
    return false;
  } else if (uid.length < 5) {
    document.getElementById("uid-error").innerHTML = "User ID must be at least 5 characters";
    return false;
  } else if (uid.length > 30) {
    document.getElementById("uid-error").innerHTML = "User ID can't exceed 30 characters";
    return false;
  } else {
    document.getElementById("uid-error").innerHTML = "";
    return true;
  }
}

function validatePword() {
  let pword = document.getElementById("pword").value;
  let uid = document.getElementById("uid").value;
  let errorMessage = [];

  if (!pword.match(/[a-z]/)) 
    errorMessage.push("Enter at least one lowercase letter");
  if (!pword.match(/[A-Z]/)) 
    errorMessage.push("Enter at least one uppercase letter");
  if (!pword.match(/[0-9]/)) 
    errorMessage.push("Enter at least one number");
  if (!pword.match(/[!\@#\$%&*\-_\\.+\(\)]/)) 
    errorMessage.push("Enter at least one special character");
  if (uid && pword.includes(uid)) 
    errorMessage.push("Password can't contain user ID");
  
  if (errorMessage.length > 0) {
    document.getElementById("pword-error").innerHTML = errorMessage.join("<br>");
    return false;
  } else {
    document.getElementById("pword-error").innerHTML = "";
    return true;
  }
}

function confirmPword() {
  let pword1 = document.getElementById("pword").value;
  let pword2 = document.getElementById("cpword").value;
  
  if (pword1 !== pword2) {
    document.getElementById("pword2-error").innerHTML = "Passwords don't match";
    return false;
  } else {
    document.getElementById("pword2-error").innerHTML = "Passwords match";
    return true;
  }
}

function validateAddress1() {
  let addr1 = document.getElementById("address1").value.trim();
  if (addr1.length < 2) {
    document.getElementById("address1-error").innerHTML = "Address is too short";
    return false;
  } else {
    document.getElementById("address1-error").innerHTML = "";
    return true;
  }
}

function validateCity() {
  let city = document.getElementById("city").value.trim();
  if (city.length === 0) {
    document.getElementById("city-error").innerHTML = "City is required";
    return false;
  } else {
    document.getElementById("city-error").innerHTML = "";
    return true;
  }
}

function validateZcode() {
  const zipInput = document.getElementById("zcode");
  let zip = zipInput.value.replace(/[^\d-]/g, "");
  
  if (!zip) {
    document.getElementById("zcode-error").innerHTML = "Zipcode can't be blank";
    return false;
  }
  if (zip.length > 5) {
    zip = zip.slice(0, 5) + "-" + zip.slice(5, 9);
  } else {
    zip = zip.slice(0, 5);
  }
  zipInput.value = zip;
  document.getElementById("zcode-error").innerHTML = "";
  return true;
}

function showAlert() {
  let alertBox = document.getElementById("alert-box");
  let closeAlert = document.getElementById("close-alert");
  alertBox.style.display = "block";
  closeAlert.onclick = function () {
    alertBox.style.display = "none";
  };
}

// run when the validate button is pressed.
function validateEverything() {
  const validFname = validateFname();
  const validMini = validateMini();
  const validLname = validateLname();
  const validDob = validateDob();
  const validSsn = validateSsn();
  const validPhone = validatePhone();
  const validEmail = validateEmail();
  const validUid = validateUid();
  const validPword = validatePword();
  const validConfirmPword = confirmPword();
  const validAddress1 = validateAddress1();
  const validCity = validateCity();
  const validZip = validateZcode();
  
  // Validate Address 2.
  const address2 = document.getElementById("address2").value.trim();
  let validAddress2 = true;
  if (address2 !== "" && /[^a-zA-Z0-9\s]/.test(address2)) {
    document.getElementById("address2-error").innerHTML = "Invalid characters in Address 2";
    validAddress2 = false;
  } else {
    document.getElementById("address2-error").innerHTML = "";
  }
  
  const isValid = validFname && validMini && validLname && validDob && validSsn && validPhone &&
                  validEmail && validUid && validPword && validConfirmPword &&
                  validAddress1 && validCity && validZip && validAddress2;
  
  // makes the submit button invisiable or appear
  const submitBtn = document.getElementById("submit");
  if (isValid) {
    submitBtn.style.display = "inline-block";
    submitBtn.disabled = false;
  } else {
    submitBtn.style.display = "none";
    submitBtn.disabled = true;
    showAlert();
  }
  
  return isValid;
}

// To display review
function reviewInput() {
  var formcontent = document.getElementById("signup");
  var formoutput = "<table class='output'><th colspan='3'> Review Your Information:</th>";
  
  for (let i = 0; i < formcontent.length; i++) {
    if (formcontent.elements[i].value !== "") {
      switch (formcontent.elements[i].type) {
        case "checkbox":
          if (formcontent.elements[i].checked) {
            formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>&#x2713;</td></tr>`;
          }
          break;
        case "radio":
          if (formcontent.elements[i].checked) {
            formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
          }
          break;
        default:
          formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
      }
    }
  }
  formoutput += "</table>";
  document.getElementById("showInput").innerHTML = formoutput;
}

function removeReview() {
  document.getElementById("showInput").innerHTML = "";
}

//this ensures validation on the fly eorks
