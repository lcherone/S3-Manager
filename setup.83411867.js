// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/pages/setup.vue":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _aes = _interopRequireDefault(require("crypto-js/aes"));

var _encUtf = _interopRequireDefault(require("crypto-js/enc-utf8"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  name: "setup",
  props: ['state'],
  components: {},
  data: function data() {
    return {
      form: {
        errors: {},
        values: {
          password: '',
          password_rpt: ''
        }
      }
    };
  },
  methods: {
    submit: function submit() {
      this.form.errors = {}; //

      if (!this.form.values.password) {
        this.form.errors['password'] = 'Password is a required field.';
      } else if (!this.isValidPassword(this.form.values.password)) {
        this.form.errors['password'] = '>= 8 characters, at least 1 upper & lower case and a number or special character.';
      } //


      if (!this.form.values.password_rpt) {
        this.form.errors['password_rpt'] = 'Password repeat is a required field.';
      } else if (this.form.values.password_rpt !== this.form.values.password) {
        this.form.errors['password_rpt'] = 'Passwords do not match.';
      }

      if (Object.keys(this.form.errors).length) {
        return;
      }

      var state = {
        date: new Date(),
        loading: true,
        authenticated: true,
        sidebar: {
          forced: false,
          open: true
        },
        errors: {},
        alert: {},
        form: {},
        hosts: {
          "play": {
            "url": "https://play.min.io:9000",
            "accessKey": "Q3AM3UQ867SPQQA43P2F",
            "secretKey": "zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG",
            "api": "S3v4",
            "lookup": "auto"
          } // "gcs": {
          //   "url": "https://storage.googleapis.com",
          //   "accessKey": "YOUR-ACCESS-KEY-HERE",
          //   "secretKey": "YOUR-SECRET-KEY-HERE",
          //   "api": "S3v2",
          //   "lookup": "dns"
          // },
          // "local": {
          //   "url": "http://localhost:9000",
          //   "accessKey": "",
          //   "secretKey": "",
          //   "api": "S3v4",
          //   "lookup": "auto"
          // },
          // "s3": {
          //   "url": "https://s3.amazonaws.com",
          //   "accessKey": "YOUR-ACCESS-KEY-HERE",
          //   "secretKey": "YOUR-SECRET-KEY-HERE",
          //   "api": "S3v4",
          //   "lookup": "dns"
          // }

        },
        config: {}
      }; // set into state

      for (var _i = 0, _Object$keys = Object.keys(state); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];
        this.$set(this.state, key, state[key]);
      } // encrypt and store into local storage


      localStorage.state = _aes.default.encrypt(JSON.stringify(state), this.form.values.password).toString(); //

      localStorage.auth_set = 1; // set password into state for saving

      this.$set(this.state, 'password', this.form.values.password);
      this.$router.push('/');
    },
    isValidPassword: function isValidPassword(password) {
      var re = /(?=^.{8,256}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*/;
      return re.test(password);
    }
  }
};
exports.default = _default;
        var $d158e5 = exports.default || module.exports;
      
      if (typeof $d158e5 === 'function') {
        $d158e5 = $d158e5.options;
      }
    
        /* template */
        Object.assign($d158e5, (function () {
          var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("article", { staticClass: "container-fluid pt-4 pb-5" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12 col-md-10 col-lg-8 col-xl-6 mx-auto" }, [
        _c("div", { staticClass: "jumbotron bg-white border p-5" }, [
          _c("div", { staticClass: "container-fluid text-center" }, [
            _c(
              "h1",
              { staticClass: "display-4" },
              [
                _c("fa", { attrs: { icon: "file-alt" } }),
                _vm._v(" Welcome to S3 Manager\n          ")
              ],
              1
            ),
            _vm._v(" "),
            _c("p", { staticClass: "lead" }, [
              _vm._v("An open-source, multi-server, client-side S3 manager.")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "bg-white border rounded p-4" }, [
          _c(
            "h1",
            { staticClass: "h3 pb-2 border-bottom" },
            [_c("fa", { attrs: { icon: "cogs" } }), _vm._v(" Setup\n        ")],
            1
          ),
          _vm._v(" "),
          _c("p", { staticClass: "text-center" }, [
            _vm._v(
              "\n          We securely encrypt the host connection details which are stored\n          in your browsers local storage for added security. You will be required to re-enter the password when revisiting or reloading the page.\n        "
            )
          ]),
          _vm._v(" "),
          _c(
            "p",
            {
              staticClass: "h5 text-center font-weight-bold border-bottom pb-2"
            },
            [_vm._v("Enter your desired password:")]
          ),
          _vm._v(" "),
          _c(
            "form",
            {
              attrs: { "no-validate": "" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.submit($event)
                }
              }
            },
            [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Password")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.values.password,
                      expression: "form.values.password"
                    }
                  ],
                  class: [
                    "form-control",
                    { "is-invalid": _vm.form.errors.password }
                  ],
                  attrs: {
                    type: "password",
                    placeholder: "Enter a secure password…"
                  },
                  domProps: { value: _vm.form.values.password },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form.values, "password", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.form.errors.password
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(_vm._s(_vm.form.errors.password))
                    ])
                  : _vm._e(),
                _vm._v(" "),
                !_vm.form.errors.password
                  ? _c("div", { staticClass: "text-muted small mt-1" }, [
                      _vm._v(
                        ">= 8 characters, at least 1 upper & lower case and a number or special character."
                      )
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Repeat Password")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.values.password_rpt,
                      expression: "form.values.password_rpt"
                    }
                  ],
                  class: [
                    "form-control",
                    { "is-invalid": _vm.form.errors.password_rpt }
                  ],
                  attrs: {
                    type: "password",
                    placeholder: "Repeat your password…"
                  },
                  domProps: { value: _vm.form.values.password_rpt },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form.values,
                        "password_rpt",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _vm.form.errors.password_rpt
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(_vm._s(_vm.form.errors.password_rpt))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group text-right" }, [
                _c(
                  "button",
                  { staticClass: "btn btn-success", attrs: { type: "submit" } },
                  [
                    _c("fa", { attrs: { icon: "sign-in-alt" } }),
                    _vm._v(" Login\n            ")
                  ],
                  1
                )
              ])
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: "data-v-d158e5",
            functional: undefined
          };
        })());
      
    /* hot reload */
    (function () {
      if (module.hot) {
        var api = require('vue-hot-reload-api');
        api.install(require('vue'));
        if (api.compatible) {
          module.hot.accept();
          if (!module.hot.data) {
            api.createRecord('$d158e5', $d158e5);
          } else {
            api.reload('$d158e5', $d158e5);
          }
        }

        
        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
      }
    })();
},{"crypto-js/aes":"node_modules/crypto-js/aes.js","crypto-js/enc-utf8":"node_modules/crypto-js/enc-utf8.js","_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js","vue-hot-reload-api":"node_modules/vue-hot-reload-api/dist/index.js","vue":"node_modules/vue/dist/vue.runtime.esm.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "35465" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/setup.83411867.js.map