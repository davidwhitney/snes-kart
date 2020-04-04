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

/***/ "./src/Character.js":
/*!**************************!*\
  !*** ./src/Character.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nclass Character {\n  constructor(characterKey) {\n    this.characterKey = characterKey;\n    this.x = 0;\n    this.y = 0;  \n    this.r = 0;\n    \n    this.rotateRate = 4;\n    this.movementRate = 8;\n  }\n  \n  processKey(command) {\n    this[command]();\n  }\n  \n  up() {\n    const nextXY = this.nextSteps(0, 0, this.r);\n    this.x += (nextXY[0] * this.movementRate);\n    this.y += (nextXY[1] * this.movementRate);\n  }\n  \n  down() {    \n    const nextXY = this.nextSteps(0, 0, this.r); \n    this.x -= (nextXY[0] * this.movementRate);\n    this.y -= (nextXY[1] * this.movementRate);\n  }\n  \n  left() {\n    this.r += this.rotateRate;\n    //this.r = this.r >= 360 ? 0 : this.r;\n    //this.r = this.r <= -360 ? 0 : this.r;\n  }\n  \n  right() {\n    this.r += -this.rotateRate;\n    //this.r = this.r >= 360 ? 0 : this.r;\n    //this.r = this.r < 0 ? 359 : this.r;\n  }\n  \n  nextSteps(x, y, a) {\n    let xy = [];\n    if(45 <= a && a <= 135) {\n        xy = [1, this.cot(Math.PI*a/180)];\n    } else if(135 <= a && a <= 225) {\n        xy = [-this.tan(Math.PI*a/180), -1];\n    } else if(225 <= a && a <= 315) {\n        xy = [-1, -this.cot(Math.PI*a/180)];\n    } else {\n        xy = [this.tan(Math.PI*a/180), 1];\n    }\n    xy[0] = x+xy[0]; //Math.round(x+xy[0]);\n    xy[1] = y+xy[1]; //Math.round(y+xy[1]);\n    return xy;\n  }\n\n  cot(x) {\n      return 1/Math.tan(x);\n  }\n\n  tan(x) {\n      return Math.tan(x);\n  }\n}\n\nmodule.exports = Character;\n\n//# sourceURL=webpack://train/./src/Character.js?");

/***/ }),

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

eval("const newGuid = __webpack_require__(/*! ./Guid */ \"./src/Guid.js\");\nconst config = __webpack_require__(/*! ./Config */ \"./src/Config.js\");\nconst Character = __webpack_require__(/*! ./Character */ \"./src/Character.js\");\nconst Map = __webpack_require__(/*! ./Map */ \"./src/Map.js\");\nconst cfg = config.game;\n\nclass Game {\n  constructor(platformIds) {    \n    this.activeMap = 0;\n    this.maps = [\n      new Map(\"donut1\", \"https://cdn.glitch.com/92064d7f-02e4-40c8-b920-aca0beefd736%2F6875.png?v=1585925318194\")\n    ];\n    \n    this.characters = [\n      new Character(\"mario\")\n    ];\n  }\n  \n  receiveState(playerId, controlState) {\n    // Pretend there's multiple player handling here\n    const keysPressed = Object.getOwnPropertyNames(controlState);\n    for (const heldKey of keysPressed) { \n      this.characters[0].processKey(heldKey);\n    }\n  }\n  \n  start() {    \n    setInterval(() => this.tick(), 1000 / cfg.fps);\n  }\n  \n  tick() {\n    this.processMessages();\n    this.processAi();\n    this.checkForWinners();    \n  }\n  \n  processMessages() {\n    \n  }\n  \n  processAi() {\n    \n  }\n  \n  checkForWinners() {\n    \n  }\n}\n\n\nmodule.exports = Game;\n\n//# sourceURL=webpack://train/./src/Game.js?");

/***/ }),

/***/ "./src/GameClient.js":
/*!***************************!*\
  !*** ./src/GameClient.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const newGuid = __webpack_require__(/*! ./Guid */ \"./src/Guid.js\");\nconst config = __webpack_require__(/*! ./Config */ \"./src/Config.js\");\nconst fps = config.game.fps;\n\nclass Camera {\n  constructor() {    \n  }\n  \n  setLocation(x, y, r) {\n    this.x = x;\n    this.y = y;\n    this.r = r;\n  }\n}\n\nclass GameClient {\n  constructor(gameConnection) {\n    this.id = newGuid();\n    this.controllerState = {};\n    this.camera = new Camera();\n    this.gameConnection = gameConnection;\n    this.latestState = null;\n  }\n  \n  start() {    \n    setInterval(() => this.tick(), 1000 / fps);\n  }\n  \n  tick() {\n    // Only send the message on change, ideally.\n    this.gameConnection.sendState(this.id, this.controllerState);\n    this.latestState = this.gameConnection.syncState();    \n    // Pick the right character at some point.\n    this.camera.setLocation(this.latestState.characters[0].x, this.latestState.characters[0].y, this.latestState.characters[0].r);\n  }\n  \n  processKey(type, event) {    \n    \n    const mapping = {\n      38: \"up\",\n      40: \"down\",\n      37: \"left\",\n      39: \"right\",\n    };\n    \n    if(type === \"keydown\") {\n      this.controllerState[mapping[event.keyCode]] = true; \n    } else if (type === \"keyup\") {\n      delete this.controllerState[mapping[event.keyCode]];\n    }\n  }  \n}\n\nmodule.exports = GameClient;\n\n//# sourceURL=webpack://train/./src/GameClient.js?");

