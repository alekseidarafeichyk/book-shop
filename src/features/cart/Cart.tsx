import React from 'react';
import {Grid, Paper} from '@material-ui/core';
import {Purchase} from './purchase/Purchase';
import {useSelector} from 'react-redux';
import {AppRootStoreType} from '../../app/store';
import {ProductType} from '../catalog/catalog-reducer';
import {ExtendedProductType} from './cart-reducer';

export const Cart = () => {
    const books = useSelector<AppRootStoreType,Array< ProductType & ExtendedProductType>>(state => state.cart)
    return (
        <Grid container spacing={3} justify={'center'} style={{marginTop: '10px'}}>
            <Grid container item xs={6}>{books.map(book => <Grid item xs={6}>
                <Paper>
                    <Purchase key={book.id}
                              book={book}
                    />
                </Paper>
            </Grid>)}</Grid>
            <Grid item xs={4}>
                <Paper>xs=6</Paper>
            </Grid>
        </Grid>
    )
}