import { name,Token, fetcher, destroyToken, fetchUserData } from './backend.js';
let token = new Token();
try {
  const link='http://localhost:8080/api/v1/auth/whatEverTheLinkIs????'
  let lastUsename=""
  let username = document.getElementById('username').value;
  const requestDetails={
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      // do I Need the bearer or whatEver
    },
    body:username.value
  }
  
  username.addEventListener("keyup", function(event) {
    
    if (username.value != lastUsename){
      fetcher(link,requestDetails,showError)
      lastUsename=username.value;
    }})
} catch (error) {
  console.log(error)
}
async function showError(response) {
  if (!response.ok ) {
    username.setCustomValidity(`Username ${username.value} not accepted. Please choose another.`);
    username.reportValidity();
} else {
    username.setCustomValidity(`Username ${username.value} is valide`);
    username.reportValidity();
    window.alert(`Username ${username.value} is valide`)
}
}

window.alert(name(token.getAccessToken()+"zaki"))
let userHomePage ="main.html"
const showPassword= document.getElementById("eye");
const password= document.getElementById("password");

showPassword.addEventListener("click",()=>{
  
  const type = password.type
  if(type=="password"){
    showPassword.setAttribute("src","./../assets/eye.svg");
    password.type="text";
  }else{
    showPassword.setAttribute("src","./../assets/eyeSlash.svg");
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
        showcPassword.setAttribute("src","./../assets/eye.svg");
    }else{
        cpassword.type="password";
        showcPassword.setAttribute("src","./../assets/eyeSlash.svg");
    }
}) 
} catch (error) {
  console.log(error);
}


async function go() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  let data;
    try {
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    data= JSON.stringify({
      "email":email,
      "name":name,
      "username": username,
      "password": password
      
    })
  } catch (error) {
    data= JSON.stringify({
      "username": username,
      "password": password
    })
  }
  await fetcher('http://localhost:8080/api/v1/auth/login',{
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body:data,
  },
  function(response ){
    if (!response.ok) {
      refreshToken();
      if(!response.ok){
        throw new Error('Login failed');
      }
      
    }
    return  response.json();
  }
  .then(data => {
    console.log('Login successful:', data);
    setAccessToken(data.accessToken);
    setRefreshToken(data.refreshToken);
    window.location.href = "mainAutho.html";
  
  })
  .catch(error => {
    console.error('Error:', error);
  })
  
  );
}


function refreshToken(token) {
  fetcher('http://localhost:8080/api/v1/auth/refresh-token',{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token.getRefreshToken(),
      },
  },function(response,token  ){ return response.json()
      .then(data => {
          const newAccessToken = data.accessToken;
          token.setAccessToken(newAccessToken);
      })
      .catch(error => {
          console.error('Error refreshing token:', error);
      });
    })

}

window.addEventListener("beforeunload",(e)=>{
  const inputs=document.getElementsByTagName("input")
  for (let i=1;i<inputs.length  ;i++) {
    if (inputs[i].value!='') {
      e.preventDefault()
    }
  }
})
// 
