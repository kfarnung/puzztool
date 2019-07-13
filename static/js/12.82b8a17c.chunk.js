(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{177:function(e,t,a){"use strict";var n=a(25),r=a(26),c=a(39),i=a(37),l=a(38),o=a(181),u=a.n(o),s=a(0),d=a(178),h=a(179),v=function(e){function t(e){var a;Object(n.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).VERSION_STORAGE_KEY="puzztoolVersion";var r=d.a.getObject(a.VERSION_STORAGE_KEY);return a.versionIncreased(r,h.a)&&(d.a.clear(),d.a.setObject(a.VERSION_STORAGE_KEY,h.a)),a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"versionIncreased",value:function(e,t){return null==e||1===u()(t,e)}},{key:"componentDidMount",value:function(){this.restoreState(),this.updateState()}},{key:"updateState",value:function(){this.onUpdateState(),this.saveState()}},{key:"saveState",value:function(){d.a.setObject(this.getLocalStorageKey(),this.onSaveState())}},{key:"restoreState",value:function(){this.onRestoreState(d.a.getObject(this.getLocalStorageKey()))}}]),t}(s.Component);t.a=v},178:function(e,t,a){"use strict";var n=a(25),r=a(26),c=function(){function e(){Object(n.a)(this,e)}return Object(r.a)(e,null,[{key:"isSupported",value:function(){if(void 0===this._isSupported){var e=window.localStorage,t="__storage_test__";try{e.setItem(t,t),e.removeItem(t),this._isSupported=!0}catch(a){this._isSupported=a instanceof DOMException&&(22===a.code||1014===a.code||"QuotaExceededError"===a.name||"NS_ERROR_DOM_QUOTA_REACHED"===a.name)&&0!==e.length}}return this._isSupported}},{key:"getItem",value:function(e){return this.isSupported()?window.localStorage.getItem(this.getKey(e)):null}},{key:"getObject",value:function(e){if(this.isSupported()){var t=window.localStorage.getItem(this.getKey(e));if(null!==t)return JSON.parse(t)}return null}},{key:"setItem",value:function(e,t){this.isSupported()&&window.localStorage.setItem(this.getKey(e),t)}},{key:"setObject",value:function(e,t){this.isSupported()&&window.localStorage.setItem(this.getKey(e),JSON.stringify(t))}},{key:"clear",value:function(){this.isSupported()&&window.localStorage.clear()}},{key:"getKey",value:function(e){return"".concat(this._prefix,"_").concat(e)}}]),e}();c._isSupported=void 0,c._prefix="puzztool",t.a=c},179:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n="0.7.0"},197:function(e,t,a){},257:function(e,t,a){},258:function(e,t,a){},259:function(e,t,a){},287:function(e,t,a){"use strict";a.r(t);var n=a(25),r=a(26),c=a(39),i=a(37),l=a(38),o=a(0),u=a.n(o),s=a(292),d=a(289),h=a(180),v=a(195),m=(a(257),function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"CharacterTable"},u.a.createElement(v.a,{striped:!0,responsive:!0},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"Character"),u.a.createElement("th",null,"Binary"),u.a.createElement("th",null,"Ternary"),u.a.createElement("th",null,"Octal"),u.a.createElement("th",null,"Decimal"),u.a.createElement("th",null,"Hexadecimal"))),u.a.createElement("tbody",null,this.renderRows(this.props.data))))}},{key:"renderRows",value:function(e){return e.map(function(e){return u.a.createElement("tr",{key:e.character},u.a.createElement("td",null,e.character),u.a.createElement("td",null,e.binary),u.a.createElement("td",null,e.ternary),u.a.createElement("td",null,e.octal),u.a.createElement("td",null,e.decimal),u.a.createElement("td",null,e.hexadecimal.toUpperCase()))})}}]),t}(o.Component)),p=(a(258),function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"AsciiTable"},u.a.createElement(m,{data:h.CharacterConversion.getAsciiTable()}))}}]),t}(o.Component)),y=(a(259),function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"OrdinalTable"},u.a.createElement(m,{data:h.CharacterConversion.getOrdinalTable()}))}}]),t}(o.Component)),f=a(177),O=(a(197),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e)))._activeKey=1,a.state={activeKey:a._activeKey},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"CharacterEncodings"},u.a.createElement("div",{className:"CharacterEncodings-content"},u.a.createElement(s.a,{activeKey:this.state.activeKey,animation:!1,id:"CharacterEncodings-tabs",onSelect:function(t){return e.onTabSelect(t)}},u.a.createElement(d.a,{eventKey:1,title:"ASCII"},u.a.createElement(p,null)),u.a.createElement(d.a,{eventKey:2,title:"Ordinal"},u.a.createElement(y,null)))))}},{key:"getLocalStorageKey",value:function(){return"CharacterEncodings"}},{key:"onSaveState",value:function(){return{activeKey:this._activeKey}}},{key:"onRestoreState",value:function(e){null!==e&&(this._activeKey=e.activeKey)}},{key:"onUpdateState",value:function(){this.setState({activeKey:this._activeKey})}},{key:"onTabSelect",value:function(e){this._activeKey=e,this.updateState()}}]),t}(f.a));t.default=O}}]);
//# sourceMappingURL=12.82b8a17c.chunk.js.map