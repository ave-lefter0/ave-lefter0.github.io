(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Brc20~Perp~Token"],{

/***/ "./node_modules/finmath/src/boll.js":
/*!******************************************!*\
  !*** ./node_modules/finmath/src/boll.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var math_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! math-array */ "./node_modules/math-array/src/index.js");
/* harmony import */ var _sd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sd */ "./node_modules/finmath/src/sd.js");
/* harmony import */ var _ma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ma */ "./node_modules/finmath/src/ma.js");





/* harmony default export */ __webpack_exports__["default"] = ((datum, size = 20, times = 2, {
  ma: avg,
  sd
} = {}) => {
  avg = avg || Object(_ma__WEBPACK_IMPORTED_MODULE_2__["default"])(datum, size)
  sd = sd || Object(_sd__WEBPACK_IMPORTED_MODULE_1__["default"])(datum, size)

  const timesSd = Object(math_array__WEBPACK_IMPORTED_MODULE_0__["mul"])(sd, times)

  return {
    upper: Object(math_array__WEBPACK_IMPORTED_MODULE_0__["add"])(avg, timesSd),
    mid: avg,
    lower: Object(math_array__WEBPACK_IMPORTED_MODULE_0__["sub"])(avg, timesSd)
  }
});


/***/ }),

/***/ "./node_modules/finmath/src/common.js":
/*!********************************************!*\
  !*** ./node_modules/finmath/src/common.js ***!
  \********************************************/
/*! exports provided: isNumber, isArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
const isNumber = subject => typeof subject === 'number'

const {isArray} = Array


/***/ }),

/***/ "./node_modules/finmath/src/dma.js":
/*!*****************************************!*\
  !*** ./node_modules/finmath/src/dma.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./node_modules/finmath/src/common.js");
// Dynamic Weighted Moving Average




// @param {Number|Array.<Number>} alpha
/* harmony default export */ __webpack_exports__["default"] = ((data, alpha, noHead) => {
  const {length} = data

  if (alpha > 1) {
    return Array(length)
  }

  if (alpha === 1) {
    return data.slice()
  }

  const isArrayWeight = Object(_common__WEBPACK_IMPORTED_MODULE_0__["isArray"])(alpha)
  const ret = []

  let datum

  // period `i`
  let i = 0

  // `s` is the value of the DWMA at any time period `i`
  let s = 0

  // Handles head
  for (; i < length; i ++) {
    datum = data[i]

    if (
      Object(_common__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(datum)
      && (
        !isArrayWeight
        || Object(_common__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(datum)
      )
    ) {
      ret[i] = noHead
        ? 0
        : datum

      s = datum
      i ++

      break
    }
  }

  // Dynamic weights: an array of weights
  // Ref:
  // https://en.wikipedia.org/wiki/Moving_average#Exponential_moving_average
  // with a dynamic alpha
  if (isArrayWeight) {
    for (; i < length; i ++) {
      datum = data[i]

      Object(_common__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(datum) && Object(_common__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(alpha[i])
        ? s = ret[i] = alpha[i] * datum + (1 - alpha[i]) * s
        : ret[i] = ret[i - 1]
    }

    return ret
  }

  const o = 1 - alpha

  // Fixed alpha
  for (; i < length; i ++) {
    datum = data[i]

    Object(_common__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(datum)
      ? s = ret[i] = alpha * datum + o * s
      : ret[i] = ret[i - 1]
  }

  return ret
});


/***/ }),

/***/ "./node_modules/finmath/src/ema.js":
/*!*****************************************!*\
  !*** ./node_modules/finmath/src/ema.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dma */ "./node_modules/finmath/src/dma.js");
// Exponential moving average with 86% total weight



/* harmony default export */ __webpack_exports__["default"] = ((data, size) => Object(_dma__WEBPACK_IMPORTED_MODULE_0__["default"])(data, 2 / (size + 1)));


/***/ }),

/***/ "./node_modules/finmath/src/hhv-llv.js":
/*!*********************************************!*\
  !*** ./node_modules/finmath/src/hhv-llv.js ***!
  \*********************************************/
/*! exports provided: hhv, llv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hhv", function() { return hhv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "llv", function() { return llv; });
// @param {Number} start index to start [
// @param {Number} end index less than )
// -> [start, end)
const reduce = (array, start, end, reducer) => {
  let prev
  let i = start

  for (; i < end; i ++) {
    if (i in array) {
      if (prev === undefined) {
        prev = array[i]
        continue
      }

      prev = reducer(prev, array[i])
    }
  }

  return prev
}

const compare = (data, size, comparer) => {
  const {length} = data

  if (size > length) {
    return Array(length)
  }

  if (size <= 1) {
    return data.slice()
  }

  let i = size - 1
  const ret = []

  for (; i < length; i ++) {
    ret[i] = reduce(data, i - size + 1, i + 1, comparer)
  }

  return ret
}

const hhv = (data, size) =>
  compare(data, size, (a, b) => Math.max(a, b))

const llv = (data, size) =>
  compare(data, size, (a, b) => Math.min(a, b))


/***/ }),

/***/ "./node_modules/finmath/src/index.js":
/*!*******************************************!*\
  !*** ./node_modules/finmath/src/index.js ***!
  \*******************************************/
/*! exports provided: dma, sma, ema, ma, wma, sd, boll, macd, hhv, llv, add, sub, mul, div */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var math_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! math-array */ "./node_modules/math-array/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "add", function() { return math_array__WEBPACK_IMPORTED_MODULE_0__["add"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return math_array__WEBPACK_IMPORTED_MODULE_0__["sub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return math_array__WEBPACK_IMPORTED_MODULE_0__["mul"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "div", function() { return math_array__WEBPACK_IMPORTED_MODULE_0__["div"]; });

/* harmony import */ var _dma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dma */ "./node_modules/finmath/src/dma.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dma", function() { return _dma__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _sma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sma */ "./node_modules/finmath/src/sma.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sma", function() { return _sma__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _ema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ema */ "./node_modules/finmath/src/ema.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ema", function() { return _ema__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _ma__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ma */ "./node_modules/finmath/src/ma.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ma", function() { return _ma__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _wma__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wma */ "./node_modules/finmath/src/wma.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wma", function() { return _wma__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _sd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sd */ "./node_modules/finmath/src/sd.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sd", function() { return _sd__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _boll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./boll */ "./node_modules/finmath/src/boll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "boll", function() { return _boll__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _macd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./macd */ "./node_modules/finmath/src/macd.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "macd", function() { return _macd__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _hhv_llv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hhv-llv */ "./node_modules/finmath/src/hhv-llv.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hhv", function() { return _hhv_llv__WEBPACK_IMPORTED_MODULE_9__["hhv"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "llv", function() { return _hhv_llv__WEBPACK_IMPORTED_MODULE_9__["llv"]; });
















/***/ }),

/***/ "./node_modules/finmath/src/ma.js":
/*!****************************************!*\
  !*** ./node_modules/finmath/src/ma.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./node_modules/finmath/src/common.js");
// simple moving average




/* harmony default export */ __webpack_exports__["default"] = ((data, size) => {
  const {length} = data

  if (size <= 1) {
    return data.slice()
  }

  if (size > length) {
    return Array(length)
  }

  const prepare = size - 1
  const ret = []
  let sum = 0
  let i = 0
  let counter = 0
  let datum

  for (; i < length && counter < prepare; i ++) {
    datum = data[i]

    if (Object(_common__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(datum)) {
      sum += datum
      counter ++
    }
  }

  for (; i < length; i ++) {
    datum = data[i]

    if (Object(_common__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(datum)) {
      sum += datum
    }

    if (Object(_common__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(data[i - size])) {
      sum -= data[i - size]
    }

    ret[i] = sum / size
  }

  return ret
});


/***/ }),

/***/ "./node_modules/finmath/src/macd.js":
/*!******************************************!*\
  !*** ./node_modules/finmath/src/macd.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var math_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! math-array */ "./node_modules/math-array/src/index.js");
/* harmony import */ var _ema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ema */ "./node_modules/finmath/src/ema.js");




/* harmony default export */ __webpack_exports__["default"] = ((
  data,
  slowPeriods = 26,
  fastPeriods = 12,
  signalPeriods = 9
) => {
  const MACD = Object(math_array__WEBPACK_IMPORTED_MODULE_0__["sub"])(
    Object(_ema__WEBPACK_IMPORTED_MODULE_1__["default"])(data, fastPeriods),
    Object(_ema__WEBPACK_IMPORTED_MODULE_1__["default"])(data, slowPeriods),
    1
  )

  const signal = Object(_ema__WEBPACK_IMPORTED_MODULE_1__["default"])(MACD, signalPeriods)
  const histogram = Object(math_array__WEBPACK_IMPORTED_MODULE_0__["mul"])(2, Object(math_array__WEBPACK_IMPORTED_MODULE_0__["sub"])(MACD, signal), 1)

  return {
    MACD,
    signal,
    histogram
  }
});


/***/ }),

/***/ "./node_modules/finmath/src/sd.js":
/*!****************************************!*\
  !*** ./node_modules/finmath/src/sd.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ma */ "./node_modules/finmath/src/ma.js");


/* harmony default export */ __webpack_exports__["default"] = ((data, size) => {
  const {length} = data
  const avg = Object(_ma__WEBPACK_IMPORTED_MODULE_0__["default"])(data, size)
  const ret = []

  let i = size - 1
  let j
  let sum

  for (; i < length; i ++) {
    sum = 0
    j = i - size + 1

    for (; j <= i; j ++) {
      sum += (data[j] - avg[i]) ** 2
    }

    ret[i] = Math.sqrt(sum / size)
  }

  return ret
});


/***/ }),

/***/ "./node_modules/finmath/src/sma.js":
/*!*****************************************!*\
  !*** ./node_modules/finmath/src/sma.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dma */ "./node_modules/finmath/src/dma.js");
// Smoothed moving average



/* harmony default export */ __webpack_exports__["default"] = ((data, size, times = 1) => Object(_dma__WEBPACK_IMPORTED_MODULE_0__["default"])(data, times / size, 1));


/***/ }),

/***/ "./node_modules/finmath/src/wma.js":
/*!*****************************************!*\
  !*** ./node_modules/finmath/src/wma.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./node_modules/finmath/src/common.js");
// Weighted moving average




/* harmony default export */ __webpack_exports__["default"] = ((data, size) => {
  const {length} = data

  if (size <= 1) {
    return data.slice()
  }

  if (size > length) {
    return Array(length)
  }

  const ret = []
  const denominator = size * (size + 1) / 2
  const prepare = size - 1
  let sum = 0
  let numerator = 0
  let datum = 0
  let i = 0
  let real = - 1


  for (; i < prepare; i ++) {
    datum = data[i]

    if (Object(_common__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(datum)) {
      sum += datum
      numerator += (i + 1) * datum
    }
  }

  for (; i < length; i ++, real ++) {
    datum = data[i]

    if (Object(_common__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(datum)) {
      sum += datum
      numerator += size * datum
    }

    if (real >= 0 && Object(_common__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(data[real])) {
      sum -= data[real]
    }

    ret[i] = numerator / denominator
    numerator -= sum
  }

  return ret
});


/***/ }),

/***/ "./node_modules/math-array/src/add.js":
/*!********************************************!*\
  !*** ./node_modules/math-array/src/add.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/math-array/src/utils.js");



const add = (a, b) => a + b
const addReverse = (a, b) => b + a

/* harmony default export */ __webpack_exports__["default"] = ((a, b, n) =>
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["orderUnaware"])(a, b, add, addReverse, n));


/***/ }),

/***/ "./node_modules/math-array/src/div.js":
/*!********************************************!*\
  !*** ./node_modules/math-array/src/div.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/math-array/src/utils.js");



const div = (a, b) => {
  if (b === 0) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["error"])('divide by zero')
  }

  return a / b
}

/* harmony default export */ __webpack_exports__["default"] = ((a, b, n) => Object(_utils__WEBPACK_IMPORTED_MODULE_0__["orderAware"])(a, b, div, n));


/***/ }),

/***/ "./node_modules/math-array/src/index.js":
/*!**********************************************!*\
  !*** ./node_modules/math-array/src/index.js ***!
  \**********************************************/
/*! exports provided: add, sub, mul, div */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add */ "./node_modules/math-array/src/add.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "add", function() { return _add__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _sub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sub */ "./node_modules/math-array/src/sub.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return _sub__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _mul__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mul */ "./node_modules/math-array/src/mul.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return _mul__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _div__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./div */ "./node_modules/math-array/src/div.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "div", function() { return _div__WEBPACK_IMPORTED_MODULE_3__["default"]; });










/***/ }),

/***/ "./node_modules/math-array/src/mul.js":
/*!********************************************!*\
  !*** ./node_modules/math-array/src/mul.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/math-array/src/utils.js");



const mul = (a, b) => a * b

/* harmony default export */ __webpack_exports__["default"] = ((a, b, n) => Object(_utils__WEBPACK_IMPORTED_MODULE_0__["orderUnaware"])(a, b, mul, mul, n));


/***/ }),

/***/ "./node_modules/math-array/src/sub.js":
/*!********************************************!*\
  !*** ./node_modules/math-array/src/sub.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/math-array/src/utils.js");



const sub = (a, b) => a - b

/* harmony default export */ __webpack_exports__["default"] = ((a, b, n) => Object(_utils__WEBPACK_IMPORTED_MODULE_0__["orderAware"])(a, b, sub, n));


/***/ }),

/***/ "./node_modules/math-array/src/utils.js":
/*!**********************************************!*\
  !*** ./node_modules/math-array/src/utils.js ***!
  \**********************************************/
/*! exports provided: error, orderUnaware, orderAware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderUnaware", function() { return orderUnaware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderAware", function() { return orderAware; });
const error = (
  message
  // code
) => {
  const e = new Error(message)

  // if (code) {
  //   e.code = code
  // }

  throw e
}


const manipulate2Array = (a, b, mutator) => {
  if (a.length !== b.length) {
    error('the length of arrays not match')
  }

  return a.map((x, i) => mutator(x, b[i]))
}


const manipulateArray = (a, b, mutator) => {
  return a.map(x => mutator(x, b))
}


const isArray = (a, b) => [a, b].map(Array.isArray)

const cleanArray = (array) => {
  array.forEach((item, i) => {
    if (item !== item) {
      delete array[i]
    }
  })
}

const orderUnaware = (
  a, b, mutator, mutatorReverse,
  ensureNumber
) => {
  const [A, B] = isArray(a, b)

  const ret = A
    ? B
      ? manipulate2Array(a, b, mutator)
      : manipulateArray(a, b, mutator)
    : B
      ? manipulateArray(b, a, mutatorReverse)
      : error('at least one array is required')

  if (ensureNumber) {
    cleanArray(ret)
  }

  return ret
}


const orderAware = (
  a, b, mutator,
  ensureNumber
) => {
  const [A, B] = isArray(a, b)

  const ret = A
    ? B
      ? manipulate2Array(a, b, mutator)
      : manipulateArray(a, b, mutator)
    : error('the first argument must be an array')

  if (ensureNumber) {
    cleanArray(ret)
  }

  return ret
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/StockData.js":
/*!***********************************************************!*\
  !*** ./node_modules/technicalindicators/lib/StockData.js ***!
  \***********************************************************/
/*! exports provided: default, CandleData, CandleList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StockData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandleData", function() { return CandleData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandleList", function() { return CandleList; });
class StockData {
    constructor(open, high, low, close, reversedInput) {
        this.open = open;
        this.high = high;
        this.low = low;
        this.close = close;
        this.reversedInput = reversedInput;
    }
}
class CandleData {
}
class CandleList {
    constructor() {
        this.open = [];
        this.high = [];
        this.low = [];
        this.close = [];
        this.volume = [];
        this.timestamp = [];
    }
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/Utils/AverageGain.js":
/*!*******************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/Utils/AverageGain.js ***!
  \*******************************************************************/
/*! exports provided: AvgGainInput, AverageGain, averagegain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvgGainInput", function() { return AvgGainInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AverageGain", function() { return AverageGain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "averagegain", function() { return averagegain; });
/* harmony import */ var _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../indicator/indicator */ "./node_modules/technicalindicators/lib/indicator/indicator.js");

class AvgGainInput extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["IndicatorInput"] {
}
class AverageGain extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"] {
    constructor(input) {
        super(input);
        let values = input.values;
        let period = input.period;
        let format = this.format;
        this.generator = (function* (period) {
            var currentValue = yield;
            var counter = 1;
            var gainSum = 0;
            var avgGain;
            var gain;
            var lastValue = currentValue;
            currentValue = yield;
            while (true) {
                gain = currentValue - lastValue;
                gain = gain > 0 ? gain : 0;
                if (gain > 0) {
                    gainSum = gainSum + gain;
                }
                if (counter < period) {
                    counter++;
                }
                else if (avgGain === undefined) {
                    avgGain = gainSum / period;
                }
                else {
                    avgGain = ((avgGain * (period - 1)) + gain) / period;
                }
                lastValue = currentValue;
                avgGain = (avgGain !== undefined) ? format(avgGain) : undefined;
                currentValue = yield avgGain;
            }
        })(period);
        this.generator.next();
        this.result = [];
        values.forEach((tick) => {
            var result = this.generator.next(tick);
            if (result.value !== undefined) {
                this.result.push(result.value);
            }
        });
    }
    nextValue(price) {
        return this.generator.next(price).value;
    }
    ;
}
AverageGain.calculate = averagegain;
function averagegain(input) {
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    var result = new AverageGain(input).result;
    if (input.reversedInput) {
        result.reverse();
    }
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    return result;
}
;


/***/ }),

/***/ "./node_modules/technicalindicators/lib/Utils/AverageLoss.js":
/*!*******************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/Utils/AverageLoss.js ***!
  \*******************************************************************/
/*! exports provided: AvgLossInput, AverageLoss, averageloss */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvgLossInput", function() { return AvgLossInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AverageLoss", function() { return AverageLoss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "averageloss", function() { return averageloss; });
/* harmony import */ var _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../indicator/indicator */ "./node_modules/technicalindicators/lib/indicator/indicator.js");

class AvgLossInput extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["IndicatorInput"] {
}
class AverageLoss extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"] {
    constructor(input) {
        super(input);
        let values = input.values;
        let period = input.period;
        let format = this.format;
        this.generator = (function* (period) {
            var currentValue = yield;
            var counter = 1;
            var lossSum = 0;
            var avgLoss;
            var loss;
            var lastValue = currentValue;
            currentValue = yield;
            while (true) {
                loss = lastValue - currentValue;
                loss = loss > 0 ? loss : 0;
                if (loss > 0) {
                    lossSum = lossSum + loss;
                }
                if (counter < period) {
                    counter++;
                }
                else if (avgLoss === undefined) {
                    avgLoss = lossSum / period;
                }
                else {
                    avgLoss = ((avgLoss * (period - 1)) + loss) / period;
                }
                lastValue = currentValue;
                avgLoss = (avgLoss !== undefined) ? format(avgLoss) : undefined;
                currentValue = yield avgLoss;
            }
        })(period);
        this.generator.next();
        this.result = [];
        values.forEach((tick) => {
            var result = this.generator.next(tick);
            if (result.value !== undefined) {
                this.result.push(result.value);
            }
        });
    }
    nextValue(price) {
        return this.generator.next(price).value;
    }
    ;
}
AverageLoss.calculate = averageloss;
function averageloss(input) {
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    var result = new AverageLoss(input).result;
    if (input.reversedInput) {
        result.reverse();
    }
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    return result;
}
;


/***/ }),

/***/ "./node_modules/technicalindicators/lib/Utils/CrossDown.js":
/*!*****************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/Utils/CrossDown.js ***!
  \*****************************************************************/
/*! exports provided: CrossInput, CrossDown, crossDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrossInput", function() { return CrossInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrossDown", function() { return CrossDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crossDown", function() { return crossDown; });
/* harmony import */ var _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../indicator/indicator */ "./node_modules/technicalindicators/lib/indicator/indicator.js");

class CrossInput extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["IndicatorInput"] {
    constructor(lineA, lineB) {
        super();
        this.lineA = lineA;
        this.lineB = lineB;
    }
}
class CrossDown extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"] {
    constructor(input) {
        super(input);
        this.lineA = input.lineA;
        this.lineB = input.lineB;
        var currentLineA = [];
        var currentLineB = [];
        const genFn = (function* () {
            var current = yield;
            var result = false;
            while (true) {
                currentLineA.unshift(current.valueA);
                currentLineB.unshift(current.valueB);
                result = current.valueA < current.valueB;
                var pointer = 1;
                while (result === true && currentLineA[pointer] <= currentLineB[pointer]) {
                    if (currentLineA[pointer] < currentLineB[pointer]) {
                        result = false;
                    }
                    else if (currentLineA[pointer] > currentLineB[pointer]) {
                        result = true;
                    }
                    else if (currentLineA[pointer] === currentLineB[pointer]) {
                        pointer += 1;
                    }
                }
                if (result === true) {
                    currentLineA = [current.valueA];
                    currentLineB = [current.valueB];
                }
                current = yield result;
            }
        });
        this.generator = genFn();
        this.generator.next();
        this.result = [];
        this.lineA.forEach((value, index) => {
            var result = this.generator.next({
                valueA: this.lineA[index],
                valueB: this.lineB[index]
            });
            if (result.value !== undefined) {
                this.result.push(result.value);
            }
        });
    }
    static reverseInputs(input) {
        if (input.reversedInput) {
            input.lineA ? input.lineA.reverse() : undefined;
            input.lineB ? input.lineB.reverse() : undefined;
        }
    }
    nextValue(valueA, valueB) {
        return this.generator.next({
            valueA: valueA,
            valueB: valueB
        }).value;
    }
    ;
}
CrossDown.calculate = crossDown;
function crossDown(input) {
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    var result = new CrossDown(input).result;
    if (input.reversedInput) {
        result.reverse();
    }
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    return result;
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/Utils/CrossUp.js":
/*!***************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/Utils/CrossUp.js ***!
  \***************************************************************/
/*! exports provided: CrossInput, CrossUp, crossUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrossInput", function() { return CrossInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrossUp", function() { return CrossUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crossUp", function() { return crossUp; });
/* harmony import */ var _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../indicator/indicator */ "./node_modules/technicalindicators/lib/indicator/indicator.js");

class CrossInput extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["IndicatorInput"] {
    constructor(lineA, lineB) {
        super();
        this.lineA = lineA;
        this.lineB = lineB;
    }
}
class CrossUp extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"] {
    constructor(input) {
        super(input);
        this.lineA = input.lineA;
        this.lineB = input.lineB;
        var currentLineA = [];
        var currentLineB = [];
        const genFn = (function* () {
            var current = yield;
            var result = false;
            while (true) {
                currentLineA.unshift(current.valueA);
                currentLineB.unshift(current.valueB);
                result = current.valueA > current.valueB;
                var pointer = 1;
                while (result === true && currentLineA[pointer] >= currentLineB[pointer]) {
                    if (currentLineA[pointer] > currentLineB[pointer]) {
                        result = false;
                    }
                    else if (currentLineA[pointer] < currentLineB[pointer]) {
                        result = true;
                    }
                    else if (currentLineA[pointer] === currentLineB[pointer]) {
                        pointer += 1;
                    }
                }
                if (result === true) {
                    currentLineA = [current.valueA];
                    currentLineB = [current.valueB];
                }
                current = yield result;
            }
        });
        this.generator = genFn();
        this.generator.next();
        this.result = [];
        this.lineA.forEach((value, index) => {
            var result = this.generator.next({
                valueA: this.lineA[index],
                valueB: this.lineB[index]
            });
            if (result.value !== undefined) {
                this.result.push(result.value);
            }
        });
    }
    static reverseInputs(input) {
        if (input.reversedInput) {
            input.lineA ? input.lineA.reverse() : undefined;
            input.lineB ? input.lineB.reverse() : undefined;
        }
    }
    nextValue(valueA, valueB) {
        return this.generator.next({
            valueA: valueA,
            valueB: valueB
        }).value;
    }
    ;
}
CrossUp.calculate = crossUp;
function crossUp(input) {
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    var result = new CrossUp(input).result;
    if (input.reversedInput) {
        result.reverse();
    }
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    return result;
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/Utils/FixedSizeLinkedList.js":
/*!***************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/Utils/FixedSizeLinkedList.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FixedSizeLinkedList; });
/* harmony import */ var _LinkedList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinkedList */ "./node_modules/technicalindicators/lib/Utils/LinkedList.js");
/**
 * Created by AAravindan on 5/7/16.
 */

class FixedSizeLinkedList extends _LinkedList__WEBPACK_IMPORTED_MODULE_0__["LinkedList"] {
    constructor(size, maintainHigh, maintainLow, maintainSum) {
        super();
        this.size = size;
        this.maintainHigh = maintainHigh;
        this.maintainLow = maintainLow;
        this.maintainSum = maintainSum;
        this.totalPushed = 0;
        this.periodHigh = 0;
        this.periodLow = Infinity;
        this.periodSum = 0;
        if (!size || typeof size !== 'number') {
            throw ('Size required and should be a number.');
        }
        this._push = this.push;
        this.push = function (data) {
            this.add(data);
            this.totalPushed++;
        };
    }
    add(data) {
        if (this.length === this.size) {
            this.lastShift = this.shift();
            this._push(data);
            //TODO: FInd a better way
            if (this.maintainHigh)
                if (this.lastShift == this.periodHigh)
                    this.calculatePeriodHigh();
            if (this.maintainLow)
                if (this.lastShift == this.periodLow)
                    this.calculatePeriodLow();
            if (this.maintainSum) {
                this.periodSum = this.periodSum - this.lastShift;
            }
        }
        else {
            this._push(data);
        }
        //TODO: FInd a better way
        if (this.maintainHigh)
            if (this.periodHigh <= data)
                (this.periodHigh = data);
        if (this.maintainLow)
            if (this.periodLow >= data)
                (this.periodLow = data);
        if (this.maintainSum) {
            this.periodSum = this.periodSum + data;
        }
    }
    *iterator() {
        this.resetCursor();
        while (this.next()) {
            yield this.current;
        }
    }
    calculatePeriodHigh() {
        this.resetCursor();
        if (this.next())
            this.periodHigh = this.current;
        while (this.next()) {
            if (this.periodHigh <= this.current) {
                this.periodHigh = this.current;
            }
            ;
        }
        ;
    }
    calculatePeriodLow() {
        this.resetCursor();
        if (this.next())
            this.periodLow = this.current;
        while (this.next()) {
            if (this.periodLow >= this.current) {
                this.periodLow = this.current;
            }
            ;
        }
        ;
    }
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/Utils/Highest.js":
/*!***************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/Utils/Highest.js ***!
  \***************************************************************/
/*! exports provided: HighestInput, Highest, highest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighestInput", function() { return HighestInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Highest", function() { return Highest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highest", function() { return highest; });
/* harmony import */ var _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../indicator/indicator */ "./node_modules/technicalindicators/lib/indicator/indicator.js");
/* harmony import */ var _FixedSizeLinkedList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FixedSizeLinkedList */ "./node_modules/technicalindicators/lib/Utils/FixedSizeLinkedList.js");


class HighestInput extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["IndicatorInput"] {
}
class Highest extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"] {
    constructor(input) {
        super(input);
        var values = input.values;
        var period = input.period;
        this.result = [];
        var periodList = new _FixedSizeLinkedList__WEBPACK_IMPORTED_MODULE_1__["default"](period, true, false, false);
        this.generator = (function* () {
            var result;
            var tick;
            var high;
            tick = yield;
            while (true) {
                periodList.push(tick);
                if (periodList.totalPushed >= period) {
                    high = periodList.periodHigh;
                }
                tick = yield high;
            }
        })();
        this.generator.next();
        values.forEach((value, index) => {
            var result = this.generator.next(value);
            if (result.value != undefined) {
                this.result.push(result.value);
            }
        });
    }
    ;
    nextValue(price) {
        var result = this.generator.next(price);
        if (result.value != undefined) {
            return result.value;
        }
    }
    ;
}
Highest.calculate = highest;
function highest(input) {
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    var result = new Highest(input).result;
    if (input.reversedInput) {
        result.reverse();
    }
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    return result;
}
;


/***/ }),

/***/ "./node_modules/technicalindicators/lib/Utils/LinkedList.js":
/*!******************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/Utils/LinkedList.js ***!
  \******************************************************************/
