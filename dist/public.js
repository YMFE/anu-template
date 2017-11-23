/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + ({"0":"index"}[chunkId]||chunkId) + "." + {"0":"69b95"}[chunkId] + ".chunk.js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 126);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * by 司徒正美 Copyright 2017-10-20
 * IE9+
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.React = factory());
}(this, (function () {

var innerHTML = "dangerouslySetInnerHTML";
var emptyArray = [];
var emptyObject = {};
function deprecatedWarn(methodName) {
    if (!deprecatedWarn[methodName]) {
        //eslint-disable-next-line
        console.error(methodName + " is deprecated");
        deprecatedWarn[methodName] = 1;
    }
}
/**
 * 复制一个对象的属性到另一个对象
 *
 * @param {any} obj
 * @param {any} props
 * @returns
 */
function extend(obj, props) {
    for (var i in props) {
        if (props.hasOwnProperty(i)) {
            obj[i] = props[i];
        }
    }
    return obj;
}

var __type = Object.prototype.toString;

/**
 * 一个空函数
 *
 * @export
 */
function noop() {}

/**
 * 类继承
 *
 * @export
 * @param {any} SubClass
 * @param {any} SupClass
 */
function inherit(SubClass, SupClass) {
    function Bridge() {}
    Bridge.prototype = SupClass.prototype;

    var fn = SubClass.prototype = new Bridge();

    // 避免原型链拉长导致方法查找的性能开销
    extend(fn, SupClass.prototype);
    fn.constructor = SubClass;
    return fn;
}

var lowerCache = {};
/**
 * 小写化的优化
 *
 * @export
 * @param {any} s
 * @returns
 */
function toLowerCase(s) {
    return lowerCache[s] || (lowerCache[s] = s.toLowerCase());
}

function clearArray(a) {
    return a.splice(0, a.length);
}

/**
 *
 *
 * @param {any} obj
 * @returns
 */
function isFn(obj) {
    return __type.call(obj) === "[object Function]";
}

var rword = /[^, ]+/g;

function oneObject(array, val) {
    if (array + "" === array) {
        //利用字符串的特征进行优化，字符串加上一个空字符串等于自身
        array = array.match(rword) || [];
    }
    var result = {},

    //eslint-disable-next-line
    value = val !== void 666 ? val : 1;
    for (var i = 0, n = array.length; i < n; i++) {
        result[array[i]] = value;
    }
    return result;
}

function getChildContext(instance, parentContext) {
    if (instance.getChildContext) {
        var context = instance.getChildContext();
        if (context) {
            parentContext = Object.assign({}, parentContext, context);
        }
    }
    return parentContext;
}

function getContextByTypes(curContext, contextTypes) {
    var context = {};
    if (!contextTypes || !curContext) {
        return context;
    }
    for (var key in contextTypes) {
        if (contextTypes.hasOwnProperty(key)) {
            context[key] = curContext[key];
        }
    }
    return context;
}

var rcamelize = /[-_][^-_]/g;
function camelize(target) {
    //提前判断，提高getStyle等的效率
    if (!target || target.indexOf("-") < 0 && target.indexOf("_") < 0) {
        return target;
    }
    //转换为驼峰风格
    var str = target.replace(rcamelize, function (match) {
        return match.charAt(1).toUpperCase();
    });
    return firstLetterLower(str);
}

function firstLetterLower(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}
var options = {
    dirtyComponents: [],
    queue: [],
    beforeUnmount: noop,
    beforeRender: noop,
    beforePatch: noop,
    afterRender: noop,
    afterPatch: noop,
    afterMount: noop,
    afterUpdate: noop
};

var numberMap = {
    //null undefined IE6-8这里会返回[object Object]
    "[object Boolean]": 2,
    "[object Number]": 3,
    "[object String]": 4,
    "[object Function]": 5,
    "[object Symbol]": 6,
    "[object Array]": 7
};
// undefined: 0, null: 1, boolean:2, number: 3, string: 4, function: 5, symbol:6, array: 7, object:8
function typeNumber(data) {
    if (data === null) {
        return 1;
    }
    if (data === void 666) {
        return 0;
    }
    var a = numberMap[__type.call(data)];
    return a || 8;
}

var recyclables = {
    "#text": []
};

//fix 0.14对此方法的改动，之前refs里面保存的是虚拟DOM
function getDOMNode() {
    return this;
}
var pendingRefs = [];
var Refs = {
    currentOwner: null,
    clearRefs: function clearRefs() {
        var callback = this.fireRef;
        var refs = pendingRefs.splice(0, pendingRefs.length);
        for (var i = 0, n = refs.length; i < n; i += 2) {
            var vnode = refs[i];
            var data = refs[i + 1];
            callback(vnode, data);
        }
    },
    detachRef: function detachRef(lastVnode, nextVnode, dom) {
        if (lastVnode.ref === nextVnode.ref) {
            return;
        }
        if (lastVnode._hasRef) {
            this.fireRef(lastVnode, null);
        }
        if (nextVnode._hasRef && dom) {
            pendingRefs.push(nextVnode, dom);
        }
    },
    fireRef: function fireRef(vnode, dom) {
        var ref = vnode.ref;
        if (typeof ref === "function") {
            return ref(dom);
        }
        var owner = vnode._owner;
        if (!owner) {
            throw "ref位置错误";
        }
        if (dom) {
            if (dom.nodeType) {
                dom.getDOMNode = getDOMNode;
            }
            owner.refs[ref] = dom;
        } else {
            delete owner.refs[ref];
        }
    }
};

/**
 * 创建虚拟DOM
 *
 * @param {string} type
 * @param {object} props
 * @param {array} ...children
 * @returns
 */

function createElement(type, config) {
    for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        children[_key - 2] = arguments[_key];
    }

    var props = {},
        checkProps = 0,
        vtype = 1,
        key = null,
        ref = null,
        argsLen = children.length;
    if (type && type.call) {
        vtype = type.prototype && type.prototype.render ? 2 : 4;
    } else if (type + "" !== type) {
        console.error("createElement第一个参数类型错误"); // eslint-disable-line
    }
    if (config != null) {
        for (var i in config) {
            var val = config[i];
            if (i === "key") {
                if (val !== void 0) {
                    key = val + "";
                }
            } else if (i === "ref") {
                if (val !== void 0) {
                    ref = val;
                }
            } else if (i === "children") {
                props[i] = val;
            } else {
                checkProps = 1;
                props[i] = val;
            }
        }
    }

    if (argsLen === 1) {
        props.children = children[0];
        // : EMPTY_CHILDREN;
    } else if (argsLen > 1) {
        props.children = children;
    }

    var defaultProps = type.defaultProps;
    if (defaultProps) {
        for (var propName in defaultProps) {
            if (props[propName] === void 666) {
                checkProps = 1;
                props[propName] = defaultProps[propName];
            }
        }
    }
    return new Vnode(type, key, ref, props, vtype, checkProps);
}

function Vnode(type, key, ref, props, vtype, checkProps) {
    this.type = type;
    this.props = props;
    this.vtype = vtype;
    this._owner = Refs.currentOwner;

    if (key) {
        this.key = key;
    }

    if (vtype === 1) {
        this.checkProps = checkProps;
    }

    var refType = typeNumber(ref);
    if (refType === 3 || refType === 4 || refType === 5) {
        //number, string, function
        this._hasRef = true;
        this.ref = ref;
    }
    /*
      this._hostNode = null
      this._instance = null
    */
}

Vnode.prototype = {
    getDOMNode: function getDOMNode() {
        return this._hostNode || null;
    },

    $$typeof: 1
};

function flattenChildren(vnode) {
    var arr = emptyArray,
        c = vnode.props.children;
    if (c !== null) {
        arr = _flattenChildren(c, true);
        if (arr.length === 0) {
            arr = emptyArray;
        }
    }
    return vnode.vchildren = arr;
}

function _flattenChildren(original, convert) {
    var children = [],
        unidimensionalIndex = 0,
        lastText = void 0,
        child = void 0,
        isMap = convert === "",
        iteractorFn = void 0,
        temp = Array.isArray(original) ? original.slice(0) : [original];

    while (temp.length) {
        if ((child = temp.shift()) && (child.shift || (iteractorFn = getIteractor(child)))) {
            //比较巧妙地判定是否为子数组

            if (iteractorFn) {
                //兼容Immutable.js, Map, Set
                child = callIteractor(iteractorFn, child);
                iteractorFn = false;
                temp.unshift.apply(temp, child);
                continue;
            }
            if (isMap) {
                if (!child._prefix) {
                    child._prefix = "." + unidimensionalIndex;
                    unidimensionalIndex++; //维护第一层元素的索引值
                }
                for (var i = 0; i < child.length; i++) {
                    if (child[i]) {
                        child[i]._prefix = child._prefix + ":" + i;
                    }
                }
            }
            temp.unshift.apply(temp, child);
        } else {
            var childType = typeNumber(child);
            if (childType < 3) {
                // 0, 1, 2
                if (convert) {
                    continue;
                } else {
                    child = null;
                }
            } else if (childType < 6) {
                if (lastText && convert) {
                    //false模式下不进行合并与转换
                    lastText.text += child;
                    continue;
                }
                if (convert) {
                    child = {
                        type: "#text",
                        text: child + "",
                        vtype: 0
                    };
                    unidimensionalIndex++;
                }
                lastText = child;
            } else {
                if (isMap && !child._prefix) {
                    child._prefix = "." + unidimensionalIndex;
                    unidimensionalIndex++;
                }
                if (!child.type) {
                    throw Error("这不是一个虚拟DOM");
                }
                lastText = false;
            }

            children.push(child);
        }
    }
    return children;
}
var REAL_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
var FAKE_SYMBOL = "@@iterator";
function getIteractor(a) {
    if (typeNumber(a) > 7) {
        var iteratorFn = REAL_SYMBOL && a[REAL_SYMBOL] || a[FAKE_SYMBOL];
        if (iteratorFn && iteratorFn.call) {
            return iteratorFn;
        }
    }
}
function callIteractor(iteratorFn, children) {
    var iterator = iteratorFn.call(children),
        step,
        ret = [];
    if (iteratorFn !== children.entries) {
        while (!(step = iterator.next()).done) {
            ret.push(step.value);
        }
    } else {
        //Map, Set
        while (!(step = iterator.next()).done) {
            var entry = step.value;
            if (entry) {
                ret.push(entry[1]);
            }
        }
    }
    return ret;
}

function cloneElement(vnode, props) {
    if (!vnode.vtype) {
        return extend({}, vnode);
    }
    var owner = vnode._owner,
        lastOwn = Refs.currentOwner,
        old = vnode.props,
        configs = {};
    if (props) {
        Object.assign(configs, old, props);
        configs.key = props.key !== void 666 ? props.key : vnode.key;
        if (props.ref !== void 666) {
            configs.ref = props.ref;
            owner = lastOwn;
        } else if (vnode._hasRef) {
            configs.ref = vnode.ref;
        }
    } else {
        configs = old;
    }
    Refs.currentOwner = owner;

    var args = [].slice.call(arguments, 0),
        argsLength = args.length;
    args[0] = vnode.type;
    args[1] = configs;
    if (argsLength === 2 && configs.children) {
        args.push(configs.children);
    }
    var ret = createElement.apply(null, args);
    Refs.currentOwner = lastOwn;
    return ret;
}

var Children = {
    only: function only(children) {
        //only方法接受的参数只能是一个对象，不能是多个对象（数组）。
        if (children && children.vtype) {
            return children;
        }
        throw new Error("expect only one child");
    },
    count: function count(children) {
        if (children == null) {
            return 0;
        }
        return _flattenChildren(children, false).length;
    },
    map: function map(children, callback, context) {
        if (children == null) {
            return children;
        }
        var ret = [];
        _flattenChildren(children, "").forEach(function (old, index) {
            var el = callback.call(context, old, index);
            if (el === null) {
                return;
            }
            if (el.vtype) {
                //如果返回的el等于old,还需要使用原来的key, _prefix
                var key = computeKey(old, el, index);
                ret.push(cloneElement(el, { key: key }));
            } else if (el.type) {
                ret.push(extend({}, el));
            } else {
                ret.push(el);
            }
        });
        return ret;
    },
    forEach: function forEach(children, callback, context) {
        if (children != null) {
            _flattenChildren(children, false).forEach(callback, context);
        }
    },


    toArray: function toArray(children) {
        if (children == null) {
            return [];
        }
        return Children.map(children, function (el) {
            return el;
        });
    }
};
var rthimNumer = /\d+\$/;
function computeKey(old, el, index) {
    var curKey = el && el.key != null ? escapeKey(el.key) : null;
    var oldKey = old && old.key != null ? escapeKey(old.key) : null;
    var oldFix = old && old._prefix,
        key = void 0;
    if (oldKey && curKey) {
        key = oldFix + "$" + oldKey;
        if (oldKey !== curKey) {
            key = curKey + "/" + key;
        }
    } else {
        key = curKey || oldKey;
        if (key) {
            if (oldFix) {
                key = oldFix + "$" + key;
            }
        } else {
            key = oldFix || "." + index;
        }
    }
    return key.replace(rthimNumer, "$");
}
function escapeKey(key) {
    return String(key).replace(/[=:]/g, escaperFn);
}
var escaperLookup = {
    "=": "=0",
    ":": "=2"
};
function escaperFn(match) {
    return escaperLookup[match];
}

//用于后端的元素节点
function DOMElement(type) {
    this.nodeName = type;
    this.style = {};
    this.children = [];
}

var NAMESPACE = {
    svg: "http://www.w3.org/2000/svg",
    xmlns: "http://www.w3.org/2000/xmlns/",
    xlink: "http://www.w3.org/1999/xlink",
    math: "http://www.w3.org/1998/Math/MathML",
    xhtml: "http://www.w3.org/1999/xhtml",
    html: "https://www.w3.org/TR/html4/"
};

var fn = DOMElement.prototype = {
    contains: Boolean
};
String("replaceChild,appendChild,removeAttributeNS,setAttributeNS,removeAttribute,setAttribute" + ",getAttribute,insertBefore,removeChild,addEventListener,removeEventListener,attachEvent" + ",detachEvent").replace(/\w+/g, function (name) {
    fn[name] = function () {
        console.log("fire " + name); // eslint-disable-line
    };
});

//用于后端的document
var fakeDoc = new DOMElement();
fakeDoc.createElement = fakeDoc.createElementNS = fakeDoc.createDocumentFragment = function (type) {
    return new DOMElement(type);
};
fakeDoc.createTextNode = fakeDoc.createComment = Boolean;
fakeDoc.documentElement = new DOMElement("html");
fakeDoc.nodeName = "#document";
fakeDoc.textContent = "";
try {
    var w = window;
    var b = !!w.alert;
} catch (e) {
    b = false;
    w = {
        document: fakeDoc
    };
}


var win = w;

var document = w.document || fakeDoc;
var isStandard = "textContent" in document;
var fragment = document.createDocumentFragment();
function emptyElement(node) {
    var child;
    while (child = node.firstChild) {
        emptyElement(child);
        node.removeChild(child);
    }
}

function removeElement(node) {
    if (node.nodeType === 1) {
        if (isStandard) {
            node.textContent = "";
        } else {
            emptyElement(node);
        }
        node.__events = null;
    } else if (node.nodeType === 3) {
        //只回收文本节点
        if (recyclables["#text"].length < 100) {
            recyclables["#text"].push(node);
        }
    }
    fragment.appendChild(node);
    fragment.removeChild(node);
}

var versions = {
    88: 7, //IE7-8 objectobject
    80: 6, //IE6 objectundefined
    "00": NaN, // other modern browsers
    "08": NaN
};
/* istanbul ignore next  */
var msie = document.documentMode || versions[typeNumber(document.all) + "" + typeNumber(XMLHttpRequest)];

var modern = /NaN|undefined/.test(msie) || msie > 8;
function insertElement(container, target, insertPoint) {
    if (insertPoint) {
        container.insertBefore(target, insertPoint);
    } else {
        container.appendChild(target);
    }
}
function createElement$1(vnode, vparent) {
    var type = vnode.type;
    if (type === "#text") {
        //只重复利用文本节点
        var node = recyclables[type].pop();
        if (node) {
            node.nodeValue = vnode.text;
            return node;
        }
        return document.createTextNode(vnode.text);
    }

    if (type === "#comment") {
        return document.createComment(vnode.text);
    }

    var check = vparent || vnode;
    var ns = check.namespaceURI;
    if (type === "svg") {
        ns = NAMESPACE.svg;
    } else if (type === "math") {
        ns = NAMESPACE.math;
    } else if (check.type.toLowerCase() === "foreignobject" || !ns || ns === NAMESPACE.html || ns === NAMESPACE.xhtml) {
        return document.createElement(type);
    }
    try {
        vnode.namespaceURI = ns;
        return document.createElementNS(ns, type);
        //eslint-disable-next-line
    } catch (e) {
        return document.createElement(type);
    }
}

var globalEvents = {};
var eventPropHooks = {}; //用于在事件回调里对事件对象进行
var eventHooks = {}; //用于在元素上绑定特定的事件
//根据onXXX得到其全小写的事件名, onClick --> click, onClickCapture --> click,
// onMouseMove --> mousemove

var eventLowerCache = {
    onClick: "click",
    onChange: "change",
    onWheel: "wheel"
};
/**
 * 判定否为与事件相关
 *
 * @param {any} name
 * @returns
 */
function isEventName(name) {
    return (/^on[A-Z]/.test(name)
    );
}

var isTouch = "ontouchstart" in document;

function dispatchEvent(e, type, end) {
    //__type__ 在injectTapEventPlugin里用到
    e = new SyntheticEvent(e);
    if (type) {
        e.type = type;
    }
    var bubble = e.type;

    var hook = eventPropHooks[bubble];
    if (hook && false === hook(e)) {
        return;
    }
    var paths = collectPaths(e.target, end || document);
    var captured = bubble + "capture";
    options.async = true;
    if (options.async) {
        var cur = options.queue;
        if (cur !== options.dirtyComponents) {
            options.queue = options.dirtyComponents;
            options.queue.last = cur;
        }
    }
    triggerEventFlow(paths, captured, e);

    if (!e._stopPropagation) {
        triggerEventFlow(paths.reverse(), bubble, e);
    }
    options.async = false;
    options.flushUpdaters();
}

function collectPaths(from, end) {
    var paths = [];
    do {
        if (from === end) {
            break;
        }
        var events = from.__events;
        if (events) {
            paths.push({ dom: from, events: events });
        }
    } while ((from = from.parentNode) && from.nodeType === 1);
    // target --> parentNode --> body --> html
    return paths;
}

function triggerEventFlow(paths, prop, e) {
    for (var i = paths.length; i--;) {
        var path = paths[i];
        var fn = path.events[prop];
        if (isFn(fn)) {
            e.currentTarget = path.dom;
            fn.call(path.dom, e);
            if (e._stopPropagation) {
                break;
            }
        }
    }
}

function addGlobalEvent(name) {
    if (!globalEvents[name]) {
        globalEvents[name] = true;
        addEvent(document, name, dispatchEvent);
    }
}

function addEvent(el, type, fn, bool) {
    if (el.addEventListener) {
        el.addEventListener(type, fn, bool || false);
    } else if (el.attachEvent) {
        el.attachEvent("on" + type, fn);
    }
}

var rcapture = /Capture$/;
function getBrowserName(onStr) {
    var lower = eventLowerCache[onStr];
    if (lower) {
        return lower;
    }
    var camel = onStr.slice(2).replace(rcapture, "");
    lower = camel.toLowerCase();
    eventLowerCache[onStr] = lower;
    return lower;
}

eventPropHooks.click = function (e) {
    return !e.target.disabled;
};

/* IE6-11 chrome mousewheel wheelDetla 下 -120 上 120
            firefox DOMMouseScroll detail 下3 上-3
            firefox wheel detlaY 下3 上-3
            IE9-11 wheel deltaY 下40 上-40
            chrome wheel deltaY 下100 上-100 */
/* istanbul ignore next  */
var fixWheelType = "onmousewheel" in document ? "mousewheel" : document.onwheel !== void 666 ? "wheel" : "DOMMouseScroll";
var fixWheelDelta = fixWheelType === "mousewheel" ? "wheelDetla" : fixWheelType === "wheel" ? "deltaY" : "detail";
eventHooks.wheel = function (dom) {
    addEvent(dom, fixWheelType, function (e) {
        var delta = e[fixWheelDelta] > 0 ? -120 : 120;
        var deltaY = ~~dom.__wheel + delta;
        dom.__wheel = deltaY;
        e = new SyntheticEvent(e);
        e.type = "wheel";
        e.deltaY = deltaY;
        dispatchEvent(e);
    });
};

var fixFocus = {};
"blur,focus".replace(/\w+/g, function (type) {
    eventHooks[type] = function () {
        if (!fixFocus[type]) {
            fixFocus[type] = true;
            addEvent(document, type, dispatchEvent, true);
        }
    };
});
/**
 * 
DOM通过event对象的relatedTarget属性提供了相关元素的信息。这个属性只对于mouseover和mouseout事件才包含值；
对于其他事件，这个属性的值是null。IE不支持realtedTarget属性，但提供了保存着同样信息的不同属性。
在mouseover事件触发时，IE的fromElement属性中保存了相关元素；
在mouseout事件出发时，IE的toElement属性中保存着相关元素。
但fromElement与toElement可能同时都有值
 */
function getRelatedTarget(e) {
    if (!e.timeStamp) {
        e.relatedTarget = e.type === "mouseover" ? e.fromElement : e.toElement;
    }
    return e.relatedTarget;
}

function contains(a, b) {
    if (b) {
        while (b = b.parentNode) {
            if (b === a) {
                return true;
            }
        }
    }
    return false;
}

String("mouseenter,mouseleave").replace(/\w+/g, function (type) {
    eventHooks[type] = function (dom, name) {
        var mark = "__" + name;
        if (!dom[mark]) {
            dom[mark] = true;
            var mask = name === "mouseenter" ? "mouseover" : "mouseout";
            addEvent(dom, mask, function (e) {
                var t = getRelatedTarget(e);
                if (!t || t !== dom && !contains(dom, t)) {
                    var common = getLowestCommonAncestor(dom, t);
                    //由于不冒泡，因此paths长度为1
                    dispatchEvent(e, name, common);
                }
            });
        }
    };
});

function getLowestCommonAncestor(instA, instB) {
    var depthA = 0;
    for (var tempA = instA; tempA; tempA = tempA.parentNode) {
        depthA++;
    }
    var depthB = 0;
    for (var tempB = instB; tempB; tempB = tempB.parentNode) {
        depthB++;
    }

    // If A is deeper, crawl up.
    while (depthA - depthB > 0) {
        instA = instA.parentNode;
        depthA--;
    }

    // If B is deeper, crawl up.
    while (depthB - depthA > 0) {
        instB = instB.parentNode;
        depthB--;
    }

    // Walk in lockstep until we find a match.
    var depth = depthA;
    while (depth--) {
        if (instA === instB) {
            return instA;
        }
        instA = instA.parentNode;
        instB = instB.parentNode;
    }
    return null;
}

if (isTouch) {
    eventHooks.click = noop;
    eventHooks.clickcapture = noop;
}

function createHandle(name, fn) {
    return function (e) {
        if (fn && fn(e) === false) {
            return;
        }
        dispatchEvent(e, name);
    };
}

var changeHandle = createHandle("change");
var doubleClickHandle = createHandle("doubleclick");

//react将text,textarea,password元素中的onChange事件当成onInput事件
eventHooks.changecapture = eventHooks.change = function (dom) {
    if (/text|password/.test(dom.type)) {
        addEvent(document, "input", changeHandle);
    }
};

eventHooks.doubleclick = eventHooks.doubleclickcapture = function () {
    addEvent(document, "dblclick", doubleClickHandle);
};

function SyntheticEvent(event) {
    if (event.nativeEvent) {
        return event;
    }
    for (var i in event) {
        if (!eventProto[i]) {
            this[i] = event[i];
        }
    }
    if (!this.target) {
        this.target = event.srcElement;
    }
    this.fixEvent();
    this.timeStamp = new Date() - 0;
    this.nativeEvent = event;
}

var eventProto = SyntheticEvent.prototype = {
    fixEvent: function fixEvent() {}, //留给以后扩展用
    preventDefault: function preventDefault() {
        var e = this.nativeEvent || {};
        e.returnValue = this.returnValue = false;
        if (e.preventDefault) {
            e.preventDefault();
        }
    },
    fixHooks: function fixHooks() {},
    stopPropagation: function stopPropagation() {
        var e = this.nativeEvent || {};
        e.cancelBubble = this._stopPropagation = true;
        if (e.stopPropagation) {
            e.stopPropagation();
        }
    },
    persist: noop,
    stopImmediatePropagation: function stopImmediatePropagation() {
        this.stopPropagation();
        this.stopImmediate = true;
    },
    toString: function toString() {
        return "[object Event]";
    }
};
/* istanbul ignore next  */


var eventSystem = extend({
	eventPropHooks: eventPropHooks,
	eventHooks: eventHooks,
	eventLowerCache: eventLowerCache,
	isEventName: isEventName,
	isTouch: isTouch,
	dispatchEvent: dispatchEvent,
	addGlobalEvent: addGlobalEvent,
	addEvent: addEvent,
	getBrowserName: getBrowserName,
	createHandle: createHandle,
	SyntheticEvent: SyntheticEvent
});

//为了兼容yo
var check = function check() {
    return check;
};
check.isRequired = check;
var PropTypes = {
    array: check,
    bool: check,
    func: check,
    number: check,
    object: check,
    string: check,
    any: check,
    arrayOf: check,
    element: check,
    instanceOf: check,
    node: check,
    objectOf: check,
    oneOf: check,
    oneOfType: check,
    shape: check
};

/**
 *组件的基类
 *
 * @param {any} props
 * @param {any} context
 */
function Component(props, context) {
    //防止用户在构造器生成JSX
    Refs.currentOwner = this;
    this.context = context;
    this.props = props;
    this.refs = {};
    this.state = null;
}

Component.prototype = {
    constructor: Component, //必须重写constructor,防止别人在子类中使用Object.getPrototypeOf时找不到正确的基类
    replaceState: function replaceState() {
        deprecatedWarn("replaceState");
    },
    setState: function setState(state, cb) {
        debounceSetState(this.updater, state, cb);
    },
    isMounted: function isMounted() {
        deprecatedWarn("isMounted");
        return !!(this.updater || emptyObject)._hostNode;
    },
    forceUpdate: function forceUpdate(cb) {
        debounceSetState(this.updater, true, cb);
    },
    render: function render() {}
};

function debounceSetState(updater, state, cb) {
    if (!updater) {
        return;
    }
    if (updater._didUpdate) {
        //如果用户在componentDidUpdate中使用setState，要防止其卡死
        setTimeout(function () {
            updater._didUpdate = false;
            setStateImpl(updater, state, cb);
        }, 300);
        return;
    }
    setStateImpl(updater, state, cb);
}
function setStateImpl(updater, state, cb) {
    if (isFn(cb)) {
        updater._pendingCallbacks.push(cb);
    }
    if (state === true) {
        //forceUpdate
        updater._forceUpdate = true;
    } else {
        //setState
        updater._pendingStates.push(state);
    }
    if (updater._lifeStage == 0) {
        //组件挂载期
        //componentWillUpdate中的setState/forceUpdate应该被忽略
        if (updater._hydrating) {
            //在render方法中调用setState也会被延迟到下一周期更新.这存在两种情况，
            //1. 组件直接调用自己的setState
            //2. 子组件调用父组件的setState，
            updater._renderInNextCycle = true;
        }
    } else {
        //组件更新期
        if (updater._receiving) {
            //componentWillReceiveProps中的setState/forceUpdate应该被忽略
            return;
        }
        updater._renderInNextCycle = true;
        if (options.async) {
            //在事件句柄中执行setState会进行合并
            options.enqueueUpdater(updater);
            return;
        }
        if (updater._hydrating) {
            // 在componentDidMount里调用自己的setState，延迟到下一周期更新
            // 在更新过程中， 子组件在componentWillReceiveProps里调用父组件的setState，延迟到下一周期更新
            return;
        }
        //  不在生命周期钩子内执行setState
        var last = options.queue;
        var cur = options.queue = [updater];
        cur.last = last;
        options.flushUpdaters(cur);
        options.queue = cur.last || [];
    }
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * 为了兼容0.13之前的版本
 */
var NOBIND = {
    render: 1,
    shouldComponentUpdate: 1,
    componentWillReceiveProps: 1,
    componentWillUpdate: 1,
    componentDidUpdate: 1,
    componentWillMount: 1,
    componentDidMount: 1,
    componentWillUnmount: 1,
    componentDidUnmount: 1
};

function collectMixins(mixins) {
    var keyed = {};

    for (var i = 0; i < mixins.length; i++) {
        var mixin = mixins[i];
        if (mixin.mixins) {
            applyMixins(mixin, collectMixins(mixin.mixins));
        }

        for (var key in mixin) {
            if (mixin.hasOwnProperty(key) && key !== "mixins") {
                (keyed[key] || (keyed[key] = [])).push(mixin[key]);
            }
        }
    }

    return keyed;
}
var MANY_MERGED = {
    getInitialState: 1,
    getDefaultProps: 1,
    getChildContext: 1
};

function flattenHooks(key, hooks) {
    var hookType = _typeof(hooks[0]);
    if (hookType === "object") {
        // Merge objects
        hooks.unshift({});
        return Object.assign.apply(null, hooks);
    } else if (hookType === "function" && hooks.length > 1) {
        return function () {
            var ret = {},
                r = void 0,
                hasReturn = MANY_MERGED[key];
            for (var i = 0; i < hooks.length; i++) {
                r = hooks[i].apply(this, arguments);
                if (hasReturn && r) {
                    Object.assign(ret, r);
                }
            }
            if (hasReturn) {
                return ret;
            }
            return r;
        };
    } else {
        return hooks[0];
    }
}

function applyMixins(proto, mixins) {
    for (var key in mixins) {
        if (mixins.hasOwnProperty(key)) {
            proto[key] = flattenHooks(key, mixins[key].concat(proto[key] || []));
        }
    }
}

//创建一个构造器
function newCtor(className, spec) {
    var curry = Function("ReactComponent", "blacklist", "spec", "return function " + className + "(props, context) {\n      ReactComponent.call(this, props, context);\n\n     for (var methodName in this) {\n        var method = this[methodName];\n        if (typeof method  === \"function\"&& !blacklist[methodName]) {\n          this[methodName] = method.bind(this);\n        }\n      }\n\n      if (spec.getInitialState) {\n        var test = this.state = spec.getInitialState.call(this);\n        if(!(test === null || ({}).toString.call(test) == \"[object Object]\")){\n          throw \"getInitialState(): must return an object or null\"\n        }\n      }\n\n  };");
    return curry(Component, NOBIND, spec);
}

function createClass(spec) {
    deprecatedWarn("createClass");
    if (!isFn(spec.render)) {
        throw "请实现render方法";
    }
    var Constructor = newCtor(spec.displayName || "Component", spec);
    var proto = inherit(Constructor, Component);
    //如果mixins里面非常复杂，可能mixin还包含其他mixin
    if (spec.mixins) {
        applyMixins(spec, collectMixins(spec.mixins));
    }

    extend(proto, spec);

    if (spec.statics) {
        extend(Constructor, spec.statics);
    }
    "propTypes,contextTypes,childContextTypes,displayName".replace(/\w+/g, function (name) {
        if (spec[name]) {
            var props = Constructor[name] = spec[name];
            if (name !== "displayName") {
                for (var i in props) {
                    if (!isFn(props[i])) {
                        console.error(i + " in " + name + " must be a function"); // eslint-disable-line
                    }
                }
            }
        }
    });

    if (isFn(spec.getDefaultProps)) {
        Constructor.defaultProps = spec.getDefaultProps();
    }

    return Constructor;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
function shallowEqual(objA, objB) {
    if (Object.is(objA, objB)) {
        return true;
    }
    //确保objA, objB都是对象
    if (typeNumber(objA) < 7 || typeNumber(objB) < 7) {
        return false;
    }
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
        return false;
    }

    // Test for A's keys different from B.
    for (var i = 0; i < keysA.length; i++) {
        if (!hasOwnProperty.call(objB, keysA[i]) || !Object.is(objA[keysA[i]], objB[keysA[i]])) {
            return false;
        }
    }

    return true;
}

function PureComponent(props, context) {
    Component.call(this, props, context);
}

var fn$1 = inherit(PureComponent, Component);

fn$1.shouldComponentUpdate = function shallowCompare(nextProps, nextState) {
    var a = shallowEqual(this.props, nextProps);
    var b = shallowEqual(this.state, nextState);
    return !a || !b;
};
fn$1.isPureComponent = true;

var rnumber = /^-?\d+(\.\d+)?$/;
/**
     * 为元素样子设置样式
     * 
     * @export
     * @param {any} dom 
     * @param {any} lastStyle 
     * @param {any} nextStyle 
     */
function patchStyle(dom, lastStyle, nextStyle) {
    if (lastStyle === nextStyle) {
        return;
    }

    for (var name in nextStyle) {
        var val = nextStyle[name];
        if (lastStyle[name] !== val) {
            name = cssName(name, dom);
            if (val !== 0 && !val) {
                val = ""; //清除样式
            } else if (rnumber.test(val) && !cssNumber[name]) {
                val = val + "px"; //添加单位
            }
            try {
                //node.style.width = NaN;node.style.width = 'xxxxxxx';
                //node.style.width = undefine 在旧式IE下会抛异常
                dom.style[name] = val; //应用样式
            } catch (e) {
                console.log("dom.style[" + name + "] = " + val + "throw error"); // eslint-disable-line
            }
        }
    }
    // 如果旧样式存在，但新样式已经去掉
    for (var _name in lastStyle) {
        if (!(_name in nextStyle)) {
            _name = cssName(_name, dom);
            dom.style[_name] = ""; //清除样式
        }
    }
}

var cssNumber = oneObject("animationIterationCount,columnCount,order,flex,flexGrow,flexShrink,fillOpacity,fontWeight,lineHeight,opacity,orphans,widows,zIndex,zoom");

//var testStyle = document.documentElement.style
var prefixes = ["", "-webkit-", "-o-", "-moz-", "-ms-"];
var cssMap = oneObject("float", "cssFloat");

/**
 * 转换成当前浏览器可用的样式名
 * 
 * @param {any} name 
 * @returns 
 */
function cssName(name, dom) {
    if (cssMap[name]) {
        return cssMap[name];
    }
    var host = dom && dom.style || {};
    for (var i = 0, n = prefixes.length; i < n; i++) {
        var camelCase = camelize(prefixes[i] + name);
        if (camelCase in host) {
            return cssMap[name] = camelCase;
        }
    }
    return null;
}

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//布尔属性的值末必为true,false
//https://github.com/facebook/react/issues/10589
var controlled = {
    value: 1,
    defaultValue: 1
};

var isSpecialAttr = {
    style: 1,
    children: 1,
    innerHTML: 1,
    dangerouslySetInnerHTML: 1
};

var svgCache = {};
var strategyCache = {};
/**
 * 仅匹配 svg 属性名中的第一个驼峰处，如 viewBox 中的 wB，
 * 数字表示该特征在属性列表中重复的次数
 * -1 表示用 ":" 隔开的属性 (xlink:href, xlink:title 等)
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute
 */
var svgCamelCase = {
    w: { r: 1, b: 1, t: 1 },
    e: { n: 1, t: 1, f: 1, p: 1, c: 1, m: 1, a: 2, u: 1, s: 1, v: 1 },
    o: { r: 1 },
    c: { m: 1 },
    p: { p: 1 },
    t: { s: 2, t: 1, u: 1, c: 1, d: 1, o: 1, x: 1, y: 1, l: 1 },
    l: { r: 1, m: 1, u: 1, b: -1, l: -1, s: -1 },
    r: { r: 1, u: 2, h: 1, w: 1, c: 1, e: 1 },
    h: { r: 1, a: 1, l: 1, t: 1 },
    y: { p: 1, s: 1, t: 1, c: 1 },
    g: { c: 1 },
    k: { a: -1, h: -1, r: -1, s: -1, t: -1, c: 1, u: 1 },
    m: { o: 1, l: 1, a: 1 },
    n: { c: 1, t: 1, u: 1 },
    s: { a: 3 },
    f: { x: 1, y: 1 },
    d: { e: 1, f: 1, m: 1, d: 1 },
    x: { c: 1 }
};

// SVG 属性列表中驼峰命名和短横线分隔命名特征值有重复
// 列出了重复特征中的短横线命名的属性名
var specialSVGPropertyName = {
    "overline-thickness": 2,
    "underline-thickness": 2,
    "overline-position": 2,
    "underline-position": 2,
    "stroke-miterlimit": 2,
    "baseline-shift": 2,
    "clip-path": 2,
    "font-size": 2,
    "font-size-adjust": 2,
    "font-stretch": 2,
    "font-style": 2,
    "text-decoration": 2,
    "vert-origin-x": 2,
    "vert-origin-y": 2,
    "paint-order": 2,
    "fill-rule": 2,
    "color-rendering": 2,
    "marker-end": 2,
    "pointer-events": 2,
    "units-per-em": 2,
    "strikethrough-thickness": 2,
    "lighting-color": 2
};

// 重复属性名的特征值列表
var repeatedKey = ["et", "ep", "em", "es", "pp", "ts", "td", "to", "lr", "rr", "re", "ht", "gc"];

function createRepaceFn(split) {
    return function (match) {
        return match.slice(0, 1) + split + match.slice(1).toLowerCase();
    };
}

var rhump = /[a-z][A-Z]/;
var toHyphen = createRepaceFn("-");
var toColon = createRepaceFn(":");

function getSVGAttributeName(name) {
    if (svgCache[name]) {
        return svgCache[name];
    }
    var key = name.match(rhump);
    if (!key) {
        return svgCache[name] = name;
    }

    var _ref = [].concat(_toConsumableArray(key[0].toLowerCase())),
        prefix = _ref[0],
        postfix = _ref[1];

    var orig = name;
    if (svgCamelCase[prefix] && svgCamelCase[prefix][postfix]) {
        var count = svgCamelCase[prefix][postfix];

        if (count === -1) {
            return svgCache[orig] = {
                name: name.replace(rhump, toColon),
                ifSpecial: true
            };
        }

        if (~repeatedKey.indexOf(prefix + postfix)) {
            var dashName = name.replace(rhump, toHyphen);
            if (specialSVGPropertyName[dashName]) {
                name = dashName;
            }
        }
    } else {
        name = name.replace(rhump, toHyphen);
    }

    return svgCache[orig] = name;
}

function diffProps(dom, lastProps, nextProps, vnode) {
    var isSVG = vnode.namespaceURI === NAMESPACE.svg;
    var tag = vnode.type;
    //eslint-disable-next-line
    for (var name in nextProps) {
        var val = nextProps[name];
        if (val !== lastProps[name]) {
            var which = tag + isSVG + name;
            var action = strategyCache[which];
            if (!action) {
                action = strategyCache[which] = getPropAction(dom, name, isSVG);
            }
            actionStrategy[action](dom, name, val, lastProps);
        }
    }
    //如果旧属性在新属性对象不存在，那么移除DOM eslint-disable-next-line
    for (var _name in lastProps) {
        if (!nextProps.hasOwnProperty(_name)) {
            var _which = tag + isSVG + _name;
            var _action = strategyCache[_which];
            actionStrategy[_action](dom, _name, false, lastProps);
        }
    }
}

function isBooleanAttr(dom, name) {
    var val = dom[name];
    return val === true || val === false;
}
/**
 * 根据一个属性所在的元素或元素的文档类型，就可以永久决定该使用什么策略操作它
 * 
 * @param {any} dom 元素节点
 * @param {any} name 属性名
 * @param {any} isSVG 
 * @returns 
 */
function getPropAction(dom, name, isSVG) {
    if (isSVG && name === "className") {
        return "svgClass";
    }
    if (isSpecialAttr[name]) {
        return name;
    }
    if (isEventName(name)) {
        return "event";
    }
    if (isSVG) {
        return "svgAttr";
    }
    if (isBooleanAttr(dom, name)) {
        return "booleanAttr";
    }

    return name.indexOf("data-") === 0 || dom[name] === void 666 ? "attribute" : "property";
}
var builtinStringProps = {
    className: 1,
    title: 1,
    name: 1,
    alt: 1,
    lang: 1,
    value: 1
};
var actionStrategy = {
    innerHTML: noop,
    children: noop,
    style: function style(dom, _, val, lastProps) {
        patchStyle(dom, lastProps.style || emptyObject, val || emptyObject);
    },
    svgClass: function svgClass(dom, name, val) {
        if (!val) {
            dom.removeAttribute("class");
        } else {
            dom.setAttribute("class", val);
        }
    },
    svgAttr: function svgAttr(dom, name, val) {
        // http://www.w3school.com.cn/xlink/xlink_reference.asp
        // https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html#notable-enh
        // a ncements xlinkActuate, xlinkArcrole, xlinkHref, xlinkRole, xlinkShow,
        // xlinkTitle, xlinkType eslint-disable-next-line
        var method = typeNumber(val) < 3 && !val ? "removeAttribute" : "setAttribute";
        var nameRes = getSVGAttributeName(name);
        if (nameRes.ifSpecial) {
            var prefix = nameRes.name.split(":")[0];
            // 将xlinkHref 转换为 xlink:href
            dom[method + "NS"](NAMESPACE[prefix], nameRes.name, val || "");
        } else {
            dom[method](nameRes, val || "");
        }
    },
    booleanAttr: function booleanAttr(dom, name, val) {
        // 布尔属性必须使用el.xxx = true|false方式设值 如果为false, IE全系列下相当于setAttribute(xxx,""),
        // 会影响到样式,需要进一步处理 eslint-disable-next-line
        dom[name] = !!val;
        if (dom[name] === false) {
            dom.removeAttribute(name);
        } else if (dom[name] === "false") {
            //字符串属性会将它转换为false
            dom[name] = "";
        }
    },
    attribute: function attribute(dom, name, val) {
        if (val == null || val === false) {
            return dom.removeAttribute(name);
        }
        try {
            dom.setAttribute(name, val);
        } catch (e) {
            console.warn("setAttribute error", name, val); // eslint-disable-line
        }
    },
    property: function property(dom, name, val) {
        if (name !== "value" || dom[name] !== val) {
            // 尝试直接赋值，部分情况下会失败，如给 input 元素的 size 属性赋值 0 或字符串
            // 这时如果用 setAttribute 则会静默失败
            try {
                if (!val && val !== 0) {
                    //如果它是字符串属性，并且不等于""，清空
                    // if (typeNumber(dom[name]) === 4 && dom[name] !== "") {
                    if (builtinStringProps[name]) {
                        dom[name] = "";
                    }
                    // }
                    dom.removeAttribute(name);
                } else {
                    dom[name] = val;
                }
            } catch (e) {
                dom.setAttribute(name, val);
            }
            if (controlled[name]) {
                dom._lastValue = val;
            }
        }
    },
    event: function event(dom, name, val, lastProps) {
        var events = dom.__events || (dom.__events = {});
        var refName = toLowerCase(name.slice(2));
        if (val === false) {
            delete events[refName];
        } else {
            if (!lastProps[name]) {
                //添加全局监听事件
                var eventName = getBrowserName(name);
                var hook = eventHooks[eventName];
                addGlobalEvent(eventName);
                if (hook) {
                    hook(dom, eventName);
                }
            }
            //onClick --> click, onClickCapture --> clickcapture
            events[refName] = val;
        }
    },
    dangerouslySetInnerHTML: function dangerouslySetInnerHTML(dom, name, val, lastProps) {
        var oldhtml = lastProps[name] && lastProps[name].__html;
        var html = val && val.__html;
        if (html !== oldhtml) {
            dom.innerHTML = html;
        }
    }
};

function disposeVnode(vnode) {
    if (!vnode || vnode._disposed) {
        return;
    }
    var instance = vnode._instance;
    if (vnode._hasRef) {
        vnode._hasRef = false;
        Refs.fireRef(vnode, null);
    }
    if (instance) {
        disposeComponent(vnode, instance);
    } else if (vnode.vtype === 1) {
        disposeElement(vnode);
    }
    vnode._disposed = true;
}

function disposeElement(vnode) {
    var props = vnode.props,
        vchildren = vnode.vchildren;

    if (props[innerHTML]) {
        removeElement(vnode._hostNode);
    } else {
        for (var i = 0, n = vchildren.length; i < n; i++) {
            disposeVnode(vchildren[i]);
        }
        vchildren.length = 0;
    }
}

function disposeComponent(vnode, instance) {
    options.beforeUnmount(instance);
    instance.setState = instance.forceUpdate = noop;
    if (instance.componentWillUnmount) {
        instance.componentWillUnmount();
    }
    var updater = instance.updater;
    //在执行componentWillUnmount后才将关联的元素节点解绑，防止用户在钩子里调用 findDOMNode方法
    disposeVnode(updater.rendered);
    updater._renderInNextCycle = vnode._instance = instance.updater = null;
}

/**
 input, select, textarea这几个元素如果指定了value/checked的**状态属性**，就会包装成受控组件或非受控组件
 受控组件是指，用户除了为它指定**状态属性**，还为它指定了onChange/onInput/disabled等用于控制此状态属性
 变动的属性
 反之，它就是非受控组件，非受控组件会在框架内部添加一些事件，阻止**状态属性**被用户的行为改变，只能被setState改变
 */
var duplexData = {
    1: ["value", {
        onChange: 1,
        onInput: 1,
        readOnly: 1,
        disabled: 1
    }, "oninput", preventUserInput],
    2: ["checked", {
        onChange: 1,
        onClick: 1,
        readOnly: 1,
        disabled: 1
    }, "onclick", preventUserClick],
    3: ["value", {
        onChange: 1,
        disabled: 1
    }, "onchange", preventUserChange]
};

var duplexMap = {
    color: 1,
    date: 1,
    datetime: 1,
    "datetime-local": 1,
    email: 1,
    month: 1,
    number: 1,
    password: 1,
    range: 1,
    search: 1,
    tel: 1,
    text: 1,
    time: 1,
    url: 1,
    week: 1,
    textarea: 1,
    checkbox: 2,
    radio: 2,
    "select-one": 3,
    "select-multiple": 3
};

function processFormElement(vnode, dom, props) {
    var domType = dom.type;
    var duplexType = duplexMap[domType];
    if (duplexType) {
        var data = duplexData[duplexType];
        var duplexProp = data[0];
        var keys = data[1];
        var eventName = data[2];

        if (duplexProp in props && !hasOtherControllProperty(props, keys)) {
            // eslint-disable-next-line
            console.warn("\u4F60\u4E3A" + vnode.type + "[type=" + domType + "]\u5143\u7D20\u6307\u5B9A\u4E86" + duplexProp + "\u5C5E\u6027\uFF0C\n      \u4F46\u662F\u6CA1\u6709\u63D0\u4F9B\u53E6\u5916\u7684" + Object.keys(keys) + "\u6765\u63A7\u5236" + duplexProp + "\u5C5E\u6027\u7684\u53D8\u5316\n      \u90A3\u4E48\u5B83\u5373\u4E3A\u4E00\u4E2A\u975E\u53D7\u63A7\u7EC4\u4EF6\uFF0C\u7528\u6237\u65E0\u6CD5\u901A\u8FC7\u8F93\u5165\u6539\u53D8\u5143\u7D20\u7684" + duplexProp + "\u503C");
            dom[eventName] = data[3];
        }
        if (duplexType === 3) {
            postUpdateSelectedOptions(vnode, dom);
        }
    } else {
        dom.duplexValue = props.value === undefined ? typeNumber(props.children) > 4 ? dom.text : props.children : props.value;
    }
}

function hasOtherControllProperty(props, keys) {
    for (var key in props) {
        if (keys[key]) {
            return true;
        }
    }
}

function preventUserInput(e) {
    var target = e.target;
    var name = e.type === "textarea" ? "innerHTML" : "value";
    target[name] = target._lastValue;
}

function preventUserClick(e) {
    e.preventDefault();
}

function preventUserChange(e) {
    var target = e.target,
        value = target._lastValue,
        options$$1 = target.options;
    if (target.multiple) {
        updateOptionsMore(options$$1, options$$1.length, value);
    } else {
        updateOptionsOne(options$$1, options$$1.length, value);
    }
}

function postUpdateSelectedOptions(vnode, target) {
    var props = vnode.props,
        multiple = !!props.multiple;
    target._lastValue = typeNumber(props.value) > 1 ? props.value : typeNumber(props.defaultValue) > 1 ? props.defaultValue : multiple ? [] : "";
    preventUserChange({
        target: target
    });
}

function updateOptionsOne(options$$1, n, propValue) {
    var stringValues = {};
    for (var i = 0; i < n; i++) {
        var option = options$$1[i];
        var value = option.duplexValue;
        if (value === propValue) {
            //精确匹配
            return setOptionSelected(option, true);
        }
        stringValues[value] = option;
    }
    var match = stringValues[propValue];
    if (match) {
        //字符串模糊匹配
        return setOptionSelected(match, true);
    }
    if (n) {
        //选中第一个
        setOptionSelected(options$$1[0], true);
    }
}

function updateOptionsMore(options$$1, n, propValue) {
    var selectedValue = {};
    try {
        for (var i = 0; i < propValue.length; i++) {
            selectedValue["&" + propValue[i]] = true;
        }
    } catch (e) {
        /* istanbul ignore next */
        console.warn('<select multiple="true"> 的value应该对应一个字符串数组'); // eslint-disable-line
    }
    for (var _i = 0; _i < n; _i++) {
        var option = options$$1[_i];
        var value = option.duplexValue;
        var selected = selectedValue.hasOwnProperty("&" + value);
        setOptionSelected(option, selected);
    }
}

function setOptionSelected(dom, selected) {
    dom.selected = selected;
}

var mountOrder = 1;
function alwaysNull() {
    return null;
}
function Updater(instance, vnode) {
    vnode._instance = instance;
    instance.updater = this;
    this._mountOrder = mountOrder++;
    this._instance = instance;
    this._pendingCallbacks = [];
    // this._openRef = false;
    this._didHook = noop;
    this._pendingStates = [];
    this._lifeStage = 0; //判断生命周期
    //update总是保存最新的数据，如state, props, context, parentContext, vparent
    this.vnode = vnode;
    //  this._hydrating = true 表示组件正在根据虚拟DOM合成真实DOM
    //  this._renderInNextCycle = true 表示组件需要在下一周期重新渲染
    //  this._forceUpdate = true 表示会无视shouldComponentUpdate的结果
    if (instance.__isStateless) {
        this.mergeStates = alwaysNull;
    }
}

Updater.prototype = {
    mergeStates: function mergeStates() {
        var instance = this._instance,
            pendings = this._pendingStates,
            state = instance.state,
            n = pendings.length;
        if (n === 0) {
            return state;
        }
        var nextState = extend({}, state); //每次都返回新的state
        for (var i = 0; i < n; i++) {
            var pending = pendings[i];
            if (pending && pending.call) {
                pending = pending.call(instance, nextState, this.props);
            }
            extend(nextState, pending);
        }
        pendings.length = 0;
        return nextState;
    },

    _ref: function _ref() {
        var vnode = this.vnode;
        if (vnode.ref && this._openRef) {
            var inst = this._instance;
            Refs.fireRef(vnode, inst.__isStateless ? null : inst);
            this._openRef = false;
        }
    },
    renderComponent: function renderComponent(cb, rendered) {
        var vnode = this.vnode,
            parentContext = this.parentContext,
            instance = this._instance;
        //调整全局的 CurrentOwner.cur

        if (!rendered) {
            var lastOwn = Refs.currentOwner;
            Refs.currentOwner = instance;
            try {
                if (this.willReceive === false) {
                    rendered = this.rendered;
                    delete this.willReceive;
                } else {
                    rendered = instance.render();
                }
            } finally {
                Refs.currentOwner = lastOwn;
            }
        }

        //组件只能返回组件或null
        if (rendered === null || rendered === false) {
            rendered = { type: "#comment", text: "empty", vtype: 0 };
        } else if (!rendered || !rendered.type) {
            //true, undefined, array, {}
            throw new Error("@" + vnode.type.name + "#render:You may have returned undefined, an array or some other invalid object");
        }

        var childContext = rendered.vtype ? getChildContext(instance, parentContext) : parentContext;
        var dom = cb(rendered, this.vparent, childContext);
        if (rendered._hostNode) {
            this.rendered = rendered;
        }
        if (!dom) {
            throw ["必须返回节点", rendered];
        }
        var u = this;
        do {
            u.vnode._hostNode = u._hostNode = dom;
        } while (u = u.parentUpdater);

        return dom;
    }
};

function instantiateComponent(type, vnode, props, context) {
    var isStateless = vnode.vtype === 4;
    var instance = isStateless ? {
        refs: {},
        render: function render() {
            return type(this.props, this.context);
        }
    } : new type(props, context);
    var updater = new Updater(instance, vnode, props, context);
    //props, context是不可变的
    instance.props = updater.props = props;
    instance.context = updater.context = context;
    instance.constructor = type;
    updater.displayName = type.displayName || type.name;

    if (isStateless) {
        var lastOwn = Refs.currentOwner;
        Refs.currentOwner = instance;
        try {
            var mixin = instance.render();
        } finally {
            Refs.currentOwner = lastOwn;
        }
        if (mixin && mixin.render) {
            //支持module pattern component
            extend(instance, mixin);
        } else {
            instance.__isStateless = true;
            updater.rendered = mixin;
        }
    }

    return instance;
}

function drainQueue(queue) {
    options.beforePatch();
    //先执行所有refs方法（从上到下）
    Refs.clearRefs(); //假如一个组件实例也没有，也要把所有元素虚拟DOM的ref执行

    var needSort = [],
        unique = {},
        updater = void 0;
    while (updater = queue.shift()) {
        //queue可能中途加入新元素,  因此不能直接使用queue.forEach(fn)
        if (updater._disposed) {
            continue;
        }

        if (!unique[updater._mountOrder]) {
            unique[updater._mountOrder] = 1;
            needSort.push(updater);
        }
        Refs.clearRefs();
        updater._didUpdate = updater._lifeStage === 2;
        updater._didHook(); //执行所有mount/update钩子（从下到上）
        updater._lifeStage = 1;
        updater._hydrating = false;
        if (!updater._renderInNextCycle) {
            updater._didUpdate = false;
        }
        updater._ref(); //执行组件虚拟DOM的ref
        //如果组件在componentDidMount中调用setState
        if (updater._renderInNextCycle) {
            options.patchComponent(updater);
        }
    }
    //再执行所有setState/forceUpdate回调，根据从下到上的顺序执行
    needSort.sort(mountSorter).forEach(function (updater) {
        clearArray(updater._pendingCallbacks).forEach(function (fn) {
            fn.call(updater._instance);
        });
    });
    options.afterPatch();
}

var dirtyComponents = options.dirtyComponents;
function mountSorter(u1, u2) {
    //按文档顺序执行
    return u1._mountOrder - u2._mountOrder;
}

options.flushUpdaters = function (queue) {
    if (!queue) {
        var last = dirtyComponents.last;
        if (!last) {
            return;
        }
        queue = clearArray(dirtyComponents);
        dirtyComponents.last = null;
        if (queue.length) {
            options.queue = queue;
            queue.last = last;
            queue.sort(mountSorter);
        } else {
            options.queue = last;
        }
    }
    drainQueue(queue);
};

options.enqueueUpdater = function (updater) {
    if (dirtyComponents.indexOf(updater) == -1) {
        dirtyComponents.push(updater);
    }
};

//[Top API] React.isValidElement
function isValidElement(vnode) {
    return vnode && vnode.vtype;
}
//[Top API] ReactDOM.render
function render(vnode, container, callback) {
    return renderByAnu(vnode, container, callback);
}
//[Top API] ReactDOM.unstable_renderSubtreeIntoContainer
function unstable_renderSubtreeIntoContainer(lastVnode, nextVnode, container, callback) {
    deprecatedWarn("unstable_renderSubtreeIntoContainer");
    var parentContext = lastVnode && lastVnode.context || {};
    return renderByAnu(nextVnode, container, callback, parentContext);
}
//[Top API] ReactDOM.unmountComponentAtNode
function unmountComponentAtNode(container) {
    var lastVnode = container.__component;
    if (lastVnode) {
        disposeVnode(lastVnode);
        emptyElement(container);
        container.__component = null;
    }
}
//[Top API] ReactDOM.findDOMNode
function findDOMNode(ref) {
    if (ref == null) {
        return null;
    }
    if (ref.nodeType === 1) {
        return ref;
    }

    return ref.updater ? ref.updater._hostNode : ref._hostNode || null;
}
//[Top API] ReactDOM.createPortal
function createPortal(vchildren, container) {
    var parentVnode = getVParent(container);
    parentVnode.vchildren = container.vchildren || emptyArray;
    diffChildren(getVParent(container), vchildren, container, {});
    parentVnode.vchildren = vchildren;
    return null;
}
// 用于辅助XML元素的生成（svg, math),
// 它们需要根据父节点的tagName与namespaceURI,知道自己是存在什么文档中
function getVParent(container) {
    return {
        type: container.nodeName,
        namespaceURI: container.namespaceURI
    };
}

// ReactDOM.render的内部实现
function renderByAnu(vnode, container, callback) {
    var context = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    if (!isValidElement(vnode)) {
        throw "ReactDOM.render\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u9519\u8BEF"; // eslint-disable-line
    }
    if (!(container && container.getElementsByTagName)) {
        throw "ReactDOM.render\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u9519\u8BEF"; // eslint-disable-line
    }
    var rootNode = void 0,
        lastVnode = container.__component;

    if (lastVnode) {
        rootNode = alignVnode(lastVnode, vnode, getVParent(container), context);
    } else {
        //如果是后端渲染生成，它的孩子中存在一个拥有data-reactroot属性的元素节点
        rootNode = genVnodes(container, vnode, context);
    }

    if (rootNode.setAttribute) {
        rootNode.setAttribute("data-reactroot", "");
    }

    var instance = vnode._instance;
    container.__component = vnode;
    drainQueue(options.queue);
    //   drainQueue(updateQueue);
    Refs.currentOwner = null; //防止干扰
    var ret = instance || rootNode;
    if (callback) {
        callback.call(ret); //坑
    }
    //组件返回组件实例，而普通虚拟DOM 返回元素节点
    return ret;
}
var toArray = Array.from || function (a) {
    var ret = [];
    for (var i = 0, n = a.length; i < n; i++) {
        ret[i] = a[i];
    }
    return ret;
};
function genVnodes(container, vnode, context) {
    var nodes = toArray(container.childNodes || emptyArray);
    var lastNode = null;
    for (var i = 0, el; el = nodes[i++];) {
        if (el.getAttribute && el.getAttribute("data-reactroot") !== null) {
            lastNode = el;
        } else {
            container.removeChild(el);
        }
    }
    return container.appendChild(mountVnode(lastNode, vnode, getVParent(container), context));
}

var patchStrategy = {
    0: mountText,
    1: mountElement,
    2: mountComponent,
    4: mountComponent,
    10: updateText,
    11: updateElement,
    12: updateComponent,
    14: updateComponent
};
//mountVnode只是转换虚拟DOM为真实DOM，不做插入DOM树操作
function mountVnode(lastNode, vnode) {
    return patchStrategy[vnode.vtype].apply(null, arguments);
}

function updateVnode(lastVnode) {
    return patchStrategy[lastVnode.vtype + 10].apply(null, arguments);
}

function mountText(lastNode, vnode) {
    if (!lastNode || lastNode.nodeName !== vnode.type) {
        lastNode = createElement$1(vnode);
    }
    return vnode._hostNode = lastNode;
}

function updateText(lastVnode, nextVnode) {
    var dom = lastVnode._hostNode;
    nextVnode._hostNode = dom;
    if (lastVnode.text !== nextVnode.text) {
        dom.nodeValue = nextVnode.text;
    }
    return dom;
}

function genMountElement(lastNode, vnode, vparent, type) {
    if (lastNode && toLowerCase(lastNode.nodeName) === type) {
        return lastNode;
    } else {
        var dom = createElement$1(vnode, vparent);
        if (lastNode) {
            while (lastNode.firstChild) {
                dom.appendChild(lastNode.firstChild);
            }
        }
        return dom;
    }
}

var formElements = {
    select: 1,
    textarea: 1,
    input: 1,
    option: 1
};

function mountElement(lastNode, vnode, vparent, context) {
    var type = vnode.type,
        props = vnode.props,
        _hasRef = vnode._hasRef;

    var dom = genMountElement(lastNode, vnode, vparent, type);
    vnode._hostNode = dom;
    var children = flattenChildren(vnode);
    var method = lastNode ? alignChildren : mountChildren;
    method(dom, children, vnode, context);
    // dom.vchildren = children;/** fatal 不再访问真实DOM */
    if (vnode.checkProps) {
        diffProps(dom, emptyObject, props, vnode);
    }
    if (formElements[type]) {
        processFormElement(vnode, dom, props);
    }
    if (_hasRef) {
        pendingRefs.push(vnode, dom);
    }
    return dom;
}

function updateElement(lastVnode, nextVnode, vparent, context) {
    var lastProps = lastVnode.props,
        dom = lastVnode._hostNode,
        checkProps = lastVnode.checkProps,
        type = lastVnode.type;
    var nextProps = nextVnode.props,
        nextCheckProps = nextVnode.checkProps;

    nextVnode._hostNode = dom;
    var vchildren = lastVnode.vchildren || emptyArray,
        newChildren = void 0;

    if (nextProps[innerHTML]) {
        vchildren.forEach(function (el) {
            disposeVnode(el);
        });
        vchildren.length = 0;
    } else {
        if (nextVnode === lastVnode) {
            //如果新旧节点一样，为了防止旧vchildren被重写，需要restore一下
            newChildren = vchildren.concat();
        } else {
            newChildren = flattenChildren(nextVnode);
        }
        if (lastProps[innerHTML]) {
            vchildren.length = 0;
        }
        diffChildren(lastVnode, newChildren, dom, context);
        nextVnode.vchildren = newChildren;
    }
    if (checkProps || nextCheckProps) {
        diffProps(dom, lastProps, nextProps, nextVnode);
    }
    if (formElements[type]) {
        processFormElement(nextVnode, dom, nextProps);
    }
    Refs.detachRef(lastVnode, nextVnode, dom);
    return dom;
}

//将虚拟DOM转换为真实DOM并插入父元素
function mountChildren(parentNode, children, vparent, context) {
    for (var i = 0, n = children.length; i < n; i++) {
        var vnode = children[i];
        parentNode.appendChild(mountVnode(null, vnode, vparent, context));
    }
}

function alignChildren(parentNode, children, vparent, context) {
    var childNodes = parentNode.childNodes,
        insertPoint = childNodes[0] || null,
        j = 0,
        n = children.length;
    for (var i = 0; i < n; i++) {
        var vnode = children[i];
        var lastNode = childNodes[j];
        var dom = mountVnode(lastNode, vnode, vparent, context);
        if (dom === lastNode) {
            j++;
        }
        parentNode.insertBefore(dom, insertPoint);
        insertPoint = dom.nextSibling;
    }
    while (childNodes[n]) {
        parentNode.removeChild(childNodes[n]);
    }
}

function mountComponent(lastNode, vnode, vparent, parentContext, parentUpdater) {
    var type = vnode.type,
        props = vnode.props,
        ref = vnode.ref;

    var context = getContextByTypes(parentContext, type.contextTypes);
    var instance = instantiateComponent(type, vnode, props, context); //互相持有引用
    var updater = instance.updater;
    if (parentUpdater) {
        updater.parentUpdater = parentUpdater;
    }
    updater.vparent = vparent;
    updater.parentContext = parentContext;
    if (instance.componentWillMount) {
        instance.componentWillMount(); //这里可能执行了setState
        instance.state = updater.mergeStates();
    }

    updater._hydrating = true;
    var dom = updater.renderComponent(function (nextRendered, vparent, childContext) {
        return mountVnode(lastNode, nextRendered, vparent, childContext, updater //作为parentUpater往下传
        );
    }, updater.rendered);
    updater._openRef = !!ref;
    var userHook = instance.componentDidMount;
    updater._didHook = function () {
        userHook && userHook.call(instance);
        updater._didHook = noop;
        options.afterMount(instance);
    };
    options.queue.push(updater);

    return dom;
}

function updateComponent(lastVnode, nextVnode, vparent, parentContext) {
    var type = lastVnode.type,
        _hasRef = lastVnode._hasRef,
        instance = lastVnode._instance,
        _hostNode = lastVnode._hostNode;

    var nextContext = void 0,
        nextProps = nextVnode.props,
        updater = instance.updater;
    if (type.contextTypes) {
        nextContext = getContextByTypes(parentContext, type.contextTypes);
    } else {
        nextContext = instance.context; //没有定义contextTypes就沿用旧的
    }
    var willReceive = lastVnode !== nextVnode || updater.context !== nextContext;
    nextVnode._hostNode = _hostNode;
    nextVnode._instance = instance;
    updater.willReceive = willReceive;
    //如果context与props都没有改变，那么就不会触发组件的receive，render，update等一系列钩子
    //但还会继续向下比较

    if (willReceive && instance.componentWillReceiveProps) {
        updater._receiving = true;
        instance.componentWillReceiveProps(nextProps, nextContext);
        updater._receiving = false;
    }

    _hasRef && Refs.detachRef(lastVnode, nextVnode);
    updater._openRef = nextVnode.ref;
    //updater上总是保持新的数据

    updater.context = nextContext;
    updater.props = nextProps;
    updater.vparent = vparent;
    updater.parentContext = parentContext;
    // nextVnode._instance = instance; //不能放这里
    if (!willReceive) {
        return updater.renderComponent(function (nextRendered, vparent, childContext) {
            return alignVnode(updater.rendered, nextRendered, vparent, childContext);
        });
    }
    updater.vnode = nextVnode;
    patchComponent(updater);
    //子组件先执行
    options.queue.push(updater);
    return updater._hostNode;
}

function patchComponent(updater) {
    var instance = updater._instance,
        dom = updater._hostNode,
        nextContext = updater.context,
        nextProps = updater.props,
        vnode = updater.vnode;


    vnode._instance = instance; //放这里
    updater._renderInNextCycle = null;

    var nextState = updater.mergeStates();
    var shouldUpdate = true;
    if (!updater._forceUpdate && instance.shouldComponentUpdate && !instance.shouldComponentUpdate(nextProps, nextState, nextContext)) {
        shouldUpdate = false;
    } else if (instance.componentWillUpdate) {
        instance.componentWillUpdate(nextProps, nextState, nextContext);
    }
    var lastProps = instance.props,
        lastContext = instance.context,
        lastState = instance.state;


    updater._forceUpdate = false;
    instance.state = nextState; //既然setState了，无论shouldComponentUpdate结果如何，用户传给的state对象都会作用到组件上
    instance.context = nextContext;
    if (!shouldUpdate) {
        options.queue.push(updater);
        return dom;
    }
    instance.props = nextProps;
    updater._hydrating = true;
    var lastRendered = updater.rendered;

    dom = updater.renderComponent(function (nextRendered, vparent, childContext) {
        return alignVnode(lastRendered, nextRendered, vparent, childContext, updater);
    });

    updater._lifeStage = 2;
    var userHook = instance.componentDidUpdate;

    updater._didHook = function () {
        userHook && userHook.call(instance, lastProps, lastState, lastContext);
        updater._didHook = noop;
        options.afterUpdate(instance);
    };
    options.queue.push(updater);
    return dom;
}
options.patchComponent = patchComponent;
var fakeLastNode = {
    _disposed: true
};
function alignVnode(lastVnode, nextVnode, vparent, context, parentUpdater) {
    var dom = void 0;
    if (isSameNode(lastVnode, nextVnode)) {
        dom = updateVnode(lastVnode, nextVnode, vparent, context);
    } else {
        disposeVnode(lastVnode);
        var node = lastVnode._hostNode,
            parentNode = node.parentNode;
        dom = mountVnode(null, nextVnode, vparent, context, parentUpdater);
        parentNode.replaceChild(dom, node);
    }
    return dom;
}

function genkey(vnode) {
    return vnode.key ? "@" + vnode.key : vnode.type.name || vnode.type;
}

function diffChildren(parentVnode, nextChildren, parentNode, context) {
    var lastChildren = parentVnode.vchildren || emptyArray,
        //parentNode.vchildren,
    nextLength = nextChildren.length,
        insertPoint = parentNode.firstChild,
        lastLength = lastChildren.length;

    //optimize 1： 如果旧数组长度为零, 只进行添加
    if (!lastLength) {
        emptyElement(parentNode);
        return mountChildren(parentNode, nextChildren, parentVnode, context);
    }
    //optimize 2： 如果新数组长度为零, 只进行删除
    if (!nextLength) {
        return lastChildren.forEach(function (el) {
            removeElement(el._hostNode);
            disposeVnode(el);
        });
    }
    //optimize 3： 如果1vs1, 不用进入下面复杂的循环
    if (nextLength === lastLength && lastLength === 1) {
        if (insertPoint) {
            lastChildren[0]._hostNode = insertPoint;
        }
        return alignVnode(lastChildren[0], nextChildren[0], parentVnode, context);
    }
    var mergeChildren = [],
        //确保新旧数组都按原顺数排列
    fuzzyHits = {},
        i = 0,
        hit = void 0,
        oldDom = void 0,
        dom = void 0,
        nextChild = void 0;

    lastChildren.forEach(function (lastChild) {
        hit = genkey(lastChild);
        mergeChildren.push(lastChild);
        var hits = fuzzyHits[hit];
        if (hits) {
            hits.push(lastChild);
        } else {
            fuzzyHits[hit] = [lastChild];
        }
    });

    while (i < nextLength) {
        nextChild = nextChildren[i];
        nextChild._new = true;
        hit = genkey(nextChild);
        if (fuzzyHits[hit] && fuzzyHits[hit].length) {
            var oldChild = fuzzyHits[hit].shift();
            // 如果命中旧节点，置空旧节点，并在新位置放入旧节点（向后移动）
            var lastIndex = mergeChildren.indexOf(oldChild);
            if (lastIndex !== -1) {
                mergeChildren[lastIndex] = fakeLastNode;
                //  mergeChildren.splice(lastIndex, 1);
            }
            nextChild._new = oldChild;
        }
        mergeChildren.splice(i, 0, nextChild);
        i++;
    }

    for (var j = 0, n = mergeChildren.length; j < n; j++) {
        var _nextChild = mergeChildren[j];
        if (_nextChild._new) {
            var lastChild = _nextChild._new;
            delete _nextChild._new;
            if (dom) {
                insertPoint = dom.nextSibling;
            }
            if (lastChild === true) {
                //新节点有两种情况，命中位置更后方的旧节点或就地创建实例化
                dom = mountVnode(null, _nextChild, parentVnode, context);
                insertElement(parentNode, dom, insertPoint);
            } else {
                oldDom = lastChild._hostNode;
                if (oldDom !== insertPoint) {
                    insertElement(parentNode, oldDom, insertPoint);
                }
                dom = alignVnode(lastChild, _nextChild, parentVnode, context);
            }
        } else {
            if (_nextChild._hostNode) {
                removeElement(_nextChild._hostNode);
                disposeVnode(_nextChild);
            }
        }
    }
}

function isSameNode(a, b) {
    if (a.type === b.type && a.key === b.key) {
        return true;
    }
}

var React = {
    version: "1.1.4",
    render: render,
    options: options,
    PropTypes: PropTypes,
    Children: Children, //为了react-redux
    createPortal: createPortal,
    Component: Component,
    eventSystem: eventSystem,
    findDOMNode: findDOMNode,
    createClass: createClass,
    createElement: createElement,
    cloneElement: cloneElement,
    PureComponent: PureComponent,
    isValidElement: isValidElement,
    unmountComponentAtNode: unmountComponentAtNode,
    unstable_renderSubtreeIntoContainer: unstable_renderSubtreeIntoContainer,
    createFactory: function createFactory(type) {
        console.error("createFactory is deprecated"); // eslint-disable-line
        var factory = createElement.bind(null, type);
        factory.type = type;
        return factory;
    }
};

win.React = win.ReactDOM = React;

return React;

})));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

