(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8405:function(e,t,n){Promise.resolve().then(n.bind(n,6837)),Promise.resolve().then(n.bind(n,3649)),Promise.resolve().then(n.bind(n,8930)),Promise.resolve().then(n.bind(n,9785)),Promise.resolve().then(n.bind(n,3215)),Promise.resolve().then(n.bind(n,5549)),Promise.resolve().then(n.bind(n,5616)),Promise.resolve().then(n.bind(n,6991)),Promise.resolve().then(n.bind(n,9792)),Promise.resolve().then(n.bind(n,6540)),Promise.resolve().then(n.bind(n,3560)),Promise.resolve().then(n.bind(n,1217)),Promise.resolve().then(n.bind(n,8345)),Promise.resolve().then(n.bind(n,8590)),Promise.resolve().then(n.bind(n,1413)),Promise.resolve().then(n.bind(n,240)),Promise.resolve().then(n.bind(n,9987)),Promise.resolve().then(n.bind(n,8281)),Promise.resolve().then(n.bind(n,5505)),Promise.resolve().then(n.bind(n,2293)),Promise.resolve().then(n.bind(n,1784)),Promise.resolve().then(n.bind(n,6422)),Promise.resolve().then(n.bind(n,9721)),Promise.resolve().then(n.bind(n,2993)),Promise.resolve().then(n.bind(n,3937)),Promise.resolve().then(n.bind(n,3949)),Promise.resolve().then(n.bind(n,9835)),Promise.resolve().then(n.bind(n,210))},5e3:function(e,t,n){"use strict";n.r(t);var r=n(7740),i=n.n(r),o=n(1436),s=n(4090);let a=(0,o.Z)({palette:{mode:"dark",background:{default:s.Z[900],paper:"rgba(255,255,255,0)"}},typography:{fontFamily:i().style.fontFamily},components:{MuiAlert:{styleOverrides:{root:e=>{let{ownerState:t}=e;return{..."info"===t.severity&&{backgroundColor:"#60a5fa"}}}}}}});t.default=a},928:function(e,t,n){"use strict";var r=n(7437),i=n(304);t.Z=e=>(0,r.jsx)(i.Z,{...e,component:"div"})},2993:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(7437),i=n(2265),o=n(2855),s=n(4061),a=n(8087),l=n(7963),c=n(3206),d=n(368),u=n(8129),h=n(928);let m=(0,i.memo)(function(e){let{children:t,sectionId:n,paddingY:i}=e;return(0,r.jsx)(h.Z,{component:"section",id:n,sx:{width:"100%",py:null!=i?i:4},children:(0,r.jsx)(h.Z,{sx:{mx:"auto",maxWidth:"lg"},children:t})})});var x=n(8648),b=n(1991),f=n(4026),p=n(3618),g=n(8224),v=n(6376);let j=(e,t,n)=>{let r=Math.PI/180*e,i=-(Math.PI/180*t);return[Math.cos(r)*Math.cos(i)*n,Math.sin(r)*n,Math.cos(r)*Math.sin(i)*n]};function y(e){let{radius:t}=e,n=(0,x.F)(v.TextureLoader,"/textures/earth.png"),i=(0,x.F)(v.TextureLoader,"/textures/earth_bump.png");return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("mesh",{children:[(0,r.jsx)("sphereGeometry",{args:[t,64,64]}),(0,r.jsx)("meshStandardMaterial",{map:n,bumpMap:i,bumpScale:3,transparent:!0,opacity:.9,side:v.DoubleSide}),(0,r.jsx)(f.b,{thickness:.01,color:"#4be4fa",transparent:!0})]})})}function Z(e){return(0,r.jsxs)("mesh",{position:j(e.lat,e.lon,1.06*e.radius),rotation:[0,(e.lon-180)*(Math.PI/180),-e.lat*(Math.PI/180)-.5*Math.PI],children:[(0,r.jsx)("coneGeometry",{args:[.05,.25,4,1]}),(0,r.jsx)("meshStandardMaterial",{color:e.color})]})}let P=(0,i.memo)(function(){return(0,r.jsx)(b.Xz,{style:{minHeight:"inherit"},children:(0,r.jsxs)(i.Suspense,{fallback:null,children:[(0,r.jsx)("ambientLight",{intensity:2}),(0,r.jsx)("pointLight",{color:"#fff",position:[-3.75,3.3,-6],intensity:30}),(0,r.jsxs)("group",{children:[(0,r.jsx)(p.z,{autoRotate:!0,enableZoom:!0,enablePan:!0,autoRotateSpeed:1,rotateSpeed:.2,panSpeed:.2,zoomSpeed:.3,maxDistance:5,minDistance:3}),(0,r.jsx)(g.t,{radius:30,depth:60,count:1e3,fade:!0,saturation:0}),(0,r.jsx)(y,{radius:2.5}),(0,r.jsx)(Z,{lat:25,lon:121.5,radius:2.5,color:"#e04444"})]})]})})});var k=n(6711),I=n(210),w=(0,i.memo)(function(){let e=(0,d.Z)(),t=!(0,l.Z)(e.breakpoints.up("sm"));return(0,r.jsx)(m,{sectionId:k._h.Contact,children:(0,r.jsxs)(h.Z,{children:[(0,r.jsx)(u.Z,{variant:"middle",children:(0,r.jsx)(I.default,{text:"Contact"})}),(0,r.jsx)(a.Z,{sx:{mx:4,mb:8},textAlign:"center",children:k.yH}),(0,r.jsx)(s.Z,{container:!0,spacing:4,children:k.WG.map((e,t)=>(0,r.jsxs)(s.Z,{xs:12,sm:4,textAlign:"center",children:[(0,r.jsx)(c.Z,{"aria-label":e.label,href:e.href,target:"_blank",children:(0,r.jsx)(e.Icon,{sx:{width:64,height:64}})}),(0,r.jsx)(a.Z,{component:"div",children:(0,r.jsx)(o.Z,{href:e.href,"aria-label":e.label,target:"_blank",underline:"none",color:"text.primary",children:(0,r.jsx)("span",{children:e.text})},e.label)})]},t))}),(0,r.jsx)(h.Z,{sx:{my:4,mx:t?0:8},height:t?300:450,children:(0,r.jsx)(P,{})})]})})})},3937:function(e,t,n){"use strict";n.r(t);var r=n(7437),i=n(2265),o=n(1781),s=n(3206),a=n(6711),l=n(928);function c(){window.scrollTo(0,0)}let d=(0,i.memo)(function(){return(0,r.jsxs)(l.Z,{sx:{mx:"auto",py:4,textAlign:"center"},children:[(0,r.jsx)(l.Z,{children:(0,r.jsx)(s.Z,{"aria-label":a._h.About,onClick:c,children:(0,r.jsx)(o.Z,{sx:{width:40,height:40}})})}),(0,r.jsxs)(l.Z,{component:"span",children:["\xa9 ",new Date().getFullYear()," Andy Kuo"]})]})});t.default=d},3949:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(7437),i=n(2265),o=n(278),s=n(6676),a=n(7582),l=n(6840),c=n(6711);let d=(e,t,n)=>{(0,i.useEffect)(()=>{let r=document.querySelectorAll(e),i=Array.from(r),o=document.getElementById(t),s=new IntersectionObserver(e=>{e.forEach(e=>{let t=e.boundingClientRect.y,r=e.target.getAttribute("id");if(o){let s={id:r,currentIndex:i.findIndex(e=>e.getAttribute("id")===r),isIntersecting:e.isIntersecting,currentRatio:e.intersectionRatio,aboveToc:t<o.getBoundingClientRect().y,belowToc:!(t<o.getBoundingClientRect().y)};s.isIntersecting?n(s.currentIndex):!s.isIntersecting&&s.currentRatio<1&&s.currentRatio>0&&s.belowToc&&n(s.currentIndex-1)}})},{root:null,threshold:0,rootMargin:"0px 0px -70% 0px"});return r.forEach(e=>{s.observe(e)}),()=>{s.disconnect()}},[])};function u(e){return(0,r.jsx)(l.Z,{component:"a","aria-current":e.selected&&"page",...e})}var h=(0,i.memo)(function(){let e="headerNav",[t,n]=(0,i.useState)(0),l=(0,i.useMemo)(()=>Object.values(c._h),[]),h=(0,i.useCallback)(e=>n(e),[]);return d(l.map(e=>"#".concat(e)).join(","),e,h),(0,r.jsx)(o.Z,{color:"transparent",sx:{backdropFilter:"blur(4px)"},id:e,children:(0,r.jsx)(s.Z,{sx:{alignSelf:"center"},children:(0,r.jsx)(a.Z,{value:t,onChange:(e,t)=>{"click"===e.type&&("click"!==e.type||e.defaultPrevented||0!==e.button||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)||n(t)},"aria-label":"nav tabs",role:"navigation",children:Object.values(c._h).map(e=>(0,r.jsx)(u,{label:e,href:"#".concat(e)},e))})})})})},9835:function(e,t,n){"use strict";n.r(t);var r=n(7437),i=n(2265),o=n(5176),s=n(9670),a=n(7630),l=n(5976),c=n(8087),d=n(4061),u=n(928);let h=(0,l.ZP)(o.Z)(e=>{let{theme:t}=e;return{height:10,borderRadius:5,["&.".concat(s.Z.colorPrimary)]:{backgroundColor:"light"===t.palette.mode?t.palette.grey[200]:"rgba(93,93,93,0.46)"},["& .".concat(s.Z.bar)]:{borderRadius:5,backgroundColor:"light"===t.palette.mode?"#1a90ff":"#69ddff"}}}),m=(0,i.memo)(function(e){let{skill:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.Z,{component:"div",children:t.name}),(0,r.jsx)(h,{variant:"determinate",value:t.level})]})}),x=(0,i.memo)(function(e){let{skillGroup:t}=e;return(0,r.jsx)(d.Z,{container:!0,children:t.map((e,t)=>{let{name:n,skills:i}=e;return(0,r.jsx)(d.Z,{xs:12,sm:6,md:4,children:(0,r.jsxs)(a.Z,{elevation:4,sx:{mx:4,my:2,p:4,backgroundColor:"divider",borderRadius:4},children:[(0,r.jsx)(c.Z,{component:"div",variant:"h6",textAlign:"center",sx:{pb:2},children:n}),i.map((e,t)=>(0,r.jsx)(u.Z,{sx:{my:1},children:(0,r.jsx)(m,{skill:e})},t))]})},t)})})});t.default=x},210:function(e,t,n){"use strict";n.r(t);var r=n(7437),i=n(2265),o=n(5e3),s=n(928);let a=(0,i.memo)(function(e){let{text:t}=e;return(0,r.jsx)(s.Z,{component:"h2",border:1,borderColor:"text.secondary",borderRadius:4*o.default.shape.borderRadius,sx:{fontWeight:"bold",p:2},children:t})});t.default=a},6711:function(e,t,n){"use strict";n.d(t,{WG:function(){return m},_h:function(){return u},yH:function(){return h}});var r=n(7437),i=n(5549),o=n(3649),s=n(5616),a=n(6837),l=n(9785),c=n(3215),d=n(8930);let u={About:"about",Resume:"resume",Contact:"contact"};r.Fragment,new Date().getFullYear(),i.default,(new Date().getFullYear()-1998).toString(),o.default,s.default,a.default;let h="\n  I'm passionate about what I do and always eager to engage with like-minded individuals. \n  Whether you're interested in discussing a project, sharing opportunities, \n  potential partnerships, or just having a chat, \n  don't hesitate to get in touch! I'm just a message away.",m=[{label:"Github",Icon:l.default,href:"https://github.com/andy616",text:"andy616"},{label:"LinkedIn",Icon:c.default,href:"https://www.linkedin.com/in/%E5%85%83%E6%A6%AE-%E9%83%AD-b64985198/",text:"Andy Kuo"},{label:"Email",Icon:d.default,href:"mailto:contact@andykuo.me",text:"contact@andykuo.me"}]}},function(e){e.O(0,[689,424,647,971,69,744],function(){return e(e.s=8405)}),_N_E=e.O()}]);