/*! exports provided: LinkedList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedList", function() { return LinkedList; });
class Item {
    constructor(data, prev, next) {
        this.next = next;
        if (next)
            next.prev = this;
        this.prev = prev;
        if (prev)
            prev.next = this;
        this.data = data;
    }
}
class LinkedList {
    constructor() {
        this._length = 0;
    }
    get head() {
        return this._head && this._head.data;
    }
    get tail() {
        return this._tail && this._tail.data;
    }
    get current() {
        return this._current && this._current.data;
    }
    get length() {
        return this._length;
    }
    push(data) {
        this._tail = new Item(data, this._tail);
        if (this._length === 0) {
            this._head = this._tail;
            this._current = this._head;
            this._next = this._head;
        }
        this._length++;
    }
    pop() {
        var tail = this._tail;
        if (this._length === 0) {
            return;
        }
        this._length--;
        if (this._length === 0) {
            this._head = this._tail = this._current = this._next = undefined;
            return tail.data;
        }
        this._tail = tail.prev;
        this._tail.next = undefined;
        if (this._current === tail) {
            this._current = this._tail;
            this._next = undefined;
        }
        return tail.data;
    }
    shift() {
        var head = this._head;
        if (this._length === 0) {
            return;
        }
        this._length--;
        if (this._length === 0) {
            this._head = this._tail = this._current = this._next = undefined;
            return head.data;
        }
        this._head = this._head.next;
        if (this._current === head) {
            this._current = this._head;
            this._next = this._current.next;
        }
        return head.data;
    }
    unshift(data) {
        this._head = new Item(data, undefined, this._head);
        if (this._length === 0) {
            this._tail = this._head;
            this._next = this._head;
        }
        this._length++;
    }
    unshiftCurrent() {
        var current = this._current;
        if (current === this._head || this._length < 2) {
            return current && current.data;
        }
        // remove
        if (current === this._tail) {
            this._tail = current.prev;
            this._tail.next = undefined;
            this._current = this._tail;
        }
        else {
            current.next.prev = current.prev;
            current.prev.next = current.next;
            this._current = current.prev;
        }
        this._next = this._current.next;
        // unshift
        current.next = this._head;
        current.prev = undefined;
        this._head.prev = current;
        this._head = current;
        return current.data;
    }
    removeCurrent() {
        var current = this._current;
        if (this._length === 0) {
            return;
        }
        this._length--;
        if (this._length === 0) {
            this._head = this._tail = this._current = this._next = undefined;
            return current.data;
        }
        if (current === this._tail) {
            this._tail = current.prev;
            this._tail.next = undefined;
            this._current = this._tail;
        }
        else if (current === this._head) {
            this._head = current.next;
            this._head.prev = undefined;
            this._current = this._head;
        }
        else {
            current.next.prev = current.prev;
            current.prev.next = current.next;
            this._current = current.prev;
        }
        this._next = this._current.next;
        return current.data;
    }
    resetCursor() {
        this._current = this._next = this._head;
        return this;
    }
    next() {
        var next = this._next;
        if (next !== undefined) {
            this._next = next.next;
            this._current = next;
            return next.data;
        }
    }
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/Utils/Lowest.js":
/*!**************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/Utils/Lowest.js ***!
  \**************************************************************/
/*! exports provided: LowestInput, Lowest, lowest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LowestInput", function() { return LowestInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lowest", function() { return Lowest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lowest", function() { return lowest; });
/* harmony import */ var _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../indicator/indicator */ "./node_modules/technicalindicators/lib/indicator/indicator.js");
/* harmony import */ var _FixedSizeLinkedList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FixedSizeLinkedList */ "./node_modules/technicalindicators/lib/Utils/FixedSizeLinkedList.js");


class LowestInput extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["IndicatorInput"] {
}
class Lowest extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"] {
    constructor(input) {
        super(input);
        var values = input.values;
        var period = input.period;
        this.result = [];
        var periodList = new _FixedSizeLinkedList__WEBPACK_IMPORTED_MODULE_1__["default"](period, false, true, false);
        this.generator = (function* () {
            var result;
            var tick;
            var high;
            tick = yield;
            while (true) {
                periodList.push(tick);
                if (periodList.totalPushed >= period) {
                    high = periodList.periodLow;
                }
                tick = yield high;
            }
        })();
        this.generator.next();
        values.forEach((value, index) => {
            var result = this.generator.next(value);
            if (result.value != undefined) {
                this.result.push(result.value);
            }
        });
    }
    ;
    nextValue(price) {
        var result = this.generator.next(price);
        if (result.value != undefined) {
            return result.value;
        }
    }
    ;
}
Lowest.calculate = lowest;
function lowest(input) {
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    var result = new Lowest(input).result;
    if (input.reversedInput) {
        result.reverse();
    }
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    return result;
}
;


/***/ }),

/***/ "./node_modules/technicalindicators/lib/Utils/NumberFormatter.js":
/*!***********************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/Utils/NumberFormatter.js ***!
  \***********************************************************************/
/*! exports provided: format */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./node_modules/technicalindicators/lib/config.js");

function format(v) {
    let precision = Object(_config__WEBPACK_IMPORTED_MODULE_0__["getConfig"])('precision');
    if (precision) {
        return parseFloat(v.toPrecision(precision));
    }
    return v;
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/Utils/SD.js":
/*!**********************************************************!*\
  !*** ./node_modules/technicalindicators/lib/Utils/SD.js ***!
  \**********************************************************/
/*! exports provided: SDInput, SD, sd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDInput", function() { return SDInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SD", function() { return SD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sd", function() { return sd; });
/* harmony import */ var _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../indicator/indicator */ "./node_modules/technicalindicators/lib/indicator/indicator.js");
/* harmony import */ var _moving_averages_SMA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../moving_averages/SMA */ "./node_modules/technicalindicators/lib/moving_averages/SMA.js");
/* harmony import */ var _Utils_FixedSizeLinkedList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils/FixedSizeLinkedList */ "./node_modules/technicalindicators/lib/Utils/FixedSizeLinkedList.js");



/**
 * Created by AAravindan on 5/7/16.
 */
"use strict";
class SDInput extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["IndicatorInput"] {
}
;
class SD extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"] {
    constructor(input) {
        super(input);
        var period = input.period;
        var priceArray = input.values;
        var sma = new _moving_averages_SMA__WEBPACK_IMPORTED_MODULE_1__["SMA"]({ period: period, values: [], format: (v) => { return v; } });
        this.result = [];
        this.generator = (function* () {
            var tick;
            var mean;
            var currentSet = new _Utils_FixedSizeLinkedList__WEBPACK_IMPORTED_MODULE_2__["default"](period);
            ;
            tick = yield;
            var sd;
            while (true) {
                currentSet.push(tick);
                mean = sma.nextValue(tick);
                if (mean) {
                    let sum = 0;
                    for (let x of currentSet.iterator()) {
                        sum = sum + (Math.pow((x - mean), 2));
                    }
                    sd = Math.sqrt(sum / (period));
                }
                tick = yield sd;
            }
        })();
        this.generator.next();
        priceArray.forEach((tick) => {
            var result = this.generator.next(tick);
            if (result.value != undefined) {
                this.result.push(this.format(result.value));
            }
        });
    }
    nextValue(price) {
        var nextResult = this.generator.next(price);
        if (nextResult.value != undefined)
            return this.format(nextResult.value);
    }
    ;
}
SD.calculate = sd;
function sd(input) {
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    var result = new SD(input).result;
    if (input.reversedInput) {
        result.reverse();
    }
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    return result;
}
;


/***/ }),

/***/ "./node_modules/technicalindicators/lib/Utils/Sum.js":
/*!***********************************************************!*\
  !*** ./node_modules/technicalindicators/lib/Utils/Sum.js ***!
  \***********************************************************/
/*! exports provided: SumInput, Sum, sum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SumInput", function() { return SumInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sum", function() { return Sum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return sum; });
/* harmony import */ var _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../indicator/indicator */ "./node_modules/technicalindicators/lib/indicator/indicator.js");
/* harmony import */ var _FixedSizeLinkedList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FixedSizeLinkedList */ "./node_modules/technicalindicators/lib/Utils/FixedSizeLinkedList.js");


class SumInput extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["IndicatorInput"] {
}
class Sum extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"] {
    constructor(input) {
        super(input);
        var values = input.values;
        var period = input.period;
        this.result = [];
        var periodList = new _FixedSizeLinkedList__WEBPACK_IMPORTED_MODULE_1__["default"](period, false, false, true);
        this.generator = (function* () {
            var result;
            var tick;
            var high;
            tick = yield;
            while (true) {
                periodList.push(tick);
                if (periodList.totalPushed >= period) {
                    high = periodList.periodSum;
                }
                tick = yield high;
            }
        })();
        this.generator.next();
        values.forEach((value, index) => {
            var result = this.generator.next(value);
            if (result.value != undefined) {
                this.result.push(result.value);
            }
        });
    }
    ;
    nextValue(price) {
        var result = this.generator.next(price);
        if (result.value != undefined) {
            return result.value;
        }
    }
    ;
}
Sum.calculate = sum;
function sum(input) {
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    var result = new Sum(input).result;
    if (input.reversedInput) {
        result.reverse();
    }
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    return result;
}
;


/***/ }),

/***/ "./node_modules/technicalindicators/lib/candlestick/AbandonedBaby.js":
/*!***************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/candlestick/AbandonedBaby.js ***!
  \***************************************************************************/
/*! exports provided: default, abandonedbaby */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbandonedBaby; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abandonedbaby", function() { return abandonedbaby; });
/* harmony import */ var _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CandlestickFinder */ "./node_modules/technicalindicators/lib/candlestick/CandlestickFinder.js");
/* harmony import */ var _Doji__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Doji */ "./node_modules/technicalindicators/lib/candlestick/Doji.js");


class AbandonedBaby extends _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.name = 'AbandonedBaby';
        this.requiredCount = 3;
    }
    logic(data) {
        let firstdaysOpen = data.open[0];
        let firstdaysClose = data.close[0];
        let firstdaysHigh = data.high[0];
        let firstdaysLow = data.low[0];
        let seconddaysOpen = data.open[1];
        let seconddaysClose = data.close[1];
        let seconddaysHigh = data.high[1];
        let seconddaysLow = data.low[1];
        let thirddaysOpen = data.open[2];
        let thirddaysClose = data.close[2];
        let thirddaysHigh = data.high[2];
        let thirddaysLow = data.low[2];
        let isFirstBearish = firstdaysClose < firstdaysOpen;
        let dojiExists = new _Doji__WEBPACK_IMPORTED_MODULE_1__["default"]().hasPattern({
            "open": [seconddaysOpen],
            "close": [seconddaysClose],
            "high": [seconddaysHigh],
            "low": [seconddaysLow]
        });
        let gapExists = ((seconddaysHigh < firstdaysLow) &&
            (thirddaysLow > seconddaysHigh) &&
            (thirddaysClose > thirddaysOpen));
        let isThirdBullish = (thirddaysHigh < firstdaysOpen);
        return (isFirstBearish && dojiExists && gapExists && isThirdBullish);
    }
}
function abandonedbaby(data) {
    return new AbandonedBaby().hasPattern(data);
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/candlestick/Bearish.js":
/*!*********************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/candlestick/Bearish.js ***!
  \*********************************************************************/
/*! exports provided: default, bearish */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BearishPatterns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bearish", function() { return bearish; });
/* harmony import */ var _BearishEngulfingPattern__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BearishEngulfingPattern */ "./node_modules/technicalindicators/lib/candlestick/BearishEngulfingPattern.js");
/* harmony import */ var _BearishHarami__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BearishHarami */ "./node_modules/technicalindicators/lib/candlestick/BearishHarami.js");
/* harmony import */ var _BearishHaramiCross__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BearishHaramiCross */ "./node_modules/technicalindicators/lib/candlestick/BearishHaramiCross.js");
/* harmony import */ var _EveningDojiStar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EveningDojiStar */ "./node_modules/technicalindicators/lib/candlestick/EveningDojiStar.js");
/* harmony import */ var _EveningStar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EveningStar */ "./node_modules/technicalindicators/lib/candlestick/EveningStar.js");
/* harmony import */ var _BearishMarubozu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BearishMarubozu */ "./node_modules/technicalindicators/lib/candlestick/BearishMarubozu.js");
/* harmony import */ var _ThreeBlackCrows__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ThreeBlackCrows */ "./node_modules/technicalindicators/lib/candlestick/ThreeBlackCrows.js");
/* harmony import */ var _BearishHammerStick__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BearishHammerStick */ "./node_modules/technicalindicators/lib/candlestick/BearishHammerStick.js");
/* harmony import */ var _BearishInvertedHammerStick__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BearishInvertedHammerStick */ "./node_modules/technicalindicators/lib/candlestick/BearishInvertedHammerStick.js");
/* harmony import */ var _HangingMan__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HangingMan */ "./node_modules/technicalindicators/lib/candlestick/HangingMan.js");
/* harmony import */ var _HangingManUnconfirmed__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./HangingManUnconfirmed */ "./node_modules/technicalindicators/lib/candlestick/HangingManUnconfirmed.js");
/* harmony import */ var _ShootingStar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ShootingStar */ "./node_modules/technicalindicators/lib/candlestick/ShootingStar.js");
/* harmony import */ var _ShootingStarUnconfirmed__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ShootingStarUnconfirmed */ "./node_modules/technicalindicators/lib/candlestick/ShootingStarUnconfirmed.js");
/* harmony import */ var _TweezerTop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./TweezerTop */ "./node_modules/technicalindicators/lib/candlestick/TweezerTop.js");
/* harmony import */ var _CandlestickFinder__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./CandlestickFinder */ "./node_modules/technicalindicators/lib/candlestick/CandlestickFinder.js");















let bearishPatterns = [
    new _BearishEngulfingPattern__WEBPACK_IMPORTED_MODULE_0__["default"](),
    new _BearishHarami__WEBPACK_IMPORTED_MODULE_1__["default"](),
    new _BearishHaramiCross__WEBPACK_IMPORTED_MODULE_2__["default"](),
    new _EveningDojiStar__WEBPACK_IMPORTED_MODULE_3__["default"](),
    new _EveningStar__WEBPACK_IMPORTED_MODULE_4__["default"](),
    new _BearishMarubozu__WEBPACK_IMPORTED_MODULE_5__["default"](),
    new _ThreeBlackCrows__WEBPACK_IMPORTED_MODULE_6__["default"](),
    new _BearishHammerStick__WEBPACK_IMPORTED_MODULE_7__["default"](),
    new _BearishInvertedHammerStick__WEBPACK_IMPORTED_MODULE_8__["default"](),
    new _HangingMan__WEBPACK_IMPORTED_MODULE_9__["default"](),
    new _HangingManUnconfirmed__WEBPACK_IMPORTED_MODULE_10__["default"](),
    new _ShootingStar__WEBPACK_IMPORTED_MODULE_11__["default"](),
    new _ShootingStarUnconfirmed__WEBPACK_IMPORTED_MODULE_12__["default"](),
    new _TweezerTop__WEBPACK_IMPORTED_MODULE_13__["default"]()
];
class BearishPatterns extends _CandlestickFinder__WEBPACK_IMPORTED_MODULE_14__["default"] {
    constructor() {
        super();
        this.name = 'Bearish Candlesticks';
    }
    hasPattern(data) {
        return bearishPatterns.reduce(function (state, pattern) {
            return state || pattern.hasPattern(data);
        }, false);
    }
}
function bearish(data) {
    return new BearishPatterns().hasPattern(data);
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/candlestick/BearishEngulfingPattern.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/candlestick/BearishEngulfingPattern.js ***!
  \*************************************************************************************/
/*! exports provided: default, bearishengulfingpattern */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BearishEngulfingPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bearishengulfingpattern", function() { return bearishengulfingpattern; });
/* harmony import */ var _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CandlestickFinder */ "./node_modules/technicalindicators/lib/candlestick/CandlestickFinder.js");

class BearishEngulfingPattern extends _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.name = 'BearishEngulfingPattern';
        this.requiredCount = 2;
    }
    logic(data) {
        let firstdaysOpen = data.open[0];
        let firstdaysClose = data.close[0];
        let firstdaysHigh = data.high[0];
        let firstdaysLow = data.low[0];
        let seconddaysOpen = data.open[1];
        let seconddaysClose = data.close[1];
        let seconddaysHigh = data.high[1];
        let seconddaysLow = data.low[1];
        let isBearishEngulfing = ((firstdaysClose > firstdaysOpen) &&
            (firstdaysOpen < seconddaysOpen) &&
            (firstdaysClose < seconddaysOpen) &&
            (firstdaysOpen > seconddaysClose));
        return (isBearishEngulfing);
    }
}
function bearishengulfingpattern(data) {
    return new BearishEngulfingPattern().hasPattern(data);
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/candlestick/BearishHammerStick.js":
/*!********************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/candlestick/BearishHammerStick.js ***!
  \********************************************************************************/
/*! exports provided: default, bearishhammerstick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BearishHammerStick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bearishhammerstick", function() { return bearishhammerstick; });
/* harmony import */ var _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CandlestickFinder */ "./node_modules/technicalindicators/lib/candlestick/CandlestickFinder.js");

class BearishHammerStick extends _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.name = 'BearishHammerStick';
        this.requiredCount = 1;
    }
    logic(data) {
        let daysOpen = data.open[0];
        let daysClose = data.close[0];
        let daysHigh = data.high[0];
        let daysLow = data.low[0];
        let isBearishHammer = daysOpen > daysClose;
        isBearishHammer = isBearishHammer && this.approximateEqual(daysOpen, daysHigh);
        isBearishHammer = isBearishHammer && (daysOpen - daysClose) <= 2 * (daysClose - daysLow);
        return isBearishHammer;
    }
}
function bearishhammerstick(data) {
    return new BearishHammerStick().hasPattern(data);
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/candlestick/BearishHarami.js":
/*!***************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/candlestick/BearishHarami.js ***!
  \***************************************************************************/
/*! exports provided: default, bearishharami */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BearishHarami; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bearishharami", function() { return bearishharami; });
/* harmony import */ var _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CandlestickFinder */ "./node_modules/technicalindicators/lib/candlestick/CandlestickFinder.js");

class BearishHarami extends _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.requiredCount = 2;
        this.name = 'BearishHarami';
    }
    logic(data) {
        let firstdaysOpen = data.open[0];
        let firstdaysClose = data.close[0];
        let firstdaysHigh = data.high[0];
        let firstdaysLow = data.low[0];
        let seconddaysOpen = data.open[1];
        let seconddaysClose = data.close[1];
        let seconddaysHigh = data.high[1];
        let seconddaysLow = data.low[1];
        let isBearishHaramiPattern = ((firstdaysOpen < seconddaysOpen) &&
            (firstdaysClose > seconddaysOpen) &&
            (firstdaysClose > seconddaysClose) &&
            (firstdaysOpen < seconddaysLow) &&
            (firstdaysHigh > seconddaysHigh));
        return (isBearishHaramiPattern);
    }
}
function bearishharami(data) {
    return new BearishHarami().hasPattern(data);
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/candlestick/BearishHaramiCross.js":
/*!********************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/candlestick/BearishHaramiCross.js ***!
  \********************************************************************************/
/*! exports provided: default, bearishharamicross */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BearishHaramiCross; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bearishharamicross", function() { return bearishharamicross; });
/* harmony import */ var _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CandlestickFinder */ "./node_modules/technicalindicators/lib/candlestick/CandlestickFinder.js");

class BearishHaramiCross extends _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.requiredCount = 2;
        this.name = 'BearishHaramiCross';
    }
    logic(data) {
        let firstdaysOpen = data.open[0];
        let firstdaysClose = data.close[0];
        let firstdaysHigh = data.high[0];
        let firstdaysLow = data.low[0];
        let seconddaysOpen = data.open[1];
        let seconddaysClose = data.close[1];
        let seconddaysHigh = data.high[1];
        let seconddaysLow = data.low[1];
        let isBearishHaramiCrossPattern = ((firstdaysOpen < seconddaysOpen) &&
            (firstdaysClose > seconddaysOpen) &&
            (firstdaysClose > seconddaysClose) &&
            (firstdaysOpen < seconddaysLow) &&
            (firstdaysHigh > seconddaysHigh));
        let isSecondDayDoji = this.approximateEqual(seconddaysOpen, seconddaysClose);
        return (isBearishHaramiCrossPattern && isSecondDayDoji);
    }
}
function bearishharamicross(data) {
    return new BearishHaramiCross().hasPattern(data);
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/candlestick/BearishInvertedHammerStick.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/candlestick/BearishInvertedHammerStick.js ***!
  \****************************************************************************************/
/*! exports provided: default, bearishinvertedhammerstick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BearishInvertedHammerStick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bearishinvertedhammerstick", function() { return bearishinvertedhammerstick; });
/* harmony import */ var _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CandlestickFinder */ "./node_modules/technicalindicators/lib/candlestick/CandlestickFinder.js");

class BearishInvertedHammerStick extends _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.name = 'BearishInvertedHammerStick';
        this.requiredCount = 1;
    }
    logic(data) {
        let daysOpen = data.open[0];
        let daysClose = data.close[0];
        let daysHigh = data.high[0];
        let daysLow = data.low[0];
        let isBearishInvertedHammer = daysOpen > daysClose;
        isBearishInvertedHammer = isBearishInvertedHammer && this.approximateEqual(daysClose, daysLow);
        isBearishInvertedHammer = isBearishInvertedHammer && (daysOpen - daysClose) <= 2 * (daysHigh - daysOpen);
        return isBearishInvertedHammer;
    }
}
function bearishinvertedhammerstick(data) {
    return new BearishInvertedHammerStick().hasPattern(data);
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/candlestick/BearishMarubozu.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/candlestick/BearishMarubozu.js ***!
  \*****************************************************************************/
/*! exports provided: default, bearishmarubozu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BearishMarubozu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bearishmarubozu", function() { return bearishmarubozu; });
/* harmony import */ var _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CandlestickFinder */ "./node_modules/technicalindicators/lib/candlestick/CandlestickFinder.js");

class BearishMarubozu extends _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.name = 'BearishMarubozu';
        this.requiredCount = 1;
    }
    logic(data) {
        let daysOpen = data.open[0];
        let daysClose = data.close[0];
        let daysHigh = data.high[0];
        let daysLow = data.low[0];
        let isBearishMarbozu = this.approximateEqual(daysOpen, daysHigh) &&
            this.approximateEqual(daysLow, daysClose) &&
            daysOpen > daysClose &&
            daysOpen > daysLow;
        return (isBearishMarbozu);
    }
}
function bearishmarubozu(data) {
    return new BearishMarubozu().hasPattern(data);
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/candlestick/BearishSpinningTop.js":
/*!********************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/candlestick/BearishSpinningTop.js ***!
  \********************************************************************************/
/*! exports provided: default, bearishspinningtop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BearishSpinningTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bearishspinningtop", function() { return bearishspinningtop; });
/* harmony import */ var _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CandlestickFinder */ "./node_modules/technicalindicators/lib/candlestick/CandlestickFinder.js");

class BearishSpinningTop extends _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.name = 'BearishSpinningTop';
        this.requiredCount = 1;
    }
    logic(data) {
        let daysOpen = data.open[0];
        let daysClose = data.close[0];
        let daysHigh = data.high[0];
        let daysLow = data.low[0];
        let bodyLength = Math.abs(daysClose - daysOpen);
        let upperShadowLength = Math.abs(daysHigh - daysOpen);
        let lowerShadowLength = Math.abs(daysHigh - daysLow);
        let isBearishSpinningTop = bodyLength < upperShadowLength &&
            bodyLength < lowerShadowLength;
        return isBearishSpinningTop;
    }
}
function bearishspinningtop(data) {
    return new BearishSpinningTop().hasPattern(data);
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/candlestick/Bullish.js":
/*!*********************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/candlestick/Bullish.js ***!
  \*********************************************************************/
/*! exports provided: default, bullish */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BullishPatterns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bullish", function() { return bullish; });
/* harmony import */ var _MorningStar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MorningStar */ "./node_modules/technicalindicators/lib/candlestick/MorningStar.js");
/* harmony import */ var _BullishEngulfingPattern__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BullishEngulfingPattern */ "./node_modules/technicalindicators/lib/candlestick/BullishEngulfingPattern.js");
/* harmony import */ var _BullishHarami__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BullishHarami */ "./node_modules/technicalindicators/lib/candlestick/BullishHarami.js");
/* harmony import */ var _BullishHaramiCross__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BullishHaramiCross */ "./node_modules/technicalindicators/lib/candlestick/BullishHaramiCross.js");
/* harmony import */ var _MorningDojiStar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MorningDojiStar */ "./node_modules/technicalindicators/lib/candlestick/MorningDojiStar.js");
/* harmony import */ var _DownsideTasukiGap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DownsideTasukiGap */ "./node_modules/technicalindicators/lib/candlestick/DownsideTasukiGap.js");
/* harmony import */ var _BullishMarubozu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BullishMarubozu */ "./node_modules/technicalindicators/lib/candlestick/BullishMarubozu.js");
/* harmony import */ var _PiercingLine__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PiercingLine */ "./node_modules/technicalindicators/lib/candlestick/PiercingLine.js");
/* harmony import */ var _ThreeWhiteSoldiers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ThreeWhiteSoldiers */ "./node_modules/technicalindicators/lib/candlestick/ThreeWhiteSoldiers.js");
/* harmony import */ var _BullishHammerStick__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./BullishHammerStick */ "./node_modules/technicalindicators/lib/candlestick/BullishHammerStick.js");
/* harmony import */ var _BullishInvertedHammerStick__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./BullishInvertedHammerStick */ "./node_modules/technicalindicators/lib/candlestick/BullishInvertedHammerStick.js");
/* harmony import */ var _HammerPattern__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./HammerPattern */ "./node_modules/technicalindicators/lib/candlestick/HammerPattern.js");
/* harmony import */ var _HammerPatternUnconfirmed__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./HammerPatternUnconfirmed */ "./node_modules/technicalindicators/lib/candlestick/HammerPatternUnconfirmed.js");
/* harmony import */ var _CandlestickFinder__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CandlestickFinder */ "./node_modules/technicalindicators/lib/candlestick/CandlestickFinder.js");
/* harmony import */ var _TweezerBottom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./TweezerBottom */ "./node_modules/technicalindicators/lib/candlestick/TweezerBottom.js");















let bullishPatterns = [
    new _BullishEngulfingPattern__WEBPACK_IMPORTED_MODULE_1__["default"](),
    new _DownsideTasukiGap__WEBPACK_IMPORTED_MODULE_5__["default"](),
    new _BullishHarami__WEBPACK_IMPORTED_MODULE_2__["default"](),
    new _BullishHaramiCross__WEBPACK_IMPORTED_MODULE_3__["default"](),
    new _MorningDojiStar__WEBPACK_IMPORTED_MODULE_4__["default"](),
    new _MorningStar__WEBPACK_IMPORTED_MODULE_0__["default"](),
    new _BullishMarubozu__WEBPACK_IMPORTED_MODULE_6__["default"](),
    new _PiercingLine__WEBPACK_IMPORTED_MODULE_7__["default"](),
    new _ThreeWhiteSoldiers__WEBPACK_IMPORTED_MODULE_8__["default"](),
    new _BullishHammerStick__WEBPACK_IMPORTED_MODULE_9__["default"](),
    new _BullishInvertedHammerStick__WEBPACK_IMPORTED_MODULE_10__["default"](),
    new _HammerPattern__WEBPACK_IMPORTED_MODULE_11__["default"](),
    new _HammerPatternUnconfirmed__WEBPACK_IMPORTED_MODULE_12__["default"](),
    new _TweezerBottom__WEBPACK_IMPORTED_MODULE_14__["default"]()
];
class BullishPatterns extends _CandlestickFinder__WEBPACK_IMPORTED_MODULE_13__["default"] {
    constructor() {
        super();
        this.name = 'Bullish Candlesticks';
    }
    hasPattern(data) {
        return bullishPatterns.reduce(function (state, pattern) {
            let result = pattern.hasPattern(data);
            return state || result;
        }, false);
    }
}
function bullish(data) {
    return new BullishPatterns().hasPattern(data);
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/candlestick/BullishEngulfingPattern.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/candlestick/BullishEngulfingPattern.js ***!
  \*************************************************************************************/
/*! exports provided: default, bullishengulfingpattern */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BullishEngulfingPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bullishengulfingpattern", function() { return bullishengulfingpattern; });
/* harmony import */ var _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CandlestickFinder */ "./node_modules/technicalindicators/lib/candlestick/CandlestickFinder.js");

