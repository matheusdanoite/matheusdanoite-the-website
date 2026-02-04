import{j as e,A as Pt,T as Mt,B as G,r as i,C as Lt,S as At,O as Rt,u as Dt,a as Ot,H as Wt,b as n,c as Bt,i as Ft,g as Ht,d as Nt,e as Ue,f as Ut,h as Gt,k as xt,s as Vt,D as ht,W as ut,l as ft,m as gt,q as Kt,n as Xt,o as qt,p as Yt,t as Jt,v as Zt,w as Qt,x as mt,y as we,P as en,z as tn,R as oe,E as nn,F as on,G as rn,I as sn,K as an,J as ln,L as dn}from"./vendor-D2lnTqSJ.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const p of a)if(p.type==="childList")for(const d of p.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function r(a){const p={};return a.integrity&&(p.integrity=a.integrity),a.referrerPolicy&&(p.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?p.credentials="include":a.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function l(a){if(a.ep)return;a.ep=!0;const p=r(a);fetch(a.href,p)}})();const cn="/assets/w95fa-DxtS-rFC.woff2",be=({onNavigate:t,activeSection:o})=>{const r=[{id:"projects",name:"Projetos"},{id:"resume",name:"Escritos"},{id:"contact",name:"Redes"}];return e.jsx(Pt,{style:{position:"fixed",top:0,zIndex:2001,height:"40px"},children:e.jsxs(Mt,{style:{justifyContent:"space-between",height:"36px",padding:"0 8px",width:"100%",maxWidth:"950px",margin:"0 auto"},children:[e.jsx("div",{style:{display:"flex",gap:"4px"},children:e.jsx(G,{onClick:()=>t("home"),active:o==="home",size:"sm",style:{fontWeight:o==="home"?"bold":"normal",paddingTop:"2px",paddingBottom:"2px"},children:"Matheus José"})}),e.jsx("div",{style:{display:"flex",gap:"4px"},children:r.map(l=>e.jsx(G,{onClick:()=>t(l.id),active:o===l.id,size:"sm",style:{fontWeight:o===l.id?"bold":"normal",paddingTop:"2px",paddingBottom:"2px"},children:l.name},l.id))})]})})},pn=()=>e.jsxs("div",{style:{width:"100%",overflow:"hidden",display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"3vw",padding:"0 10px"},children:[e.jsx("pre",{style:{fontFamily:"var(--font-mono)",color:"var(--nick-green)",textShadow:"2px 2px 0px var(--win-black)",fontWeight:"bold",fontSize:"clamp(8px, 2vw, 16px)",lineHeight:"1.2",margin:"0",whiteSpace:"pre"},children:`
  __  __       _   _                     
 |  \\/  | __ _| |_| |__   ___ _   _ ___  
 | |\\/| |/ _\` | __| '_ \\ / _ \\ | | / __| 
 | |  | | (_| | |_| | | |  __/ |_| \\__ \\ 
 |_|  |_|\\__,_|\\__|_| |_|\\___|\\__,_|___/ 
`}),e.jsx("pre",{style:{fontFamily:"var(--font-mono)",color:"var(--nick-green)",textShadow:"2px 2px 0px var(--win-black)",fontWeight:"bold",fontSize:"clamp(8px, 2vw, 16px)",lineHeight:"1.2",margin:"0",whiteSpace:"pre"},children:`
      _               _   
     | | ___  ___  __/_/  
  _  | |/ _ \\/ __|/ _ \\   
 | |_| | (_) \\__ \\  __/   
  \\___/ \\___/|___/\\___|   
`})]}),xn=()=>{const t=["Ketchup Hemmer","É isso aí","Eu prefiro ser essa metamorfose ambulante","¯\\_(ツ)_/¯","Ouça Shinichi Osawa","K-pop é top","Gosto de longas caminhadas pela madrugada","Selo SM de qualidade","matheusdanet","Aberto 24h","Tenho um fã.","Um bon vivant","Eu tive uma ideia!","Here's to the misfits"],[o,r]=i.useState(t[0]);return i.useEffect(()=>{const l=Math.floor(Math.random()*t.length);r(t[l])},[]),e.jsx("div",{style:{textAlign:"center",fontFamily:"var(--font-ui)",color:"var(--win-blue)",marginTop:"1rem",fontStyle:"italic",minHeight:"1.5em"},children:o})},hn="/assets/matheus_3d-DmonV1Yv.glb";function un(){const{progress:t}=Ot();return e.jsx(Wt,{center:!0,children:e.jsxs("div",{style:{color:"white"},children:["Carregando... ",t.toFixed(0),"%"]})})}function fn(t){const{scene:o}=Dt(hn);return e.jsx("primitive",{object:o,...t})}const gn=()=>e.jsx("div",{style:{width:"100%",height:"400px"},children:e.jsxs(Lt,{shadows:!0,dpr:[1,2],camera:{fov:75},children:[e.jsx(i.Suspense,{fallback:e.jsx(un,{}),children:e.jsx(At,{environment:null,intensity:.5,contactShadow:!1,shadowBias:-.0015,children:e.jsx(fn,{})})}),e.jsx(Rt,{makeDefault:!0,autoRotate:!0,autoRotateSpeed:15,enableZoom:!0,enablePan:!1,minPolarAngle:0,maxPolarAngle:Math.PI/1.5})]})}),mn=n.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
`,bn=i.forwardRef((t,o)=>{const[r,l]=i.useState("#000000"),[a,p]=i.useState(2),d=()=>{o&&o.current&&o.current.clear()};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1,width:"100%"},children:[e.jsxs(mn,{children:[e.jsx("label",{children:"Cor:"}),e.jsxs("div",{style:{position:"relative",width:"35px",height:"30px"},children:[e.jsx(G,{style:{width:"100%",height:"100%",padding:"4px"},children:e.jsx("div",{style:{width:"100%",height:"100%",background:r,border:"1px solid #8e8e8e"}})}),e.jsx("input",{type:"color",value:r,onChange:c=>{l(c.target.value)},style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",opacity:0,cursor:"pointer"}})]}),e.jsx(G,{size:"sm",onClick:d,title:"Explodir (Limpar Tudo)",style:{minWidth:"35px"},children:"💣"}),e.jsx("div",{style:{width:"1px",height:"20px",background:"#ccc",margin:"0 5px"}}),e.jsx("label",{children:"Pincel:"}),e.jsx(G,{size:"sm",active:a===2?"true":void 0,onClick:()=>p(2),children:"P"}),e.jsx(G,{size:"sm",active:a===5?"true":void 0,onClick:()=>p(5),children:"M"}),e.jsx(G,{size:"sm",active:a===10?"true":void 0,onClick:()=>p(10),children:"G"})]}),e.jsx("div",{style:{width:"304px",height:"304px",margin:"0 auto",border:"2px solid #8e8e8e",background:"white",display:"flex",justifyContent:"center",alignItems:"center",flexShrink:0},children:e.jsx(Bt,{ref:o,brushColor:r,brushRadius:a,lazyRadius:0,canvasWidth:300,canvasHeight:300,hideGrid:!0,style:{background:"white",width:"300px",height:"300px"}})})]})}),Re={apiKey:"AIzaSyCDnz8noh7ihVvPHTE6Jmw7jUKGus5y1OI",authDomain:"matheusdanoite-the-website.firebaseapp.com",projectId:"matheusdanoite-the-website",storageBucket:"matheusdanoite-the-website.firebasestorage.app",messagingSenderId:"500621503044",appId:"1:500621503044:web:55320778e3506147cd6a11"},ke=Re.apiKey&&Re.projectId,bt=ke?Ft(Re):null,ye=ke?Ht(bt):null,Ge=ke?Nt(bt):null,yn=!!ke,Fe=[{name:"Bubbles",lower:"ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ",upper:"ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ",digits:"⓪①②③④⑤⑥⑦⑧⑨"},{name:"Script Bold",lower:"𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃",upper:"𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩",digits:"0123456789"},{name:"Fraktur",lower:"𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷",upper:"𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ",digits:"0123456789"},{name:"Double Struck",lower:"𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫",upper:"𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ",digits:"𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡"},{name:"Full Width",lower:"ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ",upper:"ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ",digits:"０１２３４５６７８９"}],De="abcdefghijklmnopqrstuvwxyz",Oe="ABCDEFGHIJKLMNOPQRSTUVWXYZ",We="0123456789",vn=t=>{if(!t)return"";let o=t;return Fe.forEach(r=>{r.lower&&(Array.isArray(r.lower)?r.lower:[...r.lower]).forEach((a,p)=>{if(p<De.length)try{o=o.split(a).join(De[p])}catch{}}),r.upper&&(Array.isArray(r.upper)?r.upper:[...r.upper]).forEach((a,p)=>{if(p<Oe.length)try{o=o.split(a).join(Oe[p])}catch{}}),r.digits&&(Array.isArray(r.digits)?r.digits:[...r.digits]).forEach((a,p)=>{if(p<We.length)try{o=o.split(a).join(We[p])}catch{}})}),o.normalize("NFC")},Ve=(t,o)=>{if(!t)return"";const r=Fe.find(a=>a.name===o);return r?[...t.normalize("NFD")].map(a=>{const p=De.indexOf(a),d=Oe.indexOf(a),c=We.indexOf(a);return p!==-1?(Array.isArray(r.lower)?r.lower:[...r.lower])[p]||a:d!==-1?(Array.isArray(r.upper)?r.upper:[...r.upper])[d]||a:c!==-1&&r.digits&&(Array.isArray(r.digits)?r.digits:[...r.digits])[c]||a}).join(""):t},jn=n.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 10px;
`;n.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
`;n.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  
  /* Custom Scrollbar for Webkit */
  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-track {
    background: #dfdfdf;
  }
  &::-webkit-scrollbar-thumb {
    background: #8e8e8e;
    border: 2px solid #dfdfdf;
  }
`;n.div`
  margin-bottom: 8px;
  padding: 8px;
  background: #fff;
  border: 1px dotted #8e8e8e;
`;n.div`
  font-weight: bold;
  font-size: 0.9rem;
  color: #000080; /* Win Regular Blue */
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
`;n.span`
  color: #8e8e8e;
  font-size: 0.75rem;
  font-weight: normal;
`;n.img`
  max-width: 100%;
  height: auto;
  border: 1px solid #000;
  background: white;
  margin-top: 5px;
`;const Ke=({onAddMessage:t})=>{const[o,r]=i.useState(1),[l,a]=i.useState("text"),[p,d]=i.useState("default"),[c,s]=i.useState(""),[x,h]=i.useState(""),[g,f]=i.useState(!1),k=i.useRef(null),w=()=>{k.current&&k.current.clear()},j=y=>{const T=vn(y.target.value);T.length<=300&&h(T)},I=y=>{d(y)},b=async()=>{if(!c.trim()){alert("Por favor, insira seu nome ou nick.");return}let y="",T="text";if(l==="text"){if(y=Ve(x,p),!y||!y.trim()){alert("Por favor, escreva uma mensagem.");return}}else l==="draw"&&k.current&&(y=k.current.getDataURL(),T="drawing");if(!yn){const m={id:Date.now().toString(),name:c,content:y,type:T,font:p,createdAt:{seconds:Date.now()/1e3}};setTimeout(()=>{t&&t(m),s(""),h(""),l==="draw"&&w(),r(1),f(!1)},500);return}f(!0);try{await Gt(xt(ye,"guestbook"),{name:c.trim(),content:y,type:T,font:p,createdAt:Vt()}),s(""),h(""),l==="draw"&&w(),r(1)}catch(m){console.error("Error adding document: ",m)}finally{f(!1)}};return e.jsxs(jn,{style:{height:"100%",padding:"2px"},children:[e.jsx("div",{style:{marginBottom:"5px"},children:e.jsx(Ue,{value:c,onChange:y=>s(y.target.value),placeholder:"Seu nome...",style:{width:"100%"}})}),l==="text"?e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"5px",marginBottom:"5px"},children:e.jsx(Ut,{width:"100%",options:[{value:"default",label:"Comic Sans"},...Fe.map(y=>({value:y.name,label:y.name}))],onChange:y=>I(y.value),value:p,placeholder:"Escolha um estilo...",menuMaxHeight:150,style:{fontWeight:"light",fontFamily:"'W95FA', 'ms_sans_serif', sans-serif",WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}})}),e.jsx(Ue,{multiline:!0,rows:6,value:Ve(x,p),onChange:j,placeholder:"Escreva sua mensagem...",style:{width:"100%",fontFamily:p==="default"?"'ComicCustom', 'Comic Sans MS', 'Comic Sans', cursive":"'W95FA', 'ms_sans_serif', sans-serif",fontSize:"14px",WebkitFontSmoothing:p==="default"?"auto":"none",MozOsxFontSmoothing:p==="default"?"auto":"grayscale",fontSmooth:p==="default"?"auto":"never",textRendering:p==="default"?"auto":"aliased"}}),e.jsxs("div",{style:{marginTop:"2px",fontSize:"0.8rem",color:"black",textAlign:"right"},children:[x.length,"/300"]})]}):e.jsx(bn,{ref:k}),e.jsx("div",{style:{flex:1}}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"auto",paddingTop:"10px"},children:[e.jsxs("div",{style:{display:"flex",gap:"5px"},children:[e.jsx(G,{active:l==="text",onClick:()=>a("text"),children:"Escrita"}),e.jsx(G,{active:l==="draw",onClick:()=>a("draw"),children:"Desenho"})]}),e.jsx(G,{onClick:b,disabled:g,primary:!g,children:g?"Enviando...":"Enviar"})]})]})},pe=({id:t,title:o,children:r,onClose:l,onFocus:a,onDrag:p,onStop:d,position:c,style:s,windowStyle:x,defaultPosition:h,isMobile:g})=>{const f=i.useRef(null);return e.jsx(ht,{nodeRef:f,handle:".window-header",onMouseDown:()=>a(t),defaultPosition:h,position:c,onDrag:p,onStop:d,disabled:g,children:e.jsx("div",{ref:f,style:{...s||{},zIndex:s?.zIndex},children:e.jsxs(ut,{style:{width:"100%",maxWidth:"600px",display:"flex",flexDirection:"column",...x},className:"window",children:[e.jsxs(ft,{className:"window-header",style:{display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"grab",flexShrink:0},children:[e.jsx("span",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:o}),e.jsx(G,{onClick:()=>l(t),size:"sm",style:{width:"25px",height:"25px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("span",{style:{fontWeight:"bold",transform:"translateY(-1px)"},children:"x"})})]}),e.jsx(gt,{style:{padding:0,flex:1,overflow:"hidden",display:"flex",flexDirection:"column"},children:r})]})})})},wn=n.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    background: ${({theme:t})=>t.material}; /* System Gray */
    font-size: 0.9rem;
`,kn=n.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 10px;
    justify-content: center;
`,Sn=({msg:t,onClose:o,onFocus:r,isMobile:l,index:a,totalMessages:p,onVote:d})=>e.jsx(pe,{id:t.id,title:t.name,onClose:o,onFocus:()=>{},isMobile:l,style:{zIndex:10+(p-a),position:"relative",marginBottom:"20px"},windowStyle:{width:"320px",maxWidth:"320px",height:"auto"},children:e.jsxs(wn,{children:[t.type==="drawing"?e.jsx("div",{style:{background:"white",border:"1px solid #8e8e8e",padding:"5px"},children:e.jsx("img",{src:t.content,alt:"Drawing",style:{width:"100%",display:"block"}})}):e.jsx("div",{style:{margin:0,fontSize:"15px",lineHeight:"1.4",wordBreak:"break-word",fontFamily:!t.font||t.font==="default"?"'ComicCustom', 'Comic Sans MS', 'Comic Sans', cursive":"'W95FA', 'ms_sans_serif', sans-serif",WebkitFontSmoothing:!t.font||t.font==="default"?"auto":"none",MozOsxFontSmoothing:!t.font||t.font==="default"?"auto":"grayscale",fontSmooth:!t.font||t.font==="default"?"auto":"never",textRendering:!t.font||t.font==="default"?"auto":"aliased"},dangerouslySetInnerHTML:{__html:t.content}}),e.jsxs(kn,{children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(G,{size:"sm",onClick:()=>d(t.id,"likes"),children:"Joinha"}),e.jsx("span",{style:{fontSize:"0.8rem",marginTop:"2px"},children:t.likes||0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(G,{size:"sm",onClick:()=>d(t.id,"dislikes"),children:"Paia"}),e.jsx("span",{style:{fontSize:"0.8rem",marginTop:"2px"},children:t.dislikes||0})]})]})]})}),Cn=i.forwardRef((t,o)=>e.jsxs("div",{ref:o,style:{padding:"1rem",width:"100%"},children:[e.jsx("h3",{style:{marginTop:0},children:"Sobre mim"}),e.jsx("p",{children:"[Escreva aqui sobre você...]"}),e.jsx("br",{}),e.jsx("p",{children:"Olá! Sou Matheus José, um desenvolvedor apaixonado por criar experiências digitais únicas. Este portfólio é uma janela para o meu mundo, misturando nostalgia e tecnologia moderna."})]})),In=n.div`
  width: 100%;
  max-width: 950px;
  margin: 0 auto;
  position: relative;
  
  // Mobile Layout (Default)
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding-bottom: 50px;

  // Desktop Layout
  @media (min-width: 769px) {
    display: block;
    // Dynamic height based on content
    min-height: 100vh; 
    padding-top: 20px;
    padding-bottom: 150px; // Space for Load More
  }
`,Tn=()=>{const[t,o]=i.useState(window.innerWidth<=768),[r,l]=i.useState([]),[a,p]=i.useState(15),[d,c]=i.useState(new Set);i.useEffect(()=>{const v=()=>o(window.innerWidth<=768);return window.addEventListener("resize",v),()=>window.removeEventListener("resize",v)},[]),i.useEffect(()=>{if(!ye)return;const v=Kt(xt(ye,"guestbook"),qt("createdAt","desc"),Xt(a)),E=Yt(v,B=>{const K=B.docs.map(N=>({id:N.id,...N.data()}));l(K)});return()=>E()},[a]);const[s,x]=i.useState({about:{id:"about",title:"bio",isOpen:!0,zIndex:1,content:e.jsx(Cn,{}),desktopPosition:{top:"20px",left:"50%"}},model:{id:"model",title:"eu",isOpen:!0,zIndex:0,content:e.jsx(gn,{}),desktopPosition:{top:"350px",left:"50%"}},guestbook:{id:"guestbook",title:"depoimentos",isOpen:!0,zIndex:0,content:e.jsx(Ke,{}),desktopPosition:{top:"780px",left:"50%"}}}),h=v=>{s[v]?x(E=>({...E,[v]:{...E[v],isOpen:!1}})):c(E=>new Set(E).add(v))},g=v=>{s[v]&&x(E=>{const B={...E},K=Math.max(...Object.values(B).map(N=>N.zIndex),10)+1;return B[v]={...B[v],zIndex:K},B})},f=async(v,E)=>{const B=`vote_${v}`;if(localStorage.getItem(B)){console.log("Already voted");return}try{const N=Jt(ye,"guestbook",v);await Zt(N,{[E]:Qt(1)}),localStorage.setItem(B,E)}catch(N){console.error("Error updating vote:",N)}},k=v=>{l(E=>[v,...E])},w=()=>{p(v=>v+15)},j=i.useRef(null),[I,b]=i.useState(200),[y,T]=i.useState(null);i.useEffect(()=>{if(j.current){const v=j.current.offsetHeight,E=j.current.closest(".window")?.getBoundingClientRect();E&&T(E),b(v)}},[t,s.about.isOpen]);const m=38,P=50,O=20,H=y?y.height:I+45,M=O+H+m,R=M+520+m,$=i.useRef(null),[W,U]=i.useState(0);i.useEffect(()=>{$.current&&U($.current.offsetHeight)},[r,t,d]);const z=r.length>=a?100:20,_=t?"auto":`${R+W+z}px`;return e.jsxs(In,{id:"home-wrapper",style:{minHeight:_},children:[s.about.isOpen&&e.jsx(pe,{id:"about",title:s.about.title,onClose:h,onFocus:g,isMobile:t,style:{zIndex:s.about.zIndex,position:t?"relative":"absolute",left:t?0:"auto",right:0,margin:t?"0 auto":0,width:"fit-content",top:t?0:`${O}px`},children:e.jsx("div",{ref:j,style:{width:"100%"},children:s.about.content})}),s.model.isOpen&&e.jsx(pe,{id:"model",title:s.model.title,onClose:h,onFocus:g,isMobile:t,style:{zIndex:s.model.zIndex,position:t?"relative":"absolute",left:0,right:t?0:"auto",margin:t?"0 auto":0,width:"fit-content",top:t?0:`${O}px`},windowStyle:{width:"100%",maxWidth:"500px"},children:s.model.content}),s.guestbook.isOpen&&e.jsx("div",{id:"guestbook-window",style:{position:t?"relative":"absolute",left:t?0:"50%",right:t?0:"auto",margin:t?"0 auto":0,transform:t?"none":`translateX(calc(-50% + ${P}px))`,width:"fit-content",top:t?0:`${M}px`,zIndex:s.guestbook.zIndex},children:e.jsx(pe,{id:"guestbook",title:s.guestbook.title,onClose:h,onFocus:g,isMobile:t,windowStyle:{width:"350px",height:"520px"},children:e.jsx(Ke,{onAddMessage:k})})}),e.jsx("div",{ref:$,style:{position:t?"relative":"absolute",top:t?0:`${R}px`,left:0,right:0,display:"flex",flexDirection:"column",alignItems:"center",gap:"20px",pointerEvents:"none"},children:r.map((v,E)=>d.has(v.id)?null:e.jsxs("div",{style:{pointerEvents:"auto"},children:[" ",e.jsx(Sn,{msg:v,onClose:h,onFocus:()=>{},isMobile:t,index:E,totalMessages:r.length,onVote:f})]},v.id))}),!t&&r.length>=a&&e.jsx("div",{style:{position:"absolute",bottom:"50px",left:0,right:0,textAlign:"center"},children:e.jsx(G,{onClick:w,style:{fontWeight:"bold"},children:"Carregar Mais..."})}),t&&r.length>=a&&e.jsx("div",{style:{margin:"20px 0"},children:e.jsx(G,{onClick:w,children:"Carregar Mais..."})}),!s.model.isOpen&&!s.about.isOpen&&!s.guestbook.isOpen&&e.jsxs("div",{style:{textAlign:"center",marginTop:"100px",color:"gray",width:"100%"},children:[e.jsx("p",{children:"Sistema encerrado."}),e.jsx(G,{onClick:()=>window.location.reload(),children:"Reiniciar"})]})]})},$n=n.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`,zn=n.li`
    display: flex;
    align-items: center;
    justify-content: space-between; // Push image left, text right
    padding: 8px;
    border-bottom: 2px solid transparent; // spacer
    
    &:hover {
        background: ${({theme:t})=>t.hoverBackground};
        color: ${({theme:t})=>t.canvasTextInvert};
    }
`,En=n.img`
    width: 40px;
    height: 40px;
    margin-right: 12px;
    border: 2px solid ${({theme:t})=>t.borderDark};
`,_n=n.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    align-items: flex-end; // Align text to the right
    text-align: right;
`,Pn=n.span`
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%; // Ensure ellipsis works if needed, though right-align might fight with this. Flex-end usually enough.
`,Mn=n.span`
    font-size: 0.8rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
`,Ln=()=>{const[t,o]=i.useState([]),[r,l]=i.useState(!0),[a,p]=i.useState(!1);if(i.useEffect(()=>{fetch("/api/lastfm").then(s=>{if(!s.ok)throw new Error("Failed to fetch");return s.json()}).then(s=>{o(s),l(!1)}).catch(s=>{console.error(s),p(!0),l(!1)})},[]),r)return e.jsx("div",{style:{padding:"20px",textAlign:"center"},children:e.jsx(mt,{size:32})});if(a)return e.jsxs("div",{style:{padding:"20px",textAlign:"center"},children:[e.jsx("p",{children:"Erro ao carregar músicas."}),e.jsx("p",{style:{fontSize:"0.8em"},children:"(Verifique as chaves de API no Netlify)"})]});const d=t.slice(0,5);return e.jsxs("div",{style:{paddingBottom:"10px",background:"transparent"},children:[e.jsx($n,{children:d.map((c,s)=>e.jsxs(zn,{children:[c.image&&e.jsx(En,{src:c.image,alt:"Capa"}),e.jsxs(_n,{children:[e.jsx(Pn,{children:c.name}),e.jsx(Mn,{children:c.artist})]})]},s))}),e.jsx("div",{style:{textAlign:"center",marginTop:"10px",fontSize:"0.8rem"},children:e.jsx(we,{href:"https://www.last.fm/user/matheusdanoite",target:"_blank",style:{textDecoration:"none"},children:"matheusdanoite no Last.fm"})})]})},An=n.li`
    padding: 10px;
    border-bottom: 2px solid ${({theme:t})=>t.borderLight};
    display: flex;
    gap: 10px;
    
    &:last-child {
        border-bottom: none;
    }

    &:hover {
        background: ${({theme:t})=>t.hoverBackground};
        color: ${({theme:t})=>t.canvasTextInvert};
    }
`,Xe=n.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid ${({theme:t})=>t.borderDark};
    flex-shrink: 0;
`,Rn=n.div`
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
`,Dn=n.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 0.8rem;
`,On=n.span`
    font-weight: bold;
    margin-right: 5px;
`,Wn=n.span`
    opacity: 0.7;
    font-size: 0.75rem;
`,Bn=n.span`
    opacity: 0.7;
    font-size: 0.75rem;
    white-space: nowrap;
`,Fn=n.p`
    margin: 0;
    line-height: 1.3;
    word-wrap: break-word;
`,qe=n.div`
    border: 2px solid ${({theme:t})=>t.borderDark};
    padding: 8px;
    margin-top: 5px;
    background: rgba(255, 255, 255, 0.1);
    font-size: 0.85rem;
`,Hn=n.div`
    display: flex;
    gap: 5px;
    margin-top: 5px;
    flex-wrap: wrap;
`,Nn=n.img`
    max-width: 100%;
    max-height: 150px;
    border: 1px solid ${({theme:t})=>t.borderDark};
    object-fit: cover;
    border-radius: 4px;
`,Un=n(we)`
    display: block;
    border: 1px solid ${({theme:t})=>t.borderDark};
    margin-top: 5px;
    text-decoration: none;
    color: inherit;
    
    &:hover {
        background: rgba(255, 255, 255, 0.2);
    }
`,Gn=n.img`
    width: 100%;
    height: 100px;
    object-fit: cover;
    border-bottom: 1px solid ${({theme:t})=>t.borderDark};
`,Vn=n.div`
    padding: 8px;
`,Kn=n.div`
    font-weight: bold;
    font-size: 0.85rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,Xn=n.div`
    font-size: 0.75rem;
    opacity: 0.8;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`,qn=n.div`
    font-size: 0.75rem;
    opacity: 0.6;
    margin-bottom: 2px;
`,Yn=({post:t})=>{const o=t.record,r=!!o.reply,l=new Date(o.createdAt).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"}),a=s=>!s||s.length===0?null:e.jsx(Hn,{children:s.map((x,h)=>e.jsx(Nn,{src:x.thumb,alt:x.alt},h))}),p=s=>s?e.jsxs(Un,{href:s.uri,target:"_blank",children:[s.thumb&&e.jsx(Gn,{src:s.thumb}),e.jsxs(Vn,{children:[e.jsx(Kn,{children:s.title}),e.jsx(Xn,{children:s.description})]})]}):null,d=(s,x)=>e.jsxs(qe,{children:[e.jsxs("div",{style:{marginBottom:"4px",display:"flex",alignItems:"center",gap:"5px"},children:[e.jsx(Xe,{src:x.avatar,style:{width:"20px",height:"20px",borderWidth:"1px"}}),e.jsx("strong",{children:x.displayName||x.handle}),e.jsxs("span",{style:{opacity:.6,fontSize:"0.75rem"},children:["@",x.handle]})]}),e.jsx("div",{children:s.text})]}),c=s=>{if(!s)return null;if(s.$type==="app.bsky.embed.images#view")return a(s.images);if(s.$type==="app.bsky.embed.external#view")return p(s.external);if(s.$type==="app.bsky.embed.record#view"){const x=s.record;if(x.$type==="app.bsky.embed.record#viewRecord")return d(x.value,x.author);if(x.$type==="app.bsky.embed.record#viewNotFound")return e.jsx(qe,{style:{fontStyle:"italic",opacity:.6},children:"Post removido ou não encontrado."})}return s.$type==="app.bsky.embed.recordWithMedia#view"?e.jsxs(e.Fragment,{children:[c(s.media),c(s.record)]}):null};return e.jsxs(An,{children:[e.jsx(Xe,{src:t.author.avatar,alt:t.author.handle}),e.jsxs(Rn,{children:[r&&e.jsx(qn,{children:"Resposta ao post..."}),e.jsxs(Dn,{children:[e.jsxs("div",{children:[e.jsx(On,{children:t.author.displayName||t.author.handle}),e.jsxs(Wn,{children:["@",t.author.handle]})]}),e.jsx(Bn,{children:l})]}),e.jsx(Fn,{children:o.text}),c(t.embed)]})]})},Jn=n.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`,Zn=()=>{const[t,o]=i.useState([]),[r,l]=i.useState(!0),[a,p]=i.useState(!1);return i.useEffect(()=>{(async()=>{try{const c=await fetch("https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=matheusdanoite.bsky.social&limit=5");if(!c.ok)throw new Error("Failed to fetch");const s=await c.json();o(s.feed||[]),l(!1)}catch(c){console.error(c),p(!0),l(!1)}})()},[]),r?e.jsx("div",{style:{padding:"20px",textAlign:"center"},children:e.jsx(mt,{size:32})}):a?e.jsx("div",{style:{padding:"20px",textAlign:"center"},children:e.jsx("p",{children:"Erro ao carregar posts."})}):e.jsxs("div",{style:{height:"auto",paddingBottom:"10px",background:"transparent"},children:[e.jsx(Jn,{children:t.map((d,c)=>e.jsx(Yn,{post:d.post},c))}),e.jsx("div",{style:{textAlign:"center",marginTop:"10px",fontSize:"0.8rem"},children:e.jsx(we,{href:"https://bsky.app/profile/matheusdanoite.bsky.social",target:"_blank",style:{textDecoration:"none"},children:"@matheusdanoite.bsky.social no BlueSky"})})]})},Qn=n.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
`,eo=n.img`
  width: 64px;
  height: 64px;
  border: 2px solid ${({theme:t})=>t.borderDarkest};
`,to=n.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`,no=n.span`
  font-weight: bold;
  font-size: 1.1rem;
`,oo=n.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.9rem;
`,io=n.div`
  width: 14px;
  height: 14px;
  background-color: #107C10; /* Xbox Green */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 10px;
  font-weight: bold;
`,ro=n.div`
  padding: 5px 0;
  display: flex;
  flex-direction: column;
`,so=n.span`
  font-size: 0.85rem;
  color: ${({theme:t})=>t.textSecondary};
  margin-bottom: 8px;
`,ao=n.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,lo=n.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border: 1px solid ${({theme:t})=>t.borderDark};
  background: black;
`,co=n.span`
  font-weight: bold;
  font-size: 0.95rem;
`,po=n.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    gap: 10px;
`,xo=()=>{const[t,o]=i.useState(null),[r,l]=i.useState(!0),[a,p]=i.useState(null);i.useEffect(()=>{(async()=>{try{const x=await fetch("/api/xbox");if(!x.ok){let f=`Erro ${x.status}: ${x.statusText}`;try{const k=x.headers.get("content-type");if(k&&k.includes("application/json")){const w=await x.json();w.error&&(f+=` - ${w.error}`)}else{const w=await x.text();f+=` - Response: ${w.slice(0,100)}`}}catch{}throw new Error(f)}const h=x.headers.get("content-type");if(!h||!h.includes("application/json")){const f=await x.text();throw new Error(`Expected JSON but got ${h}: ${f.slice(0,100)}`)}const g=await x.json();if(g.error)throw new Error(g.error);o(g)}catch(x){console.error("Xbox API failed:",x),p(x.message)}finally{l(!1)}})()},[]);const c=(()=>{if(!t||!t.account||!t.account.profileUsers||t.account.profileUsers.length===0)return null;const s=t.account.profileUsers[0],x=g=>s.settings.find(f=>f.id===g)?.value;let h=null;return t.history&&Array.isArray(t.history)&&t.history.length>0&&(h=t.history[0]),{gamertag:x("Gamertag"),gamerscore:x("Gamerscore"),avatar:x("GameDisplayPicRaw"),lastGame:h}})();return e.jsxs("div",{style:{padding:"5px"},children:[r&&e.jsxs(po,{children:[e.jsx("p",{children:"Conectando ao Xbox Live..."}),e.jsx(en,{width:"100%"})]}),a&&!r&&e.jsxs("div",{style:{padding:"20px",textAlign:"center"},children:[e.jsx("p",{children:"Erro ao carregar informações."}),e.jsx("p",{style:{fontSize:"0.8em"},children:"(Verifique as chaves de API no Netlify)"})]}),!r&&!a&&c&&e.jsxs(e.Fragment,{children:[e.jsxs(Qn,{children:[e.jsx(eo,{src:c.avatar,alt:"Avatar"}),e.jsxs(to,{children:[e.jsx(no,{children:c.gamertag}),e.jsxs(oo,{children:[e.jsx(io,{children:"G"}),c.gamerscore]})]})]}),c.lastGame&&e.jsxs(e.Fragment,{children:[e.jsx(tn,{style:{margin:"10px 0"}}),e.jsxs(ro,{children:[e.jsx(so,{children:"Último Jogo:"}),e.jsxs(ao,{children:[e.jsx(lo,{src:c.lastGame.displayImage,alt:c.lastGame.name}),e.jsx(co,{children:c.lastGame.name})]})]})]}),e.jsx("div",{style:{textAlign:"center",marginTop:"15px",fontSize:"0.8rem",paddingBottom:"10px"},children:e.jsx(we,{href:"https://www.xbox.com/pt-BR/play/user/matheusdobairro",target:"_blank",style:{textDecoration:"none"},children:"@matheusdobairro no Xbox"})})]})]})},ho=n.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  
  // Desktop Layout (Default base for Styled Components logic)
  @media (min-width: 769px) {
    display: block; 
    min-height: 100vh; /* Match Home/Projects for consistent full screen */
    padding-top: 20px;
  }

  // Mobile Layout
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    padding-bottom: 50px;
  }
`,uo=n.div`
  z-index: ${t=>t.$zIndex};
  
  /* Desktop Styles */
  @media (min-width: 769px) {
    position: absolute;
    left: ${t=>t.$left};
    top: ${t=>t.$top};
  }

  /* Mobile Styles */
  @media (max-width: 768px) {
    position: relative !important;
    left: auto !important;
    top: auto !important;
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
  }
`,fo=n.div`
  z-index: 9999;
  
  /* Desktop Position */
  @media (min-width: 769px) {
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translateX(-50%);
  }

  /* Mobile Position */
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }
`,go=({id:t,title:o,children:r,onClose:l,onFocus:a,zIndex:p,desktopPos:d,isMobile:c,windowWidth:s})=>{const x=i.useRef(null);return e.jsx(ht,{nodeRef:x,handle:".window-header",onMouseDown:()=>a(t),disabled:c,position:c?{x:0,y:0}:void 0,children:e.jsx(uo,{ref:x,$zIndex:p,$left:d.left,$top:d.top,children:e.jsxs(ut,{style:{width:s,maxWidth:"95vw"},className:"window",children:[e.jsxs(ft,{className:"window-header",style:{display:"flex",alignItems:"center",justifyContent:"space-between",cursor:c?"default":"grab"},children:[e.jsx("span",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:o}),e.jsx(G,{onClick:()=>l(t),size:"sm",square:!0,children:e.jsx("span",{style:{fontWeight:"bold",transform:"translateY(-1px)"},children:"x"})})]}),e.jsx(gt,{style:{padding:0},children:r})]})})})},mo=()=>{const[t,o]=i.useState(window.innerWidth<=768);i.useEffect(()=>{const s=()=>o(window.innerWidth<=768);return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]);const[r,l]=i.useState({music:{id:"music",title:"last.fm",isOpen:!0,zIndex:1,content:e.jsx(Ln,{}),width:"300px",desktopPos:{top:"20px",left:"20px"}},bluesky:{id:"bluesky",title:"bluesky",isOpen:!0,zIndex:2,content:e.jsx(Zn,{}),width:"480px",desktopPos:{top:"20px",left:"340px"}},xbox:{id:"xbox",title:"xbox",isOpen:!0,zIndex:1,content:e.jsx(xo,{}),width:"350px",desktopPos:{top:"20px",left:"840px"}}}),a=s=>{l(x=>({...x,[s]:{...x[s],isOpen:!1}}))},p=s=>{t||l(x=>{const h={...x},g=Math.max(...Object.values(h).map(f=>f.zIndex));return h[s].zIndex<=g&&(h[s]={...h[s],zIndex:g+1}),h})},d=()=>{l(s=>{const x={...s};return Object.keys(x).forEach(h=>{x[h].isOpen=!0,x[h].zIndex=1}),x.music.zIndex=1,x.bluesky.zIndex=2,x.xbox.zIndex=1,x})},c=Object.values(r).every(s=>!s.isOpen);return e.jsxs(ho,{children:[Object.values(r).map(s=>s.isOpen&&e.jsx(go,{id:s.id,title:s.title,onClose:a,onFocus:p,zIndex:s.zIndex,desktopPos:s.desktopPos,isMobile:t,windowWidth:s.width,children:s.content},`${s.id}-${t}`)),c&&e.jsx(fo,{children:e.jsx(G,{onClick:d,style:{width:"200px",height:"50px",fontWeight:"bold"},children:"Reiniciar Sistema"})})]})},bo=n.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    padding: 20px;
`,yo=n.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    cursor: pointer;
    text-align: center;
    padding: 10px;
    border: 1px solid transparent;

    &:hover {
        border: 1px dotted ${({theme:t})=>t.borderDark};
        background-color: ${({theme:t})=>t.hoverBackground};
        color: ${({theme:t})=>t.canvasTextInvert};
        
        img {
            filter: none;
        }
    }
`,vo=n.img`
    width: 48px;
    height: 48px;
    margin-bottom: 8px;
    image-rendering: pixelated;
`,jo=n.span`
    font-size: 1rem;
    line-height: 1.2;
    word-break: break-word;
`,Te=n.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 1rem;
`,Ye=n.img`
    width: 100%;
    max-width: 100%; /* Responsive image */
    height: auto;
    border: 2px solid ${({theme:t})=>t.borderDark};
    align-self: center;
`,wo=({onNavigate:t})=>{const[o,r]=i.useState(null),[l,a]=i.useState(window.innerWidth<=768),[p,d]=i.useState(400),c=i.useRef(null);oe.useEffect(()=>{const g=()=>a(window.innerWidth<=768);return window.addEventListener("resize",g),()=>window.removeEventListener("resize",g)},[]),oe.useEffect(()=>{if(o&&c.current){const g=()=>{const k=c.current.offsetHeight;d(Math.max(400,k+150))};g();const f=new ResizeObserver(g);return f.observe(c.current),()=>f.disconnect()}else d(400)},[o]),oe.useEffect(()=>(o&&l?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[o,l]);const s=[{id:1,name:"Hangul Hangover",icon:"https://win98icons.alexmeub.com/icons/png/console_prompt-0.png"},{id:2,name:"Legado Digital",icon:"https://win98icons.alexmeub.com/icons/png/executable-0.png"},{id:3,name:"Projeto 3.msi",icon:"https://win98icons.alexmeub.com/icons/png/installer_file_gear-0.png"}],x=g=>{switch(g){case 1:return e.jsxs(Te,{children:[e.jsx("p",{style:{fontWeight:"bold"},children:"Um estudo sobre tipografia e café."}),e.jsx(Ye,{src:"https://placehold.co/600x400/png?text=Hangul+Foto+1",alt:"Hangul Preview"}),e.jsx("p",{children:"Hangul Hangover é um projeto que explora a intersecção entre a estética do alfabeto coreano e a cultura do café noturno. Desenvolvido com foco em legibilidade e atmosfera."}),e.jsx(Ye,{src:"https://placehold.co/600x400/png?text=Hangul+Foto+2",alt:"Hangul Preview 2"}),e.jsx("p",{children:"Mais detalhes sobre o processo criativo, ferramentas utilizadas e o resultado final. A tipografia foi desenhada para funcionar bem em ambientes com pouca luz, lembrando displays CRT antigos."})]});case 2:return e.jsxs(Te,{children:[e.jsx("p",{children:"Arquivos preservados do passado. Estes são backups estáticos dos meus perfis no Orkut e Twitter."}),e.jsx("p",{children:"Navegue como se estivesse anos atrás."}),e.jsxs("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:[e.jsx(G,{onClick:()=>t("orkut"),size:"lg",style:{fontWeight:"bold"},children:"Acessar Orkut (2014)"}),e.jsx(G,{onClick:()=>t("twitter"),size:"lg",style:{fontWeight:"bold"},children:"Acessar Twitter"}),e.jsx(G,{onClick:()=>t("instagram"),size:"lg",style:{fontWeight:"bold"},children:"Acessar Instagram"})]})]});case 3:return e.jsx(Te,{children:e.jsx("p",{children:"Detalhes do Projeto 3 virão em breve."})});default:return e.jsx("p",{children:"Conteúdo em desenvolvimento..."})}},h=g=>{const f=s.find(k=>k.id===g);return f?f.name:"Projeto"};return e.jsxs("div",{style:{position:"relative",width:"100%",minHeight:`${p}px`,display:"flex",flexDirection:"column",alignItems:"center",transition:"min-height 0.3s ease"},children:[e.jsx(bo,{children:s.map(g=>e.jsxs(yo,{onClick:()=>r(g.id),children:[e.jsx(vo,{src:g.icon,alt:g.name}),e.jsx(jo,{children:g.name})]},g.id))}),o&&(l?e.jsx("div",{style:{position:"fixed",top:"40px",left:0,width:"100vw",height:"calc(100vh - 40px)",zIndex:2e3,display:"flex",alignItems:"flex-start",justifyContent:"center",overflowY:"auto",WebkitOverflowScrolling:"touch",paddingBottom:"150px"},onClick:g=>{g.target===g.currentTarget&&r(null)},children:e.jsx(pe,{id:`project-${o}`,title:h(o),onClose:()=>r(null),onFocus:()=>{},isMobile:!0,style:{width:"90%",maxWidth:"600px",marginTop:"20px",marginBottom:"20px",position:"relative"},windowStyle:{width:"100%",display:"flex",flexDirection:"column"},children:e.jsx("div",{style:{padding:0,display:"flex",flexDirection:"column"},children:x(o)})})}):e.jsx(pe,{id:`project-${o}`,title:h(o),onClose:()=>r(null),onFocus:()=>{},isMobile:!1,style:{position:"absolute",zIndex:1e3,top:"0px",left:"15vw",width:"100vw",minWidth:"320px",maxWidth:"1000px"},windowStyle:{width:"100%",maxWidth:"100%"},children:e.jsx("div",{ref:c,style:{padding:0,height:"100%",display:"flex",flexDirection:"column"},children:x(o)})}))]})},$e=new Map,fe=async t=>{if(!Ge||!t)return"";if(t.startsWith("http"))return t;let o=t;if(o.startsWith("/src/data/")?o=o.replace("/src/data/",""):o.startsWith("src/data/")&&(o=o.replace("src/data/","")),o.startsWith("/")&&(o=o.substring(1)),$e.has(o))return $e.get(o);try{const r=nn(Ge,o),l=await on(r);return $e.set(o,l),l}catch(r){return console.error(`[StorageLoader] Error fetching URL for ${o}:`,r.message,r),""}},Y=async t=>{const o=await fe(t);if(!o)return null;try{const r=await fetch(o);if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);return await r.json()}catch(r){return console.error(`[StorageLoader] Error fetching JSON ${t}:`,r.message),r.name==="TypeError"&&r.message==="Load failed"&&console.error("This looks like a CORS error (Access-Control-Allow-Origin missing) or network failure."),null}},le=t=>{if(!t)return"";if(t.startsWith("http"))return t;let o=t;return o.startsWith("/src/data/")?o=o.replace("/src/data/",""):o.startsWith("src/data/")&&(o=o.replace("src/data/","")),o.startsWith("/")&&(o=o.substring(1)),o.startsWith("tweets_media/")||o.startsWith("profile_media/")?`twitter/data/${o}`:o},ko=async t=>Y(`twitter/chunks/chunk_${t}.json`),ze=n.div`
  width: 100%;
  height: 100%;
  background-color: #262626;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
`,So=n.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${t=>t.$loaded?1:0};
  transition: opacity 0.3s;
`,Co=n.video`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${t=>t.$loaded?1:0};
  transition: opacity 0.3s;
`,F=({path:t,type:o="image",alt:r,className:l,controls:a,autoPlay:p,loop:d,muted:c,...s})=>{const[x,h]=i.useState(""),[g,f]=i.useState(!0),[k,w]=i.useState(!1);i.useEffect(()=>{let b=!0;return t&&(async()=>{f(!0),w(!1);try{const T=await fe(t);b&&(T?h(T):w(!0))}catch(T){console.error("Error loading media:",t,T),b&&w(!0)}})(),()=>{b=!1}},[t]);const j=()=>f(!1),I=()=>{f(!1),w(!0)};return t?k&&!x?e.jsx(ze,{className:l,children:"Erro"}):e.jsxs(e.Fragment,{children:[g&&e.jsx(ze,{className:l}),o==="video"?e.jsx(Co,{src:x,className:l,$loaded:!g,onLoadedData:j,onError:I,controls:a,autoPlay:p,loop:d,muted:c,playsInline:!0,...s}):e.jsx(So,{src:x,alt:r||"Media",className:l,$loaded:!g,onLoad:j,onError:I,...s})]}):e.jsx(ze,{className:l})},Io=n.div`
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  background-color: rgb(0, 132, 180);
  margin: 0;
  padding: 0;
  font-size: 14px;
  color: #333;
  min-height: 100vh;
  min-height: 100dvh;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  
  *, *::before, *::after {
    box-sizing: border-box;
  }

  a {
    color: #0084B4;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`,To=n.div`
  width: 100%;
  max-width: 865px;
  margin: 20px auto;
  display: flex;
  gap: 12px;
  align-items: flex-start; /* Important for sticky behavior if needed, but here simple flex */
  
  @media (max-width: 600px) {
    flex-direction: column;
    margin-top: 20px;
    padding: 0 10px; /* Add some padding on mobile */
  }
`,$o=n.div`
  width: 302px;
  flex-shrink: 0;
  position: sticky;
  top: 60px; /* 40px navbar + 20px margin */
  z-index: 10;

  @media (max-width: 600px) {
    width: 100%;
    position: static;
    z-index: 1;
  }
`,zo=n.div`
  background: #fff;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 12px;
  position: relative;
`,Eo=n.div`
  background-color: #0084B4;
  background-image: url(${t=>t.$bg});
  background-size: cover;
  background-position: center;
  height: 95px;
  width: 100%;
`,_o=n.div`
  padding: 12px;
`,Po=n.div`
  margin-top: -30px;
  margin-bottom: 10px;
  height: 72px;
  width: 72px;
  border: 4px solid #fff;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,Mo=n.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 1.2;
  color: #292f33;
`,Lo=n.div`
  font-size: 12px;
  color: #8899a6;
  margin-bottom: 10px;
`,Ao=n.div`
  font-size: 14px;
  margin-bottom: 10px;
`,Je=n.div`
  font-size: 12px;
  color: #8899a6;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 5px;
`,Ro=n.div`
  border-top: 1px solid #e1e8ed;
  margin-top: 12px;
  padding-top: 12px;
  display: flex;
  width: 100%;
`,Ze=n.div`
  /* flex: 1; removed to align left */
  margin-right: 20px; /* Add spacing between items */
  font-size: 10px;
  color: #8899a6;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #0084B4;
    
    span {
      color: #0084B4;
    }
  }
`,Qe=n.span`
  display: block;
  font-size: 18px;
  color: #0084B4;
  font-weight: bold;
  margin-top: 2px;
`,Do=n.div`
  width: 600px;
  flex: 1;
  background: #fff;
  border-radius: 6px;
  min-height: 500px;
  overflow: hidden;

  @media (max-width: 600px) {
    width: 100%;
    /* border-radius: 0; removed to keep rounded corners */
  }
`;n.div`
  padding: 10px 15px;
  border-bottom: 1px solid #e1e8ed;
  
  h2 {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
    color: #292f33;
  }
`;n.div`
  display: flex;
  gap: 20px;
`;n.div`
  font-size: 18px;
  font-weight: bold;
  color: ${t=>t.$active?"#292f33":"#8899a6"};
  cursor: pointer;
  
  &:hover {
    color: #0084B4;
    text-decoration: ${t=>t.$active?"none":"underline"};
  }
`;const Oo=n.div`
  /* padding: 0; */
`,Wo=n.div`
  padding: 12px 15px;
  border-bottom: 1px solid #e1e8ed;
  display: flex;
  gap: 10px;
  transition: background-color 0.1s;
  
  &:hover {
    background-color: #f5f8fa;
  }
`,Bo=n.div`
  width: 48px;
  height: 48px;
  border-radius: 5px;
  flex-shrink: 0;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    object-fit: cover;
  }
`,Fo=n.div`
  flex: 1;
  min-width: 0;
`,Ho=n.div`
  margin-bottom: 2px;
`,No=n.span`
  font-weight: bold;
  color: #292f33;
  margin-right: 5px;
`,Uo=n.span`
  color: #8899a6;
  font-size: 13px;
  margin-right: 5px;
`,Go=n.span`
  color: #8899a6;
  font-size: 13px;
  
  &::before {
    content: "·";
    margin: 0 3px;
  }
`,Vo=n.div`
  font-size: 14px;
  line-height: 18px;
  color: #292f33;
  white-space: pre-wrap;
  margin-bottom: 10px;
`,Ko=n.div`
  margin-top: 10px;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.1);
  
  ${t=>t.$isGrid&&`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2px;
  `}

  img, video {
    display: block;
    max-width: 100%;
    width: 100%;
    
    ${t=>t.$isGrid?`
      height: 100%;
      object-fit: cover;
    `:`
      height: auto;
    `}
  }
`,Xo=n.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columns as requested */
  gap: 5px;
  padding: 10px;
`,qo=n.div`
  aspect-ratio: 1; /* Square format */
  overflow: hidden;
  border-radius: 4px;
  background-color: #f5f8fa;
  position: relative;
  
  img, video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`,Yo=n.div`
  padding: 20px;
  text-align: center;
  color: #8899a6;
`,Jo=n.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  height: 100dvh; /* Dynamic viewport height for iOS */
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3000;
  padding: 0; /* Remove padding to maximize space */
  box-sizing: border-box;
`,Zo=`
  @keyframes slideInRight {
    from { transform: translateX(50px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
`,Qo=`
  @keyframes slideInLeft {
    from { transform: translateX(-50px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
`,ei=n.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  animation: ${t=>t.direction==="next"?"slideInRight":"slideInLeft"} 0.3s ease-out;
  ${Zo}
  ${Qo}
`,ti=n.div`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  max-height: 100dvh;
`,ni=n(F)`
  max-width: 100vw;
  max-height: 100dvh;
  width: auto;
  height: auto;
  object-fit: contain;
  box-shadow: 0 0 20px rgba(0,0,0,0.5);
  cursor: default;
  /* Ensure it doesn't block clicks to background if it doesn't fill */
  pointer-events: auto; 
  display: block; /* Remove inline spacing */
`,oi=n.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.6) 80%, transparent 100%);
  padding: 20px;
  padding-bottom: max(20px, env(safe-area-inset-bottom)); /* iOS safe area */
  color: #fff;
  opacity: ${t=>t.$visible?1:0};
  transition: opacity 0.3s ease;
  pointer-events: ${t=>t.$visible?"auto":"none"};
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
  z-index: 3002;

  @media (max-width: 600px) {
    padding: 15px;
    padding-bottom: max(15px, env(safe-area-inset-bottom));
  }
`;n.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;n.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  flex-shrink: 0;
  overflow: hidden;
  img { width: 100%; height: 100%; object-fit: cover; }
`;n.div`
  flex: 1;
  min-width: 0;
`;n.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;
`;n.span`
  font-weight: bold;
  font-size: 15px;
  color: #fff;
`;const ii=n.div`
  color: #8899a6;
  font-size: 13px;
  margin-top: 10px;
  border-top: 1px solid #38444d;
  padding-top: 8px;
`,ri=n.div`
  font-size: 15px;
  line-height: 1.5;
  color: #fff;
  white-space: pre-wrap;
`,si=n.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 30px;
  cursor: pointer;
  padding: 10px;
  line-height: 1;
  z-index: 3001;
  
  &:hover {
    opacity: 0.8;
  }
`,ai=`
  @keyframes shimmer {
    0% { background-position: -200px 0; }
    100% { background-position: 200px 0; }
  }
`,He=n.div`
  background: linear-gradient(90deg, #e8e8e8 0px, #f5f5f5 50px, #e8e8e8 100px);
  background-size: 200px 100%;
  animation: shimmer 1.2s infinite linear;
  ${ai}
`,li=n.div`
  padding: 12px;
  display: flex;
  gap: 12px;
  border-bottom: 1px solid #e1e8ed;
`,di=n(He)`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  flex-shrink: 0;
`,ci=n.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Ee=n(He)`
  height: ${t=>t.height||"14px"};
  width: ${t=>t.width||"100%"};
  border-radius: 4px;
`,pi=n(He)`
  height: 180px;
  border-radius: 12px;
  margin-top: 8px;
`,xi=()=>e.jsx(e.Fragment,{children:[...Array(5)].map((t,o)=>e.jsxs(li,{children:[e.jsx(di,{}),e.jsxs(ci,{children:[e.jsx(Ee,{width:"40%",height:"16px"}),e.jsx(Ee,{width:"80%"}),e.jsx(Ee,{width:"60%"}),o%2===0&&e.jsx(pi,{})]})]},o))}),hi=()=>{const t=le("/src/data/twitter/data/profile_media/125515755-hxB9hFTM.png"),o=le("/src/data/twitter/data/profile_media/125515755-1596834705.jpg"),[r,l]=i.useState("");i.useEffect(()=>{fe(o).then(l)},[o]);const[a,p]=i.useState([]),[d,c]=i.useState([]),[s,x]=i.useState(!0),[h,g]=i.useState(null),[f,k]=i.useState(0),[w,j]=i.useState("tweets"),[I,b]=i.useState(null),[y,T]=i.useState("next"),[m,P]=i.useState(null),[O,H]=i.useState(60),M=i.useRef(null),L=i.useRef(null),R=i.useRef(!1),$=20,W=60,U=(u,S=!1)=>{if(!u)return"";const A=new Date(u),D=A.toLocaleDateString("pt-BR",{day:"numeric",month:"short",year:"numeric"}).replace(/ de /g," ");return S?`${A.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"})} · ${D} `:D},[C,z]=i.useState(!0),_=i.useRef(null),v=()=>{z(!0),_.current&&clearTimeout(_.current),_.current=setTimeout(()=>{z(!1)},3e3)},E=()=>{v()},B=()=>{_.current&&clearTimeout(_.current),z(!1)},K=u=>{if(u.stopPropagation(),u.target===u.currentTarget){ae();return}const S=u.target.tagName;(S==="IMG"||S==="VIDEO")&&(z(A=>!A),C||(_.current&&clearTimeout(_.current),_.current=setTimeout(()=>{z(!1)},3e3)))},N=u=>{let S=u.text;return S=S.replace(/https:\/\/t\.co\/\w+/g,""),S.trim()},ne=(u,S)=>u.filename?le(`tweets_media/${S}-${u.filename}`):"",ie=(u,S)=>{if(!u.filename)return"";if(u.type==="video"||u.type==="animated_gif"){const A=u.filename.substring(0,u.filename.lastIndexOf("."))||u.filename;return le(`tweets_media/thumbs/${S}-${A}.jpg`)}return le(`tweets_media/medium/${S}-${u.filename}`)},ge=(u,S)=>u.filename?u.type==="video"||u.type==="animated_gif"?ne(u,S):le(`tweets_media/medium/${S}-${u.filename}`):"",Z=oe.useMemo(()=>a.flatMap(u=>{if(!u.media||u.media.length===0)return[];const S=N(u),A=U(u.date,!0);return u.media.map(D=>{const te=ne(D,u.id),Q=ie(D,u.id),se=ge(D,u.id);return{...D,tweetId:u.id,date:A,text:S,localPath:te,thumbPath:Q,mediumPath:se}})}),[a]),q=oe.useMemo(()=>Z.filter(u=>u.mediumPath||u.localPath),[Z]),xe=u=>{const S=q.findIndex(A=>A.mediumPath===u);S!==-1&&(b(S),z(!0),v())},ae=()=>{b(null),_.current&&clearTimeout(_.current)};i.useEffect(()=>{const u=S=>{I!==null&&(S.key==="Escape"?ae():S.key==="ArrowRight"?(T("next"),b(A=>(A+1)%q.length)):S.key==="ArrowLeft"&&(T("prev"),b(A=>(A-1+q.length)%q.length)))};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[I,q]);const Se=u=>{P(u.targetTouches[0].clientX)},$t=u=>{if(m===null)return;const S=u.changedTouches[0].clientX,A=m-S;A>50?(T("next"),b(D=>(D+1)%q.length)):A<-50&&(T("prev"),b(D=>(D-1+q.length)%q.length)),P(null)};i.useEffect(()=>(I!==null?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[I]);const Ce=async u=>{if(R.current)return!1;R.current=!0,console.log(`Loading chunk ${u}...`);try{const S=await ko(u);return S&&S.length>0?(p(A=>{const D=new Set(A.map(Q=>Q.id)),te=S.filter(Q=>!D.has(Q.id));return[...A,...te]}),u===0&&(c(S.slice(0,$)),k($)),!0):!1}catch(S){return console.error("Error loading chunk",u,S),!1}finally{R.current=!1}};i.useEffect(()=>{(async()=>(x(!0),await Ce(0),x(!1)))()},[]),i.useEffect(()=>{if(s||w!=="tweets")return;const u=new IntersectionObserver(S=>{S[0].isIntersecting&&zt()},{rootMargin:"400px"});return M.current&&u.observe(M.current),()=>{M.current&&u.unobserve(M.current)}},[s,a,f,w]);const[Ie,Ne]=i.useState(0),zt=async()=>{if(f<a.length){const u=Math.min(f+$,a.length);c(S=>[...S,...a.slice(f,u)]),k(u)}else{const u=Ie+1;await Ce(u)&&Ne(u)}};i.useEffect(()=>{if(a.length>d.length&&f===d.length&&!s){const u=Math.min(f+$,a.length);c(S=>[...S,...a.slice(f,u)]),k(u)}},[a.length]),i.useEffect(()=>{if(s||w!=="media")return;const u=new IntersectionObserver(S=>{if(S[0].isIntersecting)if(O<Z.length)H(A=>Math.min(A+W,Z.length));else{const A=Ie+1;Ce(A).then(D=>{D&&Ne(A)})}},{rootMargin:"600px"});return L.current&&u.observe(L.current),()=>{L.current&&u.unobserve(L.current)}},[s,w,O,Z.length,Ie]),i.useEffect(()=>{if(s||a.length===0)return;const u=f,S=Math.min(f+$*2,a.length);a.slice(u,S).forEach(D=>{D.media&&D.media.length>0&&D.media.forEach(te=>{if(te.type!=="video"&&te.type!=="animated_gif"){const Q=ie(te,D.id);Q&&fe(Q).then(se=>{if(se){const me=new Image;me.src=se}})}})})},[f,a,s]);const Et=u=>{if(!u.media||u.media.length===0)return null;const S=u.media,A=S.length>1;return e.jsx(Ko,{$isGrid:A,children:S.map((D,te)=>{const Q=D.type==="video"||D.type==="animated_gif",se=ne(D,u.id),me=ie(D,u.id),_t=ge(D,u.id);return Q&&!se||!Q&&!me?null:Q?e.jsx(F,{path:se,type:"video",controls:!0,preload:"none"},te):e.jsx(F,{path:me,alt:"Tweet media",loading:"lazy",style:{cursor:"pointer"},onClick:()=>xe(_t)},te)})})},re=I!==null?q[I]:null;return h?e.jsx("div",{style:{color:"white",padding:20,textAlign:"center"},children:h}):e.jsxs(Io,{children:[e.jsxs(To,{children:[e.jsx($o,{children:e.jsxs(zo,{children:[e.jsx(Eo,{$bg:r}),e.jsxs(_o,{children:[e.jsx(Po,{children:e.jsx(F,{path:t,alt:"Avatar"})}),e.jsx(Mo,{children:"matheus"}),e.jsx(Lo,{children:"@matheusdanoite"}),e.jsx(Ao,{children:"desventuras em série"}),e.jsx(Je,{children:"Guarapuava, PR"}),e.jsx(Je,{children:"Criado em 22 de março de 2010"}),e.jsxs(Ro,{children:[e.jsxs(Ze,{onClick:()=>j("tweets"),children:["Tweets",e.jsx(Qe,{children:"26.014"})]}),e.jsxs(Ze,{onClick:()=>j("media"),children:["Mídia",e.jsx(Qe,{children:"3.353"})]})]})]})]})}),e.jsxs(Do,{children:[w==="tweets"&&e.jsxs(Oo,{children:[s&&e.jsx(xi,{}),!s&&d.map((u,S)=>{U(u.date);const A=N(u);return a.findIndex(D=>D.id===u.id),e.jsxs(Wo,{children:[e.jsx(Bo,{children:e.jsx(F,{path:t,alt:"Avatar"})}),e.jsxs(Fo,{children:[e.jsxs(Ho,{children:[e.jsx(No,{children:"matheus"}),e.jsx(Uo,{children:"@matheusdanoite"}),e.jsx(Go,{children:U(u.date,!0)})]}),e.jsx(Vo,{children:A}),Et(u)]})]},u.id||S)}),!s&&f<a.length&&e.jsx(Yo,{ref:M,children:"Carregando mais..."})]}),w==="media"&&e.jsxs(Xo,{children:[Z.slice(0,O).map((u,S)=>{if(!u.thumbPath)return null;const A=u.type==="video"||u.type==="animated_gif";return e.jsxs(qo,{children:[e.jsx(F,{path:u.thumbPath,type:u.type,alt:"Media",loading:"lazy",style:{cursor:"pointer"},onClick:()=>xe(u.mediumPath)}),A&&e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"white",backgroundColor:"rgba(0,0,0,0.5)",borderRadius:"50%",padding:"10px"},children:"▶"})]},S)}),e.jsx("div",{ref:L,style:{gridColumn:"1 / -1",padding:"20px",textAlign:"center",color:"#999",fontSize:"11px"},children:O<Z.length?"carregando mais mídia...":"carregando mais tweets..."})]})]})]}),re&&e.jsxs(Jo,{onClick:ae,onTouchStart:Se,onTouchEnd:$t,onMouseMove:E,onMouseLeave:B,children:[e.jsx(si,{onClick:ae,children:"×"}),e.jsx(ei,{direction:y,onClick:K,children:e.jsxs(ti,{children:[re.type==="video"||re.type==="animated_gif"?e.jsx(F,{path:re.mediumPath,type:"video",controls:!0,autoPlay:!0,style:{maxWidth:"100vw",maxHeight:"100dvh",width:"auto",height:"auto",boxShadow:"0 0 20px rgba(0,0,0,0.5)",display:"block"}}):e.jsx(ni,{path:re.mediumPath,alt:"Full view"}),e.jsxs(oi,{$visible:C,children:[e.jsx(ri,{children:re.text}),e.jsx(ii,{children:re.date})]})]})},I)]})]})},et=n.div`
  background-color: #000;
  min-height: 100vh;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`,ui=n.div`
  width: 100%;
  max-width: 935px; /* Instagram web max width */
  padding: 30px 20px 0;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 736px) {
    padding: 0;
    width: 100%;
  }
`,fi=n.header`
  display: flex;
  margin-bottom: 20px;
  align-items: center; /* Vertically center content with profile pic */
  
  @media (max-width: 736px) {
    padding: 14px;
    margin-bottom: 0;
    border-bottom: 1px solid #262626;
  }
`,gi=n.div`
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 30px;
  display: flex;
  justify-content: center;
  
  @media (max-width: 736px) {
    flex-grow: 0;
    margin-right: 20px;
  }
`,mi=n(F)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #363636;
  
  @media (max-width: 736px) {
    width: 77px;
    height: 77px;
  }
`,bi=n.section`
  flex-grow: 2;
  flex-basis: 30px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Ensure content is centered if height matches image */
  
   @media (max-width: 736px) {
     flex-grow: 1;
   }
`,yi=n.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  flex-wrap: wrap;
  gap: 20px;
  
  h2 {
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
    margin: 0;
  }
`,vi=n.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0 0 12px;
  font-size: 14px;
  
  li {
    margin-right: 20px;
  }
  
  strong {
    font-weight: 600;
  }
  
  @media (max-width: 736px) {
     display: none;
  }
`,ji=n.div`
  font-size: 14px;
  margin-bottom: 12px;
  
  h1 {
    font-weight: 400;
    font-size: 14px;
    margin: 0;
  }
`,wi=n.div`
  font-size: 14px;
  white-space: normal;
  line-height: 18px;
  color: #fff;
`,ki=n.div`
  border-top: 1px solid #262626;
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-bottom: 5px; /* small gap before grid */
  
  @media (max-width: 736px) {
    gap: 20px;
    justify-content: space-around;
  }
`,_e=n.div`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 52px;
  cursor: pointer;
  color: ${t=>t.$active?"#fff":"#8e8e8e"};
  border-top: 1px solid ${t=>t.$active?"#fff":"transparent"};
  margin-top: -1px; /* Overlap border */
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  
  &:hover {
    color: #fff;
  }
  
  span {
    display: block;
  }
  
  @media (max-width: 736px) {
     span { display: none; } /* often hide text on mobile or just show icons */
  }
`,Si=()=>e.jsxs("svg",{"aria-label":"",color:"currentColor",fill:"currentColor",height:"24",role:"img",viewBox:"0 0 24 24",width:"24",children:[e.jsx("rect",{fill:"none",height:"18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",width:"18",x:"3",y:"3"}),e.jsx("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",x1:"9.015",x2:"9.015",y1:"3",y2:"21"}),e.jsx("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",x1:"14.985",x2:"14.985",y1:"3",y2:"21"}),e.jsx("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",x1:"21",x2:"3",y1:"9.015",y2:"9.015"}),e.jsx("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",x1:"21",x2:"3",y1:"14.985",y2:"14.985"})]}),Ci=()=>e.jsxs("svg",{"aria-label":"",color:"currentColor",fill:"currentColor",height:"24",role:"img",viewBox:"0 0 24 24",width:"24",children:[e.jsx("line",{fill:"none",stroke:"currentColor",strokeLinejoin:"round",strokeWidth:"2",x1:"2.049",x2:"21.95",y1:"7.002",y2:"7.002"}),e.jsx("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",x1:"13.504",x2:"16.362",y1:"2.001",y2:"7.002"}),e.jsx("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",x1:"7.207",x2:"10.002",y1:"2.11",y2:"7.002"}),e.jsx("path",{d:"M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"})]}),Ii=()=>e.jsxs("svg",{"aria-label":"",color:"currentColor",fill:"currentColor",height:"24",role:"img",viewBox:"0 0 24 24",width:"24",children:[e.jsx("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",x1:"21",x2:"3",y1:"10",y2:"10"}),e.jsx("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",x1:"21",x2:"3",y1:"6",y2:"6"}),e.jsx("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",x1:"21",x2:"3",y1:"14",y2:"14"}),e.jsx("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",x1:"21",x2:"3",y1:"18",y2:"18"})]}),Ti=n.div`
  display: flex;
  padding: 20px 0;
  overflow-x: auto;
  gap: 30px;
  margin-bottom: 20px;
  
  /* Hide scrollbar */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  
  @media (max-width: 736px) {
      padding: 10px;
  }
`,$i=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  min-width: 85px; /* Ensure space for ring (77px) + padding/border without cutting */
  padding: 5px; /* Add padding to item to prevent hover effects or rings from touching edges */
`,zi=n.div`
  width: 77px;
  height: 77px;
  border-radius: 50%;
  padding: 3px;
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`,Ei=n(F)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid #000;
  object-fit: cover;
`,_i=n.span`
  font-size: 12px;
  color: #fff;
  text-align: center;
  max-width: 80px;
  line-height: 1.2;
`,Pi=n.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px; /* classic instagram gap usually small */
  padding-bottom: 50px;
  width: 100%;
`,Mi=n.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%; /* Square Aspect Ratio */
  background-color: #262626;
  cursor: pointer;
  overflow: hidden;
  
  img, video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.2s;
  }
  
  &:hover img {
    opacity: 0.8;
  }

  /* Multi-post indicator icon could go here */
`,Li=n.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns like grid */
  gap: 4px;
  padding-bottom: 50px;
  width: 100%;
`,Ai=n.div`
  position: relative;
  width: 100%;
  padding-bottom: 177%; /* ~9:16 Aspect Ratio (16/9 = 1.777) */
  background-color: #262626;
  cursor: pointer;
  overflow: hidden;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  /* Icon indicating it's a reel? */
`,Ri=n.div`
    width: 100%;
    max-width: 470px;
    margin: 0 auto;
    padding-top: 20px;
`,Di=n.div`
  background: #000;
  border: 1px solid #262626;
  border-radius: 8px;
  margin-bottom: 24px;
  color: #fff;
`,Oi=n.div`
  display: flex;
  align-items: center;
  padding: 14px;
`,yt=n.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  padding: 3px;
  background: ${t=>t.$hasStories?"linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)":"transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  cursor: ${t=>t.$hasStories?"pointer":"default"};
`,vt=n(F)`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: ${t=>t.$hasStories?"2px solid #000":"none"};
    object-fit: cover;
`,Wi=n.div`
  width: 100%;
  position: relative;
  background-color: #000;
  min-height: 300px;
  overflow: hidden;

  &:hover button {
    opacity: 1;
  }
`,jt=n.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${t=>-(t.$index*100)}%);
  width: 100%;
  height: 100%;
