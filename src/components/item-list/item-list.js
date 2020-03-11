import React from 'react';
import './item-list.css';

const ItemList = props => {
    const { data, onItemSelected, children: labelRender } = props
    const items = data.map(item => {
        const { id } = item;
        const label = labelRender(item);
        return (
            <li
                className='list-group-item'
                key={id}
                onClick={() => onItemSelected(id)}
            >
                {label}
            </li>
        );
    })
    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );
}

export default ItemList;