class BullishEngulfingPattern extends _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.name = 'BullishEngulfingPattern';
        this.requiredCount = 2;
    }
    logic(data) {
        let firstdaysOpen = data.open[0];
        let firstdaysClose = data.close[0];
        let firstdaysHigh = data.high[0];
        let firstdaysLow = data.low[0];
        let seconddaysOpen = data.open[1];
        let seconddaysClose = data.close[1];
        let seconddaysHigh = data.high[1];
        let seconddaysLow = data.low[1];
        let isBullishEngulfing = ((firstdaysClose < firstdaysOpen) &&
            (firstdaysOpen > seconddaysOpen) &&
            (firstdaysClose > seconddaysOpen) &&
            (firstdaysOpen < seconddaysClose));
        return (isBullishEngulfing);
    }
}
function bullishengulfingpattern(data) {
    return new BullishEngulfingPattern().hasPattern(data);
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/candlestick/BullishHammerStick.js":
/*!********************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/candlestick/BullishHammerStick.js ***!
  \********************************************************************************/
/*! exports provided: default, bullishhammerstick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BullishHammerStick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bullishhammerstick", function() { return bullishhammerstick; });
/* harmony import */ var _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CandlestickFinder */ "./node_modules/technicalindicators/lib/candlestick/CandlestickFinder.js");

class BullishHammerStick extends _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.name = 'BullishHammerStick';
        this.requiredCount = 1;
    }
    logic(data) {
        let daysOpen = data.open[0];
        let daysClose = data.close[0];
        let daysHigh = data.high[0];
        let daysLow = data.low[0];
        let isBullishHammer = daysClose > daysOpen;
        isBullishHammer = isBullishHammer && this.approximateEqual(daysClose, daysHigh);
        isBullishHammer = isBullishHammer && (daysClose - daysOpen) <= 2 * (daysOpen - daysLow);
        return isBullishHammer;
    }
}
function bullishhammerstick(data) {
    return new BullishHammerStick().hasPattern(data);
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/candlestick/BullishHarami.js":
/*!***************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/candlestick/BullishHarami.js ***!
  \***************************************************************************/
/*! exports provided: default, bullishharami */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BullishHarami; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bullishharami", function() { return bullishharami; });
/* harmony import */ var _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CandlestickFinder */ "./node_modules/technicalindicators/lib/candlestick/CandlestickFinder.js");

class BullishHarami extends _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.requiredCount = 2;
        this.name = "BullishHarami";
    }
    logic(data) {
        let firstdaysOpen = data.open[0];
        let firstdaysClose = data.close[0];
        let firstdaysHigh = data.high[0];
        let firstdaysLow = data.low[0];
        let seconddaysOpen = data.open[1];
        let seconddaysClose = data.close[1];
        let seconddaysHigh = data.high[1];
        let seconddaysLow = data.low[1];
        let isBullishHaramiPattern = ((firstdaysOpen > seconddaysOpen) &&
            (firstdaysClose < seconddaysOpen) &&
            (firstdaysClose < seconddaysClose) &&
            (firstdaysOpen > seconddaysLow) &&
            (firstdaysHigh > seconddaysHigh));
        return (isBullishHaramiPattern);
    }
}
function bullishharami(data) {
    return new BullishHarami().hasPattern(data);
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/candlestick/BullishHaramiCross.js":
/*!********************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/candlestick/BullishHaramiCross.js ***!
  \********************************************************************************/
/*! exports provided: default, bullishharamicross */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BullishHaramiCross; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bullishharamicross", function() { return bullishharamicross; });
/* harmony import */ var _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CandlestickFinder */ "./node_modules/technicalindicators/lib/candlestick/CandlestickFinder.js");

class BullishHaramiCross extends _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.requiredCount = 2;
        this.name = 'BullishHaramiCross';
    }
    logic(data) {
        let firstdaysOpen = data.open[0];
        let firstdaysClose = data.close[0];
        let firstdaysHigh = data.high[0];
        let firstdaysLow = data.low[0];
        let seconddaysOpen = data.open[1];
        let seconddaysClose = data.close[1];
        let seconddaysHigh = data.high[1];
        let seconddaysLow = data.low[1];
        let isBullishHaramiCrossPattern = ((firstdaysOpen > seconddaysOpen) &&
            (firstdaysClose < seconddaysOpen) &&
            (firstdaysClose < seconddaysClose) &&
            (firstdaysOpen > seconddaysLow) &&
            (firstdaysHigh > seconddaysHigh));
        let isSecondDayDoji = this.approximateEqual(seconddaysOpen, seconddaysClose);
        return (isBullishHaramiCrossPattern && isSecondDayDoji);
    }
}
function bullishharamicross(data) {
    return new BullishHaramiCross().hasPattern(data);
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/candlestick/BullishInvertedHammerStick.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/candlestick/BullishInvertedHammerStick.js ***!
  \****************************************************************************************/
/*! exports provided: default, bullishinvertedhammerstick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BullishInvertedHammerStick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bullishinvertedhammerstick", function() { return bullishinvertedhammerstick; });
/* harmony import */ var _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CandlestickFinder */ "./node_modules/technicalindicators/lib/candlestick/CandlestickFinder.js");

class BullishInvertedHammerStick extends _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.name = 'BullishInvertedHammerStick';
        this.requiredCount = 1;
    }
    logic(data) {
        let daysOpen = data.open[0];
        let daysClose = data.close[0];
        let daysHigh = data.high[0];
        let daysLow = data.low[0];
        let isBullishInvertedHammer = daysClose > daysOpen;
        isBullishInvertedHammer = isBullishInvertedHammer && this.approximateEqual(daysOpen, daysLow);
        isBullishInvertedHammer = isBullishInvertedHammer && (daysClose - daysOpen) <= 2 * (daysHigh - daysClose);
        return isBullishInvertedHammer;
    }
}
function bullishinvertedhammerstick(data) {
    return new BullishInvertedHammerStick().hasPattern(data);
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/candlestick/BullishMarubozu.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/candlestick/BullishMarubozu.js ***!
  \*****************************************************************************/
/*! exports provided: default, bullishmarubozu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BullishMarubozu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bullishmarubozu", function() { return bullishmarubozu; });
/* harmony import */ var _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CandlestickFinder */ "./node_modules/technicalindicators/lib/candlestick/CandlestickFinder.js");

class BullishMarubozu extends _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.name = 'BullishMarubozu';
        this.requiredCount = 1;
    }
    logic(data) {
        let daysOpen = data.open[0];
        let daysClose = data.close[0];
        let daysHigh = data.high[0];
        let daysLow = data.low[0];
        let isBullishMarbozu = this.approximateEqual(daysClose, daysHigh) &&
            this.approximateEqual(daysLow, daysOpen) &&
            daysOpen < daysClose &&
            daysOpen < daysHigh;
        return (isBullishMarbozu);
    }
}
function bullishmarubozu(data) {
    return new BullishMarubozu().hasPattern(data);
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/candlestick/BullishSpinningTop.js":
/*!********************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/candlestick/BullishSpinningTop.js ***!
  \********************************************************************************/
/*! exports provided: default, bullishspinningtop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BullishSpinningTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bullishspinningtop", function() { return bullishspinningtop; });
/* harmony import */ var _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CandlestickFinder */ "./node_modules/technicalindicators/lib/candlestick/CandlestickFinder.js");

class BullishSpinningTop extends _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.name = 'BullishSpinningTop';
        this.requiredCount = 1;
    }
    logic(data) {
        let daysOpen = data.open[0];
        let daysClose = data.close[0];
        let daysHigh = data.high[0];
        let daysLow = data.low[0];
        let bodyLength = Math.abs(daysClose - daysOpen);
        let upperShadowLength = Math.abs(daysHigh - daysClose);
        let lowerShadowLength = Math.abs(daysOpen - daysLow);
        let isBullishSpinningTop = bodyLength < upperShadowLength &&
            bodyLength < lowerShadowLength;
        return isBullishSpinningTop;
    }
}
function bullishspinningtop(data) {
    return new BullishSpinningTop().hasPattern(data);
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/candlestick/CandlestickFinder.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/candlestick/CandlestickFinder.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CandlestickFinder; });
class CandlestickFinder {
    constructor() {
        // if (new.target === Abstract) {
        //     throw new TypeError("Abstract class");
        // }
    }
    approximateEqual(a, b) {
        let left = parseFloat(Math.abs(a - b).toPrecision(4)) * 1;
        let right = parseFloat((a * 0.001).toPrecision(4)) * 1;
        return left <= right;
    }
    logic(data) {
        throw "this has to be implemented";
    }
    getAllPatternIndex(data) {
        if (data.close.length < this.requiredCount) {
            console.warn('Data count less than data required for the strategy ', this.name);
            return [];
        }
        if (data.reversedInput) {
            data.open.reverse();
            data.high.reverse();
            data.low.reverse();
            data.close.reverse();
        }
        let strategyFn = this.logic;
        return this._generateDataForCandleStick(data)
            .map((current, index) => {
            return strategyFn.call(this, current) ? index : undefined;
        }).filter((hasIndex) => {
            return hasIndex;
        });
    }
    hasPattern(data) {
        if (data.close.length < this.requiredCount) {
            console.warn('Data count less than data required for the strategy ', this.name);
            return false;
        }
        if (data.reversedInput) {
            data.open.reverse();
            data.high.reverse();
            data.low.reverse();
            data.close.reverse();
        }
        let strategyFn = this.logic;
        return strategyFn.call(this, this._getLastDataForCandleStick(data));
    }
    _getLastDataForCandleStick(data) {
        let requiredCount = this.requiredCount;
        if (data.close.length === requiredCount) {
            return data;
        }
        else {
            let returnVal = {
                open: [],
                high: [],
                low: [],
                close: []
            };
            let i = 0;
            let index = data.close.length - requiredCount;
            while (i < requiredCount) {
                returnVal.open.push(data.open[index + i]);
                returnVal.high.push(data.high[index + i]);
                returnVal.low.push(data.low[index + i]);
                returnVal.close.push(data.close[index + i]);
                i++;
            }
            return returnVal;
        }
    }
    _generateDataForCandleStick(data) {
        let requiredCount = this.requiredCount;
        let generatedData = data.close.map(function (currentData, index) {
            let i = 0;
            let returnVal = {
                open: [],
                high: [],
                low: [],
                close: []
            };
            while (i < requiredCount) {
                returnVal.open.push(data.open[index + i]);
                returnVal.high.push(data.high[index + i]);
                returnVal.low.push(data.low[index + i]);
                returnVal.close.push(data.close[index + i]);
                i++;
            }
            return returnVal;
        }).filter((val, index) => { return (index <= (data.close.length - requiredCount)); });
        return generatedData;
    }
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/candlestick/DarkCloudCover.js":
/*!****************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/candlestick/DarkCloudCover.js ***!
  \****************************************************************************/
/*! exports provided: default, darkcloudcover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DarkCloudCover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkcloudcover", function() { return darkcloudcover; });
/* harmony import */ var _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CandlestickFinder */ "./node_modules/technicalindicators/lib/candlestick/CandlestickFinder.js");

class DarkCloudCover extends _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.name = 'DarkCloudCover';
        this.requiredCount = 2;
    }
    logic(data) {
        let firstdaysOpen = data.open[0];
        let firstdaysClose = data.close[0];
        let firstdaysHigh = data.high[0];
        let firstdaysLow = data.low[0];
        let seconddaysOpen = data.open[1];
        let seconddaysClose = data.close[1];
        let seconddaysHigh = data.high[1];
        let seconddaysLow = data.low[1];
        let firstdayMidpoint = ((firstdaysClose + firstdaysOpen) / 2);
        let isFirstBullish = firstdaysClose > firstdaysOpen;
        let isSecondBearish = seconddaysClose < seconddaysOpen;
        let isDarkCloudPattern = ((seconddaysOpen > firstdaysHigh) &&
            (seconddaysClose < firstdayMidpoint) &&
            (seconddaysClose > firstdaysOpen));
        return (isFirstBullish && isSecondBearish && isDarkCloudPattern);
    }
}
function darkcloudcover(data) {
    return new DarkCloudCover().hasPattern(data);
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/candlestick/Doji.js":
/*!******************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/candlestick/Doji.js ***!
  \******************************************************************/
/*! exports provided: default, doji */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Doji; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doji", function() { return doji; });
/* harmony import */ var _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CandlestickFinder */ "./node_modules/technicalindicators/lib/candlestick/CandlestickFinder.js");

class Doji extends _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.name = 'Doji';
        this.requiredCount = 1;
    }
    logic(data) {
        let daysOpen = data.open[0];
        let daysClose = data.close[0];
        let daysHigh = data.high[0];
        let daysLow = data.low[0];
        let isOpenEqualsClose = this.approximateEqual(daysOpen, daysClose);
        let isHighEqualsOpen = isOpenEqualsClose && this.approximateEqual(daysOpen, daysHigh);
        let isLowEqualsClose = isOpenEqualsClose && this.approximateEqual(daysClose, daysLow);
        return (isOpenEqualsClose && isHighEqualsOpen == isLowEqualsClose);
    }
}
function doji(data) {
    return new Doji().hasPattern(data);
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/candlestick/DownsideTasukiGap.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/candlestick/DownsideTasukiGap.js ***!
  \*******************************************************************************/
/*! exports provided: default, downsidetasukigap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DownsideTasukiGap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downsidetasukigap", function() { return downsidetasukigap; });
/* harmony import */ var _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CandlestickFinder */ "./node_modules/technicalindicators/lib/candlestick/CandlestickFinder.js");

class DownsideTasukiGap extends _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.requiredCount = 3;
        this.name = 'DownsideTasukiGap';
    }
    logic(data) {
        let firstdaysOpen = data.open[0];
        let firstdaysClose = data.close[0];
        let firstdaysHigh = data.high[0];
        let firstdaysLow = data.low[0];
        let seconddaysOpen = data.open[1];
        let seconddaysClose = data.close[1];
        let seconddaysHigh = data.high[1];
        let seconddaysLow = data.low[1];
        let thirddaysOpen = data.open[2];
        let thirddaysClose = data.close[2];
        let thirddaysHigh = data.high[2];
        let thirddaysLow = data.low[2];
        let isFirstBearish = firstdaysClose < firstdaysOpen;
        let isSecondBearish = seconddaysClose < seconddaysOpen;
        let isThirdBullish = thirddaysClose > thirddaysOpen;
        let isFirstGapExists = seconddaysHigh < firstdaysLow;
        let isDownsideTasukiGap = ((seconddaysOpen > thirddaysOpen) &&
            (seconddaysClose < thirddaysOpen) &&
            (thirddaysClose > seconddaysOpen) &&
            (thirddaysClose < firstdaysClose));
        return (isFirstBearish && isSecondBearish && isThirdBullish && isFirstGapExists && isDownsideTasukiGap);
    }
}
function downsidetasukigap(data) {
    return new DownsideTasukiGap().hasPattern(data);
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/candlestick/DragonFlyDoji.js":
/*!***************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/candlestick/DragonFlyDoji.js ***!
  \***************************************************************************/
/*! exports provided: default, dragonflydoji */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DragonFlyDoji; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dragonflydoji", function() { return dragonflydoji; });
/* harmony import */ var _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CandlestickFinder */ "./node_modules/technicalindicators/lib/candlestick/CandlestickFinder.js");

class DragonFlyDoji extends _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.requiredCount = 1;
        this.name = 'DragonFlyDoji';
    }
    logic(data) {
        let daysOpen = data.open[0];
        let daysClose = data.close[0];
        let daysHigh = data.high[0];
        let daysLow = data.low[0];
        let isOpenEqualsClose = this.approximateEqual(daysOpen, daysClose);
        let isHighEqualsOpen = isOpenEqualsClose && this.approximateEqual(daysOpen, daysHigh);
        let isLowEqualsClose = isOpenEqualsClose && this.approximateEqual(daysClose, daysLow);
        return (isOpenEqualsClose && isHighEqualsOpen && !isLowEqualsClose);
    }
}
function dragonflydoji(data) {
    return new DragonFlyDoji().hasPattern(data);
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/candlestick/EveningDojiStar.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/candlestick/EveningDojiStar.js ***!
  \*****************************************************************************/
/*! exports provided: default, eveningdojistar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EveningDojiStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eveningdojistar", function() { return eveningdojistar; });
/* harmony import */ var _Doji__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Doji */ "./node_modules/technicalindicators/lib/candlestick/Doji.js");
/* harmony import */ var _CandlestickFinder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CandlestickFinder */ "./node_modules/technicalindicators/lib/candlestick/CandlestickFinder.js");


class EveningDojiStar extends _CandlestickFinder__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor() {
        super();
        this.name = 'EveningDojiStar';
        this.requiredCount = 3;
    }
    logic(data) {
        let firstdaysOpen = data.open[0];
        let firstdaysClose = data.close[0];
        let firstdaysHigh = data.high[0];
        let firstdaysLow = data.low[0];
        let seconddaysOpen = data.open[1];
        let seconddaysClose = data.close[1];
        let seconddaysHigh = data.high[1];
        let seconddaysLow = data.low[1];
        let thirddaysOpen = data.open[2];
        let thirddaysClose = data.close[2];
        let thirddaysHigh = data.high[2];
        let thirddaysLow = data.low[2];
        let firstdaysMidpoint = ((firstdaysOpen + firstdaysClose) / 2);
        let isFirstBullish = firstdaysClose > firstdaysOpen;
        let dojiExists = new _Doji__WEBPACK_IMPORTED_MODULE_0__["default"]().hasPattern({
            "open": [seconddaysOpen],
            "close": [seconddaysClose],
            "high": [seconddaysHigh],
            "low": [seconddaysLow]
        });
        let isThirdBearish = thirddaysOpen > thirddaysClose;
        let gapExists = ((seconddaysHigh > firstdaysHigh) &&
            (seconddaysLow > firstdaysHigh) &&
            (thirddaysOpen < seconddaysLow) &&
            (seconddaysClose > thirddaysOpen));
        let doesCloseBelowFirstMidpoint = thirddaysClose < firstdaysMidpoint;
        return (isFirstBullish && dojiExists && gapExists && isThirdBearish && doesCloseBelowFirstMidpoint);
    }
}
function eveningdojistar(data) {
    return new EveningDojiStar().hasPattern(data);
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/candlestick/EveningStar.js":
/*!*************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/candlestick/EveningStar.js ***!
  \*************************************************************************/
/*! exports provided: default, eveningstar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EveningStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eveningstar", function() { return eveningstar; });
/* harmony import */ var _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CandlestickFinder */ "./node_modules/technicalindicators/lib/candlestick/CandlestickFinder.js");

class EveningStar extends _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.name = 'EveningStar';
        this.requiredCount = 3;
    }
    logic(data) {
        let firstdaysOpen = data.open[0];
        let firstdaysClose = data.close[0];
        let firstdaysHigh = data.high[0];
        let firstdaysLow = data.low[0];
        let seconddaysOpen = data.open[1];
        let seconddaysClose = data.close[1];
        let seconddaysHigh = data.high[1];
        let seconddaysLow = data.low[1];
        let thirddaysOpen = data.open[2];
        let thirddaysClose = data.close[2];
        let thirddaysHigh = data.high[2];
        let thirddaysLow = data.low[2];
        let firstdaysMidpoint = ((firstdaysOpen + firstdaysClose) / 2);
        let isFirstBullish = firstdaysClose > firstdaysOpen;
        let isSmallBodyExists = ((firstdaysHigh < seconddaysLow) &&
            (firstdaysHigh < seconddaysHigh));
        let isThirdBearish = thirddaysOpen > thirddaysClose;
        let gapExists = ((seconddaysHigh > firstdaysHigh) &&
            (seconddaysLow > firstdaysHigh) &&
            (thirddaysOpen < seconddaysLow) &&
            (seconddaysClose > thirddaysOpen));
        let doesCloseBelowFirstMidpoint = thirddaysClose < firstdaysMidpoint;
        return (isFirstBullish && isSmallBodyExists && gapExists && isThirdBearish && doesCloseBelowFirstMidpoint);
    }
}
function eveningstar(data) {
    return new EveningStar().hasPattern(data);
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/candlestick/GraveStoneDoji.js":
/*!****************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/candlestick/GraveStoneDoji.js ***!
  \****************************************************************************/
/*! exports provided: default, gravestonedoji */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GraveStoneDoji; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gravestonedoji", function() { return gravestonedoji; });
/* harmony import */ var _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CandlestickFinder */ "./node_modules/technicalindicators/lib/candlestick/CandlestickFinder.js");

class GraveStoneDoji extends _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.requiredCount = 1;
        this.name = 'GraveStoneDoji';
    }
    logic(data) {
        let daysOpen = data.open[0];
        let daysClose = data.close[0];
        let daysHigh = data.high[0];
        let daysLow = data.low[0];
        let isOpenEqualsClose = this.approximateEqual(daysOpen, daysClose);
        let isHighEqualsOpen = isOpenEqualsClose && this.approximateEqual(daysOpen, daysHigh);
        let isLowEqualsClose = isOpenEqualsClose && this.approximateEqual(daysClose, daysLow);
        return (isOpenEqualsClose && isLowEqualsClose && !isHighEqualsOpen);
    }
}
function gravestonedoji(data) {
    return new GraveStoneDoji().hasPattern(data);
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/candlestick/HammerPattern.js":
/*!***************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/candlestick/HammerPattern.js ***!
  \***************************************************************************/
/*! exports provided: default, hammerpattern */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HammerPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hammerpattern", function() { return hammerpattern; });
/* harmony import */ var _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CandlestickFinder */ "./node_modules/technicalindicators/lib/candlestick/CandlestickFinder.js");
/* harmony import */ var _Utils_AverageLoss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/AverageLoss */ "./node_modules/technicalindicators/lib/Utils/AverageLoss.js");
/* harmony import */ var _Utils_AverageGain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils/AverageGain */ "./node_modules/technicalindicators/lib/Utils/AverageGain.js");
/* harmony import */ var _BearishHammerStick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BearishHammerStick */ "./node_modules/technicalindicators/lib/candlestick/BearishHammerStick.js");
/* harmony import */ var _BearishInvertedHammerStick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BearishInvertedHammerStick */ "./node_modules/technicalindicators/lib/candlestick/BearishInvertedHammerStick.js");
/* harmony import */ var _BullishHammerStick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BullishHammerStick */ "./node_modules/technicalindicators/lib/candlestick/BullishHammerStick.js");
/* harmony import */ var _BullishInvertedHammerStick__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BullishInvertedHammerStick */ "./node_modules/technicalindicators/lib/candlestick/BullishInvertedHammerStick.js");







class HammerPattern extends _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.name = 'HammerPattern';
        this.requiredCount = 5;
    }
    logic(data) {
        let isPattern = this.downwardTrend(data);
        isPattern = isPattern && this.includesHammer(data);
        isPattern = isPattern && this.hasConfirmation(data);
        return isPattern;
    }
    downwardTrend(data, confirm = true) {
        let end = confirm ? 3 : 4;
        // Analyze trends in closing prices of the first three or four candlesticks
        let gains = Object(_Utils_AverageGain__WEBPACK_IMPORTED_MODULE_2__["averagegain"])({ values: data.close.slice(0, end), period: end - 1 });
        let losses = Object(_Utils_AverageLoss__WEBPACK_IMPORTED_MODULE_1__["averageloss"])({ values: data.close.slice(0, end), period: end - 1 });
        // Downward trend, so more losses than gains
        return losses > gains;
    }
    includesHammer(data, confirm = true) {
        let start = confirm ? 3 : 4;
        let end = confirm ? 4 : undefined;
        let possibleHammerData = {
            open: data.open.slice(start, end),
            close: data.close.slice(start, end),
            low: data.low.slice(start, end),
            high: data.high.slice(start, end),
        };
        let isPattern = Object(_BearishHammerStick__WEBPACK_IMPORTED_MODULE_3__["bearishhammerstick"])(possibleHammerData);
        isPattern = isPattern || Object(_BearishInvertedHammerStick__WEBPACK_IMPORTED_MODULE_4__["bearishinvertedhammerstick"])(possibleHammerData);
        isPattern = isPattern || Object(_BullishHammerStick__WEBPACK_IMPORTED_MODULE_5__["bullishhammerstick"])(possibleHammerData);
        isPattern = isPattern || Object(_BullishInvertedHammerStick__WEBPACK_IMPORTED_MODULE_6__["bullishinvertedhammerstick"])(possibleHammerData);
        return isPattern;
    }
    hasConfirmation(data) {
        let possibleHammer = {
            open: data.open[3],
            close: data.close[3],
            low: data.low[3],
            high: data.high[3],
        };
        let possibleConfirmation = {
            open: data.open[4],
            close: data.close[4],
            low: data.low[4],
            high: data.high[4],
        };
        // Confirmation candlestick is bullish
        let isPattern = possibleConfirmation.open < possibleConfirmation.close;
        return isPattern && possibleHammer.close < possibleConfirmation.close;
    }
}
function hammerpattern(data) {
    return new HammerPattern().hasPattern(data);
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/candlestick/HammerPatternUnconfirmed.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/candlestick/HammerPatternUnconfirmed.js ***!
  \**************************************************************************************/
/*! exports provided: default, hammerpatternunconfirmed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HammerPatternUnconfirmed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hammerpatternunconfirmed", function() { return hammerpatternunconfirmed; });
/* harmony import */ var _HammerPattern__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HammerPattern */ "./node_modules/technicalindicators/lib/candlestick/HammerPattern.js");

class HammerPatternUnconfirmed extends _HammerPattern__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.name = 'HammerPatternUnconfirmed';
    }
    logic(data) {
        let isPattern = this.downwardTrend(data, false);
        isPattern = isPattern && this.includesHammer(data, false);
        return isPattern;
    }
}
function hammerpatternunconfirmed(data) {
    return new HammerPatternUnconfirmed().hasPattern(data);
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/candlestick/HangingMan.js":
/*!************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/candlestick/HangingMan.js ***!
  \************************************************************************/
/*! exports provided: default, hangingman */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HangingMan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hangingman", function() { return hangingman; });
/* harmony import */ var _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CandlestickFinder */ "./node_modules/technicalindicators/lib/candlestick/CandlestickFinder.js");
/* harmony import */ var _Utils_AverageLoss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/AverageLoss */ "./node_modules/technicalindicators/lib/Utils/AverageLoss.js");
/* harmony import */ var _Utils_AverageGain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils/AverageGain */ "./node_modules/technicalindicators/lib/Utils/AverageGain.js");
/* harmony import */ var _BearishHammerStick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BearishHammerStick */ "./node_modules/technicalindicators/lib/candlestick/BearishHammerStick.js");
/* harmony import */ var _BullishHammerStick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BullishHammerStick */ "./node_modules/technicalindicators/lib/candlestick/BullishHammerStick.js");





class HangingMan extends _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.name = 'HangingMan';
        this.requiredCount = 5;
    }
    logic(data) {
        let isPattern = this.upwardTrend(data);
        isPattern = isPattern && this.includesHammer(data);
        isPattern = isPattern && this.hasConfirmation(data);
        return isPattern;
    }
    upwardTrend(data, confirm = true) {
        let end = confirm ? 3 : 4;
        // Analyze trends in closing prices of the first three or four candlesticks
        let gains = Object(_Utils_AverageGain__WEBPACK_IMPORTED_MODULE_2__["averagegain"])({ values: data.close.slice(0, end), period: end - 1 });
        let losses = Object(_Utils_AverageLoss__WEBPACK_IMPORTED_MODULE_1__["averageloss"])({ values: data.close.slice(0, end), period: end - 1 });
        // Upward trend, so more gains than losses
        return gains > losses;
    }
    includesHammer(data, confirm = true) {
        let start = confirm ? 3 : 4;
        let end = confirm ? 4 : undefined;
        let possibleHammerData = {
            open: data.open.slice(start, end),
            close: data.close.slice(start, end),
            low: data.low.slice(start, end),
            high: data.high.slice(start, end),
        };
        let isPattern = Object(_BearishHammerStick__WEBPACK_IMPORTED_MODULE_3__["bearishhammerstick"])(possibleHammerData);
        isPattern = isPattern || Object(_BullishHammerStick__WEBPACK_IMPORTED_MODULE_4__["bullishhammerstick"])(possibleHammerData);
        return isPattern;
    }
    hasConfirmation(data) {
        let possibleHammer = {
            open: data.open[3],
            close: data.close[3],
            low: data.low[3],
            high: data.high[3],
        };
        let possibleConfirmation = {
            open: data.open[4],
            close: data.close[4],
            low: data.low[4],
            high: data.high[4],
        };
        // Confirmation candlestick is bearish
        let isPattern = possibleConfirmation.open > possibleConfirmation.close;
        return isPattern && possibleHammer.close > possibleConfirmation.close;
    }
}
function hangingman(data) {
    return new HangingMan().hasPattern(data);
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/candlestick/HangingManUnconfirmed.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/candlestick/HangingManUnconfirmed.js ***!
  \***********************************************************************************/
/*! exports provided: default, hangingmanunconfirmed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HangingManUnconfirmed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hangingmanunconfirmed", function() { return hangingmanunconfirmed; });
/* harmony import */ var _HangingMan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HangingMan */ "./node_modules/technicalindicators/lib/candlestick/HangingMan.js");

