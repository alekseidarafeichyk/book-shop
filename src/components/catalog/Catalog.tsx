import React from 'react';
import {Container, Grid, Paper} from '@material-ui/core';
import {Product} from '../product/Product';

export const Catalog = () => {
    return (
        <Container>
            <Grid container direction="row" justify="space-between" alignItems="flex-start" spacing={3}>
                <Grid item style={{margin: '10px'}}>
                    <Paper elevation={3}>
                        <Product/>
                    </Paper>
                </Grid>
                <Grid item style={{margin: '10px'}}>
                    <Paper elevation={3}>
                        <Product/>
                    </Paper>
                </Grid>
                <Grid item style={{margin: '10px'}}>
                    <Paper elevation={3}>
                        <Product/>
                    </Paper>
                </Grid>
                <Grid item style={{margin: '10px'}}>
                    <Paper elevation={3}>
                        <Product/>
                    </Paper>
                </Grid>
                <Grid item style={{margin: '10px'}}>
                    <Paper elevation={3}>
                        <Product/>
                    </Paper>
                </Grid>
                <Grid item style={{margin: '10px'}}>
                    <Paper elevation={3}>
                        <Product/>
                    </Paper>
                </Grid>
            </Grid>
        </Container>

    )
}