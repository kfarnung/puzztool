(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{133:function(e,t,a){"use strict";var r=a(20),n=a(21),o=a(32),u=a(30),i=a(31),l=a(136),s=a.n(l),c=a(0),f=a(134),d=a(135),p=function(e){function t(e){var a;Object(r.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).VERSION_STORAGE_KEY="puzztoolVersion";var n=f.a.getObject(a.VERSION_STORAGE_KEY);return a.versionIncreased(n,d.a)&&(f.a.clear(),f.a.setObject(a.VERSION_STORAGE_KEY,d.a)),a}return Object(i.a)(t,e),Object(n.a)(t,[{key:"versionIncreased",value:function(e,t){return null==e||1===s()(t,e)}},{key:"componentDidMount",value:function(){this.restoreState(),this.updateState()}},{key:"updateState",value:function(){this.onUpdateState(),this.saveState()}},{key:"saveState",value:function(){f.a.setObject(this.getLocalStorageKey(),this.onSaveState())}},{key:"restoreState",value:function(){this.onRestoreState(f.a.getObject(this.getLocalStorageKey()))}}]),t}(c.Component);t.a=p},134:function(e,t,a){"use strict";var r=a(20),n=a(21),o=function(){function e(){Object(r.a)(this,e)}return Object(n.a)(e,null,[{key:"isSupported",value:function(){if(void 0===this._isSupported){var e=window.localStorage,t="__storage_test__";try{e.setItem(t,t),e.removeItem(t),this._isSupported=!0}catch(a){this._isSupported=a instanceof DOMException&&(22===a.code||1014===a.code||"QuotaExceededError"===a.name||"NS_ERROR_DOM_QUOTA_REACHED"===a.name)&&0!==e.length}}return this._isSupported}},{key:"getItem",value:function(e){return this.isSupported()?window.localStorage.getItem(this.getKey(e)):null}},{key:"getObject",value:function(e){if(this.isSupported()){var t=window.localStorage.getItem(this.getKey(e));if(null!==t)return JSON.parse(t)}return null}},{key:"setItem",value:function(e,t){this.isSupported()&&window.localStorage.setItem(this.getKey(e),t)}},{key:"setObject",value:function(e,t){this.isSupported()&&window.localStorage.setItem(this.getKey(e),JSON.stringify(t))}},{key:"clear",value:function(){this.isSupported()&&window.localStorage.clear()}},{key:"getKey",value:function(e){return"".concat(this._prefix,"_").concat(e)}}]),e}();o._isSupported=void 0,o._prefix="puzztool",t.a=o},135:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var r="0.7.0"},136:function(e,t,a){var r,n,o;n=[],void 0===(o="function"===typeof(r=function(){var e=/^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;function t(e){var t,a,r=e.replace(/^v/,"").replace(/\+.*$/,""),n=(a="-",-1===(t=r).indexOf(a)?t.length:t.indexOf(a)),o=r.substring(0,n).split(".");return o.push(r.substring(n+1)),o}function a(e){return isNaN(Number(e))?e:Number(e)}function r(t){if("string"!==typeof t)throw new TypeError("Invalid argument expected string");if(!e.test(t))throw new Error("Invalid argument not valid semver ('"+t+"' received)")}function n(e,n){[e,n].forEach(r);for(var o=t(e),u=t(n),i=0;i<Math.max(o.length-1,u.length-1);i++){var l=parseInt(o[i]||0,10),s=parseInt(u[i]||0,10);if(l>s)return 1;if(s>l)return-1}var c=o[o.length-1],f=u[u.length-1];if(c&&f){var d=c.split(".").map(a),p=f.split(".").map(a);for(i=0;i<Math.max(d.length,p.length);i++){if(void 0===d[i]||"string"===typeof p[i]&&"number"===typeof d[i])return-1;if(void 0===p[i]||"string"===typeof d[i]&&"number"===typeof p[i])return 1;if(d[i]>p[i])return 1;if(p[i]>d[i])return-1}}else if(c||f)return c?-1:1;return 0}var o=[">",">=","=","<","<="];return n.compare=function(e,t,a){switch(function(e){if("string"!==typeof e)throw new TypeError("Invalid operator type, expected string but got "+typeof e);if(-1===o.indexOf(e))throw new TypeError("Invalid operator, expected one of "+o.join("|"))}(a),a){case">":return n(e,t)>0;case">=":return n(e,t)>=0;case"<":return n(e,t)<0;case"<=":return n(e,t)<=0;default:return 0===n(e,t)}},n})?r.apply(t,n):r)||(e.exports=o)},141:function(e,t,a){"use strict";var r=a(2);t.__esModule=!0,t.default=void 0;var n=r(a(4)),o=r(a(5)),u=r(a(8)),i=r(a(0)),l=a(9),s=i.default.forwardRef(function(e,t){var a=e.bsPrefix,r=e.className,s=(0,o.default)(e,["bsPrefix","className"]),c=(0,l.useBootstrapPrefix)(a,"btn-toolbar");return i.default.createElement("div",(0,n.default)({},s,{ref:t,className:(0,u.default)(r,c)}))});s.displayName="ButtonToolbar",s.defaultProps={role:"toolbar"};var c=s;t.default=c,e.exports=t.default},142:function(e,t,a){"use strict";var r=a(30);function n(e,t,a){return(n="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(e,t,a){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Object(r.a)(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(a):o.value}})(e,t,a||e)}a.d(t,"a",function(){return n})},143:function(e,t,a){"use strict";var r=a(2);t.__esModule=!0,t.default=void 0;var n=r(a(4)),o=r(a(0)),u=r(a(8));t.default=function(e){return o.default.forwardRef(function(t,a){return o.default.createElement("div",(0,n.default)({},t,{ref:a,className:(0,u.default)(t.className,e)}))})},e.exports=t.default},144:function(e,t,a){"use strict";var r=a(2);t.__esModule=!0,t.default=void 0;var n=r(a(4)),o=r(a(5)),u=r(a(8)),i=r(a(0)),l=a(9),s=i.default.forwardRef(function(e,t){var a=e.bsPrefix,r=e.size,s=e.toggle,c=e.vertical,f=e.className,d=e.as,p=void 0===d?"div":d,v=(0,o.default)(e,["bsPrefix","size","toggle","vertical","className","as"]),m=(0,l.useBootstrapPrefix)(a,"btn-group"),h=m;return c&&(h=m+"-vertical"),i.default.createElement(p,(0,n.default)({},v,{ref:t,className:(0,u.default)(f,h,r&&m+"-"+r,s&&m+"-toggle")}))});s.displayName="ButtonGroup",s.defaultProps={vertical:!1,toggle:!1,role:"group"};var c=s;t.default=c,e.exports=t.default},145:function(e,t,a){"use strict";var r=a(15),n=a(2);t.__esModule=!0,t.default=void 0;var o=n(a(4)),u=n(a(5)),i=n(a(8)),l=r(a(0)),s=a(9),c=n(a(48)),f=n(a(143)),d=n(a(74)),p=n(a(146)),v=(0,f.default)("h5"),m=(0,f.default)("h6"),h=(0,c.default)("card-body"),g=l.default.forwardRef(function(e,t){var a=e.bsPrefix,r=e.className,n=e.bg,c=e.text,f=e.border,p=e.body,v=e.children,m=e.as,g=void 0===m?"div":m,y=(0,u.default)(e,["bsPrefix","className","bg","text","border","body","children","as"]),b=(0,s.useBootstrapPrefix)(a,"card"),x=(0,l.useMemo)(function(){return{cardHeaderBsPrefix:b+"-header"}},[b]);return l.default.createElement(d.default.Provider,{value:x},l.default.createElement(g,(0,o.default)({ref:t},y,{className:(0,i.default)(r,b,n&&"bg-"+n,c&&"text-"+c,f&&"border-"+f)}),p?l.default.createElement(h,null,v):v))});g.displayName="Card",g.defaultProps={body:!1},g.Img=p.default,g.Title=(0,c.default)("card-title",{Component:v}),g.Subtitle=(0,c.default)("card-subtitle",{Component:m}),g.Body=h,g.Link=(0,c.default)("card-link",{Component:"a"}),g.Text=(0,c.default)("card-text",{Component:"p"}),g.Header=(0,c.default)("card-header"),g.Footer=(0,c.default)("card-footer"),g.ImgOverlay=(0,c.default)("card-img-overlay");var y=g;t.default=y,e.exports=t.default},146:function(e,t,a){"use strict";var r=a(2);t.__esModule=!0,t.default=void 0;var n=r(a(4)),o=r(a(5)),u=r(a(8)),i=r(a(0)),l=a(9),s=i.default.forwardRef(function(e,t){var a=e.bsPrefix,r=e.className,s=e.variant,c=e.as,f=void 0===c?"img":c,d=(0,o.default)(e,["bsPrefix","className","variant","as"]),p=(0,l.useBootstrapPrefix)(a,"card-img");return i.default.createElement(f,(0,n.default)({ref:t,className:(0,u.default)(s?p+"-"+s:p,r)},d))});s.displayName="CardImg",s.defaultProps={variant:null};var c=s;t.default=c,e.exports=t.default},149:function(e,t,a){e.exports=a(152)()},150:function(e,t,a){"use strict";var r=a(2);t.__esModule=!0,t.default=void 0;var n=r(a(0)).default.createContext({controlId:void 0});t.default=n,e.exports=t.default},152:function(e,t,a){"use strict";var r=a(153);function n(){}function o(){}o.resetWarningCache=n,e.exports=function(){function e(e,t,a,n,o,u){if(u!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:n};return a.PropTypes=a,a}},153:function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},156:function(e,t,a){"use strict";var r=a(2);t.__esModule=!0,t.default=void 0;var n=r(a(4)),o=r(a(5)),u=r(a(8)),i=r(a(0)),l=r(a(149)),s={type:l.default.string.isRequired,as:l.default.elementType},c=i.default.forwardRef(function(e,t){var a=e.as,r=void 0===a?"div":a,l=e.className,s=e.type,c=(0,o.default)(e,["as","className","type"]);return i.default.createElement(r,(0,n.default)({},c,{ref:t,className:(0,u.default)(l,s&&s+"-feedback")}))});c.displayName="Feedback",c.propTypes=s,c.defaultProps={type:"valid"};var f=c;t.default=f,e.exports=t.default},157:function(e,t,a){"use strict";var r=a(15),n=a(2);t.__esModule=!0,t.default=void 0;var o=n(a(4)),u=n(a(5)),i=n(a(8)),l=r(a(0)),s=(n(a(51)),n(a(156))),c=n(a(150)),f=a(9),d=l.default.forwardRef(function(e,t){var a,r,n=e.bsPrefix,s=e.type,d=e.size,p=e.id,v=e.className,m=e.isValid,h=e.isInvalid,g=e.plaintext,y=e.readOnly,b=e.as,x=void 0===b?"input":b,_=(0,u.default)(e,["bsPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","as"]),O=(0,l.useContext)(c.default).controlId;if(n=(0,f.useBootstrapPrefix)(n,"form-control"),g)(r={})[n+"-plaintext"]=!0,a=r;else if("file"===s){var E;(E={})[n+"-file"]=!0,a=E}else{var S;(S={})[n]=!0,S[n+"-"+d]=d,a=S}return l.default.createElement(x,(0,o.default)({},_,{type:s,ref:t,readOnly:y,id:p||O,className:(0,i.default)(v,a,m&&"is-valid",h&&"is-invalid")}))});d.displayName="FormControl",d.Feedback=s.default;var p=d;t.default=p,e.exports=t.default},221:function(e,t,a){},222:function(e,t,a){},265:function(e,t,a){"use strict";a.r(t);var r=a(20),n=a(21),o=a(32),u=a(30),i=a(31),l=a(0),s=a.n(l),c=a(142),f=a(71),d=a.n(f),p=a(144),v=a.n(p),m=a(141),h=a.n(m),g=a(145),y=a.n(g),b=a(157),x=a.n(b),_=a(133),O=a(132),E=(a(221),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e)))._input=s.a.createRef(),a._text="",a._homogeneous=!0,a.state={text:"",output:"",homogeneous:!0},a}return Object(i.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){Object(c.a)(Object(u.a)(t.prototype),"componentDidMount",this).call(this);var e=this._input.current;e&&e.focus()}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"AutoConvertStream"},s.a.createElement(y.a,{className:"AutoConvertStream-input"},s.a.createElement(y.a.Header,null,"Input"),s.a.createElement(y.a.Body,null,s.a.createElement(x.a,{onChange:function(t){return e.onTextChanged(t)},placeholder:"Text",ref:this._input,value:this.state.text}),s.a.createElement(h.a,{className:"AutoConvertStream-commands"},s.a.createElement(v.a,null,s.a.createElement(d.a,{onClick:function(){return e.onClearClick()}},"Clear"),s.a.createElement(d.a,{onClick:function(){return e.toggleHomogeneous()},active:this.state.homogeneous},"Force Consistent Encoding"))))),s.a.createElement(y.a,null,s.a.createElement(y.a.Header,null,"Output"),s.a.createElement(y.a.Body,null,s.a.createElement("pre",{className:"AutoConvertStream-output"},this.state.output||" "))))}},{key:"getLocalStorageKey",value:function(){return"AutoConvertStream"}},{key:"onSaveState",value:function(){return{text:this._text,homogeneous:this._homogeneous}}},{key:"onRestoreState",value:function(e){null!==e&&(this._text=e.text,this._homogeneous=e.homogeneous)}},{key:"onUpdateState",value:function(){this.setState({text:this._text,output:this.calculateOutput(),homogeneous:this._homogeneous})}},{key:"onTextChanged",value:function(e){var t=e.target;this._text=t.value,this.updateState()}},{key:"onClearClick",value:function(){this._text="",this.updateState()}},{key:"toggleHomogeneous",value:function(){this._homogeneous=!this._homogeneous,this.updateState()}},{key:"calculateOutput",value:function(){return O.StringAutoConvert.convertString(this._text,this._homogeneous)}}]),t}(_.a)),S=(a(222),function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"AutoConvert"},s.a.createElement("div",{className:"AutoConvert-content"},s.a.createElement("div",{className:"AutoConvert-info"},s.a.createElement("h2",null,"AutoConvert"),s.a.createElement("p",null,'AutoConvert will automatically detect and convert several encodings - simply enter your ciphertext. If all of your text is in the same encoding, you can select "force consistent encoding". This can be useful for ambigious strings.'),s.a.createElement("p",null,"Some of the supported encodings are:"),s.a.createElement("ul",null,s.a.createElement("li",null,"ASCII (A=65, B=66)"),s.a.createElement("li",null,"Five bit binary (A=00001, B=00010)"),s.a.createElement("li",null,"Eight bit binary (A=01100001, B=01100010)"),s.a.createElement("li",null,"Ordinal (A=1, B=2)"))),s.a.createElement(E,null)))}}]),t}(l.Component));t.default=S}}]);
//# sourceMappingURL=8.ec70cad8.chunk.js.map