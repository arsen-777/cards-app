import React from 'react';
import styles from './AddCard.module.scss';
import elip from '../../images/elip.svg';
import plus from '../../images/plus.svg';
import { toggleIsOpen } from '../../features/cardsSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export default function AddCard() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(toggleIsOpen());
  };

  return (
    <>
      {' '}
      <div className={styles.addCartBlock}>
        <div className={styles.addcart} onClick={openModal}>
          <img src={plus} alt="" />
          <img className={styles.elip} src={elip} alt="" />
        </div>
      </div>
      {/* {isOpenModal && <ModalInfoForm toggleModal={toggleModal} />} */}
    </>
  );
}
