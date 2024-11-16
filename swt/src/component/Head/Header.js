import { Link } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import Contect from '../Body/Contect'
import InfoShare from '../Body/InfoShare';
import Member from '../Body/Member';
import Nav from "./Nav";
import Home from "../Body/Home";
import Login from "../Body/Login";
import Tool from "../Body/Tools/Tool";

export default function Header() {
    return (
        <div className="header-nav">
            <div className="header">
                <div className="title">
                    <Link to="/Home">Study_Web</Link>
                </div>
                <Nav />
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/Contect" element={<Contect />} />
                    <Route path="/InfoShare" element={<InfoShare />} />
                    <Route path="/Member" element={<Member />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Tool" element={<Tool />} />
                </Routes>
            </div>
        </div>
    );
}