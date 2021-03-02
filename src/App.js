import React, { useState, useEffect } from 'react';
import Cart from './components/Cart';
import Items from './components/Items';
import './App.scss'

export default function App() {
    const invetory = [
        {title: 'Sponge Cake', image: 'http://fpoimg.com/600', description: 'Jesus came down and baked this cake for you. Garnished  with all sorts of exotic fruits and berries too!',  price: 29.99},
        {title: 'Chocolate Chip Cookies', image: 'http://fpoimg.com/600', description: 'Imagine if Cookie Dough and Chocolate Chips got together and had a few lovely babies. I\'ll wait...', price: 0.99},
        {title: 'Bubble Tea', image: 'http://fpoimg.com/600', description: 'Milky goodness that will make you slap yo\' mama! Good thing yo\' mama has already slapped yo\' bitch ass before you even thought about it.', price: 2.00},
        {title: 'Pandan Honeycomb Cake', image: 'http://fpoimg.com/600', description: 'Green. Sweet. Dreamy. Say no more my friend.', price: 14.99},
        {title: 'Homemade Sweet Soy Milk', image: 'http://fpoimg.com/600', description: 'After just one sip, you will question reality, life\'s purpose, and embark on a journey westward to find answers to questions you\'ve never thought you had. Watch out for sharks.', price: 2.75}
    ];
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await invetory;
                if (data) {
                    setProducts(data);
                    setLoading(false);
                }
            } catch(error) {
                //error
            }
        }

        fetchData();
    }, []);

    return (
        <div className="app">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <header className="app-header p-3">
                        <h1>Purple Box</h1>
                        <p>What's in the box?</p>
                    </header>
                    <main className="app-main row no-gutters" role="main">
                        <Items products={products} setCart={setCart} />
                        <Cart cart={cart} setCart={setCart} />
                    </main>
                </>
            )}
        </div>
    );
}
