const e=document.querySelector("input"),t=document.querySelector("textarea"),a=document.querySelector(".feedback-form"),o={};if(a.addEventListener("input",(function(){o.email=e.value,o.massege=t.value,localStorage.setItem("feedback-form-state",JSON.stringify(o))})),a.addEventListener("submit",(function(){localStorage.clear("feedback-form-state")})),console.log(localStorage.length),localStorage.getItem("feedback-form-state")){const a=localStorage.getItem("feedback-form-state");e.value=JSON.parse(a).email,t.value=JSON.parse(a).massege}
//# sourceMappingURL=03-feedback.8a41001d.js.map
