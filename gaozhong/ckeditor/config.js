/**
 * ckeditor_4.12.1_full.zip
 * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_config.html
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function (config) {
  // 界面语言，默认为 'en'
  config.language = 'zh-cn';
  // 背景颜色
  config.uiColor = '#525963';
  //工具栏是否可以被收缩
  config.toolbarCanCollapse = true;
  // 设置宽高
  config.width = '100%';
  config.height = '400px';
  // 默认字体大小
  config.fontSize_defaultLabel = '28';
  config.fontSize_style = {
    element   : 'span',
    styles   : { 'font-size' : '#(size)' },
    overrides : [ { element : 'font', attributes : { 'size' : null } } ]
};
  // 工具栏（基础'Basic'、全能'Full'、自定义）plugins/toolbar/plugin.js
  // config.toolbar = 'Basic';
  config.toolbar = 'Full';
  config.toolbar_Full = [
    ['Undo', 'Redo', '-', 'TextColor', 'BGColor',
      'Format', 'Font', 'FontSize', 'Bold', 'Italic', 'Underline', 'Strike', '-', 'Subscript', 'Superscript',
      'NumberedList', 'BulletedList', '-',
      'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-',
      'Table', 'Image', 'SpecialChar']
  ];
  //工具栏是否可以被收缩
  config.toolbarCanCollapse = true;
  //工具栏的位置
  config.toolbarLocation = 'top';//可选：bottom
  //工具栏默认是否展开
  config.toolbarStartupExpanded = false;
  // 取消 “拖拽以改变尺寸”功能 plugins/resize/plugin.js
  config.resize_enabled = false;
  config.removePlugins = 'elementspath'; // 移除状态栏
  config.removeDialogTabs = 'image:advanced;link:advanced';
  config.skin = 'moono-dark';
   //所需要添加的CSS文件 在此添加 可使用相对路径和网站的绝对路径
  //  config.contentsCss = './ckeditor/contents.css';
};
