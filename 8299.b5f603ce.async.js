(self.webpackChunk_antv_gpt_vis=self.webpackChunk_antv_gpt_vis||[]).push([[8299],{31033:function(I,H,p){"use strict";var C=p(31922),i=p(75271),_=p(41008),M=p(60889);function h(a){"@babel/helpers - typeof";return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(a)}function O(a,t){return K(a)||W(a,t)||E(a,t)||w()}function w(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E(a,t){if(a){if(typeof a=="string")return v(a,t);var l=Object.prototype.toString.call(a).slice(8,-1);if(l==="Object"&&a.constructor&&(l=a.constructor.name),l==="Map"||l==="Set")return Array.from(a);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return v(a,t)}}function v(a,t){(t==null||t>a.length)&&(t=a.length);for(var l=0,e=new Array(t);l<t;l++)e[l]=a[l];return e}function W(a,t){var l=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(l!=null){var e,n,r,o,s=[],f=!0,m=!1;try{if(r=(l=l.call(a)).next,t===0){if(Object(l)!==l)return;f=!1}else for(;!(f=(e=r.call(l)).done)&&(s.push(e.value),s.length!==t);f=!0);}catch(y){m=!0,n=y}finally{try{if(!f&&l.return!=null&&(o=l.return(),Object(o)!==o))return}finally{if(m)throw n}}return s}}function K(a){if(Array.isArray(a))return a}function R(a,t){var l=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);t&&(e=e.filter(function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable})),l.push.apply(l,e)}return l}function N(a){for(var t=1;t<arguments.length;t++){var l=arguments[t]!=null?arguments[t]:{};t%2?R(Object(l),!0).forEach(function(e){k(a,e,l[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(l)):R(Object(l)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(l,e))})}return a}function k(a,t,l){return t=c(t),t in a?Object.defineProperty(a,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[t]=l,a}function c(a){var t=d(a,"string");return h(t)==="symbol"?t:String(t)}function d(a,t){if(h(a)!=="object"||a===null)return a;var l=a[Symbol.toPrimitive];if(l!==void 0){var e=l.call(a,t||"default");if(h(e)!=="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(a)}function u(a){var t=a.children;return i.createElement("span",{"data-token":t},t)}function b(a){return a.hasQuestionToken&&typeof a.type=="string"&&(a.type=a.type.replace(/\s+\|\s+undefined\s*$/i,"")),a}var g=function(t){var l,e=(0,C.useIntl)(),n=(0,C.useSiteData)(),r=n.themeConfig;return(l=t.source)!==null&&l!==void 0&&l[0]&&r.sourceLink?i.createElement("a",{className:"dumi-default-api-link",href:e.formatMessage({id:"$internal.api.sourceLink"},N({},t.source[0])),target:"_blank",rel:"noreferrer"},t.className):t.className},S={toNode:function(t){return typeof t.type=="string"&&t.type in this?"enum"in t?this.enum(t):this[t.type](t):t.type?this.getValidClassName(t)||i.createElement("span",null,t.type):"const"in t?i.createElement("span",null,t.const):"oneOf"in t?this.oneOf(t):i.createElement("span",null,"unknown")},string:function(t){return i.createElement("span",null,t.type)},number:function(t){return i.createElement("span",null,t.type)},boolean:function(t){return i.createElement("span",null,t.type)},any:function(t){return i.createElement("span",null,t.type)},object:function(t){var l=this,e=Object.entries(t.properties||{}),n=e.map(function(r,o){var s,f=O(r,2),m=f[0],y=f[1];return i.createElement("span",{key:m},i.createElement("span",null,m),!((s=t.required)!==null&&s!==void 0&&s.includes(m))&&i.createElement(u,null,"?"),i.createElement(u,null,":"),y.type==="object"?i.createElement("span",null,"object"):l.toNode(y),o<e.length-1&&i.createElement(u,null,";"))});return i.createElement("span",null,i.createElement(u,null,"{"),n,i.createElement(u,null,"}"))},array:function(t){var l=i.createElement("span",null,"any");if(t.items){var e=this.getValidClassName(t.items);l=e!=null?e:this.toNode(t.items)}return i.createElement("span",null,l,i.createElement(u,null,"["),i.createElement(u,null,"]"))},element:function(t){return i.createElement("span",null,i.createElement(u,null,"<"),i.createElement("span",null,t.componentName),i.createElement(u,null,">"))},function:function(t){var l=this,e=t.signature;if(!e)return i.createElement("span",null,"Function");var n="oneOf"in e?e.oneOf:[e];return n.map(function(r,o){return i.createElement("span",{key:"".concat(o)},r.isAsync?i.createElement(u,null,"async"):"",i.createElement(u,null,"("),r.arguments.map(function(s,f){return i.createElement("span",{key:"".concat(o).concat(f)},i.createElement("span",null,s.key),s.hasQuestionToken&&i.createElement(u,null,"?"),i.createElement(u,null,":"),l.toNode(s.schema?s.schema:b(s)),f<r.arguments.length-1&&i.createElement(u,null,","))}),i.createElement(u,null,")"),i.createElement(u,null,"=>"),l.toNode(r.returnType),o<n.length-1&&i.createElement(u,null,"|"))})},dom:function(t){return i.createElement("span",null,t.className||"DOM")},enum:function(t){var l=t.enum.map(function(e){return JSON.stringify(e)});return i.createElement("span",null,l.map(function(e,n){return i.createElement("span",{key:n},i.createElement("span",null,e),n<l.length-1&&i.createElement(u,null,"|"))}))},oneOf:function(t){var l=this;return t.oneOf.map(function(e,n){return i.createElement("span",{key:n},l.getValidClassName(e)||l.toNode(e),n<t.oneOf.length-1&&i.createElement(u,null,"|"))})},reference:function(t){var l=this,e=t.typeParameters||[],n=e.map(function(r,o){return i.createElement("span",{key:o},l.toNode(r),o<e.length-1&&i.createElement(u,null,","))});return i.createElement(i.Fragment,null,i.createElement("a",{className:"dumi-default-api-link",href:t.externalUrl,target:"_blank",rel:"noreferrer"},t.name),n.length?i.createElement(i.Fragment,null,i.createElement(u,null,"<"),n,i.createElement(u,null,">")):"")},getValidClassName:function(t){return"className"in t&&typeof t.className=="string"&&t.className!=="__type"?i.createElement(g,t):null}},L=function(t){var l=useState(function(){return S.toNode(t)}),e=O(l,2),n=e[0],r=e[1];return useEffect(function(){r(S.toNode(t))},[t]),React.createElement("code",{className:"dumi-default-api-type"},n)};function D(a){var t={};return Object.entries(a).forEach(function(l){var e,n,r=O(l,2),o=r[0],s=r[1],f=(e=s.tags)===null||e===void 0?void 0:e.modifierTags,m=(n=s.tags)===null||n===void 0?void 0:n.blockTags;f==null||f.forEach(function(y){(y==="alpha"||y==="beta"||y==="experimental")&&(t[o]=[y])}),m==null||m.forEach(function(y){var A=y.tag,T=y.content;if(A==="deprecated"||A==="since"){var x=T.map(function(U){return U.text}).join("");t[o]=[A,x]}})}),t}var P=function(t){var l=t.name,e=t.info,n=useIntl(),r=O(e,2),o=r[0],s=r[1],f=k({className:"dumi-default-api-release-modifer"},"data-release",o);s&&o==="deprecated"&&(f["data-dumi-tooltip"]=s);var m=o==="since"?"".concat(s,"+"):n.formatMessage({id:"api.component.release.".concat(o)});return React.createElement("span",{className:"dumi-default-api-release"},React.createElement("span",{className:"dumi-default-api-release-name","data-release":o},l),React.createElement("span",f,o==="deprecated"?m:React.createElement(Badge,{type:"info"},m)))},F=function(t){var l=useRouteMeta(),e=l.frontmatter,n=useAtomAssets(),r=n.components,o=t.id||e.atomId,s=useIntl();if(!o)throw new Error("`id` properties if required for API component!");var f=r==null?void 0:r[o],m={},y=(t.type||"props").toLowerCase();if(f){var A,T="".concat(y,"Config");m=((A=f[T])===null||A===void 0?void 0:A.properties)||{}}var x=useMemo(function(){return D(m)},[m]);return React.createElement("div",{className:"markdown"},React.createElement(Table,null,React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,s.formatMessage({id:"api.component.name"})),React.createElement("th",null,s.formatMessage({id:"api.component.description"})),React.createElement("th",null,s.formatMessage({id:"api.component.type"})),y==="props"&&React.createElement("th",null,s.formatMessage({id:"api.component.default"})))),React.createElement("tbody",null,Object.keys(m).length?Object.entries(m).map(function(U){var $,z=O(U,2),j=z[0],V=z[1];return React.createElement("tr",{key:j},React.createElement("td",null,x[j]?React.createElement(P,{name:j,info:x[j]}):j),React.createElement("td",null,V.description||"--"),React.createElement("td",null,React.createElement(L,V)),y==="props"&&React.createElement("td",null,React.createElement("code",null,($=f.propsConfig.required)!==null&&$!==void 0&&$.includes(j)?s.formatMessage({id:"api.component.required"}):JSON.stringify(V.default)||"--")))}):React.createElement("tr",null,React.createElement("td",{colSpan:4},s.formatMessage({id:"api.component.".concat(r?"not.found":"unavailable")},{id:o}))))))},B=null},41008:function(I,H,p){"use strict";var C=p(75271);function i(){return i=Object.assign?Object.assign.bind():function(h){for(var O=1;O<arguments.length;O++){var w=arguments[O];for(var E in w)Object.prototype.hasOwnProperty.call(w,E)&&(h[E]=w[E])}return h},i.apply(this,arguments)}var _=function(O){return React.createElement("span",i({className:"dumi-default-badge"},O))},M=null},30581:function(I,H,p){"use strict";var C=p(90296),i=p(6774),_=p(61638),M=p(75271);function h(E){"@babel/helpers - typeof";return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(v){return typeof v}:function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v},h(E)}function O(E){var v=E.children,W=toArray(v).filter(function(R){var N;return h(R)==="object"&&typeof R.type=="function"&&((N=R.type)===null||N===void 0?void 0:N.name)===SourceCode.name}),K=W.map(function(R,N){var k,c,d=(k=R.props)!==null&&k!==void 0?k:{},u=d.lang,b=d.title;return{key:String((c=R.key)!==null&&c!==void 0?c:N),label:b||u||"txt",children:R}});return React.createElement(Tabs,{className:"dumi-default-code-group",items:K})}var w=null},60889:function(I,H,p){"use strict";p.d(H,{Z:function(){return k}});var C=p(30826),i=p.n(C),_=p(75271),M=["children"];function h(c,d){return W(c)||v(c,d)||w(c,d)||O()}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function w(c,d){if(c){if(typeof c=="string")return E(c,d);var u=Object.prototype.toString.call(c).slice(8,-1);if(u==="Object"&&c.constructor&&(u=c.constructor.name),u==="Map"||u==="Set")return Array.from(c);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return E(c,d)}}function E(c,d){(d==null||d>c.length)&&(d=c.length);for(var u=0,b=new Array(d);u<d;u++)b[u]=c[u];return b}function v(c,d){var u=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(u!=null){var b,g,S,L,D=[],P=!0,F=!1;try{if(S=(u=u.call(c)).next,d===0){if(Object(u)!==u)return;P=!1}else for(;!(P=(b=S.call(u)).done)&&(D.push(b.value),D.length!==d);P=!0);}catch(B){F=!0,g=B}finally{try{if(!P&&u.return!=null&&(L=u.return(),Object(L)!==L))return}finally{if(F)throw g}}return D}}function W(c){if(Array.isArray(c))return c}function K(c,d){if(c==null)return{};var u=R(c,d),b,g;if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(c);for(g=0;g<S.length;g++)b=S[g],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(c,b)&&(u[b]=c[b])}return u}function R(c,d){if(c==null)return{};var u={},b=Object.keys(c),g,S;for(S=0;S<b.length;S++)g=b[S],!(d.indexOf(g)>=0)&&(u[g]=c[g]);return u}var N=function(d){var u=d.children,b=K(d,M),g=(0,_.useRef)(null),S=(0,_.useState)(!1),L=h(S,2),D=L[0],P=L[1],F=(0,_.useState)(!1),B=h(F,2),a=B[0],t=B[1];return(0,_.useEffect)(function(){var l=g.current;if(l){var e=i()(function(){P(l.scrollLeft>0),t(l.scrollLeft<l.scrollWidth-l.offsetWidth)},100);return e(),l.addEventListener("scroll",e),window.addEventListener("resize",e),function(){l.removeEventListener("scroll",e),window.removeEventListener("resize",e)}}},[]),_.createElement("div",{className:"dumi-default-table"},_.createElement("div",{className:"dumi-default-table-content",ref:g,"data-left-folded":D||void 0,"data-right-folded":a||void 0},_.createElement("table",b,u)))},k=N},20981:function(I,H,p){"use strict";var C=p(69576),i=p(75271);function _(e){"@babel/helpers - typeof";return _=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_(e)}function M(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,o)}return r}function h(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?M(Object(r),!0).forEach(function(o){O(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}function O(e,n,r){return n=w(n),n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function w(e){var n=E(e,"string");return _(n)==="symbol"?n:String(n)}function E(e,n){if(_(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var o=r.call(e,n||"default");if(_(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function v(e,n){return R(e)||K(e,n)||c(e,n)||W()}function W(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K(e,n){var r=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var o,s,f,m,y=[],A=!0,T=!1;try{if(f=(r=r.call(e)).next,n===0){if(Object(r)!==r)return;A=!1}else for(;!(A=(o=f.call(r)).done)&&(y.push(o.value),y.length!==n);A=!0);}catch(x){T=!0,s=x}finally{try{if(!A&&r.return!=null&&(m=r.return(),Object(m)!==m))return}finally{if(T)throw s}}return y}}function R(e){if(Array.isArray(e))return e}function N(e){return u(e)||d(e)||c(e)||k()}function k(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function c(e,n){if(e){if(typeof e=="string")return b(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,n)}}function d(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function u(e){if(Array.isArray(e))return b(e)}function b(e,n){(n==null||n>e.length)&&(n=e.length);for(var r=0,o=new Array(n);r<n;r++)o[r]=e[r];return o}function g(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=[];return[].concat(e).forEach(function(o,s){var f="".concat(n?"".concat(n,"-"):"").concat(s);switch(o==null?void 0:o.type){case"ul":{var m,y=((m=r[r.length-1])===null||m===void 0?void 0:m.children)||r,A=g(o.props.children||[],f);y.push.apply(y,N(A));break}case"li":{var T,x,U=(T=o.props.children)===null||T===void 0||(x=T.some)===null||x===void 0?void 0:x.call(T,function(j){var V;return j.type==="ul"&&!((V=j.props.children)!==null&&V!==void 0&&V.length)}),$=[].concat(o.props.children).filter(function(j){return j.type!=="ul"}),z=U?[]:g(o.props.children,f);r.push({title:$,key:f,children:z,isLeaf:!U&&!z.length,switcherIcon:U?React.createElement("span",{className:"tree-switcher-leaf-line"}):void 0});break}default:}}),r}var S=function(n){var r=useState(g(n)),o=v(r,2),s=o[0],f=o[1];return useEffect(function(){f(g(n))},[n]),s},L=function(n){var r,o=n.isLeaf,s=n.expanded,f=n.data;return o?React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(FileOutlined,{fill:"currentColor"})):!s||!(f!=null&&(r=f.children)!==null&&r!==void 0&&r.length)?React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(FolderOutlined,{fill:"currentColor"})):React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(FolderOpenOutlined,{fill:"currentColor"}))},D=function(n){var r=n.isLeaf,o=n.expanded;return r?React.createElement("span",{className:"tree-switcher-leaf-line"}):o?React.createElement("span",{className:"tree-switcher-line-icon"},React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(MinusSquareOutlined,{fill:"currentColor"}))):React.createElement("span",{className:"tree-switcher-line-icon"},React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(PlusSquareOutlined,{fill:"currentColor"})))},P=function(){return{height:0,opacity:0}},F=function(n){var r=n.scrollHeight;return{height:r,opacity:1}},B=function(n){return{height:n?n.offsetHeight:0}},a=function(n,r){return(r==null?void 0:r.deadline)===!0||r.propertyName==="height"},t={motionName:"ant-motion-collapse",onAppearStart:P,onEnterStart:P,onAppearActive:F,onEnterActive:F,onLeaveStart:B,onLeaveActive:P,onAppearEnd:a,onEnterEnd:a,onLeaveEnd:a,motionDeadline:500},l=function(e){var n=S(e.children),r=createRef(),o=function(f,m){var y,A=m.isLeaf,T=!A&&!((y=m.children)!==null&&y!==void 0&&y.length);A||T||f.shiftKey||f.metaKey||f.ctrlKey||r.current.onNodeExpand(f,m)};return React.createElement(Tree,{className:"dumi-default-tree",icon:L,ref:r,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:h(h({},t),{},{motionAppear:!1}),onClick:o,treeData:[{key:"0",title:e.title||"<root>",children:n}],defaultExpandAll:!0,switcherIcon:D})}},61638:function(I,H,p){"use strict";var C,i=p(26538).default;C={value:!0},C=h;var _=i(p(75271)),M=p(36479);function h(O){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},E=[];return _.default.Children.forEach(O,function(v){v==null&&!w.keepEmpty||(Array.isArray(v)?E=E.concat(h(v)):(0,M.isFragment)(v)&&v.props?E=E.concat(h(v.props.children,w)):E.push(v))}),E}},26538:function(I){function H(p){return p&&p.__esModule?p:{default:p}}I.exports=H,I.exports.__esModule=!0,I.exports.default=I.exports}}]);
