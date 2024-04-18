import { Route, Routes } from 'react-router-dom';
import routes from './utils/routes';
import Layout from './components/Layout';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path={routes.get('home').path} element={<Home />} />
          {/* <Route
            path={pages.get('about').path}
            element={<UnderConstruction />}
          />
          <Route
            path={pages.get('menu').path}
            element={<UnderConstruction />}
          />
          <Route path={pages.get('bookings').path} element={<Bookings />} />
          <Route
            path={pages.get('confirmedBooking').path}
            element={<ConfirmedBooking />}
          />
          <Route
            path={pages.get('orderOnline').path}
            element={<UnderConstruction />}
          />
          <Route
            path={pages.get('login').path}
            element={<UnderConstruction />}
          />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Layout>
    </>
  );
};

export default App;
