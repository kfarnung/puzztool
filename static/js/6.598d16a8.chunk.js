(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{177:function(e,t,a){"use strict";var n=a(24),r=a(25),s=a(39),c=a(37),o=a(38),i=a(1),u=a(178),l=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.restoreState(),this.updateState()}},{key:"updateState",value:function(){this.onUpdateState(),this.saveState()}},{key:"saveState",value:function(){u.a.setObject(this.getLocalStorageKey(),this.onSaveState())}},{key:"restoreState",value:function(){this.onRestoreState(u.a.getObject(this.getLocalStorageKey()))}}]),t}(i.Component);t.a=l},178:function(e,t,a){"use strict";var n=a(24),r=a(25),s=function(){function e(){Object(n.a)(this,e)}return Object(r.a)(e,null,[{key:"isSupported",value:function(){if(void 0===this._isSupported){var e=window.localStorage,t="__storage_test__";try{e.setItem(t,t),e.removeItem(t),this._isSupported=!0}catch(a){this._isSupported=a instanceof DOMException&&(22===a.code||1014===a.code||"QuotaExceededError"===a.name||"NS_ERROR_DOM_QUOTA_REACHED"===a.name)&&0!==e.length}}return this._isSupported}},{key:"getItem",value:function(e){return this.isSupported()?window.localStorage.getItem(this.getKey(e)):null}},{key:"getObject",value:function(e){if(this.isSupported()){var t=window.localStorage.getItem(this.getKey(e));if(null!==t)return JSON.parse(t)}return null}},{key:"setItem",value:function(e,t){this.isSupported()&&window.localStorage.setItem(this.getKey(e),t)}},{key:"setObject",value:function(e,t){this.isSupported()&&window.localStorage.setItem(this.getKey(e),JSON.stringify(t))}},{key:"clear",value:function(){this.isSupported()&&window.localStorage.clear()}},{key:"getKey",value:function(e){return"".concat(this._prefix,"_").concat(e)}}]),e}();s._prefix="puzztool",t.a=s},180:function(e,t,a){"use strict";var n=a(37);function r(e,t,a){return(r="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(e,t,a){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Object(n.a)(e)););return e}(e,t);if(r){var s=Object.getOwnPropertyDescriptor(r,t);return s.get?s.get.call(a):s.value}})(e,t,a||e)}a.d(t,"a",function(){return r})},245:function(e,t,a){},247:function(e,t,a){},249:function(e,t,a){},303:function(e,t,a){"use strict";a.r(t);var n=a(24),r=a(25),s=a(39),c=a(37),o=a(38),i=a(1),u=a.n(i),l=a(180),p=a(69),f=a(41),h=a(63),m=a(51),b=(a(245),a(200)),d=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("pre",{className:"CaesarList"},this.renderListItems())}},{key:"renderListItems",value:function(){return this.props.list.map(function(e,t){if(0!==t)return u.a.createElement("div",{key:t},b(t,2),": ",e)})}}]),t}(i.Component),y=a(177),O=a(179),j=(a(247),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(c.a)(t).call(this,e)))._str=new O.CaesarString,a.state={text:"",list:[]},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){Object(l.a)(Object(c.a)(t.prototype),"componentDidMount",this).call(this),this._input&&this._input.focus()}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"CaesarStream"},u.a.createElement(p.a,{className:"CaesarStream-input",inputRef:function(t){e._input=t},onChange:function(t){return e.onTextChanged(t)},placeholder:"Text",value:this.state.text}),u.a.createElement(f.a,{className:"CaesarStream-commands"},u.a.createElement(h.a,null,u.a.createElement(m.a,{onClick:function(t){return e.onClearClick(t)}},"Clear"))),u.a.createElement(d,{list:this.state.list}))}},{key:"getLocalStorageKey",value:function(){return"CaesarStream"}},{key:"onSaveState",value:function(){return{text:this._str.text}}},{key:"onRestoreState",value:function(e){null!==e&&(this._str.text=e.text)}},{key:"onUpdateState",value:function(){this.setState({list:this._str.getRotations(),text:this._str.text})}},{key:"onTextChanged",value:function(e){var t=e.target;this._str.text=t.value,this.updateState()}},{key:"onClearClick",value:function(e){this._str.text="",this.updateState()}}]),t}(y.a)),v=(a(249),function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"Caesar"},u.a.createElement("div",{className:"Caesar-content"},u.a.createElement("div",{className:"Caesar-info"},u.a.createElement("h2",null,"Caesar Cipher"),u.a.createElement("p",null,"A Caesar cipher works by shifting every letter by a fixed amount. This is a simple cipher - there are only 25 different shifts for each letter."),u.a.createElement("p",null,"Type in your text, and all possible shifts will be displayed.")),u.a.createElement(j,null)))}}]),t}(i.Component));t.default=v},41:function(e,t,a){"use strict";var n=a(3),r=a(4),s=a(6),c=a(5),o=a.n(c),i=a(1),u=a.n(i),l=a(2),p=function(e){function t(){return e.apply(this,arguments)||this}return Object(s.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.className,a=Object(r.a)(e,["className"]),s=Object(l.f)(a),c=s[0],i=s[1],p=Object(l.d)(c);return u.a.createElement("div",Object(n.a)({},i,{role:"toolbar",className:o()(t,p)}))},t}(u.a.Component);t.a=Object(l.a)("btn-toolbar",p)},69:function(e,t,a){"use strict";var n=a(3),r=a(4),s=a(6),c=a(5),o=a.n(c),i=a(1),u=a.n(i),l=a(0),p=a.n(l),f=a(18),h=a.n(f),m=(a(10),a(2)),b={glyph:p.a.string.isRequired},d=function(e){function t(){return e.apply(this,arguments)||this}return Object(s.a)(t,e),t.prototype.render=function(){var e,t=this.props,a=t.glyph,s=t.className,c=Object(r.a)(t,["glyph","className"]),i=Object(m.f)(c),l=i[0],p=i[1],f=Object(n.a)({},Object(m.d)(l),((e={})[Object(m.e)(l,a)]=!0,e));return u.a.createElement("span",Object(n.a)({},p,{className:o()(s,f)}))},t}(u.a.Component);d.propTypes=b;var y=Object(m.a)("glyphicon",d),O={$bs_formGroup:p.a.object},j=function(e){function t(){return e.apply(this,arguments)||this}Object(s.a)(t,e);var a=t.prototype;return a.getGlyph=function(e){switch(e){case"success":return"ok";case"warning":return"warning-sign";case"error":return"remove";default:return null}},a.renderDefaultFeedback=function(e,t,a,r){var s=this.getGlyph(e&&e.validationState);return s?u.a.createElement(y,Object(n.a)({},r,{glyph:s,className:o()(t,a)})):null},a.render=function(){var e=this.props,t=e.className,a=e.children,s=Object(r.a)(e,["className","children"]),c=Object(m.f)(s),i=c[0],l=c[1],p=Object(m.d)(i);if(!a)return this.renderDefaultFeedback(this.context.$bs_formGroup,t,p,l);var f=u.a.Children.only(a);return u.a.cloneElement(f,Object(n.a)({},l,{className:o()(f.props.className,t,p)}))},t}(u.a.Component);j.defaultProps={bsRole:"feedback"},j.contextTypes=O;var v=Object(m.a)("form-control-feedback",j),g={componentClass:h.a},S=function(e){function t(){return e.apply(this,arguments)||this}return Object(s.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.componentClass,a=e.className,s=Object(r.a)(e,["componentClass","className"]),c=Object(m.f)(s),i=c[0],l=c[1],p=Object(m.d)(i);return u.a.createElement(t,Object(n.a)({},l,{className:o()(a,p)}))},t}(u.a.Component);S.propTypes=g,S.defaultProps={componentClass:"p"};var C=Object(m.a)("form-control-static",S),k=a(11),_={componentClass:h.a,type:p.a.string,id:p.a.string,inputRef:p.a.func},E={$bs_formGroup:p.a.object},N=function(e){function t(){return e.apply(this,arguments)||this}return Object(s.a)(t,e),t.prototype.render=function(){var e,t=this.context.$bs_formGroup,a=t&&t.controlId,s=this.props,c=s.componentClass,i=s.type,l=s.id,p=void 0===l?a:l,f=s.inputRef,h=s.className,b=s.bsSize,d=Object(r.a)(s,["componentClass","type","id","inputRef","className","bsSize"]),y=Object(m.f)(d),O=y[0],j=y[1];if("file"!==i&&(e=Object(m.d)(O)),b){var v=k.a[b]||b;e[Object(m.e)({bsClass:"input"},v)]=!0}return u.a.createElement(c,Object(n.a)({},j,{type:i,id:p,ref:f,className:o()(h,e)}))},t}(u.a.Component);N.propTypes=_,N.defaultProps={componentClass:"input"},N.contextTypes=E,N.Feedback=v,N.Static=C;t.a=Object(m.a)("form-control",Object(m.b)([k.b.SMALL,k.b.LARGE],N))}}]);
//# sourceMappingURL=6.598d16a8.chunk.js.map