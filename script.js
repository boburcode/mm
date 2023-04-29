function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
   
    if (username === "" || password === "") {
     alert("Please enter valid credentials.");
     return false;
    }
  
    // Make an API call to check user authentication
    // If successful, redirect to the dashboard page
    // Else show an error message
   }