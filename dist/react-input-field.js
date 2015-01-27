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
	    false: {cursor: 'text', color: 'transparent'}
	}

	var INDEX = 0

	var DESCRIPTOR = {

	    displayName: 'ReactInputField',

	    propTypes: {
	        validate : React.PropTypes.oneOfType([
	            React.PropTypes.func,
	            React.PropTypes.bool
	        ]),
	        isEmpty  : React.PropTypes.func,
	        clearTool: React.PropTypes.bool
	    },

	    getInitialState: function(){
	        return {
	            defaultValue: this.props.defaultValue
	        }
	    },

	    getDefaultProps: function () {
	        return {
	            focusOnClick: true,

	            defaultClearToolStyle: {
	                fontSize   : 20,
	                paddingRight: 5,
	                paddingLeft : 5,

	                alignSelf  : 'center',
	                cursor     : 'pointer',
	                userSelect : 'none',
	                boxSizing: 'border-box'
	            },
	            clearToolColor    : '#a8a8a8',
	            clearToolOverColor: '#7F7C7C',
	            defaultStyle: {
	                display   : 'inline-flex',
	                flexFlow  : 'row',
	                alignItems: 'stretch',
	                border    : '1px solid #a8a8a8',
	                boxSizing : 'border-box',
	                height    : 30
	            },

	            defaultInvalidStyle: {
	                border : '1px solid rgb(248, 144, 144)'
	            },

	            defaultInputStyle: {
	                flex   : 1,
	                border : 0,
	                height : '100%',
	                padding: '6px 2px',
	                outline: 'none',
	                boxSizing: 'border-box'
	            },

	            defaultInputInvalidStyle: {

	            },

	            emptyValue: '',
	            inputClassName: '',
	            inputProps    : null,

	            clearTool: true,

	            defaultClassName: 'z-field',
	            emptyClassName  : 'z-empty-value',
	            invalidClassName: 'z-invalid',

	            toolsPosition: 'right'
	        }
	    },

	    render: function() {

	        if (this.valid === undefined){
	            this.valid = true
	        }

	        var props = this.prepareProps(this.props, this.state)

	        if (this.valid !== props.valid && typeof props.onValidityChange === 'function'){
	            setTimeout(function(){
	                props.onValidityChange(props.valid, props.value, props)
	            }, 0)
	        }

	        this.valid = props.valid

	        props.children = this.renderChildren(props, this.state)

	        // delete props.value

	        var divProps = assign({}, props)
	        delete divProps.value
	        delete divProps.placeholder

	        return React.createElement("div", React.__spread({},  divProps))
	    },

	    renderChildren: function(props, state){
	        var field = this.renderField(props, state)
	        var tools = this.renderTools(props, state)

	        var children = [field, props.children]

	        if (props.toolsPosition == 'after' || props.toolsPosition == 'right'){
	            children.push.apply(children, tools)
	        } else {
	            children = (tools || []).concat(field)
	        }

	        return children
	    },

	    renderField: function(props) {
	        var inputProps = this.prepareInputProps(props)

	        inputProps.ref = 'input'

	        if (props.inputFactory){
	            return props.inputFactory(inputProps, props)
	        }

	        return React.createElement("input", React.__spread({},  inputProps))
	    },

	    renderTools: function(props, state) {

	        var clearTool = this.renderClearTool(props, state)
	        var result    = [clearTool]

	        if (typeof props.tools === 'function'){
	            result = props.tools(props, clearTool)
	        }

	        return result
	    },

	    renderClearTool: function(props, state) {

	        if (!props.clearTool || props.readOnly || props.disabled){
	            return
	        }

	        var visible         = !this.isEmpty(props)
	        var visibilityStyle = TOOL_STYLES[visible]
	        var style           = assign({}, visibilityStyle, this.prepareClearToolStyle(props, state))

	        if (!visible){
	            assign(style, visibilityStyle)
	        }

	        return React.createElement("div", {
	            className: "z-clear-tool", 
	            onClick: this.handleClearToolClick, 
	            onMouseDown: this.handleClearToolMouseDown, 
	            onMouseOver: this.handleClearToolOver, 
	            onMouseOut: this.handleClearToolOut, 
	            style: style
	        }, "✖")
	    },

	    handleClearToolMouseDown: function(event) {
	        event.preventDefault()
	    },

	    handleClearToolOver: function(){
	        this.setState({
	            clearToolOver: true
	        })
	    },

	    handleClearToolOut: function(){
	        this.setState({
	            clearToolOver: false
	        })
	    },

	    isEmpty: function(props) {
	        var emptyValue = this.getEmptyValue(props)

	        if (typeof props.isEmpty === 'function'){
	            return props.isEmpty(props, emptyValue)
	        }

	        return props.value + '' === emptyValue + ''
	    },

	    getEmptyValue: function(props){
	        var value = props.emptyValue

	        if (typeof value === 'function'){
	            value = value(props)
	        }

	        return value
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

	    focus: function(){
	        var input = this.getInput()

	        if (input && typeof input.focus === 'function'){
	            input.focus()
	        }
	    },

	    handleClick: function(event){
	        if (this.props.focusOnClick && !this.isFocused()){
	            this.focus()
	        }
	    },

	    handleMouseDown: function(event) {
	        ;(this.props.onMouseDown || emptyFn)(event)
	        // event.preventDefault()
	    },

	    handleClearToolClick: function(event) {
	        this.notify(this.getEmptyValue(this.props), event)
	    },

	    handleChange: function(event) {
	        event.stopPropagation()
	        this.notify(event.target.value, event)
	    },

	    handleSelect: function(event) {
	        event.stopPropagation()
	        ;(this.props.onSelect || emptyFn)(event)
	    },

	    notify: function(value, event) {
	        if (this.props.value === undefined){
	            this.setState({
	                defaultValue: value
	            })
	        }
	        ;(this.props.onChange || emptyFn)(value, this.props, event)
	    },

	    //*****************//
	    // PREPARE METHODS //
	    //*****************//
	    prepareProps: function(thisProps, state) {

	        var props = {}

	        assign(props, thisProps)

	        props.value = this.prepareValue(props, state)
	        props.valid = this.isValid(props)
	        props.onClick = this.handleClick
	        props.onMouseDown = this.handleMouseDown

	        props.className = this.prepareClassName(props)
	        props.style = this.prepareStyle(props)

	        return props
	    },

	    prepareValue: function(props, state) {

	        var value = props.value === undefined?
	                        state.defaultValue:
	                        props.value

	        return value
	    },

	    prepareClassName: function(props) {
	        var result = [props.className, props.defaultClassName]

	        if (this.isEmpty(props)){
	            result.push(props.emptyClassName)
	        }

	        if (!props.valid){
	            result.push(props.invalidClassName)
	        }

	        return result.join(' ')
	    },

	    prepareStyle: function(props) {
	        var style = assign({}, props.defaultStyle, props.style)

	        if (!props.valid){
	            assign(style, props.defaultInvalidStyle, props.invalidStyle)
	        }

	        return style
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
	        inputProps.onSelect    = this.handleSelect
	        inputProps.style       = this.prepareInputStyle(props)
	        inputProps.onFocus     = this.handleFocus
	        inputProps.onBlur      = this.handleBlur
	        inputProps.name        = props.name
	        inputProps.disabled    = props.disabled
	        inputProps.readOnly    = props.readOnly

	        return inputProps
	    },

	    handleFocus: function(){
	        this._focused = true
	    },

	    handleBlur: function(){
	        this._focused = false
	    },

	    isFocused: function(){
	        return !!this._focused
	    },

	    prepareInputStyle: function(props) {
	        var inputStyle = props.inputProps?
	                            props.inputProps.style:
	                            null

	        var style = assign({}, props.defaultInputStyle, props.inputStyle, inputStyle)

	        if (!props.valid){
	            assign(style, props.defaultInputInvalidStyle, props.inputInvalidStyle)
	        }

	        return style
	    },

	    prepareClearToolStyle: function(props, state) {
	        var defaultClearToolOverStyle
	        var clearToolOverStyle
	        var clearToolColor

	        if (state && state.clearToolOver){
	            defaultClearToolOverStyle = props.defaultClearToolOverStyle
	            clearToolOverStyle = props.clearToolOverStyle
	        }

	        if (props.clearToolColor){
	            clearToolColor = {
	                color: props.clearToolColor
	            }
	            if (state && state.clearToolOver && props.clearToolOverColor){
	                clearToolColor = {
	                    color: props.clearToolOverColor
	                }
	            }
	        }

	        var style = assign(
	                        {},
	                        props.defaultClearToolStyle,
	                        defaultClearToolOverStyle,
	                        clearToolColor,
	                        props.clearToolStyle,
	                        clearToolOverStyle
	                    )

	        return style
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
