import React from 'react';
import style from './Product.module.css'
import {Button} from '@material-ui/core';
import {BookType} from '../catalog-reducer';
import {useSelector} from 'react-redux';
import {RootState} from '../../../app/store';
import {ExtendedBookType} from '../../cart/cart-reducer';

export type ProductPropsType = {
    book: BookType
    addToCart: (book: BookType) => void
}

export const Product = React.memo( (props: ProductPropsType) => {
    const productInCart = useSelector<RootState,Array<BookType & ExtendedBookType>>(state => state.cart.books)

    const buttonDisabled = productInCart.some(book => book.id === props.book.id)

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
            <Button variant="contained" disabled={buttonDisabled} color="primary" onClick={() => {
                props.addToCart(props.book)
            }}>add cart</Button>
        </div>
    )
})