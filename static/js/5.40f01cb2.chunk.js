(this.webpackJsonppuzztool=this.webpackJsonppuzztool||[]).push([[5],{101:function(e,t,a){"use strict";var n,r=a(1),c=a(2),o=a(3),i=a.n(o),l=a(45),s=a(0),u=a.n(s),d=a(21),m=a(46),f=((n={})[d.b]="show",n[d.a]="show",n),h=u.a.forwardRef((function(e,t){var a=e.className,n=e.children,o=Object(c.a)(e,["className","children"]),h=Object(s.useCallback)((function(e){Object(m.a)(e),o.onEnter&&o.onEnter(e)}),[o]);return u.a.createElement(d.e,Object(r.a)({ref:t,addEndListener:l.a},o,{onEnter:h}),(function(e,t){return u.a.cloneElement(n,Object(r.a)({},t,{className:i()("fade",a,n.props.className,f[e])}))}))}));h.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},h.displayName="Fade",t.a=h},106:function(e,t,a){"use strict";var n=a(8),r=a(0),c=a.n(r),o=a(97),i=a(98),l=a(99),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},t}(c.a.Component);s.Container=o.a,s.Content=i.a,s.Pane=l.a,t.a=s},107:function(e,t,a){"use strict";var n=a(38),r=a(0),c=a.n(r),o=a(1),i=a(2),l=(a(61),a(14)),s=a(34),u=a(33),d=a(32),m=a(97),f=a(98),h=a(99),b=a(95);function v(e){var t=e.props,a=t.title,n=t.eventKey,r=t.disabled,o=t.tabClassName;return null==a?null:c.a.createElement(d.a,{as:u.a,eventKey:n,disabled:r,className:o},a)}var E=c.a.forwardRef((function(e,t){var a=Object(l.a)(e,{activeKey:"onSelect"}),n=a.id,r=a.onSelect,u=a.transition,d=a.mountOnEnter,E=a.unmountOnExit,p=a.children,O=a.activeKey,g=void 0===O?function(e){var t;return Object(b.a)(e,(function(e){null==t&&(t=e.props.eventKey)})),t}(p):O,y=Object(i.a)(a,["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"]);return c.a.createElement(m.a,{ref:t,id:n,activeKey:g,onSelect:r,transition:u,mountOnEnter:d,unmountOnExit:E},c.a.createElement(s.a,Object(o.a)({},y,{role:"tablist",as:"nav"}),Object(b.b)(p,v)),c.a.createElement(f.a,null,Object(b.b)(p,(function(e){var t=Object(o.a)({},e.props);return delete t.title,delete t.disabled,delete t.tabClassName,c.a.createElement(h.a,t)}))))}));E.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},E.displayName="Tabs";var p=E,O=a(86);t.a=function(e){const t=Object(r.useState)(),a=Object(n.a)(t,2),o=a[0],i=a[1];return Object(O.a)(e.id,e=>{e&&i(e.activeKey)},()=>({activeKey:o})),c.a.createElement(p,{activeKey:o,defaultActiveKey:e.defaultActiveKey,id:e.id,onSelect:function(e){i(e)}},e.children)}},111:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(3),o=a.n(c),i=a(0),l=a.n(i),s=a(4),u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.fluid,i=e.as,u=void 0===i?"div":i,d=e.className,m=Object(r.a)(e,["bsPrefix","fluid","as","className"]),f=Object(s.a)(a,"container"),h="string"===typeof c?"-"+c:"-fluid";return l.a.createElement(u,Object(n.a)({ref:t},m,{className:o()(d,c?""+f+h:f)}))}));u.displayName="Container",u.defaultProps={fluid:!1},t.a=u},112:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(3),o=a.n(c),i=a(0),l=a.n(i),s=a(4),u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.noGutters,i=e.as,u=void 0===i?"div":i,d=e.className,m=Object(r.a)(e,["bsPrefix","noGutters","as","className"]),f=Object(s.a)(a,"row");return l.a.createElement(u,Object(n.a)({ref:t},m,{className:o()(d,f,c&&"no-gutters")}))}));u.displayName="Row",u.defaultProps={noGutters:!1},t.a=u},113:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(3),o=a.n(c),i=a(0),l=a.n(i),s=a(4),u=["xl","lg","md","sm","xs"],d=l.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,i=e.as,d=void 0===i?"div":i,m=Object(r.a)(e,["bsPrefix","className","as"]),f=Object(s.a)(a,"col"),h=[],b=[];return u.forEach((function(e){var t,a,n,r=m[e];if(delete m[e],null!=r&&"object"===typeof r){var c=r.span;t=void 0===c||c,a=r.offset,n=r.order}else t=r;var o="xs"!==e?"-"+e:"";null!=t&&h.push(!0===t?""+f+o:""+f+o+"-"+t),null!=n&&b.push("order"+o+"-"+n),null!=a&&b.push("offset"+o+"-"+a)})),h.length||h.push(f),l.a.createElement(d,Object(n.a)({},m,{ref:t,className:o.a.apply(void 0,[c].concat(h,b))}))}));d.displayName="Col",t.a=d},187:function(e,t,a){},188:function(e,t,a){},189:function(e,t,a){},190:function(e,t,a){},204:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(106),o=a(107),i=a(38),l=a(88),s=a(42),u=a(93),d=a(94),m=a(92),f=a(113),h=a(111),b=a(112),v=a(86);a(187);var E=function(e){return r.a.createElement("div",{className:"SemaphoreCheckbox ".concat(e.className)},r.a.createElement("input",{type:"checkbox",checked:e.character.hasDirection(e.direction),onChange:function(t){const a=e.onChange;a&&a(t.currentTarget.checked?"add":"remove",e.direction)}}),r.a.createElement("label",null,function(){const t=e.character.getPotentialMatch(e.direction);return t?t.toString():""}()))};var p=function(e){const t=function(e){const t={left:-1,right:-1},a=e.getDegrees(),n=Object(i.a)(a,2),r=n[0],c=n[1];return void 0!==r&&(void 0===c?r<=180?t.right=r:t.left=r:0===r&&c<=180||r<=45&&c<180||c<=90||r>=270?(t.left=r,t.right=c):(t.right=r,t.left=c)),t}(e.character),a=t.left,n=t.right;return r.a.createElement("svg",{width:e.width,viewBox:"0 0 76 64"},r.a.createElement("defs",null,r.a.createElement("g",{id:"Person",fill:"black"},r.a.createElement("circle",{r:"3.5",cx:"4",cy:"4"}),r.a.createElement("rect",{y:"8",width:"8",height:"16",rx:"2",ry:"2"})),r.a.createElement("g",{id:"Flag"},r.a.createElement("polyline",{strokeWidth:"1",stroke:"black",points:"0 0, 0 20"}),r.a.createElement("polyline",{strokeWidth:"2",strokeLinecap:"round",stroke:"black",points:"0 20, 0 28"}),r.a.createElement("rect",{stroke:"black",height:"10",width:"10"}),r.a.createElement("polygon",{fill:"red",points:"0 0, 10 0, 0 10"}),r.a.createElement("polygon",{fill:"yellow",points:"10 0, 10 10, 0 10"})),r.a.createElement("g",{id:"LeftFlag"},r.a.createElement("use",{xlinkHref:"#Flag",transform:"scale(-1, 1)"}))),r.a.createElement("use",{xlinkHref:"#Person",x:"34",y:"23"}),a>=0?r.a.createElement("use",{transform:"rotate(".concat(a,", 33, 32)"),x:"33",xlinkHref:0===a||a>=180?"#LeftFlag":"#Flag",y:"4"}):null,n>=0?r.a.createElement("use",{transform:"rotate(".concat(n,", 43, 32)"),x:"43",xlinkHref:n<=180?"#Flag":"#LeftFlag",y:"4"}):null,"Sorry, your browser does not support inline SVG.")};a(188);var O=function(e){function t(t,a){const n=e.onChange;n&&n(t,a)}return r.a.createElement("div",{className:"SemaphoreCharacter"},r.a.createElement(E,{character:e.character,className:"SemaphoreCheckbox-north",direction:l.SemaphoreDirection.North,onChange:t}),r.a.createElement(E,{character:e.character,className:"SemaphoreCheckbox-northEast",direction:l.SemaphoreDirection.NorthEast,onChange:t}),r.a.createElement(E,{character:e.character,className:"SemaphoreCheckbox-east",direction:l.SemaphoreDirection.East,onChange:t}),r.a.createElement(E,{character:e.character,className:"SemaphoreCheckbox-southEast",direction:l.SemaphoreDirection.SouthEast,onChange:t}),r.a.createElement(E,{character:e.character,className:"SemaphoreCheckbox-south",direction:l.SemaphoreDirection.South,onChange:t}),r.a.createElement(E,{character:e.character,className:"SemaphoreCheckbox-southWest",direction:l.SemaphoreDirection.SouthWest,onChange:t}),r.a.createElement(E,{character:e.character,className:"SemaphoreCheckbox-west",direction:l.SemaphoreDirection.West,onChange:t}),r.a.createElement(E,{character:e.character,className:"SemaphoreCheckbox-northWest",direction:l.SemaphoreDirection.NorthWest,onChange:t}),r.a.createElement(p,{width:240,character:e.character}))};a(189);var g=function(){const e=Object(n.useState)(new l.SemaphoreCharacter),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),E=Object(i.a)(o,2),p=E[0],g=E[1];function y(e,t){const n=new l.SemaphoreCharacter;switch(n.directions=a.directions,e){case"add":n.addDirection(t);break;case"remove":n.removeDirection(t);break;default:throw new Error("Invalid change type")}c(n)}function x(){let e=p;const t=a.getExactMatches();t.length>0?(e+=t[0].toString(),c(new l.SemaphoreCharacter)):e+=" ",g(e)}function j(){g(p.slice(0,-1))}return Object(v.a)("SemaphoreStream",e=>{if(e){const t=new l.SemaphoreCharacter;t.directions=e.directions,c(t),g(p)}},()=>({directions:a.directions,stream:p})),Object(n.useEffect)(()=>{function e(e){if(e.defaultPrevented)return;let t=!1;8===e.keyCode&&(j(),t=!0),t&&e.preventDefault()}function t(e){if(e.defaultPrevented)return;let t=!1;if(13===e.keyCode)x(),t=!0;else if(e.charCode>=49&&e.charCode<=56){const t=l.SemaphoreDegrees.FromDegrees(45*(e.charCode-49));y(a.hasDirection(t)?"remove":"add",t)}t&&e.preventDefault()}return document.addEventListener("keydown",e),document.addEventListener("keypress",t),()=>{document.removeEventListener("keydown",e),document.removeEventListener("keypress",t)}}),r.a.createElement("div",{className:"SemaphoreStream"},r.a.createElement(m.a,{className:"SemaphoreStream-input"},r.a.createElement(m.a.Header,null,"Input"),r.a.createElement(m.a.Body,null,r.a.createElement(h.a,{fluid:!0},r.a.createElement(b.a,null,r.a.createElement(f.a,{xs:"auto",sm:"auto",md:"auto"},r.a.createElement(O,{character:a,onChange:y})),r.a.createElement(f.a,null,r.a.createElement("div",{className:"SemaphoreStream-view"},a.toString()||"?"))),r.a.createElement(b.a,null,r.a.createElement(f.a,null,r.a.createElement(d.a,null,r.a.createElement(u.a,null,r.a.createElement(s.a,{onClick:j},"\u232b")),r.a.createElement(u.a,null,r.a.createElement(s.a,{onClick:x},"Next")),r.a.createElement(u.a,null,r.a.createElement(s.a,{onClick:function(){c(new l.SemaphoreCharacter),g("")},variant:"danger"},"Clear")))))))),r.a.createElement(m.a,null,r.a.createElement(m.a.Header,null,"Output"),r.a.createElement(m.a.Body,null,r.a.createElement("pre",{className:"SemaphoreStream-output"},p,r.a.createElement("span",{className:"blinking-cursor"},"|")))))},y=a(96);a(190);var x=function(){const e=(new l.SemaphoreCharacter).getPotentialMatches();return r.a.createElement("div",{className:"SemaphoreTable"},r.a.createElement(y.a,{striped:!0,responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Character"),r.a.createElement("th",null,"Semaphore"))),r.a.createElement("tbody",null,e.map(e=>r.a.createElement("tr",{key:e.display},r.a.createElement("td",null,e.display),r.a.createElement("td",null,r.a.createElement(p,{width:100,character:new l.SemaphoreCharacter(e.encoding,e.category)})))))))};t.default=function(){return r.a.createElement(o.a,{id:"Semaphore-tabs"},r.a.createElement(c.a,{eventKey:1,title:"Value"},r.a.createElement(g,null)),r.a.createElement(c.a,{eventKey:2,title:"Reference"},r.a.createElement(x,null)))}},86:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),r=a(89);function c(e,t,a){Object(n.useLayoutEffect)(()=>t(Object(r.b)(e)),[e]),Object(n.useEffect)(()=>Object(r.c)(e,a()))}},87:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n="1.0.0"},89:function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"c",(function(){return d})),a.d(t,"a",(function(){return m}));var n=a(90),r=a.n(n),c=a(87);let o;function i(e){return"".concat("puzztool","_").concat(e)}function l(){var e,t;(function(e,t){try{if(e)return 0!==r()(t,e)}catch(a){}return!0})(function(e){if(s())return window.localStorage.getItem(i(e));return null}("appVersion"),c.a)&&(m(),e="appVersion",t=c.a,s()&&window.localStorage.setItem(i(e),t))}function s(){if(void 0===o){const t=window.localStorage,a="__storage_test__";try{t.setItem(a,a),t.removeItem(a),o=!0}catch(e){o=e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&0!==t.length}o&&l()}return o}function u(e){if(s()){const t=window.localStorage.getItem(i(e));if(null!==t)return JSON.parse(t)}return null}function d(e,t){s()&&window.localStorage.setItem(i(e),JSON.stringify(t))}function m(){s()&&window.localStorage.clear()}},90:function(e,t,a){var n,r,c;r=[],void 0===(c="function"===typeof(n=function(){var e=/^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;function t(e){var t,a,n=e.replace(/^v/,"").replace(/\+.*$/,""),r=(a="-",-1===(t=n).indexOf(a)?t.length:t.indexOf(a)),c=n.substring(0,r).split(".");return c.push(n.substring(r+1)),c}function a(e){return isNaN(Number(e))?e:Number(e)}function n(t){if("string"!==typeof t)throw new TypeError("Invalid argument expected string");if(!e.test(t))throw new Error("Invalid argument not valid semver ('"+t+"' received)")}function r(e,r){[e,r].forEach(n);for(var c=t(e),o=t(r),i=0;i<Math.max(c.length-1,o.length-1);i++){var l=parseInt(c[i]||0,10),s=parseInt(o[i]||0,10);if(l>s)return 1;if(s>l)return-1}var u=c[c.length-1],d=o[o.length-1];if(u&&d){var m=u.split(".").map(a),f=d.split(".").map(a);for(i=0;i<Math.max(m.length,f.length);i++){if(void 0===m[i]||"string"===typeof f[i]&&"number"===typeof m[i])return-1;if(void 0===f[i]||"string"===typeof m[i]&&"number"===typeof f[i])return 1;if(m[i]>f[i])return 1;if(f[i]>m[i])return-1}}else if(u||d)return u?-1:1;return 0}var c=[">",">=","=","<","<="],o={">":[1],">=":[0,1],"=":[0],"<=":[-1,0],"<":[-1]};return r.validate=function(t){return"string"===typeof t&&e.test(t)},r.compare=function(e,t,a){!function(e){if("string"!==typeof e)throw new TypeError("Invalid operator type, expected string but got "+typeof e);if(-1===c.indexOf(e))throw new TypeError("Invalid operator, expected one of "+c.join("|"))}(a);var n=r(e,t);return o[a].indexOf(n)>-1},r})?n.apply(t,r):n)||(e.exports=c)},91:function(e,t,a){"use strict";var n=a(1),r=a(0),c=a.n(r),o=a(3),i=a.n(o);t.a=function(e){return c.a.forwardRef((function(t,a){return c.a.createElement("div",Object(n.a)({},t,{ref:a,className:i()(t.className,e)}))}))}},92:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(3),o=a.n(c),i=a(0),l=a.n(i),s=a(4),u=a(27),d=a(91),m=a(43),f=l.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,i=e.variant,u=e.as,d=void 0===u?"img":u,m=Object(r.a)(e,["bsPrefix","className","variant","as"]),f=Object(s.a)(a,"card-img");return l.a.createElement(d,Object(n.a)({ref:t,className:o()(i?f+"-"+i:f,c)},m))}));f.displayName="CardImg",f.defaultProps={variant:null};var h=f,b=Object(d.a)("h5"),v=Object(d.a)("h6"),E=Object(u.a)("card-body"),p=l.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,u=e.bg,d=e.text,f=e.border,h=e.body,b=e.children,v=e.as,p=void 0===v?"div":v,O=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),g=Object(s.a)(a,"card"),y=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:g+"-header"}}),[g]);return l.a.createElement(m.a.Provider,{value:y},l.a.createElement(p,Object(n.a)({ref:t},O,{className:o()(c,g,u&&"bg-"+u,d&&"text-"+d,f&&"border-"+f)}),h?l.a.createElement(E,null,b):b))}));p.displayName="Card",p.defaultProps={body:!1},p.Img=h,p.Title=Object(u.a)("card-title",{Component:b}),p.Subtitle=Object(u.a)("card-subtitle",{Component:v}),p.Body=E,p.Link=Object(u.a)("card-link",{Component:"a"}),p.Text=Object(u.a)("card-text",{Component:"p"}),p.Header=Object(u.a)("card-header"),p.Footer=Object(u.a)("card-footer"),p.ImgOverlay=Object(u.a)("card-img-overlay");t.a=p},93:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(3),o=a.n(c),i=a(0),l=a.n(i),s=a(4),u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.size,i=e.toggle,u=e.vertical,d=e.className,m=e.as,f=void 0===m?"div":m,h=Object(r.a)(e,["bsPrefix","size","toggle","vertical","className","as"]),b=Object(s.a)(a,"btn-group"),v=b;return u&&(v=b+"-vertical"),l.a.createElement(f,Object(n.a)({},h,{ref:t,className:o()(d,v,c&&b+"-"+c,i&&b+"-toggle")}))}));u.displayName="ButtonGroup",u.defaultProps={vertical:!1,toggle:!1,role:"group"},t.a=u},94:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(3),o=a.n(c),i=a(0),l=a.n(i),s=a(4),u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,i=Object(r.a)(e,["bsPrefix","className"]),u=Object(s.a)(a,"btn-toolbar");return l.a.createElement("div",Object(n.a)({},i,{ref:t,className:o()(c,u)}))}));u.displayName="ButtonToolbar",u.defaultProps={role:"toolbar"},t.a=u},95:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return o}));var n=a(0),r=a.n(n);function c(e,t){var a=0;return r.a.Children.map(e,(function(e){return r.a.isValidElement(e)?t(e,a++):e}))}function o(e,t){var a=0;r.a.Children.forEach(e,(function(e){r.a.isValidElement(e)&&t(e,a++)}))}},96:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(3),o=a.n(c),i=a(0),l=a.n(i),s=a(4),u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,i=e.striped,u=e.bordered,d=e.borderless,m=e.hover,f=e.size,h=e.variant,b=e.responsive,v=Object(r.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),E=Object(s.a)(a,"table"),p=o()(c,E,h&&E+"-"+h,f&&E+"-"+f,i&&E+"-striped",u&&E+"-bordered",d&&E+"-borderless",m&&E+"-hover"),O=l.a.createElement("table",Object(n.a)({},v,{className:p,ref:t}));if(b){var g=E+"-responsive";return"string"===typeof b&&(g=g+"-"+b),l.a.createElement("div",{className:g},O)}return O}));t.a=u},97:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(14),o=a(44),i=a(6);t.a=function(e){var t=Object(c.a)(e,{activeKey:"onSelect"}),a=t.id,l=t.generateChildId,s=t.onSelect,u=t.activeKey,d=t.transition,m=t.mountOnEnter,f=t.unmountOnExit,h=t.children,b=Object(n.useMemo)((function(){return l||function(e,t){return a?a+"-"+t+"-"+e:null}}),[a,l]),v=Object(n.useMemo)((function(){return{onSelect:s,activeKey:u,transition:d,mountOnEnter:m,unmountOnExit:f,getControlledId:function(e){return b(e,"tabpane")},getControllerId:function(e){return b(e,"tab")}}}),[s,u,d,m,f,b]);return r.a.createElement(o.a.Provider,{value:v},r.a.createElement(i.a.Provider,{value:s},h))}},98:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(3),o=a.n(c),i=a(0),l=a.n(i),s=a(4),u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.as,i=void 0===c?"div":c,u=e.className,d=Object(r.a)(e,["bsPrefix","as","className"]),m=Object(s.a)(a,"tab-content");return l.a.createElement(i,Object(n.a)({ref:t},d,{className:o()(u,m)}))}));t.a=u},99:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(3),o=a.n(c),i=a(0),l=a.n(i),s=a(4),u=a(44),d=a(6),m=a(101);var f=l.a.forwardRef((function(e,t){var a=function(e){var t=Object(i.useContext)(u.a);if(!t)return e;var a=t.activeKey,c=t.getControlledId,o=t.getControllerId,l=Object(r.a)(t,["activeKey","getControlledId","getControllerId"]),s=!1!==e.transition&&!1!==l.transition,f=Object(d.b)(e.eventKey);return Object(n.a)({},e,{active:null==e.active&&null!=f?Object(d.b)(a)===f:e.active,id:c(e.eventKey),"aria-labelledby":o(e.eventKey),transition:s&&(e.transition||l.transition||m.a),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:l.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:l.unmountOnExit})}(e),c=a.bsPrefix,f=a.className,h=a.active,b=a.onEnter,v=a.onEntering,E=a.onEntered,p=a.onExit,O=a.onExiting,g=a.onExited,y=a.mountOnEnter,x=a.unmountOnExit,j=a.transition,N=a.as,S=void 0===N?"div":N,C=(a.eventKey,Object(r.a)(a,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),w=Object(s.a)(c,"tab-pane");if(!h&&x)return null;var k=l.a.createElement(S,Object(n.a)({},C,{ref:t,role:"tabpanel","aria-hidden":!h,className:o()(f,w,{active:h})}));return j&&(k=l.a.createElement(j,{in:h,onEnter:b,onEntering:v,onEntered:E,onExit:p,onExiting:O,onExited:g,mountOnEnter:y,unmountOnExit:x},k)),l.a.createElement(u.a.Provider,{value:null},l.a.createElement(d.a.Provider,{value:null},k))}));f.displayName="TabPane",t.a=f}}]);
//# sourceMappingURL=5.40f01cb2.chunk.js.map