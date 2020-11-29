import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {BookType} from '../catalog/catalog-reducer';

export type CartProductType = {
    books: Array<BookType & ExtendedBookType>
    totalPrice: number
}

export type ExtendedBookType = {
    count: number
}


export const slice = createSlice({
    name: 'cart',
    initialState: {books: [], totalPrice: 0} as CartProductType,
    reducers: {
        addToCart(state, action: PayloadAction<BookType>) {
            if (state.books.every(book => book.id !== action.payload.id)) {
                state.books.push({...action.payload, count: 1})
            }
        },
        incrQuantityAC(state, action: PayloadAction<{ productId: number }>) {
            let index = state.books.findIndex(el => el.id === action.payload.productId)
            state.books[index].count += 1
        },
        decrQuantityAC(state, action: PayloadAction<{ productId: number }>) {
            const index = state.books.findIndex(el => el.id === action.payload.productId)

            state.books[index].count -= 1

            if (state.books[index].count === 0) {
                state.books.splice(index, 1)
            }
        },
        calculateCost(state, action: PayloadAction) {
            let newTotalPrice = state.books.reduce((sum, current) => sum + current.price * current.count, 0)
            newTotalPrice = Math.floor(newTotalPrice * 100) / 100
            state.totalPrice = newTotalPrice
        }
    }
})

export const cartReducer = slice.reducer
export const {addToCart, incrQuantityAC, decrQuantityAC, calculateCost} = slice.actions