import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Reservation from "./Pages/ReservationPage" // Ensure correct import path
import UserRegistration from './Pages/Registration';
import ResetPassword from './Pages/ResetPassword';
import ForgotPassword from './Pages/EmailVerification';
import VerifyOTP from './Pages/VerifyOTP';
import PrivateRoute from './Pages/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reservation/*" element={<PrivateRoute />}>
          <Route index element={<Reservation />} /> {/* Nested route for ReservationPage */}
        </Route>
        <Route path="/registration" element={<UserRegistration />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/otp-verification" element={<VerifyOTP />} />
      </Routes>
    </Router>
  );
}

export default App;
