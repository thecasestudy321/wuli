System.register(["./p-7243f468.system.js"],(function(t){"use strict";var e,i,a;return{setters:[function(t){e=t.r;i=t.c;a=t.h}],execute:function(){var c=t("nb_bool_item",function(){function t(t){e(this,t);this.setData={name:"",checked:true};this.nbChange=i(this,"nbChange",7)}t.prototype.ballClick=function(){this.setData.checked=!this.setData.checked;this.nbChange.emit(this.setData.checked);this.state=Math.random()};t.prototype.render=function(){var t=this;return a("div",{class:"bool-box"},a("div",{class:"left-group"},this.setData.name),a("div",{class:"right-group"},a("div",{onClick:function(){return t.ballClick()},class:this.setData.checked?"cir-ball-back back-active":"cir-ball-back back-unactive"},a("div",{class:"cir-ball"}))))};Object.defineProperty(t,"style",{get:function(){return".bool-box,.setting-item-box-base{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;line-height:26px}.bool-box .right-group,.setting-item-right{width:120px;height:26px}.hover-blue-border,.hover-blue-input:focus,.hover-blue-input:hover{background-color:rgba(0,0,0,.1);border:1px solid rgba(35,133,233,.7)}.hover-blue-Btn{cursor:pointer;-webkit-transition:background .25s,color .25s;transition:background .25s,color .25s;background:hsla(0,0%,100%,.1);outline:0;border:none;border-radius:4px;color:#a5a5a5;font-size:12px;white-space:nowrap}.hover-blue-Btn:hover{background-color:rgba(35,133,233,.7);color:#fff}.hover-blue-Btn:active{background-color:#2385e9;color:#fff}.hover-blue-input{color:#f1f1f1;background-color:rgba(0,0,0,.1);border-radius:4px;text-align:center;outline:0;-webkit-transition:border-color .25s,background-color .25s;transition:border-color .25s,background-color .25s;border:1px solid hsla(0,0%,100%,.1);width:100%;height:100%;padding:0}.mac-scroll::-webkit-scrollbar{width:5px;height:5px}.mac-scroll::-webkit-scrollbar-thumb{border-radius:1em;background-color:rgba(50,50,50,.3)}.mac-scroll::-webkit-scrollbar-track{border-radius:1em;background-color:rgba(50,50,50,.1)}.bool-box{padding:12px 18px 5px 18px}.bool-box .right-group{height:24px}.bool-box .right-group .cir-ball-back{display:inline-block;height:16px;width:40px;border-radius:8px;-webkit-transition:background .3s;transition:background .3s;position:relative;cursor:pointer;float:right;margin-top:4px}.bool-box .right-group .cir-ball-back .cir-ball{height:12px;width:12px;border-radius:50%;background:#fff;position:absolute;top:2px;-webkit-transition:left .3s;transition:left .3s}.bool-box .right-group .back-active{background-color:#2385e9}.bool-box .right-group .back-active:first-child>.cir-ball{left:25px}.bool-box .right-group .back-unactive{background-color:hsla(0,0%,100%,.1)}.bool-box .right-group .back-unactive:first-child>.cir-ball{left:2px}"},enumerable:true,configurable:true});return t}())}}}));