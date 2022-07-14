import React, { useState } from 'react';
import styles from './CardList.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../card/Card';
import AddCard from '../addCard/AddCard';
import ModalInfoForm from '../modalInfo/ModalInfoForm';

export default function CardList() {
  const { cards, isOpen } = useSelector((state) => state.cards);

  // console.log(isOpenModal, 'isOpenModal');

  return (
    <div className="cardsBlock">
      <div className={styles.cardsContainer}>
        {cards.length > 0 &&
          cards.map((card) => {
            return <Card key={card.id} {...card} />;
          })}
        <AddCard />
      </div>
    </div>
  );
}
