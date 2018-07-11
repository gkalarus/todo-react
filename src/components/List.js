import React from 'react'

const List = (props) => {
    const list = props.items.map((item, index) => {
        return (
            <li className={item.done ? 'checked' : 'unchecked'} key={index}>
                {item.name}
                <button onClick={props.onDoneButton.bind(this, item.name)}>&#10004;</button>
                <button onClick={props.onDeleteButton.bind(this, item.name)}>&#10060;</button>
            </li>
        )
    })

    return (
        <ul>
            {list}
        </ul>
    );
}

export default List;