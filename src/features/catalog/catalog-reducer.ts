import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import firebase from '../../utils/firebase';

export type ProductType = {
    book: Array<BookType>
}

export type BookType = {
    title: string,
    image: string
    id: number,
    description: string
    price: number
    author: string
    inCart: boolean
}

export const fetchBooksTC = createAsyncThunk('catalog/fetchBooks',   async () => {
    let products : Array<any> = []

     await firebase.database().ref('book')
        .once('value',  (snapshot) => {
              products =  snapshot.val()
        })

    return products
})

const slice = createSlice({
    name: 'catalog',
    initialState: {book: []} as ProductType,
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(fetchBooksTC.fulfilled, (state, action) => {
            state.book = action.payload
        })
    }
})

export const catalogReducer = slice.reducer
export const {} = slice.actions

