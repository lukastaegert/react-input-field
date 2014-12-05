'use strict';

require('custom-event-polyfill')

var assign = require('object-assign')
var React  = require('react')

function emptyFn() {}

var DESCRIPTOR = {

    displayName: 'ReactInputField',

    propTypes: {
        validate : React.PropTypes.func,
        clearTool: React.PropTypes.bool
    },

    getDefaultProps: function () {
        return {
            defaultStyle: {
            },

            defaultInputStyle: {
                flex  : 1,
                border: 0
            },

            defaultLabelStyle: {
                padding: 5
            },

            defaultWrapperStyle: {
                flex      : 1,
                display   : 'flex',
                flexFlow  : 'row',
                alignItems: 'center',
                border    : '1px solid #a8a8a8'
            },

            labelPosition: 'left',

            defaultInputProps: {
                padding: '6px 2px',
            },

            inputHeight: 30,
            inputClassName: '',
            inputProps: null,

            clearTool: true,

            defaultClassName: 'z-field',
            emptyClassName  : 'z-empty-value',
            invalidClassName: 'z-invalid'
        }
    },

    render: function() {

        var props = this.prepareProps(this.props)

        return (
            <div {...props}>
                {this.renderChildren(props)}
            </div>
        )
    },

    renderChildren: function(props) {

        var children = []
        var label    = this.renderLabel(props)
        var field    = this.renderField(props)

        if (props.labelPosition === 'left'){
            children.push(label, field)
        } else {
            children.push(field, label)
        }

        return children
    },

    renderField: function(props) {
        var inputProps = this.prepareInputProps(props)

        if (props.fieldFactory){
            return props.fieldFactory(inputProps, props)
        }

        return (
            <div {...this.prepareWrapperProps(props)}>
                <input ref="input" {...inputProps} />
                {this.renderClearTool(props)}
            </div>
        )
    },

    renderClearTool: function(props) {

        if (!props.clearTool){
            return
        }

        var clearVisible = !this.isEmpty(props)

        return <div
            onClick={this.handleClearToolClick}
            className='z-clear-tool'
            style={{display: clearVisible? 'inline-block': 'none'}}
        >✖</div>
    },

    renderLabel: function(props) {
        if (this.hasLabel(props)){

            var labelProps = this.prepareLabelProps(props)

            if (props.labelFactory){
                return props.labelFactory(labelProps, props)
            }

            return <label {...labelProps} />
        }
    },

    hasLabel: function(props) {
        return !!props.label || props.labelFactory
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

    handleClearToolClick: function(event) {
        this.notify('')
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

    prepareLabelProps: function(props) {

        var labelProps = {
            className: props.labelClassName
        }

        assign(labelProps, props.defaultLabelProps, props.labelProps)

        labelProps.style = this.prepareLabelStyle(props)
        labelProps.children = props.label
        labelProps.key = 'label'

        return labelProps
    },

    prepareInputProps: function(props) {

        var inputProps = {
            className  : props.inputClassName,
            placeholder: props.placeholder
        }

        assign(inputProps, props.defaultInputProps, props.inputProps)

        inputProps.style    = this.prepareInputStyle(props)
        inputProps.key      = 'field'
        inputProps.value    = props.value
        inputProps.onChange = this.handleChange

        return inputProps
    },

    prepareLabelStyle: function(props) {
        return assign({}, props.defaultLabelStyle, props.labelStyle)
    },

    prepareInputStyle: function(props) {
        return assign({
            height: props.inputHeight
        }, props.defaultInputStyle, props.inputStyle)
    },

    prepareWrapperProps: function(props) {
        var wrapperProps = {}

        assign(wrapperProps, {
            className: 'z-input-wrap'
        })

        wrapperProps.style = this.prepareWrapperStyle(props)
        wrapperProps.key   = 'wrapper'

        return wrapperProps
    },

    prepareWrapperStyle: function(props) {
        var style = {}

        assign(style, props.defaultWrapperStyle, props.wrapperStyle)

        return style
    }
}

var ReactClass = React.createClass(DESCRIPTOR)

ReactClass.descriptor = DESCRIPTOR

module.exports = ReactClass