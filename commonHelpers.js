import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const n=document.querySelector("body"),t=document.querySelector("button[data-start]"),r=document.querySelector("button[data-stop]");function a(){return`#${Math.floor(Math.random()*16777215).toString(16)}`}function d(){n.style.backgroundColor=a()}function o(){t.disabled=!t.disabled}let e;t.addEventListener("click",()=>{o(),e=setInterval(d,1e3)});r.addEventListener("click",()=>{o(),clearInterval(e)});
//# sourceMappingURL=commonHelpers.js.map