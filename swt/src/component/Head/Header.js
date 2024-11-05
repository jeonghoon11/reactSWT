import { Link } from "react-router-dom";
import Nav from "./Nav";

export default function Header() {
    return (
        <div className="header">
            <h1 className="title">
                <Link to="/">Study_Web</Link>
            </h1>
            <Nav />
        </div>
    );
}