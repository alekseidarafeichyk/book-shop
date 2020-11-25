import AppBar from '@material-ui/core/AppBar';
import React from 'react';
import './App.css';
import {Button, Toolbar} from '@material-ui/core';
import {Catalog} from './components/catalog/Catalog';

function App() {
    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit">Cart</Button>
                </Toolbar>
            </AppBar>
            <Catalog/>
        </div>
    );
}

export default App;
