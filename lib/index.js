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