(function umd(root, factory) {
    if (true) {module.exports = factory();}
    else if (typeof define === "function" && define.amd) {define([], factory);}
    else if (typeof exports === "object") {exports["ReactPropTypes"] = factory();}
    else {root["ReactPropTypes"] = factory();}
})(this, function () {
    var check = function () {
        return check;
    };
    check.isRequired = check;
    return {
        array: check,
        bool: check,
        func: check,
        number: check,
        object: check,
        string: check,
        any: check,
        arrayOf: check,
        element: check,
        instanceOf: check,
        node: check,
        objectOf: check,
        oneOf: check,
        oneOfType: check,
        shape: check
    };
});


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var React = __webpack_require__(1);
var factory = __webpack_require__(55);

if (typeof React === 'undefined') {
  throw Error(
    'create-react-class could not find the React object. If you are using script tags, ' +
      'make sure that React is being loaded before create-react-class.'
  );
}

// Hack to grab NoopUpdateQueue from isomorphic React
var ReactNoopUpdateQueue = new React.Component().updater;

module.exports = factory(
  React.Component,
  React.isValidElement,
  ReactNoopUpdateQueue
);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = isReactChildren;
/* harmony export (immutable) */ __webpack_exports__["a"] = createRouteFromReactElement;
/* unused harmony export createRoutesFromReactChildren */
/* harmony export (immutable) */ __webpack_exports__["b"] = createRoutes;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function isValidChild(object) {
  return object == null || __WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(object);
}

