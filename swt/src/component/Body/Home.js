import userIcon from './img/userIcon.png';
export default function Home() {
    return (
        <div className="home-body">
            <form className="container">
                <h1 className="login-box">Login</h1>
                <section className="username-box">
                    <img src={userIcon} className='user-icon'/>
                    <input type="text" name="username" placeholder="     Username" />
                </section>
                <section className="passwd-box">
                    <img src={userIcon} className='user-icon'/>
                    <input type="text" name="passwd" placeholder="      Passwd" />
                </section>
            </form>
        </div>
    );
}