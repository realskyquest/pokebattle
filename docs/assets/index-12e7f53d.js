(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function ee(){}function st(l){return l()}function Ke(){return Object.create(null)}function Te(l){l.forEach(st)}function rt(l){return typeof l=="function"}function Se(l,e){return l!=l?e==e:l!==e||l&&typeof l=="object"||typeof l=="function"}let Oe;function we(l,e){return Oe||(Oe=document.createElement("a")),Oe.href=e,l===Oe.href}function ut(l){return Object.keys(l).length===0}function n(l,e){l.appendChild(e)}function K(l,e,t){l.insertBefore(e,t||null)}function G(l){l.parentNode&&l.parentNode.removeChild(l)}function Ne(l,e){for(let t=0;t<l.length;t+=1)l[t]&&l[t].d(e)}function f(l){return document.createElement(l)}function h(l){return document.createTextNode(l)}function T(){return h(" ")}function mt(){return h("")}function le(l,e,t,o){return l.addEventListener(e,t,o),()=>l.removeEventListener(e,t,o)}function a(l,e,t){t==null?l.removeAttribute(e):l.getAttribute(e)!==t&&l.setAttribute(e,t)}function dt(l){return Array.from(l.childNodes)}function W(l,e){e=""+e,l.data!==e&&(l.data=e)}function Pe(l,e,t,o){t==null?l.style.removeProperty(e):l.style.setProperty(e,t,o?"important":"")}function pt(l,e,{bubbles:t=!1,cancelable:o=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(l,t,o,e),s}let $e;function We(l){$e=l}function at(){if(!$e)throw new Error("Function called outside component initialization");return $e}function _t(l){at().$$.after_update.push(l)}function ft(){const l=at();return(e,t,{cancelable:o=!1}={})=>{const s=l.$$.callbacks[e];if(s){const r=pt(e,t,{cancelable:o});return s.slice().forEach(c=>{c.call(l,r)}),!r.defaultPrevented}return!0}}const Be=[],Ve=[];let De=[];const je=[],ht=Promise.resolve();let Ye=!1;function bt(){Ye||(Ye=!0,ht.then(ct))}function Ge(l){De.push(l)}const Ue=new Set;let Le=0;function ct(){if(Le!==0)return;const l=$e;do{try{for(;Le<Be.length;){const e=Be[Le];Le++,We(e),gt(e.$$)}}catch(e){throw Be.length=0,Le=0,e}for(We(null),Be.length=0,Le=0;Ve.length;)Ve.pop()();for(let e=0;e<De.length;e+=1){const t=De[e];Ue.has(t)||(Ue.add(t),t())}De.length=0}while(Be.length);for(;je.length;)je.pop()();Ye=!1,Ue.clear(),We(l)}function gt(l){if(l.fragment!==null){l.update(),Te(l.before_update);const e=l.dirty;l.dirty=[-1],l.fragment&&l.fragment.p(l.ctx,e),l.after_update.forEach(Ge)}}function kt(l){const e=[],t=[];De.forEach(o=>l.indexOf(o)===-1?e.push(o):t.push(o)),t.forEach(o=>o()),De=e}const He=new Set;let ye;function Fe(){ye={r:0,c:[],p:ye}}function qe(){ye.r||Te(ye.c),ye=ye.p}function ne(l,e){l&&l.i&&(He.delete(l),l.i(e))}function me(l,e,t,o){if(l&&l.o){if(He.has(l))return;He.add(l),ye.c.push(()=>{He.delete(l),o&&(t&&l.d(1),o())}),l.o(e)}else o&&o()}function Ae(l){l&&l.c()}function he(l,e,t,o){const{fragment:s,after_update:r}=l.$$;s&&s.m(e,t),o||Ge(()=>{const c=l.$$.on_mount.map(st).filter(rt);l.$$.on_destroy?l.$$.on_destroy.push(...c):Te(c),l.$$.on_mount=[]}),r.forEach(Ge)}function be(l,e){const t=l.$$;t.fragment!==null&&(kt(t.after_update),Te(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function vt(l,e){l.$$.dirty[0]===-1&&(Be.push(l),bt(),l.$$.dirty.fill(0)),l.$$.dirty[e/31|0]|=1<<e%31}function Me(l,e,t,o,s,r,c,_=[-1]){const u=$e;We(l);const i=l.$$={fragment:null,ctx:[],props:r,update:ee,not_equal:s,bound:Ke(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:Ke(),dirty:_,skip_bound:!1,root:e.target||u.$$.root};c&&c(i.root);let d=!1;if(i.ctx=t?t(l,e.props||{},(E,S,...b)=>{const w=b.length?b[0]:S;return i.ctx&&s(i.ctx[E],i.ctx[E]=w)&&(!i.skip_bound&&i.bound[E]&&i.bound[E](w),d&&vt(l,E)),S}):[],i.update(),d=!0,Te(i.before_update),i.fragment=o?o(i.ctx):!1,e.target){if(e.hydrate){const E=dt(e.target);i.fragment&&i.fragment.l(E),E.forEach(G)}else i.fragment&&i.fragment.c();e.intro&&ne(l.$$.fragment),he(l,e.target,e.anchor,e.customElement),ct()}We(u)}class Re{$destroy(){be(this,1),this.$destroy=ee}$on(e,t){if(!rt(t))return ee;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(t),()=>{const s=o.indexOf(t);s!==-1&&o.splice(s,1)}}$set(e){this.$$set&&!ut(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Et(l){let e;return{c(){e=f("header"),e.innerHTML=`<h1 class="h1">Pokemon Esque</h1> 
  <i class="small">A simple demonstration!</i>`,a(e,"class","p-5 text-light text-center"),Pe(e,"background-color","#4b5bab")},m(t,o){K(t,e,o)},p:ee,i:ee,o:ee,d(t){t&&G(e)}}}class wt extends Re{constructor(e){super(),Me(this,e,null,Et,Se,{})}}let Ie=[{name:"BULBASAUR",level:13,hp:36,attack:20,defense:17,speed:20,type:["GRASS","POISON"],weakness:["FIRE","PSYCHIC","FLYING","ICE"],moves:["TACKLE","GROWL","LEECH SEED","VINE WHIP"],back_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},{name:"CHARMANDER",level:13,hp:37,attack:21,defense:18,speed:24,type:["FIRE"],weakness:["WATER","GROUND","ROCK"],moves:["SCRATCH","GROWL","EMBER","METAL CLAW"],back_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},{name:"SQUIRTLE",level:13,hp:34,attack:20,defense:21,speed:20,type:["WATER"],weakness:["GRASS","ELECTRIC"],moves:["TACKLE","TAIL WHIP","BUBBLE","WITHDRAW"],back_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png",front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"}],Ce={TACKLE:{name:"TACKLE",power:35,accuracy:95,effect:"none",type:"NORMAL"},GROWL:{name:"GROWL",power:"none",accuracy:100,effect:"ENEMY ATTACK STAT LOWER",type:"NORMAL"},"LEECH SEED":{name:"LEECH SEED",power:"none",accuracy:90,effect:"SEEDED",type:"GRASS"},"VINE WHIP":{name:"VINE WHIP",power:35,accuracy:100,effect:"none",type:"GRASS"},SCRATCH:{name:"SCRATCH",power:40,accuracy:100,effect:"none",type:"NORMAL"},EMBER:{name:"EMBER",power:40,accuracy:100,effect:"MAY BURN",type:"FIRE"},"METAL CLAW":{name:"METAL CLAW",power:50,accuracy:95,effect:"MAY USER ATTACK STAT RISE",type:"STEEL"},"TAIL WHIP":{name:"TAIL WHIP",power:"none",accuracy:100,effect:"ENEMY DEFENSE STAT LOWER",type:"NORMAL"},BUBBLE:{name:"BUBBLE",power:20,accuracy:100,effect:"MAY ENEMY SPEED STAT LOWER",type:"WATER"},WITHDRAW:{name:"WITHDRAW",power:"none",accuracy:100,effect:"USER DEFENSE STAT RAISE",type:"WATER"}};function At(l){let e,t,o;return{c(){e=f("div"),t=f("p"),o=h(l[4]),a(t,"class","h5"),a(e,"class","container-fluid text-center bg-primary text-white p-5 mt-3")},m(s,r){K(s,e,r),n(e,t),n(t,o)},p(s,r){r[0]&16&&W(o,s[4])},d(s){s&&G(e)}}}function yt(l){let e,t,o,s,r,c=l[9].moves[0]+"",_,u,i,d=l[9].moves[2]+"",E,S,b,w,N,F=l[9].moves[1]+"",D,j,L,V=l[9].moves[3]+"",q,R,z,C,M,Q,m,k,$,p,O,re,ae,oe,de,X;return{c(){e=f("div"),t=f("div"),o=f("div"),s=f("div"),r=f("button"),_=h(c),u=T(),i=f("button"),E=h(d),S=T(),b=f("div"),w=f("div"),N=f("button"),D=h(F),j=T(),L=f("button"),q=h(V),R=T(),z=f("div"),C=f("p"),M=h(l[5]),Q=f("br"),m=T(),k=h(l[6]),$=f("br"),p=T(),O=h(l[7]),re=f("br"),ae=T(),oe=h(l[8]),a(r,"type","button"),a(r,"class","btn bg-white"),a(i,"type","button"),a(i,"class","btn bg-white"),a(s,"class","d-grid gap-3"),a(o,"class","col p-3 bg-dark text-secondary"),a(N,"type","button"),a(N,"class","btn bg-white"),a(L,"type","button"),a(L,"class","btn bg-white"),a(w,"class","d-grid gap-3"),a(b,"class","col p-3 bg-dark text-secondary"),a(z,"class","col p-3 bg-primary text-white"),a(t,"class","row"),a(e,"class","container-fluid text-center mt-3")},m(J,H){K(J,e,H),n(e,t),n(t,o),n(o,s),n(s,r),n(r,_),n(s,u),n(s,i),n(i,E),n(t,S),n(t,b),n(b,w),n(w,N),n(N,D),n(w,j),n(w,L),n(L,q),n(t,R),n(t,z),n(z,C),n(C,M),n(C,Q),n(C,m),n(C,k),n(C,$),n(C,p),n(C,O),n(C,re),n(C,ae),n(C,oe),de||(X=[le(r,"click",l[19]),le(r,"mouseenter",l[20]),le(r,"mouseleave",l[21]),le(i,"click",l[22]),le(i,"mouseenter",l[23]),le(i,"mouseleave",l[24]),le(N,"click",l[25]),le(N,"mouseenter",l[26]),le(N,"mouseleave",l[27]),le(L,"click",l[28]),le(L,"mouseenter",l[29]),le(L,"mouseleave",l[30])],de=!0)},p(J,H){H[0]&512&&c!==(c=J[9].moves[0]+"")&&W(_,c),H[0]&512&&d!==(d=J[9].moves[2]+"")&&W(E,d),H[0]&512&&F!==(F=J[9].moves[1]+"")&&W(D,F),H[0]&512&&V!==(V=J[9].moves[3]+"")&&W(q,V),H[0]&32&&W(M,J[5]),H[0]&64&&W(k,J[6]),H[0]&128&&W(O,J[7]),H[0]&256&&W(oe,J[8])},d(J){J&&G(e),de=!1,Te(X)}}}function Tt(l){let e,t,o,s,r,c=l[9].name+"",_,u,i,d,E,S,b,w,N,F;return{c(){e=f("div"),t=f("div"),o=f("div"),s=f("p"),r=h("What will "),_=h(c),u=h(" wil do?"),i=T(),d=f("div"),E=f("div"),S=f("button"),S.textContent="FIGHT",b=T(),w=f("button"),w.textContent="RUN",a(s,"class","h5 mt-4"),a(o,"class","col p-3 bg-dark text-white"),a(S,"type","button"),a(S,"class","btn bg-white"),a(w,"type","button"),a(w,"class","btn bg-white"),a(E,"class","d-grid gap-3"),a(d,"class","col p-3 bg-primary text-secondary"),a(t,"class","row"),a(e,"class","container-fluid text-center mt-3")},m(D,j){K(D,e,j),n(e,t),n(t,o),n(o,s),n(s,r),n(s,_),n(s,u),n(t,i),n(t,d),n(d,E),n(E,S),n(E,b),n(E,w),N||(F=[le(S,"click",l[17]),le(w,"click",l[18])],N=!0)},p(D,j){j[0]&512&&c!==(c=D[9].name+"")&&W(_,c)},d(D){D&&G(e),N=!1,Te(F)}}}function St(l){let e,t,o,s,r,c=l[10].name+"",_,u,i=l[10].level+"",d,E,S,b,w=l[10].hp+"",N,F,D=l[1].hp+"",j,L,V,q,R,z,C,M,Q,m,k,$,p,O,re,ae,oe,de,X,J=l[9].name+"",H,fe,y=l[9].level+"",A,ce,Z,ie=l[9].hp+"",P,ge,ue=l[0].hp+"",se,ke,ve,Y,_e;function x(B,I){if(B[2]===!1)return Tt;if(B[2]===!0)return yt;if(B[3]===!0)return At}let pe=x(l),U=pe&&pe(l);return{c(){e=f("div"),t=f("div"),o=f("div"),s=f("div"),r=f("p"),_=h(c),u=h(" Lv "),d=h(i),E=T(),S=f("br"),b=h(`\r
          HP `),N=h(w),F=h("/"),j=h(D),L=h(`\r
          EFFECTS = `),V=h(l[12]),q=T(),R=f("div"),z=f("div"),C=f("img"),m=T(),k=f("div"),$=f("div"),p=f("div"),O=f("img"),oe=T(),de=f("div"),X=f("p"),H=h(J),fe=h(" Lv "),A=h(y),ce=f("br"),Z=h(`\r
          HP `),P=h(ie),ge=h("/"),se=h(ue),ke=h(`\r
          EFFECTS = `),ve=h(l[11]),Y=T(),U&&U.c(),_e=mt(),a(s,"class","bg-dark p-1"),we(C.src,M=l[9].back_default)||a(C,"src",M),a(C,"alt","front of pokemon"),a(C,"class","img-fluid m-5 pixel animate__animated animate__slower animate__infinite animate__shakeY svelte-qaw3rn"),a(z,"class",Q="animate__animated "+l[13]+" svelte-qaw3rn"),a(R,"class","land text-center svelte-qaw3rn"),a(o,"class","col text-white"),we(O.src,re=l[10].front_default)||a(O,"src",re),a(O,"alt","front of pokemon"),a(O,"class","img-fluid mt-5 m-5 pixel animate__animated animate__slower animate__infinite animate__shakeY animate__delay-1s svelte-qaw3rn"),a(p,"class",ae="animate__animated "+l[14]+" svelte-qaw3rn"),a($,"class","land text-center svelte-qaw3rn"),a(de,"class","bg-dark p-2 mt-2"),a(k,"class","col text-white"),a(t,"class","row"),a(e,"class","container-fluid mt-3")},m(B,I){K(B,e,I),n(e,t),n(t,o),n(o,s),n(s,r),n(r,_),n(r,u),n(r,d),n(r,E),n(r,S),n(r,b),n(r,N),n(r,F),n(r,j),n(r,L),n(r,V),n(o,q),n(o,R),n(R,z),n(z,C),n(t,m),n(t,k),n(k,$),n($,p),n(p,O),n(k,oe),n(k,de),n(de,X),n(X,H),n(X,fe),n(X,A),n(X,ce),n(X,Z),n(X,P),n(X,ge),n(X,se),n(X,ke),n(X,ve),K(B,Y,I),U&&U.m(B,I),K(B,_e,I)},p(B,I){I[0]&1024&&c!==(c=B[10].name+"")&&W(_,c),I[0]&1024&&i!==(i=B[10].level+"")&&W(d,i),I[0]&1024&&w!==(w=B[10].hp+"")&&W(N,w),I[0]&2&&D!==(D=B[1].hp+"")&&W(j,D),I[0]&4096&&W(V,B[12]),I[0]&512&&!we(C.src,M=B[9].back_default)&&a(C,"src",M),I[0]&8192&&Q!==(Q="animate__animated "+B[13]+" svelte-qaw3rn")&&a(z,"class",Q),I[0]&1024&&!we(O.src,re=B[10].front_default)&&a(O,"src",re),I[0]&16384&&ae!==(ae="animate__animated "+B[14]+" svelte-qaw3rn")&&a(p,"class",ae),I[0]&512&&J!==(J=B[9].name+"")&&W(H,J),I[0]&512&&y!==(y=B[9].level+"")&&W(A,y),I[0]&512&&ie!==(ie=B[9].hp+"")&&W(P,ie),I[0]&1&&ue!==(ue=B[0].hp+"")&&W(se,ue),I[0]&2048&&W(ve,B[11]),pe===(pe=x(B))&&U?U.p(B,I):(U&&U.d(1),U=pe&&pe(B),U&&(U.c(),U.m(_e.parentNode,_e)))},i:ee,o:ee,d(B){B&&G(e),B&&G(Y),U&&U.d(B),B&&G(_e)}}}function Mt(l,e,t){let o=ft(),{selected_pokemonA:s}=e,{selected_pokemonB:r}=e,c=!1,_=!1,u="",i="",d="",E="",S="",b={...s},w={...r},N={BURN:!1,SEEDED:!1},F={BURN:!1,SEEDED:!1},D=!1,j="",L="",V="",q="";_t(()=>{let H=!1,fe;for(let y in Ce)Ce[y].name===i&&(H=!0,fe=y);H==!0?(t(6,d=`Power = ${Ce[fe].power}`),t(7,E=`Accuracy = ${Ce[fe].accuracy}`),t(8,S=`Effect = ${Ce[fe].effect}`)):(t(6,d=""),t(7,E=""),t(8,S="")),t(11,j=""),t(12,L=""),N.BURN==!0&&t(11,j+="BURN "),N.SEEDED==!0&&t(11,j+="SEEDED "),F.BURN==!0&&t(12,L+="BURN "),F.SEEDED==!0&&t(12,L+="SEEDED ")});function R(H,fe){let y,A,ce,Z,ie;fe=="friend"?(y=b,A=w,ce=s,Z=r,ie=F):(y=w,A=b,ce=r,Z=s,ie=N);let P=Ce[H];const ge=Math.floor(Math.random()*100);let ue=1,se="",ke=!1;for(let Y in w.weakness)w.weakness[Y]==P.type&&(ke=!0);ke==!0?(se=", super effective",ue=2):(se="",ue=1);for(let Y in w.type)w.type[Y]==P.type&&(se=", not very effective",ue=.5);if(ge>P.accuracy)t(4,u=`${y.name}'s ${P.name} missed!`);else{let Y=0;P.power!=="none"&&(Y=Math.floor(((2*y.level+10)/250*(y.attack/A.defense)*P.power+2)*ue),A.hp-=Y,t(4,u=`${y.name} used ${P.name}! ${se}`),D=!0)}let ve=Math.floor(Math.random()*100);if(ge<P.accuracy)if(P.effect=="USER DEFENSE STAT RAISE")if(y.defense<Math.floor(ce.defense*1.5)){let Y=Math.floor(ce.defense*.125*1);y.defense+=Y,t(4,u=`${y.name} used ${P.name}, ${y.name} defense rose!`)}else y.defense=Math.floor(ce.defense*1.5),t(4,u=`${y.name} used ${P.name}!, ${y.name} defense won't go higher!`);else if(P.effect=="ENEMY ATTACK STAT LOWER")if(A.attack>Math.floor(Z.attack/2)){let Y=Math.floor(Z.attack*.125*1);A.attack-=Y,t(4,u=`${y.name} used ${P.name}, ${A.name} attack fell!`)}else A.attack=Math.floor(Z.attack/2),t(4,u=`${y.name} used ${P.name}!, ${A.name} attack won't go lower!`);else if(P.effect=="ENEMY DEFENSE STAT LOWER")if(A.defense>Math.floor(Z.defense/2)){let Y=Math.floor(Z.defense*.125*1);A.defense-=Y,t(4,u=`${y.name} used ${P.name}, ${A.name} defense fell!`)}else A.defense=Math.floor(Z.defense/2),t(4,u=`${y.name} used ${P.name}!, ${A.name} defense won't go lower!`);else P.effect=="SEEDED"&&(ie.SEEDED=!0,t(4,u=`${y.name} used ${P.name}, ${A.name} was SEEDED`));if(ve>85)if(P.effect=="MAY USER ATTACK STAT RISE")if(y.attack<Math.floor(ce.attack*1.5)){let Y=Math.floor(ce.attack*.125*1);y.attack+=Y,t(4,u=`${y.name} used ${P.name}, ${y.name} attack rose!`)}else y.attack=Math.floor(ce.attack*1.5),t(4,u=`${y.name} used ${P.name}!, ${y.name} attact won't go higher!`);else if(P.effect=="MAY ENEMY SPEED STAT LOWER")if(A.speed>Math.floor(Z.speed/2)){let Y=Math.floor(Z.speed*.125*1);A.speed-=Y,t(4,u=`${y.name} used ${P.name}, ${A.name} speed fell!`)}else A.speed=Math.floor(Z.speed/2),t(4,u=`${y.name} used ${P.name}!, ${A.name} speed won't go lower!`);else P.effect=="MAY BURN"&&(ie.BURN=!0);if(ie.SEEDED==!0){t(4,u+=`, ${A.name} was sapped!`);let Y=Math.floor(Z.hp*(1/8)*ue);A.hp-=Y,y.hp+=Y,b.hp>=s.hp&&t(9,b.hp=s.hp,b)}if(ie.BURN==!0){t(4,u+=`, ${A.name} is hurt by its burn!`);let Y=Math.floor(Z.hp*(1/8)*ue);A.hp-=Y}A.hp<=0&&(A.hp=0),fe=="friend"?(t(9,b={...y}),t(10,w={...A})):(t(9,b={...A}),t(10,w={...y}))}function z(H){t(3,_=!0),t(2,c=null),R(H,"friend"),D==!0&&(D=!1,t(14,q="animate__flash")),setTimeout(()=>{let fe=Math.floor(Math.random()*w.moves.length),y=w.moves[fe];R(y,"enemy"),D==!0&&(D=!1,t(13,V="animate__flash"));let A=!1;w.hp==0?(t(4,u=`${w.name} has fainted!`),A=!0,t(13,V=""),t(14,q="animate__zoomOut")):b.hp==0&&(t(4,u=`${w.name} used ${H}!, ${b.name} has fainted!`),A=!0,t(13,V="animate__zoomOut"),t(14,q="")),A==!1?setTimeout(()=>{t(13,V=""),t(14,q=""),t(4,u=""),t(3,_=!1),t(2,c=!1)},2500):setTimeout(()=>{setTimeout(()=>{o("return")},2500)},2500)},2500)}const C=()=>{t(2,c=!0)},M=()=>{o("return")},Q=()=>{z(b.moves[0])},m=()=>{t(5,i=b.moves[0])},k=()=>{t(5,i="")},$=()=>{z(b.moves[2])},p=()=>{t(5,i=b.moves[2])},O=()=>{t(5,i="")},re=()=>{z(b.moves[1])},ae=()=>{t(5,i=b.moves[1])},oe=()=>{t(5,i="")},de=()=>{z(b.moves[3])},X=()=>{t(5,i=b.moves[3])},J=()=>{t(5,i="")};return l.$$set=H=>{"selected_pokemonA"in H&&t(0,s=H.selected_pokemonA),"selected_pokemonB"in H&&t(1,r=H.selected_pokemonB)},[s,r,c,_,u,i,d,E,S,b,w,j,L,V,q,o,z,C,M,Q,m,k,$,p,O,re,ae,oe,de,X,J]}class Rt extends Re{constructor(e){super(),Me(this,e,Mt,St,Se,{selected_pokemonA:0,selected_pokemonB:1},null,[-1,-1])}}function ze(l,e,t){const o=l.slice();return o[1]=e[t],o}function Qe(l,e,t){const o=l.slice();return o[4]=e[t],o}function Je(l,e,t){const o=l.slice();return o[7]=e[t],o}function Xe(l){let e=l[7]+"",t,o,s;return{c(){t=h(e),o=T(),s=f("br")},m(r,c){K(r,t,c),K(r,o,c),K(r,s,c)},p(r,c){c&1&&e!==(e=r[7]+"")&&W(t,e)},d(r){r&&G(t),r&&G(o),r&&G(s)}}}function Ze(l){let e=l[4]+"",t,o,s;return{c(){t=h(e),o=T(),s=f("br")},m(r,c){K(r,t,c),K(r,o,c),K(r,s,c)},p(r,c){c&1&&e!==(e=r[4]+"")&&W(t,e)},d(r){r&&G(t),r&&G(o),r&&G(s)}}}function xe(l){let e=l[1]+"",t,o,s;return{c(){t=h(e),o=T(),s=f("br")},m(r,c){K(r,t,c),K(r,o,c),K(r,s,c)},p(r,c){c&1&&e!==(e=r[1]+"")&&W(t,e)},d(r){r&&G(t),r&&G(o),r&&G(s)}}}function Lt(l){let e,t,o=l[0].name+"",s,r,c,_,u,i,d,E,S=l[0].level+"",b,w,N,F=l[0].hp+"",D,j,L,V=l[0].attack+"",q,R,z,C=l[0].defense+"",M,Q,m,k=l[0].speed+"",$,p,O,re,ae,oe,de,X,J,H,fe,y,A,ce,Z,ie,P,ge,ue,se,ke,ve,Y,_e=l[0].type,x=[];for(let v=0;v<_e.length;v+=1)x[v]=Xe(Je(l,_e,v));let pe=l[0].moves,U=[];for(let v=0;v<pe.length;v+=1)U[v]=Ze(Qe(l,pe,v));let B=l[0].weakness,I=[];for(let v=0;v<B.length;v+=1)I[v]=xe(ze(l,B,v));return{c(){e=f("div"),t=f("p"),s=h(o),r=T(),c=f("img"),u=T(),i=f("div"),d=f("p"),E=h("Level = "),b=h(S),w=f("br"),N=h(`\r
    HP = `),D=h(F),j=f("br"),L=h(`\r
    Attack = `),q=h(V),R=f("br"),z=h(`\r
    Defense = `),M=h(C),Q=f("br"),m=h(`\r
    Speed = `),$=h(k),p=f("br"),O=T(),re=f("hr"),ae=T(),oe=f("p"),de=h("Type:"),X=f("br"),J=T();for(let v=0;v<x.length;v+=1)x[v].c();H=T(),fe=f("hr"),y=T(),A=f("p"),ce=h("Moves:"),Z=f("br"),ie=T();for(let v=0;v<U.length;v+=1)U[v].c();P=T(),ge=f("hr"),ue=T(),se=f("p"),ke=h("Weakness:"),ve=f("br"),Y=T();for(let v=0;v<I.length;v+=1)I[v].c();we(c.src,_=l[0].front_default)||a(c,"src",_),a(c,"alt","front of pokemon"),a(c,"class","card-img pixel svelte-tcuqfi"),a(e,"class","text-bg-dark text-center rounded-2"),a(i,"class","text-bg-primary text-center rounded-2")},m(v,te){K(v,e,te),n(e,t),n(t,s),n(e,r),n(e,c),K(v,u,te),K(v,i,te),n(i,d),n(d,E),n(d,b),n(d,w),n(d,N),n(d,D),n(d,j),n(d,L),n(d,q),n(d,R),n(d,z),n(d,M),n(d,Q),n(d,m),n(d,$),n(d,p),n(i,O),n(i,re),n(i,ae),n(i,oe),n(oe,de),n(oe,X),n(oe,J);for(let g=0;g<x.length;g+=1)x[g]&&x[g].m(oe,null);n(i,H),n(i,fe),n(i,y),n(i,A),n(A,ce),n(A,Z),n(A,ie);for(let g=0;g<U.length;g+=1)U[g]&&U[g].m(A,null);n(i,P),n(i,ge),n(i,ue),n(i,se),n(se,ke),n(se,ve),n(se,Y);for(let g=0;g<I.length;g+=1)I[g]&&I[g].m(se,null)},p(v,[te]){if(te&1&&o!==(o=v[0].name+"")&&W(s,o),te&1&&!we(c.src,_=v[0].front_default)&&a(c,"src",_),te&1&&S!==(S=v[0].level+"")&&W(b,S),te&1&&F!==(F=v[0].hp+"")&&W(D,F),te&1&&V!==(V=v[0].attack+"")&&W(q,V),te&1&&C!==(C=v[0].defense+"")&&W(M,C),te&1&&k!==(k=v[0].speed+"")&&W($,k),te&1){_e=v[0].type;let g;for(g=0;g<_e.length;g+=1){const Ee=Je(v,_e,g);x[g]?x[g].p(Ee,te):(x[g]=Xe(Ee),x[g].c(),x[g].m(oe,null))}for(;g<x.length;g+=1)x[g].d(1);x.length=_e.length}if(te&1){pe=v[0].moves;let g;for(g=0;g<pe.length;g+=1){const Ee=Qe(v,pe,g);U[g]?U[g].p(Ee,te):(U[g]=Ze(Ee),U[g].c(),U[g].m(A,null))}for(;g<U.length;g+=1)U[g].d(1);U.length=pe.length}if(te&1){B=v[0].weakness;let g;for(g=0;g<B.length;g+=1){const Ee=ze(v,B,g);I[g]?I[g].p(Ee,te):(I[g]=xe(Ee),I[g].c(),I[g].m(se,null))}for(;g<I.length;g+=1)I[g].d(1);I.length=B.length}},i:ee,o:ee,d(v){v&&G(e),v&&G(u),v&&G(i),Ne(x,v),Ne(U,v),Ne(I,v)}}}function Ct(l,e,t){let{selected_pokemon:o}=e;return l.$$set=s=>{"selected_pokemon"in s&&t(0,o=s.selected_pokemon)},[o]}class et extends Re{constructor(e){super(),Me(this,e,Ct,Lt,Se,{selected_pokemon:0})}}function Bt(l){let e,t,o,s,r,c,_,u,i,d;return{c(){e=f("div"),t=f("p"),t.textContent=`${l[2]}`,o=T(),s=f("img"),c=T(),_=f("div"),u=f("button"),u.textContent="Choose",we(s.src,r=l[0].front_default)||a(s,"src",r),a(s,"alt","front of pokemon"),a(s,"class","img-fluid pixel svelte-tcuqfi"),a(u,"data-bs-dismiss","modal"),a(u,"type","button"),a(u,"class","btn mt-2"),Pe(u,"background-color","#4da6ff"),a(_,"class","d-grid gap-3"),a(e,"class","text-bg-dark text-center rounded-2")},m(E,S){K(E,e,S),n(e,t),n(e,o),n(e,s),n(e,c),n(e,_),n(_,u),i||(d=le(u,"click",l[3]),i=!0)},p(E,[S]){S&1&&!we(s.src,r=E[0].front_default)&&a(s,"src",r)},i:ee,o:ee,d(E){E&&G(e),i=!1,d()}}}function It(l,e,t){let o=ft(),{selected_pokemon:s}=e,r=s.name;const c=()=>{o("choosen",s)};return l.$$set=_=>{"selected_pokemon"in _&&t(0,s=_.selected_pokemon)},[s,o,r,c]}class it extends Re{constructor(e){super(),Me(this,e,It,Bt,Se,{selected_pokemon:0})}}function tt(l,e,t){const o=l.slice();return o[7]=e[t],o}function lt(l,e,t){const o=l.slice();return o[7]=e[t],o}function Pt(l){let e,t;return e=new Rt({props:{selected_pokemonA:l[1],selected_pokemonB:l[2]}}),e.$on("return",l[4]),{c(){Ae(e.$$.fragment)},m(o,s){he(e,o,s),t=!0},p(o,s){const r={};s&2&&(r.selected_pokemonA=o[1]),s&4&&(r.selected_pokemonB=o[2]),e.$set(r)},i(o){t||(ne(e.$$.fragment,o),t=!0)},o(o){me(e.$$.fragment,o),t=!1},d(o){be(e,o)}}}function Dt(l){let e,t,o,s,r,c,_,u,i,d,E,S,b,w,N=l[1].name+"",F,D,j,L,V,q=l[2].name+"",R,z,C,M,Q,m,k,$;return s=new et({props:{selected_pokemon:l[1]}}),Q=new et({props:{selected_pokemon:l[2]}}),{c(){e=f("div"),t=f("div"),o=f("div"),Ae(s.$$.fragment),r=T(),c=f("div"),_=f("div"),u=f("p"),u.textContent="VS",i=T(),d=f("button"),d.textContent="BATTLE!",E=T(),S=f("div"),b=f("button"),w=h("Change "),F=h(N),D=h("!"),j=T(),L=f("button"),V=h("Change "),R=h(q),z=h("!"),C=T(),M=f("div"),Ae(Q.$$.fragment),a(o,"class","col-sm-3 p-3 bg-primary text-white"),a(u,"class","h1 mt-5"),a(d,"type","button"),a(d,"class","btn mt-5"),Pe(d,"background-color","#eb564b"),a(b,"data-bs-toggle","modal"),a(b,"data-bs-target","#choosePokemonA"),a(b,"type","button"),a(b,"class","btn mt-2"),Pe(b,"background-color","#4da6ff"),a(L,"data-bs-toggle","modal"),a(L,"data-bs-target","#choosePokemonB"),a(L,"type","button"),a(L,"class","btn mt-2"),Pe(L,"background-color","#4da6ff"),a(S,"class","d-grid gap-3 mt-5"),a(_,"class","text-center"),a(c,"class","col p-3 bg-dark text-white"),a(M,"class","col-sm-3 p-3 bg-primary text-white"),a(t,"class","row"),a(e,"class","container-fluid mt-3")},m(p,O){K(p,e,O),n(e,t),n(t,o),he(s,o,null),n(t,r),n(t,c),n(c,_),n(_,u),n(_,i),n(_,d),n(_,E),n(_,S),n(S,b),n(b,w),n(b,F),n(b,D),n(S,j),n(S,L),n(L,V),n(L,R),n(L,z),n(t,C),n(t,M),he(Q,M,null),m=!0,k||($=le(d,"click",l[3]),k=!0)},p(p,O){const re={};O&2&&(re.selected_pokemon=p[1]),s.$set(re),(!m||O&2)&&N!==(N=p[1].name+"")&&W(F,N),(!m||O&4)&&q!==(q=p[2].name+"")&&W(R,q);const ae={};O&4&&(ae.selected_pokemon=p[2]),Q.$set(ae)},i(p){m||(ne(s.$$.fragment,p),ne(Q.$$.fragment,p),m=!0)},o(p){me(s.$$.fragment,p),me(Q.$$.fragment,p),m=!1},d(p){p&&G(e),be(s),be(Q),k=!1,$()}}}function nt(l){let e,t;return e=new it({props:{selected_pokemon:l[7]}}),e.$on("choosen",l[5]),{c(){Ae(e.$$.fragment)},m(o,s){he(e,o,s),t=!0},p:ee,i(o){t||(ne(e.$$.fragment,o),t=!0)},o(o){me(e.$$.fragment,o),t=!1},d(o){be(e,o)}}}function ot(l){let e,t;return e=new it({props:{selected_pokemon:l[7]}}),e.$on("choosen",l[6]),{c(){Ae(e.$$.fragment)},m(o,s){he(e,o,s),t=!0},p:ee,i(o){t||(ne(e.$$.fragment,o),t=!0)},o(o){me(e.$$.fragment,o),t=!1},d(o){be(e,o)}}}function Nt(l){let e,t,o,s,r,c,_,u,i,d,E,S,b,w,N,F,D;const j=[Dt,Pt],L=[];function V(m,k){return m[0]===!1?0:1}e=V(l),t=L[e]=j[e](l);let q=Ie,R=[];for(let m=0;m<q.length;m+=1)R[m]=nt(lt(l,q,m));const z=m=>me(R[m],1,1,()=>{R[m]=null});let C=Ie,M=[];for(let m=0;m<C.length;m+=1)M[m]=ot(tt(l,C,m));const Q=m=>me(M[m],1,1,()=>{M[m]=null});return{c(){t.c(),o=T(),s=f("div"),r=f("div"),c=f("div"),_=f("div"),_.innerHTML=`<h4 class="modal-title">Pokemon Selector</h4> 
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>`,u=T(),i=f("div");for(let m=0;m<R.length;m+=1)R[m].c();d=T(),E=f("div"),S=f("div"),b=f("div"),w=f("div"),w.innerHTML=`<h4 class="modal-title">Pokemon Selector</h4> 
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>`,N=T(),F=f("div");for(let m=0;m<M.length;m+=1)M[m].c();a(_,"class","modal-header"),a(i,"class","modal-body"),a(c,"class","modal-content"),a(r,"class","modal-dialog"),a(s,"class","modal"),a(s,"id","choosePokemonA"),a(w,"class","modal-header"),a(F,"class","modal-body"),a(b,"class","modal-content"),a(S,"class","modal-dialog"),a(E,"class","modal"),a(E,"id","choosePokemonB")},m(m,k){L[e].m(m,k),K(m,o,k),K(m,s,k),n(s,r),n(r,c),n(c,_),n(c,u),n(c,i);for(let $=0;$<R.length;$+=1)R[$]&&R[$].m(i,null);K(m,d,k),K(m,E,k),n(E,S),n(S,b),n(b,w),n(b,N),n(b,F);for(let $=0;$<M.length;$+=1)M[$]&&M[$].m(F,null);D=!0},p(m,[k]){let $=e;if(e=V(m),e===$?L[e].p(m,k):(Fe(),me(L[$],1,1,()=>{L[$]=null}),qe(),t=L[e],t?t.p(m,k):(t=L[e]=j[e](m),t.c()),ne(t,1),t.m(o.parentNode,o)),k&2){q=Ie;let p;for(p=0;p<q.length;p+=1){const O=lt(m,q,p);R[p]?(R[p].p(O,k),ne(R[p],1)):(R[p]=nt(O),R[p].c(),ne(R[p],1),R[p].m(i,null))}for(Fe(),p=q.length;p<R.length;p+=1)z(p);qe()}if(k&4){C=Ie;let p;for(p=0;p<C.length;p+=1){const O=tt(m,C,p);M[p]?(M[p].p(O,k),ne(M[p],1)):(M[p]=ot(O),M[p].c(),ne(M[p],1),M[p].m(F,null))}for(Fe(),p=C.length;p<M.length;p+=1)Q(p);qe()}},i(m){if(!D){ne(t);for(let k=0;k<q.length;k+=1)ne(R[k]);for(let k=0;k<C.length;k+=1)ne(M[k]);D=!0}},o(m){me(t),R=R.filter(Boolean);for(let k=0;k<R.length;k+=1)me(R[k]);M=M.filter(Boolean);for(let k=0;k<M.length;k+=1)me(M[k]);D=!1},d(m){L[e].d(m),m&&G(o),m&&G(s),Ne(R,m),m&&G(d),m&&G(E),Ne(M,m)}}}function Wt(l,e,t){let o=!1,s=null,r=null;return s=Ie[0],r=Ie[1],[o,s,r,()=>{t(0,o=!0)},()=>{t(0,o=!1)},d=>{t(1,s=d.detail)},d=>{t(2,r=d.detail)}]}class $t extends Re{constructor(e){super(),Me(this,e,Wt,Nt,Se,{})}}function Ot(l){let e,t,o,s,r,c,_,u,i,d;return{c(){e=f("footer"),t=f("p"),t.innerHTML=`Brewed by Svelte<br/>
    Designed by Bootstrap 5<br/>
    Animated by Animate.css<br/>
    Data handled by Firebase`,o=T(),s=f("div"),r=f("div"),r.innerHTML='<p class="p-3 small">Made by realSkyQuest -</p>',c=T(),_=f("div"),u=f("button"),u.textContent="Github",a(t,"class","p-3 small"),a(r,"class","col-sm-2"),a(u,"type","button"),a(u,"class","btn text-light"),Pe(u,"background-color","#4da6ff"),a(_,"class","col-sm-2"),a(s,"class","row justify-content-center align-items-center"),a(e,"class","mt-3 p-4 text-bg-dark text-center")},m(E,S){K(E,e,S),n(e,t),n(e,o),n(e,s),n(s,r),n(s,c),n(s,_),n(_,u),i||(d=le(u,"click",l[0]),i=!0)},p:ee,i:ee,o:ee,d(E){E&&G(e),i=!1,d()}}}function Ht(l){return[()=>{window.location.href="https://github.com/realskyquest/pokemon-esque"}]}class Ut extends Re{constructor(e){super(),Me(this,e,Ht,Ot,Se,{})}}function Ft(l){let e,t,o,s,r,c,_;return t=new wt({}),s=new $t({}),c=new Ut({}),{c(){e=f("main"),Ae(t.$$.fragment),o=T(),Ae(s.$$.fragment),r=T(),Ae(c.$$.fragment)},m(u,i){K(u,e,i),he(t,e,null),n(e,o),he(s,e,null),n(e,r),he(c,e,null),_=!0},p:ee,i(u){_||(ne(t.$$.fragment,u),ne(s.$$.fragment,u),ne(c.$$.fragment,u),_=!0)},o(u){me(t.$$.fragment,u),me(s.$$.fragment,u),me(c.$$.fragment,u),_=!1},d(u){u&&G(e),be(t),be(s),be(c)}}}class qt extends Re{constructor(e){super(),Me(this,e,null,Ft,Se,{})}}new qt({target:document.getElementById("app")});
