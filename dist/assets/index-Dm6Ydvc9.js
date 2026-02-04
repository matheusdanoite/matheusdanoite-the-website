import{j as e,A as Mt,T as Lt,B as N,r as i,C as At,S as Dt,O as Rt,u as Ot,a as Wt,H as Bt,b as n,c as Ft,i as Ht,g as Nt,d as Ut,e as Ge,f as Gt,h as Vt,k as ht,s as Kt,D as ut,W as ft,l as gt,m as mt,q as Xt,n as qt,o as Yt,p as Jt,t as Zt,v as Qt,w as en,x as bt,y as we,P as tn,z as nn,R as oe,E as on,F as rn,G as sn,I as an,K as ln,J as dn,L as cn}from"./vendor-D2lnTqSJ.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const p of c.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&l(p)}).observe(document,{childList:!0,subtree:!0});function r(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(a){if(a.ep)return;a.ep=!0;const c=r(a);fetch(a.href,c)}})();const pn="/assets/w95fa-DxtS-rFC.woff2",be=({onNavigate:t,activeSection:o})=>{const r=[{id:"projects",name:"Projetos"},{id:"resume",name:"Escritos"},{id:"contact",name:"Redes"}];return e.jsx(Mt,{style:{position:"fixed",top:0,zIndex:2001,height:"40px"},children:e.jsxs(Lt,{style:{justifyContent:"space-between",height:"36px",padding:"0 8px",width:"100%",maxWidth:"950px",margin:"0 auto"},children:[e.jsx("div",{style:{display:"flex",gap:"4px"},children:e.jsx(N,{onClick:()=>t("home"),active:o==="home",size:"sm",style:{fontWeight:o==="home"?"bold":"normal",paddingTop:"2px",paddingBottom:"2px"},children:"Matheus José"})}),e.jsx("div",{style:{display:"flex",gap:"4px"},children:r.map(l=>e.jsx(N,{onClick:()=>t(l.id),active:o===l.id,size:"sm",style:{fontWeight:o===l.id?"bold":"normal",paddingTop:"2px",paddingBottom:"2px"},children:l.name},l.id))})]})})},xn=()=>e.jsxs("div",{style:{width:"100%",overflow:"hidden",display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"3vw",padding:"0 10px"},children:[e.jsx("pre",{style:{fontFamily:"var(--font-mono)",color:"var(--nick-green)",textShadow:"2px 2px 0px var(--win-black)",fontWeight:"bold",fontSize:"clamp(8px, 2vw, 16px)",lineHeight:"1.2",margin:"0",whiteSpace:"pre"},children:`
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
`})]}),hn=()=>{const t=["Ketchup Hemmer","É isso aí","Eu prefiro ser essa metamorfose ambulante","¯\\_(ツ)_/¯","Ouça Shinichi Osawa","K-pop é top","Gosto de longas caminhadas pela madrugada","Selo SM de qualidade","matheusdanet","Aberto 24h","Tenho um fã.","Um bon vivant","Eu tive uma ideia!","Here's to the misfits"],[o,r]=i.useState(t[0]);return i.useEffect(()=>{const l=Math.floor(Math.random()*t.length);r(t[l])},[]),e.jsx("div",{style:{textAlign:"center",fontFamily:"var(--font-ui)",color:"var(--win-blue)",marginTop:"1rem",fontStyle:"italic",minHeight:"1.5em"},children:o})},un="/assets/matheus_3d-DmonV1Yv.glb";function fn(){const{progress:t}=Wt();return e.jsx(Bt,{center:!0,children:e.jsxs("div",{style:{color:"white"},children:["Carregando... ",t.toFixed(0),"%"]})})}function gn(t){const{scene:o}=Ot(un);return e.jsx("primitive",{object:o,...t})}const mn=()=>e.jsx("div",{style:{width:"100%",height:"400px"},children:e.jsxs(At,{shadows:!0,dpr:[1,2],camera:{fov:75},children:[e.jsx(i.Suspense,{fallback:e.jsx(fn,{}),children:e.jsx(Dt,{environment:null,intensity:.5,contactShadow:!1,shadowBias:-.0015,children:e.jsx(gn,{})})}),e.jsx(Rt,{makeDefault:!0,autoRotate:!0,autoRotateSpeed:15,enableZoom:!0,enablePan:!1,minPolarAngle:0,maxPolarAngle:Math.PI/1.5})]})}),bn=n.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
`,yn=i.forwardRef((t,o)=>{const[r,l]=i.useState("#000000"),[a,c]=i.useState(2),p=()=>{o&&o.current&&o.current.clear()};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1,width:"100%"},children:[e.jsxs(bn,{children:[e.jsx("label",{children:"Cor:"}),e.jsxs("div",{style:{position:"relative",width:"35px",height:"30px"},children:[e.jsx(N,{style:{width:"100%",height:"100%",padding:"4px"},children:e.jsx("div",{style:{width:"100%",height:"100%",background:r,border:"1px solid #8e8e8e"}})}),e.jsx("input",{type:"color",value:r,onChange:d=>{l(d.target.value)},style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",opacity:0,cursor:"pointer"}})]}),e.jsx(N,{size:"sm",onClick:p,title:"Explodir (Limpar Tudo)",style:{minWidth:"35px"},children:"💣"}),e.jsx("div",{style:{width:"1px",height:"20px",background:"#ccc",margin:"0 5px"}}),e.jsx("label",{children:"Pincel:"}),e.jsx(N,{size:"sm",active:a===2?"true":void 0,onClick:()=>c(2),children:"P"}),e.jsx(N,{size:"sm",active:a===5?"true":void 0,onClick:()=>c(5),children:"M"}),e.jsx(N,{size:"sm",active:a===10?"true":void 0,onClick:()=>c(10),children:"G"})]}),e.jsx("div",{style:{width:"304px",height:"304px",margin:"0 auto",border:"2px solid #8e8e8e",background:"white",display:"flex",justifyContent:"center",alignItems:"center",flexShrink:0},children:e.jsx(Ft,{ref:o,brushColor:r,brushRadius:a,lazyRadius:0,canvasWidth:300,canvasHeight:300,hideGrid:!0,style:{background:"white",width:"300px",height:"300px"}})})]})}),De={apiKey:"AIzaSyCDnz8noh7ihVvPHTE6Jmw7jUKGus5y1OI",authDomain:"matheusdanoite-the-website.firebaseapp.com",projectId:"matheusdanoite-the-website",storageBucket:"matheusdanoite-the-website.firebasestorage.app",messagingSenderId:"500621503044",appId:"1:500621503044:web:55320778e3506147cd6a11"},ke=De.apiKey&&De.projectId,yt=ke?Ht(De):null,ye=ke?Nt(yt):null,Ve=ke?Ut(yt):null,vn=!!ke,He=[{name:"Bubbles",lower:"ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ",upper:"ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ",digits:"⓪①②③④⑤⑥⑦⑧⑨"},{name:"Script Bold",lower:"𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃",upper:"𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩",digits:"0123456789"},{name:"Fraktur",lower:"𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷",upper:"𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ",digits:"0123456789"},{name:"Double Struck",lower:"𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫",upper:"𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ",digits:"𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡"},{name:"Full Width",lower:"ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ",upper:"ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ",digits:"０１２３４５６７８９"}],Re="abcdefghijklmnopqrstuvwxyz",Oe="ABCDEFGHIJKLMNOPQRSTUVWXYZ",We="0123456789",jn=t=>{if(!t)return"";let o=t;return He.forEach(r=>{r.lower&&(Array.isArray(r.lower)?r.lower:[...r.lower]).forEach((a,c)=>{if(c<Re.length)try{o=o.split(a).join(Re[c])}catch{}}),r.upper&&(Array.isArray(r.upper)?r.upper:[...r.upper]).forEach((a,c)=>{if(c<Oe.length)try{o=o.split(a).join(Oe[c])}catch{}}),r.digits&&(Array.isArray(r.digits)?r.digits:[...r.digits]).forEach((a,c)=>{if(c<We.length)try{o=o.split(a).join(We[c])}catch{}})}),o.normalize("NFC")},Ke=(t,o)=>{if(!t)return"";const r=He.find(a=>a.name===o);return r?[...t.normalize("NFD")].map(a=>{const c=Re.indexOf(a),p=Oe.indexOf(a),d=We.indexOf(a);return c!==-1?(Array.isArray(r.lower)?r.lower:[...r.lower])[c]||a:p!==-1?(Array.isArray(r.upper)?r.upper:[...r.upper])[p]||a:d!==-1&&r.digits&&(Array.isArray(r.digits)?r.digits:[...r.digits])[d]||a}).join(""):t},wn=n.div`
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
`;const Xe=({onAddMessage:t})=>{const[o,r]=i.useState(1),[l,a]=i.useState("text"),[c,p]=i.useState("default"),[d,s]=i.useState(""),[x,f]=i.useState(""),[m,h]=i.useState(!1),S=i.useRef(null),k=()=>{S.current&&S.current.clear()},v=y=>{const $=jn(y.target.value);$.length<=300&&f($)},T=y=>{p(y)},j=async()=>{if(!d.trim()){alert("Por favor, insira seu nome ou nick.");return}let y="",$="text";if(l==="text"){if(y=Ke(x,c),!y||!y.trim()){alert("Por favor, escreva uma mensagem.");return}}else l==="draw"&&S.current&&(y=S.current.getDataURL(),$="drawing");if(!vn){const b={id:Date.now().toString(),name:d,content:y,type:$,font:c,createdAt:{seconds:Date.now()/1e3}};setTimeout(()=>{t&&t(b),s(""),f(""),l==="draw"&&k(),r(1),h(!1)},500);return}h(!0);try{await Vt(ht(ye,"guestbook"),{name:d.trim(),content:y,type:$,font:c,createdAt:Kt()}),s(""),f(""),l==="draw"&&k(),r(1)}catch(b){console.error("Error adding document: ",b)}finally{h(!1)}};return e.jsxs(wn,{style:{height:"100%",padding:"2px"},children:[e.jsx("div",{style:{marginBottom:"5px"},children:e.jsx(Ge,{value:d,onChange:y=>s(y.target.value),placeholder:"Seu nome...",style:{width:"100%"}})}),l==="text"?e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"5px",marginBottom:"5px"},children:e.jsx(Gt,{width:"100%",options:[{value:"default",label:"Comic Sans"},...He.map(y=>({value:y.name,label:y.name}))],onChange:y=>T(y.value),value:c,placeholder:"Escolha um estilo...",menuMaxHeight:150,style:{fontWeight:"light",fontFamily:"'W95FA', 'ms_sans_serif', sans-serif",WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}})}),e.jsx(Ge,{multiline:!0,rows:6,value:Ke(x,c),onChange:v,placeholder:"Escreva sua mensagem...",style:{width:"100%",fontFamily:c==="default"?"'ComicCustom', 'Comic Sans MS', 'Comic Sans', cursive":"'W95FA', 'ms_sans_serif', sans-serif",fontSize:"14px",WebkitFontSmoothing:c==="default"?"auto":"none",MozOsxFontSmoothing:c==="default"?"auto":"grayscale",fontSmooth:c==="default"?"auto":"never",textRendering:c==="default"?"auto":"aliased"}}),e.jsxs("div",{style:{marginTop:"2px",fontSize:"0.8rem",color:"black",textAlign:"right"},children:[x.length,"/300"]})]}):e.jsx(yn,{ref:S}),e.jsx("div",{style:{flex:1}}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"auto",paddingTop:"10px"},children:[e.jsxs("div",{style:{display:"flex",gap:"5px"},children:[e.jsx(N,{active:l==="text",onClick:()=>a("text"),children:"Escrita"}),e.jsx(N,{active:l==="draw",onClick:()=>a("draw"),children:"Desenho"})]}),e.jsx(N,{onClick:j,disabled:m,primary:!m,children:m?"Enviando...":"Enviar"})]})]})},xe=({id:t,title:o,children:r,onClose:l,onFocus:a,onDrag:c,onStop:p,position:d,style:s,windowStyle:x,defaultPosition:f,isMobile:m})=>{const h=i.useRef(null);return e.jsx(ut,{nodeRef:h,handle:".window-header",onMouseDown:()=>a(t),defaultPosition:f,position:d,onDrag:c,onStop:p,disabled:m,children:e.jsx("div",{ref:h,style:{...s||{},zIndex:s?.zIndex},children:e.jsxs(ft,{style:{width:"100%",maxWidth:"600px",display:"flex",flexDirection:"column",...x},className:"window",children:[e.jsxs(gt,{className:"window-header",style:{display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"grab",flexShrink:0},children:[e.jsx("span",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:o}),e.jsx(N,{onClick:()=>l(t),size:"sm",style:{width:"25px",height:"25px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("span",{style:{fontWeight:"bold",transform:"translateY(-1px)"},children:"x"})})]}),e.jsx(mt,{style:{padding:0,flex:1,overflow:"hidden",display:"flex",flexDirection:"column"},children:r})]})})})},kn=n.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    background: ${({theme:t})=>t.material}; /* System Gray */
    font-size: 0.9rem;
`,Sn=n.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 10px;
    justify-content: center;
`,Cn=({msg:t,onClose:o,onFocus:r,isMobile:l,index:a,totalMessages:c,onVote:p})=>e.jsx(xe,{id:t.id,title:t.name,onClose:o,onFocus:()=>{},isMobile:l,style:{zIndex:10+(c-a),position:"relative",marginBottom:"20px"},windowStyle:{width:"320px",maxWidth:"320px",height:"auto"},children:e.jsxs(kn,{children:[t.type==="drawing"?e.jsx("div",{style:{background:"white",border:"1px solid #8e8e8e",padding:"5px"},children:e.jsx("img",{src:t.content,alt:"Drawing",style:{width:"100%",display:"block"}})}):e.jsx("div",{style:{margin:0,fontSize:"15px",lineHeight:"1.4",wordBreak:"break-word",fontFamily:!t.font||t.font==="default"?"'ComicCustom', 'Comic Sans MS', 'Comic Sans', cursive":"'W95FA', 'ms_sans_serif', sans-serif",WebkitFontSmoothing:!t.font||t.font==="default"?"auto":"none",MozOsxFontSmoothing:!t.font||t.font==="default"?"auto":"grayscale",fontSmooth:!t.font||t.font==="default"?"auto":"never",textRendering:!t.font||t.font==="default"?"auto":"aliased"},dangerouslySetInnerHTML:{__html:t.content}}),e.jsxs(Sn,{children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(N,{size:"sm",onClick:()=>p(t.id,"likes"),children:"Joinha"}),e.jsx("span",{style:{fontSize:"0.8rem",marginTop:"2px"},children:t.likes||0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(N,{size:"sm",onClick:()=>p(t.id,"dislikes"),children:"Paia"}),e.jsx("span",{style:{fontSize:"0.8rem",marginTop:"2px"},children:t.dislikes||0})]})]})]})}),In=i.forwardRef((t,o)=>e.jsxs("div",{ref:o,style:{padding:"1rem",width:"100%"},children:[e.jsx("h3",{style:{marginTop:0},children:"Sobre mim"}),e.jsx("p",{children:"[Escreva aqui sobre você...]"}),e.jsx("br",{}),e.jsx("p",{children:"Olá! Sou Matheus José, um desenvolvedor apaixonado por criar experiências digitais únicas. Este portfólio é uma janela para o meu mundo, misturando nostalgia e tecnologia moderna."})]})),Tn=n.div`
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
`,$n=()=>{const[t,o]=i.useState(window.innerWidth<=768),[r,l]=i.useState([]),[a,c]=i.useState(15),[p,d]=i.useState(new Set);i.useEffect(()=>{const g=()=>o(window.innerWidth<=768);return window.addEventListener("resize",g),()=>window.removeEventListener("resize",g)},[]),i.useEffect(()=>{if(!ye)return;const g=Xt(ht(ye,"guestbook"),Yt("createdAt","desc"),qt(a)),w=Jt(g,D=>{const K=D.docs.map(B=>({id:B.id,...B.data()}));l(K)});return()=>w()},[a]);const[s,x]=i.useState({about:{id:"about",title:"bio",isOpen:!0,zIndex:1,content:e.jsx(In,{}),desktopPosition:{top:"20px",left:"50%"}},model:{id:"model",title:"eu",isOpen:!0,zIndex:0,content:e.jsx(mn,{}),desktopPosition:{top:"350px",left:"50%"}},guestbook:{id:"guestbook",title:"depoimentos",isOpen:!0,zIndex:0,content:e.jsx(Xe,{}),desktopPosition:{top:"780px",left:"50%"}}}),f=g=>{s[g]?x(w=>({...w,[g]:{...w[g],isOpen:!1}})):d(w=>new Set(w).add(g))},m=g=>{s[g]&&x(w=>{const D={...w},K=Math.max(...Object.values(D).map(B=>B.zIndex),10)+1;return D[g]={...D[g],zIndex:K},D})},h=async(g,w)=>{const D=`vote_${g}`;if(localStorage.getItem(D)){console.log("Already voted");return}try{const B=Zt(ye,"guestbook",g);await Qt(B,{[w]:en(1)}),localStorage.setItem(D,w)}catch(B){console.error("Error updating vote:",B)}},S=g=>{l(w=>[g,...w])},k=()=>{c(g=>g+15)},v=i.useRef(null),[T,j]=i.useState(200),[y,$]=i.useState(null);i.useEffect(()=>{if(v.current){const g=v.current.offsetHeight,w=v.current.closest(".window")?.getBoundingClientRect();w&&$(w),j(g)}},[t,s.about.isOpen]);const b=38,M=50,R=20,F=y?y.height:T+45,L=R+F+b,_=L+520+b,z=i.useRef(null),[O,U]=i.useState(0);i.useEffect(()=>{z.current&&U(z.current.offsetHeight)},[r,t,p]);const W=r.length>=a?100:20,I=t?"auto":`${_+O+W}px`;return e.jsxs(Tn,{id:"home-wrapper",style:{minHeight:I},children:[s.about.isOpen&&e.jsx(xe,{id:"about",title:s.about.title,onClose:f,onFocus:m,isMobile:t,style:{zIndex:s.about.zIndex,position:t?"relative":"absolute",left:t?0:"auto",right:0,margin:t?"0 auto":0,width:"fit-content",top:t?0:`${R}px`},children:e.jsx("div",{ref:v,style:{width:"100%"},children:s.about.content})}),s.model.isOpen&&e.jsx(xe,{id:"model",title:s.model.title,onClose:f,onFocus:m,isMobile:t,style:{zIndex:s.model.zIndex,position:t?"relative":"absolute",left:0,right:t?0:"auto",margin:t?"0 auto":0,width:"fit-content",top:t?0:`${R}px`},windowStyle:{width:"100%",maxWidth:"500px"},children:s.model.content}),s.guestbook.isOpen&&e.jsx("div",{id:"guestbook-window",style:{position:t?"relative":"absolute",left:t?0:"50%",right:t?0:"auto",margin:t?"0 auto":0,transform:t?"none":`translateX(calc(-50% + ${M}px))`,width:"fit-content",top:t?0:`${L}px`,zIndex:s.guestbook.zIndex},children:e.jsx(xe,{id:"guestbook",title:s.guestbook.title,onClose:f,onFocus:m,isMobile:t,windowStyle:{width:"350px",height:"520px"},children:e.jsx(Xe,{onAddMessage:S})})}),e.jsx("div",{ref:z,style:{position:t?"relative":"absolute",top:t?0:`${_}px`,left:0,right:0,display:"flex",flexDirection:"column",alignItems:"center",gap:"20px",pointerEvents:"none"},children:r.map((g,w)=>p.has(g.id)?null:e.jsxs("div",{style:{pointerEvents:"auto"},children:[" ",e.jsx(Cn,{msg:g,onClose:f,onFocus:()=>{},isMobile:t,index:w,totalMessages:r.length,onVote:h})]},g.id))}),!t&&r.length>=a&&e.jsx("div",{style:{position:"absolute",bottom:"50px",left:0,right:0,textAlign:"center"},children:e.jsx(N,{onClick:k,style:{fontWeight:"bold"},children:"Carregar Mais..."})}),t&&r.length>=a&&e.jsx("div",{style:{margin:"20px 0"},children:e.jsx(N,{onClick:k,children:"Carregar Mais..."})}),!s.model.isOpen&&!s.about.isOpen&&!s.guestbook.isOpen&&e.jsxs("div",{style:{textAlign:"center",marginTop:"100px",color:"gray",width:"100%"},children:[e.jsx("p",{children:"Sistema encerrado."}),e.jsx(N,{onClick:()=>window.location.reload(),children:"Reiniciar"})]})]})},zn=n.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`,En=n.li`
    display: flex;
    align-items: center;
    justify-content: space-between; // Push image left, text right
    padding: 8px;
    border-bottom: 2px solid transparent; // spacer
    
    &:hover {
        background: ${({theme:t})=>t.hoverBackground};
        color: ${({theme:t})=>t.canvasTextInvert};
    }
`,_n=n.img`
    width: 40px;
    height: 40px;
    margin-right: 12px;
    border: 2px solid ${({theme:t})=>t.borderDark};
`,Pn=n.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    align-items: flex-end; // Align text to the right
    text-align: right;
`,Mn=n.span`
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%; // Ensure ellipsis works if needed, though right-align might fight with this. Flex-end usually enough.
`,Ln=n.span`
    font-size: 0.8rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
`,An=()=>{const[t,o]=i.useState([]),[r,l]=i.useState(!0),[a,c]=i.useState(!1);if(i.useEffect(()=>{fetch("/api/lastfm").then(s=>{if(!s.ok)throw new Error("Failed to fetch");return s.json()}).then(s=>{o(s),l(!1)}).catch(s=>{console.error(s),c(!0),l(!1)})},[]),r)return e.jsx("div",{style:{padding:"20px",textAlign:"center"},children:e.jsx(bt,{size:32})});if(a)return e.jsxs("div",{style:{padding:"20px",textAlign:"center"},children:[e.jsx("p",{children:"Erro ao carregar músicas."}),e.jsx("p",{style:{fontSize:"0.8em"},children:"(Verifique as chaves de API no Netlify)"})]});const p=t.slice(0,5);return e.jsxs("div",{style:{paddingBottom:"10px",background:"transparent"},children:[e.jsx(zn,{children:p.map((d,s)=>e.jsxs(En,{children:[d.image&&e.jsx(_n,{src:d.image,alt:"Capa"}),e.jsxs(Pn,{children:[e.jsx(Mn,{children:d.name}),e.jsx(Ln,{children:d.artist})]})]},s))}),e.jsx("div",{style:{textAlign:"center",marginTop:"10px",fontSize:"0.8rem"},children:e.jsx(we,{href:"https://www.last.fm/user/matheusdanoite",target:"_blank",style:{textDecoration:"none"},children:"matheusdanoite no Last.fm"})})]})},Dn=n.li`
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
`,qe=n.img`
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
`,On=n.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 0.8rem;
`,Wn=n.span`
    font-weight: bold;
    margin-right: 5px;
`,Bn=n.span`
    opacity: 0.7;
    font-size: 0.75rem;
`,Fn=n.span`
    opacity: 0.7;
    font-size: 0.75rem;
    white-space: nowrap;
`,Hn=n.p`
    margin: 0;
    line-height: 1.3;
    word-wrap: break-word;
`,Ye=n.div`
    border: 2px solid ${({theme:t})=>t.borderDark};
    padding: 8px;
    margin-top: 5px;
    background: rgba(255, 255, 255, 0.1);
    font-size: 0.85rem;
`,Nn=n.div`
    display: flex;
    gap: 5px;
    margin-top: 5px;
    flex-wrap: wrap;
`,Un=n.img`
    max-width: 100%;
    max-height: 150px;
    border: 1px solid ${({theme:t})=>t.borderDark};
    object-fit: cover;
    border-radius: 4px;
`,Gn=n(we)`
    display: block;
    border: 1px solid ${({theme:t})=>t.borderDark};
    margin-top: 5px;
    text-decoration: none;
    color: inherit;
    
    &:hover {
        background: rgba(255, 255, 255, 0.2);
    }
`,Vn=n.img`
    width: 100%;
    height: 100px;
    object-fit: cover;
    border-bottom: 1px solid ${({theme:t})=>t.borderDark};
`,Kn=n.div`
    padding: 8px;
`,Xn=n.div`
    font-weight: bold;
    font-size: 0.85rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,qn=n.div`
    font-size: 0.75rem;
    opacity: 0.8;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`,Yn=n.div`
    font-size: 0.75rem;
    opacity: 0.6;
    margin-bottom: 2px;
`,Jn=({post:t})=>{const o=t.record,r=!!o.reply,l=new Date(o.createdAt).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"}),a=s=>!s||s.length===0?null:e.jsx(Nn,{children:s.map((x,f)=>e.jsx(Un,{src:x.thumb,alt:x.alt},f))}),c=s=>s?e.jsxs(Gn,{href:s.uri,target:"_blank",children:[s.thumb&&e.jsx(Vn,{src:s.thumb}),e.jsxs(Kn,{children:[e.jsx(Xn,{children:s.title}),e.jsx(qn,{children:s.description})]})]}):null,p=(s,x)=>e.jsxs(Ye,{children:[e.jsxs("div",{style:{marginBottom:"4px",display:"flex",alignItems:"center",gap:"5px"},children:[e.jsx(qe,{src:x.avatar,style:{width:"20px",height:"20px",borderWidth:"1px"}}),e.jsx("strong",{children:x.displayName||x.handle}),e.jsxs("span",{style:{opacity:.6,fontSize:"0.75rem"},children:["@",x.handle]})]}),e.jsx("div",{children:s.text})]}),d=s=>{if(!s)return null;if(s.$type==="app.bsky.embed.images#view")return a(s.images);if(s.$type==="app.bsky.embed.external#view")return c(s.external);if(s.$type==="app.bsky.embed.record#view"){const x=s.record;if(x.$type==="app.bsky.embed.record#viewRecord")return p(x.value,x.author);if(x.$type==="app.bsky.embed.record#viewNotFound")return e.jsx(Ye,{style:{fontStyle:"italic",opacity:.6},children:"Post removido ou não encontrado."})}return s.$type==="app.bsky.embed.recordWithMedia#view"?e.jsxs(e.Fragment,{children:[d(s.media),d(s.record)]}):null};return e.jsxs(Dn,{children:[e.jsx(qe,{src:t.author.avatar,alt:t.author.handle}),e.jsxs(Rn,{children:[r&&e.jsx(Yn,{children:"Resposta ao post..."}),e.jsxs(On,{children:[e.jsxs("div",{children:[e.jsx(Wn,{children:t.author.displayName||t.author.handle}),e.jsxs(Bn,{children:["@",t.author.handle]})]}),e.jsx(Fn,{children:l})]}),e.jsx(Hn,{children:o.text}),d(t.embed)]})]})},Zn=n.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`,Qn=()=>{const[t,o]=i.useState([]),[r,l]=i.useState(!0),[a,c]=i.useState(!1);return i.useEffect(()=>{(async()=>{try{const d=await fetch("https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=matheusdanoite.bsky.social&limit=5");if(!d.ok)throw new Error("Failed to fetch");const s=await d.json();o(s.feed||[]),l(!1)}catch(d){console.error(d),c(!0),l(!1)}})()},[]),r?e.jsx("div",{style:{padding:"20px",textAlign:"center"},children:e.jsx(bt,{size:32})}):a?e.jsx("div",{style:{padding:"20px",textAlign:"center"},children:e.jsx("p",{children:"Erro ao carregar posts."})}):e.jsxs("div",{style:{height:"auto",paddingBottom:"10px",background:"transparent"},children:[e.jsx(Zn,{children:t.map((p,d)=>e.jsx(Jn,{post:p.post},d))}),e.jsx("div",{style:{textAlign:"center",marginTop:"10px",fontSize:"0.8rem"},children:e.jsx(we,{href:"https://bsky.app/profile/matheusdanoite.bsky.social",target:"_blank",style:{textDecoration:"none"},children:"@matheusdanoite.bsky.social no BlueSky"})})]})},eo=n.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
`,to=n.img`
  width: 64px;
  height: 64px;
  border: 2px solid ${({theme:t})=>t.borderDarkest};
`,no=n.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`,oo=n.span`
  font-weight: bold;
  font-size: 1.1rem;
`,io=n.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.9rem;
`,ro=n.div`
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
`,so=n.div`
  padding: 5px 0;
  display: flex;
  flex-direction: column;
`,ao=n.span`
  font-size: 0.85rem;
  color: ${({theme:t})=>t.textSecondary};
  margin-bottom: 8px;
`,lo=n.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,co=n.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border: 1px solid ${({theme:t})=>t.borderDark};
  background: black;
`,po=n.span`
  font-weight: bold;
  font-size: 0.95rem;
`,xo=n.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    gap: 10px;
`,ho=()=>{const[t,o]=i.useState(null),[r,l]=i.useState(!0),[a,c]=i.useState(null);i.useEffect(()=>{(async()=>{try{const x=await fetch("/api/xbox");if(!x.ok){let m=`Erro ${x.status}: ${x.statusText}`;try{const h=await x.json();h.error&&(m+=` - ${h.error}`)}catch{}throw new Error(m)}const f=await x.json();if(f.error)throw new Error(f.error);o(f)}catch(x){console.error("Xbox API failed:",x),c(x.message)}finally{l(!1)}})()},[]);const d=(()=>{if(!t||!t.account||!t.account.profileUsers||t.account.profileUsers.length===0)return null;const s=t.account.profileUsers[0],x=m=>s.settings.find(h=>h.id===m)?.value;let f=null;return t.history&&Array.isArray(t.history)&&t.history.length>0&&(f=t.history[0]),{gamertag:x("Gamertag"),gamerscore:x("Gamerscore"),avatar:x("GameDisplayPicRaw"),lastGame:f}})();return e.jsxs("div",{style:{padding:"5px"},children:[r&&e.jsxs(xo,{children:[e.jsx("p",{children:"Conectando ao Xbox Live..."}),e.jsx(tn,{width:"100%"})]}),a&&!r&&e.jsxs("div",{style:{padding:"20px",textAlign:"center"},children:[e.jsx("p",{children:"Erro ao carregar informações."}),e.jsx("p",{style:{fontSize:"0.8em"},children:"(Verifique as chaves de API no Netlify)"})]}),!r&&!a&&d&&e.jsxs(e.Fragment,{children:[e.jsxs(eo,{children:[e.jsx(to,{src:d.avatar,alt:"Avatar"}),e.jsxs(no,{children:[e.jsx(oo,{children:d.gamertag}),e.jsxs(io,{children:[e.jsx(ro,{children:"G"}),d.gamerscore]})]})]}),d.lastGame&&e.jsxs(e.Fragment,{children:[e.jsx(nn,{style:{margin:"10px 0"}}),e.jsxs(so,{children:[e.jsx(ao,{children:"Último Jogo:"}),e.jsxs(lo,{children:[e.jsx(co,{src:d.lastGame.displayImage,alt:d.lastGame.name}),e.jsx(po,{children:d.lastGame.name})]})]})]}),e.jsx("div",{style:{textAlign:"center",marginTop:"15px",fontSize:"0.8rem",paddingBottom:"10px"},children:e.jsx(we,{href:"https://www.xbox.com/pt-BR/play/user/matheusdobairro",target:"_blank",style:{textDecoration:"none"},children:"@matheusdobairro no Xbox"})})]})]})},uo=n.div`
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
`,fo=n.div`
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
`,go=n.div`
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
`,mo=({id:t,title:o,children:r,onClose:l,onFocus:a,zIndex:c,desktopPos:p,isMobile:d,windowWidth:s})=>{const x=i.useRef(null);return e.jsx(ut,{nodeRef:x,handle:".window-header",onMouseDown:()=>a(t),disabled:d,position:d?{x:0,y:0}:void 0,children:e.jsx(fo,{ref:x,$zIndex:c,$left:p.left,$top:p.top,children:e.jsxs(ft,{style:{width:s,maxWidth:"95vw"},className:"window",children:[e.jsxs(gt,{className:"window-header",style:{display:"flex",alignItems:"center",justifyContent:"space-between",cursor:d?"default":"grab"},children:[e.jsx("span",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:o}),e.jsx(N,{onClick:()=>l(t),size:"sm",square:!0,children:e.jsx("span",{style:{fontWeight:"bold",transform:"translateY(-1px)"},children:"x"})})]}),e.jsx(mt,{style:{padding:0},children:r})]})})})},bo=()=>{const[t,o]=i.useState(window.innerWidth<=768);i.useEffect(()=>{const s=()=>o(window.innerWidth<=768);return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]);const[r,l]=i.useState({music:{id:"music",title:"last.fm",isOpen:!0,zIndex:1,content:e.jsx(An,{}),width:"300px",desktopPos:{top:"20px",left:"20px"}},bluesky:{id:"bluesky",title:"bluesky",isOpen:!0,zIndex:2,content:e.jsx(Qn,{}),width:"480px",desktopPos:{top:"20px",left:"340px"}},xbox:{id:"xbox",title:"xbox",isOpen:!0,zIndex:1,content:e.jsx(ho,{}),width:"350px",desktopPos:{top:"20px",left:"840px"}}}),a=s=>{l(x=>({...x,[s]:{...x[s],isOpen:!1}}))},c=s=>{t||l(x=>{const f={...x},m=Math.max(...Object.values(f).map(h=>h.zIndex));return f[s].zIndex<=m&&(f[s]={...f[s],zIndex:m+1}),f})},p=()=>{l(s=>{const x={...s};return Object.keys(x).forEach(f=>{x[f].isOpen=!0,x[f].zIndex=1}),x.music.zIndex=1,x.bluesky.zIndex=2,x.xbox.zIndex=1,x})},d=Object.values(r).every(s=>!s.isOpen);return e.jsxs(uo,{children:[Object.values(r).map(s=>s.isOpen&&e.jsx(mo,{id:s.id,title:s.title,onClose:a,onFocus:c,zIndex:s.zIndex,desktopPos:s.desktopPos,isMobile:t,windowWidth:s.width,children:s.content},`${s.id}-${t}`)),d&&e.jsx(go,{children:e.jsx(N,{onClick:p,style:{width:"200px",height:"50px",fontWeight:"bold"},children:"Reiniciar Sistema"})})]})},yo=n.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    padding: 20px;
`,vo=n.div`
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
`,jo=n.img`
    width: 48px;
    height: 48px;
    margin-bottom: 8px;
    image-rendering: pixelated;
`,wo=n.span`
    font-size: 1rem;
    line-height: 1.2;
    word-break: break-word;
`,Te=n.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 1rem;
`,Je=n.img`
    width: 100%;
    max-width: 100%; /* Responsive image */
    height: auto;
    border: 2px solid ${({theme:t})=>t.borderDark};
    align-self: center;
`,ko=({onNavigate:t})=>{const[o,r]=i.useState(null),[l,a]=i.useState(window.innerWidth<=768),[c,p]=i.useState(400),d=i.useRef(null);oe.useEffect(()=>{const m=()=>a(window.innerWidth<=768);return window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[]),oe.useEffect(()=>{if(o&&d.current){const m=()=>{const S=d.current.offsetHeight;p(Math.max(400,S+150))};m();const h=new ResizeObserver(m);return h.observe(d.current),()=>h.disconnect()}else p(400)},[o]),oe.useEffect(()=>(o&&l?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[o,l]);const s=[{id:1,name:"Hangul Hangover",icon:"https://win98icons.alexmeub.com/icons/png/console_prompt-0.png"},{id:2,name:"Legado Digital",icon:"https://win98icons.alexmeub.com/icons/png/executable-0.png"},{id:3,name:"Projeto 3.msi",icon:"https://win98icons.alexmeub.com/icons/png/installer_file_gear-0.png"}],x=m=>{switch(m){case 1:return e.jsxs(Te,{children:[e.jsx("p",{style:{fontWeight:"bold"},children:"Um estudo sobre tipografia e café."}),e.jsx(Je,{src:"https://placehold.co/600x400/png?text=Hangul+Foto+1",alt:"Hangul Preview"}),e.jsx("p",{children:"Hangul Hangover é um projeto que explora a intersecção entre a estética do alfabeto coreano e a cultura do café noturno. Desenvolvido com foco em legibilidade e atmosfera."}),e.jsx(Je,{src:"https://placehold.co/600x400/png?text=Hangul+Foto+2",alt:"Hangul Preview 2"}),e.jsx("p",{children:"Mais detalhes sobre o processo criativo, ferramentas utilizadas e o resultado final. A tipografia foi desenhada para funcionar bem em ambientes com pouca luz, lembrando displays CRT antigos."})]});case 2:return e.jsxs(Te,{children:[e.jsx("p",{children:"Arquivos preservados do passado. Estes são backups estáticos dos meus perfis no Orkut e Twitter."}),e.jsx("p",{children:"Navegue como se estivesse anos atrás."}),e.jsxs("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:[e.jsx(N,{onClick:()=>t("orkut"),size:"lg",style:{fontWeight:"bold"},children:"Acessar Orkut (2014)"}),e.jsx(N,{onClick:()=>t("twitter"),size:"lg",style:{fontWeight:"bold"},children:"Acessar Twitter"}),e.jsx(N,{onClick:()=>t("instagram"),size:"lg",style:{fontWeight:"bold"},children:"Acessar Instagram"})]})]});case 3:return e.jsx(Te,{children:e.jsx("p",{children:"Detalhes do Projeto 3 virão em breve."})});default:return e.jsx("p",{children:"Conteúdo em desenvolvimento..."})}},f=m=>{const h=s.find(S=>S.id===m);return h?h.name:"Projeto"};return e.jsxs("div",{style:{position:"relative",width:"100%",minHeight:`${c}px`,display:"flex",flexDirection:"column",alignItems:"center",transition:"min-height 0.3s ease"},children:[e.jsx(yo,{children:s.map(m=>e.jsxs(vo,{onClick:()=>r(m.id),children:[e.jsx(jo,{src:m.icon,alt:m.name}),e.jsx(wo,{children:m.name})]},m.id))}),o&&(l?e.jsx("div",{style:{position:"fixed",top:"40px",left:0,width:"100vw",height:"calc(100vh - 40px)",zIndex:2e3,display:"flex",alignItems:"flex-start",justifyContent:"center",overflowY:"auto",WebkitOverflowScrolling:"touch",paddingBottom:"150px"},onClick:m=>{m.target===m.currentTarget&&r(null)},children:e.jsx(xe,{id:`project-${o}`,title:f(o),onClose:()=>r(null),onFocus:()=>{},isMobile:!0,style:{width:"90%",maxWidth:"600px",marginTop:"20px",marginBottom:"20px",position:"relative"},windowStyle:{width:"100%",display:"flex",flexDirection:"column"},children:e.jsx("div",{style:{padding:0,display:"flex",flexDirection:"column"},children:x(o)})})}):e.jsx(xe,{id:`project-${o}`,title:f(o),onClose:()=>r(null),onFocus:()=>{},isMobile:!1,style:{position:"absolute",zIndex:1e3,top:"0px",left:"15vw",width:"100vw",minWidth:"320px",maxWidth:"1000px"},windowStyle:{width:"100%",maxWidth:"100%"},children:e.jsx("div",{ref:d,style:{padding:0,height:"100%",display:"flex",flexDirection:"column"},children:x(o)})}))]})},$e=new Map,ge=async t=>{if(!Ve||!t)return"";if(t.startsWith("http"))return t;let o=t;if(o.startsWith("/src/data/")?o=o.replace("/src/data/",""):o.startsWith("src/data/")&&(o=o.replace("src/data/","")),o.startsWith("/")&&(o=o.substring(1)),$e.has(o))return $e.get(o);try{const r=on(Ve,o),l=await rn(r);return $e.set(o,l),l}catch(r){return console.error(`[StorageLoader] Error fetching URL for ${o}:`,r),""}},J=async t=>{const o=await ge(t);if(!o)return null;try{const r=await fetch(o);if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);return await r.json()}catch(r){return console.error(`[StorageLoader] Error fetching JSON ${t}:`,r),null}},de=t=>{if(!t)return"";if(t.startsWith("http"))return t;let o=t;return o.startsWith("/src/data/")?o=o.replace("/src/data/",""):o.startsWith("src/data/")&&(o=o.replace("src/data/","")),o.startsWith("/")&&(o=o.substring(1)),o.startsWith("tweets_media/")||o.startsWith("profile_media/")?`twitter/data/${o}`:o},So=async t=>J(`twitter/chunks/chunk_${t}.json`),ze=n.div`
  width: 100%;
  height: 100%;
  background-color: #262626;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
`,Co=n.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${t=>t.$loaded?1:0};
  transition: opacity 0.3s;
`,Io=n.video`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${t=>t.$loaded?1:0};
  transition: opacity 0.3s;
`,H=({path:t,type:o="image",alt:r,className:l,controls:a,autoPlay:c,loop:p,muted:d,...s})=>{const[x,f]=i.useState(""),[m,h]=i.useState(!0),[S,k]=i.useState(!1);i.useEffect(()=>{let j=!0;return t&&(async()=>{h(!0),k(!1);try{const $=await ge(t);j&&($?f($):k(!0))}catch($){console.error("Error loading media:",t,$),j&&k(!0)}})(),()=>{j=!1}},[t]);const v=()=>h(!1),T=()=>{h(!1),k(!0)};return t?S&&!x?e.jsx(ze,{className:l,children:"Erro"}):e.jsxs(e.Fragment,{children:[m&&e.jsx(ze,{className:l}),o==="video"?e.jsx(Io,{src:x,className:l,$loaded:!m,onLoadedData:v,onError:T,controls:a,autoPlay:c,loop:p,muted:d,playsInline:!0,...s}):e.jsx(Co,{src:x,alt:r||"Media",className:l,$loaded:!m,onLoad:v,onError:T,...s})]}):e.jsx(ze,{className:l})},To=n.div`
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
`,$o=n.div`
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
`,zo=n.div`
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
`,Eo=n.div`
  background: #fff;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 12px;
  position: relative;
`,_o=n.div`
  background-color: #0084B4;
  background-image: url(${t=>t.$bg});
  background-size: cover;
  background-position: center;
  height: 95px;
  width: 100%;
`,Po=n.div`
  padding: 12px;
`,Mo=n.div`
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
`,Lo=n.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 1.2;
  color: #292f33;
`,Ao=n.div`
  font-size: 12px;
  color: #8899a6;
  margin-bottom: 10px;
`,Do=n.div`
  font-size: 14px;
  margin-bottom: 10px;
`,Ze=n.div`
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
`,Qe=n.div`
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
`,et=n.span`
  display: block;
  font-size: 18px;
  color: #0084B4;
  font-weight: bold;
  margin-top: 2px;
`,Oo=n.div`
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
`;const Wo=n.div`
  /* padding: 0; */
`,Bo=n.div`
  padding: 12px 15px;
  border-bottom: 1px solid #e1e8ed;
  display: flex;
  gap: 10px;
  transition: background-color 0.1s;
  
  &:hover {
    background-color: #f5f8fa;
  }
`,Fo=n.div`
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
`,Ho=n.div`
  flex: 1;
  min-width: 0;
`,No=n.div`
  margin-bottom: 2px;
`,Uo=n.span`
  font-weight: bold;
  color: #292f33;
  margin-right: 5px;
`,Go=n.span`
  color: #8899a6;
  font-size: 13px;
  margin-right: 5px;
`,Vo=n.span`
  color: #8899a6;
  font-size: 13px;
  
  &::before {
    content: "·";
    margin: 0 3px;
  }
`,Ko=n.div`
  font-size: 14px;
  line-height: 18px;
  color: #292f33;
  white-space: pre-wrap;
  margin-bottom: 10px;
`,Xo=n.div`
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
`,qo=n.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columns as requested */
  gap: 5px;
  padding: 10px;
`,Yo=n.div`
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
`,Jo=n.div`
  padding: 20px;
  text-align: center;
  color: #8899a6;
`,Zo=n.div`
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
`,Qo=`
  @keyframes slideInRight {
    from { transform: translateX(50px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
`,ei=`
  @keyframes slideInLeft {
    from { transform: translateX(-50px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
`,ti=n.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  animation: ${t=>t.direction==="next"?"slideInRight":"slideInLeft"} 0.3s ease-out;
  ${Qo}
  ${ei}
`,ni=n.div`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  max-height: 100dvh;
`,oi=n(H)`
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
`,ii=n.div`
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
`;const ri=n.div`
  color: #8899a6;
  font-size: 13px;
  margin-top: 10px;
  border-top: 1px solid #38444d;
  padding-top: 8px;
`,si=n.div`
  font-size: 15px;
  line-height: 1.5;
  color: #fff;
  white-space: pre-wrap;
`,ai=n.button`
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
`,li=`
  @keyframes shimmer {
    0% { background-position: -200px 0; }
    100% { background-position: 200px 0; }
  }
`,Ne=n.div`
  background: linear-gradient(90deg, #e8e8e8 0px, #f5f5f5 50px, #e8e8e8 100px);
  background-size: 200px 100%;
  animation: shimmer 1.2s infinite linear;
  ${li}
`,di=n.div`
  padding: 12px;
  display: flex;
  gap: 12px;
  border-bottom: 1px solid #e1e8ed;
`,ci=n(Ne)`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  flex-shrink: 0;
`,pi=n.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Ee=n(Ne)`
  height: ${t=>t.height||"14px"};
  width: ${t=>t.width||"100%"};
  border-radius: 4px;
`,xi=n(Ne)`
  height: 180px;
  border-radius: 12px;
  margin-top: 8px;
`,hi=()=>e.jsx(e.Fragment,{children:[...Array(5)].map((t,o)=>e.jsxs(di,{children:[e.jsx(ci,{}),e.jsxs(pi,{children:[e.jsx(Ee,{width:"40%",height:"16px"}),e.jsx(Ee,{width:"80%"}),e.jsx(Ee,{width:"60%"}),o%2===0&&e.jsx(xi,{})]})]},o))}),ui=()=>{const t=de("/src/data/twitter/data/profile_media/125515755-hxB9hFTM.png"),o=de("/src/data/twitter/data/profile_media/125515755-1596834705.jpg"),[r,l]=i.useState("");i.useEffect(()=>{ge(o).then(l)},[o]);const[a,c]=i.useState([]),[p,d]=i.useState([]),[s,x]=i.useState(!0),[f,m]=i.useState(null),[h,S]=i.useState(0),[k,v]=i.useState("tweets"),[T,j]=i.useState(null),[y,$]=i.useState("next"),[b,M]=i.useState(null),[R,F]=i.useState(60),L=i.useRef(null),E=i.useRef(null),_=i.useRef(!1),z=20,O=60,U=(u,C=!1)=>{if(!u)return"";const P=new Date(u),A=P.toLocaleDateString("pt-BR",{day:"numeric",month:"short",year:"numeric"}).replace(/ de /g," ");return C?`${P.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"})} · ${A} `:A},[G,W]=i.useState(!0),I=i.useRef(null),g=()=>{W(!0),I.current&&clearTimeout(I.current),I.current=setTimeout(()=>{W(!1)},3e3)},w=()=>{g()},D=()=>{I.current&&clearTimeout(I.current),W(!1)},K=u=>{if(u.stopPropagation(),u.target===u.currentTarget){le();return}const C=u.target.tagName;(C==="IMG"||C==="VIDEO")&&(W(P=>!P),G||(I.current&&clearTimeout(I.current),I.current=setTimeout(()=>{W(!1)},3e3)))},B=u=>{let C=u.text;return C=C.replace(/https:\/\/t\.co\/\w+/g,""),C.trim()},ne=(u,C)=>u.filename?de(`tweets_media/${C}-${u.filename}`):"",ie=(u,C)=>{if(!u.filename)return"";if(u.type==="video"||u.type==="animated_gif"){const P=u.filename.substring(0,u.filename.lastIndexOf("."))||u.filename;return de(`tweets_media/thumbs/${C}-${P}.jpg`)}return de(`tweets_media/medium/${C}-${u.filename}`)},ae=(u,C)=>u.filename?u.type==="video"||u.type==="animated_gif"?ne(u,C):de(`tweets_media/medium/${C}-${u.filename}`):"",X=oe.useMemo(()=>a.flatMap(u=>{if(!u.media||u.media.length===0)return[];const C=B(u),P=U(u.date,!0);return u.media.map(A=>{const te=ne(A,u.id),Q=ie(A,u.id),se=ae(A,u.id);return{...A,tweetId:u.id,date:P,text:C,localPath:te,thumbPath:Q,mediumPath:se}})}),[a]),Y=oe.useMemo(()=>X.filter(u=>u.mediumPath||u.localPath),[X]),he=u=>{const C=Y.findIndex(P=>P.mediumPath===u);C!==-1&&(j(C),W(!0),g())},le=()=>{j(null),I.current&&clearTimeout(I.current)};i.useEffect(()=>{const u=C=>{T!==null&&(C.key==="Escape"?le():C.key==="ArrowRight"?($("next"),j(P=>(P+1)%Y.length)):C.key==="ArrowLeft"&&($("prev"),j(P=>(P-1+Y.length)%Y.length)))};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[T,Y]);const Se=u=>{M(u.targetTouches[0].clientX)},zt=u=>{if(b===null)return;const C=u.changedTouches[0].clientX,P=b-C;P>50?($("next"),j(A=>(A+1)%Y.length)):P<-50&&($("prev"),j(A=>(A-1+Y.length)%Y.length)),M(null)};i.useEffect(()=>(T!==null?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[T]);const Ce=async u=>{if(_.current)return!1;_.current=!0,console.log(`Loading chunk ${u}...`);try{const C=await So(u);return C&&C.length>0?(c(P=>{const A=new Set(P.map(Q=>Q.id)),te=C.filter(Q=>!A.has(Q.id));return[...P,...te]}),u===0&&(d(C.slice(0,z)),S(z)),!0):!1}catch(C){return console.error("Error loading chunk",u,C),!1}finally{_.current=!1}};i.useEffect(()=>{(async()=>(x(!0),await Ce(0),x(!1)))()},[]),i.useEffect(()=>{if(s||k!=="tweets")return;const u=new IntersectionObserver(C=>{C[0].isIntersecting&&Et()},{rootMargin:"400px"});return L.current&&u.observe(L.current),()=>{L.current&&u.unobserve(L.current)}},[s,a,h,k]);const[Ie,Ue]=i.useState(0),Et=async()=>{if(h<a.length){const u=Math.min(h+z,a.length);d(C=>[...C,...a.slice(h,u)]),S(u)}else{const u=Ie+1;await Ce(u)&&Ue(u)}};i.useEffect(()=>{if(a.length>p.length&&h===p.length&&!s){const u=Math.min(h+z,a.length);d(C=>[...C,...a.slice(h,u)]),S(u)}},[a.length]),i.useEffect(()=>{if(s||k!=="media")return;const u=new IntersectionObserver(C=>{if(C[0].isIntersecting)if(R<X.length)F(P=>Math.min(P+O,X.length));else{const P=Ie+1;Ce(P).then(A=>{A&&Ue(P)})}},{rootMargin:"600px"});return E.current&&u.observe(E.current),()=>{E.current&&u.unobserve(E.current)}},[s,k,R,X.length,Ie]),i.useEffect(()=>{if(s||a.length===0)return;const u=h,C=Math.min(h+z*2,a.length);a.slice(u,C).forEach(A=>{A.media&&A.media.length>0&&A.media.forEach(te=>{if(te.type!=="video"&&te.type!=="animated_gif"){const Q=ie(te,A.id);Q&&ge(Q).then(se=>{if(se){const me=new Image;me.src=se}})}})})},[h,a,s]);const _t=u=>{if(!u.media||u.media.length===0)return null;const C=u.media,P=C.length>1;return e.jsx(Xo,{$isGrid:P,children:C.map((A,te)=>{const Q=A.type==="video"||A.type==="animated_gif",se=ne(A,u.id),me=ie(A,u.id),Pt=ae(A,u.id);return Q&&!se||!Q&&!me?null:Q?e.jsx(H,{path:se,type:"video",controls:!0,preload:"none"},te):e.jsx(H,{path:me,alt:"Tweet media",loading:"lazy",style:{cursor:"pointer"},onClick:()=>he(Pt)},te)})})},re=T!==null?Y[T]:null;return f?e.jsx("div",{style:{color:"white",padding:20,textAlign:"center"},children:f}):e.jsxs(To,{children:[e.jsxs($o,{children:[e.jsx(zo,{children:e.jsxs(Eo,{children:[e.jsx(_o,{$bg:r}),e.jsxs(Po,{children:[e.jsx(Mo,{children:e.jsx(H,{path:t,alt:"Avatar"})}),e.jsx(Lo,{children:"matheus"}),e.jsx(Ao,{children:"@matheusdanoite"}),e.jsx(Do,{children:"desventuras em série"}),e.jsx(Ze,{children:"Guarapuava, PR"}),e.jsx(Ze,{children:"Criado em 22 de março de 2010"}),e.jsxs(Ro,{children:[e.jsxs(Qe,{onClick:()=>v("tweets"),children:["Tweets",e.jsx(et,{children:"26.014"})]}),e.jsxs(Qe,{onClick:()=>v("media"),children:["Mídia",e.jsx(et,{children:"3.353"})]})]})]})]})}),e.jsxs(Oo,{children:[k==="tweets"&&e.jsxs(Wo,{children:[s&&e.jsx(hi,{}),!s&&p.map((u,C)=>{U(u.date);const P=B(u);return a.findIndex(A=>A.id===u.id),e.jsxs(Bo,{children:[e.jsx(Fo,{children:e.jsx(H,{path:t,alt:"Avatar"})}),e.jsxs(Ho,{children:[e.jsxs(No,{children:[e.jsx(Uo,{children:"matheus"}),e.jsx(Go,{children:"@matheusdanoite"}),e.jsx(Vo,{children:U(u.date,!0)})]}),e.jsx(Ko,{children:P}),_t(u)]})]},u.id||C)}),!s&&h<a.length&&e.jsx(Jo,{ref:L,children:"Carregando mais..."})]}),k==="media"&&e.jsxs(qo,{children:[X.slice(0,R).map((u,C)=>{if(!u.thumbPath)return null;const P=u.type==="video"||u.type==="animated_gif";return e.jsxs(Yo,{children:[e.jsx(H,{path:u.path,type:u.type,alt:"Media",loading:"lazy",style:{cursor:"pointer"},onClick:()=>he(u.tweetIndex,u.mediaIndex)}),P&&e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"white",backgroundColor:"rgba(0,0,0,0.5)",borderRadius:"50%",padding:"10px"},children:"▶"})]},C)}),e.jsx("div",{ref:E,style:{gridColumn:"1 / -1",padding:"20px",textAlign:"center",color:"#999",fontSize:"11px"},children:R<X.length?"carregando mais mídia...":"carregando mais tweets..."})]})]})]}),re&&e.jsxs(Zo,{onClick:le,onTouchStart:Se,onTouchEnd:zt,onMouseMove:w,onMouseLeave:D,children:[e.jsx(ai,{onClick:le,children:"×"}),e.jsx(ti,{direction:y,onClick:K,children:e.jsxs(ni,{children:[re.type==="video"||re.type==="animated_gif"?e.jsx(H,{path:re.mediumPath,type:"video",controls:!0,autoPlay:!0,style:{maxWidth:"100vw",maxHeight:"100dvh",width:"auto",height:"auto",boxShadow:"0 0 20px rgba(0,0,0,0.5)",display:"block"}}):e.jsx(oi,{path:re.mediumPath,alt:"Full view"}),e.jsxs(ii,{$visible:G,children:[e.jsx(si,{children:re.text}),e.jsx(ri,{children:re.date})]})]})},T)]})]})},tt=n.div`
  background-color: #000;
  min-height: 100vh;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`,fi=n.div`
  width: 100%;
  max-width: 935px; /* Instagram web max width */
  padding: 30px 20px 0;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 736px) {
    padding: 0;
    width: 100%;
  }
`,gi=n.header`
  display: flex;
  margin-bottom: 20px;
  align-items: center; /* Vertically center content with profile pic */
  
  @media (max-width: 736px) {
    padding: 14px;
    margin-bottom: 0;
    border-bottom: 1px solid #262626;
  }
`,mi=n.div`
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 30px;
  display: flex;
  justify-content: center;
  
  @media (max-width: 736px) {
    flex-grow: 0;
    margin-right: 20px;
  }
`,bi=n(H)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #363636;
  
  @media (max-width: 736px) {
    width: 77px;
    height: 77px;
  }
`,yi=n.section`
  flex-grow: 2;
  flex-basis: 30px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Ensure content is centered if height matches image */
  
   @media (max-width: 736px) {
     flex-grow: 1;
   }
`,vi=n.div`
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
`,ji=n.ul`
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
`,wi=n.div`
  font-size: 14px;
  margin-bottom: 12px;
  
  h1 {
    font-weight: 400;
    font-size: 14px;
    margin: 0;
  }
`,ki=n.div`
  font-size: 14px;
  white-space: normal;
  line-height: 18px;
  color: #fff;
`,Si=n.div`
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
`,Ci=()=>e.jsxs("svg",{"aria-label":"",color:"currentColor",fill:"currentColor",height:"24",role:"img",viewBox:"0 0 24 24",width:"24",children:[e.jsx("rect",{fill:"none",height:"18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",width:"18",x:"3",y:"3"}),e.jsx("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",x1:"9.015",x2:"9.015",y1:"3",y2:"21"}),e.jsx("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",x1:"14.985",x2:"14.985",y1:"3",y2:"21"}),e.jsx("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",x1:"21",x2:"3",y1:"9.015",y2:"9.015"}),e.jsx("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",x1:"21",x2:"3",y1:"14.985",y2:"14.985"})]}),Ii=()=>e.jsxs("svg",{"aria-label":"",color:"currentColor",fill:"currentColor",height:"24",role:"img",viewBox:"0 0 24 24",width:"24",children:[e.jsx("line",{fill:"none",stroke:"currentColor",strokeLinejoin:"round",strokeWidth:"2",x1:"2.049",x2:"21.95",y1:"7.002",y2:"7.002"}),e.jsx("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",x1:"13.504",x2:"16.362",y1:"2.001",y2:"7.002"}),e.jsx("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",x1:"7.207",x2:"10.002",y1:"2.11",y2:"7.002"}),e.jsx("path",{d:"M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"})]}),Ti=()=>e.jsxs("svg",{"aria-label":"",color:"currentColor",fill:"currentColor",height:"24",role:"img",viewBox:"0 0 24 24",width:"24",children:[e.jsx("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",x1:"21",x2:"3",y1:"10",y2:"10"}),e.jsx("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",x1:"21",x2:"3",y1:"6",y2:"6"}),e.jsx("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",x1:"21",x2:"3",y1:"14",y2:"14"}),e.jsx("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",x1:"21",x2:"3",y1:"18",y2:"18"})]}),$i=n.div`
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
`,zi=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  min-width: 85px; /* Ensure space for ring (77px) + padding/border without cutting */
  padding: 5px; /* Add padding to item to prevent hover effects or rings from touching edges */
`,Ei=n.div`
  width: 77px;
  height: 77px;
  border-radius: 50%;
  padding: 3px;
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`,_i=n(H)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid #000;
  object-fit: cover;
`,Pi=n.span`
  font-size: 12px;
  color: #fff;
  text-align: center;
  max-width: 80px;
  line-height: 1.2;
`,Mi=n.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px; /* classic instagram gap usually small */
  padding-bottom: 50px;
  width: 100%;
`,Li=n.div`
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
`,Ai=n.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns like grid */
  gap: 4px;
  padding-bottom: 50px;
  width: 100%;
`,Di=n.div`
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
`,Oi=n.div`
  background: #000;
  border: 1px solid #262626;
  border-radius: 8px;
  margin-bottom: 24px;
  color: #fff;
`,Wi=n.div`
  display: flex;
  align-items: center;
  padding: 14px;
`,vt=n.div`
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
`,jt=n(H)`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: ${t=>t.$hasStories?"2px solid #000":"none"};
    object-fit: cover;
`,Bi=n.div`
  width: 100%;
  position: relative;
  background-color: #000;
  min-height: 300px;
  overflow: hidden;

  &:hover button {
    opacity: 1;
  }
`,wt=n.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${t=>-(t.$index*100)}%);
  width: 100%;
  height: 100%;
