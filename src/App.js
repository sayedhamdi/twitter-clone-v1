import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {
  return (
    <BrowserRouter>
     <Routes>
     <Route  path="/" element={<Home />} />
     <Route  path="/profile" element={<Profile />} />
     <Route  path="/signup" element={<SignUp />} />
     <Route  path="/signin" element={<SignIn />} />
     </Routes>
     </BrowserRouter>
  );
}

export default App;
