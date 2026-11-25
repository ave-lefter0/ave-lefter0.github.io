(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/@solflare-wallet/sdk/lib/esm/adapters/WalletProvider.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@solflare-wallet/sdk/lib/esm/adapters/WalletProvider.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/@solflare-wallet/sdk/node_modules/eventemitter3/index.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @solana/web3.js */ "./node_modules/@solana/web3.js/lib/index.browser.esm.js");
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bs58 */ "./node_modules/bs58/index.js");
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bs58__WEBPACK_IMPORTED_MODULE_2__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};



var Wallet = /** @class */ (function (_super) {
    __extends(Wallet, _super);
    function Wallet(provider, network) {
        var _this = _super.call(this) || this;
        _this._handleMessage = function (e) {
            if ((_this._injectedProvider && e.source === window) ||
                (e.origin === _this._providerUrl.origin && e.source === _this._popup)) {
                if (e.data.method === 'connected') {
                    var newPublicKey = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__["PublicKey"](e.data.params.publicKey);
                    if (!_this._publicKey || !_this._publicKey.equals(newPublicKey)) {
                        if (_this._publicKey && !_this._publicKey.equals(newPublicKey)) {
                            _this._handleDisconnect();
                        }
                        _this._publicKey = newPublicKey;
                        _this._autoApprove = !!e.data.params.autoApprove;
                        _this.emit('connect', _this._publicKey);
                    }
                }
                else if (e.data.method === 'disconnected') {
                    _this._handleDisconnect();
                }
                else if (e.data.result || e.data.error) {
                    if (_this._responsePromises.has(e.data.id)) {
                        var _a = __read(_this._responsePromises.get(e.data.id), 2), resolve = _a[0], reject = _a[1];
                        if (e.data.result) {
                            resolve(e.data.result);
                        }
                        else {
                            reject(new Error(e.data.error));
                        }
                    }
                }
            }
        };
        _this._handleConnect = function () {
            if (!_this._handlerAdded) {
                _this._handlerAdded = true;
                window.addEventListener('message', _this._handleMessage);
                window.addEventListener('beforeunload', _this.disconnect);
            }
            if (_this._injectedProvider) {
                return new Promise(function (resolve) {
                    _this._sendRequest('connect', {});
                    resolve();
                });
            }
            else {
                window.name = 'parent';
                _this._popup = window.open(_this._providerUrl.toString(), '_blank', 'location,resizable,width=460,height=675');
                return new Promise(function (resolve) {
                    _this.once('connect', resolve);
                });
            }
        };
        _this._handleDisconnect = function () {
            if (_this._handlerAdded) {
                _this._handlerAdded = false;
                window.removeEventListener('message', _this._handleMessage);
                window.removeEventListener('beforeunload', _this.disconnect);
            }
            if (_this._publicKey) {
                _this._publicKey = null;
                _this.emit('disconnect');
            }
            _this._responsePromises.forEach(function (_a, id) {
                var _b = __read(_a, 2), resolve = _b[0], reject = _b[1];
                _this._responsePromises.delete(id);
                reject('Wallet disconnected');
            });
        };
        _this._sendRequest = function (method, params) { return __awaiter(_this, void 0, void 0, function () {
            var requestId;
            var _this = this;
            return __generator(this, function (_a) {
                if (method !== 'connect' && !this.connected) {
                    throw new Error('Wallet not connected');
                }
                requestId = this._nextRequestId;
                ++this._nextRequestId;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._responsePromises.set(requestId, [resolve, reject]);
                        if (_this._injectedProvider) {
                            _this._injectedProvider.postMessage({
                                jsonrpc: '2.0',
                                id: requestId,
                                method: method,
                                params: __assign({ network: _this._network }, params),
                            });
                        }
                        else {
                            _this._popup.postMessage({
                                jsonrpc: '2.0',
                                id: requestId,
                                method: method,
                                params: params,
                            }, _this._providerUrl.origin);
                            if (!_this.autoApprove) {
                                _this._popup.focus();
                            }
                        }
                    })];
            });
        }); };
        _this.connect = function () {
            if (_this._popup) {
                _this._popup.close();
            }
            return _this._handleConnect();
        };
        _this.disconnect = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._injectedProvider) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._sendRequest('disconnect', {})];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (this._popup) {
                            this._popup.close();
                        }
                        this._handleDisconnect();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.sign = function (data, display) { return __awaiter(_this, void 0, void 0, function () {
            var response, signature, publicKey;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(data instanceof Uint8Array)) {
                            throw new Error('Data must be an instance of Uint8Array');
                        }
                        return [4 /*yield*/, this._sendRequest('sign', {
                                data: data,
                                display: display,
                            })];
                    case 1:
                        response = _a.sent();
                        signature = bs58__WEBPACK_IMPORTED_MODULE_2___default.a.decode(response.signature);
                        publicKey = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__["PublicKey"](response.publicKey);
                        return [2 /*return*/, {
                                signature: signature,
                                publicKey: publicKey,
                            }];
                }
            });
        }); };
        if (isInjectedProvider(provider)) {
            _this._injectedProvider = provider;
        }
        else if (isString(provider)) {
            _this._providerUrl = new URL(provider);
            _this._providerUrl.hash = new URLSearchParams({
                origin: window.location.origin,
                network: network,
            }).toString();
        }
        else {
            throw new Error('provider parameter must be an injected provider or a URL string.');
        }
        _this._network = network;
        _this._publicKey = null;
        _this._autoApprove = false;
        _this._popup = null;
        _this._handlerAdded = false;
        _this._nextRequestId = 1;
        _this._responsePromises = new Map();
        return _this;
    }
    Object.defineProperty(Wallet.prototype, "publicKey", {
        get: function () {
            return this._publicKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wallet.prototype, "connected", {
        get: function () {
            return this._publicKey !== null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wallet.prototype, "autoApprove", {
        get: function () {
            return this._autoApprove;
        },
        enumerable: false,
        configurable: true
    });
    return Wallet;
}(eventemitter3__WEBPACK_IMPORTED_MODULE_0___default.a));
/* harmony default export */ __webpack_exports__["default"] = (Wallet);
function isString(a) {
    return typeof a === 'string';
}
function isInjectedProvider(a) {
    return isObject(a) && isFunction(a.postMessage);
}
function isObject(a) {
    return typeof a === 'object' && a !== null;
}
function isFunction(a) {
    return typeof a === 'function';
}


/***/ }),