class HangingManUnconfirmed extends _HangingMan__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.name = 'HangingManUnconfirmed';
    }
    logic(data) {
        let isPattern = this.upwardTrend(data, false);
        isPattern = isPattern && this.includesHammer(data, false);
        return isPattern;
    }
}
function hangingmanunconfirmed(data) {
    return new HangingManUnconfirmed().hasPattern(data);
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/candlestick/MorningDojiStar.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/candlestick/MorningDojiStar.js ***!
  \*****************************************************************************/
/*! exports provided: default, morningdojistar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MorningDojiStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "morningdojistar", function() { return morningdojistar; });
/* harmony import */ var _Doji__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Doji */ "./node_modules/technicalindicators/lib/candlestick/Doji.js");
/* harmony import */ var _CandlestickFinder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CandlestickFinder */ "./node_modules/technicalindicators/lib/candlestick/CandlestickFinder.js");


class MorningDojiStar extends _CandlestickFinder__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor() {
        super();
        this.name = 'MorningDojiStar';
        this.requiredCount = 3;
    }
    logic(data) {
        let firstdaysOpen = data.open[0];
        let firstdaysClose = data.close[0];
        let firstdaysHigh = data.high[0];
        let firstdaysLow = data.low[0];
        let seconddaysOpen = data.open[1];
        let seconddaysClose = data.close[1];
        let seconddaysHigh = data.high[1];
        let seconddaysLow = data.low[1];
        let thirddaysOpen = data.open[2];
        let thirddaysClose = data.close[2];
        let thirddaysHigh = data.high[2];
        let thirddaysLow = data.low[2];
        let firstdaysMidpoint = ((firstdaysOpen + firstdaysClose) / 2);
        let isFirstBearish = firstdaysClose < firstdaysOpen;
        let dojiExists = new _Doji__WEBPACK_IMPORTED_MODULE_0__["default"]().hasPattern({
            "open": [seconddaysOpen],
            "close": [seconddaysClose],
            "high": [seconddaysHigh],
            "low": [seconddaysLow]
        });
        let isThirdBullish = thirddaysOpen < thirddaysClose;
        let gapExists = ((seconddaysHigh < firstdaysLow) &&
            (seconddaysLow < firstdaysLow) &&
            (thirddaysOpen > seconddaysHigh) &&
            (seconddaysClose < thirddaysOpen));
        let doesCloseAboveFirstMidpoint = thirddaysClose > firstdaysMidpoint;
        return (isFirstBearish && dojiExists && isThirdBullish && gapExists &&
            doesCloseAboveFirstMidpoint);
    }
}
function morningdojistar(data) {
    return new MorningDojiStar().hasPattern(data);
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/candlestick/MorningStar.js":
/*!*************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/candlestick/MorningStar.js ***!
  \*************************************************************************/
/*! exports provided: default, morningstar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MorningStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "morningstar", function() { return morningstar; });
/* harmony import */ var _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CandlestickFinder */ "./node_modules/technicalindicators/lib/candlestick/CandlestickFinder.js");

class MorningStar extends _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.name = 'MorningStar';
        this.requiredCount = 3;
    }
    logic(data) {
        let firstdaysOpen = data.open[0];
        let firstdaysClose = data.close[0];
        let firstdaysHigh = data.high[0];
        let firstdaysLow = data.low[0];
        let seconddaysOpen = data.open[1];
        let seconddaysClose = data.close[1];
        let seconddaysHigh = data.high[1];
        let seconddaysLow = data.low[1];
        let thirddaysOpen = data.open[2];
        let thirddaysClose = data.close[2];
        let thirddaysHigh = data.high[2];
        let thirddaysLow = data.low[2];
        let firstdaysMidpoint = ((firstdaysOpen + firstdaysClose) / 2);
        let isFirstBearish = firstdaysClose < firstdaysOpen;
        let isSmallBodyExists = ((firstdaysLow > seconddaysLow) &&
            (firstdaysLow > seconddaysHigh));
        let isThirdBullish = thirddaysOpen < thirddaysClose;
        let gapExists = ((seconddaysHigh < firstdaysLow) &&
            (seconddaysLow < firstdaysLow) &&
            (thirddaysOpen > seconddaysHigh) &&
            (seconddaysClose < thirddaysOpen));
        let doesCloseAboveFirstMidpoint = thirddaysClose > firstdaysMidpoint;
        return (isFirstBearish && isSmallBodyExists && gapExists && isThirdBullish && doesCloseAboveFirstMidpoint);
    }
}
function morningstar(data) {
    return new MorningStar().hasPattern(data);
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/candlestick/PiercingLine.js":
/*!**************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/candlestick/PiercingLine.js ***!
  \**************************************************************************/
/*! exports provided: default, piercingline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PiercingLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "piercingline", function() { return piercingline; });
/* harmony import */ var _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CandlestickFinder */ "./node_modules/technicalindicators/lib/candlestick/CandlestickFinder.js");

class PiercingLine extends _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.requiredCount = 2;
        this.name = 'PiercingLine';
    }
    logic(data) {
        let firstdaysOpen = data.open[0];
        let firstdaysClose = data.close[0];
        let firstdaysHigh = data.high[0];
        let firstdaysLow = data.low[0];
        let seconddaysOpen = data.open[1];
        let seconddaysClose = data.close[1];
        let seconddaysHigh = data.high[1];
        let seconddaysLow = data.low[1];
        let firstdaysMidpoint = ((firstdaysOpen + firstdaysClose) / 2);
        let isDowntrend = seconddaysLow < firstdaysLow;
        let isFirstBearish = firstdaysClose < firstdaysOpen;
        let isSecondBullish = seconddaysClose > seconddaysOpen;
        let isPiercingLinePattern = ((firstdaysLow > seconddaysOpen) &&
            (seconddaysClose > firstdaysMidpoint));
        return (isDowntrend && isFirstBearish && isPiercingLinePattern && isSecondBullish);
    }
}
function piercingline(data) {
    return new PiercingLine().hasPattern(data);
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/candlestick/ShootingStar.js":
/*!**************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/candlestick/ShootingStar.js ***!
  \**************************************************************************/
/*! exports provided: default, shootingstar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShootingStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shootingstar", function() { return shootingstar; });
/* harmony import */ var _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CandlestickFinder */ "./node_modules/technicalindicators/lib/candlestick/CandlestickFinder.js");
/* harmony import */ var _Utils_AverageLoss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/AverageLoss */ "./node_modules/technicalindicators/lib/Utils/AverageLoss.js");
/* harmony import */ var _Utils_AverageGain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils/AverageGain */ "./node_modules/technicalindicators/lib/Utils/AverageGain.js");
/* harmony import */ var _BearishInvertedHammerStick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BearishInvertedHammerStick */ "./node_modules/technicalindicators/lib/candlestick/BearishInvertedHammerStick.js");
/* harmony import */ var _BullishInvertedHammerStick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BullishInvertedHammerStick */ "./node_modules/technicalindicators/lib/candlestick/BullishInvertedHammerStick.js");





class ShootingStar extends _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.name = 'ShootingStar';
        this.requiredCount = 5;
    }
    logic(data) {
        let isPattern = this.upwardTrend(data);
        isPattern = isPattern && this.includesHammer(data);
        isPattern = isPattern && this.hasConfirmation(data);
        return isPattern;
    }
    upwardTrend(data, confirm = true) {
        let end = confirm ? 3 : 4;
        // Analyze trends in closing prices of the first three or four candlesticks
        let gains = Object(_Utils_AverageGain__WEBPACK_IMPORTED_MODULE_2__["averagegain"])({ values: data.close.slice(0, end), period: end - 1 });
        let losses = Object(_Utils_AverageLoss__WEBPACK_IMPORTED_MODULE_1__["averageloss"])({ values: data.close.slice(0, end), period: end - 1 });
        // Upward trend, so more gains than losses
        return gains > losses;
    }
    includesHammer(data, confirm = true) {
        let start = confirm ? 3 : 4;
        let end = confirm ? 4 : undefined;
        let possibleHammerData = {
            open: data.open.slice(start, end),
            close: data.close.slice(start, end),
            low: data.low.slice(start, end),
            high: data.high.slice(start, end),
        };
        let isPattern = Object(_BearishInvertedHammerStick__WEBPACK_IMPORTED_MODULE_3__["bearishinvertedhammerstick"])(possibleHammerData);
        isPattern = isPattern || Object(_BullishInvertedHammerStick__WEBPACK_IMPORTED_MODULE_4__["bullishinvertedhammerstick"])(possibleHammerData);
        return isPattern;
    }
    hasConfirmation(data) {
        let possibleHammer = {
            open: data.open[3],
            close: data.close[3],
            low: data.low[3],
            high: data.high[3],
        };
        let possibleConfirmation = {
            open: data.open[4],
            close: data.close[4],
            low: data.low[4],
            high: data.high[4],
        };
        // Confirmation candlestick is bearish
        let isPattern = possibleConfirmation.open > possibleConfirmation.close;
        return isPattern && possibleHammer.close > possibleConfirmation.close;
    }
}
function shootingstar(data) {
    return new ShootingStar().hasPattern(data);
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/candlestick/ShootingStarUnconfirmed.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/candlestick/ShootingStarUnconfirmed.js ***!
  \*************************************************************************************/
/*! exports provided: default, shootingstarunconfirmed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShootingStarUnconfirmed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shootingstarunconfirmed", function() { return shootingstarunconfirmed; });
/* harmony import */ var _ShootingStar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShootingStar */ "./node_modules/technicalindicators/lib/candlestick/ShootingStar.js");

class ShootingStarUnconfirmed extends _ShootingStar__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.name = 'ShootingStarUnconfirmed';
    }
    logic(data) {
        let isPattern = this.upwardTrend(data, false);
        isPattern = isPattern && this.includesHammer(data, false);
        return isPattern;
    }
}
function shootingstarunconfirmed(data) {
    return new ShootingStarUnconfirmed().hasPattern(data);
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/candlestick/ThreeBlackCrows.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/candlestick/ThreeBlackCrows.js ***!
  \*****************************************************************************/
/*! exports provided: default, threeblackcrows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ThreeBlackCrows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "threeblackcrows", function() { return threeblackcrows; });
/* harmony import */ var _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CandlestickFinder */ "./node_modules/technicalindicators/lib/candlestick/CandlestickFinder.js");

class ThreeBlackCrows extends _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.name = 'ThreeBlackCrows';
        this.requiredCount = 3;
    }
    logic(data) {
        let firstdaysOpen = data.open[0];
        let firstdaysClose = data.close[0];
        let firstdaysHigh = data.high[0];
        let firstdaysLow = data.low[0];
        let seconddaysOpen = data.open[1];
        let seconddaysClose = data.close[1];
        let seconddaysHigh = data.high[1];
        let seconddaysLow = data.low[1];
        let thirddaysOpen = data.open[2];
        let thirddaysClose = data.close[2];
        let thirddaysHigh = data.high[2];
        let thirddaysLow = data.low[2];
        let isDownTrend = firstdaysLow > seconddaysLow &&
            seconddaysLow > thirddaysLow;
        let isAllBearish = firstdaysOpen > firstdaysClose &&
            seconddaysOpen > seconddaysClose &&
            thirddaysOpen > thirddaysClose;
        let doesOpenWithinPreviousBody = firstdaysOpen > seconddaysOpen &&
            seconddaysOpen > firstdaysClose &&
            seconddaysOpen > thirddaysOpen &&
            thirddaysOpen > seconddaysClose;
        return (isDownTrend && isAllBearish && doesOpenWithinPreviousBody);
    }
}
function threeblackcrows(data) {
    return new ThreeBlackCrows().hasPattern(data);
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/candlestick/ThreeWhiteSoldiers.js":
/*!********************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/candlestick/ThreeWhiteSoldiers.js ***!
  \********************************************************************************/
/*! exports provided: default, threewhitesoldiers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ThreeWhiteSoldiers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "threewhitesoldiers", function() { return threewhitesoldiers; });
/* harmony import */ var _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CandlestickFinder */ "./node_modules/technicalindicators/lib/candlestick/CandlestickFinder.js");

class ThreeWhiteSoldiers extends _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.name = 'ThreeWhiteSoldiers';
        this.requiredCount = 3;
    }
    logic(data) {
        let firstdaysOpen = data.open[0];
        let firstdaysClose = data.close[0];
        let firstdaysHigh = data.high[0];
        let firstdaysLow = data.low[0];
        let seconddaysOpen = data.open[1];
        let seconddaysClose = data.close[1];
        let seconddaysHigh = data.high[1];
        let seconddaysLow = data.low[1];
        let thirddaysOpen = data.open[2];
        let thirddaysClose = data.close[2];
        let thirddaysHigh = data.high[2];
        let thirddaysLow = data.low[2];
        let isUpTrend = seconddaysHigh > firstdaysHigh &&
            thirddaysHigh > seconddaysHigh;
        let isAllBullish = firstdaysOpen < firstdaysClose &&
            seconddaysOpen < seconddaysClose &&
            thirddaysOpen < thirddaysClose;
        let doesOpenWithinPreviousBody = firstdaysClose > seconddaysOpen &&
            seconddaysOpen < firstdaysHigh &&
            seconddaysHigh > thirddaysOpen &&
            thirddaysOpen < seconddaysClose;
        return (isUpTrend && isAllBullish && doesOpenWithinPreviousBody);
    }
}
function threewhitesoldiers(data) {
    return new ThreeWhiteSoldiers().hasPattern(data);
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/candlestick/TweezerBottom.js":
/*!***************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/candlestick/TweezerBottom.js ***!
  \***************************************************************************/
/*! exports provided: default, tweezerbottom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TweezerBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tweezerbottom", function() { return tweezerbottom; });
/* harmony import */ var _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CandlestickFinder */ "./node_modules/technicalindicators/lib/candlestick/CandlestickFinder.js");
/* harmony import */ var _Utils_AverageLoss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/AverageLoss */ "./node_modules/technicalindicators/lib/Utils/AverageLoss.js");
/* harmony import */ var _Utils_AverageGain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils/AverageGain */ "./node_modules/technicalindicators/lib/Utils/AverageGain.js");



class TweezerBottom extends _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.name = 'TweezerBottom';
        this.requiredCount = 5;
    }
    logic(data) {
        return this.downwardTrend(data) && data.low[3] == data.low[4];
    }
    downwardTrend(data) {
        // Analyze trends in closing prices of the first three or four candlesticks
        let gains = Object(_Utils_AverageGain__WEBPACK_IMPORTED_MODULE_2__["averagegain"])({ values: data.close.slice(0, 3), period: 2 });
        let losses = Object(_Utils_AverageLoss__WEBPACK_IMPORTED_MODULE_1__["averageloss"])({ values: data.close.slice(0, 3), period: 2 });
        // Downward trend, so more losses than gains
        return losses > gains;
    }
}
function tweezerbottom(data) {
    return new TweezerBottom().hasPattern(data);
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/candlestick/TweezerTop.js":
/*!************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/candlestick/TweezerTop.js ***!
  \************************************************************************/
/*! exports provided: default, tweezertop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TweezerTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tweezertop", function() { return tweezertop; });
/* harmony import */ var _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CandlestickFinder */ "./node_modules/technicalindicators/lib/candlestick/CandlestickFinder.js");
/* harmony import */ var _Utils_AverageLoss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/AverageLoss */ "./node_modules/technicalindicators/lib/Utils/AverageLoss.js");
/* harmony import */ var _Utils_AverageGain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils/AverageGain */ "./node_modules/technicalindicators/lib/Utils/AverageGain.js");



class TweezerTop extends _CandlestickFinder__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.name = 'TweezerTop';
        this.requiredCount = 5;
    }
    logic(data) {
        return this.upwardTrend(data) && data.high[3] == data.high[4];
    }
    upwardTrend(data) {
        // Analyze trends in closing prices of the first three or four candlesticks
        let gains = Object(_Utils_AverageGain__WEBPACK_IMPORTED_MODULE_2__["averagegain"])({ values: data.close.slice(0, 3), period: 2 });
        let losses = Object(_Utils_AverageLoss__WEBPACK_IMPORTED_MODULE_1__["averageloss"])({ values: data.close.slice(0, 3), period: 2 });
        // Upward trend, so more gains than losses
        return gains > losses;
    }
}
function tweezertop(data) {
    return new TweezerTop().hasPattern(data);
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/chart_types/HeikinAshi.js":
/*!************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/chart_types/HeikinAshi.js ***!
  \************************************************************************/
/*! exports provided: HeikinAshiInput, HeikinAshi, heikinashi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeikinAshiInput", function() { return HeikinAshiInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeikinAshi", function() { return HeikinAshi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heikinashi", function() { return heikinashi; });
/* harmony import */ var _StockData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../StockData */ "./node_modules/technicalindicators/lib/StockData.js");
/* harmony import */ var _indicator_indicator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../indicator/indicator */ "./node_modules/technicalindicators/lib/indicator/indicator.js");

/**
 * Created by AAravindan on 5/4/16.
 */

class HeikinAshiInput extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_1__["IndicatorInput"] {
}
class HeikinAshi extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_1__["Indicator"] {
    constructor(input) {
        super(input);
        var format = this.format;
        this.result = new _StockData__WEBPACK_IMPORTED_MODULE_0__["CandleList"]();
        let lastOpen = null;
        let lastHigh = 0;
        let lastLow = Infinity;
        let lastClose = 0;
        let lastVolume = 0;
        let lastTimestamp = 0;
        this.generator = (function* () {
            let candleData = yield;
            let calculated = null;
            while (true) {
                if (lastOpen === null) {
                    lastOpen = (candleData.close + candleData.open) / 2;
                    lastHigh = candleData.high;
                    lastLow = candleData.low;
                    lastClose = (candleData.close + candleData.open + candleData.high + candleData.low) / 4;
                    lastVolume = (candleData.volume || 0);
                    lastTimestamp = (candleData.timestamp || 0);
                    calculated = {
                        open: lastOpen,
                        high: lastHigh,
                        low: lastLow,
                        close: lastClose,
                        volume: candleData.volume || 0,
                        timestamp: (candleData.timestamp || 0)
                    };
                }
                else {
                    let newClose = (candleData.close + candleData.open + candleData.high + candleData.low) / 4;
                    let newOpen = (lastOpen + lastClose) / 2;
                    let newHigh = Math.max(newOpen, newClose, candleData.high);
                    let newLow = Math.min(candleData.low, newOpen, newClose);
                    calculated = {
                        close: newClose,
                        open: newOpen,
                        high: newHigh,
                        low: newLow,
                        volume: (candleData.volume || 0),
                        timestamp: (candleData.timestamp || 0)
                    };
                    lastClose = newClose;
                    lastOpen = newOpen;
                    lastHigh = newHigh;
                    lastLow = newLow;
                }
                candleData = yield calculated;
            }
        })();
        this.generator.next();
        input.low.forEach((tick, index) => {
            var result = this.generator.next({
                open: input.open[index],
                high: input.high[index],
                low: input.low[index],
                close: input.close[index],
                volume: input.volume ? input.volume[index] : input.volume,
                timestamp: input.timestamp ? input.timestamp[index] : input.timestamp
            });
            if (result.value) {
                this.result.open.push(result.value.open);
                this.result.high.push(result.value.high);
                this.result.low.push(result.value.low);
                this.result.close.push(result.value.close);
                this.result.volume.push(result.value.volume);
                this.result.timestamp.push(result.value.timestamp);
            }
        });
    }
    nextValue(price) {
        var result = this.generator.next(price).value;
        return result;
    }
    ;
}
HeikinAshi.calculate = heikinashi;
function heikinashi(input) {
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_1__["Indicator"].reverseInputs(input);
    var result = new HeikinAshi(input).result;
    if (input.reversedInput) {
        result.open.reverse();
        result.high.reverse();
        result.low.reverse();
        result.close.reverse();
        result.volume.reverse();
        result.timestamp.reverse();
    }
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_1__["Indicator"].reverseInputs(input);
    return result;
}
;


/***/ }),

/***/ "./node_modules/technicalindicators/lib/chart_types/Renko.js":
/*!*******************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/chart_types/Renko.js ***!
  \*******************************************************************/
/*! exports provided: RenkoInput, renko */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenkoInput", function() { return RenkoInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renko", function() { return renko; });
/* harmony import */ var _StockData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../StockData */ "./node_modules/technicalindicators/lib/StockData.js");
/* harmony import */ var _directionalmovement_ATR__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directionalmovement/ATR */ "./node_modules/technicalindicators/lib/directionalmovement/ATR.js");
/* harmony import */ var _indicator_indicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../indicator/indicator */ "./node_modules/technicalindicators/lib/indicator/indicator.js");


/**
 * Created by AAravindan on 5/4/16.
 */

class RenkoInput extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_2__["IndicatorInput"] {
}
class Renko extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_2__["Indicator"] {
    constructor(input) {
        super(input);
        var format = this.format;
        let useATR = input.useATR;
        let brickSize = input.brickSize || 0;
        if (useATR) {
            let atrResult = Object(_directionalmovement_ATR__WEBPACK_IMPORTED_MODULE_1__["atr"])(Object.assign({}, input));
            brickSize = atrResult[atrResult.length - 1];
        }
        this.result = new _StockData__WEBPACK_IMPORTED_MODULE_0__["CandleList"]();
        ;
        if (brickSize === 0) {
            console.error('Not enough data to calculate brickSize for renko when using ATR');
            return;
        }
        let lastOpen = 0;
        let lastHigh = 0;
        let lastLow = Infinity;
        let lastClose = 0;
        let lastVolume = 0;
        let lastTimestamp = 0;
        this.generator = (function* () {
            let candleData = yield;
            while (true) {
                //Calculating first bar
                if (lastOpen === 0) {
                    lastOpen = candleData.close;
                    lastHigh = candleData.high;
                    lastLow = candleData.low;
                    lastClose = candleData.close;
                    lastVolume = candleData.volume;
                    lastTimestamp = candleData.timestamp;
                    candleData = yield;
                    continue;
                }
                let absoluteMovementFromClose = Math.abs(candleData.close - lastClose);
                let absoluteMovementFromOpen = Math.abs(candleData.close - lastOpen);
                if ((absoluteMovementFromClose >= brickSize) && (absoluteMovementFromOpen >= brickSize)) {
                    let reference = absoluteMovementFromClose > absoluteMovementFromOpen ? lastOpen : lastClose;
                    let calculated = {
                        open: reference,
                        high: lastHigh > candleData.high ? lastHigh : candleData.high,
                        low: lastLow < candleData.Low ? lastLow : candleData.low,
                        close: reference > candleData.close ? (reference - brickSize) : (reference + brickSize),
                        volume: lastVolume + candleData.volume,
                        timestamp: candleData.timestamp
                    };
                    lastOpen = calculated.open;
                    lastHigh = calculated.close;
                    lastLow = calculated.close;
                    lastClose = calculated.close;
                    lastVolume = 0;
                    candleData = yield calculated;
                }
                else {
                    lastHigh = lastHigh > candleData.high ? lastHigh : candleData.high;
                    lastLow = lastLow < candleData.Low ? lastLow : candleData.low;
                    lastVolume = lastVolume + candleData.volume;
                    lastTimestamp = candleData.timestamp;
                    candleData = yield;
                }
            }
        })();
        this.generator.next();
        input.low.forEach((tick, index) => {
            var result = this.generator.next({
                open: input.open[index],
                high: input.high[index],
                low: input.low[index],
                close: input.close[index],
                volume: input.volume[index],
                timestamp: input.timestamp[index]
            });
            if (result.value) {
                this.result.open.push(result.value.open);
                this.result.high.push(result.value.high);
                this.result.low.push(result.value.low);
                this.result.close.push(result.value.close);
                this.result.volume.push(result.value.volume);
                this.result.timestamp.push(result.value.timestamp);
            }
        });
    }
    nextValue(price) {
        console.error('Cannot calculate next value on Renko, Every value has to be recomputed for every change, use calcualte method');
        return null;
    }
    ;
}
Renko.calculate = renko;
function renko(input) {
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_2__["Indicator"].reverseInputs(input);
    var result = new Renko(input).result;
    if (input.reversedInput) {
        result.open.reverse();
        result.high.reverse();
        result.low.reverse();
        result.close.reverse();
        result.volume.reverse();
        result.timestamp.reverse();
    }
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_2__["Indicator"].reverseInputs(input);
    return result;
}
;


/***/ }),

/***/ "./node_modules/technicalindicators/lib/chart_types/TypicalPrice.js":
/*!**************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/chart_types/TypicalPrice.js ***!
  \**************************************************************************/
/*! exports provided: TypicalPriceInput, TypicalPrice, typicalprice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypicalPriceInput", function() { return TypicalPriceInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypicalPrice", function() { return TypicalPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typicalprice", function() { return typicalprice; });
/* harmony import */ var _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../indicator/indicator */ "./node_modules/technicalindicators/lib/indicator/indicator.js");
/**
 * Created by AAravindan on 5/4/16.
 */

class TypicalPriceInput extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["IndicatorInput"] {
}
class TypicalPrice extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"] {
    constructor(input) {
        super(input);
        this.result = [];
        this.generator = (function* () {
            let priceInput = yield;
            while (true) {
                priceInput = yield (priceInput.high + priceInput.low + priceInput.close) / 3;
            }
        })();
        this.generator.next();
        input.low.forEach((tick, index) => {
            var result = this.generator.next({
                high: input.high[index],
                low: input.low[index],
                close: input.close[index],
            });
            this.result.push(result.value);
        });
    }
    nextValue(price) {
        var result = this.generator.next(price).value;
        return result;
    }
    ;
}
TypicalPrice.calculate = typicalprice;
function typicalprice(input) {
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    var result = new TypicalPrice(input).result;
    if (input.reversedInput) {
        result.reverse();
    }
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    return result;
}
;


/***/ }),

/***/ "./node_modules/technicalindicators/lib/config.js":
/*!********************************************************!*\
  !*** ./node_modules/technicalindicators/lib/config.js ***!
  \********************************************************/
/*! exports provided: setConfig, getConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setConfig", function() { return setConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfig", function() { return getConfig; });
let config = {};
function setConfig(key, value) {
    config[key] = value;
}
function getConfig(key) {
    return config[key];
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/directionalmovement/ADX.js":
/*!*************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/directionalmovement/ADX.js ***!
  \*************************************************************************/
/*! exports provided: ADXInput, ADXOutput, ADX, adx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADXInput", function() { return ADXInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADXOutput", function() { return ADXOutput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADX", function() { return ADX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adx", function() { return adx; });
/* harmony import */ var _moving_averages_WilderSmoothing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moving_averages/WilderSmoothing */ "./node_modules/technicalindicators/lib/moving_averages/WilderSmoothing.js");
/* harmony import */ var _indicator_indicator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../indicator/indicator */ "./node_modules/technicalindicators/lib/indicator/indicator.js");
/* harmony import */ var _MinusDM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MinusDM */ "./node_modules/technicalindicators/lib/directionalmovement/MinusDM.js");
/* harmony import */ var _PlusDM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlusDM */ "./node_modules/technicalindicators/lib/directionalmovement/PlusDM.js");
/* harmony import */ var _TrueRange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TrueRange */ "./node_modules/technicalindicators/lib/directionalmovement/TrueRange.js");
/* harmony import */ var _moving_averages_WEMA__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../moving_averages/WEMA */ "./node_modules/technicalindicators/lib/moving_averages/WEMA.js");






