import{j as e,A as Kt,T as Xt,B as q,r as i,C as Zt,S as Jt,O as Qt,u as en,a as tn,H as nn,b as n,c as on,i as rn,g as sn,d as an,e as Xe,f as ln,h as dn,k as yt,s as cn,D as wt,W as vt,l as jt,m as kt,q as pn,n as hn,o as xn,p as un,t as fn,v as gn,w as mn,x as St,y as Me,P as bn,z as yn,R as ce,E as wn,F as vn,G as jn,I as kn,K as Sn,J as Cn,L as $n}from"./vendor-D2lnTqSJ.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const x of a)if(x.type==="childList")for(const h of x.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&c(h)}).observe(document,{childList:!0,subtree:!0});function r(a){const x={};return a.integrity&&(x.integrity=a.integrity),a.referrerPolicy&&(x.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?x.credentials="include":a.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function c(a){if(a.ep)return;a.ep=!0;const x=r(a);fetch(a.href,x)}})();const In="/assets/w95fa-DxtS-rFC.woff2",Ce=({onNavigate:t,activeSection:o})=>{const r=[{id:"projects",name:"Projetos"},{id:"resume",name:"Escritos"},{id:"contact",name:"Redes"}];return e.jsx(Kt,{style:{position:"fixed",top:0,zIndex:2001,height:"40px"},children:e.jsxs(Xt,{style:{justifyContent:"space-between",height:"36px",padding:"0 8px",width:"100%",maxWidth:"950px",margin:"0 auto"},children:[e.jsx("div",{style:{display:"flex",gap:"4px"},children:e.jsx(q,{onClick:()=>t("home"),active:o==="home",size:"sm",style:{fontWeight:o==="home"?"bold":"normal",paddingTop:"2px",paddingBottom:"2px"},children:"Matheus José"})}),e.jsx("div",{style:{display:"flex",gap:"4px"},children:r.map(c=>e.jsx(q,{onClick:()=>t(c.id),active:o===c.id,size:"sm",style:{fontWeight:o===c.id?"bold":"normal",paddingTop:"2px",paddingBottom:"2px"},children:c.name},c.id))})]})})},zn=()=>e.jsxs("div",{style:{width:"100%",overflow:"hidden",display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"3vw",padding:"0 10px"},children:[e.jsx("pre",{style:{fontFamily:"var(--font-mono)",color:"var(--nick-green)",textShadow:"2px 2px 0px var(--win-black)",fontWeight:"bold",fontSize:"clamp(8px, 2vw, 16px)",lineHeight:"1.2",margin:"0",whiteSpace:"pre"},children:`
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
`})]}),En=()=>{const t=["Ketchup Hemmer","É isso aí","Eu prefiro ser essa metamorfose ambulante","¯\\_(ツ)_/¯","Ouça Shinichi Osawa","K-pop é top","Gosto de longas caminhadas pela madrugada","Selo SM de qualidade","matheusdanet","Aberto 24h","Tenho um fã.","Um bon vivant","Eu tive uma ideia!","Here's to the misfits"],[o,r]=i.useState(t[0]);return i.useEffect(()=>{const c=Math.floor(Math.random()*t.length);r(t[c])},[]),e.jsx("div",{style:{textAlign:"center",fontFamily:"var(--font-ui)",color:"var(--win-blue)",marginTop:"1rem",fontStyle:"italic",minHeight:"1.5em"},children:o})},Tn="/assets/matheus_3d-DmonV1Yv.glb";function Mn(){const{progress:t}=tn();return e.jsx(nn,{center:!0,children:e.jsxs("div",{style:{color:"white"},children:["Carregando... ",t.toFixed(0),"%"]})})}function Ln(t){const{scene:o}=en(Tn);return e.jsx("primitive",{object:o,...t})}const Pn=()=>e.jsx("div",{style:{width:"100%",height:"400px"},children:e.jsxs(Zt,{shadows:!0,dpr:[1,2],camera:{fov:75},children:[e.jsx(i.Suspense,{fallback:e.jsx(Mn,{}),children:e.jsx(Jt,{environment:null,intensity:.5,contactShadow:!1,shadowBias:-.0015,children:e.jsx(Ln,{})})}),e.jsx(Qt,{makeDefault:!0,autoRotate:!0,autoRotateSpeed:15,enableZoom:!0,enablePan:!1,minPolarAngle:0,maxPolarAngle:Math.PI/1.5})]})}),Rn=n.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
`,_n=i.forwardRef((t,o)=>{const[r,c]=i.useState("#000000"),[a,x]=i.useState(2),h=()=>{o&&o.current&&o.current.clear()};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1,width:"100%"},children:[e.jsxs(Rn,{children:[e.jsx("label",{children:"Cor:"}),e.jsxs("div",{style:{position:"relative",width:"35px",height:"30px"},children:[e.jsx(q,{style:{width:"100%",height:"100%",padding:"4px"},children:e.jsx("div",{style:{width:"100%",height:"100%",background:r,border:"1px solid #8e8e8e"}})}),e.jsx("input",{type:"color",value:r,onChange:d=>{c(d.target.value)},style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",opacity:0,cursor:"pointer"}})]}),e.jsx(q,{size:"sm",onClick:h,title:"Explodir (Limpar Tudo)",style:{minWidth:"35px"},children:"💣"}),e.jsx("div",{style:{width:"1px",height:"20px",background:"#ccc",margin:"0 5px"}}),e.jsx("label",{children:"Pincel:"}),e.jsx(q,{size:"sm",active:a===2?"true":void 0,onClick:()=>x(2),children:"P"}),e.jsx(q,{size:"sm",active:a===5?"true":void 0,onClick:()=>x(5),children:"M"}),e.jsx(q,{size:"sm",active:a===10?"true":void 0,onClick:()=>x(10),children:"G"})]}),e.jsx("div",{style:{width:"304px",height:"304px",margin:"0 auto",border:"2px solid #8e8e8e",background:"white",display:"flex",justifyContent:"center",alignItems:"center",flexShrink:0},children:e.jsx(on,{ref:o,brushColor:r,brushRadius:a,lazyRadius:0,canvasWidth:300,canvasHeight:300,hideGrid:!0,style:{background:"white",width:"300px",height:"300px"}})})]})}),Ge={apiKey:"AIzaSyCDnz8noh7ihVvPHTE6Jmw7jUKGus5y1OI",authDomain:"matheusdanoite-the-website.firebaseapp.com",projectId:"matheusdanoite-the-website",storageBucket:"matheusdanoite-the-website.firebasestorage.app",messagingSenderId:"500621503044",appId:"1:500621503044:web:55320778e3506147cd6a11"},Le=Ge.apiKey&&Ge.projectId,Ct=Le?rn(Ge):null,Ie=Le?sn(Ct):null,Ze=Le?an(Ct):null,Dn=!!Le,qe=[{name:"Bubbles",lower:"ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ",upper:"ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ",digits:"⓪①②③④⑤⑥⑦⑧⑨"},{name:"Script Bold",lower:"𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃",upper:"𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩",digits:"0123456789"},{name:"Fraktur",lower:"𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷",upper:"𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ",digits:"0123456789"},{name:"Double Struck",lower:"𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫",upper:"𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ",digits:"𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡"},{name:"Full Width",lower:"ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ",upper:"ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ",digits:"０１２３４５６７８９"}],Ue="abcdefghijklmnopqrstuvwxyz",Ye="ABCDEFGHIJKLMNOPQRSTUVWXYZ",Ve="0123456789",An=t=>{if(!t)return"";let o=t;return qe.forEach(r=>{r.lower&&(Array.isArray(r.lower)?r.lower:[...r.lower]).forEach((a,x)=>{if(x<Ue.length)try{o=o.split(a).join(Ue[x])}catch{}}),r.upper&&(Array.isArray(r.upper)?r.upper:[...r.upper]).forEach((a,x)=>{if(x<Ye.length)try{o=o.split(a).join(Ye[x])}catch{}}),r.digits&&(Array.isArray(r.digits)?r.digits:[...r.digits]).forEach((a,x)=>{if(x<Ve.length)try{o=o.split(a).join(Ve[x])}catch{}})}),o.normalize("NFC")},Je=(t,o)=>{if(!t)return"";const r=qe.find(a=>a.name===o);return r?[...t.normalize("NFD")].map(a=>{const x=Ue.indexOf(a),h=Ye.indexOf(a),d=Ve.indexOf(a);return x!==-1?(Array.isArray(r.lower)?r.lower:[...r.lower])[x]||a:h!==-1?(Array.isArray(r.upper)?r.upper:[...r.upper])[h]||a:d!==-1&&r.digits&&(Array.isArray(r.digits)?r.digits:[...r.digits])[d]||a}).join(""):t},Fn=n.div`
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
`;const Qe=({onAddMessage:t})=>{const[o,r]=i.useState(1),[c,a]=i.useState("text"),[x,h]=i.useState("default"),[d,s]=i.useState(""),[b,u]=i.useState(""),[l,p]=i.useState(!1),g=i.useRef(null),$=()=>{g.current&&g.current.clear()},w=j=>{const P=An(j.target.value);P.length<=300&&u(P)},I=j=>{h(j)},T=async()=>{if(!d.trim()){alert("Por favor, insira seu nome ou nick.");return}let j="",P="text";if(c==="text"){if(j=Je(b,x),!j||!j.trim()){alert("Por favor, escreva uma mensagem.");return}}else c==="draw"&&g.current&&(j=g.current.getDataURL(),P="drawing");if(!Dn){const y={id:Date.now().toString(),name:d,content:j,type:P,font:x,createdAt:{seconds:Date.now()/1e3}};setTimeout(()=>{t&&t(y),s(""),u(""),c==="draw"&&$(),r(1),p(!1)},500);return}p(!0);try{await dn(yt(Ie,"guestbook"),{name:d.trim(),content:j,type:P,font:x,createdAt:cn()}),s(""),u(""),c==="draw"&&$(),r(1)}catch(y){console.error("Error adding document: ",y)}finally{p(!1)}};return e.jsxs(Fn,{style:{height:"100%",padding:"2px"},children:[e.jsx("div",{style:{marginBottom:"5px"},children:e.jsx(Xe,{value:d,onChange:j=>s(j.target.value),placeholder:"Seu nome...",style:{width:"100%"}})}),c==="text"?e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"5px",marginBottom:"5px"},children:e.jsx(ln,{width:"100%",options:[{value:"default",label:"Comic Sans"},...qe.map(j=>({value:j.name,label:j.name}))],onChange:j=>I(j.value),value:x,placeholder:"Escolha um estilo...",menuMaxHeight:150,style:{fontWeight:"light",fontFamily:"'W95FA', 'ms_sans_serif', sans-serif",WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}})}),e.jsx(Xe,{multiline:!0,rows:6,value:Je(b,x),onChange:w,placeholder:"Escreva sua mensagem...",style:{width:"100%",fontFamily:x==="default"?"'ComicCustom', 'Comic Sans MS', 'Comic Sans', cursive":"'W95FA', 'ms_sans_serif', sans-serif",fontSize:"14px",WebkitFontSmoothing:x==="default"?"auto":"none",MozOsxFontSmoothing:x==="default"?"auto":"grayscale",fontSmooth:x==="default"?"auto":"never",textRendering:x==="default"?"auto":"aliased"}}),e.jsxs("div",{style:{marginTop:"2px",fontSize:"0.8rem",color:"black",textAlign:"right"},children:[b.length,"/300"]})]}):e.jsx(_n,{ref:g}),e.jsx("div",{style:{flex:1}}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"auto",paddingTop:"10px"},children:[e.jsxs("div",{style:{display:"flex",gap:"5px"},children:[e.jsx(q,{active:c==="text",onClick:()=>a("text"),children:"Escrita"}),e.jsx(q,{active:c==="draw",onClick:()=>a("draw"),children:"Desenho"})]}),e.jsx(q,{onClick:T,disabled:l,primary:!l,children:l?"Enviando...":"Enviar"})]})]})},be=({id:t,title:o,children:r,onClose:c,onFocus:a,onDrag:x,onStop:h,position:d,style:s,windowStyle:b,defaultPosition:u,isMobile:l})=>{const p=i.useRef(null);return e.jsx(wt,{nodeRef:p,handle:".window-header",onMouseDown:()=>a(t),defaultPosition:u,position:d,onDrag:x,onStop:h,disabled:l,children:e.jsx("div",{ref:p,style:{...s||{},zIndex:s?.zIndex},children:e.jsxs(vt,{style:{width:"100%",maxWidth:"600px",display:"flex",flexDirection:"column",...b},className:"window",children:[e.jsxs(jt,{className:"window-header",style:{display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"grab",flexShrink:0},children:[e.jsx("span",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:o}),e.jsx(q,{onClick:()=>c(t),size:"sm",style:{width:"25px",height:"25px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("span",{style:{fontWeight:"bold",transform:"translateY(-1px)"},children:"x"})})]}),e.jsx(kt,{style:{padding:0,flex:1,overflow:"hidden",display:"flex",flexDirection:"column"},children:r})]})})})},Bn=n.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    background: ${({theme:t})=>t.material}; /* System Gray */
    font-size: 0.9rem;
`,Wn=n.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 10px;
    justify-content: center;
`,On=({msg:t,onClose:o,onFocus:r,isMobile:c,index:a,totalMessages:x,onVote:h})=>e.jsx(be,{id:t.id,title:t.name,onClose:o,onFocus:()=>{},isMobile:c,style:{zIndex:10+(x-a),position:"relative",marginBottom:"20px"},windowStyle:{width:"320px",maxWidth:"320px",height:"auto"},children:e.jsxs(Bn,{children:[t.type==="drawing"?e.jsx("div",{style:{background:"white",border:"1px solid #8e8e8e",padding:"5px"},children:e.jsx("img",{src:t.content,alt:"Drawing",style:{width:"100%",display:"block"}})}):e.jsx("div",{style:{margin:0,fontSize:"15px",lineHeight:"1.4",wordBreak:"break-word",fontFamily:!t.font||t.font==="default"?"'ComicCustom', 'Comic Sans MS', 'Comic Sans', cursive":"'W95FA', 'ms_sans_serif', sans-serif",WebkitFontSmoothing:!t.font||t.font==="default"?"auto":"none",MozOsxFontSmoothing:!t.font||t.font==="default"?"auto":"grayscale",fontSmooth:!t.font||t.font==="default"?"auto":"never",textRendering:!t.font||t.font==="default"?"auto":"aliased"},dangerouslySetInnerHTML:{__html:t.content}}),e.jsxs(Wn,{children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(q,{size:"sm",onClick:()=>h(t.id,"likes"),children:"Joinha"}),e.jsx("span",{style:{fontSize:"0.8rem",marginTop:"2px"},children:t.likes||0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(q,{size:"sm",onClick:()=>h(t.id,"dislikes"),children:"Paia"}),e.jsx("span",{style:{fontSize:"0.8rem",marginTop:"2px"},children:t.dislikes||0})]})]})]})}),Hn=i.forwardRef((t,o)=>e.jsxs("div",{ref:o,style:{padding:"1rem",width:"100%"},children:[e.jsx("h3",{style:{marginTop:0},children:"Sobre mim"}),e.jsx("p",{children:"[Escreva aqui sobre você...]"}),e.jsx("br",{}),e.jsx("p",{children:"Olá! Sou Matheus José, um desenvolvedor apaixonado por criar experiências digitais únicas. Este portfólio é uma janela para o meu mundo, misturando nostalgia e tecnologia moderna."})]})),Nn=n.div`
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
`,Gn=()=>{const[t,o]=i.useState(window.innerWidth<=768),[r,c]=i.useState([]),[a,x]=i.useState(15),[h,d]=i.useState(new Set);i.useEffect(()=>{const A=()=>o(window.innerWidth<=768);return window.addEventListener("resize",A),()=>window.removeEventListener("resize",A)},[]),i.useEffect(()=>{if(!Ie)return;const A=pn(yt(Ie,"guestbook"),xn("createdAt","desc"),hn(a)),O=un(A,V=>{const oe=V.docs.map(X=>({id:X.id,...X.data()}));c(oe)});return()=>O()},[a]);const[s,b]=i.useState({about:{id:"about",title:"bio",isOpen:!0,zIndex:1,content:e.jsx(Hn,{}),desktopPosition:{top:"20px",left:"50%"}},model:{id:"model",title:"eu",isOpen:!0,zIndex:0,content:e.jsx(Pn,{}),desktopPosition:{top:"350px",left:"50%"}},guestbook:{id:"guestbook",title:"depoimentos",isOpen:!0,zIndex:0,content:e.jsx(Qe,{}),desktopPosition:{top:"780px",left:"50%"}}}),u=A=>{s[A]?b(O=>({...O,[A]:{...O[A],isOpen:!1}})):d(O=>new Set(O).add(A))},l=A=>{s[A]&&b(O=>{const V={...O},oe=Math.max(...Object.values(V).map(X=>X.zIndex),10)+1;return V[A]={...V[A],zIndex:oe},V})},p=async(A,O)=>{const V=`vote_${A}`;if(localStorage.getItem(V)){console.log("Already voted");return}try{const X=fn(Ie,"guestbook",A);await gn(X,{[O]:mn(1)}),localStorage.setItem(V,O)}catch(X){console.error("Error updating vote:",X)}},g=A=>{c(O=>[A,...O])},$=()=>{x(A=>A+15)},w=i.useRef(null),[I,T]=i.useState(200),[j,P]=i.useState(null);i.useEffect(()=>{if(w.current){const A=w.current.offsetHeight,O=w.current.closest(".window")?.getBoundingClientRect();O&&P(O),T(A)}},[t,s.about.isOpen]);const y=38,M=50,_=20,W=j?j.height:I+45,D=_+W+y,z=D+520+y,m=i.useRef(null),[S,Y]=i.useState(0);i.useEffect(()=>{m.current&&Y(m.current.offsetHeight)},[r,t,h]);const N=r.length>=a?100:20,K=t?"auto":`${z+S+N}px`;return e.jsxs(Nn,{id:"home-wrapper",style:{minHeight:K},children:[s.about.isOpen&&e.jsx(be,{id:"about",title:s.about.title,onClose:u,onFocus:l,isMobile:t,style:{zIndex:s.about.zIndex,position:t?"relative":"absolute",left:t?0:"auto",right:0,margin:t?"0 auto":0,width:"fit-content",top:t?0:`${_}px`},children:e.jsx("div",{ref:w,style:{width:"100%"},children:s.about.content})}),s.model.isOpen&&e.jsx(be,{id:"model",title:s.model.title,onClose:u,onFocus:l,isMobile:t,style:{zIndex:s.model.zIndex,position:t?"relative":"absolute",left:0,right:t?0:"auto",margin:t?"0 auto":0,width:"fit-content",top:t?0:`${_}px`},windowStyle:{width:"100%",maxWidth:"500px"},children:s.model.content}),s.guestbook.isOpen&&e.jsx("div",{id:"guestbook-window",style:{position:t?"relative":"absolute",left:t?0:"50%",right:t?0:"auto",margin:t?"0 auto":0,transform:t?"none":`translateX(calc(-50% + ${M}px))`,width:"fit-content",top:t?0:`${D}px`,zIndex:s.guestbook.zIndex},children:e.jsx(be,{id:"guestbook",title:s.guestbook.title,onClose:u,onFocus:l,isMobile:t,windowStyle:{width:"350px",height:"520px"},children:e.jsx(Qe,{onAddMessage:g})})}),e.jsx("div",{ref:m,style:{position:t?"relative":"absolute",top:t?0:`${z}px`,left:0,right:0,display:"flex",flexDirection:"column",alignItems:"center",gap:"20px",pointerEvents:"none"},children:r.map((A,O)=>h.has(A.id)?null:e.jsxs("div",{style:{pointerEvents:"auto"},children:[" ",e.jsx(On,{msg:A,onClose:u,onFocus:()=>{},isMobile:t,index:O,totalMessages:r.length,onVote:p})]},A.id))}),!t&&r.length>=a&&e.jsx("div",{style:{position:"absolute",bottom:"50px",left:0,right:0,textAlign:"center"},children:e.jsx(q,{onClick:$,style:{fontWeight:"bold"},children:"Carregar Mais..."})}),t&&r.length>=a&&e.jsx("div",{style:{margin:"20px 0"},children:e.jsx(q,{onClick:$,children:"Carregar Mais..."})}),!s.model.isOpen&&!s.about.isOpen&&!s.guestbook.isOpen&&e.jsxs("div",{style:{textAlign:"center",marginTop:"100px",color:"gray",width:"100%"},children:[e.jsx("p",{children:"Sistema encerrado."}),e.jsx(q,{onClick:()=>window.location.reload(),children:"Reiniciar"})]})]})},Un=n.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`,Yn=n.li`
    display: flex;
    align-items: center;
    justify-content: space-between; // Push image left, text right
    padding: 8px;
    border-bottom: 2px solid transparent; // spacer
    
    &:hover {
        background: ${({theme:t})=>t.hoverBackground};
        color: ${({theme:t})=>t.canvasTextInvert};
    }
`,Vn=n.img`
    width: 40px;
    height: 40px;
    margin-right: 12px;
    border: 2px solid ${({theme:t})=>t.borderDark};
`,qn=n.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    align-items: flex-end; // Align text to the right
    text-align: right;
`,Kn=n.span`
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%; // Ensure ellipsis works if needed, though right-align might fight with this. Flex-end usually enough.
`,Xn=n.span`
    font-size: 0.8rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
`,Zn=()=>{const[t,o]=i.useState([]),[r,c]=i.useState(!0),[a,x]=i.useState(!1);if(i.useEffect(()=>{const d=new URL("/api/lastfm",window.location.origin).href;fetch(d).then(async s=>{const b=s.headers.get("content-type"),u=b&&b.includes("application/json");if(!s.ok){let l=`Erro ${s.status}`;if(u){const p=await s.json();p.error&&(l=p.error)}else{const p=await s.text();l+=`: ${p.slice(0,50)}`}throw new Error(l)}if(!u){const l=await s.text();throw new Error(`Esperado JSON, recebido: ${l.slice(0,50)}`)}return s.json()}).then(s=>{o(s),c(!1)}).catch(s=>{console.error("Last.fm API failed Details:",{name:s.name,message:s.message}),x(`${s.name}: ${s.message}`),c(!1)})},[]),r)return e.jsx("div",{style:{padding:"20px",textAlign:"center"},children:e.jsx(St,{size:32})});if(a)return e.jsxs("div",{style:{padding:"20px",textAlign:"center"},children:[e.jsx("p",{children:"Erro ao carregar músicas."}),e.jsx("p",{style:{fontSize:"0.8em",color:"#ff4444",marginTop:"5px"},children:a}),e.jsx("p",{style:{fontSize:"0.8em"},children:"(Verifique as chaves de API no Cloudflare)"})]});const h=t.slice(0,5);return e.jsxs("div",{style:{paddingBottom:"10px",background:"transparent"},children:[e.jsx(Un,{children:h.map((d,s)=>e.jsxs(Yn,{children:[d.image&&e.jsx(Vn,{src:d.image,alt:"Capa"}),e.jsxs(qn,{children:[e.jsx(Kn,{children:d.name}),e.jsx(Xn,{children:d.artist})]})]},s))}),e.jsx("div",{style:{textAlign:"center",marginTop:"10px",fontSize:"0.8rem"},children:e.jsx(Me,{href:"https://www.last.fm/user/matheusdanoite",target:"_blank",style:{textDecoration:"none"},children:"matheusdanoite no Last.fm"})})]})},Jn=n.li`
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
`,et=n.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid ${({theme:t})=>t.borderDark};
    flex-shrink: 0;
`,Qn=n.div`
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
`,eo=n.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 0.8rem;
`,to=n.span`
    font-weight: bold;
    margin-right: 5px;
`,no=n.span`
    opacity: 0.7;
    font-size: 0.75rem;
`,oo=n.span`
    opacity: 0.7;
    font-size: 0.75rem;
    white-space: nowrap;
`,io=n.p`
    margin: 0;
    line-height: 1.3;
    word-wrap: break-word;
`,tt=n.div`
    border: 2px solid ${({theme:t})=>t.borderDark};
    padding: 8px;
    margin-top: 5px;
    background: rgba(255, 255, 255, 0.1);
    font-size: 0.85rem;
`,ro=n.div`
    display: flex;
    gap: 5px;
    margin-top: 5px;
    flex-wrap: wrap;
`,so=n.img`
    max-width: 100%;
    max-height: 150px;
    border: 1px solid ${({theme:t})=>t.borderDark};
    object-fit: cover;
    border-radius: 4px;
`,ao=n(Me)`
    display: block;
    border: 1px solid ${({theme:t})=>t.borderDark};
    margin-top: 5px;
    text-decoration: none;
    color: inherit;
    
    &:hover {
        background: rgba(255, 255, 255, 0.2);
    }
`,lo=n.img`
    width: 100%;
    height: 100px;
    object-fit: cover;
    border-bottom: 1px solid ${({theme:t})=>t.borderDark};
`,co=n.div`
    padding: 8px;
`,po=n.div`
    font-weight: bold;
    font-size: 0.85rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,ho=n.div`
    font-size: 0.75rem;
    opacity: 0.8;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`,xo=n.div`
    font-size: 0.75rem;
    opacity: 0.6;
    margin-bottom: 2px;
`,uo=({post:t})=>{const o=t.record,r=!!o.reply,c=new Date(o.createdAt).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"}),a=s=>!s||s.length===0?null:e.jsx(ro,{children:s.map((b,u)=>e.jsx(so,{src:b.thumb,alt:b.alt},u))}),x=s=>s?e.jsxs(ao,{href:s.uri,target:"_blank",children:[s.thumb&&e.jsx(lo,{src:s.thumb}),e.jsxs(co,{children:[e.jsx(po,{children:s.title}),e.jsx(ho,{children:s.description})]})]}):null,h=(s,b)=>e.jsxs(tt,{children:[e.jsxs("div",{style:{marginBottom:"4px",display:"flex",alignItems:"center",gap:"5px"},children:[e.jsx(et,{src:b.avatar,style:{width:"20px",height:"20px",borderWidth:"1px"}}),e.jsx("strong",{children:b.displayName||b.handle}),e.jsxs("span",{style:{opacity:.6,fontSize:"0.75rem"},children:["@",b.handle]})]}),e.jsx("div",{children:s.text})]}),d=s=>{if(!s)return null;if(s.$type==="app.bsky.embed.images#view")return a(s.images);if(s.$type==="app.bsky.embed.external#view")return x(s.external);if(s.$type==="app.bsky.embed.record#view"){const b=s.record;if(b.$type==="app.bsky.embed.record#viewRecord")return h(b.value,b.author);if(b.$type==="app.bsky.embed.record#viewNotFound")return e.jsx(tt,{style:{fontStyle:"italic",opacity:.6},children:"Post removido ou não encontrado."})}return s.$type==="app.bsky.embed.recordWithMedia#view"?e.jsxs(e.Fragment,{children:[d(s.media),d(s.record)]}):null};return e.jsxs(Jn,{children:[e.jsx(et,{src:t.author.avatar,alt:t.author.handle}),e.jsxs(Qn,{children:[r&&e.jsx(xo,{children:"Resposta ao post..."}),e.jsxs(eo,{children:[e.jsxs("div",{children:[e.jsx(to,{children:t.author.displayName||t.author.handle}),e.jsxs(no,{children:["@",t.author.handle]})]}),e.jsx(oo,{children:c})]}),e.jsx(io,{children:o.text}),d(t.embed)]})]})},fo=n.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`,go=()=>{const[t,o]=i.useState([]),[r,c]=i.useState(!0),[a,x]=i.useState(!1);return i.useEffect(()=>{(async()=>{try{const d=await fetch("https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=matheusdanoite.com&limit=5");if(!d.ok){const b=await d.text();throw new Error(`Failed to fetch BlueSky: ${d.status} ${b.slice(0,50)}`)}const s=await d.json();o(s.feed||[]),c(!1)}catch(d){console.error("BlueSky API failed:",d.name,d.message),x(!0),c(!1)}})()},[]),r?e.jsx("div",{style:{padding:"20px",textAlign:"center"},children:e.jsx(St,{size:32})}):a?e.jsx("div",{style:{padding:"20px",textAlign:"center"},children:e.jsx("p",{children:"Erro ao carregar posts."})}):e.jsxs("div",{style:{height:"auto",paddingBottom:"10px",background:"transparent"},children:[e.jsx(fo,{children:t.map((h,d)=>e.jsx(uo,{post:h.post},d))}),e.jsx("div",{style:{textAlign:"center",marginTop:"10px",fontSize:"0.8rem"},children:e.jsx(Me,{href:"https://bsky.app/profile/matheusdanoite.com",target:"_blank",style:{textDecoration:"none"},children:"@matheusdanoite.com no BlueSky"})})]})},mo=n.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
`,bo=n.img`
  width: 64px;
  height: 64px;
  border: 2px solid ${({theme:t})=>t.borderDarkest};
`,yo=n.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`,wo=n.span`
  font-weight: bold;
  font-size: 1.1rem;
`,vo=n.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.85rem;
  color: ${t=>t.$color||t.theme.textSecondary};
`,jo=n.div`
  width: 10px;
  height: 10px;
  background-color: ${t=>t.$color};
  border-radius: 50%;
  border: 1px solid black;
`,ko=n.span`
  font-size: 0.85rem;
  color: ${({theme:t})=>t.textSecondary};
  margin-bottom: 8px;
  display: block;
`,So=n.div`
  font-size: 0.75rem;
  color: ${({theme:t})=>t.textSecondary};
  display: flex;
  gap: 10px;
  margin-top: 2px;
`,Co=n.span`
    background: ${({theme:t})=>t.flatLight||"#dfdfdf"};
    border: 1px solid ${({theme:t})=>t.borderDarkest};
    padding: 1px 4px;
    border-radius: 2px;
    font-weight: bold;
    color: ${({theme:t})=>t.text};
`,$o=n.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`,Io=n.div`
    display: flex;
    align-items: center;
    gap: 10px;
`,zo=n.img`
    width: 24px;
    height: 24px;
`,Eo=n.span`
    font-size: 0.9rem;
    font-weight: bold;
`,To=n.span`
    font-size: 0.8rem;
    margin-left: auto;
    color: ${({theme:t})=>t.textSecondary};
`,Mo=n.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    gap: 10px;
`,Lo=()=>{const[t,o]=i.useState(null),[r,c]=i.useState(!0),[a,x]=i.useState(null);i.useEffect(()=>{(async()=>{try{const p=new URL("/api/steam",window.location.origin).href,g=await fetch(p);if(!g.ok){const I=await g.text();throw new Error(`HTTP Error ${g.status}: ${I.slice(0,50)}`)}const $=g.headers.get("content-type");if(!$||!$.includes("application/json")){const I=await g.text();throw new Error(`Formato de resposta inválido (${$}). Resposta: ${I.slice(0,50)}`)}const w=await g.json();if(w.error)throw new Error(w.error);o(w)}catch(p){console.error("Steam API failed Details:",{name:p.name,message:p.message,stack:p.stack}),x(`${p.name}: ${p.message}`)}finally{c(!1)}})()},[]);const h=l=>{switch(l){case 1:return{text:"Online",color:"#57cbde"};case 2:return{text:"Busy",color:"#e04539"};case 3:return{text:"Away",color:"#f0ad4e"};default:return{text:"Offline",color:"#898989"}}};if(r)return e.jsxs(Mo,{children:[e.jsx("p",{children:"Conectando ao Steam..."}),e.jsx(bn,{width:"100%"})]});if(a)return e.jsxs("div",{style:{padding:"20px",textAlign:"center"},children:[e.jsx("p",{children:"Erro ao carregar Steam."}),e.jsx("p",{style:{fontSize:"0.8em",color:"#ff4444"},children:a})]});const{profile:d,recentGames:s}=t,b=h(d.personaState),u=l=>l?new Date(l*1e3).toLocaleDateString("pt-BR",{month:"long",year:"numeric"}):"N/A";return e.jsxs("div",{style:{padding:"10px"},children:[e.jsxs(mo,{children:[e.jsx(bo,{src:d.avatar,alt:"Avatar"}),e.jsxs(yo,{children:[e.jsx(wo,{children:d.personaname}),e.jsxs(vo,{$color:b.color,children:[e.jsx(jo,{$color:b.color}),d.gameextrainfo?`Jogando: ${d.gameextrainfo}`:b.text]}),e.jsxs(So,{children:[e.jsxs("span",{children:["Nível: ",e.jsx(Co,{children:d.level})]}),d.timecreated&&e.jsxs("span",{children:["Membro desde: ",u(d.timecreated)]})]})]})]}),e.jsx(yn,{style:{margin:"10px 0"}}),e.jsx(ko,{children:"Últimos 3 Jogos:"}),e.jsx($o,{children:s.length>0?s.slice(0,3).map(l=>e.jsxs(Io,{children:[e.jsx(zo,{src:`https://media.steampowered.com/steamcommunity/public/images/apps/${l.appid}/${l.img_icon_url}.jpg`,alt:l.name}),e.jsx(Eo,{children:l.name}),e.jsxs(To,{children:["Total: ",(l.playtime_forever/60).toFixed(1),"h"]})]},l.appid)):e.jsx("p",{style:{fontSize:"0.85rem"},children:"Nenhum jogo recente."})}),e.jsx("div",{style:{textAlign:"center",marginTop:"15px",fontSize:"0.8rem"},children:e.jsx(Me,{href:d.profileurl,target:"_blank",style:{textDecoration:"none"},children:"matheusdanoite na Steam"})})]})};n.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;n.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;n.div`
  position: relative;
  width: 48px;
  height: 48px;
`;n.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;n.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 14px;
  height: 14px;
  background-color: ${t=>t.$color};
  border-radius: 50%;
  border: 2px solid ${({theme:t})=>t.flatLight||"#c6c6c6"};
`;n.div`
  display: flex;
  flex-direction: column;
`;n.span`
  font-weight: bold;
  font-size: 1rem;
`;n.span`
  font-size: 0.8rem;
  color: ${({theme:t})=>t.textSecondary};
  font-style: italic;
`;n.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    background: ${({theme:t})=>t.flatLight||"rgba(255, 255, 255, 0.1)"};
    padding: 8px;
    border: 1px inset ${({theme:t})=>t.borderDark};
`;n.span`
    font-size: 0.75rem;
    font-weight: bold;
    text-transform: uppercase;
    color: ${({theme:t})=>t.textSecondary};
`;n.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;n.img`
    width: 40px;
    height: 40px;
    border-radius: 4px;
`;n.div`
    display: flex;
    flex-direction: column;
`;n.span`
    font-size: 0.85rem;
    font-weight: bold;
`;n.span`
    font-size: 0.8rem;
`;const Po=n.div`
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
`,Ro=n.div`
  z-index: ${t=>t.$zIndex};
  
  /* Desktop Styles */
  @media (min-width: 769px) {
    position: absolute;
    left: ${t=>t.$left};
    top: ${t=>t.$top?t.$top:"auto"};
    bottom: ${t=>t.$bottom?t.$bottom:"auto"};
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
`,_o=n.div`
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
`,Do=({id:t,title:o,children:r,onClose:c,onFocus:a,zIndex:x,desktopPos:h,isMobile:d,windowWidth:s,windowHeight:b,innerRef:u})=>{const l=i.useRef(null);return e.jsx(wt,{nodeRef:l,handle:".window-header",onMouseDown:()=>a(t),disabled:d,position:d?{x:0,y:0}:void 0,children:e.jsx(Ro,{ref:l,$zIndex:x,$left:h.left,$top:h.top,$bottom:h.bottom,children:e.jsxs(vt,{style:{width:s,height:b,maxWidth:"95vw",display:"flex",flexDirection:"column",position:"relative"},className:"window",children:[e.jsxs(jt,{className:"window-header",style:{display:"flex",alignItems:"center",justifyContent:"space-between",cursor:d?"default":"grab"},children:[e.jsx("span",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:o}),e.jsx(q,{onClick:()=>c(t),size:"sm",square:!0,children:e.jsx("span",{style:{fontWeight:"bold",transform:"translateY(-1px)"},children:"x"})})]}),e.jsx(kt,{style:{padding:0,flex:1,overflowY:"auto"},ref:u,children:r})]})})})},Ao=()=>{const[t,o]=i.useState(window.innerWidth<=768),r=i.useRef(null),[c,a]=i.useState(0);i.useEffect(()=>{const l=()=>o(window.innerWidth<=768);window.addEventListener("resize",l);const p=new ResizeObserver(g=>{for(let $ of g)$.target===r.current&&a($.contentRect.height+34)});return r.current&&p.observe(r.current),()=>{window.removeEventListener("resize",l),p.disconnect()}},[]);const[x,h]=i.useState({music:{id:"music",title:"last.fm",isOpen:!0,zIndex:1,content:e.jsx(Zn,{}),width:"300px",desktopPos:{top:"20px",left:"20px"}},bluesky:{id:"bluesky",title:"bluesky",isOpen:!0,zIndex:2,content:e.jsx(go,{}),width:"480px",desktopPos:{top:"20px",left:"340px"}},steam:{id:"steam",title:"steam",isOpen:!0,zIndex:1,content:e.jsx(Lo,{}),width:"350px",desktopPos:{top:"20px",left:"840px"}}}),d=l=>{h(p=>({...p,[l]:{...p[l],isOpen:!1}}))},s=l=>{t||h(p=>{const g={...p},$=Math.max(...Object.values(g).map(w=>w.zIndex));return g[l].zIndex<=$&&(g[l]={...g[l],zIndex:$+1}),g})},b=()=>{h(l=>{const p={...l};return Object.keys(p).forEach(g=>{p[g].isOpen=!0,p[g].zIndex=1}),p.music.zIndex=1,p.bluesky.zIndex=2,p.steam.zIndex=1,p})},u=Object.values(x).every(l=>!l.isOpen);return e.jsxs(Po,{children:[Object.values(x).map(l=>l.isOpen&&e.jsx(Do,{id:l.id,title:l.title,onClose:d,onFocus:s,zIndex:l.zIndex,desktopPos:l.desktopPos,isMobile:t,windowWidth:l.width,windowHeight:l.height,innerRef:l.id==="music"?r:null,children:l.content},`${l.id}-${t}`)),u&&e.jsx(_o,{children:e.jsx(q,{onClick:b,style:{width:"200px",height:"50px",fontWeight:"bold"},children:"Reiniciar Sistema"})})]})},Fo=n.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    padding: 20px;
`,Bo=n.div`
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
`,Wo=n.img`
    width: 48px;
    height: 48px;
    margin-bottom: 8px;
    image-rendering: pixelated;
`,Oo=n.span`
    font-size: 1rem;
    line-height: 1.2;
    word-break: break-word;
`,_e=n.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 1rem;
`,nt=n.img`
    width: 100%;
    max-width: 100%; /* Responsive image */
    height: auto;
    border: 2px solid ${({theme:t})=>t.borderDark};
    align-self: center;
`,Ho=({onNavigate:t})=>{const[o,r]=i.useState(null),[c,a]=i.useState(window.innerWidth<=768),[x,h]=i.useState(400),d=i.useRef(null);ce.useEffect(()=>{const l=()=>a(window.innerWidth<=768);return window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[]),ce.useEffect(()=>{if(o&&d.current){const l=()=>{const g=d.current.offsetHeight;h(Math.max(400,g+150))};l();const p=new ResizeObserver(l);return p.observe(d.current),()=>p.disconnect()}else h(400)},[o]),ce.useEffect(()=>(o&&c?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[o,c]);const s=[{id:1,name:"Hangul Hangover",icon:"https://win98icons.alexmeub.com/icons/png/console_prompt-0.png"},{id:2,name:"Legado Digital",icon:"https://win98icons.alexmeub.com/icons/png/executable-0.png"},{id:3,name:"Projeto 3.msi",icon:"https://win98icons.alexmeub.com/icons/png/installer_file_gear-0.png"}],b=l=>{switch(l){case 1:return e.jsxs(_e,{children:[e.jsx("p",{style:{fontWeight:"bold"},children:"Um estudo sobre tipografia e café."}),e.jsx(nt,{src:"https://placehold.co/600x400/png?text=Hangul+Foto+1",alt:"Hangul Preview"}),e.jsx("p",{children:"Hangul Hangover é um projeto que explora a intersecção entre a estética do alfabeto coreano e a cultura do café noturno. Desenvolvido com foco em legibilidade e atmosfera."}),e.jsx(nt,{src:"https://placehold.co/600x400/png?text=Hangul+Foto+2",alt:"Hangul Preview 2"}),e.jsx("p",{children:"Mais detalhes sobre o processo criativo, ferramentas utilizadas e o resultado final. A tipografia foi desenhada para funcionar bem em ambientes com pouca luz, lembrando displays CRT antigos."})]});case 2:return e.jsxs(_e,{children:[e.jsx("p",{children:"Arquivos preservados do passado. Estes são backups estáticos dos meus perfis no Orkut e Twitter."}),e.jsx("p",{children:"Navegue como se estivesse anos atrás."}),e.jsxs("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:[e.jsx(q,{onClick:()=>t("orkut"),size:"lg",style:{fontWeight:"bold"},children:"Acessar Orkut (2014)"}),e.jsx(q,{onClick:()=>t("twitter"),size:"lg",style:{fontWeight:"bold"},children:"Acessar Twitter"}),e.jsx(q,{onClick:()=>t("instagram"),size:"lg",style:{fontWeight:"bold"},children:"Acessar Instagram"})]})]});case 3:return e.jsx(_e,{children:e.jsx("p",{children:"Detalhes do Projeto 3 virão em breve."})});default:return e.jsx("p",{children:"Conteúdo em desenvolvimento..."})}},u=l=>{const p=s.find(g=>g.id===l);return p?p.name:"Projeto"};return e.jsxs("div",{style:{position:"relative",width:"100%",minHeight:`${x}px`,display:"flex",flexDirection:"column",alignItems:"center",transition:"min-height 0.3s ease"},children:[e.jsx(Fo,{children:s.map(l=>e.jsxs(Bo,{onClick:()=>r(l.id),children:[e.jsx(Wo,{src:l.icon,alt:l.name}),e.jsx(Oo,{children:l.name})]},l.id))}),o&&(c?e.jsx("div",{style:{position:"fixed",top:"40px",left:0,width:"100vw",height:"calc(100vh - 40px)",zIndex:2e3,display:"flex",alignItems:"flex-start",justifyContent:"center",overflowY:"auto",WebkitOverflowScrolling:"touch",paddingBottom:"150px"},onClick:l=>{l.target===l.currentTarget&&r(null)},children:e.jsx(be,{id:`project-${o}`,title:u(o),onClose:()=>r(null),onFocus:()=>{},isMobile:!0,style:{width:"90%",maxWidth:"600px",marginTop:"20px",marginBottom:"20px",position:"relative"},windowStyle:{width:"100%",display:"flex",flexDirection:"column"},children:e.jsx("div",{style:{padding:0,display:"flex",flexDirection:"column"},children:b(o)})})}):e.jsx(be,{id:`project-${o}`,title:u(o),onClose:()=>r(null),onFocus:()=>{},isMobile:!1,style:{position:"absolute",zIndex:1e3,top:"0px",left:"15vw",width:"100vw",minWidth:"320px",maxWidth:"1000px"},windowStyle:{width:"100%",maxWidth:"100%"},children:e.jsx("div",{ref:d,style:{padding:0,height:"100%",display:"flex",flexDirection:"column"},children:b(o)})}))]})},De=new Map,ze=async t=>{if(!Ze||!t)return"";if(t.startsWith("http"))return t;let o=t;if(o.startsWith("/src/data/")?o=o.replace("/src/data/",""):o.startsWith("src/data/")&&(o=o.replace("src/data/","")),o.startsWith("/")&&(o=o.substring(1)),De.has(o))return De.get(o);try{const r=wn(Ze,o),c=await vn(r);return De.set(o,c),c}catch(r){return console.error(`[StorageLoader] Error fetching URL for ${o}:`,r.message,r),""}},Q=async t=>{const o=await ze(t);if(!o)return null;try{const r=await fetch(o);if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);return await r.json()}catch(r){return console.error(`[StorageLoader] Error fetching JSON ${t}:`,r.message),r.name==="TypeError"&&r.message==="Load failed"&&console.error("This looks like a CORS error (Access-Control-Allow-Origin missing) or network failure."),null}},fe=t=>{if(!t)return"";if(t.startsWith("http"))return t;let o=t;return o.startsWith("/src/data/")?o=o.replace("/src/data/",""):o.startsWith("src/data/")&&(o=o.replace("src/data/","")),o.startsWith("/")&&(o=o.substring(1)),o.startsWith("tweets_media/")||o.startsWith("profile_media/")?`twitter/data/${o}`:o},No=async t=>Q(`twitter/chunks/chunk_${t}.json`),Go=async()=>Q("twitter/chunks/manifest.json"),$e=n.div`
  width: 100%;
  height: 100%;
  background-color: #262626;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
`,Uo=n.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: ${t=>t.$objectFit||"cover"};
  display: block;
  width: 100%;
  height: 100%;
  object-fit: ${t=>t.$objectFit||"cover"};
  opacity: ${t=>t.$loaded?1:0};
  transition: opacity 0.3s;
`,Yo=n.video`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: ${t=>t.$objectFit||"cover"};
  opacity: ${t=>t.$loaded?1:0};
  transition: opacity 0.3s;
`,G=ce.forwardRef(({path:t,type:o="image",alt:r,className:c,controls:a,autoPlay:x,loop:h,muted:d,objectFit:s,showPlaceholder:b=!0,...u},l)=>{const[p,g]=i.useState(""),[$,w]=i.useState(!0),[I,T]=i.useState(!1);i.useEffect(()=>{let S=!0;return t&&(async()=>{w(!0),T(!1);try{const U=await ze(t);S&&(U?g(U):T(!0))}catch(U){console.error("Error loading media:",t,U),S&&T(!0)}})(),()=>{S=!1}},[t]);const j=()=>w(!1),P=()=>{w(!1),T(!0)},y=S=>{typeof l=="function"?l(S):l&&(l.current=S),o!=="video"&&S&&S.complete&&$&&j()};if(!t)return e.jsx($e,{className:c});const M=S=>{j(),u.onLoad&&u.onLoad(S)},_=S=>{j(),u.onLoadedData&&u.onLoadedData(S)},W=S=>{P(),u.onError&&u.onError(S)},{onLoad:D,onLoadedData:k,onError:z,...m}=u;return t?I&&!p?e.jsx($e,{className:c,children:"Erro"}):e.jsxs(e.Fragment,{children:[$&&b&&e.jsx($e,{className:c}),o==="video"?e.jsx(Yo,{src:p,className:c,$loaded:!$,$objectFit:s,onLoadedData:_,onError:W,controls:a,autoPlay:x,loop:h,muted:d,playsInline:!0,ref:y,...m}):e.jsx(Uo,{src:p,alt:r||"Media",className:c,$loaded:!$,$objectFit:s,onLoad:M,onError:W,ref:y,...m})]}):e.jsx($e,{className:c})}),Vo=n.div`
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
`,qo=n.div`
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
`,Ko=n.div`
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
`,Xo=n.div`
  background: #fff;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 12px;
  position: relative;
`,Zo=n.div`
  background-color: #0084B4;
  background-image: url(${t=>t.$bg});
  background-size: cover;
  background-position: center;
  height: 95px;
  width: 100%;
`,Jo=n.div`
  padding: 12px;
`,Qo=n.div`
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
`,ei=n.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 1.2;
  color: #292f33;
`,ti=n.div`
  font-size: 12px;
  color: #8899a6;
  margin-bottom: 10px;
`,ni=n.div`
  font-size: 14px;
  margin-bottom: 10px;
`,ot=n.div`
  font-size: 12px;
  color: #8899a6;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 5px;
`,oi=n.div`
  border-top: 1px solid #e1e8ed;
  margin-top: 12px;
  padding-top: 12px;
  display: flex;
  width: 100%;
`,it=n.div`
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
`,rt=n.span`
  display: block;
  font-size: 18px;
  color: #0084B4;
  font-weight: bold;
  margin-top: 2px;
`,ii=n.div`
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
`;const ri=n.div`
  /* padding: 0; */
`,si=n.div`
  padding: 12px 15px;
  border-bottom: 1px solid #e1e8ed;
  display: flex;
  gap: 10px;
  transition: background-color 0.1s;
  
  &:hover {
    background-color: #f5f8fa;
  }
`,ai=n.div`
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
`,li=n.div`
  flex: 1;
  min-width: 0;
`,di=n.div`
  margin-bottom: 2px;
`,ci=n.span`
  font-weight: bold;
  color: #292f33;
  margin-right: 5px;
`,pi=n.span`
  color: #8899a6;
  font-size: 13px;
  margin-right: 5px;
`,hi=n.span`
  color: #8899a6;
  font-size: 13px;
  
  &::before {
    content: "·";
    margin: 0 3px;
  }
`,xi=n.div`
  font-size: 14px;
  line-height: 18px;
  color: #292f33;
  white-space: pre-wrap;
  margin-bottom: 10px;
`,ui=n.div`
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
`,fi=n.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columns as requested */
  gap: 5px;
  padding: 10px;
`,gi=n.div`
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
`,mi=n.div`
  padding: 20px;
  text-align: center;
  color: #8899a6;
`,bi=n.div`
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
`,yi=`
  @keyframes slideInRight {
    from { transform: translateX(50px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
`,wi=`
  @keyframes slideInLeft {
    from { transform: translateX(-50px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
`,vi=n.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  animation: ${t=>t.direction==="next"?"slideInRight":"slideInLeft"} 0.3s ease-out;
  ${yi}
  ${wi}
`,ji=n.div`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  max-height: 100dvh;
`,ki=n(G)`
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
`,Si=n.div`
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
`;const Ci=n.div`
  color: #8899a6;
  font-size: 13px;
  margin-top: 10px;
  border-top: 1px solid #38444d;
  padding-top: 8px;
`,$i=n.div`
  font-size: 15px;
  line-height: 1.5;
  color: #fff;
  white-space: pre-wrap;
`,Ii=n.button`
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
`,zi=`
  @keyframes shimmer {
    0% { background-position: -200px 0; }
    100% { background-position: 200px 0; }
  }
`,Ke=n.div`
  background: linear-gradient(90deg, #e8e8e8 0px, #f5f5f5 50px, #e8e8e8 100px);
  background-size: 200px 100%;
  animation: shimmer 1.2s infinite linear;
  ${zi}
`,Ei=n.div`
  padding: 12px;
  display: flex;
  gap: 12px;
  border-bottom: 1px solid #e1e8ed;
`,Ti=n(Ke)`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  flex-shrink: 0;
`,Mi=n.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Ae=n(Ke)`
  height: ${t=>t.height||"14px"};
  width: ${t=>t.width||"100%"};
  border-radius: 4px;
`,Li=n(Ke)`
  height: 180px;
  border-radius: 12px;
  margin-top: 8px;
`,Pi=()=>e.jsx(e.Fragment,{children:[...Array(5)].map((t,o)=>e.jsxs(Ei,{children:[e.jsx(Ti,{}),e.jsxs(Mi,{children:[e.jsx(Ae,{width:"40%",height:"16px"}),e.jsx(Ae,{width:"80%"}),e.jsx(Ae,{width:"60%"}),o%2===0&&e.jsx(Li,{})]})]},o))}),Ri=()=>{const t=fe("/src/data/twitter/data/profile_media/125515755-hxB9hFTM.png"),o=fe("/src/data/twitter/data/profile_media/125515755-1596834705.jpg"),[r,c]=i.useState("");i.useEffect(()=>{ze(o).then(c)},[o]);const[a,x]=i.useState([]),[h,d]=i.useState([]),[s,b]=i.useState(!0),[u,l]=i.useState(null),[p,g]=i.useState(0),[$,w]=i.useState("tweets"),[I,T]=i.useState(null),[j,P]=i.useState("next"),[y,M]=i.useState(null),[_,W]=i.useState(60),D=i.useRef(null),k=i.useRef(null),z=i.useRef(!1),m=20,S=60,Y=(f,C=!1)=>{if(!f)return"";const B=new Date(f),H=B.toLocaleDateString("pt-BR",{day:"numeric",month:"short",year:"numeric"}).replace(/ de /g," ");return C?`${B.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"})} · ${H} `:H},[U,N]=i.useState(!0),K=i.useRef(null),A=()=>{N(!0),K.current&&clearTimeout(K.current),K.current=setTimeout(()=>{N(!1)},3e3)},O=()=>{A()},V=()=>{K.current&&clearTimeout(K.current),N(!1)},oe=f=>{if(f.stopPropagation(),f.target===f.currentTarget){Z();return}const C=f.target.tagName;(C==="IMG"||C==="VIDEO")&&(N(B=>!B),U||(K.current&&clearTimeout(K.current),K.current=setTimeout(()=>{N(!1)},3e3)))},X=f=>{let C=f.text;return C=C.replace(/https:\/\/t\.co\/\w+/g,""),C.trim()},E=(f,C)=>f.filename?fe(`tweets_media/${C}-${f.filename}`):"",L=(f,C)=>{if(!f.filename)return"";if(f.type==="video"||f.type==="animated_gif"){const B=f.filename.substring(0,f.filename.lastIndexOf("."))||f.filename;return fe(`tweets_media/thumbs/${C}-${B}.jpg`)}return fe(`tweets_media/medium/${C}-${f.filename}`)},v=(f,C)=>f.filename?f.type==="video"||f.type==="animated_gif"?E(f,C):fe(`tweets_media/medium/${C}-${f.filename}`):"",R=ce.useMemo(()=>a.flatMap(f=>{if(!f.media||f.media.length===0)return[];const C=X(f),B=Y(f.date,!0);return f.media.map(H=>{const se=E(H,f.id),de=L(H,f.id),ae=v(H,f.id);return{...H,tweetId:f.id,date:B,text:C,localPath:se,thumbPath:de,mediumPath:ae}})}),[a]),F=ce.useMemo(()=>R.filter(f=>f.mediumPath||f.localPath),[R]),ee=f=>{const C=F.findIndex(B=>B.mediumPath===f);C!==-1&&(T(C),N(!0),A())},Z=()=>{T(null),K.current&&clearTimeout(K.current)};i.useEffect(()=>{const f=C=>{I!==null&&(C.key==="Escape"?Z():C.key==="ArrowRight"?(P("next"),T(B=>(B+1)%F.length)):C.key==="ArrowLeft"&&(P("prev"),T(B=>(B-1+F.length)%F.length)))};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[I,F]);const ue=f=>{M(f.targetTouches[0].clientX)},ye=f=>{if(y===null)return;const C=f.changedTouches[0].clientX,B=y-C;B>50?(P("next"),T(H=>(H+1)%F.length)):B<-50&&(P("prev"),T(H=>(H-1+F.length)%F.length)),M(null)};i.useEffect(()=>(I!==null?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[I]);const[ke,he]=i.useState(0),ie=async f=>{if(z.current)return!1;z.current=!0,console.log(`Loading chunk ${f}...`);try{const C=await No(f);if(C&&C.length>0){const B=[...C].reverse();return x(H=>{const se=new Set(H.map(ae=>ae.id)),de=B.filter(ae=>!se.has(ae.id));return[...H,...de]}),a.length,!0}return!1}catch(C){return console.error("Error loading chunk",f,C),!1}finally{z.current=!1}};i.useEffect(()=>{(async()=>{b(!0);try{const C=await Go();if(C&&C.totalChunks){he(C.totalChunks);const B=C.totalChunks-1;we(B),await ie(B)}else await ie(0)}catch(C){console.error("Manifest load failed",C),await ie(0)}b(!1)})()},[]),i.useEffect(()=>{if(s||$!=="tweets")return;const f=new IntersectionObserver(C=>{C[0].isIntersecting&&Pe()},{rootMargin:"400px"});return D.current&&f.observe(D.current),()=>{D.current&&f.unobserve(D.current)}},[s,a,p,$]);const[le,we]=i.useState(0),Pe=async()=>{if(p<a.length){const f=Math.min(p+m,a.length);d(C=>[...C,...a.slice(p,f)]),g(f)}else{const f=le-1;f>=0&&await ie(f)&&we(f)}};i.useEffect(()=>{if(a.length>h.length&&p===h.length&&!s){const f=Math.min(p+m,a.length);d(C=>[...C,...a.slice(p,f)]),g(f)}},[a.length]),i.useEffect(()=>{if(s||$!=="media")return;const f=new IntersectionObserver(C=>{if(C[0].isIntersecting)if(_<R.length)W(B=>Math.min(B+S,R.length));else{const B=le-1;B>=0&&ie(B).then(H=>{H&&we(B)})}},{rootMargin:"600px"});return k.current&&f.observe(k.current),()=>{k.current&&f.unobserve(k.current)}},[s,$,_,R.length,le]),i.useEffect(()=>{if(s||a.length===0)return;const f=p,C=Math.min(p+m*2,a.length);a.slice(f,C).forEach(H=>{H.media&&H.media.length>0&&H.media.forEach(se=>{if(se.type!=="video"&&se.type!=="animated_gif"){const de=L(se,H.id);de&&ze(de).then(ae=>{if(ae){const Se=new Image;Se.src=ae}})}})})},[p,a,s]);const Re=f=>{if(!f.media||f.media.length===0)return null;const C=f.media,B=C.length>1;return e.jsx(ui,{$isGrid:B,children:C.map((H,se)=>{const de=H.type==="video"||H.type==="animated_gif",ae=E(H,f.id),Se=L(H,f.id),qt=v(H,f.id);return de&&!ae||!de&&!Se?null:de?e.jsx(G,{path:ae,type:"video",controls:!0,preload:"none"},se):e.jsx(G,{path:Se,alt:"Tweet media",loading:"lazy",style:{cursor:"pointer"},onClick:()=>ee(qt)},se)})})},xe=I!==null?F[I]:null;return u?e.jsx("div",{style:{color:"white",padding:20,textAlign:"center"},children:u}):e.jsxs(Vo,{children:[e.jsxs(qo,{children:[e.jsx(Ko,{children:e.jsxs(Xo,{children:[e.jsx(Zo,{$bg:r}),e.jsxs(Jo,{children:[e.jsx(Qo,{children:e.jsx(G,{path:t,alt:"Avatar"})}),e.jsx(ei,{children:"matheus"}),e.jsx(ti,{children:"@matheusdanoite"}),e.jsx(ni,{children:"desventuras em série"}),e.jsx(ot,{children:"Guarapuava, PR"}),e.jsx(ot,{children:"Criado em 22 de março de 2010"}),e.jsxs(oi,{children:[e.jsxs(it,{onClick:()=>w("tweets"),children:["Tweets",e.jsx(rt,{children:"26.014"})]}),e.jsxs(it,{onClick:()=>w("media"),children:["Mídia",e.jsx(rt,{children:"3.353"})]})]})]})]})}),e.jsxs(ii,{children:[$==="tweets"&&e.jsxs(ri,{children:[s&&e.jsx(Pi,{}),!s&&h.map((f,C)=>{Y(f.date);const B=X(f);return a.findIndex(H=>H.id===f.id),e.jsxs(si,{children:[e.jsx(ai,{children:e.jsx(G,{path:t,alt:"Avatar"})}),e.jsxs(li,{children:[e.jsxs(di,{children:[e.jsx(ci,{children:"matheus"}),e.jsx(pi,{children:"@matheusdanoite"}),e.jsx(hi,{children:Y(f.date,!0)})]}),e.jsx(xi,{children:B}),Re(f)]})]},f.id||C)}),!s&&p<a.length&&e.jsx(mi,{ref:D,children:"Carregando mais..."})]}),$==="media"&&e.jsxs(fi,{children:[R.slice(0,_).map((f,C)=>{if(!f.thumbPath)return null;const B=f.type==="video"||f.type==="animated_gif";return e.jsxs(gi,{children:[e.jsx(G,{path:f.thumbPath,type:f.type,alt:"Media",loading:"lazy",style:{cursor:"pointer"},onClick:()=>ee(f.mediumPath)}),B&&e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"white",backgroundColor:"rgba(0,0,0,0.5)",borderRadius:"50%",padding:"10px"},children:"▶"})]},C)}),e.jsx("div",{ref:k,style:{gridColumn:"1 / -1",padding:"20px",textAlign:"center",color:"#999",fontSize:"11px"},children:_<R.length||le>0?"carregando mais mídia...":"fim das mídias"})]})]})]}),xe&&e.jsxs(bi,{onClick:Z,onTouchStart:ue,onTouchEnd:ye,onMouseMove:O,onMouseLeave:V,children:[e.jsx(Ii,{onClick:Z,children:"×"}),e.jsx(vi,{direction:j,onClick:oe,children:e.jsxs(ji,{children:[xe.type==="video"||xe.type==="animated_gif"?e.jsx(G,{path:xe.mediumPath,type:"video",controls:!0,autoPlay:!0,style:{maxWidth:"100vw",maxHeight:"100dvh",width:"auto",height:"auto",boxShadow:"0 0 20px rgba(0,0,0,0.5)",display:"block"}}):e.jsx(ki,{path:xe.mediumPath,alt:"Full view"}),e.jsxs(Si,{$visible:U,children:[e.jsx($i,{children:xe.text}),e.jsx(Ci,{children:xe.date})]})]})},I)]})]})},st=n.div`
  background-color: #000;
  min-height: 100vh;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`,_i=n.div`
  width: 100%;
  max-width: 935px; /* Instagram web max width */
  padding: 30px 20px 0;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 736px) {
    padding: 0;
    width: 100%;
  }
`,Di=n.header`
  display: flex;
  margin-bottom: 20px;
  align-items: center; /* Vertically center content with profile pic */
  
  @media (max-width: 736px) {
    padding: 14px;
    margin-bottom: 0;
    /* Removed border-bottom for better cohesion */
  }
`,Ai=n.div`
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 30px;
  display: flex;
  justify-content: center;
  
  @media (max-width: 736px) {
    flex-grow: 0;
    margin-right: 20px;
  }
`,Fi=n(G)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #363636;
  
  @media (max-width: 736px) {
    width: 77px;
    height: 77px;
  }
`,Bi=n.section`
  flex-grow: 2;
  flex-basis: 30px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Ensure content is centered if height matches image */
  
   @media (max-width: 736px) {
     flex-grow: 1;
   }
`,Wi=n.div`
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
`,Oi=n.ul`
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
`,Hi=n.div`
  display: none;
  margin-bottom: 12px;
  
  @media (max-width: 736px) {
    display: flex;
    justify-content: flex-start;
    gap: 24px;
    width: auto;
  }
`,Fe=n.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  span:first-child {
    font-weight: 700;
    font-size: 16px;
    color: #fff;
    line-height: 1.2;
  }
  
  span:last-child {
    font-size: 14px;
    color: #fff;
    font-weight: 400;
  }
`,Ni=n.div`
  font-size: 14px;
  margin-bottom: 12px;
  
  h1 {
    font-weight: 400;
    font-size: 14px;
    margin: 0;
  }
`,Gi=n.div`
  font-size: 14px;
  white-space: normal;
  line-height: 18px;
  color: #fff;
`,Ui=n.div`
  border-top: 1px solid #262626;
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-bottom: 5px; /* small gap before grid */
  
  @media (max-width: 736px) {
    gap: 0;
    justify-content: space-around;
    margin-bottom: 0;
    border-bottom: 1px solid #262626; /* Add bottom border for cohesion */
  }
`,Be=n.div`
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
     height: 44px; /* Narrower on mobile */
  }
`,Yi=()=>e.jsxs("svg",{"aria-label":"",color:"currentColor",fill:"currentColor",height:"24",role:"img",viewBox:"0 0 24 24",width:"24",children:[e.jsx("rect",{fill:"none",height:"18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",width:"18",x:"3",y:"3"}),e.jsx("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",x1:"9.015",x2:"9.015",y1:"3",y2:"21"}),e.jsx("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",x1:"14.985",x2:"14.985",y1:"3",y2:"21"}),e.jsx("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",x1:"21",x2:"3",y1:"9.015",y2:"9.015"}),e.jsx("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",x1:"21",x2:"3",y1:"14.985",y2:"14.985"})]}),Vi=()=>e.jsxs("svg",{"aria-label":"",color:"currentColor",fill:"currentColor",height:"24",role:"img",viewBox:"0 0 24 24",width:"24",children:[e.jsx("line",{fill:"none",stroke:"currentColor",strokeLinejoin:"round",strokeWidth:"2",x1:"2.049",x2:"21.95",y1:"7.002",y2:"7.002"}),e.jsx("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",x1:"13.504",x2:"16.362",y1:"2.001",y2:"7.002"}),e.jsx("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",x1:"7.207",x2:"10.002",y1:"2.11",y2:"7.002"}),e.jsx("path",{d:"M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"})]}),qi=()=>e.jsxs("svg",{"aria-label":"",color:"currentColor",fill:"currentColor",height:"24",role:"img",viewBox:"0 0 24 24",width:"24",children:[e.jsx("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",x1:"21",x2:"3",y1:"10",y2:"10"}),e.jsx("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",x1:"21",x2:"3",y1:"6",y2:"6"}),e.jsx("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",x1:"21",x2:"3",y1:"14",y2:"14"}),e.jsx("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",x1:"21",x2:"3",y1:"18",y2:"18"})]}),Ki=n.div`
  display: flex;
  padding: 20px;
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
      padding: 10px 0; /* Symmetric Top/Bottom padding */
      justify-content: center;
  }
`,Xi=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  min-width: 85px; /* Ensure space for ring (77px) + padding/border without cutting */
  padding: 5px; /* Add padding to item to prevent hover effects or rings from touching edges */
  
  @media (max-width: 736px) {
    gap: 12px; /* Increased gap */
    padding: 0 5px; /* Remove vertical padding, rely on container */
  }
`,Zi=n.div`
  width: 77px;
  height: 77px;
  border-radius: 50%;
  padding: 3px;
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`,Ji=n(G)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid #000;
  object-fit: cover;
`,Qi=n.span`
  font-size: 12px;
  color: #fff;
  text-align: center;
  max-width: 80px;
  line-height: 1.2;
`,er=n.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px; /* classic instagram gap usually small */
  padding-bottom: 50px;
  width: 100%;
`,tr=n.div`
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
`,nr=n.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns like grid */
  gap: 4px;
  padding-bottom: 50px;
  width: 100%;
`,or=n.div`
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
`,ir=n.div`
    width: 100%;
    max-width: 470px;
    margin: 0 auto;
    padding-top: 20px;

    @media (max-width: 736px) {
      padding-top: 0; /* Remove padding to match tab bottom symmetry */
    }
`,rr=n.div`
  background: #000;
  border: 1px solid #262626;
  border-radius: 8px;
  margin-bottom: 24px;
  color: #fff;
`,sr=n.div`
  display: flex;
  align-items: center;
  padding: 14px;
`,$t=n.div`
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
`,It=n(G)`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: ${t=>t.$hasStories?"2px solid #000":"none"};
    object-fit: cover;
`,ar=n.div`
  width: 100%;
  position: relative;
  background-color: #000;
  min-height: 300px;
  overflow: hidden;

  &:hover button {
    opacity: 1;
  }
`,zt=n.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${t=>-(t.$index*100)}%);
  width: 100%;
  height: 100%;
  flex: 1; /* Ensure track occupies available space */
`,Et=n.div`
  min-width: 100%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;

  /* img, video selector removed from styled component to allow FirebaseMedia */
  /* We will style FirebaseMedia via props or nested styles if needed */
  & > * {
    width: 100%;
    height: 100%;
    display: block;
    max-height: 100%; 
    object-fit: contain;
  }
`,lr=n.div`
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
`;const at=n.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 20%;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  ${t=>t.$left?"left: 0;":"right: 0;"}
`,Tt=n.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh; /* Dynamic viewport height to account for mobile bars */
  background: rgba(0, 0, 0, 0.95); /* Slightly darker/more immersive */
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
`;const dr=n.div`
  position: absolute;
  top: max(10px, env(safe-area-inset-top)); /* Respect notch */
  left: 0;
  width: 100%;
  padding: 0 5px;
  display: flex;
  gap: 3px;
  z-index: 10;
`,cr=n.div`
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
`,Mt=n.div`
  width: 100%;
  height: 100%;
  img, video {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`,lt=n.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 50%;
  z-index: 5;
  cursor: pointer;
  ${t=>t.$left?"left: 0;":"right: 0;"}
`,Lt=n.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120px;
  background: linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 100%);
  z-index: 10;
  z-index: 10;
  pointer-events: none;
`,pr=n.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%);
  z-index: 10;
  pointer-events: none;
`,hr=n.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
  padding: 0 16px;
  z-index: 20;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,xr=n.div`
  color: #fff;
  font-size: 14px;
  line-height: 1.4;
  text-shadow: 0 1px 2px rgba(0,0,0,0.5);
  white-space: pre-wrap;
  
  span {
    font-weight: 600;
    margin-right: 8px;
  }
`,Pt=n.div`
  position: absolute;
  top: calc(max(10px, env(safe-area-inset-top)) + 15px); /* Position below progress bar with safe area */
  left: 0;
  width: 100%;
  padding: 0 16px;
  display: flex;
  align-items: center;
  z-index: 20;
  color: #fff;
`,Rt=n(G)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`,_t=n.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`,Dt=n.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`,At=n.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 2px;
`,Ft=n.div`
  cursor: pointer;
  padding: 8px;
  margin-right: -8px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    filter: drop-shadow(0 0 2px rgba(0,0,0,0.5));
  }
`,dt=n.button`
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
`,Bt=`
  @media (max-width: 736px) {
    padding: 0;
  }
`,Wt=n.div`
  width: 100%;
  max-width: 400px;
  height: 100dvh; /* Dynamic viewport height */
  position: relative;
  overflow: hidden;
  
  @media (max-width: 736px) {
    max-width: 100%;
  }
`,ur=n.div`
  display: flex;
  width: 100%;
  height: 100%;
  transition: ${t=>t.$animating?"transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)":"none"};
  transform: translateX(${t=>-(t.$offset*100)}%);
`,ct=n.div`
  min-width: 100%;
  width: 100%;
  height: 100%;
  position: relative;
  background: transparent;
  display: flex;
  justify-content: center;
`,Ot=n.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: transparent;
  display: flex;
  justify-content: center;
`,Ht=n.div`
  position: relative;
  height: 100%;
  aspect-ratio: 9/16;
  background: #000;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,fr=t=>t,gr=t=>{const o=new Date(t),c=(new Date-o)/1e3;return c<60?"Agora":c<3600?`${Math.floor(c/60)} min`:c<86400?`${Math.floor(c/3600)} h`:c<604800?`${Math.floor(c/86400)} d`:o.toLocaleDateString("pt-BR",{day:"numeric",month:"short",year:"numeric"})},Ee=t=>{if(!t)return"";const o=document.createElement("textarea");return o.innerHTML=t,o.value},mr=({initialDate:t,storyDates:o,stories:r,onClose:c,profilePic:a,singleDayMode:x=!1})=>{const[h,d]=i.useState(o.indexOf(t)),[s,b]=i.useState(0),[u,l]=i.useState(!1),[p,g]=i.useState(o.indexOf(t)),[$,w]=i.useState(null),[I,T]=i.useState(!0),[j,P]=i.useState(0),[y,M]=i.useState(!1),_=i.useRef(null),[W,D]=i.useState(!1),k=i.useRef(null),z=i.useRef(null),m=i.useRef(null),S=v=>{m.current=v.touches[0].clientY,z.current&&(z.current.style.transition="none"),M(!0),k.current&&k.current.pause()},Y=v=>{if(m.current===null)return;const F=v.touches[0].clientY-m.current;F>0&&z.current&&(z.current.style.transform=`translateY(${F}px)`)},U=v=>{if(m.current===null)return;v.changedTouches[0].clientY-m.current>150?c():(M(!1),k.current&&k.current.play(),z.current&&(z.current.style.transition="transform 0.3s ease-out",z.current.style.transform="")),m.current=null},N=o[h],K=[...r[N]||[]].sort((v,R)=>new Date(v.date)-new Date(R.date)),A=K[s],O=ce.useCallback((v,R)=>{u||(w(v),l(!0),g(v),setTimeout(()=>{d(v),b(R==="next"?0:r[o[v]].length-1),l(!1),w(null)},400))},[u,r,o]),V=ce.useCallback(()=>{u||(s<K.length-1?(b(v=>v+1),P(0)):!x&&h<o.length-1?O(h+1,"next"):c())},[u,s,K.length,h,o,O,c,x]),oe=ce.useCallback(()=>{u||(s>0?(b(v=>v-1),P(0)):!x&&h>0&&O(h-1,"prev"))},[u,s,h,O,x]),X=()=>{T(!0),_.current&&clearTimeout(_.current),_.current=setTimeout(()=>{T(!1)},3e3)};i.useEffect(()=>(X(),()=>{_.current&&clearTimeout(_.current)}),[s,h]),i.useEffect(()=>{D(!1)},[s,h]),i.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[]),i.useEffect(()=>{const v=R=>{R.key==="ArrowRight"&&V(),R.key==="ArrowLeft"&&oe(),R.key==="Escape"&&c()};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[V,oe,c]),i.useEffect(()=>{if(u||!A||!N||!W||y||(P(0),A.media?.[0]?.type==="video"))return;const v=5e3,R=50,F=R/v*100;let ee=0;const Z=setInterval(()=>{ee+=F,ee>=100?(clearInterval(Z),P(100),V()):P(ee)},R);return()=>clearInterval(Z)},[u,A?.date,N,V,W,y]);const E=()=>{if(k.current){const v=k.current.currentTime/k.current.duration*100;P(v)}};if(!A)return null;const L=(v,R,F=!1)=>{const ee=[...r[R]||[]].sort((ie,le)=>new Date(ie.date)-new Date(le.date)),Z=ee[v]||ee[0];if(!Z)return null;const ue=new Date(Z.date),ye=ue.toLocaleDateString("pt-BR",{day:"2-digit",month:"short",year:"numeric",timeZone:"UTC"}),ke=ue.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit",timeZone:"UTC"}),he=Z.media&&Z.media[0]?Z.media[0]:null;return he?e.jsxs(Ot,{children:[e.jsxs(Ht,{children:[e.jsx(Lt,{}),e.jsxs(Pt,{children:[e.jsx(Rt,{path:a}),e.jsxs(_t,{children:[e.jsx(Dt,{children:"matheusdodia"}),e.jsxs(At,{children:[ye," • ",ke]})]}),e.jsx(Ft,{onClick:c,children:e.jsxs("svg",{"aria-label":"Fechar",color:"#ffffff",fill:"#ffffff",height:"18",role:"img",viewBox:"0 0 24 24",width:"18",children:[e.jsx("polyline",{fill:"none",points:"20.643 3.357 12 12 3.353 20.647",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3"}),e.jsx("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3",x1:"20.649",x2:"3.354",y1:"20.649",y2:"3.354"})]})})]}),e.jsx(dr,{children:ee.map((ie,le)=>{const we=!u&&le===v&&R===N,Pe=F?!($>h):R===N?le<v:$>h,Re=we?j:Pe?100:0;return e.jsx(cr,{children:e.jsx("div",{style:{width:`${Re}%`}})},le)})}),e.jsx(Mt,{onMouseMove:X,children:e.jsx(G,{path:he.uri,type:he.type,alt:"story",ref:F?null:k,autoPlay:!F,playsInline:!0,muted:u||F,onTimeUpdate:F?null:E,onEnded:F?null:V,onLoad:()=>!F&&D(!0),onLoadedData:()=>!F&&D(!0),onError:()=>!F&&D(!0),onClick:ie=>ie.stopPropagation(),objectFit:"contain",showPlaceholder:!1},he.uri)}),!W&&!F&&e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:50},children:e.jsx("div",{style:{color:"white"},children:"Carregando..."})})]}),!u&&!F&&e.jsxs(e.Fragment,{children:[e.jsx(dt,{$left:!0,$visible:I,onClick:oe,title:"Anterior"}),e.jsx(dt,{$visible:I,onClick:V,title:"Próximo"}),e.jsx(lt,{$left:!0,onClick:oe}),e.jsx(lt,{onClick:V})]})]}):null};return e.jsx(Tt,{onClick:v=>{v.target===v.currentTarget&&c()},children:e.jsx(Wt,{ref:z,onTouchStart:S,onTouchMove:Y,onTouchEnd:U,children:e.jsx(ur,{$animating:u,$offset:p,children:o.map((v,R)=>{const F=R===h,ee=R===$,Z=Math.abs(R-h)===1;return!F&&!ee&&!Z?e.jsx(ct,{},v):e.jsx(ct,{children:L(R===h?s:R<h?r[v].length-1:0,v,!F)},v)})})})})},br=({reel:t,onClose:o,profilePic:r})=>{if(!t)return null;const a=new Date(t.date).toLocaleDateString("pt-BR",{day:"2-digit",month:"short",year:"numeric"}),[x,h]=i.useState(!1),d=i.useRef(null),s=i.useRef(null),b=i.useRef(null),u=i.useRef(null),l=i.useRef(!1),p=w=>{b.current=w.touches[0].clientY,u.current=Date.now(),l.current=!1,s.current&&(s.current.style.transition="none"),d.current&&d.current.pause()},g=w=>{if(b.current===null)return;const T=w.touches[0].clientY-b.current;Math.abs(T)>10&&(l.current=!0),T>0&&s.current&&(s.current.style.transform=`translateY(${T}px)`)},$=w=>{if(b.current===null)return;const T=w.changedTouches[0].clientY-b.current,j=Date.now()-u.current;d.current&&d.current.play(),T>150?o():(j<200&&!l.current&&h(P=>!P),s.current&&(s.current.style.transition="transform 0.3s ease-out",s.current.style.transform="")),b.current=null};return e.jsx(Tt,{onClick:w=>{w.target===w.currentTarget&&o()},children:e.jsx(Wt,{ref:s,onTouchStart:p,onTouchMove:g,onTouchEnd:$,children:e.jsx(Ot,{children:e.jsxs(Ht,{children:[e.jsx(Lt,{}),e.jsx(pr,{}),e.jsxs(Pt,{children:[e.jsx(Rt,{path:r}),e.jsxs(_t,{children:[e.jsx(Dt,{children:"matheusdodia"}),e.jsx(At,{children:a})]}),e.jsx(Ft,{onClick:o,children:e.jsxs("svg",{"aria-label":"Fechar",color:"#ffffff",fill:"#ffffff",height:"18",role:"img",viewBox:"0 0 24 24",width:"18",children:[e.jsx("polyline",{fill:"none",points:"20.643 3.357 12 12 3.353 20.647",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3"}),e.jsx("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3",x1:"20.649",x2:"3.354",y1:"20.649",y2:"3.354"})]})})]}),e.jsx(Mt,{children:e.jsx(G,{path:t.media[0].uri,type:"video",alt:"Reel",ref:d,autoPlay:!0,playsInline:!0,loop:!0,muted:x,controls:!1,objectFit:"cover",showPlaceholder:!0,onClick:w=>w.stopPropagation()})}),x&&e.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:30,background:"rgba(0,0,0,0.6)",borderRadius:"50%",padding:"15px",pointerEvents:"none",display:"flex"},children:[e.jsxs("svg",{"aria-label":"Som desativado",color:"#ffffff",fill:"#ffffff",height:"30",role:"img",viewBox:"0 0 24 24",width:"30",children:[e.jsx("path",{d:"M16.636 7.364a1 1 0 0 0-1.414 1.414L18.586 12l-3.364 3.222a1 1 0 1 0 1.414 1.414L20 13.414l3.364 3.222a1 1 0 0 0 1.414-1.414L21.414 12l3.364-3.222a1 1 0 0 0-1.414-1.414L20 10.586l-3.364-3.222Z",transform:"translate(-16 -7)"}),e.jsx("path",{d:"M.907 3.03 2.32 1.616l20.457 20.456-1.414 1.414L15.399 17.52l-.001-.001-3.619 3.619L11.78 21.138A1.9 1.9 0 0 1 11.138 21H5.862a1.9 1.9 0 0 1-.641-.138L1.78 19.138A1.9 1.9 0 0 1 1.138 19V5a1.9 1.9 0 0 1 .641-1.362L4.01 1.411 2.923.324.793 2.454.907 3.03Zm5.594 15.97h4.088l5.962-5.962-2.13-2.128-2.696-2.696L3 3.396V19a.214.214 0 0 0 .158.058l1.78 1.78a.214.214 0 0 0 .058.158l.641.138.16.036ZM16 7.604V5.042l-5.656 5.656 2.052 2.052L16 7.604ZM18.257 10.743l1.838 1.839a8.03 8.03 0 0 0 0-3.678l-1.838 1.839Z"}),e.jsx("path",{d:"M1.385 5.564 3.35 7.528V19a1 1 0 0 0 1 1h4.5a1 1 0 0 0 .707-.293L15.414 13.85a1 1 0 0 0 .293-.707V8.586L18.818 11.69a6.002 6.002 0 0 0 0-4.38l1.64-1.64a8.006 8.006 0 0 1 0 7.66l1.414 1.414a10.008 10.008 0 0 0 0-10.488l-2.074 2.074Z",fill:"none"})]}),e.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("svg",{"aria-label":"Som desativado",color:"#ffffff",fill:"#ffffff",height:"24",role:"img",viewBox:"0 0 24 24",width:"24",children:e.jsx("path",{d:"M1.63 21.325C1.84 21.536 2.115 21.64 2.39 21.64c.277 0 .553-.105.764-.316l18.524-18.522c.421-.423.421-1.107-.001-1.529s-1.107-.421-1.529.001L1.624 19.797c-.42.422-.42 1.106.006 1.528zm21.583-9.283c-.004 0-.008 0-.012.001-.456.027-.84.343-.95.787-.669 2.684-2.618 4.81-5.188 5.688-.57.195-.873.813-.678 1.383.194.57.81.876 1.383.678 3.109-1.062 5.467-3.633 6.275-6.88.134-.535-.192-1.092-.716-1.246-.038-.01-.077-.012-.114-.012zm-3.327-4.17c-1.897-1.391-4.228-2.012-6.526-1.742l1.608 1.608c1.397.02 2.76.623 3.864 1.831.399.437 1.074.464 1.511.065.437-.399.463-1.073.064-1.51-.157-.172-.332-.334-.521-.452zm-3.79 8.274l-3.322-3.322c-.22-.22-.508-.344-.816-.344H6.5c-.322 0-.63.15-.826.402l-3.235 4.16c-.114.147-.177.327-.177.513v2.857c0 .461.374.835.835.835h5.5l5.242 4.135c.144.114.321.171.498.171.186 0 .371-.063.518-.186.286-.24.45-.595.45-.969v-4.908c-.001-.58-.235-1.137-.638-1.545zm3.14-8.77l.006-.008c.399-.434 1.071-.462 1.506-.065.434.397.464 1.067.07 1.503-.004.004-.008.009-.012.013L19.24 7.37zM11.336 2.378L6.442 6.239 8.36 8.157l2.977-2.348v3.91l1.663 1.663V3.347c0-.374-.165-.729-.451-.969-.296-.248-.707-.311-1.063-.122l-.15.122z"})})})]}),e.jsx(hr,{children:e.jsx(xr,{children:Ee(t.description)})})]})})})})},yr=n.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5000;
  padding: 20px;
  
  ${Bt}
`,pe=n.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 100;
  opacity: 0.8;
  transition: opacity 0.2s, transform 0.2s;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  
  ${t=>t.$left?"left: 10px;":"right: 10px;"}
  
  &:hover {
    opacity: 1;
    transform: translateY(-50%) scale(1.1);
  }

  &:after {
    content: '';
    width: 8px;
    height: 8px;
    border-top: 2px solid #000;
    border-right: 2px solid #000;
    transform: ${t=>t.$left?"rotate(-135deg)":"rotate(45deg)"};
    margin-${t=>t.$left?"left":"right"}: ${t=>t.$left?"2px":"-2px"};
  }

  @media (max-width: 736px) {
    width: 28px;
    height: 28px;
  }

  ${Bt}
`,wr=n.div`
  display: flex;
  width: auto;
  max-width: 1200px;
  height: 90vh; 
  max-height: 900px;
  background-color: #000;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0,0,0,0.5);
  position: relative;
  
  /* Reels now use standard logic (max-width 1200px, flex layout) */

  @media (max-width: 736px) {
    flex-direction: column;
    height: 100%;
    max-height: 100%;
    width: 100%;
    border-radius: 0;
    padding: 0;
    justify-content: center;
  }
`,vr=n.div`
  background-color: #000;
  display: flex;
  position: relative;
  height: 100%;
  overflow: hidden;
  flex: 1; 
  min-width: 300px;
  justify-content: center;
  align-items: center;
  
  /* Standard aspect ratio logic for Posts, but for Reels/Video we let it fit/letterbox naturally in the flex space */
  ${t=>t.aspectRatio&&!t.$isReel&&`
    aspect-ratio: ${t.aspectRatio};
    flex: 0 1 auto;
    width: auto;
  `}

  &:hover ${pe} {
    opacity: 1;
  }

  @media (max-width: 736px) {
    height: ${t=>t.$isReel?"100%":"60vh"};
    width: 100%;
    aspect-ratio: auto;
    flex: 1; /* Ensure it takes available space on mobile */
  }
`,jr=n.div`
  width: 400px;
  min-width: 400px;
  background-color: #262626;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #262626;
  
  @media (max-width: 1000px) {
     width: 350px;
     min-width: 350px;
  }

  @media (max-width: 736px) {
    width: 100%;
    min-width: 100%;
    border-left: none;
    height: auto;
    /* On mobile, if we want full screen media, we might hide info or stack it.
       For Reels Full Screen, we usually hide this or overlay it.
       If user wants "Full Screen", hiding sidebar on mobile is correct for Reels. 
       But for regular posts it stacks. */
    display: ${t=>t.$isReel?"none":"flex"}; 
    /* Allowing content to flow */
    flex: 1; 
  }
`,kr=n.div`
  padding: 14px 16px;
  border-bottom: 1px solid #363636;
  display: flex;
  align-items: center;
  color: #fff;
  flex-shrink: 0;
  gap: 12px;
  background-color: #262626;
  width: 100%;
`;n.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;const Sr=n.span`
  font-weight: 600;
  font-size: 14px;
  color: #fff;
`,Cr=n.div`
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
`,pt=n.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  align-items: flex-start;
`,ht=n.div`
  flex: 1;
  white-space: pre-wrap;
  line-height: 1.4;
  
  span {
    font-weight: 600;
    margin-right: 6px;
  }
`;n.div`
  display: flex;
  gap: 16px;
  margin-bottom: 12px;
  svg {
    cursor: pointer;
    &:hover { opacity: 0.7; }
  }
`;const $r=n.div`
  font-size: 12px;
  color: #a8a8a8;
  text-transform: uppercase;
  margin-bottom: 12px;
`,Ir=n.button`
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
`,zr=({post:t,allPosts:o,onClose:r,onNavigate:c,profilePic:a,stories:x,onProfileClick:h})=>{const[d,s]=i.useState(0),[b,u]=i.useState(null),l=t.type==="reel",[p,g]=i.useState(!1),$=m=>{let S,Y;m.target.tagName==="VIDEO"?(S=m.target.videoWidth,Y=m.target.videoHeight):(S=m.target.naturalWidth,Y=m.target.naturalHeight),S&&Y&&u(S/Y)};if(i.useEffect(()=>{u(l?9/16:null),s(0),g(!1)},[t.id,t.uri,l]),i.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[]),!t)return null;const w=o?o.findIndex(m=>m.id&&m.id===t.id||m.date===t.date&&m.description===t.description):-1,I=t.media&&t.media.length>1,T=o&&w<o.length-1,j=o&&w>0,P=m=>{m?.stopPropagation(),d<t.media.length-1?s(S=>S+1):T&&M()},y=m=>{m?.stopPropagation(),d>0?s(S=>S-1):j&&_()},M=m=>{m?.stopPropagation(),T&&(g(!0),c(o[w+1]))},_=m=>{m?.stopPropagation(),j&&(g(!0),c(o[w-1]))};i.useEffect(()=>{const m=S=>{S.key==="ArrowRight"&&(I&&d<t.media.length-1?P():M()),S.key==="ArrowLeft"&&(I&&d>0?y():_()),S.key==="Escape"&&r()};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[t.media?.length,d,w,o,r,I]);const W=m=>{m.target===m.currentTarget&&r()},D=m=>m?new Date(m).toLocaleDateString("pt-BR",{day:"numeric",month:"long",year:"numeric"}):"",k=t.date.split("T")[0],z=x&&x[k]&&x[k].length>0;return e.jsxs(yr,{onClick:W,children:[e.jsx(Ir,{onClick:r,children:"×"}),!l&&j&&e.jsx(pe,{$left:!0,onClick:_,style:{left:"-60px"}}),!l&&T&&e.jsx(pe,{onClick:M,style:{right:"-60px"}}),e.jsxs(wr,{$isReel:l,style:{opacity:p?.5:1,transition:"opacity 0.2s"},children:[e.jsxs(vr,{aspectRatio:b,$isReel:l,children:[I&&e.jsxs(e.Fragment,{children:[d>0&&e.jsx(pe,{$left:!0,onClick:y}),d<t.media.length-1&&e.jsx(pe,{onClick:P})]}),l&&e.jsxs(e.Fragment,{children:[j&&e.jsx(pe,{$left:!0,onClick:_}),T&&e.jsx(pe,{onClick:M})]}),e.jsx(zt,{$index:d,children:t.media.map((m,S)=>e.jsx(Et,{children:e.jsx(G,{path:m.uri,type:m.type,alt:`Post media ${S}`,controls:m.type==="video",autoPlay:S===d,onLoad:$,onLoadedMetadata:$,objectFit:"contain",muted:l,loop:l})},S))})]}),e.jsxs(jr,{$isReel:l,children:[e.jsxs(kr,{children:[e.jsx($t,{$hasStories:z,onClick:()=>z&&h(k),style:{width:"32px",height:"32px",marginRight:"0"},children:e.jsx(It,{path:a,$hasStories:z,style:{width:"100%",height:"100%"}})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx(Sr,{children:"matheusdodia"}),e.jsx($r,{style:{margin:0,fontSize:"12px",textTransform:"none"},children:D(t.date)})]})]}),e.jsxs(Cr,{children:[(t.description||l)&&e.jsx(pt,{children:e.jsx(ht,{children:Ee(t.description)})}),t.comments&&t.comments.map((m,S)=>e.jsx(pt,{children:e.jsx(ht,{children:Ee(m.text)})},S))]})]})]})]})},Er=({post:t,profilePicSrc:o,formatDate:r,decodeHtml:c,getAssetUrl:a,stories:x,onProfileClick:h})=>{const[d,s]=i.useState(0),[b,u]=i.useState(null),l=k=>{const{naturalWidth:z,naturalHeight:m}=k.target;z&&m&&u(z/m)},p=t.media.length>1,g=k=>{k.stopPropagation(),d<t.media.length-1&&s(z=>z+1)},$=k=>{k?.stopPropagation(),d>0&&s(z=>z-1)},[w,I]=i.useState(null),[T,j]=i.useState(null),P=50,y=k=>{j(null),I(k.targetTouches[0].clientX)},M=k=>{j(k.targetTouches[0].clientX)},_=()=>{if(!w||!T)return;const k=w-T,z=k>P,m=k<-P;z&&d<t.media.length-1&&s(S=>S+1),m&&d>0&&s(S=>S-1)},W=t.date.split("T")[0],D=x&&x[W]&&x[W].length>0;return e.jsxs(rr,{children:[e.jsxs(sr,{children:[e.jsx($t,{$hasStories:D,onClick:()=>D&&h(W),children:e.jsx(It,{path:o,$hasStories:D})}),e.jsx("span",{style:{fontWeight:600},children:"matheusdodia"}),e.jsx("span",{style:{marginLeft:"auto",color:"#8e8e8e",fontSize:"12px"},children:r(t.date)})]}),e.jsxs(ar,{style:{aspectRatio:b||"auto"},onTouchStart:y,onTouchMove:M,onTouchEnd:_,children:[p&&e.jsxs(e.Fragment,{children:[d>0&&e.jsx(at,{$left:!0,onClick:$,children:e.jsx(pe,{$left:!0,as:"div",style:{position:"static",transform:"none"}})}),d<t.media.length-1&&e.jsx(at,{onClick:g,children:e.jsx(pe,{as:"div",style:{position:"static",transform:"none"}})})]}),e.jsx(zt,{$index:d,children:t.media.map((k,z)=>e.jsx(Et,{children:e.jsx(G,{path:k.uri,type:k.type,controls:k.type==="video"&&z===d,onLoad:z===0?l:void 0,onLoadedMetadata:k.type==="video"&&z===0?l:void 0})},z))})]}),e.jsxs(lr,{children:[e.jsx("div",{style:{fontSize:"14px",whiteSpace:"pre-wrap"},children:e.jsx("span",{children:c(t.description)})}),t.comments&&t.comments.length>0&&e.jsxs("div",{style:{fontSize:"14px"},children:[e.jsx("br",{}),t.comments.map((k,z)=>e.jsx("div",{style:{marginBottom:"4px",whiteSpace:"pre-wrap"},children:c(k.text)},z))]})]})]})};n.button`
  display: none;
`;const Tr=()=>{const[t,o]=i.useState("posts"),[r,c]=i.useState(null),[a,x]=i.useState(null),[h,d]=i.useState(!1),[s,b]=i.useState(null),[u,l]=i.useState({posts:[],stories:{},reels:[],loading:!0});i.useEffect(()=>{window.innerWidth<=736&&o("feed")},[]),i.useEffect(()=>{(async()=>{try{const L=await Q("instagram/posts.json");l(F=>({...F,posts:L||[],loading:!1}));const[v,R]=await Promise.all([Q("instagram/stories.json"),Q("instagram/reels.json")]);l(F=>({...F,stories:v||{},reels:(R||[]).sort((ee,Z)=>new Date(ee.date)-new Date(Z.date))}))}catch(L){console.error("Failed to load Instagram data",L),l(v=>({...v,loading:!1}))}})()},[]);const{posts:p,stories:g,reels:$,loading:w}=u,I=Object.keys(g).sort((E,L)=>new Date(E)-new Date(L)),T=p?p.filter(E=>E.media[0].type==="video").length:0,j=g?Object.values(g).reduce((E,L)=>E+L.length,0):0,[P,y]=i.useState(!1),[M,_]=i.useState(10),[W,D]=i.useState(15),[k,z]=i.useState(10),m=i.useRef(null),S=i.useRef(null),Y=i.useRef(null);i.useEffect(()=>{if(t!=="feed")return;const E=new IntersectionObserver(L=>{L[0].isIntersecting&&_(v=>Math.min(v+10,p.length))},{rootMargin:"200px"});return m.current&&E.observe(m.current),()=>E.disconnect()},[t,p.length]),i.useEffect(()=>{if(t!=="posts")return;const E=new IntersectionObserver(L=>{L[0].isIntersecting&&D(v=>Math.min(v+15,p.length))},{rootMargin:"200px"});return S.current&&E.observe(S.current),()=>E.disconnect()},[t,p.length]),i.useEffect(()=>{const E=new IntersectionObserver(L=>{L[0].isIntersecting&&z(v=>Math.min(v+5,I.length))},{rootMargin:"200px",threshold:.1});return Y.current&&E.observe(Y.current),()=>E.disconnect()},[I.length]);const[U,N]=i.useState(null);if(i.useEffect(()=>{t==="feed"&&U&&setTimeout(()=>{const E=document.getElementById(U);if(E){const v=E.getBoundingClientRect().top+window.scrollY+-60;window.scrollTo({top:v,behavior:"instant"})}N(null)},100)},[t,U]),w)return e.jsx(st,{children:e.jsx("div",{style:{marginTop:100},children:"Carregando..."})});const K=()=>o("feed"),A=()=>o("posts"),O=(E,L=!1)=>{if(y(L),b(E),window.innerWidth<=736){const v=document.documentElement;v.requestFullscreen?v.requestFullscreen().catch(()=>{}):v.webkitRequestFullscreen?v.webkitRequestFullscreen():v.msRequestFullscreen&&v.msRequestFullscreen()}},V=()=>{b(null),document.exitFullscreen&&document.fullscreenElement?document.exitFullscreen().catch(()=>{}):document.webkitExitFullscreen&&document.webkitFullscreenElement&&document.webkitExitFullscreen()},oe=E=>{if(window.innerWidth<=736)if(E.media[0].type==="video"||E.type==="reel"){x(E);const L=document.documentElement;L.requestFullscreen?L.requestFullscreen().catch(()=>{}):L.webkitRequestFullscreen&&L.webkitRequestFullscreen()}else{o("feed");const L=p.indexOf(E);L!==-1&&(L>=M&&_(L+5),N(`feed-post-${L}`))}else c(E)},X="/src/data/instagram/media/profile/202203/275015161_496804875327432_7143646680586312085_n_17894747972575070.jpg";return e.jsxs(st,{children:[e.jsxs(_i,{children:[e.jsxs(Di,{children:[e.jsx(Ai,{children:e.jsx(Fi,{path:X,alt:"Profile"})}),e.jsxs(Bi,{children:[e.jsx(Wi,{children:e.jsx("h2",{children:"matheusdodia"})}),e.jsx(Ni,{children:e.jsx("h1",{children:"Matheus José"})}),e.jsxs(Oi,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:p.length})," posts"]}),e.jsxs("li",{children:[e.jsx("strong",{children:j})," stories"]}),e.jsxs("li",{children:[e.jsx("strong",{children:T})," reels"]})]}),e.jsxs(Hi,{children:[e.jsxs(Fe,{children:[e.jsx("span",{children:p.length}),e.jsx("span",{children:"posts"})]}),e.jsxs(Fe,{children:[e.jsx("span",{children:j}),e.jsx("span",{children:"stories"})]}),e.jsxs(Fe,{children:[e.jsx("span",{children:T}),e.jsx("span",{children:"reels"})]})]}),e.jsx(Gi,{children:e.jsx("span",{children:"meu diário (quase) secreto"})})]})]}),e.jsxs(Ki,{children:[I.slice(0,k).map(E=>{const L=[...g[E]||[]].sort((he,ie)=>new Date(he.date)-new Date(ie.date));if(L.length===0)return null;const v=L[0],R=v.media&&v.media[0],F=R?R.uri:"",ee=R?R.type:"image",[Z,ue,ye]=E.split("-"),ke=`${ye}/${ue}/${Z}`;return e.jsxs(Xi,{onClick:()=>O(E,!1),children:[e.jsx(Zi,{children:e.jsx(Ji,{path:F,type:ee,muted:!0,autoPlay:!0,loop:!0,objectFit:"cover"})}),e.jsx(Qi,{children:ke})]},E)}),k<I.length&&e.jsx("div",{ref:Y,style:{minWidth:20,height:80}})]}),e.jsxs(Ui,{children:[e.jsxs(Be,{$active:t==="posts",onClick:A,children:[e.jsx(Yi,{}),e.jsx("span",{children:"PUBLICAÇÕES"})]}),e.jsxs(Be,{$active:t==="reels",onClick:()=>o("reels"),children:[e.jsx(Vi,{}),e.jsx("span",{children:"REELS"})]}),e.jsxs(Be,{$active:t==="feed",onClick:K,children:[e.jsx(qi,{}),e.jsx("span",{children:"FEED"})]})]}),t==="posts"&&e.jsxs(e.Fragment,{children:[e.jsx(er,{children:p.slice(0,W).map((E,L)=>{const v=E.media[0];return e.jsx(tr,{onClick:()=>oe(E),children:e.jsx(G,{path:v.uri,type:v.type,alt:"Post"})},L)})}),W<p.length&&e.jsx("div",{ref:S,style:{height:"50px",width:"100%"}})]}),t==="reels"&&e.jsx(nr,{children:$.map((E,L)=>{const v=E.media[0];return e.jsx(or,{onClick:()=>oe(E),children:e.jsx(G,{path:v.uri,type:v.type,alt:"Reel"})},E.media[0].uri||L)})}),t==="feed"&&e.jsxs(ir,{children:[p.slice(0,M).map((E,L)=>e.jsx("div",{id:`feed-post-${L}`,children:e.jsx(Er,{post:E,profilePicSrc:X,formatDate:gr,decodeHtml:Ee,getAssetUrl:fr,stories:g,onProfileClick:v=>O(v,!0)})},L)),e.jsx("div",{ref:m,style:{height:"30px"}})]})]}),s&&e.jsx(mr,{initialDate:s,storyDates:I,stories:g,onClose:V,profilePic:X,singleDayMode:P}),a&&e.jsx(br,{reel:a,onClose:()=>{x(null),document.exitFullscreen&&document.fullscreenElement?document.exitFullscreen().catch(()=>{}):document.webkitExitFullscreen&&document.webkitFullscreenElement&&document.webkitExitFullscreen()},profilePic:X}),r&&e.jsx(zr,{post:r,allPosts:t==="reels"?$:p,onClose:()=>c(null),onNavigate:E=>c(E),profilePic:X,stories:g,onProfileClick:E=>O(E,!0)})]})},J={primary:"#D4DDEE",secondary:"#E8EEFA",quaternary:"#BCCDE9",senary:"#5696CD",septenary:"#5778A1"},Mr=n.div`
  background-color: ${J.primary};
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
`,Lr=n.div`
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
`,Pr=n.div`
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
`,Rr=n.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`,_r=n.div`
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
`,te=n.div`
  background: #fff;
  border-radius: 8px;
  border: 1px solid ${J.quaternary};
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  overflow: hidden;
  margin-bottom: 0px;
`,ne=n.div`
  background-color: ${J.secondary};
  padding: 8px 12px;
  font-weight: bold;
  color: ${J.septenary};
  font-size: 13px;
  border-bottom: 1px solid ${J.quaternary};
`,Dr=n.h1`
  font-size: 18px;
  color: ${J.septenary};
  margin: 10px 12px;
  font-weight: bold;
`,xt=n.img`
  width: 100%;
  display: block;
  object-fit: cover;
`,ge=n.a`
  text-decoration: none;
  color: #06c;
  padding: 6px 12px;
  display: block;
  font-size: 11px;
  
  &:hover {
    background-color: ${J.secondary};
    text-decoration: underline;
  }

  ${t=>t.active&&`
    background-color: ${J.secondary};
    font-weight: bold;
    border-left: 3px solid ${J.senary};
    padding-left: 9px;
  `}
`;n.button`
  background-color: ${J.senary};
  border: 1px solid ${J.septenary};
  color: #fff;
  padding: 6px 12px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
  
  &:hover {
    background-color: ${J.septenary};
  }
`;const Ar=n.div`
  display: none;
  background: #fff;
  border-bottom: 1px solid ${J.quaternary};
  padding: 10px 15px;
  cursor: pointer;
  user-select: none;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`,Fr=n.img`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid ${J.quaternary};
  object-fit: cover;
`,Br=n.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Wr=n.span`
  font-size: 14px;
  font-weight: bold;
  color: ${J.septenary};
`,Or=n.span`
  font-size: 11px;
  color: #666;
`,Hr=n.span`
  font-size: 12px;
  color: ${J.septenary};
  transition: transform 0.3s ease;
  transform: ${t=>t.$expanded?"rotate(180deg)":"rotate(0deg)"};
`,Nr=n.div`
  background: #fff;
  border-bottom: 1px solid #BCCDE9;
  display: ${t=>t.$expanded?"block":"none"};
  
  @media (min-width: 769px) {
    display: none !important;
  }
`,me=n.div`
  padding: 14px 20px;
  font-size: 13px;
  color: #06c;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  
  &:hover {
    background-color: ${J.secondary};
  }
  
  &:last-child {
    border-bottom: none;
  }
  
  ${t=>t.$active&&`
    background-color: ${J.secondary};
    font-weight: bold;
    border-left: 3px solid ${J.senary};
    padding-left: 17px;
  `}
`,re=t=>{if(!t)return"";if(t.startsWith("http"))return t;if(t.includes("user_thumb_medium"))return"orkut/user_thumb_medium.jpg";let o=t;return o.startsWith("imgs/")&&(o=o.replace("imgs/","")),o.startsWith("community/")||o.startsWith("profile/")||o.startsWith("fotos/")?`orkut/${o}`:(o.startsWith("orkut/"),o)},Gr=n.div`
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
`,Ur=n(G)`
  width: 64px;
  height: 64px;
  border-radius: 4px;
  border: 1px solid #ddd;
  object-fit: cover;
  background-color: #f0f0f0;
`,Yr=n.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
  font-size: 11px;
`,Vr=n.span`
  font-weight: bold;
  color: #06c;
`,qr=n.span`
  color: #666;
`,Kr=n.div`
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
`,Xr=`
  @keyframes shimmer {
    0% { background-position: -200px 0; }
    100% { background-position: 200px 0; }
  }
`,Nt=n.div`
  background: linear-gradient(90deg, #e8e8e8 0px, #f5f5f5 50px, #e8e8e8 100px);
  background-size: 200px 100%;
  animation: shimmer 1.2s infinite linear;
  ${Xr}
`,Zr=n.div`
  border-bottom: 1px solid #e5e5e5;
  padding: 15px;
  display: flex;
  gap: 15px;
`,Jr=n(Nt)`
  width: 64px;
  height: 64px;
  border-radius: 4px;
  flex-shrink: 0;
`,We=n(Nt)`
  height: ${t=>t.height||"14px"};
  width: ${t=>t.width||"100%"};
  border-radius: 4px;
  margin-bottom: 8px;
`,Qr=()=>e.jsx(e.Fragment,{children:[...Array(5)].map((t,o)=>e.jsxs(Zr,{children:[e.jsx(Jr,{}),e.jsxs("div",{style:{flex:1},children:[e.jsx(We,{width:"30%",height:"12px"}),e.jsx(We,{width:"80%"}),e.jsx(We,{width:"60%"})]})]},o))}),ut=20,Oe=100,ve=1803,es=()=>{const[t,o]=i.useState([]),[r,c]=i.useState(new Set),[a,x]=i.useState(ut),[h,d]=i.useState(!0),s=i.useRef(),b=i.useCallback(async p=>{if(!r.has(p))try{const g=await Q(`orkut/chunks/scraps_chunk_${p}.json`);if(!g)return;o($=>{const w=[...$],I=p*Oe;return g.forEach((T,j)=>{w[I+j]=T}),w}),c($=>new Set([...$,p]))}catch(g){console.error(`Failed to load chunk ${p}:`,g)}},[r]);i.useEffect(()=>{b(0).then(()=>d(!1))},[]),i.useEffect(()=>{const p=Math.floor((a-1)/Oe),g=p+1;r.has(p)||b(p),g*Oe<ve&&!r.has(g)&&b(g)},[a,r,b]);const u=i.useCallback(p=>{s.current&&s.current.disconnect(),s.current=new IntersectionObserver(g=>{g[0].isIntersecting&&a<ve&&x($=>$+ut)},{rootMargin:"400px"}),p&&s.current.observe(p)},[a]),l=t.slice(0,a).filter(Boolean);return h?e.jsxs(te,{children:[e.jsxs(ne,{children:["recados (",ve,")"]}),e.jsx(Qr,{})]}):e.jsxs(te,{children:[e.jsxs(ne,{children:["recados (",ve,")"]}),e.jsxs("div",{style:{padding:"0"},children:[l.map((p,g)=>e.jsxs(Gr,{ref:g===Math.max(0,l.length-5)?u:null,children:[e.jsx(Ur,{path:re(p.authorPhoto),alt:p.author,loading:"lazy"}),e.jsxs("div",{style:{flex:1},children:[e.jsxs(Yr,{children:[e.jsx(Vr,{children:p.author}),e.jsx(qr,{children:p.date})]}),e.jsx(Kr,{dangerouslySetInnerHTML:{__html:p.content}})]})]},p.id)),a<ve&&e.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#999",fontSize:"11px"},children:"pegando mais recados..."})]})]})},ts=n.div`
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
`,ns=n.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
  font-size: 11px;
`,os=n(G)`
  width: 64px;
  height: 64px;
  border-radius: 4px;
  border: 1px solid #ddd;
  object-fit: cover;
  background-color: #f0f0f0;
`,is=n.div`
  font-weight: bold;
  color: #06c;
`,rs=n.div`
  color: #666;
`,ss=n.div`
  line-height: 1.5;
  font-size: 13px;
  word-break: break-word;
`,as=()=>{const[o,r]=i.useState([]),[c,a]=i.useState(20),x=i.useRef();i.useEffect(()=>{Q("orkut/depoimentos.json").then(s=>r(s||[]))},[]);const h=i.useCallback(s=>{x.current&&x.current.disconnect(),x.current=new IntersectionObserver(b=>{b[0].isIntersecting&&c<o.length&&a(u=>u+20)},{rootMargin:"400px"}),s&&x.current.observe(s)},[c,o.length]),d=o.slice(0,c);return e.jsxs(te,{children:[e.jsxs(ne,{children:["depoimentos (",o.length,")"]}),e.jsxs("div",{style:{padding:"0"},children:[d.map((s,b)=>e.jsxs(ts,{ref:b===Math.max(0,d.length-5)?h:null,children:[e.jsx(os,{path:re(s.authorPhoto),alt:s.author,loading:"lazy"}),e.jsxs("div",{style:{flex:1},children:[e.jsxs(ns,{children:[e.jsx(is,{children:s.author}),e.jsx(rs,{children:s.date})]}),e.jsx(ss,{dangerouslySetInnerHTML:{__html:s.content}})]})]},s.id)),c<o.length&&e.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#999",fontSize:"11px"},children:"pegando mais depoimentos..."})]})]})},Gt=n.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 15px;
  padding: 15px;
`,Ut=n.div`
  text-align: center;
  font-size: 11px;
  animation: fadeIn 0.5s ease-in-out;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`,Yt=n(G)`
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
`,Vt=n.div`
  color: #06c;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
`,Te=48,ls=()=>{const[t,o]=i.useState(Te),r=i.useRef(),c=i.useCallback(h=>{r.current&&r.current.disconnect(),r.current=new IntersectionObserver(d=>{d[0].isIntersecting&&t<a.length&&o(s=>s+Te)},{rootMargin:"400px"}),h&&r.current.observe(h)},[t,a.length]),[a,x]=i.useState([]);return i.useEffect(()=>{Q("orkut/friends.json").then(h=>x(h||[]))},[]),e.jsxs(te,{children:[e.jsxs(ne,{children:["meus amigos (",a.length,")"]}),e.jsx(Gt,{children:a.slice(0,t).map((h,d)=>e.jsxs(Ut,{ref:d===Math.max(0,t-12)?c:null,children:[e.jsx(Yt,{path:re(h.photo),alt:h.name,loading:"lazy"}),e.jsx(Vt,{children:h.name})]},h.id))}),t<a.length&&e.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#999"},children:"carregando mais amigos..."})]})},ds=()=>{const[t,o]=i.useState(Te),r=i.useRef(),c=i.useCallback(h=>{r.current&&r.current.disconnect(),r.current=new IntersectionObserver(d=>{d[0].isIntersecting&&t<a.length&&o(s=>s+Te)},{rootMargin:"400px"}),h&&r.current.observe(h)},[t,a.length]),[a,x]=i.useState([]);return i.useEffect(()=>{Q("orkut/communities.json").then(h=>x(h||[]))},[]),e.jsxs(te,{children:[e.jsxs(ne,{children:["minhas comunidades (",a.length,")"]}),e.jsx(Gt,{children:a.slice(0,t).map((h,d)=>e.jsxs(Ut,{ref:d===Math.max(0,t-12)?c:null,children:[e.jsx(Yt,{path:re(h.photo),alt:h.name,loading:"lazy"}),e.jsx(Vt,{children:h.name})]},h.id))}),t<a.length&&e.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#999"},children:"carregando mais comunidades..."})]})},cs=n.div`
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
`,ps=n(G)`
  width: 48px;
  height: 48px;
  border-radius: 4px;
  border: 1px solid #ddd;
  object-fit: cover;
  flex-shrink: 0;
  background-color: #f0f0f0;
`,hs=n.div`
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
`,xs=n.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,us=n.div`
  font-size: 13px;
  color: #333;
  line-height: 1.5;

  b {
    color: #06c;
    font-weight: bold !important;
  }
`,fs=n.div`
  font-size: 11px;
  color: #666;
`,gs=n.div`
  background-color: #f1f3f8;
  border-left: 3px solid #6d84b4;
  padding: 8px 12px;
  font-style: italic;
  font-size: 12px;
  color: #555;
  margin-top: 6px;
  border-radius: 0 4px 4px 0;
`,ms=n.div`
  display: flex;
  gap: 4px;
  margin-top: 6px;
  flex-wrap: wrap;
`,bs=n(G)`
  width: 32px;
  height: 32px;
  border-radius: 2px;
  border: 1px solid #ddd;
  object-fit: cover;
  background-color: #f0f0f0;
`,ys=n.div`
  margin-top: 4px;
  font-size: 13px;
  color: #555;
  line-height: 1.5;
`,ws=n.div`
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
`,ft=30,He=100,je=1184,vs=t=>{let o=[];return t.forEach(r=>{r.type==="new_friend_aggregated"&&r.friends&&r.friends.length>1?r.friends.forEach((c,a)=>{o.push({...r,id:`${r.id}_${a}`,friends:[c],friendName:c.name,friendImage:c.image})}):o.push(r)}),o},js=()=>{const[t,o]=i.useState([]),[r,c]=i.useState(new Set),[a,x]=i.useState(ft),[h,d]=i.useState(!0),[s,b]=i.useState(0),u=i.useRef(),[l,p]=i.useState([]),[g,$]=i.useState([]),w=i.useCallback(async y=>{if(!r.has(y))try{const M=await Q(`orkut/chunks/updates_chunk_${y}.json`);if(!M)return;const _=vs(M).filter(W=>W.type!=="new_friend");o(W=>{const D=[...W],k=y*He;return _.forEach((z,m)=>{D[k+m]=z}),D}),c(W=>new Set([...W,y])),b(y===0?_.length:W=>W+_.length)}catch(M){console.error(`Failed to load chunk ${y}:`,M)}},[r]);i.useEffect(()=>{(async()=>{const[M,_]=await Promise.all([Q("orkut/friends.json"),Q("orkut/communities.json")]);p(M||[]),$(_||[]),await w(0),d(!1)})()},[]),i.useEffect(()=>{const y=Math.floor((a-1)/He),M=y+1;r.has(y)||w(y),M*He<je&&!r.has(M)&&w(M)},[a,r,w]);const I=i.useCallback(y=>{u.current&&u.current.disconnect(),u.current=new IntersectionObserver(M=>{M[0].isIntersecting&&a<je&&x(_=>_+ft)},{rootMargin:"400px"}),y&&u.current.observe(y)},[a]),T=i.useMemo(()=>t.filter(Boolean).slice(0,a).reverse(),[t,a]),j=y=>{if(!y)return"";try{const M=new Date(y);return M.getFullYear()===1970?"":M.toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"})+" "+M.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"})}catch{return""}},P=(y,M,_)=>{const W=_?I:null;let D=null,k="",z=null;switch(y.type){case"community_join":{let m=y.communityName,S=y.communityImage;if(m){const U=g.find(N=>N.name===m);U&&U.photo&&(S=U.photo)}else{const U=g.find(N=>N.photo===y.communityImage);U&&(m=U.name)}z=S;const Y=m||"uma comunidade";k=e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:"2px"},children:"Entrou na comunidade"}),e.jsx("div",{style:{marginBottom:"4px"},children:e.jsx("b",{children:Y})}),y.communityDescription&&e.jsx(ys,{children:y.communityDescription})]});break}case"new_friend":{z=y.friendImage;const m=l.find(S=>S.photo===z);k=e.jsxs(e.Fragment,{children:["Matheus José e ",e.jsx("b",{children:m?m.name:"alguém"})," agora são amigos."]});break}case"new_friend_aggregated":{const m=y.friends||[];if(m.length>0){z=m[0].image;const S=m[0].name,Y=m.length-1;let U=null;if(Y>0){const N=Y===1?"pessoa":"pessoas";U=e.jsxs(e.Fragment,{children:[" e outros ",e.jsxs("b",{children:[Y," ",N]})]})}k=e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:"2px"},children:"Agora é amigo de"}),e.jsxs("div",{style:{marginBottom:"4px"},children:[e.jsx("b",{children:S}),U,"."]}),m.length>1&&e.jsx(ms,{children:m.slice(1,9).map((N,K)=>e.jsx(bs,{path:re(N.image),title:N.name,alt:N.name,loading:"lazy"},K))})]})}else y.friendName?(z=y.friendImage,k=e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:"2px"},children:"Agora é amigo de"}),e.jsxs("div",{style:{marginBottom:"4px"},children:[e.jsx("b",{children:y.friendName}),"."]})]})):(D="👥",k=e.jsx(e.Fragment,{children:"Fez novos amigos."}));break}case"link":{z=y.linkImage;const m=y.linkTitle||"um link",S=y.actionText||"compartilhou";k=e.jsxs(e.Fragment,{children:["Matheus José ",S,": ",e.jsx("b",{children:m})]});break}case"photos_shared":{D="📷";const m=y.photos?y.photos.length:0;k=e.jsxs("div",{children:["Adicionou ",e.jsx("b",{children:m>0?`${m} fotos`:"novas fotos"}),"."]});break}case"image_post":{z=y.imageUrl,k=e.jsx("div",{children:"Postou uma imagem."});break}case"new_fan":D="🌟",k=e.jsxs(e.Fragment,{children:["Agora é fã de ",e.jsx("b",{children:y.content})]});break;case"video_like":D="❤️",k=e.jsx(e.Fragment,{children:"Gostou de um vídeo."});break;case"profile_update":{z="user_thumb_medium.jpg",k=e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:"2px"},children:"Atualizou o perfil dele."}),y.profileData&&y.profileData.length>0?e.jsx("div",{style:{marginBottom:"4px"},children:y.profileData.map((m,S)=>e.jsxs("span",{children:[S>0&&", ",m.label,": ",e.jsx("b",{children:m.value})]},S))}):e.jsx("div",{style:{marginBottom:"4px"},children:e.jsx("b",{children:y.content||"Atualizou o perfil."})})]});break}default:y.content&&y.content.includes("amigos")?(D="👥",k=e.jsxs(e.Fragment,{children:["Tem ",e.jsx("b",{children:y.content})]})):y.content&&y.content.includes("frase")?(D="💬",k=e.jsxs("div",{children:["Mudou sua ",e.jsx("b",{children:"frase do perfil"}),y.phrase&&e.jsxs(gs,{children:['"',y.phrase,'"']})]})):y.content===""?y.type==="new_friend_aggregated"?(D="👥",k="Novos amigos"):(D="📝",k=e.jsx(e.Fragment,{children:"Atualizou seu perfil."})):(D="🔔",k=y.content)}return e.jsxs(cs,{ref:W,children:[z?e.jsx(ps,{path:re(z),alt:"update image",loading:"lazy"}):e.jsx(hs,{children:D||"📋"}),e.jsx(xs,{children:e.jsxs(ws,{children:[e.jsx(us,{style:{flex:1},children:k}),e.jsx(fs,{style:{flexShrink:0,marginTop:"2px"},children:j(y.dateISO)||y.date||"Sem data"})]})})]},y.id)};return h?e.jsxs(te,{children:[e.jsxs(ne,{children:["minhas atualizações (",je,")"]}),e.jsx("div",{style:{padding:"20px",textAlign:"center",color:"#999"},children:"carregando atualizações..."})]}):e.jsxs(te,{children:[e.jsxs(ne,{children:["minhas atualizações (",je,")"]}),e.jsxs("div",{style:{padding:"0"},children:[T.map((y,M)=>P(y,M,M===Math.max(0,T.length-5))),a<je&&e.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#999",fontSize:"11px"},children:"pegando mais atualizações..."})]})]})},ks=n.div`
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
`,Ss=n.div`
  width: 120px;
  text-align: center;
`,Cs=n.div`
  font-weight: bold;
  color: #06c;
  font-size: 11px;
  margin-top: 5px;
  word-break: break-word;
`,$s=n(G)`
  width: 80px;
  height: 80px;
  border-radius: 4px;
  border: 1px solid #ddd;
  object-fit: cover;
  background-color: #f0f0f0;
`,Is=n.div`
  flex: 1;
  min-width: 0;
`,zs=n.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`,Es=n.div`
  font-size: 11px;
  color: #666;
`,Ts=n.div`
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
`,gt=20,Ms=({topic:t,onBack:o})=>{const[r,c]=i.useState([]),[a,x]=i.useState(gt),[h,d]=i.useState(!0),s=i.useRef();i.useEffect(()=>{(async()=>{try{const p=await Q(`orkut/topics_data/topic_${t.id}.json`);c(p?p.TOPIC_REPLIES||p:[]),d(!1)}catch(p){console.error("Failed to load topic replies:",p),d(!1)}})()},[t.id]);const b=i.useCallback(l=>{s.current&&s.current.disconnect(),s.current=new IntersectionObserver(p=>{p[0].isIntersecting&&a<r.length&&x(g=>g+gt)}),l&&s.current.observe(l)},[a,r.length]),u=r.slice(0,a);return h?e.jsxs(te,{children:[e.jsx(ne,{children:t.title}),e.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"carregando tópicos..."})]}):e.jsxs(te,{children:[e.jsxs(ne,{children:[e.jsx("div",{children:t.title}),e.jsx("div",{style:{fontSize:"11px",color:"#666",fontWeight:"normal",marginTop:"2px"},children:t.community})]}),e.jsxs("div",{style:{padding:"0"},children:[u.map((l,p)=>e.jsxs(ks,{ref:p===u.length-1?b:null,children:[e.jsxs(Ss,{children:[e.jsx($s,{path:re("user_thumb_medium"),alt:l.author}),e.jsx(Cs,{children:l.author})]}),e.jsxs(Is,{children:[e.jsx(zs,{children:e.jsx(Es,{children:l.date})}),e.jsx(Ts,{dangerouslySetInnerHTML:{__html:l.content}})]})]},p)),a<r.length&&e.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#999",fontSize:"11px"},children:"pegando mais respostas..."})]})]})},Ls=n.div`
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
`,Ps=n.div`
  font-size: 13px;
  color: #06c;
  font-weight: bold;
`,mt=20,Rs=()=>{const[t,o]=i.useState(null),[r,c]=i.useState(mt),a=i.useRef(),[x,h]=i.useState([]);i.useEffect(()=>{Q("orkut/topics.json").then(u=>h(u||[]))},[]);const d=u=>{if(!u)return"";try{return new Date(u).toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"})}catch{return""}},s=i.useCallback(u=>{a.current&&a.current.disconnect(),a.current=new IntersectionObserver(l=>{l[0].isIntersecting&&r<x.length&&c(p=>p+mt)},{rootMargin:"400px"}),u&&a.current.observe(u)},[r,x.length]);if(t)return e.jsx(Ms,{topic:t,onBack:()=>o(null)});const b=x.slice(0,r);return e.jsxs(te,{children:[e.jsxs(ne,{children:["tópicos (",x.length,")"]}),e.jsxs("div",{style:{padding:"0"},children:[b.map((u,l)=>e.jsx(Ls,{ref:l===Math.max(0,b.length-5)?s:null,onClick:()=>o(u),children:e.jsxs("div",{style:{flex:1},children:[e.jsx(Ps,{children:u.title}),e.jsx("div",{style:{fontSize:"11px",color:"#06c",marginTop:"2px"},children:u.community}),e.jsxs("div",{style:{fontSize:"11px",color:"#999",marginTop:"2px"},children:["criado em ",d(u.dateISO)||u.date]})]})},u.id)),r<x.length&&e.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#999",fontSize:"11px"},children:"pegando mais tópicos..."})]})]})},Ne=(t,o)=>`orkut/fotos/${t}/${o}`,_s=n.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  padding: 20px 20px 40px 20px;
`,Ds=n.div`
  cursor: pointer;
  text-align: center;
`,As=n(G)`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 4px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  background-color: #eee;
`,Fs=n.div`
  font-size: 13px;
  color: #06c;
  font-weight: bold;
  margin-top: 8px;
  text-transform: capitalize;
  line-height: 1.4;
  padding: 0 4px 4px 4px;
  overflow-wrap: break-word;
`,Bs=n.div`
  font-size: 11px;
  color: #666;
  margin-top: 2px;
`,Ws=n.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 15px;
  padding: 20px;
`,Os=n(G)`
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
`,Hs=n.div`
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
`,Ns=`
  @keyframes slideInRight {
    from { transform: translateX(50px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
`,Gs=`
  @keyframes slideInLeft {
    from { transform: translateX(-50px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
`,Us=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  max-height: 100%;
  animation: ${t=>t.direction==="next"?"slideInRight":"slideInLeft"} 0.3s ease-out;
  ${Ns}
  ${Gs}
`,Ys=n(G)`
  max-width: 100%;
  max-height: 100dvh;
  object-fit: contain;
  box-shadow: 0 0 20px rgba(0,0,0,0.5);
  cursor: default;
`,Vs=n.button`
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
`,qs=()=>{const[t,o]=i.useState(null),[r,c]=i.useState(null),[a,x]=i.useState("next"),[h,d]=i.useState(null),[s,b]=i.useState([]);i.useEffect(()=>{Q("orkut/photos.json").then(w=>b(w||[]))},[]);const u=()=>c(null),l=()=>{t&&(x("next"),c(w=>(w+1)%t.photos.length))},p=()=>{t&&(x("prev"),c(w=>(w-1+t.photos.length)%t.photos.length))};i.useEffect(()=>{const w=I=>{r!==null&&(I.key==="Escape"?u():I.key==="ArrowRight"?l():I.key==="ArrowLeft"&&p())};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)},[r,t]);const g=w=>{d(w.targetTouches[0].clientX)},$=w=>{if(h===null)return;const I=w.changedTouches[0].clientX,T=h-I;T>50?l():T<-50&&p(),d(null)};return i.useEffect(()=>(r!==null?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[r]),t?e.jsxs(te,{children:[e.jsx(ne,{children:t.albumName}),e.jsx(Ws,{children:t.photos.map((w,I)=>e.jsx(Os,{path:Ne(t.albumName,w),alt:`${t.albumName} - ${I}`,onClick:()=>{c(I),x("next")}},I))}),r!==null&&e.jsxs(Hs,{onClick:u,onTouchStart:g,onTouchEnd:$,children:[e.jsx(Vs,{onClick:u,children:"×"}),e.jsx(Us,{direction:a,onClick:w=>w.stopPropagation(),children:e.jsx(Ys,{path:Ne(t.albumName,t.photos[r]),alt:"View"})},r)]})]}):e.jsxs(te,{children:[e.jsxs(ne,{children:["álbuns de fotos (",s.length,")"]}),e.jsx(_s,{children:s.map(w=>e.jsxs(Ds,{onClick:()=>o(w),children:[e.jsx(As,{path:Ne(w.albumName,w.photos[0]),alt:w.albumName}),e.jsx(Fs,{children:w.albumName}),e.jsxs(Bs,{children:[w.photos.length," fotos"]})]},w.id||w.albumName))})]})},bt=768,Ks=()=>{const[t,o]=i.useState(()=>typeof window<"u"?window.innerWidth<=bt:!1);return i.useEffect(()=>{const r=window.matchMedia(`(max-width: ${bt}px)`),c=a=>{o(a.matches)};return o(r.matches),r.addEventListener("change",c),()=>{r.removeEventListener("change",c)}},[]),t},Xs={perfil:"perfil",atualizacoes:"minhas atualizações",scraps:"página de recados",depoimentos:"depoimentos",topicos:"tópicos",fotos:"fotos"},Zs=()=>{const[t,o]=i.useState("perfil"),[r,c]=i.useState(0),[a,x]=i.useState(!1),h=Ks(),[d,s]=i.useState(null),[b,u]=i.useState([]),[l,p]=i.useState([]);i.useEffect(()=>{Q("orkut/profile.json").then(j=>s(j||{})),Q("orkut/friends.json").then(j=>u(j||[])),Q("orkut/communities.json").then(j=>p(j||[]))},[]);const g=j=>{t===j?c(P=>P+1):(o(j),c(0)),x(!1)},$=(j,P)=>e.jsxs("div",{style:{marginBottom:"20px"},children:[e.jsx("div",{style:{color:"#5778A1",fontWeight:"bold",borderBottom:"1px solid #BCCDE9",marginBottom:"8px",paddingBottom:"3px",fontSize:"12px"},children:j}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px 24px"},children:(P||[]).map((y,M)=>e.jsxs("div",{style:{fontSize:"13px",display:"flex",gap:"5px"},children:[e.jsxs("b",{style:{color:"#6d84b4",minWidth:"80px",whiteSpace:"pre-line"},children:[y.label,":"]}),e.jsx("span",{style:{color:"#333"},children:y.value})]},M))})]}),w=()=>{switch(t){case"scraps":return e.jsx(es,{});case"depoimentos":return e.jsx(as,{});case"topicos":return e.jsx(Rs,{});case"fotos":return e.jsx(qs,{});case"amigos":return e.jsx(ls,{});case"comunidades":return e.jsx(ds,{});case"atualizacoes":return e.jsx(js,{});default:return e.jsx(e.Fragment,{children:e.jsxs(te,{children:[e.jsx(ne,{children:d?.name||"Carregando..."}),e.jsxs("div",{style:{padding:"20px"},children:[d&&e.jsxs(e.Fragment,{children:[e.jsx(xt,{src:re(d.photo),alt:"Profile"}),e.jsxs("div",{style:{marginTop:"10px"},children:[$("Social",[{label:"relacionamento",value:d?.relationship},{label:"aniversário",value:d?.birthday},{label:"local",value:d?.location},...d?.social||[]]),$("Profissional",d.professional),$("Pessoal",d.personal),$("Detalhes",d.details)]})]}),e.jsxs("div",{style:{marginTop:"25px"},children:[e.jsxs("div",{style:{color:"#5778A1",fontWeight:"bold",borderBottom:"1px solid #BCCDE9",marginBottom:"12px",paddingBottom:"4px",fontSize:"12px"},children:["Sobre ",d?.name?d.name.split(" ")[0]:"mim"]}),e.jsx("div",{style:{fontSize:"13px",lineHeight:"1.5",color:"#444",textAlign:"justify"},children:d?.aboutMe||"Carregando..."})]})]})]})})}},I=()=>e.jsxs(te,{style:{display:"flex",flexDirection:"column",height:"400px"},children:[e.jsxs(ne,{children:["amigos (",b.length,")"]}),e.jsx("div",{style:{flex:1,overflowY:"auto",overflowX:"hidden",padding:"10px 5px"},children:e.jsx("div",{style:{display:"grid",gridTemplateColumns:"33.33% 33.33% 33.33%",gap:"10px 0"},children:b.slice(0,9).map(j=>e.jsxs("div",{style:{textAlign:"center",minWidth:0},children:[e.jsx("img",{src:re(j.photo),alt:j.name,style:{width:"80px",height:"80px",objectFit:"cover",borderRadius:"4px",cursor:"pointer",border:"1px solid #ddd"}}),e.jsx("div",{style:{fontSize:"11px",marginTop:"4px",color:"#06c",padding:"0 4px",lineHeight:"1.2",wordBreak:"break-word"},children:j.name})]},j.id))})})]}),T=()=>e.jsxs(te,{style:{display:"flex",flexDirection:"column",height:"400px"},children:[e.jsxs(ne,{children:["comunidades (",l.length,")"]}),e.jsx("div",{style:{flex:1,overflowY:"auto",overflowX:"hidden",padding:"10px 5px"},children:e.jsx("div",{style:{display:"grid",gridTemplateColumns:"33.33% 33.33% 33.33%",gap:"10px 0"},children:l.slice(0,9).map(j=>e.jsxs("div",{style:{textAlign:"center",minWidth:0},children:[e.jsx("img",{src:re(j.photo),alt:j.name,style:{width:"80px",height:"80px",objectFit:"cover",borderRadius:"4px",cursor:"pointer",border:"1px solid #ddd"}}),e.jsx("div",{style:{fontSize:"11px",marginTop:"4px",color:"#06c",padding:"0 4px",lineHeight:"1.2",wordBreak:"break-word"},children:j.name})]},j.id))})})]});return e.jsxs(Mr,{children:[h&&e.jsxs(e.Fragment,{children:[e.jsxs(Ar,{onClick:()=>x(!a),children:[e.jsx(Fr,{src:re("user_thumb_medium.jpg"),alt:d?.name||"perfil"}),e.jsxs(Br,{children:[e.jsx(Wr,{children:d?.name||"carregando..."}),e.jsx(Or,{children:Xs[t]})]}),e.jsx(Hr,{$expanded:a,children:"▼"})]}),e.jsxs(Nr,{$expanded:a,children:[e.jsx(me,{$active:t==="perfil",onClick:()=>g("perfil"),children:"perfil"}),e.jsx(me,{$active:t==="atualizacoes",onClick:()=>g("atualizacoes"),children:"atualizações"}),e.jsx(me,{$active:t==="scraps",onClick:()=>g("scraps"),children:"recados"}),e.jsx(me,{$active:t==="depoimentos",onClick:()=>g("depoimentos"),children:"depoimentos"}),e.jsx(me,{$active:t==="topicos",onClick:()=>g("topicos"),children:"tópicos"}),e.jsx(me,{$active:t==="fotos",onClick:()=>g("fotos"),children:"fotos"})]})]}),e.jsxs(Lr,{children:[!h&&e.jsx(Pr,{children:e.jsxs(te,{style:{padding:"15px"},children:[e.jsx(xt,{src:re("user_thumb_medium.jpg"),alt:"Matheus José"}),e.jsx(Dr,{children:d?.name||"carregando..."}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",marginTop:"15px"},children:[e.jsx(ge,{onClick:()=>g("perfil"),active:t==="perfil",children:"perfil"}),e.jsx(ge,{onClick:()=>g("atualizacoes"),active:t==="atualizacoes",children:"atualizações"}),e.jsx(ge,{onClick:()=>g("scraps"),active:t==="scraps",children:"recados"}),e.jsx(ge,{onClick:()=>g("depoimentos"),active:t==="depoimentos",children:"depoimentos"}),e.jsx(ge,{onClick:()=>g("topicos"),active:t==="topicos",children:"tópicos"}),e.jsx(ge,{onClick:()=>g("fotos"),active:t==="fotos",children:"fotos"})]})]})}),e.jsxs(Rr,{children:[w(),h&&t==="perfil"&&e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"15px"},children:[e.jsx(I,{}),e.jsx(T,{})]})]},`${t}-${r}`),t==="perfil"&&e.jsxs(_r,{children:[e.jsx(I,{}),e.jsx(T,{})]})]})]})},Js=()=>{const t=()=>{const a=window.location.pathname;return a==="/projetos"?"projects":a==="/escritos"?"resume":a==="/redes"?"contact":a==="/projetos/orkut"?"orkut":a==="/projetos/twitter"?"twitter":a==="/projetos/instagram"?"instagram":"home"},[o,r]=i.useState(t);i.useEffect(()=>{const x=(h=>{switch(h){case"projects":return"/projetos";case"resume":return"/escritos";case"contact":return"/redes";case"orkut":return"/projetos/orkut";case"twitter":return"/projetos/twitter";case"instagram":return"/projetos/instagram";case"home":return"/";default:return"/"}})(o);return window.location.pathname!==x&&window.history.pushState({section:o},"",x),o==="orkut"?document.body.style.backgroundColor="#D4DDEE":o==="instagram"?document.body.style.backgroundColor="#000":o==="twitter"?document.body.style.backgroundColor="rgb(0, 132, 180)":document.body.style.backgroundColor="",()=>{document.body.style.backgroundColor=""}},[o]),i.useEffect(()=>{const a=x=>{const h=window.location.pathname;r(h==="/projetos/orkut"?"orkut":h==="/projetos/twitter"?"twitter":h==="/projetos/instagram"?"instagram":h==="/projetos"?"projects":h==="/escritos"?"resume":h==="/redes"?"contact":"home")};return window.addEventListener("popstate",a),()=>window.removeEventListener("popstate",a)},[]);const c=()=>{switch(o){case"home":return e.jsx(Gn,{});case"projects":return e.jsx(Ho,{onNavigate:r});case"resume":return e.jsx("div",{style:{textAlign:"center",color:"var(--win-gray-dark)",marginTop:"2rem",minHeight:"100vh"},children:e.jsx("p",{children:"Currículo em construção..."})});case"contact":return e.jsx(Ao,{});default:return null}};return o==="orkut"?e.jsxs(e.Fragment,{children:[e.jsx(Ce,{activeSection:o,onNavigate:r}),e.jsx("div",{style:{paddingTop:"40px",minHeight:"100vh",boxSizing:"border-box",display:"flex",flexDirection:"column"},children:e.jsx(Zs,{})})]}):o==="twitter"?e.jsxs(e.Fragment,{children:[e.jsx(Ce,{activeSection:o,onNavigate:r}),e.jsx("div",{style:{paddingTop:"40px",minHeight:"100vh",boxSizing:"border-box"},children:e.jsx(Ri,{})})]}):o==="instagram"?e.jsxs(e.Fragment,{children:[e.jsx(Ce,{activeSection:o,onNavigate:r}),e.jsx("div",{style:{paddingTop:"40px",minHeight:"100vh",boxSizing:"border-box"},children:e.jsx(Tr,{onClose:()=>r("home")})})]}):e.jsxs(e.Fragment,{children:[e.jsx(Ce,{activeSection:o,onNavigate:r}),e.jsxs("main",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",padding:"20px",paddingTop:"50px",paddingBottom:"50px",gap:"10px"},children:[e.jsx(zn,{}),e.jsx(En,{}),e.jsx("div",{style:{marginTop:"20px"},children:c()}),e.jsxs("footer",{style:{textAlign:"center",padding:"2rem 0 1rem 0",marginTop:"auto",color:"blue",fontSize:"0.85rem",opacity:.7},children:[e.jsx("p",{style:{margin:0},children:"Pensado por Matheus José da Silva"}),e.jsx("p",{style:{margin:0},children:"Guarapuava, 2026"})]})]})]})};class Qs extends ce.Component{constructor(o){super(o),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(o){return{hasError:!0,error:o}}componentDidCatch(o,r){this.setState({error:o,errorInfo:r}),console.error("ErrorBoundary caught an error",o,r)}render(){return this.state.hasError?e.jsxs("div",{style:{padding:"20px",color:"red",background:"#ffe6e6",border:"1px solid red",margin:"20px"},children:[e.jsx("h2",{children:"Something went wrong."}),e.jsxs("details",{style:{whiteSpace:"pre-wrap"},children:[this.state.error&&this.state.error.toString(),e.jsx("br",{}),this.state.errorInfo&&this.state.errorInfo.componentStack]}),e.jsx("button",{onClick:()=>window.location.reload(),style:{marginTop:"10px",padding:"10px"},children:"Reload Page"})]}):this.props.children}}const ea=kn`
  ${jn}
  
  @font-face {
    font-family: 'W95FA';
    src: url('${In}') format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  
  body, input, select, textarea {
    font-family: 'W95FA', 'ms_sans_serif', sans-serif;
  }
`;function ta(){return e.jsxs(Sn,{theme:Cn,children:[e.jsx(ea,{}),e.jsx("div",{style:{position:"relative",zIndex:0},children:e.jsx(Qs,{children:e.jsx(Js,{})})})]})}$n.createRoot(document.getElementById("root")).render(e.jsx(i.StrictMode,{children:e.jsx(ta,{})}));
