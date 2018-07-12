import React from 'react'
import ListItem from './ListItem';

const List = (props) => {

    const list = props.items.map((item, index) => {
        return (
            <ListItem done={item.done}
                      key={index}
                      name={item.name}
                      onDoneButton={props.onDoneButton}     
                      onDeleteButton={props.onDeleteButton}       
            />
        )
    })



    return (
        <ul>
            {list}
        </ul>
    );
}

export default List;