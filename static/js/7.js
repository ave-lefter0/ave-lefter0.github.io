(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/@fractalwagmi/popup-connection/dist/cjs/connection-manager.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@fractalwagmi/popup-connection/dist/cjs/connection-manager.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionManager = void 0;
const connection_1 = __webpack_require__(/*! ./core/connection */ "./node_modules/@fractalwagmi/popup-connection/dist/cjs/core/connection.js");
const constants_1 = __webpack_require__(/*! ./core/constants */ "./node_modules/@fractalwagmi/popup-connection/dist/cjs/core/constants.js");
const types_1 = __webpack_require__(/*! ./core/types */ "./node_modules/@fractalwagmi/popup-connection/dist/cjs/core/types.js");
const utils_1 = __webpack_require__(/*! ./core/utils */ "./node_modules/@fractalwagmi/popup-connection/dist/cjs/core/utils.js");
class ConnectionManager {
    constructor(platform) {
        this.platform = platform;
        this.connection = null;
        this.popupWindow = null;
        this.handleMessage = (e) => {
            var _a, _b;
            if (!(0, utils_1.validateOrigin)(e.origin)) {
                return;
            }
            const validatedOrigin = e.origin;
            if (!this.popupWindow) {
                return;
            }
            if (e.data.event === types_1.PopupEvent.HANDSHAKE && !this.connection) {
                if (!this.verifyAndResetNonce((_a = e.data.payload) === null || _a === void 0 ? void 0 : _a.nonce)) {
                    return;
                }
                this.popupWindow.postMessage({
                    event: types_1.PopupEvent.HANDSHAKE_ACK,
                    payload: {
                        platform: this.platform,
                    },
                }, validatedOrigin);
                this.connection = new connection_1.Connection(validatedOrigin, this.popupWindow);
                (_b = this.connectionUpdatedCallback) === null || _b === void 0 ? void 0 : _b.call(this, this.connection);
            }
            if (!this.connection) {
                return;
            }
            this.connection.runHandlersForEvent(e.data.event, e.data.payload);
            if (e.data.event === types_1.PopupEvent.POPUP_CLOSED && this.connection) {
                this.resetConnection();
                this.popupWindow = null;
            }
        };
    }
    initialize() {
        window.addEventListener('message', this.handleMessage);
        return this;
    }
    tearDown() {
        window.removeEventListener('message', this.handleMessage);
        this.resetConnection();
        return this;
    }
    open({ url, widthPx = constants_1.DEFAULT_POPUP_WIDTH_PX, heightPx = constants_1.DEFAULT_POPUP_HEIGHT_PX, nonce, }) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if ((_a = this.popupWindow) === null || _a === void 0 ? void 0 : _a.closed) {
                this.resetConnectionAndPopupWindow();
            }
            if (this.popupWindow) {
                return;
            }
            this.initialize();
            if (nonce) {
                this.nonce = nonce;
            }
            const left = window.screenX + (window.innerWidth - widthPx) / 2;
            const top = window.screenY + (window.innerHeight - heightPx) / 2;
            this.popupWindow = (0, utils_1.openPopup)({
                height: heightPx,
                left,
                top,
                url: typeof url === 'string' ? url : undefined,
                width: widthPx,
            });
            if (url instanceof Promise) {
                this.setUrl(yield url);
            }
        });
    }
    close() {
        if (!this.popupWindow) {
            return;
        }
        this.popupWindow.close();
        this.resetConnectionAndPopupWindow();
    }
    onConnectionUpdated(callback) {
        this.connectionUpdatedCallback = callback;
        return this;
    }
    getConnection() {
        return this.connection;
    }
    setUrl(url) {
        if (!this.popupWindow) {
            return;
        }
        this.popupWindow.location = url;
    }
    resetConnectionAndPopupWindow() {
        this.resetConnection();
        this.popupWindow = null;
    }
    resetConnection() {
        var _a, _b;
        (_a = this.connection) === null || _a === void 0 ? void 0 : _a.resetHandlers();
        this.connection = null;
        (_b = this.connectionUpdatedCallback) === null || _b === void 0 ? void 0 : _b.call(this, this.connection);
    }
    verifyAndResetNonce(uncheckedNonce) {
        if (!this.nonce) {
            return true;
        }
        const result = uncheckedNonce === this.nonce;
        if (result) {
            this.nonce = undefined;
        }
        return result;
    }
}
exports.ConnectionManager = ConnectionManager;
//# sourceMappingURL=connection-manager.js.map

/***/ }),

