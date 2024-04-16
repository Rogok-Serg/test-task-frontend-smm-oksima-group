import { StyledHeader, StyledNav, StyledNavLink } from 'App.styled';
import { Suspense, lazy } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// import { refreshUser } from 'redux/auth/operations';
// import { selectAuthentificated, selectToken } from 'redux/auth/selectors';
// import UserMenu from 'components/UserMenu/UserMenu';
// import css from 'App.module.css';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const BrandPage = lazy(() => import('pages/BrandPage/BrandPage'));
const AffiliatePage = lazy(() => import('pages/AffiliatePage/AffiliatePage'));
const ManagerPage = lazy(() => import('pages/ManagerPage/ManagerPage'));

const App = () => {
  // const token = useSelector(selectToken);
  // const authentificated = useSelector(selectAuthentificated);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (!token || authentificated) return;
  //   dispatch(refreshUser());
  // }, [token, dispatch, authentificated]);

  return (
    <>
      <StyledHeader>
        <StyledNav>
          <StyledNavLink to="/">Home</StyledNavLink>
          {/* {authentificated ? ( */}
          {/* <div>
              <StyledNavLink to="/brand">Profile Brand</StyledNavLink>
              <UserMenu />
            </div> */}
          {/* ) : ( */}
          <div>
            <StyledNavLink to="/register">Register</StyledNavLink>
            <StyledNavLink to="/login">Login</StyledNavLink>
          </div>
          {/* )} */}
        </StyledNav>
      </StyledHeader>
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
