import React from 'react';
import {Grid, Paper} from '@material-ui/core';
import {Purchase} from './purchase/Purchase';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../app/store';
import {BookType} from '../catalog/catalog-reducer';
import {calculateCost, decrQuantityAC, ExtendedBookType, incrQuantityAC} from './cart-reducer';

export const Cart = React.memo(() => {
    const books = useSelector<RootState, Array<BookType & ExtendedBookType>>(state => state.cart.books)
    const dispatch = useDispatch()

    const incrQuantity = (productId: number) => {
        dispatch(incrQuantityAC({productId}))
        dispatch(calculateCost())
    }
    const decrQuantity = (productId: number) => {
        dispatch(decrQuantityAC({productId}))
        dispatch(calculateCost())
    }


    return (
        <Grid container spacing={3} justify={'center'} style={{marginTop: '20px'}}>
            <Grid container item direction={'row'} justify={'space-evenly'} xs={8}>
                {
                    books.map(book => <Grid item xs={12} style={{marginTop: '10px'}}>
                        <Paper>
                            <Purchase key={book.id}
                                      book={book}
                                      incrQuantity={() => incrQuantity(book.id)}
                                      decrQuantity={() => decrQuantity(book.id)}
                            />
                        </Paper>
                    </Grid>)
                }
            </Grid>
            <Grid item xs={4}>
                <Paper>xs=6</Paper>
            </Grid>
        </Grid>
    )
})