/***/ "./node_modules/@fractalwagmi/popup-connection/dist/cjs/core/connection.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@fractalwagmi/popup-connection/dist/cjs/core/connection.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Connection = void 0;
class Connection {
    constructor(validatedOrigin, targetWindow) {
        this.validatedOrigin = validatedOrigin;
        this.targetWindow = targetWindow;
        this.handlers = new Map();
    }
    off(event, callback) {
        const eventCallbacks = this.handlers.get(event);
        eventCallbacks === null || eventCallbacks === void 0 ? void 0 : eventCallbacks.delete(callback);
    }
    on(event, callback) {
        var _a;
        const eventCallbacks = (_a = this.handlers.get(event)) !== null && _a !== void 0 ? _a : new Set();
        eventCallbacks.add(callback);
        this.handlers.set(event, eventCallbacks);
    }
    send({ event, payload }) {
        this.targetWindow.postMessage({
            event,
            payload,
        }, this.validatedOrigin);
    }
    runHandlersForEvent(event, payload) {
        const eventCallbacks = this.handlers.get(event);
        if (!eventCallbacks) {
            return;
        }
        for (const callback of eventCallbacks) {
            callback(payload);
        }
    }
    resetHandlers() {
        this.handlers.clear();
    }
    export() {
        return {
            off: this.off.bind(this),
            on: this.on.bind(this),
            send: this.send.bind(this),
            validatedOrigin: this.validatedOrigin,
        };
    }
}
exports.Connection = Connection;
//# sourceMappingURL=connection.js.map

/***/ }),

