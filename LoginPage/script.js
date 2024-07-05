document.addEventListener("DOMContentLoaded", function() {
    const signInButton = document.querySelector(".signinbtn");
    const signUpButton = document.querySelector(".signupbtn");
    const nameField = document.querySelector(".input-name");
    const lastNameField = document.querySelector(".input-last-name");
    const title = document.querySelector(".title");
  
    signInButton.addEventListener("click", function() {
      nameField.style.display = 'block';
      lastNameField.style.display = 'block';
      title.innerText = "Get in touch";
      signUpButton.classList.remove('disable');
      signInButton.classList.add('disable');
    });
  
    signUpButton.addEventListener("click", function() {
      nameField.style.display = 'none';
      lastNameField.style.display = 'none';
      title.innerText = "Sign Up";
      signInButton.classList.remove('disable');
      signUpButton.classList.add('disable');
    });
  
    // Apply hover effect using JavaScript
    signInButton.addEventListener("mouseover", function() {
      signInButton.style.backgroundColor = "#583c8e";
    });
  
    signInButton.addEventListener("mouseout", function() {
      signInButton.style.backgroundColor = "#512da8";
    });
  
    signUpButton.addEventListener("mouseover", function() {
      signUpButton.style.backgroundColor = "#d1d1d1";
    });
  
    signUpButton.addEventListener("mouseout", function() {
      signUpButton.style.backgroundColor = "#F0F0F0";
    });
  });
  