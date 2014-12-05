(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["ReactInputField"] = factory(require("React"));
	else
		root["ReactInputField"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */'use strict';

	var assign = __webpack_require__(2)
	var React  = __webpack_require__(1)

	function emptyFn() {}

	var TOOL_STYLES = {
	    true : {display: 'inline-block'},
	    false: {display: 'none'}
	}

	var DESCRIPTOR = {

	    displayName: 'ReactInputField',

	    propTypes: {
	        validate : React.PropTypes.func,
	        clearTool: React.PropTypes.bool
	    },

	    getDefaultProps: function () {
	        return {
	            defaultClearToolStyle: {
	                fontSize   : 20,
	                marginRight: 5,
	                marginLeft : 5,
	                color      : '#a8a8a8',
	                alignSelf  : 'center',
	                cursor     : 'pointer',
	                userSelect : 'none'
	            },
	            defaultStyle: {
	                flex      : 1,
	                display   : 'inline-flex',
	                flexFlow  : 'row',
	                alignItems: 'stretch',
	                border    : '1px solid #a8a8a8',
	                height: 30
	            },

	            defaultInputStyle: {
	                flex   : 1,
	                border : 0,
	                padding: '6px 2px',
	                outline: 'none'
	            },

	            inputClassName: '',
	            inputProps    : null,

	            clearTool: true,

	            defaultClassName: 'z-field',
	            emptyClassName  : 'z-empty-value',
	            invalidClassName: 'z-invalid'
	        }
	    },

	    render: function() {

	        var props = this.prepareProps(this.props)

	        return (
	            React.createElement("div", React.__spread({},  props), 
	                this.renderField(props), 
	                this.renderClearTool(props)
	            )
	        )
	    },

	    renderField: function(props) {
	        var inputProps = this.prepareInputProps(props)

	        if (props.inputFactory){
	            return props.inputFactory(inputProps, props)
	        }

	        return React.createElement("input", React.__spread({ref: "input"},  inputProps))
	    },

	    renderClearTool: function(props) {

	        if (!props.clearTool){
	            return
	        }

	        var visible = !this.isEmpty(props)
	        var style   = assign(this.prepareClearToolStyle(props), TOOL_STYLES[visible])

	        return React.createElement("div", {
	            className: "z-clear-tool", 
	            onClick: this.handleClearToolClick, 
	            style: style
	        }, "✖")
	    },


	    isEmpty: function(props) {
	        return !(props.value + '')
	    },

	    isValid: function(props) {
	        var value = props.value
	        var result = true

	        if (typeof props.validate === 'function'){
	            result = props.validate(value, props) !== false
	        }

	        return result
	    },

	    getInput: function() {
	        return this.refs.input.getDOMNode()
	    },

	    handleClearToolClick: function(event) {
	        this.notify('', event)

	        var input = this.getInput()

	        if (input && typeof input.focus === 'function'){
	            input.focus()
	        }
	    },

	    handleChange: function(event) {
	        event.stopPropagation()
	        this.notify(event.target.value)
	    },

	    notify: function(value, event) {
	        ;(this.props.onChange || emptyFn)(value, this, event)
	    },

	    //*****************//
	    // PREPARE METHODS //
	    //*****************//
	    prepareProps: function(thisProps) {

	        var props = {}

	        assign(props, thisProps)

	        props.className = this.prepareClassName(props)
	        props.style = this.prepareStyle(props)

	        return props
	    },

	    prepareClassName: function(props) {
	        var result = [props.className, props.defaultClassName]

	        if (this.isEmpty(props)){
	            result.push(props.emptyClassName)
	        }

	        if (!this.isValid(props)){
	            result.push(props.invalidClassName)
	        }

	        return result.join(' ')
	    },

	    prepareStyle: function(props) {
	        return assign({}, props.defaultStyle, props.style)
	    },

	    prepareInputProps: function(props) {

	        var inputProps = {
	            className: props.inputClassName
	        }

	        assign(inputProps, props.defaultInputProps, props.inputProps)

	        inputProps.key         = 'field'
	        inputProps.value       = props.value
	        inputProps.placeholder = props.placeholder
	        inputProps.onChange    = this.handleChange
	        inputProps.style       = this.prepareInputStyle(props)

	        return inputProps
	    },


	    prepareInputStyle: function(props) {
	        return assign({}, props.defaultInputStyle, props.inputStyle)
	    },

	    prepareClearToolStyle: function(props) {
	        return assign({}, props.defaultClearToolStyle, props.clearToolStyle)
	    }
	}

	var ReactClass = React.createClass(DESCRIPTOR)

	ReactClass.descriptor = DESCRIPTOR

	module.exports = ReactClass

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
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


/***/ }
/******/ ])
});
