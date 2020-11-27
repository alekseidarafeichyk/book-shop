import {Button, Grid} from '@material-ui/core';
import React from 'react';
import {ProductType} from '../../catalog/catalog-reducer';
import {ExtendedProductType} from '../cart-reducer';

type PurchasePropsType = {
    book : ProductType & ExtendedProductType
}

export const Purchase = (props: PurchasePropsType) => {
    return (
        <Grid container>
            <Grid container justify={'center'} item xs={4} >
                <img
                    src= {props.book.image}
                    alt=""
                    style={{maxWidth: '100px' }}
                />
            </Grid>
            <Grid container item xs={4} direction={'column'} justify={'space-evenly'}>
                <p>Title : {props.book.title}</p>
                <p>Author: {props.book.author}</p>
                <p>Price: {props.book.price} $</p>
            </Grid>
            <Grid container justify={'space-evenly'} alignItems={'center'} direction={'row'} item xs={4} >
                <Button variant="contained" color="primary" size={'small'}>-</Button>
                <div>{props.book.count}</div>
                <Button variant="contained" color="primary" size={'small'}>+</Button>
            </Grid></Grid>
    )
}