System.register(["./p-7243f468.system.js"],(function(i){"use strict";var t,e,s;return{setters:[function(i){t=i.r;e=i.c;s=i.h}],execute:function(){var n=i("template_thumbnail",function(){function i(i){t(this,i);this.tmpdata={};this.ischemical=false;this.mleft=15;this.upmenu=false;this.isOpen=false;this.isVideo=false;this.isChemJingTi=false;this.invclass={info:"icon-info-phy",video:"icon-video-phy",hasinfo:false,hasvideo:false};this.baseListAry=[{title:"编辑",lan_key:"source_templete.edit",type:"create"},{title:"演示",lan_key:"source_templete.play",type:"show"}];this.dropListAry=[];this.menuClick=e(this,"menuClick",7)}i.prototype.dataChanged=function(){this.updateRenderData()};i.prototype.componentWillLoad=function(){this.updateRenderData()};i.prototype.addVideoMask=function(){if(this.isVideo){return s("div",{class:"icon-video"},s("div",{class:"icon-video-mask"}))}};i.prototype.addInfoFlag=function(){if(this.invclass.hasinfo){return s("div",{class:"icon-base-v "+this.invclass.info})}};i.prototype.addVideoFlag=function(){if(this.invclass.hasvideo){return s("div",{class:"icon-base-v "+this.invclass.video})}};i.prototype.updateRenderData=function(){if(this.ischemical){this.invclass.info="icon-info-chem";this.invclass.video="icon-video-chem"}var i=this.tmpdata.info;this.invclass.hasinfo=i.intro;this.invclass.hasvideo=i.video;this.dropListAry=this.baseListAry.concat()};i.prototype.toggleDropMenu=function(){this.isOpen=!this.isOpen};i.prototype.clickitem=function(i){this.menuClick.emit({video:this.isVideo,chemjingti:this.isChemJingTi,type:i,data:this.tmpdata});this.isOpen=false};i.prototype.addDropMenu=function(){var i=this;if(this.isVideo||this.isChemJingTi){return s("ul",{class:this.upmenu?"upto-drop":"file-template-dropdown-menu"},s("li",{class:""},s("div",{class:"file-template-dropdown-item ",onClick:function(){i.clickitem({type:"create"})}},"演示")))}else if(!this.isVideo&&!this.isChemJingTi){return s("ul",{class:this.upmenu?"upto-drop":"file-template-dropdown-menu"},this.dropListAry.map((function(t){return s("li",{class:""},s("div",{class:"file-template-dropdown-item ",onClick:function(){i.clickitem(t.type)}},t.title))})))}};i.prototype.render=function(){var i=this;return s("div",{class:"tp-cell"},s("div",{class:"temp-container",style:{marginLeft:this.mleft+"px"}},s("img",{class:"file-template-icon",src:this.tmpdata.iconUrl,onClick:function(){i.clickitem({type:"create"})}}),this.addVideoMask(),s("div",{class:"info-video"},this.addInfoFlag(),this.addVideoFlag()),s("div",{class:"caption"},s("p",{class:"file-template-title"},this.tmpdata.name),s("div",{class:"file-template-drop "},s("div",{class:"file-template-drop-list ",onClick:function(){i.toggleDropMenu()}},s("div",{class:"file-template-drop-li "}),s("div",{class:"file-template-drop-li "}),s("div",{class:"file-template-drop-li "}))))),s("div",{class:"file-template-dropdown  "+(this.isOpen?"show-file-template-menu":"")},s("div",{class:"drapbg",onClick:function(){i.isOpen=!i.isOpen}}),this.addDropMenu()))};Object.defineProperty(i,"watchers",{get:function(){return{tmpdata:["dataChanged"]}},enumerable:true,configurable:true});Object.defineProperty(i,"style",{get:function(){return".temp-container .icon-vip,.VIP{background-image:url(assets/imgs/stmp/stmp_template-thumbnail_sprite.png);background-size:50px 287px;background-repeat:no-repeat;background-position:0 0;width:36px;height:20px}.chem-info,.temp-container .info-video .icon-info-chem{background-position:0 -25px}.chem-info,.chem-video,.temp-container .info-video .icon-info-chem,.temp-container .info-video .icon-video-chem{background-image:url(assets/imgs/stmp/stmp_template-thumbnail_sprite.png);background-size:50px 287px;background-repeat:no-repeat;width:30px;height:20px}.chem-video,.temp-container .info-video .icon-video-chem{background-position:0 -50px}.detail-fullScreen{background-position:0 -150px;width:27px;height:27px}.detail-fullScreen,.dropDown{background-image:url(assets/imgs/stmp/stmp_template-thumbnail_sprite.png);background-size:50px 287px;background-repeat:no-repeat}.dropDown{background-position:0 -75px;width:20px;height:20px}.info-close-def{background-position:0 -182px}.info-close-def,.info-close-hor{background-image:url(assets/imgs/stmp/stmp_template-thumbnail_sprite.png);background-size:50px 287px;background-repeat:no-repeat;width:50px;height:50px}.info-close-hor{background-position:0 -237px}.phy-info,.temp-container .info-video .icon-info-phy{background-position:0 -100px}.phy-info,.phy-video,.temp-container .info-video .icon-info-phy,.temp-container .info-video .icon-video-phy{background-image:url(assets/imgs/stmp/stmp_template-thumbnail_sprite.png);background-size:50px 287px;background-repeat:no-repeat;width:30px;height:20px}.phy-video,.temp-container .info-video .icon-video-phy{background-position:0 -125px}.temp-container,.tp-cell{display:inline-block}.temp-container{position:relative;width:320px;height:244px;margin:15px;padding:0;border-radius:6px;background-color:#fff;border:none;-webkit-box-shadow:0 3px 30px 0 rgba(226,230,241,.8);box-shadow:0 3px 30px 0 rgba(226,230,241,.8);-webkit-transition:-webkit-transform .4s ease;transition:-webkit-transform .4s ease;transition:transform .4s ease;transition:transform .4s ease,-webkit-transform .4s ease}.temp-container:hover{-webkit-box-shadow:0 10px 34px 0 rgba(226,230,241,.95);box-shadow:0 10px 34px 0 rgba(226,230,241,.95);-webkit-transform:scale(1.05);transform:scale(1.05);z-index:9}.temp-container .file-template-icon{width:100%;height:132px;margin:0;padding:0;border-radius:6px 6px 0 0;cursor:pointer}.temp-container .icon-vip{width:36px;height:20px;position:absolute;right:0;bottom:61px}.temp-container .info-video{position:absolute;top:0;left:0}.temp-container .info-video .icon-base-v{width:30px;height:20px;margin:2px}.temp-container .caption{position:relative;display:block;margin-top:-6px}.temp-container .caption .file-template-title{text-align:left;height:61px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-left:15px;padding-right:52px;line-height:61px;margin:0 0 1rem 0;font-size:16px;font-weight:500;color:#50514f}.temp-container .caption .file-template-drop{position:absolute;right:0;width:52px;height:61px;top:0}.temp-container .caption .file-template-drop .file-template-drop-list{width:100%;height:100%}.temp-container .caption .file-template-drop .file-template-drop-li{width:4px;height:4px;border-radius:50%;float:left;margin:0 2px;margin-top:28px;background:#91959d}.temp-container .caption .file-template-drop .file-template-drop-li:first-child{margin-left:16px}.temp-container .caption .file-template-drop:hover{cursor:pointer}.temp-container .caption .file-template-create-date{display:block;color:#c5c5c5;bottom:0;font-size:12px}.show-file-template-menu{display:block!important}.file-template-dropdown{position:relative;display:none;top:-32px;left:-4px;z-index:95}.file-template-dropdown .drapbg{position:fixed;width:100vw;height:100vh;top:0;left:0;background:transparent}.file-template-dropdown li{padding:5px 0}.file-template-dropdown .file-template-dropdown-item{display:block;padding:5px 1.5rem;clear:both;font-weight:400;text-align:inherit;white-space:nowrap;background:none;border:0}.file-template-dropdown .file-template-dropdown-item:hover{background-color:rgba(221,212,206,.3)}.file-template-dropdown .file-template-dropdown-menu:before{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid;content:\"/\";font-size:0;border-width:7px;top:-5px;margin-left:-7px;border-bottom-color:rgba(0,0,0,.05);right:19px;border-top-width:0;z-index:95}.file-template-dropdown .file-template-dropdown-menu{position:absolute;top:100%;right:0;min-width:8rem;padding:.5rem 0;margin:.125rem 0 0;font-size:14px;color:#5c5f66;text-align:left;list-style:none;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border-radius:.25rem;border:none;-webkit-box-shadow:0 0 12px rgba(0,0,0,.3);box-shadow:0 0 12px rgba(0,0,0,.3);z-index:95}.file-template-dropdown .file-template-dropdown-menu:after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid;content:\"/\";font-size:0;border-width:6px;top:-4px;margin-left:-6px;border-bottom-color:#fff;right:20px;border-top-width:0;z-index:95}.upto-drop{position:absolute;bottom:27px;right:0;min-width:8rem;padding:.5rem 0;margin:.125rem 0 0;font-size:14px;color:#5c5f66;text-align:left;list-style:none;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border-radius:.25rem;border:none;-webkit-box-shadow:0 0 12px rgba(0,0,0,.3);box-shadow:0 0 12px rgba(0,0,0,.3);z-index:95}.upto-drop:before{position:absolute;display:block;right:20px;bottom:-6px;content:\"/\";font-size:0;border-right:6px solid transparent;border-left:6px solid transparent;border-top:6px solid #fff;z-index:95}\@media screen and (max-width:1280px){.temp-container{width:231px;height:176px;margin:10px 5px;border-radius:4px}.temp-container .file-template-icon{height:132px}.temp-container .caption .file-template-title{height:44px;line-height:44px}.temp-container .caption .file-template-drop{height:44px}.temp-container .caption .file-template-drop .file-template-drop-li{margin-top:20px}.temp-container .icon-vip{bottom:44px}}\@media screen and (min-width:1280px) and (max-width:1920px){.temp-container{width:287px;height:219px;margin:12px 5px;border-radius:4px}.temp-container .file-template-icon{height:164px}.temp-container .caption .file-template-title{height:55px;line-height:55px}.temp-container .caption .file-template-drop{height:55px}.temp-container .caption .file-template-drop .file-template-drop-li{margin-top:25px}.temp-container .icon-vip{bottom:55px}}\@media screen and (min-width:1920px){.temp-container{width:348px;height:262px;margin:15px 5px;border-radius:6px}.temp-container .file-template-icon{height:197px}.temp-container .caption .file-template-title{height:65px;line-height:65px}.temp-container .caption .file-template-drop{height:65px}.temp-container .caption .file-template-drop .file-template-drop-li{margin-top:30px}.temp-container .icon-vip{bottom:65px}}"},enumerable:true,configurable:true});return i}())}}}));