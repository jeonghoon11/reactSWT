import Nav from "./Nav";

export default function Header() {
    return (
        <div className="header">
            <h1 className="title">
                <a href="#">박연희 공부해라</a>
            </h1>
            <Nav />
        </div>
    );
}