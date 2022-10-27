const e=document.querySelector("input"),t=document.querySelector("textarea"),n={email:"",messege:""};e.addEventListener("input",(function(){n.email=e.value,console.log(n)})),t.addEventListener("input",(function(){n.messege=t.value,console.log(n)}));localStorage.setItem("feedback-form-stat",n);
//# sourceMappingURL=03-feedback.6ee2f5b7.js.map
