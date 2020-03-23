(this.webpackJsonppuzztool=this.webpackJsonppuzztool||[]).push([[11],{100:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext({controlId:void 0});t.a=r},103:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(3),c=a.n(o),i=a(0),l=a.n(i),u=a(13),s=a.n(u),f={type:s.a.string.isRequired,as:s.a.elementType},d=l.a.forwardRef((function(e,t){var a=e.as,o=void 0===a?"div":a,i=e.className,u=e.type,s=Object(r.a)(e,["as","className","type"]);return l.a.createElement(o,Object(n.a)({},s,{ref:t,className:c()(i,u&&u+"-feedback")}))}));d.displayName="Feedback",d.propTypes=f,d.defaultProps={type:"valid"},t.a=d},104:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0);function r(){return Object(n.useCallback)(e=>{e&&e.focus()},[])}},105:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(3),c=a.n(o),i=a(0),l=a.n(i),u=(a(47),a(103)),s=a(100),f=a(4),d=l.a.forwardRef((function(e,t){var a,o,u=e.bsPrefix,d=e.type,m=e.size,p=e.id,v=e.className,b=e.isValid,g=e.isInvalid,O=e.plaintext,y=e.readOnly,h=e.as,E=void 0===h?"input":h,j=Object(r.a)(e,["bsPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","as"]),N=Object(i.useContext)(s.a).controlId;if(u=Object(f.a)(u,"form-control"),O)(o={})[u+"-plaintext"]=!0,a=o;else if("file"===d){var x;(x={})[u+"-file"]=!0,a=x}else{var C;(C={})[u]=!0,C[u+"-"+m]=m,a=C}return l.a.createElement(E,Object(n.a)({},j,{type:d,ref:t,readOnly:y,id:p||N,className:c()(v,a,b&&"is-valid",g&&"is-invalid")}))}));d.displayName="FormControl",d.Feedback=u.a,t.a=d},108:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(3),c=a.n(o),i=a(0),l=a.n(i),u=a(42),s=function(){},f=l.a.forwardRef((function(e,t){var a=e.children,o=e.name,f=e.className,d=e.checked,m=e.type,p=e.onChange,v=e.value,b=e.disabled,g=e.inputRef,O=Object(r.a)(e,["children","name","className","checked","type","onChange","value","disabled","inputRef"]),y=Object(i.useState)(!1),h=y[0],E=y[1],j=Object(i.useCallback)((function(e){"INPUT"===e.target.tagName&&E(!0)}),[]),N=Object(i.useCallback)((function(e){"INPUT"===e.target.tagName&&E(!1)}),[]);return l.a.createElement(u.a,Object(n.a)({},O,{ref:t,className:c()(f,h&&"focus",b&&"disabled"),type:null,active:!!d,as:"label"}),l.a.createElement("input",{name:o,type:m,value:v,ref:g,autoComplete:"off",checked:!!d,disabled:!!b,onFocus:j,onBlur:N,onChange:p||s}),a)}));f.displayName="ToggleButton",t.a=f},110:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(0),c=a.n(o),i=a(28),l=a.n(i),u=a(14),s=a(15),f=a(95),d=a(93),m=a(108),p=c.a.forwardRef((function(e,t){var a=Object(u.a)(e,{value:"onChange"}),o=a.children,i=a.type,m=a.name,p=a.value,v=a.onChange,b=Object(r.a)(a,["children","type","name","value","onChange"]),g=function(){return null==p?[]:[].concat(p)};return"radio"!==i||m||l()(!1),c.a.createElement(d.a,Object(n.a)({},b,{ref:t,toggle:!0}),Object(f.b)(o,(function(e){var t=g(),a=e.props,n=a.value,r=a.onChange;return c.a.cloneElement(e,{type:i,name:e.name||m,checked:-1!==t.indexOf(n),onChange:Object(s.a)(r,(function(e){return function(e,t){var a=g(),n=-1!==a.indexOf(e);"radio"!==i?v(n?a.filter((function(t){return t!==e})):[].concat(a,[e]),t):n||v(e,t)}(n,e)}))})})))}));p.defaultProps={type:"radio"},p.Button=m.a,t.a=p},167:function(e,t,a){},168:function(e,t,a){},208:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(38),c=a(88),i=a(42),l=a(93),u=a(94),s=a(92),f=a(105),d=a(108),m=a(110),p=a(104),v=a(86);a(167);var b=function(e){const t=Object(p.a)(),a=Object(n.useState)(!0),b=Object(o.a)(a,2),g=b[0],O=b[1],y=Object(n.useState)(""),h=Object(o.a)(y,2),E=h[0],j=h[1];return Object(v.a)("AutoConvertStream",e=>{e&&(O(e.homogeneous),j(e.text))},()=>({homogeneous:g,text:E})),r.a.createElement("div",{className:"AutoConvertStream"},r.a.createElement(s.a,{className:"AutoConvertStream-input"},r.a.createElement(s.a.Header,null,e.prompt),r.a.createElement(s.a.Body,null,r.a.createElement(f.a,{onChange:function(e){j(e.currentTarget.value)},placeholder:"Text",ref:t,value:E}),r.a.createElement(u.a,{className:"AutoConvertStream-commands"},r.a.createElement(m.a,{defaultValue:!0,name:"options",onChange:function(e){O(e)},type:"radio"},r.a.createElement(d.a,{value:!0},"Consistent"),r.a.createElement(d.a,{value:!1},"Mixed")),r.a.createElement(l.a,null,r.a.createElement(i.a,{onClick:function(){j("")},variant:"danger"},"Clear"))))),r.a.createElement(s.a,null,r.a.createElement(s.a.Header,null,"Output"),r.a.createElement(s.a.Body,null,r.a.createElement("pre",{className:"AutoConvertStream-output"},c.StringAutoConvert.convertString(E,g)||" "))))};a(168);t.default=function(){return r.a.createElement("div",{className:"AutoConvert"},r.a.createElement("div",{className:"AutoConvert-info"},r.a.createElement("h2",null,"AutoConvert"),r.a.createElement("p",null,'AutoConvert will automatically detect and convert several encodings - simply enter your ciphertext. If all of your text is in the same encoding, you can select "force consistent encoding". This can be useful for ambigious strings.'),r.a.createElement("p",null,"Some of the supported encodings are:"),r.a.createElement("ul",null,r.a.createElement("li",null,"ASCII (A=65, B=66)"),r.a.createElement("li",null,"Five bit binary (A=00001, B=00010)"),r.a.createElement("li",null,"Eight bit binary (A=01100001, B=01100010)"),r.a.createElement("li",null,"Ordinal (A=1, B=2)"))),r.a.createElement(b,{prompt:"Input"}))}},86:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),r=a(89);function o(e,t,a){Object(n.useLayoutEffect)(()=>t(Object(r.b)(e)),[e]),Object(n.useEffect)(()=>Object(r.c)(e,a()))}},87:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n="1.0.0"},89:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return f})),a.d(t,"a",(function(){return d}));var n=a(90),r=a.n(n),o=a(87);let c;function i(e){return"".concat("puzztool","_").concat(e)}function l(){var e,t;(function(e,t){try{if(e)return 0!==r()(t,e)}catch(a){}return!0})(function(e){if(u())return window.localStorage.getItem(i(e));return null}("appVersion"),o.a)&&(d(),e="appVersion",t=o.a,u()&&window.localStorage.setItem(i(e),t))}function u(){if(void 0===c){const t=window.localStorage,a="__storage_test__";try{t.setItem(a,a),t.removeItem(a),c=!0}catch(e){c=e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&0!==t.length}c&&l()}return c}function s(e){if(u()){const t=window.localStorage.getItem(i(e));if(null!==t)return JSON.parse(t)}return null}function f(e,t){u()&&window.localStorage.setItem(i(e),JSON.stringify(t))}function d(){u()&&window.localStorage.clear()}},90:function(e,t,a){var n,r,o;r=[],void 0===(o="function"===typeof(n=function(){var e=/^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;function t(e){var t,a,n=e.replace(/^v/,"").replace(/\+.*$/,""),r=(a="-",-1===(t=n).indexOf(a)?t.length:t.indexOf(a)),o=n.substring(0,r).split(".");return o.push(n.substring(r+1)),o}function a(e){return isNaN(Number(e))?e:Number(e)}function n(t){if("string"!==typeof t)throw new TypeError("Invalid argument expected string");if(!e.test(t))throw new Error("Invalid argument not valid semver ('"+t+"' received)")}function r(e,r){[e,r].forEach(n);for(var o=t(e),c=t(r),i=0;i<Math.max(o.length-1,c.length-1);i++){var l=parseInt(o[i]||0,10),u=parseInt(c[i]||0,10);if(l>u)return 1;if(u>l)return-1}var s=o[o.length-1],f=c[c.length-1];if(s&&f){var d=s.split(".").map(a),m=f.split(".").map(a);for(i=0;i<Math.max(d.length,m.length);i++){if(void 0===d[i]||"string"===typeof m[i]&&"number"===typeof d[i])return-1;if(void 0===m[i]||"string"===typeof d[i]&&"number"===typeof m[i])return 1;if(d[i]>m[i])return 1;if(m[i]>d[i])return-1}}else if(s||f)return s?-1:1;return 0}var o=[">",">=","=","<","<="],c={">":[1],">=":[0,1],"=":[0],"<=":[-1,0],"<":[-1]};return r.validate=function(t){return"string"===typeof t&&e.test(t)},r.compare=function(e,t,a){!function(e){if("string"!==typeof e)throw new TypeError("Invalid operator type, expected string but got "+typeof e);if(-1===o.indexOf(e))throw new TypeError("Invalid operator, expected one of "+o.join("|"))}(a);var n=r(e,t);return c[a].indexOf(n)>-1},r})?n.apply(t,r):n)||(e.exports=o)},91:function(e,t,a){"use strict";var n=a(1),r=a(0),o=a.n(r),c=a(3),i=a.n(c);t.a=function(e){return o.a.forwardRef((function(t,a){return o.a.createElement("div",Object(n.a)({},t,{ref:a,className:i()(t.className,e)}))}))}},92:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(3),c=a.n(o),i=a(0),l=a.n(i),u=a(4),s=a(27),f=a(91),d=a(43),m=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,i=e.variant,s=e.as,f=void 0===s?"img":s,d=Object(r.a)(e,["bsPrefix","className","variant","as"]),m=Object(u.a)(a,"card-img");return l.a.createElement(f,Object(n.a)({ref:t,className:c()(i?m+"-"+i:m,o)},d))}));m.displayName="CardImg",m.defaultProps={variant:null};var p=m,v=Object(f.a)("h5"),b=Object(f.a)("h6"),g=Object(s.a)("card-body"),O=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,s=e.bg,f=e.text,m=e.border,p=e.body,v=e.children,b=e.as,O=void 0===b?"div":b,y=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),h=Object(u.a)(a,"card"),E=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:h+"-header"}}),[h]);return l.a.createElement(d.a.Provider,{value:E},l.a.createElement(O,Object(n.a)({ref:t},y,{className:c()(o,h,s&&"bg-"+s,f&&"text-"+f,m&&"border-"+m)}),p?l.a.createElement(g,null,v):v))}));O.displayName="Card",O.defaultProps={body:!1},O.Img=p,O.Title=Object(s.a)("card-title",{Component:v}),O.Subtitle=Object(s.a)("card-subtitle",{Component:b}),O.Body=g,O.Link=Object(s.a)("card-link",{Component:"a"}),O.Text=Object(s.a)("card-text",{Component:"p"}),O.Header=Object(s.a)("card-header"),O.Footer=Object(s.a)("card-footer"),O.ImgOverlay=Object(s.a)("card-img-overlay");t.a=O},93:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(3),c=a.n(o),i=a(0),l=a.n(i),u=a(4),s=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.size,i=e.toggle,s=e.vertical,f=e.className,d=e.as,m=void 0===d?"div":d,p=Object(r.a)(e,["bsPrefix","size","toggle","vertical","className","as"]),v=Object(u.a)(a,"btn-group"),b=v;return s&&(b=v+"-vertical"),l.a.createElement(m,Object(n.a)({},p,{ref:t,className:c()(f,b,o&&v+"-"+o,i&&v+"-toggle")}))}));s.displayName="ButtonGroup",s.defaultProps={vertical:!1,toggle:!1,role:"group"},t.a=s},94:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(3),c=a.n(o),i=a(0),l=a.n(i),u=a(4),s=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,i=Object(r.a)(e,["bsPrefix","className"]),s=Object(u.a)(a,"btn-toolbar");return l.a.createElement("div",Object(n.a)({},i,{ref:t,className:c()(o,s)}))}));s.displayName="ButtonToolbar",s.defaultProps={role:"toolbar"},t.a=s},95:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return c}));var n=a(0),r=a.n(n);function o(e,t){var a=0;return r.a.Children.map(e,(function(e){return r.a.isValidElement(e)?t(e,a++):e}))}function c(e,t){var a=0;r.a.Children.forEach(e,(function(e){r.a.isValidElement(e)&&t(e,a++)}))}}}]);
//# sourceMappingURL=11.43125254.chunk.js.map