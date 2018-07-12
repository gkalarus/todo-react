import React from 'react'
import Header from './Header';
import List from './List';
import RemoveButton from './RemoveButton';

const ToDoList = (props) => {
    return (
        <div id='todo'>
            <Header inputText={props.inputText}
                    onInputChange={props.onInputChange}
                    onSubmitForm={props.onSubmitForm}
                    empty={props.empty}
                    duplicated={props.duplicated}
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

