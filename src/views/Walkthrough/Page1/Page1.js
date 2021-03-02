import { Link } from "@reach/router";
import "./Page1.css";
import background from "./bgAsset1.svg";

export default function Page1() {

    function handleClick(event) {
        event.target.style.opacity = "0";

        setTimeout(() => {
            event.target.style.display = "none";
        }, 1000);
    }

    return (
        <main className="page1" onClick={handleClick}>
            <div className="page1__bg" style={{backgroundImage: `url(${background})`}}></div>

            <section className="page1__content">
                <h1 className="page1__content__title">Where Words Fail, Music Speaks</h1>
                <p className="page1__content__text">Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo. Vestibulum pellentesque lacinia eleifend.</p>
                <div className="page1__content__icons">
                    <div>
                        <img className="rotateColor" src="./images/icons/sonar.png" alt="sound icon" />
                    </div>
                    <div>
                        <img src="./images/icons/heart.png" alt="sound icon" />
                    </div>
                    <div>
                        <img src="./images/icons/music-note.png" alt="sound icon" />
                    </div>
                </div>
            </section>
            <Link to="/login"><p className="page1__content__skip">SKIP</p></Link>
        </main>
    )
}