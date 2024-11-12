import { Link } from 'react-router-dom';
import Find from './find.png';

export default function Nav() {
    return (
        <div className="nav-body">
            <ul className="nav">
                <li><Link to="/Contect">Contect</Link></li>
                <li><Link to="/InfoShare">InfoShare</Link></li>
                <li><Link to="/Member">Member</Link></li>
            </ul>
            <div className='text-box'>
                <input type="text" placeHolder="물어보세용" className="Text"></input>
                <button className="find-button">
                    <img src={Find} className='find-icon'></img>
                </button>
            </div>
        </div>
    )
}
