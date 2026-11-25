(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/@ledgerhq/devices/lib-es/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@ledgerhq/devices/lib-es/index.js ***!
  \********************************************************/
/*! exports provided: IIGenericHID, IIKeyboardHID, IIU2F, IICCID, IIWebUSB, DeviceModelId, ledgerUSBVendorId, getDeviceModel, identifyTargetId, identifyUSBProductId, identifyProductName, getBluetoothServiceUuids, getInfosForServiceUuid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IIGenericHID", function() { return IIGenericHID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IIKeyboardHID", function() { return IIKeyboardHID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IIU2F", function() { return IIU2F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IICCID", function() { return IICCID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IIWebUSB", function() { return IIWebUSB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceModelId", function() { return DeviceModelId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ledgerUSBVendorId", function() { return ledgerUSBVendorId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDeviceModel", function() { return getDeviceModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identifyTargetId", function() { return identifyTargetId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identifyUSBProductId", function() { return identifyUSBProductId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identifyProductName", function() { return identifyProductName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBluetoothServiceUuids", function() { return getBluetoothServiceUuids; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInfosForServiceUuid", function() { return getInfosForServiceUuid; });
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! semver */ "./node_modules/semver/index.js");
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(semver__WEBPACK_IMPORTED_MODULE_0__);
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
var _a;

/**
 * The USB product IDs will be defined as MMII, encoding a model (MM) and an interface bitfield (II)
 *
 ** Model
 * Ledger Nano S : 0x10
 * Ledger Blue : 0x00
 * Ledger Nano X : 0x40
 *
 ** Interface support bitfield
 * Generic HID : 0x01
 * Keyboard HID : 0x02
 * U2F : 0x04
 * CCID : 0x08
 * WebUSB : 0x10
 */
var IIGenericHID = 0x01;
var IIKeyboardHID = 0x02;
var IIU2F = 0x04;
var IICCID = 0x08;
var IIWebUSB = 0x10;
var DeviceModelId;
(function (DeviceModelId) {
    DeviceModelId["blue"] = "blue";
    DeviceModelId["nanoS"] = "nanoS";
    DeviceModelId["nanoSP"] = "nanoSP";
    DeviceModelId["nanoX"] = "nanoX";
    DeviceModelId["nanoFTS"] = "nanoFTS";
})(DeviceModelId || (DeviceModelId = {}));
var devices = (_a = {},
    _a[DeviceModelId.blue] = {
        id: DeviceModelId.blue,
        productName: "Ledger Blue",
        productIdMM: 0x00,
        legacyUsbProductId: 0x0000,
        usbOnly: true,
        memorySize: 480 * 1024,
        masks: [0x31000000, 0x31010000],
        getBlockSize: function (_firwareVersion) { return 4 * 1024; }
    },
    _a[DeviceModelId.nanoS] = {
        id: DeviceModelId.nanoS,
        productName: "Ledger Nano S",
        productIdMM: 0x10,
        legacyUsbProductId: 0x0001,
        usbOnly: true,
        memorySize: 320 * 1024,
        masks: [0x31100000],
        getBlockSize: function (firmwareVersion) {
            var _a;
            return semver__WEBPACK_IMPORTED_MODULE_0___default.a.lt((_a = semver__WEBPACK_IMPORTED_MODULE_0___default.a.coerce(firmwareVersion)) !== null && _a !== void 0 ? _a : "", "2.0.0")
                ? 4 * 1024
                : 2 * 1024;
        }
    },
    _a[DeviceModelId.nanoSP] = {
        id: DeviceModelId.nanoSP,
        productName: "Ledger Nano S Plus",
        productIdMM: 0x50,
        legacyUsbProductId: 0x0005,
        usbOnly: true,
        memorySize: 1536 * 1024,
        masks: [0x33100000],
        getBlockSize: function (_firmwareVersion) { return 32; }
    },
    _a[DeviceModelId.nanoX] = {
        id: DeviceModelId.nanoX,
        productName: "Ledger Nano X",
        productIdMM: 0x40,
        legacyUsbProductId: 0x0004,
        usbOnly: false,
        memorySize: 2 * 1024 * 1024,
        masks: [0x33000000],
        getBlockSize: function (_firwareVersion) { return 4 * 1024; },
        bluetoothSpec: [
            {
                serviceUuid: "13d63400-2c97-0004-0000-4c6564676572",
                notifyUuid: "13d63400-2c97-0004-0001-4c6564676572",
                writeUuid: "13d63400-2c97-0004-0002-4c6564676572",
                writeCmdUuid: "13d63400-2c97-0004-0003-4c6564676572"
            },
        ]
    },
    _a[DeviceModelId.nanoFTS] = {
        id: DeviceModelId.nanoFTS,
        productName: "Ledger Nano FTS",
        productIdMM: 0x60,
        legacyUsbProductId: 0x0006,
        usbOnly: false,
        memorySize: 2 * 1024 * 1024,
        masks: [0x33200000],
        getBlockSize: function (_firwareVersion) { return 4 * 1024; },
        bluetoothSpec: [
            {
                serviceUuid: "13d63400-2c97-6004-0000-4c6564676572",
                notifyUuid: "13d63400-2c97-6004-0001-4c6564676572",
                writeUuid: "13d63400-2c97-6004-0002-4c6564676572",
                writeCmdUuid: "13d63400-2c97-6004-0003-4c6564676572"
            },
        ]
    },
    _a);
