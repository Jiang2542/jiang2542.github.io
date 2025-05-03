//Program name: hw4.js
//Author: Kevin Jiang
//Date created: 03/01/2025
//Date last edited: 05/01/2025
//Version: 2.0
//Description: Homework 4 JS file.
// this is a supliment file to my HTML to check validation and remember function.
// hw4.js

function validateFname() {
  let fname = document.getElementById("fname").value.trim();
  let regex = /^[a-zA-Z'\-]{1,30}$/;
  if (!regex.test(fname)) {
    document.getElementById("fname-error").innerHTML =
      "First name must be 1-30 letters, apostrophes, or dashes.";
    return false;
  } else {
    document.getElementById("fname-error").innerHTML = "";
    return true;
  }
}

function validateMini() {
  let miniField = document.getElementById("mname");
  let mini = miniField.value.trim().toUpperCase();
  miniField.value = mini;
  const namePattern = /^[A-Z]?$/;
  if (mini && !namePattern.test(mini)) {
    document.getElementById("mini-error").innerHTML =
      "Middle initial must be a single uppercase letter";
    return false;
  } else {
    document.getElementById("mini-error").innerHTML = "";
    return true;
  }
}

function validateLname() {
  let lname = document.getElementById("lname").value.trim();
  let regex = /^[a-zA-Z'\-]{1,30}$/;
  if (!regex.test(lname)) {
    document.getElementById("lname-error").innerHTML =
      "Last name must be 1-30 letters, apostrophes, or dashes.";
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
    document.getElementById("dob-error").innerHTML =
      "Please enter your date of birth";
    return false;
  }
  let date = new Date(dobValue);
  let maxDate = new Date();
  let minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 120);

  if (date > maxDate) {
    document.getElementById("dob-error").innerHTML =
      "Date can't be in the future";
    dobField.value = "";
    return false;
  } else if (date < minDate) {
    document.getElementById("dob-error").innerHTML =
      "Date can't be more than 120 years ago";
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
    document.getElementById("ssn-error").innerHTML =
      "Please enter a valid SSN";
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
    document.getElementById("phone-error").innerHTML =
      "Phone number must be in format 000-000-0000";
    return false;
  } else {
    document.getElementById("phone-error").innerHTML = "";
    return true;
  }
}

function validateEmail() {
  let emailInput = document.getElementById("cemail");
  let email = emailInput.value.toLowerCase();
  emailInput.value = email;
  let regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,20}$/;
  if (!regex.test(email)) {
    document.getElementById("email-error").innerHTML =
      "Please enter a valid email address";
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
    document.getElementById("uid-error").innerHTML =
      "User ID can't be blank";
    return false;
  }
  if (!isNaN(uid.charAt(0))) {
    document.getElementById("uid-error").innerHTML =
      "User ID can't start with a number";
    return false;
  }
  let regex = /^[a-zA-Z0-9_-]+$/;
  if (!regex.test(uid)) {
    document.getElementById("uid-error").innerHTML =
      "User ID can only have letters, numbers, underscores, and dashes";
    return false;
  } else if (uid.length < 5) {
    document.getElementById("uid-error").innerHTML =
      "User ID must be at least 5 characters";
    return false;
  } else if (uid.length > 30) {
    document.getElementById("uid-error").innerHTML =
      "User ID can't exceed 30 characters";
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

  if (!pword.match(/[a-z]/)) errorMessage.push("Enter at least one lowercase letter");
  if (!pword.match(/[A-Z]/)) errorMessage.push("Enter at least one uppercase letter");
  if (!pword.match(/[0-9]/)) errorMessage.push("Enter at least one number");
  if (!pword.match(/[!@#\$%&*\-_\\.+\(\)]/)) errorMessage.push("Enter at least one special character");
  if (uid && pword.includes(uid)) errorMessage.push("Password can't contain user ID");

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
    document.getElementById("pword2-error").innerHTML =
      "Passwords don't match";
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

function validateAddress2() {
  let addr2 = document.getElementById("address2").value.trim();
  if (addr2 !== "" && /[^a-zA-Z0-9\s]/.test(addr2)) {
    document.getElementById("address2-error").innerHTML =
      "Invalid characters in Address 2";
    return false;
  } else {
    document.getElementById("address2-error").innerHTML = "";
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
    document.getElementById("zcode-error").innerHTML =
      "Zipcode can't be blank";
    return false;
  }
  if (zip.length > 5) zip = zip.slice(0, 5) + "-" + zip.slice(5, 9);
  else zip = zip.slice(0, 5);
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
//validation
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
  const validAddress2 = validateAddress2();
  const validCity = validateCity();
  const validZip = validateZcode();

  const isValid =
    validFname &&
    validMini &&
    validLname &&
    validDob &&
    validSsn &&
    validPhone &&
    validEmail &&
    validUid &&
    validPword &&
    validConfirmPword &&
    validAddress1 &&
    validAddress2 &&
    validCity &&
    validZip;

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
//reviews the input and gets it ready to display
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

// Remember Me + Greeting + Cookie logic

// Cookie helpers
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${d.toUTCString()};path=/`;
}

function getCookie(name) {
  const prefix = name + "=";
  return document.cookie.split(";").reduce((val, c) => {
    c = c.trim();
    return c.indexOf(prefix) === 0
      ? decodeURIComponent(c.substring(prefix.length))
      : val;
  }, "");
}

function deleteAllCookies() {
  document.cookie.split(";").forEach(cookie => {
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
  });
}

// Fields to remember
const inputsToRemember = [
  { id: "fname", cookieName: "firstName" },
  { id: "mname", cookieName: "middleInitial" },
  { id: "lname", cookieName: "lastName" },
  { id: "dob", cookieName: "dateOfBirth" },
  { id: "ssn", cookieName: "ssn" },
  { id: "phone", cookieName: "phone" },
  { id: "cemail", cookieName: "email" },
  { id: "address1", cookieName: "address1" },
  { id: "address2", cookieName: "address2" },
  { id: "state", cookieName: "state" },
  { id: "city", cookieName: "city" },
  { id: "zcode", cookieName: "zip" },
  { id: "uid", cookieName: "userID" }
];

// On load: greeting, prefill, listeners
document.addEventListener("DOMContentLoaded", () => {
  const rememberCheckbox = document.getElementById("remember-me");
  const greetingDiv = document.getElementById("user-greeting");
  const firstName = getCookie("firstName");

  if (firstName) {
    greetingDiv.textContent = `Welcome back, ${firstName}!`;
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = ` Not ${firstName}? Start as new user.`;
    link.style.marginLeft = "10px";
    link.addEventListener("click", e => {
      e.preventDefault();
      deleteAllCookies();
      location.reload();
    });
    greetingDiv.appendChild(link);

    // Prefill
    inputsToRemember.forEach(({ id, cookieName }) => {
      const el = document.getElementById(id);
      const val = getCookie(cookieName);
      if (el && val) el.value = val;
    });
  } else {
    greetingDiv.textContent = "Hello, New user!";
    deleteAllCookies();
  }

  // Clear cookies if unchecked
  rememberCheckbox.addEventListener("change", e => {
    if (!e.target.checked) deleteAllCookies();
  });

  // Save on input if checked
  inputsToRemember.forEach(({ id, cookieName }) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("input", () => {
      if (rememberCheckbox.checked) setCookie(cookieName, el.value, 30);
    });
  });
});
