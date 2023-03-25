(()=>{"use strict";var e={formSelector:".pop-up__form",inputSelector:".pop-up__input",submitButtonSelector:".pop-up__save-button",inputErrorClass:"pop-up__input_type_error",errorClass:"pop-up__input-error",showErrorText:"pop-up__input-error_active"},t={cardElement:".card",cardImage:".card__image",cardTitle:".card__title",cardLike:".card__like-button",cardTrash:".card__trash-button",cardLikeCounter:".card__like-counter"};const r="a55c1215526bb145d9cb.png";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var i=function(){function e(t,r,n,o){var i=t.data,a=t.handleCardClick,u=t.handleLikeClick,c=t.handleDeleteClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._cardSelector=r,this._user=o,this._handleCardClick=a,this._handleLikeClick=u,this._handleDeleteClick=c,this._cardElement=n.cardElement,this._cardImage=n.cardImage,this._cardTitle=n.cardTitle,this._cardLike=n.cardLike,this._cardTrash=n.cardTrash,this._cardLikeCounter=n.cardLikeCounter,this._cardInfo=i,this._cardName=i.name,this._cardLink=i.link,this._cardId=i.cardId,this._cardOwner=i.owner,this._cardLikes=i.likes}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(this._cardElement).cloneNode(!0)}},{key:"generateCard",value:function(){var e=this;this._element=this._getTemplate(),this._cardImage=this._element.querySelector(this._cardImage),this._cardImage.src=this._cardLink,this._cardImage.alt=this._cardName,this._element.querySelector(this._cardTitle).textContent=this._cardName,this._likeCounter=this._element.querySelector(this._cardLikeCounter),this._likeCounter.textContent=this._cardLikes.length,this._cardImage.onerror=function(){e._cardImage.src=r,e._cardLink=r};var t=this._element.querySelector(this._cardLike),n=this._element.querySelector(this._cardTrash);return this._likes=Array.from(this._cardLikes).map((function(e){return e._id})),this._likes.includes(this._user._id)?t.classList.add("card__like-button_active"):t.classList.remove("card__like-button_active"),t.addEventListener("click",(function(){e._handleLikeClick(e._cardInfo,e._likes,e._user,t,e._likeCounter)})),this._cardOwner._id===this._user._id?n.addEventListener("click",(function(){e._handleDeleteClick(e._cardId)})):n.remove(),this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._cardName,e._cardLink)}))}},{key:"removeCard",value:function(){this._element.remove(),this._element=null}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==a(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===a(o)?o:String(o)),n)}var o}var c=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._validationSet=t,this._form=r,this._inputList=Array.from(this._form.querySelectorAll(t.inputSelector)),this._submitButton=this._form.querySelector(t.submitButtonSelector)}var t,r;return t=e,(r=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this.toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.toggleButtonState()}))}))}},{key:"_showInputError",value:function(e,t){var r=this._form.querySelector("#".concat(e.name,"-error"));e.classList.add(this._validationSet.inputErrorClass),r.textContent=t}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector("#".concat(e.name,"-error"));e.classList.remove(this._validationSet.inputErrorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?this._submitButton.setAttribute("disabled",!0):this._submitButton.removeAttribute("disabled")}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&u(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==l(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===l(o)?o:String(o)),n)}var o}var f=function(){function e(t){var r=t.userName,n=t.userJob,o=t.userAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(r),this._userJob=document.querySelector(n),this._userAvatar=document.querySelector(o)}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,job:this._userJob.textContent}}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userJob.textContent=e.about,this._userAvatar.src=e.avatar,this._user=e}},{key:"getUser",value:function(){return this._user}}])&&s(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==p(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===p(o)?o:String(o)),n)}var o}var d=function(){function e(t,r){var n=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=n,this._container=r}var t,r;return t=e,(r=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&y(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==h(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===h(o)?o:String(o)),n)}var o}var m=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlayClose=this._handleOverlayClose.bind(this)}var t,r;return t=e,(r=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOverlayClose",value:function(e){e.target===e.currentTarget&&this.close()}},{key:"open",value:function(){this._popup.classList.add("pop-up_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("pop-up_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".pop-up__close-button").addEventListener("click",(function(){e.close()})),this._popup.addEventListener("mousedown",this._handleOverlayClose)}}])&&v(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==_(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===_(o)?o:String(o)),n)}var o}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},k.apply(this,arguments)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(n);if(o){var r=w(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return S(e)}(this,e)});function a(e,t,r){var n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(o=i.call(this,e))._popupImage=t,o._popupImageCaption=r,k((n=S(o),w(a.prototype)),"setEventListeners",n).call(n),o}return t=a,(r=[{key:"open",value:function(e,t){k(w(a.prototype),"open",this).call(this),this._popupImage.src=t,this._popupImage.alt=e,this._popupImageCaption.textContent=e}}])&&b(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(m);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function j(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==O(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===O(o)?o:String(o)),n)}var o}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},C.apply(this,arguments)}function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(n);if(o){var r=L(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function a(e,t){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,e))._popup=document.querySelector(e),r._form=r._popup.querySelector(".pop-up__form"),r._handleFormSubmit=t,r.setEventListeners(),r}return t=a,(r=[{key:"_getInputValues",value:function(){return Array.from(this._form.querySelectorAll(".pop-up__input")).map((function(e){return e.value}))}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())})),C(L(a.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){this._form.reset(),C(L(a.prototype),"close",this).call(this)}}])&&j(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(m);function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function R(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==T(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==T(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===T(o)?o:String(o)),n)}var o}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},q.apply(this,arguments)}function U(e,t){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},U(e,t)}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&U(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(n);if(o){var r=D(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===T(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popup=document.querySelector(e),t._form=t._popup.querySelector(".pop-up__form"),t}return t=a,(r=[{key:"setEventListeners",value:function(){var e=this;q(D(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit()}))}},{key:"setSubmitHandler",value:function(e){this._handleFormSubmit=e}}])&&R(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(m);function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function B(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==A(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==A(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===A(o)?o:String(o)),n)}var o}var N=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._serverUrl=t.serverUrl,this._headers=t.headers}var t,r;return t=e,(r=[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так, ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch(this._serverUrl+"/cards",{method:"GET",headers:this._headers}).then(this._getResponseData)}},{key:"getUserInfo",value:function(){return fetch(this._serverUrl+"/users/me",{method:"GET",headers:this._headers}).then(this._getResponseData)}},{key:"getInitialData",value:function(){return Promise.all([this.getInitialCards(),this.getUserInfo()])}},{key:"setUserInfo",value:function(e,t){return fetch(this._serverUrl+"/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._getResponseData)}},{key:"createUserInfo",value:function(e,t){return fetch(this._serverUrl+"/cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._getResponseData)}},{key:"deleteCard",value:function(e){return fetch(this._serverUrl+"/cards/"+e,{method:"DELETE",headers:this._headers}).then(this._getResponseData)}},{key:"setCardLike",value:function(e){return fetch(this._serverUrl+"/cards/likes/"+e,{method:"PUT",headers:this._headers}).then(this._getResponseData)}},{key:"deleteCardLike",value:function(e){return fetch(this._serverUrl+"/cards/likes/"+e,{method:"DELETE",headers:this._headers}).then(this._getResponseData)}},{key:"updateAvatar",value:function(e){return fetch(this._serverUrl+"/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._getResponseData)}}])&&B(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function V(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(e,t)||function(e,t){if(e){if("string"==typeof e)return J(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?J(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var F=document.querySelector(".cards"),H=document.querySelector(".pop-up_type_edit-profile").querySelector(".pop-up__form"),G=document.querySelector(".profile__edit-button"),M=document.querySelector(".profile__add-button"),z=document.querySelector(".pop-up__form_type_new-image"),$=document.querySelector(".pop-up_type_new-avatar"),K=document.querySelector(".profile__cover"),Q=document.querySelector(".pop-up__save-button_type_new-avatar"),W=document.querySelector(".pop-up__save-button_type_edit-profile"),X=document.querySelector(".pop-up__scale-image"),Y=document.querySelector(".pop-up__image-description"),Z=document.querySelectorAll(".pop-up__input"),ee=new c(e,H),te=new c(e,z),re=new c(e,$),ne=new N({serverUrl:"https://mesto.nomoreparties.co/v1/cohort-61",headers:{authorization:"8e6df19e-255a-4130-b10d-a123ccd744e8","Content-Type":"application/json"}});ne.getInitialData().then((function(e){var t=V(e,2),r=t[0],n=t[1];le.setUserInfo(n),ce.renderItems(r.reverse())})).catch((function(e){console.log("Ошибка: ".concat(e,"!"))}));var oe=new I(".pop-up_type_edit-profile",(function(e){W.textContent="Сохранение...";var t=V(e,2),r=t[0],n=t[1];ne.setUserInfo(r,n).then((function(e){le.setUserInfo(e),oe.close()})).catch((function(e){console.log("Ошибка: ".concat(e,"!"))})).finally((function(){W.textContent="Сохранить"}))})),ie=new I(".pop-up_type_new-image",(function(e){var t={},r=V(e,2);t.name=r[0],t.link=r[1],ne.createUserInfo(t.name,t.link).then((function(e){var t=fe(e);ce.addItem(t),ie.close()})).catch((function(e){console.log("Ошибка: ".concat(e,"!"))}))})),ae=new E(".pop-up_type_full-screen-image",X,Y),ue=new I(".pop-up_type_new-avatar",(function(e){Q.textContent="Сохранение...";var t=V(e,1)[0];ne.updateAvatar(t).then((function(e){le.setUserInfo(e),ue.close()})).catch((function(e){console.log("Ошибка: ".concat(e,"!"))})).finally((function(){Q.textContent="Сохранить"}))})),ce=new d({renderer:function(e){ce.addItem(fe(e))}},F),le=new f({userName:".profile__name",userJob:".profile__job",userAvatar:".profile__avatar"}),se=new x(".pop-up_type_delete-confirm"),fe=function(e){var r=new i({data:{name:e.name,link:e.link,cardId:e._id,owner:e.owner,likes:e.likes},handleCardClick:function(e,t){ae.open(e,t)},handleLikeClick:function(e,t,r,n,o){var i=t;i.includes(r._id)?ne.deleteCardLike(e.cardId).then((function(e){n.classList.remove("card__like-button_active"),i.pop(r._id),o.textContent=e.likes.length})).catch((function(e){console.log("Ошибка: ".concat(e,"!"))})):ne.setCardLike(e.cardId).then((function(e){n.classList.add("card__like-button_active"),i.push(r._id),o.textContent=e.likes.length})).catch((function(e){console.log("Ошибка: ".concat(e,"!"))}))},handleDeleteClick:function(e){se.open(),se.setSubmitHandler((function(){ne.deleteCard(e).then((function(){se.close(),r.removeCard()})).catch((function(e){console.log("Ошибка: ".concat(e,"!"))}))}))}},"#place",t,le.getUser());return r.generateCard()};ee.enableValidation(),te.enableValidation(),re.enableValidation(),G.addEventListener("click",(function(){ee.toggleButtonState(),ee.resetValidation(),oe.open();var e=V(Z,2),t=e[0],r=e[1],n=le.getUserInfo(),o=[n.name,n.job];t.value=o[0],r.value=o[1]})),M.addEventListener("click",(function(){te.toggleButtonState(),te.resetValidation(),ie.open()})),K.addEventListener("click",(function(){re.toggleButtonState(),ue.open(),re.resetValidation()})),se.setEventListeners()})();