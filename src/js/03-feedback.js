const inputEmail = document.querySelector("input");
const inputMassege = document.querySelector("textarea");
const formContainer = {email:"",messege:""};


inputEmail.addEventListener ('input', onInputInput);
inputMassege.addEventListener ('input', onInputMassege);
function onInputInput() {   
    formContainer.email=inputEmail.value;
   console.log(formContainer);

}
function onInputMassege() {   
   
    formContainer.messege = inputMassege.value;
   console.log(formContainer);
}

const email = localStorage.setItem("feedback-form-stat", formContainer);

 