class ADXInput extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_1__["IndicatorInput"] {
}
;
class ADXOutput extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_1__["IndicatorInput"] {
}
;
class ADX extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_1__["Indicator"] {
    constructor(input) {
        super(input);
        var lows = input.low;
        var highs = input.high;
        var closes = input.close;
        var period = input.period;
        var format = this.format;
        var plusDM = new _PlusDM__WEBPACK_IMPORTED_MODULE_3__["PDM"]({
            high: [],
            low: []
        });
        var minusDM = new _MinusDM__WEBPACK_IMPORTED_MODULE_2__["MDM"]({
            high: [],
            low: []
        });
        var emaPDM = new _moving_averages_WilderSmoothing__WEBPACK_IMPORTED_MODULE_0__["WilderSmoothing"]({ period: period, values: [], format: (v) => { return v; } });
        var emaMDM = new _moving_averages_WilderSmoothing__WEBPACK_IMPORTED_MODULE_0__["WilderSmoothing"]({ period: period, values: [], format: (v) => { return v; } });
        var emaTR = new _moving_averages_WilderSmoothing__WEBPACK_IMPORTED_MODULE_0__["WilderSmoothing"]({ period: period, values: [], format: (v) => { return v; } });
        var emaDX = new _moving_averages_WEMA__WEBPACK_IMPORTED_MODULE_5__["WEMA"]({ period: period, values: [], format: (v) => { return v; } });
        var tr = new _TrueRange__WEBPACK_IMPORTED_MODULE_4__["TrueRange"]({
            low: [],
            high: [],
            close: [],
        });
        if (!((lows.length === highs.length) && (highs.length === closes.length))) {
            throw ('Inputs(low,high, close) not of equal size');
        }
        this.result = [];
        ADXOutput;
        this.generator = (function* () {
            var tick = yield;
            var index = 0;
            var lastATR, lastAPDM, lastAMDM, lastPDI, lastMDI, lastDX, smoothedDX;
            lastATR = 0;
            lastAPDM = 0;
            lastAMDM = 0;
            while (true) {
                let calcTr = tr.nextValue(tick);
                let calcPDM = plusDM.nextValue(tick);
                let calcMDM = minusDM.nextValue(tick);
                if (calcTr === undefined) {
                    tick = yield;
                    continue;
                }
                let lastATR = emaTR.nextValue(calcTr);
                let lastAPDM = emaPDM.nextValue(calcPDM);
                let lastAMDM = emaMDM.nextValue(calcMDM);
                if ((lastATR != undefined) && (lastAPDM != undefined) && (lastAMDM != undefined)) {
                    lastPDI = (lastAPDM) * 100 / lastATR;
                    lastMDI = (lastAMDM) * 100 / lastATR;
                    let diDiff = Math.abs(lastPDI - lastMDI);
                    let diSum = (lastPDI + lastMDI);
                    lastDX = (diDiff / diSum) * 100;
                    smoothedDX = emaDX.nextValue(lastDX);
                    // console.log(tick.high.toFixed(2), tick.low.toFixed(2), tick.close.toFixed(2) , calcTr.toFixed(2), calcPDM.toFixed(2), calcMDM.toFixed(2), lastATR.toFixed(2), lastAPDM.toFixed(2), lastAMDM.toFixed(2), lastPDI.toFixed(2), lastMDI.toFixed(2), diDiff.toFixed(2), diSum.toFixed(2), lastDX.toFixed(2));
                }
                tick = yield { adx: smoothedDX, pdi: lastPDI, mdi: lastMDI };
            }
        })();
        this.generator.next();
        lows.forEach((tick, index) => {
            var result = this.generator.next({
                high: highs[index],
                low: lows[index],
                close: closes[index]
            });
            if (result.value != undefined && result.value.adx != undefined) {
                this.result.push({ adx: format(result.value.adx), pdi: format(result.value.pdi), mdi: format(result.value.mdi) });
            }
        });
    }
    ;
    ;
    nextValue(price) {
        let result = this.generator.next(price).value;
        if (result != undefined && result.adx != undefined) {
            return { adx: this.format(result.adx), pdi: this.format(result.pdi), mdi: this.format(result.mdi) };
        }
    }
    ;
}
ADX.calculate = adx;
function adx(input) {
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_1__["Indicator"].reverseInputs(input);
    var result = new ADX(input).result;
    if (input.reversedInput) {
        result.reverse();
    }
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_1__["Indicator"].reverseInputs(input);
    return result;
}
;


/***/ }),

/***/ "./node_modules/technicalindicators/lib/directionalmovement/ATR.js":
/*!*************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/directionalmovement/ATR.js ***!
  \*************************************************************************/
/*! exports provided: ATRInput, ATR, atr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATRInput", function() { return ATRInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATR", function() { return ATR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atr", function() { return atr; });
/* harmony import */ var _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../indicator/indicator */ "./node_modules/technicalindicators/lib/indicator/indicator.js");
/* harmony import */ var _moving_averages_WEMA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../moving_averages/WEMA */ "./node_modules/technicalindicators/lib/moving_averages/WEMA.js");
/* harmony import */ var _TrueRange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TrueRange */ "./node_modules/technicalindicators/lib/directionalmovement/TrueRange.js");

/**
 * Created by AAravindan on 5/8/16.
 */
"use strict";


class ATRInput extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["IndicatorInput"] {
}
;
class ATR extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"] {
    constructor(input) {
        super(input);
        var lows = input.low;
        var highs = input.high;
        var closes = input.close;
        var period = input.period;
        var format = this.format;
        if (!((lows.length === highs.length) && (highs.length === closes.length))) {
            throw ('Inputs(low,high, close) not of equal size');
        }
        var trueRange = new _TrueRange__WEBPACK_IMPORTED_MODULE_2__["TrueRange"]({
            low: [],
            high: [],
            close: []
        });
        var wema = new _moving_averages_WEMA__WEBPACK_IMPORTED_MODULE_1__["WEMA"]({ period: period, values: [], format: (v) => { return v; } });
        this.result = [];
        this.generator = (function* () {
            var tick = yield;
            var avgTrueRange, trange;
            ;
            while (true) {
                trange = trueRange.nextValue({
                    low: tick.low,
                    high: tick.high,
                    close: tick.close
                });
                if (trange === undefined) {
                    avgTrueRange = undefined;
                }
                else {
                    avgTrueRange = wema.nextValue(trange);
                }
                tick = yield avgTrueRange;
            }
        })();
        this.generator.next();
        lows.forEach((tick, index) => {
            var result = this.generator.next({
                high: highs[index],
                low: lows[index],
                close: closes[index]
            });
            if (result.value !== undefined) {
                this.result.push(format(result.value));
            }
        });
    }
    ;
    nextValue(price) {
        return this.generator.next(price).value;
    }
    ;
}
ATR.calculate = atr;
function atr(input) {
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    var result = new ATR(input).result;
    if (input.reversedInput) {
        result.reverse();
    }
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    return result;
}
;


/***/ }),

/***/ "./node_modules/technicalindicators/lib/directionalmovement/MinusDM.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/directionalmovement/MinusDM.js ***!
  \*****************************************************************************/
/*! exports provided: MDMInput, MDM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDMInput", function() { return MDMInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDM", function() { return MDM; });
/* harmony import */ var _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../indicator/indicator */ "./node_modules/technicalindicators/lib/indicator/indicator.js");

/**
 * Created by AAravindan on 5/8/16.
 */
"use strict";
class MDMInput extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["IndicatorInput"] {
}
;
class MDM extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"] {
    constructor(input) {
        super(input);
        var lows = input.low;
        var highs = input.high;
        var format = this.format;
        if (lows.length != highs.length) {
            throw ('Inputs(low,high) not of equal size');
        }
        this.result = [];
        this.generator = (function* () {
            var minusDm;
            var current = yield;
            var last;
            while (true) {
                if (last) {
                    let upMove = (current.high - last.high);
                    let downMove = (last.low - current.low);
                    minusDm = format((downMove > upMove && downMove > 0) ? downMove : 0);
                }
                last = current;
                current = yield minusDm;
            }
        })();
        this.generator.next();
        lows.forEach((tick, index) => {
            var result = this.generator.next({
                high: highs[index],
                low: lows[index]
            });
            if (result.value !== undefined)
                this.result.push(result.value);
        });
    }
    ;
    static calculate(input) {
        _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
        var result = new MDM(input).result;
        if (input.reversedInput) {
            result.reverse();
        }
        _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
        return result;
    }
    ;
    nextValue(price) {
        return this.generator.next(price).value;
    }
    ;
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/directionalmovement/PlusDM.js":
/*!****************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/directionalmovement/PlusDM.js ***!
  \****************************************************************************/
/*! exports provided: PDMInput, PDM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PDMInput", function() { return PDMInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PDM", function() { return PDM; });
/* harmony import */ var _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../indicator/indicator */ "./node_modules/technicalindicators/lib/indicator/indicator.js");

/**
 * Created by AAravindan on 5/8/16.
 */
class PDMInput extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["IndicatorInput"] {
}
;
class PDM extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"] {
    constructor(input) {
        super(input);
        var lows = input.low;
        var highs = input.high;
        var format = this.format;
        if (lows.length != highs.length) {
            throw ('Inputs(low,high) not of equal size');
        }
        this.result = [];
        this.generator = (function* () {
            var plusDm;
            var current = yield;
            var last;
            while (true) {
                if (last) {
                    let upMove = (current.high - last.high);
                    let downMove = (last.low - current.low);
                    plusDm = format((upMove > downMove && upMove > 0) ? upMove : 0);
                }
                last = current;
                current = yield plusDm;
            }
        })();
        this.generator.next();
        lows.forEach((tick, index) => {
            var result = this.generator.next({
                high: highs[index],
                low: lows[index]
            });
            if (result.value !== undefined)
                this.result.push(result.value);
        });
    }
    ;
    static calculate(input) {
        _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
        var result = new PDM(input).result;
        if (input.reversedInput) {
            result.reverse();
        }
        _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
        return result;
    }
    ;
    nextValue(price) {
        return this.generator.next(price).value;
    }
    ;
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/directionalmovement/TrueRange.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/directionalmovement/TrueRange.js ***!
  \*******************************************************************************/
/*! exports provided: TrueRangeInput, TrueRange, truerange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrueRangeInput", function() { return TrueRangeInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrueRange", function() { return TrueRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truerange", function() { return truerange; });
/* harmony import */ var _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../indicator/indicator */ "./node_modules/technicalindicators/lib/indicator/indicator.js");

/**
 * Created by AAravindan on 5/8/16.
 */
/**
 * Created by AAravindan on 5/8/16.
 */
"use strict";
class TrueRangeInput extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["IndicatorInput"] {
}
;
class TrueRange extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"] {
    constructor(input) {
        super(input);
        var lows = input.low;
        var highs = input.high;
        var closes = input.close;
        var format = this.format;
        if (lows.length != highs.length) {
            throw ('Inputs(low,high) not of equal size');
        }
        this.result = [];
        this.generator = (function* () {
            var current = yield;
            var previousClose, result;
            while (true) {
                if (previousClose === undefined) {
                    previousClose = current.close;
                    current = yield result;
                }
                result = Math.max(current.high - current.low, isNaN(Math.abs(current.high - previousClose)) ? 0 : Math.abs(current.high - previousClose), isNaN(Math.abs(current.low - previousClose)) ? 0 : Math.abs(current.low - previousClose));
                previousClose = current.close;
                if (result != undefined) {
                    result = format(result);
                }
                current = yield result;
            }
        })();
        this.generator.next();
        lows.forEach((tick, index) => {
            var result = this.generator.next({
                high: highs[index],
                low: lows[index],
                close: closes[index]
            });
            if (result.value != undefined) {
                this.result.push(result.value);
            }
        });
    }
    ;
    nextValue(price) {
        return this.generator.next(price).value;
    }
    ;
}
TrueRange.calculate = truerange;
function truerange(input) {
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    var result = new TrueRange(input).result;
    if (input.reversedInput) {
        result.reverse();
    }
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    return result;
}
;


/***/ }),

/***/ "./node_modules/technicalindicators/lib/drawingtools/fibonacci.js":
/*!************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/drawingtools/fibonacci.js ***!
  \************************************************************************/
/*! exports provided: fibonacciretracement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fibonacciretracement", function() { return fibonacciretracement; });
/**
 * Calcaultes the fibonacci retracements for given start and end points
 *
 * If calculating for up trend start should be low and end should be high and vice versa
 *
 * returns an array of retracements level containing [0 , 23.6, 38.2, 50, 61.8, 78.6, 100, 127.2, 161.8, 261.8, 423.6]
 *
 * @export
 * @param {number} start
 * @param {number} end
 * @returns {number[]}
 */
function fibonacciretracement(start, end) {
    let levels = [0, 23.6, 38.2, 50, 61.8, 78.6, 100, 127.2, 161.8, 261.8, 423.6];
    let retracements;
    if (start < end) {
        retracements = levels.map(function (level) {
            let calculated = end - Math.abs(start - end) * (level) / 100;
            return calculated > 0 ? calculated : 0;
        });
    }
    else {
        retracements = levels.map(function (level) {
            let calculated = end + Math.abs(start - end) * (level) / 100;
            return calculated > 0 ? calculated : 0;
        });
    }
    return retracements;
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/ichimoku/IchimokuCloud.js":
/*!************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/ichimoku/IchimokuCloud.js ***!
  \************************************************************************/
/*! exports provided: IchimokuCloudInput, IchimokuCloudOutput, IchimokuCloud, ichimokucloud */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IchimokuCloudInput", function() { return IchimokuCloudInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IchimokuCloudOutput", function() { return IchimokuCloudOutput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IchimokuCloud", function() { return IchimokuCloud; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ichimokucloud", function() { return ichimokucloud; });
/* harmony import */ var _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../indicator/indicator */ "./node_modules/technicalindicators/lib/indicator/indicator.js");
/* harmony import */ var _Utils_FixedSizeLinkedList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/FixedSizeLinkedList */ "./node_modules/technicalindicators/lib/Utils/FixedSizeLinkedList.js");


class IchimokuCloudInput extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["IndicatorInput"] {
    constructor() {
        super(...arguments);
        this.conversionPeriod = 9;
        this.basePeriod = 26;
        this.spanPeriod = 52;
        this.displacement = 26;
    }
}
class IchimokuCloudOutput {
}
class IchimokuCloud extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"] {
    constructor(input) {
        super(input);
        this.result = [];
        var defaults = {
            conversionPeriod: 9,
            basePeriod: 26,
            spanPeriod: 52,
            displacement: 26
        };
        var params = Object.assign({}, defaults, input);
        var currentConversionData = new _Utils_FixedSizeLinkedList__WEBPACK_IMPORTED_MODULE_1__["default"](params.conversionPeriod * 2, true, true, false);
        var currentBaseData = new _Utils_FixedSizeLinkedList__WEBPACK_IMPORTED_MODULE_1__["default"](params.basePeriod * 2, true, true, false);
        var currenSpanData = new _Utils_FixedSizeLinkedList__WEBPACK_IMPORTED_MODULE_1__["default"](params.spanPeriod * 2, true, true, false);
        this.generator = (function* () {
            let result;
            let tick;
            let period = Math.max(params.conversionPeriod, params.basePeriod, params.spanPeriod, params.displacement);
            let periodCounter = 1;
            tick = yield;
            while (true) {
                // Keep a list of lows/highs for the max period
                currentConversionData.push(tick.high);
                currentConversionData.push(tick.low);
                currentBaseData.push(tick.high);
                currentBaseData.push(tick.low);
                currenSpanData.push(tick.high);
                currenSpanData.push(tick.low);
                if (periodCounter < period) {
                    periodCounter++;
                }
                else {
                    // Tenkan-sen (ConversionLine): (9-period high + 9-period low)/2))
                    let conversionLine = (currentConversionData.periodHigh + currentConversionData.periodLow) / 2;
                    // Kijun-sen (Base Line): (26-period high + 26-period low)/2))
                    let baseLine = (currentBaseData.periodHigh + currentBaseData.periodLow) / 2;
                    // Senkou Span A (Leading Span A): (Conversion Line + Base Line)/2))
                    let spanA = (conversionLine + baseLine) / 2;
                    // Senkou Span B (Leading Span B): (52-period high + 52-period low)/2))
                    let spanB = (currenSpanData.periodHigh + currenSpanData.periodLow) / 2;
                    // Senkou Span A / Senkou Span B offset by 26 periods
                    // if(spanCounter < params.displacement) {
                    // 	spanCounter++
                    // } else {
                    // 	spanA = spanAs.shift()
                    // 	spanB = spanBs.shift()
                    // }
                    result = {
                        conversion: conversionLine,
                        base: baseLine,
                        spanA: spanA,
                        spanB: spanB
                    };
                }
                tick = yield result;
            }
        })();
        this.generator.next();
        input.low.forEach((tick, index) => {
            var result = this.generator.next({
                high: input.high[index],
                low: input.low[index],
            });
            if (result.value) {
                this.result.push(result.value);
            }
        });
    }
    nextValue(price) {
        return this.generator.next(price).value;
    }
}
IchimokuCloud.calculate = ichimokucloud;
function ichimokucloud(input) {
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    var result = new IchimokuCloud(input).result;
    if (input.reversedInput) {
        result.reverse();
    }
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    return result;
}
;


/***/ }),

/***/ "./node_modules/technicalindicators/lib/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/technicalindicators/lib/index.js ***!
  \*******************************************************/
/*! exports provided: CandleData, CandleList, sma, SMA, ema, EMA, wma, WMA, wema, WEMA, macd, MACD, rsi, RSI, bollingerbands, BollingerBands, adx, ADX, atr, ATR, truerange, TrueRange, roc, ROC, kst, KST, psar, PSAR, stochastic, Stochastic, williamsr, WilliamsR, adl, ADL, obv, OBV, trix, TRIX, forceindex, ForceIndex, cci, CCI, awesomeoscillator, AwesomeOscillator, vwap, VWAP, volumeprofile, VolumeProfile, mfi, MFI, stochasticrsi, StochasticRSI, averagegain, AverageGain, averageloss, AverageLoss, sd, SD, highest, Highest, lowest, Lowest, sum, Sum, FixedSizeLinkedList, renko, HeikinAshi, heikinashi, bullish, bearish, abandonedbaby, doji, bearishengulfingpattern, bullishengulfingpattern, darkcloudcover, downsidetasukigap, dragonflydoji, gravestonedoji, bullishharami, bearishharami, bullishharamicross, bearishharamicross, eveningdojistar, eveningstar, morningdojistar, morningstar, bullishmarubozu, bearishmarubozu, piercingline, bullishspinningtop, bearishspinningtop, threeblackcrows, threewhitesoldiers, bullishhammerstick, bearishhammerstick, bullishinvertedhammerstick, bearishinvertedhammerstick, hammerpattern, hammerpatternunconfirmed, hangingman, hangingmanunconfirmed, shootingstar, shootingstarunconfirmed, tweezertop, tweezerbottom, fibonacciretracement, ichimokucloud, IchimokuCloud, keltnerchannels, KeltnerChannels, KeltnerChannelsInput, KeltnerChannelsOutput, chandelierexit, ChandelierExit, ChandelierExitInput, ChandelierExitOutput, crossUp, CrossUp, crossDown, CrossDown, setConfig, getConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_FixedSizeLinkedList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils/FixedSizeLinkedList */ "./node_modules/technicalindicators/lib/Utils/FixedSizeLinkedList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FixedSizeLinkedList", function() { return _Utils_FixedSizeLinkedList__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _StockData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StockData */ "./node_modules/technicalindicators/lib/StockData.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CandleData", function() { return _StockData__WEBPACK_IMPORTED_MODULE_1__["CandleData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CandleList", function() { return _StockData__WEBPACK_IMPORTED_MODULE_1__["CandleList"]; });

/* harmony import */ var _moving_averages_SMA__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moving_averages/SMA */ "./node_modules/technicalindicators/lib/moving_averages/SMA.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sma", function() { return _moving_averages_SMA__WEBPACK_IMPORTED_MODULE_2__["sma"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SMA", function() { return _moving_averages_SMA__WEBPACK_IMPORTED_MODULE_2__["SMA"]; });

/* harmony import */ var _moving_averages_EMA__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moving_averages/EMA */ "./node_modules/technicalindicators/lib/moving_averages/EMA.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ema", function() { return _moving_averages_EMA__WEBPACK_IMPORTED_MODULE_3__["ema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EMA", function() { return _moving_averages_EMA__WEBPACK_IMPORTED_MODULE_3__["EMA"]; });

/* harmony import */ var _moving_averages_WMA__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./moving_averages/WMA */ "./node_modules/technicalindicators/lib/moving_averages/WMA.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wma", function() { return _moving_averages_WMA__WEBPACK_IMPORTED_MODULE_4__["wma"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WMA", function() { return _moving_averages_WMA__WEBPACK_IMPORTED_MODULE_4__["WMA"]; });

/* harmony import */ var _moving_averages_WEMA__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./moving_averages/WEMA */ "./node_modules/technicalindicators/lib/moving_averages/WEMA.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wema", function() { return _moving_averages_WEMA__WEBPACK_IMPORTED_MODULE_5__["wema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WEMA", function() { return _moving_averages_WEMA__WEBPACK_IMPORTED_MODULE_5__["WEMA"]; });

/* harmony import */ var _moving_averages_MACD__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./moving_averages/MACD */ "./node_modules/technicalindicators/lib/moving_averages/MACD.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "macd", function() { return _moving_averages_MACD__WEBPACK_IMPORTED_MODULE_6__["macd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MACD", function() { return _moving_averages_MACD__WEBPACK_IMPORTED_MODULE_6__["MACD"]; });

/* harmony import */ var _oscillators_RSI__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./oscillators/RSI */ "./node_modules/technicalindicators/lib/oscillators/RSI.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rsi", function() { return _oscillators_RSI__WEBPACK_IMPORTED_MODULE_7__["rsi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RSI", function() { return _oscillators_RSI__WEBPACK_IMPORTED_MODULE_7__["RSI"]; });

/* harmony import */ var _volatility_BollingerBands__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./volatility/BollingerBands */ "./node_modules/technicalindicators/lib/volatility/BollingerBands.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bollingerbands", function() { return _volatility_BollingerBands__WEBPACK_IMPORTED_MODULE_8__["bollingerbands"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BollingerBands", function() { return _volatility_BollingerBands__WEBPACK_IMPORTED_MODULE_8__["BollingerBands"]; });

/* harmony import */ var _directionalmovement_ADX__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directionalmovement/ADX */ "./node_modules/technicalindicators/lib/directionalmovement/ADX.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adx", function() { return _directionalmovement_ADX__WEBPACK_IMPORTED_MODULE_9__["adx"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ADX", function() { return _directionalmovement_ADX__WEBPACK_IMPORTED_MODULE_9__["ADX"]; });

/* harmony import */ var _directionalmovement_ATR__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directionalmovement/ATR */ "./node_modules/technicalindicators/lib/directionalmovement/ATR.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "atr", function() { return _directionalmovement_ATR__WEBPACK_IMPORTED_MODULE_10__["atr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ATR", function() { return _directionalmovement_ATR__WEBPACK_IMPORTED_MODULE_10__["ATR"]; });

/* harmony import */ var _directionalmovement_TrueRange__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directionalmovement/TrueRange */ "./node_modules/technicalindicators/lib/directionalmovement/TrueRange.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "truerange", function() { return _directionalmovement_TrueRange__WEBPACK_IMPORTED_MODULE_11__["truerange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TrueRange", function() { return _directionalmovement_TrueRange__WEBPACK_IMPORTED_MODULE_11__["TrueRange"]; });

/* harmony import */ var _momentum_ROC__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./momentum/ROC */ "./node_modules/technicalindicators/lib/momentum/ROC.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "roc", function() { return _momentum_ROC__WEBPACK_IMPORTED_MODULE_12__["roc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ROC", function() { return _momentum_ROC__WEBPACK_IMPORTED_MODULE_12__["ROC"]; });

/* harmony import */ var _momentum_KST__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./momentum/KST */ "./node_modules/technicalindicators/lib/momentum/KST.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "kst", function() { return _momentum_KST__WEBPACK_IMPORTED_MODULE_13__["kst"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KST", function() { return _momentum_KST__WEBPACK_IMPORTED_MODULE_13__["KST"]; });

/* harmony import */ var _momentum_PSAR__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./momentum/PSAR */ "./node_modules/technicalindicators/lib/momentum/PSAR.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "psar", function() { return _momentum_PSAR__WEBPACK_IMPORTED_MODULE_14__["psar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PSAR", function() { return _momentum_PSAR__WEBPACK_IMPORTED_MODULE_14__["PSAR"]; });

/* harmony import */ var _momentum_Stochastic__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./momentum/Stochastic */ "./node_modules/technicalindicators/lib/momentum/Stochastic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stochastic", function() { return _momentum_Stochastic__WEBPACK_IMPORTED_MODULE_15__["stochastic"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stochastic", function() { return _momentum_Stochastic__WEBPACK_IMPORTED_MODULE_15__["Stochastic"]; });

/* harmony import */ var _momentum_WilliamsR__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./momentum/WilliamsR */ "./node_modules/technicalindicators/lib/momentum/WilliamsR.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "williamsr", function() { return _momentum_WilliamsR__WEBPACK_IMPORTED_MODULE_16__["williamsr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WilliamsR", function() { return _momentum_WilliamsR__WEBPACK_IMPORTED_MODULE_16__["WilliamsR"]; });

/* harmony import */ var _volume_ADL__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./volume/ADL */ "./node_modules/technicalindicators/lib/volume/ADL.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adl", function() { return _volume_ADL__WEBPACK_IMPORTED_MODULE_17__["adl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ADL", function() { return _volume_ADL__WEBPACK_IMPORTED_MODULE_17__["ADL"]; });

/* harmony import */ var _volume_OBV__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./volume/OBV */ "./node_modules/technicalindicators/lib/volume/OBV.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "obv", function() { return _volume_OBV__WEBPACK_IMPORTED_MODULE_18__["obv"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OBV", function() { return _volume_OBV__WEBPACK_IMPORTED_MODULE_18__["OBV"]; });

/* harmony import */ var _momentum_TRIX__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./momentum/TRIX */ "./node_modules/technicalindicators/lib/momentum/TRIX.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trix", function() { return _momentum_TRIX__WEBPACK_IMPORTED_MODULE_19__["trix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TRIX", function() { return _momentum_TRIX__WEBPACK_IMPORTED_MODULE_19__["TRIX"]; });

/* harmony import */ var _volume_ForceIndex__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./volume/ForceIndex */ "./node_modules/technicalindicators/lib/volume/ForceIndex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forceindex", function() { return _volume_ForceIndex__WEBPACK_IMPORTED_MODULE_20__["forceindex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForceIndex", function() { return _volume_ForceIndex__WEBPACK_IMPORTED_MODULE_20__["ForceIndex"]; });

/* harmony import */ var _oscillators_CCI__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./oscillators/CCI */ "./node_modules/technicalindicators/lib/oscillators/CCI.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cci", function() { return _oscillators_CCI__WEBPACK_IMPORTED_MODULE_21__["cci"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CCI", function() { return _oscillators_CCI__WEBPACK_IMPORTED_MODULE_21__["CCI"]; });

/* harmony import */ var _oscillators_AwesomeOscillator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./oscillators/AwesomeOscillator */ "./node_modules/technicalindicators/lib/oscillators/AwesomeOscillator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "awesomeoscillator", function() { return _oscillators_AwesomeOscillator__WEBPACK_IMPORTED_MODULE_22__["awesomeoscillator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AwesomeOscillator", function() { return _oscillators_AwesomeOscillator__WEBPACK_IMPORTED_MODULE_22__["AwesomeOscillator"]; });

/* harmony import */ var _volume_VWAP__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./volume/VWAP */ "./node_modules/technicalindicators/lib/volume/VWAP.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vwap", function() { return _volume_VWAP__WEBPACK_IMPORTED_MODULE_23__["vwap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VWAP", function() { return _volume_VWAP__WEBPACK_IMPORTED_MODULE_23__["VWAP"]; });

/* harmony import */ var _volume_VolumeProfile__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./volume/VolumeProfile */ "./node_modules/technicalindicators/lib/volume/VolumeProfile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "volumeprofile", function() { return _volume_VolumeProfile__WEBPACK_IMPORTED_MODULE_24__["volumeprofile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VolumeProfile", function() { return _volume_VolumeProfile__WEBPACK_IMPORTED_MODULE_24__["VolumeProfile"]; });

/* harmony import */ var _volume_MFI__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./volume/MFI */ "./node_modules/technicalindicators/lib/volume/MFI.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mfi", function() { return _volume_MFI__WEBPACK_IMPORTED_MODULE_25__["mfi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MFI", function() { return _volume_MFI__WEBPACK_IMPORTED_MODULE_25__["MFI"]; });

/* harmony import */ var _momentum_StochasticRSI__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./momentum/StochasticRSI */ "./node_modules/technicalindicators/lib/momentum/StochasticRSI.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stochasticrsi", function() { return _momentum_StochasticRSI__WEBPACK_IMPORTED_MODULE_26__["stochasticrsi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StochasticRSI", function() { return _momentum_StochasticRSI__WEBPACK_IMPORTED_MODULE_26__["StochasticRSI"]; });

/* harmony import */ var _Utils_AverageGain__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Utils/AverageGain */ "./node_modules/technicalindicators/lib/Utils/AverageGain.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "averagegain", function() { return _Utils_AverageGain__WEBPACK_IMPORTED_MODULE_27__["averagegain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AverageGain", function() { return _Utils_AverageGain__WEBPACK_IMPORTED_MODULE_27__["AverageGain"]; });

/* harmony import */ var _Utils_AverageLoss__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Utils/AverageLoss */ "./node_modules/technicalindicators/lib/Utils/AverageLoss.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "averageloss", function() { return _Utils_AverageLoss__WEBPACK_IMPORTED_MODULE_28__["averageloss"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AverageLoss", function() { return _Utils_AverageLoss__WEBPACK_IMPORTED_MODULE_28__["AverageLoss"]; });

/* harmony import */ var _Utils_SD__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Utils/SD */ "./node_modules/technicalindicators/lib/Utils/SD.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sd", function() { return _Utils_SD__WEBPACK_IMPORTED_MODULE_29__["sd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SD", function() { return _Utils_SD__WEBPACK_IMPORTED_MODULE_29__["SD"]; });

/* harmony import */ var _Utils_Highest__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Utils/Highest */ "./node_modules/technicalindicators/lib/Utils/Highest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "highest", function() { return _Utils_Highest__WEBPACK_IMPORTED_MODULE_30__["highest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Highest", function() { return _Utils_Highest__WEBPACK_IMPORTED_MODULE_30__["Highest"]; });

/* harmony import */ var _Utils_Lowest__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Utils/Lowest */ "./node_modules/technicalindicators/lib/Utils/Lowest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lowest", function() { return _Utils_Lowest__WEBPACK_IMPORTED_MODULE_31__["lowest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lowest", function() { return _Utils_Lowest__WEBPACK_IMPORTED_MODULE_31__["Lowest"]; });

/* harmony import */ var _Utils_Sum__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Utils/Sum */ "./node_modules/technicalindicators/lib/Utils/Sum.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return _Utils_Sum__WEBPACK_IMPORTED_MODULE_32__["sum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sum", function() { return _Utils_Sum__WEBPACK_IMPORTED_MODULE_32__["Sum"]; });

/* harmony import */ var _chart_types_Renko__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./chart_types/Renko */ "./node_modules/technicalindicators/lib/chart_types/Renko.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renko", function() { return _chart_types_Renko__WEBPACK_IMPORTED_MODULE_33__["renko"]; });

/* harmony import */ var _chart_types_HeikinAshi__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./chart_types/HeikinAshi */ "./node_modules/technicalindicators/lib/chart_types/HeikinAshi.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeikinAshi", function() { return _chart_types_HeikinAshi__WEBPACK_IMPORTED_MODULE_34__["HeikinAshi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "heikinashi", function() { return _chart_types_HeikinAshi__WEBPACK_IMPORTED_MODULE_34__["heikinashi"]; });

/* harmony import */ var _candlestick_Bullish__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./candlestick/Bullish */ "./node_modules/technicalindicators/lib/candlestick/Bullish.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bullish", function() { return _candlestick_Bullish__WEBPACK_IMPORTED_MODULE_35__["bullish"]; });

/* harmony import */ var _candlestick_Bearish__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./candlestick/Bearish */ "./node_modules/technicalindicators/lib/candlestick/Bearish.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bearish", function() { return _candlestick_Bearish__WEBPACK_IMPORTED_MODULE_36__["bearish"]; });

/* harmony import */ var _candlestick_AbandonedBaby__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./candlestick/AbandonedBaby */ "./node_modules/technicalindicators/lib/candlestick/AbandonedBaby.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "abandonedbaby", function() { return _candlestick_AbandonedBaby__WEBPACK_IMPORTED_MODULE_37__["abandonedbaby"]; });

/* harmony import */ var _candlestick_Doji__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./candlestick/Doji */ "./node_modules/technicalindicators/lib/candlestick/Doji.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doji", function() { return _candlestick_Doji__WEBPACK_IMPORTED_MODULE_38__["doji"]; });

/* harmony import */ var _candlestick_BearishEngulfingPattern__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./candlestick/BearishEngulfingPattern */ "./node_modules/technicalindicators/lib/candlestick/BearishEngulfingPattern.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bearishengulfingpattern", function() { return _candlestick_BearishEngulfingPattern__WEBPACK_IMPORTED_MODULE_39__["bearishengulfingpattern"]; });

/* harmony import */ var _candlestick_BullishEngulfingPattern__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./candlestick/BullishEngulfingPattern */ "./node_modules/technicalindicators/lib/candlestick/BullishEngulfingPattern.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bullishengulfingpattern", function() { return _candlestick_BullishEngulfingPattern__WEBPACK_IMPORTED_MODULE_40__["bullishengulfingpattern"]; });

/* harmony import */ var _candlestick_DarkCloudCover__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./candlestick/DarkCloudCover */ "./node_modules/technicalindicators/lib/candlestick/DarkCloudCover.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "darkcloudcover", function() { return _candlestick_DarkCloudCover__WEBPACK_IMPORTED_MODULE_41__["darkcloudcover"]; });

/* harmony import */ var _candlestick_DownsideTasukiGap__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./candlestick/DownsideTasukiGap */ "./node_modules/technicalindicators/lib/candlestick/DownsideTasukiGap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "downsidetasukigap", function() { return _candlestick_DownsideTasukiGap__WEBPACK_IMPORTED_MODULE_42__["downsidetasukigap"]; });

/* harmony import */ var _candlestick_DragonFlyDoji__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./candlestick/DragonFlyDoji */ "./node_modules/technicalindicators/lib/candlestick/DragonFlyDoji.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dragonflydoji", function() { return _candlestick_DragonFlyDoji__WEBPACK_IMPORTED_MODULE_43__["dragonflydoji"]; });

/* harmony import */ var _candlestick_GraveStoneDoji__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./candlestick/GraveStoneDoji */ "./node_modules/technicalindicators/lib/candlestick/GraveStoneDoji.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gravestonedoji", function() { return _candlestick_GraveStoneDoji__WEBPACK_IMPORTED_MODULE_44__["gravestonedoji"]; });

/* harmony import */ var _candlestick_BullishHarami__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./candlestick/BullishHarami */ "./node_modules/technicalindicators/lib/candlestick/BullishHarami.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bullishharami", function() { return _candlestick_BullishHarami__WEBPACK_IMPORTED_MODULE_45__["bullishharami"]; });

/* harmony import */ var _candlestick_BearishHarami__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./candlestick/BearishHarami */ "./node_modules/technicalindicators/lib/candlestick/BearishHarami.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bearishharami", function() { return _candlestick_BearishHarami__WEBPACK_IMPORTED_MODULE_46__["bearishharami"]; });

/* harmony import */ var _candlestick_BullishHaramiCross__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./candlestick/BullishHaramiCross */ "./node_modules/technicalindicators/lib/candlestick/BullishHaramiCross.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bullishharamicross", function() { return _candlestick_BullishHaramiCross__WEBPACK_IMPORTED_MODULE_47__["bullishharamicross"]; });

/* harmony import */ var _candlestick_BearishHaramiCross__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./candlestick/BearishHaramiCross */ "./node_modules/technicalindicators/lib/candlestick/BearishHaramiCross.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bearishharamicross", function() { return _candlestick_BearishHaramiCross__WEBPACK_IMPORTED_MODULE_48__["bearishharamicross"]; });

/* harmony import */ var _candlestick_EveningDojiStar__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./candlestick/EveningDojiStar */ "./node_modules/technicalindicators/lib/candlestick/EveningDojiStar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eveningdojistar", function() { return _candlestick_EveningDojiStar__WEBPACK_IMPORTED_MODULE_49__["eveningdojistar"]; });

/* harmony import */ var _candlestick_EveningStar__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./candlestick/EveningStar */ "./node_modules/technicalindicators/lib/candlestick/EveningStar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eveningstar", function() { return _candlestick_EveningStar__WEBPACK_IMPORTED_MODULE_50__["eveningstar"]; });

/* harmony import */ var _candlestick_MorningDojiStar__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./candlestick/MorningDojiStar */ "./node_modules/technicalindicators/lib/candlestick/MorningDojiStar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "morningdojistar", function() { return _candlestick_MorningDojiStar__WEBPACK_IMPORTED_MODULE_51__["morningdojistar"]; });

/* harmony import */ var _candlestick_MorningStar__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./candlestick/MorningStar */ "./node_modules/technicalindicators/lib/candlestick/MorningStar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "morningstar", function() { return _candlestick_MorningStar__WEBPACK_IMPORTED_MODULE_52__["morningstar"]; });

/* harmony import */ var _candlestick_BullishMarubozu__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./candlestick/BullishMarubozu */ "./node_modules/technicalindicators/lib/candlestick/BullishMarubozu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bullishmarubozu", function() { return _candlestick_BullishMarubozu__WEBPACK_IMPORTED_MODULE_53__["bullishmarubozu"]; });

/* harmony import */ var _candlestick_BearishMarubozu__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./candlestick/BearishMarubozu */ "./node_modules/technicalindicators/lib/candlestick/BearishMarubozu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bearishmarubozu", function() { return _candlestick_BearishMarubozu__WEBPACK_IMPORTED_MODULE_54__["bearishmarubozu"]; });

/* harmony import */ var _candlestick_PiercingLine__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./candlestick/PiercingLine */ "./node_modules/technicalindicators/lib/candlestick/PiercingLine.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "piercingline", function() { return _candlestick_PiercingLine__WEBPACK_IMPORTED_MODULE_55__["piercingline"]; });

/* harmony import */ var _candlestick_BullishSpinningTop__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./candlestick/BullishSpinningTop */ "./node_modules/technicalindicators/lib/candlestick/BullishSpinningTop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bullishspinningtop", function() { return _candlestick_BullishSpinningTop__WEBPACK_IMPORTED_MODULE_56__["bullishspinningtop"]; });

/* harmony import */ var _candlestick_BearishSpinningTop__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./candlestick/BearishSpinningTop */ "./node_modules/technicalindicators/lib/candlestick/BearishSpinningTop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bearishspinningtop", function() { return _candlestick_BearishSpinningTop__WEBPACK_IMPORTED_MODULE_57__["bearishspinningtop"]; });

/* harmony import */ var _candlestick_ThreeBlackCrows__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./candlestick/ThreeBlackCrows */ "./node_modules/technicalindicators/lib/candlestick/ThreeBlackCrows.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "threeblackcrows", function() { return _candlestick_ThreeBlackCrows__WEBPACK_IMPORTED_MODULE_58__["threeblackcrows"]; });

/* harmony import */ var _candlestick_ThreeWhiteSoldiers__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./candlestick/ThreeWhiteSoldiers */ "./node_modules/technicalindicators/lib/candlestick/ThreeWhiteSoldiers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "threewhitesoldiers", function() { return _candlestick_ThreeWhiteSoldiers__WEBPACK_IMPORTED_MODULE_59__["threewhitesoldiers"]; });

/* harmony import */ var _candlestick_BullishHammerStick__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./candlestick/BullishHammerStick */ "./node_modules/technicalindicators/lib/candlestick/BullishHammerStick.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bullishhammerstick", function() { return _candlestick_BullishHammerStick__WEBPACK_IMPORTED_MODULE_60__["bullishhammerstick"]; });

/* harmony import */ var _candlestick_BearishHammerStick__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./candlestick/BearishHammerStick */ "./node_modules/technicalindicators/lib/candlestick/BearishHammerStick.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bearishhammerstick", function() { return _candlestick_BearishHammerStick__WEBPACK_IMPORTED_MODULE_61__["bearishhammerstick"]; });

/* harmony import */ var _candlestick_BullishInvertedHammerStick__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./candlestick/BullishInvertedHammerStick */ "./node_modules/technicalindicators/lib/candlestick/BullishInvertedHammerStick.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bullishinvertedhammerstick", function() { return _candlestick_BullishInvertedHammerStick__WEBPACK_IMPORTED_MODULE_62__["bullishinvertedhammerstick"]; });

/* harmony import */ var _candlestick_BearishInvertedHammerStick__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./candlestick/BearishInvertedHammerStick */ "./node_modules/technicalindicators/lib/candlestick/BearishInvertedHammerStick.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bearishinvertedhammerstick", function() { return _candlestick_BearishInvertedHammerStick__WEBPACK_IMPORTED_MODULE_63__["bearishinvertedhammerstick"]; });

/* harmony import */ var _candlestick_HammerPattern__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./candlestick/HammerPattern */ "./node_modules/technicalindicators/lib/candlestick/HammerPattern.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hammerpattern", function() { return _candlestick_HammerPattern__WEBPACK_IMPORTED_MODULE_64__["hammerpattern"]; });

/* harmony import */ var _candlestick_HammerPatternUnconfirmed__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./candlestick/HammerPatternUnconfirmed */ "./node_modules/technicalindicators/lib/candlestick/HammerPatternUnconfirmed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hammerpatternunconfirmed", function() { return _candlestick_HammerPatternUnconfirmed__WEBPACK_IMPORTED_MODULE_65__["hammerpatternunconfirmed"]; });

