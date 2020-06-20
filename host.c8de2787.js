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
})({"src/components/host/buckets.vue":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _aes = _interopRequireDefault(require("crypto-js/aes"));

var _encUtf = _interopRequireDefault(require("crypto-js/enc-utf8"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  props: ['state'],
  watch: {
    'state.host': function () {
      var _stateHost = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(value) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!value) {
                  _context.next = 3;
                  break;
                }

                _context.next = 3;
                return this.listBuckets();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function stateHost(_x) {
        return _stateHost.apply(this, arguments);
      }

      return stateHost;
    }()
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!_this.state.host.client) {
                _context2.next = 3;
                break;
              }

              _context2.next = 3;
              return _this.listBuckets();

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  methods: {
    listBuckets: function listBuckets() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (_this2.state.host.client) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                console.log('buckets:listBuckets', _this2.state.host); // this.$set(host, 'bucket', this.bucket)
                // this.$set(host, 'prefix', this.prefix)

                _context3.prev = 3;
                _context3.t0 = _this2;
                _context3.t1 = _this2.state.host;
                _context3.next = 8;
                return _this2.state.host.client.listBuckets();

              case 8:
                _context3.t2 = _context3.sent;

                _context3.t0.$set.call(_context3.t0, _context3.t1, 'buckets', _context3.t2);

                _context3.next = 16;
                break;

              case 12:
                _context3.prev = 12;
                _context3.t3 = _context3["catch"](3);

                _this2.$set(_this2.state.host, 'buckets', []);

                _this2.$set(_this2.state.host, 'error', _context3.t3.message);

              case 16:
                _this2.$set(_this2.state, 'loading', false); //   // encrypt and store into local storage
                //   let state = JSON.parse(JSON.stringify(this.state))
                //   delete state.password
                //   delete state.host
                //   localStorage.state = CryptoAES.encrypt(JSON.stringify(state), this.state.password).toString()


              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[3, 12]]);
      }))();
    }
  }
};
exports.default = _default;
        var $ed79ca = exports.default || module.exports;
      
      if (typeof $ed79ca === 'function') {
        $ed79ca = $ed79ca.options;
      }
    
        /* template */
        Object.assign($ed79ca, (function () {
          var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.state.host
    ? _c("div", [
        _c("section", [
          _c("h1", { staticClass: "page-header" }, [_vm._v("Buckets")]),
          _vm._v(" "),
          _c("div", { staticClass: "mt-2" }, [
            _c(
              "div",
              {
                staticClass:
                  "bg-white table-responsive border border-top-0 rounded"
              },
              [
                _c("table", { staticClass: "table table-sm" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.state.host.buckets, function(item, index) {
                      return _c("tr", { key: index }, [
                        _c("th", { attrs: { scope: "row" } }, [
                          _vm._v(_vm._s(item.name))
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm._f("date_format")(item.creationDate))
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "text-right" },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "btn btn-xxs btn-outline-success",
                                attrs: {
                                  to:
                                    "/host/" +
                                    _vm.state.host.name +
                                    "/" +
                                    item.name
                                }
                              },
                              [_vm._v("Open")]
                            )
                          ],
                          1
                        )
                      ])
                    }),
                    0
                  )
                ])
              ]
            )
          ])
        ])
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c(
          "th",
          { staticClass: "p-2", attrs: { scope: "col", width: "30%" } },
          [_vm._v("Name")]
        ),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "p-2", attrs: { scope: "col", width: "50%" } },
          [_vm._v("Created")]
        ),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col", width: "10%" } })
      ])
    ])
  }
]
render._withStripped = true

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: "data-v-ed79ca",
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
            api.createRecord('$ed79ca', $ed79ca);
          } else {
            api.reload('$ed79ca', $ed79ca);
          }
        }

        
        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
      }
    })();
},{"crypto-js/aes":"node_modules/crypto-js/aes.js","crypto-js/enc-utf8":"node_modules/crypto-js/enc-utf8.js","_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js","vue-hot-reload-api":"node_modules/vue-hot-reload-api/dist/index.js","vue":"node_modules/vue/dist/vue.runtime.esm.js"}],"src/components/host/objects.vue":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _aes = _interopRequireDefault(require("crypto-js/aes"));

