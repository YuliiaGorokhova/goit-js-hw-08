function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,v=function(){return c.Date.now()};function p(e,t,n){var o,r,i,a,u,f,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,l=t,a=e.apply(i,n)}function x(e){return l=e,u=setTimeout(j,t),c?y(e):a}function S(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=i}function j(){var e=v();if(S(e))return h(e);u=setTimeout(j,function(e){var n=t-(e-f);return s?d(n,i-(e-l)):n}(e))}function h(e){return u=void 0,p&&o?y(e):(o=r=void 0,a)}function w(){var e=v(),n=S(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return x(f);if(s)return u=setTimeout(j,t),y(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=b(t)||0,g(n)&&(c=!!n.leading,i=(s="maxWait"in n)?m(b(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=f=r=u=void 0},w.flush=function(){return void 0===u?a:h(v())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};const y={form:document.querySelector(".feedback-form"),email:document.querySelector("input"),textarea:document.querySelector("textarea"),submit:document.querySelector("button")};y.form.addEventListener("input",e(t)((function(e){const t=y.email.value,n=y.textarea.value;localStorage.setItem("feedback-form-state",JSON.stringify({email:t,message:n}))}),500)),y.form.addEventListener("submit",(function(e){e.preventDefault();const t={email:y.email.value,message:y.textarea.value};console.log(t),y.form.reset(),localStorage.removeItem("feedback-form-state"),y.email.value="",y.textarea.value=""}));const x=localStorage.getItem("feedback-form-state"),S=JSON.parse(x);S&&(y.email.value=S.email,y.textarea.value=S.message),console.log(localStorage);
//# sourceMappingURL=03-feedback.faa6fa50.js.map
