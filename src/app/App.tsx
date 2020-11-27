import AppBar from '@material-ui/core/AppBar';
import React, {useState} from 'react';
import './App.css';
import {Button, Toolbar} from '@material-ui/core';
import {Catalog} from '../features/catalog/Catalog';
import { Cart } from '../features/cart/Cart';

function App() {
    const [showCatalog, setShowCatalog] = useState(true)

    const changeShowHandler = () => {
        setShowCatalog(!showCatalog)
    }

    const button = showCatalog ?
        <Button color="inherit" onClick={changeShowHandler}>Cart</Button>
        :
        <Button color="inherit" onClick={changeShowHandler}>Shop</Button>

    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    {button}
                    <div>Price</div>
                </Toolbar>
            </AppBar>
            {showCatalog ? <Catalog/> : <Cart/>}
        </div>
    );
}

export default App;