var productMap = {
    Blue: DeviceModelId.blue,
    "Nano S": DeviceModelId.nanoS,
    "Nano S Plus": DeviceModelId.nanoSP,
    "Nano X": DeviceModelId.nanoX,
    "Nano FTS": DeviceModelId.nanoFTS
};
var devicesList = Object.values(devices);
/**
 *
 */
var ledgerUSBVendorId = 0x2c97;
/**
 *
 */
var getDeviceModel = function (id) {
    var info = devices[id];
    if (!info)
        throw new Error("device '" + id + "' does not exist");
    return info;
};
/**
 * Given a `targetId`, return the deviceModel associated to it,
 * based on the first two bytes.
 */
var identifyTargetId = function (targetId) {
    var deviceModel = devicesList.find(function (_a) {
        var masks = _a.masks;
        return masks.find(function (mask) { return (targetId & 0xffff0000) === mask; });
    });
    return deviceModel;
};
/**
 *
 */
var identifyUSBProductId = function (usbProductId) {
    var legacy = devicesList.find(function (d) { return d.legacyUsbProductId === usbProductId; });
    if (legacy)
        return legacy;
    var mm = usbProductId >> 8;
    var deviceModel = devicesList.find(function (d) { return d.productIdMM === mm; });
    return deviceModel;
};
var identifyProductName = function (productName) {
    var deviceModel = devicesList.find(function (d) { return d.id === productMap[productName]; });
    return deviceModel;
};
var bluetoothServices = [];
var serviceUuidToInfos = {};
for (var id in devices) {
    var deviceModel = devices[id];
    var bluetoothSpec = deviceModel.bluetoothSpec;
    if (bluetoothSpec) {
        for (var i = 0; i < bluetoothSpec.length; i++) {
            var spec = bluetoothSpec[i];
            bluetoothServices.push(spec.serviceUuid);
            serviceUuidToInfos[spec.serviceUuid] = serviceUuidToInfos[spec.serviceUuid.replace(/-/g, "")] = __assign({ deviceModel: deviceModel }, spec);
        }
    }
}
/**
 *
 */
var getBluetoothServiceUuids = function () { return bluetoothServices; };
/**
 *
 */
var getInfosForServiceUuid = function (uuid) { return serviceUuidToInfos[uuid.toLowerCase()]; };
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@ledgerhq/devices/lib/hid-framing.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ledgerhq/devices/lib/hid-framing.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
exports.__esModule = true;
var errors_1 = __webpack_require__(/*! @ledgerhq/errors */ "./node_modules/@ledgerhq/errors/lib-es/index.js");
var Tag = 0x05;
function asUInt16BE(value) {
    var b = Buffer.alloc(2);
    b.writeUInt16BE(value, 0);
    return b;
}
var initialAcc = {
    data: Buffer.alloc(0),
    dataLength: 0,
    sequence: 0
};
/**
 *
 */
