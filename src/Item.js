import React from 'react';

const Item = ({item, ... props}) => {
    return(
        <div className="list-item_add" onClick={props.deleteItem}>
            <p className="list-item_text" >{item.title}</p>
        </div>
    )
}

export default Item; 