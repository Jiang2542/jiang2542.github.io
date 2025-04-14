// Program name: hw2.js
// Author: Kevin Jiang
// Date created: 03/01/2025
// Date last edited: 03/09/2025
// Version: 2.0
// Description: Homework 2 JS file.
// This is a supplement file to my HTML to check validation.

function updateSickCount(value) { 
  // Shows the amount of sick days from the slider the patient selects.
  document.getElementById("sickCountDisplay").innerHTML = value;
}

function validateDob() { 
  // Ensures that the DOB meets requirements such as no future dates, 
  // and that patients cannot be over 120 years old.
  var dob = document.getElementById("dob");
  let date = new Date(dob.value);
  let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);
  
  if (date > new Date()) {
    document.getElementById("dob-error").innerHTML = "Date can't be in the future";
    dob.value = "";
    return false;
  } else if (date < new Date(maxDate)) {
    document.getElementById("dob-error").innerHTML = "Date can't be more than 120 years ago";
    dob.value = "";
    return false;
  } else {
    document.getElementById("dob-error").innerHTML = "";
    validateEverything();
    return true;
  }
}

function validateSsn() { 
  // Ensures that SSN is in the correct format.
  // "Please enter valid SSN" will be displayed if the SSN input is not in the correct format.
  const ssn = document.getElementById("ssn").value;
  const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;
  
  if (!ssnR.test(ssn)) {
    document.getElementById("ssn-error").innerHTML = "Please enter a valid SSN";
    return false;
  } else {
    document.getElementById("ssn-error").innerHTML = "";
    validateEverything();
    return true;
  }
}

function validateZcode() {
  // Ensures that the zipcode typed meets the requirements, and that this field cannot be blank.
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
  validateEverything();
  return true;
}

function validateUid() {
  // Ensures that the username set by patients is valid.
  // Checks that the field is not blank, does not start with a number,
  // is at least 5 characters, does not exceed 30 characters,
  // and only includes letters, numbers, underscores, and dashes.
  let uidInput = document.getElementById("uid");
  let uid = uidInput.value.toLowerCase();
  uidInput.value = uid;
  
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
    validateEverything();
    return true;
  }
}

function validateEmail() {
  // Ensures that the email value has the correct format.
  let emailInput = document.getElementById("cemail");
  let email = emailInput.value.toLowerCase(); // Force lowercase
  emailInput.value = email; // Show corrected lowercase in the field

  let regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,20}$/;
  if (!regex.test(email)) {
    document.getElementById("email-error").innerHTML = "Please enter a valid email address";
    validateEverything();
    return false;
  } else {
    document.getElementById("email-error").innerHTML = "";
    validateEverything();
    return true;
  }
}

function validatePhone() {
  // Ensures that the phone number inputted is in the format 000-000-0000.
  // Displays an error message if any other format is used.
  var phone = document.getElementById("phone").value;
  var phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
  
  if (!phoneRegex.test(phone)) {
    document.getElementById("phone-error").innerHTML = "Phone number must be in format 000-000-0000";
    return false;
  } else {
    document.getElementById("phone-error").innerHTML = "";
    validateEverything();
    return true;
  }
}

function validatePword() {
  // Ensures that the password field meets the requirements:
  // at least one lowercase letter, one uppercase letter, one number, and one special character,
  // and that the password does not contain the UID/username value.
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
    validateEverything();
    return true;
  }
}

function confirmPword() {
  // Ensures that the password fields match.
  // Displays whether passwords match or not.
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

function reviewInput() {
  // Creates a review summary table displaying the values from the form for patients to review.
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
  // Clears the review display that outputs form information.
  document.getElementById("showInput").innerHTML = "";
}

function validateFname() {
  // Clears error for first name.
  document.getElementById("fname-error").innerHTML = "";
  return true;
}

function validateMname() {
  // Clears error for middle name.
  document.getElementById("mini-error").innerHTML = "";
  return true;
}

function validateLname() {
  // Clears error for last name.
  document.getElementById("lname-error").innerHTML = "";
  return true;
}

function validateAddress1() {
  // Clears error for address1.
  document.getElementById("address1-error").innerHTML = "";
  return true;
}

function validateCity() {
  // Clears error for city.
  document.getElementById("city-error").innerHTML = "";
  return true;
}

function showAlert() {
  var alertBox = document.getElementById("alert-box");
  var closeAlert = document.getElementById("close-alert");
  alertBox.style.display = "block";
  closeAlert.onclick = function () {
    alertBox.style.display = "none";
  };
}

function validateEverything() {
  let isValid = true;

  if (!validateFname()) isValid = false;
  if (!validateMname()) isValid = false;
  if (!validateLname()) isValid = false;
  if (!validateDob()) isValid = false;
  if (!validateSsn()) isValid = false;
  if (!validatePhone()) isValid = false;
  if (!validateEmail()) isValid = false;
  if (!validateUid()) isValid = false;
  if (!validatePword()) isValid = false;
  if (!confirmPword()) isValid = false;
  if (!validateAddress1()) isValid = false;
  if (!validateCity()) isValid = false;
  if (!validateZcode()) isValid = false;

  // Validate additional conditions for Address 2.
  const address2 = document.getElementById("address2").value.trim();
  if (address2 !== "" && /[^a-zA-Z0-9\s]/.test(address2)) {
    document.getElementById("address2-error").innerHTML = "Invalid characters in Address 2";
    isValid = false;
  } else {
    document.getElementById("address2-error").innerHTML = "";
  }

  // Show or hide the actual Submit button based on validation.
  const submitBtn = document.getElementById("submit");
  if (isValid) {
    submitBtn.style.display = "inline-block";
    submitBtn.disabled = false;
  } else {
    submitBtn.style.display = "none";
    submitBtn.disabled = true;
    showAlert();
  }
}

function validateMini() {
  // Validates middle initial to ensure it's a single uppercase letter.
  let mini = document.getElementById("mname").value.trim();
  const namePattern = /^[A-Z]?$/;
  mini = mini.toUpperCase();
  document.getElementById("mname").value = mini;

  if (mini && !mini.match(namePattern)) {
    document.getElementById("mini-error").innerHTML = "Middle initial must be a single uppercase letter";
    return false;
  } else {
    document.getElementById("mini-error").innerHTML = "";
    validateEverything();
    return true;
  }
}

function validateFname() {
  // Validates first name: must be no more than 30 letters, apostrophes, or dashes.
  let fname = document.getElementById("fname").value.trim();
  let regex = /^[a-zA-Z'\-]{1,30}$/;
  
  if (!regex.test(fname)) {
    document.getElementById("fname-error").innerHTML = "First name must be no more than 30 letters, apostrophes, or dashes.";
    return false;
  }
  
  document.getElementById("fname-error").innerHTML = "";
  validateEverything();
  return true;
}

function validateLname() {
  // Validates last name: must be no more than 30 letters, apostrophes, or dashes.
  let lname = document.getElementById("lname").value.trim();
  let regex = /^[a-zA-Z'\-]{1,30}$/;
  
  if (!regex.test(lname)) {
    document.getElementById("lname-error").innerHTML = "Last name must be no more than 30 letters, apostrophes, or dashes.";
    return false;
  }
  
  document.getElementById("lname-error").innerHTML = "";
  validateEverything();
  return true;
}
