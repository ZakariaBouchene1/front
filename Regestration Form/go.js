const showPassword= document.getElementById("eye");
const password= document.getElementById("password");

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
try {
 
const showcPassword= document.getElementById("cEye");
const cpassword= document.getElementById("cpassword");
showcPassword.addEventListener("click",()=>{


    const ctype = cpassword.type
    if(ctype=="password"){
        cpassword.type="text";
        showcPassword.setAttribute("src","./assets/eye.svg");
    }else{
        cpassword.type="password";
        showcPassword.setAttribute("src","./assets/eyeSlash.svg");
    }
}) 
} catch (error) {
  console.log(error);
}

// the end of the input styling 
let userHomePage ="main.html"
// userHomePage should be received from you after checking the inputs

function logIn() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Send login data to backend
    fetch('http://localhost:8080/api/v1/auth/login', {
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
        refreshToken();
        if(!response.ok){
          throw new Error('Login failed');
        }
        
      }
      return response.json();
    })
    .then(data => {
      // Login successful, data may contain user profile information
      console.log('Login successful:', data);
      setAccessToken(data.accessToken);
      setRefreshToken(data.refreshToken);
      window.location.href = "mainAutho.html";

      // You can redirect to another page or update the UI as needed
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle login failure, show an error message, etc.
    });
  }



// Assuming 'validatedToken' is the result of token validation and 'userProfileURL' is the desired redirect URL.

function refreshToken() {
  fetch('http://localhost:8080/api/v1/auth/refresh-token', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + getRefreshToken(),
      },
  })
  .then(response => response.json())
  .then(data => {
      const newAccessToken = data.accessToken;
      setAccessToken(newAccessToken);
  })
  .catch(error => {
      console.error('Error refreshing token:', error);
  });
}

function getRefreshToken() {
  return localStorage.getItem('refreshToken');
}
function getAccessToken() {
  return localStorage.getItem('accessToken');
}

function setAccessToken(token) {
  localStorage.setItem('accessToken', token);
}
function setRefreshToken(token) {
  localStorage.setItem('refreshToken', token);
}

// add fetch for name and username
// Assuming you have an endpoint that returns user data in JSON format 
const endpoint = 'http://localhost:8080/api/v1/user/all_users';

async function fetchUserData() {
  console.log(localStorage.getItem());

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

// ask is reload is intended
window.addEventListener("beforeunload",(e)=>{
  e.preventDefault()
})
// 
