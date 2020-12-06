import {createSlice, PayloadAction} from '@reduxjs/toolkit';


export type ProductType = {
    book : Array<BookType>
}

export type BookType = {
    title: string,
    image: string
    id: number,
    description: string
    price: number
    author : string
    inCart: boolean
}

const slice = createSlice({
    name: 'catalog',
    initialState: {book : []} as ProductType ,
    reducers: {
        setProduct(state, action : PayloadAction<Array<BookType>>) {
           state.book = action.payload
        }
    }
})

export const catalogReducer = slice.reducer
export const {setProduct} = slice.actions