`,wt=n.div`
  min-width: 100%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* img, video selector removed from styled component to allow FirebaseMedia */
  /* We will style FirebaseMedia via props or nested styles if needed */
  & > * {
    width: 100%;
    display: block;
    max-height: 600px; 
    object-fit: contain;
  }
`,Bi=n.div`
  padding: 12px 14px;
`;n.button`
    background: transparent;
    border: none;
    color: #fff;
    font-size: 16px;
    padding: 10px;
    cursor: pointer;
    align-self: flex-start;
    
    &:before {
        content: '← ';
    }
`;const Fi=n.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.85); /* Synced with ModalOverlay */
  z-index: 6000;
  display: flex;
  align-items: center;
  justify-content: center;
`;n.div`
  position: absolute;
  top: 15px;
  right: 15px;
  color: white;
  font-size: 24px;
  z-index: 20;
  cursor: pointer;
  font-weight: bold;
`;const Hi=n.div`
  position: absolute;
  top: 10px;
  left: 0;
  width: 100%;
  padding: 0 5px;
  display: flex;
  gap: 3px;
  z-index: 10;
`,Ni=n.div`
  height: 2px;
  flex: 1;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  overflow: hidden;
  position: relative;
  
  div {
    height: 100%;
    background: #fff;
    transition: width 0.1s linear;
  }
`,Ui=n.div`
  width: 100%;
  height: 100%;
  img, video {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`,tt=n.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 50%;
  z-index: 5;
  cursor: pointer;
  ${t=>t.$left?"left: 0;":"right: 0;"}