function isReactChildren(object) {
  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
}

function createRoute(defaultProps, props) {
  return _extends({}, defaultProps, props);
}

function createRouteFromReactElement(element) {
  var type = element.type;
  var route = createRoute(type.defaultProps, element.props);

  if (route.children) {
    var childRoutes = createRoutesFromReactChildren(route.children, route);

    if (childRoutes.length) route.childRoutes = childRoutes;

    delete route.children;
  }

  return route;
}

/**
 * Creates and returns a routes object from the given ReactChildren. JSX
 * provides a convenient way to visualize how routes in the hierarchy are
 * nested.
 *
 *   import { Route, createRoutesFromReactChildren } from 'react-router'
 *
 *   const routes = createRoutesFromReactChildren(
 *     <Route component={App}>
 *       <Route path="home" component={Dashboard}/>
 *       <Route path="news" component={NewsFeed}/>
 *     </Route>
 *   )
 *
 * Note: This method is automatically used when you provide <Route> children
 * to a <Router> component.
 */
function createRoutesFromReactChildren(children, parentRoute) {
  var routes = [];

  __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.forEach(children, function (element) {
    if (__WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(element)) {
      // Component classes may have a static create* method.
      if (element.type.createRouteFromReactElement) {
        var route = element.type.createRouteFromReactElement(element, parentRoute);

        if (route) routes.push(route);
      } else {
        routes.push(createRouteFromReactElement(element));
      }
    }
  });

  return routes;
}

/**
 * Creates and returns an array of routes from the given object which
 * may be a JSX route, a plain object route, or an array of either.
 */
