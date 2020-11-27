import React from 'react';
import {Container, Grid, Paper} from '@material-ui/core';
import {Product} from './product/Product';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStoreType} from '../../app/store';
import {ProductType} from './catalog-reducer';
import {addToCart} from '../cart/cart-reducer';

export const Catalog = () => {
    const books = useSelector<AppRootStoreType, Array<ProductType>>(state => state.catalog)
    const dispatch = useDispatch()

    const addToCartHandler = (book: ProductType) => {
        dispatch(addToCart(book))
    }


    return (
        <Container>
            <Grid container direction="row" justify="space-between" alignItems="flex-start" spacing={3}>
                {books.map(book => (<Grid item style={{margin: '10px'}}>
                        <Paper elevation={3}>
                            <Product
                                     key={book.id}
                                     book={book}
                                     addToCart={addToCartHandler}
                            />
                        </Paper>
                    </Grid>)
                )}
            </Grid>
        </Container>
    )
}