var _encUtf = _interopRequireDefault(require("crypto-js/enc-utf8"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _mime = require('mime-types');

var _default = {
  props: ['state'],
  data: function data() {
    return {
      alert: {},
      host: {},
      paging: {
        page: 1,
        pages: [],
        perPage: 10,
        totalItems: 0,
        totalItemsFiltered: 0,
        next: function next() {
          this.page++;
        },
        back: function back() {
          --this.page;
        }
      },
      objects: [],
      bucketFilter: '',
      objectFilter: ''
    };
  },
  watch: {
    'state.host.bucket': function () {
      var _stateHostBucket = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(newVal) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('bucket: listObjects', newVal);
                _context.next = 3;
                return this.listObjects(newVal, '');

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function stateHostBucket(_x) {
        return _stateHostBucket.apply(this, arguments);
      }

      return stateHostBucket;
    }(),
    'state.host.prefix': function () {
      var _stateHostPrefix = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(newVal) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log('prefix: listObjects', newVal);
                _context2.next = 3;
                return this.listObjects(this.state.host.bucket, newVal);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function stateHostPrefix(_x2) {
        return _stateHostPrefix.apply(this, arguments);
      }

      return stateHostPrefix;
    }(),
    objects: function objects() {
      var _this = this;

      //
      this.paging.pages = [];
      this.paging.totalItems = this.objects.length; //

      for (var i = 1; i <= Math.ceil(this.paging.totalItemsFiltered = this.objects.filter(function (item) {
        item.bucket = _this.state.host.bucket;
        return item.prefix || item.name && item.name.toLowerCase().indexOf(_this.objectFilter.toLowerCase()) > -1;
      }).length / this.paging.perPage); i++) {
        this.paging.pages.push(i);
      }
    },
    objectFilter: function objectFilter() {
      this.paging.page = 1;
    }
  },
  computed: {
    filteredObjects: function filteredObjects() {
      var _this2 = this;

      var objects = this.objects.filter(function (item) {
        item.bucket = _this2.state.host.bucket;
        return item.prefix || item.name && item.name.toLowerCase().indexOf(_this2.objectFilter.toLowerCase()) > -1;
      });
      return this.paging.page != -1 ? this.paginate(objects, this.paging.perPage, this.paging.page) : objects;
    },
    totalBytes: function totalBytes() {
      return this.objects.reduce(function (accu, curr) {
        return accu = accu + curr.size;
      }, 0);
    }
  },
  filters: {
    mime: function mime(value) {
      return _mime.lookup(value) || '-';
    },
    formatBytes: function formatBytes(bytes) {
      if (bytes === 0) return '0 Bytes';
      var i = Math.floor(Math.log(bytes) / Math.log(1024));
      return parseFloat((bytes / Math.pow(1024, i)).toFixed(2)) + ' ' + ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'][i];
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this3.listObjects(_this3.state.host.bucket);

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  methods: {
    paginate: function paginate(array, page_size, page_number) {
      --page_number;
      return array.slice(page_number * page_size, (page_number + 1) * page_size);
    },
    isImage: function isImage(value) {
      if (!value) return false;
      return ['jpg', 'jpeg', 'png', 'gif', 'svg', 'webp', 'bmp'].includes(value.split('.').pop().toLowerCase());
    },
    isEditable: function isEditable(value) {
      if (!value) return false;
      return ['jpg', 'jpeg', 'png', 'md', 'txt', 'js', 'php'].includes(value.split('.').pop().toLowerCase());
    },
    setPrefix: function setPrefix(prefix) {
      this.state.host.prefix = prefix;
    },
    backPrefix: function backPrefix(path) {
      path = path.replace(/\/+$/, '').split('/');
      path.pop();
      var newPath = path.join('/') + '/';
      this.setPrefix(newPath === '/' ? '' : newPath);
    },
    listObjects: function listObjects() {
      var _arguments = arguments,
          _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var _this4$state$host$cli, objectStream;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _this4.objects = [];
                _context4.next = 4;
                return (_this4$state$host$cli = _this4.state.host.client).listObjectsV2.apply(_this4$state$host$cli, _toConsumableArray(_arguments));

              case 4:
                objectStream = _context4.sent;
                objectStream.on('data', function (obj) {
                  if (obj && (obj.name || obj.prefix)) {
                    _this4.objects.push(obj);
                  }
                });
                objectStream.on('error', function (e) {
                  _this4.host.error = e.message;
                  _this4.alert = {
                    type: 'alert-danger',
                    message: e.message
                  };
                });
                objectStream.on('end', function () {});
                _context4.next = 14;
                break;

              case 10:
                _context4.prev = 10;
                _context4.t0 = _context4["catch"](0);
                _this4.host.error = _context4.t0.message;
                _this4.alert = {
                  type: 'alert-danger',
                  message: _context4.t0.message
                };

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 10]]);
      }))();
    },
    getImage: function getImage(item) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!item.src) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt("return");

              case 2:
                console.log('getImage', item);

                _this5.state.host.client.getObject(item.bucket, item.name, function (err, dataStream) {
                  if (err) return console.error(err);
                  var chunks = [];
                  dataStream.on('data', function (chunk) {
                    return chunks.push(chunk);
                  });
                  dataStream.on('end', function () {
                    var data = escape(Buffer.concat(chunks || []).toString('base64'));

                    var mimetype = _mime.lookup(item.name);

                    _this5.$set(item, 'src', "data:".concat(mimetype, ";base64,").concat(data));
                  });
                });

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    open: function open(item) {
      this.state.host.client.getObject(this.host.bucket, item.name, function (err, dataStream) {
        if (err) return console.error(err);
        var chunks = [];
        dataStream.on('data', function (chunk) {
          chunks.push(chunk);
        });
        dataStream.on('end', function () {
          var data = escape(Buffer.concat(chunks || []).toString('base64'));

          var mimetype = _mime.lookup(item.name);

          var win = window.open();
          win.document.write("\n            <iframe\n              src=\"data:".concat(mimetype, ";base64,").concat(data, "\"\n              style=\"\n                position: fixed;\n                top: 0px;\n                bottom: 0px;\n                right: 0px;\n                width: 100%;\n                border: none;\n                margin: 0;\n                padding: 0;\n                overflow: hidden;\n                height: 100%;\n            \"></iframe>\n          ")); //win.focus()
        });
      });
    }
  }
};
exports.default = _default;
        var $b306d3 = exports.default || module.exports;
      
      if (typeof $b306d3 === 'function') {
        $b306d3 = $b306d3.options;
      }
    
        /* template */
        Object.assign($b306d3, (function () {
          var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.state.host && _vm.state.host.bucket
    ? _c("div", { staticClass: "card sticky" }, [
        _c("div", { staticClass: "card-header" }, [
          _c("div", { staticClass: "row no-gutters" }, [
            _c("div", { staticClass: "card-title col-8" }, [
              _vm._v(
                "\n        Objects (" +
                  _vm._s(_vm.state.host.bucket) +
                  _vm._s(
                    _vm.state.host.prefix ? "/" + _vm.state.host.prefix : ""
                  ) +
                  ")"
              ),
              _c("br"),
              _vm._v(" "),
              _c("small", { staticClass: "text-muted" }, [
                _vm._v(
                  "Total " +
                    _vm._s(_vm.paging.totalItems) +
                    " Items, Size: " +
                    _vm._s(_vm._f("formatBytes")(_vm.totalBytes))
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "input-group input-group-sm col-4" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.objectFilter,
                    expression: "objectFilter"
                  }
                ],
                staticClass: "form-control",
                attrs: { placeholder: "Filter objects..." },
                domProps: { value: _vm.objectFilter },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.objectFilter = $event.target.value
                  }
                }
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "ul",
          { staticClass: "list-unstyled mb-0" },
          [
            _vm.state.host.prefix
              ? _c("li", { staticClass: "media p-2 border-bottom" }, [
                  _c(
                    "div",
                    {
                      staticClass: "media-body",
                      staticStyle: { display: "inline-grid" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "font-weight-bold mt-0 mb-1 text-truncate"
                        },
                        [
                          _c(
                            "a",
                            {
                              attrs: { href: "javascript:void(0)" },
                              on: {
                                click: function($event) {
                                  return _vm.backPrefix(_vm.state.host.prefix)
                                }
                              }
                            },
                            [_vm._v("../ (go back)")]
                          )
                        ]
                      )
                    ]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.filteredObjects.length === 0
              ? _c("li", { staticClass: "media p-2" }, [_vm._m(0)])
              : _vm._e(),
            _vm._v(" "),
            _vm._l(_vm.filteredObjects, function(item) {
              return _c(
                "li",
                {
                  key: item.name + item.prefix,
                  staticClass: "media border-bottom p-2"
                },
                [
                  _vm.isImage(item.name)
                    ? [
                        _c("img", {
                          staticClass: "mr-3 mt-1",
                          staticStyle: {
                            width: "120px",
                            "border-radius": "5px"
                          },
                          attrs: {
                            load: _vm.getImage(item),
                            src: item.src || "",
                            alt: ""
                          }
                        })
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  item.prefix
                    ? [
                        _c(
                          "div",
                          {
                            staticClass: "media-body",
                            staticStyle: { display: "inline-grid" }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "font-weight-bold mt-0 mb-1 text-truncate"
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    attrs: { href: "javascript:void(0)" },
                                    on: {
                                      click: function($event) {
                                        return _vm.setPrefix(item.prefix)
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(item.prefix))]
                                )
                              ]
                            )
                          ]
                        )
                      ]
                    : [
                        _c(
                          "div",
                          {
                            staticClass: "media-body",
                            staticStyle: { display: "inline-grid" }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "font-weight-bold mt-0 mb-1 text-truncate"
                              },
                              [_vm._v(_vm._s(item.name))]
                            ),
                            _vm._v(" "),
                            _c("small", [
                              _c("strong", [_vm._v("Last Modified:")]),
                              _vm._v(" "),
                              _c("span", { staticClass: "text-muted nowrap" }, [
                                _vm._v(
                                  _vm._s(
                                    _vm._f("date_format")(item.lastModified)
                                  )
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("small", [
                              _c("strong", [_vm._v("Type:")]),
                              _vm._v(" "),
                              _c("span", { staticClass: "text-muted nowrap" }, [
                                _vm._v(_vm._s(_vm._f("mime")(item.name)))
                              ])
                            ]),
                            _vm._v(" "),
                            _c("small", [
                              _c("strong", [_vm._v("Size:")]),
                              _vm._v(" "),
                              _c("span", { staticClass: "text-muted nowrap" }, [
                                _vm._v(_vm._s(_vm._f("formatBytes")(item.size)))
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-xxs btn-dark mr-2",
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                return _vm.editItem(item)
                              }
                            }
                          },
                          [_c("fa", { attrs: { icon: "pencil-alt" } })],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-xxs btn-danger",
                            attrs: {
                              type: "button",
                              disabled: item.profile && item.profile.id === 0
                            },
                            on: {
                              click: function($event) {
                                return _vm.deleteItem(item)
                              }
                            }
                          },
                          [_c("fa", { attrs: { icon: "times" } })],
                          1
                        )
                      ]
                ],
                2
              )
            })
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.filteredObjects.length > 0,
                expression: "filteredObjects.length > 0"
              }
            ],
            staticClass: "p-2",
            staticStyle: { "background-color": "#fafafa" }
          },
          [
            _vm.objects.length > 0
              ? _c(
                  "ul",
                  {
                    staticClass: "pagination",
                    staticStyle: { "justify-content": "center" }
                  },
                  [
                    _c(
                      "li",
                      {
                        staticClass: "page-item pagination-prev",
                        class: { disabled: _vm.paging.page == 1 }
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "page-link",
                            attrs: { href: "javascript:void(0)" },
                            on: {
                              click: function() {
                                _vm.paging.back()
                              }
                            }
                          },
                          [
                            _c("span", [_vm._v("«")]),
                            _vm._v(" "),
                            _c("span", { staticClass: "sr-only" }, [
                              _vm._v("Previous")
                            ])
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _vm._l(_vm.paging.pages, function(pageNumber) {
                      return [
                        Math.abs(pageNumber - _vm.paging.page) < 5 ||
                        pageNumber === _vm.paging.pages.length ||
                        pageNumber === 1
                          ? _c(
                              "li",
                              {
                                key: "pn-" + pageNumber,
                                staticClass: "page-item",
                                class: {
                                  active: _vm.paging.page === pageNumber,
                                  last:
                                    pageNumber === _vm.paging.pages.length &&
                                    Math.abs(pageNumber - _vm.paging.page) > 5,
                                  first:
                                    pageNumber === 1 &&
                                    Math.abs(pageNumber - _vm.paging.page) > 5
                                },
                                on: {
                                  click: function() {
                                    _vm.paging.page = pageNumber
                                  }
                                }
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass: "page-link",
                                    attrs: { href: "javascript:void(0)" }
                                  },
                                  [_vm._v(_vm._s(pageNumber))]
                                )
                              ]
                            )
                          : _vm._e()
                      ]
                    }),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        staticClass: "page-item pagination-next",
                        class: {
                          disabled: _vm.paging.page === _vm.paging.pages.length
                        }
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "page-link",
                            attrs: { href: "javascript:void(0)" },
                            on: {
                              click: function() {
                                _vm.paging.next()
                              }
                            }
                          },
                          [
                            _c("span", [_vm._v("»")]),
                            _vm._v(" "),
                            _c("span", { staticClass: "sr-only" }, [
                              _vm._v("Next")
                            ])
                          ]
                        )
                      ]
                    )
                  ],
                  2
                )
              : _vm._e()
          ]
        )
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "media-body", staticStyle: { display: "inline-grid" } },
      [_c("div", { staticClass: "text-truncate" }, [_vm._v("No files.")])]
    )
  }
]
render._withStripped = true

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: "data-v-b306d3",
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
            api.createRecord('$b306d3', $b306d3);
          } else {
            api.reload('$b306d3', $b306d3);
          }
        }

        
        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
      }
    })();
},{"crypto-js/aes":"node_modules/crypto-js/aes.js","crypto-js/enc-utf8":"node_modules/crypto-js/enc-utf8.js","mime-types":"node_modules/mime-types/index.js","buffer":"node_modules/buffer/index.js","_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js","vue-hot-reload-api":"node_modules/vue-hot-reload-api/dist/index.js","vue":"node_modules/vue/dist/vue.runtime.esm.js"}],"src/pages/host.vue":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _aes = _interopRequireDefault(require("crypto-js/aes"));

