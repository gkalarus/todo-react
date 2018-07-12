import React from 'react'
import Header from './Header';
import List from './List';
import RemoveButton from './RemoveButton';

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
            {props.items.length > 0 && <RemoveButton onRemoveFinished={props.onRemoveFinished} />}
        </div>
    );
}

export default ToDoList;

