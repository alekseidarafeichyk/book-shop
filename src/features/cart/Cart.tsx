import React, {useCallback} from 'react';
import {Container, Grid, Paper} from '@material-ui/core';
import {Purchase} from './purchase/Purchase';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../app/store';
import {BookType} from '../catalog/catalog-reducer';
import {calculateCost, decrQuantityAC, ExtendedBookType, incrQuantityAC} from './cart-reducer';
import {OrderForm} from '../catalog/orderForm/OrderForm';

export const Cart = React.memo(() => {
    const books = useSelector<RootState, Array<BookType & ExtendedBookType>>(state => state.cart.books)
    const dispatch = useDispatch()

    const incrQuantity = useCallback((productId: number) => {
        dispatch(incrQuantityAC({productId}))
        dispatch(calculateCost())
    }, [dispatch])

    const decrQuantity = useCallback((productId: number) => {
        dispatch(decrQuantityAC({productId}))
        dispatch(calculateCost())
    }, [dispatch])


    const products = books.map(book =>
        <Paper key={book.id} style={{marginBottom: '10px'}}>
            <Purchase
                book={book}
                incrQuantity={() => incrQuantity(book.id)}
                decrQuantity={() => decrQuantity(book.id)}
            />
        </Paper>
   )

    return (
        <Container >
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            spacing={3}
            style={{marginTop: '20px'}}
        >
            <Grid item xs={12} sm={12} md={8}>
                {products}
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
                <Paper elevation={3} style={{padding: '10px'}}>
                    <OrderForm/>
                </Paper>
            </Grid>
        </Grid>
        </Container>
    )
})