import './App.scss';
import "bootstrap/dist/js/bootstrap.bundle"
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import {Routes,Route} from "react-router-dom"
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
function App() {
  return (
<>
 <Header/>
 <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/register' element={<Register/>}/>
<Route path='/dashboard' element={<Dashboard/>}/>




 </Routes>


<Footer/>
</>
  );
}

export default App;
