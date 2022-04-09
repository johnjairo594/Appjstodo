/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-inicial/./src/styles.css?");

/***/ }),

/***/ "./src/classes/index.js":
/*!******************************!*\
  !*** ./src/classes/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* reexport safe */ _todo_class__WEBPACK_IMPORTED_MODULE_0__.Todo),\n/* harmony export */   \"TodoList\": () => (/* reexport safe */ _todo_list_class__WEBPACK_IMPORTED_MODULE_1__.TodoList)\n/* harmony export */ });\n/* harmony import */ var _todo_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.class */ \"./src/classes/todo.class.js\");\n/* harmony import */ var _todo_list_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-list-class */ \"./src/classes/todo-list-class.js\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack-inicial/./src/classes/index.js?");

/***/ }),

/***/ "./src/classes/todo-list-class.js":
/*!****************************************!*\
  !*** ./src/classes/todo-list-class.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoList\": () => (/* binding */ TodoList)\n/* harmony export */ });\n/* harmony import */ var _todo_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.class */ \"./src/classes/todo.class.js\");\n\r\n\r\nclass TodoList {\r\n\r\n    constructor() {\r\n\r\n        // this.todos = [];\r\n        this.cargarLocalStorage();\r\n\r\n    }\r\n\r\n    nuevoTodo(todo) {\r\n        this.todos.push(todo);\r\n        this.guardarLocalStorage();\r\n\r\n    }\r\n\r\n    eliminarTodo (id) {\r\n        \r\n        this.todos = this.todos.filter(todo => todo.id != id)\r\n        this.guardarLocalStorage();\r\n    }\r\n\r\n    marcarCompletado(id) {\r\n\r\n        for( const todo of this.todos) {\r\n\r\n            if(todo.id == id) {\r\n\r\n                todo.completado = !todo.completado;\r\n                this.guardarLocalStorage();\r\n                break;\r\n\r\n            }\r\n\r\n        }\r\n\r\n    }\r\n\r\n    eliminarCompletados() {\r\n        \r\n        this .todos = this.todos.filter(todo => !todo.completado);\r\n        this.guardarLocalStorage();\r\n\r\n    }\r\n\r\n    guardarLocalStorage(){\r\n\r\n        localStorage.setItem('todo', JSON.stringify(this.todos));\r\n\r\n    }\r\n\r\n    cargarLocalStorage(){\r\n\r\n    //     if(localStorage.getItem('todo')) {\r\n\r\n    //         this.todos = JSON.parse(localStorage.getItem('todo'));\r\n    //         console.log('cargarLocal:', this.todos);\r\n\r\n    //     } else {\r\n    //         this.todo = [];\r\n    //     }\r\n\r\n        this.todo = (localStorage.getItem('todo'))  \r\n                ? this.todos = JSON.parse(localStorage.getItem('todo')) \r\n                : this.todo = [];\r\n\r\n        this.todos = this.todos.map( (obj) => _todo_class__WEBPACK_IMPORTED_MODULE_0__.Todo.fromJson(obj) );\r\n            \r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://webpack-inicial/./src/classes/todo-list-class.js?");

/***/ }),

/***/ "./src/classes/todo.class.js":
/*!***********************************!*\
  !*** ./src/classes/todo.class.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\r\n\r\n    static fromJson( {id, tarea, completado, creado} ) {\r\n\r\n        const tempTodo = new Todo(tarea)\r\n\r\n        tempTodo.id         = id;\r\n        tempTodo.completado = completado;\r\n        tempTodo.creado     = creado;\r\n\r\n        return tempTodo;\r\n    } \r\n\r\n    constructor(tarea) {\r\n        this.tarea  = tarea;\r\n        this.id         = new Date().getTime(); //134515\r\n        this.completado = false; \r\n        this.creado     = new Date();       \r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack://webpack-inicial/./src/classes/todo.class.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoList\": () => (/* binding */ todoList)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes */ \"./src/classes/index.js\");\n/* harmony import */ var _js_componentes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/componentes */ \"./src/js/componentes.js\");\n\n\n\n\nconst todoList = new _classes__WEBPACK_IMPORTED_MODULE_1__.TodoList();\n\ntodoList.todos.forEach(todo => (0,_js_componentes__WEBPACK_IMPORTED_MODULE_2__.crearTodoHtml)(todo)); \n// todoList.todos.forEach(todo => crearTodoHtml(todo)) = todoList.todos.forEach( crearTodoHtml );\n\nconst newTodo = new _classes__WEBPACK_IMPORTED_MODULE_1__.Todo('Aaprender JavaScript');\n// todoList.nuevoTodo(newTodo);\n\nconsole.log( 'todos', todoList.todos);\n\n//# sourceURL=webpack://webpack-inicial/./src/index.js?");

