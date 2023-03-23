"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; let exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { let protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; let ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} let IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); let getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); let Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { let record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { let result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } let previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { let state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { let delegate = context.delegate; if (delegate) { let delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; let record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { let methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; let record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; let info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { let entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { let record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { let iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { let i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { let ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); let iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { let object = Object(val), keys = []; for (let key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { let key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (let name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; let rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; let context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (let i = this.tryEntries.length - 1; i >= 0; --i) { let entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { let hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (let i = this.tryEntries.length - 1; i >= 0; --i) { let entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { let finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); let record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (let i = this.tryEntries.length - 1; i >= 0; --i) { let entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (let i = this.tryEntries.length - 1; i >= 0; --i) { let entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { let record = entry.completion; if ("throw" === record.type) { let thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { let info = gen[key](arg); let value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { let self = this, args = arguments; return new Promise(function (resolve, reject) { let gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (let i = 0; i < props.length; i++) { let descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { let key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; let prim = input[Symbol.toPrimitive]; if (prim !== undefined) { let res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
let URLcurta = /*#__PURE__*/function () {
  function URLcurta() {
    _classCallCheck(this, URLcurta);
    this.baseURL = "https://www.xXx.com/";
    this.urlMap = new Map();
  }
  _createClass(URLcurta, [{
    key: "isValidURL",
    value: function isValidURL(url) {
      try {
        new URL(url);
        return true;
      } catch (error) {
        return false;
      }
    }
  }, {
    key: "generateShortURL",
    value: function generateShortURL() {
      let shortURL = '';
      let possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      do {
        for (let i = 0; i < 6; i++) {
          shortURL += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
        }
      } while (this.urlMap.has(shortURL));
      return shortURL;
    }

  
  }, {
    key: "shortenURL",
    value: function shortenURL(longURL) {
      let customName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      if (!this.isValidURL(longURL)) {
        throw new Error($("input[name=url]").attr('placeholder', 'URL inválida').css('color', '#F6072A'));
      }
      if (this.urlMap.has(customName)) {
        throw new Error('Nome personalizado já está sendo usado');
      }
      let maxAttempts = 5;
      let attempts = 0;
      let shortURL;
      do {
        shortURL = customName ? customName : this.generateShortURL();
        attempts++;
      } while (this.urlMap.has(shortURL) && attempts < maxAttempts);
      if (attempts === maxAttempts) {
        throw new Error('Não foi possível gerar URL exclusiva');
      }
      this.urlMap.set(shortURL, longURL);
      return this.baseURL + shortURL;
    }
  }, {
    key: "expandURL",
    value: function expandURL(shortURL) {
      let urlCode = shortURL.split('/').pop();
      if (!this.urlMap.has(urlCode)) {
        throw new Error('URL não encontrada');
      }
      return this.urlMap.get(urlCode);
    }
  }]);
  return URLcurta;
}();
$(function () {
  function efeitoDigitacao(valorInput, mensagem, tempoEspera) {
    let i = 0;
    let input = $(valorInput);
    let intervalId = setInterval(function () {
      input.attr('placeholder', mensagem.substring(0, i) + (i % 2 == 0 ? "|" : ""));
      i++;
      if (i > mensagem.length) {
        clearInterval(intervalId);
        setTimeout(function () {
          let j = mensagem.length;
          let intervalId2 = setInterval(function () {
            input.attr('placeholder', mensagem.substring(0, j) + (j % 2 == 0 ? "|" : ""));
            j--;
            $("input[name=url]").attr('placeholder', 'informe o endereço do site');
            $("input[name=nome]").attr('placeholder', 'digite o nome que deseja');
            if (j < 0) {
              clearInterval(intervalId2);
            }
          }, 200);
        }, tempoEspera);
      }
    }, 200);
    return new Promise(function (resolve) {
      return setTimeout(resolve, tempoEspera + mensagem.length * 200 * 2);
    }); 
  }
  function animarInputs() {
    return _animarInputs.apply(this, arguments);
  }
  function _animarInputs() {
    _animarInputs = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return efeitoDigitacao("input[name=url]", "www.algolegal.com", 3000);
          case 2:
            _context.next = 4;
            return efeitoDigitacao("input[name=nome]", "bemlegal", 5000);
          case 4:
            animarInputs(); 
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _animarInputs.apply(this, arguments);
  }
  animarInputs();
  let endereco_ = "";
  let link_ = "";
  function atualizaValores() {
    let shortener = new URLcurta();
    try {
      let shortURL = shortener.shortenURL(endereco_, link_);
      let divUrl = document.createElement('div');
      divUrl.id = 'url';
      let divCopiar = document.createElement('div');
      divCopiar.classList.add('campo-url', 'copiar');
      let img = document.createElement('img');
      img.src = 'img/copy.svg';
      img.id = 'copia-img';
      img.alt = '';
      divCopiar.appendChild(img);
      let divLinkGerado = document.createElement('div');
      divLinkGerado.classList.add('campo-url', 'link-gerado');
      let p = document.createElement('p');
      p.textContent = shortURL;
      divLinkGerado.appendChild(p);
      $("#url").remove();
      divUrl.appendChild(divCopiar);
      divUrl.appendChild(divLinkGerado);
      let campo = document.querySelector('#campo');
      campo.appendChild(divUrl);
      $("input[name=url]").attr('placeholder', 'informe o endereço do site').css('color', '#040404');
      console.log('URL encurtada gerada:');
      $('.copiar').click(function () {
        let url = $(this).parent().find('.link-gerado p').text();

      
        let temp = $('<input>');
        $('body').append(temp);
        temp.val(url).select();
        document.execCommand('copy');
        temp.remove();

        
        $('#url .campo-url p').css('color', '#246324');
      });
    } catch (error) {
      console.error('Erro ao encurtar URL:', error.message);
    }
  }
  $('input[name=url], input[name=nome]').on({
    change: function change(evento) {
      if (evento.target.name === "url") {
        let endereco = $(this).val();
        endereco_ = endereco;
        atualizaValores();
      }
    },
    keyup: function keyup(evento) {
      if (evento.target.name === "nome") {
        let personalizar = $(this).val();
        link_ = personalizar;
        atualizaValores();
      }
    }
  });
});