/***/ "./node_modules/@solflare-wallet/sdk/lib/esm/adapters/base.js":
/*!********************************************************************!*\
  !*** ./node_modules/@solflare-wallet/sdk/lib/esm/adapters/base.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/@solflare-wallet/sdk/node_modules/eventemitter3/index.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_0__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var WalletAdapter = /** @class */ (function (_super) {
    __extends(WalletAdapter, _super);
    function WalletAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WalletAdapter;
}(eventemitter3__WEBPACK_IMPORTED_MODULE_0___default.a));
/* harmony default export */ __webpack_exports__["default"] = (WalletAdapter);


/***/ }),

/***/ "./node_modules/@solflare-wallet/sdk/lib/esm/adapters/iframe.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@solflare-wallet/sdk/lib/esm/adapters/iframe.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/web3.js */ "./node_modules/@solana/web3.js/lib/index.browser.esm.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./node_modules/@solflare-wallet/sdk/lib/esm/adapters/base.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bs58 */ "./node_modules/bs58/index.js");
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bs58__WEBPACK_IMPORTED_MODULE_3__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var IframeAdapter = /** @class */ (function (_super) {
    __extends(IframeAdapter, _super);
    function IframeAdapter(iframe, publicKey) {
        var _this = this;
        var _a;
        _this = _super.call(this) || this;
        _this._publicKey = null;
        _this._messageHandlers = {};
        _this.handleMessage = function (data) {
            if (_this._messageHandlers[data.id]) {
                var _a = _this._messageHandlers[data.id], resolve = _a.resolve, reject = _a.reject;
                delete _this._messageHandlers[data.id];
                if (data.error) {
                    reject(data.error);
                }
                else {
                    resolve(data.result);
                }
            }
        };
        _this._sendMessage = function (data) {
            if (!_this.connected) {
                throw new Error('Wallet not connected');
            }
            return new Promise(function (resolve, reject) {
                var _a, _b;
                var messageId = Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])();
                _this._messageHandlers[messageId] = { resolve: resolve, reject: reject };
                (_b = (_a = _this._iframe) === null || _a === void 0 ? void 0 : _a.contentWindow) === null || _b === void 0 ? void 0 : _b.postMessage({
                    channel: 'solflareWalletAdapterToIframe',
                    data: __assign({ id: messageId }, data)
                }, '*');
            });
        };
        _this._iframe = iframe;
        _this._publicKey = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__["PublicKey"]((_a = publicKey === null || publicKey === void 0 ? void 0 : publicKey.toString) === null || _a === void 0 ? void 0 : _a.call(publicKey));
        return _this;
    }
    Object.defineProperty(IframeAdapter.prototype, "publicKey", {
        get: function () {
            return this._publicKey || null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IframeAdapter.prototype, "connected", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    IframeAdapter.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    IframeAdapter.prototype.disconnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._sendMessage({
                            method: 'disconnect'
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    IframeAdapter.prototype.signTransaction = function (transaction) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var signedTransaction, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.connected) {
                            throw new Error('Wallet not connected');
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this._sendMessage({
                                method: 'signTransaction',
                                params: {
                                    transaction: bs58__WEBPACK_IMPORTED_MODULE_3___default.a.encode(transaction)
                                }
                            })];
                    case 2:
                        signedTransaction = _b.sent();
                        return [2 /*return*/, bs58__WEBPACK_IMPORTED_MODULE_3___default.a.decode(signedTransaction)];
                    case 3:
                        e_1 = _b.sent();
                        throw new Error(((_a = e_1 === null || e_1 === void 0 ? void 0 : e_1.toString) === null || _a === void 0 ? void 0 : _a.call(e_1)) || 'Failed to sign transaction');
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    IframeAdapter.prototype.signAllTransactions = function (transactions) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var signedTransactions, e_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.connected) {
                            throw new Error('Wallet not connected');
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this._sendMessage({
                                method: 'signAllTransactions',
                                params: {
                                    transactions: transactions.map(function (transaction) { return bs58__WEBPACK_IMPORTED_MODULE_3___default.a.encode(transaction); })
                                }
                            })];
                    case 2:
                        signedTransactions = _b.sent();
                        return [2 /*return*/, signedTransactions.map(function (transaction) { return bs58__WEBPACK_IMPORTED_MODULE_3___default.a.decode(transaction); })];
                    case 3:
                        e_2 = _b.sent();
                        throw new Error(((_a = e_2 === null || e_2 === void 0 ? void 0 : e_2.toString) === null || _a === void 0 ? void 0 : _a.call(e_2)) || 'Failed to sign transactions');
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    IframeAdapter.prototype.signAndSendTransaction = function (transaction, options) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var result, e_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.connected) {
                            throw new Error('Wallet not connected');
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this._sendMessage({
                                method: 'signAndSendTransaction',
                                params: {
                                    transaction: bs58__WEBPACK_IMPORTED_MODULE_3___default.a.encode(transaction),
                                    options: options
                                }
                            })];
                    case 2:
                        result = _b.sent();
                        return [2 /*return*/, result];
                    case 3:
                        e_3 = _b.sent();
                        throw new Error(((_a = e_3 === null || e_3 === void 0 ? void 0 : e_3.toString) === null || _a === void 0 ? void 0 : _a.call(e_3)) || 'Failed to sign and send transaction');
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    IframeAdapter.prototype.signMessage = function (data, display) {
        var _a;
        if (display === void 0) { display = 'hex'; }
        return __awaiter(this, void 0, void 0, function () {
            var result, e_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.connected) {
                            throw new Error('Wallet not connected');
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this._sendMessage({
                                method: 'signMessage',
                                params: {
                                    data: data,
                                    display: display
                                }
                            })];
                    case 2:
                        result = _b.sent();
                        return [2 /*return*/, Uint8Array.from(bs58__WEBPACK_IMPORTED_MODULE_3___default.a.decode(result))];
                    case 3:
                        e_4 = _b.sent();
                        throw new Error(((_a = e_4 === null || e_4 === void 0 ? void 0 : e_4.toString) === null || _a === void 0 ? void 0 : _a.call(e_4)) || 'Failed to sign message');
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return IframeAdapter;
}(_base__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (IframeAdapter);


/***/ }),

/***/ "./node_modules/@solflare-wallet/sdk/lib/esm/adapters/web.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@solflare-wallet/sdk/lib/esm/adapters/web.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@solflare-wallet/sdk/lib/esm/adapters/base.js");
/* harmony import */ var _WalletProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WalletProvider */ "./node_modules/@solflare-wallet/sdk/lib/esm/adapters/WalletProvider.js");
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bs58 */ "./node_modules/bs58/index.js");
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bs58__WEBPACK_IMPORTED_MODULE_2__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var WebAdapter = /** @class */ (function (_super) {
    __extends(WebAdapter, _super);
    // @ts-ignore
    function WebAdapter(iframe, network, provider) {
        var _this = _super.call(this) || this;
        _this._instance = null;
        // @ts-ignore
        _this.handleMessage = function (data) {
            // nothing to do here
        };
        _this._sendRequest = function (method, params) { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!((_a = this._instance) === null || _a === void 0 ? void 0 : _a.sendRequest)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._instance.sendRequest(method, params)];
                    case 1: return [2 /*return*/, _c.sent()];
                    case 2:
                        if (!((_b = this._instance) === null || _b === void 0 ? void 0 : _b._sendRequest)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this._instance._sendRequest(method, params)];
                    case 3: return [2 /*return*/, _c.sent()];
                    case 4: throw new Error('Unsupported version of `@project-serum/sol-wallet-adapter`');
                }
            });
        }); };
        _this._handleConnect = function () {
            _this.emit('connect');
        };
        _this._handleDisconnect = function () {
            window.clearInterval(_this._pollTimer);
            _this.emit('disconnect');
        };
        _this._network = network;
        _this._provider = provider;
        return _this;
    }
    Object.defineProperty(WebAdapter.prototype, "publicKey", {
        get: function () {
            return this._instance.publicKey || null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAdapter.prototype, "connected", {
        get: function () {
            return this._instance.connected || false;
        },
        enumerable: false,
        configurable: true
    });
    WebAdapter.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._instance = new _WalletProvider__WEBPACK_IMPORTED_MODULE_1__["default"](this._provider, this._network);
                        this._instance.on('connect', this._handleConnect);
                        this._instance.on('disconnect', this._handleDisconnect);
                        this._pollTimer = window.setInterval(function () {
                            var _a, _b;
                            // @ts-ignore
                            if (((_b = (_a = _this._instance) === null || _a === void 0 ? void 0 : _a._popup) === null || _b === void 0 ? void 0 : _b.closed) !== false) {
                                _this._handleDisconnect();
                            }
                        }, 200);
                        return [4 /*yield*/, this._instance.connect()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WebAdapter.prototype.disconnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.connected) {
                            throw new Error('Wallet not connected');
                        }
                        this._instance.removeAllListeners('connect');
                        this._instance.removeAllListeners('disconnect');
                        return [4 /*yield*/, this._instance.disconnect()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WebAdapter.prototype.signTransaction = function (transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var signedTransaction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.connected) {
                            throw new Error('Wallet not connected');
                        }
                        return [4 /*yield*/, this._sendRequest('signTransactionV2', {
                                transaction: bs58__WEBPACK_IMPORTED_MODULE_2___default.a.encode(transaction)
                            })];
                    case 1:
                        signedTransaction = (_a.sent()).transaction;
                        return [2 /*return*/, bs58__WEBPACK_IMPORTED_MODULE_2___default.a.decode(signedTransaction)];
                }
            });
        });
    };
    WebAdapter.prototype.signAllTransactions = function (transactions) {
        return __awaiter(this, void 0, void 0, function () {
            var signedTransactions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.connected) {
                            throw new Error('Wallet not connected');
                        }
                        return [4 /*yield*/, this._sendRequest('signAllTransactionsV2', {
                                transactions: transactions.map(function (transaction) { return bs58__WEBPACK_IMPORTED_MODULE_2___default.a.encode(transaction); })
                            })];
                    case 1:
                        signedTransactions = (_a.sent()).transactions;
                        return [2 /*return*/, signedTransactions.map(function (transaction) { return bs58__WEBPACK_IMPORTED_MODULE_2___default.a.decode(transaction); })];
                }
            });
        });
    };
    WebAdapter.prototype.signAndSendTransaction = function (transaction, options) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.connected) {
                            throw new Error('Wallet not connected');
                        }
                        return [4 /*yield*/, this._sendRequest('signAndSendTransaction', {
                                transaction: bs58__WEBPACK_IMPORTED_MODULE_2___default.a.encode(transaction),
                                options: options
                            })];
                    case 1:
                        response = (_a.sent());
                        return [2 /*return*/, response.signature];
                }
            });
        });
    };
    WebAdapter.prototype.signMessage = function (data, display) {
        if (display === void 0) { display = 'hex'; }
        return __awaiter(this, void 0, void 0, function () {
            var signature;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.connected) {
                            throw new Error('Wallet not connected');
                        }
                        return [4 /*yield*/, this._instance.sign(data, display)];
                    case 1:
                        signature = (_a.sent()).signature;
                        return [2 /*return*/, Uint8Array.from(signature)];
                }
            });
        });
    };
    return WebAdapter;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (WebAdapter);


