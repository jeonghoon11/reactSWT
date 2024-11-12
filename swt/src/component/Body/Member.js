import Find from '../Head/find.png';
export default function Member() {
    return (
        <div>
            <div className="contect-main">
            <div className="contect-aside">
                <div className='text-box-contect'>
                    <input type="text" placeHolder="Search.." className="Text"></input>
                    <button className="find-button-contect">
                        <img src={Find} className='find-icon-contect'></img>
                    </button>
                </div>
                <ul>
                    <li className="contect-aside-text"><a>정훈</a></li>
                    <li className="contect-aside-text"><a>동준</a></li>
                    <li className="contect-aside-text"><a>태진</a></li>
                    <li className="contect-aside-text"><a>연희</a></li>
                    <li className="contect-aside-text"><a>승택</a></li>
                    <li className="contect-aside-text"><a>원진</a></li>
                    <li className="contect-aside-text"><a>재상</a></li>
                    <li className="contect-aside-text"><a>준선</a></li>
                    <li className="contect-aside-text"><a>채훈</a></li>
                    <li className="contect-aside-text"><a>효림</a></li>
                </ul>
            </div>
            <div className="contect-body">
                <div>
                    <button className="contect-button">
                        <div>정훈</div>
                    </button>
                    <button className="contect-button">동준</button>
                    <button className="contect-button">태진</button>
                    <button className="contect-button">연희</button>
                    <button className="contect-button">승택</button>
                    <button className="contect-button">원진</button>
                    <button className="contect-button">재상</button>
                    <button className="contect-button">준선</button>
                    <button className="contect-button">채훈</button>
                    <button className="contect-button">효림</button>
                </div>
            </div>
        </div>
        </div>
    );
}