import Nav from "./Nav";

export default function Header() {
    return (
        <div className="header">
            <h1 className="title">
                <a href="#">Study_Web</a>
            </h1>
            <Nav />
        </div>
    );
}