webpackJsonp([7],{359:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,r=n(0),i=(n.n(r),n(147)),s=n(376),c=n(446),a=(n.n(c),this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)})),l=n(393),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.render=function(){var t=this;return r.createElement("div",{className:"Settings"},r.createElement("div",{className:"Settings-content"},r.createElement(i.i,null,r.createElement(i.i.Heading,null,"Saved state"),r.createElement(i.i.Body,null,r.createElement("p",null,"The most recent inputs to each tool are stored in the browser's local storage. In the event that state becomes corrupted it can be cleared using the button below."),r.createElement(i.a,{onClick:function(){return t.onClearClick()}},"Clear saved state"))),r.createElement(i.i,null,r.createElement(i.i.Heading,null,"About"),r.createElement(i.i.Body,null,r.createElement("h3",null,"PuzzTool"),"Version: ",l,r.createElement("br",null),r.createElement("a",{href:"https://github.com/beckbria/puzztool/",target:"_blank"},"Project page")))))},e.prototype.onClearClick=function(){s.a.clear()},e}(r.Component);e.default=u},376:function(t,e,n){"use strict";var o=function(){function t(){}return t.isSupported=function(){if(void 0===this._isSupported){var t=window.localStorage,e="__storage_test__";try{t.setItem(e,e),t.removeItem(e),this._isSupported=!0}catch(e){this._isSupported=e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&0!==t.length}}return this._isSupported},t.getItem=function(t){return this.isSupported()?window.localStorage.getItem(this.getKey(t)):null},t.getObject=function(t){if(this.isSupported()){var e=window.localStorage.getItem(this.getKey(t));if(null!==e)return JSON.parse(e)}return null},t.setItem=function(t,e){this.isSupported()&&window.localStorage.setItem(this.getKey(t),e)},t.setObject=function(t,e){this.isSupported()&&window.localStorage.setItem(this.getKey(t),JSON.stringify(e))},t.clear=function(){this.isSupported()&&window.localStorage.clear()},t.getKey=function(t){return this._prefix+"_"+t},t._prefix="puzztool",t}();e.a=o},393:function(t,e){t.exports="0.3.0"},446:function(t,e,n){var o=n(447);"string"===typeof o&&(o=[[t.i,o,""]]);var r={hmr:!1,transform:void 0};n(351)(o,r);o.locals&&(t.exports=o.locals)},447:function(t,e,n){(t.exports=n(350)(!0)).push([t.i,".Settings-content{padding:0 15px 20px}","",{version:3,sources:["/home/travis/build/kfarnung/puzztool/src/Views/Settings.css"],names:[],mappings:"AAAA,kBACE,mBAA4B,CAC7B",file:"Settings.css",sourcesContent:[".Settings-content {\n  padding: 0px 15px 20px 15px;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=7.2414e7a8.chunk.js.map