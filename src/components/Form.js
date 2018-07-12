import React from 'react'

const Form = (props) => {
    return (
        <form onSubmit={props.onSubmitForm.bind(this, props.inputText)}>
            <input type="text" value={props.inputText} onChange={props.onInputChange} placeholder="Place your task here..."/>
            {props.empty && <p>Fill in the form</p>}
            {props.duplicated && <p>You have already added this task</p>}
            <button>Add task</button>
        </form>
    );
}

export default Form;