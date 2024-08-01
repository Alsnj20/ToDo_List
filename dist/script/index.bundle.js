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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scructure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scructure.js */ \"./src/scructure.js\");\n/* harmony import */ var _todoList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList.js */ \"./src/todoList.js\");\n\n\n\n//# sourceURL=webpack://todo_list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Project = /*#__PURE__*/function () {\n  function Project(name) {\n    _classCallCheck(this, Project);\n    this.name = name;\n    this.tasks = [];\n  }\n  return _createClass(Project, [{\n    key: \"addTask\",\n    value: function addTask(task) {\n      this.tasks.push(task);\n    }\n  }, {\n    key: \"removeTask\",\n    value: function removeTask(task) {\n      return this.tasks.filter(function (t) {\n        return t !== task;\n      });\n    }\n  }, {\n    key: \"getTasks\",\n    value: function getTasks() {\n      return this.tasks;\n    }\n  }]);\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://todo_list/./src/project.js?");

/***/ }),

/***/ "./src/projectManager.js":
/*!*******************************!*\
  !*** ./src/projectManager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar ProjectManager = /*#__PURE__*/function () {\n  function ProjectManager() {\n    _classCallCheck(this, ProjectManager);\n    this.projects = [];\n  }\n  return _createClass(ProjectManager, [{\n    key: \"addProject\",\n    value: function addProject(project) {\n      this.projects.push(project);\n    }\n  }, {\n    key: \"removeProject\",\n    value: function removeProject(project) {\n      this.projects = this.projects.filter(function (p) {\n        return p !== project;\n      });\n    }\n  }, {\n    key: \"getProjectName\",\n    value: function getProjectName(name) {\n      return this.projects.find(function (p) {\n        return p.name === name;\n      });\n    }\n  }, {\n    key: \"getProject\",\n    value: function getProject() {\n      return this.projects;\n    }\n  }, {\n    key: \"printProjects\",\n    value: function printProjects() {\n      this.projects.forEach(function (project) {\n        console.log(project);\n      });\n    }\n  }]);\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectManager);\n\n//# sourceURL=webpack://todo_list/./src/projectManager.js?");

/***/ }),

/***/ "./src/scructure.js":
/*!**************************!*\
  !*** ./src/scructure.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _toggle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle.js */ \"./src/toggle.js\");\n\n// Scructure\nvar createElement = function createElement(type) {\n  var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  var element = document.createElement(type);\n  for (var key in attributes) {\n    element.setAttribute(key, attributes[key]);\n  }\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n  children.forEach(function (child) {\n    if (typeof child === 'string') {\n      element.appendChild(document.createTextNode(child));\n    } else {\n      element.appendChild(child);\n    }\n  });\n  return element;\n};\nvar createNav = function createNav() {\n  return createElement('div', {\n    \"class\": ['content-nav']\n  }, createElement('div', {}, createElement('header', {}, createElement('h1', {}, 'TodoList')), createDefaultOptions(), createProjects()), createFooter());\n};\nvar createDefaultOptions = function createDefaultOptions() {\n  return createElement('div', {\n    \"class\": ['optionsDefault']\n  }, createElement('h2', {}, 'Home'), createElement('div', {\n    \"class\": ['sectionList']\n  }, createElement('ul', {}, createElement('li', {}, createElement('a', {\n    \"class\": ['titlePag'],\n    href: '#'\n  }, createElement('i', {\n    \"class\": ['bx bx-bullseye']\n  }), 'All')), createElement('li', {}, createElement('a', {\n    \"class\": ['titlePag'],\n    href: '#'\n  }, createElement('i', {\n    \"class\": ['bx bx-calendar-event']\n  }), 'Today')), createElement('li', {}, createElement('a', {\n    \"class\": ['titlePag'],\n    href: '#'\n  }, createElement('i', {\n    \"class\": ['bx bx-calendar-week']\n  }), 'Next 7 Days')), createElement('li', {}, createElement('a', {\n    \"class\": ['titlePag'],\n    href: '#'\n  }, createElement('i', {\n    \"class\": ['bx bx-calendar-star']\n  }), 'Important')))));\n};\nvar createProjects = function createProjects() {\n  return createElement('div', {\n    \"class\": ['optionsProjects']\n  }, createElement('h2', {\n    id: 'projects'\n  }, 'Projects'), createElement('div', {\n    \"class\": ['sectionList']\n  }, createElement('ul', {}), createElement('button', {\n    id: 'addProject'\n  }, createElement('i', {\n    \"class\": ['bx bx-plus-circle']\n  }), ' Add Project'), createProjectForm()));\n};\nvar createProjectForm = function createProjectForm() {\n  return createElement('div', {\n    id: 'formProject',\n    style: 'display: none;'\n  }, createElement('input', {\n    type: 'text',\n    placeholder: 'Name Project'\n  }), createElement('div', {\n    \"class\": ['optionsCreateProject']\n  }, createElement('button', {\n    id: 'doProject'\n  }, 'ACEPTAR'), createElement('button', {\n    id: 'cancelProject'\n  }, 'CANCELAR')));\n};\nvar createFooter = function createFooter() {\n  return createElement('footer', {}, createElement('a', {\n    href: '#',\n    target: '_blank'\n  }, createElement('p', {}, 'Copyright © 2024 Alsnj20 :)')));\n};\nvar createMainContent = function createMainContent() {\n  return createElement('div', {\n    \"class\": ['content-text']\n  }, createElement('i', {\n    \"class\": ['bx bx-menu menu']\n  }), createElement('div', {\n    \"class\": ['title']\n  }, createElement('h1', {\n    id: 'titleProject'\n  }), createElement('div', {}, createElement('button', {\n    id: 'addTask'\n  }, 'Add Task'), createToggleButton())), createElement('main', {\n    id: 'taskList'\n  }), createTaskForm());\n};\nvar createToggleButton = function createToggleButton() {\n  return createElement('div', {\n    \"class\": ['toggle']\n  }, createElement('div', {\n    \"class\": ['toggle-button']\n  }, createElement('img', {\n    src: './img/sunny.png'\n  })));\n};\nvar createTaskForm = function createTaskForm() {\n  return createElement('form', {\n    \"class\": ['formTask'],\n    id: 'taskForm',\n    style: 'display: none;'\n  }, createElement('h2', {}, 'Create Task'), createElement('div', {}, createElement('input', {\n    type: 'text',\n    id: 'titleTask',\n    placeholder: 'Title',\n    required: true\n  })), createElement('div', {}, createElement('textarea', {\n    id: 'descriptionTask',\n    placeholder: 'Description'\n  })), createElement('div', {}, createElement('label', {\n    \"for\": 'dateTask'\n  }, 'Date:'), createElement('input', {\n    type: 'date',\n    id: 'dateTask',\n    required: true\n  })), createElement('div', {}, createElement('label', {\n    \"for\": 'secProject'\n  }, 'Project:'), createElement('select', {\n    id: 'secProject',\n    required: true\n  })), createElement('div', {\n    \"class\": ['priority']\n  }, createElement('label', {\n    \"for\": 'importantTask'\n  }, 'Important:'), createElement('button', {\n    id: 'high',\n    type: 'button'\n  }, 'High'), createElement('button', {\n    id: 'medium',\n    type: 'button'\n  }, 'Medium'), createElement('button', {\n    id: 'low',\n    type: 'button'\n  }, 'Low')), createElement('div', {}, createElement('button', {\n    id: 'okTask',\n    type: 'button'\n  }, 'ACEPTAR'), createElement('button', {\n    id: 'cancelTask',\n    type: 'button'\n  }, 'CANCELAR')));\n};\nvar init = function init() {\n  var container = createElement('div', {\n    \"class\": ['container']\n  }, createNav(), createMainContent());\n  document.body.appendChild(container);\n  (0,_toggle_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n};\ninit();\n\n//# sourceURL=webpack://todo_list/./src/scructure.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Task = /*#__PURE__*/function () {\n  function Task(title, description, date, time) {\n    var isCompleted = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;\n    _classCallCheck(this, Task);\n    this.title = title;\n    this.description = description;\n    this.isCompleted = isCompleted;\n    this.date = date;\n    this.time = time;\n  }\n  return _createClass(Task, [{\n    key: \"markCompleted\",\n    value: function markCompleted() {\n      this.isCompleted = true;\n    }\n  }, {\n    key: \"markPending\",\n    value: function markPending() {\n      this.isCompleted = false;\n    }\n  }, {\n    key: \"changePriority\",\n    value: function changePriority(prior) {\n      this.priority = prior;\n    }\n  }]);\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://todo_list/./src/task.js?");

