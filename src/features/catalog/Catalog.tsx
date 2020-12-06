import React, {useCallback} from 'react';
import {Container, Grid, Paper} from '@material-ui/core';
import {Product} from './product/Product';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../app/store';
import {BookType} from './catalog-reducer';
import {addToCart, calculateCost} from '../cart/cart-reducer';

export const   Catalog = React.memo(() => {
    const books = useSelector<RootState, Array<BookType>>(state => state.catalog.book)
    const dispatch = useDispatch()

    const addToCartHandler = useCallback ((book: BookType) => {
        dispatch(addToCart(book))
        dispatch(calculateCost())
    },[dispatch])

    return (
        <Container>
            <Grid container direction="row" justify="space-between" alignItems="flex-start" spacing={3}>
                {books.map(book => (<Grid item style={{margin: '10px'}} key={book.id}>
                        <Paper elevation={3}>
                            <Product
                                book={book}
                                addToCart={addToCartHandler}
                            />
                        </Paper>
                    </Grid>)
                )}
            </Grid>
        </Container>
    )
})