import React from 'react';

const ListItem = ({itemList}) => {
    return(
        <ul>
            {itemList.map(item => {
                return(
                    <li key={item.id}>
                        <i className="fas fa-check"></i>
                        {item.item}
                    </li>
                )
            })}
        </ul>
    )
}

export default ListItem