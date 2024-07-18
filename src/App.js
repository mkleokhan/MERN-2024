import logo from './logo.svg';
import {Routes, Route} from 'react-router-dom'
import Mynav from './components/Mynav'
import Homepage from './components/Homepage';
import Search from './components/Search'
import CustomerSupport from './components/CustomerSupport';
import SignUp from './components/SignUp'
import Footer from './components/Footer'
import './App.css';


function App() {
  return (
    <>
    <Mynav/>
    <Routes>
        <Route path ="/" element={<Homepage/>} />
        <Route path ="/customerSupport" element={<CustomerSupport/>} />
        <Route path ="/search" element={<Search/>} />
        <Route path ="/signUp" element={<SignUp/>} />

        
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
