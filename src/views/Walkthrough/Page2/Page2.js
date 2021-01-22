import { Link } from "@reach/router";
import "./Page2.css";
import background from "./bgAsset2.svg";

export default function Page2() {

    function handleClick(event) {
        event.target.style.opacity = "0";

        setTimeout(() => {
            event.target.style.display = "none";
        }, 1000);
    }

    return (
        <main className="page2" onClick={handleClick}>
            <div className="page2__bg" style={{backgroundImage: `url(${background})`}}></div>

            <section className="page2__content">
                <h1 className="page2__content__title">No Music No Life</h1>
                <p className="page2__content__text">Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo. Vestibulum pellentesque lacinia eleifend.</p>
                <div className="page2__content__icons">
                    <div>
                        <img src="./images/icons/sonar.png" alt="sound icon" />
                    </div>
                    <div>
                        <img className="rotateColor" src="./images/icons/heart.png" alt="sound icon" />
                    </div>
                    <div>
                        <img src="./images/icons/music-note.png" alt="sound icon" />
                    </div>
                </div>
            </section>
            <Link to="/trends"><p className="page2__content__skip">SKIP</p></Link>
        </main>
    )
}