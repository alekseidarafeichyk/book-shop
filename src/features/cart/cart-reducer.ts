import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProductType} from '../catalog/catalog-reducer';

export type ExtendedProductType = {
count: number
}


export const slice = createSlice({
    name: 'catalog',
    initialState: [] as Array<ProductType & ExtendedProductType>,
    reducers: {
        addToCart(state,action : PayloadAction<ProductType>) {
            state.push({...action.payload,count:1})
        }
    }
})

export const cartReducer = slice.reducer
export const
    addToCart = slice.actions.addToCart