/***/ }),

/***/ "./node_modules/@solflare-wallet/sdk/lib/esm/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@solflare-wallet/sdk/lib/esm/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/web3.js */ "./node_modules/@solana/web3.js/lib/index.browser.esm.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/@solflare-wallet/sdk/node_modules/eventemitter3/index.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _adapters_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adapters/web */ "./node_modules/@solflare-wallet/sdk/lib/esm/adapters/web.js");
/* harmony import */ var _adapters_iframe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adapters/iframe */ "./node_modules/@solflare-wallet/sdk/lib/esm/adapters/iframe.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./node_modules/@solflare-wallet/sdk/lib/esm/utils.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./version */ "./node_modules/@solflare-wallet/sdk/lib/esm/version.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};






var Solflare = /** @class */ (function (_super) {
    __extends(Solflare, _super);
    function Solflare(config) {
        var _this = _super.call(this) || this;
        _this._network = 'mainnet-beta';
        _this._provider = null;
        _this._iframeParams = {};
        _this._adapterInstance = null;
        _this._element = null;
        _this._iframe = null;
        _this._connectHandler = null;
        _this._flutterHandlerInterval = null;
        _this._handleEvent = function (event) {
            var _a, _b, _c, _d;
            switch (event.type) {
                case 'connect_native_web': {
                    _this._collapseIframe();
                    _this._adapterInstance = new _adapters_web__WEBPACK_IMPORTED_MODULE_2__["default"](_this._iframe, _this._network, ((_a = event.data) === null || _a === void 0 ? void 0 : _a.provider) || _this._provider || 'https://solflare.com/provider');
                    _this._adapterInstance.on('connect', _this._webConnected);
                    _this._adapterInstance.on('disconnect', _this._webDisconnected);
                    _this._adapterInstance.connect();
                    _this._setPreferredAdapter('native_web');
                    return;
                }
                case 'connect': {
                    _this._collapseIframe();
                    _this._adapterInstance = new _adapters_iframe__WEBPACK_IMPORTED_MODULE_3__["default"](_this._iframe, ((_b = event.data) === null || _b === void 0 ? void 0 : _b.publicKey) || '');
                    _this._adapterInstance.connect();
                    _this._setPreferredAdapter((_c = event.data) === null || _c === void 0 ? void 0 : _c.adapter);
                    if (_this._connectHandler) {
                        _this._connectHandler.resolve();
                        _this._connectHandler = null;
                    }
                    _this.emit('connect', _this.publicKey);
                    return;
                }
                case 'disconnect': {
                    if (_this._connectHandler) {
                        _this._connectHandler.reject();
                        _this._connectHandler = null;
                    }
                    _this._disconnected();
                    _this.emit('disconnect');
                    return;
                }
                case 'accountChanged': {
                    if ((_d = event.data) === null || _d === void 0 ? void 0 : _d.publicKey) {
                        _this._adapterInstance = new _adapters_iframe__WEBPACK_IMPORTED_MODULE_3__["default"](_this._iframe, event.data.publicKey);
                        _this._adapterInstance.connect();
                        _this.emit('accountChanged', _this.publicKey);
                    }
                    else {
                        _this.emit('accountChanged', undefined);
                    }
                    return;
                }
                // legacy event, use resize message type instead
                case 'collapse': {
                    _this._collapseIframe();
                    return;
                }
                default: {
                    return;
                }
            }
        };
        _this._handleResize = function (data) {
            if (data.resizeMode === 'full') {
                if (data.params.mode === 'fullscreen') {
                    _this._expandIframe();
                }
                else if (data.params.mode === 'hide') {
                    _this._collapseIframe();
                }
            }
            else if (data.resizeMode === 'coordinates') {
                if (_this._iframe) {
                    _this._iframe.style.top = isFinite(data.params.top) ? "".concat(data.params.top, "px") : '';
                    _this._iframe.style.bottom = isFinite(data.params.bottom) ? "".concat(data.params.bottom, "px") : '';
                    _this._iframe.style.left = isFinite(data.params.left) ? "".concat(data.params.left, "px") : '';
                    _this._iframe.style.right = isFinite(data.params.right) ? "".concat(data.params.right, "px") : '';
                    _this._iframe.style.width = isFinite(data.params.width) ? "".concat(data.params.width, "px") : data.params.width;
                    _this._iframe.style.height = isFinite(data.params.height) ? "".concat(data.params.height, "px") : data.params.height;
                }
            }
        };
        _this._handleMessage = function (event) {
            var _a;
            if (((_a = event.data) === null || _a === void 0 ? void 0 : _a.channel) !== 'solflareIframeToWalletAdapter') {
                return;
            }
            var data = event.data.data || {};
            if (data.type === 'event') {
                _this._handleEvent(data.event);
            }
            else if (data.type === 'resize') {
                _this._handleResize(data);
            }
            else if (data.type === 'response') {
                if (_this._adapterInstance) {
                    _this._adapterInstance.handleMessage(data);
                }
            }
        };
        _this._removeElement = function () {
            if (_this._flutterHandlerInterval !== null) {
                clearInterval(_this._flutterHandlerInterval);
                _this._flutterHandlerInterval = null;
            }
            if (_this._element) {
                _this._element.remove();
                _this._element = null;
            }
        };
        _this._removeDanglingElements = function () {
            var e_1, _a;
            var elements = document.getElementsByClassName('solflare-wallet-adapter-iframe');
            try {
                for (var elements_1 = __values(elements), elements_1_1 = elements_1.next(); !elements_1_1.done; elements_1_1 = elements_1.next()) {
                    var element = elements_1_1.value;
                    if (element.parentElement) {
                        element.remove();
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (elements_1_1 && !elements_1_1.done && (_a = elements_1.return)) _a.call(elements_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        _this._injectElement = function () {
            _this._removeElement();
            _this._removeDanglingElements();
            var params = __assign(__assign({}, _this._iframeParams), { cluster: _this._network || 'mainnet-beta', origin: window.location.origin || '', title: document.title || '', version: 1, sdkVersion: _version__WEBPACK_IMPORTED_MODULE_5__["VERSION"] || 'unknown' });
            var preferredAdapter = _this._getPreferredAdapter();
            if (preferredAdapter) {
                params.adapter = preferredAdapter;
            }
            if (_this._provider) {
                params.provider = _this._provider;
            }
            var queryString = Object.keys(params)
                .map(function (key) { return "".concat(key, "=").concat(encodeURIComponent(params[key])); })
                .join('&');
            var iframeUrl = "".concat(Solflare.IFRAME_URL, "?").concat(queryString);
            _this._element = document.createElement('div');
            _this._element.className = 'solflare-wallet-adapter-iframe';
            _this._element.innerHTML = "\n      <iframe src='".concat(iframeUrl, "' referrerPolicy='strict-origin-when-cross-origin' style='position: fixed; top: 0; bottom: 0; left: 0; right: 0; width: 100%; height: 100%; border: none; border-radius: 0; z-index: 99999; color-scheme: auto;' allowtransparency='true'></iframe>\n    ");
            document.body.appendChild(_this._element);
            _this._iframe = _this._element.querySelector('iframe');
            // @ts-ignore
            window.fromFlutter = _this._handleMobileMessage;
            _this._flutterHandlerInterval = setInterval(function () {
                // @ts-ignore
                window.fromFlutter = _this._handleMobileMessage;
            }, 100);
            window.addEventListener('message', _this._handleMessage, false);
        };
        _this._collapseIframe = function () {
            if (_this._iframe) {
                _this._iframe.style.top = '';
                _this._iframe.style.right = '';
                _this._iframe.style.height = '2px';
                _this._iframe.style.width = '2px';
            }
        };
        _this._expandIframe = function () {
            if (_this._iframe) {
                _this._iframe.style.top = '0px';
                _this._iframe.style.bottom = '0px';
                _this._iframe.style.left = '0px';
                _this._iframe.style.right = '0px';
                _this._iframe.style.width = '100%';
                _this._iframe.style.height = '100%';
            }
        };
        _this._getPreferredAdapter = function () {
            if (localStorage) {
                return localStorage.getItem('solflarePreferredWalletAdapter') || null;
            }
            return null;
        };
        _this._setPreferredAdapter = function (adapter) {
            if (localStorage && adapter) {
                localStorage.setItem('solflarePreferredWalletAdapter', adapter);
            }
        };
        _this._clearPreferredAdapter = function () {
            if (localStorage) {
                localStorage.removeItem('solflarePreferredWalletAdapter');
            }
        };
        _this._webConnected = function () {
            if (_this._connectHandler) {
                _this._connectHandler.resolve();
                _this._connectHandler = null;
            }
            _this.emit('connect', _this.publicKey);
        };
        _this._webDisconnected = function () {
            if (_this._connectHandler) {
                _this._connectHandler.reject();
                _this._connectHandler = null;
            }
            _this._disconnected();
            _this.emit('disconnect');
        };
        _this._disconnected = function () {
            window.removeEventListener('message', _this._handleMessage, false);
            _this._removeElement();
            _this._clearPreferredAdapter();
            _this._adapterInstance = null;
        };
        _this._handleMobileMessage = function (data) {
            var _a, _b;
            (_b = (_a = _this._iframe) === null || _a === void 0 ? void 0 : _a.contentWindow) === null || _b === void 0 ? void 0 : _b.postMessage({
                channel: 'solflareMobileToIframe',
                data: data
            }, '*');
        };
        if (config === null || config === void 0 ? void 0 : config.network) {
            _this._network = config === null || config === void 0 ? void 0 : config.network;
        }
        if (config === null || config === void 0 ? void 0 : config.provider) {
            _this._provider = config === null || config === void 0 ? void 0 : config.provider;
        }
        if (config === null || config === void 0 ? void 0 : config.params) {
            _this._iframeParams = __assign({}, config === null || config === void 0 ? void 0 : config.params);
        }
        return _this;
    }
    Object.defineProperty(Solflare.prototype, "publicKey", {
        get: function () {
            var _a;
            return ((_a = this._adapterInstance) === null || _a === void 0 ? void 0 : _a.publicKey) || null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Solflare.prototype, "isConnected", {
        get: function () {
            var _a;
            return !!((_a = this._adapterInstance) === null || _a === void 0 ? void 0 : _a.connected);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Solflare.prototype, "connected", {
        get: function () {
            return this.isConnected;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Solflare.prototype, "autoApprove", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Solflare.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.connected) {
                            return [2 /*return*/];
                        }
                        this._injectElement();
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this._connectHandler = { resolve: resolve, reject: reject };
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Solflare.prototype.disconnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._adapterInstance) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this._adapterInstance.disconnect()];
                    case 1:
                        _a.sent();
                        this._disconnected();
                        this.emit('disconnect');
                        return [2 /*return*/];
                }
            });
        });
    };
    Solflare.prototype.signTransaction = function (transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var serializedTransaction, signedTransaction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.connected) {
                            throw new Error('Wallet not connected');
                        }
                        serializedTransaction = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isLegacyTransactionInstance"])(transaction) ?
                            Uint8Array.from(transaction.serialize({ verifySignatures: false, requireAllSignatures: false })) :
                            transaction.serialize();
                        return [4 /*yield*/, this._adapterInstance.signTransaction(serializedTransaction)];
                    case 1:
                        signedTransaction = _a.sent();
                        return [2 /*return*/, Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isLegacyTransactionInstance"])(transaction) ? _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__["Transaction"].from(signedTransaction) : _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__["VersionedTransaction"].deserialize(signedTransaction)];
                }
            });
        });
    };
    Solflare.prototype.signAllTransactions = function (transactions) {
        return __awaiter(this, void 0, void 0, function () {
            var serializedTransactions, signedTransactions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.connected) {
                            throw new Error('Wallet not connected');
                        }
                        serializedTransactions = transactions.map(function (transaction) {
                            return Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isLegacyTransactionInstance"])(transaction) ?
                                Uint8Array.from(transaction.serialize({ verifySignatures: false, requireAllSignatures: false })) :
                                transaction.serialize();
                        });
                        return [4 /*yield*/, this._adapterInstance.signAllTransactions(serializedTransactions)];
                    case 1:
                        signedTransactions = _a.sent();
                        if (signedTransactions.length !== transactions.length) {
                            throw new Error('Failed to sign all transactions');
                        }
                        return [2 /*return*/, signedTransactions.map(function (signedTransaction, index) {
                                return Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isLegacyTransactionInstance"])(transactions[index]) ? _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__["Transaction"].from(signedTransaction) : _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__["VersionedTransaction"].deserialize(signedTransaction);
                            })];
                }
            });
        });
    };
    Solflare.prototype.signAndSendTransaction = function (transaction, options) {
        return __awaiter(this, void 0, void 0, function () {
            var serializedTransaction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.connected) {
                            throw new Error('Wallet not connected');
                        }
                        serializedTransaction = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isLegacyTransactionInstance"])(transaction) ? transaction.serialize({ verifySignatures: false, requireAllSignatures: false }) : transaction.serialize();
                        return [4 /*yield*/, this._adapterInstance.signAndSendTransaction(serializedTransaction, options)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Solflare.prototype.signMessage = function (data, display) {
        if (display === void 0) { display = 'utf8'; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.connected) {
                            throw new Error('Wallet not connected');
                        }
                        return [4 /*yield*/, this._adapterInstance.signMessage(data, display)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Solflare.prototype.sign = function (data, display) {
        if (display === void 0) { display = 'utf8'; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.signMessage(data, display)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Solflare.prototype.detectWallet = function (timeout) {
        var _a;
        if (timeout === void 0) { timeout = 10; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                if (window.SolflareApp || ((_a = window.solflare) === null || _a === void 0 ? void 0 : _a.isSolflare)) {
                    return [2 /*return*/, true];
                }
                return [2 /*return*/, new Promise(function (resolve) {
                        var pollInterval, pollTimeout;
                        pollInterval = setInterval(function () {
                            var _a;
                            if (window.SolflareApp || ((_a = window.solflare) === null || _a === void 0 ? void 0 : _a.isSolflare)) {
                                clearInterval(pollInterval);
                                clearTimeout(pollTimeout);
                                resolve(true);
                            }
                        }, 500);
                        pollTimeout = setTimeout(function () {
                            clearInterval(pollInterval);
                            resolve(false);
                        }, timeout * 1000);
                    })];
            });
        });
    };
    Solflare.IFRAME_URL = 'https://connect.solflare.com/';
    return Solflare;
}(eventemitter3__WEBPACK_IMPORTED_MODULE_1___default.a));
/* harmony default export */ __webpack_exports__["default"] = (Solflare);


/***/ }),

