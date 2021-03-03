import "./Login.css";
import querystring from "querystring";

export default function Login() {

    var queryParameters = querystring.stringify({
        response_type: "code",
        client_id: "c0f3a5f91b3b4f938c1910577ce8fe60",
        scope: "user-read-private user-read-email",
        redirect_uri: process.env.NODE_ENV === "production" ? "https://i-play-music.netlify.app/callback" : "http://localhost:8888/callback",
        state: "oawhnvfufaiwnovhiowuhfvnweofvhmsfovihwseofcsdwiuhjgvuiyhsdngvmiodhfguiusydghnvuydr"
    });

    return (
        <main className="login">
            {/* <h1 className="login__title">Log In</h1> */}

            <img src="./images/icons/main-notext.png" alt="app logo" />

            <form className="login__form">
                {/* <div>
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
                </div> */}

                <a href={`https://accounts.spotify.com/authorize?${queryParameters}`}>
                    <button>Log in with Spotify<i className="fab fa-spotify"></i></button>
                </a>
            </form>

            <div className="login__fingerprint">
                <img src="./images/icons/fingerprint.png" alt="fingerprint icon" />
                <p>One-Touch Login</p>
            </div>
        </main>
    )
}