/* harmony import */ var _candlestick_HangingMan__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./candlestick/HangingMan */ "./node_modules/technicalindicators/lib/candlestick/HangingMan.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hangingman", function() { return _candlestick_HangingMan__WEBPACK_IMPORTED_MODULE_66__["hangingman"]; });

/* harmony import */ var _candlestick_HangingManUnconfirmed__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./candlestick/HangingManUnconfirmed */ "./node_modules/technicalindicators/lib/candlestick/HangingManUnconfirmed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hangingmanunconfirmed", function() { return _candlestick_HangingManUnconfirmed__WEBPACK_IMPORTED_MODULE_67__["hangingmanunconfirmed"]; });

/* harmony import */ var _candlestick_ShootingStar__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./candlestick/ShootingStar */ "./node_modules/technicalindicators/lib/candlestick/ShootingStar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shootingstar", function() { return _candlestick_ShootingStar__WEBPACK_IMPORTED_MODULE_68__["shootingstar"]; });

/* harmony import */ var _candlestick_ShootingStarUnconfirmed__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./candlestick/ShootingStarUnconfirmed */ "./node_modules/technicalindicators/lib/candlestick/ShootingStarUnconfirmed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shootingstarunconfirmed", function() { return _candlestick_ShootingStarUnconfirmed__WEBPACK_IMPORTED_MODULE_69__["shootingstarunconfirmed"]; });

/* harmony import */ var _candlestick_TweezerTop__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./candlestick/TweezerTop */ "./node_modules/technicalindicators/lib/candlestick/TweezerTop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tweezertop", function() { return _candlestick_TweezerTop__WEBPACK_IMPORTED_MODULE_70__["tweezertop"]; });

/* harmony import */ var _candlestick_TweezerBottom__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./candlestick/TweezerBottom */ "./node_modules/technicalindicators/lib/candlestick/TweezerBottom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tweezerbottom", function() { return _candlestick_TweezerBottom__WEBPACK_IMPORTED_MODULE_71__["tweezerbottom"]; });

/* harmony import */ var _drawingtools_fibonacci__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./drawingtools/fibonacci */ "./node_modules/technicalindicators/lib/drawingtools/fibonacci.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fibonacciretracement", function() { return _drawingtools_fibonacci__WEBPACK_IMPORTED_MODULE_72__["fibonacciretracement"]; });

/* harmony import */ var _ichimoku_IchimokuCloud__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./ichimoku/IchimokuCloud */ "./node_modules/technicalindicators/lib/ichimoku/IchimokuCloud.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ichimokucloud", function() { return _ichimoku_IchimokuCloud__WEBPACK_IMPORTED_MODULE_73__["ichimokucloud"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IchimokuCloud", function() { return _ichimoku_IchimokuCloud__WEBPACK_IMPORTED_MODULE_73__["IchimokuCloud"]; });

/* harmony import */ var _volatility_KeltnerChannels__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./volatility/KeltnerChannels */ "./node_modules/technicalindicators/lib/volatility/KeltnerChannels.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keltnerchannels", function() { return _volatility_KeltnerChannels__WEBPACK_IMPORTED_MODULE_74__["keltnerchannels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeltnerChannels", function() { return _volatility_KeltnerChannels__WEBPACK_IMPORTED_MODULE_74__["KeltnerChannels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeltnerChannelsInput", function() { return _volatility_KeltnerChannels__WEBPACK_IMPORTED_MODULE_74__["KeltnerChannelsInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeltnerChannelsOutput", function() { return _volatility_KeltnerChannels__WEBPACK_IMPORTED_MODULE_74__["KeltnerChannelsOutput"]; });

/* harmony import */ var _volatility_ChandelierExit__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./volatility/ChandelierExit */ "./node_modules/technicalindicators/lib/volatility/ChandelierExit.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chandelierexit", function() { return _volatility_ChandelierExit__WEBPACK_IMPORTED_MODULE_75__["chandelierexit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChandelierExit", function() { return _volatility_ChandelierExit__WEBPACK_IMPORTED_MODULE_75__["ChandelierExit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChandelierExitInput", function() { return _volatility_ChandelierExit__WEBPACK_IMPORTED_MODULE_75__["ChandelierExitInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChandelierExitOutput", function() { return _volatility_ChandelierExit__WEBPACK_IMPORTED_MODULE_75__["ChandelierExitOutput"]; });

/* harmony import */ var _Utils_CrossUp__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./Utils/CrossUp */ "./node_modules/technicalindicators/lib/Utils/CrossUp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "crossUp", function() { return _Utils_CrossUp__WEBPACK_IMPORTED_MODULE_76__["crossUp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CrossUp", function() { return _Utils_CrossUp__WEBPACK_IMPORTED_MODULE_76__["CrossUp"]; });

/* harmony import */ var _Utils_CrossDown__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./Utils/CrossDown */ "./node_modules/technicalindicators/lib/Utils/CrossDown.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "crossDown", function() { return _Utils_CrossDown__WEBPACK_IMPORTED_MODULE_77__["crossDown"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CrossDown", function() { return _Utils_CrossDown__WEBPACK_IMPORTED_MODULE_77__["CrossDown"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./config */ "./node_modules/technicalindicators/lib/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setConfig", function() { return _config__WEBPACK_IMPORTED_MODULE_78__["setConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getConfig", function() { return _config__WEBPACK_IMPORTED_MODULE_78__["getConfig"]; });











































































// export  { predictPattern, PatternDetector }              from './patterndetection/patterndetection';
// export  { AvailablePatterns }              from './patterndetection/patterndetection';
// export  { hasDoubleBottom}              from './patterndetection/patterndetection';
// export  { hasDoubleTop }                from './patterndetection/patterndetection';
// export  { hasHeadAndShoulder}           from './patterndetection/patterndetection';
// export  { hasInverseHeadAndShoulder }   from './patterndetection/patterndetection';
// export  { isTrendingUp}                 from './patterndetection/patterndetection';
// export  { isTrendingDown }              from './patterndetection/patterndetection';








/***/ }),

/***/ "./node_modules/technicalindicators/lib/indicator/indicator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/indicator/indicator.js ***!
  \*********************************************************************/
/*! exports provided: IndicatorInput, AllInputs, Indicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndicatorInput", function() { return IndicatorInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllInputs", function() { return AllInputs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Indicator", function() { return Indicator; });
/* harmony import */ var _Utils_NumberFormatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utils/NumberFormatter */ "./node_modules/technicalindicators/lib/Utils/NumberFormatter.js");

class IndicatorInput {
}
class AllInputs {
}
class Indicator {
    constructor(input) {
        this.format = input.format || _Utils_NumberFormatter__WEBPACK_IMPORTED_MODULE_0__["format"];
    }
    static reverseInputs(input) {
        if (input.reversedInput) {
            input.values ? input.values.reverse() : undefined;
            input.open ? input.open.reverse() : undefined;
            input.high ? input.high.reverse() : undefined;
            input.low ? input.low.reverse() : undefined;
            input.close ? input.close.reverse() : undefined;
            input.volume ? input.volume.reverse() : undefined;
            input.timestamp ? input.timestamp.reverse() : undefined;
        }
    }
    getResult() {
        return this.result;
    }
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/momentum/KST.js":
/*!**************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/momentum/KST.js ***!
  \**************************************************************/
/*! exports provided: KSTInput, KSTOutput, KST, kst */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KSTInput", function() { return KSTInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KSTOutput", function() { return KSTOutput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KST", function() { return KST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kst", function() { return kst; });
/* harmony import */ var _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../indicator/indicator */ "./node_modules/technicalindicators/lib/indicator/indicator.js");
/* harmony import */ var _moving_averages_SMA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../moving_averages/SMA */ "./node_modules/technicalindicators/lib/moving_averages/SMA.js");
/* harmony import */ var _ROC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ROC */ "./node_modules/technicalindicators/lib/momentum/ROC.js");



class KSTInput extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["IndicatorInput"] {
}
class KSTOutput {
}
class KST extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"] {
    constructor(input) {
        super(input);
        let priceArray = input.values;
        let rocPer1 = input.ROCPer1;
        let rocPer2 = input.ROCPer2;
        let rocPer3 = input.ROCPer3;
        let rocPer4 = input.ROCPer4;
        let smaPer1 = input.SMAROCPer1;
        let smaPer2 = input.SMAROCPer2;
        let smaPer3 = input.SMAROCPer3;
        let smaPer4 = input.SMAROCPer4;
        let signalPeriod = input.signalPeriod;
        let roc1 = new _ROC__WEBPACK_IMPORTED_MODULE_2__["ROC"]({ period: rocPer1, values: [] });
        let roc2 = new _ROC__WEBPACK_IMPORTED_MODULE_2__["ROC"]({ period: rocPer2, values: [] });
        let roc3 = new _ROC__WEBPACK_IMPORTED_MODULE_2__["ROC"]({ period: rocPer3, values: [] });
        let roc4 = new _ROC__WEBPACK_IMPORTED_MODULE_2__["ROC"]({ period: rocPer4, values: [] });
        let sma1 = new _moving_averages_SMA__WEBPACK_IMPORTED_MODULE_1__["SMA"]({ period: smaPer1, values: [], format: (v) => { return v; } });
        let sma2 = new _moving_averages_SMA__WEBPACK_IMPORTED_MODULE_1__["SMA"]({ period: smaPer2, values: [], format: (v) => { return v; } });
        let sma3 = new _moving_averages_SMA__WEBPACK_IMPORTED_MODULE_1__["SMA"]({ period: smaPer3, values: [], format: (v) => { return v; } });
        let sma4 = new _moving_averages_SMA__WEBPACK_IMPORTED_MODULE_1__["SMA"]({ period: smaPer4, values: [], format: (v) => { return v; } });
        let signalSMA = new _moving_averages_SMA__WEBPACK_IMPORTED_MODULE_1__["SMA"]({ period: signalPeriod, values: [], format: (v) => { return v; } });
        var format = this.format;
        this.result = [];
        let firstResult = Math.max(rocPer1 + smaPer1, rocPer2 + smaPer2, rocPer3 + smaPer3, rocPer4 + smaPer4);
        this.generator = (function* () {
            let index = 1;
            let tick = yield;
            let kst;
            let RCMA1, RCMA2, RCMA3, RCMA4, signal, result;
            while (true) {
                let roc1Result = roc1.nextValue(tick);
                let roc2Result = roc2.nextValue(tick);
                let roc3Result = roc3.nextValue(tick);
                let roc4Result = roc4.nextValue(tick);
                RCMA1 = (roc1Result !== undefined) ? sma1.nextValue(roc1Result) : undefined;
                RCMA2 = (roc2Result !== undefined) ? sma2.nextValue(roc2Result) : undefined;
                RCMA3 = (roc3Result !== undefined) ? sma3.nextValue(roc3Result) : undefined;
                RCMA4 = (roc4Result !== undefined) ? sma4.nextValue(roc4Result) : undefined;
                if (index < firstResult) {
                    index++;
                }
                else {
                    kst = (RCMA1 * 1) + (RCMA2 * 2) + (RCMA3 * 3) + (RCMA4 * 4);
                }
                signal = (kst !== undefined) ? signalSMA.nextValue(kst) : undefined;
                result = kst !== undefined ? {
                    kst: format(kst),
                    signal: signal ? format(signal) : undefined
                } : undefined;
                tick = yield result;
            }
        })();
        this.generator.next();
        priceArray.forEach((tick) => {
            let result = this.generator.next(tick);
            if (result.value != undefined) {
                this.result.push(result.value);
            }
        });
    }
    ;
    nextValue(price) {
        let nextResult = this.generator.next(price);
        if (nextResult.value != undefined)
            return nextResult.value;
    }
    ;
}
KST.calculate = kst;
function kst(input) {
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    var result = new KST(input).result;
    if (input.reversedInput) {
        result.reverse();
    }
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    return result;
}
;


/***/ }),

/***/ "./node_modules/technicalindicators/lib/momentum/PSAR.js":
/*!***************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/momentum/PSAR.js ***!
  \***************************************************************/
/*! exports provided: PSARInput, PSAR, psar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PSARInput", function() { return PSARInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PSAR", function() { return PSAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "psar", function() { return psar; });
/* harmony import */ var _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../indicator/indicator */ "./node_modules/technicalindicators/lib/indicator/indicator.js");

"use strict";
/*
  There seems to be a few interpretations of the rules for this regarding which prices.
  I mean the english from which periods are included. The wording does seem to
  introduce some discrepancy so maybe that is why. I want to put the author's
  own description here to reassess this later.
  ----------------------------------------------------------------------------------------
  For the first day of entry the SAR is the previous Significant Point

  If long the SP is the lowest price reached while in the previous short trade
  If short the SP is the highest price reached while in the previous long trade

  If long:
  Find the difference between the highest price made while in the trade and the SAR for today.
  Multiple the difference by the AF and ADD the result to today's SAR to obtain the SAR for tomorrow.
  Use 0.02 for the first AF and increase it by 0.02 on every day that a new high for the trade is made.
  If a new high is not made continue to use the AF as last increased. Do not increase the AF above .20

  Never move the SAR for tomorrow ABOVE the previous day's LOW or today's LOW.
  If the SAR is calculated to be ABOVE the previous day's LOW or today's LOW then use the lower low between today and the previous day as the new SAR.
  Make the next day's calculations based on this SAR.

  If short:
  Find the difference between the lowest price made while in the trade and the SAR for today.
  Multiple the difference by the AF and SUBTRACT the result to today's SAR to obtain the SAR for tomorrow.
  Use 0.02 for the first AF and increase it by 0.02 on every day that a new high for the trade is made.
  If a new high is not made continue to use the AF as last increased. Do not increase the AF above .20

  Never move the SAR for tomorrow BELOW the previous day's HIGH or today's HIGH.
  If the SAR is calculated to be BELOW the previous day's HIGH or today's HIGH then use the higher high between today and the previous day as the new SAR. Make the next day's calculations based on this SAR.
  ----------------------------------------------------------------------------------------
*/
class PSARInput extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["IndicatorInput"] {
}
;
class PSAR extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"] {
    constructor(input) {
        super(input);
        let highs = input.high || [];
        let lows = input.low || [];
        var genFn = function* (step, max) {
            let curr, extreme, sar, furthest;
            let up = true;
            let accel = step;
            let prev = yield;
            while (true) {
                if (curr) {
                    sar = sar + accel * (extreme - sar);
                    if (up) {
                        sar = Math.min(sar, furthest.low, prev.low);
                        if (curr.high > extreme) {
                            extreme = curr.high;
                            accel = Math.min(accel + step, max);
                        }
                        ;
                    }
                    else {
                        sar = Math.max(sar, furthest.high, prev.high);
                        if (curr.low < extreme) {
                            extreme = curr.low;
                            accel = Math.min(accel + step, max);
                        }
                    }
                    if ((up && curr.low < sar) || (!up && curr.high > sar)) {
                        accel = step;
                        sar = extreme;
                        up = !up;
                        extreme = !up ? curr.low : curr.high;
                    }
                }
                else {
                    // Randomly setup start values? What is the trend on first tick??
                    sar = prev.low;
                    extreme = prev.high;
                }
                furthest = prev;
                if (curr)
                    prev = curr;
                curr = yield sar;
            }
        };
        this.result = [];
        this.generator = genFn(input.step, input.max);
        this.generator.next();
        lows.forEach((tick, index) => {
            var result = this.generator.next({
                high: highs[index],
                low: lows[index],
            });
            if (result.value !== undefined) {
                this.result.push(result.value);
            }
        });
    }
    ;
    nextValue(input) {
        let nextResult = this.generator.next(input);
        if (nextResult.value !== undefined)
            return nextResult.value;
    }
    ;
}
PSAR.calculate = psar;
function psar(input) {
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    var result = new PSAR(input).result;
    if (input.reversedInput) {
        result.reverse();
    }
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    return result;
}
;


/***/ }),

/***/ "./node_modules/technicalindicators/lib/momentum/ROC.js":
/*!**************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/momentum/ROC.js ***!
  \**************************************************************/
/*! exports provided: ROCInput, ROC, roc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROCInput", function() { return ROCInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROC", function() { return ROC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roc", function() { return roc; });
/* harmony import */ var _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../indicator/indicator */ "./node_modules/technicalindicators/lib/indicator/indicator.js");
/* harmony import */ var _Utils_FixedSizeLinkedList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/FixedSizeLinkedList */ "./node_modules/technicalindicators/lib/Utils/FixedSizeLinkedList.js");


class ROCInput extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["IndicatorInput"] {
}
class ROC extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"] {
    constructor(input) {
        super(input);
        var period = input.period;
        var priceArray = input.values;
        this.result = [];
        this.generator = (function* () {
            let index = 1;
            var pastPeriods = new _Utils_FixedSizeLinkedList__WEBPACK_IMPORTED_MODULE_1__["default"](period);
            ;
            var tick = yield;
            var roc;
            while (true) {
                pastPeriods.push(tick);
                if (index < period) {
                    index++;
                }
                else {
                    roc = ((tick - pastPeriods.lastShift) / (pastPeriods.lastShift)) * 100;
                }
                tick = yield roc;
            }
        })();
        this.generator.next();
        priceArray.forEach((tick) => {
            var result = this.generator.next(tick);
            if (result.value != undefined && (!isNaN(result.value))) {
                this.result.push(this.format(result.value));
            }
        });
    }
    nextValue(price) {
        var nextResult = this.generator.next(price);
        if (nextResult.value != undefined && (!isNaN(nextResult.value))) {
            return this.format(nextResult.value);
        }
    }
    ;
}
ROC.calculate = roc;
;
function roc(input) {
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    var result = new ROC(input).result;
    if (input.reversedInput) {
        result.reverse();
    }
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    return result;
}
;


