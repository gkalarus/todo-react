import React from 'react'

const Form = (props) => {
    return (
        <form onSubmit={props.onSubmitForm.bind(this, props.inputText)}>
            <input type="text" value={props.inputText} onChange={props.onInputChange} />
            <button>Dodaj</button>
        </form>
    );
}

export default Form;