import { Link } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import Contect from '../Body/Contect'
import InfoShare from '../Body/InfoShare';
import Member from '../Body/Member';
import BaekJoon from '../Body/BaekJoon';
import Nav from "./Nav";
import Home from "../Body/Home";

export default function Header() {
    return (
        <div className="header-nav">
            <div className="header">
                <h1 className="title">
                    <Link to="/Home">Study_Web</Link>
                </h1>
                <Nav />
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/Contect" element={<Contect />} />
                    <Route path="/InfoShare" element={<InfoShare />} />
                    <Route path="/Member" element={<Member />} />
                    <Route path="/BaekJoon" element={<BaekJoon />} />
                </Routes>
            </div>
        </div>
    );
}