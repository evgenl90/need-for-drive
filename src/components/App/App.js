import logo from '../../logo.svg';
import Navbar from '../Navbar/Navbar';
import Main from '../Main/Main';
import Slider from '../Slider/Slider';
import OrderPages from '../OrderPages/OrderPages';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      
      <div className="wrapper">
        <Navbar />
        <Route exact path="/need-for-drive"  render={ () => 
          <>
            <Main /> 
            <Slider />
          </>
        }/>
        <Route  path="/orderPages"  render={ () => 
          <OrderPages />
        }/>
      </div>
    </BrowserRouter> 
  );
}

export default App;