/***/ "./node_modules/@fractalwagmi/popup-connection/dist/cjs/core/constants.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@fractalwagmi/popup-connection/dist/cjs/core/constants.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_POPUP_HEIGHT_PX = exports.DEFAULT_POPUP_WIDTH_PX = exports.FRACTAL_DOMAIN_HTTPS_WWW = exports.FRACTAL_DOMAIN_HTTPS = exports.FRACTAL_DOMAIN = void 0;
exports.FRACTAL_DOMAIN = 'fractal.is';
exports.FRACTAL_DOMAIN_HTTPS = 'https://fractal.is';
exports.FRACTAL_DOMAIN_HTTPS_WWW = 'https://www.fractal.is';
exports.DEFAULT_POPUP_WIDTH_PX = 400;
exports.DEFAULT_POPUP_HEIGHT_PX = 600;
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@fractalwagmi/popup-connection/dist/cjs/core/types.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@fractalwagmi/popup-connection/dist/cjs/core/types.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Platform = exports.PopupEvent = void 0;
var PopupEvent;
(function (PopupEvent) {
    PopupEvent["PROJECT_APPROVED"] = "PROJECT_APPROVED";
    PopupEvent["HANDSHAKE"] = "HANDSHAKE";
    PopupEvent["HANDSHAKE_ACK"] = "HANDSHAKE_ACK";
    PopupEvent["SIGNED_TRANSACTION"] = "SIGNED_TRANSACTION";
    PopupEvent["SIGNED_PARTIAL_TRANSACTION"] = "SIGNED_PARTIAL_TRANSACTION";
    PopupEvent["FAILED_TO_SIGN_TRANSACTION"] = "FAILED_TO_SIGN_TRANSACTION";
    PopupEvent["TRANSACTION_DENIED"] = "TRANSACTION_DENIED";
    PopupEvent["SOLANA_WALLET_ADAPTER_APPROVED"] = "SOLANA_WALLET_ADAPTER_APPROVED";
    PopupEvent["SOLANA_WALLET_ADAPTER_DENIED"] = "SOLANA_WALLET_ADAPTER_DENIED";
    PopupEvent["POPUP_CLOSED"] = "POPUP_CLOSED";
    PopupEvent["TRANSACTION_SIGNATURE_NEEDED"] = "TRANSACTION_SIGNATURE_NEEDED";
    PopupEvent["TRANSACTION_SIGNATURE_NEEDED_RESPONSE"] = "TRANSACTION_SIGNATURE_NEEDED_RESPONSE";
    PopupEvent["AUTH_LOADED"] = "AUTH_LOADED";
    PopupEvent["MESSAGE_SIGNATURE_NEEDED"] = "MESSAGE_SIGNATURE_NEEDED";
    PopupEvent["MESSAGE_SIGNATURE_NEEDED_RESPONSE"] = "MESSAGE_SIGNATURE_NEEDED_RESPONSE";
    PopupEvent["ONRAMP_FULFILLMENT_COMPLETE"] = "ONRAMP_FULFILLMENT_COMPLETE";
    PopupEvent["ONRAMP_REJECTED"] = "ONRAMP_REJECTED";
})(PopupEvent = exports.PopupEvent || (exports.PopupEvent = {}));
var Platform;
(function (Platform) {
    Platform["UNKNOWN"] = "UNKNOWN";
    Platform["REACT_SDK"] = "REACT_SDK";
    Platform["SOLANA_WALLET_ADAPTER"] = "SOLANA_WALLET_ADAPTER";
})(Platform = exports.Platform || (exports.Platform = {}));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/@fractalwagmi/popup-connection/dist/cjs/core/utils.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@fractalwagmi/popup-connection/dist/cjs/core/utils.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.openPopup = exports.validateOrigin = void 0;
const constants_1 = __webpack_require__(/*! ./constants */ "./node_modules/@fractalwagmi/popup-connection/dist/cjs/core/constants.js");
function validateOrigin(origin) {
    return origin === constants_1.FRACTAL_DOMAIN_HTTPS_WWW || origin === constants_1.FRACTAL_DOMAIN_HTTPS;
}
exports.validateOrigin = validateOrigin;
const TARGET = 'fractal:approval:popup';
const STATIC_POPUP_FEATURES = ['resizable', 'scrollbars=1', 'status=1'];
function openPopup({ left = 0, scope = window, top = 0, width = constants_1.DEFAULT_POPUP_HEIGHT_PX, height = constants_1.DEFAULT_POPUP_HEIGHT_PX, url, }) {
    return scope.open(url, TARGET, getPopupFeatures({ height, left, top, width }));
}
exports.openPopup = openPopup;
function getPopupFeatures({ height, left, top, width, }) {
    return [
        'popup',
        `left=${left}`,
        `top=${top}`,
        `width=${width}`,
        `height=${height}`,
        ...STATIC_POPUP_FEATURES,
    ].join(',');
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/@fractalwagmi/popup-connection/dist/cjs/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@fractalwagmi/popup-connection/dist/cjs/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_POPUP_WIDTH_PX = exports.DEFAULT_POPUP_HEIGHT_PX = exports.Connection = exports.Platform = exports.PopupEvent = void 0;
var types_1 = __webpack_require__(/*! ./core/types */ "./node_modules/@fractalwagmi/popup-connection/dist/cjs/core/types.js");
Object.defineProperty(exports, "PopupEvent", { enumerable: true, get: function () { return types_1.PopupEvent; } });
Object.defineProperty(exports, "Platform", { enumerable: true, get: function () { return types_1.Platform; } });
var connection_1 = __webpack_require__(/*! ./core/connection */ "./node_modules/@fractalwagmi/popup-connection/dist/cjs/core/connection.js");
Object.defineProperty(exports, "Connection", { enumerable: true, get: function () { return connection_1.Connection; } });
__exportStar(__webpack_require__(/*! ./use-popup-connection */ "./node_modules/@fractalwagmi/popup-connection/dist/cjs/use-popup-connection.js"), exports);
__exportStar(__webpack_require__(/*! ./connection-manager */ "./node_modules/@fractalwagmi/popup-connection/dist/cjs/connection-manager.js"), exports);
__exportStar(__webpack_require__(/*! ./payloads */ "./node_modules/@fractalwagmi/popup-connection/dist/cjs/payloads/index.js"), exports);
var constants_1 = __webpack_require__(/*! ./core/constants */ "./node_modules/@fractalwagmi/popup-connection/dist/cjs/core/constants.js");
Object.defineProperty(exports, "DEFAULT_POPUP_HEIGHT_PX", { enumerable: true, get: function () { return constants_1.DEFAULT_POPUP_HEIGHT_PX; } });
Object.defineProperty(exports, "DEFAULT_POPUP_WIDTH_PX", { enumerable: true, get: function () { return constants_1.DEFAULT_POPUP_WIDTH_PX; } });
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@fractalwagmi/popup-connection/dist/cjs/lib/guards.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@fractalwagmi/popup-connection/dist/cjs/lib/guards.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isObject = void 0;
function isObject(value) {
    if (value === null) {
        return false;
    }
    if (typeof value !== 'object') {
        return false;
    }
    return true;
}
exports.isObject = isObject;
//# sourceMappingURL=guards.js.map

/***/ }),

