import React from 'react'

const RemoveButton = (props) => {
    return (
        <button onClick={props.onRemoveFinished}>Remove finished tasks</button>
    );
}

export default RemoveButton;