const userName = document.getElementById("username");
const userLabel = document.getElementById("usernameLabel");
const emailValue = document.getElementById("email");
const passwordValue = document.getElementById("password");
const passwordValue1 = document.getElementById("passwordcheck");
const form = document.getElementById("formContainer");
const submitButton = document.getElementById("submit");

const isRequired = (value) => (value === "" ? false : true);

const isNameValid = (min, max, length) =>
  length < min || length > max ? false : true;

const isEmailValid = (email) => {
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
};

const isPasswordValid = (password) => {
  const reg = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );

  return reg.test(password);
};

const showError = (input, message) => {
  const inputField = input.parentElement;
  const error = inputField.querySelector("small");

  inputField.children[0].classList.remove("success");
  inputField.children[0].classList.add("error");
  error.textContent = message;
};

const showSuccess = (input) => {
  const inputField = input.parentElement;
  inputField.children[0].classList.remove("error");
  inputField.children[0].classList.add("success");

  const error = inputField.querySelector("small");
  error.textContent = "";
};

const checkUserName = () => {
  let valid = false;
  const min = 3;
  const max = 25;
  const name = userName.value.trim();
  if (!isRequired(name)) {
    showError(userName, "Username cannot be empty");
  } else if (!isNameValid(min, max, name.length)) {
    showError(userName, `Username length must be between ${min} and ${max}`);
  } else {
    showSuccess(userName);
    valid = true;
  }
  return valid;
};

const checkUserEmail = () => {
  let valid = false;

  const email = emailValue.value.trim();
  if (!isRequired(email)) {
    showError(emailValue, "Email cannot be empty");
  } else if (!isEmailValid(email)) {
    showError(emailValue, `Email is not A valid Email`);
  } else {
    showSuccess(emailValue);
    valid = true;
  }
  return valid;
};

const checkPassword = () => {
  let valid = false;

  const password = passwordValue.value.trim();
  if (!isRequired(password)) {
    showError(passwordValue, "Password cannot be empty");
  } else if (!isPasswordValid(password)) {
    showError(
      passwordValue,
      "Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character"
    );
  } else {
    showSuccess(passwordValue);
    valid = true;
  }
  return valid;
};

const confirmPassword = () => {
  let valid = false;

  const password = passwordValue.value.trim();
  const password1 = passwordValue1.value.trim();
  if (!isRequired(password1)) {
    showError(passwordValue1, "Password cannot be empty");
  } else if (password !== password1) {
    showError(passwordValue1, "Passwords don't match");
  } else {
    showSuccess(passwordValue1);
    valid = true;
  }
  return valid;
};

const debounce = (fn, delay = 500) => {
  let timeOutId;
  return (...args) => {
    if (timeOutId) {
      clearTimeout(timeOutId);
    }
    timeOutId = setTimeout(() => {
      fn.apply(null, args);
    }, delay);
  };
};

form.addEventListener(
  "input",
  debounce(function (e) {
    switch (e.target.id) {
      case "username":
        checkUserName();
        break;

      case "email":
        checkUserEmail();
        break;

      case "password":
        checkPassword();
        break;

      case "passwordcheck":
        confirmPassword();
        break;
    }
  })
);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isNameValid = checkUserName(),
    isEmailValid = checkUserEmail(),
    isPasswordValid = checkPassword(),
    isConfirmPasswordValid = confirmPassword();
  let isFormValid =
    isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid;

  if (isFormValid) {
    console.log("success");
  } else {
  }
});