/***/ }),

/***/ "./node_modules/technicalindicators/lib/momentum/Stochastic.js":
/*!*********************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/momentum/Stochastic.js ***!
  \*********************************************************************/
/*! exports provided: StochasticInput, StochasticOutput, Stochastic, stochastic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StochasticInput", function() { return StochasticInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StochasticOutput", function() { return StochasticOutput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stochastic", function() { return Stochastic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stochastic", function() { return stochastic; });
/* harmony import */ var _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../indicator/indicator */ "./node_modules/technicalindicators/lib/indicator/indicator.js");
/* harmony import */ var _Utils_FixedSizeLinkedList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/FixedSizeLinkedList */ "./node_modules/technicalindicators/lib/Utils/FixedSizeLinkedList.js");
/* harmony import */ var _moving_averages_SMA__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../moving_averages/SMA */ "./node_modules/technicalindicators/lib/moving_averages/SMA.js");

/**
 * Created by AAravindan on 5/10/16.
 */
"use strict";


class StochasticInput extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["IndicatorInput"] {
}
;
class StochasticOutput {
}
;
class Stochastic extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"] {
    constructor(input) {
        super(input);
        let lows = input.low;
        let highs = input.high;
        let closes = input.close;
        let period = input.period;
        let signalPeriod = input.signalPeriod;
        let format = this.format;
        if (!((lows.length === highs.length) && (highs.length === closes.length))) {
            throw ('Inputs(low,high, close) not of equal size');
        }
        this.result = [];
        //%K = (Current Close - Lowest Low)/(Highest High - Lowest Low) * 100
        //%D = 3-day SMA of %K
        //
        //Lowest Low = lowest low for the look-back period
        //Highest High = highest high for the look-back period
        //%K is multiplied by 100 to move the decimal point two places
        this.generator = (function* () {
            let index = 1;
            let pastHighPeriods = new _Utils_FixedSizeLinkedList__WEBPACK_IMPORTED_MODULE_1__["default"](period, true, false);
            let pastLowPeriods = new _Utils_FixedSizeLinkedList__WEBPACK_IMPORTED_MODULE_1__["default"](period, false, true);
            let dSma = new _moving_averages_SMA__WEBPACK_IMPORTED_MODULE_2__["SMA"]({
                period: signalPeriod,
                values: [],
                format: (v) => { return v; }
            });
            let k, d;
            var tick = yield;
            while (true) {
                pastHighPeriods.push(tick.high);
                pastLowPeriods.push(tick.low);
                if (index < period) {
                    index++;
                    tick = yield;
                    continue;
                }
                let periodLow = pastLowPeriods.periodLow;
                k = (tick.close - periodLow) / (pastHighPeriods.periodHigh - periodLow) * 100;
                k = isNaN(k) ? 0 : k; //This happens when the close, high and low are same for the entire period; Bug fix for 
                d = dSma.nextValue(k);
                tick = yield {
                    k: format(k),
                    d: (d !== undefined) ? format(d) : undefined
                };
            }
        })();
        this.generator.next();
        lows.forEach((tick, index) => {
            var result = this.generator.next({
                high: highs[index],
                low: lows[index],
                close: closes[index]
            });
            if (result.value !== undefined) {
                this.result.push(result.value);
            }
        });
    }
    ;
    nextValue(input) {
        let nextResult = this.generator.next(input);
        if (nextResult.value !== undefined)
            return nextResult.value;
    }
    ;
}
Stochastic.calculate = stochastic;
function stochastic(input) {
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    var result = new Stochastic(input).result;
    if (input.reversedInput) {
        result.reverse();
    }
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    return result;
}
;


/***/ }),

/***/ "./node_modules/technicalindicators/lib/momentum/StochasticRSI.js":
/*!************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/momentum/StochasticRSI.js ***!
  \************************************************************************/
/*! exports provided: StochasticRsiInput, StochasticRSIOutput, StochasticRSI, stochasticrsi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StochasticRsiInput", function() { return StochasticRsiInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StochasticRSIOutput", function() { return StochasticRSIOutput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StochasticRSI", function() { return StochasticRSI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stochasticrsi", function() { return stochasticrsi; });
/* harmony import */ var _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../indicator/indicator */ "./node_modules/technicalindicators/lib/indicator/indicator.js");
/* harmony import */ var _moving_averages_SMA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../moving_averages/SMA */ "./node_modules/technicalindicators/lib/moving_averages/SMA.js");
/* harmony import */ var _oscillators_RSI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oscillators/RSI */ "./node_modules/technicalindicators/lib/oscillators/RSI.js");
/* harmony import */ var _momentum_Stochastic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../momentum/Stochastic */ "./node_modules/technicalindicators/lib/momentum/Stochastic.js");

/**
 * Created by AAravindan on 5/10/16.
 */
"use strict";



class StochasticRsiInput extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["IndicatorInput"] {
}
;
class StochasticRSIOutput {
}
;
class StochasticRSI extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"] {
    constructor(input) {
        super(input);
        let closes = input.values;
        let rsiPeriod = input.rsiPeriod;
        let stochasticPeriod = input.stochasticPeriod;
        let kPeriod = input.kPeriod;
        let dPeriod = input.dPeriod;
        let format = this.format;
        this.result = [];
        this.generator = (function* () {
            let index = 1;
            let rsi = new _oscillators_RSI__WEBPACK_IMPORTED_MODULE_2__["RSI"]({ period: rsiPeriod, values: [] });
            let stochastic = new _momentum_Stochastic__WEBPACK_IMPORTED_MODULE_3__["Stochastic"]({ period: stochasticPeriod, high: [], low: [], close: [], signalPeriod: kPeriod });
            let dSma = new _moving_averages_SMA__WEBPACK_IMPORTED_MODULE_1__["SMA"]({
                period: dPeriod,
                values: [],
                format: (v) => { return v; }
            });
            let lastRSI, stochasticRSI, d, result;
            var tick = yield;
            while (true) {
                lastRSI = rsi.nextValue(tick);
                if (lastRSI !== undefined) {
                    var stochasticInput = { high: lastRSI, low: lastRSI, close: lastRSI };
                    stochasticRSI = stochastic.nextValue(stochasticInput);
                    if (stochasticRSI !== undefined && stochasticRSI.d !== undefined) {
                        d = dSma.nextValue(stochasticRSI.d);
                        if (d !== undefined)
                            result = {
                                stochRSI: stochasticRSI.k,
                                k: stochasticRSI.d,
                                d: d
                            };
                    }
                }
                tick = yield result;
            }
        })();
        this.generator.next();
        closes.forEach((tick, index) => {
            var result = this.generator.next(tick);
            if (result.value !== undefined) {
                this.result.push(result.value);
            }
        });
    }
    ;
    nextValue(input) {
        let nextResult = this.generator.next(input);
        if (nextResult.value !== undefined)
            return nextResult.value;
    }
    ;
}
StochasticRSI.calculate = stochasticrsi;
function stochasticrsi(input) {
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    var result = new StochasticRSI(input).result;
    if (input.reversedInput) {
        result.reverse();
    }
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    return result;
}
;


/***/ }),

/***/ "./node_modules/technicalindicators/lib/momentum/TRIX.js":
/*!***************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/momentum/TRIX.js ***!
  \***************************************************************/
/*! exports provided: TRIXInput, TRIX, trix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIXInput", function() { return TRIXInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIX", function() { return TRIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trix", function() { return trix; });
/* harmony import */ var _ROC_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ROC.js */ "./node_modules/technicalindicators/lib/momentum/ROC.js");
/* harmony import */ var _moving_averages_EMA_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../moving_averages/EMA.js */ "./node_modules/technicalindicators/lib/moving_averages/EMA.js");
/* harmony import */ var _indicator_indicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../indicator/indicator */ "./node_modules/technicalindicators/lib/indicator/indicator.js");
/**
 * Created by AAravindan on 5/9/16.
 */




class TRIXInput extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_2__["IndicatorInput"] {
}
;
class TRIX extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_2__["Indicator"] {
    constructor(input) {
        super(input);
        let priceArray = input.values;
        let period = input.period;
        let format = this.format;
        let ema = new _moving_averages_EMA_js__WEBPACK_IMPORTED_MODULE_1__["EMA"]({ period: period, values: [], format: (v) => { return v; } });
        let emaOfema = new _moving_averages_EMA_js__WEBPACK_IMPORTED_MODULE_1__["EMA"]({ period: period, values: [], format: (v) => { return v; } });
        let emaOfemaOfema = new _moving_averages_EMA_js__WEBPACK_IMPORTED_MODULE_1__["EMA"]({ period: period, values: [], format: (v) => { return v; } });
        let trixROC = new _ROC_js__WEBPACK_IMPORTED_MODULE_0__["ROC"]({ period: 1, values: [], format: (v) => { return v; } });
        this.result = [];
        this.generator = (function* () {
            let tick = yield;
            while (true) {
                let initialema = ema.nextValue(tick);
                let smoothedResult = initialema ? emaOfema.nextValue(initialema) : undefined;
                let doubleSmoothedResult = smoothedResult ? emaOfemaOfema.nextValue(smoothedResult) : undefined;
                let result = doubleSmoothedResult ? trixROC.nextValue(doubleSmoothedResult) : undefined;
                tick = yield result ? format(result) : undefined;
            }
        })();
        this.generator.next();
        priceArray.forEach((tick) => {
            let result = this.generator.next(tick);
            if (result.value !== undefined) {
                this.result.push(result.value);
            }
        });
    }
    nextValue(price) {
        let nextResult = this.generator.next(price);
        if (nextResult.value !== undefined)
            return nextResult.value;
    }
    ;
}
TRIX.calculate = trix;
function trix(input) {
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_2__["Indicator"].reverseInputs(input);
    var result = new TRIX(input).result;
    if (input.reversedInput) {
        result.reverse();
    }
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_2__["Indicator"].reverseInputs(input);
    return result;
}
;


/***/ }),

/***/ "./node_modules/technicalindicators/lib/momentum/WilliamsR.js":
/*!********************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/momentum/WilliamsR.js ***!
  \********************************************************************/
/*! exports provided: WilliamsRInput, WilliamsR, williamsr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WilliamsRInput", function() { return WilliamsRInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WilliamsR", function() { return WilliamsR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "williamsr", function() { return williamsr; });
/* harmony import */ var _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../indicator/indicator */ "./node_modules/technicalindicators/lib/indicator/indicator.js");
/* harmony import */ var _Utils_FixedSizeLinkedList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/FixedSizeLinkedList */ "./node_modules/technicalindicators/lib/Utils/FixedSizeLinkedList.js");


class WilliamsRInput extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["IndicatorInput"] {
}
;
class WilliamsR extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"] {
    constructor(input) {
        super(input);
        let lows = input.low;
        let highs = input.high;
        let closes = input.close;
        let period = input.period;
        let format = this.format;
        if (!((lows.length === highs.length) && (highs.length === closes.length))) {
            throw ('Inputs(low,high, close) not of equal size');
        }
        this.result = [];
        //%R = (Highest High - Close)/(Highest High - Lowest Low) * -100
        //Lowest Low = lowest low for the look-back period
        //Highest High = highest high for the look-back period
        //%R is multiplied by -100 correct the inversion and move the decimal.
        this.generator = (function* () {
            let index = 1;
            let pastHighPeriods = new _Utils_FixedSizeLinkedList__WEBPACK_IMPORTED_MODULE_1__["default"](period, true, false);
            let pastLowPeriods = new _Utils_FixedSizeLinkedList__WEBPACK_IMPORTED_MODULE_1__["default"](period, false, true);
            let periodLow;
            let periodHigh;
            var tick = yield;
            let williamsR;
            while (true) {
                pastHighPeriods.push(tick.high);
                pastLowPeriods.push(tick.low);
                if (index < period) {
                    index++;
                    tick = yield;
                    continue;
                }
                periodLow = pastLowPeriods.periodLow;
                periodHigh = pastHighPeriods.periodHigh;
                williamsR = format((periodHigh - tick.close) / (periodHigh - periodLow) * -100);
                tick = yield williamsR;
            }
        })();
        this.generator.next();
        lows.forEach((low, index) => {
            var result = this.generator.next({
                high: highs[index],
                low: lows[index],
                close: closes[index]
            });
            if (result.value !== undefined) {
                this.result.push(result.value);
            }
        });
    }
    ;
    nextValue(price) {
        var nextResult = this.generator.next(price);
        if (nextResult.value != undefined)
            return this.format(nextResult.value);
    }
    ;
}
WilliamsR.calculate = williamsr;
function williamsr(input) {
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    var result = new WilliamsR(input).result;
    if (input.reversedInput) {
        result.reverse();
    }
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    return result;
}
;


/***/ }),

/***/ "./node_modules/technicalindicators/lib/moving_averages/EMA.js":
/*!*********************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/moving_averages/EMA.js ***!
  \*********************************************************************/
/*! exports provided: EMA, ema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMA", function() { return EMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ema", function() { return ema; });
/* harmony import */ var _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../indicator/indicator */ "./node_modules/technicalindicators/lib/indicator/indicator.js");
/* harmony import */ var _SMA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SMA */ "./node_modules/technicalindicators/lib/moving_averages/SMA.js");


class EMA extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"] {
    constructor(input) {
        super(input);
        var period = input.period;
        var priceArray = input.values;
        var exponent = (2 / (period + 1));
        var sma;
        this.result = [];
        sma = new _SMA__WEBPACK_IMPORTED_MODULE_1__["SMA"]({ period: period, values: [] });
        var genFn = (function* () {
            var tick = yield;
            var prevEma;
            while (true) {
                if (prevEma !== undefined && tick !== undefined) {
                    prevEma = ((tick - prevEma) * exponent) + prevEma;
                    tick = yield prevEma;
                }
                else {
                    tick = yield;
                    prevEma = sma.nextValue(tick);
                    if (prevEma)
                        tick = yield prevEma;
                }
            }
        });
        this.generator = genFn();
        this.generator.next();
        this.generator.next();
        priceArray.forEach((tick) => {
            var result = this.generator.next(tick);
            if (result.value != undefined) {
                this.result.push(this.format(result.value));
            }
        });
    }
    nextValue(price) {
        var result = this.generator.next(price).value;
        if (result != undefined)
            return this.format(result);
    }
    ;
}
EMA.calculate = ema;
function ema(input) {
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    var result = new EMA(input).result;
    if (input.reversedInput) {
        result.reverse();
    }
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    return result;
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/moving_averages/MACD.js":
/*!**********************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/moving_averages/MACD.js ***!
  \**********************************************************************/
/*! exports provided: MACDInput, MACDOutput, MACD, macd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MACDInput", function() { return MACDInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MACDOutput", function() { return MACDOutput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MACD", function() { return MACD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "macd", function() { return macd; });
/* harmony import */ var _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../indicator/indicator */ "./node_modules/technicalindicators/lib/indicator/indicator.js");
/* harmony import */ var _SMA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SMA */ "./node_modules/technicalindicators/lib/moving_averages/SMA.js");
/* harmony import */ var _EMA__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EMA */ "./node_modules/technicalindicators/lib/moving_averages/EMA.js");
/**
 * Created by AAravindan on 5/4/16.
 */



class MACDInput extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["IndicatorInput"] {
    constructor(values) {
        super();
        this.values = values;
        this.SimpleMAOscillator = true;
        this.SimpleMASignal = true;
    }
}
class MACDOutput {
}
class MACD extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"] {
    constructor(input) {
        super(input);
        var oscillatorMAtype = input.SimpleMAOscillator ? _SMA__WEBPACK_IMPORTED_MODULE_1__["SMA"] : _EMA__WEBPACK_IMPORTED_MODULE_2__["EMA"];
        var signalMAtype = input.SimpleMASignal ? _SMA__WEBPACK_IMPORTED_MODULE_1__["SMA"] : _EMA__WEBPACK_IMPORTED_MODULE_2__["EMA"];
        var fastMAProducer = new oscillatorMAtype({ period: input.fastPeriod, values: [], format: (v) => { return v; } });
        var slowMAProducer = new oscillatorMAtype({ period: input.slowPeriod, values: [], format: (v) => { return v; } });
        var signalMAProducer = new signalMAtype({ period: input.signalPeriod, values: [], format: (v) => { return v; } });
        var format = this.format;
        this.result = [];
        this.generator = (function* () {
            var index = 0;
            var tick;
            var MACD, signal, histogram, fast, slow;
            while (true) {
                if (index < input.slowPeriod) {
                    tick = yield;
                    fast = fastMAProducer.nextValue(tick);
                    slow = slowMAProducer.nextValue(tick);
                    index++;
                    continue;
                }
                if (fast && slow) { //Just for typescript to be happy
                    MACD = fast - slow;
                    signal = signalMAProducer.nextValue(MACD);
                }
                histogram = MACD - signal;
                tick = yield ({
                    //fast : fast,
                    //slow : slow,
                    MACD: format(MACD),
                    signal: signal ? format(signal) : undefined,
                    histogram: isNaN(histogram) ? undefined : format(histogram)
                });
                fast = fastMAProducer.nextValue(tick);
                slow = slowMAProducer.nextValue(tick);
            }
        })();
        this.generator.next();
        input.values.forEach((tick) => {
            var result = this.generator.next(tick);
            if (result.value != undefined) {
                this.result.push(result.value);
            }
        });
    }
    nextValue(price) {
        var result = this.generator.next(price).value;
        return result;
    }
    ;
}
MACD.calculate = macd;
function macd(input) {
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    var result = new MACD(input).result;
    if (input.reversedInput) {
        result.reverse();
    }
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    return result;
}
;


/***/ }),

/***/ "./node_modules/technicalindicators/lib/moving_averages/SMA.js":
/*!*********************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/moving_averages/SMA.js ***!
  \*********************************************************************/
/*! exports provided: MAInput, SMA, sma */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAInput", function() { return MAInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SMA", function() { return SMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sma", function() { return sma; });
/* harmony import */ var _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../indicator/indicator */ "./node_modules/technicalindicators/lib/indicator/indicator.js");
/* harmony import */ var _Utils_LinkedList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/LinkedList */ "./node_modules/technicalindicators/lib/Utils/LinkedList.js");
//STEP 1. Import Necessary indicator or rather last step


//STEP 2. Create the input for the indicator, mandatory should be in the constructor
class MAInput extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["IndicatorInput"] {
    constructor(period, values) {
        super();
        this.period = period;
        this.values = values;
    }
}
//STEP3. Add class based syntax with export
class SMA extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"] {
    constructor(input) {
        super(input);
        this.period = input.period;
        this.price = input.values;
        var genFn = (function* (period) {
            var list = new _Utils_LinkedList__WEBPACK_IMPORTED_MODULE_1__["LinkedList"]();
            var sum = 0;
            var counter = 1;
            var current = yield;
            var result;
            list.push(0);
            while (true) {
                if (counter < period) {
                    counter++;
                    list.push(current);
                    sum = sum + current;
                }
                else {
                    sum = sum - list.shift() + current;
                    result = ((sum) / period);
                    list.push(current);
                }
                current = yield result;
            }
        });
        this.generator = genFn(this.period);
        this.generator.next();
        this.result = [];
        this.price.forEach((tick) => {
            var result = this.generator.next(tick);
            if (result.value !== undefined) {
                this.result.push(this.format(result.value));
            }
        });
    }
    nextValue(price) {
        var result = this.generator.next(price).value;
        if (result != undefined)
            return this.format(result);
    }
    ;
}
SMA.calculate = sma;
function sma(input) {
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    var result = new SMA(input).result;
    if (input.reversedInput) {
        result.reverse();
    }
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    return result;
}
;
//STEP 6. Run the tests


/***/ }),

/***/ "./node_modules/technicalindicators/lib/moving_averages/WEMA.js":
/*!**********************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/moving_averages/WEMA.js ***!
  \**********************************************************************/
/*! exports provided: WEMA, wema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEMA", function() { return WEMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wema", function() { return wema; });
/* harmony import */ var _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../indicator/indicator */ "./node_modules/technicalindicators/lib/indicator/indicator.js");
/* harmony import */ var _SMA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SMA */ "./node_modules/technicalindicators/lib/moving_averages/SMA.js");


class WEMA extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"] {
    constructor(input) {
        super(input);
        var period = input.period;
        var priceArray = input.values;
        var exponent = 1 / period;
        var sma;
        this.result = [];
        sma = new _SMA__WEBPACK_IMPORTED_MODULE_1__["SMA"]({ period: period, values: [] });
        var genFn = (function* () {
            var tick = yield;
            var prevEma;
            while (true) {
                if (prevEma !== undefined && tick !== undefined) {
                    prevEma = ((tick - prevEma) * exponent) + prevEma;
                    tick = yield prevEma;
                }
                else {
                    tick = yield;
                    prevEma = sma.nextValue(tick);
                    if (prevEma !== undefined)
                        tick = yield prevEma;
                }
            }
        });
        this.generator = genFn();
        this.generator.next();
        this.generator.next();
        priceArray.forEach((tick) => {
            var result = this.generator.next(tick);
            if (result.value != undefined) {
                this.result.push(this.format(result.value));
            }
        });
    }
    nextValue(price) {
        var result = this.generator.next(price).value;
        if (result != undefined)
            return this.format(result);
    }
    ;
}
WEMA.calculate = wema;
function wema(input) {
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    var result = new WEMA(input).result;
    if (input.reversedInput) {
        result.reverse();
    }
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    return result;
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/moving_averages/WMA.js":
/*!*********************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/moving_averages/WMA.js ***!
  \*********************************************************************/
/*! exports provided: WMA, wma */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WMA", function() { return WMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wma", function() { return wma; });
/* harmony import */ var _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../indicator/indicator */ "./node_modules/technicalindicators/lib/indicator/indicator.js");
/* harmony import */ var _Utils_LinkedList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/LinkedList */ "./node_modules/technicalindicators/lib/Utils/LinkedList.js");



class WMA extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"] {
    constructor(input) {
        super(input);
        var period = input.period;
        var priceArray = input.values;
        this.result = [];
        this.generator = (function* () {
            let data = new _Utils_LinkedList__WEBPACK_IMPORTED_MODULE_1__["LinkedList"]();
            let denominator = period * (period + 1) / 2;
            while (true) {
                if ((data.length) < period) {
                    data.push(yield);
                }
                else {
                    data.resetCursor();
                    let result = 0;
                    for (let i = 1; i <= period; i++) {
                        result = result + (data.next() * i / (denominator));
                    }
                    var next = yield result;
                    data.shift();
                    data.push(next);
                }
            }
        })();
        this.generator.next();
        priceArray.forEach((tick, index) => {
            var result = this.generator.next(tick);
            if (result.value != undefined) {
                this.result.push(this.format(result.value));
            }
        });
    }
    //STEP 5. REMOVE GET RESULT FUNCTION
    nextValue(price) {
        var result = this.generator.next(price).value;
        if (result != undefined)
            return this.format(result);
    }
    ;
}
WMA.calculate = wma;
;
function wma(input) {
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    var result = new WMA(input).result;
    if (input.reversedInput) {
        result.reverse();
    }
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    return result;
}


/***/ }),

/***/ "./node_modules/technicalindicators/lib/moving_averages/WilderSmoothing.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/moving_averages/WilderSmoothing.js ***!
  \*********************************************************************************/
/*! exports provided: WilderSmoothing, wildersmoothing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WilderSmoothing", function() { return WilderSmoothing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wildersmoothing", function() { return wildersmoothing; });
/* harmony import */ var _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../indicator/indicator */ "./node_modules/technicalindicators/lib/indicator/indicator.js");
/* harmony import */ var _Utils_LinkedList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/LinkedList */ "./node_modules/technicalindicators/lib/Utils/LinkedList.js");


//STEP3. Add class based syntax with export
class WilderSmoothing extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"] {
    constructor(input) {
        super(input);
        this.period = input.period;
        this.price = input.values;
        var genFn = (function* (period) {
            var list = new _Utils_LinkedList__WEBPACK_IMPORTED_MODULE_1__["LinkedList"]();
            var sum = 0;
            var counter = 1;
            var current = yield;
            var result = 0;
            while (true) {
                if (counter < period) {
                    counter++;
                    sum = sum + current;
                    result = undefined;
                }
                else if (counter == period) {
                    counter++;
                    sum = sum + current;
                    result = sum;
                }
                else {
                    result = result - (result / period) + current;
                }
                current = yield result;
            }
        });
        this.generator = genFn(this.period);
        this.generator.next();
        this.result = [];
        this.price.forEach((tick) => {
            var result = this.generator.next(tick);
            if (result.value != undefined) {
                this.result.push(this.format(result.value));
            }
        });
    }
    nextValue(price) {
        var result = this.generator.next(price).value;
        if (result != undefined)
            return this.format(result);
    }
    ;
}
WilderSmoothing.calculate = wildersmoothing;
function wildersmoothing(input) {
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    var result = new WilderSmoothing(input).result;
    if (input.reversedInput) {
        result.reverse();
    }
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    return result;
}
;
//STEP 6. Run the tests


/***/ }),

/***/ "./node_modules/technicalindicators/lib/oscillators/AwesomeOscillator.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/oscillators/AwesomeOscillator.js ***!
  \*******************************************************************************/
/*! exports provided: AwesomeOscillatorInput, AwesomeOscillator, awesomeoscillator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwesomeOscillatorInput", function() { return AwesomeOscillatorInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwesomeOscillator", function() { return AwesomeOscillator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "awesomeoscillator", function() { return awesomeoscillator; });
/* harmony import */ var _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../indicator/indicator */ "./node_modules/technicalindicators/lib/indicator/indicator.js");
/* harmony import */ var _moving_averages_SMA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../moving_averages/SMA */ "./node_modules/technicalindicators/lib/moving_averages/SMA.js");


class AwesomeOscillatorInput extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["IndicatorInput"] {
}
class AwesomeOscillator extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"] {
    constructor(input) {
        super(input);
        var highs = input.high;
        var lows = input.low;
        var fastPeriod = input.fastPeriod;
        var slowPeriod = input.slowPeriod;
        var slowSMA = new _moving_averages_SMA__WEBPACK_IMPORTED_MODULE_1__["SMA"]({ values: [], period: slowPeriod });
        var fastSMA = new _moving_averages_SMA__WEBPACK_IMPORTED_MODULE_1__["SMA"]({ values: [], period: fastPeriod });
        this.result = [];
        this.generator = (function* () {
            var result;
            var tick;
            var medianPrice;
            var slowSmaValue;
            var fastSmaValue;
            tick = yield;
            while (true) {
                medianPrice = (tick.high + tick.low) / 2;
                slowSmaValue = slowSMA.nextValue(medianPrice);
                fastSmaValue = fastSMA.nextValue(medianPrice);
                if (slowSmaValue !== undefined && fastSmaValue !== undefined) {
                    result = fastSmaValue - slowSmaValue;
                }
                tick = yield result;
            }
        })();
        this.generator.next();
        highs.forEach((tickHigh, index) => {
            var tickInput = {
                high: tickHigh,
                low: lows[index],
            };
            var result = this.generator.next(tickInput);
            if (result.value != undefined) {
                this.result.push(this.format(result.value));
            }
        });
    }
    ;
    nextValue(price) {
        var result = this.generator.next(price);
        if (result.value != undefined) {
            return this.format(result.value);
        }
    }
    ;
}
AwesomeOscillator.calculate = awesomeoscillator;
function awesomeoscillator(input) {
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    var result = new AwesomeOscillator(input).result;
    if (input.reversedInput) {
        result.reverse();
    }
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    return result;
}
;


/***/ }),

/***/ "./node_modules/technicalindicators/lib/oscillators/CCI.js":
/*!*****************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/oscillators/CCI.js ***!
  \*****************************************************************/
