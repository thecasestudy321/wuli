System.register([],(function(t){"use strict";return{execute:function(){var e=function(){function t(){}t.domQuerySelector=function(t,e){if(t.shadowRoot){return t.shadowRoot.querySelector(e)}return t.querySelector(e)};t.pointIndom=function(t,e){var r=false;for(var o=0;o<e.length;o++){var n=e[o];if(!n){continue}if(t.x>n.left&&t.x<n.right&&t.y>n.top&&t.y<n.bottom){r=true;break}}return r};return t}();t("D",e)}}}));