import './App.css';
import Header from './component/Head/Header';
import {  BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className='main-body'>
      <BrowserRouter>
      <div>
        <Header />
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;