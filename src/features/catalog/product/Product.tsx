import React from 'react';
import style from './Product.module.css'
import {Button} from '@material-ui/core';
import {ProductType} from '../catalog-reducer';

export type ProductPropsType = {
    book: ProductType
    addToCart: (book: ProductType) => void
}

export const Product = (props: ProductPropsType) => {

    return (
        <div className={style.productContainer}>
            <div className={style.image}>
                <img src={props.book.image} alt=""/>
            </div>
            <div className={style.description}>
                <p>{props.book.title}</p>
                <p>{props.book.description}</p>
                <p>{props.book.author}</p>
                <p>{`${props.book.price} $`}</p>
            </div>
            <Button variant="contained" color="primary" onClick={() => {
                props.addToCart(props.book)
            }}>add cart</Button>
        </div>
    )
}