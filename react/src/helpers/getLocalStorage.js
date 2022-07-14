export const getLocalStorage = () => {
  let newCards = localStorage.getItem('cards');

  if (newCards) {
    return JSON.parse(localStorage.getItem('cards'));
  } else {
    return [];
  }
};
