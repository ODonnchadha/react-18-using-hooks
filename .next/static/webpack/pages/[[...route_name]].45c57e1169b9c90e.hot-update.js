"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[[...route_name]]",{

/***/ "./src/components/speakers/SpeakerList.js":
/*!************************************************!*\
  !*** ./src/components/speakers/SpeakerList.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SpeakerLine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpeakerLine */ \"./src/components/speakers/SpeakerLine.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nfunction List(param) {\n    var speakers = param.speakers;\n    var _this = this;\n    var toggleFavoriteSpeaker = function toggleFavoriteSpeaker(speakerRec) {};\n    var updatingId = 0; // 1269;\n    var isPending = false;\n    debugger;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"btn-toolbar\",\n                    role: \"toolbar\",\n                    \"aria-label\": \"Speaker toolbar filter\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"toolbar-trigger mb-3 flex-grow-04\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"toolbar-search w-100\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    value: \"\",\n                                    onChange: function(event) {},\n                                    type: \"text\",\n                                    className: \"form-control\",\n                                    placeholder: \"Highlight Names\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\ODonnchadha\\\\react-18-using-hooks\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                                    lineNumber: 21,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\ODonnchadha\\\\react-18-using-hooks\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                                lineNumber: 20,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"spinner-height\",\n                                children: isPending && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"spinner-border text-dark\",\n                                    role: \"status\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\ODonnchadha\\\\react-18-using-hooks\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\ODonnchadha\\\\react-18-using-hooks\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\ODonnchadha\\\\react-18-using-hooks\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\ODonnchadha\\\\react-18-using-hooks\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\ODonnchadha\\\\react-18-using-hooks\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row g-3\",\n                children: speakers.map(function(speakerRec) {\n                    var highlight = false;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerLine__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        speakerRec: speakerRec,\n                        updating: updatingId === speakerRec.id ? updatingId : 0,\n                        toggleFavoriteSpeaker: function() {\n                            return toggleFavoriteSpeaker(speakerRec);\n                        },\n                        highlight: highlight\n                    }, speakerRec.id, false, {\n                        fileName: \"C:\\\\ODonnchadha\\\\react-18-using-hooks\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\ODonnchadha\\\\react-18-using-hooks\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\ODonnchadha\\\\react-18-using-hooks\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_c = List;\n// After component renders: (1) Call REST speakers URL. (2) Call setSpeakers to load speakers.\nvar SpeakerList = function() {\n    _s();\n    var darkTheme = false;\n    // An array of speakers.\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), speakers = ref[0], setSpeakers = ref[1];\n    // Have our speakers been loaded into component state?\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref1[0], setLoading = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        function getDataAsync() {\n            return _getDataAsync.apply(this, arguments);\n        }\n        function _getDataAsync() {\n            _getDataAsync = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n                var results;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            setLoading(true);\n                            return [\n                                4,\n                                axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"/api/speakers\")\n                            ];\n                        case 1:\n                            results = _state.sent();\n                            // When local component state updates, this will cause the component to re-render.\n                            setSpeakers(results.data);\n                            setLoading(false);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return _getDataAsync.apply(this, arguments);\n        }\n        getDataAsync();\n    }, []);\n    // useEffect will not run again doe to this empty array.\n    // It's function only runs once after the component renders.\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\ODonnchadha\\\\react-18-using-hooks\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n        lineNumber: 75,\n        columnNumber: 23\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: darkTheme ? \"theme-dark\" : \"theme-light\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(List, {\n            speakers: speakers\n        }, void 0, false, {\n            fileName: \"C:\\\\ODonnchadha\\\\react-18-using-hooks\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n            lineNumber: 78,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\ODonnchadha\\\\react-18-using-hooks\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, _this);\n};\n_s(SpeakerList, \"3XG0QAqH/uLX/8072lok9QRLMk0=\");\n_c1 = SpeakerList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakerList);\nvar _c, _c1;\n$RefreshReg$(_c, \"List\");\n$RefreshReg$(_c1, \"SpeakerList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zcGVha2Vycy9TcGVha2VyTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7QUFBNEM7QUFDSjtBQUNkO0FBRTFCLFNBQVNJLElBQUksQ0FBQyxLQUFVLEVBQUU7UUFBWixRQUFTLEdBQVQsS0FBVSxDQUFUQyxRQUFROztRQUlaQyxxQkFBcUIsR0FBOUIsU0FBU0EscUJBQXFCLENBQUNDLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFIN0MsSUFBTUMsVUFBVSxHQUFHLENBQUMsRUFBRSxRQUFRO0lBQzlCLElBQU1DLFNBQVMsR0FBRyxLQUFLO0lBQ3ZCLFFBQVM7SUFHVCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsV0FBVzs7MEJBQ3hCLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsVUFBVTswQkFDdkIsNEVBQUNELEtBQUc7b0JBQ0ZDLFNBQVMsRUFBQyxhQUFhO29CQUN2QkMsSUFBSSxFQUFDLFNBQVM7b0JBQ2RDLFlBQVUsRUFBQyx3QkFBd0I7OEJBRW5DLDRFQUFDSCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsbUNBQW1DOzswQ0FDaEQsOERBQUNELEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyxzQkFBc0I7MENBQ25DLDRFQUFDRyxPQUFLO29DQUNKQyxLQUFLLEVBQUMsRUFBRTtvQ0FDUkMsUUFBUSxFQUFFLFNBQUNDLEtBQUssRUFBSyxDQUFDLENBQUM7b0NBQ3ZCQyxJQUFJLEVBQUMsTUFBTTtvQ0FDWFAsU0FBUyxFQUFDLGNBQWM7b0NBQ3hCUSxXQUFXLEVBQUMsaUJBQWlCOzs7Ozt3Q0FDN0I7Ozs7O29DQUNFOzBDQUNOLDhEQUFDVCxLQUFHO2dDQUFDQyxTQUFTLEVBQUMsZ0JBQWdCOzBDQUM1QkYsU0FBUyxrQkFDUiw4REFBQ1csR0FBQztvQ0FBQ1QsU0FBUyxFQUFDLDBCQUEwQjtvQ0FBQ0MsSUFBSSxFQUFDLFFBQVE7Ozs7O3dDQUFHOzs7OztvQ0FFdEQ7Ozs7Ozs0QkFDRjs7Ozs7d0JBQ0Y7Ozs7O29CQUNGOzBCQUVOLDhEQUFDRixLQUFHO2dCQUFDQyxTQUFTLEVBQUMsU0FBUzswQkFDckJOLFFBQVEsQ0FBQ2dCLEdBQUcsQ0FBQ2QsU0FBQUEsVUFBVSxFQUFJO29CQUMxQixJQUFNZSxTQUFTLEdBQUcsS0FBSztvQkFDdkIscUJBQ0UsOERBQUNwQixvREFBVzt3QkFFVkssVUFBVSxFQUFFQSxVQUFVO3dCQUN0QmdCLFFBQVEsRUFBRWYsVUFBVSxLQUFLRCxVQUFVLENBQUNpQixFQUFFLEdBQUdoQixVQUFVLEdBQUcsQ0FBQzt3QkFDdkRGLHFCQUFxQixFQUFFO21DQUFNQSxxQkFBcUIsQ0FBQ0MsVUFBVSxDQUFDO3lCQUFBO3dCQUM5RGUsU0FBUyxFQUFFQSxTQUFTO3VCQUpmZixVQUFVLENBQUNpQixFQUFFOzs7OzZCQUtsQixDQUNGO2dCQUNKLENBQUMsQ0FBQzs7Ozs7b0JBQ0U7Ozs7OztZQUNGLENBQ047QUFDSixDQUFDO0FBakRRcEIsS0FBQUEsSUFBSTtBQW1EYiw4RkFBOEY7QUFDOUYsSUFBTXFCLFdBQVcsR0FBRyxXQUFNOztJQUN4QixJQUFNQyxTQUFTLEdBQUcsS0FBSztJQUN2Qix3QkFBd0I7SUFDeEIsSUFBZ0N6QixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQXJDSSxRQUFRLEdBQWlCSixHQUFZLEdBQTdCLEVBQUUwQixXQUFXLEdBQUkxQixHQUFZLEdBQWhCO0lBQzVCLHNEQUFzRDtJQUN0RCxJQUE4QkEsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQUFyQzJCLE9BQU8sR0FBZ0IzQixJQUFjLEdBQTlCLEVBQUU0QixVQUFVLEdBQUk1QixJQUFjLEdBQWxCO0lBQzFCRCxnREFBUyxDQUFDLFdBQUs7aUJBQ0U4QixZQUFZO21CQUFaQSxhQUFZOztpQkFBWkEsYUFBWTtZQUFaQSxhQUFZLEdBQTNCLCtGQUE4QjtvQkFFdEJDLE9BQU87Ozs7NEJBRGJGLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDRDs7Z0NBQU0xQixpREFBUyxDQUFDLGVBQWUsQ0FBQzs4QkFBQTs7NEJBQTFDNEIsT0FBTyxHQUFHLGFBQWdDOzRCQUNoRCxrRkFBa0Y7NEJBQ2xGSixXQUFXLENBQUNJLE9BQU8sQ0FBQ0UsSUFBSSxDQUFDLENBQUM7NEJBQzFCSixVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7OztZQUNwQixDQUFDO21CQU5jQyxhQUFZOztRQU8zQkEsWUFBWSxFQUFFLENBQUM7SUFDakIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1Asd0RBQXdEO0lBQ3hELDREQUE0RDtJQUM1RCxJQUFJRixPQUFPLEVBQUUscUJBQU8sOERBQUNsQixLQUFHO2tCQUFDLFlBQVU7Ozs7O2FBQU0sQ0FBQztJQUMxQyxxQkFDRSw4REFBQ0EsS0FBRztRQUFDQyxTQUFTLEVBQUVlLFNBQVMsR0FBRyxZQUFZLEdBQUcsYUFBYTtrQkFDdEQsNEVBQUN0QixJQUFJO1lBQUNDLFFBQVEsRUFBRUEsUUFBUTs7Ozs7aUJBQUk7Ozs7O2FBQ3hCLENBQ047QUFDSixDQUFDO0dBeEJLb0IsV0FBVztBQUFYQSxNQUFBQSxXQUFXO0FBMEJqQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NwZWFrZXJzL1NwZWFrZXJMaXN0LmpzP2YzMDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNwZWFrZXJMaW5lIGZyb20gXCIuL1NwZWFrZXJMaW5lXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmZ1bmN0aW9uIExpc3Qoe3NwZWFrZXJzfSkge1xuICBjb25zdCB1cGRhdGluZ0lkID0gMDsgLy8gMTI2OTtcbiAgY29uc3QgaXNQZW5kaW5nID0gZmFsc2U7XG4gIGRlYnVnZ2VyO1xuICBmdW5jdGlvbiB0b2dnbGVGYXZvcml0ZVNwZWFrZXIoc3BlYWtlclJlYykge31cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci0wXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4tdG9vbGJhclwiXG4gICAgICAgICAgcm9sZT1cInRvb2xiYXJcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJTcGVha2VyIHRvb2xiYXIgZmlsdGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbGJhci10cmlnZ2VyIG1iLTMgZmxleC1ncm93LTA0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2xiYXItc2VhcmNoIHctMTAwXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHZhbHVlPVwiXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7fX1cbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkhpZ2hsaWdodCBOYW1lc1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lci1oZWlnaHRcIj5cbiAgICAgICAgICAgICAge2lzUGVuZGluZyAmJiAoXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwic3Bpbm5lci1ib3JkZXIgdGV4dC1kYXJrXCIgcm9sZT1cInN0YXR1c1wiIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZy0zXCI+XG4gICAgICAgIHtzcGVha2Vycy5tYXAoc3BlYWtlclJlYyA9PiB7XG4gICAgICAgICAgY29uc3QgaGlnaGxpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTcGVha2VyTGluZVxuICAgICAgICAgICAgICBrZXk9e3NwZWFrZXJSZWMuaWR9XG4gICAgICAgICAgICAgIHNwZWFrZXJSZWM9e3NwZWFrZXJSZWN9XG4gICAgICAgICAgICAgIHVwZGF0aW5nPXt1cGRhdGluZ0lkID09PSBzcGVha2VyUmVjLmlkID8gdXBkYXRpbmdJZCA6IDB9XG4gICAgICAgICAgICAgIHRvZ2dsZUZhdm9yaXRlU3BlYWtlcj17KCkgPT4gdG9nZ2xlRmF2b3JpdGVTcGVha2VyKHNwZWFrZXJSZWMpfVxuICAgICAgICAgICAgICBoaWdobGlnaHQ9e2hpZ2hsaWdodH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuLy8gQWZ0ZXIgY29tcG9uZW50IHJlbmRlcnM6ICgxKSBDYWxsIFJFU1Qgc3BlYWtlcnMgVVJMLiAoMikgQ2FsbCBzZXRTcGVha2VycyB0byBsb2FkIHNwZWFrZXJzLlxuY29uc3QgU3BlYWtlckxpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IGRhcmtUaGVtZSA9IGZhbHNlO1xuICAvLyBBbiBhcnJheSBvZiBzcGVha2Vycy5cbiAgY29uc3QgW3NwZWFrZXJzLCBzZXRTcGVha2Vyc10gPSB1c2VTdGF0ZShbXSk7XG4gIC8vIEhhdmUgb3VyIHNwZWFrZXJzIGJlZW4gbG9hZGVkIGludG8gY29tcG9uZW50IHN0YXRlP1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgdXNlRWZmZWN0KCgpPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldERhdGFBc3luYygpIHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9zcGVha2Vyc1wiKTtcbiAgICAgIC8vIFdoZW4gbG9jYWwgY29tcG9uZW50IHN0YXRlIHVwZGF0ZXMsIHRoaXMgd2lsbCBjYXVzZSB0aGUgY29tcG9uZW50IHRvIHJlLXJlbmRlci5cbiAgICAgIHNldFNwZWFrZXJzKHJlc3VsdHMuZGF0YSk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gICAgZ2V0RGF0YUFzeW5jKCk7XG4gIH0sIFtdKTtcbiAgLy8gdXNlRWZmZWN0IHdpbGwgbm90IHJ1biBhZ2FpbiBkb2UgdG8gdGhpcyBlbXB0eSBhcnJheS5cbiAgLy8gSXQncyBmdW5jdGlvbiBvbmx5IHJ1bnMgb25jZSBhZnRlciB0aGUgY29tcG9uZW50IHJlbmRlcnMuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtkYXJrVGhlbWUgPyBcInRoZW1lLWRhcmtcIiA6IFwidGhlbWUtbGlnaHRcIn0+XG4gICAgICA8TGlzdCBzcGVha2Vycz17c3BlYWtlcnN9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyTGlzdDtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNwZWFrZXJMaW5lIiwiYXhpb3MiLCJMaXN0Iiwic3BlYWtlcnMiLCJ0b2dnbGVGYXZvcml0ZVNwZWFrZXIiLCJzcGVha2VyUmVjIiwidXBkYXRpbmdJZCIsImlzUGVuZGluZyIsImRpdiIsImNsYXNzTmFtZSIsInJvbGUiLCJhcmlhLWxhYmVsIiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJpIiwibWFwIiwiaGlnaGxpZ2h0IiwidXBkYXRpbmciLCJpZCIsIlNwZWFrZXJMaXN0IiwiZGFya1RoZW1lIiwic2V0U3BlYWtlcnMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImdldERhdGFBc3luYyIsInJlc3VsdHMiLCJnZXQiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/speakers/SpeakerList.js\n"));

/***/ })

});