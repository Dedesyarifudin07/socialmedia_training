import logo from './logo.svg';
import './App.css';
import {  Navbar,Nav,Container} from 'react-bootstrap';
import Home from './pages/home/Home';

function App() {
  return (
    <div className='app'>
      <div className='blur' style={{top :'-18%',right:'0'}}></div>
      <div className='blur' style={{top :'36%',right:'-8rem'}}></div>
      <div className='blur'style={{top :'60%',left:'50%'}}></div>
      <div className='blur'></div>
      <Home/>
    </div>
  )
};

export default App;