`,kt=n.div`
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
`,Fi=n.div`
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
`;const Hi=n.div`
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
`;const Ni=n.div`
  position: absolute;
  top: 10px;
  left: 0;
  width: 100%;
  padding: 0 5px;
  display: flex;
  gap: 3px;
  z-index: 10;
`,Ui=n.div`
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
`,Gi=n.div`
  width: 100%;
  height: 100%;
  img, video {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`,nt=n.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 50%;
  z-index: 5;
  cursor: pointer;
  ${t=>t.$left?"left: 0;":"right: 0;"}
`,Vi=n.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120px;
  background: linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 100%);
  z-index: 10;
  pointer-events: none;
`,Ki=n.div`
  position: absolute;
  top: 20px;
  left: 0;
  width: 100%;
  padding: 0 16px;
  display: flex;
  align-items: center;
  z-index: 20;
  color: #fff;
`,Xi=n.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`,qi=n.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`,Yi=n.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`,Ji=n.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 2px;
`,Zi=n.div`
  cursor: pointer;
  padding: 8px;
  margin-right: -8px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    filter: drop-shadow(0 0 2px rgba(0,0,0,0.5));
  }
`,ot=n.button`
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
`,Qi=n.div`
  width: 100%;
  max-width: 400px;
  height: 100vh;
  position: relative;
  overflow: hidden;
