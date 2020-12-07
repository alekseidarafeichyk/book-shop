import AppBar from '@material-ui/core/AppBar';
import React, {useState} from 'react';
import './App.css';
import {Button, Toolbar} from '@material-ui/core';
import {Catalog} from '../features/catalog/Catalog';
import {Cart} from '../features/cart/Cart';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from './store';

function App() {
    const dispatch = useDispatch()

    const [showCatalog, setShowCatalog] = useState(true)
    const totalPrice = useSelector<RootState, number>(state => state.cart.totalPrice)

    const changeShowHandler = () => {
        setShowCatalog(!showCatalog)
    }

    const button = showCatalog ?
        <Button variant='outlined' color="secondary" onClick={changeShowHandler}>Cart</Button>
        :
        <Button variant='outlined' color="secondary" onClick={changeShowHandler}>Shop</Button>

    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    {button}
                    {totalPrice ? <div>{totalPrice} $</div> : null}
                </Toolbar>
            </AppBar>
            {showCatalog ? <Catalog/> : <Cart/>}
        </div>
    );
}

export default App;
