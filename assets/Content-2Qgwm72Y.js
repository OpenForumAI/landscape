import{c as O,a as Ie,b as ee,o as te,u as ye,i as w,d as F,e as g,t as S,f as Ne,g as L,h as m,s as ne,S as C,L as Me,N as Ue,j as re,k as ie,F as De,l as Pe,m as Qe,n as Ve,I as Be,p as Ge,q as He,r as Je}from"./index-BEe55zEt.js";let o;const je=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&je.decode();let G=null;function K(){return(G===null||G.byteLength===0)&&(G=new Uint8Array(o.memory.buffer)),G}function z(n,e){return n=n>>>0,je.decode(K().subarray(n,n+e))}let N=0;const X=typeof TextEncoder<"u"?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},Ke=typeof X.encodeInto=="function"?function(n,e){return X.encodeInto(n,e)}:function(n,e){const t=X.encode(n);return e.set(t),{read:n.length,written:t.length}};function H(n,e,t){if(t===void 0){const b=X.encode(n),x=e(b.length,1)>>>0;return K().subarray(x,x+b.length).set(b),N=b.length,x}let r=n.length,i=e(r,1)>>>0;const a=K();let s=0;for(;s<r;s++){const b=n.charCodeAt(s);if(b>127)break;a[i+s]=b}if(s!==r){s!==0&&(n=n.slice(s)),i=t(i,r,r=s+n.length*3,1)>>>0;const b=K().subarray(i+s,i+r),x=Ke(n,b);s+=x.written,i=t(i,r,s,1)>>>0}return N=s,i}function ke(n){return n==null}let I=null;function j(){return(I===null||I.buffer.detached===!0||I.buffer.detached===void 0&&I.buffer!==o.memory.buffer)&&(I=new DataView(o.memory.buffer)),I}function oe(n){const e=typeof n;if(e=="number"||e=="boolean"||n==null)return`${n}`;if(e=="string")return`"${n}"`;if(e=="symbol"){const i=n.description;return i==null?"Symbol":`Symbol(${i})`}if(e=="function"){const i=n.name;return typeof i=="string"&&i.length>0?`Function(${i})`:"Function"}if(Array.isArray(n)){const i=n.length;let a="[";i>0&&(a+=oe(n[0]));for(let s=1;s<i;s++)a+=", "+oe(n[s]);return a+="]",a}const t=/\[object ([^\]]+)\]/.exec(toString.call(n));let r;if(t.length>1)r=t[1];else return toString.call(n);if(r=="Object")try{return"Object("+JSON.stringify(n)+")"}catch{return"Object"}return n instanceof Error?`${n.name}: ${n.message}
${n.stack}`:r}const me=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>{o.__wbindgen_export_3.get(n.dtor)(n.a,n.b)});function Xe(n,e,t,r){const i={a:n,b:e,cnt:1,dtor:t},a=(...s)=>{i.cnt++;const b=i.a;i.a=0;try{return r(b,i.b,...s)}finally{--i.cnt===0?(o.__wbindgen_export_3.get(i.dtor)(b,i.b),me.unregister(i)):i.a=b}};return a.original=i,me.register(a,i,i),a}function Ye(n,e,t){o.closure50_externref_shim(n,e,t)}function Ze(n,e){if(!(n instanceof e))throw new Error(`expected instance of ${e.name}`);return n.ptr}function he(n){const e=o.__wbindgen_export_2.get(n);return o.__externref_table_dealloc(n),e}function Ae(n,e){n=n>>>0;const t=j(),r=[];for(let i=n;i<n+4*e;i+=4)r.push(o.__wbindgen_export_2.get(t.getUint32(i,!0)));return o.__externref_drop_slice(n,e),r}function et(n){const e=o.__externref_table_alloc();return o.__wbindgen_export_2.set(e,n),e}function h(n,e){try{return n.apply(this,e)}catch(t){const r=et(t);o.__wbindgen_exn_store(r)}}function pe(n){return()=>{throw new Error(`${n} is not defined`)}}function tt(n,e,t,r){o.closure26_externref_shim(n,e,t,r)}const xe=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>o.__wbg_currentquestion_free(n>>>0,1));class se{static __wrap(e){e=e>>>0;const t=Object.create(se.prototype);return t.__wbg_ptr=e,xe.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,xe.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_currentquestion_free(e,0)}get answered(){return o.__wbg_get_currentquestion_answered(this.__wbg_ptr)!==0}get index(){return o.__wbg_get_currentquestion_index(this.__wbg_ptr)>>>0}get is_last(){return o.__wbg_get_currentquestion_is_last(this.__wbg_ptr)!==0}}const ve=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>o.__wbg_question_free(n>>>0,1));class _e{static __wrap(e){e=e>>>0;const t=Object.create(_e.prototype);return t.__wbg_ptr=e,ve.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,ve.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_question_free(e,0)}get title(){let e,t;try{const r=o.__wbg_get_question_title(this.__wbg_ptr);return e=r[0],t=r[1],z(r[0],r[1])}finally{o.__wbindgen_free(e,t,1)}}get options(){const e=o.__wbg_get_question_options(this.__wbg_ptr);var t=Ae(e[0],e[1]).slice();return o.__wbindgen_free(e[0],e[1]*4,4),t}}const qe=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>o.__wbg_questionoption_free(n>>>0,1));class ce{static __wrap(e){e=e>>>0;const t=Object.create(ce.prototype);return t.__wbg_ptr=e,qe.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,qe.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_questionoption_free(e,0)}get item(){let e,t;try{const r=o.__wbg_get_questionoption_item(this.__wbg_ptr);return e=r[0],t=r[1],z(r[0],r[1])}finally{o.__wbindgen_free(e,t,1)}}get category(){const e=o.__wbg_get_questionoption_category(this.__wbg_ptr);let t;return e[0]!==0&&(t=z(e[0],e[1]).slice(),o.__wbindgen_free(e[0],e[1]*1,1)),t}get subcategory(){const e=o.__wbg_get_questionoption_subcategory(this.__wbg_ptr);let t;return e[0]!==0&&(t=z(e[0],e[1]).slice(),o.__wbindgen_free(e[0],e[1]*1,1)),t}get correct(){return o.__wbg_get_questionoption_correct(this.__wbg_ptr)!==0}}const $e=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>o.__wbg_quiz_free(n>>>0,1));class Y{static __wrap(e){e=e>>>0;const t=Object.create(Y.prototype);return t.__wbg_ptr=e,$e.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,$e.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_quiz_free(e,0)}constructor(e){let t=0;return ke(e)||(Ze(e,We),t=e.__destroy_into_raw()),o.quiz_new(t)}check_player_guess(e){const t=o.quiz_check_player_guess(this.__wbg_ptr,e);if(t[2])throw he(t[1]);return J.__wrap(t[0])}next_question(){const e=o.quiz_next_question(this.__wbg_ptr);if(e[2])throw he(e[1]);return J.__wrap(e[0])}questions(){const e=o.quiz_questions(this.__wbg_ptr);var t=Ae(e[0],e[1]).slice();return o.__wbindgen_free(e[0],e[1]*4,4),t}state(){const e=o.quiz_state(this.__wbg_ptr);return J.__wrap(e)}}const ze=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>o.__wbg_quizoptions_free(n>>>0,1));class We{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,ze.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_quizoptions_free(e,0)}constructor(e){const t=H(e,o.__wbindgen_malloc,o.__wbindgen_realloc),r=N,i=o.quizoptions_new(t,r);return this.__wbg_ptr=i>>>0,ze.register(this,this.__wbg_ptr,this),this}}const Se=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>o.__wbg_score_free(n>>>0,1));class ae{static __wrap(e){e=e>>>0;const t=Object.create(ae.prototype);return t.__wbg_ptr=e,Se.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Se.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_score_free(e,0)}get correct(){return o.__wbg_get_currentquestion_index(this.__wbg_ptr)>>>0}get wrong(){return o.__wbg_get_score_wrong(this.__wbg_ptr)>>>0}}const Re=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>o.__wbg_state_free(n>>>0,1));class J{static __wrap(e){e=e>>>0;const t=Object.create(J.prototype);return t.__wbg_ptr=e,Re.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Re.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_state_free(e,0)}get current_question(){const e=o.__wbg_get_state_current_question(this.__wbg_ptr);return se.__wrap(e)}get game_over(){return o.__wbg_get_state_game_over(this.__wbg_ptr)!==0}get score(){const e=o.__wbg_get_state_score(this.__wbg_ptr);return ae.__wrap(e)}}async function nt(n,e){if(typeof Response=="function"&&n instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(n,e)}catch(r){if(n.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const t=await n.arrayBuffer();return await WebAssembly.instantiate(t,e)}else{const t=await WebAssembly.instantiate(n,e);return t instanceof WebAssembly.Instance?{instance:t,module:n}:t}}function rt(){const n={};return n.wbg={},n.wbg.__wbg_new_1073970097e5a420=function(e,t){try{var r={a:e,b:t},i=(s,b)=>{const x=r.a;r.a=0;try{return tt(x,r.b,s,b)}finally{r.a=x}};return new Promise(i)}finally{r.a=r.b=0}},n.wbg.__wbindgen_string_new=function(e,t){return z(e,t)},n.wbg.__wbg_question_new=function(e){return _e.__wrap(e)},n.wbg.__wbg_crypto_1d1f22824a6a080c=function(e){return e.crypto},n.wbg.__wbindgen_is_object=function(e){const t=e;return typeof t=="object"&&t!==null},n.wbg.__wbg_process_4a72847cc503995b=function(e){return e.process},n.wbg.__wbg_versions_f686565e586dd935=function(e){return e.versions},n.wbg.__wbg_node_104a2ff8d6ea03a2=function(e){return e.node},n.wbg.__wbindgen_is_string=function(e){return typeof e=="string"},n.wbg.__wbg_require_cca90b1a94a0255b=function(){return h(function(){return module.require},arguments)},n.wbg.__wbindgen_is_function=function(e){return typeof e=="function"},n.wbg.__wbg_msCrypto_eb05e62b530a1508=function(e){return e.msCrypto},n.wbg.__wbg_newwithlength_76462a666eca145f=function(e){return new Uint8Array(e>>>0)},n.wbg.__wbg_instanceof_Error_a0af335a62107964=function(e){let t;try{t=e instanceof Error}catch{t=!1}return t},n.wbg.__wbg_name_aa32a0ae51232604=function(e){return e.name},n.wbg.__wbindgen_string_get=function(e,t){const r=t,i=typeof r=="string"?r:void 0;var a=ke(i)?0:H(i,o.__wbindgen_malloc,o.__wbindgen_realloc),s=N;j().setInt32(e+4*1,s,!0),j().setInt32(e+4*0,a,!0)},n.wbg.__wbg_message_00eebca8fa4dd7db=function(e){return e.message},n.wbg.__wbg_toString_4b677455b9167e31=function(e){return e.toString()},n.wbg.__wbg_toString_aea130fe68d19e1a=function(e){return e.toString()},n.wbg.__wbg_call_3bfa248576352471=function(){return h(function(e,t,r){return e.call(t,r)},arguments)},n.wbg.__wbg_self_bf91bf94d9e04084=function(){return h(function(){return self.self},arguments)},n.wbg.__wbg_window_52dd9f07d03fd5f8=function(){return h(function(){return window.window},arguments)},n.wbg.__wbg_globalThis_05c129bf37fcf1be=function(){return h(function(){return globalThis.globalThis},arguments)},n.wbg.__wbg_global_3eca19bb09e9c484=function(){return h(function(){return global.global},arguments)},n.wbg.__wbindgen_is_undefined=function(e){return e===void 0},n.wbg.__wbg_newnoargs_1ede4bf2ebbaaf43=function(e,t){return new Function(z(e,t))},n.wbg.__wbg_call_a9ef466721e824f2=function(){return h(function(e,t){return e.call(t)},arguments)},n.wbg.__wbg_questionoption_new=function(e){return ce.__wrap(e)},n.wbg.__wbg_new_e69b5f66fda8f13c=function(){return new Object},n.wbg.__wbg_new_ab6fd82b10560829=function(){return h(function(){return new Headers},arguments)},n.wbg.__wbg_new_4c501d7c115d20a6=function(){return h(function(){return new URLSearchParams},arguments)},n.wbg.__wbg_set_e864d25d9b399c9f=function(){return h(function(e,t,r){return Reflect.set(e,t,r)},arguments)},n.wbg.__wbg_newwithstr_36b0b3f97efe096f=function(){return h(function(e,t){return new Request(z(e,t))},arguments)},n.wbg.__wbg_url_7807f6a1fddc3e23=function(e,t){const r=t.url,i=H(r,o.__wbindgen_malloc,o.__wbindgen_realloc),a=N;j().setInt32(e+4*1,a,!0),j().setInt32(e+4*0,i,!0)},n.wbg.__wbg_new_67853c351755d2cf=function(){return h(function(e,t){return new URL(z(e,t))},arguments)},n.wbg.__wbg_setsearch_fd62f4de409a2bb3=function(e,t,r){e.search=z(t,r)},n.wbg.__wbg_newwithstrandinit_3fd6fba4083ff2d0=function(){return h(function(e,t,r){return new Request(z(e,t),r)},arguments)},n.wbg.__wbg_fetch_eeae7120f2a07ede=typeof fetch=="function"?fetch:pe("fetch"),n.wbg.__wbg_instanceof_Response_849eb93e75734b6e=function(e){let t;try{t=e instanceof Response}catch{t=!1}return t},n.wbg.__wbg_status_61a01141acd3cf74=function(e){return e.status},n.wbg.__wbg_text_450a059667fd91fd=function(){return h(function(e){return e.text()},arguments)},n.wbg.__wbg_quiz_new=function(e){return Y.__wrap(e)},n.wbg.__wbindgen_memory=function(){return o.memory},n.wbg.__wbg_buffer_ccaed51a635d8a2d=function(e){return e.buffer},n.wbg.__wbg_newwithbyteoffsetandlength_7e3eb787208af730=function(e,t,r){return new Uint8Array(e,t>>>0,r>>>0)},n.wbg.__wbg_randomFillSync_5c9c955aa56b6049=function(){return h(function(e,t){e.randomFillSync(t)},arguments)},n.wbg.__wbg_subarray_975a06f9dbd16995=function(e,t,r){return e.subarray(t>>>0,r>>>0)},n.wbg.__wbg_getRandomValues_3aa56aa6edec874c=function(){return h(function(e,t){e.getRandomValues(t)},arguments)},n.wbg.__wbg_new_fec2611eb9180f95=function(e){return new Uint8Array(e)},n.wbg.__wbg_set_ec2fcf81bc573fd9=function(e,t,r){e.set(t,r>>>0)},n.wbg.__wbindgen_throw=function(e,t){throw new Error(z(e,t))},n.wbg.__wbindgen_debug_string=function(e,t){const r=oe(t),i=H(r,o.__wbindgen_malloc,o.__wbindgen_realloc),a=N;j().setInt32(e+4*1,a,!0),j().setInt32(e+4*0,i,!0)},n.wbg.__wbindgen_cb_drop=function(e){const t=e.original;return t.cnt--==1?(t.a=0,!0):!1},n.wbg.__wbg_then_4866a7d9f55d8f3e=function(e,t,r){return e.then(t,r)},n.wbg.__wbg_queueMicrotask_848aa4969108a57e=function(e){return e.queueMicrotask},n.wbg.__wbg_resolve_0aad7c1484731c99=function(e){return Promise.resolve(e)},n.wbg.__wbg_then_748f75edfb032440=function(e,t){return e.then(t)},n.wbg.__wbg_queueMicrotask_c5419c06eab41e73=typeof queueMicrotask=="function"?queueMicrotask:pe("queueMicrotask"),n.wbg.__wbg_search_c68f506c44be6d1e=function(e,t){const r=t.search,i=H(r,o.__wbindgen_malloc,o.__wbindgen_realloc),a=N;j().setInt32(e+4*1,a,!0),j().setInt32(e+4*0,i,!0)},n.wbg.__wbindgen_closure_wrapper874=function(e,t,r){return Xe(e,t,51,Ye)},n.wbg.__wbindgen_init_externref_table=function(){const e=o.__wbindgen_export_2,t=e.grow(4);e.set(0,void 0),e.set(t+0,void 0),e.set(t+1,null),e.set(t+2,!0),e.set(t+3,!1)},n}function it(n,e){return o=n.exports,Ee.__wbindgen_wasm_module=e,I=null,G=null,o.__wbindgen_start(),o}async function Ee(n){if(o!==void 0)return o;typeof n<"u"&&(Object.getPrototypeOf(n)===Object.prototype?{module_or_path:n}=n:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),typeof n>"u"&&(n=new URL(""+new URL("landscape2_quiz_bg-BDz-J-_h.wasm",import.meta.url).href,import.meta.url));const e=rt();(typeof n=="string"||typeof Request=="function"&&n instanceof Request||typeof URL=="function"&&n instanceof URL)&&(n=fetch(n));const{instance:t,module:r}=await nt(await n,e);return it(t,r)}const Ce=""+new URL("pattern_quiz-IlvSA3ko.png",import.meta.url).href,ot="_wrapper_oi1xy_1",st="_startBtn_oi1xy_6",_t="_header_oi1xy_11",ct="_dot_oi1xy_16",at="_dotCorrect_oi1xy_23",ut="_dotWrong_oi1xy_27",lt="_game_oi1xy_31",gt="_quizContent_oi1xy_39",bt="_title_oi1xy_43",dt="_btn_oi1xy_53",ft="_option_oi1xy_57",wt="_selected_oi1xy_65",yt="_answered_oi1xy_69",mt="_logoContent_oi1xy_73",ht="_logoWrapper_oi1xy_77",pt="_logo_oi1xy_73",xt="_item_oi1xy_87",vt="_itemName_oi1xy_92",qt="_correct_oi1xy_96",$t="_wrong_oi1xy_100",zt="_questionLabel_oi1xy_104",St="_buttons_oi1xy_108",_={wrapper:ot,startBtn:st,header:_t,dot:ct,dotCorrect:at,dotWrong:ut,game:lt,quizContent:gt,title:bt,btn:dt,option:ft,selected:wt,answered:yt,logoContent:mt,logoWrapper:ht,logo:pt,item:xt,itemName:vt,correct:qt,wrong:$t,questionLabel:zt,buttons:St},Rt="_container_n6oll_1",Ct="_text_n6oll_6",Fe={container:Rt,text:Ct};var Ft=S("<div><div>");const jt=n=>{const e=()=>n.content,[t,r]=O(),[i,a]=O(),[s,b]=O(100),x=Ie(),Z=()=>x.width,M=()=>{i()&&t()&&i().offsetHeight>t().offsetHeight&&b(s()-5)};return ee(te(s,()=>{M()})),ee(te(Z,()=>{M()})),ee(te(e,()=>{b(100),M()})),(()=>{var k=Ft(),T=k.firstChild;return ye(r,k),ye(a,T),w(T,e),F(v=>{var q=`position-relative w-100 h-100 ${Fe.container}`,A=`position-absolute w-100 text-center ${Fe.text}`,U=`${s()}%`;return q!==v.e&&g(k,v.e=q),A!==v.t&&g(T,v.t=A),U!==v.a&&((v.a=U)!=null?T.style.setProperty("font-size",U):T.style.removeProperty("font-size")),v},{e:void 0,t:void 0,a:void 0}),k})()};var kt=S('<div class="d-flex flex-row justify-content-between justify-content-xl-start text-light"><div class=fw-semibold> / </div><div class="d-flex flex-row align-items-center ms-4 ms-xl-5"><div></div><div></div><div></div><div>'),At=S('<button aria-label="Start new game">New game'),Wt=S('<div class="flex-grow-1 d-flex flex-column align-items-center justify-content-center h-100 w-100">'),Et=S('<div class="flex-grow-1 d-flex flex-column align-items-center justify-content-center h-100 w-100"><button aria-label="Start game">New game'),Lt=S('<div class="d-block d-xl-none"><button aria-label="Start new game">New game'),Ot=S('<div class="w-100 text-center"><button aria-label="Play again">Play again'),Tt=S('<div class=ms-auto><button aria-label="Next question">Next'),It=S('<div class="d-flex flex-column h-100"><div><div></div><div class="d-flex flex-column flex-lg-row flex-wrap justify-content-center mt-0 mt-lg-3"></div></div><div>'),Nt=S('<div aria-relevant=all aria-live=assertive><div><div><div class="fw-semibold text-light text-uppercase">Landscape Quiz</div></div><div><div class=col></div><div class="col d-none d-xl-block text-center"><div class="fw-semibold text-light text-uppercase">Landscape Quiz</div></div><div class="d-none d-xl-block col text-end">'),Mt=S("<div role=button><div><div></div></div><div><div>");const Dt=()=>{const[n,e]=O(!1),[t,r]=O(null),[i,a]=O(),[s,b]=O(null),[x,Z]=O(),M=async v=>{const q=new We(location.origin),A=await new Y(q);r(A),v&&a(A.state())},k=()=>{a(void 0),b(null),M(!0)},T=async()=>{if(Je())await Ee(),e(!0),M();else return Z("This game requires WebAssembly, but your browser doesn't seem to support it"),e(!0),Promise.reject("WebAssembly is not supported in this browser")};return Ne(()=>{L(window.baseDS.games_available)||T()}),(()=>{var v=Nt(),q=v.firstChild,A=q.firstChild,U=A.nextSibling,ue=U.firstChild,Le=ue.nextSibling,Oe=Le.nextSibling;return`url(${Ce})`!=null?q.style.setProperty("background-image",`url(${Ce})`):q.style.removeProperty("background-image"),w(ue,m(C,{get when(){return!L(i())},get children(){var l=kt(),p=l.firstChild,W=p.firstChild,D=p.nextSibling,R=D.firstChild,c=R.nextSibling,f=c.nextSibling,d=f.nextSibling;return w(p,()=>i().current_question.index+1,W),w(p,()=>t().questions().length,null),w(c,()=>i().score.correct),w(d,()=>i().score.wrong),F(u=>{var $=`question ${i().current_question.index+1} of ${t().questions().length}`,E=`border border-2 border-light ${_.dot} ${_.dotCorrect}`,P=`ms-2 fw-semibold ${_.score}`,V=`${i().score.correct} correct guesses`,Q=`ms-3 ms-xl-4 border border-2 border-light ${_.dot} ${_.dotWrong}`,B=`ms-2 fw-semibold ${_.score}`,y=`${i().score.correct} wrong guesses`;return $!==u.e&&ne(p,"aria-label",u.e=$),E!==u.t&&g(R,u.t=E),P!==u.a&&g(c,u.a=P),V!==u.o&&ne(c,"aria-label",u.o=V),Q!==u.i&&g(f,u.i=Q),B!==u.n&&g(d,u.n=B),y!==u.s&&ne(d,"aria-label",u.s=y),u},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),l}})),w(Oe,m(C,{get when(){return!L(i())},get children(){var l=At();return l.$$click=k,F(()=>g(l,`btn btn-secondary rounded-0 text-uppercase border border-4 border-light ${_.btn}`)),l}})),w(q,m(C,{get when(){return!n()},get children(){return m(Me,{})}}),null),w(q,m(C,{get when(){return!L(x())},get children(){var l=Wt();return w(l,m(Ue,{class:"bg-light fs-5",get children(){return x()}})),l}}),null),w(q,m(C,{get when(){return re(()=>!ie(t()))()&&L(i())},get children(){var l=Et(),p=l.firstChild;return p.$$click=()=>a(t().state()),F(()=>g(p,`btn btn-secondary rounded-0 text-uppercase border border-4 border-light ${_.btn}`)),l}}),null),w(q,m(C,{get when(){return re(()=>!L(i()))()&&!ie(i())},get children(){var l=It(),p=l.firstChild,W=p.firstChild,D=W.nextSibling,R=p.nextSibling;return w(W,m(jt,{get content(){return t().questions()[i().current_question.index].title}})),w(D,m(De,{get each(){return t().questions()[i().current_question.index].options},children:(c,f)=>{const d=Pe.getLogoItem(c.item,c.category,c.subcategory);if(ie(d))return null;const u=()=>i().current_question.answered&&c.correct,$=()=>i().current_question.answered&&!c.correct&&s()===f();return(()=>{var E=Mt(),P=E.firstChild,V=P.firstChild,Q=P.nextSibling,B=Q.firstChild;return E.$$click=()=>{i().current_question.answered||(b(f()),a(t().check_player_guess(f())))},w(V,m(C,{get when(){return!L(d)},get fallback(){return m(Qe,{get kind(){return Ve.NotImage},get class(){return`opacity-25 m-auto w-100 ${_.logo}`}})},get children(){return m(Be,{logo:d,get class(){return`m-auto w-100 ${_.logo}`},ariaHidden:!0})}})),w(B,()=>c.item),F(y=>{var le=`d-flex flex-row flex-lg-column border border-4 border-dark bg-white mx-auto mx-lg-4 my-2 my-md-3 ${_.option}`,Te={[_.answered]:i().current_question.answered,[_.selected]:s()===f(),[_.correct]:u(),[_.wrong]:$()},ge=`d-flex align-items-center ${_.logoContent}`,be=`position-relative d-flex align-items-center m-auto p-1 p-xl-3 ${_.logoWrapper}`,de=`d-flex align-items-center justify-content-start justify-content-lg-center fw-semibold px-3 px-lg-2 py-2 py-md-3 py-lg-2 ${_.item}`,fe=!!(u()||$()),we=`w-100 text-lg-center text-truncate ${_.itemName}`;return le!==y.e&&g(E,y.e=le),y.t=Ge(E,Te,y.t),ge!==y.a&&g(P,y.a=ge),be!==y.o&&g(V,y.o=be),de!==y.i&&g(Q,y.i=de),fe!==y.n&&Q.classList.toggle("text-white",y.n=fe),we!==y.s&&g(B,y.s=we),y},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),E})()}})),w(R,m(C,{get when(){return re(()=>!L(i()))()&&!i().current_question.is_last},get children(){var c=Lt(),f=c.firstChild;return f.$$click=k,F(()=>g(f,`btn btn-secondary rounded-0 text-uppercase border border-4 border-light ${_.btn}`)),c}}),null),w(R,m(C,{get when(){return i().game_over},get children(){var c=Ot(),f=c.firstChild;return f.$$click=k,F(d=>{var u=`btn btn-secondary rounded-0 text-uppercase border border-4 border-light ${_.btn}`,$=!i().current_question.answered;return u!==d.e&&g(f,d.e=u),$!==d.t&&(f.disabled=d.t=$),d},{e:void 0,t:void 0}),c}}),null),w(R,m(C,{get when(){return!i().current_question.is_last},get children(){var c=Tt(),f=c.firstChild;return f.$$click=()=>{b(null),a(t().next_question())},F(d=>{var u=`btn btn-secondary rounded-0 text-uppercase border border-4 border-light ${_.btn}`,$=!i().current_question.answered;return u!==d.e&&g(f,d.e=u),$!==d.t&&(f.disabled=d.t=$),d},{e:void 0,t:void 0}),c}}),null),F(c=>{var f=`flex-grow-1 d-flex flex-column mx-auto py-4 ${_.quizContent}`,d=`d-flex align-items-center justify-content-center border border-4 border-dark text-center mb-3 mb-xl-5 bg-white ${_.title}`,u=`position-relative d-flex flex-row justify-content-between mt-auto py-2 py-xl-4 ${_.buttons}`;return f!==c.e&&g(p,c.e=f),d!==c.t&&g(W,c.t=d),u!==c.a&&g(R,c.a=u),c},{e:void 0,t:void 0,a:void 0}),l}}),null),F(l=>{var p=`d-flex flex-column h-100 ${_.wrapper}`,W=`d-flex flex-column border flex-grow-1 mt-3 ${_.game}`,D=`d-block d-xl-none text-center ${_.header}`,R=`row mt-2 mt-lg-0 mb-0 mb-xl-5 ${_.header}`;return p!==l.e&&g(v,l.e=p),W!==l.t&&g(q,l.t=W),D!==l.a&&g(A,l.a=D),R!==l.o&&g(U,l.o=R),l},{e:void 0,t:void 0,a:void 0,o:void 0}),v})()};He(["click"]);export{Dt as default};