function createRoutes(routes) {
  if (isReactChildren(routes)) {
    routes = createRoutesFromReactChildren(routes);
  } else if (routes && !Array.isArray(routes)) {
    routes = [routes];
  }

  return routes;
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports.createPath = exports.parsePath = exports.getQueryStringValueFromPath = exports.stripQueryStringValueFromPath = exports.addQueryStringValueToPath = undefined;

var _warning = __webpack_require__(5);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addQueryStringValueToPath = exports.addQueryStringValueToPath = function addQueryStringValueToPath(path, key, value) {
  var _parsePath = parsePath(path),
      pathname = _parsePath.pathname,
      search = _parsePath.search,
      hash = _parsePath.hash;

  return createPath({
    pathname: pathname,
    search: search + (search.indexOf('?') === -1 ? '?' : '&') + key + '=' + value,
    hash: hash
  });
};

var stripQueryStringValueFromPath = exports.stripQueryStringValueFromPath = function stripQueryStringValueFromPath(path, key) {
  var _parsePath2 = parsePath(path),
      pathname = _parsePath2.pathname,
      search = _parsePath2.search,
      hash = _parsePath2.hash;

  return createPath({
    pathname: pathname,
    search: search.replace(new RegExp('([?&])' + key + '=[a-zA-Z0-9]+(&?)'), function (match, prefix, suffix) {
      return prefix === '?' ? prefix : suffix;
    }),
    hash: hash
  });
};

var getQueryStringValueFromPath = exports.getQueryStringValueFromPath = function getQueryStringValueFromPath(path, key) {
  var _parsePath3 = parsePath(path),
      search = _parsePath3.search;

  var match = search.match(new RegExp('[?&]' + key + '=([a-zA-Z0-9]+)'));
  return match && match[1];
};

var extractPath = function extractPath(string) {
  var match = string.match(/^(https?:)?\/\/[^\/]*/);
  return match == null ? string : string.substring(match[0].length);
};

var parsePath = exports.parsePath = function parsePath(path) {
  var pathname = extractPath(path);
  var search = '';
  var hash = '';

  process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(path === pathname, 'A path must be pathname + search + hash only, not a full URL like "%s"', path) : void 0;

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substring(hashIndex);
    pathname = pathname.substring(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substring(searchIndex);
    pathname = pathname.substring(0, searchIndex);
  }

  if (pathname === '') pathname = '/';

  return {
    pathname: pathname,
    search: search,
    hash: hash
  };
};

var createPath = exports.createPath = function createPath(location) {
  if (location == null || typeof location === 'string') return location;

  var basename = location.basename,
      pathname = location.pathname,
      search = location.search,
      hash = location.hash;

  var path = (basename || '') + pathname;

  if (search && search !== '?') path += search;

  if (hash) path += hash;

  return path;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = routerWarning;
/* unused harmony export _resetWarned */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);


var warned = {};

function routerWarning(falseToWarn, message) {
  // Only issue deprecation warnings once.
  if (message.indexOf('deprecated') !== -1) {
    if (warned[message]) {
      return;
    }

    warned[message] = true;
  }

  message = '[react-router] ' + message;

  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  __WEBPACK_IMPORTED_MODULE_0_warning___default.a.apply(undefined, [falseToWarn, message].concat(args));
}

function _resetWarned() {
  warned = {};
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export compilePattern */
/* harmony export (immutable) */ __webpack_exports__["c"] = matchPattern;
/* harmony export (immutable) */ __webpack_exports__["b"] = getParamNames;
/* unused harmony export getParams */
/* harmony export (immutable) */ __webpack_exports__["a"] = formatPattern;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_invariant__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_invariant__);


function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function _compilePattern(pattern) {
  var regexpSource = '';
  var paramNames = [];
  var tokens = [];

  var match = void 0,
      lastIndex = 0,
      matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*\*|\*|\(|\)|\\\(|\\\)/g;
  while (match = matcher.exec(pattern)) {
    if (match.index !== lastIndex) {
      tokens.push(pattern.slice(lastIndex, match.index));
      regexpSource += escapeRegExp(pattern.slice(lastIndex, match.index));
    }

    if (match[1]) {
      regexpSource += '([^/]+)';
      paramNames.push(match[1]);
    } else if (match[0] === '**') {
      regexpSource += '(.*)';
      paramNames.push('splat');
    } else if (match[0] === '*') {
      regexpSource += '(.*?)';
      paramNames.push('splat');
    } else if (match[0] === '(') {
      regexpSource += '(?:';
    } else if (match[0] === ')') {
      regexpSource += ')?';
    } else if (match[0] === '\\(') {
      regexpSource += '\\(';
    } else if (match[0] === '\\)') {
      regexpSource += '\\)';
    }

    tokens.push(match[0]);

    lastIndex = matcher.lastIndex;
  }

  if (lastIndex !== pattern.length) {
    tokens.push(pattern.slice(lastIndex, pattern.length));
    regexpSource += escapeRegExp(pattern.slice(lastIndex, pattern.length));
  }

  return {
    pattern: pattern,
    regexpSource: regexpSource,
    paramNames: paramNames,
    tokens: tokens
  };
}

var CompiledPatternsCache = Object.create(null);

function compilePattern(pattern) {
  if (!CompiledPatternsCache[pattern]) CompiledPatternsCache[pattern] = _compilePattern(pattern);

  return CompiledPatternsCache[pattern];
}

/**
 * Attempts to match a pattern on the given pathname. Patterns may use
 * the following special characters:
 *
 * - :paramName     Matches a URL segment up to the next /, ?, or #. The
 *                  captured string is considered a "param"
 * - ()             Wraps a segment of the URL that is optional
 * - *              Consumes (non-greedy) all characters up to the next
 *                  character in the pattern, or to the end of the URL if
 *                  there is none
 * - **             Consumes (greedy) all characters up to the next character
 *                  in the pattern, or to the end of the URL if there is none
 *
 *  The function calls callback(error, matched) when finished.
 * The return value is an object with the following properties:
 *
 * - remainingPathname
 * - paramNames
 * - paramValues
 */
function matchPattern(pattern, pathname) {
  // Ensure pattern starts with leading slash for consistency with pathname.
  if (pattern.charAt(0) !== '/') {
    pattern = '/' + pattern;
  }

  var _compilePattern2 = compilePattern(pattern),
      regexpSource = _compilePattern2.regexpSource,
      paramNames = _compilePattern2.paramNames,
      tokens = _compilePattern2.tokens;

  if (pattern.charAt(pattern.length - 1) !== '/') {
    regexpSource += '/?'; // Allow optional path separator at end.
  }

  // Special-case patterns like '*' for catch-all routes.
  if (tokens[tokens.length - 1] === '*') {
    regexpSource += '$';
  }

  var match = pathname.match(new RegExp('^' + regexpSource, 'i'));
  if (match == null) {
    return null;
  }

  var matchedPath = match[0];
  var remainingPathname = pathname.substr(matchedPath.length);

  if (remainingPathname) {
    // Require that the match ends at a path separator, if we didn't match
    // the full path, so any remaining pathname is a new path segment.
    if (matchedPath.charAt(matchedPath.length - 1) !== '/') {
      return null;
    }

    // If there is a remaining pathname, treat the path separator as part of
    // the remaining pathname for properly continuing the match.
    remainingPathname = '/' + remainingPathname;
  }

  return {
    remainingPathname: remainingPathname,
    paramNames: paramNames,
    paramValues: match.slice(1).map(function (v) {
      return v && decodeURIComponent(v);
    })
  };
}

function getParamNames(pattern) {
  return compilePattern(pattern).paramNames;
}

function getParams(pattern, pathname) {
  var match = matchPattern(pattern, pathname);
  if (!match) {
    return null;
  }

  var paramNames = match.paramNames,
      paramValues = match.paramValues;

  var params = {};

  paramNames.forEach(function (paramName, index) {
    params[paramName] = paramValues[index];
  });

  return params;
}

/**
 * Returns a version of the given pattern with params interpolated. Throws
 * if there is a dynamic segment of the pattern for which there is no param.
 */
function formatPattern(pattern, params) {
  params = params || {};

  var _compilePattern3 = compilePattern(pattern),
      tokens = _compilePattern3.tokens;

  var parenCount = 0,
      pathname = '',
      splatIndex = 0,
      parenHistory = [];

  var token = void 0,
      paramName = void 0,
      paramValue = void 0;
  for (var i = 0, len = tokens.length; i < len; ++i) {
    token = tokens[i];

    if (token === '*' || token === '**') {
      paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;

      !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? __WEBPACK_IMPORTED_MODULE_0_invariant___default()(false, 'Missing splat #%s for path "%s"', splatIndex, pattern) : __WEBPACK_IMPORTED_MODULE_0_invariant___default()(false) : void 0;

      if (paramValue != null) pathname += encodeURI(paramValue);
    } else if (token === '(') {
      parenHistory[parenCount] = '';
      parenCount += 1;
    } else if (token === ')') {
      var parenText = parenHistory.pop();
      parenCount -= 1;

      if (parenCount) parenHistory[parenCount - 1] += parenText;else pathname += parenText;
    } else if (token === '\\(') {
      pathname += '(';
    } else if (token === '\\)') {
      pathname += ')';
    } else if (token.charAt(0) === ':') {
      paramName = token.substring(1);
      paramValue = params[paramName];

      !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? __WEBPACK_IMPORTED_MODULE_0_invariant___default()(false, 'Missing "%s" parameter for path "%s"', paramName, pattern) : __WEBPACK_IMPORTED_MODULE_0_invariant___default()(false) : void 0;

      if (paramValue == null) {
        if (parenCount) {
          parenHistory[parenCount - 1] = '';

          var curTokenIdx = tokens.indexOf(token);
          var tokensSubset = tokens.slice(curTokenIdx, tokens.length);
          var nextParenIdx = -1;

          for (var _i = 0; _i < tokensSubset.length; _i++) {
            if (tokensSubset[_i] == ')') {
              nextParenIdx = _i;
              break;
            }
          }

          !(nextParenIdx > 0) ? process.env.NODE_ENV !== 'production' ? __WEBPACK_IMPORTED_MODULE_0_invariant___default()(false, 'Path "%s" is missing end paren at segment "%s"', pattern, tokensSubset.join('')) : __WEBPACK_IMPORTED_MODULE_0_invariant___default()(false) : void 0;

          // jump to ending paren
          i = curTokenIdx + nextParenIdx - 1;
        }
      } else if (parenCount) parenHistory[parenCount - 1] += encodeURIComponent(paramValue);else pathname += encodeURIComponent(paramValue);
    } else {
      if (parenCount) parenHistory[parenCount - 1] += token;else pathname += token;
    }
  }

  !(parenCount <= 0) ? process.env.NODE_ENV !== 'production' ? __WEBPACK_IMPORTED_MODULE_0_invariant___default()(false, 'Path "%s" is missing end paren', pattern) : __WEBPACK_IMPORTED_MODULE_0_invariant___default()(false) : void 0;

  return pathname.replace(/\/+/g, '/');
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports.locationsAreEqual = exports.statesAreEqual = exports.createLocation = exports.createQuery = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _invariant = __webpack_require__(2);

var _invariant2 = _interopRequireDefault(_invariant);

var _warning = __webpack_require__(5);

var _warning2 = _interopRequireDefault(_warning);

var _PathUtils = __webpack_require__(7);

var _Actions = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createQuery = exports.createQuery = function createQuery(props) {
  return _extends(Object.create(null), props);
};

var createLocation = exports.createLocation = function createLocation() {
  var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Actions.POP;
  var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  var object = typeof input === 'string' ? (0, _PathUtils.parsePath)(input) : input;

  process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(!object.path, 'Location descriptor objects should have a `pathname`, not a `path`.') : void 0;

  var pathname = object.pathname || '/';
  var search = object.search || '';
  var hash = object.hash || '';
  var state = object.state;

  return {
    pathname: pathname,
    search: search,
    hash: hash,
    state: state,
    action: action,
    key: key
  };
};

var isDate = function isDate(object) {
  return Object.prototype.toString.call(object) === '[object Date]';
};

var statesAreEqual = exports.statesAreEqual = function statesAreEqual(a, b) {
  if (a === b) return true;

  var typeofA = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var typeofB = typeof b === 'undefined' ? 'undefined' : _typeof(b);

  if (typeofA !== typeofB) return false;

  !(typeofA !== 'function') ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'You must not store functions in location state') : (0, _invariant2.default)(false) : void 0;

  // Not the same object, but same type.
  if (typeofA === 'object') {
    !!(isDate(a) && isDate(b)) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'You must not store Date objects in location state') : (0, _invariant2.default)(false) : void 0;

    if (!Array.isArray(a)) {
      var keysofA = Object.keys(a);
      var keysofB = Object.keys(b);
      return keysofA.length === keysofB.length && keysofA.every(function (key) {
        return statesAreEqual(a[key], b[key]);
      });
    }

    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return statesAreEqual(item, b[index]);
    });
  }

  // All other serializable types (string, number, boolean)
  // should be strict equal.
  return false;
};

var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
  return a.key === b.key &&
  // a.action === b.action && // Different action !== location change.
  a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && statesAreEqual(a.state, b.state);
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = falsy;
/* unused harmony export history */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return components; });
/* unused harmony export route */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);


function falsy(props, propName, componentName) {
  if (props[propName]) return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
}

var history = Object(__WEBPACK_IMPORTED_MODULE_0_prop_types__["shape"])({
  listen: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"].isRequired,
  push: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"].isRequired,
  replace: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"].isRequired,
  go: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"].isRequired,
  goBack: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"].isRequired,
  goForward: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"].isRequired
});

