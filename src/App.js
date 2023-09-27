import Login from "./Pages/Login";
import Reservation from "./Pages/ReservationPage"
import UserRegistration from "./Pages/Registration"
import ResetPassword from "./Pages/ResetPassword";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/reservation' element={<Reservation />} />
          <Route path='/registration' element={<UserRegistration />} />
          <Route path='/forgot-password' element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
