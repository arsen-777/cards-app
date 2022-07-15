import { createSlice } from '@reduxjs/toolkit';
const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: [],
    mostBeEdited: null,

    isOpen: false,
    isEdited: false,
  },
  reducers: {
    toggleIsOpen(state, action) {
      state.isOpen = !state.isOpen;
    },
    toggleIsEdited(state, action) {
      state.isEdited = !state.isEdited;
    },
    addCard(state, action) {
      state.cards.push(action.payload);
    },
    editMostBeEdited(state, action) {
      state.mostBeEdited = action.payload.id;
    },

    deleteCart(state, action) {
      state.cards = state.cards.filter((card) => card.id !== action.payload.id);
    },
    addEditedCard(state, action) {
      let editCart = state.cards.find((cart) => cart.id === action.payload.id);
      editCart.title = action.payload.title;
      editCart.id = action.payload.id;
      editCart.img = action.payload.img;
      editCart.description = action.payload.description;
      editCart.date = action.payload.date;
    },
  },
});

export const {
  toggleIsOpen,
  addCard,
  deleteCart,
  edit,
  toggleIsEdited,
  editMostBeEdited,
  addEditedCard,
} = cardsSlice.actions;
export default cardsSlice.reducer;
