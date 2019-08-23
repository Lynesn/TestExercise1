const userName = document.querySelector("#userName");
const passWord = document.querySelector("#passWord");
const confirmPassword = document.querySelector("#passWord1");
const addbtn = document.querySelector(".addBtn");

function createStore() {
    let store = JSON.parse(localStorage.getItem("store"));
    if (store === null) {
      localStorage.setItem("store", JSON.stringify([]));
      return store;
    } else {
      return store;
    }
  }
  createStore();
  
  function addRecord() {
    let store = createStore();
    let userNameInput = userName.value.trim();
    let passWordInput = passWord.value.trim();
    let confirmPasswordInput = confirmPassword.value.trim();

    const Record = {
        username: userNameInput,
        password: passWordInput,
        confirmPassword: confirmPasswordInput,
      };
      if (passWordInput != confirmPasswordInput){
        alert('Please Enter matching passwords')
        return false;
      }
      store.unshift(Record);
      localStorage.setItem("store", JSON.stringify(store));
    }
    addbtn.onclick = addRecord;