/***/ "./node_modules/@solflare-wallet/sdk/lib/esm/utils.js":
/*!************************************************************!*\
  !*** ./node_modules/@solflare-wallet/sdk/lib/esm/utils.js ***!
  \************************************************************/
/*! exports provided: isLegacyTransactionInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLegacyTransactionInstance", function() { return isLegacyTransactionInstance; });
function isLegacyTransactionInstance(transaction) {
    return transaction.version === undefined;
}


/***/ }),

/***/ "./node_modules/@solflare-wallet/sdk/lib/esm/version.js":
/*!**************************************************************!*\
  !*** ./node_modules/@solflare-wallet/sdk/lib/esm/version.js ***!
  \**************************************************************/
/*! exports provided: VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
var VERSION = "1.4.2";


/***/ }),

/***/ "./node_modules/@solflare-wallet/sdk/node_modules/eventemitter3/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@solflare-wallet/sdk/node_modules/eventemitter3/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),

/***/ "./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/index.js ***!
  \***************************************************************************************/
/*! exports provided: v1, v3, v4, v5, NIL, version, validate, stringify, parse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v1.js */ "./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/v1.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v1", function() { return _v1_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v3.js */ "./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/v3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v3", function() { return _v3_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./v4.js */ "./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/v4.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v4", function() { return _v4_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./v5.js */ "./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/v5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v5", function() { return _v5_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _nil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nil.js */ "./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/nil.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NIL", function() { return _nil_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./version.js */ "./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/version.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "version", function() { return _version_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validate.js */ "./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/validate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return _validate_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/stringify.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return _stringify_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parse.js */ "./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/parse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _parse_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });











/***/ }),

/***/ "./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/md5.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/md5.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (let i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  const output = [];
  const length32 = input.length * 32;
  const hexTab = '0123456789abcdef';

  for (let i = 0; i < length32; i += 8) {
    const x = input[i >> 5] >>> i % 32 & 0xff;
    const hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  let a = 1732584193;
  let b = -271733879;
  let c = -1732584194;
  let d = 271733878;

  for (let i = 0; i < x.length; i += 16) {
    const olda = a;
    const oldb = b;
    const oldc = c;
    const oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  const length8 = input.length * 8;
  const output = new Uint32Array(getOutputLength(length8));

  for (let i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  const lsw = (x & 0xffff) + (y & 0xffff);
  const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

/* harmony default export */ __webpack_exports__["default"] = (md5);

/***/ }),

/***/ "./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/native.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/native.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ __webpack_exports__["default"] = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/nil.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/nil.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ('00000000-0000-0000-0000-000000000000');

/***/ }),

/***/ "./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/parse.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/parse.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/validate.js");


function parse(uuid) {
  if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  let v;
  const arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

/* harmony default export */ __webpack_exports__["default"] = (parse);

/***/ }),

