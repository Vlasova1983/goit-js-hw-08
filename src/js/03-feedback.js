const textEmail = document.querySelector("input");
const textMassege = document.querySelector("textarea");
const form = document.querySelector(".feedback-form");
const formLocalStorage = {};

form.addEventListener ('submit', onSubmitForm);
form.addEventListener ('input', _.throttle(onInputForm,500));

function onSubmitForm(event) {     
    event.preventDefault(); 
    localStorage.clear("feedback-form-state");
    console.log(formLocalStorage);
    textEmail.value="";
    textMassege.value=""; 
}

function onInputForm() { 
    formLocalStorage.email=textEmail.value;
    formLocalStorage.massege=textMassege.value;
    localStorage.setItem("feedback-form-state",JSON.stringify(formLocalStorage));
}   
 
if (localStorage.getItem("feedback-form-state")) {
    const textLocalStorage = localStorage.getItem("feedback-form-state");
    textEmail.value=JSON.parse(textLocalStorage).email;
    textMassege.value=JSON.parse(textLocalStorage).massege;   
}

