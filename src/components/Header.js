import React from 'react'
import Form from './Form'


const Header = (props) => {
    return (
        <div className='header'>
            <h2>React - To Do List</h2>
            <Form inputText={props.inputText}
                  onInputChange={props.onInputChange}
                  onSubmitForm={props.onSubmitForm}
                  empty={props.empty}
                  duplicated={props.duplicated}
            />
        </div>
    );
}

export default Header;