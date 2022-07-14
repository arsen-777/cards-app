import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage } from '../helpers/getLocalStorage';
import img1 from '../images/card1.png';
const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: [
      {
        id: 1,
        title: 'Barev es eka',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since the 1500',
        date: '12-04-12',
        image: img1,
      },
      {
        id: 2,
        title: 'Barev es eka',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since the 1500',
        date: '12-04-12',
        image: img1,
      },
    ],

    isOpen: false,
    isEdited: false,
  },
  reducers: {
    toggleIsOpen(state, action) {
      state.isOpen = !state.isOpen;
    },
    addCard(state, action) {
      console.log(state.cards);
      console.log(action.payload, 'action payload');
      state.cards.push(action.payload);
    },
    deleteCart(state, action) {
      state.cards = state.cards.filter((card) => card.id !== action.payload.id);
    },
  },
});

export const { toggleIsOpen, addCard, deleteCart } = cardsSlice.actions;
export default cardsSlice.reducer;