/***/ }),

/***/ "./src/todoList.js":
/*!*************************!*\
  !*** ./src/todoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projectManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectManager.js */ \"./src/projectManager.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n//Import objects\n\n\n\n\n//Objects\nvar projectManager = new _projectManager_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nvar taskAll = [];\n\n//PROJECTS\nvar addProject = document.querySelector('#addProject');\nvar formProject = document.querySelector('#formProject');\nvar inProject = document.querySelector('#formProject input');\nvar btnDoProject = document.querySelector('#doProject');\nvar btnCancelProject = document.querySelector('#cancelProject');\n\n//Animations\naddProject.addEventListener('click', function () {\n  formProject.style.display = 'block';\n});\nbtnCancelProject.addEventListener('click', function () {\n  formProject.style.display = 'none';\n});\nbtnDoProject.addEventListener('click', function () {\n  if (inProject.value !== '') {\n    projectManager.addProject(new _project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](inProject.value));\n    createProject(inProject.value);\n    formProject.style.display = 'none';\n    inProject.value = '';\n  }\n});\n\n//Project\nvar titleProject = document.querySelector('#titleProject');\nvar projects = document.querySelector('.optionsProjects .sectionList ul');\nvar projectDefault = document.querySelector('.optionsDefault .sectionList ul');\n\n//Create Project\nvar createProject = function createProject(title) {\n  var li = document.createElement('li');\n  li.innerHTML = \"<a class='titlePag' href=\\\"#\\\"><i class='bx bx-list-plus'></i>\".concat(title, \"</a><i class='bx bx-x'></i>\");\n  projects.appendChild(li);\n};\nvar showTasks = function showTasks(name) {\n  titleProject.textContent = name;\n  switch (name) {\n    case 'All':\n      if (mainElement.children.length > 0) {\n        _projectManager_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projects.forEach(function (project) {\n          project.tasks.forEach(function (task) {\n            createTask(task.title, task.date, task.time, task.description);\n          });\n        });\n      } else {\n        titleProject.textContent += '(No tasks)';\n      }\n      break;\n    case 'Today':\n      var today = new Date().toLocaleDateString();\n      console.log(today);\n      projectManager.projects.forEach(function (project) {\n        project.tasks.forEach(function (task) {\n          if (task.date === today) {\n            createTask(task.title, task.date, task.time, task.description);\n          }\n        });\n      });\n      break;\n    case 'This Week':\n      var week = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);\n      console.log(week);\n      /*projectManager.projects.forEach(project => {\r\n        project.tasks.forEach(task => {\r\n          const taskDate = new Date(task.date);\r\n          if(taskDate <= week){\r\n            createTask(task.title, task.date, task.time, task.description);\r\n          }\r\n        });\r\n      });*/\n      break;\n    case 'Important':\n      projectManager.projects.forEach(function (project) {\n        project.tasks.forEach(function (task) {\n          if (task.priority === 'High') {\n            createTask(task.title, task.date, task.time, task.description);\n          }\n        });\n      });\n      break;\n    default:\n      var project = projectManager.getProjectName(name);\n      project.tasks.forEach(function (task) {\n        createTask(task.title, task.date, task.time, task.description);\n      });\n      break;\n  }\n};\n\n//Defecto\ncreateProject('Project');\nprojectManager.addProject(new _project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Project'));\nshowTasks('Project');\n\n//Remove Project\nprojects.addEventListener('click', function (e) {\n  console.log(e.target);\n  if (e.target.classList.contains('bx-x')) {\n    e.target.parentElement.remove();\n    var _titleProject = e.target.parentElement.firstChild.textContent;\n    var project = projectManager.getProjectName(_titleProject);\n    projectManager.removeProject(project);\n  }\n  if (e.target.classList.contains('titlePag')) {\n    showTasks(titleProject.textContent);\n  }\n});\nprojectDefault.addEventListener('click', function (e) {\n  if (e.target.classList.contains('titlePag')) {\n    showTasks(e.target.textContent);\n  }\n});\n\n//TASKS\nvar formTask = document.querySelector('.formTask');\nvar addTask = document.querySelector('#addTask');\nvar okTask = document.querySelector('#okTask');\nvar cancelTask = document.querySelector('#cancelTask');\n\n//Animations\nvar toggleBlur = function toggleBlur() {\n  var items = document.querySelectorAll('.content-nav, .content-text i, .title, .task').forEach(function (item) {\n    item.classList.toggle('blur');\n  });\n};\naddTask.addEventListener('click', function () {\n  formTask.style.display = 'flex';\n  formTask.classList.remove('hide');\n  toggleBlur();\n  updateProject();\n});\n\n// formTask\nvar titleTask = document.querySelector('#titleTask');\nvar descriptionTask = document.querySelector('#descriptionTask');\nvar dateTask = document.querySelector('#dateTask');\nvar secProject = document.querySelector('#secProject');\nvar priorityBtns = document.querySelectorAll('.priority button');\nvar priority = 'high';\ncancelTask.addEventListener('click', function () {\n  formTask.classList.add('hide');\n  toggleBlur();\n  formTask.style.display = 'none';\n});\nokTask.addEventListener('click', function () {\n  formTask.classList.add('hide');\n  toggleBlur();\n  formTask.style.display = 'none';\n  var project = projectManager.getProjectName(secProject.value);\n  console.log(project);\n  var time = new Date().toLocaleTimeString().slice(0, 5);\n  project.addTask(new _task_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](titleTask.value, descriptionTask.value, dateTask.value, time, priority));\n  console.log(\"PROJECTOS:\" + projectManager.printProjects());\n});\nvar handlePriority = function handlePriority(e) {\n  priorityBtns.forEach(function (btn) {\n    btn.classList.remove('priorityActive');\n  });\n  e.target.classList.add('priorityActive');\n  priority = e.target.textContent;\n};\npriorityBtns.forEach(function (btn) {\n  btn.addEventListener('click', handlePriority);\n});\nvar updateProject = function updateProject() {\n  secProject.innerHTML = '';\n  projectManager.projects.forEach(function (project) {\n    var option = document.createElement('option');\n    option.value = project.name;\n    option.textContent = project.name;\n    secProject.appendChild(option);\n  });\n};\n\n//Task\nvar mainElement = document.querySelector('main');\nvar createTask = function createTask(title, date, time, description) {\n  // Crear elementos necesarios\n  var taskDiv = document.createElement('div');\n  taskDiv.classList.add('task');\n  var taskTitleDiv = document.createElement('div');\n  taskTitleDiv.classList.add('taskTitle');\n  var titleDiv = document.createElement('div');\n  titleDiv.classList.add('title');\n  titleDiv.textContent = title;\n  var dateDiv = document.createElement('div');\n  dateDiv.classList.add('date');\n  var dateSpan = document.createElement('span');\n  dateSpan.textContent = date;\n  var timeSpan = document.createElement('span');\n  timeSpan.textContent = \" \" + time;\n  dateDiv.append(dateSpan, timeSpan);\n  var descriptionDiv = document.createElement('div');\n  descriptionDiv.classList.add('taskDescription');\n  descriptionDiv.textContent = description;\n  var optionsTaskDiv = document.createElement('div');\n  optionsTaskDiv.classList.add('optionsTask');\n  var checkIcon = document.createElement('i');\n  checkIcon.classList.add('bx', 'bx-check');\n  var trashIcon = document.createElement('i');\n  trashIcon.classList.add('bx', 'bx-trash');\n  optionsTaskDiv.append(checkIcon, trashIcon);\n  taskTitleDiv.append(titleDiv, dateDiv);\n  taskDiv.setAttribute('id', updatePriority());\n  taskDiv.append(taskTitleDiv, descriptionDiv, optionsTaskDiv);\n  mainElement.appendChild(taskDiv);\n};\n\n//Remove Task\n\nvar updatePriority = function updatePriority() {\n  switch (priority) {\n    case 'High':\n      return 'high';\n    case 'Medium':\n      return 'medium';\n    case 'Low':\n      return 'low';\n  }\n};\n//Tasks\n//Done and Remove Task\nmainElement.addEventListener('click', function (e) {\n  if (e.target.classList.contains('bx-trash')) {\n    e.target.parentElement.parentElement.remove();\n    console;\n  }\n  if (e.target.classList.contains('bx-check')) {\n    e.target.parentElement.parentElement.classList.toggle('done');\n  }\n});\n\n//# sourceURL=webpack://todo_list/./src/todoList.js?");

/***/ }),

/***/ "./src/toggle.js":
/*!***********************!*\
  !*** ./src/toggle.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initializeToggle)\n/* harmony export */ });\nfunction initializeToggle() {\n  var img = document.querySelector('.toggle-button img');\n  var body = document.querySelector('body');\n  var menu = document.querySelector('.menu');\n  var nav = document.querySelector('.content-nav div:first-child');\n  img.addEventListener('click', function () {\n    img.classList.toggle(\"dark\");\n    body.classList.toggle(\"dark\");\n    if (img.classList.contains('dark')) {\n      img.src = './img/moon.png';\n    } else {\n      img.src = './img/sunny.png';\n    }\n  });\n  menu.addEventListener('click', function () {\n    var isHidden = nav.classList.toggle('active');\n    if (isHidden) {\n      menu.classList.replace('bx-menu', 'bx-x');\n    } else {\n      menu.classList.replace('bx-x', 'bx-menu');\n    }\n  });\n}\n\n//# sourceURL=webpack://todo_list/./src/toggle.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;