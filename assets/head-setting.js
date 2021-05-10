/**
 * 初始化设置
 */
(function () {
  // 临时使用调节语法(node-modules有使用的)
  window.global = window.global || window;
  // soft version
  window.subjectID = 2;
  // Enable bootstrap 4 theme for ngx-bootstrap
  window.__theme = 'bs4';
})();

/**
 * 浏览器检测
 */
(function ie10CX() {
  if (window.ActiveXObject) {
    try {
      var reg = new RegExp(/msie\s([\d.]+)/);
      var nastr = navigator.userAgent.toLowerCase();
      var arr = reg.exec(nastr);
      if (arr) {
        var msi = arr[0].replace('msie ', '');
        var num = parseInt(msi);
        if (num < 11) {
          alert('请使用ie11或以上浏览器打开，推荐使用chrome浏览器')
        }
      }
    } catch (e) {
    }
  }
})();
