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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SpeakerLine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpeakerLine */ \"./src/components/speakers/SpeakerLine.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nfunction List(param) {\n    var speakers = param.speakers;\n    var _this = this;\n    var toggleFavoriteSpeaker = function toggleFavoriteSpeaker(speakerRec) {};\n    var updatingId = 0; // 1269;\n    var isPending = false;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"btn-toolbar\",\n                    role: \"toolbar\",\n                    \"aria-label\": \"Speaker toolbar filter\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"toolbar-trigger mb-3 flex-grow-04\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"toolbar-search w-100\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    value: \"\",\n                                    onChange: function(event) {},\n                                    type: \"text\",\n                                    className: \"form-control\",\n                                    placeholder: \"Highlight Names\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\ODonnchadha\\\\react-18-using-hooks\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                                    lineNumber: 20,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\ODonnchadha\\\\react-18-using-hooks\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                                lineNumber: 19,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"spinner-height\",\n                                children: isPending && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"spinner-border text-dark\",\n                                    role: \"status\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\ODonnchadha\\\\react-18-using-hooks\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\ODonnchadha\\\\react-18-using-hooks\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\ODonnchadha\\\\react-18-using-hooks\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\ODonnchadha\\\\react-18-using-hooks\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\ODonnchadha\\\\react-18-using-hooks\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row g-3\",\n                children: speakers.map(function(s) {\n                    var highlight = false;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerLine__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        speakerRec: s,\n                        updating: updatingId === s.id ? updatingId : 0,\n                        toggleFavoriteSpeaker: function() {\n                            return toggleFavoriteSpeaker(s);\n                        },\n                        highlight: highlight\n                    }, s.id, false, {\n                        fileName: \"C:\\\\ODonnchadha\\\\react-18-using-hooks\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                        lineNumber: 41,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\ODonnchadha\\\\react-18-using-hooks\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\ODonnchadha\\\\react-18-using-hooks\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_c = List;\n// After component renders: (1) Call REST speakers URL. (2) Call setSpeakers to load speakers.\nvar SpeakerList = function() {\n    _s();\n    var darkTheme = false;\n    // An array of speakers.\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), speakers = ref[0], setSpeakers = ref[1];\n    // Have our speakers been loaded into component state?\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref1[0], setLoading = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        function getDataAsync() {\n            return _getDataAsync.apply(this, arguments);\n        }\n        function _getDataAsync() {\n            _getDataAsync = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n                var results;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            setLoading(true);\n                            return [\n                                4,\n                                axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"/api/speakers\")\n                            ];\n                        case 1:\n                            results = _state.sent();\n                            // When local component state updates, this will cause the component to re-render.\n                            setSpeakers(results.data);\n                            setLoading(false);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return _getDataAsync.apply(this, arguments);\n        }\n        getDataAsync();\n    }, []);\n    // useEffect will not run again doe to this empty array.\n    // It's function only runs once after the component renders.\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\ODonnchadha\\\\react-18-using-hooks\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n        lineNumber: 74,\n        columnNumber: 23\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: darkTheme ? \"theme-dark\" : \"theme-light\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(List, {\n            speakers: speakers\n        }, void 0, false, {\n            fileName: \"C:\\\\ODonnchadha\\\\react-18-using-hooks\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n            lineNumber: 77,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\ODonnchadha\\\\react-18-using-hooks\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, _this);\n};\n_s(SpeakerList, \"3XG0QAqH/uLX/8072lok9QRLMk0=\");\n_c1 = SpeakerList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakerList);\nvar _c, _c1;\n$RefreshReg$(_c, \"List\");\n$RefreshReg$(_c1, \"SpeakerList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zcGVha2Vycy9TcGVha2VyTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7QUFBNEM7QUFDSjtBQUNkO0FBRTFCLFNBQVNJLElBQUksQ0FBQyxLQUFVLEVBQUU7UUFBWixRQUFTLEdBQVQsS0FBVSxDQUFUQyxRQUFROztRQUdaQyxxQkFBcUIsR0FBOUIsU0FBU0EscUJBQXFCLENBQUNDLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFGN0MsSUFBTUMsVUFBVSxHQUFHLENBQUMsRUFBRSxRQUFRO0lBQzlCLElBQU1DLFNBQVMsR0FBRyxLQUFLO0lBR3ZCLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxXQUFXOzswQkFDeEIsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxVQUFVOzBCQUN2Qiw0RUFBQ0QsS0FBRztvQkFDRkMsU0FBUyxFQUFDLGFBQWE7b0JBQ3ZCQyxJQUFJLEVBQUMsU0FBUztvQkFDZEMsWUFBVSxFQUFDLHdCQUF3Qjs4QkFFbkMsNEVBQUNILEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxtQ0FBbUM7OzBDQUNoRCw4REFBQ0QsS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLHNCQUFzQjswQ0FDbkMsNEVBQUNHLE9BQUs7b0NBQ0pDLEtBQUssRUFBQyxFQUFFO29DQUNSQyxRQUFRLEVBQUUsU0FBQ0MsS0FBSyxFQUFLLENBQUMsQ0FBQztvQ0FDdkJDLElBQUksRUFBQyxNQUFNO29DQUNYUCxTQUFTLEVBQUMsY0FBYztvQ0FDeEJRLFdBQVcsRUFBQyxpQkFBaUI7Ozs7O3dDQUM3Qjs7Ozs7b0NBQ0U7MENBQ04sOERBQUNULEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyxnQkFBZ0I7MENBQzVCRixTQUFTLGtCQUNSLDhEQUFDVyxHQUFDO29DQUFDVCxTQUFTLEVBQUMsMEJBQTBCO29DQUFDQyxJQUFJLEVBQUMsUUFBUTs7Ozs7d0NBQUc7Ozs7O29DQUV0RDs7Ozs7OzRCQUNGOzs7Ozt3QkFDRjs7Ozs7b0JBQ0Y7MEJBRU4sOERBQUNGLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxTQUFTOzBCQUNyQk4sUUFBUSxDQUFDZ0IsR0FBRyxDQUFDQyxTQUFBQSxDQUFDLEVBQUk7b0JBQ2pCLElBQU1DLFNBQVMsR0FBRyxLQUFLO29CQUN2QixxQkFDRSw4REFBQ3JCLG9EQUFXO3dCQUVWSyxVQUFVLEVBQUVlLENBQUM7d0JBQ2JFLFFBQVEsRUFBRWhCLFVBQVUsS0FBS2MsQ0FBQyxDQUFDRyxFQUFFLEdBQUdqQixVQUFVLEdBQUcsQ0FBQzt3QkFDOUNGLHFCQUFxQixFQUFFO21DQUFNQSxxQkFBcUIsQ0FBQ2dCLENBQUMsQ0FBQzt5QkFBQTt3QkFDckRDLFNBQVMsRUFBRUEsU0FBUzt1QkFKZkQsQ0FBQyxDQUFDRyxFQUFFOzs7OzZCQUtULENBQ0Y7Z0JBQ0osQ0FBQyxDQUFDOzs7OztvQkFDRTs7Ozs7O1lBQ0YsQ0FDTjtBQUNKLENBQUM7QUFoRFFyQixLQUFBQSxJQUFJO0FBa0RiLDhGQUE4RjtBQUM5RixJQUFNc0IsV0FBVyxHQUFHLFdBQU07O0lBQ3hCLElBQU1DLFNBQVMsR0FBRyxLQUFLO0lBQ3ZCLHdCQUF3QjtJQUN4QixJQUFnQzFCLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBckNJLFFBQVEsR0FBaUJKLEdBQVksR0FBN0IsRUFBRTJCLFdBQVcsR0FBSTNCLEdBQVksR0FBaEI7SUFDNUIsc0RBQXNEO0lBQ3RELElBQThCQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBQXJDNEIsT0FBTyxHQUFnQjVCLElBQWMsR0FBOUIsRUFBRTZCLFVBQVUsR0FBSTdCLElBQWMsR0FBbEI7SUFDMUJELGdEQUFTLENBQUMsV0FBSztpQkFDRStCLFlBQVk7bUJBQVpBLGFBQVk7O2lCQUFaQSxhQUFZO1lBQVpBLGFBQVksR0FBM0IsK0ZBQThCO29CQUV0QkMsT0FBTzs7Ozs0QkFEYkYsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDOzRCQUNEOztnQ0FBTTNCLGlEQUFTLENBQUMsZUFBZSxDQUFDOzhCQUFBOzs0QkFBMUM2QixPQUFPLEdBQUcsYUFBZ0M7NEJBQ2hELGtGQUFrRjs0QkFDbEZKLFdBQVcsQ0FBQ0ksT0FBTyxDQUFDRSxJQUFJLENBQUMsQ0FBQzs0QkFDMUJKLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7O1lBQ3BCLENBQUM7bUJBTmNDLGFBQVk7O1FBTzNCQSxZQUFZLEVBQUUsQ0FBQztJQUNqQixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDUCx3REFBd0Q7SUFDeEQsNERBQTREO0lBQzVELElBQUlGLE9BQU8sRUFBRSxxQkFBTyw4REFBQ25CLEtBQUc7a0JBQUMsWUFBVTs7Ozs7YUFBTSxDQUFDO0lBQzFDLHFCQUNFLDhEQUFDQSxLQUFHO1FBQUNDLFNBQVMsRUFBRWdCLFNBQVMsR0FBRyxZQUFZLEdBQUcsYUFBYTtrQkFDdEQsNEVBQUN2QixJQUFJO1lBQUNDLFFBQVEsRUFBRUEsUUFBUTs7Ozs7aUJBQUk7Ozs7O2FBQ3hCLENBQ047QUFDSixDQUFDO0dBeEJLcUIsV0FBVztBQUFYQSxNQUFBQSxXQUFXO0FBMEJqQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NwZWFrZXJzL1NwZWFrZXJMaXN0LmpzP2YzMDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNwZWFrZXJMaW5lIGZyb20gXCIuL1NwZWFrZXJMaW5lXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmZ1bmN0aW9uIExpc3Qoe3NwZWFrZXJzfSkge1xuICBjb25zdCB1cGRhdGluZ0lkID0gMDsgLy8gMTI2OTtcbiAgY29uc3QgaXNQZW5kaW5nID0gZmFsc2U7XG4gIGZ1bmN0aW9uIHRvZ2dsZUZhdm9yaXRlU3BlYWtlcihzcGVha2VyUmVjKSB7fVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLTBcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi10b29sYmFyXCJcbiAgICAgICAgICByb2xlPVwidG9vbGJhclwiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlNwZWFrZXIgdG9vbGJhciBmaWx0ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sYmFyLXRyaWdnZXIgbWItMyBmbGV4LWdyb3ctMDRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbGJhci1zZWFyY2ggdy0xMDBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdmFsdWU9XCJcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHt9fVxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSGlnaGxpZ2h0IE5hbWVzXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGlubmVyLWhlaWdodFwiPlxuICAgICAgICAgICAgICB7aXNQZW5kaW5nICYmIChcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJzcGlubmVyLWJvcmRlciB0ZXh0LWRhcmtcIiByb2xlPVwic3RhdHVzXCIgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBnLTNcIj5cbiAgICAgICAge3NwZWFrZXJzLm1hcChzID0+IHtcbiAgICAgICAgICBjb25zdCBoaWdobGlnaHQgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFNwZWFrZXJMaW5lXG4gICAgICAgICAgICAgIGtleT17cy5pZH1cbiAgICAgICAgICAgICAgc3BlYWtlclJlYz17c31cbiAgICAgICAgICAgICAgdXBkYXRpbmc9e3VwZGF0aW5nSWQgPT09IHMuaWQgPyB1cGRhdGluZ0lkIDogMH1cbiAgICAgICAgICAgICAgdG9nZ2xlRmF2b3JpdGVTcGVha2VyPXsoKSA9PiB0b2dnbGVGYXZvcml0ZVNwZWFrZXIocyl9XG4gICAgICAgICAgICAgIGhpZ2hsaWdodD17aGlnaGxpZ2h0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vLyBBZnRlciBjb21wb25lbnQgcmVuZGVyczogKDEpIENhbGwgUkVTVCBzcGVha2VycyBVUkwuICgyKSBDYWxsIHNldFNwZWFrZXJzIHRvIGxvYWQgc3BlYWtlcnMuXG5jb25zdCBTcGVha2VyTGlzdCA9ICgpID0+IHtcbiAgY29uc3QgZGFya1RoZW1lID0gZmFsc2U7XG4gIC8vIEFuIGFycmF5IG9mIHNwZWFrZXJzLlxuICBjb25zdCBbc3BlYWtlcnMsIHNldFNwZWFrZXJzXSA9IHVzZVN0YXRlKFtdKTtcbiAgLy8gSGF2ZSBvdXIgc3BlYWtlcnMgYmVlbiBsb2FkZWQgaW50byBjb21wb25lbnQgc3RhdGU/XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YUFzeW5jKCkge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL3NwZWFrZXJzXCIpO1xuICAgICAgLy8gV2hlbiBsb2NhbCBjb21wb25lbnQgc3RhdGUgdXBkYXRlcywgdGhpcyB3aWxsIGNhdXNlIHRoZSBjb21wb25lbnQgdG8gcmUtcmVuZGVyLlxuICAgICAgc2V0U3BlYWtlcnMocmVzdWx0cy5kYXRhKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgICBnZXREYXRhQXN5bmMoKTtcbiAgfSwgW10pO1xuICAvLyB1c2VFZmZlY3Qgd2lsbCBub3QgcnVuIGFnYWluIGRvZSB0byB0aGlzIGVtcHR5IGFycmF5LlxuICAvLyBJdCdzIGZ1bmN0aW9uIG9ubHkgcnVucyBvbmNlIGFmdGVyIHRoZSBjb21wb25lbnQgcmVuZGVycy5cbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2RhcmtUaGVtZSA/IFwidGhlbWUtZGFya1wiIDogXCJ0aGVtZS1saWdodFwifT5cbiAgICAgIDxMaXN0IHNwZWFrZXJzPXtzcGVha2Vyc30gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJMaXN0O1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU3BlYWtlckxpbmUiLCJheGlvcyIsIkxpc3QiLCJzcGVha2VycyIsInRvZ2dsZUZhdm9yaXRlU3BlYWtlciIsInNwZWFrZXJSZWMiLCJ1cGRhdGluZ0lkIiwiaXNQZW5kaW5nIiwiZGl2IiwiY2xhc3NOYW1lIiwicm9sZSIsImFyaWEtbGFiZWwiLCJpbnB1dCIsInZhbHVlIiwib25DaGFuZ2UiLCJldmVudCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImkiLCJtYXAiLCJzIiwiaGlnaGxpZ2h0IiwidXBkYXRpbmciLCJpZCIsIlNwZWFrZXJMaXN0IiwiZGFya1RoZW1lIiwic2V0U3BlYWtlcnMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImdldERhdGFBc3luYyIsInJlc3VsdHMiLCJnZXQiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/speakers/SpeakerList.js\n"));

/***/ })

});