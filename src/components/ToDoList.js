import React from 'react'
import Header from './Header';
import List from './List';

const ToDoList = (props) => {
    return (
        <div>
            <Header inputText={props.inputText}
                    onInputChange={props.onInputChange}
                    onSubmitForm={props.onSubmitForm}
            />
            <List items={props.items}
                  onDeleteButton={props.onDeleteButton}
                  onDoneButton={props.onDoneButton}
            />
        </div>
    );
}

export default ToDoList;