`,Gi=n.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120px;
  background: linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 100%);
  z-index: 10;
  pointer-events: none;
`,Vi=n.div`
  position: absolute;
  top: 20px;
  left: 0;
  width: 100%;
  padding: 0 16px;
  display: flex;
  align-items: center;
  z-index: 20;
  color: #fff;
`,Ki=n(F)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`,Xi=n.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`,qi=n.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`,Yi=n.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 2px;
`,Ji=n.div`
  cursor: pointer;
  padding: 8px;
  margin-right: -8px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    filter: drop-shadow(0 0 2px rgba(0,0,0,0.5));
  }
`,nt=n.button`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 60px;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 15;
  opacity: ${t=>t.$visible?1:0};
  transition: opacity 0.3s ease-in-out;
  ${t=>t.$left?"left: 0;":"right: 0;"}
  
  &:after {
    content: '${t=>t.$left?"<":">"}';
    background: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    font-weight: bold;
    font-family: Arial, sans-serif;
    font-size: 14px;
    box-shadow: 0 0 5px rgba(0,0,0,0.3);
  }

  &:hover:after {
    background: #fff;
  }
`,Zi=n.div`
  width: 100%;
  max-width: 400px;
  height: 100vh;
  position: relative;
  overflow: hidden;
`,Qi=n.div`
  display: flex;
  width: 100%;
  height: 100%;
  transition: ${t=>t.$animating?"transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)":"none"};
  transform: translateX(${t=>-(t.$offset*100)}%);
`,ot=n.div`
  min-width: 100%;
  width: 100%;
  height: 100%;
  position: relative;
  background: transparent;
  display: flex;
  justify-content: center;
`,er=n.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: transparent;
  display: flex;
  justify-content: center;