`,er=n.div`
  display: flex;
  width: 100%;
  height: 100%;
  transition: ${t=>t.$animating?"transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)":"none"};
  transform: translateX(${t=>-(t.$offset*100)}%);
`,it=n.div`
  min-width: 100%;
  width: 100%;
  height: 100%;
  position: relative;
  background: transparent;
  display: flex;
  justify-content: center;
`,tr=n.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: transparent;
  display: flex;
  justify-content: center;
`,nr=n.div`
  position: relative;
  height: 100%;
  aspect-ratio: 9/16;
  background: #000;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,Be=t=>t,or=t=>{const o=new Date(t),l=(new Date-o)/1e3;return l<60?"Agora":l<3600?`${Math.floor(l/60)} min`:l<86400?`${Math.floor(l/3600)} h`:l<604800?`${Math.floor(l/86400)} d`:o.toLocaleDateString("pt-BR",{day:"numeric",month:"short",year:"numeric"})},Fe=t=>{if(!t)return"";const o=document.createElement("textarea");return o.innerHTML=t,o.value},ir=({initialDate:t,storyDates:o,stories:r,onClose:l,profilePic:a,singleDayMode:c=!1})=>{const[p,d]=i.useState(o.indexOf(t)),[s,x]=i.useState(0),[f,m]=i.useState(!1),[h,S]=i.useState(o.indexOf(t)),[k,v]=i.useState(null),[T,j]=i.useState(!0),[y,$]=i.useState(0),[b,M]=i.useState(""),R=i.useRef(null);i.useRef(null);const F=i.useRef(null);i.useEffect(()=>{_&&_.uri?ge(_.uri).then(g=>M(g)):M("")},[_]);const L=o[p],E=[...r[L]||[]].sort((g,w)=>new Date(g.date)-new Date(w.date)),_=E[s],z=oe.useCallback((g,w)=>{f||(v(g),m(!0),S(g),setTimeout(()=>{d(g),x(w==="next"?0:r[o[g]].length-1),m(!1),v(null)},400))},[f,r,o]),O=oe.useCallback(()=>{f||(s<E.length-1?(x(g=>g+1),$(0)):!c&&p<o.length-1?z(p+1,"next"):l())},[f,s,E.length,p,o,z,l,c]),U=oe.useCallback(()=>{f||(s>0?(x(g=>g-1),$(0)):!c&&p>0&&z(p-1,"prev"))},[f,s,p,z,c]),G=()=>{j(!0),R.current&&clearTimeout(R.current),R.current=setTimeout(()=>{j(!1)},3e3)};i.useEffect(()=>(G(),()=>{R.current&&clearTimeout(R.current)}),[s,p]),i.useEffect(()=>{const g=w=>{w.key==="ArrowRight"&&O(),w.key==="ArrowLeft"&&U(),w.key==="Escape"&&l()};return window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[O,U,l]),i.useEffect(()=>{if(f||!_||!L||($(0),_.type==="video"))return;const g=5e3,w=50,D=w/g*100;let K=0;const B=setInterval(()=>{K+=D,K>=100?(clearInterval(B),$(100),O()):$(K)},w);return()=>clearInterval(B)},[f,_?.date,L,O]);const W=()=>{if(F.current){const g=F.current.currentTime/F.current.duration*100;$(g)}};if(!_)return null;const I=(g,w,D=!1)=>{const K=[...r[w]||[]].sort((X,Y)=>new Date(X.date)-new Date(Y.date)),B=K[g]||K[0];if(!B)return null;const ne=new Date(B.date),ie=ne.toLocaleDateString("pt-BR",{day:"2-digit",month:"short",year:"numeric",timeZone:"UTC"}),ae=ne.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit",timeZone:"UTC"});return e.jsx(tr,{children:e.jsxs(nr,{children:[e.jsx(Vi,{}),e.jsxs(Ki,{children:[e.jsx(Xi,{src:a}),e.jsxs(qi,{children:[e.jsx(Yi,{children:"matheusdodia"}),e.jsxs(Ji,{children:[ie," • ",ae]})]}),e.jsx(Zi,{onClick:l,children:e.jsxs("svg",{"aria-label":"Fechar",color:"#ffffff",fill:"#ffffff",height:"18",role:"img",viewBox:"0 0 24 24",width:"18",children:[e.jsx("polyline",{fill:"none",points:"20.643 3.357 12 12 3.353 20.647",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3"}),e.jsx("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3",x1:"20.649",x2:"3.354",y1:"20.649",y2:"3.354"})]})})]}),e.jsx(Ni,{children:K.map((X,Y)=>{const he=!f&&Y===g&&w===L,le=D?!(k>p):w===L?Y<g:k>p,Se=he?y:le?100:0;return e.jsx(Ui,{children:e.jsx("div",{style:{width:`${Se}%`,transition:he&&B.type==="image"?"width 0.1s linear":"none"}})},Y)})}),e.jsx(Gi,{onMouseMove:G,children:_.type==="video"?e.jsx("video",{ref:D?null:F,src:b,autoPlay:!0,playsInline:!0,muted:f||D,onTimeUpdate:D?null:W,onEnded:D?null:O,onClick:X=>X.stopPropagation()}):e.jsx("img",{src:b,alt:"story",onClick:X=>X.stopPropagation()})}),!f&&!D&&e.jsxs(e.Fragment,{children:[e.jsx(ot,{$left:!0,$visible:T,onClick:U,title:"Anterior"}),e.jsx(ot,{$visible:T,onClick:O,title:"Próximo"}),e.jsx(nt,{$left:!0,onClick:U}),e.jsx(nt,{onClick:O})]})]})})};return e.jsx(Hi,{onClick:g=>{g.target===g.currentTarget&&l()},children:e.jsx(Qi,{children:e.jsx(er,{$animating:f,$offset:h,children:o.map((g,w)=>{const D=w===p,K=w===k,B=Math.abs(w-p)===1;return!D&&!K&&!B?e.jsx(it,{},g):e.jsx(it,{children:I(w===p?s:w<p?r[g].length-1:0,g,!D)},g)})})})})},rr=n.div`
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
`,lr=n.img`
  height: 100%;
  width: auto;
  max-width: 100%;
  object-fit: contain;
