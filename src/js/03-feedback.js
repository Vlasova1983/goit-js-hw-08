const textEmail = document.querySelector("input");
const textMassege = document.querySelector("textarea");
const form = document.querySelector(".feedback-form");
const formLocalStorage = {};

form.addEventListener ('input', onInputForm);
form.addEventListener ('submit', onSubmitForm);

console.log(localStorage.length);

function onSubmitForm() {    
    localStorage.clear("feedback-form-state");
}

function onInputForm() {    
    
    formLocalStorage.email=textEmail.value;
    formLocalStorage.massege=textMassege.value;
    localStorage.setItem("feedback-form-state",JSON.stringify(formLocalStorage));
   
};
if (localStorage.getItem("feedback-form-state")) {
    const a = localStorage.getItem("feedback-form-state");
    textEmail.value=JSON.parse(a).email;
    textMassege.value=JSON.parse(a).massege;
   
}
