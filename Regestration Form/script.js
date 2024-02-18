let navs=document.getElementById("navs");

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
  

// add fetch for name and username
// Assuming you have an endpoint that returns user data in JSON format 
//const endpoint = 'http://localhost:8080/api/v1/user/all_users';

async function fetchUserData() {
    try {
        const response = await fetch('http://localhost:8080/api/v1/profile/userDetails',{
            method: 'get',
            headers:  {
                'Authorization' : 'Bearer '+getAccessToken(),
            },
        })
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const userData = await response.json();
        displayUserData(userData);
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

function displayUserData(userData) {
    const userDataContainer = document.getElementById('userData');
    
    userDataContainer.innerHTML = `
        <h2>Name: ${userData.name}</h2>
        <h3>Username: @${userData.username}</h3>
    `;
}



document.addEventListener('DOMContentLoaded', fetchUserData);