`,dr=n.video`
  height: 100%;
  width: auto;
  max-width: 100%;
  object-fit: contain;
`,cr=n.div`
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
`,pr=n.div`
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
`;const xr=n.span`
  font-weight: 600;
  font-size: 14px;
  color: #fff;
`,hr=n.div`
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
`,rt=n.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  align-items: flex-start;
`,st=n.div`
  flex: 1;
  white-space: pre-wrap;
  line-height: 1.4;
  
  span {
    font-weight: 600;
    margin-right: 6px;
  }
`,ur=n.div`
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
`;const fr=n.div`
  font-size: 12px;
  color: #a8a8a8;
  text-transform: uppercase;
  margin-bottom: 12px;
`,gr=n.button`
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
`,mr=({post:t,onClose:o,profilePic:r,stories:l,onProfileClick:a})=>{const[c,p]=i.useState(0),[d,s]=i.useState(null),x=j=>{const{naturalWidth:y,naturalHeight:$}=j.target;y&&$&&s(y/$)};if(i.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[]),!t)return null;t.media[c];const f=t.media.length>1,m=j=>{j.stopPropagation(),c<t.media.length-1&&p(y=>y+1)},h=j=>{j.stopPropagation(),c>0&&p(y=>y-1)};i.useEffect(()=>{const j=y=>{y.key==="ArrowRight"&&p($=>$<t.media.length-1?$+1:$),y.key==="ArrowLeft"&&p($=>$>0?$-1:$),y.key==="Escape"&&o()};return window.addEventListener("keydown",j),()=>window.removeEventListener("keydown",j)},[t.media.length,o]);const S=j=>{j.target===j.currentTarget&&o()},k=j=>j?new Date(j).toLocaleDateString("pt-BR",{day:"numeric",month:"long",year:"numeric"}):"",v=t.date.split("T")[0],T=l&&l[v]&&l[v].length>0;return e.jsxs(rr,{onClick:S,children:[e.jsx(gr,{onClick:o,children:"×"}),e.jsxs(sr,{style:{width:"fit-content",backgroundColor:"transparent"},children:[e.jsxs(ar,{aspectRatio:d,children:[f&&e.jsxs(e.Fragment,{children:[c>0&&e.jsx(ve,{$left:!0,onClick:h}),c<t.media.length-1&&e.jsx(ve,{onClick:m})]}),e.jsx(wt,{$index:c,children:t.media.map((j,y)=>e.jsx(kt,{children:j.type==="video"?e.jsx(dr,{src:Be(j.uri),controls:!0,autoPlay:y===c,onLoadedMetadata:y===0?x:void 0}):e.jsx(lr,{src:Be(j.uri),alt:`Post media ${y}`,onLoad:y===0?x:void 0})},y))})]}),e.jsxs(cr,{children:[e.jsxs(pr,{children:[e.jsx(vt,{$hasStories:T,onClick:()=>T&&a(v),style:{width:"38px",height:"38px",marginRight:"12px"},children:e.jsx(jt,{src:r,$hasStories:T,style:{width:"100%",height:"100%"}})}),e.jsx(xr,{children:"matheusdodia"})]}),e.jsxs(hr,{children:[e.jsx(rt,{children:e.jsx(st,{children:Fe(t.description)})}),t.comments&&t.comments.map((j,y)=>e.jsx(rt,{children:e.jsx(st,{children:Fe(j.text)})},y))]}),e.jsx(ur,{children:e.jsx(fr,{children:k(t.date)})})]})]})]})},br=({post:t,profilePicSrc:o,formatDate:r,decodeHtml:l,getAssetUrl:a,stories:c,onProfileClick:p})=>{const[d,s]=i.useState(0),[x,f]=i.useState(null),m=j=>{const{naturalWidth:y,naturalHeight:$}=j.target;y&&$&&f(y/$)};t.media[d];const h=t.media.length>1,S=j=>{j.stopPropagation(),d<t.media.length-1&&s(y=>y+1)},k=j=>{j.stopPropagation(),d>0&&s(y=>y-1)},v=t.date.split("T")[0],T=c&&c[v]&&c[v].length>0;return e.jsxs(Oi,{children:[e.jsxs(Wi,{children:[e.jsx(vt,{$hasStories:T,onClick:()=>T&&p(v),children:e.jsx(jt,{src:o,$hasStories:T})}),e.jsx("span",{style:{fontWeight:600},children:"matheusdodia"}),e.jsx("span",{style:{marginLeft:"auto",color:"#8e8e8e",fontSize:"12px"},children:r(t.date)})]}),e.jsxs(Bi,{style:{aspectRatio:x||"auto"},children:[h&&e.jsxs(e.Fragment,{children:[d>0&&e.jsx(ve,{$left:!0,onClick:k}),d<t.media.length-1&&e.jsx(ve,{onClick:S})]}),e.jsx(wt,{$index:d,children:t.media.map((j,y)=>e.jsx(kt,{children:j.type==="video"?e.jsx("video",{src:a(j.uri),controls:y===d,onLoadedMetadata:y===0?m:void 0}):e.jsx("img",{src:a(j.uri),loading:"lazy",onLoad:y===0?m:void 0})},y))})]}),e.jsxs(Fi,{children:[e.jsx("div",{style:{fontSize:"14px",whiteSpace:"pre-wrap"},children:e.jsx("span",{children:l(t.description)})}),t.comments&&t.comments.length>0&&e.jsxs("div",{style:{fontSize:"14px"},children:[e.jsx("br",{}),t.comments.map((j,y)=>e.jsx("div",{style:{marginBottom:"4px",whiteSpace:"pre-wrap"},children:l(j.text)},y))]})]})]})},yr=()=>{const[t,o]=i.useState("posts"),[r,l]=i.useState(null),[a,c]=i.useState(!1),[p,d]=i.useState(!1),[s,x]=i.useState(null),[f,m]=i.useState({posts:[],stories:{},reels:[],loading:!0});i.useEffect(()=>{(async()=>{try{const[g,w,D]=await Promise.all([J("instagram/posts.json"),J("instagram/stories.json"),J("instagram/reels.json")]);m({posts:g||[],stories:w||{},reels:D||[],loading:!1})}catch(g){console.error("Failed to load Instagram data",g),m(w=>({...w,loading:!1}))}})()},[]);const{posts:h,stories:S,reels:k,loading:v}=f;if(v)return e.jsx(tt,{children:e.jsx("div",{style:{marginTop:100},children:"Carregando..."})});const T=Object.keys(S).sort((I,g)=>new Date(g)-new Date(I)),j=h.filter(I=>I.media[0].type==="video").length,y=Object.values(S).reduce((I,g)=>I+g.length,0),[$,b]=i.useState(!1),[M,R]=i.useState(10),[F,L]=i.useState(15),E=i.useRef(null),_=i.useRef(null);i.useEffect(()=>{if(t!=="feed")return;const I=new IntersectionObserver(g=>{g[0].isIntersecting&&R(w=>Math.min(w+10,h.length))},{rootMargin:"200px"});return E.current&&I.observe(E.current),()=>I.disconnect()},[t,h.length]),i.useEffect(()=>{if(t!=="posts")return;const I=new IntersectionObserver(g=>{g[0].isIntersecting&&L(w=>Math.min(w+15,h.length))},{rootMargin:"200px"});return _.current&&I.observe(_.current),()=>I.disconnect()},[t,h.length]);const z=()=>o("feed"),O=()=>o("posts"),U=(I,g=!1)=>{b(g),x(I),d(!0)},G=I=>{l(I)},W="/src/data/instagram/media/profile/202203/275015161_496804875327432_7143646680586312085_n_17894747972575070.jpg";return e.jsxs(tt,{children:[e.jsxs(fi,{children:[e.jsxs(gi,{children:[e.jsx(mi,{children:e.jsx(bi,{path:"instagram/media/profile.jpg",alt:"Profile"})}),e.jsxs(yi,{children:[e.jsx(vi,{children:e.jsx("h2",{children:"matheusdodia"})}),e.jsx(wi,{children:e.jsx("h1",{children:"Matheus José"})}),e.jsxs(ji,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:h.length})," posts"]}),e.jsxs("li",{children:[e.jsx("strong",{children:y})," stories"]}),e.jsxs("li",{children:[e.jsx("strong",{children:j})," reels"]})]}),e.jsx(ki,{children:e.jsx("span",{children:"meu diário (quase) secreto"})})]})]}),e.jsx($i,{children:T.map(I=>{const g=[...S[I]||[]].sort((ae,X)=>new Date(ae.date)-new Date(X.date));if(g.length===0)return null;const D=g[0].media[0].uri,[K,B,ne]=I.split("-"),ie=`${ne}/${B}/${K}`;return e.jsxs(zi,{onClick:()=>U(I,!1),children:[e.jsx(Ei,{children:e.jsx(_i,{path:D})}),e.jsx(Pi,{children:ie})]},I)})}),e.jsxs(Si,{children:[e.jsxs(_e,{$active:t==="posts",onClick:O,children:[e.jsx(Ci,{}),e.jsx("span",{children:"PUBLICAÇÕES"})]}),e.jsxs(_e,{$active:t==="reels",onClick:()=>o("reels"),children:[e.jsx(Ii,{}),e.jsx("span",{children:"REELS"})]}),e.jsxs(_e,{$active:t==="feed",onClick:z,children:[e.jsx(Ti,{}),e.jsx("span",{children:"FEED"})]})]}),t==="posts"&&e.jsxs(e.Fragment,{children:[e.jsx(Mi,{children:h.slice(0,F).map((I,g)=>{const w=I.media[0];return e.jsx(Li,{onClick:()=>G(I),children:e.jsx(H,{path:w.uri,type:w.type,alt:"Post"})},g)})}),F<h.length&&e.jsx("div",{ref:_,style:{height:"50px",width:"100%"}})]}),t==="reels"&&e.jsx(Ai,{children:k.map((I,g)=>{const w=I.media[0];return e.jsx(Di,{onClick:()=>G(I),children:e.jsx(H,{path:w.uri,type:w.type,alt:"Reel"})},I.media[0].uri||g)})}),t==="feed"&&e.jsxs(Ri,{children:[h.slice(0,M).map((I,g)=>e.jsx(br,{post:I,profilePicSrc:W,formatDate:or,decodeHtml:Fe,getAssetUrl:Be,stories:S,onProfileClick:w=>U(w,!0)},g)),e.jsx("div",{ref:E,style:{height:"30px"}})]})]}),activeStoryDate&&e.jsx(ir,{initialDate:activeStoryDate,storyDates:T,stories:S,onClose:()=>setActiveStoryDate(null),profilePic:W,singleDayMode:$}),r&&e.jsx(mr,{post:r,onClose:()=>l(null),profilePic:W,stories:S,onProfileClick:I=>U(I,!0)})]})},V={primary:"#D4DDEE",secondary:"#E8EEFA",quaternary:"#BCCDE9",senary:"#5696CD",septenary:"#5778A1"},vr=n.div`
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
`,jr=n.div`
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
`,wr=n.div`
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
`,kr=n.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`,Sr=n.div`
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
`,q=n.div`
  background: #fff;
  border-radius: 8px;
  border: 1px solid ${V.quaternary};
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  overflow: hidden;
  margin-bottom: 0px;
