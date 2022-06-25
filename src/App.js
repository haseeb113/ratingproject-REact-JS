
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Aboutus from './Components/Aboutus';
import Contactus from './Components/Contactus';
import Dashboard from './Components/Dashboard';
import Gallery from './Components/Gallery';
import Home from './Components/Home';
import Layout from './Components/Layout';
import Login from './Components/Login';
import NotFound from './Components/NotFound';
import Register from './Components/Register';
import ReviewSection from './Components/ReviewSection';

const App = () => {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/ProductGallery" element={<Gallery/>}/>
            <Route path="/Review" element={<ReviewSection/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="about" element={<Aboutus/>}/>
            <Route path="contact" element={<Contactus/>}/>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <Home/>
    //   </header>
    // </div>
  );
}

export default App;
