//Program name: hw3.js
//Author: Kevin Jiang
//Date created: 03/01/2025
//Date last edited: 03/09/2025
//Version: 2.0
//Description: Homework 3 JS file.
// this is a supliment file to my HTML to check validation.
function updateSickCount(value) { // shows the amount of sick days form the slider the patient selects.
   document.getElementById("sickCountDisplay").innerHTML = value;
 }

function validateDob() { // ensures that the DOB meets requirements such as no future dates, and that patients cannot be over 120 years old
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
    return true;
  }
}
//ensures that SSN is in the correct format. "please enter valid SSN" will be displayed if the SSN input is not the correct format.
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
// this js for zcode ensures that the zipcode typed meets the requirments. and ensures that this field cannot be blank
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
//this js ensures that the username set by patients is valid, making sure that this field cannot be blank, start with a number, and must be at least 5 
// chars, and not to exceed by 20. This also set some allowment for usernames so that it can include things like underscores and dashes.
function validateUid() {
  let uid = document.getElementById("uid").value.toLowerCase();
  document.getElementById("uid").value = uid;
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
// this ensures that email value has correct value.
function validateEmail() {
  let email = document.getElementById("cemail").value;
  let regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,20}$/;
  if (!regex.test(email)) {
    document.getElementById("email-error").innerHTML = "Please enter a valid email address";
    return false;
  } else {
    document.getElementById("email-error").innerHTML = "";
    return true;
  }
}
// this JS ensures that the phone number inputed must be in format 000-000-0000. If anyother phone number is inputed then it will spit out a message
//stating that this is not an invalid format, and to please use 000-000-0000
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
// ensures that the password field meets set requements set by assingment. Ensures that there is at least one letter, number. uppercase letter and one special character.
// this also ensures that the password entered is does not contain the UID/username value in  the password field.

function validatePword() {
  let pword = document.getElementById("pword").value;
  let uid = document.getElementById("uid").value;
  let errorMessage = [];
  if (!pword.match(/[a-z]/)) errorMessage.push("Enter at least one lowercase letter");
  if (!pword.match(/[A-Z]/)) errorMessage.push("Enter at least one uppercase letter");
  if (!pword.match(/[0-9]/)) errorMessage.push("Enter at least one number");
  if (!pword.match(/[!\@#\$%&*\-_\\.+\(\)]/)) errorMessage.push("Enter at least one special character");
  if (uid && pword.includes(uid)) errorMessage.push("Password can't contain user ID");
  if (errorMessage.length > 0) {
    document.getElementById("pword-error").innerHTML = errorMessage.join("<br>");
    return false;
  } else {
    document.getElementById("pword-error").innerHTML = "";
    return true;
  }
}
// ythis section ensures that the password fields match by confirming the values in pword and cpword. If this field matches will display password match,
// if this field does nto match will display not valid/match
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
//Creates review summary tables displaying the values from the form, allows patients to review information
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
// clears review display that outputs infromation.
function removeReview() {
  document.getElementById("showInput").innerHTML = "";
}
// clear error for first name
function validateFname() {
  document.getElementById("fname-error").innerHTML = "";
  return true;
}
//clears error for middle name
function validateMname() {
  document.getElementById("mini-error").innerHTML = "";
  return true;
}
//clears errors for last name
function validateLname() {
  document.getElementById("lname-error").innerHTML = "";
  return true;
}
//clears error for address1
function validateAddress1() {
  document.getElementById("address1-error").innerHTML = "";
  return true;
}

//Clears the error for city.
function validateCity() {
  document.getElementById("city-error").innerHTML = "";
  return true;
}
