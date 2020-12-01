(()=>{"use strict";const t=t=>{const{value:e,text:n}=t,o=document.createElement("LABEL");return o.classList.add("form-label"),o.setAttribute("for",e),o.textContent=n,o},e=t=>{const{id:e,type:n,help:o}=t,a=document.createElement("INPUT");return"range"==t.type?a.classList.add("form-range"):a.classList.add("form-control"),a.id=e,a.setAttribute("type",n),a.setAttribute("aria-describedby",o),t.min&&(a.setAttribute("min",t.min),a.setAttribute("max",t.max)),a},n=t=>{const{id:e,text:n}=t,o=document.createElement("DIV");return o.classList.add("form-text"),o.id=e,o.textContent=n,o},o=({id:t})=>{const e=document.createElement("TEXTAREA");return e.classList.add("form-control"),e.setAttribute("rows","3"),e.id=t,e},a=[{label:{value:"title",text:"Title"},input:{id:"title",type:"text",help:"titleHelp"},help:{id:"titleHelp",text:"here to help"}},{label:{value:"description",text:"Description"},input:{id:"description",type:"text",help:"descriptionHelp"},help:{id:"descriptionHelp",text:"here to help"}},{label:{value:"dueDate",text:"Due Date"},input:{id:"dueDate",type:"date",help:"dueDateHelp"},help:{id:"dueDateHelp",text:"here to help"}},{label:{value:"priority",text:"Priority"},input:{id:"priority",type:"range",min:"1",max:"5",help:"priorityHelp"},help:{id:"priorityHelp",text:"here to help"}},{label:{value:"notes",text:"Notes"},textarea:{id:"notes",help:"notesHelp"},help:{id:"notesHelp",text:"here to help"}}],r=()=>{const r=document.createElement("DIV");r.classList.add("modal","fade"),r.id="formModal",r.setAttribute("tabindex","-1"),r.setAttribute("aria-labelledby","formModalLabel"),r.setAttribute("aria-hidden","true");const d=document.createElement("DIV");d.classList.add("modal-dialog");const s=document.createElement("DIV");s.classList.add("modal-content");const i=document.createElement("DIV");i.classList.add("modal-header");const c=document.createElement("H5");c.classList.add("modal-title"),c.id="formModalLabel",c.textContent="Add A New Todo!";const l=document.createElement("BUTTON");l.classList.add("btn-close"),l.setAttribute("type","button"),l.setAttribute("data-dismiss","modal"),l.setAttribute("aria-label","Close"),i.append(c,l);const u=document.createElement("DIV");return u.classList.add("modal-body"),u.append((()=>{const r=document.createElement("FORM");r.id="todoForm";for(let d of a){const a=document.createElement("DIV");a.classList.add("mb-3");const s=t(d.label);a.append(s),d.input&&a.append(e(d.input)),d.textarea&&a.append(o(d.textarea));const i=n(d.help);a.append(i),r.append(a)}const d=document.createElement("BUTTON");return d.classList.add("btn","btn-primary"),d.setAttribute("type","submit"),d.textContent="Create",r.append(d),r})()),s.append(i,u),d.append(s),r.append(d),r};var d="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),s=new Uint8Array(16);function i(){if(!d)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return d(s)}const c=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,l=function(t){return"string"==typeof t&&c.test(t)};for(var u=[],p=0;p<256;++p)u.push((p+256).toString(16).substr(1));const m=function(t,e,n){var o=(t=t||{}).random||(t.rng||i)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e){n=n||0;for(var a=0;a<16;++a)e[n+a]=o[a];return e}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(u[t[e+0]]+u[t[e+1]]+u[t[e+2]]+u[t[e+3]]+"-"+u[t[e+4]]+u[t[e+5]]+"-"+u[t[e+6]]+u[t[e+7]]+"-"+u[t[e+8]]+u[t[e+9]]+"-"+u[t[e+10]]+u[t[e+11]]+u[t[e+12]]+u[t[e+13]]+u[t[e+14]]+u[t[e+15]]).toLowerCase();if(!l(n))throw TypeError("Stringified UUID is invalid");return n}(o)};window.addEventListener("DOMContentLoaded",(t=>{let e=[];const n=document.querySelector("#content"),o=document.createElement("DIV");o.classList.add("container","my-5");const a=(()=>{const t=document.createElement("BUTTON");return t.classList.add("btn","btn-primary"),t.setAttribute("type","button"),t.setAttribute("data-toggle","modal"),t.setAttribute("data-target","#formModal"),t.textContent="Add Todo",t})();o.append(a);const d=r(),s=(()=>{const t=document.createElement("DIV");t.classList.add("container");const e=document.createElement("DIV");e.classList.add("row");const n=document.createElement("DIV");n.classList.add("col-lg-6"),t.append(e),e.append(n);const o=document.createElement("DIV");o.classList.add("accordion","accordion-flush"),o.id="accordionExample";const a=document.createElement("DIV");a.classList.add("accordion-item");const r=document.createElement("H2");r.classList.add("accordion-header"),r.id="headingOne";const d=document.createElement("BUTTON");d.classList.add("accordion-button"),d.setAttribute("type","button"),d.setAttribute("data-toggle","collapse"),d.setAttribute("data-target","#collapseOne"),d.setAttribute("aria-expanded","true"),d.setAttribute("aria-controls","collapseOne"),d.textContent="First Todo",r.append(d);const s=document.createElement("DIV");s.classList.add("accordion-collapse","collapse","show"),s.id="collapseOne",s.setAttribute("aria-labelledby","headingOne"),s.setAttribute("data-parent","#accordionExample");const i=document.createElement("DIV");i.classList.add("accordion-body");const c=document.createElement("UL");return c.classList.add("list-group"),i.append(c),s.append(i),a.append(r,s),o.append(a),n.append(o),t})();n.append(o,d,s),n.querySelector("#todoForm").addEventListener("submit",(t=>{t.preventDefault();const n=(t=>{const e=document.querySelector(`#${t.target.id}`),n={},o=e.elements.title,a=e.elements.description,r=e.elements.dueDate,d=e.elements.priority,s=e.elements.notes;return n.title=o.value,n.description=a.value,n.dueDate=r.value,n.priority=d.value,n.notes=s.value,n.completed=!1,o.value="",a.value="",r.value="",d.value="",s.value="",document.querySelector(".btn-close").click(),n})(t);n.id=m();const o=(t=>{const{id:e,title:n,description:o,dueDate:a,priority:r,notes:d,completed:s}=t;return{id:e,title:n,description:o,dueDate:a,priority:r,notes:d,completed:s}})(n);e.push(o),console.log(e),(t=>{const e=document.querySelector(".accordion-body").querySelector(".list-group"),n=document.createElement("LI");n.classList.add("list-group-item","d-flex","justify-content-between","align-items-center"),n.id=t.id;const o=document.createElement("INPUT");o.classList.add("form-check-input","my-0"),o.setAttribute("type","checkbox"),o.setAttribute("value",""),o.id="completed";const a=document.createElement("H6");let r;r="4"==t.priority||"5"==t.priority?"text-danger":"3"==t.priority?"text-warning":"text-success",a.classList.add("my-0",r,"text-capitalize"),a.textContent=t.title;const d=document.createElement("P");d.classList.add("fs-6","my-0","text-black-50","fw-light"),d.textContent=(t=>{const e=t.split("-");return`${e[1]}.${e[2]}.${e[0].substring(2)}`})(t.dueDate);const s=document.createElement("A");s.classList.add("btn","btn-sm","btn-outline-dark"),s.setAttribute("tabindex","0"),s.setAttribute("role","button"),s.setAttribute("data-toggle","popover"),s.setAttribute("data-trigger","focus"),s.setAttribute("title",t.description),s.setAttribute("data-content",t.notes),s.textContent="notes";const i=document.createElement("A");i.classList.add("btn","trash");const c=document.createElement("IMG");c.src="./assets/img/trash.svg",c.height="16",c.weight="16",i.append(c),n.append(o,a,d,s,i),e.append(n)})(o);const a=document.getElementById(`${n.id}`);a.querySelector("INPUT").addEventListener("click",(t=>{(t=>{const e=t.target.parentNode.querySelector("h6");t.target.checked?e.classList.add("fw-lighter","text-muted","text-decoration-line-through"):e.classList.contains("fw-lighter")&&e.classList.remove("fw-lighter","text-muted","text-decoration-line-through")})(t);const n=t.target.parentNode.id,o=e.find((t=>t.id==n));0==o.completed?o.completed=!0:o.completed=!1})),a.querySelector(".trash").addEventListener("click",(t=>{let n;n="A"==t.target.tagName?t.target.parentNode.id:t.target.parentNode.parentNode.id,(t=>{"A"==t.target.tagName?t.target.parentNode.remove():t.target.parentNode.parentNode.remove()})(t),e=e.filter((t=>t.id!==n))})),i()}));const i=()=>{[].slice.call(document.querySelectorAll('[data-toggle="popover"]')).map((function(t){return new bootstrap.Popover(t)})),new bootstrap.Popover(document.querySelector(".popover-dismiss"),{trigger:"focus"})}}))})();