/***/ "./node_modules/@fractalwagmi/popup-connection/dist/cjs/payloads/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@fractalwagmi/popup-connection/dist/cjs/payloads/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./solana-wallet-adapter-approved */ "./node_modules/@fractalwagmi/popup-connection/dist/cjs/payloads/solana-wallet-adapter-approved.js"), exports);
__exportStar(__webpack_require__(/*! ./transaction-signature-needed */ "./node_modules/@fractalwagmi/popup-connection/dist/cjs/payloads/transaction-signature-needed.js"), exports);
__exportStar(__webpack_require__(/*! ./transaction-signature-needed-response */ "./node_modules/@fractalwagmi/popup-connection/dist/cjs/payloads/transaction-signature-needed-response.js"), exports);
__exportStar(__webpack_require__(/*! ./message-signature-needed */ "./node_modules/@fractalwagmi/popup-connection/dist/cjs/payloads/message-signature-needed.js"), exports);
__exportStar(__webpack_require__(/*! ./message-signature-needed-response */ "./node_modules/@fractalwagmi/popup-connection/dist/cjs/payloads/message-signature-needed-response.js"), exports);
__exportStar(__webpack_require__(/*! ./signed-partial-transaction */ "./node_modules/@fractalwagmi/popup-connection/dist/cjs/payloads/signed-partial-transaction.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@fractalwagmi/popup-connection/dist/cjs/payloads/message-signature-needed-response.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@fractalwagmi/popup-connection/dist/cjs/payloads/message-signature-needed-response.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.assertPayloadIsMessageSignatureNeededResponsePayload = void 0;
const guards_1 = __webpack_require__(/*! ../lib/guards */ "./node_modules/@fractalwagmi/popup-connection/dist/cjs/lib/guards.js");
function assertPayloadIsMessageSignatureNeededResponsePayload(payload) {
    if (!(0, guards_1.isObject)(payload)) {
        return false;
    }
    if (!('decodedSignature' in payload)) {
        return false;
    }
    return typeof payload.decodedSignature === 'string';
}
exports.assertPayloadIsMessageSignatureNeededResponsePayload = assertPayloadIsMessageSignatureNeededResponsePayload;
//# sourceMappingURL=message-signature-needed-response.js.map

/***/ }),

/***/ "./node_modules/@fractalwagmi/popup-connection/dist/cjs/payloads/message-signature-needed.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@fractalwagmi/popup-connection/dist/cjs/payloads/message-signature-needed.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.assertPayloadIsMessageSignatureNeededPayload = void 0;
const guards_1 = __webpack_require__(/*! ../lib/guards */ "./node_modules/@fractalwagmi/popup-connection/dist/cjs/lib/guards.js");
function assertPayloadIsMessageSignatureNeededPayload(payload) {
    if (!(0, guards_1.isObject)(payload)) {
        return false;
    }
    if (!('decodedMessage' in payload)) {
        return false;
    }
    return typeof payload.decodedMessage === 'string';
}
exports.assertPayloadIsMessageSignatureNeededPayload = assertPayloadIsMessageSignatureNeededPayload;
//# sourceMappingURL=message-signature-needed.js.map

/***/ }),

/***/ "./node_modules/@fractalwagmi/popup-connection/dist/cjs/payloads/signed-partial-transaction.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@fractalwagmi/popup-connection/dist/cjs/payloads/signed-partial-transaction.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.assertPayloadIsSignedPartialTransactionPayload = void 0;
const guards_1 = __webpack_require__(/*! ../lib/guards */ "./node_modules/@fractalwagmi/popup-connection/dist/cjs/lib/guards.js");
function assertPayloadIsSignedPartialTransactionPayload(payload) {
    if (!(0, guards_1.isObject)(payload)) {
        return false;
    }
    if (!('transactionB58String' in payload)) {
        return false;
    }
    return typeof payload.transactionB58String === 'string';
}
exports.assertPayloadIsSignedPartialTransactionPayload = assertPayloadIsSignedPartialTransactionPayload;
//# sourceMappingURL=signed-partial-transaction.js.map

/***/ }),

/***/ "./node_modules/@fractalwagmi/popup-connection/dist/cjs/payloads/solana-wallet-adapter-approved.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@fractalwagmi/popup-connection/dist/cjs/payloads/solana-wallet-adapter-approved.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertPayloadIsSolanaWalletAdapterApproved = void 0;
const guards_1 = __webpack_require__(/*! ../lib/guards */ "./node_modules/@fractalwagmi/popup-connection/dist/cjs/lib/guards.js");
function assertPayloadIsSolanaWalletAdapterApproved(payload) {
  if (!(0, guards_1.isObject)(payload)) {
    return false;
  }
  if (!('solanaPublicKey' in payload)) {
    return false;
  }
  if (typeof payload.solanaPublicKey !== 'string') {
    return false;
  }
  return true;
}
exports.assertPayloadIsSolanaWalletAdapterApproved = assertPayloadIsSolanaWalletAdapterApproved;

