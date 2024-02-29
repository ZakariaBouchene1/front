  // The UserService is a service class responsible 
  // for handling user-related operations. isValidUser
   // and getUserProfile methods would need to be 
   // implemented based on your 
   link=`http://localhost:8080/api/v1/quiz/getUserQuizzes`
async function getRequest(link,methode="GET",){
 await fetch(link, {
      method: methode,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + getAccessToken()
      }
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log('the quiz is : ', data);
 })
    .catch(error => {
      console.error('Error:', error);
    });
  

  }

