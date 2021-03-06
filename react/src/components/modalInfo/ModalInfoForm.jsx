import React from 'react';
import styles from './ModalInfo.module.scss';
import { useRef, useState } from 'react';
import axios from 'axios';
import uploadSvg from '../../images/upload.svg';
import { toggleIsOpen, addCard } from '../../features/cardsSlice';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';

const ModalInfoForm = ({ id }) => {
  const dispatch = useDispatch();
  const modalRef = useRef(null);
  const filePicker = useRef(null);
  const handlePick = () => {
    filePicker.current.click();
  };

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newCart = {
      id: uuid(),
      title: title,
      description: desc,
      date: new Date().toLocaleDateString(),
    };
    if (file) {
      const data = new FormData();
      data.append('file', file);
      try {
        const res = await axios.post('http://localhost:9000/api/upload', data);
        const fileName = await res.data.fileName;
        newCart.img = fileName;
      } catch (err) {
        console.log(err);
      }
    }

    try {
      if (title.trim().length && desc.trim().length && file) {
        dispatch(addCard(newCart));
        dispatch(toggleIsOpen());
      }
    } catch (err) {
      console.log('error');
    }
  };

  // useClickOutside(modalRef, () => toggleModal());
  return (
    <div ref={modalRef} className={styles.modalInfoBlock}>
      <form className={styles.modalInfo} onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            className={styles.inpName}
            type="text"
            name="name"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div>
          <label htmlFor="desc">Description</label>
          <textarea
            className={styles.desc}
            type="text"
            name="desc"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          />
        </div>
        {title.length && desc.length && file ? (
          <button type="submit" className={styles.saveCard}>
            SAVE
          </button>
        ) : (
          <div className={styles.uploadingBlock}>
            <input
              onChange={(e) => setFile(e.target.files[0])}
              ref={filePicker}
              className={styles.hidden}
              type="file"
              accept="image/*"
            />
            <div>
              <div onClick={handlePick} className={styles.uploadImg}>
                <img src={uploadSvg} alt="" />
                <p>Upload Image</p>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default ModalInfoForm;
