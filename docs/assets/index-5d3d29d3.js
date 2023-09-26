(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function ne(){}function st(l){return l()}function Ke(){return Object.create(null)}function Te(l){l.forEach(st)}function rt(l){return typeof l=="function"}function Se(l,e){return l!=l?e==e:l!==e||l&&typeof l=="object"||typeof l=="function"}let Oe;function we(l,e){return Oe||(Oe=document.createElement("a")),Oe.href=e,l===Oe.href}function ut(l){return Object.keys(l).length===0}function n(l,e){l.appendChild(e)}function G(l,e,t){l.insertBefore(e,t||null)}function Y(l){l.parentNode&&l.parentNode.removeChild(l)}function Ne(l,e){for(let t=0;t<l.length;t+=1)l[t]&&l[t].d(e)}function f(l){return document.createElement(l)}function h(l){return document.createTextNode(l)}function S(){return h(" ")}function mt(){return h("")}function re(l,e,t,o){return l.addEventListener(e,t,o),()=>l.removeEventListener(e,t,o)}function a(l,e,t){t==null?l.removeAttribute(e):l.getAttribute(e)!==t&&l.setAttribute(e,t)}function dt(l){return Array.from(l.childNodes)}function O(l,e){e=""+e,l.data!==e&&(l.data=e)}function Pe(l,e,t,o){t==null?l.style.removeProperty(e):l.style.setProperty(e,t,o?"important":"")}function pt(l,e,{bubbles:t=!1,cancelable:o=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(l,t,o,e),s}let We;function $e(l){We=l}function at(){if(!We)throw new Error("Function called outside component initialization");return We}function _t(l){at().$$.after_update.push(l)}function ft(){const l=at();return(e,t,{cancelable:o=!1}={})=>{const s=l.$$.callbacks[e];if(s){const r=pt(e,t,{cancelable:o});return s.slice().forEach(c=>{c.call(l,r)}),!r.defaultPrevented}return!0}}const Ce=[],Ve=[];let De=[];const je=[],ht=Promise.resolve();let qe=!1;function bt(){qe||(qe=!0,ht.then(ct))}function Ge(l){De.push(l)}const Ue=new Set;let Ie=0;function ct(){if(Ie!==0)return;const l=We;do{try{for(;Ie<Ce.length;){const e=Ce[Ie];Ie++,$e(e),gt(e.$$)}}catch(e){throw Ce.length=0,Ie=0,e}for($e(null),Ce.length=0,Ie=0;Ve.length;)Ve.pop()();for(let e=0;e<De.length;e+=1){const t=De[e];Ue.has(t)||(Ue.add(t),t())}De.length=0}while(Ce.length);for(;je.length;)je.pop()();qe=!1,Ue.clear(),$e(l)}function gt(l){if(l.fragment!==null){l.update(),Te(l.before_update);const e=l.dirty;l.dirty=[-1],l.fragment&&l.fragment.p(l.ctx,e),l.after_update.forEach(Ge)}}function vt(l){const e=[],t=[];De.forEach(o=>l.indexOf(o)===-1?e.push(o):t.push(o)),t.forEach(o=>o()),De=e}const He=new Set;let Me;function Fe(){Me={r:0,c:[],p:Me}}function Ye(){Me.r||Te(Me.c),Me=Me.p}function ae(l,e){l&&l.i&&(He.delete(l),l.i(e))}function me(l,e,t,o){if(l&&l.o){if(He.has(l))return;He.add(l),Me.c.push(()=>{He.delete(l),o&&(t&&l.d(1),o())}),l.o(e)}else o&&o()}function Ae(l){l&&l.c()}function ve(l,e,t,o){const{fragment:s,after_update:r}=l.$$;s&&s.m(e,t),o||Ge(()=>{const c=l.$$.on_mount.map(st).filter(rt);l.$$.on_destroy?l.$$.on_destroy.push(...c):Te(c),l.$$.on_mount=[]}),r.forEach(Ge)}function ke(l,e){const t=l.$$;t.fragment!==null&&(vt(t.after_update),Te(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function kt(l,e){l.$$.dirty[0]===-1&&(Ce.push(l),bt(),l.$$.dirty.fill(0)),l.$$.dirty[e/31|0]|=1<<e%31}function Re(l,e,t,o,s,r,c,_=[-1]){const u=We;$e(l);const i=l.$$={fragment:null,ctx:[],props:r,update:ne,not_equal:s,bound:Ke(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:Ke(),dirty:_,skip_bound:!1,root:e.target||u.$$.root};c&&c(i.root);let d=!1;if(i.ctx=t?t(l,e.props||{},(w,R,...g)=>{const y=g.length?g[0]:R;return i.ctx&&s(i.ctx[w],i.ctx[w]=y)&&(!i.skip_bound&&i.bound[w]&&i.bound[w](y),d&&kt(l,w)),R}):[],i.update(),d=!0,Te(i.before_update),i.fragment=o?o(i.ctx):!1,e.target){if(e.hydrate){const w=dt(e.target);i.fragment&&i.fragment.l(w),w.forEach(Y)}else i.fragment&&i.fragment.c();e.intro&&ae(l.$$.fragment),ve(l,e.target,e.anchor,e.customElement),ct()}$e(u)}class Le{$destroy(){ke(this,1),this.$destroy=ne}$on(e,t){if(!rt(t))return ne;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(t),()=>{const s=o.indexOf(t);s!==-1&&o.splice(s,1)}}$set(e){this.$$set&&!ut(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Et(l){let e;return{c(){e=f("header"),e.innerHTML=`<h1 class="h1">Pokébattle</h1> 
  <i class="small">A simple demonstration!</i>`,a(e,"class","p-5 text-light text-center"),Pe(e,"background-color","#4b5bab")},m(t,o){G(t,e,o)},p:ne,i:ne,o:ne,d(t){t&&Y(e)}}}class wt extends Le{constructor(e){super(),Re(this,e,null,Et,Se,{})}}let Be=[{name:"BULBASAUR",level:13,hp:36,attack:20,defense:17,speed:20,type:["GRASS","POISON"],weakness:["FIRE","PSYCHIC","FLYING","ICE"],moves:["TACKLE","GROWL","LEECH SEED","VINE WHIP"],back_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},{name:"CHARMANDER",level:13,hp:37,attack:21,defense:18,speed:24,type:["FIRE"],weakness:["WATER","GROUND","ROCK"],moves:["SCRATCH","GROWL","EMBER","METAL CLAW"],back_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},{name:"SQUIRTLE",level:13,hp:34,attack:20,defense:21,speed:20,type:["WATER"],weakness:["GRASS","ELECTRIC"],moves:["TACKLE","TAIL WHIP","BUBBLE","WITHDRAW"],back_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png",front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"}],he={TACKLE:{name:"TACKLE",power:35,accuracy:95,effect:"none",type:"NORMAL"},GROWL:{name:"GROWL",power:"none",accuracy:100,effect:"ENEMY ATTACK STAT LOWER",type:"NORMAL"},"LEECH SEED":{name:"LEECH SEED",power:"none",accuracy:90,effect:"SEEDED",type:"GRASS"},"VINE WHIP":{name:"VINE WHIP",power:35,accuracy:100,effect:"none",type:"GRASS"},SCRATCH:{name:"SCRATCH",power:40,accuracy:100,effect:"none",type:"NORMAL"},EMBER:{name:"EMBER",power:40,accuracy:100,effect:"MAY BURN",type:"FIRE"},"METAL CLAW":{name:"METAL CLAW",power:50,accuracy:95,effect:"MAY USER ATTACK STAT RISE",type:"STEEL"},"TAIL WHIP":{name:"TAIL WHIP",power:"none",accuracy:100,effect:"ENEMY DEFENSE STAT LOWER",type:"NORMAL"},BUBBLE:{name:"BUBBLE",power:20,accuracy:100,effect:"MAY ENEMY SPEED STAT LOWER",type:"WATER"},WITHDRAW:{name:"WITHDRAW",power:"none",accuracy:100,effect:"USER DEFENSE STAT RAISE",type:"WATER"}};function At(l){let e,t,o;return{c(){e=f("div"),t=f("p"),o=h(l[4]),a(t,"class","h5"),a(e,"class","container-fluid text-center bg-primary text-white p-5 mt-3")},m(s,r){G(s,e,r),n(e,t),n(t,o)},p(s,r){r[0]&16&&O(o,s[4])},d(s){s&&Y(e)}}}function yt(l){let e,t,o,s,r,c=l[9].moves[0]+"",_,u,i,d=l[9].moves[2]+"",w,R,g,y,W,U=l[9].moves[1]+"",D,V,C,K=l[9].moves[3]+"",F,I,x,M,L,j,m,k,H,p,N,ce,ie,fe,de,ee;return{c(){e=f("div"),t=f("div"),o=f("div"),s=f("div"),r=f("button"),_=h(c),u=S(),i=f("button"),w=h(d),R=S(),g=f("div"),y=f("div"),W=f("button"),D=h(U),V=S(),C=f("button"),F=h(K),I=S(),x=f("div"),M=f("p"),L=h(l[5]),j=f("br"),m=S(),k=h(l[6]),H=f("br"),p=S(),N=h(l[7]),ce=f("br"),ie=S(),fe=h(l[8]),a(r,"type","button"),a(r,"class","btn bg-white"),a(i,"type","button"),a(i,"class","btn bg-white"),a(s,"class","d-grid gap-3"),a(o,"class","col p-3 bg-dark text-secondary"),a(W,"type","button"),a(W,"class","btn bg-white"),a(C,"type","button"),a(C,"class","btn bg-white"),a(y,"class","d-grid gap-3"),a(g,"class","col p-3 bg-dark text-secondary"),a(x,"class","col p-3 bg-primary text-white"),a(t,"class","row"),a(e,"class","container-fluid text-center mt-3")},m(z,te){G(z,e,te),n(e,t),n(t,o),n(o,s),n(s,r),n(r,_),n(s,u),n(s,i),n(i,w),n(t,R),n(t,g),n(g,y),n(y,W),n(W,D),n(y,V),n(y,C),n(C,F),n(t,I),n(t,x),n(x,M),n(M,L),n(M,j),n(M,m),n(M,k),n(M,H),n(M,p),n(M,N),n(M,ce),n(M,ie),n(M,fe),de||(ee=[re(r,"click",l[19]),re(r,"mouseenter",l[20]),re(r,"mouseleave",l[21]),re(i,"click",l[22]),re(i,"mouseenter",l[23]),re(i,"mouseleave",l[24]),re(W,"click",l[25]),re(W,"mouseenter",l[26]),re(W,"mouseleave",l[27]),re(C,"click",l[28]),re(C,"mouseenter",l[29]),re(C,"mouseleave",l[30])],de=!0)},p(z,te){te[0]&512&&c!==(c=z[9].moves[0]+"")&&O(_,c),te[0]&512&&d!==(d=z[9].moves[2]+"")&&O(w,d),te[0]&512&&U!==(U=z[9].moves[1]+"")&&O(D,U),te[0]&512&&K!==(K=z[9].moves[3]+"")&&O(F,K),te[0]&32&&O(L,z[5]),te[0]&64&&O(k,z[6]),te[0]&128&&O(N,z[7]),te[0]&256&&O(fe,z[8])},d(z){z&&Y(e),de=!1,Te(ee)}}}function Mt(l){let e,t,o,s,r,c=l[9].name+"",_,u,i,d,w,R,g,y,W,U;return{c(){e=f("div"),t=f("div"),o=f("div"),s=f("p"),r=h("What will "),_=h(c),u=h(" wil do?"),i=S(),d=f("div"),w=f("div"),R=f("button"),R.textContent="FIGHT",g=S(),y=f("button"),y.textContent="RUN",a(s,"class","h5 mt-4"),a(o,"class","col p-3 bg-dark text-white"),a(R,"type","button"),a(R,"class","btn bg-white"),a(y,"type","button"),a(y,"class","btn bg-white"),a(w,"class","d-grid gap-3"),a(d,"class","col p-3 bg-primary text-secondary"),a(t,"class","row"),a(e,"class","container-fluid text-center mt-3")},m(D,V){G(D,e,V),n(e,t),n(t,o),n(o,s),n(s,r),n(s,_),n(s,u),n(t,i),n(t,d),n(d,w),n(w,R),n(w,g),n(w,y),W||(U=[re(R,"click",l[17]),re(y,"click",l[18])],W=!0)},p(D,V){V[0]&512&&c!==(c=D[9].name+"")&&O(_,c)},d(D){D&&Y(e),W=!1,Te(U)}}}function Tt(l){let e,t,o,s,r,c=l[10].name+"",_,u,i=l[10].level+"",d,w,R,g,y=l[10].hp+"",W,U,D=l[1].hp+"",V,C,K,F,I,x,M,L,j,m,k,H,p,N,ce,ie,fe,de,ee,z=l[9].name+"",te,ye,be=l[9].level+"",pe,q,Q,A=l[9].hp+"",T,J,X=l[0].hp+"",le,$,ge,_e,oe;function Z(B,P){if(B[2]===!1)return Mt;if(B[2]===!0)return yt;if(B[3]===!0)return At}let ue=Z(l),v=ue&&ue(l);return{c(){e=f("div"),t=f("div"),o=f("div"),s=f("div"),r=f("p"),_=h(c),u=h(" Lv "),d=h(i),w=S(),R=f("br"),g=h(`\r
          HP `),W=h(y),U=h("/"),V=h(D),C=h(`\r
          EFFECTS = `),K=h(l[12]),F=S(),I=f("div"),x=f("div"),M=f("img"),m=S(),k=f("div"),H=f("div"),p=f("div"),N=f("img"),fe=S(),de=f("div"),ee=f("p"),te=h(z),ye=h(" Lv "),pe=h(be),q=f("br"),Q=h(`\r
          HP `),T=h(A),J=h("/"),le=h(X),$=h(`\r
          EFFECTS = `),ge=h(l[11]),_e=S(),v&&v.c(),oe=mt(),a(s,"class","bg-dark p-1"),we(M.src,L=l[9].back_default)||a(M,"src",L),a(M,"alt","front of pokemon"),a(M,"class","img-fluid m-5 pixel animate__animated animate__slower animate__infinite animate__shakeY svelte-qaw3rn"),a(M,"width","50%"),a(M,"height","50%"),a(x,"class",j="animate__animated "+l[13]+" svelte-qaw3rn"),a(I,"class","land text-center svelte-qaw3rn"),a(o,"class","col text-white"),we(N.src,ce=l[10].front_default)||a(N,"src",ce),a(N,"alt","front of pokemon"),a(N,"class","img-fluid mt-5 m-5 pixel animate__animated animate__slower animate__infinite animate__shakeY animate__delay-1s svelte-qaw3rn"),a(N,"width","50%"),a(N,"height","50%"),a(p,"class",ie="animate__animated "+l[14]+" svelte-qaw3rn"),a(H,"class","land text-center svelte-qaw3rn"),a(de,"class","bg-dark p-2 mt-2"),a(k,"class","col text-white"),a(t,"class","row"),a(e,"class","container-fluid mt-3")},m(B,P){G(B,e,P),n(e,t),n(t,o),n(o,s),n(s,r),n(r,_),n(r,u),n(r,d),n(r,w),n(r,R),n(r,g),n(r,W),n(r,U),n(r,V),n(r,C),n(r,K),n(o,F),n(o,I),n(I,x),n(x,M),n(t,m),n(t,k),n(k,H),n(H,p),n(p,N),n(k,fe),n(k,de),n(de,ee),n(ee,te),n(ee,ye),n(ee,pe),n(ee,q),n(ee,Q),n(ee,T),n(ee,J),n(ee,le),n(ee,$),n(ee,ge),G(B,_e,P),v&&v.m(B,P),G(B,oe,P)},p(B,P){P[0]&1024&&c!==(c=B[10].name+"")&&O(_,c),P[0]&1024&&i!==(i=B[10].level+"")&&O(d,i),P[0]&1024&&y!==(y=B[10].hp+"")&&O(W,y),P[0]&2&&D!==(D=B[1].hp+"")&&O(V,D),P[0]&4096&&O(K,B[12]),P[0]&512&&!we(M.src,L=B[9].back_default)&&a(M,"src",L),P[0]&8192&&j!==(j="animate__animated "+B[13]+" svelte-qaw3rn")&&a(x,"class",j),P[0]&1024&&!we(N.src,ce=B[10].front_default)&&a(N,"src",ce),P[0]&16384&&ie!==(ie="animate__animated "+B[14]+" svelte-qaw3rn")&&a(p,"class",ie),P[0]&512&&z!==(z=B[9].name+"")&&O(te,z),P[0]&512&&be!==(be=B[9].level+"")&&O(pe,be),P[0]&512&&A!==(A=B[9].hp+"")&&O(T,A),P[0]&1&&X!==(X=B[0].hp+"")&&O(le,X),P[0]&2048&&O(ge,B[11]),ue===(ue=Z(B))&&v?v.p(B,P):(v&&v.d(1),v=ue&&ue(B),v&&(v.c(),v.m(oe.parentNode,oe)))},i:ne,o:ne,d(B){B&&Y(e),B&&Y(_e),v&&v.d(B),B&&Y(oe)}}}function St(l,e,t){let o=ft(),{selected_pokemonA:s}=e,{selected_pokemonB:r}=e,c=!1,_=!1,u="",i="",d="",w="",R="",g={...s},y={...r},W={BURN:!1,SEEDED:!1},U={BURN:!1,SEEDED:!1},D=!1,V="",C="",K="",F="";_t(()=>{let q=!1,Q;for(let A in he)he[A].name===i&&(q=!0,Q=A);q==!0?(t(6,d=`Power = ${he[Q].power}`),t(7,w=`Accuracy = ${he[Q].accuracy}`),t(8,R=`Effect = ${he[Q].effect}`)):(t(6,d=""),t(7,w=""),t(8,R="")),t(11,V=""),t(12,C=""),W.BURN==!0&&t(11,V+="BURN "),W.SEEDED==!0&&t(11,V+="SEEDED "),U.BURN==!0&&t(12,C+="BURN "),U.SEEDED==!0&&t(12,C+="SEEDED ")});function I(q,Q){let A,T,J,X,le;Q=="friend"?(A=g,T=y,J=s,X=r,le=U):(A=y,T=g,J=r,X=s,le=W);let $=he[q];const ge=Math.floor(Math.random()*100);let _e=1,oe="",Z=!1;for(let v in T.weakness)T.weakness[v]==$.type&&(Z=!0);Z==!0?(oe=", super effective",_e=2):(oe="",_e=1);for(let v in T.type)T.type[v]==$.type&&(oe=", not very effective",_e=.5);if(ge>$.accuracy)t(4,u=`${A.name}'s ${$.name} missed!`);else{let v=0;$.power!=="none"&&(v=Math.floor(((2*A.level+10)/250*(A.attack/T.defense)*$.power+2)*_e),T.hp-=v,t(4,u=`${A.name} used ${$.name}! ${oe}`),D=!0)}let ue=Math.floor(Math.random()*100);if(ge<$.accuracy)if($.effect=="USER DEFENSE STAT RAISE")if(A.defense<Math.floor(J.defense*1.5)){let v=Math.floor(J.defense*.125*1);A.defense+=v,t(4,u=`${A.name} used ${$.name}, ${A.name} defense rose!`)}else A.defense=Math.floor(J.defense*1.5),t(4,u=`${A.name} used ${$.name}!, ${A.name} defense won't go higher!`);else if($.effect=="ENEMY ATTACK STAT LOWER")if(T.attack>Math.floor(X.attack/2)){let v=Math.floor(X.attack*.125*1);T.attack-=v,t(4,u=`${A.name} used ${$.name}, ${T.name} attack fell!`)}else T.attack=Math.floor(X.attack/2),t(4,u=`${A.name} used ${$.name}!, ${T.name} attack won't go lower!`);else if($.effect=="ENEMY DEFENSE STAT LOWER")if(T.defense>Math.floor(X.defense/2)){let v=Math.floor(X.defense*.125*1);T.defense-=v,t(4,u=`${A.name} used ${$.name}, ${T.name} defense fell!`)}else T.defense=Math.floor(X.defense/2),t(4,u=`${A.name} used ${$.name}!, ${T.name} defense won't go lower!`);else $.effect=="SEEDED"&&(le.SEEDED=!0,t(4,u=`${A.name} used ${$.name}, ${T.name} was SEEDED`));if(ue>85)if($.effect=="MAY USER ATTACK STAT RISE")if(A.attack<Math.floor(J.attack*1.5)){let v=Math.floor(J.attack*.125*1);A.attack+=v,t(4,u=`${A.name} used ${$.name}, ${A.name} attack rose!`)}else A.attack=Math.floor(J.attack*1.5),t(4,u=`${A.name} used ${$.name}!, ${A.name} attact won't go higher!`);else if($.effect=="MAY ENEMY SPEED STAT LOWER")if(T.speed>Math.floor(X.speed/2)){let v=Math.floor(X.speed*.125*1);T.speed-=v,t(4,u=`${A.name} used ${$.name}, ${T.name} speed fell!`)}else T.speed=Math.floor(X.speed/2),t(4,u=`${A.name} used ${$.name}!, ${T.name} speed won't go lower!`);else $.effect=="MAY BURN"&&(le.BURN=!0);if(le.SEEDED==!0){t(4,u+=`, ${T.name} was sapped!`);let v=Math.floor(X.hp*(1/8)*_e);T.hp-=v,A.hp+=v,A.hp>=J.hp&&(A.hp=J.hp)}if(le.BURN==!0){t(4,u+=`, ${T.name} is hurt by its burn!`);let v=Math.floor(X.hp*(1/8)*_e);T.hp-=v}T.hp<=0&&(T.hp=0),Q=="friend"?(t(9,g={...A}),t(10,y={...T})):(t(9,g={...T}),t(10,y={...A}))}function x(){const q=y.moves.filter(T=>{const J=he[T];return!!(g.weakness.includes(J.type)||y.type.includes(J.type))});if(q.length===0)return M();const Q=Math.floor(Math.random()*q.length);return he[q[Q]]}function M(){let q=Math.floor(Math.random()*y.moves.length);return he[y.moves[q]]}function L(){const q=y.moves.filter(T=>{const J=he[T];return J.power==="none"&&J.effect!=="none"});if(q.length===0)return M();const Q=Math.floor(Math.random()*q.length);return he[q[Q]]}function j(){return y.hp>Math.floor(r.hp*.75)?L():y.hp>Math.floor(r.hp*.5)?M():x()}function m(q){t(3,_=!0),t(2,c=null),I(q,"friend"),D==!0&&(D=!1,t(14,F="animate__flash")),setTimeout(()=>{let Q=j();console.log(Q.name),I(Q.name,"enemy"),D==!0&&(D=!1,t(13,K="animate__flash"));let A=!1;y.hp==0?(t(4,u=`${y.name} has fainted!`),A=!0,t(13,K=""),t(14,F="animate__zoomOut animate__slower")):g.hp==0&&(t(4,u=`${y.name} used ${Q.name}!, ${g.name} has fainted!`),A=!0,t(13,K="animate__zoomOut animate__slower"),t(14,F="")),A==!1?setTimeout(()=>{t(13,K=""),t(14,F=""),t(4,u=""),t(3,_=!1),t(2,c=!1)},2500):setTimeout(()=>{setTimeout(()=>{o("return")},2500)},2500)},2500)}const k=()=>{t(2,c=!0)},H=()=>{o("return")},p=()=>{m(g.moves[0])},N=()=>{t(5,i=g.moves[0])},ce=()=>{t(5,i="")},ie=()=>{m(g.moves[2])},fe=()=>{t(5,i=g.moves[2])},de=()=>{t(5,i="")},ee=()=>{m(g.moves[1])},z=()=>{t(5,i=g.moves[1])},te=()=>{t(5,i="")},ye=()=>{m(g.moves[3])},be=()=>{t(5,i=g.moves[3])},pe=()=>{t(5,i="")};return l.$$set=q=>{"selected_pokemonA"in q&&t(0,s=q.selected_pokemonA),"selected_pokemonB"in q&&t(1,r=q.selected_pokemonB)},[s,r,c,_,u,i,d,w,R,g,y,V,C,K,F,o,m,k,H,p,N,ce,ie,fe,de,ee,z,te,ye,be,pe]}class Rt extends Le{constructor(e){super(),Re(this,e,St,Tt,Se,{selected_pokemonA:0,selected_pokemonB:1},null,[-1,-1])}}function ze(l,e,t){const o=l.slice();return o[1]=e[t],o}function Qe(l,e,t){const o=l.slice();return o[4]=e[t],o}function Je(l,e,t){const o=l.slice();return o[7]=e[t],o}function Xe(l){let e=l[7]+"",t,o,s;return{c(){t=h(e),o=S(),s=f("br")},m(r,c){G(r,t,c),G(r,o,c),G(r,s,c)},p(r,c){c&1&&e!==(e=r[7]+"")&&O(t,e)},d(r){r&&Y(t),r&&Y(o),r&&Y(s)}}}function Ze(l){let e=l[4]+"",t,o,s;return{c(){t=h(e),o=S(),s=f("br")},m(r,c){G(r,t,c),G(r,o,c),G(r,s,c)},p(r,c){c&1&&e!==(e=r[4]+"")&&O(t,e)},d(r){r&&Y(t),r&&Y(o),r&&Y(s)}}}function xe(l){let e=l[1]+"",t,o,s;return{c(){t=h(e),o=S(),s=f("br")},m(r,c){G(r,t,c),G(r,o,c),G(r,s,c)},p(r,c){c&1&&e!==(e=r[1]+"")&&O(t,e)},d(r){r&&Y(t),r&&Y(o),r&&Y(s)}}}function Lt(l){let e,t,o=l[0].name+"",s,r,c,_,u,i,d,w,R=l[0].level+"",g,y,W,U=l[0].hp+"",D,V,C,K=l[0].attack+"",F,I,x,M=l[0].defense+"",L,j,m,k=l[0].speed+"",H,p,N,ce,ie,fe,de,ee,z,te,ye,be,pe,q,Q,A,T,J,X,le,$,ge,_e,oe=l[0].type,Z=[];for(let E=0;E<oe.length;E+=1)Z[E]=Xe(Je(l,oe,E));let ue=l[0].moves,v=[];for(let E=0;E<ue.length;E+=1)v[E]=Ze(Qe(l,ue,E));let B=l[0].weakness,P=[];for(let E=0;E<B.length;E+=1)P[E]=xe(ze(l,B,E));return{c(){e=f("div"),t=f("p"),s=h(o),r=S(),c=f("img"),u=S(),i=f("div"),d=f("p"),w=h("Level = "),g=h(R),y=f("br"),W=h(`\r
    HP = `),D=h(U),V=f("br"),C=h(`\r
    Attack = `),F=h(K),I=f("br"),x=h(`\r
    Defense = `),L=h(M),j=f("br"),m=h(`\r
    Speed = `),H=h(k),p=f("br"),N=S(),ce=f("hr"),ie=S(),fe=f("p"),de=h("Type:"),ee=f("br"),z=S();for(let E=0;E<Z.length;E+=1)Z[E].c();te=S(),ye=f("hr"),be=S(),pe=f("p"),q=h("Moves:"),Q=f("br"),A=S();for(let E=0;E<v.length;E+=1)v[E].c();T=S(),J=f("hr"),X=S(),le=f("p"),$=h("Weakness:"),ge=f("br"),_e=S();for(let E=0;E<P.length;E+=1)P[E].c();we(c.src,_=l[0].front_default)||a(c,"src",_),a(c,"alt","front of pokemon"),a(c,"class","card-img pixel svelte-tcuqfi"),a(c,"width","100%"),a(c,"height","100%"),a(e,"class","text-bg-dark text-center rounded-2"),a(i,"class","text-bg-primary text-center rounded-2")},m(E,se){G(E,e,se),n(e,t),n(t,s),n(e,r),n(e,c),G(E,u,se),G(E,i,se),n(i,d),n(d,w),n(d,g),n(d,y),n(d,W),n(d,D),n(d,V),n(d,C),n(d,F),n(d,I),n(d,x),n(d,L),n(d,j),n(d,m),n(d,H),n(d,p),n(i,N),n(i,ce),n(i,ie),n(i,fe),n(fe,de),n(fe,ee),n(fe,z);for(let b=0;b<Z.length;b+=1)Z[b]&&Z[b].m(fe,null);n(i,te),n(i,ye),n(i,be),n(i,pe),n(pe,q),n(pe,Q),n(pe,A);for(let b=0;b<v.length;b+=1)v[b]&&v[b].m(pe,null);n(i,T),n(i,J),n(i,X),n(i,le),n(le,$),n(le,ge),n(le,_e);for(let b=0;b<P.length;b+=1)P[b]&&P[b].m(le,null)},p(E,[se]){if(se&1&&o!==(o=E[0].name+"")&&O(s,o),se&1&&!we(c.src,_=E[0].front_default)&&a(c,"src",_),se&1&&R!==(R=E[0].level+"")&&O(g,R),se&1&&U!==(U=E[0].hp+"")&&O(D,U),se&1&&K!==(K=E[0].attack+"")&&O(F,K),se&1&&M!==(M=E[0].defense+"")&&O(L,M),se&1&&k!==(k=E[0].speed+"")&&O(H,k),se&1){oe=E[0].type;let b;for(b=0;b<oe.length;b+=1){const Ee=Je(E,oe,b);Z[b]?Z[b].p(Ee,se):(Z[b]=Xe(Ee),Z[b].c(),Z[b].m(fe,null))}for(;b<Z.length;b+=1)Z[b].d(1);Z.length=oe.length}if(se&1){ue=E[0].moves;let b;for(b=0;b<ue.length;b+=1){const Ee=Qe(E,ue,b);v[b]?v[b].p(Ee,se):(v[b]=Ze(Ee),v[b].c(),v[b].m(pe,null))}for(;b<v.length;b+=1)v[b].d(1);v.length=ue.length}if(se&1){B=E[0].weakness;let b;for(b=0;b<B.length;b+=1){const Ee=ze(E,B,b);P[b]?P[b].p(Ee,se):(P[b]=xe(Ee),P[b].c(),P[b].m(le,null))}for(;b<P.length;b+=1)P[b].d(1);P.length=B.length}},i:ne,o:ne,d(E){E&&Y(e),E&&Y(u),E&&Y(i),Ne(Z,E),Ne(v,E),Ne(P,E)}}}function It(l,e,t){let{selected_pokemon:o}=e;return l.$$set=s=>{"selected_pokemon"in s&&t(0,o=s.selected_pokemon)},[o]}class et extends Le{constructor(e){super(),Re(this,e,It,Lt,Se,{selected_pokemon:0})}}function Ct(l){let e,t,o,s,r,c,_,u,i,d;return{c(){e=f("div"),t=f("p"),t.textContent=`${l[2]}`,o=S(),s=f("img"),c=S(),_=f("div"),u=f("button"),u.textContent="Choose",we(s.src,r=l[0].front_default)||a(s,"src",r),a(s,"alt","front of pokemon"),a(s,"class","img-fluid pixel svelte-tcuqfi"),a(u,"data-bs-dismiss","modal"),a(u,"type","button"),a(u,"class","btn mt-2"),Pe(u,"background-color","#4da6ff"),a(_,"class","d-grid gap-3"),a(e,"class","text-bg-dark text-center rounded-2")},m(w,R){G(w,e,R),n(e,t),n(e,o),n(e,s),n(e,c),n(e,_),n(_,u),i||(d=re(u,"click",l[3]),i=!0)},p(w,[R]){R&1&&!we(s.src,r=w[0].front_default)&&a(s,"src",r)},i:ne,o:ne,d(w){w&&Y(e),i=!1,d()}}}function Bt(l,e,t){let o=ft(),{selected_pokemon:s}=e,r=s.name;const c=()=>{o("choosen",s)};return l.$$set=_=>{"selected_pokemon"in _&&t(0,s=_.selected_pokemon)},[s,o,r,c]}class it extends Le{constructor(e){super(),Re(this,e,Bt,Ct,Se,{selected_pokemon:0})}}function tt(l,e,t){const o=l.slice();return o[7]=e[t],o}function lt(l,e,t){const o=l.slice();return o[7]=e[t],o}function Pt(l){let e,t;return e=new Rt({props:{selected_pokemonA:l[1],selected_pokemonB:l[2]}}),e.$on("return",l[4]),{c(){Ae(e.$$.fragment)},m(o,s){ve(e,o,s),t=!0},p(o,s){const r={};s&2&&(r.selected_pokemonA=o[1]),s&4&&(r.selected_pokemonB=o[2]),e.$set(r)},i(o){t||(ae(e.$$.fragment,o),t=!0)},o(o){me(e.$$.fragment,o),t=!1},d(o){ke(e,o)}}}function Dt(l){let e,t,o,s,r,c,_,u,i,d,w,R,g,y,W=l[1].name+"",U,D,V,C,K,F=l[2].name+"",I,x,M,L,j,m,k,H;return s=new et({props:{selected_pokemon:l[1]}}),j=new et({props:{selected_pokemon:l[2]}}),{c(){e=f("div"),t=f("div"),o=f("div"),Ae(s.$$.fragment),r=S(),c=f("div"),_=f("div"),u=f("p"),u.textContent="VS",i=S(),d=f("button"),d.textContent="BATTLE!",w=S(),R=f("div"),g=f("button"),y=h("Change "),U=h(W),D=h("!"),V=S(),C=f("button"),K=h("Change "),I=h(F),x=h("!"),M=S(),L=f("div"),Ae(j.$$.fragment),a(o,"class","col-sm-3 p-3 bg-primary text-white"),a(u,"class","h1 mt-5"),a(d,"type","button"),a(d,"class","btn btn-lg mt-5"),Pe(d,"background-color","#eb564b"),a(g,"data-bs-toggle","modal"),a(g,"data-bs-target","#choosePokemonA"),a(g,"type","button"),a(g,"class","btn mt-2"),Pe(g,"background-color","#4da6ff"),a(C,"data-bs-toggle","modal"),a(C,"data-bs-target","#choosePokemonB"),a(C,"type","button"),a(C,"class","btn mt-2"),Pe(C,"background-color","#4da6ff"),a(R,"class","d-grid gap-3 mt-5"),a(_,"class","text-center"),a(c,"class","col p-3 text-white"),a(L,"class","col-sm-3 p-3 bg-primary text-white"),a(t,"class","row"),a(e,"class","container-fluid mt-3")},m(p,N){G(p,e,N),n(e,t),n(t,o),ve(s,o,null),n(t,r),n(t,c),n(c,_),n(_,u),n(_,i),n(_,d),n(_,w),n(_,R),n(R,g),n(g,y),n(g,U),n(g,D),n(R,V),n(R,C),n(C,K),n(C,I),n(C,x),n(t,M),n(t,L),ve(j,L,null),m=!0,k||(H=re(d,"click",l[3]),k=!0)},p(p,N){const ce={};N&2&&(ce.selected_pokemon=p[1]),s.$set(ce),(!m||N&2)&&W!==(W=p[1].name+"")&&O(U,W),(!m||N&4)&&F!==(F=p[2].name+"")&&O(I,F);const ie={};N&4&&(ie.selected_pokemon=p[2]),j.$set(ie)},i(p){m||(ae(s.$$.fragment,p),ae(j.$$.fragment,p),m=!0)},o(p){me(s.$$.fragment,p),me(j.$$.fragment,p),m=!1},d(p){p&&Y(e),ke(s),ke(j),k=!1,H()}}}function nt(l){let e,t;return e=new it({props:{selected_pokemon:l[7]}}),e.$on("choosen",l[5]),{c(){Ae(e.$$.fragment)},m(o,s){ve(e,o,s),t=!0},p:ne,i(o){t||(ae(e.$$.fragment,o),t=!0)},o(o){me(e.$$.fragment,o),t=!1},d(o){ke(e,o)}}}function ot(l){let e,t;return e=new it({props:{selected_pokemon:l[7]}}),e.$on("choosen",l[6]),{c(){Ae(e.$$.fragment)},m(o,s){ve(e,o,s),t=!0},p:ne,i(o){t||(ae(e.$$.fragment,o),t=!0)},o(o){me(e.$$.fragment,o),t=!1},d(o){ke(e,o)}}}function Nt(l){let e,t,o,s,r,c,_,u,i,d,w,R,g,y,W,U,D;const V=[Dt,Pt],C=[];function K(m,k){return m[0]===!1?0:1}e=K(l),t=C[e]=V[e](l);let F=Be,I=[];for(let m=0;m<F.length;m+=1)I[m]=nt(lt(l,F,m));const x=m=>me(I[m],1,1,()=>{I[m]=null});let M=Be,L=[];for(let m=0;m<M.length;m+=1)L[m]=ot(tt(l,M,m));const j=m=>me(L[m],1,1,()=>{L[m]=null});return{c(){t.c(),o=S(),s=f("div"),r=f("div"),c=f("div"),_=f("div"),_.innerHTML=`<h4 class="modal-title">Pokemon Selector</h4> 
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>`,u=S(),i=f("div");for(let m=0;m<I.length;m+=1)I[m].c();d=S(),w=f("div"),R=f("div"),g=f("div"),y=f("div"),y.innerHTML=`<h4 class="modal-title">Pokemon Selector</h4> 
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>`,W=S(),U=f("div");for(let m=0;m<L.length;m+=1)L[m].c();a(_,"class","modal-header"),a(i,"class","modal-body"),a(c,"class","modal-content"),a(r,"class","modal-dialog"),a(s,"class","modal"),a(s,"id","choosePokemonA"),a(y,"class","modal-header"),a(U,"class","modal-body"),a(g,"class","modal-content"),a(R,"class","modal-dialog"),a(w,"class","modal"),a(w,"id","choosePokemonB")},m(m,k){C[e].m(m,k),G(m,o,k),G(m,s,k),n(s,r),n(r,c),n(c,_),n(c,u),n(c,i);for(let H=0;H<I.length;H+=1)I[H]&&I[H].m(i,null);G(m,d,k),G(m,w,k),n(w,R),n(R,g),n(g,y),n(g,W),n(g,U);for(let H=0;H<L.length;H+=1)L[H]&&L[H].m(U,null);D=!0},p(m,[k]){let H=e;if(e=K(m),e===H?C[e].p(m,k):(Fe(),me(C[H],1,1,()=>{C[H]=null}),Ye(),t=C[e],t?t.p(m,k):(t=C[e]=V[e](m),t.c()),ae(t,1),t.m(o.parentNode,o)),k&2){F=Be;let p;for(p=0;p<F.length;p+=1){const N=lt(m,F,p);I[p]?(I[p].p(N,k),ae(I[p],1)):(I[p]=nt(N),I[p].c(),ae(I[p],1),I[p].m(i,null))}for(Fe(),p=F.length;p<I.length;p+=1)x(p);Ye()}if(k&4){M=Be;let p;for(p=0;p<M.length;p+=1){const N=tt(m,M,p);L[p]?(L[p].p(N,k),ae(L[p],1)):(L[p]=ot(N),L[p].c(),ae(L[p],1),L[p].m(U,null))}for(Fe(),p=M.length;p<L.length;p+=1)j(p);Ye()}},i(m){if(!D){ae(t);for(let k=0;k<F.length;k+=1)ae(I[k]);for(let k=0;k<M.length;k+=1)ae(L[k]);D=!0}},o(m){me(t),I=I.filter(Boolean);for(let k=0;k<I.length;k+=1)me(I[k]);L=L.filter(Boolean);for(let k=0;k<L.length;k+=1)me(L[k]);D=!1},d(m){C[e].d(m),m&&Y(o),m&&Y(s),Ne(I,m),m&&Y(d),m&&Y(w),Ne(L,m)}}}function $t(l,e,t){let o=!1,s=null,r=null;return s=Be[0],r=Be[1],[o,s,r,()=>{t(0,o=!0)},()=>{t(0,o=!1)},d=>{t(1,s=d.detail)},d=>{t(2,r=d.detail)}]}class Wt extends Le{constructor(e){super(),Re(this,e,$t,Nt,Se,{})}}function Ot(l){let e,t,o,s,r,c,_,u,i,d;return{c(){e=f("footer"),t=f("p"),t.innerHTML=`Brewed by Svelte<br/>
    Designed by Bootstrap 5<br/>
    Animated by Animate.css<br/>
    Data handled by Firebase`,o=S(),s=f("div"),r=f("div"),r.innerHTML='<p class="p-3 small">Made by realSkyQuest -</p>',c=S(),_=f("div"),u=f("button"),u.textContent="Github",a(t,"class","p-3 small"),a(r,"class","col-sm-2"),a(u,"type","button"),a(u,"class","btn text-light"),Pe(u,"background-color","#4da6ff"),a(_,"class","col-sm-2"),a(s,"class","row justify-content-center align-items-center"),a(e,"class","mt-3 p-4 text-bg-dark text-center")},m(w,R){G(w,e,R),n(e,t),n(e,o),n(e,s),n(s,r),n(s,c),n(s,_),n(_,u),i||(d=re(u,"click",l[0]),i=!0)},p:ne,i:ne,o:ne,d(w){w&&Y(e),i=!1,d()}}}function Ht(l){return[()=>{window.location.href="https://github.com/realskyquest/pokebattle"}]}class Ut extends Le{constructor(e){super(),Re(this,e,Ht,Ot,Se,{})}}function Ft(l){let e,t,o,s,r,c,_;return t=new wt({}),s=new Wt({}),c=new Ut({}),{c(){e=f("main"),Ae(t.$$.fragment),o=S(),Ae(s.$$.fragment),r=S(),Ae(c.$$.fragment)},m(u,i){G(u,e,i),ve(t,e,null),n(e,o),ve(s,e,null),n(e,r),ve(c,e,null),_=!0},p:ne,i(u){_||(ae(t.$$.fragment,u),ae(s.$$.fragment,u),ae(c.$$.fragment,u),_=!0)},o(u){me(t.$$.fragment,u),me(s.$$.fragment,u),me(c.$$.fragment,u),_=!1},d(u){u&&Y(e),ke(t),ke(s),ke(c)}}}class Yt extends Le{constructor(e){super(),Re(this,e,null,Ft,Se,{})}}new Yt({target:document.getElementById("app")});
