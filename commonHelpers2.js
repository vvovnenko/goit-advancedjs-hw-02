import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as i,i as l}from"./assets/vendor-77e16229.js";function m(e){const s=Math.floor(e/864e5),d=Math.floor(e%864e5/36e5),c=Math.floor(e%864e5%36e5/6e4),u=Math.floor(e%864e5%36e5%6e4/1e3);return{days:s,hours:d,minutes:c,seconds:u}}function f(e){return`${e}`.padStart(2,"0")}const o=document.querySelector("#datetime-picker"),t=document.querySelector("[data-start]"),h={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};let r=null;t.disabled=!0;i(o,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]<=Date.now()?(t.disabled=!0,l.show({message:"Please choose a date in the future!",position:"center",color:"red"})):t.disabled=!1}});function y(){t.disabled=!0,r=setInterval(()=>{const e=new Date(o.value)-Date.now();Object.entries(m(e)).forEach(([n,a])=>{h[n].textContent=f(a)}),e<1e3&&(clearInterval(r),o.disabled=!1)},1e3)}t.addEventListener("click",y);
//# sourceMappingURL=commonHelpers2.js.map