const theme =document.getElementById("them")
let css=document.getElementsByTagName("link")
// Set initial mode for every page loaded
if (localStorage.getItem("preferedDarkMood")===null ) {
  localStorage.setItem("preferedDarkMood",false)
} else if(localStorage.getItem("preferedDarkMood")===true) {
  css[0].href="./../css/goD.css"
  theme.checked=true
}else{
  css[0].href="./../css/go.css"
  theme.checked=false
}
theme.addEventListener("click", setMood);
function setMood() {

    if (theme.checked) 
     {
      css[0].href="./../css/goD.css"
      localStorage.setItem("preferedDarkMood",true);
    } else {
      css[0].href="./../css/go.css"
      localStorage.setItem("preferedDarkMood",false);
  }
}




