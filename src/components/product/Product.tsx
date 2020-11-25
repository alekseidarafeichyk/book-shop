import React from 'react';
import style from './Product.module.css'
import {Button} from '@material-ui/core';

export const Product = () => {
    return (
        <div className={style.productContainer}>
            <div className={style.image}>
                <img
                    src="https://lh3.googleusercontent.com/proxy/TJ-40UpxqcSk91xiDvdFgxTQQwDfOGciEa3a1tJaF1X48fngHlBeuzH2D8U4NWBwFTLshroVJQGJx0g6YzRdL9O3T9lOVrzcRbUz37kLJNHx1vFLBD4"
                    alt=""/>
            </div>
            <div className={style.description}>23</div>
            <Button variant="contained" color="primary">add cart</Button>
        </div>
    )
}