`,Z=n.div`
  background-color: ${V.secondary};
  padding: 8px 12px;
  font-weight: bold;
  color: ${V.septenary};
  font-size: 13px;
  border-bottom: 1px solid ${V.quaternary};
`,Cr=n.h1`
  font-size: 18px;
  color: ${V.septenary};
  margin: 10px 12px;
  font-weight: bold;
`,at=n.img`
  width: 100%;
  display: block;
  object-fit: cover;
`,ce=n.a`
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
`;const Ir=n.div`
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
`,Tr=n.img`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid ${V.quaternary};
  object-fit: cover;
`,$r=n.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,zr=n.span`
  font-size: 14px;
  font-weight: bold;
  color: ${V.septenary};
`,Er=n.span`
  font-size: 11px;
  color: #666;
`,_r=n.span`
  font-size: 12px;
  color: ${V.septenary};
  transition: transform 0.3s ease;
  transform: ${t=>t.$expanded?"rotate(180deg)":"rotate(0deg)"};
`,Pr=n.div`
  background: #fff;
  border-bottom: 1px solid #BCCDE9;
  display: ${t=>t.$expanded?"block":"none"};
  
  @media (min-width: 769px) {
    display: none !important;
  }
`,pe=n.div`
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
`,ee=t=>{if(!t)return"";if(t.startsWith("http"))return t;if(t.includes("user_thumb_medium"))return"orkut/user_thumb_medium.jpg";let o=t;return o.startsWith("imgs/")&&(o=o.replace("imgs/","")),o.startsWith("community/")||o.startsWith("profile/")||o.startsWith("fotos/")?`orkut/${o}`:(o.startsWith("orkut/"),o)},Mr=n.div`
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
`,Lr=n(H)`
  width: 64px;
  height: 64px;
  border-radius: 4px;
  border: 1px solid #ddd;
  object-fit: cover;
  background-color: #f0f0f0;
