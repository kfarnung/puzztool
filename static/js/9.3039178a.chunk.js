(this.webpackJsonppuzztool=this.webpackJsonppuzztool||[]).push([[9],{163:function(e,a,t){"use strict";var n=t(1),r=t(0),c=t.n(r),i=t(3),o=t.n(i);a.a=function(e){return c.a.forwardRef((function(a,t){return c.a.createElement("div",Object(n.a)({},a,{ref:t,className:o()(a.className,e)}))}))}},164:function(e,a,t){"use strict";var n=t(1),r=t(2),c=t(3),i=t.n(c),o=t(0),l=t.n(o),s=t(4),u=t(34),d=t(163),f=t(64),m=l.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,o=e.variant,u=e.as,d=void 0===u?"img":u,f=Object(r.a)(e,["bsPrefix","className","variant","as"]),m=Object(s.a)(t,"card-img");return l.a.createElement(d,Object(n.a)({ref:a,className:i()(o?m+"-"+o:m,c)},f))}));m.displayName="CardImg",m.defaultProps={variant:null};var b=m,p=Object(d.a)("h5"),v=Object(d.a)("h6"),h=Object(u.a)("card-body"),g=l.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,u=e.bg,d=e.text,m=e.border,b=e.body,p=e.children,v=e.as,g=void 0===v?"div":v,y=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),O=Object(s.a)(t,"card"),C=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:O+"-header"}}),[O]);return l.a.createElement(f.a.Provider,{value:C},l.a.createElement(g,Object(n.a)({ref:a},y,{className:i()(c,O,u&&"bg-"+u,d&&"text-"+d,m&&"border-"+m)}),b?l.a.createElement(h,null,p):p))}));g.displayName="Card",g.defaultProps={body:!1},g.Img=b,g.Title=Object(u.a)("card-title",{Component:p}),g.Subtitle=Object(u.a)("card-subtitle",{Component:v}),g.Body=h,g.Link=Object(u.a)("card-link",{Component:"a"}),g.Text=Object(u.a)("card-text",{Component:"p"}),g.Header=Object(u.a)("card-header"),g.Footer=Object(u.a)("card-footer"),g.ImgOverlay=Object(u.a)("card-img-overlay");a.a=g},165:function(e,a,t){"use strict";var n=t(1),r=t(2),c=t(3),i=t.n(c),o=t(0),l=t.n(o),s=t(4),u=l.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.size,o=e.toggle,u=e.vertical,d=e.className,f=e.as,m=void 0===f?"div":f,b=Object(r.a)(e,["bsPrefix","size","toggle","vertical","className","as"]),p=Object(s.a)(t,"btn-group"),v=p;return u&&(v=p+"-vertical"),l.a.createElement(m,Object(n.a)({},b,{ref:a,className:i()(d,v,c&&p+"-"+c,o&&p+"-toggle")}))}));u.displayName="ButtonGroup",u.defaultProps={vertical:!1,toggle:!1,role:"group"},a.a=u},167:function(e,a,t){"use strict";var n=t(1),r=t(2),c=t(3),i=t.n(c),o=t(0),l=t.n(o),s=t(4),u=l.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,o=Object(r.a)(e,["bsPrefix","className"]),u=Object(s.a)(t,"btn-toolbar");return l.a.createElement("div",Object(n.a)({},o,{ref:a,className:i()(c,u)}))}));u.displayName="ButtonToolbar",u.defaultProps={role:"toolbar"},a.a=u},168:function(e,a,t){"use strict";t.d(a,"b",(function(){return c})),t.d(a,"a",(function(){return i}));var n=t(0),r=t.n(n);function c(e,a){var t=0;return r.a.Children.map(e,(function(e){return r.a.isValidElement(e)?a(e,t++):e}))}function i(e,a){var t=0;r.a.Children.forEach(e,(function(e){r.a.isValidElement(e)&&a(e,t++)}))}},172:function(e,a,t){"use strict";var n=t(0),r=t.n(n).a.createContext({controlId:void 0});a.a=r},174:function(e,a,t){"use strict";var n=t(1),r=t(2),c=t(3),i=t.n(c),o=t(0),l=t.n(o),s=t(17),u=t.n(s),d={type:u.a.string.isRequired,as:u.a.elementType},f=l.a.forwardRef((function(e,a){var t=e.as,c=void 0===t?"div":t,o=e.className,s=e.type,u=Object(r.a)(e,["as","className","type"]);return l.a.createElement(c,Object(n.a)({},u,{ref:a,className:i()(o,s&&s+"-feedback")}))}));f.displayName="Feedback",f.propTypes=d,f.defaultProps={type:"valid"},a.a=f},175:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(0);function r(){return Object(n.useCallback)(e=>{e&&e.focus()},[])}},176:function(e,a,t){"use strict";var n=t(1),r=t(2),c=t(3),i=t.n(c),o=(t(105),t(0)),l=t.n(o),s=(t(51),t(174)),u=t(172),d=t(4),f=l.a.forwardRef((function(e,a){var t,c,s=e.bsPrefix,f=e.bsCustomPrefix,m=e.type,b=e.size,p=e.id,v=e.className,h=e.isValid,g=e.isInvalid,y=e.plaintext,O=e.readOnly,C=e.custom,j=e.as,x=void 0===j?"input":j,E=Object(r.a)(e,["bsPrefix","bsCustomPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),N=Object(o.useContext)(u.a).controlId,P=C?[f,"custom"]:[s,"form-control"],k=P[0],w=P[1];if(s=Object(d.a)(k,w),y)(c={})[s+"-plaintext"]=!0,t=c;else if("file"===m){var T;(T={})[s+"-file"]=!0,t=T}else if("range"===m){var R;(R={})[s+"-range"]=!0,t=R}else if("select"===x&&C){var S;(S={})[s+"-select"]=!0,S[s+"-select-"+b]=b,t=S}else{var I;(I={})[s]=!0,I[s+"-"+b]=b,t=I}return l.a.createElement(x,Object(n.a)({},E,{type:m,ref:a,readOnly:O,id:p||N,className:i()(v,t,h&&"is-valid",g&&"is-invalid")}))}));f.displayName="FormControl",f.Feedback=s.a,a.a=f},179:function(e,a,t){"use strict";var n=t(1),r=t(2),c=t(3),i=t.n(c),o=t(0),l=t.n(o),s=t(63),u=function(){},d=l.a.forwardRef((function(e,a){var t=e.children,c=e.name,d=e.className,f=e.checked,m=e.type,b=e.onChange,p=e.value,v=e.disabled,h=e.inputRef,g=Object(r.a)(e,["children","name","className","checked","type","onChange","value","disabled","inputRef"]),y=Object(o.useState)(!1),O=y[0],C=y[1],j=Object(o.useCallback)((function(e){"INPUT"===e.target.tagName&&C(!0)}),[]),x=Object(o.useCallback)((function(e){"INPUT"===e.target.tagName&&C(!1)}),[]);return l.a.createElement(s.a,Object(n.a)({},g,{ref:a,className:i()(d,O&&"focus",v&&"disabled"),type:null,active:!!f,as:"label"}),l.a.createElement("input",{name:c,type:m,value:p,ref:h,autoComplete:"off",checked:!!f,disabled:!!v,onFocus:j,onBlur:x,onChange:b||u}),t)}));d.displayName="ToggleButton",a.a=d},183:function(e,a,t){"use strict";var n=t(1),r=t(2),c=t(0),i=t.n(c),o=t(35),l=t.n(o),s=t(20),u=t(23),d=t(168),f=t(165),m=t(179),b=i.a.forwardRef((function(e,a){var t=Object(s.a)(e,{value:"onChange"}),c=t.children,o=t.type,m=t.name,b=t.value,p=t.onChange,v=Object(r.a)(t,["children","type","name","value","onChange"]),h=function(){return null==b?[]:[].concat(b)};return"radio"!==o||m||l()(!1),i.a.createElement(f.a,Object(n.a)({},v,{ref:a,toggle:!0}),Object(d.b)(c,(function(e){var a=h(),t=e.props,n=t.value,r=t.onChange;return i.a.cloneElement(e,{type:o,name:e.name||m,checked:-1!==a.indexOf(n),onChange:Object(u.a)(r,(function(e){return function(e,a){var t=h(),n=-1!==t.indexOf(e);"radio"!==o?p(n?t.filter((function(a){return a!==e})):[].concat(t,[e]),a):n||p(e,a)}(n,e)}))})})))}));b.defaultProps={type:"radio"},b.Button=m.a,a.a=b},186:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(63),i=t(165),o=t(167),l=t(164),s=t(176),u=t(179),d=t(183),f=t(175);t(187);a.a=function(e){const a=Object(f.a)();return r.a.createElement("div",{className:"KeyedCipherStream"},r.a.createElement(l.a,{className:"KeyedCipherStream-input"},r.a.createElement(l.a.Header,null,e.prompt),r.a.createElement(l.a.Body,null,r.a.createElement(s.a,{onChange:function(a){e.onTextChange(a.currentTarget.value)},placeholder:"Text",ref:a,value:e.text}),r.a.createElement(s.a,{onChange:function(a){e.onSecretChange(a.currentTarget.value)},placeholder:"Key",value:e.secret}),r.a.createElement(o.a,null,r.a.createElement(d.a,{name:"KeyedCipherStream-conversion",onChange:e.onConversionChange,type:"radio",value:e.conversion},r.a.createElement(u.a,{value:1},"Encrypt"),r.a.createElement(u.a,{value:2},"Decrypt")),r.a.createElement(i.a,null,r.a.createElement(c.a,{onClick:function(){e.onClear()},variant:"danger"},"Clear"))))),r.a.createElement(l.a,{className:"KeyedCipherStream-output"},r.a.createElement(l.a.Header,null,"Output"),r.a.createElement(l.a.Body,null,r.a.createElement("pre",null,function(){const a=e.cipher;return a.key=e.secret,a.text=e.text,1===e.conversion?a.encrypt():a.decrypt()}()||" "))))}},187:function(e,a,t){},219:function(e,a,t){},234:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(33),i=t(62),o=t(186),l=t(78);const s={clear:l.a,setConversion:l.c,setSecret:l.d,setText:l.e};var u=Object(i.b)(e=>({conversion:e.cipher.vigenere.conversion,secret:e.cipher.vigenere.secret,text:e.cipher.vigenere.text}),s)((function(e){return r.a.createElement(o.a,{cipher:new c.VigenereString,conversion:e.conversion,id:"VigenereStream",secret:e.secret,onClear:e.clear,onConversionChange:e.setConversion,onSecretChange:e.setSecret,onTextChange:e.setText,prompt:e.prompt,text:e.text})}));t(219);a.default=function(){return r.a.createElement("div",{className:"Vigenere"},r.a.createElement("div",{className:"Vigenere-info"},r.a.createElement("h2",null,"Vigenere Cipher"),r.a.createElement("p",null,'A Vigenere cipher is a type of substitution cipher.  It shifts each letter by using a keyword. For example, a the keyword "ace" would shift the first letter by 1, second by 3, and third by 5.')),r.a.createElement(u,{prompt:"Enter the text you want to convert, and the keyword to shift the text by."}))}}}]);
//# sourceMappingURL=9.3039178a.chunk.js.map