var component = Object(__WEBPACK_IMPORTED_MODULE_0_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_0_prop_types__["func"], __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"]]);
var components = Object(__WEBPACK_IMPORTED_MODULE_0_prop_types__["oneOfType"])([component, __WEBPACK_IMPORTED_MODULE_0_prop_types__["object"]]);
var route = Object(__WEBPACK_IMPORTED_MODULE_0_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_0_prop_types__["object"], __WEBPACK_IMPORTED_MODULE_0_prop_types__["element"]]);
var routes = Object(__WEBPACK_IMPORTED_MODULE_0_prop_types__["oneOfType"])([route, Object(__WEBPACK_IMPORTED_MODULE_0_prop_types__["arrayOf"])(route)]);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Router__ = __webpack_require__(54);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return __WEBPACK_IMPORTED_MODULE_0__Router__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Link__ = __webpack_require__(30);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return __WEBPACK_IMPORTED_MODULE_1__Link__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__IndexLink__ = __webpack_require__(66);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "IndexLink", function() { return __WEBPACK_IMPORTED_MODULE_2__IndexLink__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__withRouter__ = __webpack_require__(67);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return __WEBPACK_IMPORTED_MODULE_3__withRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__IndexRedirect__ = __webpack_require__(68);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "IndexRedirect", function() { return __WEBPACK_IMPORTED_MODULE_4__IndexRedirect__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__IndexRoute__ = __webpack_require__(69);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "IndexRoute", function() { return __WEBPACK_IMPORTED_MODULE_5__IndexRoute__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Redirect__ = __webpack_require__(32);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return __WEBPACK_IMPORTED_MODULE_6__Redirect__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Route__ = __webpack_require__(70);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return __WEBPACK_IMPORTED_MODULE_7__Route__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__RouteUtils__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createRoutes", function() { return __WEBPACK_IMPORTED_MODULE_8__RouteUtils__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__RouterContext__ = __webpack_require__(16);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RouterContext", function() { return __WEBPACK_IMPORTED_MODULE_9__RouterContext__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__PropTypes__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "locationShape", function() { return __WEBPACK_IMPORTED_MODULE_10__PropTypes__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "routerShape", function() { return __WEBPACK_IMPORTED_MODULE_10__PropTypes__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__match__ = __webpack_require__(71);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "match", function() { return __WEBPACK_IMPORTED_MODULE_11__match__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__useRouterHistory__ = __webpack_require__(36);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "useRouterHistory", function() { return __WEBPACK_IMPORTED_MODULE_12__useRouterHistory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__PatternUtils__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "formatPattern", function() { return __WEBPACK_IMPORTED_MODULE_13__PatternUtils__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__applyRouterMiddleware__ = __webpack_require__(76);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "applyRouterMiddleware", function() { return __WEBPACK_IMPORTED_MODULE_14__applyRouterMiddleware__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__browserHistory__ = __webpack_require__(77);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "browserHistory", function() { return __WEBPACK_IMPORTED_MODULE_15__browserHistory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__hashHistory__ = __webpack_require__(80);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "hashHistory", function() { return __WEBPACK_IMPORTED_MODULE_16__hashHistory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__createMemoryHistory__ = __webpack_require__(33);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createMemoryHistory", function() { return __WEBPACK_IMPORTED_MODULE_17__createMemoryHistory__["a"]; });
/* components */









/* components (configuration) */










/* utils */















/* histories */








/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/**
 * Indicates that navigation was caused by a call to history.push.
 */
var PUSH = exports.PUSH = 'PUSH';

/**
 * Indicates that navigation was caused by a call to history.replace.
 */
var REPLACE = exports.REPLACE = 'REPLACE';

/**
 * Indicates that navigation was caused by some other action such
 * as using a browser's back/forward buttons and/or manually manipulating
 * the URL in a browser's location bar. This is the default.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
 * for more information.
 */
var POP = exports.POP = 'POP';

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = exports.supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopstateOnHashchange = exports.supportsPopstateOnHashchange = function supportsPopstateOnHashchange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
var isExtraneousPopstateEvent = exports.isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = loopAsync;
/* harmony export (immutable) */ __webpack_exports__["b"] = mapAsync;
function loopAsync(turns, work, callback) {
  var currentTurn = 0,
      isDone = false;
  var sync = false,
      hasNext = false,
      doneArgs = void 0;

  function done() {
    isDone = true;
    if (sync) {
      // Iterate instead of recursing if possible.
      doneArgs = [].concat(Array.prototype.slice.call(arguments));
      return;
    }

    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) {
      return;
    }

    hasNext = true;
    if (sync) {
      // Iterate instead of recursing if possible.
      return;
    }

    sync = true;

    while (!isDone && currentTurn < turns && hasNext) {
      hasNext = false;
      work.call(this, currentTurn++, next, done);
    }

    sync = false;

    if (isDone) {
      // This means the loop finished synchronously.
      callback.apply(this, doneArgs);
      return;
    }

    if (currentTurn >= turns && hasNext) {
      isDone = true;
      callback();
    }
  }

  next();
}

function mapAsync(array, work, callback) {
  var length = array.length;
  var values = [];

  if (length === 0) return callback(null, values);

  var isDone = false,
      doneCount = 0;

  function done(index, error, value) {
    if (isDone) return;

    if (error) {
      isDone = true;
      callback(error);
    } else {
      values[index] = value;

      isDone = ++doneCount === length;

      if (isDone) callback(null, values);
    }
  }

  array.forEach(function (item, index) {
    work(item, index, function (error, value) {
      done(index, error, value);
    });
  });
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_invariant__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_create_react_class__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_create_react_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_create_react_class__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getRouteParams__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ContextUtils__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__RouteUtils__ = __webpack_require__(6);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };










/**
 * A <RouterContext> renders the component tree for a given router state
 * and sets the history object and the current location in context.
 */
var RouterContext = __WEBPACK_IMPORTED_MODULE_2_create_react_class___default()({
  displayName: 'RouterContext',

  mixins: [Object(__WEBPACK_IMPORTED_MODULE_5__ContextUtils__["a" /* ContextProvider */])('router')],

  propTypes: {
    router: __WEBPACK_IMPORTED_MODULE_3_prop_types__["object"].isRequired,
    location: __WEBPACK_IMPORTED_MODULE_3_prop_types__["object"].isRequired,
    routes: __WEBPACK_IMPORTED_MODULE_3_prop_types__["array"].isRequired,
    params: __WEBPACK_IMPORTED_MODULE_3_prop_types__["object"].isRequired,
    components: __WEBPACK_IMPORTED_MODULE_3_prop_types__["array"].isRequired,
    createElement: __WEBPACK_IMPORTED_MODULE_3_prop_types__["func"].isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      createElement: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement
    };
  },


  childContextTypes: {
    router: __WEBPACK_IMPORTED_MODULE_3_prop_types__["object"].isRequired
  },

  getChildContext: function getChildContext() {
    return {
      router: this.props.router
    };
  },
  createElement: function createElement(component, props) {
    return component == null ? null : this.props.createElement(component, props);
  },
  render: function render() {
    var _this = this;

    var _props = this.props,
        location = _props.location,
        routes = _props.routes,
        params = _props.params,
        components = _props.components,
        router = _props.router;

    var element = null;

    if (components) {
      element = components.reduceRight(function (element, components, index) {
        if (components == null) return element; // Don't create new children; use the grandchildren.

        var route = routes[index];
        var routeParams = Object(__WEBPACK_IMPORTED_MODULE_4__getRouteParams__["a" /* default */])(route, params);
        var props = {
          location: location,
          params: params,
          route: route,
          router: router,
          routeParams: routeParams,
          routes: routes
        };

        if (Object(__WEBPACK_IMPORTED_MODULE_6__RouteUtils__["c" /* isReactChildren */])(element)) {
          props.children = element;
        } else if (element) {
          for (var prop in element) {
            if (Object.prototype.hasOwnProperty.call(element, prop)) props[prop] = element[prop];
          }
        }

        if ((typeof components === 'undefined' ? 'undefined' : _typeof(components)) === 'object') {
          var elements = {};

          for (var key in components) {
            if (Object.prototype.hasOwnProperty.call(components, key)) {
              // Pass through the key as a prop to createElement to allow
              // custom createElement functions to know which named component
              // they're rendering, for e.g. matching up to fetched data.
              elements[key] = _this.createElement(components[key], _extends({
                key: key }, props));
            }
          }

          return elements;
        }

        return _this.createElement(components, props);
      }, element);
    }

    !(element === null || element === false || __WEBPACK_IMPORTED_MODULE_1_react___default.a.isValidElement(element)) ? process.env.NODE_ENV !== 'production' ? __WEBPACK_IMPORTED_MODULE_0_invariant___default()(false, 'The root route must render a single element') : __WEBPACK_IMPORTED_MODULE_0_invariant___default()(false) : void 0;

    return element;
  }
});

/* harmony default export */ __webpack_exports__["a"] = (RouterContext);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ContextProvider;
/* harmony export (immutable) */ __webpack_exports__["b"] = ContextSubscriber;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);


// Works around issues with context updates failing to propagate.
// Caveat: the context value is expected to never change its identity.
// https://github.com/facebook/react/issues/2517
// https://github.com/reactjs/react-router/issues/470

var contextProviderShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  subscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  eventIndex: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number.isRequired
});

function makeContextName(name) {
  return '@@contextSubscriber/' + name;
}

function ContextProvider(name) {
  var _childContextTypes, _ref2;

  var contextName = makeContextName(name);
  var listenersKey = contextName + '/listeners';
  var eventIndexKey = contextName + '/eventIndex';
  var subscribeKey = contextName + '/subscribe';

  return _ref2 = {
    childContextTypes: (_childContextTypes = {}, _childContextTypes[contextName] = contextProviderShape.isRequired, _childContextTypes),

    getChildContext: function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextName] = {
        eventIndex: this[eventIndexKey],
        subscribe: this[subscribeKey]
      }, _ref;
    },
    componentWillMount: function componentWillMount() {
      this[listenersKey] = [];
      this[eventIndexKey] = 0;
    },
    componentWillReceiveProps: function componentWillReceiveProps() {
      this[eventIndexKey]++;
    },
    componentDidUpdate: function componentDidUpdate() {
      var _this = this;

      this[listenersKey].forEach(function (listener) {
        return listener(_this[eventIndexKey]);
      });
    }
  }, _ref2[subscribeKey] = function (listener) {
    var _this2 = this;

    // No need to immediately call listener here.
    this[listenersKey].push(listener);

    return function () {
      _this2[listenersKey] = _this2[listenersKey].filter(function (item) {
        return item !== listener;
      });
    };
  }, _ref2;
}

function ContextSubscriber(name) {
  var _contextTypes, _ref4;

  var contextName = makeContextName(name);
  var lastRenderedEventIndexKey = contextName + '/lastRenderedEventIndex';
  var handleContextUpdateKey = contextName + '/handleContextUpdate';
  var unsubscribeKey = contextName + '/unsubscribe';

  return _ref4 = {
    contextTypes: (_contextTypes = {}, _contextTypes[contextName] = contextProviderShape, _contextTypes),

    getInitialState: function getInitialState() {
      var _ref3;

      if (!this.context[contextName]) {
        return {};
      }

      return _ref3 = {}, _ref3[lastRenderedEventIndexKey] = this.context[contextName].eventIndex, _ref3;
    },
    componentDidMount: function componentDidMount() {
      if (!this.context[contextName]) {
        return;
      }

      this[unsubscribeKey] = this.context[contextName].subscribe(this[handleContextUpdateKey]);
    },
    componentWillReceiveProps: function componentWillReceiveProps() {
      var _setState;

      if (!this.context[contextName]) {
        return;
      }

      this.setState((_setState = {}, _setState[lastRenderedEventIndexKey] = this.context[contextName].eventIndex, _setState));
    },
    componentWillUnmount: function componentWillUnmount() {
      if (!this[unsubscribeKey]) {
        return;
      }

      this[unsubscribeKey]();
      this[unsubscribeKey] = null;
    }
  }, _ref4[handleContextUpdateKey] = function (eventIndex) {
    if (eventIndex !== this.state[lastRenderedEventIndexKey]) {
      var _setState2;

      this.setState((_setState2 = {}, _setState2[lastRenderedEventIndexKey] = eventIndex, _setState2));
    }
  }, _ref4;
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routerShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return locationShape; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);


var routerShape = Object(__WEBPACK_IMPORTED_MODULE_0_prop_types__["shape"])({
  push: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"].isRequired,
  replace: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"].isRequired,
  go: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"].isRequired,
  goBack: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"].isRequired,
  goForward: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"].isRequired,
  setRouteLeaveHook: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"].isRequired,
  isActive: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"].isRequired
});

var locationShape = Object(__WEBPACK_IMPORTED_MODULE_0_prop_types__["shape"])({
  pathname: __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"].isRequired,
  search: __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"].isRequired,
  state: __WEBPACK_IMPORTED_MODULE_0_prop_types__["object"],
  action: __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"].isRequired,
  key: __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"]
});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _warning = __webpack_require__(5);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var runTransitionHook = function runTransitionHook(hook, location, callback) {
  var result = hook(location, callback);

  if (hook.length < 2) {
    // Assume the hook runs synchronously and automatically
    // call the callback with the return value.
    callback(result);
  } else {
    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(result === undefined, 'You should not "return" in a transition hook with a callback argument; ' + 'call the callback instead') : void 0;
  }
};

exports.default = runTransitionHook;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _AsyncUtils = __webpack_require__(75);

var _PathUtils = __webpack_require__(7);

var _runTransitionHook = __webpack_require__(19);

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _Actions = __webpack_require__(13);

var _LocationUtils = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createHistory = function createHistory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var getCurrentLocation = options.getCurrentLocation,
      getUserConfirmation = options.getUserConfirmation,
      pushLocation = options.pushLocation,
      replaceLocation = options.replaceLocation,
      go = options.go,
      keyLength = options.keyLength;


  var currentLocation = void 0;
  var pendingLocation = void 0;
  var beforeListeners = [];
  var listeners = [];
  var allKeys = [];

  var getCurrentIndex = function getCurrentIndex() {
    if (pendingLocation && pendingLocation.action === _Actions.POP) return allKeys.indexOf(pendingLocation.key);

    if (currentLocation) return allKeys.indexOf(currentLocation.key);

    return -1;
  };

  var updateLocation = function updateLocation(nextLocation) {
    var currentIndex = getCurrentIndex();

    currentLocation = nextLocation;

    if (currentLocation.action === _Actions.PUSH) {
      allKeys = [].concat(allKeys.slice(0, currentIndex + 1), [currentLocation.key]);
    } else if (currentLocation.action === _Actions.REPLACE) {
      allKeys[currentIndex] = currentLocation.key;
    }

    listeners.forEach(function (listener) {
      return listener(currentLocation);
    });
  };

  var listenBefore = function listenBefore(listener) {
    beforeListeners.push(listener);

    return function () {
      return beforeListeners = beforeListeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var listen = function listen(listener) {
    listeners.push(listener);

    return function () {
      return listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, callback) {
    (0, _AsyncUtils.loopAsync)(beforeListeners.length, function (index, next, done) {
      (0, _runTransitionHook2.default)(beforeListeners[index], location, function (result) {
        return result != null ? done(result) : next();
      });
    }, function (message) {
      if (getUserConfirmation && typeof message === 'string') {
        getUserConfirmation(message, function (ok) {
          return callback(ok !== false);
        });
      } else {
        callback(message !== false);
      }
    });
  };

  var transitionTo = function transitionTo(nextLocation) {
    if (currentLocation && (0, _LocationUtils.locationsAreEqual)(currentLocation, nextLocation) || pendingLocation && (0, _LocationUtils.locationsAreEqual)(pendingLocation, nextLocation)) return; // Nothing to do

    pendingLocation = nextLocation;

    confirmTransitionTo(nextLocation, function (ok) {
      if (pendingLocation !== nextLocation) return; // Transition was interrupted during confirmation

      pendingLocation = null;

      if (ok) {
        // Treat PUSH to same path like REPLACE to be consistent with browsers
        if (nextLocation.action === _Actions.PUSH) {
          var prevPath = (0, _PathUtils.createPath)(currentLocation);
          var nextPath = (0, _PathUtils.createPath)(nextLocation);

          if (nextPath === prevPath && (0, _LocationUtils.statesAreEqual)(currentLocation.state, nextLocation.state)) nextLocation.action = _Actions.REPLACE;
        }

        if (nextLocation.action === _Actions.POP) {
          updateLocation(nextLocation);
        } else if (nextLocation.action === _Actions.PUSH) {
          if (pushLocation(nextLocation) !== false) updateLocation(nextLocation);
        } else if (nextLocation.action === _Actions.REPLACE) {
          if (replaceLocation(nextLocation) !== false) updateLocation(nextLocation);
        }
      } else if (currentLocation && nextLocation.action === _Actions.POP) {
        var prevIndex = allKeys.indexOf(currentLocation.key);
        var nextIndex = allKeys.indexOf(nextLocation.key);

        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL
      }
    });
  };

  var push = function push(input) {
    return transitionTo(createLocation(input, _Actions.PUSH));
  };

  var replace = function replace(input) {
    return transitionTo(createLocation(input, _Actions.REPLACE));
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength || 6);
  };

  var createHref = function createHref(location) {
    return (0, _PathUtils.createPath)(location);
  };

  var createLocation = function createLocation(location, action) {
    var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : createKey();
    return (0, _LocationUtils.createLocation)(location, action, key);
  };

  return {
    getCurrentLocation: getCurrentLocation,
    listenBefore: listenBefore,
    listen: listen,
    transitionTo: transitionTo,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    createKey: createKey,
    createPath: _PathUtils.createPath,
    createHref: createHref,
    createLocation: createLocation
  };
};

exports.default = createHistory;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.go = exports.replaceLocation = exports.pushLocation = exports.startListener = exports.getUserConfirmation = exports.getCurrentLocation = undefined;

var _LocationUtils = __webpack_require__(10);

var _DOMUtils = __webpack_require__(14);

var _DOMStateStorage = __webpack_require__(37);

var _PathUtils = __webpack_require__(7);

var _ExecutionEnvironment = __webpack_require__(21);

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var needsHashchangeListener = _ExecutionEnvironment.canUseDOM && !(0, _DOMUtils.supportsPopstateOnHashchange)();

var _createLocation = function _createLocation(historyState) {
  var key = historyState && historyState.key;

  return (0, _LocationUtils.createLocation)({
    pathname: window.location.pathname,
    search: window.location.search,
    hash: window.location.hash,
    state: key ? (0, _DOMStateStorage.readState)(key) : undefined
  }, undefined, key);
};

var getCurrentLocation = exports.getCurrentLocation = function getCurrentLocation() {
  var historyState = void 0;
  try {
    historyState = window.history.state || {};
  } catch (error) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    historyState = {};
  }

  return _createLocation(historyState);
};

var getUserConfirmation = exports.getUserConfirmation = function getUserConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

var startListener = exports.startListener = function startListener(listener) {
  var handlePopState = function handlePopState(event) {
    if ((0, _DOMUtils.isExtraneousPopstateEvent)(event)) // Ignore extraneous popstate events in WebKit
      return;
    listener(_createLocation(event.state));
  };

  (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

  var handleUnpoppedHashChange = function handleUnpoppedHashChange() {
    return listener(getCurrentLocation());
  };

  if (needsHashchangeListener) {
    (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleUnpoppedHashChange);
  }

  return function () {
    (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);

    if (needsHashchangeListener) {
      (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleUnpoppedHashChange);
    }
  };
};

var updateLocation = function updateLocation(location, updateState) {
  var state = location.state,
      key = location.key;


  if (state !== undefined) (0, _DOMStateStorage.saveState)(key, state);

  updateState({ key: key }, (0, _PathUtils.createPath)(location));
};

var pushLocation = exports.pushLocation = function pushLocation(location) {
  return updateLocation(location, function (state, path) {
    return window.history.pushState(state, null, path);
  });
};

var replaceLocation = exports.replaceLocation = function replaceLocation(location) {
  return updateLocation(location, function (state, path) {
    return window.history.replaceState(state, null, path);
  });
};

var go = exports.go = function go(n) {
  if (n) window.history.go(n);
};

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = createTransitionManager;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__routerWarning__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__computeChangedRoutes__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TransitionUtils__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isActive__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getComponents__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__matchRoutes__ = __webpack_require__(64);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








function hasAnyProperties(object) {
  for (var p in object) {
    if (Object.prototype.hasOwnProperty.call(object, p)) return true;
  }return false;
}

function createTransitionManager(history, routes) {
  var state = {};

  var _getTransitionUtils = Object(__WEBPACK_IMPORTED_MODULE_2__TransitionUtils__["a" /* default */])(),
      runEnterHooks = _getTransitionUtils.runEnterHooks,
      runChangeHooks = _getTransitionUtils.runChangeHooks,
      runLeaveHooks = _getTransitionUtils.runLeaveHooks;

  // Signature should be (location, indexOnly), but needs to support (path,
  // query, indexOnly)


  function isActive(location, indexOnly) {
    location = history.createLocation(location);

    return Object(__WEBPACK_IMPORTED_MODULE_3__isActive__["a" /* default */])(location, indexOnly, state.location, state.routes, state.params);
  }

  var partialNextState = void 0;

  function match(location, callback) {
    if (partialNextState && partialNextState.location === location) {
      // Continue from where we left off.
      finishMatch(partialNextState, callback);
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_5__matchRoutes__["a" /* default */])(routes, location, function (error, nextState) {
        if (error) {
          callback(error);
        } else if (nextState) {
          finishMatch(_extends({}, nextState, { location: location }), callback);
        } else {
          callback();
        }
      });
    }
  }

  function finishMatch(nextState, callback) {
    var _computeChangedRoutes = Object(__WEBPACK_IMPORTED_MODULE_1__computeChangedRoutes__["a" /* default */])(state, nextState),
        leaveRoutes = _computeChangedRoutes.leaveRoutes,
        changeRoutes = _computeChangedRoutes.changeRoutes,
        enterRoutes = _computeChangedRoutes.enterRoutes;

    runLeaveHooks(leaveRoutes, state);

    // Tear down confirmation hooks for left routes
    leaveRoutes.filter(function (route) {
      return enterRoutes.indexOf(route) === -1;
    }).forEach(removeListenBeforeHooksForRoute);

    // change and enter hooks are run in series
    runChangeHooks(changeRoutes, state, nextState, function (error, redirectInfo) {
      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);

      runEnterHooks(enterRoutes, nextState, finishEnterHooks);
    });

    function finishEnterHooks(error, redirectInfo) {
      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);

      // TODO: Fetch components after state is updated.
      Object(__WEBPACK_IMPORTED_MODULE_4__getComponents__["a" /* default */])(nextState, function (error, components) {
        if (error) {
          callback(error);
        } else {
          // TODO: Make match a pure function and have some other API
          // for "match and update state".
          callback(null, null, state = _extends({}, nextState, { components: components }));
        }
      });
    }

    function handleErrorOrRedirect(error, redirectInfo) {
      if (error) callback(error);else callback(null, redirectInfo);
    }
  }

  var RouteGuid = 1;

  function getRouteID(route) {
    var create = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    return route.__id__ || create && (route.__id__ = RouteGuid++);
  }

  var RouteHooks = Object.create(null);

  function getRouteHooksForRoutes(routes) {
    return routes.map(function (route) {
      return RouteHooks[getRouteID(route)];
    }).filter(function (hook) {
      return hook;
    });
  }

  function transitionHook(location, callback) {
    Object(__WEBPACK_IMPORTED_MODULE_5__matchRoutes__["a" /* default */])(routes, location, function (error, nextState) {
      if (nextState == null) {
        // TODO: We didn't actually match anything, but hang
        // onto error/nextState so we don't have to matchRoutes
        // again in the listen callback.
        callback();
        return;
      }

      // Cache some state here so we don't have to
      // matchRoutes() again in the listen callback.
      partialNextState = _extends({}, nextState, { location: location });

      var hooks = getRouteHooksForRoutes(Object(__WEBPACK_IMPORTED_MODULE_1__computeChangedRoutes__["a" /* default */])(state, partialNextState).leaveRoutes);

      var result = void 0;
      for (var i = 0, len = hooks.length; result == null && i < len; ++i) {
        // Passing the location arg here indicates to
        // the user that this is a transition hook.
        result = hooks[i](location);
      }

      callback(result);
    });
  }

  /* istanbul ignore next: untestable with Karma */
  function beforeUnloadHook() {
    // Synchronously check to see if any route hooks want
    // to prevent the current window/tab from closing.
    if (state.routes) {
      var hooks = getRouteHooksForRoutes(state.routes);

      var message = void 0;
      for (var i = 0, len = hooks.length; typeof message !== 'string' && i < len; ++i) {
        // Passing no args indicates to the user that this is a
        // beforeunload hook. We don't know the next location.
        message = hooks[i]();
      }

      return message;
    }
  }

  var unlistenBefore = void 0,
      unlistenBeforeUnload = void 0;

  function removeListenBeforeHooksForRoute(route) {
    var routeID = getRouteID(route);
    if (!routeID) {
      return;
    }

    delete RouteHooks[routeID];

    if (!hasAnyProperties(RouteHooks)) {
      // teardown transition & beforeunload hooks
      if (unlistenBefore) {
        unlistenBefore();
        unlistenBefore = null;
      }

      if (unlistenBeforeUnload) {
        unlistenBeforeUnload();
        unlistenBeforeUnload = null;
      }
    }
  }

  /**
   * Registers the given hook function to run before leaving the given route.
   *
   * During a normal transition, the hook function receives the next location
   * as its only argument and can return either a prompt message (string) to show the user,
   * to make sure they want to leave the page; or `false`, to prevent the transition.
   * Any other return value will have no effect.
   *
   * During the beforeunload event (in browsers) the hook receives no arguments.
   * In this case it must return a prompt message to prevent the transition.
   *
   * Returns a function that may be used to unbind the listener.
   */
  function listenBeforeLeavingRoute(route, hook) {
    var thereWereNoRouteHooks = !hasAnyProperties(RouteHooks);
    var routeID = getRouteID(route, true);

    RouteHooks[routeID] = hook;

    if (thereWereNoRouteHooks) {
      // setup transition & beforeunload hooks
      unlistenBefore = history.listenBefore(transitionHook);

      if (history.listenBeforeUnload) unlistenBeforeUnload = history.listenBeforeUnload(beforeUnloadHook);
    }

    return function () {
      removeListenBeforeHooksForRoute(route);
    };
  }

  /**
   * This is the API for stateful environments. As the location
   * changes, we update state and call the listener. We can also
   * gracefully handle errors and redirects.
   */
  function listen(listener) {
    function historyListener(location) {
      if (state.location === location) {
        listener(null, state);
      } else {
        match(location, function (error, redirectLocation, nextState) {
          if (error) {
            listener(error);
          } else if (redirectLocation) {
            history.replace(redirectLocation);
          } else if (nextState) {
            listener(null, nextState);
          } else {
            process.env.NODE_ENV !== 'production' ? Object(__WEBPACK_IMPORTED_MODULE_0__routerWarning__["a" /* default */])(false, 'Location "%s" did not match any routes', location.pathname + location.search + location.hash) : void 0;
          }
        });
      }
    }

    // TODO: Only use a single history listener. Otherwise we'll end up with
    // multiple concurrent calls to match.

    // Set up the history listener first in case the initial match redirects.
    var unsubscribe = history.listen(historyListener);

    if (state.location) {
      // Picking up on a matchContext.
      listener(null, state);
    } else {
      historyListener(history.getCurrentLocation());
    }

    return unsubscribe;
  }

  return {
    isActive: isActive,
    match: match,
    listenBeforeLeavingRoute: listenBeforeLeavingRoute,
    listen: listen
  };
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isPromise;
function isPromise(obj) {
  return obj && typeof obj.then === 'function';
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = createRouterObject;
/* harmony export (immutable) */ __webpack_exports__["a"] = assignRouterState;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function createRouterObject(history, transitionManager, state) {
  var router = _extends({}, history, {
    setRouteLeaveHook: transitionManager.listenBeforeLeavingRoute,
    isActive: transitionManager.isActive
  });

  return assignRouterState(router, state);
}

function assignRouterState(router, _ref) {
  var location = _ref.location,
      params = _ref.params,
      routes = _ref.routes;

  router.location = location;
  router.params = params;
  router.routes = routes;

  return router;
}

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_create_react_class__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_create_react_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_create_react_class__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PropTypes__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ContextUtils__ = __webpack_require__(17);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

// TODO: De-duplicate against hasAnyProperties in createTransitionManager.
function isEmptyObject(object) {
  for (var p in object) {
    if (Object.prototype.hasOwnProperty.call(object, p)) return false;
  }return true;
}

function resolveToLocation(to, router) {
  return typeof to === 'function' ? to(router.location) : to;
}

/**
 * A <Link> is used to create an <a> element that links to a route.
 * When that route is active, the link gets the value of its
 * activeClassName prop.
 *
 * For example, assuming you have the following route:
 *
 *   <Route path="/posts/:postID" component={Post} />
 *
 * You could use the following component to link to that route:
 *
 *   <Link to={`/posts/${post.id}`} />
 */
var Link = __WEBPACK_IMPORTED_MODULE_1_create_react_class___default()({
  displayName: 'Link',

  mixins: [Object(__WEBPACK_IMPORTED_MODULE_5__ContextUtils__["b" /* ContextSubscriber */])('router')],

  contextTypes: {
    router: __WEBPACK_IMPORTED_MODULE_4__PropTypes__["b" /* routerShape */]
  },

  propTypes: {
    to: Object(__WEBPACK_IMPORTED_MODULE_2_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_2_prop_types__["string"], __WEBPACK_IMPORTED_MODULE_2_prop_types__["object"], __WEBPACK_IMPORTED_MODULE_2_prop_types__["func"]]),
    activeStyle: __WEBPACK_IMPORTED_MODULE_2_prop_types__["object"],
    activeClassName: __WEBPACK_IMPORTED_MODULE_2_prop_types__["string"],
    onlyActiveOnIndex: __WEBPACK_IMPORTED_MODULE_2_prop_types__["bool"].isRequired,
    onClick: __WEBPACK_IMPORTED_MODULE_2_prop_types__["func"],
    target: __WEBPACK_IMPORTED_MODULE_2_prop_types__["string"]
  },

  getDefaultProps: function getDefaultProps() {
    return {
      onlyActiveOnIndex: false,
      style: {}
    };
  },
  handleClick: function handleClick(event) {
    if (this.props.onClick) this.props.onClick(event);

    if (event.defaultPrevented) return;

    var router = this.context.router;

    !router ? process.env.NODE_ENV !== 'production' ? __WEBPACK_IMPORTED_MODULE_3_invariant___default()(false, '<Link>s rendered outside of a router context cannot navigate.') : __WEBPACK_IMPORTED_MODULE_3_invariant___default()(false) : void 0;

    if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;

    // If target prop is set (e.g. to "_blank"), let browser handle link.
    /* istanbul ignore if: untestable with Karma */
    if (this.props.target) return;

    event.preventDefault();

    router.push(resolveToLocation(this.props.to, router));
  },
  render: function render() {
    var _props = this.props,
        to = _props.to,
        activeClassName = _props.activeClassName,
        activeStyle = _props.activeStyle,
        onlyActiveOnIndex = _props.onlyActiveOnIndex,
        props = _objectWithoutProperties(_props, ['to', 'activeClassName', 'activeStyle', 'onlyActiveOnIndex']);

    // Ignore if rendered outside the context of router to simplify unit testing.


    var router = this.context.router;


    if (router) {
      // If user does not specify a `to` prop, return an empty anchor tag.
      if (!to) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a', props);
      }

      var toLocation = resolveToLocation(to, router);
      props.href = router.createHref(toLocation);

      if (activeClassName || activeStyle != null && !isEmptyObject(activeStyle)) {
        if (router.isActive(toLocation, onlyActiveOnIndex)) {
          if (activeClassName) {
            if (props.className) {
              props.className += ' ' + activeClassName;
            } else {
              props.className = activeClassName;
            }
          }

          if (activeStyle) props.style = _extends({}, props.style, activeStyle);
        }
      }
    }

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a', _extends({}, props, { onClick: this.handleClick }));
  }
});

/* harmony default export */ __webpack_exports__["a"] = (Link);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */


var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    arguments: true,
    arity: true
};

var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
        var keys = Object.getOwnPropertyNames(sourceComponent);

        /* istanbul ignore else */
        if (isGetOwnPropertySymbolsAvailable) {
            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
                try {
                    targetComponent[keys[i]] = sourceComponent[keys[i]];
                } catch (error) {

                }
            }
        }
    }

    return targetComponent;
};


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_create_react_class__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_create_react_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_create_react_class__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__RouteUtils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PatternUtils__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__InternalPropTypes__ = __webpack_require__(11);







/**
 * A <Redirect> is used to declare another URL path a client should
 * be sent to when they request a given URL.
 *
 * Redirects are placed alongside routes in the route configuration
 * and are traversed in the same manner.
 */
/* eslint-disable react/require-render-return */
var Redirect = __WEBPACK_IMPORTED_MODULE_0_create_react_class___default()({
  displayName: 'Redirect',

  statics: {
    createRouteFromReactElement: function createRouteFromReactElement(element) {
      var route = Object(__WEBPACK_IMPORTED_MODULE_3__RouteUtils__["a" /* createRouteFromReactElement */])(element);

      if (route.from) route.path = route.from;

      route.onEnter = function (nextState, replace) {
        var location = nextState.location,
            params = nextState.params;


        var pathname = void 0;
        if (route.to.charAt(0) === '/') {
          pathname = Object(__WEBPACK_IMPORTED_MODULE_4__PatternUtils__["a" /* formatPattern */])(route.to, params);
        } else if (!route.to) {
          pathname = location.pathname;
        } else {
          var routeIndex = nextState.routes.indexOf(route);
          var parentPattern = Redirect.getRoutePattern(nextState.routes, routeIndex - 1);
          var pattern = parentPattern.replace(/\/*$/, '/') + route.to;
          pathname = Object(__WEBPACK_IMPORTED_MODULE_4__PatternUtils__["a" /* formatPattern */])(pattern, params);
        }

        replace({
          pathname: pathname,
          query: route.query || location.query,
          state: route.state || location.state
        });
      };

      return route;
    },
    getRoutePattern: function getRoutePattern(routes, routeIndex) {
      var parentPattern = '';

      for (var i = routeIndex; i >= 0; i--) {
        var route = routes[i];
        var pattern = route.path || '';

        parentPattern = pattern.replace(/\/*$/, '/') + parentPattern;

        if (pattern.indexOf('/') === 0) break;
      }

      return '/' + parentPattern;
    }
  },

  propTypes: {
    path: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"],
    from: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"], // Alias for path
    to: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"].isRequired,
    query: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
    state: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
    onEnter: __WEBPACK_IMPORTED_MODULE_5__InternalPropTypes__["c" /* falsy */],
    children: __WEBPACK_IMPORTED_MODULE_5__InternalPropTypes__["c" /* falsy */]
  },

  /* istanbul ignore next: sanity check */
  render: function render() {
     true ? process.env.NODE_ENV !== 'production' ? __WEBPACK_IMPORTED_MODULE_2_invariant___default()(false, '<Redirect> elements are for router configuration only and should not be rendered') : __WEBPACK_IMPORTED_MODULE_2_invariant___default()(false) : void 0;
  }
});

/* harmony default export */ __webpack_exports__["a"] = (Redirect);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createMemoryHistory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_lib_useQueries__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_lib_useQueries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_history_lib_useQueries__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_history_lib_useBasename__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_history_lib_useBasename___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_history_lib_useBasename__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_history_lib_createMemoryHistory__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_history_lib_createMemoryHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_history_lib_createMemoryHistory__);




function createMemoryHistory(options) {
  // signatures and type checking differ between `useQueries` and
  // `createMemoryHistory`, have to create `memoryHistory` first because
  // `useQueries` doesn't understand the signature
  var memoryHistory = __WEBPACK_IMPORTED_MODULE_2_history_lib_createMemoryHistory___default()(options);
  var createHistory = function createHistory() {
    return memoryHistory;
  };
  var history = __WEBPACK_IMPORTED_MODULE_0_history_lib_useQueries___default()(__WEBPACK_IMPORTED_MODULE_1_history_lib_useBasename___default()(createHistory))(options);
  return history;
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _queryString = __webpack_require__(72);

var _runTransitionHook = __webpack_require__(19);

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _LocationUtils = __webpack_require__(10);

var _PathUtils = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultStringifyQuery = function defaultStringifyQuery(query) {
  return (0, _queryString.stringify)(query).replace(/%20/g, '+');
};

var defaultParseQueryString = _queryString.parse;

/**
 * Returns a new createHistory function that may be used to create
 * history objects that know how to handle URL queries.
 */
var useQueries = function useQueries(createHistory) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var history = createHistory(options);
    var stringifyQuery = options.stringifyQuery,
        parseQueryString = options.parseQueryString;


    if (typeof stringifyQuery !== 'function') stringifyQuery = defaultStringifyQuery;

    if (typeof parseQueryString !== 'function') parseQueryString = defaultParseQueryString;

    var decodeQuery = function decodeQuery(location) {
      if (!location) return location;

      if (location.query == null) location.query = parseQueryString(location.search.substring(1));

      return location;
    };

    var encodeQuery = function encodeQuery(location, query) {
      if (query == null) return location;

      var object = typeof location === 'string' ? (0, _PathUtils.parsePath)(location) : location;
      var queryString = stringifyQuery(query);
      var search = queryString ? '?' + queryString : '';

      return _extends({}, object, {
        search: search
      });
    };

    // Override all read methods with query-aware versions.
    var getCurrentLocation = function getCurrentLocation() {
      return decodeQuery(history.getCurrentLocation());
    };

    var listenBefore = function listenBefore(hook) {
      return history.listenBefore(function (location, callback) {
        return (0, _runTransitionHook2.default)(hook, decodeQuery(location), callback);
      });
    };

    var listen = function listen(listener) {
      return history.listen(function (location) {
        return listener(decodeQuery(location));
      });
    };

    // Override all write methods with query-aware versions.
    var push = function push(location) {
      return history.push(encodeQuery(location, location.query));
    };

    var replace = function replace(location) {
      return history.replace(encodeQuery(location, location.query));
    };

    var createPath = function createPath(location) {
      return history.createPath(encodeQuery(location, location.query));
    };

    var createHref = function createHref(location) {
      return history.createHref(encodeQuery(location, location.query));
    };

    var createLocation = function createLocation(location) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var newLocation = history.createLocation.apply(history, [encodeQuery(location, location.query)].concat(args));

      if (location.query) newLocation.query = (0, _LocationUtils.createQuery)(location.query);

      return decodeQuery(newLocation);
    };

    return _extends({}, history, {
      getCurrentLocation: getCurrentLocation,
      listenBefore: listenBefore,
      listen: listen,
      push: push,
      replace: replace,
      createPath: createPath,
      createHref: createHref,
      createLocation: createLocation
    });
  };
};