`,tr=n.div`
  position: relative;
  height: 100%;
  aspect-ratio: 9/16;
  background: #000;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,nr=t=>t,or=t=>{const o=new Date(t),l=(new Date-o)/1e3;return l<60?"Agora":l<3600?`${Math.floor(l/60)} min`:l<86400?`${Math.floor(l/3600)} h`:l<604800?`${Math.floor(l/86400)} d`:o.toLocaleDateString("pt-BR",{day:"numeric",month:"short",year:"numeric"})},Be=t=>{if(!t)return"";const o=document.createElement("textarea");return o.innerHTML=t,o.value},ir=({initialDate:t,storyDates:o,stories:r,onClose:l,profilePic:a,singleDayMode:p=!1})=>{const[d,c]=i.useState(o.indexOf(t)),[s,x]=i.useState(0),[h,g]=i.useState(!1),[f,k]=i.useState(o.indexOf(t)),[w,j]=i.useState(null),[I,b]=i.useState(!0),[y,T]=i.useState(0),[m,P]=i.useState(""),O=i.useRef(null);i.useRef(null);const H=i.useRef(null);i.useEffect(()=>{R&&R.uri?fe(R.uri).then(v=>P(v)):P("")},[R]);const M=o[d],L=[...r[M]||[]].sort((v,E)=>new Date(v.date)-new Date(E.date)),R=L[s],$=oe.useCallback((v,E)=>{h||(j(v),g(!0),k(v),setTimeout(()=>{c(v),x(E==="next"?0:r[o[v]].length-1),g(!1),j(null)},400))},[h,r,o]),W=oe.useCallback(()=>{h||(s<L.length-1?(x(v=>v+1),T(0)):!p&&d<o.length-1?$(d+1,"next"):l())},[h,s,L.length,d,o,$,l,p]),U=oe.useCallback(()=>{h||(s>0?(x(v=>v-1),T(0)):!p&&d>0&&$(d-1,"prev"))},[h,s,d,$,p]),C=()=>{b(!0),O.current&&clearTimeout(O.current),O.current=setTimeout(()=>{b(!1)},3e3)};i.useEffect(()=>(C(),()=>{O.current&&clearTimeout(O.current)}),[s,d]),i.useEffect(()=>{const v=E=>{E.key==="ArrowRight"&&W(),E.key==="ArrowLeft"&&U(),E.key==="Escape"&&l()};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[W,U,l]),i.useEffect(()=>{if(h||!R||!M||(T(0),R.type==="video"))return;const v=5e3,E=50,B=E/v*100;let K=0;const N=setInterval(()=>{K+=B,K>=100?(clearInterval(N),T(100),W()):T(K)},E);return()=>clearInterval(N)},[h,R?.date,M,W]);const z=()=>{if(H.current){const v=H.current.currentTime/H.current.duration*100;T(v)}};if(!R)return null;const _=(v,E,B=!1)=>{const K=[...r[E]||[]].sort((Z,q)=>new Date(Z.date)-new Date(q.date)),N=K[v]||K[0];if(!N)return null;const ne=new Date(N.date),ie=ne.toLocaleDateString("pt-BR",{day:"2-digit",month:"short",year:"numeric",timeZone:"UTC"}),ge=ne.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit",timeZone:"UTC"});return e.jsx(er,{children:e.jsxs(tr,{children:[e.jsx(Gi,{}),e.jsxs(Vi,{children:[e.jsx(Ki,{path:a}),e.jsxs(Xi,{children:[e.jsx(qi,{children:"matheusdodia"}),e.jsxs(Yi,{children:[ie," • ",ge]})]}),e.jsx(Ji,{onClick:l,children:e.jsxs("svg",{"aria-label":"Fechar",color:"#ffffff",fill:"#ffffff",height:"18",role:"img",viewBox:"0 0 24 24",width:"18",children:[e.jsx("polyline",{fill:"none",points:"20.643 3.357 12 12 3.353 20.647",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3"}),e.jsx("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3",x1:"20.649",x2:"3.354",y1:"20.649",y2:"3.354"})]})})]}),e.jsx(Hi,{children:K.map((Z,q)=>{const xe=!h&&q===v&&E===M,ae=B?!(w>d):E===M?q<v:w>d,Se=xe?y:ae?100:0;return e.jsx(Ni,{children:e.jsx("div",{style:{width:`${Se}%`,transition:xe&&N.type==="image"?"width 0.1s linear":"none"}})},q)})}),e.jsx(Ui,{onMouseMove:C,children:R.type==="video"?e.jsx("video",{ref:B?null:H,src:m,autoPlay:!0,playsInline:!0,muted:h||B,onTimeUpdate:B?null:z,onEnded:B?null:W,onClick:Z=>Z.stopPropagation()}):e.jsx("img",{src:m,alt:"story",onClick:Z=>Z.stopPropagation()})}),!h&&!B&&e.jsxs(e.Fragment,{children:[e.jsx(nt,{$left:!0,$visible:I,onClick:U,title:"Anterior"}),e.jsx(nt,{$visible:I,onClick:W,title:"Próximo"}),e.jsx(tt,{$left:!0,onClick:U}),e.jsx(tt,{onClick:W})]})]})})};return e.jsx(Fi,{onClick:v=>{v.target===v.currentTarget&&l()},children:e.jsx(Zi,{children:e.jsx(Qi,{$animating:h,$offset:f,children:o.map((v,E)=>{const B=E===d,K=E===w,N=Math.abs(E-d)===1;return!B&&!K&&!N?e.jsx(ot,{},v):e.jsx(ot,{children:_(E===d?s:E<d?r[v].length-1:0,v,!B)},v)})})})})},rr=n.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85); /* Darker overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5000;
  padding: 20px;
