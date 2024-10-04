"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/speakers/[id]";
exports.ids = ["pages/api/speakers/[id]"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(api)/./pages/api/speakers/[id].js":
/*!************************************!*\
  !*** ./pages/api/speakers/[id].js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ userHandler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst { promisify  } = __webpack_require__(/*! util */ \"util\");\nconst writeFile = promisify((fs__WEBPACK_IMPORTED_MODULE_1___default().writeFile));\nconst readFile = promisify((fs__WEBPACK_IMPORTED_MODULE_1___default().readFile));\nconst delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));\nasync function userHandler(req, res) {\n    const id = parseInt(req?.query?.id);\n    const method = req?.method;\n    const recordFromBody = req?.body;\n    const jsonFile = path__WEBPACK_IMPORTED_MODULE_0___default().resolve(\"./\", \"db.json\");\n    async function getSpeakersData() {\n        const readFileData = await readFile(jsonFile);\n        return JSON.parse(readFileData).speakers;\n    }\n    switch(method){\n        case \"GET\":\n            const speakers = await getSpeakersData();\n            const speaker = speakers.find((rec)=>rec.id === id);\n            if (speaker) {\n                res.status(200).json(speaker);\n            } else {\n                res.status(404).send(\"speaker not found\");\n            }\n            //speaker ? res.status(200).json(speaker) : res.status(404);\n            // Get data from your database\n            //res.status(200).json({ id, name: `User ${id}` });\n            console.log(`GET /api/speakers/${id} status: 200`);\n            break;\n        case \"PUT\":\n            try {\n                await delay(1000);\n                // res.status(404).json(recordFromBody);\n                // return;\n                const speakers1 = await getSpeakersData();\n                const newSpeakersArray = speakers1.map(function(rec) {\n                    return rec.id === id ? recordFromBody : rec;\n                });\n                writeFile(jsonFile, JSON.stringify({\n                    speakers: newSpeakersArray\n                }, null, 2));\n                res.status(200).json(recordFromBody);\n                console.log(`PUT /api/speakers/${id} status: 200`);\n            } catch (e) {\n                console.log(\"/api/speakers PUT error:\", e);\n            }\n            break;\n        case \"POST\":\n            try {\n                await delay(1000);\n                // res.status(404).json(recordFromBody);\n                // return;\n                const speakers2 = await getSpeakersData();\n                const newSpeakersArray1 = [\n                    recordFromBody,\n                    ...speakers2.map(function(rec) {\n                        return rec.id === id ? recordFromBody : rec;\n                    }), \n                ];\n                writeFile(jsonFile, JSON.stringify({\n                    speakers: newSpeakersArray1\n                }, null, 2));\n                res.status(200).json(recordFromBody);\n                console.log(`POST /api/speakers/${id} status: 200`);\n            } catch (e1) {\n                console.log(\"/api/speakers POST error:\", e1);\n            }\n            break;\n        case \"DELETE\":\n            try {\n                await delay(1000);\n                // res.status(404).json(recordFromBody);\n                // return;\n                const speakers3 = await getSpeakersData();\n                const newSpeakersArray2 = speakers3.filter(function(rec) {\n                    return rec.id != id;\n                });\n                writeFile(jsonFile, JSON.stringify({\n                    speakers: newSpeakersArray2\n                }, null, 2));\n                res.status(200).json(recordFromBody);\n                console.log(`DELETE /api/speakers/${id} status: 200`);\n            } catch (e2) {\n                console.log(\"/api/speakers DELETE error:\", e2);\n            }\n            break;\n        default:\n            res.setHeader(\"Allow\", [\n                \"GET\",\n                \"PUT\",\n                \"POST\",\n                \"DELETE\"\n            ]);\n            res.status(405).end(`Method ${method} Not Allowed`);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsU0FBVVYsR0FBRyxFQUFFO29CQUN0RCxPQUFPQSxHQUFHLENBQUNkLEVBQUUsSUFBSUEsRUFBRSxDQUFDO2dCQUN0QixDQUFDLENBQUM7Z0JBQ0ZWLFNBQVMsQ0FDUGdCLFFBQVEsRUFDUkcsSUFBSSxDQUFDYSxTQUFTLENBQ1o7b0JBQ0VYLFFBQVEsRUFBRVMsaUJBQWdCO2lCQUMzQixFQUNELElBQUksRUFDSixDQUFDLENBQ0YsQ0FDRixDQUFDO2dCQUNGckIsR0FBRyxDQUFDZ0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNaLGNBQWMsQ0FBQyxDQUFDO2dCQUNyQ2MsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQyxxQkFBcUIsRUFBRW5CLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ3hELEVBQUUsT0FBT3VCLEVBQUMsRUFBRTtnQkFDVkwsT0FBTyxDQUFDQyxHQUFHLENBQUMsNkJBQTZCLEVBQUVJLEVBQUMsQ0FBQyxDQUFDO1lBQ2hELENBQUM7WUFDRCxNQUFNO1FBRVI7WUFDRXhCLEdBQUcsQ0FBQzBCLFNBQVMsQ0FBQyxPQUFPLEVBQUU7Z0JBQUMsS0FBSztnQkFBRSxLQUFLO2dCQUFFLE1BQU07Z0JBQUUsUUFBUTthQUFDLENBQUMsQ0FBQztZQUN6RDFCLEdBQUcsQ0FBQ2dCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ1csR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFdkIsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7S0FDdkQ7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtaW4tcmVhY3QtMTgtcGx1cmFsc2lnaHQtY291cnNlLy4vcGFnZXMvYXBpL3NwZWFrZXJzL1tpZF0uanM/ODYxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuXG5jb25zdCB7IHByb21pc2lmeSB9ID0gcmVxdWlyZShcInV0aWxcIik7XG5cbmNvbnN0IHdyaXRlRmlsZSA9IHByb21pc2lmeShmcy53cml0ZUZpbGUpO1xuY29uc3QgcmVhZEZpbGUgPSBwcm9taXNpZnkoZnMucmVhZEZpbGUpO1xuY29uc3QgZGVsYXkgPSAobXMpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHVzZXJIYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IGlkID0gcGFyc2VJbnQocmVxPy5xdWVyeT8uaWQpO1xuICBjb25zdCBtZXRob2QgPSByZXE/Lm1ldGhvZDtcbiAgY29uc3QgcmVjb3JkRnJvbUJvZHkgPSByZXE/LmJvZHk7XG4gIGNvbnN0IGpzb25GaWxlID0gcGF0aC5yZXNvbHZlKFwiLi9cIiwgXCJkYi5qc29uXCIpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFNwZWFrZXJzRGF0YSgpIHtcbiAgICBjb25zdCByZWFkRmlsZURhdGEgPSBhd2FpdCByZWFkRmlsZShqc29uRmlsZSk7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UocmVhZEZpbGVEYXRhKS5zcGVha2VycztcbiAgfVxuXG4gIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgY2FzZSBcIkdFVFwiOlxuICAgICAgY29uc3Qgc3BlYWtlcnMgPSBhd2FpdCBnZXRTcGVha2Vyc0RhdGEoKTtcbiAgICAgIGNvbnN0IHNwZWFrZXIgPSBzcGVha2Vycy5maW5kKChyZWMpID0+IHJlYy5pZCA9PT0gaWQpO1xuICAgICAgaWYgKHNwZWFrZXIpIHtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oc3BlYWtlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXMuc3RhdHVzKDQwNCkuc2VuZChcInNwZWFrZXIgbm90IGZvdW5kXCIpO1xuICAgICAgfVxuICAgICAgLy9zcGVha2VyID8gcmVzLnN0YXR1cygyMDApLmpzb24oc3BlYWtlcikgOiByZXMuc3RhdHVzKDQwNCk7XG5cbiAgICAgIC8vIEdldCBkYXRhIGZyb20geW91ciBkYXRhYmFzZVxuICAgICAgLy9yZXMuc3RhdHVzKDIwMCkuanNvbih7IGlkLCBuYW1lOiBgVXNlciAke2lkfWAgfSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKGBHRVQgL2FwaS9zcGVha2Vycy8ke2lkfSBzdGF0dXM6IDIwMGApO1xuXG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUFVUXCI6XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBkZWxheSgxMDAwKTtcbiAgICAgICAgLy8gcmVzLnN0YXR1cyg0MDQpLmpzb24ocmVjb3JkRnJvbUJvZHkpO1xuICAgICAgICAvLyByZXR1cm47XG5cbiAgICAgICAgY29uc3Qgc3BlYWtlcnMgPSBhd2FpdCBnZXRTcGVha2Vyc0RhdGEoKTtcbiAgICAgICAgY29uc3QgbmV3U3BlYWtlcnNBcnJheSA9IHNwZWFrZXJzLm1hcChmdW5jdGlvbiAocmVjKSB7XG4gICAgICAgICAgcmV0dXJuIHJlYy5pZCA9PT0gaWQgPyByZWNvcmRGcm9tQm9keSA6IHJlYztcbiAgICAgICAgfSk7XG4gICAgICAgIHdyaXRlRmlsZShcbiAgICAgICAgICBqc29uRmlsZSxcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3BlYWtlcnM6IG5ld1NwZWFrZXJzQXJyYXksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlY29yZEZyb21Cb2R5KTtcbiAgICAgICAgY29uc29sZS5sb2coYFBVVCAvYXBpL3NwZWFrZXJzLyR7aWR9IHN0YXR1czogMjAwYCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiL2FwaS9zcGVha2VycyBQVVQgZXJyb3I6XCIsIGUpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFwiUE9TVFwiOlxuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZGVsYXkoMTAwMCk7XG4gICAgICAgIC8vIHJlcy5zdGF0dXMoNDA0KS5qc29uKHJlY29yZEZyb21Cb2R5KTtcbiAgICAgICAgLy8gcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHNwZWFrZXJzID0gYXdhaXQgZ2V0U3BlYWtlcnNEYXRhKCk7XG4gICAgICAgIGNvbnN0IG5ld1NwZWFrZXJzQXJyYXkgPSBbXG4gICAgICAgICAgcmVjb3JkRnJvbUJvZHksXG4gICAgICAgICAgLi4uc3BlYWtlcnMubWFwKGZ1bmN0aW9uIChyZWMpIHtcbiAgICAgICAgICAgIHJldHVybiByZWMuaWQgPT09IGlkID8gcmVjb3JkRnJvbUJvZHkgOiByZWM7XG4gICAgICAgICAgfSksXG4gICAgICAgIF07XG4gICAgICAgIHdyaXRlRmlsZShcbiAgICAgICAgICBqc29uRmlsZSxcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3BlYWtlcnM6IG5ld1NwZWFrZXJzQXJyYXksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlY29yZEZyb21Cb2R5KTtcbiAgICAgICAgY29uc29sZS5sb2coYFBPU1QgL2FwaS9zcGVha2Vycy8ke2lkfSBzdGF0dXM6IDIwMGApO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIi9hcGkvc3BlYWtlcnMgUE9TVCBlcnJvcjpcIiwgZSk7XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgXCJERUxFVEVcIjpcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGRlbGF5KDEwMDApO1xuICAgICAgICAvLyByZXMuc3RhdHVzKDQwNCkuanNvbihyZWNvcmRGcm9tQm9keSk7XG4gICAgICAgIC8vIHJldHVybjtcblxuICAgICAgICBjb25zdCBzcGVha2VycyA9IGF3YWl0IGdldFNwZWFrZXJzRGF0YSgpO1xuICAgICAgICBjb25zdCBuZXdTcGVha2Vyc0FycmF5ID0gc3BlYWtlcnMuZmlsdGVyKGZ1bmN0aW9uIChyZWMpIHtcbiAgICAgICAgICByZXR1cm4gcmVjLmlkICE9IGlkO1xuICAgICAgICB9KTtcbiAgICAgICAgd3JpdGVGaWxlKFxuICAgICAgICAgIGpzb25GaWxlLFxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzcGVha2VyczogbmV3U3BlYWtlcnNBcnJheSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVjb3JkRnJvbUJvZHkpO1xuICAgICAgICBjb25zb2xlLmxvZyhgREVMRVRFIC9hcGkvc3BlYWtlcnMvJHtpZH0gc3RhdHVzOiAyMDBgKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCIvYXBpL3NwZWFrZXJzIERFTEVURSBlcnJvcjpcIiwgZSk7XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXMuc2V0SGVhZGVyKFwiQWxsb3dcIiwgW1wiR0VUXCIsIFwiUFVUXCIsIFwiUE9TVFwiLCBcIkRFTEVURVwiXSk7XG4gICAgICByZXMuc3RhdHVzKDQwNSkuZW5kKGBNZXRob2QgJHttZXRob2R9IE5vdCBBbGxvd2VkYCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJwYXRoIiwiZnMiLCJwcm9taXNpZnkiLCJyZXF1aXJlIiwid3JpdGVGaWxlIiwicmVhZEZpbGUiLCJkZWxheSIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwidXNlckhhbmRsZXIiLCJyZXEiLCJyZXMiLCJpZCIsInBhcnNlSW50IiwicXVlcnkiLCJtZXRob2QiLCJyZWNvcmRGcm9tQm9keSIsImJvZHkiLCJqc29uRmlsZSIsImdldFNwZWFrZXJzRGF0YSIsInJlYWRGaWxlRGF0YSIsIkpTT04iLCJwYXJzZSIsInNwZWFrZXJzIiwic3BlYWtlciIsImZpbmQiLCJyZWMiLCJzdGF0dXMiLCJqc29uIiwic2VuZCIsImNvbnNvbGUiLCJsb2ciLCJuZXdTcGVha2Vyc0FycmF5IiwibWFwIiwic3RyaW5naWZ5IiwiZSIsImZpbHRlciIsInNldEhlYWRlciIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/speakers/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/speakers/[id].js"));
module.exports = __webpack_exports__;

})();