exports.default = useQueries;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _runTransitionHook = __webpack_require__(19);

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _PathUtils = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useBasename = function useBasename(createHistory) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var history = createHistory(options);
    var basename = options.basename;


    var addBasename = function addBasename(location) {
      if (!location) return location;

      if (basename && location.basename == null) {
        if (location.pathname.toLowerCase().indexOf(basename.toLowerCase()) === 0) {
          location.pathname = location.pathname.substring(basename.length);
          location.basename = basename;

          if (location.pathname === '') location.pathname = '/';
        } else {
          location.basename = '';
        }
      }

      return location;
    };

    var prependBasename = function prependBasename(location) {
      if (!basename) return location;

      var object = typeof location === 'string' ? (0, _PathUtils.parsePath)(location) : location;
      var pname = object.pathname;
      var normalizedBasename = basename.slice(-1) === '/' ? basename : basename + '/';
      var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
      var pathname = normalizedBasename + normalizedPathname;

      return _extends({}, object, {
        pathname: pathname
      });
    };

    // Override all read methods with basename-aware versions.
    var getCurrentLocation = function getCurrentLocation() {
      return addBasename(history.getCurrentLocation());
    };

    var listenBefore = function listenBefore(hook) {
      return history.listenBefore(function (location, callback) {
        return (0, _runTransitionHook2.default)(hook, addBasename(location), callback);
      });
    };

    var listen = function listen(listener) {
      return history.listen(function (location) {
        return listener(addBasename(location));
      });
    };

    // Override all write methods with basename-aware versions.
    var push = function push(location) {
      return history.push(prependBasename(location));
    };

    var replace = function replace(location) {
      return history.replace(prependBasename(location));
    };

    var createPath = function createPath(location) {
      return history.createPath(prependBasename(location));
    };

    var createHref = function createHref(location) {
      return history.createHref(prependBasename(location));
    };

    var createLocation = function createLocation(location) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return addBasename(history.createLocation.apply(history, [prependBasename(location)].concat(args)));
    };

    return _extends({}, history, {
      getCurrentLocation: getCurrentLocation,
      listenBefore: listenBefore,
      listen: listen,
      push: push,
      replace: replace,
      createPath: createPath,
      createHref: createHref,
      createLocation: createLocation
    });
  };
};

exports.default = useBasename;

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = useRouterHistory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_lib_useQueries__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_lib_useQueries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_history_lib_useQueries__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_history_lib_useBasename__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_history_lib_useBasename___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_history_lib_useBasename__);



function useRouterHistory(createHistory) {
  return function (options) {
    var history = __WEBPACK_IMPORTED_MODULE_0_history_lib_useQueries___default()(__WEBPACK_IMPORTED_MODULE_1_history_lib_useBasename___default()(createHistory))(options);
    return history;
  };
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports.readState = exports.saveState = undefined;

var _warning = __webpack_require__(5);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QuotaExceededErrors = {
  QuotaExceededError: true,
  QUOTA_EXCEEDED_ERR: true
};

var SecurityErrors = {
  SecurityError: true
};

var KeyPrefix = '@@History/';

var createKey = function createKey(key) {
  return KeyPrefix + key;
};

var saveState = exports.saveState = function saveState(key, state) {
  if (!window.sessionStorage) {
    // Session storage is not available or hidden.
    // sessionStorage is undefined in Internet Explorer when served via file protocol.
    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, '[history] Unable to save state; sessionStorage is not available') : void 0;

    return;
  }

  try {
    if (state == null) {
      window.sessionStorage.removeItem(createKey(key));
    } else {
      window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
    }
  } catch (error) {
    if (SecurityErrors[error.name]) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, '[history] Unable to save state; sessionStorage is not available due to security settings') : void 0;

      return;
    }

    if (QuotaExceededErrors[error.name] && window.sessionStorage.length === 0) {
      // Safari "private mode" throws QuotaExceededError.
      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : void 0;

      return;
    }

    throw error;
  }
};

var readState = exports.readState = function readState(key) {
  var json = void 0;
  try {
    json = window.sessionStorage.getItem(createKey(key));
  } catch (error) {
    if (SecurityErrors[error.name]) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, '[history] Unable to read state; sessionStorage is not available due to security settings') : void 0;

      return undefined;
    }
  }

  if (json) {
    try {
      return JSON.parse(json);
    } catch (error) {
      // Ignore invalid JSON.
    }
  }

  return undefined;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createRouterHistory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__useRouterHistory__ = __webpack_require__(36);


var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

function createRouterHistory(createHistory) {
  var history = void 0;
  if (canUseDOM) history = Object(__WEBPACK_IMPORTED_MODULE_0__useRouterHistory__["a" /* default */])(createHistory)();
  return history;
}

/***/ }),
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_invariant__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_create_react_class__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_create_react_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_create_react_class__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createTransitionManager__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__InternalPropTypes__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__RouterContext__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__RouteUtils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__RouterUtils__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routerWarning__ = __webpack_require__(8);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }













var propTypes = {
  history: __WEBPACK_IMPORTED_MODULE_3_prop_types__["object"],
  children: __WEBPACK_IMPORTED_MODULE_5__InternalPropTypes__["d" /* routes */],
  routes: __WEBPACK_IMPORTED_MODULE_5__InternalPropTypes__["d" /* routes */], // alias for children
  render: __WEBPACK_IMPORTED_MODULE_3_prop_types__["func"],
  createElement: __WEBPACK_IMPORTED_MODULE_3_prop_types__["func"],
  onError: __WEBPACK_IMPORTED_MODULE_3_prop_types__["func"],
  onUpdate: __WEBPACK_IMPORTED_MODULE_3_prop_types__["func"],

  // PRIVATE: For client-side rehydration of server match.
  matchContext: __WEBPACK_IMPORTED_MODULE_3_prop_types__["object"]

  /**
   * A <Router> is a high-level API for automatically setting up
   * a router that renders a <RouterContext> with all the props
   * it needs each time the URL changes.
   */
};var Router = __WEBPACK_IMPORTED_MODULE_2_create_react_class___default()({
  displayName: 'Router',

  propTypes: propTypes,

  getDefaultProps: function getDefaultProps() {
    return {
      render: function render(props) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__RouterContext__["a" /* default */], props);
      }
    };
  },
  getInitialState: function getInitialState() {
    return {
      location: null,
      routes: null,
      params: null,
      components: null
    };
  },
  handleError: function handleError(error) {
    if (this.props.onError) {
      this.props.onError.call(this, error);
    } else {
      // Throw errors by default so we don't silently swallow them!
      throw error; // This error probably occurred in getChildRoutes or getComponents.
    }
  },
  createRouterObject: function createRouterObject(state) {
    var matchContext = this.props.matchContext;

    if (matchContext) {
      return matchContext.router;
    }

    var history = this.props.history;

    return Object(__WEBPACK_IMPORTED_MODULE_8__RouterUtils__["b" /* createRouterObject */])(history, this.transitionManager, state);
  },
  createTransitionManager: function createTransitionManager() {
    var matchContext = this.props.matchContext;

    if (matchContext) {
      return matchContext.transitionManager;
    }

    var history = this.props.history;
    var _props = this.props,
        routes = _props.routes,
        children = _props.children;


    !history.getCurrentLocation ? process.env.NODE_ENV !== 'production' ? __WEBPACK_IMPORTED_MODULE_0_invariant___default()(false, 'You have provided a history object created with history v4.x or v2.x ' + 'and earlier. This version of React Router is only compatible with v3 ' + 'history objects. Please change to history v3.x.') : __WEBPACK_IMPORTED_MODULE_0_invariant___default()(false) : void 0;

    return Object(__WEBPACK_IMPORTED_MODULE_4__createTransitionManager__["a" /* default */])(history, Object(__WEBPACK_IMPORTED_MODULE_7__RouteUtils__["b" /* createRoutes */])(routes || children));
  },
  componentWillMount: function componentWillMount() {
    var _this = this;

    this.transitionManager = this.createTransitionManager();
    this.router = this.createRouterObject(this.state);

    this._unlisten = this.transitionManager.listen(function (error, state) {
      if (error) {
        _this.handleError(error);
      } else {
        // Keep the identity of this.router because of a caveat in ContextUtils:
        // they only work if the object identity is preserved.
        Object(__WEBPACK_IMPORTED_MODULE_8__RouterUtils__["a" /* assignRouterState */])(_this.router, state);
        _this.setState(state, _this.props.onUpdate);
      }
    });
  },


  /* istanbul ignore next: sanity check */
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    process.env.NODE_ENV !== 'production' ? Object(__WEBPACK_IMPORTED_MODULE_9__routerWarning__["a" /* default */])(nextProps.history === this.props.history, 'You cannot change <Router history>; it will be ignored') : void 0;

    process.env.NODE_ENV !== 'production' ? Object(__WEBPACK_IMPORTED_MODULE_9__routerWarning__["a" /* default */])((nextProps.routes || nextProps.children) === (this.props.routes || this.props.children), 'You cannot change <Router routes>; it will be ignored') : void 0;
  },
  componentWillUnmount: function componentWillUnmount() {
    if (this._unlisten) this._unlisten();
  },
  render: function render() {
    var _state = this.state,
        location = _state.location,
        routes = _state.routes,
        params = _state.params,
        components = _state.components;

    var _props2 = this.props,
        createElement = _props2.createElement,
        render = _props2.render,
        props = _objectWithoutProperties(_props2, ['createElement', 'render']);

    if (location == null) return null; // Async match

    // Only forward non-Router-specific props to routing context, as those are
    // the only ones that might be custom routing context props.
    Object.keys(propTypes).forEach(function (propType) {
      return delete props[propType];
    });

    return render(_extends({}, props, {
      router: this.router,
      location: location,
      routes: routes,
      params: params,
      components: components,
      createElement: createElement
    }));
  }
});

/* harmony default export */ __webpack_exports__["a"] = (Router);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var _assign = __webpack_require__(26);

var emptyObject = __webpack_require__(56);
var _invariant = __webpack_require__(57);

if (process.env.NODE_ENV !== 'production') {
  var warning = __webpack_require__(58);
}

var MIXINS_KEY = 'mixins';

// Helper function to allow the creation of anonymous functions which do not
// have .name set to the name of the variable being assigned to.
function identity(fn) {
  return fn;
}

var ReactPropTypeLocationNames;
if (process.env.NODE_ENV !== 'production') {
  ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
} else {
  ReactPropTypeLocationNames = {};
}

function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
  /**
   * Policies that describe methods in `ReactClassInterface`.
   */

  var injectedMixins = [];

  /**
   * Composite components are higher-level components that compose other composite
   * or host components.
   *
   * To create a new type of `ReactClass`, pass a specification of
   * your new class to `React.createClass`. The only requirement of your class
   * specification is that you implement a `render` method.
   *
   *   var MyComponent = React.createClass({
   *     render: function() {
   *       return <div>Hello World</div>;
   *     }
   *   });
   *
   * The class specification supports a specific protocol of methods that have
   * special meaning (e.g. `render`). See `ReactClassInterface` for
   * more the comprehensive protocol. Any other properties and methods in the
   * class specification will be available on the prototype.
   *
   * @interface ReactClassInterface
   * @internal
   */
  var ReactClassInterface = {
    /**
     * An array of Mixin objects to include when defining your component.
     *
     * @type {array}
     * @optional
     */
    mixins: 'DEFINE_MANY',

    /**
     * An object containing properties and methods that should be defined on
     * the component's constructor instead of its prototype (static methods).
     *
     * @type {object}
     * @optional
     */
    statics: 'DEFINE_MANY',

    /**
     * Definition of prop types for this component.
     *
     * @type {object}
     * @optional
     */
    propTypes: 'DEFINE_MANY',

    /**
     * Definition of context types for this component.
     *
     * @type {object}
     * @optional
     */
    contextTypes: 'DEFINE_MANY',

    /**
     * Definition of context types this component sets for its children.
     *
     * @type {object}
     * @optional
     */
    childContextTypes: 'DEFINE_MANY',

    // ==== Definition methods ====

    /**
     * Invoked when the component is mounted. Values in the mapping will be set on
     * `this.props` if that prop is not specified (i.e. using an `in` check).
     *
     * This method is invoked before `getInitialState` and therefore cannot rely
     * on `this.state` or use `this.setState`.
     *
     * @return {object}
     * @optional
     */
    getDefaultProps: 'DEFINE_MANY_MERGED',

    /**
     * Invoked once before the component is mounted. The return value will be used
     * as the initial value of `this.state`.
     *
     *   getInitialState: function() {
     *     return {
     *       isOn: false,
     *       fooBaz: new BazFoo()
     *     }
     *   }
     *
     * @return {object}
     * @optional
     */
    getInitialState: 'DEFINE_MANY_MERGED',

    /**
     * @return {object}
     * @optional
     */
    getChildContext: 'DEFINE_MANY_MERGED',

    /**
     * Uses props from `this.props` and state from `this.state` to render the
     * structure of the component.
     *
     * No guarantees are made about when or how often this method is invoked, so
     * it must not have side effects.
     *
     *   render: function() {
     *     var name = this.props.name;
     *     return <div>Hello, {name}!</div>;
     *   }
     *
     * @return {ReactComponent}
     * @required
     */
    render: 'DEFINE_ONCE',

    // ==== Delegate methods ====

    /**
     * Invoked when the component is initially created and about to be mounted.
     * This may have side effects, but any external subscriptions or data created
     * by this method must be cleaned up in `componentWillUnmount`.
     *
     * @optional
     */
    componentWillMount: 'DEFINE_MANY',

    /**
     * Invoked when the component has been mounted and has a DOM representation.
     * However, there is no guarantee that the DOM node is in the document.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been mounted (initialized and rendered) for the first time.
     *
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidMount: 'DEFINE_MANY',

    /**
     * Invoked before the component receives new props.
     *
     * Use this as an opportunity to react to a prop transition by updating the
     * state using `this.setState`. Current props are accessed via `this.props`.
     *
     *   componentWillReceiveProps: function(nextProps, nextContext) {
     *     this.setState({
     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
     *     });
     *   }
     *
     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
     * transition may cause a state change, but the opposite is not true. If you
     * need it, you are probably looking for `componentWillUpdate`.
     *
     * @param {object} nextProps
     * @optional
     */
    componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Invoked while deciding if the component should be updated as a result of
     * receiving new props, state and/or context.
     *
     * Use this as an opportunity to `return false` when you're certain that the
     * transition to the new props/state/context will not require a component
     * update.
     *
     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
     *     return !equal(nextProps, this.props) ||
     *       !equal(nextState, this.state) ||
     *       !equal(nextContext, this.context);
     *   }
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @return {boolean} True if the component should update.
     * @optional
     */
    shouldComponentUpdate: 'DEFINE_ONCE',

    /**
     * Invoked when the component is about to update due to a transition from
     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
     * and `nextContext`.
     *
     * Use this as an opportunity to perform preparation before an update occurs.
     *
     * NOTE: You **cannot** use `this.setState()` in this method.
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @param {ReactReconcileTransaction} transaction
     * @optional
     */
    componentWillUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component's DOM representation has been updated.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been updated.
     *
     * @param {object} prevProps
     * @param {?object} prevState
     * @param {?object} prevContext
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component is about to be removed from its parent and have
     * its DOM representation destroyed.
     *
     * Use this as an opportunity to deallocate any external resources.
     *
     * NOTE: There is no `componentDidUnmount` since your component will have been
     * destroyed by that point.
     *
     * @optional
     */
    componentWillUnmount: 'DEFINE_MANY',

    // ==== Advanced methods ====

    /**
     * Updates the component's currently mounted DOM representation.
     *
     * By default, this implements React's rendering and reconciliation algorithm.
     * Sophisticated clients may wish to override this.
     *
     * @param {ReactReconcileTransaction} transaction
     * @internal
     * @overridable
     */
    updateComponent: 'OVERRIDE_BASE'
  };

  /**
   * Mapping from class specification keys to special processing functions.
   *
   * Although these are declared like instance properties in the specification
   * when defining classes using `React.createClass`, they are actually static
   * and are accessible on the constructor instead of the prototype. Despite
   * being static, they must be defined outside of the "statics" key under
   * which all other static methods are defined.
   */
  var RESERVED_SPEC_KEYS = {
    displayName: function(Constructor, displayName) {
      Constructor.displayName = displayName;
    },
    mixins: function(Constructor, mixins) {
      if (mixins) {
        for (var i = 0; i < mixins.length; i++) {
          mixSpecIntoComponent(Constructor, mixins[i]);
        }
      }
    },
    childContextTypes: function(Constructor, childContextTypes) {
      if (process.env.NODE_ENV !== 'production') {
        validateTypeDef(Constructor, childContextTypes, 'childContext');
      }
      Constructor.childContextTypes = _assign(
        {},
        Constructor.childContextTypes,
        childContextTypes
      );
    },
    contextTypes: function(Constructor, contextTypes) {
      if (process.env.NODE_ENV !== 'production') {
        validateTypeDef(Constructor, contextTypes, 'context');
      }
      Constructor.contextTypes = _assign(
        {},
        Constructor.contextTypes,
        contextTypes
      );
    },
    /**
     * Special case getDefaultProps which should move into statics but requires
     * automatic merging.
     */
    getDefaultProps: function(Constructor, getDefaultProps) {
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps = createMergedResultFunction(
          Constructor.getDefaultProps,
          getDefaultProps
        );
      } else {
        Constructor.getDefaultProps = getDefaultProps;
      }
    },
    propTypes: function(Constructor, propTypes) {
      if (process.env.NODE_ENV !== 'production') {
        validateTypeDef(Constructor, propTypes, 'prop');
      }
      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
    },
    statics: function(Constructor, statics) {
      mixStaticSpecIntoComponent(Constructor, statics);
    },
    autobind: function() {}
  };

  function validateTypeDef(Constructor, typeDef, location) {
    for (var propName in typeDef) {
      if (typeDef.hasOwnProperty(propName)) {
        // use a warning instead of an _invariant so components
        // don't show up in prod but only in __DEV__
        if (process.env.NODE_ENV !== 'production') {
          warning(
            typeof typeDef[propName] === 'function',
            '%s: %s type `%s` is invalid; it must be a function, usually from ' +
              'React.PropTypes.',
            Constructor.displayName || 'ReactClass',
            ReactPropTypeLocationNames[location],
            propName
          );
        }
      }
    }
  }

  function validateMethodOverride(isAlreadyDefined, name) {
    var specPolicy = ReactClassInterface.hasOwnProperty(name)
      ? ReactClassInterface[name]
      : null;

    // Disallow overriding of base class methods unless explicitly allowed.
    if (ReactClassMixin.hasOwnProperty(name)) {
      _invariant(
        specPolicy === 'OVERRIDE_BASE',
        'ReactClassInterface: You are attempting to override ' +
          '`%s` from your class specification. Ensure that your method names ' +
          'do not overlap with React methods.',
        name
      );
    }

    // Disallow defining methods more than once unless explicitly allowed.
    if (isAlreadyDefined) {
      _invariant(
        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
        'ReactClassInterface: You are attempting to define ' +
          '`%s` on your component more than once. This conflict may be due ' +
          'to a mixin.',
        name
      );
    }
  }

  /**
   * Mixin helper which handles policy validation and reserved
   * specification keys when building React classes.
   */
  function mixSpecIntoComponent(Constructor, spec) {
    if (!spec) {
      if (process.env.NODE_ENV !== 'production') {
        var typeofSpec = typeof spec;
        var isMixinValid = typeofSpec === 'object' && spec !== null;

        if (process.env.NODE_ENV !== 'production') {
          warning(
            isMixinValid,
            "%s: You're attempting to include a mixin that is either null " +
              'or not an object. Check the mixins included by the component, ' +
              'as well as any mixins they include themselves. ' +
              'Expected object but got %s.',
            Constructor.displayName || 'ReactClass',
            spec === null ? null : typeofSpec
          );
        }
      }

      return;
    }

    _invariant(
      typeof spec !== 'function',
      "ReactClass: You're attempting to " +
        'use a component class or function as a mixin. Instead, just use a ' +
        'regular object.'
    );
    _invariant(
      !isValidElement(spec),
      "ReactClass: You're attempting to " +
        'use a component as a mixin. Instead, just use a regular object.'
    );

    var proto = Constructor.prototype;
    var autoBindPairs = proto.__reactAutoBindPairs;

    // By handling mixins before any other properties, we ensure the same
    // chaining order is applied to methods with DEFINE_MANY policy, whether
    // mixins are listed before or after these methods in the spec.
    if (spec.hasOwnProperty(MIXINS_KEY)) {
      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
    }

    for (var name in spec) {
      if (!spec.hasOwnProperty(name)) {
        continue;
      }

      if (name === MIXINS_KEY) {
        // We have already handled mixins in a special case above.
        continue;
      }

      var property = spec[name];
      var isAlreadyDefined = proto.hasOwnProperty(name);
      validateMethodOverride(isAlreadyDefined, name);

      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
        RESERVED_SPEC_KEYS[name](Constructor, property);
      } else {
        // Setup methods on prototype:
        // The following member methods should not be automatically bound:
        // 1. Expected ReactClass methods (in the "interface").
        // 2. Overridden methods (that were mixed in).
        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
        var isFunction = typeof property === 'function';
        var shouldAutoBind =
          isFunction &&
          !isReactClassMethod &&
          !isAlreadyDefined &&
          spec.autobind !== false;

        if (shouldAutoBind) {
          autoBindPairs.push(name, property);
          proto[name] = property;
        } else {
          if (isAlreadyDefined) {
            var specPolicy = ReactClassInterface[name];

            // These cases should already be caught by validateMethodOverride.
            _invariant(
              isReactClassMethod &&
                (specPolicy === 'DEFINE_MANY_MERGED' ||
                  specPolicy === 'DEFINE_MANY'),
              'ReactClass: Unexpected spec policy %s for key %s ' +
                'when mixing in component specs.',
              specPolicy,
              name
            );

            // For methods which are defined more than once, call the existing
            // methods before calling the new property, merging if appropriate.
            if (specPolicy === 'DEFINE_MANY_MERGED') {
              proto[name] = createMergedResultFunction(proto[name], property);
            } else if (specPolicy === 'DEFINE_MANY') {
              proto[name] = createChainedFunction(proto[name], property);
            }
          } else {
            proto[name] = property;
            if (process.env.NODE_ENV !== 'production') {
              // Add verbose displayName to the function, which helps when looking
              // at profiling tools.
              if (typeof property === 'function' && spec.displayName) {
                proto[name].displayName = spec.displayName + '_' + name;
              }
            }
          }
        }
      }
    }
  }

  function mixStaticSpecIntoComponent(Constructor, statics) {
    if (!statics) {
      return;
    }
    for (var name in statics) {
      var property = statics[name];
      if (!statics.hasOwnProperty(name)) {
        continue;
      }

      var isReserved = name in RESERVED_SPEC_KEYS;
      _invariant(
        !isReserved,
        'ReactClass: You are attempting to define a reserved ' +
          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
          'as an instance property instead; it will still be accessible on the ' +
          'constructor.',
        name
      );

      var isInherited = name in Constructor;
      _invariant(
        !isInherited,
        'ReactClass: You are attempting to define ' +
          '`%s` on your component more than once. This conflict may be ' +
          'due to a mixin.',
        name
      );
      Constructor[name] = property;
    }
  }

  /**
   * Merge two objects, but throw if both contain the same key.
   *
   * @param {object} one The first object, which is mutated.
   * @param {object} two The second object
   * @return {object} one after it has been mutated to contain everything in two.
   */
  function mergeIntoWithNoDuplicateKeys(one, two) {
    _invariant(
      one && two && typeof one === 'object' && typeof two === 'object',
      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
    );

    for (var key in two) {
      if (two.hasOwnProperty(key)) {
        _invariant(
          one[key] === undefined,
          'mergeIntoWithNoDuplicateKeys(): ' +
            'Tried to merge two objects with the same key: `%s`. This conflict ' +
            'may be due to a mixin; in particular, this may be caused by two ' +
            'getInitialState() or getDefaultProps() methods returning objects ' +
            'with clashing keys.',
          key
        );
        one[key] = two[key];
      }
    }
    return one;
  }

  /**
   * Creates a function that invokes two functions and merges their return values.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createMergedResultFunction(one, two) {
    return function mergedResult() {
      var a = one.apply(this, arguments);
      var b = two.apply(this, arguments);
      if (a == null) {
        return b;
      } else if (b == null) {
        return a;
      }
      var c = {};
      mergeIntoWithNoDuplicateKeys(c, a);
      mergeIntoWithNoDuplicateKeys(c, b);
      return c;
    };
  }

  /**
   * Creates a function that invokes two functions and ignores their return vales.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createChainedFunction(one, two) {
    return function chainedFunction() {
      one.apply(this, arguments);
      two.apply(this, arguments);
    };
  }

  /**
   * Binds a method to the component.
   *
   * @param {object} component Component whose method is going to be bound.
   * @param {function} method Method to be bound.
   * @return {function} The bound method.
   */
  function bindAutoBindMethod(component, method) {
    var boundMethod = method.bind(component);
    if (process.env.NODE_ENV !== 'production') {
      boundMethod.__reactBoundContext = component;
      boundMethod.__reactBoundMethod = method;
      boundMethod.__reactBoundArguments = null;
      var componentName = component.constructor.displayName;
      var _bind = boundMethod.bind;
      boundMethod.bind = function(newThis) {
        for (
          var _len = arguments.length,
            args = Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
          _key < _len;
          _key++
        ) {
          args[_key - 1] = arguments[_key];
        }

        // User is trying to bind() an autobound method; we effectively will
        // ignore the value of "this" that the user is trying to use, so
        // let's warn.
        if (newThis !== component && newThis !== null) {
          if (process.env.NODE_ENV !== 'production') {
            warning(
              false,
              'bind(): React component methods may only be bound to the ' +
                'component instance. See %s',
              componentName
            );
          }
        } else if (!args.length) {
          if (process.env.NODE_ENV !== 'production') {
            warning(
              false,
              'bind(): You are binding a component method to the component. ' +
                'React does this for you automatically in a high-performance ' +
                'way, so you can safely remove this call. See %s',
              componentName
            );
          }
          return boundMethod;
        }
        var reboundMethod = _bind.apply(boundMethod, arguments);
        reboundMethod.__reactBoundContext = component;
        reboundMethod.__reactBoundMethod = method;
        reboundMethod.__reactBoundArguments = args;
        return reboundMethod;
      };
    }
    return boundMethod;
  }

  /**
   * Binds all auto-bound methods in a component.
   *
   * @param {object} component Component whose method is going to be bound.
   */
  function bindAutoBindMethods(component) {
    var pairs = component.__reactAutoBindPairs;
    for (var i = 0; i < pairs.length; i += 2) {
      var autoBindKey = pairs[i];
      var method = pairs[i + 1];
      component[autoBindKey] = bindAutoBindMethod(component, method);
    }
  }

  var IsMountedPreMixin = {
    componentDidMount: function() {
      this.__isMounted = true;
    }
  };

  var IsMountedPostMixin = {
    componentWillUnmount: function() {
      this.__isMounted = false;
    }
  };

  /**
   * Add more to the ReactClass base class. These are all legacy features and
   * therefore not already part of the modern ReactComponent.
   */
  var ReactClassMixin = {
    /**
     * TODO: This will be deprecated because state should always keep a consistent
     * type signature and the only use case for this, is to avoid that.
     */
    replaceState: function(newState, callback) {
      this.updater.enqueueReplaceState(this, newState, callback);
    },

    /**
     * Checks whether or not this composite component is mounted.
     * @return {boolean} True if mounted, false otherwise.
     * @protected
     * @final
     */
    isMounted: function() {
      if (process.env.NODE_ENV !== 'production') {
        warning(
          this.__didWarnIsMounted,
          '%s: isMounted is deprecated. Instead, make sure to clean up ' +
            'subscriptions and pending requests in componentWillUnmount to ' +
            'prevent memory leaks.',
          (this.constructor && this.constructor.displayName) ||
            this.name ||
            'Component'
        );
        this.__didWarnIsMounted = true;
      }
      return !!this.__isMounted;
    }
  };

  var ReactClassComponent = function() {};
  _assign(
    ReactClassComponent.prototype,
    ReactComponent.prototype,
    ReactClassMixin
  );

  /**
   * Creates a composite component class given a class specification.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */
  function createClass(spec) {
    // To keep our warnings more understandable, we'll use a little hack here to
    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
    // unnecessarily identify a class without displayName as 'Constructor'.
    var Constructor = identity(function(props, context, updater) {
      // This constructor gets overridden by mocks. The argument is used
      // by mocks to assert on what gets mounted.

      if (process.env.NODE_ENV !== 'production') {
        warning(
          this instanceof Constructor,
          'Something is calling a React component directly. Use a factory or ' +
            'JSX instead. See: https://fb.me/react-legacyfactory'
        );
      }

      // Wire up auto-binding
      if (this.__reactAutoBindPairs.length) {
        bindAutoBindMethods(this);
      }

      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;

      this.state = null;

      // ReactClasses doesn't have constructors. Instead, they use the
      // getInitialState and componentWillMount methods for initialization.

      var initialState = this.getInitialState ? this.getInitialState() : null;
      if (process.env.NODE_ENV !== 'production') {
        // We allow auto-mocks to proceed as if they're returning null.
        if (
          initialState === undefined &&
          this.getInitialState._isMockFunction
        ) {
          // This is probably bad practice. Consider warning here and
          // deprecating this convenience.
          initialState = null;
        }
      }
      _invariant(
        typeof initialState === 'object' && !Array.isArray(initialState),
        '%s.getInitialState(): must return an object or null',
        Constructor.displayName || 'ReactCompositeComponent'
      );

      this.state = initialState;
    });
    Constructor.prototype = new ReactClassComponent();
    Constructor.prototype.constructor = Constructor;
    Constructor.prototype.__reactAutoBindPairs = [];

    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
    mixSpecIntoComponent(Constructor, spec);
    mixSpecIntoComponent(Constructor, IsMountedPostMixin);

    // Initialize the defaultProps property after all mixins have been merged.
    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();
    }

    if (process.env.NODE_ENV !== 'production') {
      // This is a tag to indicate that the use of these method names is ok,
      // since it's used with createClass. If it's not, then it's likely a
      // mistake so we'll warn you to use the static property, property
      // initializer or constructor respectively.
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps.isReactClassApproved = {};
      }
      if (Constructor.prototype.getInitialState) {
        Constructor.prototype.getInitialState.isReactClassApproved = {};
      }
    }

    _invariant(
      Constructor.prototype.render,
      'createClass(...): Class specification must implement a `render` method.'
    );

    if (process.env.NODE_ENV !== 'production') {
      warning(
        !Constructor.prototype.componentShouldUpdate,
        '%s has a method called ' +
          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
          'The name is phrased as a question because the function is ' +
          'expected to return a value.',
        spec.displayName || 'A component'
      );
      warning(
        !Constructor.prototype.componentWillRecieveProps,
        '%s has a method called ' +
          'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
        spec.displayName || 'A component'
      );
    }

    // Reduce time spent doing lookups by setting these on the prototype.
    for (var methodName in ReactClassInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;
      }
    }

    return Constructor;
  }

  return createClass;
}