/*! exports provided: CCIInput, CCI, cci */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CCIInput", function() { return CCIInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CCI", function() { return CCI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cci", function() { return cci; });
/* harmony import */ var _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../indicator/indicator */ "./node_modules/technicalindicators/lib/indicator/indicator.js");
/* harmony import */ var _moving_averages_SMA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../moving_averages/SMA */ "./node_modules/technicalindicators/lib/moving_averages/SMA.js");
/* harmony import */ var _Utils_FixedSizeLinkedList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils/FixedSizeLinkedList */ "./node_modules/technicalindicators/lib/Utils/FixedSizeLinkedList.js");



class CCIInput extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["IndicatorInput"] {
}
;
class CCI extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"] {
    constructor(input) {
        super(input);
        var lows = input.low;
        var highs = input.high;
        var closes = input.close;
        var period = input.period;
        var format = this.format;
        let constant = .015;
        var currentTpSet = new _Utils_FixedSizeLinkedList__WEBPACK_IMPORTED_MODULE_2__["default"](period);
        ;
        var tpSMACalculator = new _moving_averages_SMA__WEBPACK_IMPORTED_MODULE_1__["SMA"]({ period: period, values: [], format: (v) => { return v; } });
        if (!((lows.length === highs.length) && (highs.length === closes.length))) {
            throw ('Inputs(low,high, close) not of equal size');
        }
        this.result = [];
        this.generator = (function* () {
            var tick = yield;
            while (true) {
                let tp = (tick.high + tick.low + tick.close) / 3;
                currentTpSet.push(tp);
                let smaTp = tpSMACalculator.nextValue(tp);
                let meanDeviation = null;
                let cci;
                let sum = 0;
                if (smaTp != undefined) {
                    //First, subtract the most recent 20-period average of the typical price from each period's typical price. 
                    //Second, take the absolute values of these numbers.
                    //Third,sum the absolute values. 
                    for (let x of currentTpSet.iterator()) {
                        sum = sum + (Math.abs(x - smaTp));
                    }
                    //Fourth, divide by the total number of periods (20). 
                    meanDeviation = sum / period;
                    cci = (tp - smaTp) / (constant * meanDeviation);
                }
                tick = yield cci;
            }
        })();
        this.generator.next();
        lows.forEach((tick, index) => {
            var result = this.generator.next({
                high: highs[index],
                low: lows[index],
                close: closes[index]
            });
            if (result.value != undefined) {
                this.result.push(result.value);
            }
        });
    }
    ;
    ;
    nextValue(price) {
        let result = this.generator.next(price).value;
        if (result != undefined) {
            return result;
        }
    }
    ;
}
CCI.calculate = cci;
function cci(input) {
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    var result = new CCI(input).result;
    if (input.reversedInput) {
        result.reverse();
    }
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    return result;
}
;


/***/ }),

/***/ "./node_modules/technicalindicators/lib/oscillators/RSI.js":
/*!*****************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/oscillators/RSI.js ***!
  \*****************************************************************/
/*! exports provided: RSIInput, RSI, rsi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RSIInput", function() { return RSIInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RSI", function() { return RSI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rsi", function() { return rsi; });
/* harmony import */ var _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../indicator/indicator */ "./node_modules/technicalindicators/lib/indicator/indicator.js");
/* harmony import */ var _Utils_AverageGain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/AverageGain */ "./node_modules/technicalindicators/lib/Utils/AverageGain.js");
/* harmony import */ var _Utils_AverageLoss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils/AverageLoss */ "./node_modules/technicalindicators/lib/Utils/AverageLoss.js");
/**
 * Created by AAravindan on 5/5/16.
 */



class RSIInput extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["IndicatorInput"] {
}
class RSI extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"] {
    constructor(input) {
        super(input);
        var period = input.period;
        var values = input.values;
        var GainProvider = new _Utils_AverageGain__WEBPACK_IMPORTED_MODULE_1__["AverageGain"]({ period: period, values: [] });
        var LossProvider = new _Utils_AverageLoss__WEBPACK_IMPORTED_MODULE_2__["AverageLoss"]({ period: period, values: [] });
        let count = 1;
        this.generator = (function* (period) {
            var current = yield;
            var lastAvgGain, lastAvgLoss, RS, currentRSI;
            while (true) {
                lastAvgGain = GainProvider.nextValue(current);
                lastAvgLoss = LossProvider.nextValue(current);
                if ((lastAvgGain !== undefined) && (lastAvgLoss !== undefined)) {
                    if (lastAvgLoss === 0) {
                        currentRSI = 100;
                    }
                    else if (lastAvgGain === 0) {
                        currentRSI = 0;
                    }
                    else {
                        RS = lastAvgGain / lastAvgLoss;
                        RS = isNaN(RS) ? 0 : RS;
                        currentRSI = parseFloat((100 - (100 / (1 + RS))).toFixed(2));
                    }
                }
                count++;
                current = yield currentRSI;
            }
        })(period);
        this.generator.next();
        this.result = [];
        values.forEach((tick) => {
            var result = this.generator.next(tick);
            if (result.value !== undefined) {
                this.result.push(result.value);
            }
        });
    }
    ;
    nextValue(price) {
        return this.generator.next(price).value;
    }
    ;
}
RSI.calculate = rsi;
function rsi(input) {
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    var result = new RSI(input).result;
    if (input.reversedInput) {
        result.reverse();
    }
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    return result;
}
;


/***/ }),

/***/ "./node_modules/technicalindicators/lib/volatility/BollingerBands.js":
/*!***************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/volatility/BollingerBands.js ***!
  \***************************************************************************/
/*! exports provided: BollingerBandsInput, BollingerBandsOutput, BollingerBands, bollingerbands */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BollingerBandsInput", function() { return BollingerBandsInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BollingerBandsOutput", function() { return BollingerBandsOutput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BollingerBands", function() { return BollingerBands; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bollingerbands", function() { return bollingerbands; });
/* harmony import */ var _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../indicator/indicator */ "./node_modules/technicalindicators/lib/indicator/indicator.js");
/* harmony import */ var _moving_averages_SMA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../moving_averages/SMA */ "./node_modules/technicalindicators/lib/moving_averages/SMA.js");
/* harmony import */ var _Utils_SD__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils/SD */ "./node_modules/technicalindicators/lib/Utils/SD.js");




class BollingerBandsInput extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["IndicatorInput"] {
}
;
class BollingerBandsOutput extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["IndicatorInput"] {
}
;
class BollingerBands extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"] {
    constructor(input) {
        super(input);
        var period = input.period;
        var priceArray = input.values;
        var stdDev = input.stdDev;
        var format = this.format;
        var sma, sd;
        this.result = [];
        sma = new _moving_averages_SMA__WEBPACK_IMPORTED_MODULE_1__["SMA"]({ period: period, values: [], format: (v) => { return v; } });
        sd = new _Utils_SD__WEBPACK_IMPORTED_MODULE_2__["SD"]({ period: period, values: [], format: (v) => { return v; } });
        this.generator = (function* () {
            var result;
            var tick;
            var calcSMA;
            var calcsd;
            tick = yield;
            while (true) {
                calcSMA = sma.nextValue(tick);
                calcsd = sd.nextValue(tick);
                if (calcSMA) {
                    let middle = format(calcSMA);
                    let upper = format(calcSMA + (calcsd * stdDev));
                    let lower = format(calcSMA - (calcsd * stdDev));
                    let pb = format((tick - lower) / (upper - lower));
                    result = {
                        middle: middle,
                        upper: upper,
                        lower: lower,
                        pb: pb
                    };
                }
                tick = yield result;
            }
        })();
        this.generator.next();
        priceArray.forEach((tick) => {
            var result = this.generator.next(tick);
            if (result.value != undefined) {
                this.result.push(result.value);
            }
        });
    }
    nextValue(price) {
        return this.generator.next(price).value;
    }
    ;
}
BollingerBands.calculate = bollingerbands;
function bollingerbands(input) {
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    var result = new BollingerBands(input).result;
    if (input.reversedInput) {
        result.reverse();
    }
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    return result;
}
;


/***/ }),

/***/ "./node_modules/technicalindicators/lib/volatility/ChandelierExit.js":
/*!***************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/volatility/ChandelierExit.js ***!
  \***************************************************************************/
/*! exports provided: ChandelierExitInput, ChandelierExitOutput, ChandelierExit, chandelierexit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChandelierExitInput", function() { return ChandelierExitInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChandelierExitOutput", function() { return ChandelierExitOutput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChandelierExit", function() { return ChandelierExit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chandelierexit", function() { return chandelierexit; });
/* harmony import */ var _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../indicator/indicator */ "./node_modules/technicalindicators/lib/indicator/indicator.js");
/* harmony import */ var _directionalmovement_ATR__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directionalmovement/ATR */ "./node_modules/technicalindicators/lib/directionalmovement/ATR.js");
/* harmony import */ var _Utils_FixedSizeLinkedList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils/FixedSizeLinkedList */ "./node_modules/technicalindicators/lib/Utils/FixedSizeLinkedList.js");



class ChandelierExitInput extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["IndicatorInput"] {
    constructor() {
        super(...arguments);
        this.period = 22;
        this.multiplier = 3;
    }
}
class ChandelierExitOutput extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["IndicatorInput"] {
}
;
class ChandelierExit extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"] {
    constructor(input) {
        super(input);
        var highs = input.high;
        var lows = input.low;
        var closes = input.close;
        this.result = [];
        var atrProducer = new _directionalmovement_ATR__WEBPACK_IMPORTED_MODULE_1__["ATR"]({ period: input.period, high: [], low: [], close: [], format: (v) => { return v; } });
        var dataCollector = new _Utils_FixedSizeLinkedList__WEBPACK_IMPORTED_MODULE_2__["default"](input.period * 2, true, true, false);
        this.generator = (function* () {
            var result;
            var tick = yield;
            var atr;
            while (true) {
                var { high, low } = tick;
                dataCollector.push(high);
                dataCollector.push(low);
                atr = atrProducer.nextValue(tick);
                if ((dataCollector.totalPushed >= (2 * input.period)) && atr != undefined) {
                    result = {
                        exitLong: dataCollector.periodHigh - atr * input.multiplier,
                        exitShort: dataCollector.periodLow + atr * input.multiplier
                    };
                }
                tick = yield result;
            }
        })();
        this.generator.next();
        highs.forEach((tickHigh, index) => {
            var tickInput = {
                high: tickHigh,
                low: lows[index],
                close: closes[index],
            };
            var result = this.generator.next(tickInput);
            if (result.value != undefined) {
                this.result.push(result.value);
            }
        });
    }
    ;
    nextValue(price) {
        var result = this.generator.next(price);
        if (result.value != undefined) {
            return result.value;
        }
    }
    ;
}
ChandelierExit.calculate = chandelierexit;
function chandelierexit(input) {
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    var result = new ChandelierExit(input).result;
    if (input.reversedInput) {
        result.reverse();
    }
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    return result;
}
;


/***/ }),

/***/ "./node_modules/technicalindicators/lib/volatility/KeltnerChannels.js":
/*!****************************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/volatility/KeltnerChannels.js ***!
  \****************************************************************************/
/*! exports provided: KeltnerChannelsInput, KeltnerChannelsOutput, KeltnerChannels, keltnerchannels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeltnerChannelsInput", function() { return KeltnerChannelsInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeltnerChannelsOutput", function() { return KeltnerChannelsOutput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeltnerChannels", function() { return KeltnerChannels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keltnerchannels", function() { return keltnerchannels; });
/* harmony import */ var _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../indicator/indicator */ "./node_modules/technicalindicators/lib/indicator/indicator.js");
/* harmony import */ var _moving_averages_SMA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../moving_averages/SMA */ "./node_modules/technicalindicators/lib/moving_averages/SMA.js");
/* harmony import */ var _moving_averages_EMA__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../moving_averages/EMA */ "./node_modules/technicalindicators/lib/moving_averages/EMA.js");
/* harmony import */ var _directionalmovement_ATR__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../directionalmovement/ATR */ "./node_modules/technicalindicators/lib/directionalmovement/ATR.js");




class KeltnerChannelsInput extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["IndicatorInput"] {
    constructor() {
        super(...arguments);
        this.maPeriod = 20;
        this.atrPeriod = 10;
        this.useSMA = false;
        this.multiplier = 1;
    }
}
class KeltnerChannelsOutput extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["IndicatorInput"] {
}
;
class KeltnerChannels extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"] {
    constructor(input) {
        super(input);
        var maType = input.useSMA ? _moving_averages_SMA__WEBPACK_IMPORTED_MODULE_1__["SMA"] : _moving_averages_EMA__WEBPACK_IMPORTED_MODULE_2__["EMA"];
        var maProducer = new maType({ period: input.maPeriod, values: [], format: (v) => { return v; } });
        var atrProducer = new _directionalmovement_ATR__WEBPACK_IMPORTED_MODULE_3__["ATR"]({ period: input.atrPeriod, high: [], low: [], close: [], format: (v) => { return v; } });
        var tick;
        this.result = [];
        this.generator = (function* () {
            var KeltnerChannelsOutput;
            var result;
            tick = yield;
            while (true) {
                var { close } = tick;
                var ma = maProducer.nextValue(close);
                var atr = atrProducer.nextValue(tick);
                if (ma != undefined && atr != undefined) {
                    result = {
                        middle: ma,
                        upper: ma + (input.multiplier * (atr)),
                        lower: ma - (input.multiplier * (atr))
                    };
                }
                tick = yield result;
            }
        })();
        this.generator.next();
        var highs = input.high;
        highs.forEach((tickHigh, index) => {
            var tickInput = {
                high: tickHigh,
                low: input.low[index],
                close: input.close[index],
            };
            var result = this.generator.next(tickInput);
            if (result.value != undefined) {
                this.result.push(result.value);
            }
        });
    }
    ;
    nextValue(price) {
        var result = this.generator.next(price);
        if (result.value != undefined) {
            return result.value;
        }
    }
    ;
}
KeltnerChannels.calculate = keltnerchannels;
function keltnerchannels(input) {
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    var result = new KeltnerChannels(input).result;
    if (input.reversedInput) {
        result.reverse();
    }
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    return result;
}
;


/***/ }),

/***/ "./node_modules/technicalindicators/lib/volume/ADL.js":
/*!************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/volume/ADL.js ***!
  \************************************************************/
/*! exports provided: ADLInput, ADL, adl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADLInput", function() { return ADLInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADL", function() { return ADL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adl", function() { return adl; });
/* harmony import */ var _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../indicator/indicator */ "./node_modules/technicalindicators/lib/indicator/indicator.js");
/**
 * Created by AAravindan on 5/17/16.
 */

class ADLInput extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["IndicatorInput"] {
}
class ADL extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"] {
    constructor(input) {
        super(input);
        var highs = input.high;
        var lows = input.low;
        var closes = input.close;
        var volumes = input.volume;
        if (!((lows.length === highs.length) && (highs.length === closes.length) && (highs.length === volumes.length))) {
            throw ('Inputs(low,high, close, volumes) not of equal size');
        }
        this.result = [];
        this.generator = (function* () {
            var result = 0;
            var tick;
            tick = yield;
            while (true) {
                let moneyFlowMultiplier = ((tick.close - tick.low) - (tick.high - tick.close)) / (tick.high - tick.low);
                moneyFlowMultiplier = isNaN(moneyFlowMultiplier) ? 1 : moneyFlowMultiplier;
                let moneyFlowVolume = moneyFlowMultiplier * tick.volume;
                result = result + moneyFlowVolume;
                tick = yield Math.round(result);
            }
        })();
        this.generator.next();
        highs.forEach((tickHigh, index) => {
            var tickInput = {
                high: tickHigh,
                low: lows[index],
                close: closes[index],
                volume: volumes[index]
            };
            var result = this.generator.next(tickInput);
            if (result.value != undefined) {
                this.result.push(result.value);
            }
        });
    }
    ;
    nextValue(price) {
        return this.generator.next(price).value;
    }
    ;
}
ADL.calculate = adl;
function adl(input) {
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    var result = new ADL(input).result;
    if (input.reversedInput) {
        result.reverse();
    }
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    return result;
}
;


/***/ }),

/***/ "./node_modules/technicalindicators/lib/volume/ForceIndex.js":
/*!*******************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/volume/ForceIndex.js ***!
  \*******************************************************************/
/*! exports provided: ForceIndexInput, ForceIndex, forceindex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForceIndexInput", function() { return ForceIndexInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForceIndex", function() { return ForceIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forceindex", function() { return forceindex; });
/* harmony import */ var _moving_averages_EMA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moving_averages/EMA */ "./node_modules/technicalindicators/lib/moving_averages/EMA.js");
/* harmony import */ var _indicator_indicator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../indicator/indicator */ "./node_modules/technicalindicators/lib/indicator/indicator.js");


class ForceIndexInput extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_1__["IndicatorInput"] {
    constructor() {
        super(...arguments);
        this.period = 1;
    }
}
;
class ForceIndex extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_1__["Indicator"] {
    constructor(input) {
        super(input);
        var closes = input.close;
        var volumes = input.volume;
        var period = input.period || 1;
        if (!((volumes.length === closes.length))) {
            throw ('Inputs(volume, close) not of equal size');
        }
        let emaForceIndex = new _moving_averages_EMA__WEBPACK_IMPORTED_MODULE_0__["EMA"]({ values: [], period: period });
        this.result = [];
        this.generator = (function* () {
            var previousTick = yield;
            var tick = yield;
            let forceIndex;
            while (true) {
                forceIndex = (tick.close - previousTick.close) * tick.volume;
                previousTick = tick;
                tick = yield emaForceIndex.nextValue(forceIndex);
            }
        })();
        this.generator.next();
        volumes.forEach((tick, index) => {
            var result = this.generator.next({
                close: closes[index],
                volume: volumes[index]
            });
            if (result.value != undefined) {
                this.result.push(result.value);
            }
        });
    }
    ;
    ;
    nextValue(price) {
        let result = this.generator.next(price).value;
        if (result != undefined) {
            return result;
        }
    }
    ;
}
ForceIndex.calculate = forceindex;
function forceindex(input) {
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_1__["Indicator"].reverseInputs(input);
    var result = new ForceIndex(input).result;
    if (input.reversedInput) {
        result.reverse();
    }
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_1__["Indicator"].reverseInputs(input);
    return result;
}
;


/***/ }),

/***/ "./node_modules/technicalindicators/lib/volume/MFI.js":
/*!************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/volume/MFI.js ***!
  \************************************************************/
/*! exports provided: MFIInput, MFI, mfi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MFIInput", function() { return MFIInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MFI", function() { return MFI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mfi", function() { return mfi; });
/* harmony import */ var _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../indicator/indicator */ "./node_modules/technicalindicators/lib/indicator/indicator.js");
/* harmony import */ var _chart_types_TypicalPrice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chart_types/TypicalPrice */ "./node_modules/technicalindicators/lib/chart_types/TypicalPrice.js");
/* harmony import */ var _Utils_FixedSizeLinkedList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils/FixedSizeLinkedList */ "./node_modules/technicalindicators/lib/Utils/FixedSizeLinkedList.js");
/**
 * Created by AAravindan on 5/17/16.
 */



class MFIInput extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["IndicatorInput"] {
}
class MFI extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"] {
    constructor(input) {
        super(input);
        var highs = input.high;
        var lows = input.low;
        var closes = input.close;
        var volumes = input.volume;
        var period = input.period;
        var typicalPrice = new _chart_types_TypicalPrice__WEBPACK_IMPORTED_MODULE_1__["TypicalPrice"]({ low: [], high: [], close: [] });
        var positiveFlow = new _Utils_FixedSizeLinkedList__WEBPACK_IMPORTED_MODULE_2__["default"](period, false, false, true);
        var negativeFlow = new _Utils_FixedSizeLinkedList__WEBPACK_IMPORTED_MODULE_2__["default"](period, false, false, true);
        if (!((lows.length === highs.length) && (highs.length === closes.length) && (highs.length === volumes.length))) {
            throw ('Inputs(low,high, close, volumes) not of equal size');
        }
        this.result = [];
        this.generator = (function* () {
            var result;
            var tick;
            var lastClose;
            var positiveFlowForPeriod;
            var rawMoneyFlow = 0;
            var moneyFlowRatio;
            var negativeFlowForPeriod;
            let typicalPriceValue = null;
            let prevousTypicalPrice = null;
            tick = yield;
            lastClose = tick.close; //Fist value 
            tick = yield;
            while (true) {
                var { high, low, close, volume } = tick;
                var positionMoney = 0;
                var negativeMoney = 0;
                typicalPriceValue = typicalPrice.nextValue({ high, low, close });
                rawMoneyFlow = typicalPriceValue * volume;
                if ((typicalPriceValue != null) && (prevousTypicalPrice != null)) {
                    typicalPriceValue > prevousTypicalPrice ? positionMoney = rawMoneyFlow : negativeMoney = rawMoneyFlow;
                    positiveFlow.push(positionMoney);
                    negativeFlow.push(negativeMoney);
                    positiveFlowForPeriod = positiveFlow.periodSum;
                    negativeFlowForPeriod = negativeFlow.periodSum;
                    if ((positiveFlow.totalPushed >= period) && (positiveFlow.totalPushed >= period)) {
                        moneyFlowRatio = positiveFlowForPeriod / negativeFlowForPeriod;
                        result = 100 - 100 / (1 + moneyFlowRatio);
                    }
                }
                prevousTypicalPrice = typicalPriceValue;
                tick = yield result;
            }
        })();
        this.generator.next();
        highs.forEach((tickHigh, index) => {
            var tickInput = {
                high: tickHigh,
                low: lows[index],
                close: closes[index],
                volume: volumes[index]
            };
            var result = this.generator.next(tickInput);
            if (result.value != undefined) {
                this.result.push(parseFloat(result.value.toFixed(2)));
            }
        });
    }
    ;
    nextValue(price) {
        var result = this.generator.next(price);
        if (result.value != undefined) {
            return (parseFloat(result.value.toFixed(2)));
        }
    }
    ;
}
MFI.calculate = mfi;
function mfi(input) {
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    var result = new MFI(input).result;
    if (input.reversedInput) {
        result.reverse();
    }
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    return result;
}
;


/***/ }),

/***/ "./node_modules/technicalindicators/lib/volume/OBV.js":
/*!************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/volume/OBV.js ***!
  \************************************************************/
/*! exports provided: OBVInput, OBV, obv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OBVInput", function() { return OBVInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OBV", function() { return OBV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "obv", function() { return obv; });
/* harmony import */ var _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../indicator/indicator */ "./node_modules/technicalindicators/lib/indicator/indicator.js");

/**
 * Created by AAravindan on 5/17/16.
 */
"use strict";
class OBVInput extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["IndicatorInput"] {
}
class OBV extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"] {
    constructor(input) {
        super(input);
        var closes = input.close;
        var volumes = input.volume;
        this.result = [];
        this.generator = (function* () {
            var result = 0;
            var tick;
            var lastClose;
            tick = yield;
            if (tick.close && (typeof tick.close === 'number')) {
                lastClose = tick.close;
                tick = yield;
            }
            while (true) {
                if (lastClose < tick.close) {
                    result = result + tick.volume;
                }
                else if (tick.close < lastClose) {
                    result = result - tick.volume;
                }
                lastClose = tick.close;
                tick = yield result;
            }
        })();
        this.generator.next();
        closes.forEach((close, index) => {
            let tickInput = {
                close: closes[index],
                volume: volumes[index]
            };
            let result = this.generator.next(tickInput);
            if (result.value != undefined) {
                this.result.push(result.value);
            }
        });
    }
    nextValue(price) {
        return this.generator.next(price).value;
    }
    ;
}
OBV.calculate = obv;
function obv(input) {
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    var result = new OBV(input).result;
    if (input.reversedInput) {
        result.reverse();
    }
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    return result;
}
;


/***/ }),

/***/ "./node_modules/technicalindicators/lib/volume/VWAP.js":
/*!*************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/volume/VWAP.js ***!
  \*************************************************************/
/*! exports provided: VWAPInput, VWAP, vwap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VWAPInput", function() { return VWAPInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VWAP", function() { return VWAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vwap", function() { return vwap; });
/* harmony import */ var _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../indicator/indicator */ "./node_modules/technicalindicators/lib/indicator/indicator.js");

class VWAPInput extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["IndicatorInput"] {
}
;
class VWAP extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"] {
    constructor(input) {
        super(input);
        var lows = input.low;
        var highs = input.high;
        var closes = input.close;
        var volumes = input.volume;
        var format = this.format;
        if (!((lows.length === highs.length) && (highs.length === closes.length))) {
            throw ('Inputs(low,high, close) not of equal size');
        }
        this.result = [];
        this.generator = (function* () {
            var tick = yield;
            let cumulativeTotal = 0;
            let cumulativeVolume = 0;
            while (true) {
                let typicalPrice = (tick.high + tick.low + tick.close) / 3;
                let total = tick.volume * typicalPrice;
                cumulativeTotal = cumulativeTotal + total;
                cumulativeVolume = cumulativeVolume + tick.volume;
                tick = yield cumulativeTotal / cumulativeVolume;
                ;
            }
        })();
        this.generator.next();
        lows.forEach((tick, index) => {
            var result = this.generator.next({
                high: highs[index],
                low: lows[index],
                close: closes[index],
                volume: volumes[index]
            });
            if (result.value != undefined) {
                this.result.push(result.value);
            }
        });
    }
    ;
    ;
    nextValue(price) {
        let result = this.generator.next(price).value;
        if (result != undefined) {
            return result;
        }
    }
    ;
}
VWAP.calculate = vwap;
function vwap(input) {
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    var result = new VWAP(input).result;
    if (input.reversedInput) {
        result.reverse();
    }
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    return result;
}
;


/***/ }),

/***/ "./node_modules/technicalindicators/lib/volume/VolumeProfile.js":
/*!**********************************************************************!*\
  !*** ./node_modules/technicalindicators/lib/volume/VolumeProfile.js ***!
  \**********************************************************************/
/*! exports provided: VolumeProfileInput, VolumeProfileOutput, priceFallsBetweenBarRange, VolumeProfile, volumeprofile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolumeProfileInput", function() { return VolumeProfileInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolumeProfileOutput", function() { return VolumeProfileOutput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "priceFallsBetweenBarRange", function() { return priceFallsBetweenBarRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolumeProfile", function() { return VolumeProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "volumeprofile", function() { return volumeprofile; });
/* harmony import */ var _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../indicator/indicator */ "./node_modules/technicalindicators/lib/indicator/indicator.js");

class VolumeProfileInput extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["IndicatorInput"] {
}
class VolumeProfileOutput {
}
function priceFallsBetweenBarRange(low, high, low1, high1) {
    return (low <= low1 && high >= low1) || (low1 <= low && high1 >= low);
}
class VolumeProfile extends _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"] {
    constructor(input) {
        super(input);
        var highs = input.high;
        var lows = input.low;
        var closes = input.close;
        var opens = input.open;
        var volumes = input.volume;
        var bars = input.noOfBars;
        if (!((lows.length === highs.length) && (highs.length === closes.length) && (highs.length === volumes.length))) {
            throw ('Inputs(low,high, close, volumes) not of equal size');
        }
        this.result = [];
        var max = Math.max(...highs, ...lows, ...closes, ...opens);
        var min = Math.min(...highs, ...lows, ...closes, ...opens);
        var barRange = (max - min) / bars;
        var lastEnd = min;
        for (let i = 0; i < bars; i++) {
            let rangeStart = lastEnd;
            let rangeEnd = rangeStart + barRange;
            lastEnd = rangeEnd;
            let bullishVolume = 0;
            let bearishVolume = 0;
            let totalVolume = 0;
            for (let priceBar = 0; priceBar < highs.length; priceBar++) {
                let priceBarStart = lows[priceBar];
                let priceBarEnd = highs[priceBar];
                let priceBarOpen = opens[priceBar];
                let priceBarClose = closes[priceBar];
                let priceBarVolume = volumes[priceBar];
                if (priceFallsBetweenBarRange(rangeStart, rangeEnd, priceBarStart, priceBarEnd)) {
                    totalVolume = totalVolume + priceBarVolume;
                    if (priceBarOpen > priceBarClose) {
                        bearishVolume = bearishVolume + priceBarVolume;
                    }
                    else {
                        bullishVolume = bullishVolume + priceBarVolume;
                    }
                }
            }
            this.result.push({
                rangeStart, rangeEnd, bullishVolume, bearishVolume, totalVolume
            });
        }
    }
    ;
    nextValue(price) {
        throw ('Next value not supported for volume profile');
    }
    ;
}
VolumeProfile.calculate = volumeprofile;
function volumeprofile(input) {
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    var result = new VolumeProfile(input).result;
    if (input.reversedInput) {
        result.reverse();
    }
    _indicator_indicator__WEBPACK_IMPORTED_MODULE_0__["Indicator"].reverseInputs(input);
    return result;
}
;


/***/ })

}]);