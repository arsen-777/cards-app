import React from 'react';
import styles from './CardList.module.scss';
import { useSelector } from 'react-redux';
import Card from '../card/Card';
import AddCard from '../addCard/AddCard';

export default function CardList() {
  const { cards } = useSelector((state) => state.cards);

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
