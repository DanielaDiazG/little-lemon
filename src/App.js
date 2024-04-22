import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Bookings from './pages/Bookings';
import Confirm from './pages/Confirm';
import Create from './pages/Create';

const App = () => {
  const [bookingData, setBookingData] = useState();
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="bookings"
            element={<Bookings setBookingData={setBookingData} />}
          />
          <Route path="confirm" element={<Confirm />} />
          <Route
            path="create"
            element={
              <Create
                userData={bookingData?.useData}
                setCreateData={(data) =>
                  setBookingData((prev) => ({ ...prev, useData: data }))
                }
              />
            }
          />

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
