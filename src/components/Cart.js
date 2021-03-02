import React, { useState, useEffect } from 'react';
import './Cart.scss'

export default function Cart(props) {
    const {cart, setCart} = props;
    const [subtotal, setSubtotal] = useState(0);
    const [hasItems, setHasItems] = useState(false);
    const [showingItems, setShowingItems] = useState(false);

    useEffect(() => {
        setHasItems(cart.length < 1 ? false : true);
        setSubtotal(cart.length < 1 ? 0 : cart.reduce((value, item) => value = value + item.price, 0));
    }, [cart])

    return (
        <div className="cart col col-4 p-3">
            <div className="cart-header mb-2">
                <h4 className="mb-0">
                    Shopping Cart
                    {hasItems && <button className="btn btn-link p-0" onClick={() => {
                        setShowingItems(!showingItems ? true : false)
                    }}>Show items</button>}
                </h4>
            </div>
            <div className="cart-body">
                {showingItems && (
                    <ul>
                        {cart.map((item, i) => (
                            <li className="d-flex align-items-start" key={i}>
                                <button
                                    className="btn p-0 mr-2"
                                    onClick={() => {
                                        setCart(cart.filter(cartItem => cartItem.id !== item.id))
                                    }}
                                ><span className="sr-only">Remove from cart</span><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13H5v-2h14v2z"/></svg></button>
                                <span>{item.title}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="cart-footer">
                <p><strong>Subtotal:</strong> {subtotal} {hasItems && `(${cart.length} Item${cart.length === 1 ? '' : 's'})`}</p>
                {hasItems && <button className="btn btn-success w-100">Checkout</button>}
            </div>
        </div>
    )
}