`,sr=n.div`
  display: flex;
  width: 100%;
  max-width: 1200px; 
  height: 90vh; 
  max-height: 900px;
  background-color: #000;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0,0,0,0.5);
  
  @media (max-width: 736px) {
    flex-direction: column;
    height: 100%;
    max-height: 100%;
    width: 100%;
    border-radius: 0;
    padding: 0;
  }
`,ar=n.div`
  background-color: transparent;
  display: flex;
  position: relative;
  height: 100%;
  overflow: hidden;
  width: ${t=>t.width?`${t.width}px`:"auto"};
  aspect-ratio: ${t=>t.aspectRatio||"auto"};

  &:hover button {
    opacity: 1;
  }
`;n.img`
  height: 100%;
  width: auto;
  max-width: 100%;
  object-fit: contain;
`;n.video`
  height: 100%;
  width: auto;
  max-width: 100%;
  object-fit: contain;
`;const lr=n.div`
  width: 400px;
  min-width: 400px;
  background-color: #262626; /* User requested gray */
  display: flex;
  flex-direction: column;
  border-left: 1px solid #363636;
  
  @media (max-width: 1000px) {
     width: 350px;
     min-width: 350px;
  }

  @media (max-width: 736px) {
    display: none; /* Mobile view typically pushes new screen or stacks. For now hiding info on mobile modal to keep media focus */
  }
`,dr=n.div`
  padding: 14px 16px;
  border-bottom: 1px solid #363636;
  display: flex;
  align-items: center;
  color: #fff;
  flex-shrink: 0;
  gap: 12px;
`;n.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;const cr=n.span`
  font-weight: 600;
  font-size: 14px;
  color: #fff;
`,pr=n.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  color: #fff;
  font-size: 14px;
    
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #262626;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #555;
    border-radius: 4px;
    border: 2px solid #262626;
  }
`,it=n.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  align-items: flex-start;
`,rt=n.div`
  flex: 1;
  white-space: pre-wrap;
  line-height: 1.4;
  
  span {
    font-weight: 600;
    margin-right: 6px;
  }
`,xr=n.div`
  border-top: 1px solid #363636;
  padding: 16px;
  background-color: #262626;
  flex-shrink: 0;
`;n.div`
  display: flex;
  gap: 16px;
  margin-bottom: 12px;
  svg {
    cursor: pointer;
    &:hover { opacity: 0.7; }
  }
`;const hr=n.div`
  font-size: 12px;
  color: #a8a8a8;
  text-transform: uppercase;
  margin-bottom: 12px;
