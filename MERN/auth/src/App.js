import './App.scss';
import "bootstrap/dist/js/bootstrap.bundle"
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
function App() {
  return (
    <>
    
    <Routes>
<Route exact path='/' element={<Home/>}/>
<Route exact path='/login' element={<Login/>}/>
<Route exact path='/register' element={<Register/>}/>
    </Routes>



    

    </>
  );
}

export default App;
