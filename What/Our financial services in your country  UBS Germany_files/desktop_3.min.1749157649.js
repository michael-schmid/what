window.Modernizr=function(X,W,V){function E(b){P.cssText=b
}function D(d,c){return E(prefixes.join(d+";")+(c||""))
}function C(d,c){return typeof d===c
}function B(d,c){return !!~(""+d).indexOf(c)
}function A(g,c,j){for(var i in g){var h=c[g[i]];
if(h!==V){return j===!1?g[i]:C(h,"function")?h.bind(j||c):h
}}return !1
}var U="2.6.1",T={},S=W.documentElement,R="modernizr",Q=W.createElement(R),P=Q.style,O,N={}.toString,M={},L={},K={},J=[],I=J.slice,H,G={}.hasOwnProperty,F;
!C(G,"undefined")&&!C(G.call,"undefined")?F=function(d,c){return G.call(d,c)
}:F=function(d,c){return c in d&&C(d.constructor.prototype[c],"undefined")
},Function.prototype.bind||(Function.prototype.bind=function(a){var h=this;
if(typeof h!="function"){throw new TypeError
}var g=I.call(arguments,1),f=function(){if(this instanceof f){var b=function(){};
b.prototype=h.prototype;
var d=new b,c=h.apply(d,g.concat(I.call(arguments)));
return Object(c)===c?c:d
}return h.apply(a,g.concat(I.call(arguments)))
};
return f
}),M.canvas=function(){var b=W.createElement("canvas");
return !!b.getContext&&!!b.getContext("2d")
},M.canvastext=function(){return !!T.canvas&&!!C(W.createElement("canvas").getContext("2d").fillText,"function")
},M.localstorage=function(){try{return localStorage.setItem(R,R),localStorage.removeItem(R),!0
}catch(b){return !1
}},M.sessionstorage=function(){try{return sessionStorage.setItem(R,R),sessionStorage.removeItem(R),!0
}catch(b){return !1
}};
for(var z in M){F(M,z)&&(H=z.toLowerCase(),T[H]=M[z](),J.push((T[H]?"":"no-")+H))
}return T.addTest=function(e,c){if(typeof e=="object"){for(var f in e){F(e,f)&&T.addTest(f,e[f])
}}else{e=e.toLowerCase();
if(T[e]!==V){return T
}c=typeof c=="function"?c():c,enableClasses&&(S.className+=" "+(c?"":"no-")+e),T[e]=c
}return T
},E(""),Q=O=null,T._version=U,T
}(this,this.document);
/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)
},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()
},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())
},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))
};
x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;
if(!e){return this
}if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n){return !n||n.jquery?(n||r).find(e):this.constructor(n).find(e)
}if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n)){for(i in n){x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i])
}}return this
}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2]){return r.find(e)
}this.length=1,this[0]=o
}return this.context=a,this.selector=e,this
}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))
},selector:"",length:0,toArray:function(){return g.call(this)
},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]
},pushStack:function(e){var t=x.merge(this.constructor(),e);
return t.prevObject=this,t.context=this.context,t
},each:function(e,t){return x.each(this,e,t)
},ready:function(e){return x.ready.promise().done(e),this
},slice:function(){return this.pushStack(g.apply(this,arguments))
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},eq:function(e){var t=this.length,n=+e+(0>e?t:0);
return this.pushStack(n>=0&&t>n?[this[n]]:[])
},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)
}))
},end:function(){return this.prevObject||this.constructor(null)
},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;
for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);
u>l;
l++){if(null!=(o=arguments[l])){for(i in o){e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r))
}}}return s
},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x
},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)
},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body){return setTimeout(x.ready)
}x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))
}},isFunction:function(e){return"function"===x.type(e)
},isArray:Array.isArray||function(e){return"array"===x.type(e)
},isWindow:function(e){return null!=e&&e==e.window
},isNumeric:function(e){return !isNaN(parseFloat(e))&&isFinite(e)
},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e
},isPlainObject:function(e){var n;
if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e)){return !1
}try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf")){return !1
}}catch(r){return !1
}if(x.support.ownLast){for(n in e){return v.call(e,n)
}}for(n in e){}return n===t||v.call(e,n)
},isEmptyObject:function(e){var t;
for(t in e){return !1
}return !0
},error:function(e){throw Error(e)
},parseHTML:function(e,t,n){if(!e||"string"!=typeof e){return null
}"boolean"==typeof t&&(n=t,t=!1),t=t||a;
var r=k.exec(e),i=!n&&[];
return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))
},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)
},parseXML:function(n){var r,i;
if(!n||"string"!=typeof n){return null
}try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))
}catch(o){r=t
}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r
},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)
})(t)
},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)
},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()
},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);
if(n){if(a){for(;
o>i;
i++){if(r=t.apply(e[i],n),r===!1){break
}}}else{for(i in e){if(r=t.apply(e[i],n),r===!1){break
}}}}else{if(a){for(;
o>i;
i++){if(r=t.call(e[i],i,e[i]),r===!1){break
}}}else{for(i in e){if(r=t.call(e[i],i,e[i]),r===!1){break
}}}}return e
},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)
}:function(e){return null==e?"":(e+"").replace(C,"")
},makeArray:function(e,t){var n=t||[];
return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n
},inArray:function(e,t,n){var r;
if(t){if(m){return m.call(t,e,n)
}for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;
r>n;
n++){if(n in t&&t[n]===e){return n
}}}return -1
},merge:function(e,n){var r=n.length,i=e.length,o=0;
if("number"==typeof r){for(;
r>o;
o++){e[i++]=n[o]
}}else{while(n[o]!==t){e[i++]=n[o++]
}}return e.length=i,e
},grep:function(e,t,n){var r,i=[],o=0,a=e.length;
for(n=!!n;
a>o;
o++){r=!!t(e[o],o),n!==r&&i.push(e[o])
}return i
},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];
if(a){for(;
o>i;
i++){r=t(e[i],i,n),null!=r&&(s[s.length]=r)
}}else{for(i in e){r=t(e[i],i,n),null!=r&&(s[s.length]=r)
}}return d.apply([],s)
},guid:1,proxy:function(e,n){var r,i,o;
return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))
},i.guid=e.guid=e.guid||x.guid++,i):t
},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;
if("object"===x.type(r)){o=!0;
for(l in r){x.access(e,n,l,r[l],!0,a,s)
}}else{if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)
})),n)){for(;
u>l;
l++){n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)))
}}}return o?e:c?n.call(e):u?n(e[0],r):a
},now:function(){return(new Date).getTime()
},swap:function(e,t,n,r){var i,o,a={};
for(o in t){a[o]=e.style[o],e.style[o]=t[o]
}i=n.apply(e,r||[]);
for(o in t){e.style[o]=a[o]
}return i
}}),x.ready.promise=function(t){if(!n){if(n=x.Deferred(),"complete"===a.readyState){setTimeout(x.ready)
}else{if(a.addEventListener){a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1)
}else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);
var r=!1;
try{r=null==e.frameElement&&a.documentElement
}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")
}catch(e){return setTimeout(o,50)
}_(),x.ready()
}}()
}}}return n.promise(t)
},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()
});
function M(e){var t=e.length,n=x.type(e);
return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)
}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0
},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;
for(;
n>t;
t++){if(this[t]===e){return t
}}return -1
},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;
return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)
};
try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType
}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))
}:function(e,t){var n=e.length,r=0;
while(e[n++]=t[r++]){}e.length=n-1
}}
}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;
if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e){return n
}if(1!==(l=t.nodeType)&&9!==l){return[]
}if(h&&!i){if(o=Z.exec(e)){if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode){return n
}if(a.id===s){return n.push(a),n
}}else{if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s){return n.push(a),n
}}}else{if(o[2]){return M.apply(n,t.getElementsByTagName(e)),n
}if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName){return M.apply(n,t.getElementsByClassName(s)),n
}}}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;
while(u--){c[u]=m+yt(c[u])
}y=V.test(e)&&t.parentNode||t,x=c.join(",")
}if(x){try{return M.apply(n,y.querySelectorAll(x)),n
}catch(T){}finally{d||t.removeAttribute("id")
}}}}return kt(e.replace(z,"$1"),t,n,i)
}function st(){var e=[];
function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r
}return t
}function lt(e){return e[b]=!0,e
}function ut(e){var t=f.createElement("div");
try{return !!e(t)
}catch(n){return !1
}finally{t.parentNode&&t.parentNode.removeChild(t),t=null
}}function ct(e,t){var n=e.split("|"),r=e.length;
while(r--){o.attrHandle[n[r]]=t
}}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);
if(r){return r
}if(n){while(n=n.nextSibling){if(n===t){return -1
}}}return e?1:-1
}function ft(e){return function(t){var n=t.nodeName.toLowerCase();
return"input"===n&&t.type===e
}
}function dt(e){return function(t){var n=t.nodeName.toLowerCase();
return("input"===n||"button"===n)&&t.type===e
}
}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;
while(a--){n[i=o[a]]&&(n[i]=!(r[i]=n[i]))
}})
})
}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;
return t?"HTML"!==t.nodeName:!1
},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;
return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()
}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")
}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length
}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length
}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length
}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);
return n&&n.parentNode?[n]:[]
}},o.filter.ID=function(e){var t=e.replace(rt,it);
return function(e){return e.getAttribute("id")===t
}
}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);
return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");
return n&&n.value===t
}
}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t
}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);
if("*"===e){while(n=o[i++]){1===n.nodeType&&r.push(n)
}return r
}return o
},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t
},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")
}),ut(function(e){var t=n.createElement("input");
t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")
})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)
}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;
return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))
}:function(e,t){if(t){while(t=t.parentNode){if(t===e){return !0
}}}return !1
},A=d.compareDocumentPosition?function(e,t){if(e===t){return S=!0,0
}var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);
return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1
}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];
if(e===t){return S=!0,0
}if(!o||!a){return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0
}if(o===a){return pt(e,t)
}r=e;
while(r=r.parentNode){s.unshift(r)
}r=t;
while(r=r.parentNode){l.unshift(r)
}while(s[i]===l[i]){i++
}return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0
},n):f
},at.matches=function(e,t){return at(e,null,null,t)
},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t))){try{var n=y.call(e,t);
if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType){return n
}}catch(i){}}return at(t,f,null,[e]).length>0
},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)
},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);
var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;
return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a
},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)
},at.uniqueSort=function(e){var t,n=[],i=0,o=0;
if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++]){t===e[o]&&(i=n.push(o))
}while(i--){e.splice(n[i],1)
}}return e
},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;
if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent){return e.textContent
}for(e=e.firstChild;
e;
e=e.nextSibling){n+=a(e)
}}else{if(3===i||4===i){return e.nodeValue
}}}else{for(;
t=e[r];
r++){n+=a(t)
}}return n
},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)
},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e
},PSEUDO:function(e){var n,r=!e[5]&&e[2];
return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))
}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();
return"*"===e?function(){return !0
}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t
}
},CLASS:function(e){var t=N[e+" "];
return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")
})
},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);
return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0
}
},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;
return 1===r&&0===i?function(e){return !!e.parentNode
}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;
if(m){if(o){while(g){p=t;
while(p=p[g]){if(s?p.nodeName.toLowerCase()===y:1===p.nodeType){return !1
}}h=g="only"===e&&!h&&"nextSibling"
}return !0
}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];
while(p=++d&&p&&p[g]||(f=d=0)||h.pop()){if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];
break
}}}else{if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T){f=u[1]
}else{while(p=++d&&p&&p[g]||(f=d=0)||h.pop()){if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t)){break
}}}}return f-=i,f===r||0===f%r&&f/r>=0
}}
},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);
return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;
while(a--){i=F.call(e,o[a]),e[i]=!(n[i]=o[a])
}}):function(e){return r(e,0,n)
}):r
}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));
return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;
while(s--){(o=a[s])&&(e[s]=!(t[s]=o))
}}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()
}
}),has:lt(function(e){return function(t){return at(e,t).length>0
}
}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1
}
}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;
do{if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang")){return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-")
}}while((t=t.parentNode)&&1===t.nodeType);
return !1
}
}),target:function(t){var n=e.location&&e.location.hash;
return n&&n.slice(1)===t.id
},root:function(e){return e===d
},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)
},enabled:function(e){return e.disabled===!1
},disabled:function(e){return e.disabled===!0
},checked:function(e){var t=e.nodeName.toLowerCase();
return"input"===t&&!!e.checked||"option"===t&&!!e.selected
},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0
},empty:function(e){for(e=e.firstChild;
e;
e=e.nextSibling){if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType){return !1
}}return !0
},parent:function(e){return !o.pseudos.empty(e)
},header:function(e){return tt.test(e.nodeName)
},input:function(e){return et.test(e.nodeName)
},button:function(e){var t=e.nodeName.toLowerCase();
return"input"===t&&"button"===e.type||"button"===t
},text:function(e){var t;
return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)
},first:ht(function(){return[0]
}),last:ht(function(e,t){return[t-1]
}),eq:ht(function(e,t,n){return[0>n?n+t:n]
}),even:ht(function(e,t){var n=0;
for(;
t>n;
n+=2){e.push(n)
}return e
}),odd:ht(function(e,t){var n=1;
for(;
t>n;
n+=2){e.push(n)
}return e
}),lt:ht(function(e,t,n){var r=0>n?n+t:n;
for(;
--r>=0;
){e.push(r)
}return e
}),gt:ht(function(e,t,n){var r=0>n?n+t:n;
for(;
t>++r;
){e.push(r)
}return e
})}},o.pseudos.nth=o.pseudos.eq;
for(n in {radio:!0,checkbox:!0,file:!0,password:!0,image:!0}){o.pseudos[n]=ft(n)
}for(n in {submit:!0,reset:!0}){o.pseudos[n]=dt(n)
}function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;
function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];
if(c){return t?0:c.slice(0)
}s=e,l=[],u=o.preFilter;
while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));
for(a in o.filter){!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length))
}if(!n){break
}}return t?s.length:s?at.error(e):k(e,l).slice(0)
}function yt(e){var t=0,n=e.length,r="";
for(;
n>t;
t++){r+=e[t].value
}return r
}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;
return t.first?function(t,n,i){while(t=t[r]){if(1===t.nodeType||o){return e(t,n,i)
}}}:function(t,n,s){var l,u,c,p=T+" "+a;
if(s){while(t=t[r]){if((1===t.nodeType||o)&&e(t,n,s)){return !0
}}}else{while(t=t[r]){if(1===t.nodeType||o){if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i){return l===!0
}}else{if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0){return !0
}}}}}}
}function bt(e){return e.length>1?function(t,n,r){var i=e.length;
while(i--){if(!e[i](t,n,r)){return !1
}}return !0
}:e[0]
}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;
for(;
l>s;
s++){(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s))
}return a
}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;
if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;
while(c--){(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))
}}if(o){if(i||e){if(i){u=[],c=y.length;
while(c--){(p=y[c])&&u.push(m[c]=p)
}i(null,y=[],u,l)
}c=y.length;
while(c--){(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))
}}}else{y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)
}})
}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t
},s,!0),p=vt(function(e){return F.call(t,e)>-1
},s,!0),f=[function(e,n,r){return !a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))
}];
for(;
i>l;
l++){if(n=o.relative[e[l].type]){f=[vt(bt(f),n)]
}else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;
i>r;
r++){if(o.relative[e[r].type]){break
}}return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))
}f.push(n)
}}return bt(f)
}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||0.1;
for(w&&(u=l!==f&&l,i=n);
null!=(h=N[b]);
b++){if(a&&h){g=0;
while(m=e[g++]){if(m(h,l,c)){p.push(h);
break
}}w&&(T=k,i=++n)
}r&&((h=!m&&h)&&v--,s&&x.push(h))
}if(v+=b,r&&b!==v){g=0;
while(m=t[g++]){m(x,y,l,c)
}if(s){if(v>0){while(b--){x[b]||y[b]||(y[b]=q.call(p))
}}y=xt(y)
}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)
}return w&&(T=k,u=C),x
};
return r?lt(s):s
}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];
if(!o){t||(t=mt(e)),n=t.length;
while(n--){o=Tt(t[n]),o[b]?r.push(o):i.push(o)
}o=E(e,Ct(i,r))
}return o
};
function Nt(e,t,n){var r=0,i=t.length;
for(;
i>r;
r++){at(e,t[r],n)
}return n
}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);
if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t){return n
}e=e.slice(s.shift().value.length)
}a=Q.needsContext.test(e)?0:s.length;
while(a--){if(u=s[a],o.relative[c=u.type]){break
}if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e){return M.apply(n,i),n
}break
}}}return l(e,f)(i,t,!h,n,V.test(e)),n
}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))
}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")
})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)
}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")
})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue
}),ut(function(e){return null==e.getAttribute("disabled")
})||ct(B,function(e,n,r){var i;
return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null
}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains
}(e);
var O={};
function F(e){var t=O[e]={};
return x.each(e.match(T)||[],function(e,n){t[n]=!0
}),t
}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);
var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;
l&&o>a;
a++){if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;
break
}}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())
},p={add:function(){if(l){var t=l.length;
(function i(t){x.each(t,function(t,n){var r=x.type(n);
"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)
})
})(arguments),n?o=l.length:r&&(s=t,c(r))
}return this
},remove:function(){return l&&x.each(arguments,function(e,t){var r;
while((r=x.inArray(t,l,r))>-1){l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)
}}),this
},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)
},empty:function(){return l=[],o=0,this
},disable:function(){return l=u=r=t,this
},disabled:function(){return !l
},lock:function(){return u=t,r||p.disable(),this
},locked:function(){return !u
},fireWith:function(e,t){return !l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this
},fire:function(){return p.fireWith(this,arguments),this
},fired:function(){return !!i
}};
return p
},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n
},always:function(){return i.done(arguments).fail(arguments),this
},then:function(){var e=arguments;
return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];
i[o[1]](function(){var e=s&&s.apply(this,arguments);
e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)
})
}),e=null
}).promise()
},promise:function(e){return null!=e?x.extend(e,r):r
}},i={};
return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];
r[o[1]]=a.add,s&&a.add(function(){n=s
},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this
},i[o[0]+"With"]=a.fireWith
}),r.promise(i),e&&e.call(i,i),i
},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)
}
},s,l,u;
if(r>1){for(s=Array(r),l=Array(r),u=Array(r);
r>t;
t++){n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i
}}return i||o.resolveWith(u,n),o.promise()
}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");
if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length){return t
}s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;
try{delete d.test
}catch(h){t.deleteExpando=!1
}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1
}),d.cloneNode(!0).click());
for(f in {submit:!0,change:!0,focusin:!0}){d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1
}d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;
for(f in x(t)){break
}return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];
l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth
}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)
}),n=s=l=u=r=o=null,t
}({});
var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;
function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;
if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n){return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o
}}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;
if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;
while(i--){delete r[t[i]]
}if(n?!I(r):!x.isEmptyObject(r)){return
}}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)
}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)
},data:function(e,t,n){return R(e,t,n)
},removeData:function(e,t){return W(e,t)
},_data:function(e,t,n){return R(e,t,n,!0)
},_removeData:function(e,t){return W(e,t,!0)
},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType){return !1
}var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];
return !t||t!==!0&&e.getAttribute("classid")===t
}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];
if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;
r.length>a;
a++){i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]))
}x._data(s,"parsedAttrs",!0)
}return o
}return"object"==typeof e?this.each(function(){x.data(this,e)
}):arguments.length>1?this.each(function(){x.data(this,e,n)
}):s?$(s,e,x.data(s,e)):null
},removeData:function(e){return this.each(function(){x.removeData(this,e)
})
}});
function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();
if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r
}catch(o){}x.data(e,n,r)
}else{r=t
}}return r
}function I(e){var t;
for(t in e){if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t){return !1
}}return !0
}x.extend({queue:function(e,n,r){var i;
return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t
},dequeue:function(e,t){t=t||"fx";
var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)
};
"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()
},_queueHooks:function(e,t){var n=t+"queueHooks";
return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)
})})
}}),x.fn.extend({queue:function(e,n){var r=2;
return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);
x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)
})
},dequeue:function(e){return this.each(function(){x.dequeue(this,e)
})
},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);
n.stop=function(){clearTimeout(r)
}
})
},clearQueue:function(e){return this.queue(e||"fx",[])
},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])
};
"string"!=typeof e&&(n=e,e=t),e=e||"fx";
while(s--){r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l))
}return l(),o.promise(n)
}});
var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;
x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)
},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)
})
},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)
},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]
}catch(n){}})
},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;
if(x.isFunction(e)){return this.each(function(t){x(this).addClass(e.call(this,t,this.className))
})
}if(l){for(t=(e||"").match(T)||[];
s>a;
a++){if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;
while(i=t[o++]){0>r.indexOf(" "+i+" ")&&(r+=i+" ")
}n.className=x.trim(r)
}}}return this
},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;
if(x.isFunction(e)){return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))
})
}if(l){for(t=(e||"").match(T)||[];
s>a;
a++){if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;
while(i=t[o++]){while(r.indexOf(" "+i+" ")>=0){r=r.replace(" "+i+" "," ")
}}n.className=e?x.trim(r):""
}}}return this
},toggleClass:function(e,t){var n=typeof e;
return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)
}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];
while(t=a[r++]){o.hasClass(t)?o.removeClass(t):o.addClass(t)
}}else{(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")
}})
},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;
for(;
r>n;
n++){if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0){return !0
}}return !1
},val:function(e){var n,r,i,o=this[0];
if(arguments.length){return i=x.isFunction(e),this.each(function(n){var o;
1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""
})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set" in r&&r.set(this,o,"value")!==t||(this.value=o))
})
}if(o){return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get" in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)
}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");
return null!=t?t:e.text
}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;
for(;
s>l;
l++){if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o){return t
}a.push(t)
}}return a
},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;
while(a--){r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0)
}return n||(e.selectedIndex=-1),o
}}},attr:function(e,n,r){var o,a,s=e.nodeType;
if(e&&3!==s&&8!==s&&2!==s){return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get" in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set" in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))
}},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);
if(o&&1===e.nodeType){while(n=o[i++]){r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)
}}},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;
return e.setAttribute("type",t),n&&(e.value=n),t
}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;
if(e&&3!==s&&8!==s&&2!==s){return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set" in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get" in o&&null!==(i=o.get(e,n))?i:e[n]
}},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");
return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1
}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n
}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;
x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;
return x.expr.attrHandle[n]=o,a
}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null
}
}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)
}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);
return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t
}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;
return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null
},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);
return r&&r.specified?r.value:t
},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)
}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t
}}
})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)
}}
}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t
},set:function(e,t){return e.style.cssText=t+""
}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;
return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null
}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this
}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t
}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value
})
});
var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;
function it(){return !0
}function ot(){return !1
}function at(){try{return a.activeElement
}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);
if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)
},f.elem=e),n=(n||"").match(T)||[""],u=n.length;
while(u--){s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0)
}e=null
}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);
if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;
while(u--){if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;
while(o--){a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a))
}l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])
}else{for(d in c){x.event.remove(e,d+t[u],n,r,!0)
}}}x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))
}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];
if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);
u;
u=u.parentNode){h.push(u),f=u
}f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)
}d=0;
while((u=h[d++])&&!n.isPropagationStopped()){n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault()
}if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;
try{i[g]()
}catch(y){}x.event.triggered=t,f&&(i[l]=f)
}return n.result
}},dispatch:function(e){e=x.event.fix(e);
var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};
if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;
while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;
while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped()){(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))
}}return c.postDispatch&&c.postDispatch.call(this,e),e.result
}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;
if(l&&u.nodeType&&(!e.button||"click"!==e.type)){for(;
u!=this;
u=u.parentNode||this){if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;
l>a;
a++){i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i)
}o.length&&s.push({elem:u,handlers:o})
}}}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s
},fix:function(e){if(e[x.expando]){return e
}var t,n,r,i=e.type,o=e,s=this.fixHooks[i];
s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;
while(t--){n=r[t],e[n]=o[n]
}return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e
},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e
}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;
return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e
}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus){try{return this.focus(),!1
}catch(e){}}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t
},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t
},_default:function(e){return x.nodeName(e.target,"a")
}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)
}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});
r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()
}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)
}:function(e,t,n){var r="on"+t;
e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))
},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)
},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;
this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)
},stopPropagation:function(){var e=this.originalEvent;
this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)
},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()
}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n
}}
}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;
r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0
}),x._data(r,"submitBubbles",!0))
}),t)
},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))
},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)
}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)
}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)
})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;
Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)
}),x._data(t,"changeBubbles",!0))
}),t)
},handle:function(e){var n=e.target;
return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t
},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)
}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)
};
x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)
},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)
}}
}),x.fn.extend({on:function(e,n,r,i,o){var a,s;
if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);
for(a in e){this.on(a,n,r,e[a],o)
}return this
}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1){i=ot
}else{if(!i){return this
}}return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)
},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)
})
},one:function(e,t,n,r){return this.on(e,t,n,r,1)
},off:function(e,n,r){var i,o;
if(e&&e.preventDefault&&e.handleObj){return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this
}if("object"==typeof e){for(o in e){this.off(o,n,e[o])
}return this
}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)
})
},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)
})
},triggerHandler:function(e,n){var r=this[0];
return r?x.event.trigger(e,n,r,!0):t
}});
var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};
x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;
if("string"!=typeof e){return this.pushStack(x(e).filter(function(){for(t=0;
i>t;
t++){if(x.contains(r[t],this)){return !0
}}}))
}for(t=0;
i>t;
t++){x.find(e,r[t],n)
}return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n
},has:function(e){var t,n=x(e,this),r=n.length;
return this.filter(function(){for(t=0;
r>t;
t++){if(x.contains(this,n[t])){return !0
}}})
},not:function(e){return this.pushStack(ft(this,e||[],!0))
},filter:function(e){return this.pushStack(ft(this,e||[],!1))
},is:function(e){return !!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length
},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;
for(;
i>r;
r++){for(n=this[r];
n&&n!==t;
n=n.parentNode){if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);
break
}}}return this.pushStack(o.length>1?x.unique(o):o)
},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1
},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);
return this.pushStack(x.unique(r))
},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))
}});
function pt(e,t){do{e=e[t]
}while(e&&1!==e.nodeType);
return e
}x.each({parent:function(e){var t=e.parentNode;
return t&&11!==t.nodeType?t:null
},parents:function(e){return x.dir(e,"parentNode")
},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)
},next:function(e){return pt(e,"nextSibling")
},prev:function(e){return pt(e,"previousSibling")
},nextAll:function(e){return x.dir(e,"nextSibling")
},prevAll:function(e){return x.dir(e,"previousSibling")
},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)
},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)
},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)
},children:function(e){return x.sibling(e.firstChild)
},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)
}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);
return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)
}
}),x.extend({filter:function(e,t,n){var r=t[0];
return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType
}))
},dir:function(e,n,r){var i=[],o=e[n];
while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r))){1===o.nodeType&&i.push(o),o=o[n]
}return i
},sibling:function(e,t){var n=[];
for(;
e;
e=e.nextSibling){1===e.nodeType&&e!==t&&n.push(e)
}return n
}});
function ft(e,t,n){if(x.isFunction(t)){return x.grep(e,function(e,r){return !!t.call(e,r,e)!==n
})
}if(t.nodeType){return x.grep(e,function(e){return e===t!==n
})
}if("string"==typeof t){if(st.test(t)){return x.filter(t,e,n)
}t=x.filter(t,e)
}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n
})
}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();
if(n.createElement){while(t.length){n.createElement(t.pop())
}}return n
}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));
At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))
},null,e,arguments.length)
},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);
t.appendChild(e)
}})
},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);
t.insertBefore(e,t.firstChild)
}})
},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)
})
},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)
})
},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;
for(;
null!=(n=r[i]);
i++){t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n))
}return this
},empty:function(){var e,t=0;
for(;
null!=(e=this[t]);
t++){1===e.nodeType&&x.cleanData(Ft(e,!1));
while(e.firstChild){e.removeChild(e.firstChild)
}e.options&&x.nodeName(e,"select")&&(e.options.length=0)
}return this
},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)
})
},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;
if(e===t){return 1===n.nodeType?n.innerHTML.replace(gt,""):t
}if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");
try{for(;
i>r;
r++){n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e)
}n=0
}catch(o){}}n&&this.empty().append(e)
},null,e,arguments.length)
},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]
}),t=0;
return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];
i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))
},!0),t?this:this.remove()
},detach:function(e){return this.remove(e,!0)
},domManip:function(e,t,n){e=d.apply([],e);
var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);
if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h)){return this.each(function(r){var i=p.eq(r);
g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)
})
}if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;
c>u;
u++){i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u)
}if(o){for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;
o>u;
u++){i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")))
}}l=r=null
}return this
}});
function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e
}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e
}function qt(e){var t=Et.exec(e.type);
return t?e.type=t[1]:e.removeAttribute("type"),e
}function _t(e,t){var n,r=0;
for(;
null!=(n=e[r]);
r++){x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))
}}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;
if(s){delete a.handle,a.events={};
for(n in s){for(r=0,i=s[n].length;
i>r;
r++){x.event.add(t,n,s[n][r])
}}}a.data&&(a.data=x.extend({},a.data))
}}function Ot(e,t){var n,r,i;
if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);
for(r in i.events){x.removeEvent(t,r,i.handle)
}t.removeAttribute(x.expando)
}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)
}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;
for(;
a>=r;
r++){n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get())
}return this.pushStack(i)
}
});
function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;
if(!s){for(s=[],r=e.childNodes||e;
null!=(o=r[a]);
a++){!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n))
}}return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s
}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)
}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);
if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e))){for(r=Ft(o),s=Ft(e),a=0;
null!=(i=s[a]);
++a){r[a]&&Ot(i,r[a])
}}if(t){if(n){for(s=s||Ft(e),r=r||Ft(o),a=0;
null!=(i=s[a]);
a++){Mt(i,r[a])
}}else{Mt(e,o)
}}return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o
},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;
for(;
p>h;
h++){if(o=e[h],o||0===o){if("object"===x.type(o)){x.merge(d,o.nodeType?[o]:o)
}else{if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];
while(i--){s=s.lastChild
}if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;
while(i--){x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)
}}x.merge(d,s.childNodes),s.textContent="";
while(s.firstChild){s.removeChild(s.firstChild)
}s=f.lastChild
}else{d.push(t.createTextNode(o))
}}}}s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;
while(o=d[h++]){if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;
while(o=s[i++]){kt.test(o.type||"")&&n.push(o)
}}}return s=null,f
},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;
for(;
null!=(n=e[s]);
s++){if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events){for(r in a.events){f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle)
}}u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))
}}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})
}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e)){return this.each(function(t){x(this).wrapAll(e.call(this,t))
})
}if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);
this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;
while(e.firstChild&&1===e.firstChild.nodeType){e=e.firstChild
}return e
}).append(this)
}return this
},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))
}):this.each(function(){var t=x(this),n=t.contents();
n.length?n.wrapAll(e):t.append(e)
})
},wrap:function(e){var t=x.isFunction(e);
return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)
})
},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)
}).end()
}});
var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];
function tn(e,t){if(t in e){return t
}var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;
while(i--){if(t=en[i]+n,t in e){return t
}}return r
}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)
}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;
for(;
s>a;
a++){r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))))
}for(a=0;
s>a;
a++){r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"))
}return e
}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;
if(x.isArray(n)){for(o=Rt(e),i=n.length;
i>s;
s++){a[n[s]]=x.css(e,n[s],!1,o)
}return a
}return r!==t?x.style(e,n,r):x.css(e,n)
},e,n,arguments.length>1)
},show:function(){return rn(this,!0)
},hide:function(){return rn(this)
},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()
})
}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");
return""===n?"1":n
}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;
if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t){return s&&"get" in s&&(o=s.get(e,!1,i))!==t?o:u[n]
}if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set" in s&&(r=s.set(e,r,i))===t))){try{u[n]=r
}catch(c){}}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);
return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get" in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a
}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)
},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;
return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l
}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle
},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;
return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l
});
function on(e,t,n){var r=Vt.exec(t);
return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t
}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;
for(;
4>o;
o+=2){"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)))
}return a
}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);
if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i)){return i
}r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0
}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"
}function ln(e){var t=a,n=Gt[e];
return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n
}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");
return n.remove(),r
}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)
}):sn(e,n,i):t
},set:function(e,t,r){var i=r&&Rt(e);
return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)
}}
}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?0.01*parseFloat(RegExp.$1)+"":t?"1":""
},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";
n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)
}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t
}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t
}}
})
}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))
},x.expr.filters.visible=function(e){return !x.expr.filters.hidden(e)
}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];
for(;
4>r;
r++){i[e+Zt[r]+t]=o[r]||o[r-2]||o[0]
}return i
}},Ut.test(e)||(x.cssHooks[e+t].set=on)
});
var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;
x.fn.extend({serialize:function(){return x.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");
return e?x.makeArray(e):this
}).filter(function(){var e=this.type;
return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))
}).map(function(e,t){var n=x(this).val();
return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}
}):{name:t.name,value:n.replace(fn,"\r\n")}
}).get()
}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)
};
if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e)){x.each(e,function(){o(this.name,this.value)
})
}else{for(r in e){gn(r,e[r],n,o)
}}return i.join("&").replace(cn,"+")
};
function gn(e,t,n,r){var i;
if(x.isArray(t)){x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)
})
}else{if(n||"object"!==x.type(t)){r(e,t)
}else{for(i in t){gn(e+"["+i+"]",t[i],n,r)
}}}}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)
}
}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)
},bind:function(e,t,n){return this.on(e,null,t,n)
},unbind:function(e,t){return this.off(e,null,t)
},delegate:function(e,t,n,r){return this.on(t,e,n,r)
},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)
}});
var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");
try{yn=o.href
}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href
}mn=En.exec(yn.toLowerCase())||[];
function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");
var r,i=0,o=t.toLowerCase().match(T)||[];
if(x.isFunction(n)){while(r=o[i++]){"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)
}}}
}function qn(e,n,r,i){var o={},a=e===jn;
function s(l){var u;
return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);
return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)
}),u
}return s(n.dataTypes[0])||!o["*"]&&s("*")
}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};
for(i in n){n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i])
}return r&&x.extend(!0,e,r),e
}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn){return Sn.apply(this,arguments)
}var i,o,a,s=this,l=e.indexOf(" ");
return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)
}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])
}),this
},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)
}
}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)
},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};
var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;
if(2===b){if(!c){c={};
while(t=Tn.exec(a)){c[t[1].toLowerCase()]=t[2]
}}t=c[e.toLowerCase()]
}return null==t?null:t
},getAllResponseHeaders:function(){return 2===b?a:null
},setRequestHeader:function(e,t){var n=e.toLowerCase();
return b||(e=v[n]=v[n]||e,y[e]=t),this
},overrideMimeType:function(e){return b||(p.mimeType=e),this
},statusCode:function(e){var t;
if(e){if(2>b){for(t in e){m[t]=[m[t],e[t]]
}}else{C.always(e[C.status])
}}return this
},abort:function(e){var t=e||w;
return u&&u.abort(t),k(0,t),this
}};
if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b){return C
}l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);
for(i in p.headers){C.setRequestHeader(i,p.headers[i])
}if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b)){return C.abort()
}w="abort";
for(i in {success:1,error:1,complete:1}){C[i](p[i])
}if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")
},p.timeout));
try{b=1,u.send(y,k)
}catch(N){if(!(2>b)){throw N
}k(-1,N)
}}else{k(-1,"No Transport")
}function k(e,n,r,i){var c,y,v,w,T,N=n;
2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))
}return C
},getJSON:function(e,t,n){return x.get(e,t,n,"json")
},getScript:function(e,n){return x.get(e,t,n,"script")
}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})
}
});
function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;
while("*"===u[0]){u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"))
}if(o){for(s in l){if(l[s]&&l[s].test(o)){u.unshift(s);
break
}}}if(u[0] in r){a=u[0]
}else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;
break
}i||(i=s)
}a=a||i
}return a?(a!==u[0]&&u.unshift(a),r[a]):t
}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();
if(c[1]){for(a in e.converters){u[a.toLowerCase()]=e.converters[a]
}}o=c.shift();
while(o){if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift()){if("*"===o){o=l
}else{if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a){for(i in u){if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));
break
}}}if(a!==!0){if(a&&e["throws"]){t=a(t)
}else{try{t=a(t)
}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}
}}}}}}}return{state:"success",data:t}
}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e
}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)
}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;
return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))
},r.insertBefore(n,r.firstChild)
},abort:function(){n&&n.onload(t,!0)
}}
}});
var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;
x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;
return this[e]=!0,e
}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");
return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]
},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments
},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t
}),"script"):t
});
var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;
for(e in Pn){Pn[e](t,!0)
}};
function In(){try{return new e.XMLHttpRequest
}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")
}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return !this.isLocal&&In()||zn()
}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials" in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;
return{send:function(i,o){var a,s,l=n.xhr();
if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields){for(s in n.xhrFields){l[s]=n.xhrFields[s]
}}n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");
try{for(s in i){l.setRequestHeader(s,i[s])
}}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;
try{if(r&&(i||4===l.readyState)){if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i){4!==l.readyState&&l.abort()
}else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);
try{c=l.statusText
}catch(f){c=""
}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404
}}}catch(d){i||o(-1,d)
}p&&o(s,c,p,u)
},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()
},abort:function(){r&&r(t,!0)
}}
}});
var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;
if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;
do{s=s||".5",a/=s,x.style(n.elem,e,a+o)
}while(s!==(s=n.cur()/r)&&1!==s&&--l)
}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n
}]};
function Kn(){return setTimeout(function(){Xn=t
}),Xn=x.now()
}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;
for(;
a>o;
o++){if(r=i[o].call(n,t,e)){return r
}}}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem
}),l=function(){if(i){return !1
}var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;
for(;
l>a;
a++){u.tweens[a].run(o)
}return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)
},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);
return u.tweens.push(r),r
},stop:function(t){var n=0,r=t?u.tweens.length:0;
if(i){return this
}for(i=!0;
r>n;
n++){u.tweens[n].run(1)
}return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this
}}),c=u.props;
for(tr(c,u.opts.specialEasing);
a>o;
o++){if(r=Gn[o].call(u,e,c,u.opts)){return r
}}return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)
}function tr(e,t){var n,r,i,o,a;
for(n in e){if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand" in a){o=a.expand(o),delete e[r];
for(n in o){n in e||(e[n]=o[n],t[n]=i)
}}else{t[r]=i
}}}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");
var n,r=0,i=e.length;
for(;
i>r;
r++){n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)
}},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)
}});
function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");
n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()
}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()
})
})),1===e.nodeType&&("height" in t||"width" in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]
}));
for(r in t){if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){continue
}c[r]=d&&d[r]||x.style(e,r)
}}if(!x.isEmptyObject(c)){d?"hidden" in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()
}),u.done(function(){var t;
x._removeData(e,"fxshow");
for(t in c){x.style(e,t,c[t])
}});
for(r in c){a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))
}}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)
}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")
},cur:function(){var e=rr.propHooks[this.prop];
return e&&e.get?e.get(this):rr.propHooks._default.get(this)
},run:function(e){var t,n=rr.propHooks[this.prop];
return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this
}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;
return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]
},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now
}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)
}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];
x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)
}
}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)
},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);
(i||x._data(this,"finish"))&&t.stop(!0)
};
return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)
},stop:function(e,n,r){var i=function(e){var t=e.stop;
delete e.stop,t(r)
};
return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);
if(n){a[n]&&a[n].stop&&i(a[n])
}else{for(n in a){a[n]&&a[n].stop&&Jn.test(n)&&i(a[n])
}}for(n=o.length;
n--;
){o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1))
}(t||!r)&&x.dequeue(this,e)
})
},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;
for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;
t--;
){o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1))
}for(t=0;
a>t;
t++){r[t]&&r[t].finish&&r[t].finish.call(this)
}delete n.finish
})
}});
function ir(e,t){var n,r={height:e},i=0;
for(t=t?1:0;
4>i;
i+=2-t){n=Zt[i],r["margin"+n]=r["padding"+n]=e
}return t&&(r.opacity=r.width=e),r
}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)
}
}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};
return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)
},r
},x.easing={linear:function(e){return e
},swing:function(e){return 0.5-Math.cos(e*Math.PI)/2
}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;
for(Xn=x.now();
n.length>r;
r++){e=n[r],e()||n[r]!==e||n.splice(r--,1)
}n.length||x.fx.stop(),Xn=t
},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()
},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))
},x.fx.stop=function(){clearInterval(Un),Un=null
},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem
}).length
}),x.fn.offset=function(e){if(arguments.length){return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)
})
}var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;
if(s){return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o
}},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");
"static"===r&&(e.style.position="relative");
var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;
l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using" in t?t.using.call(e,u):i.css(u)
}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];
return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}
}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;
while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position")){e=e.offsetParent
}return e||s
})
}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);
x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);
return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)
},e,i,arguments.length,null)
}
});
function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1
}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");
return x.access(this,function(n,r,i){var o;
return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)
},n,a?i:t,a,null)
}
})
}),x.fn.size=function(){return this.length
},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x
}))
})(window);
/*! jQuery UI - v1.10.3 - 2013-08-02
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.resizable.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.menu.js, jquery.ui.slider.js, jquery.ui.tabs.js
* Copyright 2013 jQuery Foundation and other contributors Licensed MIT */
(function(g,d){function c(k,j){var e,p,l,m=k.nodeName.toLowerCase();
return"area"===m?(e=k.parentNode,p=e.name,k.href&&p&&"map"===e.nodeName.toLowerCase()?(l=g("img[usemap=#"+p+"]")[0],!!l&&f(l)):!1):(/input|select|textarea|button|object/.test(m)?!k.disabled:"a"===m?k.href||j:j)&&f(k)
}function f(a){return g.expr.filters.visible(a)&&!g(a).parents().addBack().filter(function(){return"hidden"===g.css(this,"visibility")
}).length
}var b=0,h=/^ui-id-\d+$/;
g.ui=g.ui||{},g.extend(g.ui,{version:"1.10.3",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),g.fn.extend({focus:function(a){return function(e,j){return"number"==typeof e?this.each(function(){var i=this;
setTimeout(function(){g(i).focus(),j&&j.call(i)
},e)
}):a.apply(this,arguments)
}
}(g.fn.focus),scrollParent:function(){var a;
return a=g.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(g.css(this,"position"))&&/(auto|scroll)/.test(g.css(this,"overflow")+g.css(this,"overflow-y")+g.css(this,"overflow-x"))
}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(g.css(this,"overflow")+g.css(this,"overflow-y")+g.css(this,"overflow-x"))
}).eq(0),/fixed/.test(this.css("position"))||!a.length?g(document):a
},zIndex:function(j){if(j!==d){return this.css("zIndex",j)
}if(this.length){for(var k,e,l=g(this[0]);
l.length&&l[0]!==document;
){if(k=l.css("position"),("absolute"===k||"relative"===k||"fixed"===k)&&(e=parseInt(l.css("zIndex"),10),!isNaN(e)&&0!==e)){return e
}l=l.parent()
}}return 0
},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++b)
})
},removeUniqueId:function(){return this.each(function(){h.test(this.id)&&g(this).removeAttr("id")
})
}}),g.extend(g.expr[":"],{data:g.expr.createPseudo?g.expr.createPseudo(function(a){return function(e){return !!g.data(e,a)
}
}):function(e,a,j){return !!g.data(e,j[3])
},focusable:function(a){return c(a,!isNaN(g.attr(a,"tabindex")))
},tabbable:function(i){var j=g.attr(i,"tabindex"),e=isNaN(j);
return(e||j>=0)&&c(i,!e)
}}),g("<a>").outerWidth(1).jquery||g.each(["Width","Height"],function(j,k){function e(q,o,r,n){return g.each(p,function(){o-=parseFloat(g.css(q,"padding"+this))||0,r&&(o-=parseFloat(g.css(q,"border"+this+"Width"))||0),n&&(o-=parseFloat(g.css(q,"margin"+this))||0)
}),o
}var p="Width"===k?["Left","Right"]:["Top","Bottom"],l=k.toLowerCase(),m={innerWidth:g.fn.innerWidth,innerHeight:g.fn.innerHeight,outerWidth:g.fn.outerWidth,outerHeight:g.fn.outerHeight};
g.fn["inner"+k]=function(a){return a===d?m["inner"+k].call(this):this.each(function(){g(this).css(l,e(this,a)+"px")
})
},g.fn["outer"+k]=function(n,a){return"number"!=typeof n?m["outer"+k].call(this,n):this.each(function(){g(this).css(l,e(this,n,!0,a)+"px")
})
}
}),g.fn.addBack||(g.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))
}),g("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(g.fn.removeData=function(a){return function(e){return arguments.length?a.call(this,g.camelCase(e)):a.call(this)
}
}(g.fn.removeData)),g.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),g.support.selectstart="onselectstart" in document.createElement("div"),g.fn.extend({disableSelection:function(){return this.bind((g.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()
})
},enableSelection:function(){return this.unbind(".ui-disableSelection")
}}),g.extend(g.ui,{plugin:{add:function(k,j,l){var e,m=g.ui[k].prototype;
for(e in l){m.plugins[e]=m.plugins[e]||[],m.plugins[e].push([j,l[e]])
}},call:function(n,l,k){var m,j=n.plugins[l];
if(j&&n.element[0].parentNode&&11!==n.element[0].parentNode.nodeType){for(m=0;
j.length>m;
m++){n.options[j[m][0]]&&j[m][1].apply(n.element,k)
}}}},hasScroll:function(k,j){if("hidden"===g(k).css("overflow")){return !1
}var l=j&&"left"===j?"scrollLeft":"scrollTop",e=!1;
return k[l]>0?!0:(k[l]=1,e=k[l]>0,k[l]=0,e)
}})
})(jQuery);
(function(d,b){var a=0,c=Array.prototype.slice,f=d.cleanData;
d.cleanData=function(h){for(var g,j=0;
null!=(g=h[j]);
j++){try{d(g).triggerHandler("remove")
}catch(e){}}f(h)
},d.widget=function(m,v,j){var q,e,g,p,k={},t=m.split(".")[0];
m=m.split(".")[1],q=t+"-"+m,j||(j=v,v=d.Widget),d.expr[":"][q.toLowerCase()]=function(h){return !!d.data(h,q)
},d[t]=d[t]||{},e=d[t][m],g=d[t][m]=function(l,h){return this._createWidget?(arguments.length&&this._createWidget(l,h),b):new g(l,h)
},d.extend(g,e,{version:j.version,_proto:d.extend({},j),_childConstructors:[]}),p=new v,p.options=d.widget.extend({},p.options),d.each(j,function(h,l){return d.isFunction(l)?(k[h]=function(){var n=function(){return v.prototype[h].apply(this,arguments)
},i=function(o){return v.prototype[h].apply(this,o)
};
return function(){var r,u=this._super,o=this._superApply;
return this._super=n,this._superApply=i,r=l.apply(this,arguments),this._super=u,this._superApply=o,r
}
}(),b):(k[h]=l,b)
}),g.prototype=d.widget.extend(p,{widgetEventPrefix:e?p.widgetEventPrefix:m},k,{constructor:g,namespace:t,widgetName:m,widgetFullName:q}),e?(d.each(e._childConstructors,function(l,h){var n=h.prototype;
d.widget(n.namespace+"."+n.widgetName,g,h._proto)
}),delete e._childConstructors):v._childConstructors.push(g),d.widget.bridge(m,g)
},d.widget.extend=function(g){for(var m,e,k=c.call(arguments,1),l=0,j=k.length;
j>l;
l++){for(m in k[l]){e=k[l][m],k[l].hasOwnProperty(m)&&e!==b&&(g[m]=d.isPlainObject(e)?d.isPlainObject(g[m])?d.widget.extend({},g[m],e):d.widget.extend({},e):e)
}}return g
},d.widget.bridge=function(g,h){var e=h.prototype.widgetFullName||g;
d.fn[g]=function(k){var m="string"==typeof k,j=c.call(arguments,1),i=this;
return k=!m&&j.length?d.widget.extend.apply(null,[k].concat(j)):k,m?this.each(function(){var l,o=d.data(this,e);
return o?d.isFunction(o[k])&&"_"!==k.charAt(0)?(l=o[k].apply(o,j),l!==o&&l!==b?(i=l&&l.jquery?i.pushStack(l.get()):l,!1):b):d.error("no such method '"+k+"' for "+g+" widget instance"):d.error("cannot call methods on "+g+" prior to initialization; attempted to call method '"+k+"'")
}):this.each(function(){var l=d.data(this,e);
l?l.option(k||{})._init():d.data(this,e,new h(k,this))
}),i
}
},d.Widget=function(){},d.Widget._childConstructors=[],d.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,g){g=d(g||this.defaultElement||this)[0],this.element=d(g),this.uuid=a++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=d.widget.extend({},this.options,this._getCreateOptions(),e),this.bindings=d(),this.hoverable=d(),this.focusable=d(),g!==this&&(d.data(g,this.widgetFullName,this),this._on(!0,this.element,{remove:function(h){h.target===g&&this.destroy()
}}),this.document=d(g.style?g.ownerDocument:g.document||g),this.window=d(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()
},_getCreateOptions:d.noop,_getCreateEventData:d.noop,_create:d.noop,_init:d.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(d.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")
},_destroy:d.noop,widget:function(){return this.element
},option:function(g,h){var l,e,j,k=g;
if(0===arguments.length){return d.widget.extend({},this.options)
}if("string"==typeof g){if(k={},l=g.split("."),g=l.shift(),l.length){for(e=k[g]=d.widget.extend({},this.options[g]),j=0;
l.length-1>j;
j++){e[l[j]]=e[l[j]]||{},e=e[l[j]]
}if(g=l.pop(),h===b){return e[g]===b?null:e[g]
}e[g]=h
}else{if(h===b){return this.options[g]===b?null:this.options[g]
}k[g]=h
}}return this._setOptions(k),this
},_setOptions:function(h){var g;
for(g in h){this._setOption(g,h[g])
}return this
},_setOption:function(h,g){return this.options[h]=g,"disabled"===h&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!g).attr("aria-disabled",g),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this
},enable:function(){return this._setOption("disabled",!1)
},disable:function(){return this._setOption("disabled",!0)
},_on:function(g,h,k){var e,j=this;
"boolean"!=typeof g&&(k=h,h=g,g=!1),k?(h=e=d(h),this.bindings=this.bindings.add(h)):(k=h,h=this.element,e=this.widget()),d.each(k,function(t,q){function p(){return g||j.options.disabled!==!0&&!d(this).hasClass("ui-state-disabled")?("string"==typeof q?j[q]:q).apply(j,arguments):b
}"string"!=typeof q&&(p.guid=q.guid=q.guid||p.guid||d.guid++);
var i=t.match(/^(\w+)\s*(.*)$/),m=i[1]+j.eventNamespace,r=i[2];
r?e.delegate(r,m,p):h.bind(m,p)
})
},_off:function(h,g){g=(g||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,h.unbind(g).undelegate(g)
},_delay:function(k,h){function g(){return("string"==typeof k?j[k]:k).apply(j,arguments)
}var j=this;
return setTimeout(g,h||0)
},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(g){d(g.currentTarget).addClass("ui-state-hover")
},mouseleave:function(g){d(g.currentTarget).removeClass("ui-state-hover")
}})
},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(g){d(g.currentTarget).addClass("ui-state-focus")
},focusout:function(g){d(g.currentTarget).removeClass("ui-state-focus")
}})
},_trigger:function(h,g,j){var l,e,k=this.options[h];
if(j=j||{},g=d.Event(g),g.type=(h===this.widgetEventPrefix?h:this.widgetEventPrefix+h).toLowerCase(),g.target=this.element[0],e=g.originalEvent){for(l in e){l in g||(g[l]=e[l])
}}return this.element.trigger(g,j),!(d.isFunction(k)&&k.apply(this.element[0],[g].concat(j))===!1||g.isDefaultPrevented())
}},d.each({show:"fadeIn",hide:"fadeOut"},function(g,e){d.Widget.prototype["_"+g]=function(i,l,h){"string"==typeof l&&(l={effect:l});
var j,k=l?l===!0||"number"==typeof l?e:l.effect||e:g;
l=l||{},"number"==typeof l&&(l={duration:l}),j=!d.isEmptyObject(l),l.complete=h,l.delay&&i.delay(l.delay),j&&d.effects&&d.effects.effect[k]?i[g](l):k!==g&&i[k]?i[k](l.duration,l.easing,h):i.queue(function(m){d(this)[g](),h&&h.call(i[0]),m()
})
}
})
})(jQuery);
(function(b){var a=!1;
b(document).mouseup(function(){a=!1
}),b.widget("ui.mouse",{version:"1.10.3",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var c=this;
this.element.bind("mousedown."+this.widgetName,function(d){return c._mouseDown(d)
}).bind("click."+this.widgetName,function(d){return !0===b.data(d.target,c.widgetName+".preventClickEvent")?(b.removeData(d.target,c.widgetName+".preventClickEvent"),d.stopImmediatePropagation(),!1):undefined
}),this.started=!1
},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)
},_mouseDown:function(d){if(!a){this._mouseStarted&&this._mouseUp(d),this._mouseDownEvent=d;
var e=this,f=1===d.which,c="string"==typeof this.options.cancel&&d.target.nodeName?b(d.target).closest(this.options.cancel).length:!1;
return f&&!c&&this._mouseCapture(d)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){e.mouseDelayMet=!0
},this.options.delay)),this._mouseDistanceMet(d)&&this._mouseDelayMet(d)&&(this._mouseStarted=this._mouseStart(d)!==!1,!this._mouseStarted)?(d.preventDefault(),!0):(!0===b.data(d.target,this.widgetName+".preventClickEvent")&&b.removeData(d.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(g){return e._mouseMove(g)
},this._mouseUpDelegate=function(g){return e._mouseUp(g)
},b(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),d.preventDefault(),a=!0,!0)):!0
}},_mouseMove:function(c){return b.ui.ie&&(!document.documentMode||9>document.documentMode)&&!c.button?this._mouseUp(c):this._mouseStarted?(this._mouseDrag(c),c.preventDefault()):(this._mouseDistanceMet(c)&&this._mouseDelayMet(c)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,c)!==!1,this._mouseStarted?this._mouseDrag(c):this._mouseUp(c)),!this._mouseStarted)
},_mouseUp:function(c){return b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,c.target===this._mouseDownEvent.target&&b.data(c.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(c)),!1
},_mouseDistanceMet:function(c){return Math.max(Math.abs(this._mouseDownEvent.pageX-c.pageX),Math.abs(this._mouseDownEvent.pageY-c.pageY))>=this.options.distance
},_mouseDelayMet:function(){return this.mouseDelayMet
},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return !0
}})
})(jQuery);
(function(C,x){function q(c,d,a){return[parseFloat(c[0])*(g.test(c[0])?d/100:1),parseFloat(c[1])*(g.test(c[1])?a/100:1)]
}function D(c,a){return parseInt(C.css(c,a),10)||0
}function k(c){var a=c[0];
return 9===a.nodeType?{width:c.width(),height:c.height(),offset:{top:0,left:0}}:C.isWindow(a)?{width:c.width(),height:c.height(),offset:{top:c.scrollTop(),left:c.scrollLeft()}}:a.preventDefault?{width:0,height:0,offset:{top:a.pageY,left:a.pageX}}:{width:c.outerWidth(),height:c.outerHeight(),offset:c.offset()}
}C.ui=C.ui||{};
var A,j=Math.max,b=Math.abs,v=Math.round,m=/left|center|right/,z=/top|center|bottom/,B=/[\+\-]\d+(\.[\d]+)?%?/,y=/^\w+/,g=/%$/,w=C.fn.position;
C.position={scrollbarWidth:function(){if(A!==x){return A
}var a,c,e=C("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),d=e.children()[0];
return C("body").append(e),a=d.offsetWidth,e.css("overflow","scroll"),c=d.offsetWidth,a===c&&(c=e[0].clientWidth),e.remove(),A=a-c
},getScrollInfo:function(h){var d=h.isWindow?"":h.element.css("overflow-x"),f=h.isWindow?"":h.element.css("overflow-y"),l="scroll"===d||"auto"===d&&h.width<h.element[0].scrollWidth,c="scroll"===f||"auto"===f&&h.height<h.element[0].scrollHeight;
return{width:c?C.position.scrollbarWidth():0,height:l?C.position.scrollbarWidth():0}
},getWithinInfo:function(d){var a=C(d||window),c=C.isWindow(a[0]);
return{element:a,isWindow:c,offset:a.offset()||{left:0,top:0},scrollLeft:a.scrollLeft(),scrollTop:a.scrollTop(),width:c?a.width():a.outerWidth(),height:c?a.height():a.outerHeight()}
}},C.fn.position=function(i){if(!i||!i.of){return w.apply(this,arguments)
}i=C.extend({},i);
var r,c,d,h,E,n,u=C(i.of),l=C.position.getWithinInfo(i.within),t=C.position.getScrollInfo(l),o=(i.collision||"flip").split(" "),f={};
return n=k(u),u[0].preventDefault&&(i.at="left top"),c=n.width,d=n.height,h=n.offset,E=C.extend({},h),C.each(["my","at"],function(){var e,a,p=(i[this]||"").split(" ");
1===p.length&&(p=m.test(p[0])?p.concat(["center"]):z.test(p[0])?["center"].concat(p):["center","center"]),p[0]=m.test(p[0])?p[0]:"center",p[1]=z.test(p[1])?p[1]:"center",e=B.exec(p[0]),a=B.exec(p[1]),f[this]=[e?e[0]:0,a?a[0]:0],i[this]=[y.exec(p[0])[0],y.exec(p[1])[0]]
}),1===o.length&&(o[1]=o[0]),"right"===i.at[0]?E.left+=c:"center"===i.at[0]&&(E.left+=c/2),"bottom"===i.at[1]?E.top+=d:"center"===i.at[1]&&(E.top+=d/2),r=q(f.at,c,d),E.left+=r[0],E.top+=r[1],this.each(function(){var p,F,K=C(this),N=K.outerWidth(),J=K.outerHeight(),H=D(this,"marginLeft"),L=D(this,"marginTop"),a=N+H+D(this,"marginRight")+t.width,G=J+L+D(this,"marginBottom")+t.height,e=C.extend({},E),I=q(f.my,K.outerWidth(),K.outerHeight());
"right"===i.my[0]?e.left-=N:"center"===i.my[0]&&(e.left-=N/2),"bottom"===i.my[1]?e.top-=J:"center"===i.my[1]&&(e.top-=J/2),e.left+=I[0],e.top+=I[1],C.support.offsetFractions||(e.left=v(e.left),e.top=v(e.top)),p={marginLeft:H,marginTop:L},C.each(["left","top"],function(M,O){C.ui.position[o[M]]&&C.ui.position[o[M]][O](e,{targetWidth:c,targetHeight:d,elemWidth:N,elemHeight:J,collisionPosition:p,collisionWidth:a,collisionHeight:G,offset:[r[0]+I[0],r[1]+I[1]],my:i.my,at:i.at,within:l,elem:K})
}),i.using&&(F=function(P){var O=h.left-e.left,R=O+c-N,S=h.top-e.top,M=S+d-J,Q={target:{element:u,left:h.left,top:h.top,width:c,height:d},element:{element:K,left:e.left,top:e.top,width:N,height:J},horizontal:0>R?"left":O>0?"right":"center",vertical:0>M?"top":S>0?"bottom":"middle"};
N>c&&c>b(O+R)&&(Q.horizontal="center"),J>d&&d>b(S+M)&&(Q.vertical="middle"),Q.important=j(b(O),b(R))>j(b(S),b(M))?"horizontal":"vertical",i.using.call(this,P,Q)
}),K.offset(C.extend(e,{using:F}))
})
},C.ui.position={fit:{left:function(F,u){var o,G=u.within,d=G.isWindow?G.scrollLeft:G.offset.left,E=G.width,c=F.left-u.collisionPosition.marginLeft,p=d-c,f=c+u.collisionWidth-E-d;
u.collisionWidth>E?p>0&&0>=f?(o=F.left+p+u.collisionWidth-E-d,F.left+=p-o):F.left=f>0&&0>=p?d:p>f?d+E-u.collisionWidth:d:p>0?F.left+=p:f>0?F.left-=f:F.left=j(F.left-c,F.left)
},top:function(F,u){var o,G=u.within,d=G.isWindow?G.scrollTop:G.offset.top,E=u.within.height,c=F.top-u.collisionPosition.marginTop,p=d-c,f=c+u.collisionHeight-E-d;
u.collisionHeight>E?p>0&&0>=f?(o=F.top+p+u.collisionHeight-E-d,F.top+=p-o):F.top=f>0&&0>=p?d:p>f?d+E-u.collisionHeight:d:p>0?F.top+=p:f>0?F.top-=f:F.top=j(F.top-c,F.top)
}},flip:{left:function(P,K){var H,Q,F=K.within,N=F.offset.left+F.scrollLeft,E=F.width,I=F.isWindow?F.scrollLeft:F.offset.left,G=P.left-K.collisionPosition.marginLeft,M=G-I,O=G+K.collisionWidth-E-I,L="left"===K.my[0]?-K.elemWidth:"right"===K.my[0]?K.elemWidth:0,r="left"===K.at[0]?K.targetWidth:"right"===K.at[0]?-K.targetWidth:0,J=-2*K.offset[0];
0>M?(H=P.left+L+r+J+K.collisionWidth-E-N,(0>H||b(M)>H)&&(P.left+=L+r+J)):O>0&&(Q=P.left-K.collisionPosition.marginLeft+L+r+J-I,(Q>0||O>b(Q))&&(P.left+=L+r+J))
},top:function(Q,L){var I,R,F=L.within,O=F.offset.top+F.scrollTop,E=F.height,J=F.isWindow?F.scrollTop:F.offset.top,H=Q.top-L.collisionPosition.marginTop,N=H-J,P=H+L.collisionHeight-E-J,M="top"===L.my[1],r=M?-L.elemHeight:"bottom"===L.my[1]?L.elemHeight:0,K="top"===L.at[1]?L.targetHeight:"bottom"===L.at[1]?-L.targetHeight:0,G=-2*L.offset[1];
0>N?(R=Q.top+r+K+G+L.collisionHeight-E-O,Q.top+r+K+G>N&&(0>R||b(N)>R)&&(Q.top+=r+K+G)):P>0&&(I=Q.top-L.collisionPosition.marginTop+r+K+G-J,Q.top+r+K+G>P&&(I>0||P>b(I))&&(Q.top+=r+K+G))
}},flipfit:{left:function(){C.ui.position.flip.left.apply(this,arguments),C.ui.position.fit.left.apply(this,arguments)
},top:function(){C.ui.position.flip.top.apply(this,arguments),C.ui.position.fit.top.apply(this,arguments)
}}},function(){var l,d,f,t,c,p=document.getElementsByTagName("body")[0],h=document.createElement("div");
l=document.createElement(p?"div":"body"),f={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},p&&C.extend(f,{position:"absolute",left:"-1000px",top:"-1000px"});
for(c in f){l.style[c]=f[c]
}l.appendChild(h),d=p||document.documentElement,d.insertBefore(l,d.firstChild),h.style.cssText="position: absolute; left: 10.7432222px;",t=C(h).offset().left,C.support.offsetFractions=t>10&&11>t,l.innerHTML="",d.removeChild(l)
}()
})(jQuery);
(function(a){a.widget("ui.draggable",a.ui.mouse,{version:"1.10.3",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"!==this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()
},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()
},_mouseCapture:function(c){var b=this.options;
return this.helper||b.disabled||a(c.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(c),this.handle?(a(b.iframeFix===!0?"iframe":b.iframeFix).each(function(){a("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(a(this).offset()).appendTo("body")
}),!0):!1)
},_mouseStart:function(c){var b=this.options;
return this.helper=this._createHelper(c),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),a.ui.ddmanager&&(a.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offsetParent=this.helper.offsetParent(),this.offsetParentCssPosition=this.offsetParent.css("position"),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},this.offset.scroll=!1,a.extend(this.offset,{click:{left:c.pageX-this.offset.left,top:c.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(c),this.originalPageX=c.pageX,this.originalPageY=c.pageY,b.cursorAt&&this._adjustOffsetFromHelper(b.cursorAt),this._setContainment(),this._trigger("start",c)===!1?(this._clear(),!1):(this._cacheHelperProportions(),a.ui.ddmanager&&!b.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,c),this._mouseDrag(c,!0),a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,c),!0)
},_mouseDrag:function(c,b){if("fixed"===this.offsetParentCssPosition&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(c),this.positionAbs=this._convertPositionTo("absolute"),!b){var d=this._uiHash();
if(this._trigger("drag",c,d)===!1){return this._mouseUp({}),!1
}this.position=d.position
}return this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),a.ui.ddmanager&&a.ui.ddmanager.drag(this,c),!1
},_mouseStop:function(c){var b=this,d=!1;
return a.ui.ddmanager&&!this.options.dropBehaviour&&(d=a.ui.ddmanager.drop(this,c)),this.dropped&&(d=this.dropped,this.dropped=!1),"original"!==this.options.helper||a.contains(this.element[0].ownerDocument,this.element[0])?("invalid"===this.options.revert&&!d||"valid"===this.options.revert&&d||this.options.revert===!0||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,d)?a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){b._trigger("stop",c)!==!1&&b._clear()
}):this._trigger("stop",c)!==!1&&this._clear(),!1):!1
},_mouseUp:function(b){return a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)
}),a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,b),a.ui.mouse.prototype._mouseUp.call(this,b)
},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this
},_getHandle:function(b){return this.options.handle?!!a(b.target).closest(this.element.find(this.options.handle)).length:!0
},_createHelper:function(c){var b=this.options,d=a.isFunction(b.helper)?a(b.helper.apply(this.element[0],[c])):"clone"===b.helper?this.element.clone().removeAttr("id"):this.element;
return d.parents("body").length||d.appendTo("parent"===b.appendTo?this.element[0].parentNode:b.appendTo),d[0]===this.element[0]||/(fixed|absolute)/.test(d.css("position"))||d.css("position","absolute"),d
},_adjustOffsetFromHelper:function(b){"string"==typeof b&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left" in b&&(this.offset.click.left=b.left+this.margins.left),"right" in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top" in b&&(this.offset.click.top=b.top+this.margins.top),"bottom" in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)
},_getParentOffset:function(){var b=this.offsetParent.offset();
return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&a.ui.ie)&&(b={top:0,left:0}),{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if("relative"===this.cssPosition){var b=this.element.position();
return{top:b.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:b.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}return{top:0,left:0}
},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var c,b,d,e=this.options;
return e.containment?"window"===e.containment?(this.containment=[a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,a(window).scrollLeft()+a(window).width()-this.helperProportions.width-this.margins.left,a(window).scrollTop()+(a(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):"document"===e.containment?(this.containment=[0,0,a(document).width()-this.helperProportions.width-this.margins.left,(a(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):e.containment.constructor===Array?(this.containment=e.containment,undefined):("parent"===e.containment&&(e.containment=this.helper[0].parentNode),b=a(e.containment),d=b[0],d&&(c="hidden"!==b.css("overflow"),this.containment=[(parseInt(b.css("borderLeftWidth"),10)||0)+(parseInt(b.css("paddingLeft"),10)||0),(parseInt(b.css("borderTopWidth"),10)||0)+(parseInt(b.css("paddingTop"),10)||0),(c?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(b.css("borderRightWidth"),10)||0)-(parseInt(b.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(c?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(b.css("borderBottomWidth"),10)||0)-(parseInt(b.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=b),undefined):(this.containment=null,undefined)
},_convertPositionTo:function(c,b){b||(b=this.position);
var d="absolute"===c?1:-1,e="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent;
return this.offset.scroll||(this.offset.scroll={top:e.scrollTop(),left:e.scrollLeft()}),{top:b.top+this.offset.relative.top*d+this.offset.parent.top*d-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top)*d,left:b.left+this.offset.relative.left*d+this.offset.parent.left*d-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)*d}
},_generatePosition:function(k){var f,m,d,j,c=this.options,b="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,g=k.pageX,e=k.pageY;
return this.offset.scroll||(this.offset.scroll={top:b.scrollTop(),left:b.scrollLeft()}),this.originalPosition&&(this.containment&&(this.relative_container?(m=this.relative_container.offset(),f=[this.containment[0]+m.left,this.containment[1]+m.top,this.containment[2]+m.left,this.containment[3]+m.top]):f=this.containment,k.pageX-this.offset.click.left<f[0]&&(g=f[0]+this.offset.click.left),k.pageY-this.offset.click.top<f[1]&&(e=f[1]+this.offset.click.top),k.pageX-this.offset.click.left>f[2]&&(g=f[2]+this.offset.click.left),k.pageY-this.offset.click.top>f[3]&&(e=f[3]+this.offset.click.top)),c.grid&&(d=c.grid[1]?this.originalPageY+Math.round((e-this.originalPageY)/c.grid[1])*c.grid[1]:this.originalPageY,e=f?d-this.offset.click.top>=f[1]||d-this.offset.click.top>f[3]?d:d-this.offset.click.top>=f[1]?d-c.grid[1]:d+c.grid[1]:d,j=c.grid[0]?this.originalPageX+Math.round((g-this.originalPageX)/c.grid[0])*c.grid[0]:this.originalPageX,g=f?j-this.offset.click.left>=f[0]||j-this.offset.click.left>f[2]?j:j-this.offset.click.left>=f[0]?j-c.grid[0]:j+c.grid[0]:j)),{top:e-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top),left:g-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)}
},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1
},_trigger:function(c,b,d){return d=d||this._uiHash(),a.ui.plugin.call(this,c,[b,d]),"drag"===c&&(this.positionAbs=this._convertPositionTo("absolute")),a.Widget.prototype._trigger.call(this,c,b,d)
},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}
}}),a.ui.plugin.add("draggable","connectToSortable",{start:function(d,c){var e=a(this).data("ui-draggable"),f=e.options,b=a.extend({},c,{item:e.element});
e.sortables=[],a(f.connectToSortable).each(function(){var g=a.data(this,"ui-sortable");
g&&!g.options.disabled&&(e.sortables.push({instance:g,shouldRevert:g.options.revert}),g.refreshPositions(),g._trigger("activate",d,b))
})
},stop:function(c,b){var d=a(this).data("ui-draggable"),e=a.extend({},b,{item:d.element});
a.each(d.sortables,function(){this.instance.isOver?(this.instance.isOver=0,d.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance._mouseStop(c),this.instance.options.helper=this.instance.options._helper,"original"===d.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",c,e))
})
},drag:function(c,b){var d=a(this).data("ui-draggable"),e=this;
a.each(d.sortables,function(){var f=!1,g=this;
this.instance.positionAbs=d.positionAbs,this.instance.helperProportions=d.helperProportions,this.instance.offset.click=d.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(f=!0,a.each(d.sortables,function(){return this.instance.positionAbs=d.positionAbs,this.instance.helperProportions=d.helperProportions,this.instance.offset.click=d.offset.click,this!==g&&this.instance._intersectsWith(this.instance.containerCache)&&a.contains(g.instance.element[0],this.instance.element[0])&&(f=!1),f
})),f?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=a(e).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return b.helper[0]
},c.target=this.instance.currentItem[0],this.instance._mouseCapture(c,!0),this.instance._mouseStart(c,!0,!0),this.instance.offset.click.top=d.offset.click.top,this.instance.offset.click.left=d.offset.click.left,this.instance.offset.parent.left-=d.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=d.offset.parent.top-this.instance.offset.parent.top,d._trigger("toSortable",c),d.dropped=this.instance.element,d.currentItem=d.element,this.instance.fromOutside=d),this.instance.currentItem&&this.instance._mouseDrag(c)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",c,this.instance._uiHash(this.instance)),this.instance._mouseStop(c,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),d._trigger("fromSortable",c),d.dropped=!1)
})
}}),a.ui.plugin.add("draggable","cursor",{start:function(){var c=a("body"),b=a(this).data("ui-draggable").options;
c.css("cursor")&&(b._cursor=c.css("cursor")),c.css("cursor",b.cursor)
},stop:function(){var b=a(this).data("ui-draggable").options;
b._cursor&&a("body").css("cursor",b._cursor)
}}),a.ui.plugin.add("draggable","opacity",{start:function(c,b){var d=a(b.helper),e=a(this).data("ui-draggable").options;
d.css("opacity")&&(e._opacity=d.css("opacity")),d.css("opacity",e.opacity)
},stop:function(c,b){var d=a(this).data("ui-draggable").options;
d._opacity&&a(b.helper).css("opacity",d._opacity)
}}),a.ui.plugin.add("draggable","scroll",{start:function(){var b=a(this).data("ui-draggable");
b.scrollParent[0]!==document&&"HTML"!==b.scrollParent[0].tagName&&(b.overflowOffset=b.scrollParent.offset())
},drag:function(c){var b=a(this).data("ui-draggable"),d=b.options,e=!1;
b.scrollParent[0]!==document&&"HTML"!==b.scrollParent[0].tagName?(d.axis&&"x"===d.axis||(b.overflowOffset.top+b.scrollParent[0].offsetHeight-c.pageY<d.scrollSensitivity?b.scrollParent[0].scrollTop=e=b.scrollParent[0].scrollTop+d.scrollSpeed:c.pageY-b.overflowOffset.top<d.scrollSensitivity&&(b.scrollParent[0].scrollTop=e=b.scrollParent[0].scrollTop-d.scrollSpeed)),d.axis&&"y"===d.axis||(b.overflowOffset.left+b.scrollParent[0].offsetWidth-c.pageX<d.scrollSensitivity?b.scrollParent[0].scrollLeft=e=b.scrollParent[0].scrollLeft+d.scrollSpeed:c.pageX-b.overflowOffset.left<d.scrollSensitivity&&(b.scrollParent[0].scrollLeft=e=b.scrollParent[0].scrollLeft-d.scrollSpeed))):(d.axis&&"x"===d.axis||(c.pageY-a(document).scrollTop()<d.scrollSensitivity?e=a(document).scrollTop(a(document).scrollTop()-d.scrollSpeed):a(window).height()-(c.pageY-a(document).scrollTop())<d.scrollSensitivity&&(e=a(document).scrollTop(a(document).scrollTop()+d.scrollSpeed))),d.axis&&"y"===d.axis||(c.pageX-a(document).scrollLeft()<d.scrollSensitivity?e=a(document).scrollLeft(a(document).scrollLeft()-d.scrollSpeed):a(window).width()-(c.pageX-a(document).scrollLeft())<d.scrollSensitivity&&(e=a(document).scrollLeft(a(document).scrollLeft()+d.scrollSpeed)))),e!==!1&&a.ui.ddmanager&&!d.dropBehaviour&&a.ui.ddmanager.prepareOffsets(b,c)
}}),a.ui.plugin.add("draggable","snap",{start:function(){var c=a(this).data("ui-draggable"),b=c.options;
c.snapElements=[],a(b.snap.constructor!==String?b.snap.items||":data(ui-draggable)":b.snap).each(function(){var d=a(this),e=d.offset();
this!==c.element[0]&&c.snapElements.push({item:this,width:d.outerWidth(),height:d.outerHeight(),top:e.top,left:e.left})
})
},drag:function(q,E){var w,B,L,A,x,F,D,k,J,I,z=a(this).data("ui-draggable"),H=z.options,C=H.snapTolerance,G=E.offset.left,j=G+z.helperProportions.width,K=E.offset.top,e=K+z.helperProportions.height;
for(J=z.snapElements.length-1;
J>=0;
J--){x=z.snapElements[J].left,F=x+z.snapElements[J].width,D=z.snapElements[J].top,k=D+z.snapElements[J].height,x-C>j||G>F+C||D-C>e||K>k+C||!a.contains(z.snapElements[J].item.ownerDocument,z.snapElements[J].item)?(z.snapElements[J].snapping&&z.options.snap.release&&z.options.snap.release.call(z.element,q,a.extend(z._uiHash(),{snapItem:z.snapElements[J].item})),z.snapElements[J].snapping=!1):("inner"!==H.snapMode&&(w=C>=Math.abs(D-e),B=C>=Math.abs(k-K),L=C>=Math.abs(x-j),A=C>=Math.abs(F-G),w&&(E.position.top=z._convertPositionTo("relative",{top:D-z.helperProportions.height,left:0}).top-z.margins.top),B&&(E.position.top=z._convertPositionTo("relative",{top:k,left:0}).top-z.margins.top),L&&(E.position.left=z._convertPositionTo("relative",{top:0,left:x-z.helperProportions.width}).left-z.margins.left),A&&(E.position.left=z._convertPositionTo("relative",{top:0,left:F}).left-z.margins.left)),I=w||B||L||A,"outer"!==H.snapMode&&(w=C>=Math.abs(D-K),B=C>=Math.abs(k-e),L=C>=Math.abs(x-G),A=C>=Math.abs(F-j),w&&(E.position.top=z._convertPositionTo("relative",{top:D,left:0}).top-z.margins.top),B&&(E.position.top=z._convertPositionTo("relative",{top:k-z.helperProportions.height,left:0}).top-z.margins.top),L&&(E.position.left=z._convertPositionTo("relative",{top:0,left:x}).left-z.margins.left),A&&(E.position.left=z._convertPositionTo("relative",{top:0,left:F-z.helperProportions.width}).left-z.margins.left)),!z.snapElements[J].snapping&&(w||B||L||A||I)&&z.options.snap.snap&&z.options.snap.snap.call(z.element,q,a.extend(z._uiHash(),{snapItem:z.snapElements[J].item})),z.snapElements[J].snapping=w||B||L||A||I)
}}}),a.ui.plugin.add("draggable","stack",{start:function(){var c,b=this.data("ui-draggable").options,d=a.makeArray(a(b.stack)).sort(function(f,e){return(parseInt(a(f).css("zIndex"),10)||0)-(parseInt(a(e).css("zIndex"),10)||0)
});
d.length&&(c=parseInt(a(d[0]).css("zIndex"),10)||0,a(d).each(function(e){a(this).css("zIndex",c+e)
}),this.css("zIndex",c+d.length))
}}),a.ui.plugin.add("draggable","zIndex",{start:function(c,b){var d=a(b.helper),e=a(this).data("ui-draggable").options;
d.css("zIndex")&&(e._zIndex=d.css("zIndex")),d.css("zIndex",e.zIndex)
},stop:function(c,b){var d=a(this).data("ui-draggable").options;
d._zIndex&&a(b.helper).css("zIndex",d._zIndex)
}})
})(jQuery);
(function(c){function b(d){return parseInt(d,10)||0
}function a(d){return !isNaN(parseInt(d,10))
}c.widget("ui.resizable",c.ui.mouse,{version:"1.10.3",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var f,e,g,k,d,j=this,h=this.options;
if(this.element.addClass("ui-resizable"),c.extend(this,{_aspectRatio:!!h.aspectRatio,aspectRatio:h.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:h.helper||h.ghost||h.animate?h.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(c("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=h.handles||(c(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String){for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),f=this.handles.split(","),this.handles={},e=0;
f.length>e;
e++){g=c.trim(f[e]),d="ui-resizable-"+g,k=c("<div class='ui-resizable-handle "+d+"'></div>"),k.css({zIndex:h.zIndex}),"se"===g&&k.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[g]=".ui-resizable-"+g,this.element.append(k)
}}this._renderAxis=function(o){var m,p,q,l;
o=o||this.element;
for(m in this.handles){this.handles[m].constructor===String&&(this.handles[m]=c(this.handles[m],this.element).show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(p=c(this.handles[m],this.element),l=/sw|ne|nw|se|n|s/.test(m)?p.outerHeight():p.outerWidth(),q=["padding",/ne|nw|n/.test(m)?"Top":/se|sw|s/.test(m)?"Bottom":/^e$/.test(m)?"Right":"Left"].join(""),o.css(q,l),this._proportionallyResize()),c(this.handles[m]).length
}},this._renderAxis(this.element),this._handles=c(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){j.resizing||(this.className&&(k=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),j.axis=k&&k[1]?k[1]:"se")
}),h.autoHide&&(this._handles.hide(),c(this.element).addClass("ui-resizable-autohide").mouseenter(function(){h.disabled||(c(this).removeClass("ui-resizable-autohide"),j._handles.show())
}).mouseleave(function(){h.disabled||j.resizing||(c(this).addClass("ui-resizable-autohide"),j._handles.hide())
})),this._mouseInit()
},_destroy:function(){this._mouseDestroy();
var e,d=function(f){c(f).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
};
return this.elementIsWrapper&&(d(this.element),e=this.element,this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")}).insertAfter(e),e.remove()),this.originalElement.css("resize",this.originalResizeStyle),d(this.originalElement),this
},_mouseCapture:function(e){var d,f,g=!1;
for(d in this.handles){f=c(this.handles[d])[0],(f===e.target||c.contains(f,e.target))&&(g=!0)
}return !this.options.disabled&&g
},_mouseStart:function(e){var g,l,d,k=this.options,j=this.element.position(),f=this.element;
return this.resizing=!0,/absolute/.test(f.css("position"))?f.css({position:"absolute",top:f.css("top"),left:f.css("left")}):f.is(".ui-draggable")&&f.css({position:"absolute",top:j.top,left:j.left}),this._renderProxy(),g=b(this.helper.css("left")),l=b(this.helper.css("top")),k.containment&&(g+=c(k.containment).scrollLeft()||0,l+=c(k.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:g,top:l},this.size=this._helper?{width:f.outerWidth(),height:f.outerHeight()}:{width:f.width(),height:f.height()},this.originalSize=this._helper?{width:f.outerWidth(),height:f.outerHeight()}:{width:f.width(),height:f.height()},this.originalPosition={left:g,top:l},this.sizeDiff={width:f.outerWidth()-f.width(),height:f.outerHeight()-f.height()},this.originalMousePosition={left:e.pageX,top:e.pageY},this.aspectRatio="number"==typeof k.aspectRatio?k.aspectRatio:this.originalSize.width/this.originalSize.height||1,d=c(".ui-resizable-"+this.axis).css("cursor"),c("body").css("cursor","auto"===d?this.axis+"-resize":d),f.addClass("ui-resizable-resizing"),this._propagate("start",e),!0
},_mouseDrag:function(z){var m,A=this.helper,j={},x=this.originalMousePosition,g=this.axis,e=this.position.top,q=this.position.left,k=this.size.width,y=this.size.height,w=z.pageX-x.left||0,v=z.pageY-x.top||0,f=this._change[g];
return f?(m=f.apply(this,[z,w,v]),this._updateVirtualBoundaries(z.shiftKey),(this._aspectRatio||z.shiftKey)&&(m=this._updateRatio(m,z)),m=this._respectSize(m,z),this._updateCache(m),this._propagate("resize",z),this.position.top!==e&&(j.top=this.position.top+"px"),this.position.left!==q&&(j.left=this.position.left+"px"),this.size.width!==k&&(j.width=this.size.width+"px"),this.size.height!==y&&(j.height=this.size.height+"px"),A.css(j),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),c.isEmptyObject(j)||this._trigger("resize",z,this.ui()),!1):!1
},_mouseStop:function(q){this.resizing=!1;
var j,v,f,m,e,d,k,g=this.options,p=this;
return this._helper&&(j=this._proportionallyResizeElements,v=j.length&&/textarea/i.test(j[0].nodeName),f=v&&c.ui.hasScroll(j[0],"left")?0:p.sizeDiff.height,m=v?0:p.sizeDiff.width,e={width:p.helper.width()-m,height:p.helper.height()-f},d=parseInt(p.element.css("left"),10)+(p.position.left-p.originalPosition.left)||null,k=parseInt(p.element.css("top"),10)+(p.position.top-p.originalPosition.top)||null,g.animate||this.element.css(c.extend(e,{top:k,left:d})),p.helper.height(p.size.height),p.helper.width(p.size.width),this._helper&&!g.animate&&this._proportionallyResize()),c("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",q),this._helper&&this.helper.remove(),!1
},_updateVirtualBoundaries:function(i){var f,g,k,d,j,h=this.options;
j={minWidth:a(h.minWidth)?h.minWidth:0,maxWidth:a(h.maxWidth)?h.maxWidth:1/0,minHeight:a(h.minHeight)?h.minHeight:0,maxHeight:a(h.maxHeight)?h.maxHeight:1/0},(this._aspectRatio||i)&&(f=j.minHeight*this.aspectRatio,k=j.minWidth/this.aspectRatio,g=j.maxHeight*this.aspectRatio,d=j.maxWidth/this.aspectRatio,f>j.minWidth&&(j.minWidth=f),k>j.minHeight&&(j.minHeight=k),j.maxWidth>g&&(j.maxWidth=g),j.maxHeight>d&&(j.maxHeight=d)),this._vBoundaries=j
},_updateCache:function(d){this.offset=this.helper.offset(),a(d.left)&&(this.position.left=d.left),a(d.top)&&(this.position.top=d.top),a(d.height)&&(this.size.height=d.height),a(d.width)&&(this.size.width=d.width)
},_updateRatio:function(g){var d=this.position,f=this.size,h=this.axis;
return a(g.height)?g.width=g.height*this.aspectRatio:a(g.width)&&(g.height=g.width/this.aspectRatio),"sw"===h&&(g.left=d.left+(f.width-g.width),g.top=null),"nw"===h&&(g.top=d.top+(f.height-g.height),g.left=d.left+(f.width-g.width)),g
},_respectSize:function(k){var v=this._vBoundaries,w=this.axis,g=a(k.width)&&v.maxWidth&&v.maxWidth<k.width,p=a(k.height)&&v.maxHeight&&v.maxHeight<k.height,f=a(k.width)&&v.minWidth&&v.minWidth>k.width,d=a(k.height)&&v.minHeight&&v.minHeight>k.height,j=this.originalPosition.left+this.originalSize.width,i=this.position.top+this.size.height,q=/sw|nw|w/.test(w),m=/nw|ne|n/.test(w);
return f&&(k.width=v.minWidth),d&&(k.height=v.minHeight),g&&(k.width=v.maxWidth),p&&(k.height=v.maxHeight),f&&q&&(k.left=j-v.minWidth),g&&q&&(k.left=j-v.maxWidth),d&&m&&(k.top=i-v.minHeight),p&&m&&(k.top=i-v.maxHeight),k.width||k.height||k.left||!k.top?k.width||k.height||k.top||!k.left||(k.left=null):k.top=null,k
},_proportionallyResize:function(){if(this._proportionallyResizeElements.length){var j,g,f,h,k,d=this.helper||this.element;
for(j=0;
this._proportionallyResizeElements.length>j;
j++){if(k=this._proportionallyResizeElements[j],!this.borderDif){for(this.borderDif=[],f=[k.css("borderTopWidth"),k.css("borderRightWidth"),k.css("borderBottomWidth"),k.css("borderLeftWidth")],h=[k.css("paddingTop"),k.css("paddingRight"),k.css("paddingBottom"),k.css("paddingLeft")],g=0;
f.length>g;
g++){this.borderDif[g]=(parseInt(f[g],10)||0)+(parseInt(h[g],10)||0)
}}k.css({height:d.height()-this.borderDif[0]-this.borderDif[2]||0,width:d.width()-this.borderDif[1]-this.borderDif[3]||0})
}}},_renderProxy:function(){var e=this.element,d=this.options;
this.elementOffset=e.offset(),this._helper?(this.helper=this.helper||c("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++d.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element
},_change:{e:function(f,d){return{width:this.originalSize.width+d}
},w:function(h,f){var d=this.originalSize,g=this.originalPosition;
return{left:g.left+f,width:d.width-f}
},n:function(h,f,d){var g=this.originalSize,j=this.originalPosition;
return{top:j.top+d,height:g.height-d}
},s:function(g,f,d){return{height:this.originalSize.height+d}
},se:function(e,d,f){return c.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[e,d,f]))
},sw:function(e,d,f){return c.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[e,d,f]))
},ne:function(e,d,f){return c.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[e,d,f]))
},nw:function(e,d,f){return c.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[e,d,f]))
}},_propagate:function(e,d){c.ui.plugin.call(this,e,[d,this.ui()]),"resize"!==e&&this._trigger(e,d,this.ui())
},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}
}}),c.ui.plugin.add("resizable","animate",{stop:function(q){var j=c(this).data("ui-resizable"),v=j.options,f=j._proportionallyResizeElements,m=f.length&&/textarea/i.test(f[0].nodeName),e=m&&c.ui.hasScroll(f[0],"left")?0:j.sizeDiff.height,d=m?0:j.sizeDiff.width,k={width:j.size.width-d,height:j.size.height-e},g=parseInt(j.element.css("left"),10)+(j.position.left-j.originalPosition.left)||null,p=parseInt(j.element.css("top"),10)+(j.position.top-j.originalPosition.top)||null;
j.element.animate(c.extend(k,p&&g?{top:p,left:g}:{}),{duration:v.animateDuration,easing:v.animateEasing,step:function(){var h={width:parseInt(j.element.css("width"),10),height:parseInt(j.element.css("height"),10),top:parseInt(j.element.css("top"),10),left:parseInt(j.element.css("left"),10)};
f&&f.length&&c(f[0]).css({width:h.width,height:h.height}),j._updateCache(h),j._propagate("resize",q)
}})
}}),c.ui.plugin.add("resizable","containment",{start:function(){var m,y,j,w,g,e,q,k=c(this).data("ui-resizable"),x=k.options,v=k.element,t=x.containment,f=t instanceof c?t.get(0):/parent/.test(t)?v.parent().get(0):t;
f&&(k.containerElement=c(f),/document/.test(t)||t===document?(k.containerOffset={left:0,top:0},k.containerPosition={left:0,top:0},k.parentData={element:c(document),left:0,top:0,width:c(document).width(),height:c(document).height()||document.body.parentNode.scrollHeight}):(m=c(f),y=[],c(["Top","Right","Left","Bottom"]).each(function(d,h){y[d]=b(m.css("padding"+h))
}),k.containerOffset=m.offset(),k.containerPosition=m.position(),k.containerSize={height:m.innerHeight()-y[3],width:m.innerWidth()-y[1]},j=k.containerOffset,w=k.containerSize.height,g=k.containerSize.width,e=c.ui.hasScroll(f,"left")?f.scrollWidth:g,q=c.ui.hasScroll(f)?f.scrollHeight:w,k.parentData={element:f,left:j.left,top:j.top,width:e,height:q}))
},resize:function(x){var k,y,g,v,f=c(this).data("ui-resizable"),e=f.options,m=f.containerOffset,j=f.position,w=f._aspectRatio||x.shiftKey,q={top:0,left:0},p=f.containerElement;
p[0]!==document&&/static/.test(p.css("position"))&&(q=m),j.left<(f._helper?m.left:0)&&(f.size.width=f.size.width+(f._helper?f.position.left-m.left:f.position.left-q.left),w&&(f.size.height=f.size.width/f.aspectRatio),f.position.left=e.helper?m.left:0),j.top<(f._helper?m.top:0)&&(f.size.height=f.size.height+(f._helper?f.position.top-m.top:f.position.top),w&&(f.size.width=f.size.height*f.aspectRatio),f.position.top=f._helper?m.top:0),f.offset.left=f.parentData.left+f.position.left,f.offset.top=f.parentData.top+f.position.top,k=Math.abs((f._helper?f.offset.left-q.left:f.offset.left-q.left)+f.sizeDiff.width),y=Math.abs((f._helper?f.offset.top-q.top:f.offset.top-m.top)+f.sizeDiff.height),g=f.containerElement.get(0)===f.element.parent().get(0),v=/relative|absolute/.test(f.containerElement.css("position")),g&&v&&(k-=f.parentData.left),k+f.size.width>=f.parentData.width&&(f.size.width=f.parentData.width-k,w&&(f.size.height=f.size.width/f.aspectRatio)),y+f.size.height>=f.parentData.height&&(f.size.height=f.parentData.height-y,w&&(f.size.width=f.size.height*f.aspectRatio))
},stop:function(){var p=c(this).data("ui-resizable"),j=p.options,q=p.containerOffset,f=p.containerPosition,m=p.containerElement,e=c(p.helper),d=e.offset(),k=e.outerWidth()-p.sizeDiff.width,g=e.outerHeight()-p.sizeDiff.height;
p._helper&&!j.animate&&/relative/.test(m.css("position"))&&c(this).css({left:d.left-f.left-q.left,width:k,height:g}),p._helper&&!j.animate&&/static/.test(m.css("position"))&&c(this).css({left:d.left-f.left-q.left,width:k,height:g})
}}),c.ui.plugin.add("resizable","alsoResize",{start:function(){var e=c(this).data("ui-resizable"),d=e.options,f=function(g){c(g).each(function(){var h=c(this);
h.data("ui-resizable-alsoresize",{width:parseInt(h.width(),10),height:parseInt(h.height(),10),left:parseInt(h.css("left"),10),top:parseInt(h.css("top"),10)})
})
};
"object"!=typeof d.alsoResize||d.alsoResize.parentNode?f(d.alsoResize):d.alsoResize.length?(d.alsoResize=d.alsoResize[0],f(d.alsoResize)):c.each(d.alsoResize,function(g){f(g)
})
},resize:function(f,e){var j=c(this).data("ui-resizable"),m=j.options,d=j.originalSize,l=j.originalPosition,k={height:j.size.height-d.height||0,width:j.size.width-d.width||0,top:j.position.top-l.top||0,left:j.position.left-l.left||0},g=function(h,i){c(h).each(function(){var q=c(this),u=c(this).data("ui-resizable-alsoresize"),p={},r=i&&i.length?i:q.parents(e.originalElement[0]).length?["width","height"]:["width","height","top","left"];
c.each(r,function(v,o){var n=(u[o]||0)+(k[o]||0);
n&&n>=0&&(p[o]=n||null)
}),q.css(p)
})
};
"object"!=typeof m.alsoResize||m.alsoResize.nodeType?g(m.alsoResize):c.each(m.alsoResize,function(i,h){g(i,h)
})
},stop:function(){c(this).removeData("resizable-alsoresize")
}}),c.ui.plugin.add("resizable","ghost",{start:function(){var e=c(this).data("ui-resizable"),d=e.options,f=e.size;
e.ghost=e.originalElement.clone(),e.ghost.css({opacity:0.25,display:"block",position:"relative",height:f.height,width:f.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof d.ghost?d.ghost:""),e.ghost.appendTo(e.helper)
},resize:function(){var d=c(this).data("ui-resizable");
d.ghost&&d.ghost.css({position:"relative",height:d.size.height,width:d.size.width})
},stop:function(){var d=c(this).data("ui-resizable");
d.ghost&&d.helper&&d.helper.get(0).removeChild(d.ghost.get(0))
}}),c.ui.plugin.add("resizable","grid",{resize:function(){var H=c(this).data("ui-resizable"),y=H.options,I=H.size,q=H.originalSize,E=H.originalPosition,k=H.axis,e="number"==typeof y.grid?[y.grid,y.grid]:y.grid,z=e[0]||1,x=e[1]||1,G=Math.round((I.width-q.width)/z)*z,D=Math.round((I.height-q.height)/x)*x,C=q.width+G,j=q.height+D,B=y.maxWidth&&C>y.maxWidth,w=y.maxHeight&&j>y.maxHeight,A=y.minWidth&&y.minWidth>C,F=y.minHeight&&y.minHeight>j;
y.grid=e,A&&(C+=z),F&&(j+=x),B&&(C-=z),w&&(j-=x),/^(se|s|e)$/.test(k)?(H.size.width=C,H.size.height=j):/^(ne)$/.test(k)?(H.size.width=C,H.size.height=j,H.position.top=E.top-D):/^(sw)$/.test(k)?(H.size.width=C,H.size.height=j,H.position.left=E.left-G):(H.size.width=C,H.size.height=j,H.position.top=E.top-D,H.position.left=E.left-G)
}})
})(jQuery);
(function(b){var d=0,a={},c={};
a.height=a.paddingTop=a.paddingBottom=a.borderTopWidth=a.borderBottomWidth="hide",c.height=c.paddingTop=c.paddingBottom=c.borderTopWidth=c.borderBottomWidth="show",b.widget("ui.accordion",{version:"1.10.3",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var f=this.options;
this.prevShow=this.prevHide=b(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),f.collapsible||f.active!==!1&&null!=f.active||(f.active=0),this._processPanels(),0>f.active&&(f.active+=this.headers.length),this._refresh()
},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():b(),content:this.active.length?this.active.next():b()}
},_createIcons:function(){var f=this.options.icons;
f&&(b("<span>").addClass("ui-accordion-header-icon ui-icon "+f.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(f.header).addClass(f.activeHeader),this.headers.addClass("ui-accordion-icons"))
},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
},_destroy:function(){var e;
this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")
}),this._destroyIcons(),e=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")
}),"content"!==this.options.heightStyle&&e.css("height","")
},_setOption:function(f,g){return"active"===f?(this._activate(g),undefined):("event"===f&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(g)),this._super(f,g),"collapsible"!==f||g||this.options.active!==!1||this._activate(0),"icons"===f&&(this._destroyIcons(),g&&this._createIcons()),"disabled"===f&&this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!g),undefined)
},_keydown:function(j){if(!j.altKey&&!j.ctrlKey){var g=b.ui.keyCode,h=this.headers.length,k=this.headers.index(j.target),f=!1;
switch(j.keyCode){case g.RIGHT:case g.DOWN:f=this.headers[(k+1)%h];
break;
case g.LEFT:case g.UP:f=this.headers[(k-1+h)%h];
break;
case g.SPACE:case g.ENTER:this._eventHandler(j);
break;
case g.HOME:f=this.headers[0];
break;
case g.END:f=this.headers[h-1]
}f&&(b(j.target).attr("tabIndex",-1),b(f).attr("tabIndex",0),f.focus(),j.preventDefault())
}},_panelKeyDown:function(f){f.keyCode===b.ui.keyCode.UP&&f.ctrlKey&&b(f.currentTarget).prev().focus()
},refresh:function(){var f=this.options;
this._processPanels(),f.active===!1&&f.collapsible===!0||!this.headers.length?(f.active=!1,this.active=b()):f.active===!1?this._activate(0):this.active.length&&!b.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(f.active=!1,this.active=b()):this._activate(Math.max(0,f.active-1)):f.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()
},_processPanels:function(){this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
},_refresh:function(){var f,g=this.options,j=g.heightStyle,e=this.element.parent(),h=this.accordionId="ui-accordion-"+(this.element.attr("id")||++d);
this.active=this._findActive(g.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(o){var l=b(this),m=l.attr("id"),p=l.next(),k=p.attr("id");
m||(m=h+"-header-"+o,l.attr("id",m)),k||(k=h+"-panel-"+o,p.attr("id",k)),l.attr("aria-controls",k),p.attr("aria-labelledby",m)
}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false",tabIndex:-1}).next().attr({"aria-expanded":"false","aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true",tabIndex:0}).next().attr({"aria-expanded":"true","aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(g.event),"fill"===j?(f=e.height(),this.element.siblings(":visible").each(function(){var k=b(this),i=k.css("position");
"absolute"!==i&&"fixed"!==i&&(f-=k.outerHeight(!0))
}),this.headers.each(function(){f-=b(this).outerHeight(!0)
}),this.headers.next().each(function(){b(this).height(Math.max(0,f-b(this).innerHeight()+b(this).height()))
}).css("overflow","auto")):"auto"===j&&(f=0,this.headers.next().each(function(){f=Math.max(f,b(this).css("height","").height())
}).height(f))
},_activate:function(g){var f=this._findActive(g)[0];
f!==this.active[0]&&(f=f||this.active[0],this._eventHandler({target:f,currentTarget:f,preventDefault:b.noop}))
},_findActive:function(f){return"number"==typeof f?this.headers.eq(f):b()
},_setupEvents:function(g){var f={keydown:"_keydown"};
g&&b.each(g.split(" "),function(h,i){f[i]="_eventHandler"
}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,f),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)
},_eventHandler:function(q){var m=this.options,u=this.active,j=b(q.currentTarget),t=j[0]===u[0],g=t&&m.collapsible,f=g?b():j.next(),p=u.next(),k={oldHeader:u,oldPanel:p,newHeader:g?b():j,newPanel:f};
q.preventDefault(),t&&!m.collapsible||this._trigger("beforeActivate",q,k)===!1||(m.active=g?!1:this.headers.index(j),this.active=t?b():j,this._toggle(k),u.removeClass("ui-accordion-header-active ui-state-active"),m.icons&&u.children(".ui-accordion-header-icon").removeClass(m.icons.activeHeader).addClass(m.icons.header),t||(j.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),m.icons&&j.children(".ui-accordion-header-icon").removeClass(m.icons.header).addClass(m.icons.activeHeader),j.next().addClass("ui-accordion-content-active")))
},_toggle:function(h){var f=h.newPanel,g=this.prevShow.length?this.prevShow:h.oldPanel;
this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=f,this.prevHide=g,this.options.animate?this._animate(f,g,h):(g.hide(),f.show(),this._toggleComplete(h)),g.attr({"aria-expanded":"false","aria-hidden":"true"}),g.prev().attr("aria-selected","false"),f.length&&g.length?g.prev().attr("tabIndex",-1):f.length&&this.headers.filter(function(){return 0===b(this).attr("tabIndex")
}).attr("tabIndex",-1),f.attr({"aria-expanded":"true","aria-hidden":"false"}).prev().attr({"aria-selected":"true",tabIndex:0})
},_animate:function(z,q,j){var x,i,f,m=this,k=0,w=z.length&&(!q.length||z.index()<q.index()),y=this.options.animate||{},v=w&&y.down||y,g=function(){m._toggleComplete(j)
};
return"number"==typeof v&&(f=v),"string"==typeof v&&(i=v),i=i||v.easing||y.easing,f=f||v.duration||y.duration,q.length?z.length?(x=z.show().outerHeight(),q.animate(a,{duration:f,easing:i,step:function(h,l){l.now=Math.round(h)
}}),z.hide().animate(c,{duration:f,easing:i,complete:g,step:function(h,e){e.now=Math.round(h),"height"!==e.prop?k+=e.now:"content"!==m.options.heightStyle&&(e.now=Math.round(x-q.outerHeight()-k),k=0)
}}),undefined):q.animate(a,f,i,g):z.animate(c,f,i,g)
},_toggleComplete:function(f){var g=f.oldPanel;
g.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),g.length&&(g.parent()[0].className=g.parent()[0].className),this._trigger("activate",null,f)
}})
})(jQuery);
(function(a){var b=0;
a.widget("ui.autocomplete",{version:"1.10.3",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},pending:0,_create:function(){var g,d,f,j=this.element[0].nodeName.toLowerCase(),c="textarea"===j,h="input"===j;
this.isMultiLine=c?!0:h?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[c||h?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(i){if(this.element.prop("readOnly")){return g=!0,f=!0,d=!0,undefined
}g=!1,f=!1,d=!1;
var e=a.ui.keyCode;
switch(i.keyCode){case e.PAGE_UP:g=!0,this._move("previousPage",i);
break;
case e.PAGE_DOWN:g=!0,this._move("nextPage",i);
break;
case e.UP:g=!0,this._keyEvent("previous",i);
break;
case e.DOWN:g=!0,this._keyEvent("next",i);
break;
case e.ENTER:case e.NUMPAD_ENTER:this.menu.active&&(g=!0,i.preventDefault(),this.menu.select(i));
break;
case e.TAB:this.menu.active&&this.menu.select(i);
break;
case e.ESCAPE:this.menu.element.is(":visible")&&(this._value(this.term),this.close(i),i.preventDefault());
break;
default:d=!0,this._searchTimeout(i)
}},keypress:function(e){if(g){return g=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&e.preventDefault(),undefined
}if(!d){var i=a.ui.keyCode;
switch(e.keyCode){case i.PAGE_UP:this._move("previousPage",e);
break;
case i.PAGE_DOWN:this._move("nextPage",e);
break;
case i.UP:this._keyEvent("previous",e);
break;
case i.DOWN:this._keyEvent("next",e)
}}},input:function(e){return f?(f=!1,e.preventDefault(),undefined):(this._searchTimeout(e),undefined)
},focus:function(){this.selectedItem=null,this.previous=this._value()
},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,undefined):(clearTimeout(this.searching),this.close(e),this._change(e),undefined)
}}),this._initSource(),this.menu=a("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().data("ui-menu"),this._on(this.menu.element,{mousedown:function(l){l.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur
});
var k=this.menu.element[0];
a(l.target).closest(".ui-menu-item").length||this._delay(function(){var i=this;
this.document.one("mousedown",function(e){e.target===i.element[0]||e.target===k||a.contains(k,e.target)||i.close()
})
})
},menufocus:function(m,k){if(this.isNewMenu&&(this.isNewMenu=!1,m.originalEvent&&/^mouse/.test(m.originalEvent.type))){return this.menu.blur(),this.document.one("mousemove",function(){a(m.target).trigger(m.originalEvent)
}),undefined
}var l=k.item.data("ui-autocomplete-item");
!1!==this._trigger("focus",m,{item:l})?m.originalEvent&&/^key/.test(m.originalEvent.type)&&this._value(l.value):this.liveRegion.text(l.value)
},menuselect:function(l,n){var k=n.item.data("ui-autocomplete-item"),m=this.previous;
this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=m,this._delay(function(){this.previous=m,this.selectedItem=k
})),!1!==this._trigger("select",l,{item:k})&&this._value(k.value),this.term=this._value(),this.close(l),this.selectedItem=k
}}),this.liveRegion=a("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertBefore(this.element),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")
}})
},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()
},_setOption:function(c,d){this._super(c,d),"source"===c&&this._initSource(),"appendTo"===c&&this.menu.element.appendTo(this._appendTo()),"disabled"===c&&d&&this.xhr&&this.xhr.abort()
},_appendTo:function(){var c=this.options.appendTo;
return c&&(c=c.jquery||c.nodeType?a(c):this.document.find(c).eq(0)),c||(c=this.element.closest(".ui-front")),c.length||(c=this.document[0].body),c
},_initSource:function(){var f,c,d=this;
a.isArray(this.options.source)?(f=this.options.source,this.source=function(e,g){g(a.ui.autocomplete.filter(f,e.term))
}):"string"==typeof this.options.source?(c=this.options.source,this.source=function(g,h){d.xhr&&d.xhr.abort(),d.xhr=a.ajax({url:c,data:g,dataType:"json",success:function(e){h(e)
},error:function(){h([])
}})
}):this.source=this.options.source
},_searchTimeout:function(c){clearTimeout(this.searching),this.searching=this._delay(function(){this.term!==this._value()&&(this.selectedItem=null,this.search(null,c))
},this.options.delay)
},search:function(c,d){return c=null!=c?c:this._value(),this.term=this._value(),c.length<this.options.minLength?this.close(d):this._trigger("search",d)!==!1?this._search(c):undefined
},_search:function(c){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:c},this._response())
},_response:function(){var d=this,c=++b;
return function(e){c===b&&d.__response(e),d.pending--,d.pending||d.element.removeClass("ui-autocomplete-loading")
}
},__response:function(c){c&&(c=this._normalize(c)),this._trigger("response",null,{content:c}),!this.options.disabled&&c&&c.length&&!this.cancelSearch?(this._suggest(c),this._trigger("open")):this._close()
},close:function(c){this.cancelSearch=!0,this._close(c)
},_close:function(c){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",c))
},_change:function(c){this.previous!==this._value()&&this._trigger("change",c,{item:this.selectedItem})
},_normalize:function(c){return c.length&&c[0].label&&c[0].value?c:a.map(c,function(d){return"string"==typeof d?{label:d,value:d}:a.extend({label:d.label||d.value,value:d.value||d.label},d)
})
},_suggest:function(d){var c=this.menu.element.empty();
this._renderMenu(c,d),this.isNewMenu=!0,this.menu.refresh(),c.show(),this._resizeMenu(),c.position(a.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()
},_resizeMenu:function(){var c=this.menu.element;
c.outerWidth(Math.max(c.width("").outerWidth()+1,this.element.outerWidth()))
},_renderMenu:function(f,c){var d=this;
a.each(c,function(g,e){d._renderItemData(f,e)
})
},_renderItemData:function(c,d){return this._renderItem(c,d).data("ui-autocomplete-item",d)
},_renderItem:function(d,c){return a("<li>").append(a("<a>").text(c.label)).appendTo(d)
},_move:function(c,d){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(c)||this.menu.isLastItem()&&/^next/.test(c)?(this._value(this.term),this.menu.blur(),undefined):(this.menu[c](d),undefined):(this.search(null,d),undefined)
},widget:function(){return this.menu.element
},_value:function(){return this.valueMethod.apply(this.element,arguments)
},_keyEvent:function(c,d){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(c,d),d.preventDefault())
}}),a.extend(a.ui.autocomplete,{escapeRegex:function(c){return c.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")
},filter:function(f,c){var d=RegExp(a.ui.autocomplete.escapeRegex(c),"i");
return a.grep(f,function(e){return d.test(e.label||e.value||e)
})
}}),a.widget("ui.autocomplete",a.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(c){return c+(c>1?" results are":" result is")+" available, use up and down arrow keys to navigate."
}}},__response:function(c){var d;
this._superApply(arguments),this.options.disabled||this.cancelSearch||(d=c&&c.length?this.options.messages.results(c.length):this.options.messages.noResults,this.liveRegion.text(d))
}})
})(jQuery);
(function(p){var k,g,q,d,m="ui-button ui-widget ui-state-default ui-corner-all",c="ui-state-hover ui-state-active ",b="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",j=function(){var a=p(this);
setTimeout(function(){a.find(":ui-button").button("refresh")
},1)
},f=function(l){var a=l.name,h=l.form,o=p([]);
return a&&(a=a.replace(/'/g,"\\'"),o=h?p(h).find("[name='"+a+"']"):p("[name='"+a+"']",l.ownerDocument).filter(function(){return !this.form
})),o
};
p.widget("ui.button",{version:"1.10.3",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,j),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");
var i=this,e=this.options,l="checkbox"===this.type||"radio"===this.type,a=l?"":"ui-state-active",h="ui-state-focus";
null===e.label&&(e.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(m).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){e.disabled||this===k&&p(this).addClass("ui-state-active")
}).bind("mouseleave"+this.eventNamespace,function(){e.disabled||p(this).removeClass(a)
}).bind("click"+this.eventNamespace,function(n){e.disabled&&(n.preventDefault(),n.stopImmediatePropagation())
}),this.element.bind("focus"+this.eventNamespace,function(){i.buttonElement.addClass(h)
}).bind("blur"+this.eventNamespace,function(){i.buttonElement.removeClass(h)
}),l&&(this.element.bind("change"+this.eventNamespace,function(){d||i.refresh()
}),this.buttonElement.bind("mousedown"+this.eventNamespace,function(n){e.disabled||(d=!1,g=n.pageX,q=n.pageY)
}).bind("mouseup"+this.eventNamespace,function(n){e.disabled||(g!==n.pageX||q!==n.pageY)&&(d=!0)
})),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){return e.disabled||d?!1:undefined
}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(e.disabled||d){return !1
}p(this).addClass("ui-state-active"),i.buttonElement.attr("aria-pressed","true");
var n=i.element[0];
f(n).not(n).map(function(){return p(this).button("widget")[0]
}).removeClass("ui-state-active").attr("aria-pressed","false")
}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return e.disabled?!1:(p(this).addClass("ui-state-active"),k=this,i.document.one("mouseup",function(){k=null
}),undefined)
}).bind("mouseup"+this.eventNamespace,function(){return e.disabled?!1:(p(this).removeClass("ui-state-active"),undefined)
}).bind("keydown"+this.eventNamespace,function(n){return e.disabled?!1:((n.keyCode===p.ui.keyCode.SPACE||n.keyCode===p.ui.keyCode.ENTER)&&p(this).addClass("ui-state-active"),undefined)
}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){p(this).removeClass("ui-state-active")
}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(n){n.keyCode===p.ui.keyCode.SPACE&&p(this).click()
})),this._setOption("disabled",e.disabled),this._resetButton()
},_determineButtonType:function(){var h,l,a;
this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button","checkbox"===this.type||"radio"===this.type?(h=this.element.parents().last(),l="label[for='"+this.element.attr("id")+"']",this.buttonElement=h.find(l),this.buttonElement.length||(h=h.length?h.siblings():this.element.siblings(),this.buttonElement=h.filter(l),this.buttonElement.length||(this.buttonElement=h.find(l))),this.element.addClass("ui-helper-hidden-accessible"),a=this.element.is(":checked"),a&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",a)):this.buttonElement=this.element
},widget:function(){return this.buttonElement
},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(m+" "+c+" "+b).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")
},_setOption:function(a,h){return this._super(a,h),"disabled"===a?(h?this.element.prop("disabled",!0):this.element.prop("disabled",!1),undefined):(this._resetButton(),undefined)
},refresh:function(){var a=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");
a!==this.options.disabled&&this._setOption("disabled",a),"radio"===this.type?f(this.element[0]).each(function(){p(this).is(":checked")?p(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):p(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")
}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))
},_resetButton:function(){if("input"===this.type){return this.options.label&&this.element.val(this.options.label),undefined
}var r=this.buttonElement.removeClass(b),l=p("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(r.empty()).text(),o=this.options.icons,t=o.primary&&o.secondary,h=[];
o.primary||o.secondary?(this.options.text&&h.push("ui-button-text-icon"+(t?"s":o.primary?"-primary":"-secondary")),o.primary&&r.prepend("<span class='ui-button-icon-primary ui-icon "+o.primary+"'></span>"),o.secondary&&r.append("<span class='ui-button-icon-secondary ui-icon "+o.secondary+"'></span>"),this.options.text||(h.push(t?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||r.attr("title",p.trim(l)))):h.push("ui-button-text-only"),r.addClass(h.join(" "))
}}),p.widget("ui.buttonset",{version:"1.10.3",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")
},_init:function(){this.refresh()
},_setOption:function(a,h){"disabled"===a&&this.buttons.button("option",a,h),this._super(a,h)
},refresh:function(){var a="rtl"===this.element.css("direction");
this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return p(this).button("widget")[0]
}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(a?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(a?"ui-corner-left":"ui-corner-right").end().end()
},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return p(this).button("widget")[0]
}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
}})
})(jQuery);
(function(d,h){function c(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},d.extend(this._defaults,this.regional[""]),this.dpDiv=f(d("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
}function f(k){var a="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
return k.delegate(a,"mouseout",function(){d(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&d(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&d(this).removeClass("ui-datepicker-next-hover")
}).delegate(a,"mouseover",function(){d.datepicker._isDisabledDatepicker(b.inline?k.parent()[0]:b.input[0])||(d(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),d(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&d(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&d(this).addClass("ui-datepicker-next-hover"))
})
}function j(l,a){d.extend(l,a);
for(var k in a){null==a[k]&&(l[k]=a[k])
}return l
}d.extend(d.ui,{datepicker:{version:"1.10.3"}});
var b,g="datepicker";
d.extend(c.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv
},setDefaults:function(a){return j(this._defaults,a||{}),this
},_attachDatepicker:function(o,l){var m,p,k;
m=o.nodeName.toLowerCase(),p="div"===m||"span"===m,o.id||(this.uuid+=1,o.id="dp"+this.uuid),k=this._newInst(d(o),p),k.settings=d.extend({},l||{}),"input"===m?this._connectDatepicker(o,k):p&&this._inlineDatepicker(o,k)
},_newInst:function(k,a){var l=k[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");
return{id:l,input:k,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:a,dpDiv:a?f(d("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}
},_connectDatepicker:function(l,a){var k=d(l);
a.append=d([]),a.trigger=d([]),k.hasClass(this.markerClassName)||(this._attachments(k,a),k.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(a),d.data(l,g,a),a.settings.disabled&&this._disableDatepicker(l))
},_attachments:function(q,l){var m,u,k,p=this._get(l,"appendText"),t=this._get(l,"isRTL");
l.append&&l.append.remove(),p&&(l.append=d("<span class='"+this._appendClass+"'>"+p+"</span>"),q[t?"before":"after"](l.append)),q.unbind("focus",this._showDatepicker),l.trigger&&l.trigger.remove(),m=this._get(l,"showOn"),("focus"===m||"both"===m)&&q.focus(this._showDatepicker),("button"===m||"both"===m)&&(u=this._get(l,"buttonText"),k=this._get(l,"buttonImage"),l.trigger=d(this._get(l,"buttonImageOnly")?d("<img/>").addClass(this._triggerClass).attr({src:k,alt:u,title:u}):d("<button type='button'></button>").addClass(this._triggerClass).html(k?d("<img/>").attr({src:k,alt:u,title:u}):u)),q[t?"before":"after"](l.trigger),l.trigger.click(function(){return d.datepicker._datepickerShowing&&d.datepicker._lastInput===q[0]?d.datepicker._hideDatepicker():d.datepicker._datepickerShowing&&d.datepicker._lastInput!==q[0]?(d.datepicker._hideDatepicker(),d.datepicker._showDatepicker(q[0])):d.datepicker._showDatepicker(q[0]),!1
}))
},_autoSize:function(m){if(this._get(m,"autoSize")&&!m.inline){var q,l,o,u,k=new Date(2009,11,20),p=this._get(m,"dateFormat");
p.match(/[DM]/)&&(q=function(a){for(l=0,o=0,u=0;
a.length>u;
u++){a[u].length>l&&(l=a[u].length,o=u)
}return o
},k.setMonth(q(this._get(m,p.match(/MM/)?"monthNames":"monthNamesShort"))),k.setDate(q(this._get(m,p.match(/DD/)?"dayNames":"dayNamesShort"))+20-k.getDay())),m.input.attr("size",this._formatDate(m,k).length)
}},_inlineDatepicker:function(l,a){var k=d(l);
k.hasClass(this.markerClassName)||(k.addClass(this.markerClassName).append(a.dpDiv),d.data(l,g,a),this._setDate(a,this._getDefaultDate(a),!0),this._updateDatepicker(a),this._updateAlternate(a),a.settings.disabled&&this._disableDatepicker(l),a.dpDiv.css("display","block"))
},_dialogDatepicker:function(t,q,z,x,m){var r,n,w,y,v,k=this._dialogInst;
return k||(this.uuid+=1,r="dp"+this.uuid,this._dialogInput=d("<input type='text' id='"+r+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),d("body").append(this._dialogInput),k=this._dialogInst=this._newInst(this._dialogInput,!1),k.settings={},d.data(this._dialogInput[0],g,k)),j(k.settings,x||{}),q=q&&q.constructor===Date?this._formatDate(k,q):q,this._dialogInput.val(q),this._pos=m?m.length?m:[m.pageX,m.pageY]:null,this._pos||(n=document.documentElement.clientWidth,w=document.documentElement.clientHeight,y=document.documentElement.scrollLeft||document.body.scrollLeft,v=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[n/2-100+y,w/2-150+v]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),k.settings.onSelect=z,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),d.blockUI&&d.blockUI(this.dpDiv),d.data(this._dialogInput[0],g,k),this
},_destroyDatepicker:function(l){var a,k=d(l),m=d.data(l,g);
k.hasClass(this.markerClassName)&&(a=l.nodeName.toLowerCase(),d.removeData(l,g),"input"===a?(m.append.remove(),m.trigger.remove(),k.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===a||"span"===a)&&k.removeClass(this.markerClassName).empty())
},_enableDatepicker:function(o){var l,m,p=d(o),k=d.data(o,g);
p.hasClass(this.markerClassName)&&(l=o.nodeName.toLowerCase(),"input"===l?(o.disabled=!1,k.trigger.filter("button").each(function(){this.disabled=!1
}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===l||"span"===l)&&(m=p.children("."+this._inlineClass),m.children().removeClass("ui-state-disabled"),m.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=d.map(this._disabledInputs,function(a){return a===o?null:a
}))
},_disableDatepicker:function(o){var l,m,p=d(o),k=d.data(o,g);
p.hasClass(this.markerClassName)&&(l=o.nodeName.toLowerCase(),"input"===l?(o.disabled=!0,k.trigger.filter("button").each(function(){this.disabled=!0
}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===l||"span"===l)&&(m=p.children("."+this._inlineClass),m.children().addClass("ui-state-disabled"),m.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=d.map(this._disabledInputs,function(a){return a===o?null:a
}),this._disabledInputs[this._disabledInputs.length]=o)
},_isDisabledDatepicker:function(a){if(!a){return !1
}for(var i=0;
this._disabledInputs.length>i;
i++){if(this._disabledInputs[i]===a){return !0
}}return !1
},_getInst:function(k){try{return d.data(k,g)
}catch(a){throw"Missing instance data for this datepicker"
}},_optionDatepicker:function(m,p,k){var q,t,n,e,u=this._getInst(m);
return 2===arguments.length&&"string"==typeof p?"defaults"===p?d.extend({},d.datepicker._defaults):u?"all"===p?d.extend({},u.settings):this._get(u,p):null:(q=p||{},"string"==typeof p&&(q={},q[p]=k),u&&(this._curInst===u&&this._hideDatepicker(),t=this._getDateDatepicker(m,!0),n=this._getMinMaxDate(u,"min"),e=this._getMinMaxDate(u,"max"),j(u.settings,q),null!==n&&q.dateFormat!==h&&q.minDate===h&&(u.settings.minDate=this._formatDate(u,n)),null!==e&&q.dateFormat!==h&&q.maxDate===h&&(u.settings.maxDate=this._formatDate(u,e)),"disabled" in q&&(q.disabled?this._disableDatepicker(m):this._enableDatepicker(m)),this._attachments(d(m),u),this._autoSize(u),this._setDate(u,t),this._updateAlternate(u),this._updateDatepicker(u)),h)
},_changeDatepicker:function(k,l,a){this._optionDatepicker(k,l,a)
},_refreshDatepicker:function(a){var i=this._getInst(a);
i&&this._updateDatepicker(i)
},_setDateDatepicker:function(k,l){var a=this._getInst(k);
a&&(this._setDate(a,l),this._updateDatepicker(a),this._updateAlternate(a))
},_getDateDatepicker:function(k,l){var a=this._getInst(k);
return a&&!a.inline&&this._setDateFromField(a,l),a?this._getDate(a):null
},_doKeyDown:function(q){var l,m,u,k=d.datepicker._getInst(q.target),p=!0,t=k.dpDiv.is(".ui-datepicker-rtl");
if(k._keyEvent=!0,d.datepicker._datepickerShowing){switch(q.keyCode){case 9:d.datepicker._hideDatepicker(),p=!1;
break;
case 13:return u=d("td."+d.datepicker._dayOverClass+":not(."+d.datepicker._currentClass+")",k.dpDiv),u[0]&&d.datepicker._selectDay(q.target,k.selectedMonth,k.selectedYear,u[0]),l=d.datepicker._get(k,"onSelect"),l?(m=d.datepicker._formatDate(k),l.apply(k.input?k.input[0]:null,[m,k])):d.datepicker._hideDatepicker(),!1;
case 27:d.datepicker._hideDatepicker();
break;
case 33:d.datepicker._adjustDate(q.target,q.ctrlKey?-d.datepicker._get(k,"stepBigMonths"):-d.datepicker._get(k,"stepMonths"),"M");
break;
case 34:d.datepicker._adjustDate(q.target,q.ctrlKey?+d.datepicker._get(k,"stepBigMonths"):+d.datepicker._get(k,"stepMonths"),"M");
break;
case 35:(q.ctrlKey||q.metaKey)&&d.datepicker._clearDate(q.target),p=q.ctrlKey||q.metaKey;
break;
case 36:(q.ctrlKey||q.metaKey)&&d.datepicker._gotoToday(q.target),p=q.ctrlKey||q.metaKey;
break;
case 37:(q.ctrlKey||q.metaKey)&&d.datepicker._adjustDate(q.target,t?1:-1,"D"),p=q.ctrlKey||q.metaKey,q.originalEvent.altKey&&d.datepicker._adjustDate(q.target,q.ctrlKey?-d.datepicker._get(k,"stepBigMonths"):-d.datepicker._get(k,"stepMonths"),"M");
break;
case 38:(q.ctrlKey||q.metaKey)&&d.datepicker._adjustDate(q.target,-7,"D"),p=q.ctrlKey||q.metaKey;
break;
case 39:(q.ctrlKey||q.metaKey)&&d.datepicker._adjustDate(q.target,t?-1:1,"D"),p=q.ctrlKey||q.metaKey,q.originalEvent.altKey&&d.datepicker._adjustDate(q.target,q.ctrlKey?+d.datepicker._get(k,"stepBigMonths"):+d.datepicker._get(k,"stepMonths"),"M");
break;
case 40:(q.ctrlKey||q.metaKey)&&d.datepicker._adjustDate(q.target,7,"D"),p=q.ctrlKey||q.metaKey;
break;
default:p=!1
}}else{36===q.keyCode&&q.ctrlKey?d.datepicker._showDatepicker(this):p=!1
}p&&(q.preventDefault(),q.stopPropagation())
},_doKeyPress:function(k){var l,m,e=d.datepicker._getInst(k.target);
return d.datepicker._get(e,"constrainInput")?(l=d.datepicker._possibleChars(d.datepicker._get(e,"dateFormat")),m=String.fromCharCode(null==k.charCode?k.keyCode:k.charCode),k.ctrlKey||k.metaKey||" ">m||!l||l.indexOf(m)>-1):h
},_doKeyUp:function(l){var a,k=d.datepicker._getInst(l.target);
if(k.input.val()!==k.lastVal){try{a=d.datepicker.parseDate(d.datepicker._get(k,"dateFormat"),k.input?k.input.val():null,d.datepicker._getFormatConfig(k)),a&&(d.datepicker._setDateFromField(k),d.datepicker._updateAlternate(k),d.datepicker._updateDatepicker(k))
}catch(m){}}return !0
},_showDatepicker:function(u){if(u=u.target||u,"input"!==u.nodeName.toLowerCase()&&(u=d("input",u.parentNode)[0]),!d.datepicker._isDisabledDatepicker(u)&&d.datepicker._lastInput!==u){var n,q,m,t,v,p,k;
n=d.datepicker._getInst(u),d.datepicker._curInst&&d.datepicker._curInst!==n&&(d.datepicker._curInst.dpDiv.stop(!0,!0),n&&d.datepicker._datepickerShowing&&d.datepicker._hideDatepicker(d.datepicker._curInst.input[0])),q=d.datepicker._get(n,"beforeShow"),m=q?q.apply(u,[u,n]):{},m!==!1&&(j(n.settings,m),n.lastVal=null,d.datepicker._lastInput=u,d.datepicker._setDateFromField(n),d.datepicker._inDialog&&(u.value=""),d.datepicker._pos||(d.datepicker._pos=d.datepicker._findPos(u),d.datepicker._pos[1]+=u.offsetHeight),t=!1,d(u).parents().each(function(){return t|="fixed"===d(this).css("position"),!t
}),v={left:d.datepicker._pos[0],top:d.datepicker._pos[1]},d.datepicker._pos=null,n.dpDiv.empty(),n.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),d.datepicker._updateDatepicker(n),v=d.datepicker._checkOffset(n,v,t),n.dpDiv.css({position:d.datepicker._inDialog&&d.blockUI?"static":t?"fixed":"absolute",display:"none",left:v.left+"px",top:v.top+"px"}),n.inline||(p=d.datepicker._get(n,"showAnim"),k=d.datepicker._get(n,"duration"),n.dpDiv.zIndex(d(u).zIndex()+1),d.datepicker._datepickerShowing=!0,d.effects&&d.effects.effect[p]?n.dpDiv.show(p,d.datepicker._get(n,"showOptions"),k):n.dpDiv[p||"show"](p?k:null),d.datepicker._shouldFocusInput(n)&&n.input.focus(),d.datepicker._curInst=n))
}},_updateDatepicker:function(m){this.maxRows=4,b=m,m.dpDiv.empty().append(this._generateHTML(m)),this._attachHandlers(m),m.dpDiv.find("."+this._dayOverClass+" a").mouseover();
var a,k=this._getNumberOfMonths(m),o=k[1],l=17;
m.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),o>1&&m.dpDiv.addClass("ui-datepicker-multi-"+o).css("width",l*o+"em"),m.dpDiv[(1!==k[0]||1!==k[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),m.dpDiv[(this._get(m,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),m===d.datepicker._curInst&&d.datepicker._datepickerShowing&&d.datepicker._shouldFocusInput(m)&&m.input.focus(),m.yearshtml&&(a=m.yearshtml,setTimeout(function(){a===m.yearshtml&&m.yearshtml&&m.dpDiv.find("select.ui-datepicker-year:first").replaceWith(m.yearshtml),a=m.yearshtml=null
},0))
},_shouldFocusInput:function(a){return a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&!a.input.is(":focus")
},_checkOffset:function(v,t,x){var p=v.dpDiv.outerWidth(),w=v.dpDiv.outerHeight(),k=v.input?v.input.outerWidth():0,m=v.input?v.input.outerHeight():0,u=document.documentElement.clientWidth+(x?0:d(document).scrollLeft()),q=document.documentElement.clientHeight+(x?0:d(document).scrollTop());
return t.left-=this._get(v,"isRTL")?p-k:0,t.left-=x&&t.left===v.input.offset().left?d(document).scrollLeft():0,t.top-=x&&t.top===v.input.offset().top+m?d(document).scrollTop():0,t.left-=Math.min(t.left,t.left+p>u&&u>p?Math.abs(t.left+p-u):0),t.top-=Math.min(t.top,t.top+w>q&&q>w?Math.abs(w+m):0),t
},_findPos:function(l){for(var a,k=this._getInst(l),m=this._get(k,"isRTL");
l&&("hidden"===l.type||1!==l.nodeType||d.expr.filters.hidden(l));
){l=l[m?"previousSibling":"nextSibling"]
}return a=d(l).offset(),[a.left,a.top]
},_hideDatepicker:function(p){var l,m,r,k,q=this._curInst;
!q||p&&q!==d.data(p,g)||this._datepickerShowing&&(l=this._get(q,"showAnim"),m=this._get(q,"duration"),r=function(){d.datepicker._tidyDialog(q)
},d.effects&&(d.effects.effect[l]||d.effects[l])?q.dpDiv.hide(l,d.datepicker._get(q,"showOptions"),m,r):q.dpDiv["slideDown"===l?"slideUp":"fadeIn"===l?"fadeOut":"hide"](l?m:null,r),l||r(),this._datepickerShowing=!1,k=this._get(q,"onClose"),k&&k.apply(q.input?q.input[0]:null,[q.input?q.input.val():"",q]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),d.blockUI&&(d.unblockUI(),d("body").append(this.dpDiv))),this._inDialog=!1)
},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
},_checkExternalClick:function(l){if(d.datepicker._curInst){var a=d(l.target),k=d.datepicker._getInst(a[0]);
(a[0].id!==d.datepicker._mainDivId&&0===a.parents("#"+d.datepicker._mainDivId).length&&!a.hasClass(d.datepicker.markerClassName)&&!a.closest("."+d.datepicker._triggerClass).length&&d.datepicker._datepickerShowing&&(!d.datepicker._inDialog||!d.blockUI)||a.hasClass(d.datepicker.markerClassName)&&d.datepicker._curInst!==k)&&d.datepicker._hideDatepicker()
}},_adjustDate:function(o,l,m){var p=d(o),k=this._getInst(p[0]);
this._isDisabledDatepicker(p[0])||(this._adjustInstDate(k,l+("M"===m?this._get(k,"showCurrentAtPos"):0),m),this._updateDatepicker(k))
},_gotoToday:function(l){var a,k=d(l),m=this._getInst(k[0]);
this._get(m,"gotoCurrent")&&m.currentDay?(m.selectedDay=m.currentDay,m.drawMonth=m.selectedMonth=m.currentMonth,m.drawYear=m.selectedYear=m.currentYear):(a=new Date,m.selectedDay=a.getDate(),m.drawMonth=m.selectedMonth=a.getMonth(),m.drawYear=m.selectedYear=a.getFullYear()),this._notifyChange(m),this._adjustDate(k)
},_selectMonthYear:function(o,l,m){var p=d(o),k=this._getInst(p[0]);
k["selected"+("M"===m?"Month":"Year")]=k["draw"+("M"===m?"Month":"Year")]=parseInt(l.options[l.selectedIndex].value,10),this._notifyChange(k),this._adjustDate(p)
},_selectDay:function(p,l,m,q){var k,o=d(p);
d(q).hasClass(this._unselectableClass)||this._isDisabledDatepicker(o[0])||(k=this._getInst(o[0]),k.selectedDay=k.currentDay=d("a",q).html(),k.selectedMonth=k.currentMonth=l,k.selectedYear=k.currentYear=m,this._selectDate(p,this._formatDate(k,k.currentDay,k.currentMonth,k.currentYear)))
},_clearDate:function(k){var a=d(k);
this._selectDate(a,"")
},_selectDate:function(o,l){var m,p=d(o),k=this._getInst(p[0]);
l=null!=l?l:this._formatDate(k),k.input&&k.input.val(l),this._updateAlternate(k),m=this._get(k,"onSelect"),m?m.apply(k.input?k.input[0]:null,[l,k]):k.input&&k.input.trigger("change"),k.inline?this._updateDatepicker(k):(this._hideDatepicker(),this._lastInput=k.input[0],"object"!=typeof k.input[0]&&k.input.focus(),this._lastInput=null)
},_updateAlternate:function(o){var l,m,p,k=this._get(o,"altField");
k&&(l=this._get(o,"altFormat")||this._get(o,"dateFormat"),m=this._getDate(o),p=this.formatDate(l,m,this._getFormatConfig(o)),d(k).each(function(){d(this).val(p)
}))
},noWeekends:function(a){var i=a.getDay();
return[i>0&&6>i,""]
},iso8601Week:function(k){var l,a=new Date(k.getTime());
return a.setDate(a.getDate()+4-(a.getDay()||7)),l=a.getTime(),a.setMonth(0),a.setDate(1),Math.floor(Math.round((l-a)/86400000)/7)+1
},parseDate:function(L,C,H){if(null==L||null==C){throw"Invalid arguments"
}if(C="object"==typeof C?""+C:C+"",""===C){return null
}var S,E,G,M,J=0,Q=(H?H.shortYearCutoff:null)||this._defaults.shortYearCutoff,A="string"!=typeof Q?Q:(new Date).getFullYear()%100+parseInt(Q,10),P=(H?H.dayNamesShort:null)||this._defaults.dayNamesShort,F=(H?H.dayNames:null)||this._defaults.dayNames,O=(H?H.monthNamesShort:null)||this._defaults.monthNamesShort,I=(H?H.monthNames:null)||this._defaults.monthNames,N=-1,z=-1,T=-1,R=-1,e=!1,q=function(a){var i=L.length>S+1&&L.charAt(S+1)===a;
return i&&S++,i
},K=function(m){var o=q(m),l="@"===m?14:"!"===m?20:"y"===m&&o?4:"o"===m?3:2,p=RegExp("^\\d{1,"+l+"}"),k=C.substring(J).match(p);
if(!k){throw"Missing number at position "+J
}return J+=k[0].length,parseInt(k[0],10)
},t=function(l,u,k){var m=-1,p=d.map(q(l)?k:u,function(a,i){return[[i,a]]
}).sort(function(a,i){return -(a[1].length-i[1].length)
});
if(d.each(p,function(o,a){var r=a[1];
return C.substr(J,r.length).toLowerCase()===r.toLowerCase()?(m=a[0],J+=r.length,!1):h
}),-1!==m){return m+1
}throw"Unknown name at position "+J
},B=function(){if(C.charAt(J)!==L.charAt(S)){throw"Unexpected literal at position "+J
}J++
};
for(S=0;
L.length>S;
S++){if(e){"'"!==L.charAt(S)||q("'")?B():e=!1
}else{switch(L.charAt(S)){case"d":T=K("d");
break;
case"D":t("D",P,F);
break;
case"o":R=K("o");
break;
case"m":z=K("m");
break;
case"M":z=t("M",O,I);
break;
case"y":N=K("y");
break;
case"@":M=new Date(K("@")),N=M.getFullYear(),z=M.getMonth()+1,T=M.getDate();
break;
case"!":M=new Date((K("!")-this._ticksTo1970)/10000),N=M.getFullYear(),z=M.getMonth()+1,T=M.getDate();
break;
case"'":q("'")?B():e=!0;
break;
default:B()
}}}if(C.length>J&&(G=C.substr(J),!/^\s+/.test(G))){throw"Extra/unparsed characters found in date: "+G
}if(-1===N?N=(new Date).getFullYear():100>N&&(N+=(new Date).getFullYear()-(new Date).getFullYear()%100+(A>=N?0:-100)),R>-1){for(z=1,T=R;
;
){if(E=this._getDaysInMonth(N,z-1),E>=T){break
}z++,T-=E
}}if(M=this._daylightSavingAdjust(new Date(N,z-1,T)),M.getFullYear()!==N||M.getMonth()+1!==z||M.getDate()!==T){throw"Invalid date"
}return M
},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:10000000*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(C,x,v){if(!x){return""
}var D,p=(v?v.dayNamesShort:null)||this._defaults.dayNamesShort,A=(v?v.dayNames:null)||this._defaults.dayNames,k=(v?v.monthNamesShort:null)||this._defaults.monthNamesShort,m=(v?v.monthNames:null)||this._defaults.monthNames,w=function(l){var a=C.length>D+1&&C.charAt(D+1)===l;
return a&&D++,a
},q=function(l,o,a){var n=""+o;
if(w(l)){for(;
a>n.length;
){n="0"+n
}}return n
},z=function(l,o,a,n){return w(l)?n[o]:a[o]
},B="",y=!1;
if(x){for(D=0;
C.length>D;
D++){if(y){"'"!==C.charAt(D)||w("'")?B+=C.charAt(D):y=!1
}else{switch(C.charAt(D)){case"d":B+=q("d",x.getDate(),2);
break;
case"D":B+=z("D",x.getDay(),p,A);
break;
case"o":B+=q("o",Math.round((new Date(x.getFullYear(),x.getMonth(),x.getDate()).getTime()-new Date(x.getFullYear(),0,0).getTime())/86400000),3);
break;
case"m":B+=q("m",x.getMonth()+1,2);
break;
case"M":B+=z("M",x.getMonth(),k,m);
break;
case"y":B+=w("y")?x.getFullYear():(10>x.getYear()%100?"0":"")+x.getYear()%100;
break;
case"@":B+=x.getTime();
break;
case"!":B+=10000*x.getTime()+this._ticksTo1970;
break;
case"'":w("'")?B+="'":y=!0;
break;
default:B+=C.charAt(D)
}}}}return B
},_possibleChars:function(k){var m,a="",l=!1,o=function(e){var n=k.length>m+1&&k.charAt(m+1)===e;
return n&&m++,n
};
for(m=0;
k.length>m;
m++){if(l){"'"!==k.charAt(m)||o("'")?a+=k.charAt(m):l=!1
}else{switch(k.charAt(m)){case"d":case"m":case"y":case"@":a+="0123456789";
break;
case"D":case"M":return null;
case"'":o("'")?a+="'":l=!0;
break;
default:a+=k.charAt(m)
}}}return a
},_get:function(e,a){return e.settings[a]!==h?e.settings[a]:this._defaults[a]
},_setDateFromField:function(m,u){if(m.input.val()!==m.lastVal){var l=this._get(m,"dateFormat"),p=m.lastVal=m.input?m.input.val():null,w=this._getDefaultDate(m),k=w,q=this._getFormatConfig(m);
try{k=this.parseDate(l,p,q)||w
}catch(v){p=u?"":p
}m.selectedDay=k.getDate(),m.drawMonth=m.selectedMonth=k.getMonth(),m.drawYear=m.selectedYear=k.getFullYear(),m.currentDay=p?k.getDate():0,m.currentMonth=p?k.getMonth():0,m.currentYear=p?k.getFullYear():0,this._adjustInstDate(m)
}},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))
},_determineDate:function(p,l,m){var q=function(a){var i=new Date;
return i.setDate(i.getDate()+a),i
},k=function(u){try{return d.datepicker.parseDate(d.datepicker._get(p,"dateFormat"),u,d.datepicker._getFormatConfig(p))
}catch(w){}for(var z=(u.toLowerCase().match(/^c/)?d.datepicker._getDate(p):null)||new Date,t=z.getFullYear(),x=z.getMonth(),y=z.getDate(),v=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,e=v.exec(u);
e;
){switch(e[2]||"d"){case"d":case"D":y+=parseInt(e[1],10);
break;
case"w":case"W":y+=7*parseInt(e[1],10);
break;
case"m":case"M":x+=parseInt(e[1],10),y=Math.min(y,d.datepicker._getDaysInMonth(t,x));
break;
case"y":case"Y":t+=parseInt(e[1],10),y=Math.min(y,d.datepicker._getDaysInMonth(t,x))
}e=v.exec(u)
}return new Date(t,x,y)
},o=null==l||""===l?m:"string"==typeof l?k(l):"number"==typeof l?isNaN(l)?m:q(l):new Date(l.getTime());
return o=o&&"Invalid Date"==""+o?m:o,o&&(o.setHours(0),o.setMinutes(0),o.setSeconds(0),o.setMilliseconds(0)),this._daylightSavingAdjust(o)
},_daylightSavingAdjust:function(a){return a?(a.setHours(a.getHours()>12?a.getHours()+2:0),a):null
},_setDate:function(m,q,l){var o=!q,u=m.selectedMonth,k=m.selectedYear,p=this._restrictMinMax(m,this._determineDate(m,q,new Date));
m.selectedDay=m.currentDay=p.getDate(),m.drawMonth=m.selectedMonth=m.currentMonth=p.getMonth(),m.drawYear=m.selectedYear=m.currentYear=p.getFullYear(),u===m.selectedMonth&&k===m.selectedYear||l||this._notifyChange(m),this._adjustInstDate(m),m.input&&m.input.val(o?"":this._formatDate(m))
},_getDate:function(a){var i=!a.currentYear||a.input&&""===a.input.val()?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));
return i
},_attachHandlers:function(l){var a=this._get(l,"stepMonths"),k="#"+l.id.replace(/\\\\/g,"\\");
l.dpDiv.find("[data-handler]").map(function(){var i={prev:function(){d.datepicker._adjustDate(k,-a,"M")
},next:function(){d.datepicker._adjustDate(k,+a,"M")
},hide:function(){d.datepicker._hideDatepicker()
},today:function(){d.datepicker._gotoToday(k)
},selectDay:function(){return d.datepicker._selectDay(k,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1
},selectMonth:function(){return d.datepicker._selectMonthYear(k,this,"M"),!1
},selectYear:function(){return d.datepicker._selectMonthYear(k,this,"Y"),!1
}};
d(this).bind(this.getAttribute("data-event"),i[this.getAttribute("data-handler")])
})
},_generateHTML:function(aJ){var aY,aU,aK,aP,a2,aL,aO,aV,aR,a0,aI,aZ,aN,aX,aQ,aW,aH,a3,a1,aE,aF,aS,aG,ay,ah,az,ao,ai,an,at,al,aB,aD,au,ax,aw,am,ae,aT,aj=new Date,ap=this._daylightSavingAdjust(new Date(aj.getFullYear(),aj.getMonth(),aj.getDate())),ab=this._get(aJ,"isRTL"),aA=this._get(aJ,"showButtonPanel"),ar=this._get(aJ,"hideIfNoPrevNext"),aq=this._get(aJ,"navigationAsDateFormat"),ak=this._getNumberOfMonths(aJ),af=this._get(aJ,"showCurrentAtPos"),ag=this._get(aJ,"stepMonths"),aM=1!==ak[0]||1!==ak[1],ac=this._daylightSavingAdjust(aJ.currentDay?new Date(aJ.currentYear,aJ.currentMonth,aJ.currentDay):new Date(9999,9,9)),av=this._getMinMaxDate(aJ,"min"),aC=this._getMinMaxDate(aJ,"max"),aa=aJ.drawMonth-af,ad=aJ.drawYear;
if(0>aa&&(aa+=12,ad--),aC){for(aY=this._daylightSavingAdjust(new Date(aC.getFullYear(),aC.getMonth()-ak[0]*ak[1]+1,aC.getDate())),aY=av&&av>aY?av:aY;
this._daylightSavingAdjust(new Date(ad,aa,1))>aY;
){aa--,0>aa&&(aa=11,ad--)
}}for(aJ.drawMonth=aa,aJ.drawYear=ad,aU=this._get(aJ,"prevText"),aU=aq?this.formatDate(aU,this._daylightSavingAdjust(new Date(ad,aa-ag,1)),this._getFormatConfig(aJ)):aU,aK=this._canAdjustMonth(aJ,-1,ad,aa)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+aU+"'><span class='ui-icon ui-icon-circle-triangle-"+(ab?"e":"w")+"'>"+aU+"</span></a>":ar?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+aU+"'><span class='ui-icon ui-icon-circle-triangle-"+(ab?"e":"w")+"'>"+aU+"</span></a>",aP=this._get(aJ,"nextText"),aP=aq?this.formatDate(aP,this._daylightSavingAdjust(new Date(ad,aa+ag,1)),this._getFormatConfig(aJ)):aP,a2=this._canAdjustMonth(aJ,1,ad,aa)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+aP+"'><span class='ui-icon ui-icon-circle-triangle-"+(ab?"w":"e")+"'>"+aP+"</span></a>":ar?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+aP+"'><span class='ui-icon ui-icon-circle-triangle-"+(ab?"w":"e")+"'>"+aP+"</span></a>",aL=this._get(aJ,"currentText"),aO=this._get(aJ,"gotoCurrent")&&aJ.currentDay?ac:ap,aL=aq?this.formatDate(aL,aO,this._getFormatConfig(aJ)):aL,aV=aJ.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(aJ,"closeText")+"</button>",aR=aA?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(ab?aV:"")+(this._isInRange(aJ,aO)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+aL+"</button>":"")+(ab?"":aV)+"</div>":"",a0=parseInt(this._get(aJ,"firstDay"),10),a0=isNaN(a0)?0:a0,aI=this._get(aJ,"showWeek"),aZ=this._get(aJ,"dayNames"),aN=this._get(aJ,"dayNamesMin"),aX=this._get(aJ,"monthNames"),aQ=this._get(aJ,"monthNamesShort"),aW=this._get(aJ,"beforeShowDay"),aH=this._get(aJ,"showOtherMonths"),a3=this._get(aJ,"selectOtherMonths"),a1=this._getDefaultDate(aJ),aE="",aS=0;
ak[0]>aS;
aS++){for(aG="",this.maxRows=4,ay=0;
ak[1]>ay;
ay++){if(ah=this._daylightSavingAdjust(new Date(ad,aa,aJ.selectedDay)),az=" ui-corner-all",ao="",aM){if(ao+="<div class='ui-datepicker-group",ak[1]>1){switch(ay){case 0:ao+=" ui-datepicker-group-first",az=" ui-corner-"+(ab?"right":"left");
break;
case ak[1]-1:ao+=" ui-datepicker-group-last",az=" ui-corner-"+(ab?"left":"right");
break;
default:ao+=" ui-datepicker-group-middle",az=""
}}ao+="'>"
}for(ao+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+az+"'>"+(/all|left/.test(az)&&0===aS?ab?a2:aK:"")+(/all|right/.test(az)&&0===aS?ab?aK:a2:"")+this._generateMonthYearHeader(aJ,aa,ad,av,aC,aS>0||ay>0,aX,aQ)+"</div><table class='ui-datepicker-calendar'><thead><tr>",ai=aI?"<th class='ui-datepicker-week-col'>"+this._get(aJ,"weekHeader")+"</th>":"",aF=0;
7>aF;
aF++){an=(aF+a0)%7,ai+="<th"+((aF+a0+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+aZ[an]+"'>"+aN[an]+"</span></th>"
}for(ao+=ai+"</tr></thead><tbody>",at=this._getDaysInMonth(ad,aa),ad===aJ.selectedYear&&aa===aJ.selectedMonth&&(aJ.selectedDay=Math.min(aJ.selectedDay,at)),al=(this._getFirstDayOfMonth(ad,aa)-a0+7)%7,aB=Math.ceil((al+at)/7),aD=aM?this.maxRows>aB?this.maxRows:aB:aB,this.maxRows=aD,au=this._daylightSavingAdjust(new Date(ad,aa,1-al)),ax=0;
aD>ax;
ax++){for(ao+="<tr>",aw=aI?"<td class='ui-datepicker-week-col'>"+this._get(aJ,"calculateWeek")(au)+"</td>":"",aF=0;
7>aF;
aF++){am=aW?aW.apply(aJ.input?aJ.input[0]:null,[au]):[!0,""],ae=au.getMonth()!==aa,aT=ae&&!a3||!am[0]||av&&av>au||aC&&au>aC,aw+="<td class='"+((aF+a0+6)%7>=5?" ui-datepicker-week-end":"")+(ae?" ui-datepicker-other-month":"")+(au.getTime()===ah.getTime()&&aa===aJ.selectedMonth&&aJ._keyEvent||a1.getTime()===au.getTime()&&a1.getTime()===ah.getTime()?" "+this._dayOverClass:"")+(aT?" "+this._unselectableClass+" ui-state-disabled":"")+(ae&&!aH?"":" "+am[1]+(au.getTime()===ac.getTime()?" "+this._currentClass:"")+(au.getTime()===ap.getTime()?" ui-datepicker-today":""))+"'"+(ae&&!aH||!am[2]?"":" title='"+am[2].replace(/'/g,"&#39;")+"'")+(aT?"":" data-handler='selectDay' data-event='click' data-month='"+au.getMonth()+"' data-year='"+au.getFullYear()+"'")+">"+(ae&&!aH?"&#xa0;":aT?"<span class='ui-state-default'>"+au.getDate()+"</span>":"<a class='ui-state-default"+(au.getTime()===ap.getTime()?" ui-state-highlight":"")+(au.getTime()===ac.getTime()?" ui-state-active":"")+(ae?" ui-priority-secondary":"")+"' href='#'>"+au.getDate()+"</a>")+"</td>",au.setDate(au.getDate()+1),au=this._daylightSavingAdjust(au)
}ao+=aw+"</tr>"
}aa++,aa>11&&(aa=0,ad++),ao+="</tbody></table>"+(aM?"</div>"+(ak[0]>0&&ay===ak[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),aG+=ao
}aE+=aG
}return aE+=aR,aJ._keyEvent=!1,aE
},_generateMonthYearHeader:function(x,K,G,z,D,O,A,C){var H,F,M,w,L,B,J,E,I=this._get(x,"changeMonth"),q=this._get(x,"changeYear"),P=this._get(x,"showMonthAfterYear"),N="<div class='ui-datepicker-title'>",k="";
if(O||!I){k+="<span class='ui-datepicker-month'>"+A[K]+"</span>"
}else{for(H=z&&z.getFullYear()===G,F=D&&D.getFullYear()===G,k+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",M=0;
12>M;
M++){(!H||M>=z.getMonth())&&(!F||D.getMonth()>=M)&&(k+="<option value='"+M+"'"+(M===K?" selected='selected'":"")+">"+C[M]+"</option>")
}k+="</select>"
}if(P||(N+=k+(!O&&I&&q?"":"&#xa0;")),!x.yearshtml){if(x.yearshtml="",O||!q){N+="<span class='ui-datepicker-year'>"+G+"</span>"
}else{for(w=this._get(x,"yearRange").split(":"),L=(new Date).getFullYear(),B=function(a){var i=a.match(/c[+\-].*/)?G+parseInt(a.substring(1),10):a.match(/[+\-].*/)?L+parseInt(a,10):parseInt(a,10);
return isNaN(i)?L:i
},J=B(w[0]),E=Math.max(J,B(w[1]||"")),J=z?Math.max(J,z.getFullYear()):J,E=D?Math.min(E,D.getFullYear()):E,x.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
E>=J;
J++){x.yearshtml+="<option value='"+J+"'"+(J===G?" selected='selected'":"")+">"+J+"</option>"
}x.yearshtml+="</select>",N+=x.yearshtml,x.yearshtml=null
}}return N+=this._get(x,"yearSuffix"),P&&(N+=(!O&&I&&q?"":"&#xa0;")+k),N+="</div>"
},_adjustInstDate:function(m,q,l){var o=m.drawYear+("Y"===l?q:0),u=m.drawMonth+("M"===l?q:0),k=Math.min(m.selectedDay,this._getDaysInMonth(o,u))+("D"===l?q:0),p=this._restrictMinMax(m,this._daylightSavingAdjust(new Date(o,u,k)));
m.selectedDay=p.getDate(),m.drawMonth=m.selectedMonth=p.getMonth(),m.drawYear=m.selectedYear=p.getFullYear(),("M"===l||"Y"===l)&&this._notifyChange(m)
},_restrictMinMax:function(k,m){var a=this._getMinMaxDate(k,"min"),l=this._getMinMaxDate(k,"max"),o=a&&a>m?a:m;
return l&&o>l?l:o
},_notifyChange:function(a){var i=this._get(a,"onChangeMonthYear");
i&&i.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])
},_getNumberOfMonths:function(a){var i=this._get(a,"numberOfMonths");
return null==i?[1,1]:"number"==typeof i?[1,i]:i
},_getMinMaxDate:function(a,i){return this._determineDate(a,this._get(a,i+"Date"),null)
},_getDaysInMonth:function(a,i){return 32-this._daylightSavingAdjust(new Date(a,i,32)).getDate()
},_getFirstDayOfMonth:function(a,i){return new Date(a,i,1).getDay()
},_canAdjustMonth:function(m,p,l,o){var q=this._getNumberOfMonths(m),k=this._daylightSavingAdjust(new Date(l,o+(0>p?p:q[0]*q[1]),1));
return 0>p&&k.setDate(this._getDaysInMonth(k.getFullYear(),k.getMonth())),this._isInRange(m,k)
},_isInRange:function(w,u){var p,x,m=this._getMinMaxDate(w,"min"),v=this._getMinMaxDate(w,"max"),k=null,l=null,q=this._get(w,"yearRange");
return q&&(p=q.split(":"),x=(new Date).getFullYear(),k=parseInt(p[0],10),l=parseInt(p[1],10),p[0].match(/[+\-].*/)&&(k+=x),p[1].match(/[+\-].*/)&&(l+=x)),(!m||u.getTime()>=m.getTime())&&(!v||u.getTime()<=v.getTime())&&(!k||u.getFullYear()>=k)&&(!l||l>=u.getFullYear())
},_getFormatConfig:function(a){var i=this._get(a,"shortYearCutoff");
return i="string"!=typeof i?i:(new Date).getFullYear()%100+parseInt(i,10),{shortYearCutoff:i,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}
},_formatDate:function(k,m,a,l){m||(k.currentDay=k.selectedDay,k.currentMonth=k.selectedMonth,k.currentYear=k.selectedYear);
var o=m?"object"==typeof m?m:this._daylightSavingAdjust(new Date(l,a,m)):this._daylightSavingAdjust(new Date(k.currentYear,k.currentMonth,k.currentDay));
return this.formatDate(this._get(k,"dateFormat"),o,this._getFormatConfig(k))
}}),d.fn.datepicker=function(k){if(!this.length){return this
}d.datepicker.initialized||(d(document).mousedown(d.datepicker._checkExternalClick),d.datepicker.initialized=!0),0===d("#"+d.datepicker._mainDivId).length&&d("body").append(d.datepicker.dpDiv);
var a=Array.prototype.slice.call(arguments,1);
return"string"!=typeof k||"isDisabled"!==k&&"getDate"!==k&&"widget"!==k?"option"===k&&2===arguments.length&&"string"==typeof arguments[1]?d.datepicker["_"+k+"Datepicker"].apply(d.datepicker,[this[0]].concat(a)):this.each(function(){"string"==typeof k?d.datepicker["_"+k+"Datepicker"].apply(d.datepicker,[this].concat(a)):d.datepicker._attachDatepicker(this,k)
}):d.datepicker["_"+k+"Datepicker"].apply(d.datepicker,[this[0]].concat(a))
},d.datepicker=new c,d.datepicker.initialized=!1,d.datepicker.uuid=(new Date).getTime(),d.datepicker.version="1.10.3"
})(jQuery);
(function(b){var c={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},a={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};
b.widget("ui.dialog",{version:"1.10.3",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(f){var d=b(this).css(f).offset().top;
0>d&&b(this).css("top",f.top-d)
}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&b.fn.draggable&&this._makeDraggable(),this.options.resizable&&b.fn.resizable&&this._makeResizable(),this._isOpen=!1
},_init:function(){this.options.autoOpen&&this.open()
},_appendTo:function(){var d=this.options.appendTo;
return d&&(d.jquery||d.nodeType)?b(d):this.document.find(d||"body").eq(0)
},_destroy:function(){var d,f=this.originalPosition;
this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),d=f.parent.children().eq(f.index),d.length&&d[0]!==this.element[0]?d.before(this.element):f.parent.append(this.element)
},widget:function(){return this.uiDialog
},disable:b.noop,enable:b.noop,close:function(f){var d=this;
this._isOpen&&this._trigger("beforeClose",f)!==!1&&(this._isOpen=!1,this._destroyOverlay(),this.opener.filter(":focusable").focus().length||b(this.document[0].activeElement).blur(),this._hide(this.uiDialog,this.options.hide,function(){d._trigger("close",f)
}))
},isOpen:function(){return this._isOpen
},moveToTop:function(){this._moveToTop()
},_moveToTop:function(f,g){var d=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
return d&&!g&&this._trigger("focus",f),d
},open:function(){var d=this;
return this._isOpen?(this._moveToTop()&&this._focusTabbable(),undefined):(this._isOpen=!0,this.opener=b(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this._show(this.uiDialog,this.options.show,function(){d._focusTabbable(),d._trigger("focus")
}),this._trigger("open"),undefined)
},_focusTabbable:function(){var d=this.element.find("[autofocus]");
d.length||(d=this.element.find(":tabbable")),d.length||(d=this.uiDialogButtonPane.find(":tabbable")),d.length||(d=this.uiDialogTitlebarClose.filter(":tabbable")),d.length||(d=this.uiDialog),d.eq(0).focus()
},_keepFocus:function(f){function d(){var h=this.document[0].activeElement,g=this.uiDialog[0]===h||b.contains(this.uiDialog[0],h);
g||this._focusTabbable()
}f.preventDefault(),d.call(this),this._delay(d)
},_createWrapper:function(){this.uiDialog=b("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(g){if(this.options.closeOnEscape&&!g.isDefaultPrevented()&&g.keyCode&&g.keyCode===b.ui.keyCode.ESCAPE){return g.preventDefault(),this.close(g),undefined
}if(g.keyCode===b.ui.keyCode.TAB){var d=this.uiDialog.find(":tabbable"),f=d.filter(":first"),h=d.filter(":last");
g.target!==h[0]&&g.target!==this.uiDialog[0]||g.shiftKey?g.target!==f[0]&&g.target!==this.uiDialog[0]||!g.shiftKey||(h.focus(1),g.preventDefault()):(f.focus(1),g.preventDefault())
}},mousedown:function(d){this._moveToTop(d)&&this._focusTabbable()
}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})
},_createTitlebar:function(){var d;
this.uiDialogTitlebar=b("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(f){b(f.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()
}}),this.uiDialogTitlebarClose=b("<button></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(e){e.preventDefault(),this.close(e)
}}),d=b("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(d),this.uiDialog.attr({"aria-labelledby":d.attr("id")})
},_title:function(d){this.options.title||d.html("&#160;"),d.text(this.options.title)
},_createButtonPane:function(){this.uiDialogButtonPane=b("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=b("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()
},_createButtons:function(){var f=this,d=this.options.buttons;
return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),b.isEmptyObject(d)||b.isArray(d)&&!d.length?(this.uiDialog.removeClass("ui-dialog-buttons"),undefined):(b.each(d,function(g,h){var j,e;
h=b.isFunction(h)?{click:h,text:g}:h,h=b.extend({type:"button"},h),j=h.click,h.click=function(){j.apply(f.element[0],arguments)
},e={icons:h.icons,text:h.showText},delete h.icons,delete h.showText,b("<button></button>",h).button(e).appendTo(f.uiButtonSet)
}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),undefined)
},_makeDraggable:function(){function g(e){return{position:e.position,offset:e.offset}
}var d=this,f=this.options;
this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(e,h){b(this).addClass("ui-dialog-dragging"),d._blockFrames(),d._trigger("dragStart",e,g(h))
},drag:function(e,h){d._trigger("drag",e,g(h))
},stop:function(h,e){f.position=[e.position.left-d.document.scrollLeft(),e.position.top-d.document.scrollTop()],b(this).removeClass("ui-dialog-dragging"),d._unblockFrames(),d._trigger("dragStop",h,g(e))
}})
},_makeResizable:function(){function h(e){return{originalPosition:e.originalPosition,originalSize:e.originalSize,position:e.position,size:e.size}
}var f=this,g=this.options,k=g.resizable,d=this.uiDialog.css("position"),j="string"==typeof k?k:"n,e,s,w,se,sw,ne,nw";
this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:g.maxWidth,maxHeight:g.maxHeight,minWidth:g.minWidth,minHeight:this._minHeight(),handles:j,start:function(e,i){b(this).addClass("ui-dialog-resizing"),f._blockFrames(),f._trigger("resizeStart",e,h(i))
},resize:function(e,i){f._trigger("resize",e,h(i))
},stop:function(i,e){g.height=b(this).height(),g.width=b(this).width(),b(this).removeClass("ui-dialog-resizing"),f._unblockFrames(),f._trigger("resizeStop",i,h(e))
}}).css("position",d)
},_minHeight:function(){var d=this.options;
return"auto"===d.height?d.minHeight:Math.min(d.minHeight,d.height)
},_position:function(){var d=this.uiDialog.is(":visible");
d||this.uiDialog.show(),this.uiDialog.position(this.options.position),d||this.uiDialog.hide()
},_setOptions:function(e){var g=this,d=!1,f={};
b.each(e,function(h,i){g._setOption(h,i),h in c&&(d=!0),h in a&&(f[h]=i)
}),d&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",f)
},_setOption:function(f,h){var d,g,j=this.uiDialog;
"dialogClass"===f&&j.removeClass(this.options.dialogClass).addClass(h),"disabled"!==f&&(this._super(f,h),"appendTo"===f&&this.uiDialog.appendTo(this._appendTo()),"buttons"===f&&this._createButtons(),"closeText"===f&&this.uiDialogTitlebarClose.button({label:""+h}),"draggable"===f&&(d=j.is(":data(ui-draggable)"),d&&!h&&j.draggable("destroy"),!d&&h&&this._makeDraggable()),"position"===f&&this._position(),"resizable"===f&&(g=j.is(":data(ui-resizable)"),g&&!h&&j.resizable("destroy"),g&&"string"==typeof h&&j.resizable("option","handles",h),g||h===!1||this._makeResizable()),"title"===f&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
},_size:function(){var f,h,d,g=this.options;
this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),g.minWidth>g.width&&(g.width=g.minWidth),f=this.uiDialog.css({height:"auto",width:g.width}).outerHeight(),h=Math.max(0,g.minHeight-f),d="number"==typeof g.maxHeight?Math.max(0,g.maxHeight-f):"none","auto"===g.height?this.element.css({minHeight:h,maxHeight:d,height:"auto"}):this.element.height(Math.max(0,g.height-f)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())
},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var d=b(this);
return b("<div>").css({position:"absolute",width:d.outerWidth(),height:d.outerHeight()}).appendTo(d.parent()).offset(d.offset())[0]
})
},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)
},_allowInteraction:function(d){return b(d.target).closest(".ui-dialog").length?!0:!!b(d.target).closest(".ui-datepicker").length
},_createOverlay:function(){if(this.options.modal){var f=this,d=this.widgetFullName;
b.ui.dialog.overlayInstances||this._delay(function(){b.ui.dialog.overlayInstances&&this.document.bind("focusin.dialog",function(e){f._allowInteraction(e)||(e.preventDefault(),b(".ui-dialog:visible:last .ui-dialog-content").data(d)._focusTabbable())
})
}),this.overlay=b("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),b.ui.dialog.overlayInstances++
}},_destroyOverlay:function(){this.options.modal&&this.overlay&&(b.ui.dialog.overlayInstances--,b.ui.dialog.overlayInstances||this.document.unbind("focusin.dialog"),this.overlay.remove(),this.overlay=null)
}}),b.ui.dialog.overlayInstances=0,b.uiBackCompat!==!1&&b.widget("ui.dialog",b.ui.dialog,{_position:function(){var g,d=this.options.position,f=[],h=[0,0];
d?(("string"==typeof d||"object"==typeof d&&"0" in d)&&(f=d.split?d.split(" "):[d[0],d[1]],1===f.length&&(f[1]=f[0]),b.each(["left","top"],function(i,j){+f[i]===f[i]&&(h[i]=f[i],f[i]=j)
}),d={my:f[0]+(0>h[0]?h[0]:"+"+h[0])+" "+f[1]+(0>h[1]?h[1]:"+"+h[1]),at:f.join(" ")}),d=b.extend({},b.ui.dialog.prototype.options.position,d)):d=b.ui.dialog.prototype.options.position,g=this.uiDialog.is(":visible"),g||this.uiDialog.show(),this.uiDialog.position(d),g||this.uiDialog.hide()
}})
})(jQuery);
(function(a){a.widget("ui.menu",{version:"1.10.3",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,a.proxy(function(b){this.options.disabled&&b.preventDefault()
},this)),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item > a":function(b){b.preventDefault()
},"click .ui-state-disabled > a":function(b){b.preventDefault()
},"click .ui-menu-item:has(a)":function(c){var b=a(c.target).closest(".ui-menu-item");
!this.mouseHandled&&b.not(".ui-state-disabled").length&&(this.mouseHandled=!0,this.select(c),b.has(".ui-menu").length?this.expand(c):this.element.is(":focus")||(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))
},"mouseenter .ui-menu-item":function(c){var b=a(c.currentTarget);
b.siblings().children(".ui-state-active").removeClass("ui-state-active"),this.focus(c,b)
},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(c,d){var b=this.active||this.element.children(".ui-menu-item").eq(0);
d||this.focus(c,b)
},blur:function(b){this._delay(function(){a.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(b)
})
},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(b){a(b.target).closest(".ui-menu").length||this.collapseAll(b),this.mouseHandled=!1
}})
},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var b=a(this);
b.data("ui-menu-submenu-carat")&&b.remove()
}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
},_keydown:function(j){function c(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")
}var f,l,b,k,g,d=!0;
switch(j.keyCode){case a.ui.keyCode.PAGE_UP:this.previousPage(j);
break;
case a.ui.keyCode.PAGE_DOWN:this.nextPage(j);
break;
case a.ui.keyCode.HOME:this._move("first","first",j);
break;
case a.ui.keyCode.END:this._move("last","last",j);
break;
case a.ui.keyCode.UP:this.previous(j);
break;
case a.ui.keyCode.DOWN:this.next(j);
break;
case a.ui.keyCode.LEFT:this.collapse(j);
break;
case a.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(j);
break;
case a.ui.keyCode.ENTER:case a.ui.keyCode.SPACE:this._activate(j);
break;
case a.ui.keyCode.ESCAPE:this.collapse(j);
break;
default:d=!1,l=this.previousFilter||"",b=String.fromCharCode(j.keyCode),k=!1,clearTimeout(this.filterTimer),b===l?k=!0:b=l+b,g=RegExp("^"+c(b),"i"),f=this.activeMenu.children(".ui-menu-item").filter(function(){return g.test(a(this).children("a").text())
}),f=k&&-1!==f.index(this.active.next())?this.active.nextAll(".ui-menu-item"):f,f.length||(b=String.fromCharCode(j.keyCode),g=RegExp("^"+c(b),"i"),f=this.activeMenu.children(".ui-menu-item").filter(function(){return g.test(a(this).children("a").text())
})),f.length?(this.focus(j,f),f.length>1?(this.previousFilter=b,this.filterTimer=this._delay(function(){delete this.previousFilter
},1000)):delete this.previousFilter):delete this.previousFilter
}d&&j.preventDefault()
},_activate:function(b){this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(b):this.select(b))
},refresh:function(){var d,b=this.options.icons.submenu,c=this.element.find(this.options.menus);
c.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var g=a(this),f=g.prev("a"),h=a("<span>").addClass("ui-menu-icon ui-icon "+b).data("ui-menu-submenu-carat",!0);
f.attr("aria-haspopup","true").prepend(h),g.attr("aria-labelledby",f.attr("id"))
}),d=c.add(this.element),d.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()}),d.children(":not(.ui-menu-item)").each(function(){var f=a(this);
/[^\-\u2014\u2013\s]/.test(f.text())||f.addClass("ui-widget-content ui-menu-divider")
}),d.children(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!a.contains(this.element[0],this.active[0])&&this.blur()
},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]
},_setOption:function(b,c){"icons"===b&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(c.submenu),this._super(b,c)
},focus:function(c,f){var b,d;
this.blur(c,c&&"focus"===c.type),this._scrollIntoView(f),this.active=f.first(),d=this.active.children("a").addClass("ui-state-focus"),this.options.role&&this.element.attr("aria-activedescendant",d.attr("id")),this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),c&&"keydown"===c.type?this._close():this.timer=this._delay(function(){this._close()
},this.delay),b=f.children(".ui-menu"),b.length&&/^mouse/.test(c.type)&&this._startOpening(b),this.activeMenu=f.parent(),this._trigger("focus",c,{item:f})
},_scrollIntoView:function(g){var c,d,j,b,h,f;
this._hasScroll()&&(c=parseFloat(a.css(this.activeMenu[0],"borderTopWidth"))||0,d=parseFloat(a.css(this.activeMenu[0],"paddingTop"))||0,j=g.offset().top-this.activeMenu.offset().top-c-d,b=this.activeMenu.scrollTop(),h=this.activeMenu.height(),f=g.height(),0>j?this.activeMenu.scrollTop(b+j):j+f>h&&this.activeMenu.scrollTop(b+j-h+f))
},blur:function(b,c){c||clearTimeout(this.timer),this.active&&(this.active.children("a").removeClass("ui-state-focus"),this.active=null,this._trigger("blur",b,{item:this.active}))
},_startOpening:function(b){clearTimeout(this.timer),"true"===b.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(b)
},this.delay))
},_open:function(c){var b=a.extend({of:this.active},this.options.position);
clearTimeout(this.timer),this.element.find(".ui-menu").not(c.parents(".ui-menu")).hide().attr("aria-hidden","true"),c.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(b)
},collapseAll:function(c,b){clearTimeout(this.timer),this.timer=this._delay(function(){var d=b?this.element:a(c&&c.target).closest(this.element.find(".ui-menu"));
d.length||(d=this.element),this._close(d),this.blur(c),this.activeMenu=d
},this.delay)
},_close:function(b){b||(b=this.active?this.active.parent():this.element),b.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")
},collapse:function(b){var c=this.active&&this.active.parent().closest(".ui-menu-item",this.element);
c&&c.length&&(this._close(),this.focus(b,c))
},expand:function(b){var c=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();
c&&c.length&&(this._open(c.parent()),this._delay(function(){this.focus(b,c)
}))
},next:function(b){this._move("next","first",b)
},previous:function(b){this._move("prev","last",b)
},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length
},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length
},_move:function(c,f,b){var d;
this.active&&(d="first"===c||"last"===c?this.active["first"===c?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[c+"All"](".ui-menu-item").eq(0)),d&&d.length&&this.active||(d=this.activeMenu.children(".ui-menu-item")[f]()),this.focus(b,d)
},nextPage:function(d){var b,c,f;
return this.active?(this.isLastItem()||(this._hasScroll()?(c=this.active.offset().top,f=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return b=a(this),0>b.offset().top-c-f
}),this.focus(d,b)):this.focus(d,this.activeMenu.children(".ui-menu-item")[this.active?"last":"first"]())),undefined):(this.next(d),undefined)
},previousPage:function(d){var b,c,f;
return this.active?(this.isFirstItem()||(this._hasScroll()?(c=this.active.offset().top,f=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return b=a(this),b.offset().top-c+f>0
}),this.focus(d,b)):this.focus(d,this.activeMenu.children(".ui-menu-item").first())),undefined):(this.next(d),undefined)
},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")
},select:function(c){this.active=this.active||a(c.target).closest(".ui-menu-item");
var b={item:this.active};
this.active.has(".ui-menu").length||this.collapseAll(c,!0),this._trigger("select",c,b)
}})
})(jQuery);
(function(a){var b=5;
a.widget("ui.slider",a.ui.mouse,{version:"1.10.3",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1
},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()
},_createHandles:function(){var g,d,f=this.options,j=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),c="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",h=[];
for(d=f.values&&f.values.length||1,j.length>d&&(j.slice(d).remove(),j=j.slice(0,d)),g=j.length;
d>g;
g++){h.push(c)
}this.handles=j.add(a(h.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(i){a(this).data("ui-slider-handle-index",i)
})
},_createRange:function(){var d=this.options,c="";
d.range?(d.range===!0&&(d.values?d.values.length&&2!==d.values.length?d.values=[d.values[0],d.values[0]]:a.isArray(d.values)&&(d.values=d.values.slice(0)):d.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=a("<div></div>").appendTo(this.element),c="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(c+("min"===d.range||"max"===d.range?" ui-slider-range-"+d.range:""))):this.range=a([])
},_setupEvents:function(){var c=this.handles.add(this.range).filter("a");
this._off(c),this._on(c,this._handleEvents),this._hoverable(c),this._focusable(c)
},_destroy:function(){this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()
},_mouseCapture:function(p){var k,w,g,t,f,d,m,j,v=this,q=this.options;
return q.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),k={x:p.pageX,y:p.pageY},w=this._normValueFromMouse(k),g=this._valueMax()-this._valueMin()+1,this.handles.each(function(h){var c=Math.abs(w-v.values(h));
(g>c||g===c&&(h===v._lastChangedValue||v.values(h)===q.min))&&(g=c,t=a(this),f=h)
}),d=this._start(p,f),d===!1?!1:(this._mouseSliding=!0,this._handleIndex=f,t.addClass("ui-state-active").focus(),m=t.offset(),j=!a(p.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=j?{left:0,top:0}:{left:p.pageX-m.left-t.width()/2,top:p.pageY-m.top-t.height()/2-(parseInt(t.css("borderTopWidth"),10)||0)-(parseInt(t.css("borderBottomWidth"),10)||0)+(parseInt(t.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(p,f,w),this._animateOff=!0,!0))
},_mouseStart:function(){return !0
},_mouseDrag:function(d){var f={x:d.pageX,y:d.pageY},c=this._normValueFromMouse(f);
return this._slide(d,this._handleIndex,c),!1
},_mouseStop:function(c){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(c,this._handleIndex),this._change(c,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1
},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"
},_normValueFromMouse:function(f){var h,d,g,j,c;
return"horizontal"===this.orientation?(h=this.elementSize.width,d=f.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(h=this.elementSize.height,d=f.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),g=d/h,g>1&&(g=1),0>g&&(g=0),"vertical"===this.orientation&&(g=1-g),j=this._valueMax()-this._valueMin(),c=this._valueMin()+g*j,this._trimAlignValue(c)
},_start:function(d,f){var c={handle:this.handles[f],value:this.value()};
return this.options.values&&this.options.values.length&&(c.value=this.values(f),c.values=this.values()),this._trigger("start",d,c)
},_slide:function(f,h,d){var g,j,c;
this.options.values&&this.options.values.length?(g=this.values(h?0:1),2===this.options.values.length&&this.options.range===!0&&(0===h&&d>g||1===h&&g>d)&&(d=g),d!==this.values(h)&&(j=this.values(),j[h]=d,c=this._trigger("slide",f,{handle:this.handles[h],value:d,values:j}),g=this.values(h?0:1),c!==!1&&this.values(h,d,!0))):d!==this.value()&&(c=this._trigger("slide",f,{handle:this.handles[h],value:d}),c!==!1&&this.value(d))
},_stop:function(d,f){var c={handle:this.handles[f],value:this.value()};
this.options.values&&this.options.values.length&&(c.value=this.values(f),c.values=this.values()),this._trigger("stop",d,c)
},_change:function(d,f){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[f],value:this.value()};
this.options.values&&this.options.values.length&&(c.value=this.values(f),c.values=this.values()),this._lastChangedValue=f,this._trigger("change",d,c)
}},value:function(c){return arguments.length?(this.options.value=this._trimAlignValue(c),this._refreshValue(),this._change(null,0),undefined):this._value()
},values:function(g,d){var f,h,c;
if(arguments.length>1){return this.options.values[g]=this._trimAlignValue(d),this._refreshValue(),this._change(null,g),undefined
}if(!arguments.length){return this._values()
}if(!a.isArray(arguments[0])){return this.options.values&&this.options.values.length?this._values(g):this.value()
}for(f=this.options.values,h=arguments[0],c=0;
f.length>c;
c+=1){f[c]=this._trimAlignValue(h[c]),this._change(null,c)
}this._refreshValue()
},_setOption:function(f,c){var d,g=0;
switch("range"===f&&this.options.range===!0&&("min"===c?(this.options.value=this._values(0),this.options.values=null):"max"===c&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),a.isArray(this.options.values)&&(g=this.options.values.length),a.Widget.prototype._setOption.apply(this,arguments),f){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();
break;
case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;
break;
case"values":for(this._animateOff=!0,this._refreshValue(),d=0;
g>d;
d+=1){this._change(null,d)
}this._animateOff=!1;
break;
case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;
break;
case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1
}},_value:function(){var c=this.options.value;
return c=this._trimAlignValue(c)
},_values:function(d){var g,c,f;
if(arguments.length){return g=this.options.values[d],g=this._trimAlignValue(g)
}if(this.options.values&&this.options.values.length){for(c=this.options.values.slice(),f=0;
c.length>f;
f+=1){c[f]=this._trimAlignValue(c[f])
}return c
}return[]
},_trimAlignValue:function(d){if(this._valueMin()>=d){return this._valueMin()
}if(d>=this._valueMax()){return this._valueMax()
}var g=this.options.step>0?this.options.step:1,c=(d-this._valueMin())%g,f=d-c;
return 2*Math.abs(c)>=g&&(f+=c>0?g:-g),parseFloat(f.toFixed(5))
},_valueMin:function(){return this.options.min
},_valueMax:function(){return this.options.max
},_refreshValue:function(){var m,j,t,f,p,d=this.options.range,c=this.options,k=this,g=this._animateOff?!1:c.animate,q={};
this.options.values&&this.options.values.length?this.handles.each(function(e){j=100*((k.values(e)-k._valueMin())/(k._valueMax()-k._valueMin())),q["horizontal"===k.orientation?"left":"bottom"]=j+"%",a(this).stop(1,1)[g?"animate":"css"](q,c.animate),k.options.range===!0&&("horizontal"===k.orientation?(0===e&&k.range.stop(1,1)[g?"animate":"css"]({left:j+"%"},c.animate),1===e&&k.range[g?"animate":"css"]({width:j-m+"%"},{queue:!1,duration:c.animate})):(0===e&&k.range.stop(1,1)[g?"animate":"css"]({bottom:j+"%"},c.animate),1===e&&k.range[g?"animate":"css"]({height:j-m+"%"},{queue:!1,duration:c.animate}))),m=j
}):(t=this.value(),f=this._valueMin(),p=this._valueMax(),j=p!==f?100*((t-f)/(p-f)):0,q["horizontal"===this.orientation?"left":"bottom"]=j+"%",this.handle.stop(1,1)[g?"animate":"css"](q,c.animate),"min"===d&&"horizontal"===this.orientation&&this.range.stop(1,1)[g?"animate":"css"]({width:j+"%"},c.animate),"max"===d&&"horizontal"===this.orientation&&this.range[g?"animate":"css"]({width:100-j+"%"},{queue:!1,duration:c.animate}),"min"===d&&"vertical"===this.orientation&&this.range.stop(1,1)[g?"animate":"css"]({height:j+"%"},c.animate),"max"===d&&"vertical"===this.orientation&&this.range[g?"animate":"css"]({height:100-j+"%"},{queue:!1,duration:c.animate}))
},_handleEvents:{keydown:function(d){var e,h,c,g,f=a(d.target).data("ui-slider-handle-index");
switch(d.keyCode){case a.ui.keyCode.HOME:case a.ui.keyCode.END:case a.ui.keyCode.PAGE_UP:case a.ui.keyCode.PAGE_DOWN:case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(d.preventDefault(),!this._keySliding&&(this._keySliding=!0,a(d.target).addClass("ui-state-active"),e=this._start(d,f),e===!1)){return
}}switch(g=this.options.step,h=c=this.options.values&&this.options.values.length?this.values(f):this.value(),d.keyCode){case a.ui.keyCode.HOME:c=this._valueMin();
break;
case a.ui.keyCode.END:c=this._valueMax();
break;
case a.ui.keyCode.PAGE_UP:c=this._trimAlignValue(h+(this._valueMax()-this._valueMin())/b);
break;
case a.ui.keyCode.PAGE_DOWN:c=this._trimAlignValue(h-(this._valueMax()-this._valueMin())/b);
break;
case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:if(h===this._valueMax()){return
}c=this._trimAlignValue(h+g);
break;
case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(h===this._valueMin()){return
}c=this._trimAlignValue(h-g)
}this._slide(d,f,c)
},click:function(c){c.preventDefault()
},keyup:function(d){var c=a(d.target).data("ui-slider-handle-index");
this._keySliding&&(this._keySliding=!1,this._stop(d,c),this._change(d,c),a(d.target).removeClass("ui-state-active"))
}}})
})(jQuery);
(function(d,g){function c(){return ++h
}function f(a){return a.hash.length>1&&decodeURIComponent(a.href.replace(b,""))===decodeURIComponent(location.href.replace(b,""))
}var h=0,b=/#.*$/;
d.widget("ui.tabs",{version:"1.10.3",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var j=this,a=this.options;
this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",a.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(i){d(this).is(".ui-state-disabled")&&i.preventDefault()
}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){d(this).closest("li").is(".ui-state-disabled")&&this.blur()
}),this._processTabs(),a.active=this._initialActive(),d.isArray(a.disabled)&&(a.disabled=d.unique(a.disabled.concat(d.map(this.tabs.filter(".ui-state-disabled"),function(e){return j.tabs.index(e)
}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(a.active):d(),this._refresh(),this.active.length&&this.load(a.active)
},_initialActive:function(){var a=this.options.active,e=this.options.collapsible,j=location.hash.substring(1);
return null===a&&(j&&this.tabs.each(function(k,i){return d(i).attr("aria-controls")===j?(a=k,!1):g
}),null===a&&(a=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===a||-1===a)&&(a=this.tabs.length?0:!1)),a!==!1&&(a=this.tabs.index(this.tabs.eq(a)),-1===a&&(a=e?!1:0)),!e&&a===!1&&this.anchors.length&&(a=0),a
},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):d()}
},_tabKeydown:function(j){var k=d(this.document[0].activeElement).closest("li"),l=this.tabs.index(k),e=!0;
if(!this._handlePageNav(j)){switch(j.keyCode){case d.ui.keyCode.RIGHT:case d.ui.keyCode.DOWN:l++;
break;
case d.ui.keyCode.UP:case d.ui.keyCode.LEFT:e=!1,l--;
break;
case d.ui.keyCode.END:l=this.anchors.length-1;
break;
case d.ui.keyCode.HOME:l=0;
break;
case d.ui.keyCode.SPACE:return j.preventDefault(),clearTimeout(this.activating),this._activate(l),g;
case d.ui.keyCode.ENTER:return j.preventDefault(),clearTimeout(this.activating),this._activate(l===this.options.active?!1:l),g;
default:return
}j.preventDefault(),clearTimeout(this.activating),l=this._focusNextTab(l,e),j.ctrlKey||(k.attr("aria-selected","false"),this.tabs.eq(l).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",l)
},this.delay))
}},_panelKeydown:function(a){this._handlePageNav(a)||a.ctrlKey&&a.keyCode===d.ui.keyCode.UP&&(a.preventDefault(),this.active.focus())
},_handlePageNav:function(a){return a.altKey&&a.keyCode===d.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):a.altKey&&a.keyCode===d.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):g
},_findNextTab:function(k,a){function j(){return k>l&&(k=0),0>k&&(k=l),k
}for(var l=this.tabs.length-1;
-1!==d.inArray(j(),this.options.disabled);
){k=a?k+1:k-1
}return k
},_focusNextTab:function(a,i){return a=this._findNextTab(a,i),this.tabs.eq(a).focus(),a
},_setOption:function(e,a){return"active"===e?(this._activate(a),g):"disabled"===e?(this._setupDisabled(a),g):(this._super(e,a),"collapsible"===e&&(this.element.toggleClass("ui-tabs-collapsible",a),a||this.options.active!==!1||this._activate(0)),"event"===e&&this._setupEvents(a),"heightStyle"===e&&this._setupHeightStyle(a),g)
},_tabId:function(a){return a.attr("aria-controls")||"ui-tabs-"+c()
},_sanitizeSelector:function(a){return a?a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""
},refresh:function(){var j=this.options,a=this.tablist.children(":has(a[href])");
j.disabled=d.map(a.filter(".ui-state-disabled"),function(e){return a.index(e)
}),this._processTabs(),j.active!==!1&&this.anchors.length?this.active.length&&!d.contains(this.tablist[0],this.active[0])?this.tabs.length===j.disabled.length?(j.active=!1,this.active=d()):this._activate(this._findNextTab(Math.max(0,j.active-1),!1)):j.active=this.tabs.index(this.active):(j.active=!1,this.active=d()),this._refresh()
},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)
},_processTabs:function(){var a=this;
this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist"),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return d("a",this)[0]
}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=d(),this.anchors.each(function(m,v){var j,t,q,p=d(v).uniqueId().attr("id"),e=d(v).closest("li"),k=e.attr("aria-controls");
f(v)?(j=v.hash,t=a.element.find(a._sanitizeSelector(j))):(q=a._tabId(e),j="#"+q,t=a.element.find(j),t.length||(t=a._createPanel(q),t.insertAfter(a.panels[m-1]||a.tablist)),t.attr("aria-live","polite")),t.length&&(a.panels=a.panels.add(t)),k&&e.data("ui-tabs-aria-controls",k),e.attr({"aria-controls":j.substring(1),"aria-labelledby":p}),t.attr("aria-labelledby",p)
}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")
},_getList:function(){return this.element.find("ol,ul").eq(0)
},_createPanel:function(a){return d("<div>").attr("id",a).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)
},_setupDisabled:function(k){d.isArray(k)&&(k.length?k.length===this.anchors.length&&(k=!0):k=!1);
for(var a,j=0;
a=this.tabs[j];
j++){k===!0||-1!==d.inArray(j,k)?d(a).addClass("ui-state-disabled").attr("aria-disabled","true"):d(a).removeClass("ui-state-disabled").removeAttr("aria-disabled")
}this.options.disabled=k
},_setupEvents:function(j){var a={click:function(e){e.preventDefault()
}};
j&&d.each(j.split(" "),function(i,k){a[k]="_eventHandler"
}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(this.anchors,a),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)
},_setupHeightStyle:function(k){var a,j=this.element.parent();
"fill"===k?(a=j.height(),a-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var l=d(this),i=l.css("position");
"absolute"!==i&&"fixed"!==i&&(a-=l.outerHeight(!0))
}),this.element.children().not(this.panels).each(function(){a-=d(this).outerHeight(!0)
}),this.panels.each(function(){d(this).height(Math.max(0,a-d(this).innerHeight()+d(this).height()))
}).css("overflow","auto")):"auto"===k&&(a=0,this.panels.each(function(){a=Math.max(a,d(this).height("").height())
}).height(a))
},_eventHandler:function(v){var q=this.options,y=this.active,m=d(v.currentTarget),w=m.closest("li"),k=w[0]===y[0],j=k&&q.collapsible,t=j?d():this._getPanelForTab(w),p=y.length?this._getPanelForTab(y):d(),x={oldTab:y,oldPanel:p,newTab:j?d():w,newPanel:t};
v.preventDefault(),w.hasClass("ui-state-disabled")||w.hasClass("ui-tabs-loading")||this.running||k&&!q.collapsible||this._trigger("beforeActivate",v,x)===!1||(q.active=j?!1:this.tabs.index(w),this.active=k?d():w,this.xhr&&this.xhr.abort(),p.length||t.length||d.error("jQuery UI Tabs: Mismatching fragment identifier."),t.length&&this.load(this.tabs.index(w),v),this._toggle(v,x))
},_toggle:function(p,k){function l(){j.running=!1,j._trigger("activate",p,k)
}function t(){k.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),q.length&&j.options.show?j._show(q,j.options.show,l):(q.show(),l())
}var j=this,q=k.newPanel,m=k.oldPanel;
this.running=!0,m.length&&this.options.hide?this._hide(m,this.options.hide,function(){k.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),t()
}):(k.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),m.hide(),t()),m.attr({"aria-expanded":"false","aria-hidden":"true"}),k.oldTab.attr("aria-selected","false"),q.length&&m.length?k.oldTab.attr("tabIndex",-1):q.length&&this.tabs.filter(function(){return 0===d(this).attr("tabIndex")
}).attr("tabIndex",-1),q.attr({"aria-expanded":"true","aria-hidden":"false"}),k.newTab.attr({"aria-selected":"true",tabIndex:0})
},_activate:function(k){var a,j=this._findActive(k);
j[0]!==this.active[0]&&(j.length||(j=this.active),a=j.find(".ui-tabs-anchor")[0],this._eventHandler({target:a,currentTarget:a,preventDefault:d.noop}))
},_findActive:function(a){return a===!1?d():this.tabs.eq(a)
},_getIndex:function(a){return"string"==typeof a&&(a=this.anchors.index(this.anchors.filter("[href$='"+a+"']"))),a
},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){d.data(this,"ui-tabs-destroy")?d(this).remove():d(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
}),this.tabs.each(function(){var j=d(this),a=j.data("ui-tabs-aria-controls");
a?j.attr("aria-controls",a).removeData("ui-tabs-aria-controls"):j.removeAttr("aria-controls")
}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")
},enable:function(a){var e=this.options.disabled;
e!==!1&&(a===g?e=!1:(a=this._getIndex(a),e=d.isArray(e)?d.map(e,function(i){return i!==a?i:null
}):d.map(this.tabs,function(i,j){return j!==a?j:null
})),this._setupDisabled(e))
},disable:function(a){var e=this.options.disabled;
if(e!==!0){if(a===g){e=!0
}else{if(a=this._getIndex(a),-1!==d.inArray(a,e)){return
}e=d.isArray(e)?d.merge([a],e).sort():[a]
}this._setupDisabled(e)
}},load:function(p,k){p=this._getIndex(p);
var t=this,j=this.tabs.eq(p),q=j.find(".ui-tabs-anchor"),m=this._getPanelForTab(j),l={tab:j,panel:m};
f(q[0])||(this.xhr=d.ajax(this._ajaxSettings(q,k,l)),this.xhr&&"canceled"!==this.xhr.statusText&&(j.addClass("ui-tabs-loading"),m.attr("aria-busy","true"),this.xhr.success(function(a){setTimeout(function(){m.html(a),t._trigger("load",k,l)
},1)
}).complete(function(a,i){setTimeout(function(){"abort"===i&&t.panels.stop(!1,!0),j.removeClass("ui-tabs-loading"),m.removeAttr("aria-busy"),a===t.xhr&&delete t.xhr
},1)
})))
},_ajaxSettings:function(k,a,j){var l=this;
return{url:k.attr("href"),beforeSend:function(m,i){return l._trigger("beforeLoad",a,d.extend({jqXHR:m,ajaxSettings:i},j))
}}
},_getPanelForTab:function(j){var a=d(j).attr("aria-controls");
return this.element.find(this._sanitizeSelector("#"+a))
}})
})(jQuery);
(function($){$.extend({metadata:{defaults:{type:"class",name:"metadata",cre:/({.*})/,single:"metadata",savetype:"metadatatype"},setType:function(type,name){this.defaults.type=type;
this.defaults.name=name
},get:function(elem,opts){var settings=$.extend({},this.defaults,opts);
if(!settings.single.length){settings.single="metadata"
}var data=$.data(elem,settings.single);
var type=$.data(elem,settings.savetype);
if(data&&type===settings.type){return data
}data="{}";
var getData=function(data){if(typeof data!="string"){return data
}if(data.indexOf("{")<0){data=eval("("+data+")")
}};
var getObject=function(data){if(typeof data!="string"){return data
}data=eval("("+data+")");
return data
};
if(settings.type=="html5"){var object={};
$(elem.attributes).each(function(){var name=this.nodeName;
if(name.match(/^data-/)){name=name.replace(/^data-/,"")
}else{return true
}object[name]=getObject(this.nodeValue)
})
}else{if(settings.type=="class"){var m=settings.cre.exec(elem.className);
if(m){data=m[1]
}}else{if(settings.type=="elem"){if(!elem.getElementsByTagName){return
}var e=elem.getElementsByTagName(settings.name);
if(e.length){data=$.trim(e[0].innerHTML)
}}else{if(elem.getAttribute!=undefined){var attr=elem.getAttribute(settings.name);
if(attr){data=attr
}}}}object=getObject(data.indexOf("{")<0?"{"+data+"}":data)
}$.data(elem,settings.single,object);
$.data(elem,settings.savetype,settings.type);
return object
}}});
$.fn.metadata=function(opts){return $.metadata.get(this[0],opts)
}
})(jQuery);
jQuery.fn.highlight=function(b,c){function a(g,m,o){var p=0;
if(g.nodeType===3){var l=null;
var n;
if(o){l=g.data.match(m)
}else{n=g.data.toUpperCase().indexOf(m)
}if(n>=0||l!==null){var e;
if(o){n=l.index;
e=l[0].length
}else{e=m.length
}var k=document.createElement("span");
k.className="highlight";
var h=g.splitText(n);
var d=h.splitText(e);
var f=h.cloneNode(true);
k.appendChild(f);
h.parentNode.replaceChild(k,h);
p=1
}}else{if(g.nodeType===1&&g.childNodes&&!/(script|style)/i.test(g.tagName)){for(var j=0;
j<g.childNodes.length;
++j){j+=a(g.childNodes[j],m,o)
}}}return p
}return this.each(function(){if(c){if(b!==null){a(this,b,c)
}}else{if(b!==null&&b.length>0){a(this,b.toUpperCase())
}}})
};
jQuery.fn.removeHighlight=function(){function a(f){for(var d=0,c=f.childNodes,b=c.length;
d<b;
d++){var h=c[d];
if(h.nodeType===1){a(h);
continue
}if(h.nodeType!==3){continue
}var e=h.nextSibling;
if(e===null||e.nodeType!==3){continue
}var g=h.nodeValue+e.nodeValue;
new_node=f.ownerDocument.createTextNode(g);
f.insertBefore(new_node,h);
f.removeChild(h);
f.removeChild(e);
d--;
b--
}}return this.find("span.highlight").each(function(){var b=this.parentNode;
b.replaceChild(this.firstChild,this);
a(b)
}).end()
};
jQuery.cookie=function(d,e,b){if(arguments.length>1&&(e===null||typeof e!=="object")){b=jQuery.extend({},b);
if(e===null){b.expires=-1
}if(typeof b.expires==="number"){var g=b.expires,c=b.expires=new Date();
c.setDate(c.getDate()+g)
}return(document.cookie=[encodeURIComponent(d),"=",b.raw?String(e):encodeURIComponent(String(e)),b.expires?"; expires="+b.expires.toUTCString():"",b.path?"; path="+b.path:"",b.domain?"; domain="+b.domain:"",b.secure?"; secure":""].join(""))
}b=e||{};
var a,f=b.raw?function(h){return h
}:decodeURIComponent;
return(a=new RegExp("(?:^|; )"+encodeURIComponent(d)+"=([^;]*)").exec(document.cookie))?f(a[1]):null
};
function getjQueryVersion(a){if($().jQuery===a){return jQuery
}else{var b=jQuery;
$.ajax({url:"/js/jquery-"+a+".min.js",dataType:"script",async:false})
}}function checkChildCb(){var a=$("#cbtable").find(".cbparent");
a.click(function(){var c=$(this).prop("checked");
var b=$(this).parents("tr").nextAll().find("input:checkbox");
if(b.length===0){b=$(this).parents("li").nextAll().find("input:checkbox")
}$.each(b,function(){if($(this).hasClass("cbchild")){if(c){$(this).prop("checked",true)
}else{$(this).prop("checked",false)
}}else{return false
}})
})
}function _chartTabs(a){$.each(a,function(){var c=$(this).find(".quote-chart-img");
var b=$(this).find(".quote-chart-tabs a");
b.click(function(){var d=$(this).prop("href");
c.prop("src",d);
b.removeClass("active");
$(this).addClass("active");
return false
})
})
}function _dropdownList(a){a.selectmenu_linklist({transferClasses:false})
}function _initImageGallery(b){var a=b.addClass("gallery-active").adGallery({loader_image:"/img/loader.gif",description_wrapper:".ad-img-description",display_back_and_forward:false,display_back_and_forward_add:true,effect:"slide-hori",slideshow:{enable:false},callbacks:{afterImageVisible:function(){if(c){c[this.gallery_index].selectmenu_linklist("index",this.current_index)
}}}});
var c=[];
$.each($(".init-gallery .ad-thumb-list",$("#content")),function(d){c[d]=$(this).selectmenu_linklist({transferClasses:false,followLink:false,change:function(g,f){a[d].showImage(f.index)
}})
})
}function _openInParent(b,a){if(self!==parent&&a){$.each(b,function(){var c=$(this);
if(c.is("form")){c.submit(function(e){var d=$(this);
d.prop("target","_parent");
if(d.attr("data-error")!=="true"){var f=$.base64Encode(parent.window.location.pathname);
ubs.func.cookieHandling.setCookieStorage("colorbox_open_"+f,null)
}})
}if(c.is("a")){c.click(function(e){e.preventDefault();
var d=$(this).prop("href");
var f=parent.window;
parent.$(parent.document).bind("cbox_closed",function(){f.location.href=d
});
parent.$(parent.document).colorbox.close()
})
}})
}}function _initUnsubscribe(a){$.each(a,function(){var b=$(this).closest("tr");
var c=$(this).closest("tbody").find("tr");
$forms=$(this).find("form");
$forms.submit(function(f){f.preventDefault();
var d=$(this),e=d.prop("action");
$.post(e,d.serialize()).success(function(g){$.colorbox.close();
b.hide();
if(c.filter(":visible").length===0){b.closest("table").hide().siblings(".hide").show()
}}).error(function(g){})
});
$closeButton=$(this).find("button.closeOl");
$closeButton.click(function(){$.colorbox.close()
})
})
}function _popUp(a){a.popupWindow({height:800,width:560,top:100,left:65,toolbar:0,scrollbars:1,location:0,statusbar:0,menubar:0,resizable:1,open_in:"_blank"})
}function _stayInPopup(a){$("a",a).click(function(){var b=$(this).prop("target");
if(b==="_self"||b===""){$(this).prop("href",$(this).prop("href").replace(".html",".popup.html"))
}});
$("form",a).submit(function(){$(this).prop("action",$(this).prop("action").replace(".html",".popup.html"))
})
}function _columnHeightAdjust(a){$.each(a,function(b){$columns=$(this).find("div.col-body:first > div > div.col-inner-wrapper");
var c=0;
$.each($columns,function(){var d=$(this).height();
if(d>c){c=d
}});
$.each($columns,function(){$(this).height(c)
})
})
}function _ckeckStorage(){try{sessionStorage.setItem("test-key","test-value");
if(sessionStorage.getItem("test-key")==="test-value"){return true
}}catch(a){return false
}}var storageEnabled=_ckeckStorage();
function _brightcoveVideo(a){$.each(a,function(){$element=$(this);
$element.closest("div.video").height($element.height());
$imgWrapper=$('<div class="brigthcoveImageWrapper" />');
$element.wrap($imgWrapper);
$imgStatus=$('<div class="imageStatus" />');
$element.parent().append($imgStatus);
$imgStatus.css({left:($element.width()/2-$imgStatus.width()/2),top:($element.height()/2-$imgStatus.height()/2)});
$element.parent().click(function(){_loadBrightcoveVideo(this)
})
})
}function _loadBrightcoveVideo(a){$(a).addClass("loadVideo").next().addClass("BrightcoveExperience");
brightcove.createExperiences()
}function _checkPageContent(d,c){$.cookie("login-token","");
d.preventDefault();
var a=$(c),b=a.prop("action");
$.post(b,a.serialize()).success(function(e){window.location.href=$("#resource").val()
}).error(function(e){if(e!==""){if($(".messageBox p").length===0){$("#loginform").prepend('<div class="messageBox"><p>'+e.responseText+"</p></div>")
}else{$(".messageBox p").empty().append(e.responseText)
}}})
}
/*!
 Colorbox v1.4.27 - 2013-07-16
 jQuery lightbox and modal window plugin
 (c) 2013 Jack Moore - http://www.jacklmoore.com/colorbox
 license: http://www.opensource.org/licenses/mit-license.php
 */
(function(N,l,ab){var O={transition:"elastic",speed:300,fadeOut:300,width:false,initialWidth:"600",innerWidth:false,maxWidth:false,height:false,initialHeight:"450",innerHeight:false,maxHeight:false,scalePhotos:true,scrolling:true,inline:false,html:false,iframe:false,fastIframe:true,photo:false,href:false,title:false,rel:false,opacity:0.9,preloading:true,className:false,retinaImage:false,retinaUrl:false,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",open:false,returnFocus:true,trapFocus:true,reposition:true,loop:true,slideshow:false,slideshowAuto:true,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp)((#|\?).*)?$/i,onOpen:false,onLoad:false,onComplete:false,onCleanup:false,onClosed:false,overlayClose:true,escKey:true,arrowKey:true,top:false,bottom:false,left:false,right:false,fixed:false,data:undefined,closeButton:true},y="colorbox",W="cbox",r=W+"Element",aa=W+"_open",e=W+"_load",Y=W+"_complete",w=W+"_cleanup",ah=W+"_closed",i=W+"_purge",U,am,an,d,L,p,b,T,c,af,R,k,h,o,v,ac,u,V,A,C,J=N("<a/>"),ak,ao,m,g,a,x,M,n,E,ad,Q,B,P,aj="div",ai,H=0,ae={},ag;
function K(ap,at,ar){var aq=l.createElement(ap);
if(at){aq.id=W+at
}if(ar){aq.style.cssText=ar
}return N(aq)
}function t(){return ab.innerHeight?ab.innerHeight:N(ab).height()
}function G(aq){var ap=c.length,ar=(M+aq)%ap;
return(ar<0)?ap+ar:ar
}function S(ap,aq){return Math.round((/%/.test(ap)?((aq==="x"?af.width():t())/100):1)*parseInt(ap,10))
}function D(aq,ap){return aq.photo||aq.photoRegex.test(ap)
}function F(aq,ap){return aq.retinaUrl&&ab.devicePixelRatio>1?ap.replace(aq.photoRegex,aq.retinaSuffix):ap
}function al(ap){if("contains" in am[0]&&!am[0].contains(ap.target)){ap.stopPropagation();
am.focus()
}}function X(){var ap,aq=N.data(x,y);
if(aq==null){ak=N.extend({},O);
if(console&&console.log){console.log("Error: cboxElement missing settings object")
}}else{ak=N.extend({},aq)
}for(ap in ak){if(N.isFunction(ak[ap])&&ap.slice(0,2)!=="on"){ak[ap]=ak[ap].call(x)
}}ak.rel=ak.rel||x.rel||N(x).data("rel")||"nofollow";
ak.href=ak.href||N(x).prop("href");
ak.title=ak.title||x.title;
if(typeof ak.href==="string"){ak.href=N.trim(ak.href)
}}function I(ap,aq){N(l).trigger(ap);
J.trigger(ap);
if(N.isFunction(aq)){aq.call(x)
}}function z(){var aq,at=W+"Slideshow_",au="click."+W,ap,aw,av,ar;
if(ak.slideshow&&c[1]){ap=function(){clearTimeout(aq)
};
aw=function(){if(ak.loop||c[M+1]){aq=setTimeout(P.next,ak.slideshowSpeed)
}};
av=function(){ac.html(ak.slideshowStop).unbind(au).one(au,ar);
J.bind(Y,aw).bind(e,ap).bind(w,ar);
am.removeClass(at+"off").addClass(at+"on")
};
ar=function(){ap();
J.unbind(Y,aw).unbind(e,ap).unbind(w,ar);
ac.html(ak.slideshowStart).unbind(au).one(au,function(){P.next();
av()
});
am.removeClass(at+"on").addClass(at+"off")
};
if(ak.slideshowAuto){av()
}else{ar()
}}else{am.removeClass(at+"off "+at+"on")
}}function f(ap){if(!Q){x=ap;
X();
c=N(x);
M=0;
if(ak.rel!=="nofollow"){c=N("."+r).filter(function(){var ar=N.data(this,y),aq;
if(ar){aq=N(this).data("rel")||ar.rel||this.rel
}return(aq===ak.rel)
});
M=c.index(x);
if(M===-1){c=c.add(x);
M=c.length-1
}}U.css({opacity:parseFloat(ak.opacity),cursor:ak.overlayClose?"pointer":"auto",visibility:"visible"}).show();
if(ai){am.add(U).removeClass(ai)
}if(ak.className){am.add(U).addClass(ak.className)
}ai=ak.className;
if(ak.closeButton){A.html(ak.close).appendTo(d)
}else{A.appendTo("<div/>")
}if(!E){E=ad=true;
am.css({visibility:"hidden",display:"block"});
R=K(aj,"LoadedContent","width:0; height:0; overflow:hidden");
d.css({width:"",height:""}).append(R);
ao=L.height()+T.height()+d.outerHeight(true)-d.height();
m=p.width()+b.width()+d.outerWidth(true)-d.width();
g=R.outerHeight(true);
a=R.outerWidth(true);
ak.w=S(ak.initialWidth,"x");
ak.h=S(ak.initialHeight,"y");
P.position();
z();
I(aa,ak.onOpen);
C.add(o).hide();
am.focus();
if(ak.trapFocus){if(l.addEventListener){l.addEventListener("focus",al,true);
J.one(ah,function(){l.removeEventListener("focus",al,true)
})
}}if(ak.returnFocus){J.one(ah,function(){N(x).focus()
})
}}Z()
}}function q(){if(!am&&l.body){ag=false;
af=N(ab);
am=K(aj).prop({id:y,"class":N.support.opacity===false?W+"IE":"",role:"dialog",tabindex:"-1"}).hide();
U=K(aj,"Overlay").hide();
h=N([K(aj,"LoadingOverlay")[0],K(aj,"LoadingGraphic")[0]]);
an=K(aj,"Wrapper");
d=K(aj,"Content").append(o=K(aj,"Title"),v=K(aj,"Current"),V=N('<button type="button"/>').prop({id:W+"Previous"}),u=N('<button type="button"/>').prop({id:W+"Next"}),ac=K("button","Slideshow"),h);
A=N('<button type="button"/>').prop({id:W+"Close"});
an.append(K(aj).append(K(aj,"TopLeft"),L=K(aj,"TopCenter"),K(aj,"TopRight")),K(aj,false,"clear:left").append(p=K(aj,"MiddleLeft"),d,b=K(aj,"MiddleRight")),K(aj,false,"clear:left").append(K(aj,"BottomLeft"),T=K(aj,"BottomCenter"),K(aj,"BottomRight"))).find("div div").css({"float":"left"});
k=K(aj,false,"position:absolute; width:9999px; visibility:hidden; display:none");
C=u.add(V).add(v).add(ac);
N(l.body).append(U,am.append(an,k))
}}function j(){function ap(aq){if(!(aq.which>1||aq.shiftKey||aq.altKey||aq.metaKey||aq.ctrlKey)){aq.preventDefault();
f(this)
}}if(am){if(!ag){ag=true;
u.click(function(){P.next()
});
V.click(function(){P.prev()
});
A.click(function(){P.close()
});
U.click(function(){if(ak.overlayClose){P.close()
}});
N(l).bind("keydown."+W,function(ar){var aq=ar.keyCode;
if(E&&ak.escKey&&aq===27){ar.preventDefault();
P.close()
}if(E&&ak.arrowKey&&c[1]&&!ar.altKey){if(aq===37){ar.preventDefault();
V.click()
}else{if(aq===39){ar.preventDefault();
u.click()
}}}});
if(N.isFunction(N.fn.on)){N(l).on("click."+W,"."+r,ap)
}else{N("."+r).live("click."+W,ap)
}}return true
}return false
}if(N.colorbox){return
}N(q);
P=N.fn[y]=N[y]=function(ap,ar){var aq=this;
ap=ap||{};
q();
if(j()){if(N.isFunction(aq)){aq=N("<a/>");
ap.open=true
}else{if(!aq[0]){return aq
}}if(ar){ap.onComplete=ar
}aq.each(function(){N.data(this,y,N.extend({},N.data(this,y)||O,ap))
}).addClass(r);
if((N.isFunction(ap.open)&&ap.open.call(aq))||ap.open){f(aq[0])
}}return aq
};
P.position=function(ar,au){var ax,az=0,aq=0,av=am.offset(),ap,at;
af.unbind("resize."+W);
am.css({top:-90000,left:-90000});
ap=af.scrollTop();
at=af.scrollLeft();
if(ak.fixed){av.top-=ap;
av.left-=at;
am.css({position:"fixed"})
}else{az=ap;
aq=at;
am.css({position:"absolute"})
}if(ak.right!==false){aq+=Math.max(af.width()-ak.w-a-m-S(ak.right,"x"),0)
}else{if(ak.left!==false){aq+=S(ak.left,"x")
}else{aq+=Math.round(Math.max(af.width()-ak.w-a-m,0)/2)
}}if(ak.bottom!==false){az+=Math.max(t()-ak.h-g-ao-S(ak.bottom,"y"),0)
}else{if(ak.top!==false){az+=S(ak.top,"y")
}else{az+=Math.round(Math.max(t()-ak.h-g-ao,0)/2)
}}am.css({top:av.top,left:av.left,visibility:"visible"});
an[0].style.width=an[0].style.height="9999px";
function ay(){L[0].style.width=T[0].style.width=d[0].style.width=(parseInt(am[0].style.width,10)-m)+"px";
d[0].style.height=p[0].style.height=b[0].style.height=(parseInt(am[0].style.height,10)-ao)+"px"
}ax={width:ak.w+a+m,height:ak.h+g+ao,top:az,left:aq};
if(ar){var aw=0;
N.each(ax,function(aA){if(ax[aA]!==ae[aA]){aw=ar;
return
}});
ar=aw
}ae=ax;
if(!ar){am.css(ax)
}am.dequeue().animate(ax,{duration:ar||0,complete:function(){ay();
ad=false;
an[0].style.width=(ak.w+a+m)+"px";
an[0].style.height=(ak.h+g+ao)+"px";
if(ak.reposition){setTimeout(function(){af.bind("resize."+W,P.position)
},1)
}if(au){au()
}},step:ay})
};
P.resize=function(aq){var ap;
if(E){aq=aq||{};
if(aq.width){ak.w=S(aq.width,"x")-a-m
}if(aq.innerWidth){ak.w=S(aq.innerWidth,"x")
}R.css({width:ak.w});
if(aq.height){ak.h=S(aq.height,"y")-g-ao
}if(aq.innerHeight){ak.h=S(aq.innerHeight,"y")
}if(!aq.innerHeight&&!aq.height){ap=R.scrollTop();
R.css({height:"auto"});
ak.h=R.height()
}R.css({height:ak.h});
if(ap){R.scrollTop(ap)
}P.position(ak.transition==="none"?0:ak.speed)
}};
P.prep=function(aq){if(!E){return
}var au,ar=ak.transition==="none"?0:ak.speed;
R.empty().remove();
R=K(aj,"LoadedContent").append(aq);
function ap(){ak.w=ak.w||R.width();
ak.w=ak.mw&&ak.mw<ak.w?ak.mw:ak.w;
return ak.w
}function at(){ak.h=ak.h||R.height();
ak.h=ak.mh&&ak.mh<ak.h?ak.mh:ak.h;
return ak.h
}R.hide().appendTo(k.show()).css({width:ap(),overflow:ak.scrolling?"auto":"hidden"}).css({height:at()}).prependTo(d);
k.hide();
N(n).css({"float":"none"});
au=function(){var az=c.length,ax,ay="frameBorder",av="allowTransparency",aw;
if(!E){return
}function aA(){if(N.support.opacity===false){am[0].style.removeAttribute("filter")
}}aw=function(){clearTimeout(B);
h.hide();
I(Y,ak.onComplete)
};
o.html(ak.title).add(R).show();
if(az>1){if(typeof ak.current==="string"){v.html(ak.current.replace("{current}",M+1).replace("{total}",az)).show()
}u[(ak.loop||M<az-1)?"show":"hide"]().html(ak.next);
V[(ak.loop||M)?"show":"hide"]().html(ak.previous);
if(ak.slideshow){ac.show()
}if(ak.preloading){N.each([G(-1),G(1)],function(){var aE,aB,aC=c[this],aD=N.data(aC,y);
if(aD&&aD.href){aE=aD.href;
if(N.isFunction(aE)){aE=aE.call(aC)
}}else{aE=N(aC).prop("href")
}if(aE&&D(aD,aE)){aE=F(aD,aE);
aB=l.createElement("img");
aB.src=aE
}})
}}else{C.hide()
}if(ak.iframe){ax=K("iframe")[0];
if(ay in ax){ax[ay]=0
}if(av in ax){ax[av]="true"
}if(!ak.scrolling){ax.scrolling="no"
}N(ax).prop({src:ak.href,name:(new Date()).getTime(),"class":W+"Iframe",allowFullScreen:true,webkitAllowFullScreen:true,mozallowfullscreen:true}).one("load",aw).appendTo(R);
J.one(i,function(){ax.src="//about:blank"
});
if(ak.fastIframe){N(ax).trigger("load")
}}else{aw()
}if(ak.transition==="fade"){am.fadeTo(ar,1,aA)
}else{aA()
}};
if(ak.transition==="fade"){am.fadeTo(ar,0,function(){P.position(0,au)
})
}else{P.position(ar,au)
}};
function Z(){var ar,at,aq=P.prep,ap,au=++H;
ad=true;
n=false;
x=c[M];
X();
I(i);
I(e,ak.onLoad);
ak.h=ak.height?S(ak.height,"y")-g-ao:ak.innerHeight&&S(ak.innerHeight,"y");
ak.w=ak.width?S(ak.width,"x")-a-m:ak.innerWidth&&S(ak.innerWidth,"x");
ak.mw=ak.w;
ak.mh=ak.h;
if(ak.maxWidth){ak.mw=S(ak.maxWidth,"x")-a-m;
ak.mw=ak.w&&ak.w<ak.mw?ak.w:ak.mw
}if(ak.maxHeight){ak.mh=S(ak.maxHeight,"y")-g-ao;
ak.mh=ak.h&&ak.h<ak.mh?ak.h:ak.mh
}ar=ak.href;
B=setTimeout(function(){h.show()
},100);
if(ak.inline){ap=K(aj).hide().insertBefore(N(ar)[0]);
J.one(i,function(){ap.replaceWith(R.children())
});
aq(N(ar))
}else{if(ak.iframe){aq(" ")
}else{if(ak.html){aq(ak.html)
}else{if(D(ak,ar)){ar=F(ak,ar);
n=l.createElement("img");
N(n).addClass(W+"Photo").bind("error",function(){ak.title=false;
aq(K(aj,"Error").html(ak.imgError))
}).one("load",function(){var av;
if(au!==H){return
}n.alt=N(x).prop("alt")||N(x).prop("data-alt")||"";
if(ak.retinaImage&&ab.devicePixelRatio>1){n.height=n.height/ab.devicePixelRatio;
n.width=n.width/ab.devicePixelRatio
}if(ak.scalePhotos){at=function(){n.height-=n.height*av;
n.width-=n.width*av
};
if(ak.mw&&n.width>ak.mw){av=(n.width-ak.mw)/n.width;
at()
}if(ak.mh&&n.height>ak.mh){av=(n.height-ak.mh)/n.height;
at()
}}if(ak.h){n.style.marginTop=Math.max(ak.mh-n.height,0)/2+"px"
}if(c[1]&&(ak.loop||c[M+1])){n.style.cursor="pointer";
n.onclick=function(){P.next()
}
}n.style.width=n.width+"px";
n.style.height=n.height+"px";
setTimeout(function(){aq(n)
},1)
});
setTimeout(function(){n.src=ar
},1)
}else{if(ar){k.load(ar,ak.data,function(aw,av){if(au===H){aq(av==="error"?K(aj,"Error").html(ak.xhrError):N(this).contents())
}})
}}}}}}P.next=function(){if(!ad&&c[1]&&(ak.loop||c[M+1])){M=G(1);
f(c[M])
}};
P.prev=function(){if(!ad&&c[1]&&(ak.loop||M)){M=G(-1);
f(c[M])
}};
P.close=function(){if(E&&!Q){Q=true;
E=false;
I(w,ak.onCleanup);
af.unbind("."+W);
U.fadeTo(ak.fadeOut||0,0);
am.stop().fadeTo(ak.fadeOut||0,0,function(){am.add(U).css({opacity:1,cursor:"auto"}).hide();
I(i);
R.empty().remove();
setTimeout(function(){Q=false;
I(ah,ak.onClosed)
},1)
})
}};
P.remove=function(){if(!am){return
}am.stop();
N.colorbox.close();
am.stop().remove();
U.remove();
Q=false;
am=null;
N("."+r).removeData(y).removeClass(r);
N(l).unbind("click."+W)
};
P.element=function(){return N(x)
};
P.settings=O
}(jQuery,document,window));
(function(a){a.fn.popupWindow=function(c){var e={height:800,width:585,top:100,left:65,toolbar:0,scrollbars:1,location:0,statusbar:0,menubar:0,resizable:1,open_in:"_blank"};
var d=a.extend(e,c);
a.each(a(this),function(){if(this.tagName==="A"){a(this).click(function(g){var f=this.getAttribute("href");
b(this,f.replace(".html",".popup.html"));
g.preventDefault()
})
}if(this.tagName==="FORM"){a(this).submit(function(){var f="";
d.open_in="popup";
this.target=d.open_in;
if(a(this).hasClass("validate")){if(a(this).valid()){b(this,f)
}}else{b(this,f)
}})
}});
var b=function(g,i){var j=a(g).metadata().popup;
var f=a.extend({},d,j);
if(f.left==="center"){f.left=((screen.width/2)-(f.width/2))
}var h=window.open(i,f.open_in,"height="+f.height+",width="+f.width+",left="+f.left+",top="+f.top+",toolbars="+f.toolbar+",scrollbars="+f.scrollbars+",location="+f.location+",statusbar="+f.statusbar+",menubar="+f.menubar+",resizable="+f.resizable);
if(h!==null){h.focus()
}}
}
})(jQuery);
(function(a){a.flexslider=function(f,q){var c=a(f);
c.vars=a.extend({},a.flexslider.defaults,q);
var j=c.vars.namespace,e=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,k=(("ontouchstart" in window)||e||window.DocumentTouch&&document instanceof DocumentTouch)&&c.vars.touch,d="click touchend MSPointerUp",b="",p,i=c.vars.direction==="vertical",l=c.vars.reverse,o=(c.vars.itemWidth>0),h=c.vars.animation==="fade",m=c.vars.asNavFor!=="",g={},n=true;
a.data(f,"flexslider",c);
g={init:function(){c.animating=false;
c.currentSlide=parseInt((c.vars.startAt?c.vars.startAt:0),10);
if(isNaN(c.currentSlide)){c.currentSlide=0
}c.animatingTo=c.currentSlide;
c.atEnd=(c.currentSlide===0||c.currentSlide===c.last);
c.containerSelector=c.vars.selector.substr(0,c.vars.selector.search(" "));
c.slides=a(c.vars.selector,c);
c.container=a(c.containerSelector,c);
c.count=c.slides.length;
c.syncExists=a(c.vars.sync).length>0;
if(c.vars.animation==="slide"){c.vars.animation="swing"
}c.prop=(i)?"top":"marginLeft";
c.args={};
c.manualPause=false;
c.stopped=false;
c.started=false;
c.startTimeout=null;
c.transitions=!c.vars.video&&!h&&c.vars.useCSS&&(function(){var u=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];
for(var r in t){if(u.style[t[r]]!==undefined){c.pfx=t[r].replace("Perspective","").toLowerCase();
c.prop="-"+c.pfx+"-transform";
return true
}}return false
}());
if(c.vars.controlsContainer!==""){c.controlsContainer=a(c.vars.controlsContainer).length>0&&a(c.vars.controlsContainer)
}if(c.vars.manualControls!==""){c.manualControls=a(c.vars.manualControls).length>0&&a(c.vars.manualControls)
}if(c.vars.playPauseCustom!==""){c.playPauseCustom=a(c.vars.playPauseCustom).length>0&&a(c.vars.playPauseCustom)
}if(c.vars.randomize){c.slides.sort(function(){return(Math.round(Math.random())-0.5)
});
c.container.empty().append(c.slides)
}c.doMath();
c.setup("init");
if(c.vars.controlNav){g.controlNav.setup()
}if(c.vars.directionNav){g.directionNav.setup()
}if(c.vars.keyboard&&(a(c.containerSelector).length===1||c.vars.multipleKeyboard)){a(document).bind("keyup",function(t){var r=t.keyCode;
if(!c.animating&&(r===39||r===37)){var u=(r===39)?c.getTarget("next"):(r===37)?c.getTarget("prev"):false;
c.flexAnimate(u,c.vars.pauseOnAction)
}else{if(r===9){if(a.contains(c[0],document.activeElement)){ubs.util.log("Tab key pressed...");
if(!c.manualPlay&&!c.manualPause){c.pause()
}if(c.animating){ubs.util.log("Cancelling tabing during animation");
t.preventDefault()
}}}}})
}if(c.vars.mousewheel){c.bind("mousewheel",function(u,w,t,r){u.preventDefault();
var v=(w<0)?c.getTarget("next"):c.getTarget("prev");
c.flexAnimate(v,c.vars.pauseOnAction)
})
}if(c.vars.pausePlay){g.pausePlay.setup()
}if(c.vars.slideshow&&c.vars.pauseInvisible){g.pauseInvisible.init()
}if(c.vars.slideshow){if(c.vars.pauseOnHover){c.hover(function(){console.log("IN!");
if(!c.manualPlay&&!c.manualPause){c.pause()
}},function(){console.log("OUT!");
if(!c.manualPause&&!c.manualPlay&&!c.stopped){c.play()
}})
}if(!c.vars.pauseInvisible||!g.pauseInvisible.isHidden()){(c.vars.initDelay>0)?c.startTimeout=setTimeout(c.play,c.vars.initDelay):c.play()
}}if(m){g.asNav.setup()
}if(k&&c.vars.touch){g.touch()
}if(!h||(h&&c.vars.smoothHeight)){a(window).bind("resize orientationchange focus",g.resize)
}c.find("img").attr("draggable","false");
setTimeout(function(){c.vars.start(c)
},200)
},asNav:{setup:function(){c.asNav=true;
c.animatingTo=Math.floor(c.currentSlide/c.move);
c.currentItem=c.currentSlide;
c.slides.removeClass(j+"active-slide").eq(c.currentItem).addClass(j+"active-slide");
if(!e){c.slides.on(d,function(u){u.preventDefault();
var t=a(this),r=t.index();
var v=t.offset().left-a(c).scrollLeft();
if(v<=0&&t.hasClass(j+"active-slide")){c.flexAnimate(c.getTarget("prev"),true)
}else{if(!a(c.vars.asNavFor).data("flexslider").animating&&!t.hasClass(j+"active-slide")){c.direction=(c.currentItem<r)?"next":"prev";
c.flexAnimate(r,c.vars.pauseOnAction,false,true,true)
}}})
}else{f._slider=c;
c.slides.each(function(){var r=this;
r._gesture=new MSGesture();
r._gesture.target=r;
r.addEventListener("MSPointerDown",function(t){t.preventDefault();
if(t.currentTarget._gesture){t.currentTarget._gesture.addPointer(t.pointerId)
}},false);
r.addEventListener("MSGestureTap",function(v){v.preventDefault();
var u=a(this),t=u.index();
if(!a(c.vars.asNavFor).data("flexslider").animating&&!u.hasClass("active")){c.direction=(c.currentItem<t)?"next":"prev";
c.flexAnimate(t,c.vars.pauseOnAction,false,true,true)
}})
})
}}},controlNav:{setup:function(){if(!c.manualControls){g.controlNav.setupPaging()
}else{g.controlNav.setupManual()
}},setupPaging:function(){var v=(c.vars.controlNav==="thumbnails")?"control-thumbs":"control-paging",t=1,w,r;
c.controlNavScaffold=a('<ol class="'+j+"control-nav "+j+v+'"></ol>');
if(c.pagingCount>1){for(var u=0;
u<c.pagingCount;
u++){r=c.slides.eq(u);
w=(c.vars.controlNav==="thumbnails")?'<img src="'+r.attr("data-thumb")+'"/>':"<a>"+t+"</a>";
if("thumbnails"===c.vars.controlNav&&true===c.vars.thumbCaptions){var x=r.attr("data-thumbcaption");
if(""!=x&&undefined!=x){w+='<span class="'+j+'caption">'+x+"</span>"
}}c.controlNavScaffold.append("<li>"+w+"</li>");
t++
}}(c.controlsContainer)?a(c.controlsContainer).append(c.controlNavScaffold):c.append(c.controlNavScaffold);
g.controlNav.set();
g.controlNav.active();
c.controlNavScaffold.delegate("a, img",d,function(y){y.preventDefault();
if(b===""||b===y.type){var A=a(this),z=c.controlNav.index(A);
if(!A.hasClass(j+"active")){c.direction=(z>c.currentSlide)?"next":"prev";
c.flexAnimate(z,c.vars.pauseOnAction)
}}if(b===""){b=y.type
}g.setToClearWatchedEvent()
})
},setupManual:function(){c.controlNav=c.manualControls;
g.controlNav.active();
c.controlNav.bind(d,function(r){r.preventDefault();
if(b===""||b===r.type){var u=a(this),t=c.controlNav.index(u);
if(!u.hasClass(j+"active")){(t>c.currentSlide)?c.direction="next":c.direction="prev";
c.flexAnimate(t,c.vars.pauseOnAction)
}}if(b===""){b=r.type
}g.setToClearWatchedEvent()
})
},set:function(){var r=(c.vars.controlNav==="thumbnails")?"img":"a";
c.controlNav=a("."+j+"control-nav li "+r,(c.controlsContainer)?c.controlsContainer:c)
},active:function(){c.controlNav.removeClass(j+"active").eq(c.animatingTo).addClass(j+"active")
},update:function(r,t){if(c.pagingCount>1&&r==="add"){c.controlNavScaffold.append(a("<li><a>"+c.count+"</a></li>"))
}else{if(c.pagingCount===1){c.controlNavScaffold.find("li").remove()
}else{c.controlNav.eq(t).closest("li").remove()
}}g.controlNav.set();
(c.pagingCount>1&&c.pagingCount!==c.controlNav.length)?c.update(t,r):g.controlNav.active()
}},directionNav:{setup:function(){var r=a('<ul class="'+j+'direction-nav"><li><a class="'+j+'prev" href="#">'+c.vars.prevText+'</a></li><li><a class="'+j+'next" href="#">'+c.vars.nextText+"</a></li></ul>");
if(c.controlsContainer){a(c.controlsContainer).append(r);
c.directionNav=a("."+j+"direction-nav li a",c.controlsContainer)
}else{c.append(r);
c.directionNav=a("."+j+"direction-nav li a",c)
}g.directionNav.update();
c.directionNav.bind(d,function(t){t.preventDefault();
var u;
if(b===""||b===t.type){u=(a(this).hasClass(j+"next"))?c.getTarget("next"):c.getTarget("prev");
c.flexAnimate(u,c.vars.pauseOnAction)
}if(b===""){b=t.type
}g.setToClearWatchedEvent()
})
},update:function(){var r=j+"disabled";
if(c.pagingCount===1){c.directionNav.addClass(r).attr("tabindex","-1")
}else{if(!c.vars.animationLoop){if(c.animatingTo===0){c.directionNav.removeClass(r).filter("."+j+"prev").addClass(r).attr("tabindex","-1")
}else{if(c.animatingTo===c.last){c.directionNav.removeClass(r).filter("."+j+"next").addClass(r).attr("tabindex","-1")
}else{c.directionNav.removeClass(r).removeAttr("tabindex")
}}}else{c.directionNav.removeClass(r).removeAttr("tabindex")
}}}},pausePlay:{setup:function(){if(typeof c.playPauseCustom==="undefined"){var r=a('<div class="'+j+'pauseplay"><a></a></div>');
if(c.controlsContainer){c.controlsContainer.append(r);
c.pausePlay=a("."+j+"pauseplay a",c.controlsContainer)
}else{c.append(r);
c.pausePlay=a("."+j+"pauseplay a",c)
}}else{c.pausePlay=c.playPauseCustom
}g.pausePlay.update((c.vars.slideshow)?j+"pause":j+"play");
if(c.pausePlay){c.pausePlay.bind(d,function(t){t.preventDefault();
if(b===""||b===t.type){if(a(this).hasClass(j+"pause")){c.manualPause=true;
c.manualPlay=false;
c.pause()
}else{c.manualPause=false;
c.manualPlay=true;
c.play()
}}if(b===""){b=t.type
}g.setToClearWatchedEvent()
})
}},update:function(r){if(typeof c.playPauseCustom==="undefined"){(r==="play")?c.pausePlay.removeClass(j+"pause").addClass(j+"play").html(c.vars.playText):c.pausePlay.removeClass(j+"play").addClass(j+"pause").html(c.vars.pauseText)
}else{var t=(r==="play");
if(c.playPauseCustom){c.playPauseCustom.toggleClass(j+"pause",!t).toggleClass(j+"play",t)
}if(c.controlsContainer){c.controlsContainer.trigger("pausePlayClick",[c.playPauseCustom,r])
}}}},touch:function(){var D,A,y,E,H,F,C=false,v=0,u=0,x=0;
if(!e){f.addEventListener("touchstart",z,false);
function z(I){if(c.animating){I.preventDefault()
}else{if((window.navigator.msPointerEnabled)||I.touches.length===1){c.pause();
E=(i)?c.h:c.w;
F=Number(new Date());
v=I.touches[0].pageX;
u=I.touches[0].pageY;
y=(o&&l&&c.animatingTo===c.last)?0:(o&&l)?c.limit-(((c.itemW+c.vars.itemMargin)*c.move)*c.animatingTo):(o&&c.currentSlide===c.last)?c.limit:(o)?((c.itemW+c.vars.itemMargin)*c.move)*c.currentSlide:(l)?(c.last-c.currentSlide+c.cloneOffset)*E:(c.currentSlide+c.cloneOffset)*E;
D=(i)?u:v;
A=(i)?v:u;
f.addEventListener("touchmove",t,false);
f.addEventListener("touchend",G,false)
}}}function t(I){v=I.touches[0].pageX;
u=I.touches[0].pageY;
H=(i)?D-u:D-v;
C=(i)?(Math.abs(H)<Math.abs(v-A)):(Math.abs(H)<Math.abs(u-A));
var J=500;
if(!C||Number(new Date())-F>J){I.preventDefault();
if(!h&&c.transitions){if(!c.vars.animationLoop){H=H/((c.currentSlide===0&&H<0||c.currentSlide===c.last&&H>0)?(Math.abs(H)/E+2):1)
}c.setProps(y+H,"setTouch")
}}}function G(K){f.removeEventListener("touchmove",t,false);
if(c.animatingTo===c.currentSlide&&!C&&!(H===null)){var J=(l)?-H:H,I=(J>0)?c.getTarget("next"):c.getTarget("prev");
if(c.canAdvance(I)&&(Number(new Date())-F<550&&Math.abs(J)>50||Math.abs(J)>E/2)){c.flexAnimate(I,c.vars.pauseOnAction)
}else{if(!h){c.flexAnimate(c.currentSlide,c.vars.pauseOnAction,true)
}}}f.removeEventListener("touchend",G,false);
D=null;
A=null;
H=null;
y=null
}}else{f.style.msTouchAction="none";
f._gesture=new MSGesture();
f._gesture.target=f;
f.addEventListener("MSPointerDown",r,false);
f._slider=c;
f.addEventListener("MSGestureChange",B,false);
f.addEventListener("MSGestureEnd",w,false);
function r(I){I.stopPropagation();
if(c.animating){I.preventDefault()
}else{c.pause();
f._gesture.addPointer(I.pointerId);
x=0;
E=(i)?c.h:c.w;
F=Number(new Date());
y=(o&&l&&c.animatingTo===c.last)?0:(o&&l)?c.limit-(((c.itemW+c.vars.itemMargin)*c.move)*c.animatingTo):(o&&c.currentSlide===c.last)?c.limit:(o)?((c.itemW+c.vars.itemMargin)*c.move)*c.currentSlide:(l)?(c.last-c.currentSlide+c.cloneOffset)*E:(c.currentSlide+c.cloneOffset)*E
}}function B(L){L.stopPropagation();
var K=L.target._slider;
if(!K){return
}var J=-L.translationX,I=-L.translationY;
x=x+((i)?I:J);
H=x;
C=(i)?(Math.abs(x)<Math.abs(-J)):(Math.abs(x)<Math.abs(-I));
if(L.detail===L.MSGESTURE_FLAG_INERTIA){setImmediate(function(){f._gesture.stop()
});
return
}if(!C||Number(new Date())-F>500){L.preventDefault();
if(!h&&K.transitions){if(!K.vars.animationLoop){H=x/((K.currentSlide===0&&x<0||K.currentSlide===K.last&&x>0)?(Math.abs(x)/E+2):1)
}K.setProps(y+H,"setTouch")
}}}function w(L){L.stopPropagation();
var I=L.target._slider;
if(!I){return
}if(I.animatingTo===I.currentSlide&&!C&&!(H===null)){var K=(l)?-H:H,J=(K>0)?I.getTarget("next"):I.getTarget("prev");
if(I.canAdvance(J)&&(Number(new Date())-F<550&&Math.abs(K)>50||Math.abs(K)>E/2)){I.flexAnimate(J,I.vars.pauseOnAction)
}else{if(!h){I.flexAnimate(I.currentSlide,I.vars.pauseOnAction,true)
}}}D=null;
A=null;
H=null;
y=null;
x=0
}}},resize:function(){if(!c.animating&&c.is(":visible")){if(!o){c.doMath()
}if(h){g.smoothHeight()
}else{if(o){c.slides.width(c.computedW);
c.update(c.pagingCount);
c.setProps()
}else{if(i){c.viewport.height(c.h);
c.setProps(c.h,"setTotal")
}else{if(c.vars.smoothHeight){g.smoothHeight()
}c.newSlides.width(c.computedW);
c.setProps(c.computedW,"setTotal")
}}}}},smoothHeight:function(r){if(!i||h){var t=(h)?c:c.viewport;
(r)?t.animate({height:c.slides.eq(c.animatingTo).height()},r):t.height(c.slides.eq(c.animatingTo).height())
}},sync:function(r){var u=a(c.vars.sync).data("flexslider"),t=c.animatingTo;
switch(r){case"animate":u.flexAnimate(t,c.vars.pauseOnAction,false,true);
break;
case"play":if(!u.playing&&!u.asNav){u.play()
}break;
case"pause":u.pause();
break
}},uniqueID:function(r){r.find("[id]").each(function(){var t=a(this);
t.attr("id",t.attr("id")+"_clone")
});
return r
},pauseInvisible:{visProp:null,init:function(){var u=["webkit","moz","ms","o"];
if("hidden" in document){return"hidden"
}for(var t=0;
t<u.length;
t++){if((u[t]+"Hidden") in document){g.pauseInvisible.visProp=u[t]+"Hidden"
}}if(g.pauseInvisible.visProp){var r=g.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange";
document.addEventListener(r,function(){if(g.pauseInvisible.isHidden()){if(c.startTimeout){clearTimeout(c.startTimeout)
}else{c.pause()
}}else{if(c.started){c.play()
}else{(c.vars.initDelay>0)?setTimeout(c.play,c.vars.initDelay):c.play()
}}})
}},isHidden:function(){return document[g.pauseInvisible.visProp]||false
}},setToClearWatchedEvent:function(){clearTimeout(p);
p=setTimeout(function(){b=""
},3000)
}};
c.flexAnimate=function(A,B,u,w,x){if(!c.vars.animationLoop&&A!==c.currentSlide){c.direction=(A>c.currentSlide)?"next":"prev"
}if(m&&c.pagingCount===1){c.direction=(c.currentItem<A)?"next":"prev"
}if(!c.animating&&(c.canAdvance(A,x)||u)&&c.is(":visible")){if(m&&w){var t=a(c.vars.asNavFor).data("flexslider");
c.atEnd=A===0||A===c.count-1;
t.flexAnimate(A,true,false,true,x);
c.direction=(c.currentItem<A)?"next":"prev";
t.direction=c.direction;
if(Math.ceil((A+1)/c.visible)-1!==c.currentSlide&&A!==0){c.currentItem=A;
c.slides.removeClass(j+"active-slide").eq(A).addClass(j+"active-slide");
A=Math.floor(A/c.visible)
}else{c.currentItem=A;
c.slides.removeClass(j+"active-slide").eq(A).addClass(j+"active-slide");
return false
}}c.animating=true;
c.animatingTo=A;
if(B){c.pause()
}c.vars.before(c);
if(c.syncExists&&!x){g.sync("animate")
}if(c.vars.controlNav){g.controlNav.active()
}if(!o){c.slides.removeClass(j+"active-slide").eq(A).addClass(j+"active-slide")
}c.atEnd=A===0||A===c.last;
if(c.vars.directionNav){g.directionNav.update()
}if(A===c.last){c.vars.end(c);
if(!c.vars.animationLoop){c.pause()
}}if(!h){var z=(i)?c.slides.filter(":first").height():c.computedW,y,v,r;
if(o){y=c.vars.itemMargin;
r=((c.itemW+y)*c.move)*c.animatingTo;
v=(r>c.limit&&c.visible!==1)?c.limit:r
}else{if(c.currentSlide===0&&A===c.count-1&&c.vars.animationLoop&&c.direction!=="next"){v=(l)?(c.count+c.cloneOffset)*z:0
}else{if(c.currentSlide===c.last&&A===0&&c.vars.animationLoop&&c.direction!=="prev"){v=(l)?0:(c.count+1)*z
}else{v=(l)?((c.count-1)-A+c.cloneOffset)*z:(A+c.cloneOffset)*z
}}}c.setProps(v,"",c.vars.animationSpeed);
if(c.transitions){if(!c.vars.animationLoop||!c.atEnd){c.animating=false;
c.currentSlide=c.animatingTo
}c.container.unbind("webkitTransitionEnd transitionend");
c.container.bind("webkitTransitionEnd transitionend",function(){c.wrapup(z)
})
}else{c.container.animate(c.args,c.vars.animationSpeed,c.vars.easing,function(){c.wrapup(z)
})
}}else{if(!k){c.slides.eq(c.currentSlide).css({zIndex:1}).animate({opacity:0},c.vars.animationSpeed,c.vars.easing);
c.slides.eq(A).css({zIndex:2}).animate({opacity:1},c.vars.animationSpeed,c.vars.easing,c.wrapup)
}else{c.slides.eq(c.currentSlide).css({opacity:0,zIndex:1});
c.slides.eq(A).css({opacity:1,zIndex:2});
c.wrapup(z)
}}if(c.vars.smoothHeight){g.smoothHeight(c.vars.animationSpeed)
}}};
c.wrapup=function(r){if(!h&&!o){if(c.currentSlide===0&&c.animatingTo===c.last&&c.vars.animationLoop){c.setProps(r,"jumpEnd")
}else{if(c.currentSlide===c.last&&c.animatingTo===0&&c.vars.animationLoop){c.setProps(r,"jumpStart")
}}}c.animating=false;
c.currentSlide=c.animatingTo;
c.vars.after(c)
};
c.animateSlides=function(){if(!c.animating&&n){c.flexAnimate(c.getTarget("next"))
}};
c.pause=function(){clearInterval(c.animatedSlides);
c.animatedSlides=null;
c.playing=false;
if(c.vars.pausePlay||c.vars.playPauseCustom){g.pausePlay.update("play")
}if(c.syncExists){g.sync("pause")
}};
c.play=function(){if(c.playing){clearInterval(c.animatedSlides)
}c.animatedSlides=c.animatedSlides||setInterval(c.animateSlides,c.vars.slideshowSpeed);
c.started=c.playing=true;
if(c.vars.pausePlay||c.vars.playPauseCustom){g.pausePlay.update("pause")
}if(c.syncExists){g.sync("play")
}};
c.stop=function(){c.pause();
c.stopped=true
};
c.canAdvance=function(u,r){var t=(m)?c.pagingCount-1:c.last;
return(r)?true:(m&&c.currentItem===c.count-1&&u===0&&c.direction==="prev")?true:(m&&c.currentItem===0&&u===c.pagingCount-1&&c.direction!=="next")?false:(u===c.currentSlide&&!m)?false:(c.vars.animationLoop)?true:(c.atEnd&&c.currentSlide===0&&u===t&&c.direction!=="next")?false:(c.atEnd&&c.currentSlide===t&&u===0&&c.direction==="next")?false:true
};
c.getTarget=function(r){c.direction=r;
if(r==="next"){return(c.currentSlide===c.last)?0:c.currentSlide+1
}else{return(c.currentSlide===0)?c.last:c.currentSlide-1
}};
c.setProps=function(v,r,t){var u=(function(){var w=(v)?v:((c.itemW+c.vars.itemMargin)*c.move)*c.animatingTo,x=(function(){if(o){return(r==="setTouch")?v:(l&&c.animatingTo===c.last)?0:(l)?c.limit-(((c.itemW+c.vars.itemMargin)*c.move)*c.animatingTo):(c.animatingTo===c.last)?c.limit:w
}else{switch(r){case"setTotal":return(l)?((c.count-1)-c.currentSlide+c.cloneOffset)*v:(c.currentSlide+c.cloneOffset)*v;
case"setTouch":return(l)?v:v;
case"jumpEnd":return(l)?v:c.count*v;
case"jumpStart":return(l)?c.count*v:v;
default:return v
}}}());
return(x*-1)+"px"
}());
if(c.transitions){u=(i)?"translate3d(0,"+u+",0)":"translate3d("+u+",0,0)";
t=(t!==undefined)?(t/1000)+"s":"0s";
c.container.css("-"+c.pfx+"-transition-duration",t);
c.container.css("transition-duration",t)
}c.args[c.prop]=u;
if(c.transitions||t===undefined){c.container.css(c.args)
}c.container.css("transform",u)
};
c.setup=function(t){if(!h){var u,r;
if(t==="init"){c.viewport=a('<div class="'+j+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(c).append(c.container);
c.cloneCount=0;
c.cloneOffset=0;
if(l){r=a.makeArray(c.slides).reverse();
c.slides=a(r);
c.container.empty().append(c.slides)
}}if(c.vars.animationLoop&&!o){c.cloneCount=2;
c.cloneOffset=1;
if(t!=="init"){c.container.find(".clone").remove()
}g.uniqueID(c.slides.first().clone().addClass("clone").attr("aria-hidden","true")).appendTo(c.container);
g.uniqueID(c.slides.last().clone().addClass("clone").attr("aria-hidden","true")).prependTo(c.container)
}c.newSlides=a(c.vars.selector,c);
u=(l)?c.count-1-c.currentSlide+c.cloneOffset:c.currentSlide+c.cloneOffset;
if(i&&!o){c.container.height((c.count+c.cloneCount)*200+"%").css("position","absolute").width("100%");
setTimeout(function(){c.newSlides.css({display:"block"});
c.doMath();
c.viewport.height(c.h);
c.setProps(u*c.h,"init")
},(t==="init")?100:0)
}else{c.container.width((c.count+c.cloneCount)*200+"%");
c.setProps(u*c.computedW,"init");
setTimeout(function(){c.doMath();
c.newSlides.css({width:c.computedW,"float":"left",display:"block"});
if(c.vars.smoothHeight){g.smoothHeight()
}},(t==="init")?100:0)
}}else{c.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"});
if(t==="init"){if(!k){c.slides.css({opacity:0,display:"block",zIndex:1}).eq(c.currentSlide).css({zIndex:2}).animate({opacity:1},c.vars.animationSpeed,c.vars.easing)
}else{c.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+c.vars.animationSpeed/1000+"s ease",zIndex:1}).eq(c.currentSlide).css({opacity:1,zIndex:2})
}}if(c.vars.smoothHeight){g.smoothHeight()
}}if(!o){c.slides.removeClass(j+"active-slide").eq(c.currentSlide).addClass(j+"active-slide")
}c.vars.init(c)
};
c.doMath=function(){var r=c.slides.first(),v=c.vars.itemMargin,t=c.vars.minItems,u=c.vars.maxItems;
c.w=(c.viewport===undefined)?c.width():c.viewport.width();
c.h=r.height();
c.boxPadding=r.outerWidth()-r.width();
if(o){c.itemT=c.vars.itemWidth+v;
c.minW=(t)?t*c.itemT:c.w;
c.maxW=(u)?(u*c.itemT)-v:c.w;
c.itemW=(c.minW>c.w)?(c.w-(v*(t-1)))/t:(c.maxW<c.w)?(c.w-(v*(u-1)))/u:(c.vars.itemWidth>c.w)?c.w:c.vars.itemWidth;
c.visible=Math.floor(c.w/(c.itemW));
c.move=(c.vars.move>0&&c.vars.move<c.visible)?c.vars.move:c.visible;
c.pagingCount=Math.ceil(((c.count-c.visible)/c.move)+1);
c.last=c.pagingCount-1;
c.limit=(c.pagingCount===1)?0:(c.vars.itemWidth>c.w)?(c.itemW*(c.count-1))+(v*(c.count-1)):((c.itemW+v)*c.count)-c.w-v
}else{c.itemW=c.w;
c.pagingCount=c.count;
c.last=c.count-1
}c.computedW=c.itemW-c.boxPadding
};
c.update=function(t,r){c.doMath();
if(!o){if(t<c.currentSlide){c.currentSlide+=1
}else{if(t<=c.currentSlide&&t!==0){c.currentSlide-=1
}}c.animatingTo=c.currentSlide
}if(c.vars.controlNav&&!c.manualControls){if((r==="add"&&!o)||c.pagingCount>c.controlNav.length){g.controlNav.update("add")
}else{if((r==="remove"&&!o)||c.pagingCount<c.controlNav.length){if(o&&c.currentSlide>c.last){c.currentSlide-=1;
c.animatingTo-=1
}g.controlNav.update("remove",c.last)
}}}if(c.vars.directionNav){g.directionNav.update()
}};
c.addSlide=function(r,u){var t=a(r);
c.count+=1;
c.last=c.count-1;
if(i&&l){(u!==undefined)?c.slides.eq(c.count-u).after(t):c.container.prepend(t)
}else{(u!==undefined)?c.slides.eq(u).before(t):c.container.append(t)
}c.update(u,"add");
c.slides=a(c.vars.selector+":not(.clone)",c);
c.setup();
c.vars.added(c)
};
c.removeSlide=function(r){var t=(isNaN(r))?c.slides.index(a(r)):r;
c.count-=1;
c.last=c.count-1;
if(isNaN(r)){a(r,c.slides).remove()
}else{(i&&l)?c.slides.eq(c.last).remove():c.slides.eq(r).remove()
}c.doMath();
c.update(t,"remove");
c.slides=a(c.vars.selector+":not(.clone)",c);
c.setup();
c.vars.removed(c)
};
g.init()
};
a(window).blur(function(b){focused=false
}).focus(function(b){focused=true
});
a.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:false,animationLoop:true,smoothHeight:false,startAt:0,slideshow:true,slideshowSpeed:7000,animationSpeed:600,initDelay:0,randomize:false,thumbCaptions:false,pauseOnAction:true,pauseOnHover:false,pauseInvisible:true,useCSS:true,touch:true,video:false,controlNav:true,directionNav:true,prevText:"Previous",nextText:"Next",keyboard:true,multipleKeyboard:false,mousewheel:false,pausePlay:false,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",playPauseCustom:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:true,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}};
a.fn.flexslider=function(b){if(b===undefined){b={}
}if(typeof b==="object"){return this.each(function(){var f=a(this),d=(b.selector)?b.selector:".slides > li",e=f.find(d);
if((e.length===1&&b.allowOneSlide===true)||e.length===0){e.fadeIn(400);
if(b.start){b.start(f)
}}else{if(f.data("flexslider")===undefined){new a.flexslider(this,b)
}}})
}else{var c=a(this).data("flexslider");
switch(b){case"play":c.play();
break;
case"pause":c.pause();
break;
case"stop":c.stop();
break;
case"next":c.flexAnimate(c.getTarget("next"),true);
break;
case"prev":case"previous":c.flexAnimate(c.getTarget("prev"),true);
break;
default:if(typeof b==="number"){c.flexAnimate(b,true)
}}}}
})(jQuery);
var ubs=ubs||{};
jQuery.extend(ubs,{$:jQuery,lang:{current:"de"},debug:false,fit:{},micro:{},isp:{},tim:{},micci:{},shared:{},copyright:"2012, netcentric"});
(function(a){ubs.brightcoveVideo=ubs.brightcoveVideo||{};
a.extend(ubs.brightcoveVideo,{BRIGHTCOVE:{},init:function(d){var b=a(".BrightcoveExperience",d);
b.each(function(){var c=a(this);
ubs.brightcoveVideo.setBrightcoveVideoParameters(c);
if(c.hasClass("advancedVideo")){ubs.brightcoveVideo.setAdvancedBrightcovePlayer(this.id);
ubs.brightcoveVideo.loadBrightCove(this.id)
}else{if(c.hasClass("simpleVideo")){ubs.brightcoveVideo.loadBrightCove(this.id)
}else{ubs.brightcoveVideo.loadBrightCove(this.id)
}}})
},setBrightcoveVideoParameters:function(c){var e=c.closest(".basecomponent.videoaudio"),d=e.width(),b=c.find("param[name='width']");
if(d>0){b.val(d)
}},loadBrightCove:function(g){var b,e,d,f;
e=ubs.brightcoveVideo.getParentWidth(g);
d=a("#"+g);
f=d.find("param[name='width']");
if(e>0){f.val(e)
}try{b=(location.href.indexOf("https")===0?"https://sadmin":"http://admin");
b+=".brightcove.com/js/BrightcoveExperiences_all.js";
a.getScript(b,function(){brightcove.createExperiences()
})
}catch(c){ubs.util.log("Failed to load BrightcoveExperiences.js:"+c)
}},getParentWidth:function(d){var c,b;
c=a("#"+d).closest(".basecomponent.videoaudio");
b=c.width();
return b
},setAdvancedBrightcovePlayer:function(c){var b;
ubs.brightcoveVideo.BRIGHTCOVE=ubs.brightcoveVideo.BRIGHTCOVE||{};
b=ubs.brightcoveVideo.BRIGHTCOVE;
b["video"+c]={replay:"false",relatedVideos:[],player:{},onTemplateLoaded:function(f){var e=brightcove.getExperience(c),d,g;
e.getModule(APIModules.EXPERIENCE).addEventListener(BCExperienceEvent.TEMPLATE_READY,this.onTemplateReady);
d=e.getModule(APIModules.EXPERIENCE);
this.replay=d.getPlayerParameter("videoreplay");
g=d.getPlayerParameter("playRelatedVideos");
if(g!==undefined){this.relatedVideos=g.split(",")
}this.player=e
},onTemplateReady:function(g){var e=b["video"+c].player,d,f;
e.getModule(APIModules.EXPERIENCE).removeEventListener(BCExperienceEvent.TEMPLATE_READY,this.onTemplateReady);
d=e.getModule(APIModules.MENU);
if(b["video"+c].relatedVideos.length!==0){d.setAdditionalMediaCallback(b["video"+c].getAdditionalMedia)
}if(b["video"+c].replay==="true"){f=e.getModule(APIModules.VIDEO_PLAYER);
f.addEventListener(BCMediaEvent.PROGRESS,b["video"+c].onMediaProgress);
f.addEventListener(BCMediaEvent.COMPLETE,b["video"+c].onMediaComplete)
}},onMediaProgress:function(e){var d;
if(e.position>(e.duration-0.5)){d=b["video"+c].player.getModule(APIModules.VIDEO_PLAYER);
d.seek(0);
d.play()
}},onMediaComplete:function(e){var d=b["video"+c].player.getModule(APIModules.VIDEO_PLAYER);
d.play()
},getAdditionalMedia:function(e,f){var d=false;
if(e===BCMenuAdditionalMedia.RELATED_VIDEOS){b["video"+c].requestRelatedForMedia(f.id);
d=true
}return d
},requestRelatedForMedia:function(h){var d=b["video"+h].player,e=[],g,f;
g=d.getModule(APIModules.CONTENT);
g.addEventListener(BCContentEvent.MEDIA_COLLECTION_LOAD,b["video"+h].onMediaCollectionLoad);
f=d.getModule(APIModules.VIDEO_PLAYER);
e.push(f.getCurrentVideo().id);
g.getMediaInGroupAsynch(e)
},onMediaCollectionLoad:function(g){var f=b["video"+c].player,h=[],d;
for(var e in b["video"+c].relatedVideos){h.push({id:b["video"+c].relatedVideos[e]})
}d=f.getModule(APIModules.MENU);
d.setAdditionalMediaForType(h,BCMenuAdditionalMedia.RELATED_VIDEOS)
}}
}})
}(jQuery));
(function(a){ubs.util=ubs.util||{};
a.extend(ubs.util,{initAll:function(d,e){for(var b in d){if(a.isFunction(d[b].init)===true){d[b].init(e)
}}},getLang:function(b){var c=ubs.lang;
if(!c.current&&ubs.debug){window.alert('please define the language by setting "ubs.lang.current"')
}else{return c.current
}return null
},ie6:function(){if(ubs.util.getBrowserName()==="ie"&&ubs.util.getBrowserVersion()===6){return true
}return false
},ie:function(){if(ubs.util.getBrowserName()==="ie"){return true
}return false
},debug:{serverRequest:function(b){if(ubs.debug){ubs.util.log("[ServerRequest] Implementation needed for: "+b)
}}},copyright:function(){if(window.console&&ubs.debug){window.console.log(ubs.copyright)
}},log:function(b){if(window.console&&ubs.debug){window.console.log(b)
}},error:function(b){if(window.console&&ubs.debug){window.console.error(b)
}},info:function(b){if(window.console&&ubs.debug){window.console.info(b)
}},time:function(b){if(window.console&&window.console.time&&ubs.debug){window.console.time(b)
}},timeEnd:function(b){if(window.console&&window.console.timeEnd&&ubs.debug){window.console.timeEnd(b)
}},profileEnd:function(b){if(window.console&&ubs.debug){window.console.profileEnd(b)
}},zoomCheck:function(d){var e=a("<div></div>").width("100em");
a("body").append(e);
var b=e.width();
var c=b/100/d;
e.remove();
return c
},iFrameAccessRights:function(){try{if(parent.document){return true
}else{return false
}}catch(b){return false
}},onCQAuthor:function(){if(ubs.util.iFrameAccessRights()){return a(parent.document).find("#cq-cf-frame").length>0
}else{return false
}},iFrameChecks:function(){var b=false;
if(ubs.init.states.accessRights){b=a("#colorbox",parent.document)
}if(window.self!==parent){if(b.length>0){ubs.init.states.$content.css("width",(ubs.init.states.$content.width()/ubs.init.states.fontbase/ubs.init.states.textzoom+"em"));
a("body").css({width:"auto",height:"100%"}).prop("id","iFrameBody");
a("#doc").addClass(b.prop("class"));
a(document).keydown(function(c){if(c.keyCode===27){if(parent.$(parent.document).find("#colorbox #cboxClose").html().length>0){parent.$(parent.document).colorbox.close()
}}})
}else{if(!ubs.init.states.accessRights){a("body").css({width:"auto",height:"100%",overflow:"auto"});
a("#doc").addClass("colorbox-pf");
a("html").css("overflow","auto")
}}}},getRefQueryParam:function(b){b=b.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
b=RegExp("[\\?&]"+b+"=([^&#]*)").exec(document.referrer);
return b===null?"":b[1]
},getQueryParam:function(b){b=b.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
b=RegExp("[\\?&]"+b+"=([^&#]*)").exec(document.URL);
return b===null?"":b[1]
},getRootDomain:function(b){var c=document.domain.split(".");
return c.slice(-b).join(".")
},getCookiesStartingWith:function(d){var b=decodeURIComponent(document.cookie).replace(/ /g,"").split(";");
var c=[];
var e=RegExp(d);
a.each(b,function(f,g){if(g.search(e)===0){c.push(g.split("=")[0])
}});
return c
},addPageSelector:function(f,d){var c=d.lastIndexOf(".");
var e=d.substr(0,c+1);
var b=d.substr(c);
d=e+f+b;
return d
},updateQueryString:function(c,e,b){if(!b){b=window.location.href
}var d=new RegExp("([?|&])"+c+"=.*?(&|#|$)(.*)","gi");
if(d.test(b)){if(typeof e!=="undefined"&&e!==null){return b.replace(d,"$1"+c+"="+e+"$2$3")
}else{var g=b.split("#");
b=g[0].replace(d,"$1$3").replace(/(&|\?)$/,"");
if(typeof g[1]!=="undefined"&&g[1]!==null){b+="#"+g[1]
}return b
}}else{if(typeof e!=="undefined"&&e!==null){var f=b.indexOf("?")!==-1?"&":"?",g=b.split("#");
b=g[0]+f+c+"="+e;
if(typeof g[1]!=="undefined"&&g[1]!==null){b+="#"+g[1]
}return b
}else{return b
}}},ajaxUtil:{sendAjaxRequest:function(d,g,f,b,c,e){jQuery.ajax({url:d,type:g,dataType:f,data:b,success:c,error:e})
}},getMyValuePosition:function(h,e){var b=[],c=[],d="",f="",g="";
if(typeof h==="string"&&h.length>0){if(typeof e==="string"&&e.length>0){b=h.replace(/px/g,"").split(" ");
c=e.replace(/px/g,"").split(" ");
if(b.length==2&&c.length==2){d=(parseInt(c[0],10)>=0?"+":"");
f=(parseInt(c[1],10)>=0?"+":"");
g=b[0]+d+c[0]+" "+b[1]+f+c[1]
}}else{g=h
}}else{g="left top"
}return g
},sign:function(b){return b>0?1:b<0?-1:0
},parseBoolean:function(b){switch(String(b).toLowerCase()){case"true":case"1":case"yes":case"y":return true;
case"false":case"0":case"no":case"n":return false;
default:return undefined
}},checkBrowser:function(g,d,c){if(typeof d!=="undefined"){if(typeof c==="undefined"||c===false){return a("body").hasClass(g+d)
}else{var e=false;
var f=(g==="ie"?6:0);
for(var b=d;
b>f;
b--){e=a("body").hasClass(g+b);
if(e===true){return true
}}return e
}}else{return(this.getBrowserName()===g.toLowerCase())
}},getBrowserName:function(){if(!ubs.util._browserDetect.initialized){ubs.util._browserDetect.init()
}return ubs.util._browserDetect.browser
},getBrowserVersion:function(){if(!ubs.util._browserDetect.initialized){ubs.util._browserDetect.init()
}return ubs.util._browserDetect.version
},_browserDetect:{initialized:false,init:function(){ubs.util._browserDetect.initialized=true;
this.browser=this.searchString(this.dataBrowser)||"Other";
this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"Unknown"
},searchString:function(d){for(var b=0;
b<d.length;
b++){var c=d[b].string;
this.versionSearchString=d[b].subString;
if(c.indexOf(d[b].subString)!==-1){return d[b].identity
}}},searchVersion:function(c){var b=c.indexOf(this.versionSearchString);
if(b===-1){return
}return parseFloat(c.substring(b+this.versionSearchString.length+1))
},dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"chrome"},{string:navigator.userAgent,subString:"MSIE",identity:"ie"},{string:navigator.userAgent,subString:"Firefox",identity:"firefox"},{string:navigator.userAgent,subString:"Safari",identity:"safari"},{string:navigator.userAgent,subString:"Opera",identity:"opera"}]},placeholder:function(b){if(!("placeholder" in document.createElement("input"))){a.each(b,function(){var c=a(this),d=c.attr("placeholder");
c.addClass("input-js-placeholder");
if(d===undefined){return false
}if(c.val()===""){c.val(d)
}c.bind("focus",function(){var e=a(this);
if(e.val()===d){this.plchldr=d;
e.val("")
}});
c.bind("blur",function(){var e=a(this);
if(e.val()===""&&e.val()!==this.plchldr){e.val(this.plchldr)
}})
})
}else{a.each(b,function(){a(this).addClass("input-native-placeholder")
})
}}})
})(ubs.$);
(function(a){ubs.init=ubs.init||{};
a.extend(ubs.init,{states:{$content:a("#content"),accessRights:true,readingDirection:a("html").css("direction"),textzoom:1,fontbase:12,isp:false,tim:false,etf:false,funds:false,shared:false,mobile:false,cqAuthor:false,rootDomain:ubs.util.getRootDomain(2)},all:function(b){if(a(b).html()){ubs.util.log("[init.all] Context: "+b);
ubs.init.states.textzoom=ubs.util.zoomCheck(ubs.init.states.fontbase);
ubs.init.states.isp=!a.isEmptyObject(ubs.isp);
ubs.init.states.tim=!a.isEmptyObject(ubs.tim);
ubs.init.states.etf=!a.isEmptyObject(ubs.etf);
ubs.init.states.funds=!a.isEmptyObject(ubs.funds);
ubs.init.states.shared=!a.isEmptyObject(ubs.shared);
ubs.init.states.mobile=!a.isEmptyObject(ubs.fit.mobile);
ubs.init.states.accessRights=ubs.util.iFrameAccessRights();
ubs.init.states.cqAuthor=ubs.util.onCQAuthor();
ubs.util.initAll(ubs,b);
if(!ubs.init.states.mobile){ubs.util.initAll(ubs.desktop,b)
}if(ubs.init.states.isp){ubs.util.initAll(ubs.isp,b)
}else{if(ubs.init.states.tim){ubs.util.initAll(ubs.tim,b)
}else{if(ubs.init.states.etf){ubs.util.initAll(ubs.etf,b);
ubs.util.initAll(ubs.fit,b)
}else{if(ubs.init.states.funds){ubs.util.initAll(ubs.funds,b);
ubs.util.initAll(ubs.fit,b)
}else{ubs.util.initAll(ubs.fit,b)
}}}}ubs.util.initAll(ubs.shared,b);
ubs.util.initAll(ubs.micro,b);
if(ubs.init.states.mobile){ubs.util.initAll(ubs.fit.mobile,b)
}}}});
a(document).ready(function(){ubs.util.log("[System] "+ubs.util.getLang());
ubs.init.all("body")
})
})(ubs.$);
(function(a){ubs.ui=ubs.ui||{};
a.extend(ubs.ui,{init:function(b){},accordion:{registeredAccordions:[],standard:function(b){a.each(b,function(c){var e=a(this),d=ubs.ui.accordion.getActiveElement(e,0,c,"standard");
e.accordion({header:".accordionsplit",heightStyle:"content",active:d,collapsible:true,activate:function(){var g,f;
ubs.ui.accordion.saveStatus(c,e,"standard");
g=e.offset().top;
f=a("body").scrollTop();
if(f>g){a("body").scrollTop(g);
ubs.util.log("accordion-scroll: "+g)
}}}).find("a.accordion-openall").click(function(f){ubs.ui.accordion.openall(this,f)
})
});
ubs.ui.accordion.registeredAccordions=a(ubs.ui.accordion.registeredAccordions).add(b)
},event:function(b){var c=function(d,e){e.oldPanel.hide()
};
a.each(b,function(d){var f=a(this),e=ubs.ui.accordion.getActiveElement(f,false,d,"event");
f.accordion({header:".parent-row",animated:false,heightStyle:"content",active:e,beforeActivate:c,collapsible:true,icons:false,activate:function(){ubs.ui.accordion.saveStatus(d,f,"event")
}}).find("a.accordion-openall").click(function(g){ubs.ui.accordion.openall(this,g)
})
})
},horizontal:function(b){a.each(b,function(c){var e=a(this),d=ubs.ui.accordion.getActiveElement(e,0,c,"horizontal");
e.accordionHor({header:".accordionsplit",autoHeight:false,active:d,collapsible:false,icons:false,change:function(){ubs.ui.accordion.saveStatus(c,e,"horizontal")
}}).find("a.accordion-openall").click(function(f){ubs.ui.accordion.hor_openall(this,f)
})
});
ubs.ui.accordion.registeredAccordions=a(ubs.ui.accordion.registeredAccordions).add(b)
},inHeader:function(b){var d=b,c=ubs.ui.accordion.getActiveElement(d,false,0,"inHeader");
b.accordion({header:".accordionsplit",heightStyle:"content",active:c,collapsible:true,create:function(){a(this).find(".ui-accordion-header").attr("tabIndex","-1")
},activate:function(){ubs.ui.accordion.saveStatus(0,d,"inHeader")
}})
},openall:function(b,d){d.preventDefault();
var e=a(b).parents("div.ui-accordion");
var c=e.find("div.ui-accordion-header");
var f=e.find("div.ui-accordion-content");
c.attr("aria-expanded","true").removeClass("ui-state-default").addClass("ui-state-active");
f.show()
},saveStatus:function(b,d,c){var f,e=document.location.pathname;
if(c==="horizontal"){f=d.accordionHor("option","active")
}else{f=d.accordion("option","active")
}ubs.func.cookieHandling.setCookieStorage("accordionsStatus_"+e+"_"+c+"_"+b,f,1)
},gotoAnchor:{init:function(d){var b=this;
a(d).delegate("a","click",function(){b.openAccordion(a(this).attr("href"),false)
});
b.openAccordion(window.location.href,true)
},openAccordion:function(b,c){var d;
if(b){d=b.split("#")[1]
}if(d){a.each(ubs.ui.accordion.registeredAccordions,function(){var h=a(this);
var g=h.find("a[name="+d+"]");
if(g.length===0){g=h.find("#"+d)
}if(g.length>0){var e=g.closest("div.ui-accordion-header").nextAll("div.ui-accordion-content:first");
var f=e.prevAll("div.ui-accordion-content").length;
if(h.hasClass("box-accordion-horizontal")){h.accordionHor("option","active",f)
}else{h.accordion("option","animate",false);
h.accordion("option","active",f);
h.accordion("option","animate",true)
}if(c){window.location.href=b
}ubs.util.log("accordion content: "+f)
}})
}}},hor_openall:function(b,d){d.preventDefault();
var e=a(b).parents("div.ui-accordionHor");
var c=e.find("div.ui-accordion-header");
var f=e.find("div.ui-accordion-content");
e.removeClass("ui-accordionHor").width("");
c.find("span").filter(".hidden").removeClass("hidden").andSelf().filter(".ui-accordion-index").hide();
f.width("").show().find("div.textimage").width("").find()
},getActiveElement:function(b,e,c,d){var i=b.attr("data-active"),g,h,f;
if(i!==undefined){if(i==="false"||i==="-1"){e=false
}else{e=parseInt(i,10)
}}if(c!==undefined){g=document.location.pathname;
h=ubs.func.cookieHandling.getCookieStorage("accordionsStatus_"+g+"_"+d+"_"+c);
if(h){f=parseInt(h,10)
}if(f!==undefined){e=f
}}return e
}},setAsideBoxWidth:function(b){a.each(b,function(){var e=a(this);
var c=e.closest("div.aside");
var d=a(this).siblings("img");
c.waitForImages(function(){var f=d.width();
c.width(f);
e.show()
})
})
},extendTableSort:function(){a.tablesorter.addWidget({id:"accessibility",format:function(c){var b=a(c).data("header");
if(!b){b=a("thead th",c);
a(c).data("header",b);
a.each(b,function(){var d=a(this);
if(d.html().length>0){d.attr("tabIndex","0");
d.keypress(function(e){if(e.which===13||e.which===32){e.preventDefault();
a(this).click()
}})
}})
}a.each(b,function(){var d=a(this);
if(d.hasClass("headerSortDown")){d.attr("aria-sort","descending")
}else{if(d.hasClass("headerSortUp")){d.attr("aria-sort","ascending")
}else{d.attr("aria-sort","none")
}}if(ubs.util.checkBrowser("ie",8)){d.hide().show()
}})
}});
a.tablesorter.addWidget({id:"accordion",format:function(c){var b=a("tr.parent-row",c);
b.each(function(d){if(b.length-1===d){a(this).addClass("last-row")
}else{a(this).removeClass("last-row")
}var e=a(this).data("child");
if(e){e.detach();
a(this).after(e)
}})
}})
},sortTable:function(c,b){a(c).each(function(){var f=a(this).find("thead th.eventDate").index();
f=f>0?f:0;
var g={cssChildRow:"child-row",widgets:["zebra","accessibility","accordion"],sortList:[[f,0]]};
if(a(this).hasClass("accordion")){a.each(a("tr.parent-row",a(this)),function(){a(this).data("child",a(this).next())
});
var e=a(this).find("thead th");
a.each(e,function(){var h=a(this).width()/12;
a(this).css("width",h+"em")
});
g.textExtraction=function(h){var i=a("time",h).eq(0).attr("datetime");
if(i){return i
}else{return a("p",h).html()
}}
}else{g.textExtraction=function(h){var i=a("time",h).eq(0).attr("datetime");
if(i){return i
}else{return a(h).text()
}}
}var d=a.extend(g,b);
a(this).tablesorter(d)
})
},zebraTable:function(b){a(b).each(function(){var d=a(this).find("tbody tr");
var c=d.length;
a.each(d,function(){var e=a(this);
if((e.index()%2===0)){e.addClass("odd")
}else{e.addClass("even")
}if(e.index()+1===c){e.addClass("last-child")
}})
})
},heightAdjust:function(b){if(b.filter(":visible").size()===0){return true
}var c=0;
b.filter(":not(:visible)").addClass("was-hidden").css("display","block");
a.each(b,function(){var d=a(this).height();
if(d>c){c=d
}});
a.each(b,function(){a(this).height(c)
});
b.filter(".was-hidden").removeClass("was-hidden").css("display","none")
},checkDisclaimerCookie:function(b){a.each(b,function(){var c=a(this);
c.unbind("click").click(function(){var f=c.prop("href");
var d=f.lastIndexOf("/");
var e=a.cookie(f.slice(d+1));
var g=c.attr("data-disclaimer-href");
if(e==="1"){if(c.hasClass("popup")){c.prop("href",g);
c.unbind("click");
c.popupWindow();
c.click();
return false
}else{if(c.hasClass("lightBox")){c.prop("href",g);
c.unbind("click");
ubs.ui.lightbox.init(c);
c.click();
return false
}else{window.location.href=g;
return false
}}}else{c.unbind("click").addClass("lightBox {lightBox:{iframe:true}}");
ubs.ui.lightbox.init(c)
}})
})
},setDisclaimerCookie:function(b){a.each(b,function(){var c=a(this);
c.submit(function(){var e=c.find('input[data-disclaimer-required="true"]');
var g=0;
a.each(e,function(){if(a(this).is(":checked")){g++
}});
if(e.length===g){var h=window.location.pathname;
var f=h.lastIndexOf("/");
var k=h.slice(f+1);
var i;
i=parseInt(c.attr("data-cookie-expire"),10);
var d=c.find('input[name="cookie-expiry"]');
if(d.length>0){if(d.prop("checked")===false){i=false
}else{if(!i){i=1825
}}}var j={};
j.path="/";
if(i){j.expires=i
}ubs.func.cookieHandling.setCookie(k,1,ubs.func.cookieHandling.cookieCategorySettings.disclaimer.privacySetting,j);
if(c.is(".popup, .lightBox, .lightBoxiFrame")){parent.$.colorbox.close()
}else{c.prop("rel","nofollow").prop("target","_parent")
}}})
})
},abTest:{options:{counter:0,repeats:60,timer:60,returnValue:"",interval:[]},init:function(b,d){ubs.ui.abTest.options.interval=window.setInterval(function(){ubs.ui.abTest.checkValue(b,d)
},ubs.ui.abTest.options.timer)
},checkValue:function(b,d){ubs.ui.abTest.options.returnValue=a.trim(b.children("div").text());
if(ubs.ui.abTest.options.returnValue!==""){window.clearInterval(ubs.ui.abTest.options.interval);
ubs.ui.abTest.displayMbox(b,d,ubs.ui.abTest.options.returnValue)
}else{ubs.ui.abTest.options.counter++;
if(ubs.ui.abTest.options.counter>ubs.ui.abTest.options.repeats){window.clearInterval(ubs.ui.abTest.options.interval);
ubs.ui.abTest.displayMbox(b,d,"1")
}}},displayMbox:function(f,g,e){var d=a("div.abtest-variant-a",g);
var b=a("div.abtest-variant-b",g);
if(e==="1"){d.css({display:"block"});
b.css({display:"none"})
}else{if(e==="2"){d.css({display:"none"});
b.css({display:"block"})
}}}}})
})(ubs.$);
(function(a){ubs.func=ubs.func||{};
a.extend(ubs.func,{init:function(b){ubs.func.decodeMailto(a("a.mailto",b));
ubs.func.stepBack(a(".stepBack",b))
},termHighlight:{init:function(d,b,f){var e=ubs.func.termHighlight.getSearchTerm(d,b);
ubs.func.termHighlight.highlight(e,f)
},getSearchTerm:function(c,b){var d="";
if(c){d=decodeURIComponent(ubs.util.getQueryParam("querystring")).replace(/\+$/,"").replace(/\+/g," ");
if(d.length===0){d=decodeURIComponent(ubs.util.getQueryParam("q")).replace(/\+$/,"").replace(/\+/g," ")
}}if(b&&d.length===0){d=decodeURIComponent(ubs.util.getRefQueryParam("querystring")).replace(/\+$/,"").replace(/\+/g," ");
if(d.length===0){d=decodeURIComponent(ubs.util.getRefQueryParam("q")).replace(/\+$/,"").replace(/\+/g," ")
}}return d
},sort:function(d,c){return c.length-d.length
},highlightOnPage:function(){if(ubs.init.states.isp){return true
}else{if(ubs.init.states.etf){return false
}else{if(a("#search-bar").length===0&&!a("#doc").hasClass("colorbox-pf")){return true
}}}},highlight:function(e,d){if(e.length>0){if(ubs.func.termHighlight.highlightOnPage()){var b=e.split(" ");
b.sort(ubs.func.termHighlight.sort);
a.each(b,function(f,c){var g=new RegExp("\\b"+c+"\\b","i");
a(d).highlight(g,true)
})
}}}},cookieHandling:{cookiePrivacySetting:{0:true,1:true,2:true,3:true},cookieCategorySettings:{disclaimer:{privacySetting:1},lightboxstatus:{privacySetting:1},nomobile:{privacySetting:1,cookies:[{name:"nomobile",path:"/"}]},nomobilemessage:{privacySetting:1,cookies:[{name:"nomobilemessage"}]},currencycalculator:{privacySetting:1,cookies:[{name:"htmlamount1"},{name:"htmlcurrency1"},{name:"htmlcurrency2"},{name:"htmlexchange"},{name:"htmloperation"}]},login:{privacySetting:1,cookies:[{name:"loginStatus"},{name:"ubsLogin"}]},formtracking:{privacySetting:3,cookies:[{name:"form_success",path:"/"},{name:"form_success_recommendation",path:"/"},{name:"sc_formanswers",path:"/"}]},analytics:{privacySetting:3,cookies:[{name:"s_gnr",domain:"."+ubs.init.states.rootDomain,path:"/"},{name:"s_old_sword",domain:"."+ubs.init.states.rootDomain,path:"/"},{name:"s_gpv_url",domain:"."+ubs.init.states.rootDomain,path:"/"},{name:"s_gpv_url2",domain:"."+ubs.init.states.rootDomain,path:"/"},{name:"s_gpv_channel",domain:"."+ubs.init.states.rootDomain,path:"/"},{name:"s_cc",domain:"."+ubs.init.states.rootDomain,path:"/"},{name:"s_sq",domain:"."+ubs.init.states.rootDomain,path:"/"},{name:"s_lv",domain:"."+ubs.init.states.rootDomain,path:"/"},{name:"s_lv_s",domain:"."+ubs.init.states.rootDomain,path:"/"},{name:"sc-murl",domain:"."+document.domain,path:"/"},{name:"mbox",domain:"."+ubs.init.states.rootDomain,path:"/"}]},session:{privacySetting:1,cookies:[{name:"JSESSIONID",path:"/"}]},cugAuthentication:{privacySetting:1,cookies:[{name:"login-token",path:"/"}]},country:{privacySetting:2,cookies:[{name:"country",path:"/"}]},language:{privacySetting:2,cookies:[{name:"language",path:"/"}]}},cookieManagement:function(){if(window.cookie_management&&window.self===parent){var d=ubs.func.cookieHandling.getCookieStorage("ubs_cookie_settings_"+window.cookie_management_ver);
if(d===null){var b="lightBox {lightBox:{close: false, boxName:'nodisclaimer', overlayClose:false, iframe:true}}";
var c=a("<a href='"+window.cookie_management+"' style='display:none' />").addClass(b);
if(a.colorbox){if(ubs.ui.lightbox){a("body").append(c);
ubs.ui.lightbox.init(c);
c.click()
}else{if(!ubs.fit.mobile.ui.lightBox.options.cmOpen){ubs.fit.mobile.ui.lightBox.init(window.cookie_management)
}}}else{ubs.func.cookieHandling.setCookieStorage("sourcepageurl",window.location.href,1);
window.location=window.cookie_management
}}}},setCookieSetting:function(c,d){if(c.is("a")&&d){c.click(function(f){var e;
a.each(ubs.func.cookieHandling.cookiePrivacySetting,function(g){if(e===undefined){e=g
}else{e+="-"+g
}});
f.preventDefault();
ubs.func.cookieHandling.setPrivacyCookie(e)
})
}else{if(c.is("form")){var b=c.find("input[type=checkbox]");
c.submit(function(f){f.preventDefault();
var e=0;
a.each(b.filter(":checked"),function(){e+="-"+a(this).val()
});
ubs.func.cookieHandling.setPrivacyCookie(e)
});
b.filter(":checked").closest("tr").addClass("active");
b.click(function(){var e=a(this);
if(!e.prop("disabled")){e.closest("tr").toggleClass("active")
}});
a.each(b,function(){var e=a(this);
if(!ubs.func.cookieHandling.cookiePrivacySetting[e.val()]){if(e.is(":checked")){var f=e.prev(".imageCheck");
if(f.length===0){e.click()
}else{f.click()
}}}})
}}},setCookieStorage:function(b,d,c,e){if(Modernizr.sessionstorage&&storageEnabled){ubs.func.cookieHandling.setStorage(b,d,c)
}else{ubs.func.cookieHandling.setCookie(b,d,c,e)
}},setStorage:function(b,d,c){if(Modernizr.sessionstorage&&storageEnabled){var e=ubs.func.cookieHandling.getCookieParameters(b,d,c);
if(e){if(d===null){sessionStorage.removeItem(b)
}else{sessionStorage.setItem(b,d)
}}}},setCookie:function(b,d,c,f){var e=ubs.func.cookieHandling.getCookieParameters(b,d,c,f);
if(e){a.cookie(b,d,e)
}},getCookieParameters:function(c,e,d,i){var h={};
var g=c;
var f=e;
var b=false;
a.each(ubs.func.cookieHandling.cookieCategorySettings,function(j,k){if(ubs.func.cookieHandling.cookiePrivacySetting[k.privacySetting]||f===null){if(k.cookies!==undefined){a.each(k.cookies,function(l,m){if(g===m.name){if(m.path){h.path=m.path
}if(m.domain){h.domain=m.domain
}if(i){a.extend(h,i)
}b=h;
return false
}})
}}if(b){return false
}});
if(!b){if(ubs.func.cookieHandling.cookiePrivacySetting[d]||f===null){if(i){b=i
}else{b=h
}}}return b
},setPrivacyCookie:function(b){ubs.func.cookieHandling.setCookie("ubs_cookie_settings_"+parent.window.cookie_management_ver,b,0,{expires:2000,path:"/"});
ubs.func.cookieHandling.setCookiePrivacySetting();
ubs.func.cookieHandling.addCookiesToList("form","formtracking");
ubs.func.cookieHandling.removeNotAllowedCookies();
ubs.func.cookieHandling.optOutTracking();
if(a.colorbox){parent.$(parent.document).colorbox.close()
}if(ubs.init.states.mobile){if(!ubs.fit.mobile.ui.lightBox.options.cmOpen){var c=ubs.func.cookieHandling.getCookieStorage("sourcepageurl");
ubs.func.cookieHandling.setCookieStorage("sourcepageurl",null);
if(c!==null){window.location=c
}}}},optOutTracking:function(){if(!ubs.func.cookieHandling.cookiePrivacySetting[2]){if(window.sc_optout){sc_optout("user_preferences")
}ubs.util.log("opt out user preferences")
}if(!ubs.func.cookieHandling.cookiePrivacySetting[3]){if(window.sc_optout){sc_optout("tracking")
}ubs.util.log("opt out tracking")
}},setCookiePrivacySetting:function(){if(ubs.func.cookieHandling.getDoNotTrack()){ubs.func.cookieHandling.cookiePrivacySetting[3]=false
}var c=a.cookie("ubs_cookie_settings_"+window.cookie_management_ver,{path:"/"});
if(c!==null){var b=c.split("-");
a.each(ubs.func.cookieHandling.cookiePrivacySetting,function(d){ubs.func.cookieHandling.cookiePrivacySetting[d]=false;
parent.ubs.func.cookieHandling.cookiePrivacySetting[d]=false
});
a.each(b,function(){var d=this;
ubs.func.cookieHandling.cookiePrivacySetting[d]=true;
parent.ubs.func.cookieHandling.cookiePrivacySetting[d]=true
})
}},removeNotAllowedCookies:function(){a.each(ubs.func.cookieHandling.cookieCategorySettings,function(b,c){if(!ubs.func.cookieHandling.cookiePrivacySetting[c.privacySetting]){if(c.cookies){a.each(c.cookies,function(d,e){var f={};
if(e.path){f.path=e.path
}if(e.domain){f.domain=e.domain
}ubs.func.cookieHandling.setCookie(e.name,null,0,f)
})
}}})
},getDoNotTrack:function(){var b=(window.navigator.doNotTrack||window.navigator.msDoNotTrack);
return(b==="1"||b==="yes")
},addCookiesToList:function(c,e){var b=ubs.func.cookieHandling.cookieCategorySettings[e];
var d=ubs.util.getCookiesStartingWith(c);
a.each(d,function(g,h){var f={};
f.name=h;
f.path="/";
b.cookies.push(f)
})
},getCookieStorage:function(b){if(Modernizr.sessionstorage&&storageEnabled){var c=sessionStorage.getItem(b);
if(c!==null){return c
}else{return a.cookie(b)
}}else{return a.cookie(b)
}}},decodeMailto:function(b){b.bind("mouseover focus",function(){var d=a(this);
d.unbind();
var c=d.attr("href").split("?")[1];
var e=String(c);
e=decodeURIComponent(e);
e=e.replace(/T/g,"@").replace(/B/g,".").replace(/[A-Z]/g,"");
e=e.replace(/\+/g,"%20");
d.prop("href","mailto:"+e)
})
},stepBack:function(b){b.click(function(){if(parent.$("#colorbox").css("display")==="block"){parent.$.colorbox.close()
}else{history.back()
}return false
})
}})
})(ubs.$);
(function(a){a.fn.overlayMenu=function(E){var q=a(this),aa=[],p=[],l=false,ab=0.2,Y="Alpha(Opacity="+ab*100+")",W=[],w=false,M=0,af="col-mainNav-wrapper",ak="data-nce-columnid",d=300,H=250,ad="slideDown",y="slideUp",F=Math.floor(Math.random()*99999),C=a('<button type="button" tabindex="-1" class="nce_close_button nce_overlay nce_dark_background"><div class="button-close button nce_dark_background"><span><span class="nce_close_text"></span></span></div></button>'),n=false,ac=false,U=false,O,D="mouseenter",aj=a("#cboxOverlay"),m=a("#main"),ag=a("#doc");
O={blockPage:false,opacity:0.2,isFixedHeight:true,isCloseButton:true,overlayOpen:"mouseenter",overlayCloseOnMouseLeave:true,openStart:function(){},openEnd:function(){},closeStart:function(){},closeEnd:function(){}};
a(document).on("keydown",function(al){switch(al.keyCode){case a.ui.keyCode.ESCAPE:x(al);
break
}});
a.each(q,function(aq){var au=a(this),al=a.extend(O,E),ar=au.siblings(".box-overlay"),av,ao,ap,am=ar.parent(),at,an;
au.addClass("clMenuAccessible");
ar.on("focusout.exit",function(aw){an=setTimeout(function(){if(a(document.activeElement).parents(".box-overlay").length===0){x(aw)
}},100)
});
n=g(au);
ac=K(au);
if(n){h(au)
}U=z(ar);
D=I(al.overlayOpen);
aa[aq]=au;
aa[aq].attr({"aria-controls":"subMenu_"+F+"_"+aq,"aria-expanded":false});
ar.attr({id:"subMenu_"+F+"_"+aq,"aria-hidden":true});
p[aq]=ar.find("a");
p[aq].attr("tabindex",-1);
av=al.isCloseButton;
l=al.blockPage;
ab=al.opacity;
if(ac){if(ar.attr("data-closebutton")){av=ar.data("closebutton")?(av?true:false):false
}if(av===true){ao=ar.data("closebutton")+"&nbsp; X";
ap=C.clone(true);
ap.find(".nce_close_text").html(ao);
ap.on("click",function(aw){aw.stopImmediatePropagation();
u(ar)
});
am.append(ap)
}}au.on("click",function(aw){aw.preventDefault()
}).on("keydown",function(aw){switch(aw.keyCode){case a.ui.keyCode.TAB:if(w){r(aa[aq],aw,false)
}break;
case a.ui.keyCode.ENTER:if(!w){k(aa[aq],aw,true)
}else{r(aa[aq],aw,true)
}break;
case a.ui.keyCode.SPACE:if(!w){k(aa[aq],aw,true)
}else{r(aa[aq],aw,true)
}break;
case a.ui.keyCode.ESCAPE:r(aa[aq],aw,true);
break;
case a.ui.keyCode.UP:R(p[aq],aw,true);
break;
case a.ui.keyCode.DOWN:f(p[aq],aw,true);
break;
case a.ui.keyCode.LEFT:f(p[aq],aw,true);
break;
case a.ui.keyCode.RIGHT:R(p[aq],aw,true);
break
}}).on("openStart",function(aw){a(this).addClass("opened");
N();
al.openStart(aw)
}).on("openEnd",function(aw){al.openEnd(aw);
if(l){i(a(this))
}ai(true)
}).on("closeStart",function(aw){a(this).removeClass("opened");
al.closeStart(aw)
}).on("closeEnd",function(aw){al.closeEnd(aw);
if(l){ah()
}ai(false)
});
ar.on("keydown","a",function(aA){var ay=a(this),ax=ay.parent(),aw,az;
az=j(ay,p[aq]);
switch(aA.keyCode){case a.ui.keyCode.TAB:G(aA,ay,aq,az);
break;
case a.ui.keyCode.ENTER:c(aA,ay,ax);
break;
case a.ui.keyCode.SPACE:b(aA,ay,ax);
break;
case a.ui.keyCode.ESCAPE:r(aa[aq],aA,true);
break;
case a.ui.keyCode.UP:A(aA,ay,aq,az);
break;
case a.ui.keyCode.DOWN:X(aA,ay,aq,az);
break;
case a.ui.keyCode.LEFT:V(aA,ay,aq,az);
break;
case a.ui.keyCode.RIGHT:ae(aA,ay,aw,ar,aq,az);
break
}}).on("focus","a",function(){var ax=a(this),aw=ax.parent();
if(aw.hasClass("folderPage")||aw.hasClass("folder")){ax.trigger("click")
}}).on("click","a",function(ay){var ax=a(this),aw=ax.parent();
if(aw.hasClass("folderPage")||aw.hasClass("folder")){ay.preventDefault()
}});
at=(D==="focus")?au:au.parent();
at.on(D,function(ax,aw){if(ax!==undefined&&aw!==undefined){if(typeof aw==="object"&&aw.hasOwnProperty("redraw")){if(aw.redraw===false){return false
}}}P(ar,au,d,ad)
});
au.parent().on("hideOverlay",function(){u(ar)
}).on("mouseleave",function(){if(al.overlayCloseOnMouseLeave){u(ar)
}})
});
function I(am){var al;
if(am!=="click"&&am!=="mouseenter"&&am!=="focus"){al=D
}else{al=am
}return al
}function x(al){var am=a("a.clMenuAccessible.opened");
r(am,al,true)
}function u(al){T(al,q,H,y)
}function K(al){var am;
if(al.parent().find("div.mainNavigator").attr("data-navsections")){am=true
}else{am=false
}return am
}function g(al){var am;
if(al.parent().find("div.mainNavigator").attr("data-navsections")){am=true
}else{if(al.parent().find("div.etfNavigator").length){am=true
}else{am=false
}}return am
}function z(al){var am;
if(al.find(".box-accordion")){am=true
}else{am=false
}return am
}function ai(al){if(typeof al==="boolean"){w=al
}}function N(){M=0
}function h(al){if(al.parent().find("div.etfNavigator").length){al.parent().find("div.etfNavigator").find(".etfNavigator__assets").attr("data-nce-columnid",0).end().find(".etfNavigator__tags").attr("data-nce-columnid",1).end().find(".etfNavigator__products").attr("data-nce-columnid",2)
}}function j(al,an){var am;
a.each(an,function(ao){var ap=a(this);
if(ap.is(al)){am=ao
}});
return am
}function A(ao,al,an,am){ao.preventDefault();
if(al.hasClass("accordion-header")){ao.stopImmediatePropagation();
if(J(an,am)===false){al.focus()
}}else{o(an,am,true)
}}function X(ao,al,an,am){ao.preventDefault();
if(al.hasClass("accordion-header")){ao.stopImmediatePropagation();
if(v(an,am)===false){al.focus()
}}else{L(an,am,true)
}al.parent().removeClass("active");
al.closest("tr").removeClass("trFocused")
}function ae(ar,an,am,aq,ap,ao){var al=an.parent();
ar.preventDefault();
if(an.closest(".etfNavigator").length){if(an.attr("data-show-filter")){Q(an);
an.closest(".etfNavigator").find(".etfNavigator__tags:visible > div:visible a").first().focus()
}if(an.attr("data-filterasset")){Q(an);
an.closest(".etfNavigator").find(".etfNavigator__products:visible > table tbody tr:visible").first().addClass("trFocused").find("a").first().focus()
}}else{if(al.hasClass("folder")||al.hasClass("folderPage")){Q(an)
}if(an.hasClass("accordion-header")){ar.stopImmediatePropagation();
if(M===0){if(v(ap,ao)===false){an.focus()
}}else{if(M>0){if(an.is(W[M-1])){am=aq.find("."+af+"["+ak+"="+M+"]");
am.find(".mainNav-list").filter(":visible").find("a").first().trigger("click").focus()
}else{L(ap,ao,true)
}}}}else{if(M===0){L(ap,ao,true)
}else{if(M>0){if(an.is(W[M-1])){am=aq.find("."+af+"["+ak+"="+M+"]");
am.find(".mainNav-list").filter(":visible").find("a").first().focus()
}else{L(ap,ao,true)
}}}}}}function V(ao,al,an,am){ao.preventDefault();
if(al.hasClass("accordion-header")){ao.stopImmediatePropagation();
if(M===0){if(J(an,am)===false){al.focus()
}}else{if(M>0){al.parent().removeClass("active");
t()
}}}else{if(M===0){o(an,am,true)
}else{if(M>0){al.parent().removeClass("active");
al.closest("tr").removeClass("trFocused");
t()
}}}}function c(an,am,al){if(am.closest(".etfNavigator__assetList").length||am.closest(".etfNavigator__filterList").length){an.preventDefault();
W[M]=am;
M=M+1;
am.trigger(D,[{redraw:false}])
}else{if(!al.hasClass("folder")){if(window.console&&window.console.log){window.console.log("About to access to the link: ",an.target.href)
}}else{if(al.hasClass("folder")||al.hasClass("folderPage")){an.preventDefault();
W[M]=am
}}}}function b(an,am,al){an.preventDefault();
c(an,am,al)
}function G(ao,al,an,am){ao.preventDefault();
if(al.hasClass("accordion-header")){e(al,ao)
}if(!ao.shiftKey){Z(an,am,true)
}else{S(an,am,true)
}}function i(am){var al=a('<div class="blockBox"></div>');
al.css({position:"fixed",top:0,left:0,width:"100%",height:"100%",opacity:ab,filter:"Alpha(Opacity=20)",display:"block","background-color":"black","z-index":100});
al.insertAfter(am)
}function ah(){a(".blockBox").remove()
}function k(am,an,al){if(al!==false){an.preventDefault();
an.stopImmediatePropagation()
}am.parent().trigger(D);
am.focus()
}function r(am,an,al){if(al!==false){an.preventDefault();
an.stopImmediatePropagation()
}am.parent().trigger("hideOverlay");
am.trigger("focus",[{redraw:false}])
}function B(al){al.find(".ui-accordion-header").attr("tabindex","-1")
}function e(am,an){var al;
if(!an.shiftKey){if(!am.parent().hasClass("ui-state-active")){am.trigger("click")
}}else{if(am.parent().hasClass("ui-state-active")){am.trigger("click")
}al=am.parent().prevAll(".ui-accordion-header").first();
if(!al.hasClass("ui-state-active")){al.trigger("click")
}}}function P(am,an,ap,al){var ao,ar={complete:function(){if(ac){aq.css("display","block")
}an.trigger("openEnd");
B(am);
if(!ao){if(!l){a("#doc").css("zIndex",99999)
}am.css({height:"auto",overflowY:"hidden",overflowX:"hidden"})
}},duration:ap,queue:false},aq=an.parent().find(".nce_close_button");
an.trigger("openStart");
ao=an.hasClass("menu-item");
if(ao){if(aj.length===0){aj=a("#cboxOverlay")
}aj.css({opacity:0.4,filter:"Alpha(Opacity=40)",display:"block"});
m.css({zIndex:"",position:"static"});
ag.css({position:"static"});
if(a("body").hasClass("ie6")){aj.css({width:a(window).width(),height:a(document).height()})
}}else{if(l){aj.css({opacity:ab,filter:Y,display:"block"})
}}switch(al){case"slideDown":am.stop(true,true).delay(100).slideDown(ar);
break;
case"show":am.stop(true,true).delay(100).show(ar);
break;
case"fadeIn":am.stop(true,true).delay(100).fadeIn(ar);
break;
default:am.stop(true,true).delay(100).slideDown(ar);
break
}}function T(am,an,ao,al){var aq={complete:function(){if(ac){ap.css("display","none")
}am.css({height:null});
an.trigger("closeEnd")
},duration:ao,queue:false},ap=an.parent().find(".nce_close_button");
an.trigger("closeStart");
m.css({zIndex:"",position:"static"});
ag.css({position:"static"});
a("#cboxOverlay").css({opacity:"",filter:"",display:"none"});
a("#doc").css("zIndex","").hide().show();
if(l){aj.css({opacity:"",filter:"",display:"none"})
}switch(al){case"slideUp":am.finish().delay(ao).slideUp(aq);
break;
case"hide":am.finish().delay(ao).hide(aq);
break;
case"fadeOut":am.finish().delay(ao).fadeOut(aq);
break;
default:am.finish().delay(ao).slideUp(aq);
break
}}function R(al,an,am){if(am!==false){an.preventDefault()
}al.last().focus()
}function f(al,an,am){if(am!==false){an.preventDefault()
}al.first().focus()
}function v(am,al){var ao=p[am].slice(al+1).filter("a.accordion-header"),an;
if(ao.length){ao.first().focus();
an=true
}else{an=false
}return an
}function J(am,al){var ao=p[am].slice(0,al).filter("a.accordion-header"),an;
if(ao.length){ao.last().focus();
an=true
}else{an=false
}return an
}function t(){W[M-1].focus();
M=M-1
}function Q(al){if(n){W[M]=al;
M=M+1
}}function L(ao,ap,at){var au=p[ao].slice(ap+1).filter(":not(a.accordion-header):visible").first(),ar,aq,an,al,am;
ar=au.closest(".ui-accordion-content");
if(ar.length){if(!ar.hasClass("ui-accordion-content-active")){ar.prev(".ui-accordion-header").trigger("click")
}}if(au.closest(".etfNavigator__products").length){aq=a(document.activeElement).closest("tr");
an=au.closest("tr");
au.closest(".etfNavigator__products").find("table tbody tr.trFocused").removeClass("trFocused");
if(an.is(aq)){al=au.parents("tr").nextAll(":visible");
if(al.length){au=al.first().addClass("trFocused").find("a").first()
}else{an.addClass("trFocused");
return false
}}else{an.addClass("trFocused")
}}if(au.closest(".etfNavigator__filterList").length){am=au.data();
if(!am.hasOwnProperty("filterasset")&&!am.hasOwnProperty("filtertags")){at=false
}}if(au.closest(".etfNavigator").length){if(!au.closest("div[data-nce-columnid="+M+"]").length){return false
}}if(ac){if(!au.closest("div[data-nce-columnid="+M+"]").length){return false
}}if(at!==false&&n){au.trigger("click")
}au.focus()
}function o(ao,ap,at){var au=p[ao].slice(0,ap).filter(":not(a.accordion-header):visible").last(),ar,aq,an,al,am;
ar=au.closest(".ui-accordion-content");
if(ar.length){if(!ar.hasClass("ui-accordion-content-active")){ar.prev(".ui-accordion-header").trigger("click")
}}if(au.closest(".etfNavigator__products").length){aq=a(document.activeElement).closest("tr");
an=au.closest("tr");
au.closest(".etfNavigator__products").find("table tbody tr.trFocused").removeClass("trFocused");
if(an.is(aq)){al=au.closest("tr").prevAll(":visible");
if(al.length){au=al.first().addClass("trFocused").find("a").first()
}else{an.addClass("trFocused");
return false
}}else{an.addClass("trFocused")
}}if(au.closest(".etfNavigator__filterList").length){am=au.data();
if(!am.hasOwnProperty("filterasset")&&!am.hasOwnProperty("filtertags")){at=false
}}if(au.closest(".etfNavigator").length){if(!au.closest("div[data-nce-columnid="+M+"]").length){return false
}}if(at!==false&&n){au.trigger("click")
}au.focus()
}function S(ao,an,ap){var aq,am,al=false;
if(an===0){al=true
}else{aq=a(p[ao][an-1])
}if(al){return
}if(aq.closest(".etfNavigator__filterList").length){am=aq.data();
if(!am.hasOwnProperty("filterasset")&&!am.hasOwnProperty("filtertags")){ap=false
}}if(ap!==false&&n){aq.trigger("click")
}aq.focus()
}function Z(ao,an,ap){var am,al;
if(an+1<p[ao].length){am=a(p[ao][an+1])
}else{return false
}if(am.closest(".etfNavigator__filterList").length){al=am.data();
if(!al.hasOwnProperty("filterasset")&&!al.hasOwnProperty("filtertags")){ap=false
}}if(ap!==false&&n){am.trigger("click")
}am.focus()
}}
}(jQuery));
(function(a){a.fn.ticker=function(c){var f={animationspeed:50,animationsteps:2,direction:"rtl"},e,i=[];
f.direction=a("html").css("direction");
e=a.extend(f,c);
a.each(a(this),function(p){var t=a(this),o,k,n,l=0,v,m,u=t.parents(".emergencycall").first().attr("data-disconnector")||"+++";
if(t.hasClass("stackedItem")){k=t.children();
n=k.length;
if(n===1){b(t,u);
m=function(y){var z=a(this),x=z.find(".emergencyBanner.stackedItem.oneItemTicker a").first().attr("href");
y.preventDefault();
a(location).attr("href",x)
};
t.on("click",m)
}else{if(n>1){v=function(){var x=a(this);
x.parent().append(x.clone())
};
while(n<8&&l<4){k.each(v);
k=t.children();
n=k.length;
l=l+1
}k.each(function(){var x=a(this);
a('<li class="disconnector">'+u+"</li>").insertAfter(x)
});
o=t.find("li:not(.disconnector)");
o.css("margin-left",0).css("margin-right",0)
}}}var r=t.find("li");
var j=t.hasClass("emergencyBanner");
i[p]=[];
i[p].numItems=r.length;
i[p].width=t.width();
i[p].emergencyIconWidth=0;
i[p].accumulatedWidth=(function(y){var x=0;
y.each(function(){var z=a(this);
x+=z.width()
})
}(r));
var q=t.prev();
if(q.hasClass("emergencyIcon")){i[p].emergencyIconWidth=q.outerWidth()
}var w=false;
t.siblings("a.icon-pause").click(function(x){x.preventDefault();
if(w){h(i[p]);
a(this).removeClass("icon-play").addClass("icon-pause");
w=false
}else{clearTimeout(i[p].timeout);
a(this).removeClass("icon-pause").addClass("icon-play");
w=true
}});
a.each(r,function(x){var y=a(this);
i[p][x]={};
i[p][x].item=y;
i[p][x].item_pos_left=Math.round(y.position().left);
i[p][x].item_width=y.outerWidth(true)
});
a.each(i[p],function(x){this.item.css({position:"absolute",left:this.item_pos_left});
var y=this.item.find("a");
if(x!==0){y.attr("tabIndex",-1)
}if(j){this.item.mouseenter(function(){clearTimeout(i[p].timeout)
});
this.item.bind("focusout mouseleave",function(B,A){if(A!==true){if(!w){h(i[p])
}a.each(i[p],function(C){if(x!==C){this.item.css("display","inline")
}});
y.trigger("blur",true)
}})
}else{y.mouseenter(function(){clearTimeout(i[p].timeout);
a.each(i[p],function(A){if(x!==A){this.item.css("display","none")
}});
if(i[p][x].item_pos_left>50){i[p][x].item.css("left",i[p][x].item_pos_left-50)
}else{if(i[p][x].item_pos_left<0){i[p][x].item.css("left",0)
}}});
y.on("focusout mouseleave",function(B,A){if(A!==true){i[p][x].item.css("left",i[p][x].item_pos_left);
if(!w){h(i[p])
}a.each(i[p],function(C){if(x!==C){this.item.css("display","inline")
}});
y.trigger("blur",true)
}})
}var z=false;
y.bind("focusin mousedown mouseup",function(A){if(A.type==="mousedown"){A.preventDefault();
z=true;
return false
}if(A.type==="mouseup"){z=false
}if(A.type==="focusin"&&!z){d(p,x,a(this))
}})
});
h(i[p])
});
function b(n,l){var o,k,j=6,m;
o=n.find("> li").clone().find("span.hidden").remove().end().find("a").html();
k=o.length;
if(k<=50){j=12
}if(k<=150){a('<li class="disconnector">'+l+"</li>").insertAfter(n.find("> li:not(.disconnector)"));
a("<li>"+n.find("> li").first().html()+"</li>").insertAfter(n.find("> li.disconnector"));
for(m=0;
m<j;
m=(m+1)){a('<li class="disconnector">'+l+"</li>").insertAfter(n.find("> li:not(.disconnector)").last());
a("<li>"+n.find("> li").first().html()+"</li>").insertAfter(n.find("> li.disconnector").last())
}a('<li class="disconnector">'+l+"</li>").insertAfter(n.find("> li:not(.disconnector)").last());
liItems=n.find("li:not(.disconnector)");
liItems.css("margin-left",0).css("margin-right",0)
}}function d(l,k,m){clearTimeout(i[l].timeout);
a.each(i[l],function(j){if(k!==j){this.item.css("display","none")
}});
m.closest("li").css({left:i[l].emergencyIconWidth,right:0});
m.keydown(function(j){if(j.keyCode===a.ui.keyCode.TAB){var n=k+1;
if(n<i[l].length){i[l][n].item.css("display","block").find("a").focus();
return false
}}})
}function h(j){clearTimeout(j.timeout);
j.timeout=setTimeout(function(){a.each(j,function(k){g(this,j,k)
});
h(j)
},e.animationspeed)
}function g(l,j,k){if(l.item_pos_left+l.item_width>0){l.item_pos_left=l.item_pos_left-e.animationsteps
}else{var m=(e.direction==="rtl"?k-1:k-1);
m=(((m)%j.numItems)+j.numItems)%j.numItems;
l.item_pos_left=j[m].item_pos_left+j[m].item_width;
if(l.item_pos_left<j.width){l.item_pos_left=j.width
}}l.item.css("left",l.item_pos_left)
}}
}(jQuery));
(function(a){a.widget("ubs.toolTip",{options:{customClass:"",offsetTop:"-7",offsetLeft:0,width:"auto",minWidth:"auto",maxWidth:"auto",iconWidth:8,documentPaddingCorrection:20,toolTipArrowOffset:0,toolTipArrowWidth:8,last:[]},_create:function(){var b=this;
b.identifier=b.uuid;
b.title=b.element.prop("title");
b.tooltip=a("<div id='ui-toolTip-"+b.identifier+"' class='ui-tooltip "+b.options.customClass+"' style='width:"+b.options.width+"px; min-width:"+b.options.minWidth+"px; max-width:"+b.options.maxWidth+"px;'></div>");
b.tooltipInner=a("<span><span><span class='help-icon'></span>"+b.title+"</span></span>");
b.tooltip.append(b.tooltipInner);
a("body").append(b.tooltip)
},_init:function(){var b=this;
if(b.title.length===0){return
}b.alignment=(ubs.init.states.readingDirection==="rtl"?"right":"left");
b.last={};
b.options.offsetLeft=parseInt(b.options.offsetLeft,10);
b.options.width=parseInt(b.options.width,10);
if(b.alignment==="right"){b.options.offsetLeft=b.options.offsetLeft*-1
}if(isNaN(b.options.width)){b.options.width=b.tooltip.width()
}b.element.prop("title","").attr("data-title",b.title).attr("aria-Describedby","ui-toolTip-"+b.identifier);
b._posCorrect();
b._toolTipArrow();
b.tooltipInner.css({backgroundPosition:b.toolTipIconOffset+"px bottom"});
b._eventHandler()
},destroy:function(){a.Widget.prototype.destroy.call(this)
},_eventHandler:function(){var b=this;
b.element.bind("mouseenter focusin",function(){b._hideTooltip(a.ubs.toolTip.lastTooltip);
b._showTooltip(b.tooltip);
a.ubs.toolTip.lastTooltip=b.tooltip
}).bind("mouseleave focusout",function(){b._hideTooltip(b.tooltip)
})
},_posCorrect:function(){var c=this;
var e=a("body");
var d=c.element.offset().left;
var b=e.width()-c.options.documentPaddingCorrection;
if(c.alignment==="right"){if(e.offset().left>(d-c.options.width+c.options.offsetLeft)){c.options.offsetLeft=(e.offset().left-d+c.options.width)
}}else{if(d+c.options.offsetLeft+c.options.width>b){c.options.offsetLeft=(b-c.options.width-d)
}else{if((d+c.options.offsetLeft)<0){c.options.offsetLeft=d+c.options.offsetLeft
}}}},_toolTipArrow:function(){var b=this;
if(b.options.toolTipArrowOffset!==0){if(b.alignment==="right"){b.toolTipIconOffset=b.options.width-b.options.toolTipArrowOffset-b.options.iconWidth
}else{b.toolTipIconOffset=b.options.toolTipArrowOffset
}}else{if(b.alignment==="right"){b.toolTipIconOffset=b.options.width-b.options.iconWidth+(-b.element.innerWidth()/2-b.options.offsetLeft+b.options.iconWidth/2)
}else{b.toolTipIconOffset=b.element.innerWidth()/2-b.options.offsetLeft-b.options.iconWidth/2
}}},_showTooltip:function(c){var d=this;
var b=ubs.util.sign(d.options.offsetLeft);
if(b>0){b="+"
}else{b="-"
}c.css("display","inline-block").position({my:d.alignment+b+d.options.offsetLeft+"px bottom"+d.options.offsetTop+"px",at:d.alignment+" top",of:d.element,collision:"none"})
},_hideTooltip:function(b){if(b){b.hide().css("top","").css("left","");
a.ubs.toolTip.lastTooltip=null
}}})
})(jQuery);
(function(a){ubs.fit.func=ubs.fit.func||{};
a.extend(ubs.fit.func,{init:function(b){ubs.util.time("init FIT func");
ubs.fit.func.userCheck.init(b);
ubs.fit.func.svgFallback(b);
ubs.func.termHighlight.init(false,true,a(" > div > div:not('#footer, #disclaimer')",ubs.init.states.$content));
ubs.init.states.$content.find(".dynamicteaser").removeHighlight();
ubs.func.cookieHandling.setCookiePrivacySetting();
ubs.func.cookieHandling.removeNotAllowedCookies();
ubs.func.cookieHandling.cookieManagement();
ubs.func.cookieHandling.setCookieSetting(a("form.cookieSettings",b));
ubs.func.cookieHandling.setCookieSetting(a("a.cookieSettings",b),true);
if(a().initTracking){a().initTracking(b)
}ubs.util.timeEnd("init FIT func")
},svgFallback:function(b){if(!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")){a('img[src$="svg"]').attr("src",function(){return a(this).data("nn-svg-fallback")
})
}},userCheck:{defaults:{},init:function(g){var d=ubs.fit.func.userCheck;
d.defaults.$ls=a("#nav-service div.loginstatus",g);
d.defaults.$loginform=a("#loginform",g);
var b=null;
b=ubs.func.cookieHandling.getCookieStorage("loginStatus");
var f=true;
if(d.defaults.$ls.length>0&&b!==null){f=false;
if(b!=="false"){d.defaults.$ls.html(b)
}else{if(window.sc_cugname!==undefined&&window.sc_cugname.length>0){f=true
}}}if(d.defaults.$ls.length>0&&f){var e="requestUri="+window.location.pathname;
ubs.util.ajaxUtil.sendAjaxRequest("/bin/ubs/cug/checkuser","GET","html",e,ubs.fit.func.userCheck.successFunction,ubs.fit.func.userCheck.errorFunction)
}d.logoutBinding()
},successFunction:function(d,e,c){if(d!==""){var b=ubs.fit.func.userCheck;
b.defaults.$ls.html(d);
ubs.func.cookieHandling.setStorage("loginStatus",d)
}else{ubs.func.cookieHandling.setStorage("loginStatus",false)
}},errorFunction:function(b,d,c){},logoutBinding:function(){a("body").click(function(b){if(a(b.target).closest("a").hasClass("logout")){ubs.fit.func.userCheck.logoutUser()
}});
ubs.fit.func.userCheck.defaults.$loginform.submit(function(){ubs.fit.func.userCheck.logoutUser()
})
},cugLinkHandling:function(f){var d=ubs.fit.func.userCheck;
var e=d.defaults.$ls.find("a.mysite-link").attr("data-cugrights");
if(e){var b=e.split(",");
d.defaults.$cugLinks=a("a[data-cug]",f);
a.each(d.defaults.$cugLinks,function(){var c=a(this);
a.each(b,function(h){var g=b[h];
if(g===c.attr("data-cug")){c.removeClass("cug-link")
}})
})
}},logoutUser:function(){ubs.func.cookieHandling.setStorage("loginStatus",null)
}},cugLogin:function(c){var b=false;
c.click(function(f){f.preventDefault();
var e=a(this).prop("href");
var d=e.replace(".html",".logintest.html");
a.ajax({type:"GET",url:d,success:(function(g){}),error:(function(i){var g="lightBox {lightBox:{ iframe:true}}";
var h=a("<a href='"+e+"' class='"+g+"' style='display:none' />");
a("body").append(h);
ubs.ui.lightbox.init(h);
h.click()
})})
});
_openInParent(a("#loginform"),ubs.init.states.accessRights)
}})
})(ubs.$);
(function(c){var b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var d=function(f){f=f.replace(/\x0d\x0a/g,"\x0a");
var e="";
for(var h=0;
h<f.length;
h++){var g=f.charCodeAt(h);
if(g<128){e+=String.fromCharCode(g)
}else{if((g>127)&&(g<2048)){e+=String.fromCharCode((g>>6)|192);
e+=String.fromCharCode((g&63)|128)
}else{e+=String.fromCharCode((g>>12)|224);
e+=String.fromCharCode(((g>>6)&63)|128);
e+=String.fromCharCode((g&63)|128)
}}}return e
};
var a=function(e){var f="";
var g=0;
var h=c1=c2=0;
while(g<e.length){h=e.charCodeAt(g);
if(h<128){f+=String.fromCharCode(h);
g++
}else{if((h>191)&&(h<224)){c2=e.charCodeAt(g+1);
f+=String.fromCharCode(((h&31)<<6)|(c2&63));
g+=2
}else{c2=e.charCodeAt(g+1);
c3=e.charCodeAt(g+2);
f+=String.fromCharCode(((h&15)<<12)|((c2&63)<<6)|(c3&63));
g+=3
}}}return f
};
c.extend({base64Encode:function(g){var e="";
var o,m,k,n,l,j,h;
var f=0;
g=d(g);
while(f<g.length){o=g.charCodeAt(f++);
m=g.charCodeAt(f++);
k=g.charCodeAt(f++);
n=o>>2;
l=((o&3)<<4)|(m>>4);
j=((m&15)<<2)|(k>>6);
h=k&63;
if(isNaN(m)){j=h=64
}else{if(isNaN(k)){h=64
}}e=e+b.charAt(n)+b.charAt(l)+b.charAt(j)+b.charAt(h)
}return e
},base64Decode:function(g){var e="";
var o,m,k;
var n,l,j,h;
var f=0;
g=g.replace(/[^A-Za-z0-9\+\/\=]/g,"");
while(f<g.length){n=b.indexOf(g.charAt(f++));
l=b.indexOf(g.charAt(f++));
j=b.indexOf(g.charAt(f++));
h=b.indexOf(g.charAt(f++));
o=(n<<2)|(l>>4);
m=((l&15)<<4)|(j>>2);
k=((j&3)<<6)|h;
e=e+String.fromCharCode(o);
if(j!=64){e=e+String.fromCharCode(m)
}if(h!=64){e=e+String.fromCharCode(k)
}}e=a(e);
return e
}})
})(jQuery);
(function(a){ubs.ui=ubs.ui||{};
ubs.ui.lightbox=ubs.ui.lightbox||{};
a.extend(ubs.ui.lightbox,{defaults_no_iframe:{iframe:false,opacity:0.4,close:"Close",close_description:"",innerWidth:false,innerHeight:false,left:65,top:false,right:false,overlayClose:true,escKey:true,hp:false,pf:false,sb:false,info:false,boxName:false,html:false,service:false,href:false,inline:false,base:false,direction:"ltr"},defaults_iframe:{iframe:true,fastIframe:false,permission:true,opacity:0.4,close:"Close",close_description:"",innerWidth:a("body").width()-90,innerHeight:30,innerHeightDefault:500,left:65,top:false,right:false,bottom:false,scrolling:false,transition:"elastic",escKey:false,overlayClose:true,hp:false,pf:false,sb:false,info:false,boxName:false,html:false,data:false,service:false,href:false,inline:false,path:"",base:false,direction:"ltr",visibilityTimeout:2000},status:{element:[],elementClone:[],parent:[],opts:[],iFrame:[],iFramedoc:[],iwidth:[],iFramebody:[],iFramecont:[],executedObject:[],loading:false,scrollPosition:0},init:function(c){var d=a("html").css("direction");
ubs.ui.lightbox.defaults_no_iframe.direction=d;
ubs.ui.lightbox.defaults_iframe.direction=d;
var b=ubs.ui.lightbox.status.opts.length;
if(ubs.init.states.cqAuthor){a(window).scroll(function(){if(ubs.ui.lightbox.status.loading){a(this).scrollTop(ubs.ui.lightbox.status.scrollPosition)
}})
}a.each(c,function(h){h+=b;
var f;
ubs.ui.lightbox.status.element[h]=a(this);
ubs.ui.lightbox.status.parent[h]=ubs.ui.lightbox.status.element[h].parent();
var j=a(this).metadata().lightBox;
if(j){if(j.iframe){ubs.ui.lightbox.status.opts[h]=a.extend({},ubs.ui.lightbox.defaults_iframe,j)
}else{ubs.ui.lightbox.status.opts[h]=a.extend({},ubs.ui.lightbox.defaults_no_iframe,j)
}}else{ubs.ui.lightbox.status.opts[h]=a.extend({},ubs.ui.lightbox.defaults_no_iframe,j)
}if(ubs.ui.lightbox.status.opts[h].direction==="rtl"){ubs.ui.lightbox.status.opts[h].left=false;
ubs.ui.lightbox.status.opts[h].right=65
}if(ubs.ui.lightbox.status.opts[h].iframe&&ubs.ui.lightbox.status.opts[h].innerWidth!==ubs.ui.lightbox.defaults_iframe.innerWidth){ubs.ui.lightbox.status.opts[h].innerWidthCustom=ubs.ui.lightbox.status.opts[h].innerWidth
}if(ubs.ui.lightbox.status.opts[h].iframe&&ubs.ui.lightbox.status.opts[h].innerHeight!==30){ubs.ui.lightbox.status.opts[h].innerHeightCustom=ubs.ui.lightbox.status.opts[h].innerHeight
}if(ubs.ui.lightbox.status.element[h].children().length===1&&ubs.ui.lightbox.status.element[h].children("img").length===1){ubs.ui.lightbox.status.opts[h].html='<div style="padding:1.67em; width:auto;height:auto;background:#fff;"><img src="'+a(this).prop("href")+'"/></div>';
ubs.ui.lightbox.status.opts[h].close_description=ubs.ui.lightbox.status.opts[h].close;
if(ubs.ui.lightbox.status.opts[h].close){f=ubs.ui.lightbox.status.opts[h].close+"&nbsp; X"
}else{f="X";
ubs.ui.lightbox.status.opts[h].close_description=f
}ubs.ui.lightbox.status.opts[h].close="<div class='button-close button'><span><span>"+f+"</span></span></div>"
}if(ubs.ui.lightbox.status.opts[h].iframe){if(!(ubs.ui.lightbox.status.element[h].children().length===1&&ubs.ui.lightbox.status.element[h].children("img").length===1)){ubs.ui.lightbox.status.opts[h].close_description=ubs.ui.lightbox.status.opts[h].close;
if(ubs.ui.lightbox.status.opts[h].close){f=ubs.ui.lightbox.status.opts[h].close+"&nbsp; X"
}else{f="X";
ubs.ui.lightbox.status.opts[h].close_description=f
}ubs.ui.lightbox.status.opts[h].close="<div class='button-close button'><span><span>"+f+"</span></span></div>"
}if(ubs.ui.lightbox.status.opts[h].pf){ubs.ui.lightbox.status.elementClone[h]=ubs.ui.lightbox.status.element[h].clone();
var m=ubs.init.states.$content.siblings("#nav-content").outerWidth(true)+ubs.init.states.$content.width();
var l=((ubs.init.states.tim)?791:757)*(ubs.init.states.textzoom>1?ubs.init.states.textzoom:1);
if(l>m&&m!==0){l=m
}ubs.ui.lightbox.status.opts[h].opacity=0;
ubs.ui.lightbox.status.opts[h].transition="none";
ubs.ui.lightbox.status.opts[h].innerWidth=((ubs.ui.lightbox.status.opts[h].innerWidth>l)?l:(ubs.ui.lightbox.status.opts[h].innerWidth))
}if(ubs.ui.lightbox.status.opts[h].hp){ubs.ui.lightbox.status.opts[h].innerHeight=540*(ubs.init.states.textzoom);
ubs.ui.lightbox.status.opts[h].innerWidth=860*(ubs.init.states.textzoom);
if(ubs.ui.lightbox.status.opts[h].direction==="rtl"){ubs.ui.lightbox.status.opts[h].right=65
}else{ubs.ui.lightbox.status.opts[h].left=65
}ubs.ui.lightbox.status.opts[h].top=100
}}else{if(ubs.ui.lightbox.status.opts[h].html){ubs.ui.lightbox.status.opts[h].html=(a(ubs.ui.lightbox.status.opts[h].html))
}ubs.ui.lightbox.status.opts[h].transition="none"
}if(ubs.ui.lightbox.status.opts[h].pf){ubs.ui.lightbox.status.opts[h].close="X"
}if(ubs.ui.lightbox.status.opts[h].sb){ubs.ui.lightbox.status.elementClone[h]=ubs.ui.lightbox.status.element[h].clone();
ubs.ui.lightbox.status.opts[h].right=false;
ubs.ui.lightbox.status.opts[h].left=false;
ubs.ui.lightbox.status.opts[h].html.css("position","absolute").css("left","0");
ubs.ui.lightbox.status.opts[h].innerWidth=ubs.ui.lightbox.status.opts[h].html.outerWidth(true)+(24*ubs.init.states.textzoom);
ubs.ui.lightbox.status.opts[h].html.css("position","relative");
if(ubs.util.ie()){if(ubs.util.getBrowserVersion()<=7){ubs.ui.lightbox.status.opts[h].innerWidth="300"
}}ubs.ui.lightbox.status.opts[h].close="X"
}if(ubs.ui.lightbox.status.opts[h].pf||ubs.ui.lightbox.status.opts[h].sb){ubs.ui.lightbox.status.opts[h].footerBar=a("#footer-interact");
if(ubs.ui.lightbox.status.opts[h].footerBar.length===0){ubs.ui.lightbox.status.opts[h].footerBar=ubs.ui.lightbox.status.element[h].closest("div.articletoolbar")
}if(ubs.ui.lightbox.status.opts[h].direction==="rtl"){var k=ubs.ui.lightbox.status.opts[h].footerBar.offset().left;
var e=ubs.ui.lightbox.status.opts[h].footerBar.position().left;
if(e>k){k=e
}ubs.ui.lightbox.status.opts[h].right=(a(document).width()-k);
if(ubs.ui.lightbox.status.opts[h].pf){ubs.ui.lightbox.status.opts[h].right+=(-parseInt(ubs.ui.lightbox.status.opts[h].innerWidth,10)-10);
if(ubs.util.ie()){if(ubs.util.getBrowserVersion()<=8){ubs.ui.lightbox.status.opts[h].right-=20
}else{if(ubs.util.getBrowserVersion()>=9){ubs.ui.lightbox.status.opts[h].right-=15
}}}}else{ubs.ui.lightbox.status.opts[h].right+=(-ubs.ui.lightbox.status.opts[h].html.outerWidth(true)-(29*ubs.init.states.textzoom)-5);
if(ubs.util.ie()){if(ubs.util.getBrowserVersion()<=8){ubs.ui.lightbox.status.opts[h].right-=23
}else{if(ubs.util.getBrowserVersion()>=9){ubs.ui.lightbox.status.opts[h].right-=16
}}}}}else{ubs.ui.lightbox.status.opts[h].left=((ubs.ui.lightbox.status.opts[h].footerBar.offset().left+ubs.ui.lightbox.status.opts[h].footerBar.width())-parseInt(ubs.ui.lightbox.status.opts[h].innerWidth,10));
if(ubs.ui.lightbox.status.opts[h].sb){if(ubs.util.ie()){if(ubs.util.getBrowserVersion()<=8){ubs.ui.lightbox.status.opts[h].left-=0
}}}}}if(ubs.ui.lightbox.status.opts[h].info){ubs.ui.lightbox.status.opts[h].innerWidth=300*(ubs.init.states.textzoom>1?ubs.init.states.textzoom:1);
ubs.ui.lightbox.status.opts[h].close="X"
}if(ubs.util.ie()&&ubs.util.getBrowserVersion()<=6){ubs.ui.lightbox.status.opts[h].right=false;
ubs.ui.lightbox.status.opts[h].left=false;
if(ubs.ui.lightbox.status.opts[h].direction==="rtl"){ubs.ui.lightbox.status.opts[h].right=65
}else{ubs.ui.lightbox.status.opts[h].left=65
}ubs.ui.lightbox.status.opts[h].top=100;
ubs.ui.lightbox.status.opts[h].bottom=false
}ubs.ui.lightbox.status.opts[h].path=a.base64Encode(window.location.pathname);
if(ubs.init.states.textzoom!==1){if(ubs.ui.lightbox.status.opts[h].innerWidthCustom){ubs.ui.lightbox.status.opts[h].innerWidthCustom*=ubs.init.states.textzoom
}if(ubs.ui.lightbox.status.opts[h].innerHeightCustom){ubs.ui.lightbox.status.opts[h].innerHeightCustom*=ubs.init.states.textzoom
}}ubs.ui.lightbox.initPlugin(h);
var g=ubs.func.cookieHandling.getCookieStorage("colorbox_open_"+ubs.ui.lightbox.status.opts[h].path);
if(g===a(this).prop("href")){if(a.colorbox.element().length===0){a(this).click()
}}})
},initPlugin:function(b){ubs.ui.lightbox.status.element[b].colorbox({title:" ",iframe:ubs.ui.lightbox.status.opts[b].iframe,fastIframe:ubs.ui.lightbox.status.opts[b].fastIframe,opacity:ubs.ui.lightbox.status.opts[b].opacity,close:ubs.ui.lightbox.status.opts[b].close,html:ubs.ui.lightbox.status.opts[b].html,inline:ubs.ui.lightbox.status.opts[b].inline,href:ubs.ui.lightbox.status.opts[b].href,innerWidth:ubs.ui.lightbox.status.opts[b].innerWidth,innerHeight:ubs.ui.lightbox.status.opts[b].innerHeight,left:ubs.ui.lightbox.status.opts[b].left,right:ubs.ui.lightbox.status.opts[b].right,top:ubs.ui.lightbox.status.opts[b].top,scrolling:ubs.ui.lightbox.status.opts[b].scrolling,transition:ubs.ui.lightbox.status.opts[b].transition,overlayClose:ubs.ui.lightbox.status.opts[b].overlayClose,escKey:ubs.ui.lightbox.status.opts[b].escKey,current:false,next:'<img src="/img/bg_nav-img-gallery.png"/>',onOpen:function(){if(ubs.init.states.cqAuthor){ubs.ui.lightbox.status.scrollPosition=a("html, body").scrollTop();
ubs.ui.lightbox.status.loading=true
}ubs.ui.lightbox.status.executedObject=a(this);
var d=a("#colorbox");
if(ubs.ui.lightbox.status.opts[b].hp){d.addClass("colorbox-homepage");
a("#main").css("position","relative")
}else{if(ubs.ui.lightbox.status.opts[b].pf||ubs.ui.lightbox.status.opts[b].sb){d.addClass("colorbox-pf").hide();
var c=a("html").height()-ubs.ui.lightbox.status.element[b].offset().top;
d.show();
if(!(ubs.util.ie()&&ubs.util.getBrowserVersion()<7)){d.css("bottom",c).css("top","auto !important")
}}else{if(ubs.ui.lightbox.status.opts[b].info){d.addClass("colorbox-info")
}else{d.addClass("colorbox-default")
}}}if(ubs.ui.lightbox.status.opts[b].boxName){d.addClass("colorbox-"+ubs.ui.lightbox.status.opts[b].boxName)
}},onLoad:function(){var c=a("#colorbox");
if(ubs.ui.lightbox.status.opts[b].hp){c.addClass("colorbox-homepage")
}else{if(ubs.ui.lightbox.status.opts[b].pf||ubs.ui.lightbox.status.opts[b].sb){c.addClass("colorbox-pf");
if(ubs.ui.lightbox.status.opts[b].sb){c.addClass("colorbox-sb")
}}else{if(ubs.ui.lightbox.status.opts[b].info){c.addClass("colorbox-info")
}else{c.addClass("colorbox-default")
}}}if(ubs.ui.lightbox.status.opts[b].boxName){c.addClass("colorbox-"+ubs.ui.lightbox.status.opts[b].boxName)
}},onComplete:function(){ubs.ui.lightbox.colorboxComplete(b);
if(ubs.ui.lightbox.status.opts[b].pf||ubs.ui.lightbox.status.opts[b].sb){if(ubs.ui.lightbox.status.opts[b].direction==="rtl"){var c=ubs.ui.lightbox.status.opts[b].right;
c=c+10;
a("#colorbox").css({right:c,left:"auto"})
}else{a("#colorbox").css({left:ubs.ui.lightbox.status.opts[b].left})
}}ubs.func.cookieHandling.setCookieStorage("colorbox_open_"+ubs.ui.lightbox.status.opts[b].path,a(this).prop("href"),ubs.func.cookieHandling.cookieCategorySettings.lightboxstatus.privacySetting);
function d(){ubs.ui.lightbox.status.loading=false
}if(ubs.init.states.cqAuthor){a("html, body").scrollTop(ubs.ui.lightbox.status.scrollPosition);
setTimeout(function(){d()
},1000)
}},onClosed:function(){ubs.ui.lightbox.status.loading=false;
var d=a("#colorbox");
if(ubs.ui.lightbox.status.opts[b].hp){d.removeClass("colorbox-homepage");
if(ubs.func.cookieHandling.cookiePrivacySetting[ubs.func.cookieHandling.cookieCategorySettings.analytics.privacySetting]){if(window.s){var c=s.t();
if(c){a("body").append(c)
}}}}else{if(ubs.ui.lightbox.status.opts[b].pf||ubs.ui.lightbox.status.opts[b].sb){if(!(ubs.util.ie()&&ubs.util.getBrowserVersion()<=6)){d.removeClass("colorbox-pf");
ubs.ui.lightbox.status.elementClone[b].removeClass("button-active").css("top","").css("left","").remove()
}}else{if(ubs.ui.lightbox.status.opts[b].info){d.removeClass("colorbox-info")
}else{d.removeClass("colorbox-default").css({"margin-top":"","margin-bottom":""})
}}}if(ubs.ui.lightbox.status.opts[b].boxName){d.removeClass("colorbox-"+ubs.ui.lightbox.status.opts[b].boxName)
}ubs.func.cookieHandling.setCookieStorage("colorbox_open_"+ubs.ui.lightbox.status.opts[b].path,null);
ubs.ui.lightbox.status.executedObject.focus()
}})
},resizeiFrame:function(c){var e;
var b;
var d=ubs.ui.lightbox.status.element[c].offset().top;
if(ubs.ui.lightbox.status.opts[c].permission){if(ubs.ui.lightbox.status.iFramedoc[c].length>0){b=ubs.ui.lightbox.status.iFramedoc[c].height()
}else{b=ubs.ui.lightbox.status.iFrame[c].contents().height()
}a("#cboxClose").css("right","")
}else{if(ubs.ui.lightbox.status.opts[c].innerHeight>30){b=ubs.ui.lightbox.status.opts[c].innerHeight
}else{b=ubs.ui.lightbox.status.opts[c].innerHeightDefault
}ubs.ui.lightbox.status.iFrame[c].attr("scrolling","auto");
ubs.ui.lightbox.status.iFrame[c].parent().css("overflow","auto");
a("#cboxClose").css("right","")
}if(ubs.ui.lightbox.status.opts[c].pf&&d<b){e=d;
ubs.ui.lightbox.status.iFrame[c].attr("scrolling","auto");
a("#cboxClose").css("right","30px")
}else{e=b
}if(ubs.ui.lightbox.status.opts[c].innerWidthCustom){ubs.ui.lightbox.status.iwidth[c]=ubs.ui.lightbox.status.opts[c].innerWidthCustom;
if(ubs.ui.lightbox.status.iFramecont[c]){ubs.ui.lightbox.status.iFramecont[c].width("auto")
}}if(ubs.ui.lightbox.status.opts[c].innerHeightCustom){e=ubs.ui.lightbox.status.opts[c].innerHeightCustom
}a.colorbox.resize({innerHeight:e,innerWidth:ubs.ui.lightbox.status.iwidth[c]});
if(ubs.ui.lightbox.status.opts[c].permission){ubs.ui.lightbox.status.iFramebody[c].find("ul.ui-selectmenu-menu-dropdown").css("height","");
ubs.ui.lightbox.status.iFramebody[c].find("ul.ui-selectmenu-menu-dropdown").css("maxHeight",e/2.5)
}if(ubs.ui.lightbox.status.opts[c].permission){ubs.ui.lightbox.status.iFrame[c].contents().find("html").css("overflow-y","auto").css("overflow-x","hidden").find("body").css("overflow-y","auto").css("overflow-x","hidden")
}},colorboxComplete:function(c){if(ubs.ui.lightbox.status.opts[c].iframe){ubs.ui.lightbox.status.iFrame[c]=a("#colorbox iframe");
try{var f=ubs.ui.lightbox.status.iFrame[c].contents()[0].URL
}catch(g){ubs.ui.lightbox.status.opts[c].permission=false
}if(ubs.ui.lightbox.status.opts[c].permission){ubs.ui.lightbox.status.iFramebody[c]=ubs.ui.lightbox.status.iFrame[c].contents().find("body").focus();
ubs.ui.lightbox.status.iFramedoc[c]=ubs.ui.lightbox.status.iFrame[c].contents().find("#doc");
ubs.ui.lightbox.status.iFramecont[c]=ubs.ui.lightbox.status.iFrame[c].contents().find("#content");
if(ubs.ui.lightbox.status.opts[c].close){var b=a.cookie("overlay_closebutton_text");
if(!b){b=ubs.ui.lightbox.status.iFrame[c][0].contentWindow.overlay_closebutton_text
}if(b){ubs.ui.lightbox.status.opts[c].close_description=b;
a("#cboxClose").find("span span").html(b+"&nbsp; X")
}if(!(ubs.util.checkBrowser("ie",7,true))){var d=a("<a href='#' class='show-onfocus hidden'>"+ubs.ui.lightbox.status.opts[c].close_description+"</a>");
d.click(function(){a.colorbox.close()
});
ubs.ui.lightbox.status.iFramebody[c].append(d.clone(true).css("bottom",0)).prepend(d)
}}if(ubs.ui.lightbox.status.opts[c].base){ubs.ui.lightbox.status.iFrame[c].contents().find("head").append("<base target="+ubs.ui.lightbox.status.opts[c].base+"/>")
}if(ubs.ui.lightbox.status.opts[c].hp){ubs.ui.lightbox.status.iFrame[c].contents().find("body").width("auto")
}ubs.ui.lightbox.status.iFrame[c].contents().find("#nav-meta .box-overlay-language").addClass("right").parent().show();
_columnHeightAdjust(ubs.ui.lightbox.status.iFrame[c].contents().find("#content .parsys:first > .columncontrol"));
if(ubs.ui.lightbox.status.iFramecont[c].length>0){ubs.ui.lightbox.status.iwidth[c]=ubs.ui.lightbox.status.iFramecont[c].width()+40
}else{ubs.ui.lightbox.status.iwidth[c]=ubs.ui.lightbox.status.iFramedoc[c].innerWidth()
}if(ubs.ui.lightbox.status.opts[c].pf||ubs.ui.lightbox.status.opts[c].hp){ubs.ui.lightbox.status.iFramebody[c].width("auto");
ubs.ui.lightbox.status.iFramecont[c].width("auto");
ubs.ui.lightbox.status.iwidth[c]=false
}if(ubs.ui.lightbox.status.opts[c].service){ubs.ui.lightbox.status.iFramebody[c].width("auto");
ubs.ui.lightbox.status.iFramecont[c].width("auto");
ubs.ui.lightbox.status.iwidth[c]=false
}}ubs.ui.lightbox.status.iFrame[c].focus();
ubs.ui.lightbox.status.iFrame[c].load(function(){clearTimeout(ubs.ui.lightbox.status.opts[c].visibility_timer);
ubs.ui.lightbox.status.iFrame[c].css("visibility","hidden");
ubs.ui.lightbox.colorboxComplete(c);
ubs.ui.lightbox.status.iFrame[c].css("visibility","visible")
});
ubs.ui.lightbox.resizeiFrame(c)
}if(ubs.ui.lightbox.status.opts[c].pf||ubs.ui.lightbox.status.opts[c].sb){if(!(ubs.util.checkBrowser("ie",8,true))){a("body").append(ubs.ui.lightbox.status.elementClone[c]);
var h="0 -5px";
if(ubs.util.getBrowserVersion()<10){h="0 0"
}ubs.ui.lightbox.status.elementClone[c].addClass("button-active").position({my:ubs.util.getMyValuePosition((ubs.ui.lightbox.status.opts[c].direction==="rtl"?"left top":"right top"),h),at:ubs.ui.lightbox.status.opts[c].direction==="rtl"?"left top":"right top",of:ubs.ui.lightbox.status.parent[c],collision:"none"})
}}if(ubs.ui.lightbox.status.opts[c].iframe&&ubs.ui.lightbox.status.opts[c].permission){if(ubs.ui.lightbox.status.iFramedoc[c].height()>a("html").height()&&!(ubs.ui.lightbox.status.opts[c].pf||ubs.ui.lightbox.status.opts[c].sb)){a("#colorbox").css({"margin-top":"102px","margin-bottom":"102px"})
}if((ubs.util.ie()&&ubs.util.getBrowserVersion()>=8)){ubs.ui.lightbox.status.iFrame[c][0].contentWindow.onbeforeunload=function(){ubs.ui.lightbox.status.iFrame[c].css("visibility","hidden")
}
}else{a(ubs.ui.lightbox.status.iFrame[c][0].contentWindow).unload(function(){ubs.ui.lightbox.status.iFrame[c].css("visibility","hidden");
ubs.ui.lightbox.status.opts[c].visibility_timer=window.setTimeout(function(){ubs.ui.lightbox.status.iFrame[c].css("visibility","visible")
},ubs.ui.lightbox.status.opts[c].visibilityTimeout)
})
}}}})
})(ubs.$);
var nn=nn||{};
jQuery.extend(nn,{$:jQuery});
(function(a){nn.menu=nn.menu||{};
a.extend(nn.menu,{states:{debugMode:false,enableFoldingMenu:true,foldingMenuDelay:300,debugHelperActive:false,menuVisible:true,animateTop:false,$menu:null,$header:null,$movingDOM:null,$stickyBreakPoint:null,currentMode:"",menuCompactSize:46,menuOriginalSize:0,menuSizeDiff:0},all:function(b){if(a(b).html()){this.init(b)
}},init:function(b){this.cacheElements(b);
this.prepareHeader(b);
this.initFoldingMenu(b);
this.initStickyMenu(b)
},cacheElements:function(b){nn.menu.$menu=a("#homepagemenu > .menu",b);
nn.menu.$header=a(".grid-header",b);
nn.menu.$movingDOM=nn.menu.$menu.find(".menu__wrapper");
nn.menu.$menuContent=nn.menu.$movingDOM.find(".menu__items, .menu__news")
},initFoldingMenu:function(b){if(nn.menu.states.enableFoldingMenu&&nn.menu.$menu.length){nn.menu.$menuContent.show();
ubs.ui.heightAdjust(nn.menu.$movingDOM.find(".menu__hl--icon, .menu__hl"));
nn.menu.headerHeight=nn.menu.$header.height();
nn.menu.$menuContent.hide();
nn.menu.$movingDOM.addClass("menu-is-closed").css({position:"absolute"});
nn.menu.states.menuOriginalSize=nn.menu.$movingDOM.height();
nn.menu.$menu.height(nn.menu.states.menuOriginalSize+"px");
nn.menu.$menu.on("mouseenter focusin",nn.menu.homepagemenu.expand);
nn.menu.$menu.on("mouseleave focusout",nn.menu.homepagemenu.collapse);
nn.menu.$menuContent.addClass("is-visuallyHidden is-focusable").css({display:"block"})
}},initStickyMenu:function(e){if(nn.menu.$menu.length){var b=0;
var d=function(){var c=a(window).scrollTop();
nn.menu.$stickyBreakPoint=nn.menu.$menu.offset().top;
b=nn.menu.$stickyBreakPoint;
if(c>(b)){nn.menu.switchMenus(true)
}else{nn.menu.switchMenus(false)
}nn.menu.printDebug("scrollTop: "+c+", menuTop: "+b+", animateTop: "+nn.menu.states.animateTop)
};
d();
a(window).scroll(function(){d()
})
}},homepagemenu:{timeOutHandler:0,expand:function(c){var b=nn.menu.$menu.position().top;
if(Math.floor(b)-a(window).scrollTop()-nn.menu.headerHeight<=0){nn.menu.$movingDOM.css({top:0,bottom:"auto"})
}else{nn.menu.$movingDOM.css({top:"auto",bottom:0})
}if(c.type==="mouseenter"){nn.menu.$menuContent.css({display:"none"})
}nn.menu.$menuContent.removeClass("is-visuallyHidden is-focusable").stop().slideDown("fast",function(){nn.menu.$movingDOM.addClass("menu-is-open").removeClass("menu-is-closed")
})
},collapse:function(c,b){nn.menu.$menuContent.stop().slideUp("fast",function(){nn.menu.$movingDOM.css({top:"",bottom:""}).removeClass("menu-is-open").addClass("menu-is-closed");
nn.menu.$menuContent.addClass("is-visuallyHidden is-focusable").css({display:"block"})
})
}},switchMenus:function(b){if(b===nn.menu.states.isSticky){return false
}switch(b){case true:ubs.util.log("switchMenus: Sticky Mode ON");
nn.menu.$header.toggleClass("menu__sticky",true);
break;
case false:ubs.util.log("switchMenus: Sticky Mode OFF");
nn.menu.$header.toggleClass("menu__sticky",false);
nn.menu.toggleDebugColor("red");
break
}nn.menu.states.isSticky=b;
return true
},prepareHeader:function(){if(nn.menu.$header.length&&nn.menu.$menu.length){var b=nn.menu.$header.find(".grid-header__metaNav");
var d=nn.menu.$menu.clone();
var f=d.find("#mainNavigation");
var e=d.find(".menu__hl--icon");
nn.menu.$header.wrapInner("<div class='menu__sticky-wrapper'></div>");
nn.menu.$stickyHeaderIcon=a("<a href='#' class='"+e.attr("class")+"'>"+e.text()+"</a>");
f.after(nn.menu.$stickyHeaderIcon);
d.find(".menu__col__sticky-main").remove();
d.find(".menu__wrapper").wrap("<div class='box-overlay'><div>");
b.before(d);
b.find('[aria-labelledby="countryLabel"]').add(b.find('[aria-labelledby="languageLabel"]')).add(b.find('[aria-labelledby="contactLabel"]')).add(b.find('[aria-labelledby="mobileLabel"]')).addClass("stickyMenu__hide");
nn.menu.$stickyHeaderIcon.overlayMenu();
var c=d.find(".menu__hl");
d.css({display:"block",opacity:0});
nn.menu.$stickyHeaderIcon.next().css({display:"block"});
ubs.ui.heightAdjust(c);
c.css({display:"block"});
d.css({display:"",opacity:""});
nn.menu.$stickyHeaderIcon.next().css({display:"none"})
}},printDebug:function(b){if(!nn.menu.states.debugMode){return false
}if(!nn.menu.debugHelperActive){nn.menu.createDebugHelper()
}a("#debugHelper").html(b)
},toggleDebugColor:function(b){if(!nn.menu.states.debugMode){return false
}if(!nn.menu.debugHelperActive){nn.menu.createDebugHelper()
}a("#debugHelper").css("background-color",b)
},createDebugHelper:function(){a('<div id="debugHelper" style="position: fixed; bottom: 0; right: 0; background-color: red; width: auto; height: 50px; padding: 15px; border: 1px solid black; overflow: visible; font-size: 20px;"></div>').appendTo(a("body"));
nn.menu.debugHelperActive=true
}});
a(document).ready(function(){nn.menu.all("body:not(.cq-author)")
})
}(jQuery));
(function(a){nn.init=nn.init||{};
a.extend(nn.init,{states:{},all:function(b){if(a(b).html()){ubs.ui.accordion.standard(a(".box-accordion",b));
a("a.menu-item","#nav-topLevel-hp").overlayMenu();
a("a.select-item, #box-login > a",b).overlayMenu();
ubs.util.placeholder(a("input[placeholder], textarea[placeholder]",b));
ubs.ui.setDisclaimerCookie(a('form[data-disclaimer="set"]',b));
ubs.ui.checkDisclaimerCookie(a('a[data-disclaimer="check"]',b));
a(".ticker",b).ticker();
ubs.ui.lightbox.init(a(".lightBox",b));
a("#footer a.button-icon",b).toolTip({width:215,offsetLeft:-50});
nn.init.smoothScrolling();
a(".print",b).click(function(){window.print();
return false
});
ubs.func.decodeMailto(a('a[data-nn-init="email-obfuscation"]',b));
if(!a("body").hasClass("cq-report-mode")){nn.init.flexslider(b)
}else{nn.init.sliderReportMode(b)
}nn.init.sliderVerticalAlignment(b);
a(".promotionteaser__authorInfo",b).click(function(){var c=a(this).find(".promotionteaser__detailInfo");
if(c.is(":hidden")){c.show()
}else{c.hide()
}})
}},smoothScrolling:function(){var c=a("#header");
var b=c.outerHeight();
a("a[href^=#]:not([href='#'])").on("click",function(h){var d=a(this).attr("href");
var f=0;
if(d!=="#top"){f=b;
if(!c.hasClass("menu__sticky")){var i=c.outerHeight();
f+=i
}}var g=parseInt(a(d).offset().top,10)-f;
ubs.util.log("Scrolling to "+g);
a("body, html").animate({scrollTop:g+"px"},"slow","linear");
h.preventDefault()
})
},flexslider:function(b){a("ul.promotionstage__elements > li.promotionstage__element").removeClass("is-hidden");
a(".promotionstage",b).each(function(){var h=a(this).attr("data-nn-params");
var c=a(this).find(".promotionteaser__stageControl");
var f=c.find(".promotionteaser__playPause");
var g=c.find(".promotionteaser__tabUl li");
var e={animation:"slide",touch:true,keyboard:true,directionNav:false,selector:"ul.promotionstage__elements > li.promotionstage__element",pauseOnHover:true,pausePlay:true,pauseOnAction:true,playPauseCustom:f,controlsContainer:c,start:function(k){a("body").removeClass("loading");
c.find(".flex-pauseplay").hide();
var j=k.find(".promotionteaser__tabLi").first().find(" > div");
var i=j.hasClass("promotionteaser__stageControl--dark");
c.toggleClass("promotionteaser__stageControl--dark",i);
c.toggleClass("promotionteaser__stageControl--bright",!i);
k.find(".promotionstage__element:not(.flex-active-slide) .promotionteaser  *:focusable").attr("tabindex","-1")
},before:function(k){var i=k.find(".promotionstage__element:not(.clone)");
var j=i.filter(".flex-active-slide");
j.find(".promotionteaser *:focusable").attr("tabindex","-1").end()
},after:function(l){if(g.length>0){g.find("a.promotionteaser__tabLink").toggleClass("promotionteaser__tabLink--active",false).attr({"aria-selected":"false"});
g.filter(".flex-active").find("a").toggleClass("promotionteaser__tabLink--active",true).attr({"aria-selected":"true"})
}var i=l.find(".promotionstage__element:not(.clone)");
var k=i.filter(".flex-active-slide");
k.find(".promotionteaser *:focusable").attr("tabindex","0");
i.attr({"aria-expanded":false,"aria-hidden":true});
k.attr({"aria-expanded":true,"aria-hidden":false});
var j=k.find(" > div").hasClass("promotionteaser__stageControl--dark");
c.toggleClass("promotionteaser__stageControl--dark",j);
c.toggleClass("promotionteaser__stageControl--bright",!j)
}};
if(g.length>0){e.manualControls=g
}if(a(this).find("li.promotionstage__element").length<=1){c.hide()
}if(typeof h==="string"&&h!==""){var d=a.parseJSON("{"+h+"}");
if(typeof d.options!=="undefined"){a.extend(e,d.options)
}}a(this).flexslider(e);
if(c.length){nn.init.applyAriaRolesToNavigation(c.find("ul.promotionteaser__tabUl"),a(this))
}c.on("pausePlayClick",function(j,i,k){ubs.util.log("Slider changed mode to "+(k==="pause"?"play":"pause"));
i.find("> span").html(k).attr("data-nn-toggle",k)
})
}).on("focus","*",function(c){if(a(this).parents(".flex-active-slide").length===0){}})
},sliderReportMode:function(b){a("ul.promotionstage__elements > li.promotionstage__element",b).removeClass("is-hidden");
a(".promotionteaser__stageControl").hide()
},applyAriaRolesToNavigation:function(b,e){if(!b.length){return false
}var d=e.find(".promotionstage__element:not(.clone)");
b.attr("role","tablist");
var c=new Date().getTime();
b.find("li a").each(function(i,f){var h="ui-id-"+(c+i);
var g="tabs-"+(c+i);
a(this).attr({role:"tab","aria-labelledby":h,"aria-controls":g,"aria-selected":(i===0),id:h});
d.eq(i).attr({id:g,role:"tabpanel","aria-expanded":(i===0),"aria-hidden":(i>0)})
})
},sliderVerticalAlignment:function(b){a(".promotionstage",b).each(function(){a(this).find(".promotionteaser__valign--center").each(function(){var c=a(this).find(".promotionteaser__content");
var d=Math.round(parseInt(a(this).height(),10));
var e=Math.round(parseInt(c.outerHeight(),10));
if(e<d){var f=Math.round((d-e)/2);
c.css({bottom:"",top:f})
}})
})
}});
a(document).ready(function(){nn.init.all("body")
})
}(jQuery));
(function(a){nn.tracking=nn.tracking||{};
a.extend(nn.tracking,{states:{debugMode:false},all:function(b){if(a(b).html()){nn.tracking.initTracking(b)
}},initTracking:function(e){ubs.util.log("tracking active: "+ubs.func.cookieHandling.cookiePrivacySetting[ubs.func.cookieHandling.cookieCategorySettings.analytics.privacySetting]);
if(window.sc_trackingServer===undefined||!ubs.func.cookieHandling.cookiePrivacySetting[ubs.func.cookieHandling.cookieCategorySettings.analytics.privacySetting]){return
}a.ajax({url:"/js/s_code.js",dataType:"script",cache:true,async:false});
a(window).one("scroll",nn.tracking.scrollTracking);
var d="a";
a(".promotionstage li.promotionstage__element",e).find(d).toggleClass("promotion-tracking-item",true).end().on("click",d,nn.tracking.promotionsTracking);
a("#header, #corporatenewsarea, #homepagemenu, #content, #footer, #disclaimer",e).on("click","a:not(.promotion-tracking-item)",nn.tracking.linkTracking);
if(a("#RatingForm, #recommendForm").length===0&&(typeof sc_donottrackpageviews==="undefined")){var b=s.t();
if(b){a("body").append(b)
}}},scrollTracking:function(){if(typeof window.hp_scroll_tracking!=="undefined"){window.hp_scroll_tracking()
}},promotionsTracking:function(i){if(nn.tracking.states.debugMode){i.preventDefault()
}var c=false;
var h,b="",g="";
var k=a(this).parents(".promotionteaser");
if(!k.length){return
}b=k.attr("data-nn-tracking-promotiontag")||"";
g=k.parents(".promotionstage__element").attr("data-nn-tracking-promotionposition")||"";
if(c){var j=a(this)[0];
var m=j.pathname;
var f=j.search;
var l="";
var d=m.split(".");
if(!(d.length===1||(d[0]===""&&d.length===2))){l="."+d.pop()
}h=m.replace(l,"").replace("/content/","").replace(f,"")
}else{h=k.attr("data-nn-tracking-promotionpath")||""
}if(typeof hp_promotions_tracking!=="undefined"){hp_promotions_tracking(h,b,g)
}},linkTracking:function(i){if(nn.tracking.states.debugMode){i.preventDefault()
}var k=a(this);
var c=k.attr("href");
if(typeof c==="undefined"||c==="#"){return
}var b="",d="",f="";
var g=(typeof i.delegateTarget!=="undefined"&&typeof i.delegateTarget.id!=="undefined"?i.delegateTarget.id:"other");
switch(g){case"header":d="default area";
b="header area";
break;
case"homepagemenu":d="Header area";
b="homepage menu";
i.stopPropagation();
break;
case"corporatenewsarea":d="content section";
b="news ticker";
break;
case"content":var h=k.parents(".grid-section");
if(h.length){b=h.attr("data-tracking-section")||"";
var j=h.parents(".grid-contentGroup");
if(j.length){b=j.attr("data-tracking-content-group")+" "+b
}}d="content section";
break;
case"footer":case"disclaimer":d="footer area";
b="other links";
break;
case"other":b="other links";
break
}f=a.trim(k.text())+"|"+c;
if(typeof window.hp_link_tracking!=="undefined"){window.hp_link_tracking(b,d,f)
}}});
a(document).ready(function(){nn.tracking.all("body:not(.cq-author)")
})
}(jQuery));
(function(a){nn.author=nn.author||{};
a.extend(nn.author,{states:{},all:function(b){if(a(b).html()){}}});
a(document).ready(function(){nn.author.all("body.cq-author")
})
}(jQuery));
$(document).ready(function(){var c="/content/dam/static/worldmap/";
function b(){var g=$("#globalMapDefault");
g.attr("src",c+"assets/images/Worldmap_475x928.gif");
$("map area").on("mouseover",e);
$("map area").on("click",d);
$(".map_overlay").on("click",f)
}function e(j){j.preventDefault();
var i=j.currentTarget.id;
var g=j.currentTarget;
var h=$("#globalMapDefault");
switch(i){case"map_america":h.attr("src",c+"assets/images/Worldmap_Highlight_North-America.gif");
break;
case"map_europe":h.attr("src",c+"assets/images/Worldmap_Highlight_Europa.gif");
break;
case"map_asia":h.attr("src",c+"assets/images/Worldmap_Highlight_Asia-Pacific.gif");
break;
case"map_africa":h.attr("src",c+"assets/images/Worldmap_Highlight_Middle-East_Africa.gif");
break;
case"map_latin":h.attr("src",c+"assets/images/Worldmap_Highlight_Latin-America_Caribbean.gif");
break;
case"map_switzerland":h.attr("src",c+"assets/images/Worldmap_Highlight_Switzerland.gif");
break
}}function d(j){j.preventDefault();
var i=j.currentTarget.id;
var g=j.currentTarget;
var h=$("#globalMapDefault");
$(".map_overlay").hide();
switch(i){case"map_america":h.attr("src",c+"assets/images/Worldmap_Highlight_North-America.gif");
g=$("#overlay_map_america").show();
break;
case"map_europe":h.attr("src",c+"assets/images/Worldmap_Highlight_Europa.gif");
g=$("#overlay_map_europe").show();
break;
case"map_asia":h.attr("src",c+"assets/images/Worldmap_Highlight_Asia-Pacific.gif");
g=$("#overlay_map_asia").show();
break;
case"map_africa":h.attr("src",c+"assets/images/Worldmap_Highlight_Middle-East_Africa.gif");
g=$("#overlay_map_africa").show();
break;
case"map_latin":h.attr("src",c+"assets/images/Worldmap_Highlight_Latin-America_Caribbean.gif");
g=$("#overlay_map_latin").show();
break;
case"map_switzerland":h.attr("src",c+"assets/images/Worldmap_Highlight_Switzerland.gif");
window.open(j.currentTarget.href);
break
}}function a(h){var g=$("#globalMapDefault");
g.attr("src",c+"assets/images/Worldmap_475x928.gif")
}function f(h){var g=$("#globalMapDefault");
g.attr("src",c+"assets/images/Worldmap_475x928.gif");
$(".map_overlay").hide()
}b()
});