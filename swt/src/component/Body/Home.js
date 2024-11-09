import userIcon from './img/userIcon.png';
import mainBackground from './img/main-background.png'

export default function Home() {
    return (
        <div className="home">
            <div className="home-body">
                Welcome to your ultimate destination for <span className="highlight">mastering React</span>
            </div>
            <div className="home-sub">
            This platform is designed for honing your React
             skills while mastering<br /> the implementation of features 
             like login systems and real-time chat functionality.
            </div>
        </div>
    );
}