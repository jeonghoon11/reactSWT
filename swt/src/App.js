import './App.css';
import Contect from './component/Head/Contect';
import Header from './component/Head/Header';
import {  BrowserRouter, Route, Routes  } from 'react-router-dom';
import InfoShare from './component/Head/InfoShare';
import Member from './component/Head/Memeber';
import Q_A from './component/Head/Q_A';
import BaekJoon from './component/Head/BaekJoon';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
            <Route path="/Contect" element={<Contect />} />
            <Route path="/InfoShare" element={<InfoShare />} />
            <Route path="/Member " element={<Member />} />
            <Route path="/Q_A" element={<Q_A />} />
            <Route path="/BaekJoon" element={<BaekJoon />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;