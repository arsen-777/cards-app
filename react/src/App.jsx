import './App.css';

import CardList from './components/cardList/CardList';
import Header from './components/header/Header';
import ModalInfoForm from './components/modalInfo/ModalInfoForm';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addCard, toggleIsOpen } from './features/cardsSlice';
import img from './images/card1.png';

import uuid from 'react-uuid';
function App() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.cards);

  // const toggleModal = () => {
  //   setIsOpenModal(!isOpenModal);
  // };

  return (
    <>
      <div className="cartBg">
        <Header />
        <CardList />
      </div>
      {isOpen && <ModalInfoForm />}
    </>
  );
}

export default App;

//  const imageName = '1657827225221card1.png';
//      <img src={`http://localhost:9000/api/files/${imageName}`} alt="" />
