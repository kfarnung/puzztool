(this.webpackJsonppuzztool=this.webpackJsonppuzztool||[]).push([[3],{176:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(3),o=a.n(c),i=a(0),l=a.n(i),s=a(4),u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,i=e.striped,u=e.bordered,m=e.borderless,d=e.hover,h=e.size,f=e.variant,E=e.responsive,p=Object(r.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),b=Object(s.a)(a,"table"),v=o()(c,b,f&&b+"-"+f,h&&b+"-"+h,i&&b+"-striped",u&&b+"-bordered",m&&b+"-borderless",d&&b+"-hover"),y=l.a.createElement("table",Object(n.a)({},p,{className:v,ref:t}));if(E){var g=b+"-responsive";return"string"===typeof E&&(g=g+"-"+E),l.a.createElement("div",{className:g},y)}return y}));t.a=u},177:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(18),o=a(71),i=a(8);t.a=function(e){var t=Object(c.a)(e,{activeKey:"onSelect"}),a=t.id,l=t.generateChildId,s=t.onSelect,u=t.activeKey,m=t.transition,d=t.mountOnEnter,h=t.unmountOnExit,f=t.children,E=Object(n.useMemo)((function(){return l||function(e,t){return a?a+"-"+t+"-"+e:null}}),[a,l]),p=Object(n.useMemo)((function(){return{onSelect:s,activeKey:u,transition:m,mountOnEnter:d,unmountOnExit:h,getControlledId:function(e){return E(e,"tabpane")},getControllerId:function(e){return E(e,"tab")}}}),[s,u,m,d,h,E]);return r.a.createElement(o.a.Provider,{value:p},r.a.createElement(i.a.Provider,{value:s},f))}},178:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(3),o=a.n(c),i=a(0),l=a.n(i),s=a(4),u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.as,i=void 0===c?"div":c,u=e.className,m=Object(r.a)(e,["bsPrefix","as","className"]),d=Object(s.a)(a,"tab-content");return l.a.createElement(i,Object(n.a)({ref:t},m,{className:o()(u,d)}))}));t.a=u},179:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(3),o=a.n(c),i=a(0),l=a.n(i),s=a(4),u=a(71),m=a(8),d=a(180);var h=l.a.forwardRef((function(e,t){var a=function(e){var t=Object(i.useContext)(u.a);if(!t)return e;var a=t.activeKey,c=t.getControlledId,o=t.getControllerId,l=Object(r.a)(t,["activeKey","getControlledId","getControllerId"]),s=!1!==e.transition&&!1!==l.transition,h=Object(m.b)(e.eventKey);return Object(n.a)({},e,{active:null==e.active&&null!=h?Object(m.b)(a)===h:e.active,id:c(e.eventKey),"aria-labelledby":o(e.eventKey),transition:s&&(e.transition||l.transition||d.a),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:l.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:l.unmountOnExit})}(e),c=a.bsPrefix,h=a.className,f=a.active,E=a.onEnter,p=a.onEntering,b=a.onEntered,v=a.onExit,y=a.onExiting,g=a.onExited,O=a.mountOnEnter,x=a.unmountOnExit,C=a.transition,S=a.as,N=void 0===S?"div":S,j=(a.eventKey,Object(r.a)(a,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),k=Object(s.a)(c,"tab-pane");if(!f&&!C&&x)return null;var w=l.a.createElement(N,Object(n.a)({},j,{ref:t,role:"tabpanel","aria-hidden":!f,className:o()(h,k,{active:f})}));return C&&(w=l.a.createElement(C,{in:f,onEnter:E,onEntering:p,onEntered:b,onExit:v,onExiting:y,onExited:g,mountOnEnter:O,unmountOnExit:x},w)),l.a.createElement(u.a.Provider,{value:null},l.a.createElement(m.a.Provider,{value:null},w))}));h.displayName="TabPane",t.a=h},180:function(e,t,a){"use strict";var n,r=a(1),c=a(2),o=a(3),i=a.n(o),l=a(72),s=a(0),u=a.n(s),m=a(32),d=a(73),h=((n={})[m.b]="show",n[m.a]="show",n),f=u.a.forwardRef((function(e,t){var a=e.className,n=e.children,o=Object(c.a)(e,["className","children"]),f=Object(s.useCallback)((function(e){Object(d.a)(e),o.onEnter&&o.onEnter(e)}),[o]);return u.a.createElement(m.e,Object(r.a)({ref:t,addEndListener:l.a},o,{onEnter:f}),(function(e,t){return u.a.cloneElement(n,Object(r.a)({},t,{className:i()("fade",a,n.props.className,h[e])}))}))}));f.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},f.displayName="Fade",t.a=f},181:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(0),o=a.n(c),i=(a(118),a(18)),l=a(48),s=a(47),u=a(46),m=a(177),d=a(178),h=a(179),f=a(75);function E(e){var t=e.props,a=t.title,n=t.eventKey,r=t.disabled,c=t.tabClassName,i=t.id;return null==a?null:o.a.createElement(u.a,{as:s.a,eventKey:n,disabled:r,id:i,className:c},a)}var p=o.a.forwardRef((function(e,t){var a=Object(i.a)(e,{activeKey:"onSelect"}),c=a.id,s=a.onSelect,u=a.transition,p=a.mountOnEnter,b=a.unmountOnExit,v=a.children,y=a.activeKey,g=void 0===y?function(e){var t;return Object(f.a)(e,(function(e){null==t&&(t=e.props.eventKey)})),t}(v):y,O=Object(r.a)(a,["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"]);return o.a.createElement(m.a,{ref:t,id:c,activeKey:g,onSelect:s,transition:u,mountOnEnter:p,unmountOnExit:b},o.a.createElement(l.a,Object(n.a)({},O,{role:"tablist",as:"nav"}),Object(f.b)(v,E)),o.a.createElement(d.a,null,Object(f.b)(v,(function(e){var t=Object(n.a)({},e.props);return delete t.title,delete t.disabled,delete t.tabClassName,o.a.createElement(h.a,t)}))))}));p.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},p.displayName="Tabs",t.a=p},182:function(e,t,a){"use strict";var n=a(9),r=a(0),c=a.n(r),o=a(177),i=a(178),l=a(179),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},t}(c.a.Component);s.Container=o.a,s.Content=i.a,s.Pane=l.a,t.a=s},183:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(3),o=a.n(c),i=a(0),l=a.n(i),s=a(4),u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.fluid,i=e.as,u=void 0===i?"div":i,m=e.className,d=Object(r.a)(e,["bsPrefix","fluid","as","className"]),h=Object(s.a)(a,"container"),f="string"===typeof c?"-"+c:"-fluid";return l.a.createElement(u,Object(n.a)({ref:t},d,{className:o()(m,c?""+h+f:h)}))}));u.displayName="Container",u.defaultProps={fluid:!1},t.a=u},184:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(3),o=a.n(c),i=a(0),l=a.n(i),s=a(4),u=["xl","lg","md","sm","xs"],m=l.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,i=e.noGutters,m=e.as,d=void 0===m?"div":m,h=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),f=Object(s.a)(a,"row"),E=f+"-cols",p=[];return u.forEach((function(e){var t,a=h[e];delete h[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"===typeof a?a.cols:a)&&p.push(""+E+n+"-"+t)})),l.a.createElement(d,Object(n.a)({ref:t},h,{className:o.a.apply(void 0,[c,f,i&&"no-gutters"].concat(p))}))}));m.displayName="Row",m.defaultProps={noGutters:!1},t.a=m},185:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(3),o=a.n(c),i=a(0),l=a.n(i),s=a(4),u=["xl","lg","md","sm","xs"],m=l.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,i=e.as,m=void 0===i?"div":i,d=Object(r.a)(e,["bsPrefix","className","as"]),h=Object(s.a)(a,"col"),f=[],E=[];return u.forEach((function(e){var t,a,n,r=d[e];if(delete d[e],null!=r&&"object"===typeof r){var c=r.span;t=void 0===c||c,a=r.offset,n=r.order}else t=r;var o="xs"!==e?"-"+e:"";null!=t&&f.push(!0===t?""+h+o:""+h+o+"-"+t),null!=n&&E.push("order"+o+"-"+n),null!=a&&E.push("offset"+o+"-"+a)})),f.length||f.push(h),l.a.createElement(m,Object(n.a)({},d,{ref:t,className:o.a.apply(void 0,[c].concat(f,E))}))}));m.displayName="Col",t.a=m},186:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function r(e,t){if(e){if("string"===typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}a.d(t,"a",(function(){return r}))},212:function(e,t,a){},213:function(e,t,a){},214:function(e,t,a){},215:function(e,t,a){},224:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(182),o=a(181),i=a(70),l=a(81),s=a(44),u=a(31),m=a(45),d=a(74),h=a(27),f=a(185),E=a(183),p=a(184);a(212);var b=function(e){return r.a.createElement("div",{className:"SemaphoreCheckbox ".concat(e.className)},r.a.createElement("input",{type:"checkbox",checked:e.character.hasDirection(e.direction),onChange:function(t){const a=e.onChange;a&&a(t.currentTarget.checked?"add":"remove",e.direction)}}),r.a.createElement("label",null,function(){const t=e.character.getPotentialMatch(e.direction);return t?t.toString():""}()))};var v=a(186);function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(l){r=!0,c=l}finally{try{n||null==i.return||i.return()}finally{if(r)throw c}}return a}}(e,t)||Object(v.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var g=function(e){const t=function(e){const t={left:-1,right:-1},a=y(e.getDegrees(),2),n=a[0],r=a[1];return void 0!==n&&(void 0===r?n<=180?t.right=n:t.left=n:0===n&&r<=180||n<=45&&r<180||r<=90||n>=270?(t.left=n,t.right=r):(t.right=n,t.left=r)),t}(e.character),a=t.left,n=t.right;return r.a.createElement("svg",{width:e.width,viewBox:"0 0 76 64"},r.a.createElement("defs",null,r.a.createElement("g",{id:"Person",fill:"black"},r.a.createElement("circle",{r:"3.5",cx:"4",cy:"4"}),r.a.createElement("rect",{y:"8",width:"8",height:"16",rx:"2",ry:"2"})),r.a.createElement("g",{id:"Flag"},r.a.createElement("polyline",{strokeWidth:"1",stroke:"black",points:"0 0, 0 20"}),r.a.createElement("polyline",{strokeWidth:"2",strokeLinecap:"round",stroke:"black",points:"0 20, 0 28"}),r.a.createElement("rect",{stroke:"black",height:"10",width:"10"}),r.a.createElement("polygon",{fill:"red",points:"0 0, 10 0, 0 10"}),r.a.createElement("polygon",{fill:"yellow",points:"10 0, 10 10, 0 10"})),r.a.createElement("g",{id:"LeftFlag"},r.a.createElement("use",{xlinkHref:"#Flag",transform:"scale(-1, 1)"}))),r.a.createElement("use",{xlinkHref:"#Person",x:"34",y:"23"}),a>=0?r.a.createElement("use",{transform:"rotate(".concat(a,", 33, 32)"),x:"33",xlinkHref:0===a||a>=180?"#LeftFlag":"#Flag",y:"4"}):null,n>=0?r.a.createElement("use",{transform:"rotate(".concat(n,", 43, 32)"),x:"43",xlinkHref:n<=180?"#Flag":"#LeftFlag",y:"4"}):null,"Sorry, your browser does not support inline SVG.")};a(213);var O=function(e){function t(t,a){const n=e.onChange;n&&n(t,a)}return r.a.createElement("div",{className:"SemaphoreCharacter"},r.a.createElement(b,{character:e.character,className:"SemaphoreCheckbox-north",direction:s.SemaphoreDirection.North,onChange:t}),r.a.createElement(b,{character:e.character,className:"SemaphoreCheckbox-northEast",direction:s.SemaphoreDirection.NorthEast,onChange:t}),r.a.createElement(b,{character:e.character,className:"SemaphoreCheckbox-east",direction:s.SemaphoreDirection.East,onChange:t}),r.a.createElement(b,{character:e.character,className:"SemaphoreCheckbox-southEast",direction:s.SemaphoreDirection.SouthEast,onChange:t}),r.a.createElement(b,{character:e.character,className:"SemaphoreCheckbox-south",direction:s.SemaphoreDirection.South,onChange:t}),r.a.createElement(b,{character:e.character,className:"SemaphoreCheckbox-southWest",direction:s.SemaphoreDirection.SouthWest,onChange:t}),r.a.createElement(b,{character:e.character,className:"SemaphoreCheckbox-west",direction:s.SemaphoreDirection.West,onChange:t}),r.a.createElement(b,{character:e.character,className:"SemaphoreCheckbox-northWest",direction:s.SemaphoreDirection.NorthWest,onChange:t}),r.a.createElement(g,{width:240,character:e.character}))};a(214);const x={append:l.a,backspace:l.b,clear:l.c,setDirections:l.f,space:l.g};var C=Object(i.b)(e=>({directions:e.encoding.semaphore.directions,stream:e.encoding.semaphore.stream}),x)((function(e){function t(t,a){const n=new s.SemaphoreCharacter;switch(n.directions=e.directions,t){case"add":n.addDirection(a);break;case"remove":n.removeDirection(a);break;default:throw new Error("Invalid change type")}e.setDirections(n.directions)}function a(){const t=new s.SemaphoreCharacter;t.directions=e.directions;const a=t.getExactMatches();a.length>0?e.append(a[0].toString()):e.space()}Object(n.useEffect)(()=>{function n(t){if(t.defaultPrevented)return;let a=!1;8===t.keyCode&&(e.backspace(),a=!0),a&&t.preventDefault()}function r(n){if(n.defaultPrevented)return;let r=!1;if(13===n.keyCode)a(),r=!0;else if(n.charCode>=49&&n.charCode<=56){const a=new s.SemaphoreCharacter;a.directions=e.directions;const r=s.SemaphoreDegrees.FromDegrees(45*(n.charCode-49));t(a.hasDirection(r)?"remove":"add",r)}r&&n.preventDefault()}return document.addEventListener("keydown",n),document.addEventListener("keypress",r),()=>{document.removeEventListener("keydown",n),document.removeEventListener("keypress",r)}});const c=new s.SemaphoreCharacter;return c.directions=e.directions,r.a.createElement("div",{className:"SemaphoreStream"},r.a.createElement(h.a,{className:"SemaphoreStream-input"},r.a.createElement(h.a.Header,null,"Input"),r.a.createElement(h.a.Body,null,r.a.createElement(E.a,{fluid:!0},r.a.createElement(p.a,null,r.a.createElement(f.a,{xs:"auto",sm:"auto",md:"auto"},r.a.createElement(O,{character:c,onChange:t})),r.a.createElement(f.a,null,r.a.createElement("div",{className:"SemaphoreStream-view"},c.toString()||"?"))),r.a.createElement(p.a,null,r.a.createElement(f.a,null,r.a.createElement(d.a,null,r.a.createElement(m.a,null,r.a.createElement(u.a,{onClick:function(){e.backspace()}},"\u232b")),r.a.createElement(m.a,null,r.a.createElement(u.a,{onClick:a},"Next")),r.a.createElement(m.a,null,r.a.createElement(u.a,{onClick:function(){e.clear()},variant:"danger"},"Clear")))))))),r.a.createElement(h.a,null,r.a.createElement(h.a.Header,null,"Output"),r.a.createElement(h.a.Body,null,r.a.createElement("pre",{className:"SemaphoreStream-output"},e.stream,r.a.createElement("span",{className:"blinking-cursor"},"|")))))})),S=a(176);a(215);var N=function(){const e=(new s.SemaphoreCharacter).getPotentialMatches();return r.a.createElement("div",{className:"SemaphoreTable"},r.a.createElement(S.a,{striped:!0,responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Character"),r.a.createElement("th",null,"Semaphore"))),r.a.createElement("tbody",null,e.map(e=>r.a.createElement("tr",{key:e.display},r.a.createElement("td",null,e.display),r.a.createElement("td",null,r.a.createElement(g,{width:100,character:new s.SemaphoreCharacter(e.encoding,e.category)})))))))};const j={selectTab:l.e},k=Object(i.b)(e=>({selectedTab:e.encoding.semaphore.selectedTab}),j);t.default=k((function(e){return r.a.createElement(o.a,{activeKey:e.selectedTab,id:"Semaphore-tabs",onSelect:e.selectTab},r.a.createElement(c.a,{eventKey:1,title:"Value"},r.a.createElement(C,null)),r.a.createElement(c.a,{eventKey:2,title:"Reference"},r.a.createElement(N,null)))}))}}]);
//# sourceMappingURL=3.eb9f64bc.chunk.js.map