/***/ }),

/***/ "./src/GameUi.js":
/*!***********************!*\
  !*** ./src/GameUi.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const config = __webpack_require__(/*! ./Config */ \"./src/Config.js\");\nconst fps = config.game.fps;\n    \nconst map = document.getElementById(\"world\");\n\nclass GameUi {\n  \n  constructor() {\n    this._lastState = JSON.stringify({}); \n    this._renderingFunctions = [ \n      renderCameraPerspective\n    ];\n  }\n\n  startRendering(client) {\n    setInterval(() => this.draw(client), 1000 / fps);\n  }\n  \n  draw(client) {\n    if (JSON.stringify(client) === this._lastState) {\n      return; // No state has changed, do we need to re-render?\n    }\n    \n    const lastStateSnapshot = JSON.parse(this._lastState);\n    for (let renderer of this._renderingFunctions) {\n      const ret = renderer(client, lastStateSnapshot)\n      if (ret === -1) { // Renderer caused an early exit\n        break;\n      }\n    }\n    \n    this._lastState = JSON.stringify(client);\n  }\n}\n\n\nfunction renderCameraPerspective(currentState, lastState) {\n  const x = currentState.camera.x;\n  const y = currentState.camera.y;\n  map.style.transform = `rotateX(40deg) rotate(${currentState.camera.r}deg) translateY(${y}px) translateX(${x}px)`;\n}\n\nmodule.exports = GameUi;\n\n//# sourceURL=webpack://train/./src/GameUi.js?");

/***/ }),

/***/ "./src/Guid.js":
/*!*********************!*\
  !*** ./src/Guid.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function newGuid() {\n  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {\n    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);\n    return v.toString(16);\n  });\n}\n\nmodule.exports = newGuid;\n\n//# sourceURL=webpack://train/./src/Guid.js?");

/***/ }),

/***/ "./src/LocalGameAdapter.js":
/*!*********************************!*\
  !*** ./src/LocalGameAdapter.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nclass LocalGameAdapter {\n  constructor(game) {\n    this.game = game;\n  }\n  \n  sendState(id, controllerState) {\n    this.game.receiveState(id, controllerState);\n  }\n  \n  syncState() {\n    // Gets latest server side state, just a shim here.\n    return this.game;\n  }\n}\n\nmodule.exports = LocalGameAdapter;\n\n//# sourceURL=webpack://train/./src/LocalGameAdapter.js?");

/***/ }),

/***/ "./src/Map.js":
/*!********************!*\
  !*** ./src/Map.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Map {\n  constructor(name, background) {\n    this.name = name;\n    this.background = background;\n  }\n}\n\nmodule.exports = Map;\n\n//# sourceURL=webpack://train/./src/Map.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./Game */ \"./src/Game.js\");\nconst GameClient = __webpack_require__(/*! ./GameClient */ \"./src/GameClient.js\");\nconst LocalGameAdapter = __webpack_require__(/*! ./LocalGameAdapter */ \"./src/LocalGameAdapter.js\");\nconst GameUi = __webpack_require__(/*! ./GameUi */ \"./src/GameUi.js\");\n\nlet game, ui, client, localGameAdapter;\n\nasync function startGame(useRealData = false) {\n  game = new Game();\n  ui = new GameUi();\n  \n  localGameAdapter = new LocalGameAdapter(game);\n  \n  client = new GameClient(localGameAdapter);  \n  window.addEventListener(\"keydown\", (keyInfo) => { client.processKey(\"keydown\", keyInfo); }, false);      \n  window.addEventListener(\"keyup\",  (keyInfo) => { client.processKey(\"keyup\", keyInfo); }, false);\n  \n  client.start();\n  game.start();\n  ui.startRendering(client);\n  \n  // Temp\n  return game;\n}\n\nmodule.exports = { startGame };\n\n//# sourceURL=webpack://train/./src/script.js?");

/***/ })

/******/ });