var createHIDframing = function (channel, packetSize) {
    return {
        makeBlocks: function (apdu) {
            var data = Buffer.concat([asUInt16BE(apdu.length), apdu]);
            var blockSize = packetSize - 5;
            var nbBlocks = Math.ceil(data.length / blockSize);
            data = Buffer.concat([
                data,
                Buffer.alloc(nbBlocks * blockSize - data.length + 1).fill(0),
            ]);
            var blocks = [];
            for (var i = 0; i < nbBlocks; i++) {
                var head = Buffer.alloc(5);
                head.writeUInt16BE(channel, 0);
                head.writeUInt8(Tag, 2);
                head.writeUInt16BE(i, 3);
                var chunk = data.slice(i * blockSize, (i + 1) * blockSize);
                blocks.push(Buffer.concat([head, chunk]));
            }
            return blocks;
        },
        reduceResponse: function (acc, chunk) {
            var _a = acc || initialAcc, data = _a.data, dataLength = _a.dataLength, sequence = _a.sequence;
            if (chunk.readUInt16BE(0) !== channel) {
                throw new errors_1.TransportError("Invalid channel", "InvalidChannel");
            }
            if (chunk.readUInt8(2) !== Tag) {
                throw new errors_1.TransportError("Invalid tag", "InvalidTag");
            }
            if (chunk.readUInt16BE(3) !== sequence) {
                throw new errors_1.TransportError("Invalid sequence", "InvalidSequence");
            }
            if (!acc) {
                dataLength = chunk.readUInt16BE(5);
            }
            sequence++;
            var chunkData = chunk.slice(acc ? 5 : 7);
            data = Buffer.concat([data, chunkData]);
            if (data.length > dataLength) {
                data = data.slice(0, dataLength);
            }
            return {
                data: data,
                dataLength: dataLength,
                sequence: sequence
            };
        },
        getReducedResult: function (acc) {
            if (acc && acc.dataLength === acc.data.length) {
                return acc.data;
            }
        }
    };
};
exports["default"] = createHIDframing;
//# sourceMappingURL=hid-framing.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node-libs-browser/node_modules/buffer/index.js */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/@ledgerhq/hw-transport-webhid/lib-es/TransportWebHID.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@ledgerhq/hw-transport-webhid/lib-es/TransportWebHID.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var _ledgerhq_hw_transport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ledgerhq/hw-transport */ "./node_modules/@ledgerhq/hw-transport-webhid/node_modules/@ledgerhq/hw-transport/lib-es/Transport.js");
/* harmony import */ var _ledgerhq_devices_lib_hid_framing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ledgerhq/devices/lib/hid-framing */ "./node_modules/@ledgerhq/devices/lib/hid-framing.js");
/* harmony import */ var _ledgerhq_devices_lib_hid_framing__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ledgerhq_devices_lib_hid_framing__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ledgerhq_devices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ledgerhq/devices */ "./node_modules/@ledgerhq/devices/lib-es/index.js");
/* harmony import */ var _ledgerhq_logs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ledgerhq/logs */ "./node_modules/@ledgerhq/logs/lib-es/index.js");
/* harmony import */ var _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ledgerhq/errors */ "./node_modules/@ledgerhq/errors/lib-es/index.js");
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
        while (_) try {
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





var ledgerDevices = [
    {
        vendorId: _ledgerhq_devices__WEBPACK_IMPORTED_MODULE_2__["ledgerUSBVendorId"]
    },
];
var isSupported = function () {
    return Promise.resolve(!!(window.navigator && window.navigator.hid));
};
var getHID = function () {
    // $FlowFixMe
    var hid = navigator.hid;
    if (!hid)
        throw new _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_4__["TransportError"]("navigator.hid is not supported", "HIDNotSupported");
    return hid;
};
function requestLedgerDevices() {
    return __awaiter(this, void 0, void 0, function () {
        var device;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getHID().requestDevice({
                        filters: ledgerDevices
                    })];
                case 1:
                    device = _a.sent();
                    if (Array.isArray(device))
                        return [2 /*return*/, device];
                    return [2 /*return*/, [device]];
            }
        });
    });
}
function getLedgerDevices() {
    return __awaiter(this, void 0, void 0, function () {
        var devices;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getHID().getDevices()];
                case 1:
                    devices = _a.sent();
                    return [2 /*return*/, devices.filter(function (d) { return d.vendorId === _ledgerhq_devices__WEBPACK_IMPORTED_MODULE_2__["ledgerUSBVendorId"]; })];
            }
        });
    });
}
function getFirstLedgerDevice() {
    return __awaiter(this, void 0, void 0, function () {
        var existingDevices, devices;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getLedgerDevices()];
                case 1:
                    existingDevices = _a.sent();
                    if (existingDevices.length > 0)
                        return [2 /*return*/, existingDevices[0]];
                    return [4 /*yield*/, requestLedgerDevices()];
                case 2:
                    devices = _a.sent();
                    return [2 /*return*/, devices[0]];
            }
        });
    });
}
/**
 * WebHID Transport implementation
 * @example
 * import TransportWebHID from "@ledgerhq/hw-transport-webhid";
 * ...
 * TransportWebHID.create().then(transport => ...)
 */