module.exports = factory;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

if (process.env.NODE_ENV !== 'production') {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(59);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PatternUtils__ = __webpack_require__(9);


function routeParamsChanged(route, prevState, nextState) {
  if (!route.path) return false;

  var paramNames = Object(__WEBPACK_IMPORTED_MODULE_0__PatternUtils__["b" /* getParamNames */])(route.path);

  return paramNames.some(function (paramName) {
    return prevState.params[paramName] !== nextState.params[paramName];
  });
}

/**
 * Returns an object of { leaveRoutes, changeRoutes, enterRoutes } determined by
 * the change from prevState to nextState. We leave routes if either
 * 1) they are not in the next state or 2) they are in the next state
 * but their params have changed (i.e. /users/123 => /users/456).
 *
 * leaveRoutes are ordered starting at the leaf route of the tree
 * we're leaving up to the common parent route. enterRoutes are ordered
 * from the top of the tree we're entering down to the leaf route.
 *
 * changeRoutes are any routes that didn't leave or enter during
 * the transition.
 */
function computeChangedRoutes(prevState, nextState) {
  var prevRoutes = prevState && prevState.routes;
  var nextRoutes = nextState.routes;

  var leaveRoutes = void 0,
      changeRoutes = void 0,
      enterRoutes = void 0;
  if (prevRoutes) {
    var parentIsLeaving = false;
    leaveRoutes = prevRoutes.filter(function (route) {
      if (parentIsLeaving) {
        return true;
      } else {
        var isLeaving = nextRoutes.indexOf(route) === -1 || routeParamsChanged(route, prevState, nextState);
        if (isLeaving) parentIsLeaving = true;
        return isLeaving;
      }
    });

    // onLeave hooks start at the leaf route.
    leaveRoutes.reverse();

    enterRoutes = [];
    changeRoutes = [];

    nextRoutes.forEach(function (route) {
      var isNew = prevRoutes.indexOf(route) === -1;
      var paramsChanged = leaveRoutes.indexOf(route) !== -1;

      if (isNew || paramsChanged) enterRoutes.push(route);else changeRoutes.push(route);
    });
  } else {
    leaveRoutes = [];
    changeRoutes = [];
    enterRoutes = nextRoutes;
  }

  return {
    leaveRoutes: leaveRoutes,
    changeRoutes: changeRoutes,
    enterRoutes: enterRoutes
  };
}

/* harmony default export */ __webpack_exports__["a"] = (computeChangedRoutes);

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getTransitionUtils;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AsyncUtils__ = __webpack_require__(15);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var PendingHooks = function PendingHooks() {
  var _this = this;

  _classCallCheck(this, PendingHooks);

  this.hooks = [];

  this.add = function (hook) {
    return _this.hooks.push(hook);
  };

  this.remove = function (hook) {
    return _this.hooks = _this.hooks.filter(function (h) {
      return h !== hook;
    });
  };

  this.has = function (hook) {
    return _this.hooks.indexOf(hook) !== -1;
  };

  this.clear = function () {
    return _this.hooks = [];
  };
};

function getTransitionUtils() {
  var enterHooks = new PendingHooks();
  var changeHooks = new PendingHooks();

  function createTransitionHook(hook, route, asyncArity, pendingHooks) {
    var isSync = hook.length < asyncArity;

    var transitionHook = function transitionHook() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      hook.apply(route, args);

      if (isSync) {
        var callback = args[args.length - 1];
        // Assume hook executes synchronously and
        // automatically call the callback.
        callback();
      }
    };

    pendingHooks.add(transitionHook);

    return transitionHook;
  }

  function getEnterHooks(routes) {
    return routes.reduce(function (hooks, route) {
      if (route.onEnter) hooks.push(createTransitionHook(route.onEnter, route, 3, enterHooks));
      return hooks;
    }, []);
  }

  function getChangeHooks(routes) {
    return routes.reduce(function (hooks, route) {
      if (route.onChange) hooks.push(createTransitionHook(route.onChange, route, 4, changeHooks));
      return hooks;
    }, []);
  }

  function runTransitionHooks(length, iter, callback) {
    if (!length) {
      callback();
      return;
    }

    var redirectInfo = void 0;
    function replace(location) {
      redirectInfo = location;
    }

    Object(__WEBPACK_IMPORTED_MODULE_0__AsyncUtils__["a" /* loopAsync */])(length, function (index, next, done) {
      iter(index, replace, function (error) {
        if (error || redirectInfo) {
          done(error, redirectInfo); // No need to continue.
        } else {
          next();
        }
      });
    }, callback);
  }

  /**
   * Runs all onEnter hooks in the given array of routes in order
   * with onEnter(nextState, replace, callback) and calls
   * callback(error, redirectInfo) when finished. The first hook
   * to use replace short-circuits the loop.
   *
   * If a hook needs to run asynchronously, it may use the callback
   * function. However, doing so will cause the transition to pause,
   * which could lead to a non-responsive UI if the hook is slow.
   */
  function runEnterHooks(routes, nextState, callback) {
    enterHooks.clear();
    var hooks = getEnterHooks(routes);
    return runTransitionHooks(hooks.length, function (index, replace, next) {
      var wrappedNext = function wrappedNext() {
        if (enterHooks.has(hooks[index])) {
          next.apply(undefined, arguments);
          enterHooks.remove(hooks[index]);
        }
      };
      hooks[index](nextState, replace, wrappedNext);
    }, callback);
  }

  /**
   * Runs all onChange hooks in the given array of routes in order
   * with onChange(prevState, nextState, replace, callback) and calls
   * callback(error, redirectInfo) when finished. The first hook
   * to use replace short-circuits the loop.
   *
   * If a hook needs to run asynchronously, it may use the callback
   * function. However, doing so will cause the transition to pause,
   * which could lead to a non-responsive UI if the hook is slow.
   */
  function runChangeHooks(routes, state, nextState, callback) {
    changeHooks.clear();
    var hooks = getChangeHooks(routes);
    return runTransitionHooks(hooks.length, function (index, replace, next) {
      var wrappedNext = function wrappedNext() {
        if (changeHooks.has(hooks[index])) {
          next.apply(undefined, arguments);
          changeHooks.remove(hooks[index]);
        }
      };
      hooks[index](state, nextState, replace, wrappedNext);
    }, callback);
  }

  /**
   * Runs all onLeave hooks in the given array of routes in order.
   */
  function runLeaveHooks(routes, prevState) {
    for (var i = 0, len = routes.length; i < len; ++i) {
      if (routes[i].onLeave) routes[i].onLeave.call(routes[i], prevState);
    }
  }

  return {
    runEnterHooks: runEnterHooks,
    runChangeHooks: runChangeHooks,
    runLeaveHooks: runLeaveHooks
  };
}

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isActive;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PatternUtils__ = __webpack_require__(9);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



function deepEqual(a, b) {
  if (a == b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return deepEqual(item, b[index]);
    });
  }

  if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') {
    for (var p in a) {
      if (!Object.prototype.hasOwnProperty.call(a, p)) {
        continue;
      }

      if (a[p] === undefined) {
        if (b[p] !== undefined) {
          return false;
        }
      } else if (!Object.prototype.hasOwnProperty.call(b, p)) {
        return false;
      } else if (!deepEqual(a[p], b[p])) {
        return false;
      }
    }

    return true;
  }

  return String(a) === String(b);
}

/**
 * Returns true if the current pathname matches the supplied one, net of
 * leading and trailing slash normalization. This is sufficient for an
 * indexOnly route match.
 */
function pathIsActive(pathname, currentPathname) {
  // Normalize leading slash for consistency. Leading slash on pathname has
  // already been normalized in isActive. See caveat there.
  if (currentPathname.charAt(0) !== '/') {
    currentPathname = '/' + currentPathname;
  }

  // Normalize the end of both path names too. Maybe `/foo/` shouldn't show
  // `/foo` as active, but in this case, we would already have failed the
  // match.
  if (pathname.charAt(pathname.length - 1) !== '/') {
    pathname += '/';
  }
  if (currentPathname.charAt(currentPathname.length - 1) !== '/') {
    currentPathname += '/';
  }

  return currentPathname === pathname;
}

/**
 * Returns true if the given pathname matches the active routes and params.
 */
function routeIsActive(pathname, routes, params) {
  var remainingPathname = pathname,
      paramNames = [],
      paramValues = [];

  // for...of would work here but it's probably slower post-transpilation.
  for (var i = 0, len = routes.length; i < len; ++i) {
    var route = routes[i];
    var pattern = route.path || '';

    if (pattern.charAt(0) === '/') {
      remainingPathname = pathname;
      paramNames = [];
      paramValues = [];
    }

    if (remainingPathname !== null && pattern) {
      var matched = Object(__WEBPACK_IMPORTED_MODULE_0__PatternUtils__["c" /* matchPattern */])(pattern, remainingPathname);
      if (matched) {
        remainingPathname = matched.remainingPathname;
        paramNames = [].concat(paramNames, matched.paramNames);
        paramValues = [].concat(paramValues, matched.paramValues);
      } else {
        remainingPathname = null;
      }

      if (remainingPathname === '') {
        // We have an exact match on the route. Just check that all the params
        // match.
        // FIXME: This doesn't work on repeated params.
        return paramNames.every(function (paramName, index) {
          return String(paramValues[index]) === String(params[paramName]);
        });
      }
    }
  }

  return false;
}

/**
 * Returns true if all key/value pairs in the given query are
 * currently active.
 */
function queryIsActive(query, activeQuery) {
  if (activeQuery == null) return query == null;

  if (query == null) return true;

  return deepEqual(query, activeQuery);
}

/**
 * Returns true if a <Link> to the given pathname/query combination is
 * currently active.
 */
function isActive(_ref, indexOnly, currentLocation, routes, params) {
  var pathname = _ref.pathname,
      query = _ref.query;

  if (currentLocation == null) return false;

  // TODO: This is a bit ugly. It keeps around support for treating pathnames
  // without preceding slashes as absolute paths, but possibly also works
  // around the same quirks with basenames as in matchRoutes.
  if (pathname.charAt(0) !== '/') {
    pathname = '/' + pathname;
  }

  if (!pathIsActive(pathname, currentLocation.pathname)) {
    // The path check is necessary and sufficient for indexOnly, but otherwise
    // we still need to check the routes.
    if (indexOnly || !routeIsActive(pathname, routes, params)) {
      return false;
    }
  }

  return queryIsActive(query, currentLocation.query);
}

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AsyncUtils__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PromiseUtils__ = __webpack_require__(28);



function getComponentsForRoute(nextState, route, callback) {
  if (route.component || route.components) {
    callback(null, route.component || route.components);
    return;
  }

  var getComponent = route.getComponent || route.getComponents;
  if (getComponent) {
    var componentReturn = getComponent.call(route, nextState, callback);
    if (Object(__WEBPACK_IMPORTED_MODULE_1__PromiseUtils__["a" /* isPromise */])(componentReturn)) componentReturn.then(function (component) {
      return callback(null, component);
    }, callback);
  } else {
    callback();
  }
}

/**
 * Asynchronously fetches all components needed for the given router
 * state and calls callback(error, components) when finished.
 *
 * Note: This operation may finish synchronously if no routes have an
 * asynchronous getComponents method.
 */
function getComponents(nextState, callback) {
  Object(__WEBPACK_IMPORTED_MODULE_0__AsyncUtils__["b" /* mapAsync */])(nextState.routes, function (route, index, callback) {
    getComponentsForRoute(nextState, route, callback);
  }, callback);
}

/* harmony default export */ __webpack_exports__["a"] = (getComponents);

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = matchRoutes;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AsyncUtils__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PromiseUtils__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PatternUtils__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routerWarning__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RouteUtils__ = __webpack_require__(6);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };







function getChildRoutes(route, location, paramNames, paramValues, callback) {
  if (route.childRoutes) {
    return [null, route.childRoutes];
  }
  if (!route.getChildRoutes) {
    return [];
  }

  var sync = true,
      result = void 0;

  var partialNextState = {
    location: location,
    params: createParams(paramNames, paramValues)
  };

  var childRoutesReturn = route.getChildRoutes(partialNextState, function (error, childRoutes) {
    childRoutes = !error && Object(__WEBPACK_IMPORTED_MODULE_4__RouteUtils__["b" /* createRoutes */])(childRoutes);
    if (sync) {
      result = [error, childRoutes];
      return;
    }

    callback(error, childRoutes);
  });

  if (Object(__WEBPACK_IMPORTED_MODULE_1__PromiseUtils__["a" /* isPromise */])(childRoutesReturn)) childRoutesReturn.then(function (childRoutes) {
    return callback(null, Object(__WEBPACK_IMPORTED_MODULE_4__RouteUtils__["b" /* createRoutes */])(childRoutes));
  }, callback);

  sync = false;
  return result; // Might be undefined.
}

function getIndexRoute(route, location, paramNames, paramValues, callback) {
  if (route.indexRoute) {
    callback(null, route.indexRoute);
  } else if (route.getIndexRoute) {
    var partialNextState = {
      location: location,
      params: createParams(paramNames, paramValues)
    };

    var indexRoutesReturn = route.getIndexRoute(partialNextState, function (error, indexRoute) {
      callback(error, !error && Object(__WEBPACK_IMPORTED_MODULE_4__RouteUtils__["b" /* createRoutes */])(indexRoute)[0]);
    });

    if (Object(__WEBPACK_IMPORTED_MODULE_1__PromiseUtils__["a" /* isPromise */])(indexRoutesReturn)) indexRoutesReturn.then(function (indexRoute) {
      return callback(null, Object(__WEBPACK_IMPORTED_MODULE_4__RouteUtils__["b" /* createRoutes */])(indexRoute)[0]);
    }, callback);
  } else if (route.childRoutes || route.getChildRoutes) {
    var onChildRoutes = function onChildRoutes(error, childRoutes) {
      if (error) {
        callback(error);
        return;
      }

      var pathless = childRoutes.filter(function (childRoute) {
        return !childRoute.path;
      });

      Object(__WEBPACK_IMPORTED_MODULE_0__AsyncUtils__["a" /* loopAsync */])(pathless.length, function (index, next, done) {
        getIndexRoute(pathless[index], location, paramNames, paramValues, function (error, indexRoute) {
          if (error || indexRoute) {
            var routes = [pathless[index]].concat(Array.isArray(indexRoute) ? indexRoute : [indexRoute]);
            done(error, routes);
          } else {
            next();
          }
        });
      }, function (err, routes) {
        callback(null, routes);
      });
    };

    var result = getChildRoutes(route, location, paramNames, paramValues, onChildRoutes);
    if (result) {
      onChildRoutes.apply(undefined, result);
    }
  } else {
    callback();
  }
}

function assignParams(params, paramNames, paramValues) {
  return paramNames.reduce(function (params, paramName, index) {
    var paramValue = paramValues && paramValues[index];

    if (Array.isArray(params[paramName])) {
      params[paramName].push(paramValue);
    } else if (paramName in params) {
      params[paramName] = [params[paramName], paramValue];
    } else {
      params[paramName] = paramValue;
    }

    return params;
  }, params);
}

function createParams(paramNames, paramValues) {
  return assignParams({}, paramNames, paramValues);
}

function matchRouteDeep(route, location, remainingPathname, paramNames, paramValues, callback) {
  var pattern = route.path || '';

  if (pattern.charAt(0) === '/') {
    remainingPathname = location.pathname;
    paramNames = [];
    paramValues = [];
  }

  // Only try to match the path if the route actually has a pattern, and if
  // we're not just searching for potential nested absolute paths.
  if (remainingPathname !== null && pattern) {
    try {
      var matched = Object(__WEBPACK_IMPORTED_MODULE_2__PatternUtils__["c" /* matchPattern */])(pattern, remainingPathname);
      if (matched) {
        remainingPathname = matched.remainingPathname;
        paramNames = [].concat(paramNames, matched.paramNames);
        paramValues = [].concat(paramValues, matched.paramValues);
      } else {
        remainingPathname = null;
      }
    } catch (error) {
      callback(error);
    }

    // By assumption, pattern is non-empty here, which is the prerequisite for
    // actually terminating a match.
    if (remainingPathname === '') {
      var match = {
        routes: [route],
        params: createParams(paramNames, paramValues)
      };

      getIndexRoute(route, location, paramNames, paramValues, function (error, indexRoute) {
        if (error) {
          callback(error);
        } else {
          if (Array.isArray(indexRoute)) {
            var _match$routes;

            process.env.NODE_ENV !== 'production' ? Object(__WEBPACK_IMPORTED_MODULE_3__routerWarning__["a" /* default */])(indexRoute.every(function (route) {
              return !route.path;
            }), 'Index routes should not have paths') : void 0;
            (_match$routes = match.routes).push.apply(_match$routes, indexRoute);
          } else if (indexRoute) {
            process.env.NODE_ENV !== 'production' ? Object(__WEBPACK_IMPORTED_MODULE_3__routerWarning__["a" /* default */])(!indexRoute.path, 'Index routes should not have paths') : void 0;
            match.routes.push(indexRoute);
          }

          callback(null, match);
        }
      });

      return;
    }
  }

  if (remainingPathname != null || route.childRoutes) {
    // Either a) this route matched at least some of the path or b)
    // we don't have to load this route's children asynchronously. In
    // either case continue checking for matches in the subtree.
    var onChildRoutes = function onChildRoutes(error, childRoutes) {
      if (error) {
        callback(error);
      } else if (childRoutes) {
        // Check the child routes to see if any of them match.
        matchRoutes(childRoutes, location, function (error, match) {
          if (error) {
            callback(error);
          } else if (match) {
            // A child route matched! Augment the match and pass it up the stack.
            match.routes.unshift(route);
            callback(null, match);
          } else {
            callback();
          }
        }, remainingPathname, paramNames, paramValues);
      } else {
        callback();
      }
    };

    var result = getChildRoutes(route, location, paramNames, paramValues, onChildRoutes);
    if (result) {
      onChildRoutes.apply(undefined, result);
    }
  } else {
    callback();
  }
}

/**
 * Asynchronously matches the given location to a set of routes and calls
 * callback(error, state) when finished. The state object will have the
 * following properties:
 *
 * - routes       An array of routes that matched, in hierarchical order
 * - params       An object of URL parameters
 *
 * Note: This operation may finish synchronously if no routes have an
 * asynchronous getChildRoutes method.
 */
function matchRoutes(routes, location, callback, remainingPathname) {
  var paramNames = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
  var paramValues = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];

  if (remainingPathname === undefined) {
    // TODO: This is a little bit ugly, but it works around a quirk in history
    // that strips the leading slash from pathnames when using basenames with
    // trailing slashes.
    if (location.pathname.charAt(0) !== '/') {
      location = _extends({}, location, {
        pathname: '/' + location.pathname
      });
    }
    remainingPathname = location.pathname;
  }

  Object(__WEBPACK_IMPORTED_MODULE_0__AsyncUtils__["a" /* loopAsync */])(routes.length, function (index, next, done) {
    matchRouteDeep(routes[index], location, remainingPathname, paramNames, paramValues, function (error, match) {
      if (error || match) {
        done(error, match);
      } else {
        next();
      }
    });
  }, callback);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PatternUtils__ = __webpack_require__(9);


/**
 * Extracts an object of params the given route cares about from
 * the given params object.
 */
