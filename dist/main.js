/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/user */ \"./src/scripts/user.js\");\n/* harmony import */ var _scripts_scenario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/scenario */ \"./src/scripts/scenario.js\");\n/* harmony import */ var _scripts_vehicleModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/vehicleModule */ \"./src/scripts/vehicleModule.js\");\n/* harmony import */ var _scripts_goodsModule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/goodsModule */ \"./src/scripts/goodsModule.js\");\n\n\n\n\n\n// const yahooFinance = require('yahoo-finance');\n\ndocument.addEventListener(\"DOMContentLoaded\", async function () {\n  console.log(\"Hello world!\");\n  // const main = document.getElementById(\"main\");\n  // new Example(main)\n  //     await fetch('https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=IBM&apikey=MKK0K02W1J79A7UI')\n  //   .then(res => {\n  //     return res.json();\n  //   })\n  //   .then(json => {\n  //     console.log(json);\n  //     const startPrice = json[\"Monthly Time Series\"][\"1999-12-31\"][\"1. open\"]\n  //     const fetcher = document.getElementById(\"apifetcher\");\n  //     fetcher.innerText = startPrice\n  //   });\n  const testButton = document.querySelector(\".testbutton\");\n  testButton.addEventListener(\"click\", () => (0,_scripts_vehicleModule__WEBPACK_IMPORTED_MODULE_2__.calculateYield)(1000, 2001, 10, \"IBM\"));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBa0M7QUFDUTtBQUNhO0FBQ0c7O0FBRTFEOztBQUVBSSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLGtCQUFpQjtFQUMzREMsT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0VBQzNCO0VBQ0E7RUFDSjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNFLE1BQU1DLFVBQVUsR0FBR0osUUFBUSxDQUFDSyxhQUFhLENBQUMsYUFBYSxDQUFDO0VBQ3hERCxVQUFVLENBQUNILGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNSCxzRUFBYyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ25GLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLXByb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlciBmcm9tIFwiLi9zY3JpcHRzL3VzZXJcIjtcbmltcG9ydCBTY2VuYXJpbyBmcm9tIFwiLi9zY3JpcHRzL3NjZW5hcmlvXCI7XG5pbXBvcnQge2NhbGN1bGF0ZVlpZWxkfSBmcm9tIFwiLi9zY3JpcHRzL3ZlaGljbGVNb2R1bGVcIjtcbmltcG9ydCB7ZGV0ZXJtaW5lUXVhbnRpdGllc30gZnJvbSBcIi4vc2NyaXB0cy9nb29kc01vZHVsZVwiO1xuXG4vLyBjb25zdCB5YWhvb0ZpbmFuY2UgPSByZXF1aXJlKCd5YWhvby1maW5hbmNlJyk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKFwiSGVsbG8gd29ybGQhXCIpO1xuICAgIC8vIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgLy8gbmV3IEV4YW1wbGUobWFpbilcbi8vICAgICBhd2FpdCBmZXRjaCgnaHR0cHM6Ly93d3cuYWxwaGF2YW50YWdlLmNvL3F1ZXJ5P2Z1bmN0aW9uPVRJTUVfU0VSSUVTX01PTlRITFkmc3ltYm9sPUlCTSZhcGlrZXk9TUtLMEswMlcxSjc5QTdVSScpXG4vLyAgIC50aGVuKHJlcyA9PiB7XG4vLyAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4vLyAgIH0pXG4vLyAgIC50aGVuKGpzb24gPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKGpzb24pO1xuLy8gICAgIGNvbnN0IHN0YXJ0UHJpY2UgPSBqc29uW1wiTW9udGhseSBUaW1lIFNlcmllc1wiXVtcIjE5OTktMTItMzFcIl1bXCIxLiBvcGVuXCJdXG4vLyAgICAgY29uc3QgZmV0Y2hlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBpZmV0Y2hlclwiKTtcbi8vICAgICBmZXRjaGVyLmlubmVyVGV4dCA9IHN0YXJ0UHJpY2Vcbi8vICAgfSk7XG4gIGNvbnN0IHRlc3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlc3RidXR0b25cIilcbiAgdGVzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY2FsY3VsYXRlWWllbGQoMTAwMCwgMjAwMSwgMTAsIFwiSUJNXCIpKVxufSk7XG5cblxuIl0sIm5hbWVzIjpbIlVzZXIiLCJTY2VuYXJpbyIsImNhbGN1bGF0ZVlpZWxkIiwiZGV0ZXJtaW5lUXVhbnRpdGllcyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJ0ZXN0QnV0dG9uIiwicXVlcnlTZWxlY3RvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/goodsModule.js":
/*!************************************!*\
  !*** ./src/scripts/goodsModule.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   determineQuantities: function() { return /* binding */ determineQuantities; }\n/* harmony export */ });\nasync function determineQuantities(totalYield, endDate, preferences) {\n  let yieldHash = {};\n  Object.keys(preferences).forEach(async function (key) {\n    const goodExpense = preferences[key] / 100 * totalYield;\n    const endPrice = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${key}&apikey=MKK0K02W1J79A7UI`).then(res => {\n      return res.json();\n    }).then(json => {\n      console.log(json);\n      const endPrice = json[\"Monthly Time Series\"][`${endDate}-12-31`][\"1. open\"];\n      return parseFloat(endPrice);\n    });\n    const quantity = goodExpense / endPrice;\n    yieldHash[key] = quantity;\n  });\n  return yieldHash;\n}\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nb29kc01vZHVsZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sZUFBZUEsbUJBQW1CQSxDQUFDQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsV0FBVyxFQUFFO0VBRXhFLElBQUlDLFNBQVMsR0FBRyxDQUFDLENBQUM7RUFFbEJDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDSCxXQUFXLENBQUMsQ0FBQ0ksT0FBTyxDQUFDLGdCQUFnQkMsR0FBRyxFQUFDO0lBQ2pELE1BQU1DLFdBQVcsR0FBSU4sV0FBVyxDQUFDSyxHQUFHLENBQUMsR0FBQyxHQUFHLEdBQUlQLFVBQVU7SUFDdkQsTUFBTVMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBRSx5RUFBd0VILEdBQUksMEJBQXlCLENBQUMsQ0FDbklJLElBQUksQ0FBQ0MsR0FBRyxJQUFJO01BQ1gsT0FBT0EsR0FBRyxDQUFDQyxJQUFJLENBQUMsQ0FBQztJQUNuQixDQUFDLENBQUMsQ0FDREYsSUFBSSxDQUFDRSxJQUFJLElBQUk7TUFDWkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQztNQUNqQixNQUFNSixRQUFRLEdBQUdJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFFLEdBQUVaLE9BQVEsUUFBTyxDQUFDLENBQUMsU0FBUyxDQUFDO01BQzNFLE9BQU9lLFVBQVUsQ0FBQ1AsUUFBUSxDQUFDO0lBQzdCLENBQUMsQ0FBQztJQUNGLE1BQU1RLFFBQVEsR0FBR1QsV0FBVyxHQUFDQyxRQUFRO0lBQ3JDTixTQUFTLENBQUNJLEdBQUcsQ0FBQyxHQUFHVSxRQUFRO0VBQzdCLENBQUMsQ0FBQztFQUVGLE9BQU9kLFNBQVM7QUFFcEI7QUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLXByb2plY3QvLi9zcmMvc2NyaXB0cy9nb29kc01vZHVsZS5qcz9lMGE4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZXRlcm1pbmVRdWFudGl0aWVzKHRvdGFsWWllbGQsIGVuZERhdGUsIHByZWZlcmVuY2VzKSB7XG5cbiAgICBsZXQgeWllbGRIYXNoID0ge307XG5cbiAgICBPYmplY3Qua2V5cyhwcmVmZXJlbmNlcykuZm9yRWFjaChhc3luYyBmdW5jdGlvbiAoa2V5KXtcbiAgICAgICAgY29uc3QgZ29vZEV4cGVuc2UgPSAocHJlZmVyZW5jZXNba2V5XS8xMDApICogdG90YWxZaWVsZFxuICAgICAgICBjb25zdCBlbmRQcmljZSA9IGF3YWl0IGZldGNoKGBodHRwczovL3d3dy5hbHBoYXZhbnRhZ2UuY28vcXVlcnk/ZnVuY3Rpb249VElNRV9TRVJJRVNfTU9OVEhMWSZzeW1ib2w9JHtrZXl9JmFwaWtleT1NS0swSzAyVzFKNzlBN1VJYClcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coanNvbik7XG4gICAgICAgICAgY29uc3QgZW5kUHJpY2UgPSBqc29uW1wiTW9udGhseSBUaW1lIFNlcmllc1wiXVtgJHtlbmREYXRlfS0xMi0zMWBdW1wiMS4gb3BlblwiXVxuICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KGVuZFByaWNlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHF1YW50aXR5ID0gZ29vZEV4cGVuc2UvZW5kUHJpY2VcbiAgICAgICAgeWllbGRIYXNoW2tleV0gPSBxdWFudGl0eTtcbiAgICB9KVxuXG4gICAgcmV0dXJuIHlpZWxkSGFzaDtcblxufTsiXSwibmFtZXMiOlsiZGV0ZXJtaW5lUXVhbnRpdGllcyIsInRvdGFsWWllbGQiLCJlbmREYXRlIiwicHJlZmVyZW5jZXMiLCJ5aWVsZEhhc2giLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsImdvb2RFeHBlbnNlIiwiZW5kUHJpY2UiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInBhcnNlRmxvYXQiLCJxdWFudGl0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/goodsModule.js\n");

/***/ }),

/***/ "./src/scripts/scenario.js":
/*!*********************************!*\
  !*** ./src/scripts/scenario.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Scenario {\n  constructor(ele) {}\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Scenario);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zY2VuYXJpby5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsUUFBUSxDQUFDO0VBQ1hDLFdBQVdBLENBQUNDLEdBQUcsRUFBRSxDQUVqQjtBQUdKO0FBQ0EsK0RBQWVGLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvc2NlbmFyaW8uanM/NWEwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTY2VuYXJpbyB7XG4gICAgY29uc3RydWN0b3IoZWxlKSB7XG5cbiAgICB9XG5cbiAgICBcbn1cbmV4cG9ydCBkZWZhdWx0IFNjZW5hcmlvIl0sIm5hbWVzIjpbIlNjZW5hcmlvIiwiY29uc3RydWN0b3IiLCJlbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/scenario.js\n");

/***/ }),

/***/ "./src/scripts/user.js":
/*!*****************************!*\
  !*** ./src/scripts/user.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass User {\n  constructor(ele) {\n    this.ele = ele;\n    this.ele.innerHTML = \"<h1>It's ALIVE!!</h1>\";\n    this.ele.addEventListener(\"click\", this.handleClick.bind(this));\n  }\n  createNewScenario() {}\n  deleteScenario() {}\n}\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy91c2VyLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxJQUFJLENBQUM7RUFDUEMsV0FBV0EsQ0FBQ0MsR0FBRyxFQUFFO0lBQ2IsSUFBSSxDQUFDQSxHQUFHLEdBQUdBLEdBQUc7SUFDZCxJQUFJLENBQUNBLEdBQUcsQ0FBQ0MsU0FBUyxHQUFFLHVCQUF1QjtJQUUzQyxJQUFJLENBQUNELEdBQUcsQ0FBQ0UsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ0MsV0FBVyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFFbkU7RUFJQUMsaUJBQWlCQSxDQUFBLEVBQUcsQ0FFcEI7RUFFQUMsY0FBY0EsQ0FBQSxFQUFHLENBRWpCO0FBQ0o7QUFBQztBQUVELCtEQUFlUixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtcHJvamVjdC8uL3NyYy9zY3JpcHRzL3VzZXIuanM/NGU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBVc2VyIHtcbiAgICBjb25zdHJ1Y3RvcihlbGUpIHtcbiAgICAgICAgdGhpcy5lbGUgPSBlbGU7XG4gICAgICAgIHRoaXMuZWxlLmlubmVySFRNTD0gXCI8aDE+SXQncyBBTElWRSEhPC9oMT5cIjtcblxuICAgICAgICB0aGlzLmVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpKTtcbiAgICAgICBcbiAgICB9XG5cbiAgICBcblxuICAgIGNyZWF0ZU5ld1NjZW5hcmlvKCkge1xuICAgICAgICBcbiAgICB9XG5cbiAgICBkZWxldGVTY2VuYXJpbygpIHtcbiAgICAgICAgXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlciJdLCJuYW1lcyI6WyJVc2VyIiwiY29uc3RydWN0b3IiLCJlbGUiLCJpbm5lckhUTUwiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiY3JlYXRlTmV3U2NlbmFyaW8iLCJkZWxldGVTY2VuYXJpbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/user.js\n");

/***/ }),

/***/ "./src/scripts/vehicleModule.js":
/*!**************************************!*\
  !*** ./src/scripts/vehicleModule.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calculateYield: function() { return /* binding */ calculateYield; }\n/* harmony export */ });\nasync function calculateYield(invAmount, startDate, duration, invVehicle) {\n  const growth = await getGrowth(startDate, duration, invVehicle);\n  const totalYield = invAmount * growth;\n  console.log(totalYield);\n  const fetcher = document.getElementById(\"apifetcher\");\n  fetcher.innerText = totalYield;\n}\nasync function getGrowth(startDate, duration, invVehicle) {\n  return await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${invVehicle}&apikey=MKK0K02W1J79A7UI`).then(res => {\n    return res.json();\n  }).then(json => {\n    console.log(json);\n    const startPrice = json[\"Monthly Time Series\"][`${startDate}-01-31`][\"1. open\"];\n    const endPrice = json[\"Monthly Time Series\"][`${startDate + duration}-12-31`][\"1. open\"];\n    const startPriceInt = parseFloat(startPrice);\n    const endPriceInt = parseFloat(endPrice);\n    const veGrowth = endPriceInt / startPriceInt;\n    return veGrowth;\n  });\n}\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy92ZWhpY2xlTW9kdWxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFFTyxlQUFlQSxjQUFjQSxDQUFDQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQUU7RUFFN0UsTUFBTUMsTUFBTSxHQUFHLE1BQU1DLFNBQVMsQ0FBQ0osU0FBUyxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsQ0FBQztFQUMvRCxNQUFNRyxVQUFVLEdBQUdOLFNBQVMsR0FBR0ksTUFBTTtFQUNyQ0csT0FBTyxDQUFDQyxHQUFHLENBQUNGLFVBQVUsQ0FBQztFQUN2QixNQUFNRyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFlBQVksQ0FBQztFQUNyREYsT0FBTyxDQUFDRyxTQUFTLEdBQUdOLFVBQVU7QUFFbEM7QUFJQSxlQUFlRCxTQUFTQSxDQUFDSixTQUFTLEVBQUVDLFFBQVEsRUFBRUMsVUFBVSxFQUFFO0VBRTFELE9BQU8sTUFBTVUsS0FBSyxDQUFFLHlFQUF3RVYsVUFBVywwQkFBeUIsQ0FBQyxDQUNoSVcsSUFBSSxDQUFDQyxHQUFHLElBQUk7SUFDWCxPQUFPQSxHQUFHLENBQUNDLElBQUksQ0FBQyxDQUFDO0VBQ25CLENBQUMsQ0FBQyxDQUNERixJQUFJLENBQUNFLElBQUksSUFBSTtJQUNaVCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1EsSUFBSSxDQUFDO0lBQ2pCLE1BQU1DLFVBQVUsR0FBR0QsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUUsR0FBRWYsU0FBVSxRQUFPLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDL0UsTUFBTWlCLFFBQVEsR0FBR0YsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUUsR0FBRWYsU0FBUyxHQUFHQyxRQUFTLFFBQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RixNQUFNaUIsYUFBYSxHQUFHQyxVQUFVLENBQUNILFVBQVUsQ0FBQztJQUM1QyxNQUFNSSxXQUFXLEdBQUdELFVBQVUsQ0FBQ0YsUUFBUSxDQUFDO0lBQ3hDLE1BQU1JLFFBQVEsR0FBSUQsV0FBVyxHQUFDRixhQUFjO0lBQzVDLE9BQU9HLFFBQVE7RUFDakIsQ0FBQyxDQUFDO0FBRUY7QUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLXByb2plY3QvLi9zcmMvc2NyaXB0cy92ZWhpY2xlTW9kdWxlLmpzP2IyM2EiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjYWxjdWxhdGVZaWVsZChpbnZBbW91bnQsIHN0YXJ0RGF0ZSwgZHVyYXRpb24sIGludlZlaGljbGUpIHtcblxuICAgIGNvbnN0IGdyb3d0aCA9IGF3YWl0IGdldEdyb3d0aChzdGFydERhdGUsIGR1cmF0aW9uLCBpbnZWZWhpY2xlKVxuICAgIGNvbnN0IHRvdGFsWWllbGQgPSBpbnZBbW91bnQgKiBncm93dGhcbiAgICBjb25zb2xlLmxvZyh0b3RhbFlpZWxkKVxuICAgIGNvbnN0IGZldGNoZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwaWZldGNoZXJcIik7XG4gICAgZmV0Y2hlci5pbm5lclRleHQgPSB0b3RhbFlpZWxkXG4gICAgXG59XG5cblxuXG5hc3luYyBmdW5jdGlvbiBnZXRHcm93dGgoc3RhcnREYXRlLCBkdXJhdGlvbiwgaW52VmVoaWNsZSkge1xuXG5yZXR1cm4gYXdhaXQgZmV0Y2goYGh0dHBzOi8vd3d3LmFscGhhdmFudGFnZS5jby9xdWVyeT9mdW5jdGlvbj1USU1FX1NFUklFU19NT05USExZJnN5bWJvbD0ke2ludlZlaGljbGV9JmFwaWtleT1NS0swSzAyVzFKNzlBN1VJYClcbi50aGVuKHJlcyA9PiB7XG4gIHJldHVybiByZXMuanNvbigpO1xufSlcbi50aGVuKGpzb24gPT4ge1xuICBjb25zb2xlLmxvZyhqc29uKTtcbiAgY29uc3Qgc3RhcnRQcmljZSA9IGpzb25bXCJNb250aGx5IFRpbWUgU2VyaWVzXCJdW2Ake3N0YXJ0RGF0ZX0tMDEtMzFgXVtcIjEuIG9wZW5cIl1cbiAgY29uc3QgZW5kUHJpY2UgPSBqc29uW1wiTW9udGhseSBUaW1lIFNlcmllc1wiXVtgJHtzdGFydERhdGUgKyBkdXJhdGlvbn0tMTItMzFgXVtcIjEuIG9wZW5cIl1cbiAgY29uc3Qgc3RhcnRQcmljZUludCA9IHBhcnNlRmxvYXQoc3RhcnRQcmljZSlcbiAgY29uc3QgZW5kUHJpY2VJbnQgPSBwYXJzZUZsb2F0KGVuZFByaWNlKVxuICBjb25zdCB2ZUdyb3d0aCA9IChlbmRQcmljZUludC9zdGFydFByaWNlSW50KVxuICByZXR1cm4gdmVHcm93dGhcbn0pO1xuXG59O1xuXG5cblxuIl0sIm5hbWVzIjpbImNhbGN1bGF0ZVlpZWxkIiwiaW52QW1vdW50Iiwic3RhcnREYXRlIiwiZHVyYXRpb24iLCJpbnZWZWhpY2xlIiwiZ3Jvd3RoIiwiZ2V0R3Jvd3RoIiwidG90YWxZaWVsZCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVyVGV4dCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJzdGFydFByaWNlIiwiZW5kUHJpY2UiLCJzdGFydFByaWNlSW50IiwicGFyc2VGbG9hdCIsImVuZFByaWNlSW50IiwidmVHcm93dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/vehicleModule.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcm9qZWN0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;