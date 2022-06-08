import "bootstrap/dist/css/bootstrap.min.css";

// import necessary object from react-router-dom
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// import "pages" component here
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'

import Navbar from './Navbar'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      <Navbar />

      </BrowserRouter>
    </>
  );
}

export default App;