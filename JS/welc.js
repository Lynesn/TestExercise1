const username = document.querySelector('#username')  //create element username

let user = localStorage.getItem('username') //gets user name from storage

username.innerHTML = user;    // displays the html