var TransportWebHID = /** @class */ (function (_super) {
    __extends(TransportWebHID, _super);
    function TransportWebHID(device) {
        var _this = _super.call(this) || this;
        _this.channel = Math.floor(Math.random() * 0xffff);
        _this.packetSize = 64;
        _this.inputs = [];
        _this.read = function () {
            if (_this.inputs.length) {
                return Promise.resolve(_this.inputs.shift());
            }
            return new Promise(function (success) {
                _this.inputCallback = success;
            });
        };
        _this.onInputReport = function (e) {
            var buffer = Buffer.from(e.data.buffer);
            if (_this.inputCallback) {
                _this.inputCallback(buffer);
                _this.inputCallback = null;
            }
            else {
                _this.inputs.push(buffer);
            }
        };
        _this._disconnectEmitted = false;
        _this._emitDisconnect = function (e) {
            if (_this._disconnectEmitted)
                return;
            _this._disconnectEmitted = true;
            _this.emit("disconnect", e);
        };
        /**
         * Exchange with the device using APDU protocol.
         * @param apdu
         * @returns a promise of apdu response
         */
        _this.exchange = function (apdu) { return __awaiter(_this, void 0, void 0, function () {
            var b;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.exchangeAtomicImpl(function () { return __awaiter(_this, void 0, void 0, function () {
                            var _a, channel, packetSize, framing, blocks, i, result, acc, buffer;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _a = this, channel = _a.channel, packetSize = _a.packetSize;
                                        Object(_ledgerhq_logs__WEBPACK_IMPORTED_MODULE_3__["log"])("apdu", "=> " + apdu.toString("hex"));
                                        framing = _ledgerhq_devices_lib_hid_framing__WEBPACK_IMPORTED_MODULE_1___default()(channel, packetSize);
                                        blocks = framing.makeBlocks(apdu);
                                        i = 0;
                                        _b.label = 1;
                                    case 1:
                                        if (!(i < blocks.length)) return [3 /*break*/, 4];
                                        return [4 /*yield*/, this.device.sendReport(0, blocks[i])];
                                    case 2:
                                        _b.sent();
                                        _b.label = 3;
                                    case 3:
                                        i++;
                                        return [3 /*break*/, 1];
                                    case 4:
                                        if (!!(result = framing.getReducedResult(acc))) return [3 /*break*/, 6];
                                        return [4 /*yield*/, this.read()];
                                    case 5:
                                        buffer = _b.sent();
                                        acc = framing.reduceResponse(acc, buffer);
                                        return [3 /*break*/, 4];
                                    case 6:
                                        Object(_ledgerhq_logs__WEBPACK_IMPORTED_MODULE_3__["log"])("apdu", "<= " + result.toString("hex"));
                                        return [2 /*return*/, result];
                                }
                            });
                        }); })["catch"](function (e) {
                            if (e && e.message && e.message.includes("write")) {
                                _this._emitDisconnect(e);
                                throw new _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_4__["DisconnectedDeviceDuringOperation"](e.message);
                            }
                            throw e;
                        })];
                    case 1:
                        b = _a.sent();
                        return [2 /*return*/, b];
                }
            });
        }); };
        _this.device = device;
        _this.deviceModel =
            typeof device.productId === "number"
                ? Object(_ledgerhq_devices__WEBPACK_IMPORTED_MODULE_2__["identifyUSBProductId"])(device.productId)
                : undefined;
        device.addEventListener("inputreport", _this.onInputReport);
        return _this;
    }
    /**
     * Similar to create() except it will always display the device permission (even if some devices are already accepted).
     */
    TransportWebHID.request = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, device;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, requestLedgerDevices()];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 1]), device = _a[0];
                        return [2 /*return*/, TransportWebHID.open(device)];
                }
            });
        });
    };
    /**
     * Similar to create() except it will never display the device permission (it returns a Promise<?Transport>, null if it fails to find a device).
     */
    TransportWebHID.openConnected = function () {
        return __awaiter(this, void 0, void 0, function () {
            var devices;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getLedgerDevices()];
                    case 1:
                        devices = _a.sent();
                        if (devices.length === 0)
                            return [2 /*return*/, null];
                        return [2 /*return*/, TransportWebHID.open(devices[0])];
                }
            });
        });
    };
    /**
     * Create a Ledger transport with a HIDDevice
     */
    TransportWebHID.open = function (device) {
        return __awaiter(this, void 0, void 0, function () {
            var transport, onDisconnect;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, device.open()];
                    case 1:
                        _a.sent();
                        transport = new TransportWebHID(device);
                        onDisconnect = function (e) {
                            if (device === e.device) {
                                getHID().removeEventListener("disconnect", onDisconnect);
                                transport._emitDisconnect(new _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_4__["DisconnectedDevice"]());
                            }
                        };
                        getHID().addEventListener("disconnect", onDisconnect);
                        return [2 /*return*/, transport];
                }
            });
        });
    };
    /**
     * Release the transport device
     */
    TransportWebHID.prototype.close = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.exchangeBusyPromise];
                    case 1:
                        _a.sent();
                        this.device.removeEventListener("inputreport", this.onInputReport);
                        return [4 /*yield*/, this.device.close()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TransportWebHID.prototype.setScrambleKey = function () { };
    /**
     * Check if WebUSB transport is supported.
     */
    TransportWebHID.isSupported = isSupported;
    /**
     * List the WebUSB devices that was previously authorized by the user.
     */
    TransportWebHID.list = getLedgerDevices;
    /**
     * Actively listen to WebUSB devices and emit ONE device
     * that was either accepted before, if not it will trigger the native permission UI.
     *
     * Important: it must be called in the context of a UI click!
     */
    TransportWebHID.listen = function (observer) {
        var unsubscribed = false;
        getFirstLedgerDevice().then(function (device) {
            if (!device) {
                observer.error(new _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_4__["TransportOpenUserCancelled"]("Access denied to use Ledger device"));
            }
            else if (!unsubscribed) {
                var deviceModel = typeof device.productId === "number"
                    ? Object(_ledgerhq_devices__WEBPACK_IMPORTED_MODULE_2__["identifyUSBProductId"])(device.productId)
                    : undefined;
                observer.next({
                    type: "add",
                    descriptor: device,
                    deviceModel: deviceModel
                });
                observer.complete();
            }
        }, function (error) {
            observer.error(new _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_4__["TransportOpenUserCancelled"](error.message));
        });
        function unsubscribe() {
            unsubscribed = true;
        }
        return {
            unsubscribe: unsubscribe
        };
    };
    return TransportWebHID;
}(_ledgerhq_hw_transport__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (TransportWebHID);
//# sourceMappingURL=TransportWebHID.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node-libs-browser/node_modules/buffer/index.js */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/@ledgerhq/hw-transport-webhid/node_modules/@ledgerhq/hw-transport/lib-es/Transport.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ledgerhq/hw-transport-webhid/node_modules/@ledgerhq/hw-transport/lib-es/Transport.js ***!
  \************************************************************************************************************/
/*! exports provided: TransportError, TransportStatusError, StatusCodes, getAltStatusMessage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ledgerhq/errors */ "./node_modules/@ledgerhq/errors/lib-es/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransportError", function() { return _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["TransportError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransportStatusError", function() { return _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["TransportStatusError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatusCodes", function() { return _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["StatusCodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAltStatusMessage", function() { return _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["getAltStatusMessage"]; });

/* harmony import */ var _ledgerhq_logs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ledgerhq/logs */ "./node_modules/@ledgerhq/logs/lib-es/index.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const DEFAULT_LOG_TYPE = "transport";
/**
 * The Transport class defines a generic interface for communicating with a Ledger hardware wallet.
 * There are different kind of transports based on the technology (channels like U2F, HID, Bluetooth, Webusb) and environment (Node, Web,...).
 * It is an abstract class that needs to be implemented.
 */
class Transport {
    constructor({ context, logType } = {}) {
        this.exchangeTimeout = 30000;
        this.unresponsiveTimeout = 15000;
        this.deviceModel = null;
        this._events = new events__WEBPACK_IMPORTED_MODULE_0___default.a();
        /**
         * Send data to the device using the higher level API.
         *
         * @param {number} cla - The instruction class for the command.
         * @param {number} ins - The instruction code for the command.
         * @param {number} p1 - The first parameter for the instruction.
         * @param {number} p2 - The second parameter for the instruction.
         * @param {Buffer} data - The data to be sent. Defaults to an empty buffer.
         * @param {Array<number>} statusList - A list of acceptable status codes for the response. Defaults to [StatusCodes.OK].
         * @param {Object} options - Contains optional options for the exchange function
         *  - abortTimeoutMs: stop the send after a given timeout. Another timeout exists
         *    to detect unresponsive device (see `unresponsiveTimeout`). This timeout aborts the exchange.
         * @returns {Promise<Buffer>} A promise that resolves with the response data from the device.
         */
        this.send = (cla, ins, p1, p2, data = Buffer.alloc(0), statusList = [_ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["StatusCodes"].OK], { abortTimeoutMs } = {}) => __awaiter(this, void 0, void 0, function* () {
            const tracer = this.tracer.withUpdatedContext({ function: "send" });
            if (data.length >= 256) {
                tracer.trace("data.length exceeded 256 bytes limit", { dataLength: data.length });
                throw new _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["TransportError"]("data.length exceed 256 bytes limit. Got: " + data.length, "DataLengthTooBig");
            }
            tracer.trace("Starting an exchange", { abortTimeoutMs });
            const response = yield this.exchange(
            // The size of the data is added in 1 byte just before `data`
            Buffer.concat([Buffer.from([cla, ins, p1, p2]), Buffer.from([data.length]), data]), { abortTimeoutMs });
            tracer.trace("Received response from exchange");
            const sw = response.readUInt16BE(response.length - 2);
            if (!statusList.some(s => s === sw)) {
                throw new _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["TransportStatusError"](sw);
            }
            return response;
        });
        this._appAPIlock = null;
        this.tracer = new _ledgerhq_logs__WEBPACK_IMPORTED_MODULE_2__["LocalTracer"](logType !== null && logType !== void 0 ? logType : DEFAULT_LOG_TYPE, context);
    }
    /**
     * Send data to the device using a low level API.
     * It's recommended to use the "send" method for a higher level API.
     * @param {Buffer} apdu - The data to send.
     * @param {Object} options - Contains optional options for the exchange function
     *  - abortTimeoutMs: stop the exchange after a given timeout. Another timeout exists
     *    to detect unresponsive device (see `unresponsiveTimeout`). This timeout aborts the exchange.
     * @returns {Promise<Buffer>} A promise that resolves with the response data from the device.
     */
    exchange(_apdu, { abortTimeoutMs: _abortTimeoutMs } = {}) {
        throw new Error("exchange not implemented");
    }
    /**
     * Send apdus in batch to the device using a low level API.
     * The default implementation is to call exchange for each apdu.
     * @param {Array<Buffer>} apdus - array of apdus to send.
     * @param {Observer<Buffer>} observer - an observer that will receive the response of each apdu.
     * @returns {Subscription} A Subscription object on which you can call ".unsubscribe()" to stop sending apdus.
     */
    exchangeBulk(apdus, observer) {
        let unsubscribed = false;
        const unsubscribe = () => {
            unsubscribed = true;
        };
        const main = () => __awaiter(this, void 0, void 0, function* () {
            if (unsubscribed)
                return;
            for (const apdu of apdus) {
                const r = yield this.exchange(apdu);
                if (unsubscribed)
                    return;
                const status = r.readUInt16BE(r.length - 2);
                if (status !== _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["StatusCodes"].OK) {
                    throw new _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["TransportStatusError"](status);
                }
                observer.next(r);
            }
        });
        main().then(() => !unsubscribed && observer.complete(), e => !unsubscribed && observer.error(e));
        return { unsubscribe };
    }
    /**
     * Set the "scramble key" for the next data exchanges with the device.
     * Each app can have a different scramble key and it is set internally during instantiation.
     * @param {string} key - The scramble key to set.
     * deprecated This method is no longer needed for modern transports and should be migrated away from.
     * no @ before deprecated as it breaks documentationjs on version 14.0.2
     * https://github.com/documentationjs/documentation/issues/1596
     */
    setScrambleKey(_key) { }
    /**
     * Close the connection with the device.
     *
     * Note: for certain transports (hw-transport-node-hid-singleton for ex), once the promise resolved,
     * the transport instance is actually still cached, and the device is disconnected only after a defined timeout.
     * But for the consumer of the Transport, this does not matter and it can consider the transport to be closed.
     *
     * @returns {Promise<void>} A promise that resolves when the transport is closed.
     */
    close() {
        return Promise.resolve();
    }
    /**
     * Listen for an event on the transport instance.
     * Transport implementations may have specific events. Common events include:
     * "disconnect" : triggered when the transport is disconnected.
     * @param {string} eventName - The name of the event to listen for.
     * @param {(...args: Array<any>) => any} cb - The callback function to be invoked when the event occurs.
     */
    on(eventName, cb) {
        this._events.on(eventName, cb);
    }
    /**
     * Stop listening to an event on an instance of transport.
     */
    off(eventName, cb) {
        this._events.removeListener(eventName, cb);
    }
    emit(event, ...args) {
        this._events.emit(event, ...args);
    }
    /**
     * Enable or not logs of the binary exchange
     */
    setDebugMode() {
        console.warn("setDebugMode is deprecated. use @ledgerhq/logs instead. No logs are emitted in this anymore.");
    }
    /**
     * Set a timeout (in milliseconds) for the exchange call. Only some transport might implement it. (e.g. U2F)
     */
    setExchangeTimeout(exchangeTimeout) {
        this.exchangeTimeout = exchangeTimeout;
    }
    /**
     * Define the delay before emitting "unresponsive" on an exchange that does not respond
     */
    setExchangeUnresponsiveTimeout(unresponsiveTimeout) {
        this.unresponsiveTimeout = unresponsiveTimeout;
    }
    /**
     * create() allows to open the first descriptor available or
     * throw if there is none or if timeout is reached.
     * This is a light helper, alternative to using listen() and open() (that you may need for any more advanced usecase)
     * @example
    TransportFoo.create().then(transport => ...)
     */
    static create(openTimeout = 3000, listenTimeout) {
        return new Promise((resolve, reject) => {
            let found = false;
            const sub = this.listen({
                next: e => {
                    found = true;
                    if (sub)
                        sub.unsubscribe();
                    if (listenTimeoutId)
                        clearTimeout(listenTimeoutId);
                    this.open(e.descriptor, openTimeout).then(resolve, reject);
                },
                error: e => {
                    if (listenTimeoutId)
                        clearTimeout(listenTimeoutId);
                    reject(e);
                },
                complete: () => {
                    if (listenTimeoutId)
                        clearTimeout(listenTimeoutId);
                    if (!found) {
                        reject(new _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["TransportError"](this.ErrorMessage_NoDeviceFound, "NoDeviceFound"));
                    }
                },
            });
            const listenTimeoutId = listenTimeout
                ? setTimeout(() => {
                    sub.unsubscribe();
                    reject(new _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["TransportError"](this.ErrorMessage_ListenTimeout, "ListenTimeout"));
                }, listenTimeout)
                : null;
        });
    }
    /**
     * Wrapper to make an exchange "atomic" (blocking any other exchange)
     *
     * It also handles "unresponsiveness" by emitting "unresponsive" and "responsive" events.
     *
     * @param f The exchange job, using the transport to run
     * @returns a Promise resolving with the output of the given job
     */
    exchangeAtomicImpl(f) {
        return __awaiter(this, void 0, void 0, function* () {
            const tracer = this.tracer.withUpdatedContext({
                function: "exchangeAtomicImpl",
                unresponsiveTimeout: this.unresponsiveTimeout,
            });
            if (this.exchangeBusyPromise) {
                tracer.trace("Atomic exchange is already busy");
                throw new _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["TransportRaceCondition"]("An action was already pending on the Ledger device. Please deny or reconnect.");
            }
            // Sets the atomic guard
            let resolveBusy;
            const busyPromise = new Promise(r => {
                resolveBusy = r;
            });
            this.exchangeBusyPromise = busyPromise;
            // The device unresponsiveness handler
            let unresponsiveReached = false;
            const timeout = setTimeout(() => {
                tracer.trace(`Timeout reached, emitting Transport event "unresponsive"`, {
                    unresponsiveTimeout: this.unresponsiveTimeout,
                });
                unresponsiveReached = true;
                this.emit("unresponsive");
            }, this.unresponsiveTimeout);
            try {
                const res = yield f();
                if (unresponsiveReached) {
                    tracer.trace("Device was unresponsive, emitting responsive");
                    this.emit("responsive");
                }
                return res;
            }
            finally {
                tracer.trace("Finalize, clearing busy guard");
                clearTimeout(timeout);
                if (resolveBusy)
                    resolveBusy();
                this.exchangeBusyPromise = null;
            }
        });
    }
    decorateAppAPIMethods(self, methods, scrambleKey) {
        for (const methodName of methods) {
            self[methodName] = this.decorateAppAPIMethod(methodName, self[methodName], self, scrambleKey);
        }
    }
    decorateAppAPIMethod(methodName, f, ctx, scrambleKey) {
        return (...args) => __awaiter(this, void 0, void 0, function* () {
            const { _appAPIlock } = this;
            if (_appAPIlock) {
                return Promise.reject(new _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["TransportError"]("Ledger Device is busy (lock " + _appAPIlock + ")", "TransportLocked"));
            }
            try {
                this._appAPIlock = methodName;
                this.setScrambleKey(scrambleKey);
                return yield f.apply(ctx, args);
            }
            finally {
                this._appAPIlock = null;
            }
        });
    }
    /**
     * Sets the context used by the logging/tracing mechanism
     *
     * Useful when re-using (cached) the same Transport instance,
     * but with a new tracing context.
     *
     * @param context A TraceContext, that can undefined to reset the context
     */
    setTraceContext(context) {
        this.tracer = this.tracer.withContext(context);
    }
    /**
     * Updates the context used by the logging/tracing mechanism
     *
     * The update only overrides the key-value that are already defined in the current context.
     *
     * @param contextToAdd A TraceContext that will be added to the current context
     */
    updateTraceContext(contextToAdd) {
        this.tracer.updateContext(contextToAdd);
    }
    /**
     * Gets the tracing context of the transport instance
     */
    getTraceContext() {
        return this.tracer.getContext();
    }
}
Transport.ErrorMessage_ListenTimeout = "No Ledger device found (timeout)";
Transport.ErrorMessage_NoDeviceFound = "No Ledger device found";
/* harmony default export */ __webpack_exports__["default"] = (Transport);
//# sourceMappingURL=Transport.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node-libs-browser/node_modules/buffer/index.js */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/@ledgerhq/logs/lib-es/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@ledgerhq/logs/lib-es/index.js ***!
  \*****************************************************/
/*! exports provided: log, trace, LocalTracer, listen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trace", function() { return trace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalTracer", function() { return LocalTracer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listen", function() { return listen; });
let id = 0;
const subscribers = [];
/**
 * Logs something
 *
 * @param type a namespaced identifier of the log (it is not a level like "debug", "error" but more like "apdu-in", "apdu-out", etc...)
 * @param message a clear message of the log associated to the type
 */
const log = (type, message, data) => {
    const obj = {
        type,
        id: String(++id),
        date: new Date(),
    };
    if (message)
        obj.message = message;
    if (data)
        obj.data = data;
    dispatch(obj);
};
/**
 * A simple tracer function, only expanding the existing log function
 *
 * Its goal is to capture more context than a log function.
 * This is simple for now, but can be improved later.
 *
 * @param context Anything representing the context where the log occurred
 */
const trace = ({ type, message, data, context, }) => {
    const obj = {
        type,
        id: String(++id),
        date: new Date(),
    };
    if (message)
        obj.message = message;
    if (data)
        obj.data = data;
    if (context)
        obj.context = context;
    dispatch(obj);
};
/**
 * A simple tracer class, that can be used to avoid repetition when using the `trace` function
 *
 * Its goal is to capture more context than a log function.
 * This is simple for now, but can be improved later.
 *
 * @param type A given type (not level) for the current local tracer ("hw", "withDevice", etc.)
 * @param context Anything representing the context where the log occurred
 */
class LocalTracer {
    constructor(type, context) {
        this.type = type;
        this.context = context;
    }
    trace(message, data) {
        trace({
            type: this.type,
            message,
            data,
            context: this.context,
        });
    }
    getContext() {
        return this.context;
    }
    setContext(context) {
        this.context = context;
    }
    updateContext(contextToAdd) {
        this.context = Object.assign(Object.assign({}, this.context), contextToAdd);
    }
    getType() {
        return this.type;
    }
    setType(type) {
        this.type = type;
    }
    /**
     * Create a new instance of the LocalTracer with an updated `type`
     *
     * It does not mutate the calling instance, but returns a new LocalTracer,
     * following a simple builder pattern.
     */
    withType(type) {
        return new LocalTracer(type, this.context);
    }
    /**
     * Create a new instance of the LocalTracer with a new `context`
     *
     * It does not mutate the calling instance, but returns a new LocalTracer,
     * following a simple builder pattern.
     *
     * @param context A TraceContext, that can undefined to reset the context
     */
    withContext(context) {
        return new LocalTracer(this.type, context);
    }
    /**
     * Create a new instance of the LocalTracer with an updated `context`,
     * on which an additional context is merged with the existing one.
     *
     * It does not mutate the calling instance, but returns a new LocalTracer,
     * following a simple builder pattern.
     */
    withUpdatedContext(contextToAdd) {
        return new LocalTracer(this.type, Object.assign(Object.assign({}, this.context), contextToAdd));
    }
}
/**
 * Adds a subscribers to the emitted logs.
 *
 * @param cb that is called for each future log() with the Log object
 * @return a function that can be called to unsubscribe the listener
 */
const listen = (cb) => {
    subscribers.push(cb);
    return () => {
        const i = subscribers.indexOf(cb);
        if (i !== -1) {
            // equivalent of subscribers.splice(i, 1) // https://twitter.com/Rich_Harris/status/1125850391155965952
            subscribers[i] = subscribers[subscribers.length - 1];
            subscribers.pop();
        }
    };
};
function dispatch(log) {
    for (let i = 0; i < subscribers.length; i++) {
        try {
            subscribers[i](log);
        }
        catch (e) {
            console.error(e);
        }
    }
}
if (typeof window !== "undefined") {
    window.__ledgerLogsListen = listen;
}
//# sourceMappingURL=index.js.map

/***/ })

}]);