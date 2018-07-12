import React from 'react'

const ListItem = (props) => {
    return (
        <li>
            <p className={props.done ? 'checked' : 'unchecked'}>{props.name}</p>
            <button onClick={props.onDoneButton.bind(this, props.name)}>&#10004;</button>
            <button onClick={props.onDeleteButton.bind(this, props.name)}>&#10060;</button>
        </li>
    );
}

export default ListItem;