/***/ }),

/***/ "./node_modules/@fractalwagmi/popup-connection/dist/cjs/payloads/transaction-signature-needed-response.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@fractalwagmi/popup-connection/dist/cjs/payloads/transaction-signature-needed-response.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.assertPayloadIsTransactionSignatureNeededResponsePayload = void 0;
const guards_1 = __webpack_require__(/*! ../lib/guards */ "./node_modules/@fractalwagmi/popup-connection/dist/cjs/lib/guards.js");
function assertPayloadIsTransactionSignatureNeededResponsePayload(payload) {
    if (!(0, guards_1.isObject)(payload)) {
        return false;
    }
    if (!('signedB58Transactions' in payload)) {
        return false;
    }
    if (!Array.isArray(payload.signedB58Transactions)) {
        return false;
    }
    return payload.signedB58Transactions.every(value => typeof value === 'string');
}
exports.assertPayloadIsTransactionSignatureNeededResponsePayload = assertPayloadIsTransactionSignatureNeededResponsePayload;
//# sourceMappingURL=transaction-signature-needed-response.js.map

/***/ }),

/***/ "./node_modules/@fractalwagmi/popup-connection/dist/cjs/payloads/transaction-signature-needed.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@fractalwagmi/popup-connection/dist/cjs/payloads/transaction-signature-needed.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.assertPayloadIsTransactionSignatureNeededPayload = void 0;
const guards_1 = __webpack_require__(/*! ../lib/guards */ "./node_modules/@fractalwagmi/popup-connection/dist/cjs/lib/guards.js");
function assertPayloadIsTransactionSignatureNeededPayload(payload) {
    if (!(0, guards_1.isObject)(payload)) {
        return false;
    }
    if (!('unsignedB58Transactions' in payload)) {
        return false;
    }
    if (!Array.isArray(payload.unsignedB58Transactions)) {
        return false;
    }
    return payload.unsignedB58Transactions.every(value => typeof value === 'string');
}
exports.assertPayloadIsTransactionSignatureNeededPayload = assertPayloadIsTransactionSignatureNeededPayload;
//# sourceMappingURL=transaction-signature-needed.js.map

/***/ }),

/***/ "./node_modules/@fractalwagmi/popup-connection/dist/cjs/use-popup-connection.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@fractalwagmi/popup-connection/dist/cjs/use-popup-connection.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.usePopupConnection = void 0;
const connection_manager_1 = __webpack_require__(/*! ./connection-manager */ "./node_modules/@fractalwagmi/popup-connection/dist/cjs/connection-manager.js");
const constants_1 = __webpack_require__(/*! ./core/constants */ "./node_modules/@fractalwagmi/popup-connection/dist/cjs/core/constants.js");
const types_1 = __webpack_require__(/*! ./core/types */ "./node_modules/@fractalwagmi/popup-connection/dist/cjs/core/types.js");
const react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const usePopupConnection = ({ enabled = true, platform = types_1.Platform.UNKNOWN, widthPx = constants_1.DEFAULT_POPUP_WIDTH_PX, heightPx = constants_1.DEFAULT_POPUP_HEIGHT_PX, } = {}) => {
    const [exportedConnection, setExportedConnection] = (0, react_1.useState)(undefined);
    const connectionManagerRef = (0, react_1.useRef)(new connection_manager_1.ConnectionManager(platform).onConnectionUpdated((connection) => {
        setExportedConnection(connection === null || connection === void 0 ? void 0 : connection.export());
    }));
    const open = (0, react_1.useCallback)((url, nonce) => {
        connectionManagerRef.current.open({
            heightPx,
            nonce,
            url,
            widthPx,
        });
    }, [connectionManagerRef, widthPx, heightPx]);
    const close = (0, react_1.useCallback)(() => {
        connectionManagerRef.current.close();
    }, [connectionManagerRef]);
    (0, react_1.useEffect)(() => {
        if (enabled) {
            connectionManagerRef.current.initialize();
        }
        else {
            connectionManagerRef.current.tearDown();
        }
    }, [connectionManagerRef]);
    return {
        close,
        connection: exportedConnection,
        open,
    };
};
exports.usePopupConnection = usePopupConnection;
//# sourceMappingURL=use-popup-connection.js.map

/***/ }),

