class t{constructor(){this.supportsPassiveOption=!1,this.touchDevice=!1,this.touchDevice="ontouchstart"in window,this.checksPassiveOption()}static getInstance(){return t._instance||(t._instance=new t),t._instance}checksPassiveOption(){try{let t=Object.defineProperty({},"passive",{get:()=>{this.supportsPassiveOption=!0}});window.addEventListener("test",null,t),this.supportsPassiveOption&&window.removeEventListener("test",null)}catch(t){}}}export{t as S};