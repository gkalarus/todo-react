import React from 'react'
import Form from './Form'


const Header = (props) => {
    return (
        <div>
            <h2>Lista rzeczy do zrobienia</h2>
            <Form inputText={props.inputText}
                  onInputChange={props.onInputChange}
                  onSubmitForm={props.onSubmitForm}
            />
        </div>
    );
}

export default Header;