import LocalStorage from '../../services/LocalStorage';

const initialState = {
  isLoggedIn: LocalStorage.get('token') && true,
  currentPage: null
};

export default initialState;
