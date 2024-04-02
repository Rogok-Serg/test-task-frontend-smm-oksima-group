import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { selectAuthentificated, selectToken } from 'redux/auth/selectors';
import UserMenu from 'components/UserMenu/UserMenu';
import css from 'App.module.css';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const BrandPage = lazy(() => import('pages/BrandPage/BrandPage'));
const AffiliatePage = lazy(() => import('pages/AffiliatePage/AffiliatePage'));
const ManagerPage = lazy(() => import('pages/ManagerPage/ManagerPage'));

const App = () => {
  const token = useSelector(selectToken);
  const authentificated = useSelector(selectAuthentificated);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token || authentificated) return;
    dispatch(refreshUser());
  }, [token, dispatch, authentificated]);

  return (
    <>
      <header className={css.header}>
        <nav>
          <NavLink className={css.navLink} to="/">
            Home
          </NavLink>
          {authentificated ? (
            <div>
              <NavLink className={css.navLink} to="/brand">
                Profile Brand
              </NavLink>
              <UserMenu />
            </div>
          ) : (
            <div>
              <NavLink className={css.navLink} to="/register">
                Register
              </NavLink>
              <NavLink className={css.navLink} to="/login">
                Login
              </NavLink>
            </div>
          )}
        </nav>
      </header>
      <main>
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/brand" element={<BrandPage />}></Route>
            <Route path="/affiliate" element={<AffiliatePage />}></Route>
            <Route path="/manager" element={<ManagerPage />}></Route>
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

export default App;
