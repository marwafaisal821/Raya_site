document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.querySelector("form");
  const submitButton = document.querySelector("button[type='submit']");

  registerForm.addEventListener("input", () => {
    validateForm();
  });

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault(); 
    handleRegister();
  });

  function validateForm() {
    const fullName = document.querySelector("#fullname").value.trim();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();
    const phone = document.querySelector("#phone").value.trim();

    if (fullName && email && password && phone && validateEmail(email)) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true; 
    }
  }

  function handleRegister() {
    const fullName = document.querySelector("#fullname").value.trim();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();
    const phone = document.querySelector("#phone").value.trim();

    if (!fullName || !email || !password || !phone) {
      alert("Please fill in all the fields.");
      return;
    }

    const user = {
      fullName,
      email,
      password,
      phone,
    };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration successful! You can now log in.");
    window.location.href = "my page.html"; 
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});




  function handleLogin(email, password) {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if ( storedUser.email == email && storedUser.password == password) {

      alert("Login successful!");
      window.location.href = "my page.html";

      
    } else {
      alert("Invalid email or password.");
    }
  }
    
 

  function handleLogin() {
  
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();

    const storedUser = JSON.parse(localStorage.getItem("user"));

   
    if (storedUser && storedUser.email === email && storedUser.password === password) {
       
        window.location.href = "my page.html"; 
    } else {
        alert("invaid email or password");
    }
}
