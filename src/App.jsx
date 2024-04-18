import { Suspense, lazy } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// import { refreshUser } from 'redux/auth/operations';
// import { selectAuthentificated, selectToken } from 'redux/auth/selectors';
// import UserMenu from 'components/UserMenu/UserMenu';
// import css from 'App.module.css';

// const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const BrandPage = lazy(() => import('pages/BrandPage/BrandPage'));
const AffiliatePage = lazy(() => import('pages/AffiliatePage/AffiliatePage'));
const ManagerPage = lazy(() => import('pages/ManagerPage/ManagerPage'));
const ManagerComponent = lazy(() =>
  import('components/ManagerComponent/ManagerComponent')
);
const UsersComponent = lazy(() =>
  import('components/UsersComponent/UsersComponent')
);
const Offers = lazy(() => import('components/Offers/Offers'));
const ProfileUser = lazy(() => import('components/ProfileUser/ProfileUser'));
const Balance = lazy(() => import('components/Balance/Balance'));
const Support = lazy(() => import('components/Support/Support'));

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
      {/* <StyledHeader>
        <StyledNav> */}
      {/* <StyledNavLink to="/register">Home</StyledNavLink> */}
      {/* {authentificated ? ( */}
      {/* <div>
              <StyledNavLink to="/brand">ProfileUser Brand</StyledNavLink>
              <UserMenu />
            </div> */}
      {/* ) : ( */}
      {/* <div>
            <StyledNavLink to="/register">Register</StyledNavLink>
            <StyledNavLink to="/login">Login</StyledNavLink>
          </div> */}
      {/* )} */}
      {/* </StyledNav> */}
      {/* </StyledHeader> */}
      <main>
        <Suspense>
          <Routes>
            <Route path="/" element={<RegisterPage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/manager" element={<ManagerPage />}>
              <Route
                path="/manager/userdata"
                element={<ManagerComponent />}
              ></Route>
              <Route path="/manager/users" element={<UsersComponent />}></Route>
              <Route path="/manager/offers" element={<Offers />}></Route>
              <Route path="/manager/profile" element={<ProfileUser />}></Route>
              <Route path="/manager/balance" element={<Balance />}></Route>
              <Route path="/manager/support" element={<Support />}></Route>
            </Route>
            <Route path="/brand" element={<BrandPage />}></Route>
            <Route path="/affiliate" element={<AffiliatePage />}></Route>
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

export default App;
