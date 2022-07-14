import React from 'react';
import styles from './Card.module.scss';
import dateSvg from '../../images/date.svg';
import edit from '../../images/edit.svg';
import del from '../../images/delete.svg';
import { useDispatch } from 'react-redux';
import { deleteCart } from '../../features/cardsSlice';

export default function Card({ id, title, description, image, date }) {
  const dispatch = useDispatch();
  const removeCart = (id) => {
    dispatch(deleteCart({ id }));
  };
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.imgBlock}>
        <img className={styles.img} src={image} alt="" />
      </div>
      <div onClick={() => removeCart(id)} className={styles.delete}>
        <img className={styles.img} src={del} alt="" />
      </div>
      <div className={styles.infoBlock}>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className={styles.dateBlock}>
          <img src={dateSvg} alt="" />
          <span>{date}</span>
        </div>
        <div className={styles.edit}>
          <img src={edit} alt="" className={styles.edit} />
          {/* <button className={styles.edit}>EDIT</button> */}
          <p>EDIT</p>
        </div>
      </div>
    </div>
  );
}
