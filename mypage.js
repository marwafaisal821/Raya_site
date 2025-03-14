document.addEventListener("DOMContentLoaded", () => {
  let user;
  try {
    user = JSON.parse(localStorage.getItem("user"));
  } catch (error) {
    console.error("Error parsing user data from localStorage:", error);
    alert("Failed to load user data. Please try again.");
    window.location.href = "register.html";
    return;
  }


    const firstName = user.fullName.split(" ")[0];
    const fNameElement = document.getElementById("f-name");
    const fFullNameElement = document.getElementById("f-fullname");
    const fEmailElement = document.getElementById("f-email");
    const fPhoneElement = document.getElementById("f-phone");

    if (fNameElement) fNameElement.textContent = firstName;
    if (fFullNameElement) fFullNameElement.textContent = user.fullName;
    if (fEmailElement) fEmailElement.textContent = user.email;
    if (fPhoneElement) fPhoneElement.textContent = user.phone;
  
});
