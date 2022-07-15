import './App.css';
import CardList from './components/cardList/CardList';
import Header from './components/header/Header';
import ModalInfoForm from './components/modalInfo/ModalInfoForm';
import { useSelector } from 'react-redux';

import EditModal from './components/editModal/EditModal';
function App() {
  const { isOpen, isEdited } = useSelector((state) => state.cards);

  return (
    <>
      <div className="cartBg">
        <Header />
        <CardList />
      </div>
      {isOpen && <ModalInfoForm />}
      {isEdited && <EditModal />}
    </>
  );
}

export default App;
