'use strict';

import './index.styl'

import React from 'react'
import Field from 'react-input-field'

const customClearTool = <span style={{fontWeight: 'bold'}}>✓</span>

let VALUE = "hello React"

const App = class extends React.Component {

    render(){

    	function validate(v){
    		return !!v
    	}

        return <div>
            <h1>React Input field</h1>

            <code>npm install --save react-input-field</code>


            <h3>Field with clear Tool</h3>
            <Field defaultValue="text here" />


            <h3>Field with placeholder</h3>
            <Field placeholder="Your name" />


            <h3>Field with validation - invalid on empty</h3>
            <Field validate={validate} />


            <h3>Synced fields - controlled behaviour</h3>
            <p>
            	<Field style={{marginBottom: 10}} value={VALUE} onChange={this.onChange}/>
            	<Field value={VALUE} onChange={this.onChange}/>
            </p>


            <h3>Field without clear tool</h3>
            <Field clearTool={false} defaultValue="no clear tool"/>


            <h3>Field with custom clear tool</h3>
            <Field clearTool={customClearTool} defaultValue="custom clear tool"/>

        </div>
    }

    onChange(v) {
    	VALUE = v
    	this.setState({})
    }
}

React.render(<App />, document.getElementById('content'))