function getRouteParams(route, params) {
  var routeParams = {};

  if (!route.path) return routeParams;

  Object(__WEBPACK_IMPORTED_MODULE_0__PatternUtils__["b" /* getParamNames */])(route.path).forEach(function (p) {
    if (Object.prototype.hasOwnProperty.call(params, p)) {
      routeParams[p] = params[p];
    }
  });

  return routeParams;
}

/* harmony default export */ __webpack_exports__["a"] = (getRouteParams);

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_create_react_class__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_create_react_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_create_react_class__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Link__ = __webpack_require__(30);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





/**
 * An <IndexLink> is used to link to an <IndexRoute>.
 */
var IndexLink = __WEBPACK_IMPORTED_MODULE_1_create_react_class___default()({
  displayName: 'IndexLink',

  render: function render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Link__["a" /* default */], _extends({}, this.props, { onlyActiveOnIndex: true }));
  }
});

/* harmony default export */ __webpack_exports__["a"] = (IndexLink);

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = withRouter;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_invariant__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_create_react_class__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_create_react_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_create_react_class__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hoist_non_react_statics__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ContextUtils__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PropTypes__ = __webpack_require__(18);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function withRouter(WrappedComponent, options) {
  var withRef = options && options.withRef;

  var WithRouter = __WEBPACK_IMPORTED_MODULE_2_create_react_class___default()({
    displayName: 'WithRouter',

    mixins: [Object(__WEBPACK_IMPORTED_MODULE_4__ContextUtils__["b" /* ContextSubscriber */])('router')],

    contextTypes: { router: __WEBPACK_IMPORTED_MODULE_5__PropTypes__["b" /* routerShape */] },
    propTypes: { router: __WEBPACK_IMPORTED_MODULE_5__PropTypes__["b" /* routerShape */] },

    getWrappedInstance: function getWrappedInstance() {
      !withRef ? process.env.NODE_ENV !== 'production' ? __WEBPACK_IMPORTED_MODULE_0_invariant___default()(false, 'To access the wrapped instance, you need to specify ' + '`{ withRef: true }` as the second argument of the withRouter() call.') : __WEBPACK_IMPORTED_MODULE_0_invariant___default()(false) : void 0;

      return this.wrappedInstance;
    },
    render: function render() {
      var _this = this;

      var router = this.props.router || this.context.router;
      if (!router) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(WrappedComponent, this.props);
      }

      var params = router.params,
          location = router.location,
          routes = router.routes;

      var props = _extends({}, this.props, { router: router, params: params, location: location, routes: routes });

      if (withRef) {
        props.ref = function (c) {
          _this.wrappedInstance = c;
        };
      }

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(WrappedComponent, props);
    }
  });

  WithRouter.displayName = 'withRouter(' + getDisplayName(WrappedComponent) + ')';
  WithRouter.WrappedComponent = WrappedComponent;

  return __WEBPACK_IMPORTED_MODULE_3_hoist_non_react_statics___default()(WithRouter, WrappedComponent);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_create_react_class__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_create_react_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_create_react_class__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routerWarning__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Redirect__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__InternalPropTypes__ = __webpack_require__(11);







/**
 * An <IndexRedirect> is used to redirect from an indexRoute.
 */
/* eslint-disable react/require-render-return */
var IndexRedirect = __WEBPACK_IMPORTED_MODULE_0_create_react_class___default()({
  displayName: 'IndexRedirect',

  statics: {
    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
      /* istanbul ignore else: sanity check */
      if (parentRoute) {
        parentRoute.indexRoute = __WEBPACK_IMPORTED_MODULE_4__Redirect__["a" /* default */].createRouteFromReactElement(element);
      } else {
        process.env.NODE_ENV !== 'production' ? Object(__WEBPACK_IMPORTED_MODULE_2__routerWarning__["a" /* default */])(false, 'An <IndexRedirect> does not make sense at the root of your route config') : void 0;
      }
    }
  },

  propTypes: {
    to: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"].isRequired,
    query: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
    state: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
    onEnter: __WEBPACK_IMPORTED_MODULE_5__InternalPropTypes__["c" /* falsy */],
    children: __WEBPACK_IMPORTED_MODULE_5__InternalPropTypes__["c" /* falsy */]
  },

  /* istanbul ignore next: sanity check */
  render: function render() {
     true ? process.env.NODE_ENV !== 'production' ? __WEBPACK_IMPORTED_MODULE_3_invariant___default()(false, '<IndexRedirect> elements are for router configuration only and should not be rendered') : __WEBPACK_IMPORTED_MODULE_3_invariant___default()(false) : void 0;
  }
});

/* harmony default export */ __webpack_exports__["a"] = (IndexRedirect);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_create_react_class__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_create_react_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_create_react_class__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routerWarning__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RouteUtils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__InternalPropTypes__ = __webpack_require__(11);







/**
 * An <IndexRoute> is used to specify its parent's <Route indexRoute> in
 * a JSX route config.
 */
/* eslint-disable react/require-render-return */
var IndexRoute = __WEBPACK_IMPORTED_MODULE_0_create_react_class___default()({
  displayName: 'IndexRoute',

  statics: {
    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
      /* istanbul ignore else: sanity check */
      if (parentRoute) {
        parentRoute.indexRoute = Object(__WEBPACK_IMPORTED_MODULE_4__RouteUtils__["a" /* createRouteFromReactElement */])(element);
      } else {
        process.env.NODE_ENV !== 'production' ? Object(__WEBPACK_IMPORTED_MODULE_2__routerWarning__["a" /* default */])(false, 'An <IndexRoute> does not make sense at the root of your route config') : void 0;
      }
    }
  },

  propTypes: {
    path: __WEBPACK_IMPORTED_MODULE_5__InternalPropTypes__["c" /* falsy */],
    component: __WEBPACK_IMPORTED_MODULE_5__InternalPropTypes__["a" /* component */],
    components: __WEBPACK_IMPORTED_MODULE_5__InternalPropTypes__["b" /* components */],
    getComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
    getComponents: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"]
  },

  /* istanbul ignore next: sanity check */
  render: function render() {
     true ? process.env.NODE_ENV !== 'production' ? __WEBPACK_IMPORTED_MODULE_3_invariant___default()(false, '<IndexRoute> elements are for router configuration only and should not be rendered') : __WEBPACK_IMPORTED_MODULE_3_invariant___default()(false) : void 0;
  }
});

/* harmony default export */ __webpack_exports__["a"] = (IndexRoute);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_create_react_class__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_create_react_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_create_react_class__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__RouteUtils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__InternalPropTypes__ = __webpack_require__(11);






/**
 * A <Route> is used to declare which components are rendered to the
 * page when the URL matches a given pattern.
 *
 * Routes are arranged in a nested tree structure. When a new URL is
 * requested, the tree is searched depth-first to find a route whose
 * path matches the URL.  When one is found, all routes in the tree
 * that lead to it are considered "active" and their components are
 * rendered into the DOM, nested in the same order as in the tree.
 */
/* eslint-disable react/require-render-return */
var Route = __WEBPACK_IMPORTED_MODULE_0_create_react_class___default()({
  displayName: 'Route',

  statics: {
    createRouteFromReactElement: __WEBPACK_IMPORTED_MODULE_3__RouteUtils__["a" /* createRouteFromReactElement */]
  },

  propTypes: {
    path: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"],
    component: __WEBPACK_IMPORTED_MODULE_4__InternalPropTypes__["a" /* component */],
    components: __WEBPACK_IMPORTED_MODULE_4__InternalPropTypes__["b" /* components */],
    getComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
    getComponents: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"]
  },

  /* istanbul ignore next: sanity check */
  render: function render() {
     true ? process.env.NODE_ENV !== 'production' ? __WEBPACK_IMPORTED_MODULE_2_invariant___default()(false, '<Route> elements are for router configuration only and should not be rendered') : __WEBPACK_IMPORTED_MODULE_2_invariant___default()(false) : void 0;
  }
});

/* harmony default export */ __webpack_exports__["a"] = (Route);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_lib_Actions__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_lib_Actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_history_lib_Actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createMemoryHistory__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createTransitionManager__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RouteUtils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__RouterUtils__ = __webpack_require__(29);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }









/**
 * A high-level API to be used for server-side rendering.
 *
 * This function matches a location to a set of routes and calls
 * callback(error, redirectLocation, renderProps) when finished.
 *
 * Note: You probably don't want to use this in a browser unless you're using
 * server-side rendering with async routes.
 */
function match(_ref, callback) {
  var history = _ref.history,
      routes = _ref.routes,
      location = _ref.location,
      options = _objectWithoutProperties(_ref, ['history', 'routes', 'location']);

  !(history || location) ? process.env.NODE_ENV !== 'production' ? __WEBPACK_IMPORTED_MODULE_1_invariant___default()(false, 'match needs a history or a location') : __WEBPACK_IMPORTED_MODULE_1_invariant___default()(false) : void 0;

  history = history ? history : Object(__WEBPACK_IMPORTED_MODULE_2__createMemoryHistory__["a" /* default */])(options);
  var transitionManager = Object(__WEBPACK_IMPORTED_MODULE_3__createTransitionManager__["a" /* default */])(history, Object(__WEBPACK_IMPORTED_MODULE_4__RouteUtils__["b" /* createRoutes */])(routes));

  if (location) {
    // Allow match({ location: '/the/path', ... })
    location = history.createLocation(location);
  } else {
    location = history.getCurrentLocation();
  }

  transitionManager.match(location, function (error, redirectLocation, nextState) {
    var renderProps = void 0;

    if (nextState) {
      var router = Object(__WEBPACK_IMPORTED_MODULE_5__RouterUtils__["b" /* createRouterObject */])(history, transitionManager, nextState);
      renderProps = _extends({}, nextState, {
        router: router,
        matchContext: { transitionManager: transitionManager, router: router }
      });
    }

    callback(error, redirectLocation && history.createLocation(redirectLocation, __WEBPACK_IMPORTED_MODULE_0_history_lib_Actions__["REPLACE"]), renderProps);
  });
}

/* harmony default export */ __webpack_exports__["a"] = (match);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strictUriEncode = __webpack_require__(73);
var objectAssign = __webpack_require__(26);

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [
					encode(key, opts),
					'[',
					index,
					']'
				].join('') : [
					encode(key, opts),
					'[',
					encode(index, opts),
					']=',
					encode(value, opts)
				].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'[]=',
					encode(value, opts)
				].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'=',
					encode(value, opts)
				].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				} else if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if (typeof input === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

exports.extract = function (str) {
	return str.split('?')[1] || '';
};

exports.parse = function (str, opts) {
	opts = objectAssign({arrayFormat: 'none'}, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^(\?|#|&)/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeURIComponent(val);

		formatter(decodeURIComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
};

exports.stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = objectAssign(defaults, opts);

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort().map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(5);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(2);

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(10);

var _PathUtils = __webpack_require__(7);

var _createHistory = __webpack_require__(20);

var _createHistory2 = _interopRequireDefault(_createHistory);

var _Actions = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createStateStorage = function createStateStorage(entries) {
  return entries.filter(function (entry) {
    return entry.state;
  }).reduce(function (memo, entry) {
    memo[entry.key] = entry.state;
    return memo;
  }, {});
};

var createMemoryHistory = function createMemoryHistory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (Array.isArray(options)) {
    options = { entries: options };
  } else if (typeof options === 'string') {
    options = { entries: [options] };
  }

  var getCurrentLocation = function getCurrentLocation() {
    var entry = entries[current];
    var path = (0, _PathUtils.createPath)(entry);

    var key = void 0,
        state = void 0;
    if (entry.key) {
      key = entry.key;
      state = readState(key);
    }

    var init = (0, _PathUtils.parsePath)(path);

    return (0, _LocationUtils.createLocation)(_extends({}, init, { state: state }), undefined, key);
  };

  var canGo = function canGo(n) {
    var index = current + n;
    return index >= 0 && index < entries.length;
  };

  var go = function go(n) {
    if (!n) return;

    if (!canGo(n)) {
      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'Cannot go(%s) there is not enough history', n) : void 0;

      return;
    }

    current += n;
    var currentLocation = getCurrentLocation();

    // Change action to POP
    history.transitionTo(_extends({}, currentLocation, { action: _Actions.POP }));
  };

  var pushLocation = function pushLocation(location) {
    current += 1;

    if (current < entries.length) entries.splice(current);

    entries.push(location);

    saveState(location.key, location.state);
  };

  var replaceLocation = function replaceLocation(location) {
    entries[current] = location;
    saveState(location.key, location.state);
  };

  var history = (0, _createHistory2.default)(_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    pushLocation: pushLocation,
    replaceLocation: replaceLocation,
    go: go
  }));

  var _options = options,
      entries = _options.entries,
      current = _options.current;


  if (typeof entries === 'string') {
    entries = [entries];
  } else if (!Array.isArray(entries)) {
    entries = ['/'];
  }

  entries = entries.map(function (entry) {
    return (0, _LocationUtils.createLocation)(entry);
  });

  if (current == null) {
    current = entries.length - 1;
  } else {
    !(current >= 0 && current < entries.length) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Current index must be >= 0 and < %s, was %s', entries.length, current) : (0, _invariant2.default)(false) : void 0;
  }

  var storage = createStateStorage(entries);

  var saveState = function saveState(key, state) {
    return storage[key] = state;
  };

  var readState = function readState(key) {
    return storage[key];
  };

  return _extends({}, history, {
    canGo: canGo
  });
};

exports.default = createMemoryHistory;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var loopAsync = exports.loopAsync = function loopAsync(turns, work, callback) {
  var currentTurn = 0,
      isDone = false;
  var isSync = false,
      hasNext = false,
      doneArgs = void 0;

  var done = function done() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    isDone = true;

    if (isSync) {
      // Iterate instead of recursing if possible.
      doneArgs = args;
      return;
    }

    callback.apply(undefined, args);
  };

  var next = function next() {
    if (isDone) return;

    hasNext = true;

    if (isSync) return; // Iterate instead of recursing if possible.

    isSync = true;

    while (!isDone && currentTurn < turns && hasNext) {
      hasNext = false;
      work(currentTurn++, next, done);
    }

    isSync = false;

    if (isDone) {
      // This means the loop finished synchronously.
      callback.apply(undefined, doneArgs);
      return;
    }

    if (currentTurn >= turns && hasNext) {
      isDone = true;
      callback();
    }
  };

  next();
};

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RouterContext__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routerWarning__ = __webpack_require__(8);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





/* harmony default export */ __webpack_exports__["a"] = (function () {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  if (process.env.NODE_ENV !== 'production') {
    middlewares.forEach(function (middleware, index) {
      process.env.NODE_ENV !== 'production' ? Object(__WEBPACK_IMPORTED_MODULE_2__routerWarning__["a" /* default */])(middleware.renderRouterContext || middleware.renderRouteComponent, 'The middleware specified at index ' + index + ' does not appear to be ' + 'a valid React Router middleware.') : void 0;
    });
  }

  var withContext = middlewares.map(function (middleware) {
    return middleware.renderRouterContext;
  }).filter(Boolean);
  var withComponent = middlewares.map(function (middleware) {
    return middleware.renderRouteComponent;
  }).filter(Boolean);

  var makeCreateElement = function makeCreateElement() {
    var baseCreateElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0_react__["createElement"];
    return function (Component, props) {
      return withComponent.reduceRight(function (previous, renderRouteComponent) {
        return renderRouteComponent(previous, props);
      }, baseCreateElement(Component, props));
    };
  };

  return function (renderProps) {
    return withContext.reduceRight(function (previous, renderRouterContext) {
      return renderRouterContext(previous, renderProps);
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__RouterContext__["a" /* default */], _extends({}, renderProps, {
      createElement: makeCreateElement(renderProps.createElement)
    })));
  };
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_lib_createBrowserHistory__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_lib_createBrowserHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_history_lib_createBrowserHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__createRouterHistory__ = __webpack_require__(38);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__createRouterHistory__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0_history_lib_createBrowserHistory___default.a));

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _invariant = __webpack_require__(2);

var _invariant2 = _interopRequireDefault(_invariant);

var _ExecutionEnvironment = __webpack_require__(21);

var _BrowserProtocol = __webpack_require__(22);

var BrowserProtocol = _interopRequireWildcard(_BrowserProtocol);

var _RefreshProtocol = __webpack_require__(79);

var RefreshProtocol = _interopRequireWildcard(_RefreshProtocol);

var _DOMUtils = __webpack_require__(14);

var _createHistory = __webpack_require__(20);

var _createHistory2 = _interopRequireDefault(_createHistory);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates and returns a history object that uses HTML5's history API
 * (pushState, replaceState, and the popstate event) to manage history.
 * This is the recommended method of managing history in browsers because
 * it provides the cleanest URLs.
 *
 * Note: In browsers that do not support the HTML5 history API full
 * page reloads will be used to preserve clean URLs. You can force this
 * behavior using { forceRefresh: true } in options.
 */
var createBrowserHistory = function createBrowserHistory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Browser history needs a DOM') : (0, _invariant2.default)(false) : void 0;

  var useRefresh = options.forceRefresh || !(0, _DOMUtils.supportsHistory)();
  var Protocol = useRefresh ? RefreshProtocol : BrowserProtocol;

  var getUserConfirmation = Protocol.getUserConfirmation,
      getCurrentLocation = Protocol.getCurrentLocation,
      pushLocation = Protocol.pushLocation,
      replaceLocation = Protocol.replaceLocation,
      go = Protocol.go;


  var history = (0, _createHistory2.default)(_extends({
    getUserConfirmation: getUserConfirmation }, options, {
    getCurrentLocation: getCurrentLocation,
    pushLocation: pushLocation,
    replaceLocation: replaceLocation,
    go: go
  }));

  var listenerCount = 0,
      stopListener = void 0;

  var startListener = function startListener(listener, before) {
    if (++listenerCount === 1) stopListener = BrowserProtocol.startListener(history.transitionTo);

    var unlisten = before ? history.listenBefore(listener) : history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopListener();
    };
  };

  var listenBefore = function listenBefore(listener) {
    return startListener(listener, true);
  };

  var listen = function listen(listener) {
    return startListener(listener, false);
  };

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen
  });
};

exports.default = createBrowserHistory;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.replaceLocation = exports.pushLocation = exports.getCurrentLocation = exports.go = exports.getUserConfirmation = undefined;

var _BrowserProtocol = __webpack_require__(22);

Object.defineProperty(exports, 'getUserConfirmation', {
  enumerable: true,
  get: function get() {
    return _BrowserProtocol.getUserConfirmation;
  }
});
Object.defineProperty(exports, 'go', {
  enumerable: true,
  get: function get() {
    return _BrowserProtocol.go;
  }
});

var _LocationUtils = __webpack_require__(10);

var _PathUtils = __webpack_require__(7);

var getCurrentLocation = exports.getCurrentLocation = function getCurrentLocation() {
  return (0, _LocationUtils.createLocation)(window.location);
};

var pushLocation = exports.pushLocation = function pushLocation(location) {
  window.location.href = (0, _PathUtils.createPath)(location);
  return false; // Don't update location
};

var replaceLocation = exports.replaceLocation = function replaceLocation(location) {
  window.location.replace((0, _PathUtils.createPath)(location));
  return false; // Don't update location
};

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_lib_createHashHistory__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_lib_createHashHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_history_lib_createHashHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__createRouterHistory__ = __webpack_require__(38);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__createRouterHistory__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0_history_lib_createHashHistory___default.a));

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(5);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(2);

var _invariant2 = _interopRequireDefault(_invariant);

var _ExecutionEnvironment = __webpack_require__(21);

var _DOMUtils = __webpack_require__(14);

var _HashProtocol = __webpack_require__(82);

var HashProtocol = _interopRequireWildcard(_HashProtocol);

var _createHistory = __webpack_require__(20);

var _createHistory2 = _interopRequireDefault(_createHistory);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DefaultQueryKey = '_k';

var addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};

var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!' + path;
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substring(1) : path;
    }
  },
  noslash: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '/' ? path.substring(1) : path;
    },
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

var createHashHistory = function createHashHistory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Hash history needs a DOM') : (0, _invariant2.default)(false) : void 0;

  var queryKey = options.queryKey,
      hashType = options.hashType;


  process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(queryKey !== false, 'Using { queryKey: false } no longer works. Instead, just don\'t ' + 'use location state if you don\'t want a key in your URL query string') : void 0;

  if (typeof queryKey !== 'string') queryKey = DefaultQueryKey;

  if (hashType == null) hashType = 'slash';

  if (!(hashType in HashPathCoders)) {
    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'Invalid hash type: %s', hashType) : void 0;

    hashType = 'slash';
  }

  var pathCoder = HashPathCoders[hashType];

  var getUserConfirmation = HashProtocol.getUserConfirmation;


  var getCurrentLocation = function getCurrentLocation() {
    return HashProtocol.getCurrentLocation(pathCoder, queryKey);
  };

  var pushLocation = function pushLocation(location) {
    return HashProtocol.pushLocation(location, pathCoder, queryKey);
  };

  var replaceLocation = function replaceLocation(location) {
    return HashProtocol.replaceLocation(location, pathCoder, queryKey);
  };

  var history = (0, _createHistory2.default)(_extends({
    getUserConfirmation: getUserConfirmation }, options, {
    getCurrentLocation: getCurrentLocation,
    pushLocation: pushLocation,
    replaceLocation: replaceLocation,
    go: HashProtocol.go
  }));

  var listenerCount = 0,
      stopListener = void 0;

  var startListener = function startListener(listener, before) {
    if (++listenerCount === 1) stopListener = HashProtocol.startListener(history.transitionTo, pathCoder, queryKey);

    var unlisten = before ? history.listenBefore(listener) : history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopListener();
    };
  };

  var listenBefore = function listenBefore(listener) {
    return startListener(listener, true);
  };

  var listen = function listen(listener) {
    return startListener(listener, false);
  };

  var goIsSupportedWithoutReload = (0, _DOMUtils.supportsGoWithoutReloadUsingHash)();

  var go = function go(n) {
    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(goIsSupportedWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : void 0;

    history.go(n);
  };

  var createHref = function createHref(path) {
    return '#' + pathCoder.encodePath(history.createHref(path));
  };

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen,
    go: go,
    createHref: createHref
  });
};

exports.default = createHashHistory;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports.replaceLocation = exports.pushLocation = exports.startListener = exports.getCurrentLocation = exports.go = exports.getUserConfirmation = undefined;

var _BrowserProtocol = __webpack_require__(22);

Object.defineProperty(exports, 'getUserConfirmation', {
  enumerable: true,
  get: function get() {
    return _BrowserProtocol.getUserConfirmation;
  }
});
Object.defineProperty(exports, 'go', {
  enumerable: true,
  get: function get() {
    return _BrowserProtocol.go;
  }
});

var _warning = __webpack_require__(5);

var _warning2 = _interopRequireDefault(_warning);

var _LocationUtils = __webpack_require__(10);

var _DOMUtils = __webpack_require__(14);

var _DOMStateStorage = __webpack_require__(37);

var _PathUtils = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HashChangeEvent = 'hashchange';

var getHashPath = function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
};

var pushHashPath = function pushHashPath(path) {
  return window.location.hash = path;
};

var replaceHashPath = function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');

  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
};

var getCurrentLocation = exports.getCurrentLocation = function getCurrentLocation(pathCoder, queryKey) {
  var path = pathCoder.decodePath(getHashPath());
  var key = (0, _PathUtils.getQueryStringValueFromPath)(path, queryKey);

  var state = void 0;
  if (key) {
    path = (0, _PathUtils.stripQueryStringValueFromPath)(path, queryKey);
    state = (0, _DOMStateStorage.readState)(key);
  }

  var init = (0, _PathUtils.parsePath)(path);
  init.state = state;

  return (0, _LocationUtils.createLocation)(init, undefined, key);
};

var prevLocation = void 0;

var startListener = exports.startListener = function startListener(listener, pathCoder, queryKey) {
  var handleHashChange = function handleHashChange() {
    var path = getHashPath();
    var encodedPath = pathCoder.encodePath(path);

    if (path !== encodedPath) {
      // Always be sure we have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var currentLocation = getCurrentLocation(pathCoder, queryKey);

      if (prevLocation && currentLocation.key && prevLocation.key === currentLocation.key) return; // Ignore extraneous hashchange events

      prevLocation = currentLocation;

      listener(currentLocation);
    }
  };

  // Ensure the hash is encoded properly.
  var path = getHashPath();
  var encodedPath = pathCoder.encodePath(path);

  if (path !== encodedPath) replaceHashPath(encodedPath);

  (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);

  return function () {
    return (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
  };
};

var updateLocation = function updateLocation(location, pathCoder, queryKey, updateHash) {
  var state = location.state,
      key = location.key;


  var path = pathCoder.encodePath((0, _PathUtils.createPath)(location));

  if (state !== undefined) {
    path = (0, _PathUtils.addQueryStringValueToPath)(path, queryKey, key);
    (0, _DOMStateStorage.saveState)(key, state);
  }

  prevLocation = location;

  updateHash(path);
};

var pushLocation = exports.pushLocation = function pushLocation(location, pathCoder, queryKey) {
  return updateLocation(location, pathCoder, queryKey, function (path) {
    if (getHashPath() !== path) {
      pushHashPath(path);
    } else {
      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'You cannot PUSH the same path using hash history') : void 0;
    }
  });
};

var replaceLocation = exports.replaceLocation = function replaceLocation(location, pathCoder, queryKey) {
  return updateLocation(location, pathCoder, queryKey, function (path) {
    if (getHashPath() !== path) replaceHashPath(path);
  });
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(12);


/***/ })
/******/ ]);