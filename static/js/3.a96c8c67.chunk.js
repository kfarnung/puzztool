(this.webpackJsonppuzztool=this.webpackJsonppuzztool||[]).push([[3],{203:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(22),o=n(83),i=n(14);t.a=function(e){var t=Object(c.a)(e,{activeKey:"onSelect"}),n=t.id,s=t.generateChildId,l=t.onSelect,u=t.activeKey,d=t.transition,h=t.mountOnEnter,b=t.unmountOnExit,j=t.children,m=Object(a.useMemo)((function(){return s||function(e,t){return n?n+"-"+t+"-"+e:null}}),[n,s]),f=Object(a.useMemo)((function(){return{onSelect:l,activeKey:u,transition:d,mountOnEnter:h||!1,unmountOnExit:b||!1,getControlledId:function(e){return m(e,"tabpane")},getControllerId:function(e){return m(e,"tab")}}}),[l,u,d,h,b,m]);return r.a.createElement(o.a.Provider,{value:f},r.a.createElement(i.a.Provider,{value:l||null},j))}},204:function(e,t,n){"use strict";var a=n(2),r=n(3),c=n(4),o=n.n(c),i=n(0),s=n.n(i),l=n(5),u=s.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.as,i=void 0===c?"div":c,u=e.className,d=Object(r.a)(e,["bsPrefix","as","className"]),h=Object(l.a)(n,"tab-content");return s.a.createElement(i,Object(a.a)({ref:t},d,{className:o()(u,h)}))}));t.a=u},205:function(e,t,n){"use strict";var a=n(2),r=n(3),c=n(4),o=n.n(c),i=n(0),s=n.n(i),l=n(5),u=n(83),d=n(14),h=n(206);var b=s.a.forwardRef((function(e,t){var n=function(e){var t=Object(i.useContext)(u.a);if(!t)return e;var n=t.activeKey,c=t.getControlledId,o=t.getControllerId,s=Object(r.a)(t,["activeKey","getControlledId","getControllerId"]),l=!1!==e.transition&&!1!==s.transition,b=Object(d.b)(e.eventKey);return Object(a.a)({},e,{active:null==e.active&&null!=b?Object(d.b)(n)===b:e.active,id:c(e.eventKey),"aria-labelledby":o(e.eventKey),transition:l&&(e.transition||s.transition||h.a),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:s.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:s.unmountOnExit})}(e),c=n.bsPrefix,b=n.className,j=n.active,m=n.onEnter,f=n.onEntering,v=n.onEntered,O=n.onExit,p=n.onExiting,x=n.onExited,E=n.mountOnEnter,y=n.unmountOnExit,g=n.transition,C=n.as,S=void 0===C?"div":C,N=(n.eventKey,Object(r.a)(n,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),k=Object(l.a)(c,"tab-pane");if(!j&&!g&&y)return null;var w=s.a.createElement(S,Object(a.a)({},N,{ref:t,role:"tabpanel","aria-hidden":!j,className:o()(b,k,{active:j})}));return g&&(w=s.a.createElement(g,{in:j,onEnter:m,onEntering:f,onEntered:v,onExit:O,onExiting:p,onExited:x,mountOnEnter:E,unmountOnExit:y},w)),s.a.createElement(u.a.Provider,{value:null},s.a.createElement(d.a.Provider,{value:null},w))}));b.displayName="TabPane",t.a=b},206:function(e,t,n){"use strict";var a,r=n(2),c=n(3),o=n(4),i=n.n(o),s=n(84),l=n(0),u=n.n(l),d=n(37),h=n(85),b=((a={})[d.b]="show",a[d.a]="show",a),j=u.a.forwardRef((function(e,t){var n=e.className,a=e.children,o=Object(c.a)(e,["className","children"]),j=Object(l.useCallback)((function(e){Object(h.a)(e),o.onEnter&&o.onEnter(e)}),[o]);return u.a.createElement(d.e,Object(r.a)({ref:t,addEndListener:s.a},o,{onEnter:j}),(function(e,t){return u.a.cloneElement(a,Object(r.a)({},t,{className:i()("fade",n,a.props.className,b[e])}))}))}));j.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},j.displayName="Fade",t.a=j},208:function(e,t,n){"use strict";var a=n(2),r=n(3),c=n(0),o=n.n(c),i=(n(133),n(22)),s=n(54),l=n(53),u=n(52),d=n(203),h=n(204),b=n(205),j=n(87);function m(e){var t=e.props,n=t.title,a=t.eventKey,r=t.disabled,c=t.tabClassName,i=t.id;return null==n?null:o.a.createElement(u.a,{as:l.a,eventKey:a,disabled:r,id:i,className:c},n)}var f=function(e){var t=Object(i.a)(e,{activeKey:"onSelect"}),n=t.id,c=t.onSelect,l=t.transition,u=t.mountOnEnter,f=t.unmountOnExit,v=t.children,O=t.activeKey,p=void 0===O?function(e){var t;return Object(j.a)(e,(function(e){null==t&&(t=e.props.eventKey)})),t}(v):O,x=Object(r.a)(t,["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"]);return o.a.createElement(d.a,{id:n,activeKey:p,onSelect:c,transition:l,mountOnEnter:u,unmountOnExit:f},o.a.createElement(s.a,Object(a.a)({},x,{role:"tablist",as:"nav"}),Object(j.b)(v,m)),o.a.createElement(h.a,null,Object(j.b)(v,(function(e){var t=Object(a.a)({},e.props);return delete t.title,delete t.disabled,delete t.tabClassName,o.a.createElement(b.a,t)}))))};f.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},f.displayName="Tabs",t.a=f},209:function(e,t,n){"use strict";var a=n(13),r=n(0),c=n.n(r),o=n(203),i=n(204),s=n(205),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},t}(c.a.Component);l.Container=o.a,l.Content=i.a,l.Pane=s.a,t.a=l},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(211);function r(e,t){if(e){if("string"===typeof e)return Object(a.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(a.a)(e,t):void 0}}},211:function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}n.d(t,"a",(function(){return a}))},212:function(e,t,n){"use strict";var a=n(2),r=n(3),c=n(4),o=n.n(c),i=n(0),s=n.n(i),l=n(5),u=s.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.fluid,i=e.as,u=void 0===i?"div":i,d=e.className,h=Object(r.a)(e,["bsPrefix","fluid","as","className"]),b=Object(l.a)(n,"container"),j="string"===typeof c?"-"+c:"-fluid";return s.a.createElement(u,Object(a.a)({ref:t},h,{className:o()(d,c?""+b+j:b)}))}));u.displayName="Container",u.defaultProps={fluid:!1},t.a=u},213:function(e,t,n){"use strict";var a=n(2),r=n(3),c=n(4),o=n.n(c),i=n(0),s=n.n(i),l=n(5),u=["xl","lg","md","sm","xs"],d=s.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,i=e.noGutters,d=e.as,h=void 0===d?"div":d,b=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),j=Object(l.a)(n,"row"),m=j+"-cols",f=[];return u.forEach((function(e){var t,n=b[e];delete b[e];var a="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"===typeof n?n.cols:n)&&f.push(""+m+a+"-"+t)})),s.a.createElement(h,Object(a.a)({ref:t},b,{className:o.a.apply(void 0,[c,j,i&&"no-gutters"].concat(f))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},t.a=d},214:function(e,t,n){"use strict";var a=n(2),r=n(3),c=n(4),o=n.n(c),i=n(0),s=n.n(i),l=n(5),u=["xl","lg","md","sm","xs"],d=s.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,i=e.as,d=void 0===i?"div":i,h=Object(r.a)(e,["bsPrefix","className","as"]),b=Object(l.a)(n,"col"),j=[],m=[];return u.forEach((function(e){var t,n,a,r=h[e];if(delete h[e],"object"===typeof r&&null!=r){var c=r.span;t=void 0===c||c,n=r.offset,a=r.order}else t=r;var o="xs"!==e?"-"+e:"";t&&j.push(!0===t?""+b+o:""+b+o+"-"+t),null!=a&&m.push("order"+o+"-"+a),null!=n&&m.push("offset"+o+"-"+n)})),j.length||j.push(b),s.a.createElement(d,Object(a.a)({},h,{ref:t,className:o.a.apply(void 0,[c].concat(j,m))}))}));d.displayName="Col",t.a=d},215:function(e,t,n){"use strict";var a=n(1);n(0),n(216);t.a=function(e){return Object(a.jsx)("div",{className:"ReferenceList",children:e.children})}},216:function(e,t,n){},237:function(e,t,n){},238:function(e,t,n){},239:function(e,t,n){},247:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(209),c=n(208),o=n(82),i=n(81),s=n(93),l=n(50),u=n(0),d=n(36),h=n(51),b=n(86),j=n(33),m=n(214),f=n(212),v=n(213);n(237);var O=function(e){return Object(a.jsxs)("div",{className:"SemaphoreCheckbox ".concat(e.className),children:[Object(a.jsx)("input",{type:"checkbox",checked:e.character.hasDirection(e.direction),onChange:function(t){var n=e.onChange;n&&n(t.currentTarget.checked?"add":"remove",e.direction)}}),Object(a.jsx)("label",{children:function(){var t=e.character.getPotentialMatch(e.direction);return t?t.toString():""}()})]})};var p=n(210);function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(s){r=!0,c=s}finally{try{a||null==i.return||i.return()}finally{if(r)throw c}}return n}}(e,t)||Object(p.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var E=function(e){var t=function(e){var t={left:-1,right:-1},n=x(e.getDegrees(),2),a=n[0],r=n[1];return void 0!==a&&(void 0===r?a<=180?t.right=a:t.left=a:0===a&&r<=180||a<=45&&r<180||r<=90||a>=270?(t.left=a,t.right=r):(t.right=a,t.left=r)),t}(e.character),n=t.left,r=t.right;return Object(a.jsxs)("svg",{width:e.width,viewBox:"0 0 76 64",children:[Object(a.jsxs)("defs",{children:[Object(a.jsxs)("g",{id:"Person",fill:"black",children:[Object(a.jsx)("circle",{r:"3.5",cx:"4",cy:"4"}),Object(a.jsx)("rect",{y:"8",width:"8",height:"16",rx:"2",ry:"2"})]}),Object(a.jsxs)("g",{id:"Flag",children:[Object(a.jsx)("polyline",{strokeWidth:"1",stroke:"black",points:"0 0, 0 20"}),Object(a.jsx)("polyline",{strokeWidth:"2",strokeLinecap:"round",stroke:"black",points:"0 20, 0 28"}),Object(a.jsx)("rect",{stroke:"black",height:"10",width:"10"}),Object(a.jsx)("polygon",{fill:"red",points:"0 0, 10 0, 0 10"}),Object(a.jsx)("polygon",{fill:"yellow",points:"10 0, 10 10, 0 10"})]}),Object(a.jsx)("g",{id:"LeftFlag",children:Object(a.jsx)("use",{xlinkHref:"#Flag",transform:"scale(-1, 1)"})})]}),Object(a.jsx)("use",{xlinkHref:"#Person",x:"34",y:"23"}),n>=0?Object(a.jsx)("use",{transform:"rotate(".concat(n,", 33, 32)"),x:"33",xlinkHref:0===n||n>=180?"#LeftFlag":"#Flag",y:"4"}):null,r>=0?Object(a.jsx)("use",{transform:"rotate(".concat(r,", 43, 32)"),x:"43",xlinkHref:r<=180?"#Flag":"#LeftFlag",y:"4"}):null,"Sorry, your browser does not support inline SVG."]})};n(238);var y=function(e){function t(t,n){var a=e.onChange;a&&a(t,n)}return Object(a.jsxs)("div",{className:"SemaphoreCharacter",children:[Object(a.jsx)(O,{character:e.character,className:"SemaphoreCheckbox-north",direction:l.SemaphoreDirection.North,onChange:t}),Object(a.jsx)(O,{character:e.character,className:"SemaphoreCheckbox-northEast",direction:l.SemaphoreDirection.NorthEast,onChange:t}),Object(a.jsx)(O,{character:e.character,className:"SemaphoreCheckbox-east",direction:l.SemaphoreDirection.East,onChange:t}),Object(a.jsx)(O,{character:e.character,className:"SemaphoreCheckbox-southEast",direction:l.SemaphoreDirection.SouthEast,onChange:t}),Object(a.jsx)(O,{character:e.character,className:"SemaphoreCheckbox-south",direction:l.SemaphoreDirection.South,onChange:t}),Object(a.jsx)(O,{character:e.character,className:"SemaphoreCheckbox-southWest",direction:l.SemaphoreDirection.SouthWest,onChange:t}),Object(a.jsx)(O,{character:e.character,className:"SemaphoreCheckbox-west",direction:l.SemaphoreDirection.West,onChange:t}),Object(a.jsx)(O,{character:e.character,className:"SemaphoreCheckbox-northWest",direction:l.SemaphoreDirection.NorthWest,onChange:t}),Object(a.jsx)(E,{width:240,character:e.character})]})},g=(n(239),{append:s.a,backspace:s.b,clear:s.c,setDirections:s.f,space:s.g});var C=Object(o.b)((function(e){return{directions:e.encoding.semaphore.directions,stream:e.encoding.semaphore.stream}}),g)((function(e){function t(t,n){var a=new l.SemaphoreCharacter;switch(a.directions=e.directions,t){case"add":a.addDirection(n);break;case"remove":a.removeDirection(n);break;default:throw new Error("Invalid change type")}e.setDirections(a.directions)}function n(){var t=new l.SemaphoreCharacter;t.directions=e.directions;var n=t.getExactMatches();n.length>0?e.append(n[0].toString()):e.space()}Object(u.useEffect)((function(){function a(t){if(!t.defaultPrevented){var n=!1;8===t.keyCode&&(e.backspace(),n=!0),n&&t.preventDefault()}}function r(a){if(!a.defaultPrevented){var r=!1;if(13===a.keyCode)n(),r=!0;else if(a.charCode>=49&&a.charCode<=56){var c=new l.SemaphoreCharacter;c.directions=e.directions;var o=l.SemaphoreDegrees.FromDegrees(45*(a.charCode-49));t(c.hasDirection(o)?"remove":"add",o)}r&&a.preventDefault()}}return document.addEventListener("keydown",a),document.addEventListener("keypress",r),function(){document.removeEventListener("keydown",a),document.removeEventListener("keypress",r)}}));var r=new l.SemaphoreCharacter;return r.directions=e.directions,Object(a.jsxs)("div",{className:"SemaphoreStream",children:[Object(a.jsxs)(j.a,{className:"SemaphoreStream-input",children:[Object(a.jsx)(j.a.Header,{children:"Input"}),Object(a.jsx)(j.a.Body,{children:Object(a.jsxs)(f.a,{fluid:!0,children:[Object(a.jsxs)(v.a,{children:[Object(a.jsx)(m.a,{xs:"auto",sm:"auto",md:"auto",children:Object(a.jsx)(y,{character:r,onChange:t})}),Object(a.jsx)(m.a,{children:Object(a.jsx)("div",{className:"SemaphoreStream-view",children:r.toString()||"?"})})]}),Object(a.jsx)(v.a,{children:Object(a.jsx)(m.a,{children:Object(a.jsxs)(b.a,{children:[Object(a.jsx)(h.a,{children:Object(a.jsx)(d.a,{onClick:function(){e.backspace()},children:"\u232b"})}),Object(a.jsx)(h.a,{children:Object(a.jsx)(d.a,{onClick:n,children:"Next"})}),Object(a.jsx)(h.a,{children:Object(a.jsx)(d.a,{onClick:function(){e.clear()},variant:"danger",children:"Clear"})})]})})})]})})]}),Object(a.jsxs)(j.a,{children:[Object(a.jsx)(j.a.Header,{children:"Output"}),Object(a.jsx)(j.a.Body,{children:Object(a.jsxs)("pre",{className:"SemaphoreStream-output",children:[e.stream,Object(a.jsx)("span",{className:"blinking-cursor",children:"|"})]})})]})]})})),S=n(215);var N=function(){var e=(new l.SemaphoreCharacter).getPotentialMatches();return Object(a.jsx)(S.a,{children:e.map((function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)(E,{width:96,character:new l.SemaphoreCharacter(e.encoding,e.category)}),Object(a.jsx)("br",{}),e.display]},e.display)}))})},k={selectTab:s.e},w=Object(o.b)((function(e){return{selectedTab:e.encoding.semaphore.selectedTab}}),k);t.default=w((function(e){return Object(a.jsx)(i.a,{title:"Semaphore",children:Object(a.jsxs)(c.a,{activeKey:e.selectedTab,id:"Semaphore-tabs",onSelect:e.selectTab,children:[Object(a.jsx)(r.a,{eventKey:"1",title:"Value",children:Object(a.jsx)(C,{})}),Object(a.jsx)(r.a,{eventKey:"2",title:"Reference",children:Object(a.jsx)(N,{})})]})})}))}}]);
//# sourceMappingURL=3.a96c8c67.chunk.js.map