import {combineReducers, compose, configureStore} from '@reduxjs/toolkit';
import thunkMiddleWare from 'redux-thunk';
import {catalogReducer} from '../features/catalog/catalog-reducer';
import {cartReducer} from '../features/cart/cart-reducer';

const rootReducer = combineReducers({
    catalog : catalogReducer,
    cart : cartReducer
})

export type RootReducerType = typeof rootReducer

export const store = configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleWare)
    }
)

export type AppRootStoreType = ReturnType<typeof rootReducer>

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

























































































