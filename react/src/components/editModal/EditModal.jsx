import React from 'react';
import styles from './EditModal.module.scss';
import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
// import axios from 'axios';
// import uploadSvg from '../../images/upload.svg';
// import useClickOutside from '../../hooks/useClickOutside';
// import { toggleIsOpen, addCard } from '../../features/cardsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toggleIsEdited, addEditedCard } from '../../features/cardsSlice';

const EditModal = () => {
  const dispatch = useDispatch();
  const modalRef = useRef(null);
  const filePicker = useRef(null);
  const handlePick = () => {
    filePicker.current.click();
  };
  const { mostBeEdited, cards } = useSelector((state) => state.cards);
  const mustBeEditedCard = cards.find((card) => card.id === mostBeEdited);

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState(null);
  const [changedTitle, setChangedTitle] = useState(mustBeEditedCard.title);
  const [changedDesc, setChangedDesc] = useState(mustBeEditedCard.description);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newCart = {
      id: mustBeEditedCard.id,
      title: changedTitle,
      description: changedDesc,
      date: new Date().toLocaleDateString(),
      // image: file.name,
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
      if (changedTitle.trim().length && changedDesc.trim().length && file) {
        dispatch(addEditedCard(newCart));
        dispatch(toggleIsEdited());
      }
    } catch (err) {
      console.log('error');
    }
  };

  // useClickOutside(modalRef, () => toggleModal());
  return (
    <div ref={modalRef} className={styles.modalInfoBlock}>
      <form onSubmit={submitHandler} className={styles.modalInfo}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            className={styles.inpName}
            type="text"
            name="name"
            onChange={(e) => setChangedTitle(e.target.value)}
            value={changedTitle}
          />
        </div>
        <div>
          <label htmlFor="desc">Description</label>
          <textarea
            className={styles.desc}
            type="text"
            name="desc"
            onChange={(e) => setChangedDesc(e.target.value)}
            value={changedDesc}
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
            <div className={styles.editModal}>
              <div onClick={handlePick} className={styles.uploadedImg}>
                <img
                  src={`http://localhost:9000/api/files/${mustBeEditedCard.img}`}
                  alt=""
                />
              </div>
              <button type="submit" className={styles.saveCard}>
                SAVE
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default EditModal;