/***/ "./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/regex.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/regex.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/rng.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/rng.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rng; });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/sha1.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/sha1.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  const K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  const H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (let i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  const l = bytes.length / 4 + 2;
  const N = Math.ceil(l / 16);
  const M = new Array(N);

  for (let i = 0; i < N; ++i) {
    const arr = new Uint32Array(16);

    for (let j = 0; j < 16; ++j) {
      arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
    }

    M[i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (let i = 0; i < N; ++i) {
    const W = new Uint32Array(80);

    for (let t = 0; t < 16; ++t) {
      W[t] = M[i][t];
    }

    for (let t = 16; t < 80; ++t) {
      W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
    }

    let a = H[0];
    let b = H[1];
    let c = H[2];
    let d = H[3];
    let e = H[4];

    for (let t = 0; t < 80; ++t) {
      const s = Math.floor(t / 20);
      const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

/* harmony default export */ __webpack_exports__["default"] = (sha1);

/***/ }),

/***/ "./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/stringify.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*******************************************************************************************/
/*! exports provided: unsafeStringify, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsafeStringify", function() { return unsafeStringify; });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ __webpack_exports__["default"] = (stringify);

/***/ }),

/***/ "./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/v1.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/v1.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/stringify.js");

 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

let _nodeId;

let _clockseq; // Previous uuid creation time


