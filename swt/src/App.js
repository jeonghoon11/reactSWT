import './App.css';
import Contect from './component/Contect';
import Header from './component/Header';
import {  BrowserRouter, Route, Routes  } from 'react-router-dom';
import InfoShare from './component/InfoShare';
import Member from './component/Memeber';
import Q_A from './component/Q_A';
import BaekJoon from './component/BaekJoon';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
            <Route path="/Contect" element={<Contect />} />
            <Route path="/InfoShare" element={<InfoShare />} />
            <Route path="/Member" element={<Member />} />
            <Route path="/Q_A" element={<Q_A />} />
            <Route path="/BaekJoon" element={<BaekJoon />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;