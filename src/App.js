import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './pages/Shared/Navbar';
import Home from './pages/Home/Home';
import Appoinment from './pages/Appoinment/Appoinment';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import RequireAuth from './pages/Login/RequireAuth';
import Dashboard from './pages/Dashboard/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyAppoinment from './pages/Dashboard/MyAppoinment';
import MyReview from './pages/Dashboard/MyReview';
import MyHistory from './pages/Dashboard/MyHistory';
import Users from './pages/Dashboard/Users';
import RequireAdmin from './pages/Login/RequireAdmin';
import AddDoctor from './pages/Dashboard/AddDoctor';
import ManageDoctors from './pages/Dashboard/ManageDoctors';
import Payment from './pages/Dashboard/Payment';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appoinment" element={
          <RequireAuth>
            <Appoinment />
          </RequireAuth>
        } />
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyAppoinment/>}></Route>
          <Route path="review" element={<MyReview/>}></Route>
          <Route path="history" element={<MyHistory/>}></Route>
          <Route path="payment/:id" element={<Payment/>}></Route>
          <Route path="users" element={<RequireAdmin><Users/></RequireAdmin>}></Route>
          <Route path="addDoctor" element={<RequireAdmin><AddDoctor/></RequireAdmin>}></Route>
          <Route path="manageDoctor" element={<RequireAdmin><ManageDoctors/></RequireAdmin>}></Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
