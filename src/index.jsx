'use strict';

var assign = require('object-assign')
var React  = require('react')

function emptyFn() {}

var TOOL_STYLES = {
    true : {display: 'inline-block'},
    false: {display: 'none'}
}

var DESCRIPTOR = {

    displayName: 'ReactInputField',

    propTypes: {
        validate : React.PropTypes.func,
        isEmpty  : React.PropTypes.func,
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
                userSelect : 'none',
                boxSizing: 'border-box'
            },
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

        var props = this.prepareProps(this.props)

        var field = this.renderField(props)
        var tools = this.renderTools(props)
        var children = [field]

        if (props.toolsPosition == 'after' || props.toolsPosition == 'right'){
            children.push.apply(children, tools)
        } else {
            children = (tools || []).concat(field)
        }

        props.children = children

        return <div {...props} />
    },

    renderField: function(props) {
        var inputProps = this.prepareInputProps(props)

        if (props.inputFactory){
            return props.inputFactory(inputProps, props)
        }

        return <input ref="input" {...inputProps} />
    },

    renderTools: function(props) {

        var clearTool = this.renderClearTool(props)
        var result    = [clearTool]

        if (typeof props.tools === 'function'){
            result = props.tools(props, clearTool)
        }

        return result
    },

    renderClearTool: function(props) {

        if (!props.clearTool){
            return
        }

        var visible = !this.isEmpty(props)
        var style   = assign(this.prepareClearToolStyle(props), TOOL_STYLES[visible])

        return <div
            className='z-clear-tool'
            onClick={this.handleClearToolClick}
            style={style}
        >✖</div>
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

    handleClearToolClick: function(event) {
        this.notify(this.getEmptyValue(this.props), event)

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

        props.valid = this.isValid(props)

        props.className = this.prepareClassName(props)
        props.style = this.prepareStyle(props)

        return props
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
        inputProps.style       = this.prepareInputStyle(props)
        inputProps.onFocus     = this.handleFocus
        inputProps.onBlur      = this.handleBlur

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
        var style = assign({}, props.defaultInputStyle, props.inputStyle)

        if (!props.valid){
            assign(style, props.defaultInputInvalidStyle, props.defaultInputInvalidStyle)
        }

        return style
    },

    prepareClearToolStyle: function(props) {
        return assign({}, props.defaultClearToolStyle, props.clearToolStyle)
    }
}

var ReactClass = React.createClass(DESCRIPTOR)

ReactClass.descriptor = DESCRIPTOR

module.exports = ReactClass