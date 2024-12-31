import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './Home/Home';
import { Courses } from './courses/Courses';
import Signup from './Component/Signup';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';
import Cart from './Component/Cart';
import { Publish } from './Component/Publish';
import Publishform from './Component/Publishform';
import AdminProfile from './Component/Profile';
import Login from './Component/Login';
import { Payment } from './Component/Payment';
function App() {
  const [Auth] = useAuth(); // Get the Auth state from context

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/courses"
          element={Auth ? <Courses /> : <Navigate to="/signup" />}
        />
        <Route path="/signup" element={<Signup />} /> {/* Signup route */}
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart/>}/>
      <Route path='/publish' element={Auth? <Publish/>: <Navigate to="/signup"/>}/>
      <Route path='/publishbook' element={Auth? <Publishform />: <Navigate to="/signup"/>}/>
      <Route path='/profile' element={<AdminProfile/>}/>
      <Route path='/payment/:id' element={Auth? <Payment />: <Navigate to="/signup"/>}/>

      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