let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  let i = buf && offset || 0;
  const b = buf || new Array(16);
  options = options || {};
  let node = options.node || _nodeId;
  let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    const seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (let n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || Object(_stringify_js__WEBPACK_IMPORTED_MODULE_1__["unsafeStringify"])(b);
}

/* harmony default export */ __webpack_exports__["default"] = (v1);

/***/ }),

/***/ "./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/v3.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/v3.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./md5.js */ "./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/md5.js");


const v3 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (v3);

/***/ }),

/***/ "./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/v35.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/v35.js ***!
  \*************************************************************************************/
/*! exports provided: DNS, URL, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DNS", function() { return DNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return v35; });
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/stringify.js");
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse.js */ "./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/parse.js");



function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  const bytes = [];

  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
function v35(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    var _namespace;

    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = Object(_parse_js__WEBPACK_IMPORTED_MODULE_1__["default"])(namespace);
    }

    if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return Object(_stringify_js__WEBPACK_IMPORTED_MODULE_0__["unsafeStringify"])(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}

/***/ }),

/***/ "./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/v4.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/v4.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return Object(_stringify_js__WEBPACK_IMPORTED_MODULE_2__["unsafeStringify"])(rnds);
}

/* harmony default export */ __webpack_exports__["default"] = (v4);

