import React, {useCallback} from 'react';
import {Container, Grid, Paper} from '@material-ui/core';
import {Product} from './product/Product';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../app/store';
import {BookType} from './catalog-reducer';
import {addToCart, calculateCost} from '../cart/cart-reducer';

export const Catalog = React.memo(() => {
    const books = useSelector<RootState, Array<BookType>>(state => state.catalog.book)
    const dispatch = useDispatch()

    const addToCartHandler = useCallback((book: BookType) => {
        dispatch(addToCart(book))
        dispatch(calculateCost())
    }, [dispatch])

    const products = books.map(book => {
        return <Grid item style={{margin: '10px'}} key={book.id} md={3} >
            <Paper elevation={3} style={{padding: '10px', minHeight: '500px'}}>
                <Product
                    book={book}
                    addToCart={addToCartHandler}
                />
            </Paper>
        </Grid>
    })

    return (
        <Container >
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={3}
            >
                {products}
            </Grid>
        </Container>
    )
})