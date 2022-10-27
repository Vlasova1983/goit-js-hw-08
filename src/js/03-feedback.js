const textEmail = document.querySelector("input");
const textMassege = document.querySelector("textarea");
const form = document.querySelector(".feedback-form");
const formLocalStorage = [];

form.addEventListener ('input', onInputForm);
form.addEventListener ('submit', onSubmitForm);

console.log(localStorage.length);

function onSubmitForm() {    
    localStorage.clear("feedback-form-state");
}

function onInputForm() {    
    
    formLocalStorage[0]=textEmail.value;
    formLocalStorage[1]=textMassege.value;
    localStorage.setItem("feedback-form-state",formLocalStorage);
   
};
if (localStorage.getItem("feedback-form-state")) {
    textEmail.value=localStorage.getItem("feedback-form-state");
    textMassege.value=localStorage.getItem("feedback-form-state");
   
}
