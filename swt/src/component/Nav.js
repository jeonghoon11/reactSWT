import Find from './find.png';

export default function Nav() {
    return (
        <ul className="nav">
            <li><a href="#">Contect</a></li>
            <li><a href="#">InfoShare</a></li>
            <li><a href="#">Member</a></li>
            <li><a href="#">Q&A</a></li>
            <li><a href="#">BaekJoon</a></li>
            <li>
                <div>
                    <input type="text" placeHolder="물어보세용" className="textBox"></input>
                    <img src={Find} className="find"></img>
                </div>  
            </li>
        </ul>
    )
}