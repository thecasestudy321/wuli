/**
 * https://github.com/angular/zone.js/blob/b3a76d3f8d374be8edf009f7a077e51eefec6a65/MODULE.md
 * zone.js 要8以上
 */
(function disableAngular() {
  // window.__Zone_disable_requestAnimationFrame = true;
  // window.__zone_symbol__BLACK_LISTED_EVENTS = ['pointermove', 'touchmove']; // disable patch specified eventNames
  // window.__Zone_disable_Error = true; // Zone will not patch Error
  // window.__Zone_disable_toString = true; // Zone will not patch Function.prototype.toString
  // window.__Zone_disable_timer = true; // setTimeout / setInterval / setImmediate
  var props = ['scroll', 'mousemove', 'mousewheel', 'touchstart', 'touchmove', 'pointerleave', 'pointermove', 'pointerover', 'pointerdown'];
  var targets = [window, document, Document.prototype, HTMLBodyElement.prototype, HTMLElement.prototype];
  window.__Zone_ignore_on_properties = [];
  targets.forEach(function (target) {
    window.__Zone_ignore_on_properties.push({
      target: target,
      ignoreProperties: props
    });
  });

  // disable requestAnimationFrame
  // window.__Zone_disable_requestAnimationFrame = true;
  window.__Zone_disable_on_property = true; // Zone will not patch onProperty such as button.onclick, not sure if this should be left disabled...
  window.__zone_symbol__BLACK_LISTED_EVENTS = props;
  __zone_symbol__requestAnimationFrame = requestAnimationFrame;
  __zone_symbol__cancelAnimationFrame = cancelAnimationFrame;
  _zone_symbol__webkitRequestAnimationFrame = webkitRequestAnimationFrame;
  __Zone_disable_timer = true;
  __Zone_disable_Error = true;
})();
