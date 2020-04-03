var train =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Config.js":
/*!***********************!*\
  !*** ./src/Config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  game: {\n    ticksPerSecond: 1,\n    fps: 30\n  }\n};\n\n//# sourceURL=webpack://train/./src/Config.js?");

/***/ }),

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const config = __webpack_require__(/*! ./Config */ \"./src/Config.js\");\nconst cfg = config.game;\n\n\nclass Game {\n  constructor(platformIds) {    \n  }\n  \n  start() {\n    \n  }\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack://train/./src/Game.js?");

/***/ }),

/***/ "./src/GameUi.js":
/*!***********************!*\
  !*** ./src/GameUi.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const config = __webpack_require__(/*! ./Config */ \"./src/Config.js\");\nconst fps = config.game.fps;\n\nclass GameUi {\n  \n  constructor(initialState) {\n    this.playfield = document.getElementById(\"playfield\");    \n    this._lastState = JSON.stringify(initialState);    \n    this._renderingFunctions = [ ];\n  }\n\n  startRendering(game) {\n    setInterval(() => this.draw(game), 1000 / fps);\n  }\n  \n  draw(g) {\n    if (JSON.stringify(g) === this._lastState) {\n      return; // No state has changed, do we need to re-render?\n    }\n    \n    const lastStateSnapshot = JSON.parse(this._lastState);\n    for (let renderer of this._renderingFunctions) {\n      const ret = renderer(g, lastStateSnapshot)\n      if (ret === -1) { // Renderer caused an early exit\n        break;\n      }\n    }\n    \n    this._lastState = JSON.stringify(g);\n  }\n}\n\n\nmodule.exports = GameUi;\n\n//# sourceURL=webpack://train/./src/GameUi.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./Game */ \"./src/Game.js\");\nconst GameUi = __webpack_require__(/*! ./GameUi */ \"./src/GameUi.js\");\nlet game, ui;\n\nasync function startGame(useRealData = false) {\n  game = new Game();\n  ui = new GameUi(game);  \n  game.start();\n  ui.startRendering(game);\n  \n  // Temp\n  return game;\n}\n\nmodule.exports = { startGame };\n\n//# sourceURL=webpack://train/./src/script.js?");

/***/ })

/******/ });