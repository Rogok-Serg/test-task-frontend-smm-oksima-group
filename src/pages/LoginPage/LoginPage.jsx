import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { loginUser } from '../../redux/auth/operations';
import { selectAuthentificated } from '../../redux/auth/selectors';
import css from '../RegisterPage/RegisterPage.module.css';

const LoginPage = () => {
  const authentificated = useSelector(selectAuthentificated);

  const dispatch = useDispatch();

  const handleSubmitLogin = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.userEmail.value;
    console.log('email: ', email);
    const password = form.userPassword.value;
    console.log('password: ', password);

    dispatch(
      loginUser({
        email,
        password,
      })
    );
    form.reset();
  };

  if (authentificated) return <Navigate to="/brand" />;

  return (
    <div className={css.wrapperForm}>
      <h2>Login</h2>
      <form className={css.form} onSubmit={handleSubmitLogin}>
        <span>Email</span>
        <label>
          <input type="email" name="userEmail" />
        </label>
        <span>Password</span>
        <label>
          <input type="password" name="userPassword" />
        </label>
        <button className={css.button} type="submit">
          Sing in
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
