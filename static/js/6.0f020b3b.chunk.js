(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{177:function(e,t,a){"use strict";var r=a(25),n=a(26),c=a(39),o=a(37),i=a(38),s=a(181),l=a.n(s),h=a(0),u=a(178),p=a(179),m=function(e){function t(e){var a;Object(r.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).VERSION_STORAGE_KEY="puzztoolVersion";var n=u.a.getObject(a.VERSION_STORAGE_KEY);return a.versionIncreased(n,p.a)&&(u.a.clear(),u.a.setObject(a.VERSION_STORAGE_KEY,p.a)),a}return Object(i.a)(t,e),Object(n.a)(t,[{key:"versionIncreased",value:function(e,t){return null==e||1===l()(t,e)}},{key:"componentDidMount",value:function(){this.restoreState(),this.updateState()}},{key:"updateState",value:function(){this.onUpdateState(),this.saveState()}},{key:"saveState",value:function(){u.a.setObject(this.getLocalStorageKey(),this.onSaveState())}},{key:"restoreState",value:function(){this.onRestoreState(u.a.getObject(this.getLocalStorageKey()))}}]),t}(h.Component);t.a=m},178:function(e,t,a){"use strict";var r=a(25),n=a(26),c=function(){function e(){Object(r.a)(this,e)}return Object(n.a)(e,null,[{key:"isSupported",value:function(){if(void 0===this._isSupported){var e=window.localStorage,t="__storage_test__";try{e.setItem(t,t),e.removeItem(t),this._isSupported=!0}catch(a){this._isSupported=a instanceof DOMException&&(22===a.code||1014===a.code||"QuotaExceededError"===a.name||"NS_ERROR_DOM_QUOTA_REACHED"===a.name)&&0!==e.length}}return this._isSupported}},{key:"getItem",value:function(e){return this.isSupported()?window.localStorage.getItem(this.getKey(e)):null}},{key:"getObject",value:function(e){if(this.isSupported()){var t=window.localStorage.getItem(this.getKey(e));if(null!==t)return JSON.parse(t)}return null}},{key:"setItem",value:function(e,t){this.isSupported()&&window.localStorage.setItem(this.getKey(e),t)}},{key:"setObject",value:function(e,t){this.isSupported()&&window.localStorage.setItem(this.getKey(e),JSON.stringify(t))}},{key:"clear",value:function(){this.isSupported()&&window.localStorage.clear()}},{key:"getKey",value:function(e){return"".concat(this._prefix,"_").concat(e)}}]),e}();c._isSupported=void 0,c._prefix="puzztool",t.a=c},179:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var r="0.7.0"},182:function(e,t,a){"use strict";var r=a(37);function n(e,t,a){return(n="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(e,t,a){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Object(r.a)(e)););return e}(e,t);if(n){var c=Object.getOwnPropertyDescriptor(n,t);return c.get?c.get.call(a):c.value}})(e,t,a||e)}a.d(t,"a",function(){return n})},184:function(e,t,a){"use strict";var r=a(3),n=a(4),c=a(6),o=a(5),i=a.n(o),s=a(0),l=a.n(s),h=a(2),u=function(e){function t(){return e.apply(this,arguments)||this}return Object(c.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.className,a=Object(n.a)(e,["className"]),c=Object(h.f)(a),o=c[0],s=c[1],u=Object(h.d)(o);return l.a.createElement("div",Object(r.a)({},s,{role:"toolbar",className:i()(t,u)}))},t}(l.a.Component);t.a=Object(h.a)("btn-toolbar",u)},185:function(e,t,a){"use strict";var r=a(25),n=a(26),c=a(39),o=a(37),i=a(38),s=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e)))._activeKey=1,a.state={activeKey:a._activeKey},a}return Object(i.a)(t,e),Object(n.a)(t,[{key:"onSaveState",value:function(){return{activeKey:this._activeKey}}},{key:"onRestoreState",value:function(e){null!==e&&(this._activeKey=e.activeKey)}},{key:"onUpdateState",value:function(){this.setState({activeKey:this._activeKey})}},{key:"onTabSelect",value:function(e){this._activeKey=e,this.updateState()}}]),t}(a(177).a);t.a=s},270:function(e,t,a){},271:function(e,t,a){},272:function(e,t,a){},273:function(e,t,a){},274:function(e,t,a){},281:function(e,t,a){"use strict";a.r(t);var r=a(25),n=a(26),c=a(39),o=a(37),i=a(38),s=a(0),l=a.n(s),h=a(292),u=a(289),p=a(185),m=a(65),f=a(182),d=a(184),v=a(66),g=a(51),y=a(177),S=(a(270),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).state={character:e.character},a}return Object(i.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"SemaphoreCheckbox ".concat(this.props.className)},l.a.createElement("input",{type:"checkbox",checked:this.state.character.hasDirection(this.props.direction),onChange:function(t){return e.onCheckboxChange(t)}}),l.a.createElement("label",null,this.getPotentialMatch()))}},{key:"getPotentialMatch",value:function(){var e=this.props.character.getPotentialMatch(this.props.direction);return e?e.toString():""}},{key:"onCheckboxChange",value:function(e){var t=e.target;this.props.onChange(t.checked?"add":"remove",this.props.direction)}}]),t}(s.Component));function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],r=!0,n=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(s){n=!0,c=s}finally{try{r||null==i.return||i.return()}finally{if(n)throw c}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var k=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).state={left:-1,right:-1},a}return Object(i.a)(t,e),Object(n.a)(t,null,[{key:"getDerivedStateFromProps",value:function(e,a){var r=t.getFlagAngles(e.character);return{left:r.left,right:r.right}}},{key:"getFlagAngles",value:function(e){var t={left:-1,right:-1},a=b(e.getDegrees(),2),r=a[0],n=a[1];return void 0!==r&&(void 0===n?r<=180?t.right=r:t.left=r:0===r&&n<=180||r<=45&&n<180||n<=90||r>=270?(t.left=r,t.right=n):(t.right=r,t.left=n)),t}}]),Object(n.a)(t,[{key:"render",value:function(){return l.a.createElement("svg",{width:this.props.width,viewBox:"0 0 76 64"},l.a.createElement("defs",null,l.a.createElement("g",{id:"Person",fill:"black"},l.a.createElement("circle",{r:"3.5",cx:"4",cy:"4"}),l.a.createElement("rect",{y:"8",width:"8",height:"16",rx:"2",ry:"2"})),l.a.createElement("g",{id:"Flag"},l.a.createElement("polyline",{strokeWidth:"1",stroke:"black",points:"0 0, 0 20"}),l.a.createElement("polyline",{strokeWidth:"2",strokeLinecap:"round",stroke:"black",points:"0 20, 0 28"}),l.a.createElement("rect",{stroke:"black",height:"10",width:"10"}),l.a.createElement("polygon",{fill:"red",points:"0 0, 10 0, 0 10"}),l.a.createElement("polygon",{fill:"yellow",points:"10 0, 10 10, 0 10"})),l.a.createElement("g",{id:"LeftFlag"},l.a.createElement("use",{xlinkHref:"#Flag",transform:"scale(-1, 1)"}))),l.a.createElement("use",{xlinkHref:"#Person",x:"34",y:"23"}),this.getLeftFlag(),this.getRightFlag(),"Sorry, your browser does not support inline SVG.")}},{key:"getLeftFlag",value:function(){return this.state.left>=0?l.a.createElement("use",{transform:"rotate(".concat(this.state.left,", 33, 32)"),x:"33",xlinkHref:0===this.state.left||this.state.left>=180?"#LeftFlag":"#Flag",y:"4"}):null}},{key:"getRightFlag",value:function(){return this.state.right>=0?l.a.createElement("use",{transform:"rotate(".concat(this.state.right,", 43, 32)"),x:"43",xlinkHref:this.state.right<=180?"#Flag":"#LeftFlag",y:"4"}):null}}]),t}(s.Component),E=a(180),O=(a(271),function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"SemaphoreCharacter"},l.a.createElement(S,{character:this.props.character,className:"SemaphoreCheckbox-north",direction:E.SemaphoreDirection.North,onChange:this.props.onChange}),l.a.createElement(S,{character:this.props.character,className:"SemaphoreCheckbox-northEast",direction:E.SemaphoreDirection.NorthEast,onChange:this.props.onChange}),l.a.createElement(S,{character:this.props.character,className:"SemaphoreCheckbox-east",direction:E.SemaphoreDirection.East,onChange:this.props.onChange}),l.a.createElement(S,{character:this.props.character,className:"SemaphoreCheckbox-southEast",direction:E.SemaphoreDirection.SouthEast,onChange:this.props.onChange}),l.a.createElement(S,{character:this.props.character,className:"SemaphoreCheckbox-south",direction:E.SemaphoreDirection.South,onChange:this.props.onChange}),l.a.createElement(S,{character:this.props.character,className:"SemaphoreCheckbox-southWest",direction:E.SemaphoreDirection.SouthWest,onChange:this.props.onChange}),l.a.createElement(S,{character:this.props.character,className:"SemaphoreCheckbox-west",direction:E.SemaphoreDirection.West,onChange:this.props.onChange}),l.a.createElement(S,{character:this.props.character,className:"SemaphoreCheckbox-northWest",direction:E.SemaphoreDirection.NorthWest,onChange:this.props.onChange}),l.a.createElement(k,{width:240,character:this.props.character}))}}]),t}(s.Component)),C=(a(272),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e)))._character=new E.SemaphoreCharacter,a._stream="",a.onKeyDown=a.onKeyDown.bind(Object(m.a)(a)),a.onKeyPress=a.onKeyPress.bind(Object(m.a)(a)),a.state={character:a._character,stream:""},a}return Object(i.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){Object(f.a)(Object(o.a)(t.prototype),"componentDidMount",this).call(this),document.addEventListener("keypress",this.onKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keypress",this.onKeyPress)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"SemaphoreStream"},l.a.createElement("div",{className:"SemaphoreStream-input"},l.a.createElement(O,{character:this.state.character,onChange:function(t,a){return e.onCharacterChange(t,a)}}),l.a.createElement("div",{className:"SemaphoreStream-view"},this.state.character.toString()||"?")),l.a.createElement(d.a,{className:"SemaphoreStream-commands"},l.a.createElement(v.a,null,l.a.createElement(g.a,{onClick:function(){return e.onBackspaceClick()}},"\u232b"),l.a.createElement(g.a,{onClick:function(){return e.onNextClick()}},"Next")),l.a.createElement(v.a,null,l.a.createElement(g.a,{onClick:function(){return e.onClearClick()}},"Clear"))),l.a.createElement("pre",{className:"SemaphoreStream-output"},this.state.stream,l.a.createElement("span",{className:"blinking-cursor"},"|")))}},{key:"getLocalStorageKey",value:function(){return"SemaphoreStream"}},{key:"onSaveState",value:function(){return{directions:this._character.directions,stream:this._stream}}},{key:"onRestoreState",value:function(e){null!==e&&(this._character.directions=e.directions,this._stream=e.stream)}},{key:"onUpdateState",value:function(){this.setState({character:this._character,stream:this._stream})}},{key:"onKeyDown",value:function(e){if(!e.defaultPrevented){var t=!1;8===e.keyCode&&(this.onBackspaceClick(),t=!0),t&&e.preventDefault()}}},{key:"onKeyPress",value:function(e){if(!e.defaultPrevented){var t=!1;if(13===e.keyCode)this.onNextClick(),t=!0;else if(e.charCode>=49&&e.charCode<=56){var a=E.SemaphoreDegrees.FromDegrees(45*(e.charCode-49));this.onCharacterChange(this._character.hasDirection(a)?"remove":"add",a)}t&&e.preventDefault()}}},{key:"onCharacterChange",value:function(e,t){switch(e){case"add":this._character.addDirection(t);break;case"remove":this._character.removeDirection(t);break;default:throw new Error("Invalid change type")}this.updateState()}},{key:"onNextClick",value:function(){var e=this._character.getExactMatches();e.length>0?(this._stream+=e[0].toString(),this._character.clear()):this._stream+=" ",this.updateState()}},{key:"onClearClick",value:function(){this._character.clear(),this._stream="",this.updateState()}},{key:"onBackspaceClick",value:function(){this._stream=this._stream.substring(0,this._stream.length-1),this.updateState()}}]),t}(y.a)),j=a(195),_=(a(273),function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"SemaphoreTable"},l.a.createElement(j.a,{striped:!0,responsive:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Character"),l.a.createElement("th",null,"Semaphore"))),l.a.createElement("tbody",null,this.renderRows())))}},{key:"renderRows",value:function(){return(new E.SemaphoreCharacter).getPotentialMatches().map(function(e){return l.a.createElement("tr",{key:e.display},l.a.createElement("td",null,e.display),l.a.createElement("td",null,l.a.createElement(k,{width:100,character:new E.SemaphoreCharacter(e.encoding,e.category)})))})}}]),t}(s.Component)),w=(a(274),function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"Semaphore"},l.a.createElement("div",{className:"Semaphore-content"},l.a.createElement(h.a,{activeKey:this.state.activeKey,animation:!1,id:"Semaphore-tabs",onSelect:function(t){return e.onTabSelect(t)}},l.a.createElement(u.a,{eventKey:1,title:"Value"},l.a.createElement(C,null)),l.a.createElement(u.a,{eventKey:2,title:"Reference"},l.a.createElement(_,null)))))}},{key:"getLocalStorageKey",value:function(){return"Semaphore"}}]),t}(p.a));t.default=w}}]);
//# sourceMappingURL=6.0f020b3b.chunk.js.map