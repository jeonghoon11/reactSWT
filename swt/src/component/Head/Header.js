import { Link } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import Contect from './Contect'
import InfoShare from './InfoShare';
import Member from './Member';
import Q_A from './Q_A';
import BaekJoon from './BaekJoon';
import Nav from "./Nav";

export default function Header() {
    return (
        <div>
            <div className="header">
            <h1 className="title">
                <Link to="/">Study_Web</Link>
            </h1>
            <Nav />
            </div>
            <div>
                <Routes>
                    <Route path="/Contect" element={<Contect />} />
                    <Route path="/InfoShare" element={<InfoShare />} />
                    <Route path="/Member " element={<Member />} />
                    <Route path="/Q_A" element={<Q_A />} />
                    <Route path="/BaekJoon" element={<BaekJoon />} />
                </Routes>
            </div>
        </div>
    );
}