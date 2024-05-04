"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[184],{5988:function(e,t,r){r.r(t),r.d(t,{default:function(){return s}});var n=r(2110),o=r(2265),l=r(6937),a=r(2050),i=r(5313),c=r(7437);function s(e){let{options:t,CacheProvider:r=a.C,children:s}=e,[u]=o.useState(()=>{var e;let r=(0,l.Z)((0,n.Z)({},t,{key:null!=(e=null==t?void 0:t.key)?e:"mui"}));r.compat=!0;let o=r.insert,a=[];return r.insert=function(){for(var e=arguments.length,n=Array(e),l=0;l<e;l++)n[l]=arguments[l];null!=t&&t.enableCssLayer&&(n[1].styles="@layer mui {".concat(n[1].styles,"}"));let[i,c]=n;return void 0===r.inserted[c.name]&&a.push({name:c.name,isGlobal:!i}),o(...n)},{cache:r,flush:()=>{let e=a;return a=[],e}}});return(0,i.useServerInsertedHTML)(()=>{let e=u.flush();if(0===e.length)return null;let r="",n=u.cache.key,l=[];return e.forEach(e=>{let{name:t,isGlobal:o}=e,a=u.cache.inserted[t];"boolean"!=typeof a&&(o?l.push({name:t,style:a}):(r+=a,n+=" ".concat(t)))}),(0,c.jsxs)(o.Fragment,{children:[l.map(e=>{let{name:r,style:n}=e;return(0,c.jsx)("style",{nonce:null==t?void 0:t.nonce,"data-emotion":"".concat(u.cache.key,"-global ").concat(r),dangerouslySetInnerHTML:{__html:n}},r)}),r&&(0,c.jsx)("style",{nonce:null==t?void 0:t.nonce,"data-emotion":n,dangerouslySetInnerHTML:{__html:r}})]})}),(0,c.jsx)(r,{value:u.cache,children:s})}},4261:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var n=r(2110),o=r(2265),l=r(3043),a=r(6286),i=r(2743),c=r(7437),s=function(e){let{styles:t,themeId:r,defaultTheme:n={}}=e,o=(0,i.Z)(n),l="function"==typeof t?t(r&&o[r]||o):t;return(0,c.jsx)(a.Z,{styles:l})},u=r(4106),d=r(1335),m=function(e){return(0,c.jsx)(s,(0,n.Z)({},e,{defaultTheme:u.Z,themeId:d.Z}))};let h=(e,t)=>(0,n.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!e.vars&&{colorScheme:e.palette.mode}),g=e=>(0,n.Z)({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),f=function(e){var t;let r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o={};r&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(t=>{var r;let[n,l]=t;o[e.getColorSchemeSelector(n).replace(/\s*&/,"")]={colorScheme:null==(r=l.palette)?void 0:r.mode}});let l=(0,n.Z)({html:h(e,r),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,n.Z)({margin:0},g(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},o),a=null==(t=e.components)||null==(t=t.MuiCssBaseline)?void 0:t.styleOverrides;return a&&(l=[l,a]),l};var p=function(e){let{children:t,enableColorScheme:r=!1}=(0,l.Z)({props:e,name:"MuiCssBaseline"});return(0,c.jsxs)(o.Fragment,{children:[(0,c.jsx)(m,{styles:e=>f(e,r)}),t]})}},8213:function(e,t,r){r.r(t),r.d(t,{Experimental_CssVarsProvider:function(){return eP},StyledEngineProvider:function(){return Y.Z},THEME_ID:function(){return o.Z},ThemeProvider:function(){return X},adaptV4Theme:function(){return d},alpha:function(){return C},createMuiTheme:function(){return $.A},createStyles:function(){return j},createTheme:function(){return $.Z},css:function(){return w.iv},darken:function(){return k},decomposeColor:function(){return f},duration:function(){return O.x9},easing:function(){return O.Ui},emphasize:function(){return Z},experimentalStyled:function(){return _.ZP},experimental_extendTheme:function(){return eE},experimental_sx:function(){return eD},getContrastRatio:function(){return v},getInitColorSchemeScript:function(){return e_},getLuminance:function(){return S},getOverlayAlpha:function(){return ex.Z},hexToRgb:function(){return g},hslToRgb:function(){return b},keyframes:function(){return w.F4},lighten:function(){return x},makeStyles:function(){return ee},private_createMixins:function(){return eq.Z},private_createTypography:function(){return eF.Z},private_excludeVariablesFromRoot:function(){return eM},recomposeColor:function(){return p},responsiveFontSizes:function(){return M},rgbToHex:function(){return y},shouldSkipGeneratingVar:function(){return ek},styled:function(){return _.ZP},unstable_createMuiStrictModeTheme:function(){return T},unstable_getUnit:function(){return E},unstable_toUnitless:function(){return F},useColorScheme:function(){return eL},useTheme:function(){return P.Z},useThemeProps:function(){return L.Z},withStyles:function(){return et},withTheme:function(){return er}});var n=r(6064),o=r(1335),l=r(2110),a=r(444),i=r(6961),c=r(22);let s=["defaultProps","mixins","overrides","palette","props","styleOverrides"],u=["type","mode"];function d(e){let{defaultProps:t={},mixins:r={},overrides:n={},palette:o={},props:d={},styleOverrides:m={}}=e,h=(0,a.Z)(e,s),g=(0,l.Z)({},h,{components:{}});Object.keys(t).forEach(e=>{let r=g.components[e]||{};r.defaultProps=t[e],g.components[e]=r}),Object.keys(d).forEach(e=>{let t=g.components[e]||{};t.defaultProps=d[e],g.components[e]=t}),Object.keys(m).forEach(e=>{let t=g.components[e]||{};t.styleOverrides=m[e],g.components[e]=t}),Object.keys(n).forEach(e=>{let t=g.components[e]||{};t.styleOverrides=n[e],g.components[e]=t}),g.spacing=(0,i.Z)(e.spacing);let f=(0,c.Z)(e.breakpoints||{}),p=g.spacing;g.mixins=(0,l.Z)({gutters:(e={})=>(0,l.Z)({paddingLeft:p(2),paddingRight:p(2)},e,{[f.up("sm")]:(0,l.Z)({paddingLeft:p(3),paddingRight:p(3)},e[f.up("sm")])})},r);let{type:y,mode:b}=o,S=(0,a.Z)(o,u),v=b||y||"light";return g.palette=(0,l.Z)({text:{hint:"dark"===v?"rgba(255, 255, 255, 0.5)":"rgba(0, 0, 0, 0.38)"},mode:v,type:v},S),g}var m=r(3264);function h(e,t=0,r=1){return(0,m.Z)(e,t,r)}function g(e){e=e.slice(1);let t=RegExp(`.{1,${e.length>=6?2:1}}`,"g"),r=e.match(t);return r&&1===r[0].length&&(r=r.map(e=>e+e)),r?`rgb${4===r.length?"a":""}(${r.map((e,t)=>t<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3).join(", ")})`:""}function f(e){let t;if(e.type)return e;if("#"===e.charAt(0))return f(g(e));let r=e.indexOf("("),o=e.substring(0,r);if(-1===["rgb","rgba","hsl","hsla","color"].indexOf(o))throw Error((0,n.Z)(9,e));let l=e.substring(r+1,e.length-1);if("color"===o){if(t=(l=l.split(" ")).shift(),4===l.length&&"/"===l[3].charAt(0)&&(l[3]=l[3].slice(1)),-1===["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(t))throw Error((0,n.Z)(10,t))}else l=l.split(",");return{type:o,values:l=l.map(e=>parseFloat(e)),colorSpace:t}}function p(e){let{type:t,colorSpace:r}=e,{values:n}=e;return -1!==t.indexOf("rgb")?n=n.map((e,t)=>t<3?parseInt(e,10):e):-1!==t.indexOf("hsl")&&(n[1]=`${n[1]}%`,n[2]=`${n[2]}%`),n=-1!==t.indexOf("color")?`${r} ${n.join(" ")}`:`${n.join(", ")}`,`${t}(${n})`}function y(e){if(0===e.indexOf("#"))return e;let{values:t}=f(e);return`#${t.map((e,t)=>(function(e){let t=e.toString(16);return 1===t.length?`0${t}`:t})(3===t?Math.round(255*e):e)).join("")}`}function b(e){let{values:t}=e=f(e),r=t[0],n=t[1]/100,o=t[2]/100,l=n*Math.min(o,1-o),a=(e,t=(e+r/30)%12)=>o-l*Math.max(Math.min(t-3,9-t,1),-1),i="rgb",c=[Math.round(255*a(0)),Math.round(255*a(8)),Math.round(255*a(4))];return"hsla"===e.type&&(i+="a",c.push(t[3])),p({type:i,values:c})}function S(e){let t="hsl"===(e=f(e)).type||"hsla"===e.type?f(b(e)).values:e.values;return Number((.2126*(t=t.map(t=>("color"!==e.type&&(t/=255),t<=.03928?t/12.92:((t+.055)/1.055)**2.4)))[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function v(e,t){let r=S(e),n=S(t);return(Math.max(r,n)+.05)/(Math.min(r,n)+.05)}function C(e,t){return e=f(e),t=h(t),("rgb"===e.type||"hsl"===e.type)&&(e.type+="a"),"color"===e.type?e.values[3]=`/${t}`:e.values[3]=t,p(e)}function k(e,t){if(e=f(e),t=h(t),-1!==e.type.indexOf("hsl"))e.values[2]*=1-t;else if(-1!==e.type.indexOf("rgb")||-1!==e.type.indexOf("color"))for(let r=0;r<3;r+=1)e.values[r]*=1-t;return p(e)}function x(e,t){if(e=f(e),t=h(t),-1!==e.type.indexOf("hsl"))e.values[2]+=(100-e.values[2])*t;else if(-1!==e.type.indexOf("rgb"))for(let r=0;r<3;r+=1)e.values[r]+=(255-e.values[r])*t;else if(-1!==e.type.indexOf("color"))for(let r=0;r<3;r+=1)e.values[r]+=(1-e.values[r])*t;return p(e)}function Z(e,t=.15){return S(e)>.5?k(e,t):x(e,t)}var w=r(4686),$=r(1436),A=r(439);function T(e,...t){return(0,$.Z)((0,A.Z)({unstable_strictMode:!0},e),...t)}let B=!1;function j(e){return B||(console.warn("MUI: createStyles from @mui/material/styles is deprecated.\nPlease use @mui/styles/createStyles"),B=!0),e}function I(e){return String(parseFloat(e)).length===String(e).length}function E(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function F(e){return parseFloat(e)}function M(e,t={}){var r;let{breakpoints:o=["sm","md","lg"],disableAlign:a=!1,factor:i=2,variants:c=["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline"]}=t,s=(0,l.Z)({},e);s.typography=(0,l.Z)({},s.typography);let u=s.typography,d=(r=u.htmlFontSize,(e,t)=>{let n=E(e);if(n===t)return e;let o=F(e);"px"!==n&&("em"===n?o=F(e)*F(r):"rem"===n&&(o=F(e)*F(r)));let l=o;if("px"!==t){if("em"===t)l=o/F(r);else{if("rem"!==t)return e;l=o/F(r)}}return parseFloat(l.toFixed(5))+t}),m=o.map(e=>s.breakpoints.values[e]);return c.forEach(e=>{let t=u[e],r=parseFloat(d(t.fontSize,"rem"));if(r<=1)return;let{lineHeight:o}=t;if(!I(o)&&!a)throw Error((0,n.Z)(6));I(o)||(o=parseFloat(d(o,"rem"))/parseFloat(r));let c=null;a||(c=e=>(function({size:e,grid:t}){let r=e-e%t,n=r+t;return e-r<n-e?r:n})({size:e,grid:function({lineHeight:e,pixels:t,htmlFontSize:r}){return t/(e*r)}({pixels:4,lineHeight:o,htmlFontSize:u.htmlFontSize})})),u[e]=(0,l.Z)({},t,function({cssProperty:e,min:t,max:r,unit:n="rem",breakpoints:o=[600,900,1200],transform:l=null}){let a={[e]:`${t}${n}`},i=(r-t)/o[o.length-1];return o.forEach(r=>{let o=t+i*r;null!==l&&(o=l(o)),a[`@media (min-width:${r}px)`]={[e]:`${Math.round(1e4*o)/1e4}${n}`}}),a}({cssProperty:"fontSize",min:1+(r-1)/i,max:r,unit:"rem",breakpoints:m,transform:c}))}),s}var O=r(5964),P=r(368),L=r(3043),_=r(5976),q=r(2265);let D=q.createContext(null);function z(){return q.useContext(D)}var V="function"==typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",R=r(7437),H=function(e){let{children:t,theme:r}=e,n=z(),o=q.useMemo(()=>{let e=null===n?r:"function"==typeof r?r(n):(0,l.Z)({},n,r);return null!=e&&(e[V]=null!==n),e},[r,n]);return(0,R.jsx)(D.Provider,{value:o,children:t})},W=r(2050),U=r(1733),N=r(3346);let K={};function G(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return q.useMemo(()=>{let o=e&&t[e]||t;if("function"==typeof r){let a=r(o),i=e?(0,l.Z)({},t,{[e]:a}):a;return n?()=>i:i}return e?(0,l.Z)({},t,{[e]:r}):(0,l.Z)({},t,r)},[e,t,r,n])}var J=function(e){let{children:t,theme:r,themeId:n}=e,o=(0,U.Z)(K),l=z()||K,a=G(n,o,r),i=G(n,l,r,!0),c="rtl"===a.direction;return(0,R.jsx)(H,{theme:i,children:(0,R.jsx)(W.T.Provider,{value:a,children:(0,R.jsx)(N.Z,{value:c,children:t})})})};let Q=["theme"];function X(e){let{theme:t}=e,r=(0,a.Z)(e,Q),n=t[o.Z];return(0,R.jsx)(J,(0,l.Z)({},r,{themeId:n?o.Z:void 0,theme:n||t}))}var Y=r(3035);function ee(){throw Error((0,n.Z)(14))}function et(){throw Error((0,n.Z)(15))}function er(){throw Error((0,n.Z)(16))}var en=r(6286);let eo="mode",el="color-scheme",ea="data-color-scheme";function ei(e){if("undefined"!=typeof window&&"system"===e)return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function ec(e,t){return"light"===e.mode||"system"===e.mode&&"light"===e.systemMode?t("light"):"dark"===e.mode||"system"===e.mode&&"dark"===e.systemMode?t("dark"):void 0}function es(e,t){let r;if("undefined"!=typeof window){try{(r=localStorage.getItem(e)||void 0)||localStorage.setItem(e,t)}catch(e){}return r||t}}let eu=["colorSchemes","components","generateCssVars","cssVarPrefix"];var ed=r(9811);function em(e){return(em="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function eh(e){var t=function(e,t){if("object"!=em(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=em(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==em(t)?t:String(t)}let eg=(e,t,r,n=[])=>{let o=e;t.forEach((e,l)=>{l===t.length-1?Array.isArray(o)?o[Number(e)]=r:o&&"object"==typeof o&&(o[e]=r):o&&"object"==typeof o&&(o[e]||(o[e]=n.includes(e)?[]:{}),o=o[e])})},ef=(e,t,r)=>{!function e(n,o=[],l=[]){Object.entries(n).forEach(([n,a])=>{r&&(!r||r([...o,n]))||null==a||("object"==typeof a&&Object.keys(a).length>0?e(a,[...o,n],Array.isArray(a)?[...l,n]:l):t([...o,n],a,l))})}(e)},ep=(e,t)=>"number"==typeof t?["lineHeight","fontWeight","opacity","zIndex"].some(t=>e.includes(t))||e[e.length-1].toLowerCase().indexOf("opacity")>=0?t:`${t}px`:t;function ey(e,t){let{prefix:r,shouldSkipGeneratingVar:n}=t||{},o={},l={},a={};return ef(e,(e,t,i)=>{if(("string"==typeof t||"number"==typeof t)&&(!n||!n(e,t))){let n=`--${r?`${r}-`:""}${e.join("-")}`;Object.assign(o,{[n]:ep(e,t)}),eg(l,e,`var(${n})`,i),eg(a,e,`var(${n}, ${t})`,i)}},e=>"vars"===e[0]),{css:o,vars:l,varsWithDefaults:a}}let eb=["colorSchemes","components","defaultColorScheme"];var eS=function(e,t){let{colorSchemes:r={},defaultColorScheme:n="light"}=e,{vars:o,css:i,varsWithDefaults:c}=ey((0,a.Z)(e,eb),t),s=c,u={},{[n]:d}=r;if(Object.entries((0,a.Z)(r,[n].map(eh))||{}).forEach(([e,r])=>{let{vars:n,css:o,varsWithDefaults:l}=ey(r,t);s=(0,A.Z)(s,l),u[e]={css:o,vars:n}}),d){let{css:e,vars:r,varsWithDefaults:o}=ey(d,t);s=(0,A.Z)(s,o),u[n]={css:e,vars:r}}return{vars:s,generateCssVars:e=>{var r,n;if(!e){let r=(0,l.Z)({},i);return{css:r,vars:o,selector:(null==t||null==(n=t.getSelector)?void 0:n.call(t,e,r))||":root"}}let a=(0,l.Z)({},u[e].css);return{css:a,vars:u[e].vars,selector:(null==t||null==(r=t.getSelector)?void 0:r.call(t,e,a))||":root"}}}},ev=r(1870),eC=r(1869);function ek(e){var t;return!!e[0].match(/(cssVarPrefix|typography|mixins|breakpoints|direction|transitions)/)||!!e[0].match(/sxConfig$/)||"palette"===e[0]&&!!(null!=(t=e[1])&&t.match(/(mode|contrastThreshold|tonalOffset)/))}var ex=r(9497);let eZ=["colorSchemes","cssVarPrefix","shouldSkipGeneratingVar"],ew=["palette"],e$=[...Array(25)].map((e,t)=>{if(0===t)return;let r=(0,ex.Z)(t);return`linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`});function eA(e,t,r){!e[t]&&r&&(e[t]=r)}function eT(e){return e&&e.startsWith("hsl")?(0,eC.ve)(e):e}function eB(e,t){`${t}Channel` in e||(e[`${t}Channel`]=(0,eC.LR)(eT(e[t]),`MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`))}let ej=e=>{try{return e()}catch(e){}},eI=(e="mui")=>(function(e=""){return(t,...r)=>`var(--${e?`${e}-`:""}${t}${function t(...r){if(!r.length)return"";let n=r[0];return"string"!=typeof n||n.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)?`, ${n}`:`, var(--${e?`${e}-`:""}${n}${t(...r.slice(1))})`}(...r)})`})(e);function eE(e={},...t){var r,n,o,i,c,s;let{colorSchemes:u={},cssVarPrefix:d="mui",shouldSkipGeneratingVar:m=ek}=e,h=(0,a.Z)(e,eZ),g=eI(d),f=(0,$.Z)((0,l.Z)({},h,u.light&&{palette:null==(r=u.light)?void 0:r.palette})),{palette:p}=f,y=(0,a.Z)(f,ew),{palette:b}=(0,$.Z)({palette:(0,l.Z)({mode:"dark"},null==(n=u.dark)?void 0:n.palette)}),S=(0,l.Z)({},y,{cssVarPrefix:d,getCssVar:g,colorSchemes:(0,l.Z)({},u,{light:(0,l.Z)({},u.light,{palette:p,opacity:(0,l.Z)({inputPlaceholder:.42,inputUnderline:.42,switchTrackDisabled:.12,switchTrack:.38},null==(o=u.light)?void 0:o.opacity),overlays:(null==(i=u.light)?void 0:i.overlays)||[]}),dark:(0,l.Z)({},u.dark,{palette:b,opacity:(0,l.Z)({inputPlaceholder:.5,inputUnderline:.7,switchTrackDisabled:.2,switchTrack:.3},null==(c=u.dark)?void 0:c.opacity),overlays:(null==(s=u.dark)?void 0:s.overlays)||e$})})});Object.keys(S.colorSchemes).forEach(e=>{let t=S.colorSchemes[e].palette,r=e=>{let r=e.split("-"),n=r[1],o=r[2];return g(e,t[n][o])};if("light"===e?(eA(t.common,"background","#fff"),eA(t.common,"onBackground","#000")):(eA(t.common,"background","#000"),eA(t.common,"onBackground","#fff")),function(e,t){t.forEach(t=>{e[t]||(e[t]={})})}(t,["Alert","AppBar","Avatar","Button","Chip","FilledInput","LinearProgress","Skeleton","Slider","SnackbarContent","SpeedDialAction","StepConnector","StepContent","Switch","TableCell","Tooltip"]),"light"===e){eA(t.Alert,"errorColor",(0,eC.q8)(t.error.light,.6)),eA(t.Alert,"infoColor",(0,eC.q8)(t.info.light,.6)),eA(t.Alert,"successColor",(0,eC.q8)(t.success.light,.6)),eA(t.Alert,"warningColor",(0,eC.q8)(t.warning.light,.6)),eA(t.Alert,"errorFilledBg",r("palette-error-main")),eA(t.Alert,"infoFilledBg",r("palette-info-main")),eA(t.Alert,"successFilledBg",r("palette-success-main")),eA(t.Alert,"warningFilledBg",r("palette-warning-main")),eA(t.Alert,"errorFilledColor",ej(()=>p.getContrastText(t.error.main))),eA(t.Alert,"infoFilledColor",ej(()=>p.getContrastText(t.info.main))),eA(t.Alert,"successFilledColor",ej(()=>p.getContrastText(t.success.main))),eA(t.Alert,"warningFilledColor",ej(()=>p.getContrastText(t.warning.main))),eA(t.Alert,"errorStandardBg",(0,eC.ux)(t.error.light,.9)),eA(t.Alert,"infoStandardBg",(0,eC.ux)(t.info.light,.9)),eA(t.Alert,"successStandardBg",(0,eC.ux)(t.success.light,.9)),eA(t.Alert,"warningStandardBg",(0,eC.ux)(t.warning.light,.9)),eA(t.Alert,"errorIconColor",r("palette-error-main")),eA(t.Alert,"infoIconColor",r("palette-info-main")),eA(t.Alert,"successIconColor",r("palette-success-main")),eA(t.Alert,"warningIconColor",r("palette-warning-main")),eA(t.AppBar,"defaultBg",r("palette-grey-100")),eA(t.Avatar,"defaultBg",r("palette-grey-400")),eA(t.Button,"inheritContainedBg",r("palette-grey-300")),eA(t.Button,"inheritContainedHoverBg",r("palette-grey-A100")),eA(t.Chip,"defaultBorder",r("palette-grey-400")),eA(t.Chip,"defaultAvatarColor",r("palette-grey-700")),eA(t.Chip,"defaultIconColor",r("palette-grey-700")),eA(t.FilledInput,"bg","rgba(0, 0, 0, 0.06)"),eA(t.FilledInput,"hoverBg","rgba(0, 0, 0, 0.09)"),eA(t.FilledInput,"disabledBg","rgba(0, 0, 0, 0.12)"),eA(t.LinearProgress,"primaryBg",(0,eC.ux)(t.primary.main,.62)),eA(t.LinearProgress,"secondaryBg",(0,eC.ux)(t.secondary.main,.62)),eA(t.LinearProgress,"errorBg",(0,eC.ux)(t.error.main,.62)),eA(t.LinearProgress,"infoBg",(0,eC.ux)(t.info.main,.62)),eA(t.LinearProgress,"successBg",(0,eC.ux)(t.success.main,.62)),eA(t.LinearProgress,"warningBg",(0,eC.ux)(t.warning.main,.62)),eA(t.Skeleton,"bg",`rgba(${r("palette-text-primaryChannel")} / 0.11)`),eA(t.Slider,"primaryTrack",(0,eC.ux)(t.primary.main,.62)),eA(t.Slider,"secondaryTrack",(0,eC.ux)(t.secondary.main,.62)),eA(t.Slider,"errorTrack",(0,eC.ux)(t.error.main,.62)),eA(t.Slider,"infoTrack",(0,eC.ux)(t.info.main,.62)),eA(t.Slider,"successTrack",(0,eC.ux)(t.success.main,.62)),eA(t.Slider,"warningTrack",(0,eC.ux)(t.warning.main,.62));let e=(0,eC.fk)(t.background.default,.8);eA(t.SnackbarContent,"bg",e),eA(t.SnackbarContent,"color",ej(()=>p.getContrastText(e))),eA(t.SpeedDialAction,"fabHoverBg",(0,eC.fk)(t.background.paper,.15)),eA(t.StepConnector,"border",r("palette-grey-400")),eA(t.StepContent,"border",r("palette-grey-400")),eA(t.Switch,"defaultColor",r("palette-common-white")),eA(t.Switch,"defaultDisabledColor",r("palette-grey-100")),eA(t.Switch,"primaryDisabledColor",(0,eC.ux)(t.primary.main,.62)),eA(t.Switch,"secondaryDisabledColor",(0,eC.ux)(t.secondary.main,.62)),eA(t.Switch,"errorDisabledColor",(0,eC.ux)(t.error.main,.62)),eA(t.Switch,"infoDisabledColor",(0,eC.ux)(t.info.main,.62)),eA(t.Switch,"successDisabledColor",(0,eC.ux)(t.success.main,.62)),eA(t.Switch,"warningDisabledColor",(0,eC.ux)(t.warning.main,.62)),eA(t.TableCell,"border",(0,eC.ux)((0,eC.zp)(t.divider,1),.88)),eA(t.Tooltip,"bg",(0,eC.zp)(t.grey[700],.92))}else{eA(t.Alert,"errorColor",(0,eC.ux)(t.error.light,.6)),eA(t.Alert,"infoColor",(0,eC.ux)(t.info.light,.6)),eA(t.Alert,"successColor",(0,eC.ux)(t.success.light,.6)),eA(t.Alert,"warningColor",(0,eC.ux)(t.warning.light,.6)),eA(t.Alert,"errorFilledBg",r("palette-error-dark")),eA(t.Alert,"infoFilledBg",r("palette-info-dark")),eA(t.Alert,"successFilledBg",r("palette-success-dark")),eA(t.Alert,"warningFilledBg",r("palette-warning-dark")),eA(t.Alert,"errorFilledColor",ej(()=>b.getContrastText(t.error.dark))),eA(t.Alert,"infoFilledColor",ej(()=>b.getContrastText(t.info.dark))),eA(t.Alert,"successFilledColor",ej(()=>b.getContrastText(t.success.dark))),eA(t.Alert,"warningFilledColor",ej(()=>b.getContrastText(t.warning.dark))),eA(t.Alert,"errorStandardBg",(0,eC.q8)(t.error.light,.9)),eA(t.Alert,"infoStandardBg",(0,eC.q8)(t.info.light,.9)),eA(t.Alert,"successStandardBg",(0,eC.q8)(t.success.light,.9)),eA(t.Alert,"warningStandardBg",(0,eC.q8)(t.warning.light,.9)),eA(t.Alert,"errorIconColor",r("palette-error-main")),eA(t.Alert,"infoIconColor",r("palette-info-main")),eA(t.Alert,"successIconColor",r("palette-success-main")),eA(t.Alert,"warningIconColor",r("palette-warning-main")),eA(t.AppBar,"defaultBg",r("palette-grey-900")),eA(t.AppBar,"darkBg",r("palette-background-paper")),eA(t.AppBar,"darkColor",r("palette-text-primary")),eA(t.Avatar,"defaultBg",r("palette-grey-600")),eA(t.Button,"inheritContainedBg",r("palette-grey-800")),eA(t.Button,"inheritContainedHoverBg",r("palette-grey-700")),eA(t.Chip,"defaultBorder",r("palette-grey-700")),eA(t.Chip,"defaultAvatarColor",r("palette-grey-300")),eA(t.Chip,"defaultIconColor",r("palette-grey-300")),eA(t.FilledInput,"bg","rgba(255, 255, 255, 0.09)"),eA(t.FilledInput,"hoverBg","rgba(255, 255, 255, 0.13)"),eA(t.FilledInput,"disabledBg","rgba(255, 255, 255, 0.12)"),eA(t.LinearProgress,"primaryBg",(0,eC.q8)(t.primary.main,.5)),eA(t.LinearProgress,"secondaryBg",(0,eC.q8)(t.secondary.main,.5)),eA(t.LinearProgress,"errorBg",(0,eC.q8)(t.error.main,.5)),eA(t.LinearProgress,"infoBg",(0,eC.q8)(t.info.main,.5)),eA(t.LinearProgress,"successBg",(0,eC.q8)(t.success.main,.5)),eA(t.LinearProgress,"warningBg",(0,eC.q8)(t.warning.main,.5)),eA(t.Skeleton,"bg",`rgba(${r("palette-text-primaryChannel")} / 0.13)`),eA(t.Slider,"primaryTrack",(0,eC.q8)(t.primary.main,.5)),eA(t.Slider,"secondaryTrack",(0,eC.q8)(t.secondary.main,.5)),eA(t.Slider,"errorTrack",(0,eC.q8)(t.error.main,.5)),eA(t.Slider,"infoTrack",(0,eC.q8)(t.info.main,.5)),eA(t.Slider,"successTrack",(0,eC.q8)(t.success.main,.5)),eA(t.Slider,"warningTrack",(0,eC.q8)(t.warning.main,.5));let e=(0,eC.fk)(t.background.default,.98);eA(t.SnackbarContent,"bg",e),eA(t.SnackbarContent,"color",ej(()=>b.getContrastText(e))),eA(t.SpeedDialAction,"fabHoverBg",(0,eC.fk)(t.background.paper,.15)),eA(t.StepConnector,"border",r("palette-grey-600")),eA(t.StepContent,"border",r("palette-grey-600")),eA(t.Switch,"defaultColor",r("palette-grey-300")),eA(t.Switch,"defaultDisabledColor",r("palette-grey-600")),eA(t.Switch,"primaryDisabledColor",(0,eC.q8)(t.primary.main,.55)),eA(t.Switch,"secondaryDisabledColor",(0,eC.q8)(t.secondary.main,.55)),eA(t.Switch,"errorDisabledColor",(0,eC.q8)(t.error.main,.55)),eA(t.Switch,"infoDisabledColor",(0,eC.q8)(t.info.main,.55)),eA(t.Switch,"successDisabledColor",(0,eC.q8)(t.success.main,.55)),eA(t.Switch,"warningDisabledColor",(0,eC.q8)(t.warning.main,.55)),eA(t.TableCell,"border",(0,eC.q8)((0,eC.zp)(t.divider,1),.68)),eA(t.Tooltip,"bg",(0,eC.zp)(t.grey[700],.92))}eB(t.background,"default"),eB(t.background,"paper"),eB(t.common,"background"),eB(t.common,"onBackground"),eB(t,"divider"),Object.keys(t).forEach(e=>{let r=t[e];r&&"object"==typeof r&&(r.main&&eA(t[e],"mainChannel",(0,eC.LR)(eT(r.main))),r.light&&eA(t[e],"lightChannel",(0,eC.LR)(eT(r.light))),r.dark&&eA(t[e],"darkChannel",(0,eC.LR)(eT(r.dark))),r.contrastText&&eA(t[e],"contrastTextChannel",(0,eC.LR)(eT(r.contrastText))),"text"===e&&(eB(t[e],"primary"),eB(t[e],"secondary")),"action"===e&&(r.active&&eB(t[e],"active"),r.selected&&eB(t[e],"selected")))})});let{vars:v,generateCssVars:C}=eS(S=t.reduce((e,t)=>(0,A.Z)(e,t),S),{prefix:d,shouldSkipGeneratingVar:m});return S.vars=v,S.generateCssVars=C,S.shouldSkipGeneratingVar=m,S.unstable_sxConfig=(0,l.Z)({},ev.Z,null==h?void 0:h.unstable_sxConfig),S.unstable_sx=function(e){return(0,ed.Z)({sx:e,theme:this})},S}var eF=r(5919),eM=e=>[...[...Array(24)].map((t,r)=>`--${e?`${e}-`:""}overlays-${r+1}`),`--${e?`${e}-`:""}palette-AppBar-darkBg`,`--${e?`${e}-`:""}palette-AppBar-darkColor`];let eO=eE(),{CssVarsProvider:eP,useColorScheme:eL,getInitColorSchemeScript:e_}=function(e){let{themeId:t,theme:r={},attribute:o=ea,modeStorageKey:i=eo,colorSchemeStorageKey:c=el,defaultMode:s="light",defaultColorScheme:u,disableTransitionOnChange:d=!1,resolveTheme:m,excludeVariablesFromRoot:h}=e;r.colorSchemes&&("string"!=typeof u||r.colorSchemes[u])&&("object"!=typeof u||r.colorSchemes[null==u?void 0:u.light])&&("object"!=typeof u||r.colorSchemes[null==u?void 0:u.dark])||console.error(`MUI: \`${u}\` does not exist in \`theme.colorSchemes\`.`);let g=q.createContext(void 0),f="string"==typeof u?u:u.light,p="string"==typeof u?u:u.dark;return{CssVarsProvider:function(e){let{children:n,theme:f=r,modeStorageKey:p=i,colorSchemeStorageKey:y=c,attribute:b=o,defaultMode:S=s,defaultColorScheme:v=u,disableTransitionOnChange:C=d,storageWindow:k="undefined"==typeof window?void 0:window,documentNode:x="undefined"==typeof document?void 0:document,colorSchemeNode:Z="undefined"==typeof document?void 0:document.documentElement,colorSchemeSelector:w=":root",disableNestedContext:$=!1,disableStyleSheetGeneration:T=!1}=e,B=q.useRef(!1),j=z(),I=q.useContext(g),E=!!I&&!$,F=f[t],M=F||f,{colorSchemes:O={},components:P={},generateCssVars:L=()=>({vars:{},css:{}}),cssVarPrefix:_}=M,D=(0,a.Z)(M,eu),V=Object.keys(O),H="string"==typeof v?v:v.light,W="string"==typeof v?v:v.dark,{mode:U,setMode:N,systemMode:K,lightColorScheme:G,darkColorScheme:Q,colorScheme:X,setColorScheme:Y}=function(e){let{defaultMode:t="light",defaultLightColorScheme:r,defaultDarkColorScheme:n,supportedColorSchemes:o=[],modeStorageKey:a=eo,colorSchemeStorageKey:i=el,storageWindow:c="undefined"==typeof window?void 0:window}=e,s=o.join(","),[u,d]=q.useState(()=>{let e=es(a,t),o=es("".concat(i,"-light"),r),l=es("".concat(i,"-dark"),n);return{mode:e,systemMode:ei(e),lightColorScheme:o,darkColorScheme:l}}),m=ec(u,e=>"light"===e?u.lightColorScheme:"dark"===e?u.darkColorScheme:void 0),h=q.useCallback(e=>{d(r=>{if(e===r.mode)return r;let n=null!=e?e:t;try{localStorage.setItem(a,n)}catch(e){}return(0,l.Z)({},r,{mode:n,systemMode:ei(n)})})},[a,t]),g=q.useCallback(e=>{e?"string"==typeof e?e&&!s.includes(e)?console.error("`".concat(e,"` does not exist in `theme.colorSchemes`.")):d(t=>{let r=(0,l.Z)({},t);return ec(t,t=>{try{localStorage.setItem("".concat(i,"-").concat(t),e)}catch(e){}"light"===t&&(r.lightColorScheme=e),"dark"===t&&(r.darkColorScheme=e)}),r}):d(t=>{let o=(0,l.Z)({},t),a=null===e.light?r:e.light,c=null===e.dark?n:e.dark;if(a){if(s.includes(a)){o.lightColorScheme=a;try{localStorage.setItem("".concat(i,"-light"),a)}catch(e){}}else console.error("`".concat(a,"` does not exist in `theme.colorSchemes`."))}if(c){if(s.includes(c)){o.darkColorScheme=c;try{localStorage.setItem("".concat(i,"-dark"),c)}catch(e){}}else console.error("`".concat(c,"` does not exist in `theme.colorSchemes`."))}return o}):d(e=>{try{localStorage.setItem("".concat(i,"-light"),r),localStorage.setItem("".concat(i,"-dark"),n)}catch(e){}return(0,l.Z)({},e,{lightColorScheme:r,darkColorScheme:n})})},[s,i,r,n]),f=q.useCallback(e=>{"system"===u.mode&&d(t=>{let r=null!=e&&e.matches?"dark":"light";return t.systemMode===r?t:(0,l.Z)({},t,{systemMode:r})})},[u.mode]),p=q.useRef(f);return p.current=f,q.useEffect(()=>{let e=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return p.current(...t)},t=window.matchMedia("(prefers-color-scheme: dark)");return t.addListener(e),e(t),()=>{t.removeListener(e)}},[]),q.useEffect(()=>{if(c){let e=e=>{let r=e.newValue;"string"==typeof e.key&&e.key.startsWith(i)&&(!r||s.match(r))&&(e.key.endsWith("light")&&g({light:r}),e.key.endsWith("dark")&&g({dark:r})),e.key===a&&(!r||["light","dark","system"].includes(r))&&h(r||t)};return c.addEventListener("storage",e),()=>{c.removeEventListener("storage",e)}}},[g,h,a,i,s,t,c]),(0,l.Z)({},u,{colorScheme:m,setMode:h,setColorScheme:g})}({supportedColorSchemes:V,defaultLightColorScheme:H,defaultDarkColorScheme:W,modeStorageKey:p,colorSchemeStorageKey:y,defaultMode:S,storageWindow:k}),ee=U,et=X;E&&(ee=I.mode,et=I.colorScheme);let er=ee||("system"===S?s:S),ea=et||("dark"===er?W:H),{css:ed,vars:em}=L(),eh=(0,l.Z)({},D,{components:P,colorSchemes:O,cssVarPrefix:_,vars:em,getColorSchemeSelector:e=>`[${b}="${e}"] &`}),eg={},ef={};Object.entries(O).forEach(([e,t])=>{let{css:r,vars:n}=L(e);if(eh.vars=(0,A.Z)(eh.vars,n),e===ea&&(Object.keys(t).forEach(e=>{t[e]&&"object"==typeof t[e]?eh[e]=(0,l.Z)({},eh[e],t[e]):eh[e]=t[e]}),eh.palette&&(eh.palette.colorScheme=e)),e===("string"==typeof v?v:"dark"===S?v.dark:v.light)){if(h){let t={};h(_).forEach(e=>{t[e]=r[e],delete r[e]}),eg[`[${b}="${e}"]`]=t}eg[`${w}, [${b}="${e}"]`]=r}else ef[`${":root"===w?"":w}[${b}="${e}"]`]=r}),eh.vars=(0,A.Z)(eh.vars,em),q.useEffect(()=>{et&&Z&&Z.setAttribute(b,et)},[et,b,Z]),q.useEffect(()=>{let e;if(C&&B.current&&x){let t=x.createElement("style");t.appendChild(x.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),x.head.appendChild(t),window.getComputedStyle(x.body),e=setTimeout(()=>{x.head.removeChild(t)},1)}return()=>{clearTimeout(e)}},[et,C,x]),q.useEffect(()=>(B.current=!0,()=>{B.current=!1}),[]);let ep=q.useMemo(()=>({allColorSchemes:V,colorScheme:et,darkColorScheme:Q,lightColorScheme:G,mode:ee,setColorScheme:Y,setMode:N,systemMode:K}),[V,et,Q,G,ee,Y,N,K]),ey=!0;(T||E&&(null==j?void 0:j.cssVarPrefix)===_)&&(ey=!1);let eb=(0,R.jsxs)(q.Fragment,{children:[ey&&(0,R.jsxs)(q.Fragment,{children:[(0,R.jsx)(en.Z,{styles:{[w]:ed}}),(0,R.jsx)(en.Z,{styles:eg}),(0,R.jsx)(en.Z,{styles:ef})]}),(0,R.jsx)(J,{themeId:F?t:void 0,theme:m?m(eh):eh,children:n})]});return E?eb:(0,R.jsx)(g.Provider,{value:ep,children:eb})},useColorScheme:()=>{let e=q.useContext(g);if(!e)throw Error((0,n.Z)(19));return e},getInitColorSchemeScript:e=>(function(e){let{defaultMode:t="light",defaultLightColorScheme:r="light",defaultDarkColorScheme:n="dark",modeStorageKey:o=eo,colorSchemeStorageKey:l=el,attribute:a=ea,colorSchemeNode:i="document.documentElement"}=e||{};return(0,R.jsx)("script",{dangerouslySetInnerHTML:{__html:`(function() {
try {
  var mode = localStorage.getItem('${o}') || '${t}';
  var colorScheme = '';
  if (mode === 'system') {
    // handle system mode
    var mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = localStorage.getItem('${l}-dark') || '${n}';
    } else {
      colorScheme = localStorage.getItem('${l}-light') || '${r}';
    }
  }
  if (mode === 'light') {
    colorScheme = localStorage.getItem('${l}-light') || '${r}';
  }
  if (mode === 'dark') {
    colorScheme = localStorage.getItem('${l}-dark') || '${n}';
  }
  if (colorScheme) {
    ${i}.setAttribute('${a}', colorScheme);
  }
} catch(e){}})();`}},"mui-color-scheme-init")})((0,l.Z)({attribute:o,colorSchemeStorageKey:c,defaultMode:s,defaultLightColorScheme:f,defaultDarkColorScheme:p,modeStorageKey:i},e))}}({themeId:o.Z,theme:eO,attribute:"data-mui-color-scheme",modeStorageKey:"mui-mode",colorSchemeStorageKey:"mui-color-scheme",defaultColorScheme:{light:"light",dark:"dark"},resolveTheme:e=>{let t=(0,l.Z)({},e,{typography:(0,eF.Z)(e.palette,e.typography)});return t.unstable_sx=function(e){return(0,ed.Z)({sx:e,theme:this})},t},excludeVariablesFromRoot:eM});var eq=r(5229);function eD(){throw Error((0,n.Z)(20))}}}]);