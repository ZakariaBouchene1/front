
import { Token, fetcher, destroyToken, fetchUserData } from './backend.js';

let token = new Token();

let navs=document.getElementById("navs");


function displayUserData(userData) {
    const userDataContainer = document.getElementById('userData');
    
    userDataContainer.innerHTML = `
    <h1><i> Welcome and<strong> Congrats </strong> you are in</i></h1>
        <h2>Name: ${userData.name}</h2>
        <h3>Username: @${userData.username}</h3>
    `;
}
async function logOut(params) {
    localStorage.setItem('accessToken', undefined);
    alert(localStorage.getItem("accessToken"));
}

document.addEventListener('DOMContentLoaded', fetchUserData);