/***/ }),

/***/ "./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/v5.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/v5.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sha1.js */ "./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/sha1.js");


const v5 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (v5);

/***/ }),

/***/ "./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/validate.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/validate.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ __webpack_exports__["default"] = (validate);

/***/ }),

/***/ "./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/version.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/version.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/@solflare-wallet/sdk/node_modules/uuid/dist/esm-browser/validate.js");


function version(uuid) {
  if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.slice(14, 15), 16);
}

/* harmony default export */ __webpack_exports__["default"] = (version);

/***/ }),

/***/ "./node_modules/bs58/index.js":
/*!************************************!*\
  !*** ./node_modules/bs58/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const basex = __webpack_require__(/*! base-x */ "./node_modules/bs58/node_modules/base-x/src/index.js")
const ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'

module.exports = basex(ALPHABET)


/***/ }),

/***/ "./node_modules/bs58/node_modules/base-x/src/index.js":
/*!************************************************************!*\
  !*** ./node_modules/bs58/node_modules/base-x/src/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// base-x encoding / decoding
// Copyright (c) 2018 base-x contributors
// Copyright (c) 2014-2018 The Bitcoin Core developers (base58.cpp)
// Distributed under the MIT software license, see the accompanying
// file LICENSE or http://www.opensource.org/licenses/mit-license.php.
function base (ALPHABET) {
  if (ALPHABET.length >= 255) { throw new TypeError('Alphabet too long') }
  var BASE_MAP = new Uint8Array(256)
  for (var j = 0; j < BASE_MAP.length; j++) {
    BASE_MAP[j] = 255
  }
  for (var i = 0; i < ALPHABET.length; i++) {
    var x = ALPHABET.charAt(i)
    var xc = x.charCodeAt(0)
    if (BASE_MAP[xc] !== 255) { throw new TypeError(x + ' is ambiguous') }
    BASE_MAP[xc] = i
  }
  var BASE = ALPHABET.length
  var LEADER = ALPHABET.charAt(0)
  var FACTOR = Math.log(BASE) / Math.log(256) // log(BASE) / log(256), rounded up
  var iFACTOR = Math.log(256) / Math.log(BASE) // log(256) / log(BASE), rounded up
  function encode (source) {
    if (source instanceof Uint8Array) {
    } else if (ArrayBuffer.isView(source)) {
      source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength)
    } else if (Array.isArray(source)) {
      source = Uint8Array.from(source)
    }
    if (!(source instanceof Uint8Array)) { throw new TypeError('Expected Uint8Array') }
    if (source.length === 0) { return '' }
        // Skip & count leading zeroes.
    var zeroes = 0
    var length = 0
    var pbegin = 0
    var pend = source.length
    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++
      zeroes++
    }
        // Allocate enough space in big-endian base58 representation.
    var size = ((pend - pbegin) * iFACTOR + 1) >>> 0
    var b58 = new Uint8Array(size)
        // Process the bytes.
    while (pbegin !== pend) {
      var carry = source[pbegin]
            // Apply "b58 = b58 * 256 + ch".
      var i = 0
      for (var it1 = size - 1; (carry !== 0 || i < length) && (it1 !== -1); it1--, i++) {
        carry += (256 * b58[it1]) >>> 0
        b58[it1] = (carry % BASE) >>> 0
        carry = (carry / BASE) >>> 0
      }
      if (carry !== 0) { throw new Error('Non-zero carry') }
      length = i
      pbegin++
    }
        // Skip leading zeroes in base58 result.
    var it2 = size - length
    while (it2 !== size && b58[it2] === 0) {
      it2++
    }
        // Translate the result into a string.
    var str = LEADER.repeat(zeroes)
    for (; it2 < size; ++it2) { str += ALPHABET.charAt(b58[it2]) }
    return str
  }
  function decodeUnsafe (source) {
    if (typeof source !== 'string') { throw new TypeError('Expected String') }
    if (source.length === 0) { return new Uint8Array() }
    var psz = 0
        // Skip and count leading '1's.
    var zeroes = 0
    var length = 0
    while (source[psz] === LEADER) {
      zeroes++
      psz++
    }
        // Allocate enough space in big-endian base256 representation.
    var size = (((source.length - psz) * FACTOR) + 1) >>> 0 // log(58) / log(256), rounded up.
    var b256 = new Uint8Array(size)
        // Process the characters.
    while (source[psz]) {
            // Decode character
      var carry = BASE_MAP[source.charCodeAt(psz)]
            // Invalid character
      if (carry === 255) { return }
      var i = 0
      for (var it3 = size - 1; (carry !== 0 || i < length) && (it3 !== -1); it3--, i++) {
        carry += (BASE * b256[it3]) >>> 0
        b256[it3] = (carry % 256) >>> 0
        carry = (carry / 256) >>> 0
      }
      if (carry !== 0) { throw new Error('Non-zero carry') }
      length = i
      psz++
    }
        // Skip leading zeroes in b256.
    var it4 = size - length
    while (it4 !== size && b256[it4] === 0) {
      it4++
    }
    var vch = new Uint8Array(zeroes + (size - it4))
    var j = zeroes
    while (it4 !== size) {
      vch[j++] = b256[it4++]
    }
    return vch
  }
  function decode (string) {
    var buffer = decodeUnsafe(string)
    if (buffer) { return buffer }
    throw new Error('Non-base' + BASE + ' character')
  }
  return {
    encode: encode,
    decodeUnsafe: decodeUnsafe,
    decode: decode
  }
}
module.exports = base


/***/ })

}]);