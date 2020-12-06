import React from 'react';
import style from './Product.module.css'
import {Button, Grid} from '@material-ui/core';
import {BookType} from '../catalog-reducer';
import {useSelector} from 'react-redux';
import {RootState} from '../../../app/store';
import {ExtendedBookType} from '../../cart/cart-reducer';

export type ProductPropsType = {
    book: BookType
    addToCart: (book: BookType) => void
}

export const Product = React.memo((props: ProductPropsType) => {
    const productInCart = useSelector<RootState, Array<BookType & ExtendedBookType>>(state => state.cart.books)

    const buttonDisabled = productInCart.some(book => book.id === props.book.id)

    const addToCartHandler = () => {
        props.addToCart(props.book)
    }

    return (
        <Grid container direction="column" justify="space-between" alignItems="center" style={{minHeight: '550px'}}>
            <Grid item>
                <img src={props.book.image} alt="" className={style.image}/>
            </Grid>
            <Grid item>
                <p>{props.book.title}</p>
                <p>{props.book.description}</p>
                <p>{props.book.author}</p>
                <p>{`${props.book.price} $`}</p>
            </Grid>
            <Grid item>
                <Button variant="contained" disabled={buttonDisabled} color="primary" onClick={addToCartHandler}>add
                    cart</Button>
            </Grid>
        </Grid>
    )
})