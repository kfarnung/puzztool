(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{132:function(e,t,n){"use strict";var a=n(20),r=n(21),o=n(32),i=n(30),u=n(31),l=n(135),c=n.n(l),s=n(0),d=n(133),f=n(134),p=function(e){function t(e){var n;Object(a.a)(this,t),(n=Object(o.a)(this,Object(i.a)(t).call(this,e))).VERSION_STORAGE_KEY="puzztoolVersion";var r=d.a.getObject(n.VERSION_STORAGE_KEY);return n.versionIncreased(r,f.a)&&(d.a.clear(),d.a.setObject(n.VERSION_STORAGE_KEY,f.a)),n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"versionIncreased",value:function(e,t){return null==e||1===c()(t,e)}},{key:"componentDidMount",value:function(){this.restoreState(),this.updateState()}},{key:"updateState",value:function(){this.onUpdateState(),this.saveState()}},{key:"saveState",value:function(){d.a.setObject(this.getLocalStorageKey(),this.onSaveState())}},{key:"restoreState",value:function(){this.onRestoreState(d.a.getObject(this.getLocalStorageKey()))}}]),t}(s.Component);t.a=p},133:function(e,t,n){"use strict";var a=n(20),r=n(21),o=function(){function e(){Object(a.a)(this,e)}return Object(r.a)(e,null,[{key:"isSupported",value:function(){if(void 0===this._isSupported){var e=window.localStorage,t="__storage_test__";try{e.setItem(t,t),e.removeItem(t),this._isSupported=!0}catch(n){this._isSupported=n instanceof DOMException&&(22===n.code||1014===n.code||"QuotaExceededError"===n.name||"NS_ERROR_DOM_QUOTA_REACHED"===n.name)&&0!==e.length}}return this._isSupported}},{key:"getItem",value:function(e){return this.isSupported()?window.localStorage.getItem(this.getKey(e)):null}},{key:"getObject",value:function(e){if(this.isSupported()){var t=window.localStorage.getItem(this.getKey(e));if(null!==t)return JSON.parse(t)}return null}},{key:"setItem",value:function(e,t){this.isSupported()&&window.localStorage.setItem(this.getKey(e),t)}},{key:"setObject",value:function(e,t){this.isSupported()&&window.localStorage.setItem(this.getKey(e),JSON.stringify(t))}},{key:"clear",value:function(){this.isSupported()&&window.localStorage.clear()}},{key:"getKey",value:function(e){return"".concat(this._prefix,"_").concat(e)}}]),e}();o._isSupported=void 0,o._prefix="puzztool",t.a=o},134:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a="0.7.0"},135:function(e,t,n){var a,r,o;r=[],void 0===(o="function"===typeof(a=function(){var e=/^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;function t(e){var t,n,a=e.replace(/^v/,"").replace(/\+.*$/,""),r=(n="-",-1===(t=a).indexOf(n)?t.length:t.indexOf(n)),o=a.substring(0,r).split(".");return o.push(a.substring(r+1)),o}function n(e){return isNaN(Number(e))?e:Number(e)}function a(t){if("string"!==typeof t)throw new TypeError("Invalid argument expected string");if(!e.test(t))throw new Error("Invalid argument not valid semver ('"+t+"' received)")}function r(e,r){[e,r].forEach(a);for(var o=t(e),i=t(r),u=0;u<Math.max(o.length-1,i.length-1);u++){var l=parseInt(o[u]||0,10),c=parseInt(i[u]||0,10);if(l>c)return 1;if(c>l)return-1}var s=o[o.length-1],d=i[i.length-1];if(s&&d){var f=s.split(".").map(n),p=d.split(".").map(n);for(u=0;u<Math.max(f.length,p.length);u++){if(void 0===f[u]||"string"===typeof p[u]&&"number"===typeof f[u])return-1;if(void 0===p[u]||"string"===typeof f[u]&&"number"===typeof p[u])return 1;if(f[u]>p[u])return 1;if(p[u]>f[u])return-1}}else if(s||d)return s?-1:1;return 0}var o=[">",">=","=","<","<="];return r.compare=function(e,t,n){switch(function(e){if("string"!==typeof e)throw new TypeError("Invalid operator type, expected string but got "+typeof e);if(-1===o.indexOf(e))throw new TypeError("Invalid operator, expected one of "+o.join("|"))}(n),n){case">":return r(e,t)>0;case">=":return r(e,t)>=0;case"<":return r(e,t)<0;case"<=":return r(e,t)<=0;default:return 0===r(e,t)}},r})?a.apply(t,r):a)||(e.exports=o)},136:function(e,t,n){"use strict";var a=n(2);t.__esModule=!0,t.default=void 0;var r=a(n(4)),o=a(n(5)),i=a(n(19)),u=a(n(8)),l=a(n(0)),c=n(9),s=function(e){function t(){return e.apply(this,arguments)||this}return(0,i.default)(t,e),t.prototype.render=function(){var e=this.props,t=e.bsPrefix,n=e.className,a=e.striped,i=e.bordered,c=e.borderless,s=e.hover,d=e.size,f=e.variant,p=e.responsive,v=(0,o.default)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),m=(0,u.default)(t,n,f&&t+"-"+f,d&&t+"-"+d,a&&t+"-striped",i&&t+"-bordered",c&&t+"-borderless",s&&t+"-hover"),E=l.default.createElement("table",(0,r.default)({},v,{className:m}));if(p){var h=t+"-responsive";return"string"===typeof p&&(h=h+"-"+p),l.default.createElement("div",{className:h},E)}return E},t}(l.default.Component),d=(0,c.createBootstrapComponent)(s,"table");t.default=d,e.exports=t.default},137:function(e,t,n){"use strict";var a=n(2);t.__esModule=!0,t.default=void 0;var r=a(n(4)),o=a(n(19)),i=a(n(0)),u=a(n(47)),l=a(n(70)),c=a(n(26)),s=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).getControlledId=function(e){return t.getKey(e,"tabpane")},t.getControllerId=function(e){return t.getKey(e,"tab")},t.state={tabContext:{onSelect:t.props.onSelect,activeKey:t.props.activeKey,transition:t.props.transition,mountOnEnter:t.props.mountOnEnter,unmountOnExit:t.props.unmountOnExit,getControlledId:t.getControlledId,getControllerId:t.getControllerId}},t}(0,o.default)(t,e),t.getDerivedStateFromProps=function(e,t){var n=e.activeKey,a=e.mountOnEnter,o=e.unmountOnExit,i=e.transition;return{tabContext:(0,r.default)({},t.tabContext,{activeKey:n,mountOnEnter:a,unmountOnExit:o,transition:i})}};var n=t.prototype;return n.getKey=function(e,t){var n=this.props,a=n.generateChildId,r=n.id;return a?a(e,t):r?r+"-"+t+"-"+e:null},n.render=function(){var e=this.props,t=e.children,n=e.onSelect;return i.default.createElement(l.default.Provider,{value:this.state.tabContext},i.default.createElement(c.default.Provider,{value:n},t))},t}(i.default.Component),d=(0,u.default)(s,{activeKey:"onSelect"});t.default=d,e.exports=t.default},138:function(e,t,n){"use strict";var a=n(2);t.__esModule=!0,t.default=void 0;var r=a(n(4)),o=a(n(5)),i=a(n(19)),u=a(n(8)),l=a(n(0)),c=n(9),s=function(e){function t(){return e.apply(this,arguments)||this}return(0,i.default)(t,e),t.prototype.render=function(){var e=this.props,t=e.bsPrefix,n=e.as,a=void 0===n?"div":n,i=e.className,c=(0,o.default)(e,["bsPrefix","as","className"]);return l.default.createElement(a,(0,r.default)({},c,{className:(0,u.default)(i,t)}))},t}(l.default.Component),d=(0,c.createBootstrapComponent)(s,"tab-content");t.default=d,e.exports=t.default},139:function(e,t,n){"use strict";var a=n(15),r=n(2);t.__esModule=!0,t.default=void 0;var o=r(n(4)),i=r(n(5)),u=r(n(8)),l=a(n(0)),c=n(9),s=r(n(70)),d=a(n(26)),f=r(n(149));var p=l.default.forwardRef(function(e,t){var n=function(e){var t=(0,l.useContext)(s.default);if(!t)return e;var n=t.activeKey,a=t.getControlledId,r=t.getControllerId,u=(0,i.default)(t,["activeKey","getControlledId","getControllerId"]),c=!1!==e.transition&&!1!==u.transition,p=(0,d.makeEventKey)(e.eventKey);return(0,o.default)({},e,{active:null==e.active&&null!=p?(0,d.makeEventKey)(n)===p:e.active,id:a(e.eventKey),"aria-labelledby":r(e.eventKey),transition:c&&(e.transition||u.transition||f.default),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:u.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:u.unmountOnExit})}(e),a=n.bsPrefix,r=n.className,p=n.active,v=n.onEnter,m=n.onEntering,E=n.onEntered,h=n.onExit,y=n.onExiting,b=n.onExited,O=n.mountOnEnter,g=n.unmountOnExit,x=n.transition,S=n.as,C=void 0===S?"div":S,K=(n.eventKey,(0,i.default)(n,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),_=(0,c.useBootstrapPrefix)(a,"tab-pane");if(!p&&g)return null;var w=l.default.createElement(C,(0,o.default)({},K,{ref:t,role:"tabpanel","aria-hidden":!p,className:(0,u.default)(r,_,{active:p})}));return x&&(w=l.default.createElement(x,{in:p,onEnter:v,onEntering:m,onEntered:E,onExit:h,onExiting:y,onExited:b,mountOnEnter:O,unmountOnExit:O},w)),l.default.createElement(s.default.Provider,{value:null},l.default.createElement(d.default.Provider,{value:null},w))});p.displayName="TabPane";var v=p;t.default=v,e.exports=t.default},143:function(e,t,n){"use strict";var a=n(2);t.__esModule=!0,t.map=function(e,t){var n=0;return r.default.Children.map(e,function(e){return r.default.isValidElement(e)?t(e,n++):e})},t.forEach=function(e,t){var n=0;r.default.Children.forEach(e,function(e){r.default.isValidElement(e)&&t(e,n++)})};var r=a(n(0))},148:function(e,t,n){"use strict";var a=n(2);t.__esModule=!0,t.default=void 0;var r=a(n(4)),o=a(n(5)),i=a(n(19)),u=a(n(0)),l=(a(n(72)),a(n(47))),c=a(n(33)),s=a(n(49)),d=a(n(48)),f=a(n(137)),p=a(n(138)),v=a(n(139)),m=n(143),E=f.default.ControlledComponent;var h=function(e){function t(){return e.apply(this,arguments)||this}(0,i.default)(t,e);var n=t.prototype;return n.renderTab=function(e){var t=e.props,n=t.title,a=t.eventKey,r=t.disabled,o=t.tabClassName;return null==n?null:u.default.createElement(d.default,{as:s.default,eventKey:a,disabled:r,className:o},n)},n.render=function(){var e=this.props,t=e.id,n=e.onSelect,a=e.transition,i=e.mountOnEnter,l=e.unmountOnExit,s=e.children,d=e.activeKey,f=void 0===d?function(e){var t;return(0,m.forEach)(e,function(e){null==t&&(t=e.props.eventKey)}),t}(s):d,h=(0,o.default)(e,["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"]);return u.default.createElement(E,{id:t,activeKey:f,onSelect:n,transition:a,mountOnEnter:i,unmountOnExit:l},u.default.createElement(c.default,(0,r.default)({},h,{role:"tablist",as:"nav"}),(0,m.map)(s,this.renderTab)),u.default.createElement(p.default,null,(0,m.map)(s,function(e){var t=(0,r.default)({},e.props);return delete t.title,delete t.disabled,delete t.tabClassName,u.default.createElement(v.default,t)})))},t}(u.default.Component);h.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1};var y=(0,l.default)(h,{activeKey:"onSelect"});t.default=y,e.exports=t.default},149:function(e,t,n){"use strict";var a=n(2),r=n(15);t.__esModule=!0,t.default=void 0;var o,i=a(n(4)),u=a(n(5)),l=a(n(19)),c=a(n(8)),s=a(n(0)),d=r(n(75)),f=a(n(73)),p=a(n(74)),v=((o={})[d.ENTERING]="show",o[d.ENTERED]="show",o),m=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).handleEnter=function(e){(0,p.default)(e),t.props.onEnter&&t.props.onEnter(e)},t}return(0,l.default)(t,e),t.prototype.render=function(){var e=this.props,t=e.className,n=e.children,a=(0,u.default)(e,["className","children"]);return s.default.createElement(d.default,(0,i.default)({addEndListener:f.default},a,{onEnter:this.handleEnter}),function(e,a){return s.default.cloneElement(n,(0,i.default)({},a,{className:(0,c.default)("fade",t,n.props.className,v[e])}))})},t}(s.default.Component);m.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1};var E=m;t.default=E,e.exports=t.default},150:function(e,t,n){"use strict";var a=n(2);t.__esModule=!0,t.default=void 0;var r=a(n(19)),o=a(n(0)),i=a(n(137)),u=a(n(138)),l=a(n(139)),c=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.default)(t,e),t.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},t}(o.default.Component);c.Container=i.default,c.Content=u.default,c.Pane=l.default;var s=c;t.default=s,e.exports=t.default},163:function(e,t,n){},225:function(e,t,n){},254:function(e,t,n){"use strict";n.r(t);var a=n(20),r=n(21),o=n(32),i=n(30),u=n(31),l=n(0),c=n.n(l),s=n(150),d=n.n(s),f=n(148),p=n.n(f),v=n(131),m=n(136),E=n.n(m),h=(n(225),function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"CharacterTable"},c.a.createElement(E.a,{striped:!0,responsive:!0},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Character"),c.a.createElement("th",null,"Binary"),c.a.createElement("th",null,"Ternary"),c.a.createElement("th",null,"Octal"),c.a.createElement("th",null,"Decimal"),c.a.createElement("th",null,"Hexadecimal"))),c.a.createElement("tbody",null,this.renderRows(this.props.data))))}},{key:"renderRows",value:function(e){return e.map(function(e){return c.a.createElement("tr",{key:e.character},c.a.createElement("td",null,e.character),c.a.createElement("td",null,e.binary),c.a.createElement("td",null,e.ternary),c.a.createElement("td",null,e.octal),c.a.createElement("td",null,e.decimal),c.a.createElement("td",null,e.hexadecimal.toUpperCase()))})}}]),t}(l.Component)),y=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"AsciiTable"},c.a.createElement(h,{data:v.CharacterConversion.getAsciiTable()}))}}]),t}(l.Component),b=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"OrdinalTable"},c.a.createElement(h,{data:v.CharacterConversion.getOrdinalTable()}))}}]),t}(l.Component),O=n(132),g=(n(163),function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(i.a)(t).call(this,e)))._activeKey=1,n.state={activeKey:n._activeKey},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"CharacterEncodings"},c.a.createElement("div",{className:"CharacterEncodings-content"},c.a.createElement(p.a,{activeKey:this.state.activeKey,animation:!1,id:"CharacterEncodings-tabs",onSelect:function(t){return e.onTabSelect(t)}},c.a.createElement(d.a,{eventKey:1,title:"ASCII"},c.a.createElement(y,null)),c.a.createElement(d.a,{eventKey:2,title:"Ordinal"},c.a.createElement(b,null)))))}},{key:"getLocalStorageKey",value:function(){return"CharacterEncodings"}},{key:"onSaveState",value:function(){return{activeKey:this._activeKey}}},{key:"onRestoreState",value:function(e){null!==e&&(this._activeKey=e.activeKey)}},{key:"onUpdateState",value:function(){this.setState({activeKey:this._activeKey})}},{key:"onTabSelect",value:function(e){this._activeKey=e,this.updateState()}}]),t}(O.a));t.default=g}}]);
//# sourceMappingURL=11.f1835069.chunk.js.map