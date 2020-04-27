!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){t.exports={list:"EmailsList_list__3tqcO",listItem:"EmailsList_listItem__U3Osz",isValid:"EmailsList_isValid__1y6Kl",isInvalid:"EmailsList_isInvalid__2OTjr",listItemRemove:"EmailsList_listItemRemove__3_zWJ",isPlaceholder:"EmailsList_isPlaceholder__2ni_6"}},function(t,e,n){t.exports={container:"EmailsInput_container__YcJ04"}},function(t,e,n){t.exports={input:"Input_input__ZoxJJ"}},function(t,e){t.exports='<svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0.8L7.2 0L4 3.2L0.8 0L0 0.8L3.2 4L0 7.2L0.8 8L4 4.8L7.2 8L8 7.2L4.8 4L8 0.8Z" fill="currentColor"></path></svg>'},function(t,e){Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){for(var e=this;e;){if(e.matches(t))return e;e=e.parentElement}return null})},function(t,e,n){"use strict";n.r(e);n(6),n(4);var i,o,r=n(1),s=n(2),p=function(){return(p=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},l=function(){function t(t,e){void 0===e&&(e={}),this.rootEl=t,this.props=e,this.onBeforeInit(),this.render(),this.onAfterInit()}return Object.defineProperty(t.prototype,"template",{get:function(){return""},enumerable:!0,configurable:!0}),t.prototype.onBeforeInit=function(){},t.prototype.onAfterInit=function(){},t.prototype.render=function(){this.rootEl.innerHTML=this.template},t.prototype.onBeforeUpdate=function(){},t.prototype.onAfterUpdate=function(){},t.prototype.update=function(t){this.props=p(p({},this.props),t),this.onBeforeUpdate(),this.render(),this.onAfterUpdate()},t}(),a=function(t){return/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(t)},u=(i=0,function(){return i++}),c=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),f=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),m=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return f(e,t),e.prototype.onAfterInit=function(){this.inputElement=this.rootEl.querySelector(".js-input"),this.inputElement.addEventListener("keydown",this.onKeyUp.bind(this)),this.inputElement.addEventListener("input",this.onInput.bind(this)),this.inputElement.addEventListener("blur",this.onBlur.bind(this)),this.inputElement.addEventListener("paste",this.onPaste.bind(this))},e.prototype.focus=function(){this.inputElement.focus()},e.prototype.onAddEmail=function(){var t=this.inputElement.value.trim();","===t[t.length-1]&&(t=t.slice(0,-1)),t&&this.props.onEnter(t),this.inputElement.value=""},e.prototype.onInput=function(t){","===t.data&&(this.onAddEmail(),t.preventDefault())},e.prototype.onKeyUp=function(t){"Enter"!==t.key&&","!==t.key||(this.onAddEmail(),t.preventDefault(),t.stopPropagation()),"Enter"===t.key&&c&&this.inputElement.blur()},e.prototype.onBlur=function(){this.onAddEmail()},e.prototype.onPaste=function(t){t.stopPropagation(),t.preventDefault();var e=(t.clipboardData||window.clipboardData).getData("Text"),n=e&&e.replace(/\s+/g,"");n&&this.props.onEnter(n.split(","))},Object.defineProperty(e.prototype,"template",{get:function(){return'<input class="js-input '+s.input+'" type="text" id="'+this.props.id+'" />'},enumerable:!0,configurable:!0}),e}(l),h=n(0),d=n(3),y=n.n(d),E=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),b=function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var i=Array(t),o=0;for(e=0;e<n;e++)for(var r=arguments[e],s=0,p=r.length;s<p;s++,o++)i[o]=r[s];return i},v=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.subscribers=[],e}return E(e,t),e.handleEmails=function(t){return[].concat(t).filter((function(t){return t})).map((function(t){return{email:t,isValid:a(t)}}))},e.prototype.setEmailsFromProps=function(){this.emails=e.handleEmails(this.props.emails)},e.prototype.onBeforeInit=function(){this.setEmailsFromProps()},e.prototype.onAfterInit=function(){this.rootEl.addEventListener("click",this.handleClick.bind(this))},e.prototype.onBeforeUpdate=function(){this.setEmailsFromProps()},e.prototype.onAfterUpdate=function(){this.publishChange()},e.prototype.handleClick=function(t){var e=t.target.closest(".js-list-item");if(t.target.closest(".js-remove")){var n=Array.prototype.slice.call(e.parentElement.children).indexOf(e);this.removeEmailFromState(n),this.removeEmailFromHTML(n),this.publishChange()}e&&t.stopImmediatePropagation()},e.prototype.addEmails=function(t){var n=e.handleEmails(t);this.appendEmailsToState(n),this.appendEmailsToHTML(n),this.publishChange()},e.prototype.getAllEmails=function(){return this.emails.map((function(t){return t.email}))},e.prototype.replaceEmails=function(t){this.update({emails:t})},e.prototype.subscribe=function(t){this.subscribers.push(t)},e.prototype.unSubscribe=function(t){var e=this.subscribers.findIndex((function(e){return e===t}));e>=0&&this.subscribers.splice(e,1)},e.prototype.publishChange=function(){var t=this;this.subscribers.forEach((function(e){e(t.getAllEmails())}))},e.prototype.appendEmailsToState=function(t){this.emails=b(this.emails,t)},e.prototype.appendEmailsToHTML=function(t){this.rootEl.querySelector(".js-placeholder").insertAdjacentHTML("beforebegin",e.getListTemplate(t))},e.prototype.removeEmailFromState=function(t){this.emails.splice(t,1)},e.prototype.removeEmailFromHTML=function(t){this.rootEl.querySelector(".js-list").removeChild(this.rootEl.querySelectorAll(".js-list-item")[t])},e.getListTemplate=function(t){return t.map((function(t,e){var n=t.email,i=t.isValid;return'\n      <div class="js-list-item '+h.listItem+" "+(i?h.isValid:h.isInvalid)+'">\n        '+n+' <button type="button" class="js-remove '+h.listItemRemove+'">'+y.a+"</button>\n      </div>"})).join("")},Object.defineProperty(e.prototype,"template",{get:function(){return'\n      <div class="js-list '+h.list+'">\n        '+e.getListTemplate(this.emails)+'\n        <label for="'+this.props.id+'" class="js-placeholder '+h.listItem+" "+h.isPlaceholder+'">add more people…</label>\n      </div>'},enumerable:!0,configurable:!0}),e}(l),_=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),g=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return _(e,t),e.prototype.onAfterInit=function(){var t=this,e=this.rootEl.querySelector(".js-input"),n=this.rootEl.querySelector(".js-emailsList"),i="emailInput_"+u();this.input=new m(e,{onEnter:this.onInputEnter.bind(this),id:i}),this.emailList=new v(n,{emails:this.props.initialEmails||[],id:i}),this.rootEl.addEventListener("click",(function(){return t.input.focus()}))},e.prototype.onInputEnter=function(t){this.emailList.addEmails(t)},e.prototype.getAllEmails=function(){return this.emailList.getAllEmails()},e.prototype.replaceEmails=function(t){return this.emailList.replaceEmails(t)},e.prototype.subscribe=function(t){this.emailList.subscribe(t)},e.prototype.unSubscribe=function(t){this.emailList.unSubscribe(t)},Object.defineProperty(e.prototype,"template",{get:function(){return'\n      <div class="'+r.container+'">\n        <div class="js-emailsList"></div>\n        <div class="js-input"></div>\n      </div>\n    '},enumerable:!0,configurable:!0}),e}(l);window.EmailsInput=function(t,e){return new g(t,e)}},function(t,e){}]);