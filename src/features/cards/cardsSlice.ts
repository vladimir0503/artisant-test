import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "redux";
import { getProducts } from './../../api/api';

type card = {
    quantity_available: number,
    initial_price: string,
    name: string,
    created_by: {
        display_name: string
    }
};

export interface CardsSlice {
    cards: Array<card>
};

const initialState: CardsSlice = {
    cards: []
};

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        loadCards(state, action) {
            state.cards = action.payload
        },
        sortByAvailable(state) {
            const sortArr = state.cards.filter(card => card.quantity_available > 0);
            state.cards = sortArr;
        }
    }
});

export const getCards = () => async (dispatch: Dispatch) => {
    const { products } = await getProducts();
    dispatch(loadCards(products));
};

export const { loadCards, sortByAvailable } = cardsSlice.actions;

export default cardsSlice.reducer;