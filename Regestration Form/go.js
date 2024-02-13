const showPassword= document.getElementById("eye");
const showcPassword= document.getElementById("cEye");
const password= document.getElementById("password");
const cpassword= document.getElementById("cpassword");
showPassword.addEventListener("click",()=>{

    const type = password.type
    if(type=="password"){
        showPassword.setAttribute("src","./assets/eye.svg");
        password.type="text";
    }else{
        showPassword.setAttribute("src","./assets/eyeSlash.svg");
        password.type="password";
    }
});
showcPassword.addEventListener("click",()=>{


    const ctype = cpassword.type
    if(ctype=="password"){
        cpassword.type="text";
        showcPassword.setAttribute("src","./assets/eye.svg");
    }else{
        cpassword.type="password";
        showcPassword.setAttribute("src","./assets/eyeSlash.svg");
    }
});

// the end of the input styling 
let userHomePage ="main.html"
// userHomePage should be received from you after checking the inputs

function logIn() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    alert(username  + ":" + password);
    // Send login data to backend
    fetch('http://localhost:8080/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Login failed');
      }
      return response.json();
    })
    .then(data => {
      // Login successful, data may contain user profile information
      console.log('Login successful:', data);
      setAccessToken(data.access_token);
      window.location.href = userHomePage;

      // You can redirect to another page or update the UI as needed
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle login failure, show an error message, etc.
    });
  }



// Assuming 'validatedToken' is the result of token validation and 'userProfileURL' is the desired redirect URL.

function refreshToken() {
  fetch('http://your-spring-boot-api-endpoint/refresh', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + getRefreshToken(),
      },
  })
  .then(response => response.json())
  .then(data => {
      const newAccessToken = data.access_token;
      setAccessToken(newAccessToken);
  })
  .catch(error => {
      console.error('Error refreshing token:', error);
  });
}

function getRefreshToken() {
  return localStorage.getItem('refreshToken');
}

function setAccessToken(token) {
  localStorage.setItem('accessToken', token);
}

// add fetch for name and username
// Assuming you have an endpoint that returns user data in JSON format 
const endpoint = 'http://your-spring-boot-api-endpoint-which-means-the-URL/user-data';

async function fetchUserData() {
  try {
      const response = await fetch(endpoint);
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const userData = await response.json();
      console.log(userData);
  } catch (error) {
      console.error('Error fetching user data:', error);
  }
}