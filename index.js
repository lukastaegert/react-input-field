/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(2);

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _reactInputField = __webpack_require__(4);

	var _reactInputField2 = _interopRequireDefault(_reactInputField);

	var customClearTool = _react2['default'].createElement(
	    'span',
	    { style: { fontWeight: 'bold' } },
	    '✓'
	);

	var VALUE = 'hello React';

	var App = _react2['default'].createClass({
	    displayName: 'App',

	    render: function render() {

	        function validate(v) {
	            return !!v;
	        }

	        return _react2['default'].createElement(
	            'div',
	            null,
	            _react2['default'].createElement(
	                'h1',
	                null,
	                'React Input field'
	            ),
	            _react2['default'].createElement(
	                'code',
	                null,
	                'npm install --save react-input-field'
	            ),
	            _react2['default'].createElement(
	                'p',
	                null,
	                'Github: ',
	                _react2['default'].createElement(
	                    'a',
	                    { href: 'https://github.com/zippyui/react-input-field' },
	                    'github.com/zippyui/react-input-field'
	                )
	            ),
	            _react2['default'].createElement(
	                'h3',
	                null,
	                'Field with clear Tool'
	            ),
	            _react2['default'].createElement(_reactInputField2['default'], { defaultValue: 'text here' }),
	            _react2['default'].createElement(
	                'h3',
	                null,
	                'Field with placeholder'
	            ),
	            _react2['default'].createElement(_reactInputField2['default'], { placeholder: 'Your name' }),
	            _react2['default'].createElement(
	                'h3',
	                null,
	                'Field with validation - invalid on empty'
	            ),
	            _react2['default'].createElement(_reactInputField2['default'], { validate: validate }),
	            _react2['default'].createElement(
	                'h3',
	                null,
	                'Synced fields - controlled behaviour'
	            ),
	            _react2['default'].createElement(
	                'p',
	                null,
	                _react2['default'].createElement(_reactInputField2['default'], { style: { marginBottom: 10 }, value: VALUE, onChange: this.onChange }),
	                _react2['default'].createElement(_reactInputField2['default'], { value: VALUE, onChange: this.onChange })
	            ),
	            _react2['default'].createElement(
	                'h3',
	                null,
	                'Field without clear tool'
	            ),
	            _react2['default'].createElement(_reactInputField2['default'], { clearTool: false, defaultValue: 'no clear tool' }),
	            _react2['default'].createElement(
	                'h3',
	                null,
	                'Field with custom clear tool'
	            ),
	            _react2['default'].createElement(_reactInputField2['default'], { clearTool: customClearTool, defaultValue: 'custom clear tool' })
	        );
	    },

	    onChange: function onChange(v) {
	        VALUE = v;
	        this.setState({});
	    }
	});

	_react2['default'].render(_react2['default'].createElement(App, null), document.getElementById('content'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function(obj, prop){
		return Object.prototype.hasOwnProperty.call(obj, prop)
	}


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./node_modules/css-loader/index.js!./node_modules/stylus-loader/index.js!./index.styl", function() {
				var newContent = require("!!./node_modules/css-loader/index.js!./node_modules/stylus-loader/index.js!./index.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	exports.i(__webpack_require__(8), "");
	exports.push([module.id, "\nbody {\n  margin: 20px;\n}\nbody .date-picker {\n  margin-top: 20px;\n}\n", ""]);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(10);
	var normalize = __webpack_require__(7);
	var assign = __webpack_require__(6);

	function emptyFn() {}

	var TOOL_STYLES = {
	    'true': { display: 'inline-block' },
	    'false': { cursor: 'text', color: 'transparent' }
	};

	var DISPLAY_NAME = 'ReactInputField';

	var PT = React.PropTypes;

	function _ref2(cls) {
	    return !!cls;
	}

	var DESCRIPTOR = {

	    displayName: DISPLAY_NAME,

	    propTypes: {
	        validate: PT.oneOfType([PT.func, PT.bool]),
	        isEmpty: PT.func,
	        clearTool: PT.node,
	        value: PT.string
	    },

	    getInitialState: function getInitialState() {
	        return {
	            defaultValue: this.props.defaultValue
	        };
	    },

	    getDefaultProps: function getDefaultProps() {
	        return {

	            //STYLE props
	            defaultClearToolStyle: {
	                fontSize: 20,
	                paddingRight: 5,
	                paddingLeft: 5,

	                alignSelf: 'center',
	                cursor: 'pointer',
	                userSelect: 'none',
	                boxSizing: 'border-box'
	            },

	            clearToolColor: '#a8a8a8',
	            clearToolOverColor: '#7F7C7C',

	            defaultStyle: {
	                border: '1px solid #a8a8a8',
	                overflow: 'hidden',
	                boxSizing: 'border-box'
	            },

	            defaultFocusedStyle: {
	                boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.45)'
	            },

	            defaultInnerStyle: {
	                userSelect: 'none',
	                width: '100%',
	                display: 'inline-flex',
	                flexFlow: 'row',
	                alignItems: 'stretch'
	            },

	            defaultInvalidStyle: {
	                border: '1px solid rgb(248, 144, 144)'
	            },

	            defaultInputStyle: {
	                flex: 1,
	                border: 0,
	                height: '100%',
	                padding: '6px 2px',
	                outline: 'none',
	                boxSizing: 'border-box'
	            },

	            defaultInputInvalidStyle: {},

	            //CLASS NAME
	            defaultClassName: 'z-field',
	            emptyClassName: 'z-empty-value',
	            invalidClassName: 'z-invalid',

	            inputClassName: '',

	            //NON-STYLE props
	            focusOnClick: true,
	            stopChangePropagation: true,
	            stopSelectPropagation: true,

	            defaultValue: '',
	            emptyValue: '',
	            inputProps: null,

	            clearTool: true,

	            toolsPosition: 'right'
	        };
	    },

	    render: function render() {

	        if (this.valid === undefined) {
	            this.valid = true;
	        }

	        var props = this.p = this.prepareProps(this.props, this.state);

	        function _ref() {
	            return props.onValidityChange(props.valid, props.value, props);
	        }

	        if (this.valid !== props.valid && typeof props.onValidityChange === 'function') {
	            setTimeout(_ref, 0);
	        }

	        this.valid = props.valid;

	        var children = this.renderChildren(props, this.state);

	        var divProps = assign({}, props);
	        delete divProps.value;
	        delete divProps.placeholder;

	        return React.createElement(
	            'div',
	            _extends({}, divProps, { 'data-display-name': DISPLAY_NAME }),
	            React.createElement(
	                'div',
	                { style: props.innerStyle },
	                children
	            )
	        );
	    },

	    renderChildren: function renderChildren(props, state) {
	        var field = this.renderField(props, state);
	        var tools = this.renderTools(props, state);

	        var children = [field, props.children];

	        if (props.toolsPosition == 'after' || props.toolsPosition == 'right') {
	            children.push.apply(children, tools);
	        } else {
	            children = (tools || []).concat(field);
	        }

	        if (typeof props.renderChildren == 'function') {
	            children = props.renderChildren(children);
	        }

	        return children;
	    },

	    renderField: function renderField(props) {
	        var inputProps = this.prepareInputProps(props);

	        inputProps.ref = 'input';

	        if (props.inputFactory) {
	            return props.inputFactory(inputProps, props);
	        }

	        return React.createElement('input', inputProps);
	    },

	    renderTools: function renderTools(props, state) {

	        var clearTool = this.renderClearTool(props, state);
	        var result = [clearTool];

	        if (typeof props.tools === 'function') {
	            result = props.tools(props, clearTool);
	        }

	        return result;
	    },

	    renderClearTool: function renderClearTool(props, state) {

	        var visible;

	        if (props.forceClearTool && !props.clearTool) {
	            return;
	        }

	        if (!props.forceClearTool) {
	            if (!props.clearTool || props.readOnly || props.disabled) {
	                return;
	            }
	        }

	        visible = props.forceClearTool ? true : !props.empty;

	        var visibilityStyle = TOOL_STYLES[visible];
	        var style = assign({}, visibilityStyle, this.prepareClearToolStyle(props, state));

	        if (!visible) {
	            assign(style, visibilityStyle);
	        }

	        var tool = props.clearTool === true ? '✖' : props.clearTool;

	        return React.createElement(
	            'div',
	            {
	                key: 'clearTool',
	                className: 'z-clear-tool',
	                onClick: this.handleClearToolClick,
	                onMouseDown: this.handleClearToolMouseDown,
	                onMouseOver: this.handleClearToolOver,
	                onMouseOut: this.handleClearToolOut,
	                style: style
	            },
	            tool
	        );
	    },

	    handleClearToolMouseDown: function handleClearToolMouseDown(event) {
	        event.preventDefault();
	    },

	    handleClearToolOver: function handleClearToolOver() {
	        this.setState({
	            clearToolOver: true
	        });
	    },

	    handleClearToolOut: function handleClearToolOut() {
	        this.setState({
	            clearToolOver: false
	        });
	    },

	    isEmpty: function isEmpty(props) {
	        var emptyValue = this.getEmptyValue(props);

	        if (typeof props.isEmpty === 'function') {
	            return props.isEmpty(props, emptyValue);
	        }

	        var value = props.value;

	        if (value == null) {
	            value = '';
	        }

	        return value === emptyValue;
	    },

	    getEmptyValue: function getEmptyValue(props) {
	        var value = props.emptyValue;

	        if (typeof value === 'function') {
	            value = value(props);
	        }

	        return value;
	    },

	    isValid: function isValid(props) {
	        var value = props.value;
	        var result = true;

	        if (typeof props.validate === 'function') {
	            result = props.validate(value, props, this) !== false;
	        }

	        return result;
	    },

	    getInput: function getInput() {
	        return this.refs.input.getDOMNode();
	    },

	    focus: function focus() {
	        var input = this.getInput();

	        if (input && typeof input.focus === 'function') {
	            input.focus();
	        }
	    },

	    handleClick: function handleClick(event) {
	        if (this.props.focusOnClick && !this.isFocused()) {
	            this.focus();
	        }

	        ;(this.props.onClick || emptyFn)(event);
	    },

	    handleMouseDown: function handleMouseDown(event) {
	        ;(this.props.onMouseDown || emptyFn)(event);
	    },

	    handleClearToolClick: function handleClearToolClick(event) {
	        var emptyValue = this.getEmptyValue(this.props);

	        this.notify(emptyValue, event);(this.props.onClearToolClick || emptyFn)(emptyValue, event);
	    },

	    handleChange: function handleChange(event) {
	        this.props.stopChangePropagation && event.stopPropagation();
	        this.notify(event.target.value, event);
	    },

	    handleSelect: function handleSelect(event) {
	        this.props.stopSelectPropagation && event.stopPropagation();(this.props.onSelect || emptyFn)(event);
	    },

	    notify: function notify(value, event) {
	        if (this.props.value === undefined) {
	            this.setState({
	                defaultValue: value
	            });
	        }
	        ;(this.props.onChange || emptyFn)(value, this.props, event);
	    },

	    //*****************//
	    // PREPARE METHODS //
	    //*****************//
	    prepareProps: function prepareProps(thisProps, state) {

	        var props = {};

	        assign(props, thisProps);

	        props.value = this.prepareValue(props, state);

	        props.focused = this.isFocused();
	        props.valid = this.isValid(props);
	        props.empty = this.isEmpty(props);

	        props.onClick = this.handleClick;
	        props.onMouseDown = this.handleMouseDown;

	        props.className = this.prepareClassName(props);
	        props.style = this.prepareStyle(props);
	        props.innerStyle = this.prepareInnerStyle(props);

	        return props;
	    },

	    getValue: function getValue() {
	        var value = this.props.value === undefined ? this.state.defaultValue : this.props.value;

	        return value;
	    },

	    prepareValue: function prepareValue(props, state) {
	        return this.getValue();
	    },

	    prepareClassName: function prepareClassName(props) {
	        var result = [props.className, props.defaultClassName];

	        if (props.empty) {
	            result.push(props.emptyClassName);
	        }

	        if (!props.valid) {
	            result.push(props.invalidClassName);
	        }

	        return result.filter(_ref2).join(' ');
	    },

	    prepareStyle: function prepareStyle(props) {
	        var style = assign({}, props.defaultStyle, props.style);

	        if (props.focused) {
	            assign(style, props.defaultFocusedStyle, props.focusedStyle);
	        }

	        if (props.empty) {
	            assign(style, props.emptyStyle);
	        }

	        if (!props.valid) {
	            assign(style, props.defaultInvalidStyle, props.invalidStyle);
	        }

	        return style;
	    },

	    prepareInnerStyle: function prepareInnerStyle(props) {
	        var style = assign({}, props.defaultInnerStyle, props.innerStyle);

	        return normalize(style);
	    },

	    prepareInputProps: function prepareInputProps(props) {

	        var inputProps = {
	            className: props.inputClassName
	        };

	        assign(inputProps, props.defaultInputProps, props.inputProps);

	        inputProps.key = 'field';
	        inputProps.value = props.value;
	        inputProps.placeholder = props.placeholder;
	        inputProps.onChange = this.handleChange;
	        inputProps.onSelect = this.handleSelect;
	        inputProps.style = this.prepareInputStyle(props);
	        inputProps.onFocus = this.handleFocus;
	        inputProps.onBlur = this.handleBlur;
	        inputProps.name = props.name;
	        inputProps.disabled = props.disabled;
	        inputProps.readOnly = props.readOnly;
	        inputProps.autoFocus = props.autoFocus;

	        return inputProps;
	    },

	    handleFocus: function handleFocus(event) {
	        this._focused = true;

	        //so as to apply focus style
	        this.setState({});
	    },

	    handleBlur: function handleBlur() {
	        this._focused = false;

	        //so as to unapply focus style
	        this.setState({});
	    },

	    isFocused: function isFocused() {
	        return !!this._focused;
	    },

	    prepareInputStyle: function prepareInputStyle(props) {
	        var inputStyle = props.inputProps ? props.inputProps.style : null;

	        var style = assign({}, props.defaultInputStyle, props.inputStyle, inputStyle);

	        if (props.empty) {
	            assign(style, props.inputEmptyStyle);
	        }

	        if (!props.valid) {
	            assign(style, props.defaultInputInvalidStyle, props.inputInvalidStyle);
	        }

	        return normalize(style);
	    },

	    prepareClearToolStyle: function prepareClearToolStyle(props, state) {
	        var defaultClearToolOverStyle;
	        var clearToolOverStyle;
	        var clearToolColor;

	        if (state && state.clearToolOver) {
	            defaultClearToolOverStyle = props.defaultClearToolOverStyle;
	            clearToolOverStyle = props.clearToolOverStyle;
	        }

	        if (props.clearToolColor) {
	            clearToolColor = {
	                color: props.clearToolColor
	            };
	            if (state && state.clearToolOver && props.clearToolOverColor) {
	                clearToolColor = {
	                    color: props.clearToolOverColor
	                };
	            }
	        }

	        var style = assign({}, props.defaultClearToolStyle, defaultClearToolOverStyle, clearToolColor, props.clearToolStyle, clearToolOverStyle);

	        return style;
	    }
	};

	var ReactClass = React.createClass(DESCRIPTOR);

	ReactClass.descriptor = DESCRIPTOR;

	exports['default'] = ReactClass;
	module.exports = exports['default'];
	//this.props.onFocus is called due to event propagation
	//this.props.onBlur is called due to event propagation

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function ToObject(val) {
		if (val == null) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	module.exports = Object.assign || function (target, source) {
		var from;
		var keys;
		var to = ToObject(target);

		for (var s = 1; s < arguments.length; s++) {
			from = arguments[s];
			keys = Object.keys(Object(from));

			for (var i = 0; i < keys.length; i++) {
				to[keys[i]] = from[keys[i]];
			}
		}

		return to;
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var hasOwn      = __webpack_require__(1)
	var getPrefixed = __webpack_require__(11)

	var map      = __webpack_require__(12)
	var plugable = __webpack_require__(13)

	function plugins(key, value){

		var result = {
			key  : key,
			value: value
		}

		;(RESULT.plugins || []).forEach(function(fn){

			var tmp = map(function(res){
				return fn(key, value, res)
			}, result)

			if (tmp){
				result = tmp
			}
		})

		return result
	}

	function normalize(key, value){

		var result = plugins(key, value)

		return map(function(result){
			return {
				key  : getPrefixed(result.key, result.value),
				value: result.value
			}
		}, result)

		return result
	}

	var RESULT = function(style){

		var k
		var item
		var result = {}

		for (k in style) if (hasOwn(style, k)){
			item = normalize(k, style[k])

			if (!item){
				continue
			}

			map(function(item){
				result[item.key] = item.value
			}, item)
		}

		return result
	}

	module.exports = plugable(RESULT)

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	exports.push([module.id, "/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS and IE text size adjust after device orientation change,\n *    without disabling user zoom.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability of focused elements when they are also in an\n * active/hover state.\n */\n\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  margin: 0; /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n  cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\n */\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  box-sizing: content-box; /* 2 */\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n  border: 0; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n", ""]);

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = React;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getStylePrefixed = __webpack_require__(14)
	var properties       = __webpack_require__(15)

	module.exports = function(key, value){

		if (!properties[key]){
			return key
		}

		return getStylePrefixed(key, value)
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function(fn, item){

		if (!item){
			return
		}

		if (Array.isArray(item)){
			return item.map(fn).filter(function(x){
				return !!x
			})
		} else {
			return fn(item)
		}
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getCssPrefixedValue = __webpack_require__(16)

	module.exports = function(target){
		target.plugins = target.plugins || [
			(function(){
				var values = {
					'flex':1,
					'inline-flex':1
				}

				return function(key, value){
					if (key === 'display' && value in values){
						return {
							key  : key,
							value: getCssPrefixedValue(key, value, true)
						}
					}
				}
			})()
		]

		target.plugin = function(fn){
			target.plugins = target.plugins || []

			target.plugins.push(fn)
		}

		return target
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var toUpperFirst = __webpack_require__(17)
	var getPrefix    = __webpack_require__(18)
	var el           = __webpack_require__(19)

	var MEMORY = {}
	var STYLE
	var ELEMENT

	var PREFIX

	module.exports = function(key, value){

	    ELEMENT = ELEMENT || el()
	    STYLE   = STYLE   || ELEMENT.style

	    var k = key// + ': ' + value

	    if (MEMORY[k]){
	        return MEMORY[k]
	    }

	    var prefix
	    var prefixed

	    if (!(key in STYLE)){//we have to prefix

	        // if (PREFIX){
	        //     prefix = PREFIX
	        // } else {
	            prefix = getPrefix('appearance')

	        //     if (prefix){
	        //         prefix = PREFIX = prefix.toLowerCase()
	        //     }
	        // }

	        if (prefix){
	            prefixed = prefix + toUpperFirst(key)

	            if (prefixed in STYLE){
	                key = prefixed
	            }
	        }
	    }

	    MEMORY[k] = key

	    return key
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	  'alignItems': 1,
	  'justifyContent': 1,
	  'flex': 1,
	  'flexFlow': 1,
	  'flexGrow': 1,
	  'flexShrink': 1,
	  'flexBasis': 1,
	  'flexDirection': 1,
	  'flexWrap': 1,
	  'alignContent': 1,
	  'alignSelf': 1,

	  'userSelect': 1,
	  'transform': 1,
	  'transition': 1,
	  'transformOrigin': 1,
	  'transformStyle': 1,
	  'transitionProperty': 1,
	  'transitionDuration': 1,
	  'transitionTimingFunction': 1,
	  'transitionDelay': 1,
	  'borderImage': 1,
	  'borderImageSlice': 1,
	  'boxShadow': 1,
	  'backgroundClip': 1,
	  'backfaceVisibility': 1,
	  'perspective': 1,
	  'perspectiveOrigin': 1,
	  'animation': 1,
	  'animationDuration': 1,
	  'animationName': 1,
	  'animationDelay': 1,
	  'animationDirection': 1,
	  'animationIterationCount': 1,
	  'animationTimingFunction': 1,
	  'animationPlayState': 1,
	  'animationFillMode': 1,
	  'appearance': 1
	}


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getPrefix     = __webpack_require__(18)
	var forcePrefixed = __webpack_require__(20)
	var el            = __webpack_require__(19)

	var MEMORY = {}
	var STYLE
	var ELEMENT

	module.exports = function(key, value, force){

	    ELEMENT = ELEMENT || el()
	    STYLE   = STYLE   ||  ELEMENT.style

	    var k = key + ': ' + value

	    if (MEMORY[k]){
	        return MEMORY[k]
	    }

	    var prefix
	    var prefixed
	    var prefixedValue

	    if (force || !(key in STYLE)){

	        prefix = getPrefix('appearance')

	        if (prefix){
	            prefixed = forcePrefixed(key, value)

	            prefixedValue = '-' + prefix.toLowerCase() + '-' + value

	            if (prefixed in STYLE){
	                ELEMENT.style[prefixed] = ''
	                ELEMENT.style[prefixed] = prefixedValue

	                if (ELEMENT.style[prefixed] !== ''){
	                    value = prefixedValue
	                }
	            }
	        }
	    }

	    MEMORY[k] = value

	    return value
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function(str){
		return str?
				str.charAt(0).toUpperCase() + str.slice(1):
				''
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var toUpperFirst = __webpack_require__(17)
	var prefixes     = ["ms", "Moz", "Webkit", "O"]

	var el = __webpack_require__(19)

	var ELEMENT
	var PREFIX

	module.exports = function(key){

		if (PREFIX !== undefined){
			return PREFIX
		}

		ELEMENT = ELEMENT || el()

		var i = 0
		var len = prefixes.length
		var tmp
		var prefix

		for (; i < len; i++){
			prefix = prefixes[i]
			tmp = prefix + toUpperFirst(key)

			if (typeof ELEMENT.style[tmp] != 'undefined'){
				return PREFIX = prefix
			}
		}

		return PREFIX
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var el

	module.exports = function(){

		if(!el && !!global.document){
		  	el = global.document.createElement('div')
		}

		if (!el){
			el = {style: {}}
		}

		return el
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var toUpperFirst = __webpack_require__(17)
	var getPrefix    = __webpack_require__(18)
	var properties   = __webpack_require__(15)

	/**
	 * Returns the given key prefixed, if the property is found in the prefixProps map.
	 *
	 * Does not test if the property supports the given value unprefixed.
	 * If you need this, use './getPrefixed' instead
	 */
	module.exports = function(key, value){

		if (!properties[key]){
			return key
		}

		var prefix = getPrefix(key)

		return prefix?
					prefix + toUpperFirst(key):
					key
	}

/***/ }
/******/ ]);