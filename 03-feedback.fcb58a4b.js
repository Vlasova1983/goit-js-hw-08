const e=document.querySelector("input"),t=document.querySelector("textarea"),a=document.querySelector(".feedback-form"),o={};if(a.addEventListener("submit",(function(a){a.preventDefault(),localStorage.clear("feedback-form-state"),console.log(o),e.value="",t.value=""})),a.addEventListener("input",_.throttle((function(){o.email=e.value,o.massege=t.value,localStorage.setItem("feedback-form-state",JSON.stringify(o))}),500)),localStorage.getItem("feedback-form-state")){const a=localStorage.getItem("feedback-form-state");e.value=JSON.parse(a).email,t.value=JSON.parse(a).massege}
//# sourceMappingURL=03-feedback.fcb58a4b.js.map