`,ur=n.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 30px;
  cursor: pointer;
  z-index: 5001;
  padding: 8px;
  line-height: 1;
  
  &:hover {
    opacity: 0.8;
  }
`,ve=n.button`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 60px;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  ${t=>t.$left?"left: 0;":"right: 0;"}
  
  &:after {
    content: '${t=>t.$left?"<":">"}';
    background: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    font-weight: bold;
    font-family: Arial, sans-serif;
    font-size: 14px;
    box-shadow: 0 0 5px rgba(0,0,0,0.3);
    position: absolute;
    ${t=>t.$left?"left: 10px;":"right: 10px;"}
  }

  &:hover:after {
    background: rgba(255, 255, 255, 0.9);
  }
`,fr=({post:t,onClose:o,profilePic:r,stories:l,onProfileClick:a})=>{const[p,d]=i.useState(0),[c,s]=i.useState(null),x=b=>{const{naturalWidth:y,naturalHeight:T}=b.target;y&&T&&s(y/T)};if(i.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[]),!t)return null;t.media[p];const h=t.media.length>1,g=b=>{b.stopPropagation(),p<t.media.length-1&&d(y=>y+1)},f=b=>{b.stopPropagation(),p>0&&d(y=>y-1)};i.useEffect(()=>{const b=y=>{y.key==="ArrowRight"&&d(T=>T<t.media.length-1?T+1:T),y.key==="ArrowLeft"&&d(T=>T>0?T-1:T),y.key==="Escape"&&o()};return window.addEventListener("keydown",b),()=>window.removeEventListener("keydown",b)},[t.media.length,o]);const k=b=>{b.target===b.currentTarget&&o()},w=b=>b?new Date(b).toLocaleDateString("pt-BR",{day:"numeric",month:"long",year:"numeric"}):"",j=t.date.split("T")[0],I=l&&l[j]&&l[j].length>0;return e.jsxs(rr,{onClick:k,children:[e.jsx(ur,{onClick:o,children:"×"}),e.jsxs(sr,{style:{width:"fit-content",backgroundColor:"transparent"},children:[e.jsxs(ar,{aspectRatio:c,children:[h&&e.jsxs(e.Fragment,{children:[p>0&&e.jsx(ve,{$left:!0,onClick:f}),p<t.media.length-1&&e.jsx(ve,{onClick:g})]}),e.jsx(jt,{$index:p,children:t.media.map((b,y)=>e.jsx(wt,{children:e.jsx(F,{path:b.uri,type:b.type,alt:`Post media ${y}`,controls:b.type==="video",autoPlay:b.type==="video"&&y===p,onLoad:y===0?x:void 0,onLoadedMetadata:b.type==="video"&&y===0?x:void 0})},y))})]}),e.jsxs(lr,{children:[e.jsxs(dr,{children:[e.jsx(yt,{$hasStories:I,onClick:()=>I&&a(j),style:{width:"38px",height:"38px",marginRight:"12px"},children:e.jsx(vt,{path:r,$hasStories:I,style:{width:"100%",height:"100%"}})}),e.jsx(cr,{children:"matheusdodia"})]}),e.jsxs(pr,{children:[e.jsx(it,{children:e.jsx(rt,{children:Be(t.description)})}),t.comments&&t.comments.map((b,y)=>e.jsx(it,{children:e.jsx(rt,{children:Be(b.text)})},y))]}),e.jsx(xr,{children:e.jsx(hr,{children:w(t.date)})})]})]})]})},gr=({post:t,profilePicSrc:o,formatDate:r,decodeHtml:l,getAssetUrl:a,stories:p,onProfileClick:d})=>{const[c,s]=i.useState(0),[x,h]=i.useState(null),g=b=>{const{naturalWidth:y,naturalHeight:T}=b.target;y&&T&&h(y/T)};t.media[c];const f=t.media.length>1,k=b=>{b.stopPropagation(),c<t.media.length-1&&s(y=>y+1)},w=b=>{b.stopPropagation(),c>0&&s(y=>y-1)},j=t.date.split("T")[0],I=p&&p[j]&&p[j].length>0;return e.jsxs(Di,{children:[e.jsxs(Oi,{children:[e.jsx(yt,{$hasStories:I,onClick:()=>I&&d(j),children:e.jsx(vt,{path:o,$hasStories:I})}),e.jsx("span",{style:{fontWeight:600},children:"matheusdodia"}),e.jsx("span",{style:{marginLeft:"auto",color:"#8e8e8e",fontSize:"12px"},children:r(t.date)})]}),e.jsxs(Wi,{style:{aspectRatio:x||"auto"},children:[f&&e.jsxs(e.Fragment,{children:[c>0&&e.jsx(ve,{$left:!0,onClick:w}),c<t.media.length-1&&e.jsx(ve,{onClick:k})]}),e.jsx(jt,{$index:c,children:t.media.map((b,y)=>e.jsx(wt,{children:e.jsx(F,{path:b.uri,type:b.type,controls:b.type==="video"&&y===c,onLoad:y===0?g:void 0,onLoadedMetadata:b.type==="video"&&y===0?g:void 0})},y))})]}),e.jsxs(Bi,{children:[e.jsx("div",{style:{fontSize:"14px",whiteSpace:"pre-wrap"},children:e.jsx("span",{children:l(t.description)})}),t.comments&&t.comments.length>0&&e.jsxs("div",{style:{fontSize:"14px"},children:[e.jsx("br",{}),t.comments.map((b,y)=>e.jsx("div",{style:{marginBottom:"4px",whiteSpace:"pre-wrap"},children:l(b.text)},y))]})]})]})},mr=()=>{const[t,o]=i.useState("posts"),[r,l]=i.useState(null),[a,p]=i.useState(!1),[d,c]=i.useState(null),[s,x]=i.useState({posts:[],stories:{},reels:[],loading:!0});i.useEffect(()=>{(async()=>{try{const[z,_,v]=await Promise.all([Y("instagram/posts.json"),Y("instagram/stories.json"),Y("instagram/reels.json")]);x({posts:z||[],stories:_||{},reels:v||[],loading:!1})}catch(z){console.error("Failed to load Instagram data",z),x(_=>({..._,loading:!1}))}})()},[]);const{posts:h,stories:g,reels:f,loading:k}=s,w=Object.keys(g).sort((C,z)=>new Date(z)-new Date(C)),j=h?h.filter(C=>C.media[0].type==="video").length:0,I=g?Object.values(g).reduce((C,z)=>C+z.length,0):0,[b,y]=i.useState(!1),[T,m]=i.useState(10),[P,O]=i.useState(15),H=i.useRef(null),M=i.useRef(null);if(i.useEffect(()=>{if(t!=="feed")return;const C=new IntersectionObserver(z=>{z[0].isIntersecting&&m(_=>Math.min(_+10,h.length))},{rootMargin:"200px"});return H.current&&C.observe(H.current),()=>C.disconnect()},[t,h.length]),i.useEffect(()=>{if(t!=="posts")return;const C=new IntersectionObserver(z=>{z[0].isIntersecting&&O(_=>Math.min(_+15,h.length))},{rootMargin:"200px"});return M.current&&C.observe(M.current),()=>C.disconnect()},[t,h.length]),k)return e.jsx(et,{children:e.jsx("div",{style:{marginTop:100},children:"Carregando..."})});const L=()=>o("feed"),R=()=>o("posts"),$=(C,z=!1)=>{y(z),c(C)},W=C=>{l(C)},U="/src/data/instagram/media/profile/202203/275015161_496804875327432_7143646680586312085_n_17894747972575070.jpg";return e.jsxs(et,{children:[e.jsxs(ui,{children:[e.jsxs(fi,{children:[e.jsx(gi,{children:e.jsx(mi,{path:U,alt:"Profile"})}),e.jsxs(bi,{children:[e.jsx(yi,{children:e.jsx("h2",{children:"matheusdodia"})}),e.jsx(ji,{children:e.jsx("h1",{children:"Matheus José"})}),e.jsxs(vi,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:h.length})," posts"]}),e.jsxs("li",{children:[e.jsx("strong",{children:I})," stories"]}),e.jsxs("li",{children:[e.jsx("strong",{children:j})," reels"]})]}),e.jsx(wi,{children:e.jsx("span",{children:"meu diário (quase) secreto"})})]})]}),e.jsx(Ti,{children:w.map(C=>{const z=[...g[C]||[]].sort((ne,ie)=>new Date(ne.date)-new Date(ie.date));if(z.length===0)return null;const v=z[0].media[0].uri,[E,B,K]=C.split("-"),N=`${K}/${B}/${E}`;return e.jsxs($i,{onClick:()=>$(C,!1),children:[e.jsx(zi,{children:e.jsx(Ei,{path:v})}),e.jsx(_i,{children:N})]},C)})}),e.jsxs(ki,{children:[e.jsxs(_e,{$active:t==="posts",onClick:R,children:[e.jsx(Si,{}),e.jsx("span",{children:"PUBLICAÇÕES"})]}),e.jsxs(_e,{$active:t==="reels",onClick:()=>o("reels"),children:[e.jsx(Ci,{}),e.jsx("span",{children:"REELS"})]}),e.jsxs(_e,{$active:t==="feed",onClick:L,children:[e.jsx(Ii,{}),e.jsx("span",{children:"FEED"})]})]}),t==="posts"&&e.jsxs(e.Fragment,{children:[e.jsx(Pi,{children:h.slice(0,P).map((C,z)=>{const _=C.media[0];return e.jsx(Mi,{onClick:()=>W(C),children:e.jsx(F,{path:_.uri,type:_.type,alt:"Post"})},z)})}),P<h.length&&e.jsx("div",{ref:M,style:{height:"50px",width:"100%"}})]}),t==="reels"&&e.jsx(Li,{children:f.map((C,z)=>{const _=C.media[0];return e.jsx(Ai,{onClick:()=>W(C),children:e.jsx(F,{path:_.uri,type:_.type,alt:"Reel"})},C.media[0].uri||z)})}),t==="feed"&&e.jsxs(Ri,{children:[h.slice(0,T).map((C,z)=>e.jsx(gr,{post:C,profilePicSrc:U,formatDate:or,decodeHtml:Be,getAssetUrl:nr,stories:g,onProfileClick:_=>$(_,!0)},z)),e.jsx("div",{ref:H,style:{height:"30px"}})]})]}),d&&e.jsx(ir,{initialDate:d,storyDates:w,stories:g,onClose:()=>c(null),profilePic:U,singleDayMode:b}),r&&e.jsx(fr,{post:r,onClose:()=>l(null),profilePic:U,stories:g,onProfileClick:C=>$(C,!0)})]})},V={primary:"#D4DDEE",secondary:"#E8EEFA",quaternary:"#BCCDE9",senary:"#5696CD",septenary:"#5778A1"},br=n.div`
  background-color: ${V.primary};
  font-family: Arial, sans-serif, Verdana;
  font-size: 12px;
  color: #333;
  width: 100%;
  min-height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;

  /* Reset retro scrollbars to system default/modern look */
  &::-webkit-scrollbar,
  & *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb,
  & *::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border: none;
    border-radius: 10px;
    
    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }

  &::-webkit-scrollbar-track,
  & *::-webkit-scrollbar-track {
    background-color: transparent;
  }
`,yr=n.div`
  width: 1000px;
  margin: 15px auto;
  display: flex;
  gap: 15px;
  
  @media (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
    padding: 10px;
    margin: 5px auto;
  }
`,vr=n.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: sticky;
  top: 15px;
  align-self: flex-start;
  
  @media (max-width: 1000px) {
    width: 100%;
    position: static;
  }
`,jr=n.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`,wr=n.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: sticky;
  top: 15px;
  align-self: flex-start;
  
  @media (max-width: 1100px) {
    display: none;
  }
`,X=n.div`
  background: #fff;
  border-radius: 8px;
  border: 1px solid ${V.quaternary};
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  overflow: hidden;
  margin-bottom: 0px;
`,J=n.div`
  background-color: ${V.secondary};
  padding: 8px 12px;
  font-weight: bold;
  color: ${V.septenary};
  font-size: 13px;
  border-bottom: 1px solid ${V.quaternary};
`,kr=n.h1`
  font-size: 18px;
  color: ${V.septenary};
  margin: 10px 12px;
  font-weight: bold;
`,st=n.img`
  width: 100%;
  display: block;
  object-fit: cover;
`,de=n.a`
  text-decoration: none;
  color: #06c;
  padding: 6px 12px;
  display: block;
  font-size: 11px;
  
  &:hover {
    background-color: ${V.secondary};
    text-decoration: underline;
  }

  ${t=>t.active&&`
    background-color: ${V.secondary};
    font-weight: bold;
    border-left: 3px solid ${V.senary};
    padding-left: 9px;
  `}
`;n.button`
  background-color: ${V.senary};
  border: 1px solid ${V.septenary};
  color: #fff;
  padding: 6px 12px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
  
  &:hover {
    background-color: ${V.septenary};
  }
`;const Sr=n.div`
  display: none;
  background: #fff;
  border-bottom: 1px solid ${V.quaternary};
  padding: 10px 15px;
  cursor: pointer;
  user-select: none;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`,Cr=n.img`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid ${V.quaternary};
  object-fit: cover;
`,Ir=n.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Tr=n.span`
  font-size: 14px;
  font-weight: bold;
  color: ${V.septenary};
`,$r=n.span`
  font-size: 11px;
  color: #666;
`,zr=n.span`
  font-size: 12px;
  color: ${V.septenary};
  transition: transform 0.3s ease;
  transform: ${t=>t.$expanded?"rotate(180deg)":"rotate(0deg)"};
`,Er=n.div`
  background: #fff;
  border-bottom: 1px solid #BCCDE9;
  display: ${t=>t.$expanded?"block":"none"};
  
  @media (min-width: 769px) {
    display: none !important;
  }
`,ce=n.div`
  padding: 14px 20px;
  font-size: 13px;
  color: #06c;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  
  &:hover {
    background-color: ${V.secondary};
  }
  
  &:last-child {
    border-bottom: none;
  }
  
  ${t=>t.$active&&`
    background-color: ${V.secondary};
    font-weight: bold;
    border-left: 3px solid ${V.senary};
    padding-left: 17px;
  `}
`,ee=t=>{if(!t)return"";if(t.startsWith("http"))return t;if(t.includes("user_thumb_medium"))return"orkut/user_thumb_medium.jpg";let o=t;return o.startsWith("imgs/")&&(o=o.replace("imgs/","")),o.startsWith("community/")||o.startsWith("profile/")||o.startsWith("fotos/")?`orkut/${o}`:(o.startsWith("orkut/"),o)},_r=n.div`
  border-bottom: 1px solid #e5e5e5;
  padding: 15px;
  display: flex;
  gap: 15px;
  animation: fadeIn 0.4s ease-out;
  
  &:hover {
    background-color: #f7f9fc;
  }
  
  &:last-child {
    border-bottom: none;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(5px); }
    to { opacity: 1; transform: translateY(0); }
  }
`,Pr=n(F)`
  width: 64px;
  height: 64px;
  border-radius: 4px;
  border: 1px solid #ddd;
  object-fit: cover;
  background-color: #f0f0f0;
