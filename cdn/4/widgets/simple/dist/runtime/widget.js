System.register(["jimu-core/emotion","jimu-core"],function(e,r){var a={},s={};return{setters:[function(e){a.jsx=e.jsx,a.jsxs=e.jsxs},function(e){s.css=e.css}],execute:function(){e((()=>{var e={244(e){"use strict";e.exports=s},386(e){"use strict";e.exports=a}},r={};function o(a){var s=r[a];if(void 0!==s)return s.exports;var t=r[a]={exports:{}};return e[a](t,t.exports,o),t.exports}o.d=(e,r)=>{for(var a in r)o.o(r,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="";var t={};return o.p=window.jimuConfig.baseUrl,(()=>{"use strict";o.r(t),o.d(t,{__set_webpack_public_path__:()=>s,default:()=>a});var e=o(386);const r=o(244).css`
  &.panel-forense {
    background-color: #0d020d; 
    color: #f0f0f0;
    padding: 30px;
    font-family: 'Courier New', Courier, monospace;
    height: 100%;
    border-left: 8px solid #6a0dad;
  }

  .titulo-principal {
    color: #bb86fc;
    font-size: 24px;
    text-align: center;
    text-shadow: 0 0 10px #6a0dad;
    animation: flicker 2s infinite;
  }

  .tarjeta-insight {
    background-color: #1a0a1a;
    border: 1px dashed #6a0dad;
    padding: 15px;
    margin-bottom: 15px;
    border-radius: 4px;
  }

  .dato-clave {
    color: #d9534f;
    font-weight: bold;
  }

  .footer-token {
    font-size: 10px;
    color: #4a148c;
    margin-top: 30px;
  }

  @keyframes flicker {
    0% { opacity: 0.8; }
    50% { opacity: 1; }
    100% { opacity: 0.8; }
  }
`,a=a=>(0,e.jsxs)("div",{css:r,className:"panel-forense jimu-widget",children:[(0,e.jsxs)("div",{className:"hero-container",children:[(0,e.jsx)("h1",{className:"titulo-principal",children:"AN\xc1LISIS FORENSE: PUEBLA"}),(0,e.jsx)("div",{className:"cortina-morada"}),(0,e.jsx)("p",{className:"subtitulo",children:"Visualizaci\xf3n de datos y patrones de violencia"})]}),(0,e.jsx)("hr",{style:{borderColor:"#4a148c",margin:"20px 0"}}),(0,e.jsxs)("div",{className:"reporte-contenido",children:[(0,e.jsx)("h2",{className:"titulo-reporte",children:"Expediente Semestral"}),(0,e.jsxs)("div",{className:"tarjeta-insight",children:[(0,e.jsxs)("p",{children:[(0,e.jsx)("span",{className:"dato-clave",children:"CASO:"})," Reconstrucci\xf3n espacial Simec"]}),(0,e.jsx)("p",{children:"An\xe1lisis de la explosi\xf3n y su impacto en el entorno industrial."})]}),(0,e.jsxs)("div",{className:"tarjeta-insight",children:[(0,e.jsxs)("p",{children:[(0,e.jsx)("span",{className:"dato-clave",children:"M\xc9TODO:"})," Cartograf\xeda Forense"]}),(0,e.jsx)("p",{children:"Uso de ArcGIS para documentar incidentes cada 48 horas."})]})]}),(0,e.jsx)("p",{className:"footer-token",children:"LDIA | Laboratorio de Arquitectura Forense"})]});function s(e){o.p=e}})(),t})())}}});