import { Link } from "@reach/router";
import "./Login.css";

export default function Login() {

    return (
        <main className="login">
            <h1 className="login__title">Log In</h1>

            <form className="login__form">
                <div>
                    <label htmlFor="username">Username</label>
                    <div>
                        <input type="text" id="username" name="username" placeholder="Enter your username" />
                        <img src="./images/icons/user.png" alt="user icon" />
                    </div>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <div>
                        <input type="password" id="password" name="password" placeholder="Enter your password" />
                        <img src="./images/icons/key.png" alt="key icon" />
                    </div>
                </div>

                <Link to="/trends"><button>LOG IN</button></Link>
            </form>

            <div className="login__fingerprint">
                <img src="./images/icons/fingerprint.png" alt="fingerprint icon" />
                <p>One-Touch Login</p>
            </div>
        </main>
    )
}