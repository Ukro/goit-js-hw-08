function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,b=function(){return l.Date.now()};function p(e,t,n){var o,r,i,a,f,u,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function h(e){return c=e,f=setTimeout(O,t),l?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function O(){var e=b();if(j(e))return S(e);f=setTimeout(O,function(e){var n=t-(e-u);return s?m(n,i-(e-c)):n}(e))}function S(e){return f=void 0,p&&o?y(e):(o=r=void 0,a)}function w(){var e=b(),n=j(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return h(u);if(s)return f=setTimeout(O,t),y(u)}return void 0===f&&(f=setTimeout(O,t)),a}return t=g(t)||0,v(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(g(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},w.flush=function(){return void 0===f?a:S(b())},w}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector("form"),h=document.querySelector('button[type="submit"]');function j(){const e=y.elements;let t=!0;for(let n=0;n<e.length;n++){const o=e[n];if("submit"!==o.type&&""===o.value.trim()){t=!1;break}}h.disabled=!t}!function(){let e=localStorage.getItem("feedback-form-state");e&&(e=JSON.parse(e),Object.entries(e).forEach((([e,t])=>{y.elements[e].value=t})));j()}(),y.addEventListener("submit",(function(e){e.preventDefault();const t=new FormData(y),n={};t.forEach(((e,t)=>n[t]=e)),console.log(n),y.reset(),localStorage.removeItem("feedback-form-state"),h.disabled=!0})),y.addEventListener("input",e(t)((function(e){let t=localStorage.getItem("feedback-form-state");t=t?JSON.parse(t):{};t[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t)),j()}),500));
//# sourceMappingURL=03-feedback.e7b7101c.js.map
