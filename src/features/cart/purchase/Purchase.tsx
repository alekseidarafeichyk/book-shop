import {Button, Grid} from '@material-ui/core';
import React from 'react';
import {BookType} from '../../catalog/catalog-reducer';
import {ExtendedBookType} from '../cart-reducer';

type PurchasePropsType = {
    book: BookType & ExtendedBookType
    incrQuantity: () => void
    decrQuantity: () => void
}

export const Purchase = React.memo((props: PurchasePropsType) => {
    return (
        <Grid container direction="row" justify="center" alignItems="center" alignContent={'center'}>
            <Grid container item xs={4} alignContent="center" justify={'center'}>
                <img
                    src={props.book.image}
                    alt=""
                    style={{maxWidth: '100px'}}
                />
            </Grid>
            <Grid container item xs={4} direction={'column'} justify={'space-evenly'}>
                <p>Title : {props.book.title}</p>
                <p>Author: {props.book.author}</p>
                <p>Price: {props.book.price} $</p>
            </Grid>
            <Grid container justify={'space-evenly'} alignItems={'center'} direction={'row'} item xs={4}>
                <Button variant="contained" color="primary" size={'small'} onClick={props.decrQuantity}>-</Button>
                <div>{props.book.count}</div>
                <Button variant="contained" color="primary" size={'small'} onClick={props.incrQuantity}>+</Button>
            </Grid>
        </Grid>
    )
})