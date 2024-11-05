import { Link } from 'react-router-dom';
import Find from './find.png';

export default function Nav() {
    return (
        <ul className="nav">
            <li><Link to="/Contect">Contect</Link></li>
            <li><Link to="/InfoShare">InfoShare</Link></li>
            <li><Link to="/Member">Member</Link></li>
            <li><Link to="/Q_A">Q&A</Link></li>
            <li><Link to="/BaekJoon">BaekJoon</Link></li>
            <li>    
                <div>
                    <input type="text" placeHolder="물어보세용" className="textBox"></input>
                    <img src={Find} className="find"></img>
                </div>  
            </li>
        </ul>
    )
}