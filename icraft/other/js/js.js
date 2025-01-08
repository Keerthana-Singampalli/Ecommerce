//js
//login & signup
document.addEventListener("DOMContentLoaded", function () {
  // Get elements
  const formOpenBtn = document.getElementById("form_open");
  const signOpenBtn = document.getElementById("sign_open");
  const loginSection = document.querySelector(".login_sec");
  const signupSection = document.querySelector(".signup_sec");
  const closeBtns = document.querySelectorAll(".close");

  // Open login form
  formOpenBtn.addEventListener("click", function () {
    loginSection.style.display = "block";
  });

  // Open signup form
  signOpenBtn.addEventListener("click", function () {
    signupSection.style.display = "block";
  });

  // Close forms
  closeBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      loginSection.style.display = "none";
      signupSection.style.display = "none";
    });
  });

  // Switch from signup to login
  const loginLink = signupSection.querySelector(".btxt a");
  loginLink.addEventListener("click", function (event) {
    event.preventDefault();
    signupSection.style.display = "none";
    loginSection.style.display = "block";
  });

  // Handle login form submission
  const loginForm = loginSection.querySelector("form");
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;
    // Handle login logic here (e.g., send data to server)
    console.log("Login submitted", { email, password });
    // Basic validation
    if (!email || !password) {
      alert("Please fill in both fields");
      return;
    }
    // Clear the input fields
    loginForm.reset();
    // Display a sign-up success message
    alert("Login Successful");
    // For demonstration, just hide the form
    loginSection.style.display = "none";
  });

  // Handle signup form submission
  const signupForm = signupSection.querySelector("form");
  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = signupForm.querySelector('input[type="email"]').value;
    const password = signupForm.querySelector('input[type="password"]').value;
    const confirmPassword = signupForm.querySelector(
      'input[placeholder="Confirm Password"]'
    ).value;
    //basic validation
    if (!email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }
    //password checking
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Handle signup logic here (e.g., send data to server)
    console.log("Signup submitted", { email, password, confirmPassword });
    // For demonstration, just hide the form
    signupSection.style.display = "none";
  });
});
///////////////swipe cards//////////////////////////
