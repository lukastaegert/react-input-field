react-input-field
=================

React Input Field with support for clear tool.

## Example

```jsx

var Field = require('react-input-field')

var VALUE = 'initial value'

var App = React.createClass({

    // ********
    // NOTE: the first argument is the new value, NOT the event
    // ********
    handleChange: function(value){
        VALUE = value
        this.setState({})
    },

    render: function(){

        function validate(value){
            return value !== ''
        }

        return <Field onChange={this.handleChange} validate={validate} />
    }
})

React.render(<App />, document.body)
```

## NOTE

Unlike normal `<input>` fields (React.DOM.input), `react-input-field` calls the `onChange` handler with the input value being the first arg!

## Properties

 * onChange(value: String) - a function to call when the input value should be updated
 * placeholder: String - a placeholder for the input
 * readOnly: Boolean - the value for the readonly attribute for the input field
 * clearTool: Boolean - defaults to true. Whether to show a clear tool or not when field value is not empty
 * validate: Function - if given, it will be called with the value of the field. If it returns false, the field will have a css class that marks it as invalid (defaults to props.invalidClassName='z-invalid')
  * clearToolStyle: Object - a style for the clear tool
  * emptyValue: String/Function
  * isEmpty: Function
  * onValidityChange: Function(valid: boolean, value, props) - function called when the validity changes
  * toolsPosition: String - defaults to 'right'. Can also be 'left'
  * invalidStyle: Object  - style to be applied when the field is invalid
  * name: String - the value of the name attribute for the field