react-input-field
=================

React Input Field

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
 * clearTool: Boolean - defaults to true. Whether to show a clear tool or not
 * label: String - a (optional) label for the field
 * labelPosition: 'String' - defaults to 'left'. Valid values: 'left', 'right'
 * inputHeight: Number/String - the height of the input field