/***/ }),

/***/ "./src/js/componentes.js":
/*!*******************************!*\
  !*** ./src/js/componentes.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"crearTodoHtml\": () => (/* binding */ crearTodoHtml)\n/* harmony export */ });\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes */ \"./src/classes/index.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\n\n\n//Referencias del html\nconst divTodoList   = document.querySelector('.todo-list');\nconst txtInput      = document.querySelector('.new-todo');\nconst btnBorrar     = document.querySelector( '.clear-completed');\nconst ulFiltros     = document.querySelector( '.filters' );\nconst anchorFiltros = document.querySelectorAll( '.filtro' )\n\nconst crearTodoHtml = (todo) => {\n    const htmlTodo = `\n        <li class=\"${ (todo.completado)?'completed':'' }\" data-id=\"${todo.id}\">\n        <div class=\"view\">\n            <input class=\"toggle\" type=\"checkbox\" ${(todo.completado)?'checked':''}>\n            <label>${todo.tarea}</label>\n            <button class=\"destroy\"></button>\n        </div>\n        <input class=\"edit\" value=\"Create a TodoMVC template\">\n    </li>`\n\n    const div = document.createElement('div');\n    div.innerHTML = htmlTodo;\n    divTodoList.append (div.firstElementChild);\n\n    return div.firstElementChild;\n}\n\n//Eventos \ntxtInput.addEventListener('keyup', (event) => {\n    if(event.keyCode === 13 && txtInput.value.length > 0) {\n        console.log(txtInput.value)\n        const nuevoTodo = new _classes__WEBPACK_IMPORTED_MODULE_0__.Todo(txtInput.value)\n        _index__WEBPACK_IMPORTED_MODULE_1__.todoList.nuevoTodo (nuevoTodo);\n        console.log(_index__WEBPACK_IMPORTED_MODULE_1__.todoList);\n        crearTodoHtml(nuevoTodo);\n        txtInput.value = ''\n    }\n})\n\ndivTodoList.addEventListener('click', (event)=>{\n    const nombreElemento    = event.target.localName; //input, label, button\n    const todoElemento      = event.target.parentElement.parentElement;\n    const todoId            = todoElemento.getAttribute('data-id')\n    \n\n    if(nombreElemento.includes('input')) { //click en el check\n        _index__WEBPACK_IMPORTED_MODULE_1__.todoList.marcarCompletado(todoId);\n        todoElemento.classList.toggle('completed');\n    } else if (nombreElemento.includes('button')){\n\n        _index__WEBPACK_IMPORTED_MODULE_1__.todoList.eliminarTodo(todoId);\n        divTodoList.removeChild(todoElemento);\n\n    }\n})\n\nbtnBorrar.addEventListener('click', () => {\n\n    _index__WEBPACK_IMPORTED_MODULE_1__.todoList.eliminarCompletados();\n    for( let i = divTodoList.children.length-1; i >=0 ; i--){\n\n        const elemento = divTodoList.children[i];\n\n        if(elemento.classList.contains('completed')){\n            divTodoList.removeChild(elemento);\n        }\n    }\n\n})\n\nulFiltros.addEventListener('click', (event) => {\n    const filtro = event.target.text;\n    if (!filtro) {return;}\n\n    anchorFiltros.forEach(elem => elem.classList.remove('selected'));\n    event.target.classList.add('selected');\n\n    for (const elemento of divTodoList.children) {\n\n        elemento.classList.remove('hidden');\n        const completado = elemento.classList.contains('completed');\n\n        switch(filtro) {\n\n            case 'Pendientes' :\n                if(completado) {\n                    elemento.classList.add('hidden');\n                }\n            break;\n\n            case 'Completados' :\n                if(!completado) {\n                    elemento.classList.add('hidden');\n                }\n            break;\n\n        }\n\n    }\n});\n\n//# sourceURL=webpack://webpack-inicial/./src/js/componentes.js?");

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;