import React from 'react'

const RemoveButton = (props) => {
    return (
        <button className='removeBtn' onClick={props.onRemoveFinished}>Remove finished tasks</button>
    );
}

export default RemoveButton;