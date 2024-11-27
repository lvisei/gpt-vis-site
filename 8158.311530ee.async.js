"use strict";(self.webpackChunk_antv_gpt_vis=self.webpackChunk_antv_gpt_vis||[]).push([[8158],{17759:function(K,g,e){var d=e(26068),n=e.n(d),v=e(30016),o=e(32699),D=e.n(o),b=e(75271),M=e(1145),E=e(52676),c=function(t){var s=t.data,m=t.xField,u=m===void 0?"time":m,r=t.yField,a=r===void 0?"value":r,P=(0,o.get)(s,"[0].group")!==void 0,A=(0,o.get)(t,"axis.y.title"),W=P?{}:{opacity:.6};return{xField:u,yField:a,style:W,colorField:P?"group":void 0,tooltip:function(p){var h=A||p[u];return{name:h,value:p[a]}}}},f=function(t){var s=(0,M.fB)("Area",c,t);return(0,E.jsx)(v.Z,n()({},s))};g.Z=f},93555:function(K,g,e){var d=e(26068),n=e.n(d),v=e(48198),o=e(32699),D=e.n(o),b=e(75271),M=e(1145),E=e(52676),c=function(t){var s=t.data,m=t.xField,u=m===void 0?"category":m,r=t.yField,a=r===void 0?"value":r,P=(0,o.get)(s,"[0].group")!==void 0,A=(0,o.get)(t,"axis.y.title");return{xField:u,yField:a,colorField:P?"group":void 0,tooltip:function(i){var p=A||i[u];return{name:p,value:i[a]}},style:{radiusTopLeft:5,radiusTopRight:5}}},f=function(t){var s=(0,M.fB)("Bar",c,t);return(0,E.jsx)(v.Z,n()({},s))};g.Z=f},50808:function(K,g,e){e.d(g,{m:function(){return U},r:function(){return S}});var d=e(26068),n=e.n(d),v=e(67825),o=e.n(v),D=e(32699),b=e(75271),M=e(4437),E=e(48305),c=e.n(E),f=e(53649),_=e.n(f),t=e(28025),s=e(8298),m=e(52676),u,r=t.default.div(u||(u=_()([`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 300px;
  background-image: linear-gradient(135deg, #e3f3ff 0%, #f1eeff 100%);
  color: rgba(0, 0, 0, 88%);

  &-icon {
    margin-bottom: 6px;
  }
`]))),a=function(){return(0,m.jsxs)(r,{className:"gpt-vis-loading",children:[(0,m.jsx)("div",{className:"gpt-vis-loading-icon",children:(0,m.jsx)(s.Z,{style:{fontSize:"24px",color:"rgb(56, 177, 246)"}})}),(0,m.jsx)("p",{children:"\u6570\u636E\u751F\u6210\u4E2D"})]})},P=a,A=["type"],W,i,p=t.default.div(W||(W=_()([`
  min-width: 300px;
  height: 300px;
  max-width: 100%;
`]))),h=(0,t.createGlobalStyle)(i||(i=_()([`
  pre:has(.gpt-vis) {
    overflow: hidden;
  }
`]))),l=(0,b.memo)(function(N){var B=N.style,X=N.content,z=N.components,I=N.debug,J=N.loadingTimeout,Y=(0,b.useRef)(),F=(0,b.useState)(!0),Q=c()(F,2),k=Q[0],ee=Q[1],w;try{w=JSON.parse(X)}catch(y){return Y.current&&(clearTimeout(Y.current),I&&console.warn("GPT-Vis withChartCode parse content timeout")),Y.current=setTimeout(function(){ee(!1)},J),k?(0,m.jsx)(p,{className:"gpt-vis",style:B,children:(0,m.jsx)(P,{})}):(0,m.jsx)("p",{children:"Chart generation timeout."})}var q=w,j=q.type,L=o()(q,A),O=z[j];return I&&console.log("GPT-Vis withChartCode get chartJson parse from vis-chart code block",w),O?(0,m.jsxs)(p,{className:"gpt-vis",style:B,children:[(0,m.jsx)(h,{}),(0,m.jsx)(O,n()({},L))]}):(0,m.jsx)("p",{children:'Chart type "'.concat(j,'" is not supported.')})}),T=["children","className","node"],C=function(B){var X=B.children,z=B.className,I=z===void 0?"":z,J=B.node,Y=o()(B,T);return(0,m.jsx)("code",n()(n()({},Y),{},{className:I,children:X}))},x=function(B){return function(z){var I,J=z.children,Y=z.className,F=Y===void 0?"":Y,Q=String(J).trim(),k=F.includes("language-vis-chart"),ee=B.components,w=B.languageRenderers,q=B.defaultRenderer,j=B.debug,L=B.loadingTimeout,O=L===void 0?5e3:L,y=B.style;if(k)return(0,m.jsx)(l,{style:y,content:Q,components:ee,debug:j,loadingTimeout:O});var R=((I=F.match(/language-(.*)/))===null||I===void 0?void 0:I[1])||"",G=w,V=G&&G[R];return V?(0,m.jsx)(V,n()({},z)):q?(0,m.jsx)(q,n()({},z)):(0,m.jsx)(C,n()({},z))}},U=function(B){return x(B)},S=function(B){return U(n()(n()({},B),{},{components:n()(n()({},M.hw),(0,D.get)(B,"components",{}))}))}},32611:function(K,g,e){var d=e(26068),n=e.n(d),v=e(83395),o=e(32699),D=e.n(o),b=e(75271),M=e(1145),E=e(52676),c=function(t){var s=t.data,m=t.xField,u=m===void 0?"category":m,r=t.yField,a=r===void 0?"value":r,P=(0,o.get)(s,"[0].group")!==void 0,A=(0,o.get)(t,"axis.y.title");return{xField:u,yField:a,colorField:P?"group":void 0,tooltip:function(i){var p=A||i[u];return{name:p,value:i[a]}},style:{radiusTopLeft:10,radiusTopRight:10}}},f=function(t){var s=(0,M.fB)("Column",c,t);return(0,E.jsx)(v.Z,n()({},s))};g.Z=f},33591:function(K,g,e){e.d(g,{E:function(){return v}});var d=e(75271),n=e(63388),v=d.createContext(n.h)},1145:function(K,g,e){e.d(g,{tw:function(){return m},wV:function(){return W},Ln:function(){return P},fB:function(){return r}});var d=e(26068),n=e.n(d),v=e(75271),o=e(66142),D=e(335),b=e.n(D),M=e(32699),E=new Map([["x","xField"],["y","yField"],["series","seriesField"],["size","sizeField"],["color","colorField"],["shape","shapeField"],["y","angleField"]]);function c(i){var p=i.encode;if(!p)return i;var h=n()({},i),l=b()(p),T;try{for(l.s();!(T=l.n()).done;){var C=T.value,x=E.get(C);x&&(h[x]=p[C])}}catch(U){l.e(U)}finally{l.f()}return h}function f(i){var p=i.axisXTitle,h=i.axisYTitle,l=i.axis;if(!(0,M.isUndefined)(l))return i;var T=n()({axis:{}},i);return p&&(T.axis.x={title:p}),h&&(T.axis.y={title:h}),T}function _(i){var p=c(i),h=f(p);return h}var t=e(33591);function s(){var i=v.useContext(t.E);return i}function m(i){var p=s(),h=p.components,l=h===void 0?{}:h,T=l==null?void 0:l[i];return T}function u(i){var p=m(i),h=s(),l=h.plot,T=n()(n()({},l),p);return T}function r(i,p,h){var l=_(h),T=typeof p=="function"?p(l):p,C=u(i),x=n()(n()(n()({},T),C),l);return x}function a(i){var p=m(i),h=s(),l=h.map,T={mapType:l==null?void 0:l.style,token:l==null?void 0:l.token},C=n()(n()({},T),p);return C}function P(i,p){var h=a(i),l=n()(n()({},h),p);return l}function A(i){var p=s(),h=p.graph,l=h===void 0?{}:h,T=m(i);return(0,o.Z)(l,T||{})}function W(i,p,h){var l=A(i);return(0,o.Z)(p,l,h)}},24582:function(K,g,e){var d=e(67825),n=e.n(d),v=e(75271),o=e(66142),D=e(33591),b=e(52676),M=["children"],E=function(f){var _=f.children,t=n()(f,M),s=(0,v.useMemo)(function(){return(0,o.m)(t)},[]);return(0,b.jsx)(D.E.Provider,{value:s,children:_})};g.Z=E},18142:function(K,g,e){e.d(g,{Z:function(){return u}});var d=e(26068),n=e.n(d),v=e(67825),o=e.n(v),D=e(81198),b=e(75271),M=e(1145),E=e(55790),c=["type","axisYTitle"];function f(r,a){var P=r.map(function(i,p){var h=i.type,l=i.axisYTitle,T=o()(i,c),C=l||"value_".concat(p+1),x=n()(n()({},T),{},{yField:C,axis:{y:{title:l}},data:void 0});return h===E.o.Column?n()(n()({},x),{},{type:"interval"}):h===E.o.Line?n()(n()({},x),{},{type:h,shapeField:"smooth",axis:{y:{position:"right",title:l}},style:{lineWidth:2}}):x}),A=a.map(function(i,p){var h={category:i};return r.forEach(function(l,T){var C=l.axisYTitle||"value_".concat(T+1);h[C]=l.data[p]}),h}),W=r.map(function(i){return i.type===E.o.Line?"smooth":"rect"});return{children:P,data:A,legendTypeList:W}}var _=e(52676),t=["categories","series"],s=function(a){var P=a.xField,A=P===void 0?"category":P,W=a.axisXTitle,i=a.legendTypeList;return{xField:A,axis:{x:{title:W}},legend:{color:{itemMarker:function(h,l){return i[l]}}},scale:{color:{palette:"category10"}}}},m=function(a){var P=a.categories,A=a.series,W=o()(a,t),i=(0,b.useMemo)(function(){return f(A,P)},[a]),p=(0,M.fB)("DualAxes",s,n()(n()({},W),i));return(0,_.jsx)(D.Z,n()({},p))},u=m},72704:function(K,g,e){var d=e(26068),n=e.n(d),v=e(67825),o=e.n(v),D=e(21777),b=e(75271),M=e(1145),E=e(88882),c=e(52676),f=["data"],_={autoFit:"view",autoResize:!0},t=function(m){var u=m.data,r=o()(m,f),a=(0,b.useMemo)(function(){return(0,E.i)(u)},[u]),P=(0,M.wV)("FishboneDiagram",_,r);return(0,c.jsx)(D.hj,n()({data:a},P))};g.Z=t},60934:function(K,g,e){var d=e(26068),n=e.n(d),v=e(67825),o=e.n(v),D=e(15558),b=e.n(D),M=e(21777),E=e(75271),c=e(1145),f=e(88882),_=e(52676),t=["data"],s=M.jG.TextNode,m={autoResize:!0,node:{style:{component:function(a){var P,A=(P=a.states)===null||P===void 0?void 0:P.includes("active");return(0,_.jsx)(s,{text:a.id,isActive:A,type:"filled",style:{fontSize:12,background:"linear-gradient(-89deg, #64b7f2 0%, #4c95f3 100%)"}})},size:[140,32]},animation:{enter:!1}},edge:{style:{endArrow:!0,labelBackground:!0,labelMaxLines:2,labelMaxWidth:"40%",labelWordWrap:!0},state:{active:{halo:!1,labelWordWrap:!1,stroke:"#001f98"}},animation:{enter:!1}},behaviors:function(a){return[].concat(b()(a),[{type:"hover-activate-neighbors",onHover:function(A){A.view.setCursor("pointer")},onHoverEnd:function(A){A.view.setCursor("default")}}])}},u=function(a){var P=a.data,A=o()(a,t),W=(0,E.useMemo)(function(){return(0,f.G)(P)},[P]),i=(0,c.wV)("FlowDiagram",m,A);return(0,_.jsx)(M.Pv,n()({data:W},i))};g.Z=u},81397:function(K,g,e){var d=e(26068),n=e.n(d),v=e(15558),o=e.n(v),D=e(67825),b=e.n(D),M=e(75271),E=e(20274),c=e(92763),f=e(70077),_=e(52676),t=["children","components","rehypePlugins","remarkPlugins"],s=function(u){var r=u.children,a=u.components,P=u.rehypePlugins,A=u.remarkPlugins,W=b()(u,t);return(0,_.jsx)(E.U,n()(n()({components:a,rehypePlugins:[c.Z].concat(o()(P||[])),remarkPlugins:[f.Z].concat(o()(A||[]))},W),{},{children:r}))};g.Z=(0,M.memo)(s)},80831:function(K,g,e){var d=e(26068),n=e.n(d),v=e(67825),o=e.n(v),D=e(75271),b=e(50808),M=e(81397),E=e(52676),c=["children","components"],f=(0,b.r)(),_=function(s){var m=s.children,u=s.components,r=o()(s,c);return(0,E.jsx)(M.Z,n()(n()({components:n()({code:f},u)},r),{},{children:m}))};g.Z=(0,D.memo)(_)},2353:function(K,g,e){var d=e(26068),n=e.n(d),v=e(74977),o=e(75271),D=e(1145),b=e(52676),M=function(f){var _=f.data,t=f.binField,s=t===void 0?"value":t,m=f.binNumber;return{data:_,binField:s,binNumber:m,style:{inset:.5}}},E=function(f){var _=(0,D.fB)("Histogram",M,f);return(0,b.jsx)(v.Z,n()({},_))};g.Z=E},67899:function(K,g,e){var d=e(67825),n=e.n(d),v=e(26068),o=e.n(v),D=e(15558),b=e.n(D),M=e(21777),E=e(75271),c=e(1145),f=e(88882),_=e(52676),t=["data"],s={type:"linear",autoFit:"view",autoResize:!0,node:{animation:{update:!1,translate:!1}},edge:{animation:{update:!1,translate:!1}},transforms:function(r){return[].concat(b()(r.filter(function(a){return a.type!=="collapse-expand-react-node"})),[o()(o()({},r.find(function(a){return a.type==="collapse-expand-react-node"})),{},{enable:!0})])}},m=function(r){var a=r.data,P=n()(r,t),A=(0,E.useMemo)(function(){return(0,f.i)(a)},[a]),W=(0,c.wV)("IndentedTree",s,P);return(0,_.jsx)(M.uk,o()({data:A},W))};g.Z=m},21621:function(K,g,e){var d=e(26068),n=e.n(d),v=e(30278),o=e(32699),D=e.n(o),b=e(75271),M=e(1145),E=e(52676),c=function(t){var s=t.data,m=t.xField,u=m===void 0?"time":m,r=t.yField,a=r===void 0?"value":r,P=(0,o.get)(s,"[0].group")!==void 0,A=(0,o.get)(t,"axis.y.title");return{xField:u,yField:a,colorField:P?"group":void 0,tooltip:function(i){var p=A||i[u];return{name:p,value:i[a]}}}},f=function(t){var s=(0,M.fB)("Line",c,t);return(0,E.jsx)(v.Z,n()({},s))};g.Z=f},47282:function(K,g,e){e.d(g,{Z:function(){return p}});var d=e(26068),n=e.n(d),v=e(90228),o=e.n(v),D=e(15558),b=e.n(D),M=e(87999),E=e.n(M),c=e(70162),f=e(75271),_=e(36043);function t(h,l,T){if(h.length===1)l.setCenter([h[0].longitude,h[0].latitude]);else{var C=[180,90,-180,-90];h.forEach(function(F){C[0]>F.longitude&&(C[0]=F.longitude),C[1]>F.latitude&&(C[1]=F.latitude),C[2]<F.longitude&&(C[2]=F.longitude),C[3]<F.latitude&&(C[3]=F.latitude)});var x=T||{},U=x.left,S=U===void 0?20:U,N=x.right,B=N===void 0?20:N,X=x.bottom,z=X===void 0?20:X,I=x.top,J=I===void 0?20:I,Y=[S,J,B,z];l.map.setBounds(C,!1,Y)}}var s=function(l,T){if(l.includePoints)t(l.includePoints,T,l.includePadding);else{var C=[];l.markers&&l.markers.forEach(function(x){C.push({longitude:x.longitude,latitude:x.latitude})}),l.polyline&&l.polyline.forEach(function(x){x.points.forEach(function(U){C.push({longitude:U.longitude,latitude:U.latitude})})}),C.length&&t(C,T,l.includePadding)}l.enableZoom!==void 0&&T.setMapStatus({zoomEnable:l.enableZoom}),l.enableRotate!==void 0&&T.setMapStatus({rotateEnable:l.enableRotate}),l.enableScroll!==void 0&&T.setMapStatus({dragEnable:l.enableScroll}),l.onInitComplete&&(T.off("loaded",l.onInitComplete),T.on("loaded",l.onInitComplete))};function m(h){var l=0;if(h.length>0)for(var T=0;T<h.length;T++)l=(l<<5)-l+h.charCodeAt(T)|0;var C=Math.abs(l%1e4).toString().padStart(4,"0");return"marker-".concat(C)}function u(h,l){if(h.markers){var T=new Set(h.markers.filter(function(C){return C.iconPath!==void 0}).map(function(C){return C.iconPath}));return Promise.all(Array.from(T.values()).map(function(){var C=E()(o()().mark(function x(U){var S;return o()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return S=m(U),B.next=3,l.addImage(S,U);case 3:return B.abrupt("return",B.sent);case 4:case"end":return B.stop()}},x)}));return function(x){return C.apply(this,arguments)}}()))}}var r=e(88666);function a(h){var l=h.map(function(x){var U=x.points.map(function(S){return[S.longitude,S.latitude]});return n()(n()({},x),{},{coordinates:U,color:x.color,width:x.width})}),T=l[0].dottedLine,C=new r.LineLayer().source(l,{parser:{type:"json",coordinates:"coordinates"}}).size("width").shape("line").color("color").style({opacity:1,lineType:T?"dash":"solid",dashArray:[3,1]});return[C]}var P=e(32699);function A(h){var l=h.map(function(I){var J,Y,F;return n()(n()({},I),{},{label:(0,P.isObject)(I.label)?I.label.content:I.label,color:(J=I.label)===null||J===void 0?void 0:J.color,bgColor:(Y=I.label)===null||Y===void 0?void 0:Y.bgColor,fontSize:(F=I.label)===null||F===void 0?void 0:F.fontSize,offsets:[I.anchorX||0,I.anchorY||-1],iconPath:I.iconPath?m(I.iconPath):void 0})}),T=l.filter(function(I){return I.iconPath!==void 0}),C=l.filter(function(I){return I.label!==void 0}),x=[];if(C.length>0){var U=C[0].offsets,S=C[0].fontSize||10,N=new r.PointLayer({zIndex:2}).source(C,{parser:{type:"json",x:"longitude",y:"latitude"}}).shape("label","text").size("fontSize").color("color").style({opacity:1,textOffset:[U[0],-2*U[1]*S],fontWeight:600,textAnchor:"center",stroke:C[0].bgColor||"#ffffff",strokeWidth:2,strokeOpacity:1,padding:[10,10]});x.push(N)}if(T.length!==0){var B=T[0].offsets,X=T[0].width||10,z=new r.PointLayer().source(T,{parser:{type:"json",x:"longitude",y:"latitude"}}).shape("iconPath").size("width").style({offsets:[B[0],B[1]*X]});x.push(z)}return x}var W=e(52676),i=function(l){var T=l.className,C=l.containerStyle,x=l.children,U=[],S=(0,_.I8)(l),N=function(){var B=E()(o()().mark(function X(z){var I,J;return o()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return s(l,z),F.next=3,u(l,z);case 3:l.polyline&&(I=a(l.polyline||[]),U.push.apply(U,b()(I))),l.markers&&(J=A(l.markers||[]),U.push.apply(U,b()(J))),U.forEach(function(Q){z.addLayer(Q)});case 6:case"end":return F.stop()}},X)}));return function(z){return B.apply(this,arguments)}}();return(0,W.jsx)(c.$,n()(n()({className:T,style:n()({height:300},C)},S),{},{onSceneLoaded:N,children:x}))},p=i},80394:function(K,g,e){var d=e(67825),n=e.n(d),v=e(26068),o=e.n(v),D=e(15558),b=e.n(D),M=e(21777),E=e(75271),c=e(1145),f=e(88882),_=e(52676),t=["data"],s={type:"boxed",autoFit:"view",autoResize:!0,padding:2,node:{animation:{translate:!1,update:!1}},edge:{animation:{translate:!1,update:!1}},transforms:function(r){return[].concat(b()(r.filter(function(a){return a.type!=="collapse-expand-react-node"})),[o()(o()({},r.find(function(a){return a.type==="collapse-expand-react-node"})),{},{enable:!0})])}},m=function(r){var a=r.data,P=n()(r,t),A=(0,E.useMemo)(function(){return(0,f.i)(a)},[a]),W=(0,c.wV)("MindMap",s,P);return(0,_.jsx)(M.B5,o()({data:A},W))};g.Z=m},661:function(K,g,e){var d=e(26068),n=e.n(d),v=e(67825),o=e.n(v),D=e(15558),b=e.n(D),M=e(21777),E=e(75271),c=e(1145),f=e(88882),_=e(52676),t=["data"],s={autoResize:!0,node:{style:{size:28,labelFontSize:10,labelBackground:!0},animation:{enter:!1}},edge:{style:{labelFontSize:10,labelBackground:!0,endArrow:!0},animation:{enter:!1}},behaviors:function(r){return[].concat(b()(r),[{key:"hover-activate",type:"hover-activate",degree:1}])},transforms:function(r){return[].concat(b()(r),["process-parallel-edges"])},layout:{type:"force",animation:!1}},m=function(r){var a=r.data,P=o()(r,t),A=(0,E.useMemo)(function(){return(0,f.G)(a)},[a]),W=(0,c.wV)("NetworkGraph",s,P);return(0,_.jsx)(M.q$,n()({data:A},W))};g.Z=m},48449:function(K,g,e){var d=e(67825),n=e.n(d),v=e(26068),o=e.n(v),D=e(15558),b=e.n(D),M=e(21777),E=e(75271),c=e(1145),f=e(88882),_=e(52676),t=["data"],s=M.jG.b,m={padding:[40,0,0,120],autoFit:"view",autoResize:!0,node:{style:{component:function(a){var P,A=(P=a.states)===null||P===void 0?void 0:P.includes("active");return(0,_.jsx)(s,{name:a.name,position:a.description,status:"online",isActive:A})},size:[280,80]}},edge:{state:{active:{stroke:"#1890ff",halo:!1}}},behaviors:function(a){return[].concat(b()(a),["hover-activate-neighbors"])},transforms:function(a){return[].concat(b()(a.filter(function(P){return P.type!=="collapse-expand-react-node"})),[o()(o()({},a.find(function(P){return P.type==="collapse-expand-react-node"})),{},{enable:!0,iconOffsetY:24})])},animation:!1},u=function(a){var P=a.data,A=n()(a,t),W=(0,E.useMemo)(function(){return(0,f.i)(P)},[P]),i=(0,c.wV)("OrganizationChart",m,A);return(0,_.jsx)(M.OE,o()({data:W},i))};g.Z=u},66955:function(K,g,e){var d=e(26068),n=e.n(d),v=e(15558),o=e.n(v),D=e(67825),b=e.n(D),M=e(75271),E=e(1145),c=e(47282),f=e(36043),_=e(52676),t=["data","markerStyle","pathStyle"],s=function(u){var r=(0,E.Ln)("PathMap",u),a=r.data,P=a===void 0?[]:a,A=r.markerStyle,W=A===void 0?{}:A,i=r.pathStyle,p=i===void 0?{}:i,h=b()(r,t),l=(0,M.useMemo)(function(){var C=[];return P.forEach(function(x){x.markers&&C.push.apply(C,o()(x.markers))}),(0,f.z6)(C,W)},[P,W]),T=(0,M.useMemo)(function(){var C=P.map(function(x){return x.path});return(0,f.mc)(C,p)},[P,p]);return(0,_.jsx)(c.Z,n()({markers:l,polyline:T},h))};g.Z=s},43300:function(K,g,e){var d=e(26068),n=e.n(d),v=e(67764),o=e(32699),D=e.n(o),b=e(75271),M=e(1145),E=e(52676),c=function(t){var s=t.data,m=s===void 0?[]:s,u=t.angleField,r=u===void 0?"value":u,a=t.colorField,P=a===void 0?"category":a,A=(0,o.sumBy)(m,r);return{angleField:r,colorField:P,tooltip:function(i){return{name:i[P],value:i[r]}},label:{position:"outside",text:function(i){return"".concat(i[P],": ").concat((0,o.round)(i[r]/A*100,1),"%")}},legend:{color:{title:!1,position:"top"}},interaction:{elementSelect:{single:!0}}}},f=function(t){var s=(0,M.fB)("Pie",c,t);return(0,E.jsx)(v.Z,n()({},s))};g.Z=f},13176:function(K,g,e){var d=e(26068),n=e.n(d),v=e(67825),o=e.n(v),D=e(75271),b=e(1145),M=e(47282),E=e(36043),c=e(52676),f=["data","markerStyle"],_=function(s){var m=(0,b.Ln)("PinMap",s),u=m.data,r=u===void 0?[]:u,a=m.markerStyle,P=a===void 0?{}:a,A=o()(m,f),W=(0,D.useMemo)(function(){return(0,E.z6)(r,P)},[r,P]);return(0,c.jsx)(M.Z,n()({markers:W,includePoints:W},A))};g.Z=_},32818:function(K,g,e){var d=e(26068),n=e.n(d),v=e(62836),o=e(32699),D=e.n(o),b=e(75271),M=e(1145),E=e(52676),c=function(t){var s=t.data,m=t.xField,u=m===void 0?"name":m,r=t.yField,a=r===void 0?"value":r,P=(0,o.get)(s,"[0].group")!==void 0;return{xField:u,yField:a,colorField:P?"group":void 0,area:{style:{fillOpacity:.5}},scale:{x:{padding:.6,align:0},y:{nice:!0}},axis:{x:{title:!1,grid:!0},y:{zIndex:1,title:!1,gridConnect:"line",gridLineWidth:1}},tooltip:function(W){return{name:W[u],value:W[a]}}}},f=function(t){var s=(0,M.fB)("Radar",c,t);return(0,E.jsx)(v.Z,n()({},s))};g.Z=f},38641:function(K,g,e){var d=e(26068),n=e.n(d),v=e(55981),o=e(32699),D=e.n(o),b=e(75271),M=e(1145),E=e(52676),c=function(t){var s=t.data,m=t.xField,u=m===void 0?"x":m,r=t.yField,a=r===void 0?"y":r,P=(0,o.get)(t,"axis.x.title"),A=(0,o.get)(t,"axis.y.title");return{data:s,xField:u,yField:a,tooltip:[{channel:"x",name:P||"x"},{channel:"y",name:A||"y"}]}},f=function(t){var s=(0,M.fB)("Scatter",c,t);return(0,E.jsx)(v.Z,n()({},s))};g.Z=f},82417:function(K,g,e){e.d(g,{Z:function(){return A}});var d=e(26068),n=e.n(d),v=e(1942),o=e(11282),D=e(32699),b=e(75271),M=e(1145),E=e(20516),c=e(68855),f=e(3632),_=c.Z.darkAlgorithm,t=function(){var i,p=(0,b.useContext)(f.ZP.ConfigContext),h=(i=p.theme)===null||i===void 0?void 0:i.algorithm;return(0,D.isArray)(h)&&h.includes(_)?!0:h===_},s=e(52792),m=function(i){var p=i.type,h=i.color,l=i.theme;if(p&&h&&l==="dark"){var T=(0,D.get)(E.O,[p,"color"]);if(h===T){var C=(0,D.findKey)(s.W.light,function(x){return x===h});if(C)return s.W.dark[C]}}return h},u=e(52676),r=v.Z.Text;function a(W,i,p){if(!W)return null;var h=i==null?void 0:i[W];return h?(0,u.jsx)(h,n()({},p)):W}var P=function(i){var p=i.children,h=i.className,l=i.style,T=i.type,C=i.origin,x=t(),U=(0,M.tw)("VisText"),S=T?U==null?void 0:U[T]:{},N=U==null?void 0:U[E.W];return(0,u.jsx)(o.Z,{title:(0,D.toString)(C),children:(0,u.jsxs)(r,{className:h,style:n()(n()({fontSize:"unset",color:m({type:T,color:S==null?void 0:S.color,theme:x?"dark":"light"})},l),(0,D.pick)(S,["backgroundColor","fontWeight"])),children:[a(S==null?void 0:S.prefix,N,i),p,a(S==null?void 0:S.suffix,N,i)]})})},A=P},20516:function(K,g,e){e.d(g,{O:function(){return q},W:function(){return w}});var d=e(82092),n=e.n(d),v=e(75271),o=e(52676),D=2,b=function(){return(0,o.jsx)("svg",{width:"8px",height:"9px",style:{transform:"rotate(180deg)",marginRight:D},viewBox:"0 0 8 9",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("g",{transform:"translate(-2.000000, -2.000000)",children:(0,o.jsx)("polygon",{fill:"currentColor",points:"6 11 9.5 2 2.5 2"})})})},M=function(){return(0,o.jsx)("svg",{width:"8px",height:"9px",viewBox:"0 0 8 9",style:{marginRight:D},version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("g",{transform:"translate(-2.000000, -2.000000)",children:(0,o.jsx)("polygon",{fill:"currentColor",points:"6 11 9.5 2 2.5 2"})})})},E=e(48305),c=e.n(E),f=e(32699),_=e(52792),t=e(26068),s=e.n(t),m=e(67825),u=e.n(m);function r(j,L){var O;return window.getComputedStyle?window.getComputedStyle(j,null)[L]:j==null||(O=j.currentStyle)===null||O===void 0?void 0:O[L]}function a(j){return j==null?void 0:j.endsWith("px")}function P(j){var L=j.replace(/px$/,""),O=Number(L);if(!Number.isNaN(O))return O}function A(j){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:_.W.fontSizeBase,O="font-size",y=r(j,O);if(y&&a(y)){var R=P(y);if(R)return R}var G=r(window.document.body,O);if(G&&a(G)){var V=P(G);if(V)return V}return L}var W=["children"],i=function(){var L=(0,v.useRef)(null),O=(0,v.useState)(_.W.fontSizeBase),y=c()(O,2),R=y[0],G=y[1];(0,v.useLayoutEffect)(function(){L.current&&G(A(L.current,_.W.fontSizeBase))},[]);var V=function(Z){var $=Z.children,ne=u()(Z,W);return(0,o.jsx)("svg",s()(s()({style:{margin:"0px 4px",transform:"translate(0px, 0.125em)"},ref:L},ne),{},{children:$}))};return[V,R]};function p(j){return typeof j!="number"?0:j>1?1:j<0?0:j}function h(j,L){var O=j/2,y=j/2,R=j/2,G=p(L)*2*Math.PI,V=O+R*Math.sin(G),H=y-R*Math.cos(G),Z=`
    M`.concat(O," ",0,`
    A `).concat(O," ").concat(y," 0 ").concat(G>Math.PI?1:0," 1 ").concat(V," ").concat(H,`
    L `).concat(O," ").concat(y,` Z
  `);return Z}function l(j,L){var O,y=(0,f.toNumber)(L);if(!(0,f.isNaN)(y))O=y;else{var R,G,V;if((0,f.isString)(j)?V=j:Array.isArray(j)&&(0,f.isString)(j[0])&&(V=j[0]),(R=V)!==null&&R!==void 0&&(G=R.endsWith)!==null&&G!==void 0&&G.call(R,"%")){var H,Z=(H=V)===null||H===void 0?void 0:H.replace(/%$/,""),$=(0,f.toNumber)(Z);(0,f.isNaN)($)||(O=$/100)}}return O}var T=function(L){var O=L.origin,y=L.children,R=(0,v.useMemo)(function(){return l(y,O)},[y,O]),G=i(),V=c()(G,2),H=V[0],Z=V[1],$=Z/2;return R&&(0,o.jsxs)(H,{width:Z,height:Z,children:[(0,o.jsx)("circle",{cx:$,cy:$,r:$,fill:_.W.chart.proportionShadowColor}),R>=1?(0,o.jsx)("circle",{cx:$,cy:$,r:$,fill:_.W.chart.proportionFillColor}):(0,o.jsx)("path",{d:h(Z,R),fill:_.W.chart.proportionFillColor})]})},C=e(15558),x=e.n(C),U=e(25298),S=e.n(U),N=e(17069),B=e.n(N),X=function(L,O){return function(y){var R=c()(L,2),G=R[0],V=R[1],H=c()(O,2),Z=H[0],$=H[1];return Z===$?(V-G)/2:y/($-Z)*(V-G)}},z=2,I=function(){function j(L,O){S()(this,j),n()(this,"data",[]),n()(this,"size",_.W.fontSizeBase),n()(this,"height",this.size),n()(this,"width",this.getWidth()),n()(this,"xScale",void 0),n()(this,"yScale",void 0),n()(this,"points",[]),this.size=L,O&&(this.data=O,this.compute())}return B()(j,[{key:"getWidth",value:function(){var O;return Math.max(this.size*2,((O=this.data)===null||O===void 0?void 0:O.length)*2)}},{key:"compute",value:function(){var O,y=this;if(this.data){this.height=this.size,this.width=this.getWidth(),this.xScale=X([0,this.width],[0,((O=this.data)===null||O===void 0?void 0:O.length)-1]);var R=[Math.min.apply(Math,x()(this.data)),Math.max.apply(Math,x()(this.data))],G=R[0],V=R[1];this.yScale=X([z,this.height-z],[G,V]),this.points=this.data.map(function(H,Z){return[y.xScale(Z),y.height-y.yScale(H)]})}}},{key:"getLinePath",value:function(){var O;if(!((O=this.data)!==null&&O!==void 0&&O.length)||!this.xScale||!this.yScale)return null;var y=this.points.reduce(function(R,G,V){var H=c()(G,2),Z=H[0],$=H[1];return V===0?"M".concat(Z," ").concat($):"".concat(R," L ").concat(Z," ").concat($)},"");return y}},{key:"getPolygonPath",value:function(){var O;if(!((O=this.data)!==null&&O!==void 0&&O.length)||!this.xScale||!this.yScale)return null;var y=x()(this.points),R=this.points[this.points.length-1];y.push([R[0],this.height]),y.push([0,this.height]);var G=this.points[0];y.push(G);var V=y.reduce(function(H,Z){var $=c()(Z,2),ne=$[0],te=$[1];return"".concat(H," ").concat(ne,",").concat(te)},"");return V}},{key:"getContainer",value:function(){return[this.width,this.height]}}]),j}(),J=function(L,O){var y=(0,v.useState)(new I(L,O)),R=c()(y,2),G=R[0],V=R[1];return(0,v.useEffect)(function(){V(new I(L,O))},[L,O]),{width:G.getContainer()[0],height:G.getContainer()[1],linePath:G.getLinePath(),polygonPath:G.getPolygonPath()}},Y="wsc-line-fill";function F(j){if((0,f.isArray)(j))return j;if((0,f.isString)(j))try{var L=JSON.parse(j);if((0,f.isArray)(L))return L}catch(O){console.warn(O,"".concat(j," is not a valid json string"))}}var Q=function(L){var O=L.origin,y=i(),R=c()(y,2),G=R[0],V=R[1],H=(0,v.useMemo)(function(){return F(O)},[O]),Z=J(V,H),$=Z.width,ne=Z.height,te=Z.linePath,oe=Z.polygonPath;return(0,f.size)(H)>0&&(0,o.jsxs)(G,{width:$,height:ne,children:[(0,o.jsx)("defs",{children:(0,o.jsxs)("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"122.389541%",id:Y,children:[(0,o.jsx)("stop",{stopColor:_.W.chart.lineStrokeColor,offset:"0%"}),(0,o.jsx)("stop",{stopColor:"#FFFFFF",stopOpacity:"0",offset:"100%"})]})}),te&&(0,o.jsx)("path",{d:te,stroke:_.W.chart.lineStrokeColor,fill:"transparent"}),oe&&(0,o.jsx)("polygon",{points:oe,fill:"url(#".concat(Y,")")})]})},k,ee=null,w="__statics",q=(k={},n()(n()(n()(n()(n()(n()(n()(n()(n()(n()(k,w,{"icon:arrow-up":b,"icon:arrow-down":M,"mini-chart:proportion":T,"mini-chart:line":Q}),"metric_name",{color:_.W.light.default88Color,fontWeight:500}),"metric_value",{color:_.W.light.primaryColor}),"other_metric_value",{color:_.W.light.default65Color}),"delta_value",{color:_.W.light.default65Color}),"ratio_value",{color:_.W.light.default65Color}),"delta_value_pos",{color:_.W.light.posColor,prefix:"+"}),"delta_value_neg",{color:_.W.light.negColor,prefix:"-"}),"ratio_value_pos",{color:_.W.light.posColor,prefix:"icon:arrow-up"}),"ratio_value_neg",{color:_.W.light.negColor,prefix:"icon:arrow-down"}),n()(n()(n()(n()(n()(k,"contribute_ratio",{color:_.W.light.conclusionColor}),"trend_desc",{color:_.W.light.conclusionColor,suffix:"mini-chart:line"}),"dim_value",{color:_.W.light.default88Color}),"time_desc",{color:_.W.light.default88Color}),"proportion",{suffix:"mini-chart:proportion"}))},52792:function(K,g,e){e.d(g,{W:function(){return d}});var d={fontSizeBase:14,chart:{proportionShadowColor:"#CDDDFD",proportionFillColor:"#3471F9",lineStrokeColor:"#5B8FF9"},light:{primaryColor:"#1677FF",default88Color:"rgba(0, 0, 0, 0.88)",default65Color:"rgba(0, 0, 0, 0.65)",posColor:"#FA541C",negColor:"#13A8A8",conclusionColor:"#1F0352"},dark:{primaryColor:"#4B91FF",default88Color:"rgba(255, 255, 255, 0.88)",default65Color:"rgba(255, 255, 255, 0.65)",posColor:"#FA541C",negColor:"#13A8A8",conclusionColor:"#D8C3F3"}}},17621:function(K,g,e){var d=e(26068),n=e.n(d),v=e(67825),o=e.n(v),D=e(30423),b=e(75271),M=e(1145),E=e(52676),c=["data"],f=function(m){var u=m.valueField,r=u===void 0?"value":u;return{legend:!1,layout:{tile:"treemapBinary",paddingInner:3},valueField:r,tooltip:{items:[function(a){var P;return{name:(P=a.data)===null||P===void 0?void 0:P.name,value:a[r]}}]},style:{fillOpacity:.8,labelFontSize:12}}},_=function(m){return{name:"root",children:m}},t=function(m){var u=(0,M.fB)("Treemap",f,m),r=u.data,a=o()(u,c),P=(0,b.useMemo)(function(){return _(r)},[r]);return(0,E.jsx)(D.Z,n()(n()({},a),{},{data:P}))};g.Z=t},63388:function(K,g,e){e.d(g,{h:function(){return n}});var d=e(20516),n={map:{style:"light"},components:{VisText:d.O}}},4437:function(K,g,e){e.d(g,{uN:function(){return o.Z},$Q:function(){return D.Z},sg:function(){return b.Z},hw:function(){return w},VT:function(){return M.Z},lu:function(){return B.Z},wq:function(){return X.Z},Br:function(){return W},b5:function(){return i.Z},uk:function(){return J.Z},x1:function(){return p.Z},D5:function(){return u.Z},B5:function(){return z.Z},q$:function(){return I.Z},OE:function(){return Y.Z},L9:function(){return F.Z},by:function(){return h.Z},fJ:function(){return Q.Z},Fk:function(){return l.Z},bp:function(){return T.Z},WB:function(){return C.Z},y$:function(){return k.Z},kB:function(){return N}});var d=e(82092),n=e.n(d),v=e(55790),o=e(17759),D=e(93555),b=e(32611),M=e(18142),E=e(26068),c=e.n(E),f=e(67825),_=e.n(f),t=e(21175),s=e(75271),m=e(1145),u=e(47282),r=e(52676),a=["children","data"],P={autoFit:!0,shape:"heatmap",size:{field:"value",value:[0,1]},style:{intensity:3,radius:20,opacity:1,rampColors:{colors:["#FF4818","#F7B74A","#FFF598","#F27DEB","#8C1EB2","#421EB2"],positions:[0,.2,.4,.6,.8,1]}}},A=function(j){var L=(0,m.Ln)("HeatMap",j),O=L.children,y=L.data,R=y===void 0?[]:y,G=_()(L,a),V=(0,s.useMemo)(function(){return{data:R,parser:{type:"json",x:"longitude",y:"latitude"}}},[R]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(u.Z,c()(c()({},G),{},{children:[(0,r.jsx)(t.z,c()(c()({},P),{},{source:V})),O]}))})},W=A,i=e(2353),p=e(21621),h=e(43300),l=e(32818),T=e(38641),C=e(17621),x=e(43893),U={autoFit:!0,layout:{fontSize:[20,100]},colorField:"text",legend:!1,tooltip:!1},S=function(j){var L=(0,m.fB)("WordCloud",U,j);return(0,r.jsx)(x.Z,c()({},L))},N=S,B=e(72704),X=e(60934),z=e(80394),I=e(661),J=e(67899),Y=e(48449),F=e(66955),Q=e(13176),k=e(82417),ee,w=(ee={},n()(n()(n()(n()(n()(n()(n()(n()(n()(n()(ee,v.o.Line,p.Z),v.o.Column,b.Z),v.o.Pie,h.Z),v.o.Bar,D.Z),v.o.Area,o.Z),v.o.Scatter,T.Z),v.o.PinMap,Q.Z),v.o.PathMap,F.Z),v.o.HeatMap,W),v.o.MindMap,z.Z),n()(n()(n()(ee,v.o.FlowDiagram,X.Z),v.o.NetworkGraph,I.Z),v.o.FishboneDiagram,B.Z))},18158:function(K,g,e){e.r(g),e.d(g,{Area:function(){return d.uN},Bar:function(){return d.$Q},ChartType:function(){return n.o},Column:function(){return d.sg},ConfigProvider:function(){return o.Z},DEFAULT_CHART_COMPONENTS:function(){return d.hw},DualAxes:function(){return d.VT},FishboneDiagram:function(){return d.lu},FlowDiagram:function(){return d.wq},GPTVis:function(){return D.Z},GPTVisLite:function(){return b.Z},HeatMap:function(){return d.Br},Histogram:function(){return d.b5},IndentedTree:function(){return d.uk},Line:function(){return d.x1},Map:function(){return d.D5},MindMap:function(){return d.B5},NetworkGraph:function(){return d.q$},OrganizationChart:function(){return d.OE},PathMap:function(){return d.L9},Pie:function(){return d.by},PinMap:function(){return d.fJ},Radar:function(){return d.Fk},Scatter:function(){return d.bp},Treemap:function(){return d.WB},VisText:function(){return d.y$},WordCloud:function(){return d.kB},version:function(){return M},withChartCode:function(){return v.m},withDefaultChartCode:function(){return v.r}});var d=e(4437),n=e(55790),v=e(50808),o=e(24582),D=e(80831),b=e(81397),M="0.2.2"},55790:function(K,g,e){e.d(g,{o:function(){return d}});var d=function(n){return n.Pie="pie",n.Column="column",n.Line="line",n.Area="area",n.Scatter="scatter",n.Histogram="histogram",n.Treemap="treemap",n.Bar="bar",n.WordCloud="word-cloud",n.DualAxes="dual-axes",n.Radar="radar",n.PinMap="pin-map",n.PathMap="path-map",n.HeatMap="heat-map",n.MindMap="mind-map",n.FishboneDiagram="fishbone-diagram",n.FlowDiagram="flow-diagram",n.IndentedTree="indented-tree",n.NetworkGraph="network-graph",n.OrganizationChart="organization-chart",n.VisText="vis-text",n}({})},66142:function(K,g,e){e.d(g,{Z:function(){return E},m:function(){return b}});var d=e(26068),n=e.n(d),v=e(32699),o=e.n(v),D=e(63388),b=function(f){var _=(0,v.mergeWith)({},D.h,f,function(t){if(Array.isArray(t))return t});return _};function M(c,f,_){return["plugins","behaviors","transforms"].includes(c)?function(t){return f(t)}:function(t){var s=f.call(this,t);return(0,v.isPlainObject)(s)?E(_,s):s}}function E(){if(arguments.length===0)return{};for(var c=n()({},arguments.length<=0?void 0:arguments[0]),f=1;f<arguments.length;f++){var _=f<0||arguments.length<=f?void 0:arguments[f];for(var t in _)if(_.hasOwnProperty(t)){var s=_[t],m=c[t];["component","data"].includes(t)?c[t]=s:typeof s=="function"?c[t]=M(t,s,m):(0,v.isPlainObject)(s)&&(0,v.isPlainObject)(m)?c[t]=E(m,s):c[t]=s}}return c}},88882:function(K,g,e){e.d(g,{G:function(){return c},i:function(){return E}});var d=e(26068),n=e.n(d),v=e(67825),o=e.n(v),D=e(21777),b=["children"],M=D.G6.RN;function E(f){return M(f,{getNodeData:function(t,s){if(t.id=t.name,t.depth=s,!t.children)return t;var m=t.children,u=o()(t,b);return n()(n()({},u),{},{children:m.map(function(r){return r.name})})},getEdgeData:function(t,s){return{source:t.name,target:s.name}}})}function c(f){return{nodes:f.nodes.map(function(_){return{id:_.name,style:{labelText:_.name}}}),edges:f.edges.map(function(_){return{source:_.source,target:_.target,style:{labelText:_.name}}})}}},36043:function(K,g,e){e.d(g,{I8:function(){return c},mc:function(){return s},z6:function(){return _}});var d=e(67825),n=e.n(d),v=e(26068),o=e.n(v),D=e(32699),b=e.n(D),M=["label","id"],E={mapOptions:{center:[120.210792,30.246026],zoom:16,maxZoom:18,pitch:0,rotation:0,zoomEnable:!0,pitchEnable:!0}},c=function(u){var r={mapOptions:o()(o()({},E.mapOptions),{},{center:u.longitude&&u.latitude?[u.longitude,u.latitude]:E.mapOptions.center,zoom:u.scale||E.mapOptions.zoom,pitch:u.skew||E.mapOptions.pitch,rotation:u.rotate||E.mapOptions.rotation,zoomEnable:u.enableZoom||E.mapOptions.zoomEnable,pitchEnable:u.enableRotate||E.mapOptions.pitchEnable,style:u==null?void 0:u.mapType,token:u==null?void 0:u.token}),logoVisible:!1};return r},f={width:12,anchorX:0,anchorY:1,label:{content:"",color:"#000000",fontSize:10,borderRadius:5,bgColor:"#ffffff",padding:5},iconPath:"https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*3XdDTbsQ84QAAAAAAAAAAAAADmJ7AQ/original"},_=function(u,r){var a=Object.assign({},f.label,r==null?void 0:r.label);return u.map(function(P,A){var W=P.label,i=P.id,p=n()(P,M);return o()(o()(o()(o()({},f),r),p),{},{label:o()(o()({},a),(0,D.isObject)(W)?W:{content:W}),id:i||A.toString()})})},t={width:2,color:"#16f",dottedLine:!1,zIndex:1},s=function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;return u.map(function(a){return o()(o()(o()({},t),r),a)})}}}]);
