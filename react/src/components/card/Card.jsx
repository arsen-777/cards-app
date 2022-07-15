import React from 'react';
import styles from './Card.module.scss';
import dateSvg from '../../images/date.svg';
import edit from '../../images/edit.svg';
import del from '../../images/delete.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteCart,
  editMostBeEdited,
  toggleIsEdited,
} from '../../features/cardsSlice';

export default function Card({ id, title, description, img, date }) {
  const imageName = img;

  const dispatch = useDispatch();

  const removeCart = (id) => {
    dispatch(deleteCart({ id }));
  };

  const editCartID = (id) => {
    dispatch(toggleIsEdited());
    dispatch(editMostBeEdited({ id }));
  };
  return (
    <div className={styles.relative}>
      <div onClick={() => removeCart(id)} className={styles.delete}>
        <img className={styles.img} src={del} alt="" />
      </div>
      <div className={styles.cardsContainer}>
        <div className={styles.imgBlock}>
          <img
            className={styles.img}
            src={`http://localhost:9000/api/files/${imageName}`}
            alt=""
          />
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
          <div className={styles.uploadingBlock}>
            <div className={styles.edit} onClick={() => editCartID(id)}>
              <img src={edit} alt="" className={styles.edit} />
              {/* <button className={styles.edit}>EDIT</button> */}
              <p>EDIT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