`,Mr=n.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
  font-size: 11px;
`,Lr=n.span`
  font-weight: bold;
  color: #06c;
`,Ar=n.span`
  color: #666;
`,Rr=n.div`
  line-height: 1.5;
  word-break: break-word;
  font-size: 13px;
  color: #333;
  
  font {
    color: inherit !important;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`,Dr=`
  @keyframes shimmer {
    0% { background-position: -200px 0; }
    100% { background-position: 200px 0; }
  }
`,kt=n.div`
  background: linear-gradient(90deg, #e8e8e8 0px, #f5f5f5 50px, #e8e8e8 100px);
  background-size: 200px 100%;
  animation: shimmer 1.2s infinite linear;
  ${Dr}
`,Or=n.div`
  border-bottom: 1px solid #e5e5e5;
  padding: 15px;
  display: flex;
  gap: 15px;
`,Wr=n(kt)`
  width: 64px;
  height: 64px;
  border-radius: 4px;
  flex-shrink: 0;
`,Pe=n(kt)`
  height: ${t=>t.height||"14px"};
  width: ${t=>t.width||"100%"};
  border-radius: 4px;
  margin-bottom: 8px;
`,Br=()=>e.jsx(e.Fragment,{children:[...Array(5)].map((t,o)=>e.jsxs(Or,{children:[e.jsx(Wr,{}),e.jsxs("div",{style:{flex:1},children:[e.jsx(Pe,{width:"30%",height:"12px"}),e.jsx(Pe,{width:"80%"}),e.jsx(Pe,{width:"60%"})]})]},o))}),at=20,Me=100,he=1803,Fr=()=>{const[t,o]=i.useState([]),[r,l]=i.useState(new Set),[a,p]=i.useState(at),[d,c]=i.useState(!0),s=i.useRef(),x=i.useCallback(async f=>{if(!r.has(f))try{const k=await Y(`orkut/chunks/scraps_chunk_${f}.json`);if(!k)return;o(w=>{const j=[...w],I=f*Me;return k.forEach((b,y)=>{j[I+y]=b}),j}),l(w=>new Set([...w,f]))}catch(k){console.error(`Failed to load chunk ${f}:`,k)}},[r]);i.useEffect(()=>{x(0).then(()=>c(!1))},[]),i.useEffect(()=>{const f=Math.floor((a-1)/Me),k=f+1;r.has(f)||x(f),k*Me<he&&!r.has(k)&&x(k)},[a,r,x]);const h=i.useCallback(f=>{s.current&&s.current.disconnect(),s.current=new IntersectionObserver(k=>{k[0].isIntersecting&&a<he&&p(w=>w+at)}),f&&s.current.observe(f)},[a]),g=t.slice(0,a).filter(Boolean);return d?e.jsxs(X,{children:[e.jsxs(J,{children:["recados (",he,")"]}),e.jsx(Br,{})]}):e.jsxs(X,{children:[e.jsxs(J,{children:["recados (",he,")"]}),e.jsxs("div",{style:{padding:"0"},children:[g.map((f,k)=>e.jsxs(_r,{ref:k===g.length-1?h:null,children:[e.jsx(Pr,{path:ee(f.authorPhoto),alt:f.author}),e.jsxs("div",{style:{flex:1},children:[e.jsxs(Mr,{children:[e.jsx(Lr,{children:f.author}),e.jsx(Ar,{children:f.date})]}),e.jsx(Rr,{dangerouslySetInnerHTML:{__html:f.content}})]})]},f.id)),a<he&&e.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#999",fontSize:"11px"},children:"pegando mais recados..."})]})]})},Hr=n.div`
  border-bottom: 1px solid #e5e5e5;
  padding: 15px;
  display: flex;
  gap: 15px;
  animation: fadeIn 0.4s ease-out;
  
  &:last-child {
    border-bottom: none;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(5px); }
    to { opacity: 1; transform: translateY(0); }
  }
`,Nr=n.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
  font-size: 11px;
`,Ur=n(F)`
  width: 64px;
  height: 64px;
  border-radius: 4px;
  border: 1px solid #ddd;
  object-fit: cover;
  background-color: #f0f0f0;
`,Gr=n.div`
  font-weight: bold;
  color: #06c;
`,Vr=n.div`
  color: #666;
`,Kr=n.div`
  line-height: 1.5;
  font-size: 13px;
  word-break: break-word;
`,Xr=()=>{const[o,r]=i.useState([]),[l,a]=i.useState(20),p=i.useRef();useEffect(()=>{Y("orkut/depoimentos.json").then(s=>r(s||[]))},[]);const d=i.useCallback(s=>{p.current&&p.current.disconnect(),p.current=new IntersectionObserver(x=>{x[0].isIntersecting&&l<o.length&&a(h=>h+20)}),s&&p.current.observe(s)},[l,o.length]),c=o.slice(0,l);return e.jsxs(X,{children:[e.jsxs(J,{children:["depoimentos (",o.length,")"]}),e.jsxs("div",{style:{padding:"0"},children:[c.map((s,x)=>e.jsxs(Hr,{ref:x===c.length-1?d:null,children:[e.jsx(Ur,{path:ee(s.authorPhoto),alt:s.author}),e.jsxs("div",{style:{flex:1},children:[e.jsxs(Nr,{children:[e.jsx(Gr,{children:s.author}),e.jsx(Vr,{children:s.date})]}),e.jsx(Kr,{dangerouslySetInnerHTML:{__html:s.content}})]})]},s.id)),l<o.length&&e.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#999",fontSize:"11px"},children:"pegando mais depoimentos..."})]})]})},St=n.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 15px;
  padding: 15px;
`,Ct=n.div`
  text-align: center;
  font-size: 11px;
  animation: fadeIn 0.5s ease-in-out;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`,It=n(F)`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
  border: 1px solid #ddd;
  margin-bottom: 5px;
  transition: transform 0.2s;
  background-color: #f0f0f0;

  &:hover {
    transform: scale(1.05);
  }
`,Tt=n.div`
  color: #06c;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
`,je=48,qr=()=>{const[t,o]=i.useState(je),r=i.useRef(),l=i.useCallback(d=>{r.current&&r.current.disconnect(),r.current=new IntersectionObserver(c=>{c[0].isIntersecting&&t<ORKUT_FRIENDS.length&&o(s=>s+je)}),d&&r.current.observe(d)},[t]),[a,p]=i.useState([]);return i.useEffect(()=>{Y("orkut/friends.json").then(d=>p(d||[]))},[]),e.jsxs(X,{children:[e.jsxs(J,{children:["meus amigos (",a.length,")"]}),e.jsx(St,{children:a.slice(0,t).map((d,c)=>e.jsxs(Ct,{ref:c===t-1?l:null,children:[e.jsx(It,{path:ee(d.photo),alt:d.name}),e.jsx(Tt,{children:d.name})]},d.id))}),t<a.length&&e.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#999"},children:"carregando mais amigos..."})]})},Yr=()=>{const[t,o]=i.useState(je),r=i.useRef(),l=i.useCallback(d=>{r.current&&r.current.disconnect(),r.current=new IntersectionObserver(c=>{c[0].isIntersecting&&t<ORKUT_COMMUNITIES.length&&o(s=>s+je)}),d&&r.current.observe(d)},[t]),[a,p]=i.useState([]);return i.useEffect(()=>{Y("orkut/communities.json").then(d=>p(d||[]))},[]),e.jsxs(X,{children:[e.jsxs(J,{children:["minhas comunidades (",a.length,")"]}),e.jsx(St,{children:a.slice(0,t).map((d,c)=>e.jsxs(Ct,{ref:c===t-1?l:null,children:[e.jsx(It,{path:ee(d.photo),alt:d.name}),e.jsx(Tt,{children:d.name})]},d.id))}),t<a.length&&e.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#999"},children:"carregando mais comunidades..."})]})},Jr=n.div`
  padding: 15px 20px;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  align-items: flex-start;
  gap: 15px;
  animation: fadeIn 0.4s ease-out;
  
  &:hover {
    background-color: #f7f9fc;
  }
  
  &:last-child {
    border-bottom: none;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(5px); }
    to { opacity: 1; transform: translateY(0); }
  }
`,Zr=n(F)`
  width: 48px;
  height: 48px;
  border-radius: 4px;
  border: 1px solid #ddd;
  object-fit: cover;
  flex-shrink: 0;
  background-color: #f0f0f0;
`,Qr=n.div`
  width: 48px;
  height: 48px;
  background-color: #f0f2f5;
  border-radius: 4px;
  border: 1px solid #e1e4e8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
  color: #5778a1;
`,es=n.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,ts=n.div`
  font-size: 13px;
  color: #333;
  line-height: 1.5;

  b {
    color: #06c;
    font-weight: bold !important;
  }
`,ns=n.div`
  font-size: 11px;
  color: #666;
`,os=n.div`
  background-color: #f1f3f8;
  border-left: 3px solid #6d84b4;
  padding: 8px 12px;
  font-style: italic;
  font-size: 12px;
  color: #555;
  margin-top: 6px;
  border-radius: 0 4px 4px 0;
`,is=n.div`
  display: flex;
  gap: 4px;
  margin-top: 6px;
  flex-wrap: wrap;
`,rs=n(F)`
  width: 32px;
  height: 32px;
  border-radius: 2px;
  border: 1px solid #ddd;
  object-fit: cover;
  background-color: #f0f0f0;
`,ss=n.div`
  margin-top: 4px;
  font-size: 13px;
  color: #555;
  line-height: 1.5;
`,as=n.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  gap: 15px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 4px;
    
    & > div:last-child {
      align-self: flex-start;
      margin-top: 2px;
    }
  }
`,lt=30,Le=100,ue=1184,ls=t=>{let o=[];return t.forEach(r=>{r.type==="new_friend_aggregated"&&r.friends&&r.friends.length>1?r.friends.forEach((l,a)=>{o.push({...r,id:`${r.id}_${a}`,friends:[l],friendName:l.name,friendImage:l.image})}):o.push(r)}),o},ds=()=>{const[t,o]=i.useState([]),[r,l]=i.useState(new Set),[a,p]=i.useState(lt),[d,c]=i.useState(!0),[s,x]=i.useState(0),h=i.useRef(),[g,f]=i.useState([]),[k,w]=i.useState([]),j=i.useCallback(async m=>{if(!r.has(m))try{const P=await Y(`orkut/chunks/updates_chunk_${m}.json`);if(!P)return;const O=ls(P).filter(H=>H.type!=="new_friend");o(H=>{const M=[...H],L=m*Le;return O.forEach((R,$)=>{M[L+$]=R}),M}),l(H=>new Set([...H,m])),x(m===0?O.length:H=>H+O.length)}catch(P){console.error(`Failed to load chunk ${m}:`,P)}},[r]);i.useEffect(()=>{(async()=>{const[P,O]=await Promise.all([Y("orkut/friends.json"),Y("orkut/communities.json")]);f(P||[]),w(O||[]),await j(0),c(!1)})()},[]),i.useEffect(()=>{const m=Math.floor((a-1)/Le),P=m+1;r.has(m)||j(m),P*Le<ue&&!r.has(P)&&j(P)},[a,r,j]);const I=i.useCallback(m=>{h.current&&h.current.disconnect(),h.current=new IntersectionObserver(P=>{P[0].isIntersecting&&a<ue&&p(O=>O+lt)}),m&&h.current.observe(m)},[a]),b=i.useMemo(()=>t.filter(Boolean).slice(0,a).reverse(),[t,a]),y=m=>{if(!m)return"";try{const P=new Date(m);return P.getFullYear()===1970?"":P.toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"})+" "+P.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"})}catch{return""}},T=(m,P,O)=>{const H=O?I:null;let M=null,L="",R=null;switch(m.type){case"community_join":{let $=m.communityName,W=m.communityImage;if($){const C=k.find(z=>z.name===$);C&&C.photo&&(W=C.photo)}else{const C=k.find(z=>z.photo===m.communityImage);C&&($=C.name)}R=W;const U=$||"uma comunidade";L=e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:"2px"},children:"Entrou na comunidade"}),e.jsx("div",{style:{marginBottom:"4px"},children:e.jsx("b",{children:U})}),m.communityDescription&&e.jsx(ss,{children:m.communityDescription})]});break}case"new_friend":{R=m.friendImage;const $=g.find(W=>W.photo===R);L=e.jsxs(e.Fragment,{children:["Matheus José e ",e.jsx("b",{children:$?$.name:"alguém"})," agora são amigos."]});break}case"new_friend_aggregated":{const $=m.friends||[];if($.length>0){R=$[0].image;const W=$[0].name,U=$.length-1;let C=null;if(U>0){const z=U===1?"pessoa":"pessoas";C=e.jsxs(e.Fragment,{children:[" e outros ",e.jsxs("b",{children:[U," ",z]})]})}L=e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:"2px"},children:"Agora é amigo de"}),e.jsxs("div",{style:{marginBottom:"4px"},children:[e.jsx("b",{children:W}),C,"."]}),$.length>1&&e.jsx(is,{children:$.slice(1,9).map((z,_)=>e.jsx(rs,{path:ee(z.image),title:z.name,alt:z.name},_))})]})}else m.friendName?(R=m.friendImage,L=e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:"2px"},children:"Agora é amigo de"}),e.jsxs("div",{style:{marginBottom:"4px"},children:[e.jsx("b",{children:m.friendName}),"."]})]})):(M="👥",L=e.jsx(e.Fragment,{children:"Fez novos amigos."}));break}case"link":{R=m.linkImage;const $=m.linkTitle||"um link",W=m.actionText||"compartilhou";L=e.jsxs(e.Fragment,{children:["Matheus José ",W,": ",e.jsx("b",{children:$})]});break}case"photos_shared":{M="📷";const $=m.photos?m.photos.length:0;L=e.jsxs("div",{children:["Adicionou ",e.jsx("b",{children:$>0?`${$} fotos`:"novas fotos"}),"."]});break}case"image_post":{R=m.imageUrl,L=e.jsx("div",{children:"Postou uma imagem."});break}case"new_fan":M="🌟",L=e.jsxs(e.Fragment,{children:["Agora é fã de ",e.jsx("b",{children:m.content})]});break;case"video_like":M="❤️",L=e.jsx(e.Fragment,{children:"Gostou de um vídeo."});break;case"profile_update":{R="user_thumb_medium.jpg",L=e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:"2px"},children:"Atualizou o perfil dele."}),m.profileData&&m.profileData.length>0?e.jsx("div",{style:{marginBottom:"4px"},children:m.profileData.map(($,W)=>e.jsxs("span",{children:[W>0&&", ",$.label,": ",e.jsx("b",{children:$.value})]},W))}):e.jsx("div",{style:{marginBottom:"4px"},children:e.jsx("b",{children:m.content||"Atualizou o perfil."})})]});break}default:m.content&&m.content.includes("amigos")?(M="👥",L=e.jsxs(e.Fragment,{children:["Tem ",e.jsx("b",{children:m.content})]})):m.content&&m.content.includes("frase")?(M="💬",L=e.jsxs("div",{children:["Mudou sua ",e.jsx("b",{children:"frase do perfil"}),m.phrase&&e.jsxs(os,{children:['"',m.phrase,'"']})]})):m.content===""?m.type==="new_friend_aggregated"?(M="👥",L="Novos amigos"):(M="📝",L=e.jsx(e.Fragment,{children:"Atualizou seu perfil."})):(M="🔔",L=m.content)}return e.jsxs(Jr,{ref:H,children:[R?e.jsx(Zr,{path:ee(R),alt:"update image"}):e.jsx(Qr,{children:M||"📋"}),e.jsx(es,{children:e.jsxs(as,{children:[e.jsx(ts,{style:{flex:1},children:L}),e.jsx(ns,{style:{flexShrink:0,marginTop:"2px"},children:y(m.dateISO)||m.date||"Sem data"})]})})]},m.id)};return d?e.jsxs(X,{children:[e.jsxs(J,{children:["minhas atualizações (",ue,")"]}),e.jsx("div",{style:{padding:"20px",textAlign:"center",color:"#999"},children:"carregando atualizações..."})]}):e.jsxs(X,{children:[e.jsxs(J,{children:["minhas atualizações (",ue,")"]}),e.jsxs("div",{style:{padding:"0"},children:[b.map((m,P)=>T(m,P,P===b.length-1)),a<ue&&e.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#999",fontSize:"11px"},children:"pegando mais atualizações..."})]})]})},cs=n.div`
  border-bottom: 1px solid #e5e5e5;
  padding: 15px;
  display: flex;
  gap: 15px;
  animation: fadeIn 0.4s ease-out;
  
  &:last-child {
    border-bottom: none;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(5px); }
    to { opacity: 1; transform: translateY(0); }
  }
`,ps=n.div`
  width: 120px;
  text-align: center;
`,xs=n.div`
  font-weight: bold;
  color: #06c;
  font-size: 11px;
  margin-top: 5px;
  word-break: break-word;
`,hs=n(F)`
  width: 80px;
  height: 80px;
  border-radius: 4px;
  border: 1px solid #ddd;
  object-fit: cover;
  background-color: #f0f0f0;
`,us=n.div`
  flex: 1;
  min-width: 0;
`,fs=n.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`,gs=n.div`
  font-size: 11px;
  color: #666;
`,ms=n.div`
  line-height: 1.5;
  font-size: 13px;
  word-break: break-word;
  
  /* Handle legacy Orkut HTML styles */
  div { margin-bottom: 10px; }
  span { display: inline; }
  center { text-align: center; display: block; }
  img { max-width: 100%; height: auto; margin: 10px 0; }
  blockquote {
    border-left: 3px solid #ccc;
    margin: 10px 0;
    padding-left: 10px;
    color: #666;
  }
`,dt=20,bs=({topic:t,onBack:o})=>{const[r,l]=i.useState([]),[a,p]=i.useState(dt),[d,c]=i.useState(!0),s=i.useRef();i.useEffect(()=>{(async()=>{try{const f=await Y(`orkut/topics_data/topic_${t.id}.json`);l(f?f.TOPIC_REPLIES||f:[]),c(!1)}catch(f){console.error("Failed to load topic replies:",f),c(!1)}})()},[t.id]);const x=i.useCallback(g=>{s.current&&s.current.disconnect(),s.current=new IntersectionObserver(f=>{f[0].isIntersecting&&a<r.length&&p(k=>k+dt)}),g&&s.current.observe(g)},[a,r.length]),h=r.slice(0,a);return d?e.jsxs(X,{children:[e.jsx(J,{children:t.title}),e.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"carregando tópicos..."})]}):e.jsxs(X,{children:[e.jsxs(J,{children:[e.jsx("div",{children:t.title}),e.jsx("div",{style:{fontSize:"11px",color:"#666",fontWeight:"normal",marginTop:"2px"},children:t.community})]}),e.jsxs("div",{style:{padding:"0"},children:[h.map((g,f)=>e.jsxs(cs,{ref:f===h.length-1?x:null,children:[e.jsxs(ps,{children:[e.jsx(hs,{path:ee("user_thumb_medium"),alt:g.author}),e.jsx(xs,{children:g.author})]}),e.jsxs(us,{children:[e.jsx(fs,{children:e.jsx(gs,{children:g.date})}),e.jsx(ms,{dangerouslySetInnerHTML:{__html:g.content}})]})]},f)),a<r.length&&e.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#999",fontSize:"11px"},children:"pegando mais respostas..."})]})]})},ys=n.div`
  border-bottom: 1px solid #e5e5e5;
  padding: 12px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: fadeIn 0.4s ease-out;
  cursor: pointer;
  
  &:hover {
    background-color: #f7f9fc;
  }
  
  &:last-child {
    border-bottom: none;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(5px); }
    to { opacity: 1; transform: translateY(0); }
  }
`,vs=n.div`
  font-size: 13px;
  color: #06c;
  font-weight: bold;
`,ct=20,js=()=>{const[t,o]=i.useState(null),[r,l]=i.useState(ct),a=i.useRef(),[p,d]=i.useState([]);useEffect(()=>{Y("orkut/topics.json").then(h=>d(h||[]))},[]);const c=h=>{if(!h)return"";try{return new Date(h).toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"})}catch{return""}},s=i.useCallback(h=>{a.current&&a.current.disconnect(),a.current=new IntersectionObserver(g=>{g[0].isIntersecting&&r<p.length&&l(f=>f+ct)}),h&&a.current.observe(h)},[r,p.length]);if(t)return e.jsx(bs,{topic:t,onBack:()=>o(null)});const x=p.slice(0,r);return e.jsxs(X,{children:[e.jsxs(J,{children:["tópicos (",p.length,")"]}),e.jsxs("div",{style:{padding:"0"},children:[x.map((h,g)=>e.jsx(ys,{ref:g===x.length-1?s:null,onClick:()=>o(h),children:e.jsxs("div",{style:{flex:1},children:[e.jsx(vs,{children:h.title}),e.jsx("div",{style:{fontSize:"11px",color:"#06c",marginTop:"2px"},children:h.community}),e.jsxs("div",{style:{fontSize:"11px",color:"#999",marginTop:"2px"},children:["criado em ",c(h.dateISO)||h.date]})]})},h.id)),r<p.length&&e.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#999",fontSize:"11px"},children:"pegando mais tópicos..."})]})]})},Ae=(t,o)=>`orkut/fotos/${t}/${o}`,ws=n.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  padding: 20px;
`,ks=n.div`
  cursor: pointer;
  text-align: center;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.03);
  }
`,Ss=n(F)`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 4px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  background-color: #eee;
`,Cs=n.div`
  font-size: 13px;
  color: #06c;
  font-weight: bold;
  margin-top: 8px;
  text-transform: capitalize;
`,Is=n.div`
  font-size: 11px;
  color: #666;
  margin-top: 2px;
`,Ts=n.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 15px;
  padding: 20px;
`,$s=n(F)`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 2px;
  border: 1px solid #eee;
  cursor: pointer;
  background-color: #eee;
  
  &:hover {
    border-color: #06c;
  }
`,zs=n.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  height: 100dvh; /* Dynamic viewport height for iOS */
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3000;
  padding: 40px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 20px 10px;
  }
`,Es=`
  @keyframes slideInRight {
    from { transform: translateX(50px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
`,_s=`
  @keyframes slideInLeft {
    from { transform: translateX(-50px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
`,Ps=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  max-height: 100%;
  animation: ${t=>t.direction==="next"?"slideInRight":"slideInLeft"} 0.3s ease-out;
  ${Es}
  ${_s}
`,Ms=n(F)`
  max-width: 100%;
  max-height: 100dvh;
  object-fit: contain;
  box-shadow: 0 0 20px rgba(0,0,0,0.5);
  cursor: default;
`,Ls=n.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 30px;
  cursor: pointer;
  padding: 10px;
  line-height: 1;
  
  &:hover {
    opacity: 0.8;
  }
`,As=()=>{const[t,o]=i.useState(null),[r,l]=i.useState(null),[a,p]=i.useState("next"),[d,c]=i.useState(null),[s,x]=i.useState([]);i.useEffect(()=>{Y("orkut/photos.json").then(j=>x(j||[]))},[]);const h=()=>l(null),g=()=>{t&&(p("next"),l(j=>(j+1)%t.photos.length))},f=()=>{t&&(p("prev"),l(j=>(j-1+t.photos.length)%t.photos.length))};i.useEffect(()=>{const j=I=>{r!==null&&(I.key==="Escape"?h():I.key==="ArrowRight"?g():I.key==="ArrowLeft"&&f())};return window.addEventListener("keydown",j),()=>window.removeEventListener("keydown",j)},[r,t]);const k=j=>{c(j.targetTouches[0].clientX)},w=j=>{if(d===null)return;const I=j.changedTouches[0].clientX,b=d-I;b>50?g():b<-50&&f(),c(null)};return i.useEffect(()=>(r!==null?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[r]),t?e.jsxs(X,{children:[e.jsx(J,{children:t.albumName}),e.jsx(Ts,{children:t.photos.map((j,I)=>e.jsx($s,{path:Ae(t.albumName,j),alt:`${t.albumName} - ${I}`,onClick:()=>{l(I),p("next")}},I))}),r!==null&&e.jsxs(zs,{onClick:h,onTouchStart:k,onTouchEnd:w,children:[e.jsx(Ls,{onClick:h,children:"×"}),e.jsx(Ps,{direction:a,onClick:j=>j.stopPropagation(),children:e.jsx(Ms,{path:Ae(t.albumName,t.photos[r]),alt:"View"})},r)]})]}):e.jsxs(X,{children:[e.jsxs(J,{children:["álbuns de fotos (",s.length,")"]}),e.jsx(ws,{children:s.map(j=>e.jsxs(ks,{onClick:()=>o(j),children:[e.jsx(Ss,{path:Ae(j.albumName,j.photos[0]),alt:j.albumName}),e.jsx(Cs,{children:j.albumName}),e.jsxs(Is,{children:[j.photos.length," fotos"]})]},j.id||j.albumName))})]})},pt=768,Rs=()=>{const[t,o]=i.useState(()=>typeof window<"u"?window.innerWidth<=pt:!1);return i.useEffect(()=>{const r=window.matchMedia(`(max-width: ${pt}px)`),l=a=>{o(a.matches)};return o(r.matches),r.addEventListener("change",l),()=>{r.removeEventListener("change",l)}},[]),t},Ds={perfil:"perfil",atualizacoes:"minhas atualizações",scraps:"página de recados",depoimentos:"depoimentos",topicos:"tópicos",fotos:"fotos"},Os=()=>{const[t,o]=i.useState("perfil"),[r,l]=i.useState(0),[a,p]=i.useState(!1),d=Rs(),[c,s]=i.useState(null);useEffect(()=>{Y("orkut/profile.json").then(w=>s(w||{}))},[]);const x=w=>{t===w?l(j=>j+1):(o(w),l(0)),p(!1)},h=(w,j)=>e.jsxs("div",{style:{marginBottom:"20px"},children:[e.jsx("div",{style:{color:"#5778A1",fontWeight:"bold",borderBottom:"1px solid #BCCDE9",marginBottom:"8px",paddingBottom:"3px",fontSize:"12px"},children:w}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px 24px"},children:j.map((I,b)=>e.jsxs("div",{style:{fontSize:"13px",display:"flex",gap:"5px"},children:[e.jsxs("b",{style:{color:"#6d84b4",minWidth:"80px",whiteSpace:"pre-line"},children:[I.label,":"]}),e.jsx("span",{style:{color:"#333"},children:I.value})]},b))})]}),g=()=>{switch(t){case"scraps":return e.jsx(Fr,{});case"depoimentos":return e.jsx(Xr,{});case"topicos":return e.jsx(js,{});case"fotos":return e.jsx(As,{});case"amigos":return e.jsx(qr,{});case"comunidades":return e.jsx(Yr,{});case"atualizacoes":return e.jsx(ds,{});default:return e.jsx(e.Fragment,{children:e.jsxs(X,{children:[e.jsx(J,{children:c?c.name:"Carregando..."}),e.jsxs("div",{style:{padding:"20px"},children:[c&&e.jsxs(e.Fragment,{children:[e.jsx(st,{src:ee(c.photo),alt:"Profile"}),e.jsxs("div",{style:{marginTop:"10px"},children:[h("Social",[{label:"relacionamento",value:c.relationship},{label:"aniversário",value:c.birthday},{label:"local",value:c.location},...c.social||[]]),h("Profissional",c.professional),h("Pessoal",c.personal),h("Detalhes",c.details)]})]}),e.jsxs("div",{style:{marginTop:"25px"},children:[e.jsxs("div",{style:{color:"#5778A1",fontWeight:"bold",borderBottom:"1px solid #BCCDE9",marginBottom:"12px",paddingBottom:"4px",fontSize:"12px"},children:["Sobre ",c&&c.name?c.name.split(" ")[0]:"mim"]}),e.jsx("div",{style:{fontSize:"13px",lineHeight:"1.5",color:"#444",textAlign:"justify"},children:c?c.aboutMe:"Carregando..."})]})]})]})})}},f=()=>e.jsxs(X,{style:{display:"flex",flexDirection:"column",height:"400px"},children:[e.jsxs(J,{children:["amigos (",ORKUT_FRIENDS.length,")"]}),e.jsx("div",{style:{flex:1,overflowY:"auto",overflowX:"hidden",padding:"10px 5px"},children:e.jsx("div",{style:{display:"grid",gridTemplateColumns:"33.33% 33.33% 33.33%",gap:"10px 0"},children:ORKUT_FRIENDS.map(w=>e.jsxs("div",{style:{textAlign:"center",minWidth:0},children:[e.jsx("img",{src:ee(w.photo),alt:w.name,style:{width:"80px",height:"80px",objectFit:"cover",borderRadius:"4px",cursor:"pointer",border:"1px solid #ddd"}}),e.jsx("div",{style:{fontSize:"11px",marginTop:"4px",color:"#06c",padding:"0 4px",lineHeight:"1.2",wordBreak:"break-word"},children:w.name})]},w.id))})})]}),k=()=>e.jsxs(X,{style:{display:"flex",flexDirection:"column",height:"400px"},children:[e.jsxs(J,{children:["comunidades (",ORKUT_COMMUNITIES.length,")"]}),e.jsx("div",{style:{flex:1,overflowY:"auto",overflowX:"hidden",padding:"10px 5px"},children:e.jsx("div",{style:{display:"grid",gridTemplateColumns:"33.33% 33.33% 33.33%",gap:"10px 0"},children:ORKUT_COMMUNITIES.map(w=>e.jsxs("div",{style:{textAlign:"center",minWidth:0},children:[e.jsx("img",{src:ee(w.photo),alt:w.name,style:{width:"80px",height:"80px",objectFit:"cover",borderRadius:"4px",cursor:"pointer",border:"1px solid #ddd"}}),e.jsx("div",{style:{fontSize:"11px",marginTop:"4px",color:"#06c",padding:"0 4px",lineHeight:"1.2",wordBreak:"break-word"},children:w.name})]},w.id))})})]});return e.jsxs(br,{children:[d&&e.jsxs(e.Fragment,{children:[e.jsxs(Sr,{onClick:()=>p(!a),children:[e.jsx(Cr,{src:ee("user_thumb_medium.jpg"),alt:c.name}),e.jsxs(Ir,{children:[e.jsx(Tr,{children:c.name}),e.jsx($r,{children:Ds[t]})]}),e.jsx(zr,{$expanded:a,children:"▼"})]}),e.jsxs(Er,{$expanded:a,children:[e.jsx(ce,{$active:t==="perfil",onClick:()=>x("perfil"),children:"perfil"}),e.jsx(ce,{$active:t==="atualizacoes",onClick:()=>x("atualizacoes"),children:"atualizações"}),e.jsx(ce,{$active:t==="scraps",onClick:()=>x("scraps"),children:"recados"}),e.jsx(ce,{$active:t==="depoimentos",onClick:()=>x("depoimentos"),children:"depoimentos"}),e.jsx(ce,{$active:t==="topicos",onClick:()=>x("topicos"),children:"tópicos"}),e.jsx(ce,{$active:t==="fotos",onClick:()=>x("fotos"),children:"fotos"})]})]}),e.jsxs(yr,{children:[!d&&e.jsx(vr,{children:e.jsxs(X,{style:{padding:"15px"},children:[e.jsx(st,{src:ee("user_thumb_medium.jpg"),alt:"Matheus José"}),e.jsx(kr,{children:c.name}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",marginTop:"15px"},children:[e.jsx(de,{onClick:()=>x("perfil"),active:t==="perfil",children:"perfil"}),e.jsx(de,{onClick:()=>x("atualizacoes"),active:t==="atualizacoes",children:"atualizações"}),e.jsx(de,{onClick:()=>x("scraps"),active:t==="scraps",children:"recados"}),e.jsx(de,{onClick:()=>x("depoimentos"),active:t==="depoimentos",children:"depoimentos"}),e.jsx(de,{onClick:()=>x("topicos"),active:t==="topicos",children:"tópicos"}),e.jsx(de,{onClick:()=>x("fotos"),active:t==="fotos",children:"fotos"})]})]})}),e.jsxs(jr,{children:[g(),d&&t==="perfil"&&e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"15px"},children:[e.jsx(f,{}),e.jsx(k,{})]})]},`${t}-${r}`),t==="perfil"&&e.jsxs(wr,{children:[e.jsx(f,{}),e.jsx(k,{})]})]})]})},Ws=()=>{const t=()=>{const a=window.location.pathname;return a==="/projetos"?"projects":a==="/escritos"?"resume":a==="/redes"?"contact":a==="/projetos/orkut"?"orkut":a==="/projetos/twitter"?"twitter":a==="/projetos/instagram"?"instagram":"home"},[o,r]=i.useState(t);i.useEffect(()=>{const p=(d=>{switch(d){case"projects":return"/projetos";case"resume":return"/escritos";case"contact":return"/redes";case"orkut":return"/projetos/orkut";case"twitter":return"/projetos/twitter";case"instagram":return"/projetos/instagram";case"home":return"/";default:return"/"}})(o);return window.location.pathname!==p&&window.history.pushState({section:o},"",p),o==="orkut"?document.body.style.backgroundColor="#D4DDEE":o==="instagram"?document.body.style.backgroundColor="#000":o==="twitter"?document.body.style.backgroundColor="rgb(0, 132, 180)":document.body.style.backgroundColor="",()=>{document.body.style.backgroundColor=""}},[o]),i.useEffect(()=>{const a=p=>{const d=window.location.pathname;r(d==="/projetos/orkut"?"orkut":d==="/projetos/twitter"?"twitter":d==="/projetos/instagram"?"instagram":d==="/projetos"?"projects":d==="/escritos"?"resume":d==="/redes"?"contact":"home")};return window.addEventListener("popstate",a),()=>window.removeEventListener("popstate",a)},[]);const l=()=>{switch(o){case"home":return e.jsx(Tn,{});case"projects":return e.jsx(wo,{onNavigate:r});case"resume":return e.jsx("div",{style:{textAlign:"center",color:"var(--win-gray-dark)",marginTop:"2rem",minHeight:"100vh"},children:e.jsx("p",{children:"Currículo em construção..."})});case"contact":return e.jsx(mo,{});default:return null}};return o==="orkut"?e.jsxs(e.Fragment,{children:[e.jsx(be,{activeSection:o,onNavigate:r}),e.jsx("div",{style:{paddingTop:"40px",minHeight:"100vh",boxSizing:"border-box",display:"flex",flexDirection:"column"},children:e.jsx(Os,{})})]}):o==="twitter"?e.jsxs(e.Fragment,{children:[e.jsx(be,{activeSection:o,onNavigate:r}),e.jsx("div",{style:{paddingTop:"40px",minHeight:"100vh",boxSizing:"border-box"},children:e.jsx(hi,{})})]}):o==="instagram"?e.jsxs(e.Fragment,{children:[e.jsx(be,{activeSection:o,onNavigate:r}),e.jsx("div",{style:{paddingTop:"40px",minHeight:"100vh",boxSizing:"border-box"},children:e.jsx(mr,{onClose:()=>r("home")})})]}):e.jsxs(e.Fragment,{children:[e.jsx(be,{activeSection:o,onNavigate:r}),e.jsxs("main",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",padding:"20px",paddingTop:"50px",paddingBottom:"50px",gap:"10px"},children:[e.jsx(pn,{}),e.jsx(xn,{}),e.jsx("div",{style:{marginTop:"20px"},children:l()}),e.jsxs("footer",{style:{textAlign:"center",padding:"2rem 0 1rem 0",marginTop:"auto",color:"blue",fontSize:"0.85rem",opacity:.7},children:[e.jsx("p",{style:{margin:0},children:"Pensado por Matheus José da Silva"}),e.jsx("p",{style:{margin:0},children:"Guarapuava, 2026"})]})]})]})},Bs=sn`
  ${rn}
  
  @font-face {
    font-family: 'W95FA';
    src: url('${cn}') format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  
  body, input, select, textarea {
    font-family: 'W95FA', 'ms_sans_serif', sans-serif;
  }
`;function Fs(){return e.jsxs(an,{theme:ln,children:[e.jsx(Bs,{}),e.jsx(Ws,{})]})}dn.createRoot(document.getElementById("root")).render(e.jsx(i.StrictMode,{children:e.jsx(Fs,{})}));
