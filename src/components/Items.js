import React from 'react';
import Item from './Item';
import './Item.scss'

export default function Items(props) {
    const {products, setCart} = props;

    return (
        <div className="col col-8 p-3">
            <ul className="row no-gutters pl-0">
                <Item products={products} setCart={setCart} />
            </ul>
        </div>
    )
}
