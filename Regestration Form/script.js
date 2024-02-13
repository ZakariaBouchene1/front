let navs=document.getElementById("navs");

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
        displayUserData(userData);
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

function displayUserData(userData) {
    const userDataContainer = document.getElementById('userData');
    
    userDataContainer.innerHTML = `
        <h2>Username: ${userData.username}</h2>
        <h3>Name: ${userData.name}</h3>
    `;
}



document.addEventListener('DOMContentLoaded', fetchUserData);
