(()=>{"use strict";const t=t=>{const{value:e,text:n}=t,o=document.createElement("LABEL");return o.classList.add("form-label"),o.setAttribute("for",e),o.textContent=n,o},e=t=>{const{id:e,type:n,help:o}=t,a=document.createElement("INPUT");return"range"==t.type?a.classList.add("form-range"):a.classList.add("form-control"),a.id=e,a.setAttribute("type",n),a.setAttribute("aria-describedby",o),t.min&&(a.setAttribute("min",t.min),a.setAttribute("max",t.max)),a},n=t=>{const{id:e,text:n}=t,o=document.createElement("DIV");return o.classList.add("form-text"),o.id=e,o.textContent=n,o},o=({id:t})=>{const e=document.createElement("TEXTAREA");return e.classList.add("form-control"),e.setAttribute("rows","3"),e.id=t,e},a=[{label:{value:"title",text:"Title"},input:{id:"title",type:"text",help:"titleHelp"},help:{id:"titleHelp",text:"here to help"}},{label:{value:"description",text:"Description"},input:{id:"description",type:"text",help:"descriptionHelp"},help:{id:"descriptionHelp",text:"here to help"}},{label:{value:"dueDate",text:"Due Date"},input:{id:"dueDate",type:"date",help:"dueDateHelp"},help:{id:"dueDateHelp",text:"here to help"}},{label:{value:"priority",text:"Priority"},input:{id:"priority",type:"range",min:"1",max:"5",help:"priorityHelp"},help:{id:"priorityHelp",text:"here to help"}},{label:{value:"notes",text:"Notes"},textarea:{id:"notes",help:"notesHelp"},help:{id:"notesHelp",text:"here to help"}}],s=()=>{const s=document.createElement("DIV");s.classList.add("modal","fade"),s.id="formModal",s.setAttribute("tabindex","-1"),s.setAttribute("aria-labelledby","formModalLabel"),s.setAttribute("aria-hidden","true");const d=document.createElement("DIV");d.classList.add("modal-dialog");const r=document.createElement("DIV");r.classList.add("modal-content");const i=document.createElement("DIV");i.classList.add("modal-header");const c=document.createElement("H5");c.classList.add("modal-title"),c.id="formModalLabel",c.textContent="Add A New Todo!";const l=document.createElement("BUTTON");l.classList.add("btn-close"),l.setAttribute("type","button"),l.setAttribute("data-dismiss","modal"),l.setAttribute("aria-label","Close"),i.append(c,l);const p=document.createElement("DIV");return p.classList.add("modal-body"),p.append((()=>{const s=document.createElement("FORM");s.id="todoForm";for(let d of a){const a=document.createElement("DIV");a.classList.add("mb-3");const r=t(d.label);a.append(r),d.input&&a.append(e(d.input)),d.textarea&&a.append(o(d.textarea));const i=n(d.help);a.append(i),s.append(a)}const d=document.createElement("BUTTON");return d.classList.add("btn","btn-primary"),d.setAttribute("type","submit"),d.textContent="Create",s.append(d),s})()),r.append(i,p),d.append(r),s.append(d),s},d=()=>{const t=document.createElement("DIV");t.classList.add("container");const e=document.createElement("DIV");e.classList.add("row");const n=document.createElement("DIV");n.classList.add("col-lg-6"),t.append(e),e.append(n);const o=document.createElement("DIV");o.classList.add("accordion","accordion-flush"),o.id="accordionExample";const a=document.createElement("DIV");a.classList.add("accordion-item");const s=document.createElement("H2");s.classList.add("accordion-header"),s.id="headingOne";const d=document.createElement("BUTTON");d.classList.add("accordion-button"),d.setAttribute("type","button"),d.setAttribute("data-toggle","collapse"),d.setAttribute("data-target","#collapseOne"),d.setAttribute("aria-expanded","true"),d.setAttribute("aria-controls","collapseOne"),d.textContent="First Todo",s.append(d);const r=document.createElement("DIV");r.classList.add("accordion-collapse","collapse","show"),r.id="collapseOne",r.setAttribute("aria-labelledby","headingOne"),r.setAttribute("data-parent","#accordionExample");const i=document.createElement("DIV");return i.classList.add("accordion-body"),i.append((()=>{const t=[{priority:"3"}],e=document.createElement("UL");e.classList.add("list-group");const n=document.createElement("LI");n.classList.add("list-group-item");for(let e of t){console.log(e);const t=document.createElement("A");let o;o="5"==e.priority?"btn-danger":"btn-success",t.classList.add("btn","btn-lg",o),t.setAttribute("tabindex","0"),t.setAttribute("role","button"),t.setAttribute("data-toggle","popover"),t.setAttribute("data-trigger","focus"),t.setAttribute("title","Dismissible popover"),t.setAttribute("data-content","and heres some engagin content"),t.textContent="Dismissible popover",n.append(t)}return e.append(n),e})()),r.append(i),a.append(s,r),o.append(a),n.append(o),t};window.addEventListener("DOMContentLoaded",(t=>{const e=[],n=document.querySelector("#content"),o=document.createElement("DIV");o.classList.add("container","my-5");const a=(()=>{const t=document.createElement("BUTTON");return t.classList.add("btn","btn-primary"),t.setAttribute("type","button"),t.setAttribute("data-toggle","modal"),t.setAttribute("data-target","#formModal"),t.textContent="Add Todo",t})();o.append(a);const r=s(),i=d();n.append(o,r,i),n.querySelector("#todoForm").addEventListener("submit",(t=>{t.preventDefault();const n=(t=>{const{id:e,title:n,description:o,dueDate:a,priority:s,notes:d,completed:r}=t;return{id:e,title:n,description:o,dueDate:a,priority:s,notes:d,completed:r}})((t=>{const e=document.querySelector(`#${t.target.id}`),n={},o=e.elements.title,a=e.elements.description,s=e.elements.dueDate,d=e.elements.priority,r=e.elements.notes;return n.title=o.value,n.description=a.value,n.dueDate=s.value,n.priority=d.value,n.notes=r.value,n.completed=!1,o.value="",a.value="",s.value="",d.value="",r.value="",document.querySelector(".btn-close").click(),n})(t));e.push(n),console.log(e),(t=>{console.log("in addTodoToListGroup");const e=document.querySelector(".accordion-body").querySelector(".list-group"),n=document.createElement("LI");n.classList.add("list-group-item","d-flex","justify-content-between","align-items-center");const o=document.createElement("INPUT");o.classList.add("form-check-input","my-0"),o.setAttribute("type","checkbox"),o.setAttribute("value",""),o.id="completed";const a=document.createElement("H6");let s;s="4"==t.priority||"5"==t.priority?"text-danger":"3"==t.priority?"text-warning":"text-success",a.classList.add("my-0",s,"text-capitalize"),a.textContent=t.title;const d=document.createElement("P");d.classList.add("fs-6","my-0","text-black-50","fw-light"),d.textContent=t.dueDate;const r=document.createElement("A");r.classList.add("btn","btn-sm","btn-outline-dark"),r.setAttribute("tabindex","0"),r.setAttribute("role","button"),r.setAttribute("data-toggle","popover"),r.setAttribute("data-trigger","focus"),r.setAttribute("title",t.description),r.setAttribute("data-content",t.notes),r.textContent="notes";const i=document.createElement("A");i.classList.add("btn");const c=document.createElement("IMG");c.src="./assets/img/trash.svg",c.height="16",c.weight="16",i.append(c),n.append(o,a,d,r,i),e.append(n)})(n),c()}));const c=()=>{[].slice.call(document.querySelectorAll('[data-toggle="popover"]')).map((function(t){return new bootstrap.Popover(t)})),new bootstrap.Popover(document.querySelector(".popover-dismiss"),{trigger:"focus"})}}))})();