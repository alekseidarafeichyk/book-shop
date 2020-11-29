import React from 'react';
import {useFormik} from 'formik';
import TextField from '@material-ui/core/TextField/TextField';
import {Button} from '@material-ui/core';


export const OrderForm = React.memo(() => {
    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            address: '',
            phone: ''
        },
        onSubmit: values => {
        },
    });


    return <form onSubmit={formik.handleSubmit}>
        <TextField id="name"
                   type="text"
                   label="Filled"
                   variant="outlined"
                   fullWidth margin="dense"
                   {...formik.getFieldProps('name')}
        />
        <TextField id="surname"
                   label="Filled"
                   variant="outlined"
                   fullWidth
                   margin="dense"
                   {...formik.getFieldProps('surname')}
        />
        <TextField id="address"
                   label="Filled"
                   variant="outlined"
                   fullWidth
                   margin="dense"
                   {...formik.getFieldProps('address')}
        />
        <TextField id="phone"
                   label="Filled"
                   variant="outlined"
                   fullWidth
                   margin="dense"
                   {...formik.getFieldProps('phone')}
        />
        <Button variant='outlined' color="primary" type={'submit'}>ORDER</Button>
    </form>
})