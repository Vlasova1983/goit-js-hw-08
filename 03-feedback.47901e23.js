const e=document.querySelector("input"),t=document.querySelector("textarea"),a=document.querySelector(".feedback-form"),o=[];a.addEventListener("input",(function(){o[0]=e.value,o[1]=t.value,localStorage.setItem("feedback-form-state",o)})),a.addEventListener("submit",(function(){localStorage.clear("feedback-form-state")})),console.log(localStorage.length),localStorage.getItem("feedback-form-state")&&(e.value=localStorage.getItem("feedback-form-state"),t.value=localStorage.getItem("feedback-form-state"));
//# sourceMappingURL=03-feedback.47901e23.js.map