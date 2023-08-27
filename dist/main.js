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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/user */ \"./src/scripts/user.js\");\n/* harmony import */ var _scripts_scenario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/scenario */ \"./src/scripts/scenario.js\");\n/* harmony import */ var _scripts_vehicleModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/vehicleModule */ \"./src/scripts/vehicleModule.js\");\n/* harmony import */ var _scripts_goodsModule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/goodsModule */ \"./src/scripts/goodsModule.js\");\n\n\n\n\n\n// const yahooFinance = require('yahoo-finance');\n\ndocument.addEventListener(\"DOMContentLoaded\", async function () {\n  console.log(\"Hello world!\");\n\n  // const main = document.getElementById(\"main\");\n  // new Example(main)\n  //     await fetch('https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=IBM&apikey=MKK0K02W1J79A7UI')\n  //   .then(res => {\n  //     return res.json();\n  //   })\n  //   .then(json => {\n  //     console.log(json);\n  //     const startPrice = json[\"Monthly Time Series\"][\"1999-12-31\"][\"1. open\"]\n  //     const fetcher = document.getElementById(\"apifetcher\");\n  //     fetcher.innerText = startPrice\n  //   });\n  const testButtonYield = document.querySelector(\".testbuttonyield\");\n  testButtonYield.addEventListener(\"click\", () => (0,_scripts_vehicleModule__WEBPACK_IMPORTED_MODULE_2__.calculateYield)(1000, 2003, 10, \"GS\"));\n  const testButtonGoods = document.querySelector(\".testbuttongoods\");\n  testButtonGoods.addEventListener(\"click\", () => (0,_scripts_goodsModule__WEBPACK_IMPORTED_MODULE_3__.determineQuantities)(10000, 2013, {\n    \"WHEAT\": 70,\n    \"CORN\": 30\n  }));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBa0M7QUFDUTtBQUNhO0FBQ0c7O0FBRTFEOztBQUVBSSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLGtCQUFpQjtFQUMzREMsT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDOztFQUUzQjtFQUNBO0VBQ0o7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDRSxNQUFNQyxlQUFlLEdBQUdKLFFBQVEsQ0FBQ0ssYUFBYSxDQUFDLGtCQUFrQixDQUFDO0VBQ2xFRCxlQUFlLENBQUNILGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNSCxzRUFBYyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0VBRXJGLE1BQU1RLGVBQWUsR0FBR04sUUFBUSxDQUFDSyxhQUFhLENBQUMsa0JBQWtCLENBQUM7RUFDbEVDLGVBQWUsQ0FBQ0wsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU1GLHlFQUFtQixDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUU7SUFBQyxPQUFPLEVBQUUsRUFBRTtJQUFFLE1BQU0sRUFBRTtFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRTlHLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLXByb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlciBmcm9tIFwiLi9zY3JpcHRzL3VzZXJcIjtcbmltcG9ydCBTY2VuYXJpbyBmcm9tIFwiLi9zY3JpcHRzL3NjZW5hcmlvXCI7XG5pbXBvcnQge2NhbGN1bGF0ZVlpZWxkfSBmcm9tIFwiLi9zY3JpcHRzL3ZlaGljbGVNb2R1bGVcIjtcbmltcG9ydCB7ZGV0ZXJtaW5lUXVhbnRpdGllc30gZnJvbSBcIi4vc2NyaXB0cy9nb29kc01vZHVsZVwiO1xuXG4vLyBjb25zdCB5YWhvb0ZpbmFuY2UgPSByZXF1aXJlKCd5YWhvby1maW5hbmNlJyk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKFwiSGVsbG8gd29ybGQhXCIpO1xuICAgIFxuICAgIC8vIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgLy8gbmV3IEV4YW1wbGUobWFpbilcbi8vICAgICBhd2FpdCBmZXRjaCgnaHR0cHM6Ly93d3cuYWxwaGF2YW50YWdlLmNvL3F1ZXJ5P2Z1bmN0aW9uPVRJTUVfU0VSSUVTX01PTlRITFkmc3ltYm9sPUlCTSZhcGlrZXk9TUtLMEswMlcxSjc5QTdVSScpXG4vLyAgIC50aGVuKHJlcyA9PiB7XG4vLyAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4vLyAgIH0pXG4vLyAgIC50aGVuKGpzb24gPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKGpzb24pO1xuLy8gICAgIGNvbnN0IHN0YXJ0UHJpY2UgPSBqc29uW1wiTW9udGhseSBUaW1lIFNlcmllc1wiXVtcIjE5OTktMTItMzFcIl1bXCIxLiBvcGVuXCJdXG4vLyAgICAgY29uc3QgZmV0Y2hlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBpZmV0Y2hlclwiKTtcbi8vICAgICBmZXRjaGVyLmlubmVyVGV4dCA9IHN0YXJ0UHJpY2Vcbi8vICAgfSk7XG4gIGNvbnN0IHRlc3RCdXR0b25ZaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVzdGJ1dHRvbnlpZWxkXCIpO1xuICB0ZXN0QnV0dG9uWWllbGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNhbGN1bGF0ZVlpZWxkKDEwMDAsIDIwMDMsIDEwLCBcIkdTXCIpKTtcblxuICBjb25zdCB0ZXN0QnV0dG9uR29vZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlc3RidXR0b25nb29kc1wiKTtcbiAgdGVzdEJ1dHRvbkdvb2RzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBkZXRlcm1pbmVRdWFudGl0aWVzKDEwMDAwLCAyMDEzLCB7XCJXSEVBVFwiOiA3MCwgXCJDT1JOXCI6IDMwfSkpO1xuXG59KTtcblxuXG4iXSwibmFtZXMiOlsiVXNlciIsIlNjZW5hcmlvIiwiY2FsY3VsYXRlWWllbGQiLCJkZXRlcm1pbmVRdWFudGl0aWVzIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsInRlc3RCdXR0b25ZaWVsZCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXN0QnV0dG9uR29vZHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/goodsModule.js":
/*!************************************!*\
  !*** ./src/scripts/goodsModule.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   determineQuantities: function() { return /* binding */ determineQuantities; }\n/* harmony export */ });\nasync function determineQuantities(totalYield, endDate, preferences) {\n  let yieldHash = {};\n  const basket = \"\";\n  const fetcher2 = document.getElementById(\"apifetcher2\");\n  Object.keys(preferences).forEach(async key => {\n    const goodExpense = preferences[key] / 100 * totalYield;\n    const endPrice = await fetch(`https://www.alphavantage.co/query?function=${key.toUpperCase()}&interval=annual&apikey=MKK0K02W1J79A7UI`).then(res => {\n      return res.json();\n    }).then(json => {\n      console.log(json);\n      const endPrice = json[\"data\"][`${new Date().getFullYear() - endDate - 1}`][\"value\"];\n      return parseFloat(endPrice);\n    });\n    const quantity = goodExpense / endPrice;\n    yieldHash[key] = quantity;\n    fetcher2.innerText += `${yieldHash[key]}  ${key}'s`;\n  });\n  console.log(yieldHash);\n}\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nb29kc01vZHVsZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sZUFBZUEsbUJBQW1CQSxDQUFDQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsV0FBVyxFQUFFO0VBRXhFLElBQUlDLFNBQVMsR0FBRyxDQUFDLENBQUM7RUFDbEIsTUFBTUMsTUFBTSxHQUFHLEVBQUU7RUFDakIsTUFBTUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxhQUFhLENBQUM7RUFFdkRDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDUCxXQUFXLENBQUMsQ0FBQ1EsT0FBTyxDQUFDLE1BQU1DLEdBQUcsSUFBSTtJQUUxQyxNQUFNQyxXQUFXLEdBQUlWLFdBQVcsQ0FBQ1MsR0FBRyxDQUFDLEdBQUMsR0FBRyxHQUFJWCxVQUFVO0lBQ3ZELE1BQU1hLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUUsOENBQTZDSCxHQUFHLENBQUNJLFdBQVcsQ0FBQyxDQUFFLDBDQUF5QyxDQUFDLENBQ3RJQyxJQUFJLENBQUNDLEdBQUcsSUFBSTtNQUNYLE9BQU9BLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7SUFDbkIsQ0FBQyxDQUFDLENBQ0RGLElBQUksQ0FBQ0UsSUFBSSxJQUFJO01BQ1pDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUM7TUFDakIsTUFBTUwsUUFBUSxHQUFHSyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUUsR0FBRSxJQUFJRyxJQUFJLENBQUMsQ0FBQyxDQUFDQyxXQUFXLENBQUMsQ0FBQyxHQUFHckIsT0FBTyxHQUFHLENBQUUsRUFBQyxDQUFDLENBQUMsT0FBTyxDQUFDO01BQ25GLE9BQU9zQixVQUFVLENBQUNWLFFBQVEsQ0FBQztJQUM3QixDQUFDLENBQUM7SUFFRixNQUFNVyxRQUFRLEdBQUdaLFdBQVcsR0FBQ0MsUUFBUTtJQUVyQ1YsU0FBUyxDQUFDUSxHQUFHLENBQUMsR0FBR2EsUUFBUTtJQUN6Qm5CLFFBQVEsQ0FBQ29CLFNBQVMsSUFBSyxHQUFFdEIsU0FBUyxDQUFDUSxHQUFHLENBQUUsS0FBSUEsR0FBSSxJQUFHO0VBQ3ZELENBQUMsQ0FBQztFQUdGUSxPQUFPLENBQUNDLEdBQUcsQ0FBQ2pCLFNBQVMsQ0FBQztBQUMxQjtBQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtcHJvamVjdC8uL3NyYy9zY3JpcHRzL2dvb2RzTW9kdWxlLmpzP2UwYTgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRldGVybWluZVF1YW50aXRpZXModG90YWxZaWVsZCwgZW5kRGF0ZSwgcHJlZmVyZW5jZXMpIHtcblxuICAgIGxldCB5aWVsZEhhc2ggPSB7fTtcbiAgICBjb25zdCBiYXNrZXQgPSBcIlwiO1xuICAgIGNvbnN0IGZldGNoZXIyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcGlmZXRjaGVyMlwiKTtcblxuICAgIE9iamVjdC5rZXlzKHByZWZlcmVuY2VzKS5mb3JFYWNoKGFzeW5jIGtleSA9PiB7XG5cbiAgICAgICAgY29uc3QgZ29vZEV4cGVuc2UgPSAocHJlZmVyZW5jZXNba2V5XS8xMDApICogdG90YWxZaWVsZFxuICAgICAgICBjb25zdCBlbmRQcmljZSA9IGF3YWl0IGZldGNoKGBodHRwczovL3d3dy5hbHBoYXZhbnRhZ2UuY28vcXVlcnk/ZnVuY3Rpb249JHtrZXkudG9VcHBlckNhc2UoKX0maW50ZXJ2YWw9YW5udWFsJmFwaWtleT1NS0swSzAyVzFKNzlBN1VJYClcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coanNvbik7XG4gICAgICAgICAgY29uc3QgZW5kUHJpY2UgPSBqc29uW1wiZGF0YVwiXVtgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgLSBlbmREYXRlIC0gMX1gXVtcInZhbHVlXCJdXG4gICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoZW5kUHJpY2UpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBxdWFudGl0eSA9IGdvb2RFeHBlbnNlL2VuZFByaWNlO1xuICAgICBcbiAgICAgICAgeWllbGRIYXNoW2tleV0gPSBxdWFudGl0eTtcbiAgICAgICAgZmV0Y2hlcjIuaW5uZXJUZXh0ICs9IGAke3lpZWxkSGFzaFtrZXldfSAgJHtrZXl9J3NgO1xuICAgIH0pXG5cbiAgICBcbiAgICBjb25zb2xlLmxvZyh5aWVsZEhhc2gpO1xufTsiXSwibmFtZXMiOlsiZGV0ZXJtaW5lUXVhbnRpdGllcyIsInRvdGFsWWllbGQiLCJlbmREYXRlIiwicHJlZmVyZW5jZXMiLCJ5aWVsZEhhc2giLCJiYXNrZXQiLCJmZXRjaGVyMiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsImdvb2RFeHBlbnNlIiwiZW5kUHJpY2UiLCJmZXRjaCIsInRvVXBwZXJDYXNlIiwidGhlbiIsInJlcyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwicGFyc2VGbG9hdCIsInF1YW50aXR5IiwiaW5uZXJUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/goodsModule.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calculateYield: function() { return /* binding */ calculateYield; }\n/* harmony export */ });\nasync function calculateYield(invAmount, startDate, duration, invVehicle) {\n  const growth = await getGrowth(startDate, duration, invVehicle);\n  const totalYield = invAmount * growth;\n  console.log(totalYield);\n  const fetcher = document.getElementById(\"apifetcher\");\n  fetcher.innerText = totalYield;\n}\nasync function getGrowth(startDate, duration, invVehicle) {\n  return await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${invVehicle}&apikey=MKK0K02W1J79A7UI`).then(res => {\n    return res.json();\n  }).then(json => {\n    console.log(json);\n    const startPrice = json[\"Monthly Time Series\"][`${startDate}-01-31`][\"1. open\"];\n    const endPrice = json[\"Monthly Time Series\"][`${startDate + duration}-12-31`][\"1. open\"];\n    const startPriceInt = parseFloat(startPrice);\n    const endPriceInt = parseFloat(endPrice);\n    const veGrowth = endPriceInt / startPriceInt;\n    return veGrowth;\n  });\n}\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy92ZWhpY2xlTW9kdWxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFFTyxlQUFlQSxjQUFjQSxDQUFDQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQUU7RUFFN0UsTUFBTUMsTUFBTSxHQUFHLE1BQU1DLFNBQVMsQ0FBQ0osU0FBUyxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsQ0FBQztFQUUvRCxNQUFNRyxVQUFVLEdBQUdOLFNBQVMsR0FBR0ksTUFBTTtFQUNyQ0csT0FBTyxDQUFDQyxHQUFHLENBQUNGLFVBQVUsQ0FBQztFQUV2QixNQUFNRyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFlBQVksQ0FBQztFQUNyREYsT0FBTyxDQUFDRyxTQUFTLEdBQUdOLFVBQVU7QUFFbEM7QUFJQSxlQUFlRCxTQUFTQSxDQUFDSixTQUFTLEVBQUVDLFFBQVEsRUFBRUMsVUFBVSxFQUFFO0VBRTFELE9BQU8sTUFBTVUsS0FBSyxDQUFFLHlFQUF3RVYsVUFBVywwQkFBeUIsQ0FBQyxDQUNoSVcsSUFBSSxDQUFDQyxHQUFHLElBQUk7SUFDWCxPQUFPQSxHQUFHLENBQUNDLElBQUksQ0FBQyxDQUFDO0VBQ25CLENBQUMsQ0FBQyxDQUNERixJQUFJLENBQUNFLElBQUksSUFBSTtJQUNaVCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1EsSUFBSSxDQUFDO0lBQ2pCLE1BQU1DLFVBQVUsR0FBR0QsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUUsR0FBRWYsU0FBVSxRQUFPLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDL0UsTUFBTWlCLFFBQVEsR0FBR0YsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUUsR0FBRWYsU0FBUyxHQUFHQyxRQUFTLFFBQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RixNQUFNaUIsYUFBYSxHQUFHQyxVQUFVLENBQUNILFVBQVUsQ0FBQztJQUM1QyxNQUFNSSxXQUFXLEdBQUdELFVBQVUsQ0FBQ0YsUUFBUSxDQUFDO0lBQ3hDLE1BQU1JLFFBQVEsR0FBSUQsV0FBVyxHQUFDRixhQUFjO0lBQzVDLE9BQU9HLFFBQVE7RUFDakIsQ0FBQyxDQUFDO0FBRUY7QUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLXByb2plY3QvLi9zcmMvc2NyaXB0cy92ZWhpY2xlTW9kdWxlLmpzP2IyM2EiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjYWxjdWxhdGVZaWVsZChpbnZBbW91bnQsIHN0YXJ0RGF0ZSwgZHVyYXRpb24sIGludlZlaGljbGUpIHtcbiAgICBcbiAgICBjb25zdCBncm93dGggPSBhd2FpdCBnZXRHcm93dGgoc3RhcnREYXRlLCBkdXJhdGlvbiwgaW52VmVoaWNsZSlcblxuICAgIGNvbnN0IHRvdGFsWWllbGQgPSBpbnZBbW91bnQgKiBncm93dGhcbiAgICBjb25zb2xlLmxvZyh0b3RhbFlpZWxkKVxuXG4gICAgY29uc3QgZmV0Y2hlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBpZmV0Y2hlclwiKTtcbiAgICBmZXRjaGVyLmlubmVyVGV4dCA9IHRvdGFsWWllbGRcbiAgICBcbn1cblxuXG5cbmFzeW5jIGZ1bmN0aW9uIGdldEdyb3d0aChzdGFydERhdGUsIGR1cmF0aW9uLCBpbnZWZWhpY2xlKSB7XG5cbnJldHVybiBhd2FpdCBmZXRjaChgaHR0cHM6Ly93d3cuYWxwaGF2YW50YWdlLmNvL3F1ZXJ5P2Z1bmN0aW9uPVRJTUVfU0VSSUVTX01PTlRITFkmc3ltYm9sPSR7aW52VmVoaWNsZX0mYXBpa2V5PU1LSzBLMDJXMUo3OUE3VUlgKVxuLnRoZW4ocmVzID0+IHtcbiAgcmV0dXJuIHJlcy5qc29uKCk7XG59KVxuLnRoZW4oanNvbiA9PiB7XG4gIGNvbnNvbGUubG9nKGpzb24pO1xuICBjb25zdCBzdGFydFByaWNlID0ganNvbltcIk1vbnRobHkgVGltZSBTZXJpZXNcIl1bYCR7c3RhcnREYXRlfS0wMS0zMWBdW1wiMS4gb3BlblwiXVxuICBjb25zdCBlbmRQcmljZSA9IGpzb25bXCJNb250aGx5IFRpbWUgU2VyaWVzXCJdW2Ake3N0YXJ0RGF0ZSArIGR1cmF0aW9ufS0xMi0zMWBdW1wiMS4gb3BlblwiXVxuICBjb25zdCBzdGFydFByaWNlSW50ID0gcGFyc2VGbG9hdChzdGFydFByaWNlKVxuICBjb25zdCBlbmRQcmljZUludCA9IHBhcnNlRmxvYXQoZW5kUHJpY2UpXG4gIGNvbnN0IHZlR3Jvd3RoID0gKGVuZFByaWNlSW50L3N0YXJ0UHJpY2VJbnQpXG4gIHJldHVybiB2ZUdyb3d0aFxufSk7XG5cbn07XG5cblxuXG4iXSwibmFtZXMiOlsiY2FsY3VsYXRlWWllbGQiLCJpbnZBbW91bnQiLCJzdGFydERhdGUiLCJkdXJhdGlvbiIsImludlZlaGljbGUiLCJncm93dGgiLCJnZXRHcm93dGgiLCJ0b3RhbFlpZWxkIiwiY29uc29sZSIsImxvZyIsImZldGNoZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJUZXh0IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInN0YXJ0UHJpY2UiLCJlbmRQcmljZSIsInN0YXJ0UHJpY2VJbnQiLCJwYXJzZUZsb2F0IiwiZW5kUHJpY2VJbnQiLCJ2ZUdyb3d0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/vehicleModule.js\n");

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