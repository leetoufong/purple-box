import React from 'react';
import './Item.scss'

export default function Item(props) {
    const {products, setCart} = props;

    return (
        <>
            {products.map((product, i) => (
                <div key={i} className="item col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <li className="card" key={i}>
                        <div className="card-img">
                            <img src={product.image} />
                        </div>
                        <div className="card-body">
                            <h3 className="h5">{product.title}</h3>
                            <p className="mb-1"><sup>$</sup>{product.price}</p>
                            <p>{product.description}</p>
                            <div className="card-footer p-0 bt-0 bg-white border-top-0">
                                <button className="card-btn btn btn-primary p-0" onClick={() => {
                                    product['id'] = Date.now();
                                    setCart(cart => [...cart, product]);
                                }}><span className="sr-only">Add to cart</span><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg></button>
                            </div>
                        </div>
                    </li>
                </div>
            ))}
        </>
    )
}