`,Ar=n.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
  font-size: 11px;
`,Dr=n.span`
  font-weight: bold;
  color: #06c;
`,Rr=n.span`
  color: #666;
`,Or=n.div`
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
`,Wr=`
  @keyframes shimmer {
    0% { background-position: -200px 0; }
    100% { background-position: 200px 0; }
  }
`,St=n.div`
  background: linear-gradient(90deg, #e8e8e8 0px, #f5f5f5 50px, #e8e8e8 100px);
  background-size: 200px 100%;
  animation: shimmer 1.2s infinite linear;
  ${Wr}
`,Br=n.div`
  border-bottom: 1px solid #e5e5e5;
  padding: 15px;
  display: flex;
  gap: 15px;
`,Fr=n(St)`
  width: 64px;
  height: 64px;
  border-radius: 4px;
  flex-shrink: 0;
`,Pe=n(St)`
  height: ${t=>t.height||"14px"};
  width: ${t=>t.width||"100%"};
  border-radius: 4px;
  margin-bottom: 8px;
`,Hr=()=>e.jsx(e.Fragment,{children:[...Array(5)].map((t,o)=>e.jsxs(Br,{children:[e.jsx(Fr,{}),e.jsxs("div",{style:{flex:1},children:[e.jsx(Pe,{width:"30%",height:"12px"}),e.jsx(Pe,{width:"80%"}),e.jsx(Pe,{width:"60%"})]})]},o))}),lt=20,Me=100,ue=1803,Nr=()=>{const[t,o]=i.useState([]),[r,l]=i.useState(new Set),[a,c]=i.useState(lt),[p,d]=i.useState(!0),s=i.useRef(),x=i.useCallback(async h=>{if(!r.has(h))try{const S=await J(`orkut/chunks/scraps_chunk_${h}.json`);if(!S)return;o(k=>{const v=[...k],T=h*Me;return S.forEach((j,y)=>{v[T+y]=j}),v}),l(k=>new Set([...k,h]))}catch(S){console.error(`Failed to load chunk ${h}:`,S)}},[r]);i.useEffect(()=>{x(0).then(()=>d(!1))},[]),i.useEffect(()=>{const h=Math.floor((a-1)/Me),S=h+1;r.has(h)||x(h),S*Me<ue&&!r.has(S)&&x(S)},[a,r,x]);const f=i.useCallback(h=>{s.current&&s.current.disconnect(),s.current=new IntersectionObserver(S=>{S[0].isIntersecting&&a<ue&&c(k=>k+lt)}),h&&s.current.observe(h)},[a]),m=t.slice(0,a).filter(Boolean);return p?e.jsxs(q,{children:[e.jsxs(Z,{children:["recados (",ue,")"]}),e.jsx(Hr,{})]}):e.jsxs(q,{children:[e.jsxs(Z,{children:["recados (",ue,")"]}),e.jsxs("div",{style:{padding:"0"},children:[m.map((h,S)=>e.jsxs(Mr,{ref:S===m.length-1?f:null,children:[e.jsx(Lr,{path:ee(h.authorPhoto),alt:h.author}),e.jsxs("div",{style:{flex:1},children:[e.jsxs(Ar,{children:[e.jsx(Dr,{children:h.author}),e.jsx(Rr,{children:h.date})]}),e.jsx(Or,{dangerouslySetInnerHTML:{__html:h.content}})]})]},h.id)),a<ue&&e.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#999",fontSize:"11px"},children:"pegando mais recados..."})]})]})},Ur=n.div`
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
`,Gr=n.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
  font-size: 11px;
`,Vr=n(H)`
  width: 64px;
  height: 64px;
  border-radius: 4px;
  border: 1px solid #ddd;
  object-fit: cover;
  background-color: #f0f0f0;
`,Kr=n.div`
  font-weight: bold;
  color: #06c;
`,Xr=n.div`
  color: #666;
`,qr=n.div`
  line-height: 1.5;
  font-size: 13px;
  word-break: break-word;
`,Yr=()=>{const[o,r]=i.useState([]),[l,a]=i.useState(20),c=i.useRef();useEffect(()=>{J("orkut/depoimentos.json").then(s=>r(s||[]))},[]);const p=i.useCallback(s=>{c.current&&c.current.disconnect(),c.current=new IntersectionObserver(x=>{x[0].isIntersecting&&l<o.length&&a(f=>f+20)}),s&&c.current.observe(s)},[l,o.length]),d=o.slice(0,l);return e.jsxs(q,{children:[e.jsxs(Z,{children:["depoimentos (",o.length,")"]}),e.jsxs("div",{style:{padding:"0"},children:[d.map((s,x)=>e.jsxs(Ur,{ref:x===d.length-1?p:null,children:[e.jsx(Vr,{path:ee(s.authorPhoto),alt:s.author}),e.jsxs("div",{style:{flex:1},children:[e.jsxs(Gr,{children:[e.jsx(Kr,{children:s.author}),e.jsx(Xr,{children:s.date})]}),e.jsx(qr,{dangerouslySetInnerHTML:{__html:s.content}})]})]},s.id)),l<o.length&&e.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#999",fontSize:"11px"},children:"pegando mais depoimentos..."})]})]})},Ct=n.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 15px;
  padding: 15px;
`,It=n.div`
  text-align: center;
  font-size: 11px;
  animation: fadeIn 0.5s ease-in-out;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`,Tt=n(H)`
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
`,$t=n.div`
  color: #06c;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
`,je=48,Jr=()=>{const[t,o]=i.useState(je),r=i.useRef(),l=i.useCallback(p=>{r.current&&r.current.disconnect(),r.current=new IntersectionObserver(d=>{d[0].isIntersecting&&t<ORKUT_FRIENDS.length&&o(s=>s+je)}),p&&r.current.observe(p)},[t]),[a,c]=i.useState([]);return i.useEffect(()=>{J("orkut/friends.json").then(p=>c(p||[]))},[]),e.jsxs(q,{children:[e.jsxs(Z,{children:["meus amigos (",a.length,")"]}),e.jsx(Ct,{children:a.slice(0,t).map((p,d)=>e.jsxs(It,{ref:d===t-1?l:null,children:[e.jsx(Tt,{path:ee(p.photo),alt:p.name}),e.jsx($t,{children:p.name})]},p.id))}),t<a.length&&e.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#999"},children:"carregando mais amigos..."})]})},Zr=()=>{const[t,o]=i.useState(je),r=i.useRef(),l=i.useCallback(p=>{r.current&&r.current.disconnect(),r.current=new IntersectionObserver(d=>{d[0].isIntersecting&&t<ORKUT_COMMUNITIES.length&&o(s=>s+je)}),p&&r.current.observe(p)},[t]),[a,c]=i.useState([]);return i.useEffect(()=>{J("orkut/communities.json").then(p=>c(p||[]))},[]),e.jsxs(q,{children:[e.jsxs(Z,{children:["minhas comunidades (",a.length,")"]}),e.jsx(Ct,{children:a.slice(0,t).map((p,d)=>e.jsxs(It,{ref:d===t-1?l:null,children:[e.jsx(Tt,{path:ee(p.photo),alt:p.name}),e.jsx($t,{children:p.name})]},p.id))}),t<a.length&&e.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#999"},children:"carregando mais comunidades..."})]})},Qr=n.div`
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
`,es=n(H)`
  width: 48px;
  height: 48px;
  border-radius: 4px;
  border: 1px solid #ddd;
  object-fit: cover;
  flex-shrink: 0;
  background-color: #f0f0f0;
`,ts=n.div`
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
`,ns=n.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,os=n.div`
  font-size: 13px;
  color: #333;
  line-height: 1.5;

  b {
    color: #06c;
    font-weight: bold !important;
  }
`,is=n.div`
  font-size: 11px;
  color: #666;
`,rs=n.div`
  background-color: #f1f3f8;
  border-left: 3px solid #6d84b4;
  padding: 8px 12px;
  font-style: italic;
  font-size: 12px;
  color: #555;
  margin-top: 6px;
  border-radius: 0 4px 4px 0;
`,ss=n.div`
  display: flex;
  gap: 4px;
  margin-top: 6px;
  flex-wrap: wrap;
`,as=n(H)`
  width: 32px;
  height: 32px;
  border-radius: 2px;
  border: 1px solid #ddd;
  object-fit: cover;
  background-color: #f0f0f0;
`,ls=n.div`
  margin-top: 4px;
  font-size: 13px;
  color: #555;
  line-height: 1.5;
`,ds=n.div`
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
`,dt=30,Le=100,fe=1184,cs=t=>{let o=[];return t.forEach(r=>{r.type==="new_friend_aggregated"&&r.friends&&r.friends.length>1?r.friends.forEach((l,a)=>{o.push({...r,id:`${r.id}_${a}`,friends:[l],friendName:l.name,friendImage:l.image})}):o.push(r)}),o},ps=()=>{const[t,o]=i.useState([]),[r,l]=i.useState(new Set),[a,c]=i.useState(dt),[p,d]=i.useState(!0),[s,x]=i.useState(0),f=i.useRef(),[m,h]=i.useState([]),[S,k]=i.useState([]),v=i.useCallback(async b=>{if(!r.has(b))try{const M=await J(`orkut/chunks/updates_chunk_${b}.json`);if(!M)return;const R=cs(M).filter(F=>F.type!=="new_friend");o(F=>{const L=[...F],E=b*Le;return R.forEach((_,z)=>{L[E+z]=_}),L}),l(F=>new Set([...F,b])),x(b===0?R.length:F=>F+R.length)}catch(M){console.error(`Failed to load chunk ${b}:`,M)}},[r]);i.useEffect(()=>{(async()=>{const[M,R]=await Promise.all([J("orkut/friends.json"),J("orkut/communities.json")]);h(M||[]),k(R||[]),await v(0),d(!1)})()},[]),i.useEffect(()=>{const b=Math.floor((a-1)/Le),M=b+1;r.has(b)||v(b),M*Le<fe&&!r.has(M)&&v(M)},[a,r,v]);const T=i.useCallback(b=>{f.current&&f.current.disconnect(),f.current=new IntersectionObserver(M=>{M[0].isIntersecting&&a<fe&&c(R=>R+dt)}),b&&f.current.observe(b)},[a]),j=i.useMemo(()=>t.filter(Boolean).slice(0,a).reverse(),[t,a]),y=b=>{if(!b)return"";try{const M=new Date(b);return M.getFullYear()===1970?"":M.toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"})+" "+M.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"})}catch{return""}},$=(b,M,R)=>{const F=R?T:null;let L=null,E="",_=null;switch(b.type){case"community_join":{let z=b.communityName,O=b.communityImage;if(z){const G=S.find(W=>W.name===z);G&&G.photo&&(O=G.photo)}else{const G=S.find(W=>W.photo===b.communityImage);G&&(z=G.name)}_=O;const U=z||"uma comunidade";E=e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:"2px"},children:"Entrou na comunidade"}),e.jsx("div",{style:{marginBottom:"4px"},children:e.jsx("b",{children:U})}),b.communityDescription&&e.jsx(ls,{children:b.communityDescription})]});break}case"new_friend":{_=b.friendImage;const z=m.find(O=>O.photo===_);E=e.jsxs(e.Fragment,{children:["Matheus José e ",e.jsx("b",{children:z?z.name:"alguém"})," agora são amigos."]});break}case"new_friend_aggregated":{const z=b.friends||[];if(z.length>0){_=z[0].image;const O=z[0].name,U=z.length-1;let G=null;if(U>0){const W=U===1?"pessoa":"pessoas";G=e.jsxs(e.Fragment,{children:[" e outros ",e.jsxs("b",{children:[U," ",W]})]})}E=e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:"2px"},children:"Agora é amigo de"}),e.jsxs("div",{style:{marginBottom:"4px"},children:[e.jsx("b",{children:O}),G,"."]}),z.length>1&&e.jsx(ss,{children:z.slice(1,9).map((W,I)=>e.jsx(as,{path:ee(W.image),title:W.name,alt:W.name},I))})]})}else b.friendName?(_=b.friendImage,E=e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:"2px"},children:"Agora é amigo de"}),e.jsxs("div",{style:{marginBottom:"4px"},children:[e.jsx("b",{children:b.friendName}),"."]})]})):(L="👥",E=e.jsx(e.Fragment,{children:"Fez novos amigos."}));break}case"link":{_=b.linkImage;const z=b.linkTitle||"um link",O=b.actionText||"compartilhou";E=e.jsxs(e.Fragment,{children:["Matheus José ",O,": ",e.jsx("b",{children:z})]});break}case"photos_shared":{L="📷";const z=b.photos?b.photos.length:0;E=e.jsxs("div",{children:["Adicionou ",e.jsx("b",{children:z>0?`${z} fotos`:"novas fotos"}),"."]});break}case"image_post":{_=b.imageUrl,E=e.jsx("div",{children:"Postou uma imagem."});break}case"new_fan":L="🌟",E=e.jsxs(e.Fragment,{children:["Agora é fã de ",e.jsx("b",{children:b.content})]});break;case"video_like":L="❤️",E=e.jsx(e.Fragment,{children:"Gostou de um vídeo."});break;case"profile_update":{_="user_thumb_medium.jpg",E=e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:"2px"},children:"Atualizou o perfil dele."}),b.profileData&&b.profileData.length>0?e.jsx("div",{style:{marginBottom:"4px"},children:b.profileData.map((z,O)=>e.jsxs("span",{children:[O>0&&", ",z.label,": ",e.jsx("b",{children:z.value})]},O))}):e.jsx("div",{style:{marginBottom:"4px"},children:e.jsx("b",{children:b.content||"Atualizou o perfil."})})]});break}default:b.content&&b.content.includes("amigos")?(L="👥",E=e.jsxs(e.Fragment,{children:["Tem ",e.jsx("b",{children:b.content})]})):b.content&&b.content.includes("frase")?(L="💬",E=e.jsxs("div",{children:["Mudou sua ",e.jsx("b",{children:"frase do perfil"}),b.phrase&&e.jsxs(rs,{children:['"',b.phrase,'"']})]})):b.content===""?b.type==="new_friend_aggregated"?(L="👥",E="Novos amigos"):(L="📝",E=e.jsx(e.Fragment,{children:"Atualizou seu perfil."})):(L="🔔",E=b.content)}return e.jsxs(Qr,{ref:F,children:[_?e.jsx(es,{path:ee(_),alt:"update image"}):e.jsx(ts,{children:L||"📋"}),e.jsx(ns,{children:e.jsxs(ds,{children:[e.jsx(os,{style:{flex:1},children:E}),e.jsx(is,{style:{flexShrink:0,marginTop:"2px"},children:y(b.dateISO)||b.date||"Sem data"})]})})]},b.id)};return p?e.jsxs(q,{children:[e.jsxs(Z,{children:["minhas atualizações (",fe,")"]}),e.jsx("div",{style:{padding:"20px",textAlign:"center",color:"#999"},children:"carregando atualizações..."})]}):e.jsxs(q,{children:[e.jsxs(Z,{children:["minhas atualizações (",fe,")"]}),e.jsxs("div",{style:{padding:"0"},children:[j.map((b,M)=>$(b,M,M===j.length-1)),a<fe&&e.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#999",fontSize:"11px"},children:"pegando mais atualizações..."})]})]})},xs=n.div`
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
`,hs=n.div`
  width: 120px;
  text-align: center;
`,us=n.div`
  font-weight: bold;
  color: #06c;
  font-size: 11px;
  margin-top: 5px;
  word-break: break-word;
`,fs=n(H)`
  width: 80px;
  height: 80px;
  border-radius: 4px;
  border: 1px solid #ddd;
  object-fit: cover;
  background-color: #f0f0f0;
`,gs=n.div`
  flex: 1;
  min-width: 0;
`,ms=n.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`,bs=n.div`
  font-size: 11px;
  color: #666;
`,ys=n.div`
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
`,ct=20,vs=({topic:t,onBack:o})=>{const[r,l]=i.useState([]),[a,c]=i.useState(ct),[p,d]=i.useState(!0),s=i.useRef();i.useEffect(()=>{(async()=>{try{const h=await J(`orkut/topics_data/topic_${t.id}.json`);l(h?h.TOPIC_REPLIES||h:[]),d(!1)}catch(h){console.error("Failed to load topic replies:",h),d(!1)}})()},[t.id]);const x=i.useCallback(m=>{s.current&&s.current.disconnect(),s.current=new IntersectionObserver(h=>{h[0].isIntersecting&&a<r.length&&c(S=>S+ct)}),m&&s.current.observe(m)},[a,r.length]),f=r.slice(0,a);return p?e.jsxs(q,{children:[e.jsx(Z,{children:t.title}),e.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"carregando tópicos..."})]}):e.jsxs(q,{children:[e.jsxs(Z,{children:[e.jsx("div",{children:t.title}),e.jsx("div",{style:{fontSize:"11px",color:"#666",fontWeight:"normal",marginTop:"2px"},children:t.community})]}),e.jsxs("div",{style:{padding:"0"},children:[f.map((m,h)=>e.jsxs(xs,{ref:h===f.length-1?x:null,children:[e.jsxs(hs,{children:[e.jsx(fs,{path:ee("user_thumb_medium"),alt:m.author}),e.jsx(us,{children:m.author})]}),e.jsxs(gs,{children:[e.jsx(ms,{children:e.jsx(bs,{children:m.date})}),e.jsx(ys,{dangerouslySetInnerHTML:{__html:m.content}})]})]},h)),a<r.length&&e.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#999",fontSize:"11px"},children:"pegando mais respostas..."})]})]})},js=n.div`
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
`,ws=n.div`
  font-size: 13px;
  color: #06c;
  font-weight: bold;
`,pt=20,ks=()=>{const[t,o]=i.useState(null),[r,l]=i.useState(pt),a=i.useRef(),[c,p]=i.useState([]);useEffect(()=>{J("orkut/topics.json").then(f=>p(f||[]))},[]);const d=f=>{if(!f)return"";try{return new Date(f).toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"})}catch{return""}},s=i.useCallback(f=>{a.current&&a.current.disconnect(),a.current=new IntersectionObserver(m=>{m[0].isIntersecting&&r<c.length&&l(h=>h+pt)}),f&&a.current.observe(f)},[r,c.length]);if(t)return e.jsx(vs,{topic:t,onBack:()=>o(null)});const x=c.slice(0,r);return e.jsxs(q,{children:[e.jsxs(Z,{children:["tópicos (",c.length,")"]}),e.jsxs("div",{style:{padding:"0"},children:[x.map((f,m)=>e.jsx(js,{ref:m===x.length-1?s:null,onClick:()=>o(f),children:e.jsxs("div",{style:{flex:1},children:[e.jsx(ws,{children:f.title}),e.jsx("div",{style:{fontSize:"11px",color:"#06c",marginTop:"2px"},children:f.community}),e.jsxs("div",{style:{fontSize:"11px",color:"#999",marginTop:"2px"},children:["criado em ",d(f.dateISO)||f.date]})]})},f.id)),r<c.length&&e.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#999",fontSize:"11px"},children:"pegando mais tópicos..."})]})]})},Ae=(t,o)=>`orkut/fotos/${t}/${o}`,Ss=n.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  padding: 20px;
`,Cs=n.div`
  cursor: pointer;
  text-align: center;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.03);
  }
`,Is=n(H)`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 4px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  background-color: #eee;
`,Ts=n.div`
  font-size: 13px;
  color: #06c;
  font-weight: bold;
  margin-top: 8px;
  text-transform: capitalize;
`,$s=n.div`
  font-size: 11px;
  color: #666;
  margin-top: 2px;
`,zs=n.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 15px;
  padding: 20px;
`,Es=n(H)`
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
`,_s=n.div`
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
`,Ps=`
  @keyframes slideInRight {
    from { transform: translateX(50px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
`,Ms=`
  @keyframes slideInLeft {
    from { transform: translateX(-50px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
`,Ls=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  max-height: 100%;
  animation: ${t=>t.direction==="next"?"slideInRight":"slideInLeft"} 0.3s ease-out;
  ${Ps}
  ${Ms}
`,As=n(H)`
  max-width: 100%;
  max-height: 100dvh;
  object-fit: contain;
  box-shadow: 0 0 20px rgba(0,0,0,0.5);
  cursor: default;
`,Ds=n.button`
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
`,Rs=()=>{const[t,o]=i.useState(null),[r,l]=i.useState(null),[a,c]=i.useState("next"),[p,d]=i.useState(null),[s,x]=i.useState([]);i.useEffect(()=>{J("orkut/photos.json").then(v=>x(v||[]))},[]);const f=()=>l(null),m=()=>{t&&(c("next"),l(v=>(v+1)%t.photos.length))},h=()=>{t&&(c("prev"),l(v=>(v-1+t.photos.length)%t.photos.length))};i.useEffect(()=>{const v=T=>{r!==null&&(T.key==="Escape"?f():T.key==="ArrowRight"?m():T.key==="ArrowLeft"&&h())};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[r,t]);const S=v=>{d(v.targetTouches[0].clientX)},k=v=>{if(p===null)return;const T=v.changedTouches[0].clientX,j=p-T;j>50?m():j<-50&&h(),d(null)};return i.useEffect(()=>(r!==null?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[r]),t?e.jsxs(q,{children:[e.jsx(Z,{children:t.albumName}),e.jsx(zs,{children:t.photos.map((v,T)=>e.jsx(Es,{path:Ae(t.albumName,v),alt:`${t.albumName} - ${T}`,onClick:()=>{l(T),c("next")}},T))}),r!==null&&e.jsxs(_s,{onClick:f,onTouchStart:S,onTouchEnd:k,children:[e.jsx(Ds,{onClick:f,children:"×"}),e.jsx(Ls,{direction:a,onClick:v=>v.stopPropagation(),children:e.jsx(As,{path:Ae(t.albumName,t.photos[r]),alt:"View"})},r)]})]}):e.jsxs(q,{children:[e.jsxs(Z,{children:["álbuns de fotos (",s.length,")"]}),e.jsx(Ss,{children:s.map(v=>e.jsxs(Cs,{onClick:()=>o(v),children:[e.jsx(Is,{path:Ae(v.albumName,v.photos[0]),alt:v.albumName}),e.jsx(Ts,{children:v.albumName}),e.jsxs($s,{children:[v.photos.length," fotos"]})]},v.id||v.albumName))})]})},xt=768,Os=()=>{const[t,o]=i.useState(()=>typeof window<"u"?window.innerWidth<=xt:!1);return i.useEffect(()=>{const r=window.matchMedia(`(max-width: ${xt}px)`),l=a=>{o(a.matches)};return o(r.matches),r.addEventListener("change",l),()=>{r.removeEventListener("change",l)}},[]),t},Ws={perfil:"perfil",atualizacoes:"minhas atualizações",scraps:"página de recados",depoimentos:"depoimentos",topicos:"tópicos",fotos:"fotos"},Bs=()=>{const[t,o]=i.useState("perfil"),[r,l]=i.useState(0),[a,c]=i.useState(!1),p=Os(),[d,s]=i.useState(null);useEffect(()=>{J("orkut/profile.json").then(k=>s(k||{}))},[]);const x=k=>{t===k?l(v=>v+1):(o(k),l(0)),c(!1)},f=(k,v)=>e.jsxs("div",{style:{marginBottom:"20px"},children:[e.jsx("div",{style:{color:"#5778A1",fontWeight:"bold",borderBottom:"1px solid #BCCDE9",marginBottom:"8px",paddingBottom:"3px",fontSize:"12px"},children:k}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px 24px"},children:v.map((T,j)=>e.jsxs("div",{style:{fontSize:"13px",display:"flex",gap:"5px"},children:[e.jsxs("b",{style:{color:"#6d84b4",minWidth:"80px",whiteSpace:"pre-line"},children:[T.label,":"]}),e.jsx("span",{style:{color:"#333"},children:T.value})]},j))})]}),m=()=>{switch(t){case"scraps":return e.jsx(Nr,{});case"depoimentos":return e.jsx(Yr,{});case"topicos":return e.jsx(ks,{});case"fotos":return e.jsx(Rs,{});case"amigos":return e.jsx(Jr,{});case"comunidades":return e.jsx(Zr,{});case"atualizacoes":return e.jsx(ps,{});default:return e.jsx(e.Fragment,{children:e.jsxs(q,{children:[e.jsx(Z,{children:d?d.name:"Carregando..."}),e.jsxs("div",{style:{padding:"20px"},children:[d&&e.jsxs(e.Fragment,{children:[e.jsx(at,{src:ee(d.photo),alt:"Profile"}),e.jsxs("div",{style:{marginTop:"10px"},children:[f("Social",[{label:"relacionamento",value:d.relationship},{label:"aniversário",value:d.birthday},{label:"local",value:d.location},...d.social||[]]),f("Profissional",d.professional),f("Pessoal",d.personal),f("Detalhes",d.details)]})]}),e.jsxs("div",{style:{marginTop:"25px"},children:[e.jsxs("div",{style:{color:"#5778A1",fontWeight:"bold",borderBottom:"1px solid #BCCDE9",marginBottom:"12px",paddingBottom:"4px",fontSize:"12px"},children:["Sobre ",d&&d.name?d.name.split(" ")[0]:"mim"]}),e.jsx("div",{style:{fontSize:"13px",lineHeight:"1.5",color:"#444",textAlign:"justify"},children:d?d.aboutMe:"Carregando..."})]})]})]})})}},h=()=>e.jsxs(q,{style:{display:"flex",flexDirection:"column",height:"400px"},children:[e.jsxs(Z,{children:["amigos (",ORKUT_FRIENDS.length,")"]}),e.jsx("div",{style:{flex:1,overflowY:"auto",overflowX:"hidden",padding:"10px 5px"},children:e.jsx("div",{style:{display:"grid",gridTemplateColumns:"33.33% 33.33% 33.33%",gap:"10px 0"},children:ORKUT_FRIENDS.map(k=>e.jsxs("div",{style:{textAlign:"center",minWidth:0},children:[e.jsx("img",{src:ee(k.photo),alt:k.name,style:{width:"80px",height:"80px",objectFit:"cover",borderRadius:"4px",cursor:"pointer",border:"1px solid #ddd"}}),e.jsx("div",{style:{fontSize:"11px",marginTop:"4px",color:"#06c",padding:"0 4px",lineHeight:"1.2",wordBreak:"break-word"},children:k.name})]},k.id))})})]}),S=()=>e.jsxs(q,{style:{display:"flex",flexDirection:"column",height:"400px"},children:[e.jsxs(Z,{children:["comunidades (",ORKUT_COMMUNITIES.length,")"]}),e.jsx("div",{style:{flex:1,overflowY:"auto",overflowX:"hidden",padding:"10px 5px"},children:e.jsx("div",{style:{display:"grid",gridTemplateColumns:"33.33% 33.33% 33.33%",gap:"10px 0"},children:ORKUT_COMMUNITIES.map(k=>e.jsxs("div",{style:{textAlign:"center",minWidth:0},children:[e.jsx("img",{src:ee(k.photo),alt:k.name,style:{width:"80px",height:"80px",objectFit:"cover",borderRadius:"4px",cursor:"pointer",border:"1px solid #ddd"}}),e.jsx("div",{style:{fontSize:"11px",marginTop:"4px",color:"#06c",padding:"0 4px",lineHeight:"1.2",wordBreak:"break-word"},children:k.name})]},k.id))})})]});return e.jsxs(vr,{children:[p&&e.jsxs(e.Fragment,{children:[e.jsxs(Ir,{onClick:()=>c(!a),children:[e.jsx(Tr,{src:ee("user_thumb_medium.jpg"),alt:d.name}),e.jsxs($r,{children:[e.jsx(zr,{children:d.name}),e.jsx(Er,{children:Ws[t]})]}),e.jsx(_r,{$expanded:a,children:"▼"})]}),e.jsxs(Pr,{$expanded:a,children:[e.jsx(pe,{$active:t==="perfil",onClick:()=>x("perfil"),children:"perfil"}),e.jsx(pe,{$active:t==="atualizacoes",onClick:()=>x("atualizacoes"),children:"atualizações"}),e.jsx(pe,{$active:t==="scraps",onClick:()=>x("scraps"),children:"recados"}),e.jsx(pe,{$active:t==="depoimentos",onClick:()=>x("depoimentos"),children:"depoimentos"}),e.jsx(pe,{$active:t==="topicos",onClick:()=>x("topicos"),children:"tópicos"}),e.jsx(pe,{$active:t==="fotos",onClick:()=>x("fotos"),children:"fotos"})]})]}),e.jsxs(jr,{children:[!p&&e.jsx(wr,{children:e.jsxs(q,{style:{padding:"15px"},children:[e.jsx(at,{src:ee("user_thumb_medium.jpg"),alt:"Matheus José"}),e.jsx(Cr,{children:d.name}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",marginTop:"15px"},children:[e.jsx(ce,{onClick:()=>x("perfil"),active:t==="perfil",children:"perfil"}),e.jsx(ce,{onClick:()=>x("atualizacoes"),active:t==="atualizacoes",children:"atualizações"}),e.jsx(ce,{onClick:()=>x("scraps"),active:t==="scraps",children:"recados"}),e.jsx(ce,{onClick:()=>x("depoimentos"),active:t==="depoimentos",children:"depoimentos"}),e.jsx(ce,{onClick:()=>x("topicos"),active:t==="topicos",children:"tópicos"}),e.jsx(ce,{onClick:()=>x("fotos"),active:t==="fotos",children:"fotos"})]})]})}),e.jsxs(kr,{children:[m(),p&&t==="perfil"&&e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"15px"},children:[e.jsx(h,{}),e.jsx(S,{})]})]},`${t}-${r}`),t==="perfil"&&e.jsxs(Sr,{children:[e.jsx(h,{}),e.jsx(S,{})]})]})]})},Fs=()=>{const t=()=>{const a=window.location.pathname;return a==="/projetos"?"projects":a==="/escritos"?"resume":a==="/redes"?"contact":a==="/projetos/orkut"?"orkut":a==="/projetos/twitter"?"twitter":a==="/projetos/instagram"?"instagram":"home"},[o,r]=i.useState(t);i.useEffect(()=>{const c=(p=>{switch(p){case"projects":return"/projetos";case"resume":return"/escritos";case"contact":return"/redes";case"orkut":return"/projetos/orkut";case"twitter":return"/projetos/twitter";case"instagram":return"/projetos/instagram";case"home":return"/";default:return"/"}})(o);return window.location.pathname!==c&&window.history.pushState({section:o},"",c),o==="orkut"?document.body.style.backgroundColor="#D4DDEE":o==="instagram"?document.body.style.backgroundColor="#000":o==="twitter"?document.body.style.backgroundColor="rgb(0, 132, 180)":document.body.style.backgroundColor="",()=>{document.body.style.backgroundColor=""}},[o]),i.useEffect(()=>{const a=c=>{const p=window.location.pathname;r(p==="/projetos/orkut"?"orkut":p==="/projetos/twitter"?"twitter":p==="/projetos/instagram"?"instagram":p==="/projetos"?"projects":p==="/escritos"?"resume":p==="/redes"?"contact":"home")};return window.addEventListener("popstate",a),()=>window.removeEventListener("popstate",a)},[]);const l=()=>{switch(o){case"home":return e.jsx($n,{});case"projects":return e.jsx(ko,{onNavigate:r});case"resume":return e.jsx("div",{style:{textAlign:"center",color:"var(--win-gray-dark)",marginTop:"2rem",minHeight:"100vh"},children:e.jsx("p",{children:"Currículo em construção..."})});case"contact":return e.jsx(bo,{});default:return null}};return o==="orkut"?e.jsxs(e.Fragment,{children:[e.jsx(be,{activeSection:o,onNavigate:r}),e.jsx("div",{style:{paddingTop:"40px",minHeight:"100vh",boxSizing:"border-box",display:"flex",flexDirection:"column"},children:e.jsx(Bs,{})})]}):o==="twitter"?e.jsxs(e.Fragment,{children:[e.jsx(be,{activeSection:o,onNavigate:r}),e.jsx("div",{style:{paddingTop:"40px",minHeight:"100vh",boxSizing:"border-box"},children:e.jsx(ui,{})})]}):o==="instagram"?e.jsxs(e.Fragment,{children:[e.jsx(be,{activeSection:o,onNavigate:r}),e.jsx("div",{style:{paddingTop:"40px",minHeight:"100vh",boxSizing:"border-box"},children:e.jsx(yr,{onClose:()=>r("home")})})]}):e.jsxs(e.Fragment,{children:[e.jsx(be,{activeSection:o,onNavigate:r}),e.jsxs("main",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",padding:"20px",paddingTop:"50px",paddingBottom:"50px",gap:"10px"},children:[e.jsx(xn,{}),e.jsx(hn,{}),e.jsx("div",{style:{marginTop:"20px"},children:l()}),e.jsxs("footer",{style:{textAlign:"center",padding:"2rem 0 1rem 0",marginTop:"auto",color:"blue",fontSize:"0.85rem",opacity:.7},children:[e.jsx("p",{style:{margin:0},children:"Pensado por Matheus José da Silva"}),e.jsx("p",{style:{margin:0},children:"Guarapuava, 2026"})]})]})]})},Hs=an`
  ${sn}
  
  @font-face {
    font-family: 'W95FA';
    src: url('${pn}') format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  
  body, input, select, textarea {
    font-family: 'W95FA', 'ms_sans_serif', sans-serif;
  }
`;function Ns(){return e.jsxs(ln,{theme:dn,children:[e.jsx(Hs,{}),e.jsx(Fs,{})]})}cn.createRoot(document.getElementById("root")).render(e.jsx(i.StrictMode,{children:e.jsx(Ns,{})}));
