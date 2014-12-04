'use strict';

var assign = require('object-assign')
var React  = require('react')

module.exports = React.createClass({

    displayName: 'ReactInputField',

    render: function() {

        var props = this.prepareProps(this.props)

        return <input {...props} />
    },

    prepareProps: function(thisProps) {

        var props = {}

        assign(props, thisProps)

        return props
    }
})