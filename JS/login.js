const form = document.querySelector(".content");
const userName = document.querySelector("#userName");
const passWord = document.querySelector("#passWord");
const addbtn = document.querySelector(".login");

function checkStore() {

  let store = JSON.parse(localStorage.getItem("store"));
  for (let i = 0; i < store.length; i++) {            //loop through the storage
    if ((userName.value != store[i].username) || (passWord.value != store[i].password)) { //check the store
      alert('Record does not exist')
      return false;
    }
    else {
      localStorage.setItem('username', store[i].username)  //set the login details to storage.
      window.location.href = "index.html";
      return true;
    }
    
  }
 }
// checkStore();
addbtn.onclick = checkStore;
// form.onsubmit = displayName