/***/ "./node_modules/@fractalwagmi/solana-wallet-adapter/dist/cjs/core/fractal-wallet-adapter-impl.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@fractalwagmi/solana-wallet-adapter/dist/cjs/core/fractal-wallet-adapter-impl.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
__webpack_require__(/*! core-js/modules/es.typed-array.at.js */ "./node_modules/core-js/modules/es.typed-array.at.js");
__webpack_require__(/*! core-js/modules/es.typed-array.set.js */ "./node_modules/core-js/modules/es.typed-array.set.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
__webpack_require__(/*! core-js/modules/esnext.typed-array.find-last.js */ "./node_modules/core-js/modules/esnext.typed-array.find-last.js");
__webpack_require__(/*! core-js/modules/esnext.typed-array.find-last-index.js */ "./node_modules/core-js/modules/esnext.typed-array.find-last-index.js");
__webpack_require__(/*! core-js/modules/esnext.typed-array.to-reversed.js */ "./node_modules/core-js/modules/esnext.typed-array.to-reversed.js");
__webpack_require__(/*! core-js/modules/esnext.typed-array.to-sorted.js */ "./node_modules/core-js/modules/esnext.typed-array.to-sorted.js");
__webpack_require__(/*! core-js/modules/esnext.typed-array.with.js */ "./node_modules/core-js/modules/esnext.typed-array.with.js");
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FractalWalletAdapterImpl = void 0;
const popup_connection_1 = __webpack_require__(/*! @fractalwagmi/popup-connection */ "./node_modules/@fractalwagmi/popup-connection/dist/cjs/index.js");
const wallet_adapter_base_1 = __webpack_require__(/*! @solana/wallet-adapter-base */ "./node_modules/@solana/wallet-adapter-base/lib/esm/index.js");
const web3_js_1 = __webpack_require__(/*! @solana/web3.js */ "./node_modules/@solana/web3.js/lib/index.browser.esm.js");
const bs58_1 = __importDefault(__webpack_require__(/*! bs58 */ "./node_modules/bs58/index.js"));
const nonce_1 = __webpack_require__(/*! ./nonce */ "./node_modules/@fractalwagmi/solana-wallet-adapter/dist/cjs/core/nonce.js");
const UNKNOWN_ERROR_MESSAGE = 'Unknown Error';
const FRACTAL_DOMAIN_HTTPS = 'https://fractal.is';
const APPROVE_PAGE_URL = `${FRACTAL_DOMAIN_HTTPS}/wallet-adapter/approve`;
const SIGN_PAGE_URL = `${FRACTAL_DOMAIN_HTTPS}/wallet-adapter/sign`;
const SIGN_MESSAGE_PAGE_URL = `${FRACTAL_DOMAIN_HTTPS}/wallet-adapter/sign/message`;
const MIN_POPUP_HEIGHT_PX = popup_connection_1.DEFAULT_POPUP_HEIGHT_PX;
const MAX_POPUP_WIDTH_PX = 850;
const LOCAL_STORAGE_KEY_FOR_PUBLIC_KEY = 'RdxqNYxF';
class FractalWalletAdapterImpl {
  constructor() {
    this.popupManager = new popup_connection_1.ConnectionManager(popup_connection_1.Platform.SOLANA_WALLET_ADAPTER);
    this.publicKey = null;
    this.connecting = false;
  }
  getPublicKey() {
    return this.publicKey;
  }
  connect() {
    return __awaiter(this, void 0, void 0, function* () {
      let resolve;
      let reject;
      const publicKeyInLocalStorage = window.localStorage.getItem(LOCAL_STORAGE_KEY_FOR_PUBLIC_KEY);
      if (publicKeyInLocalStorage) {
        this.publicKey = new web3_js_1.PublicKey(publicKeyInLocalStorage);
        return Promise.resolve();
      }
      const nonce = (0, nonce_1.createNonce)();
      this.popupManager.open({
        nonce,
        url: `${APPROVE_PAGE_URL}/${nonce}`
      });
      const handleSolanaWalletAdapterApproved = payload => {
        if (!(0, popup_connection_1.assertPayloadIsSolanaWalletAdapterApproved)(payload)) {
          reject(new wallet_adapter_base_1.WalletConnectionError('Malformed payload when setting up connection. ' + 'Expected { solanaPublicKey: string } but ' + `received ${JSON.stringify(payload)}`));
          this.popupManager.close();
          return;
        }
        try {
          this.publicKey = new web3_js_1.PublicKey(payload.solanaPublicKey);
          window.localStorage.setItem(LOCAL_STORAGE_KEY_FOR_PUBLIC_KEY, payload.solanaPublicKey);
          resolve();
        } catch (error) {
          const publicKeyError = new wallet_adapter_base_1.WalletPublicKeyError(error instanceof Error ? error.message : UNKNOWN_ERROR_MESSAGE, error);
          reject(publicKeyError);
        }
        this.popupManager.close();
      };
      const handleExplicitDenialByUser = () => {
        reject(new wallet_adapter_base_1.WalletConnectionError('The user denied the connection.'));
        this.popupManager.close();
      };
      const handleClosedByUser = () => {
        reject(new wallet_adapter_base_1.WalletConnectionError('The user denied the connection.'));
        this.popupManager.close();
      };
      this.popupManager.onConnectionUpdated(connection => {
        if (!connection) {
          return;
        }
        connection.on(popup_connection_1.PopupEvent.SOLANA_WALLET_ADAPTER_APPROVED, handleSolanaWalletAdapterApproved);
        connection.on(popup_connection_1.PopupEvent.SOLANA_WALLET_ADAPTER_DENIED, handleExplicitDenialByUser);
        connection.on(popup_connection_1.PopupEvent.POPUP_CLOSED, handleClosedByUser);
      });
      return new Promise((promiseResolver, promiseRejector) => {
        resolve = promiseResolver;
        reject = promiseRejector;
      });
    });
  }
  disconnect() {
    return __awaiter(this, void 0, void 0, function* () {
      this.popupManager.tearDown();
      this.publicKey = null;
      window.localStorage.removeItem(LOCAL_STORAGE_KEY_FOR_PUBLIC_KEY);
    });
  }
  signTransaction(transaction) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        this.checkWalletReadiness();
        const result = yield this.signTransactions([transaction]);
        return result[0];
      } catch (error) {
        let errorToThrow = error;
        if (!(error instanceof wallet_adapter_base_1.WalletError)) {
          errorToThrow = new wallet_adapter_base_1.WalletSignTransactionError(error instanceof Error ? error.message : UNKNOWN_ERROR_MESSAGE, error);
        }
        throw errorToThrow;
      }
    });
  }
  signAllTransactions(transactions) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        this.checkWalletReadiness();
        const result = yield this.signTransactions(transactions);
        return result;
      } catch (error) {
        let errorToThrow = error;
        if (!(error instanceof wallet_adapter_base_1.WalletError)) {
          errorToThrow = new wallet_adapter_base_1.WalletSignTransactionError(error instanceof Error ? error.message : UNKNOWN_ERROR_MESSAGE, error);
        }
        throw errorToThrow;
      }
    });
  }
  signMessage(encodedMessage) {
    return __awaiter(this, void 0, void 0, function* () {
      const decodedMessage = new TextDecoder().decode(encodedMessage);
      let resolve;
      let reject;
      const handleMessageSignatureNeededResponse = payload => {
        if (!(0, popup_connection_1.assertPayloadIsMessageSignatureNeededResponsePayload)(payload)) {
          const error = new wallet_adapter_base_1.WalletSignMessageError('Malformed payload when signing message. ' + 'Expected { decodedSignature: string } ' + `but received ${JSON.stringify(payload)}`);
          reject(error);
          this.popupManager.close();
          return;
        }
        const encodedSignature = Uint8Array.from(payload.decodedSignature.split(',').map(n => Number(n)));
        resolve(encodedSignature);
        this.popupManager.close();
      };
      const handleClosedOrDeniedByUser = () => {
        reject(new wallet_adapter_base_1.WalletSignMessageError('The user did not approve the message'));
        this.popupManager.close();
      };
      const handleAuthLoaded = () => {
        var _a;
        const payload = {
          decodedMessage
        };
        (_a = this.popupManager.getConnection()) === null || _a === void 0 ? void 0 : _a.send({
          event: popup_connection_1.PopupEvent.MESSAGE_SIGNATURE_NEEDED,
          payload
        });
      };
      const nonce = (0, nonce_1.createNonce)();
      this.popupManager.open({
        heightPx: Math.max(MIN_POPUP_HEIGHT_PX, Math.floor(window.innerHeight * 0.8)),
        nonce,
        url: `${SIGN_MESSAGE_PAGE_URL}/${nonce}`,
        widthPx: Math.min(MAX_POPUP_WIDTH_PX, Math.floor(window.innerWidth * 0.8))
      });
      this.popupManager.onConnectionUpdated(connection => {
        if (!connection) {
          return;
        }
        connection.on(popup_connection_1.PopupEvent.MESSAGE_SIGNATURE_NEEDED_RESPONSE, handleMessageSignatureNeededResponse);
        connection.on(popup_connection_1.PopupEvent.TRANSACTION_DENIED, handleClosedOrDeniedByUser);
        connection.on(popup_connection_1.PopupEvent.POPUP_CLOSED, handleClosedOrDeniedByUser);
        connection.on(popup_connection_1.PopupEvent.AUTH_LOADED, handleAuthLoaded);
      });
      return new Promise((promiseResolver, promiseRejector) => {
        resolve = promiseResolver;
        reject = promiseRejector;
      });
    });
  }
  signTransactions(transactions) {
    return __awaiter(this, void 0, void 0, function* () {
      let resolve;
      let reject;
      const handleTransactionSignatureNeededResponse = payload => {
        if (!(0, popup_connection_1.assertPayloadIsTransactionSignatureNeededResponsePayload)(payload)) {
          const error = new wallet_adapter_base_1.WalletSignTransactionError('Malformed payload when signing transactions. ' + 'Expected { signedB58Transactions: string[] } ' + `but received ${JSON.stringify(payload)}`);
          reject(error);
          this.popupManager.close();
          return;
        }
        const signedTransactions = payload.signedB58Transactions.map(signedB58Transaction => {
          return web3_js_1.Transaction.from(bs58_1.default.decode(signedB58Transaction));
        });
        resolve(signedTransactions);
        this.popupManager.close();
      };
      const handleClosedOrDeniedByUser = () => {
        reject(new wallet_adapter_base_1.WalletSignTransactionError('The user did not approve the transaction'));
        this.popupManager.close();
      };
      const handleAuthLoaded = () => {
        var _a;
        const payload = {
          unsignedB58Transactions: transactions.map(t => bs58_1.default.encode(t.serializeMessage()))
        };
        (_a = this.popupManager.getConnection()) === null || _a === void 0 ? void 0 : _a.send({
          event: popup_connection_1.PopupEvent.TRANSACTION_SIGNATURE_NEEDED,
          payload
        });
      };
      const nonce = (0, nonce_1.createNonce)();
      this.popupManager.open({
        heightPx: Math.max(MIN_POPUP_HEIGHT_PX, Math.floor(window.innerHeight * 0.8)),
        nonce,
        url: `${SIGN_PAGE_URL}/${nonce}`,
        widthPx: Math.min(MAX_POPUP_WIDTH_PX, Math.floor(window.innerWidth * 0.8))
      });
      this.popupManager.onConnectionUpdated(connection => {
        if (!connection) {
          return;
        }
        connection.on(popup_connection_1.PopupEvent.TRANSACTION_SIGNATURE_NEEDED_RESPONSE, handleTransactionSignatureNeededResponse);
        connection.on(popup_connection_1.PopupEvent.TRANSACTION_DENIED, handleClosedOrDeniedByUser);
        connection.on(popup_connection_1.PopupEvent.POPUP_CLOSED, handleClosedOrDeniedByUser);
        connection.on(popup_connection_1.PopupEvent.AUTH_LOADED, handleAuthLoaded);
      });
      return new Promise((promiseResolver, promiseRejector) => {
        resolve = promiseResolver;
        reject = promiseRejector;
      });
    });
  }
  checkWalletReadiness() {
    if (this.publicKey === null) {
      throw new wallet_adapter_base_1.WalletNotConnectedError('`publicKey` is null. Did you forget to call `.connect()`?');
    }
  }
}
exports.FractalWalletAdapterImpl = FractalWalletAdapterImpl;

/***/ }),

/***/ "./node_modules/@fractalwagmi/solana-wallet-adapter/dist/cjs/core/nonce.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@fractalwagmi/solana-wallet-adapter/dist/cjs/core/nonce.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNonce = void 0;
function createNonce() {
  return `${randomString()}${randomString()}${randomString()}`;
}
exports.createNonce = createNonce;
function randomString() {
  return (Math.random() + 1).toString(36).substring(7);
}

/***/ }),

/***/ "./node_modules/@fractalwagmi/solana-wallet-adapter/dist/cjs/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@fractalwagmi/solana-wallet-adapter/dist/cjs/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
__exportStar(__webpack_require__(/*! ./core/fractal-wallet-adapter-impl */ "./node_modules/@fractalwagmi/solana-wallet-adapter/dist/cjs/core/fractal-wallet-adapter-impl.js"), exports);

/***/ })

}]);