var _encUtf = _interopRequireDefault(require("crypto-js/enc-utf8"));

var _buckets = _interopRequireDefault(require("../components/host/buckets"));

var _objects = _interopRequireDefault(require("../components/host/objects"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  name: "host",
  props: ['state', 'host_key', 'bucket', 'prefix'],
  components: {
    hostBuckets: _buckets.default,
    hostObjects: _objects.default
  },
  data: function data() {
    return {
      alert: {}
    };
  },
  watch: {
    host_key: function () {
      var _host_key = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(value) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('host: watcher: host_key', value);

                if (!value) {
                  _context.next = 4;
                  break;
                }

                _context.next = 4;
                return this.setHost(this.state.hosts[value] || {});

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function host_key(_x) {
        return _host_key.apply(this, arguments);
      }

      return host_key;
    }(),
    bucket: function () {
      var _bucket = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(value) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log('host: watcher: bucket', value);
                this.$set(this.state.host, 'bucket', value || '');

                if (!(value && this.state.host)) {
                  _context2.next = 5;
                  break;
                }

                _context2.next = 5;
                return this.setHost(this.state.host || {});

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function bucket(_x2) {
        return _bucket.apply(this, arguments);
      }

      return bucket;
    }(),
    'state.host': function stateHost(value) {
      console.log('host: watcher: state.host', value);

      if (value.error) {
        this.alert = {
          type: 'alert-danger',
          message: value.error
        };
      } else {
        this.alert = {};
      }
    }
  },
  beforeMount: function beforeMount() {
    if (!this.state.authenticated) {
      this.$router.push('/login');
    }
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this.setHost(_this.state.hosts[_this.host_key]);

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  methods: {
    setHost: function setHost(host) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var h;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                console.log('host:setHost', host);
                _this2.alert = {};
                host = _objectSpread({
                  name: _this2.host_key,
                  hostname: '',
                  url: '',
                  port: 9000,
                  useSSL: false,
                  error: false,
                  buckets: [],
                  bucket: _this2.bucket || '',
                  prefix: _this2.prefix || ''
                }, host);
                h = new URL(host.url);
                host.hostname = h.hostname;
                host.port = parseInt(h.port, 10);
                host.useSSL = h.protocol === 'https:';

                try {
                  host.client = new minio.Client({
                    endPoint: host.hostname,
                    port: host.port,
                    useSSL: host.useSSL,
                    accessKey: host.accessKey,
                    secretKey: host.secretKey
                  });
                } catch (e) {
                  host.error = e.message;
                } //


                _this2.$set(_this2.state.hosts, _this2.host_key, host); //


                _this2.$set(_this2.state, 'host', host); // // encrypt and store into local storage
                // let state = JSON.parse(JSON.stringify(this.state))
                // delete state.password
                // delete state.host
                // console.log('pre store', state)
                // localStorage.state = CryptoAES.encrypt(JSON.stringify(state), this.state.password).toString()
                //
                //await this.listBuckets()


              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    } // async listBuckets() {
    //   if (!this.state.host) return
    //   console.log('host:listBuckets', this.state.host)
    //   // this.$set(host, 'bucket', this.bucket)
    //   // this.$set(host, 'prefix', this.prefix)
    //   console.log(typeof this.state.host.client.listBuckets)
    //   try {
    //     this.state.host.buckets = await this.state.host.client.listBuckets()
    //   } catch (e) {
    //     console.error(e)
    //     this.state.host.buckets = []
    //     this.state.host.error = e.message
    //   }
    //   // // encrypt and store into local storage
    //   // let state = JSON.parse(JSON.stringify(this.state))
    //   // delete state.password
    //   // delete state.host
    //   // localStorage.state = CryptoAES.encrypt(JSON.stringify(state), this.state.password).toString()
    // }

  }
};
exports.default = _default;
        var $8c3bee = exports.default || module.exports;
      
      if (typeof $8c3bee === 'function') {
        $8c3bee = $8c3bee.options;
      }
    
        /* template */
        Object.assign($8c3bee, (function () {
          var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.state.authenticated && _vm.state.host
    ? _c(
        "article",
        { staticClass: "content container-fluid" },
        [
          _c("nav", { attrs: { "aria-label": "breadcrumb" } }, [
            _c(
              "div",
              {
                staticClass:
                  "breadcrumb mt-3 d-flex justify-content-between align-items-center"
              },
              [
                _c("ol", { staticClass: "breadcrumb mb-0 p-0" }, [
                  _c("li", { staticClass: "breadcrumb-item" }, [
                    _c(
                      "a",
                      {
                        attrs: { href: "javascript:void(0)" },
                        on: {
                          click: function($event) {
                            return _vm.$router.push("/")
                          }
                        }
                      },
                      [_vm._v("Hosts")]
                    )
                  ]),
                  _vm._v(" "),
                  _vm.state.host && _vm.state.host.name
                    ? _c(
                        "li",
                        {
                          class: ["breadcrumb-item"],
                          attrs: { "aria-current": "page" }
                        },
                        [
                          _vm.state.host && _vm.state.host.name && _vm.bucket
                            ? _c(
                                "a",
                                {
                                  attrs: { href: "javascript:void(0)" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$router.push(
                                        "/host/" + _vm.state.host.name
                                      )
                                    }
                                  }
                                },
                                [_vm._v(_vm._s(_vm.state.host.name))]
                              )
                            : _c("span", [_vm._v(_vm._s(_vm.state.host.name))])
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.state.host && _vm.state.host.name && _vm.bucket
                    ? _c(
                        "li",
                        {
                          class: ["breadcrumb-item"],
                          attrs: { "aria-current": "page" }
                        },
                        [
                          _vm.state.host &&
                          _vm.state.host.name &&
                          !_vm.bucket &&
                          _vm.prefix
                            ? _c(
                                "a",
                                {
                                  attrs: { href: "javascript:void(0)" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$router.push(
                                        "/host/" +
                                          _vm.state.host.name +
                                          "/" +
                                          _vm.bucket
                                      )
                                    }
                                  }
                                },
                                [_vm._v(_vm._s(_vm.bucket))]
                              )
                            : _c("span", [_vm._v(_vm._s(_vm.bucket))])
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.state.host &&
                  _vm.state.host.name &&
                  _vm.bucket &&
                  _vm.prefix
                    ? _c(
                        "li",
                        {
                          class: ["breadcrumb-item"],
                          attrs: { "aria-current": "page" }
                        },
                        [_vm._v(_vm._s(_vm.prefix))]
                      )
                    : _vm._e()
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("alert", { attrs: { alert: _vm.alert } }),
          _vm._v(" "),
          _vm.state.host.name
            ? [
                !_vm.state.host.bucket
                  ? _c("host-buckets", { attrs: { state: _vm.state } })
                  : _c("host-objects", { attrs: { state: _vm.state } })
              ]
            : _vm._e()
        ],
        2
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: "data-v-8c3bee",
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
            api.createRecord('$8c3bee', $8c3bee);
          } else {
            api.reload('$8c3bee', $8c3bee);
          }
        }

        
        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
      }
    })();
},{"crypto-js/aes":"node_modules/crypto-js/aes.js","crypto-js/enc-utf8":"node_modules/crypto-js/enc-utf8.js","../components/host/buckets":"src/components/host/buckets.vue","../components/host/objects":"src/components/host/objects.vue","_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js","vue-hot-reload-api":"node_modules/vue-hot-reload-api/dist/index.js","vue":"node_modules/vue/dist/vue.runtime.esm.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
//# sourceMappingURL=/host.c8de2787.js.map