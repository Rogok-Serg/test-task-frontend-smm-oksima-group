import { useDispatch, useSelector } from 'react-redux';
import { selectUserData } from 'redux/auth/selectors';
import { logoutUser } from 'redux/auth/operations';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const isEmail = useSelector(selectUserData);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <div className={css.userMenu}>
      <p>{isEmail.email}</p>
      <button onClick={handleLogout}>Logout</button>{' '}
    </div>
  );
};

export default UserMenu;
