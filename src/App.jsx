import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const BrandPage = lazy(() => import('pages/BrandPage/BrandPage'));
const AffiliatePage = lazy(() => import('pages/AffiliatePage/AffiliatePage'));
const ManagerPage = lazy(() => import('pages/ManagerPage/ManagerPage'));

const ProfileManager = lazy(() =>
  import('components/ProfileManager/ProfileManager')
);
const ProfileBrand = lazy(() => import('components/ProfileBrand/ProfileBrand'));
const ProfileaAffiliate = lazy(() =>
  import('components/ProfileaAffiliate/ProfileaAffiliate')
);

const UsersComponent = lazy(() =>
  import('components/UsersComponent/UsersComponent')
);

const OffersManager = lazy(() =>
  import('components/OffersManager/OffersManager')
);
const OffersBrand = lazy(() => import('components/OffersBrand/OffersBrand'));
const OffersAffiliate = lazy(() =>
  import('components/OffersAffiliate/OffersAffiliate')
);

const ProfileUser = lazy(() => import('components/ProfileUser/ProfileUser'));
const Balance = lazy(() => import('components/Balance/Balance'));
const Support = lazy(() => import('components/Support/Support'));

const App = () => {
  return (
    <>
      <main>
        <Suspense>
          <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/manager" element={<ManagerPage />}>
              <Route path="/manager/user" element={<ProfileManager />}></Route>
              <Route path="/manager/users" element={<UsersComponent />}></Route>
              <Route path="/manager/offers" element={<OffersManager />}></Route>
              <Route path="/manager/profile" element={<ProfileUser />}></Route>
              <Route path="/manager/balance" element={<Balance />}></Route>
              <Route path="/manager/support" element={<Support />}></Route>
            </Route>
            <Route path="/brand" element={<BrandPage />}>
              <Route path="/brand/user" element={<ProfileBrand />}></Route>
              <Route path="/brand/offer" element={<OffersBrand />}></Route>
              <Route path="/brand/offers" element={<OffersManager />}></Route>
              <Route path="/brand/profile" element={<ProfileUser />}></Route>
              <Route path="/brand/balance" element={<Balance />}></Route>
              <Route path="/brand/support" element={<Support />}></Route>
            </Route>
            <Route path="/affiliate" element={<AffiliatePage />}>
              <Route
                path="/affiliate/user"
                element={<ProfileaAffiliate />}
              ></Route>
              <Route
                path="/affiliate/offer"
                element={<OffersAffiliate />}
              ></Route>
              <Route
                path="/affiliate/offers"
                element={<OffersManager />}
              ></Route>
              <Route
                path="/affiliate/profile"
                element={<ProfileUser />}
              ></Route>
              <Route path="/affiliate/balance" element={<Balance />}></Route>
              <Route path="/affiliate/support" element={<Support />}></Route>
            </Route>
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

export default App;
