import { Link } from "@reach/router";
import "./Page3.css";
import background from "./bgAsset3.svg";

export default function Page3() {
    return (
        <Link to="/login"> 
            <main className="page3">
                <div className="page3__bg" style={{backgroundImage: `url(${background})`}}></div>

                <section className="page3__content">
                    <h1 className="page3__content__title">Peace. Love. Music.</h1>
                    <p className="page3__content__text">Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo. Vestibulum pellentesque lacinia eleifend.</p>
                    <div className="page3__content__icons">
                        <div>
                            <img src="./images/icons/sonar.png" alt="sound icon" />
                        </div>
                        <div>
                            <img src="./images/icons/heart.png" alt="sound icon" />
                        </div>
                        <div>
                            <img className="rotateColor" src="./images/icons/music-note.png" alt="sound icon" />
                        </div>
                    </div>
                </section>
                <Link to="/trends"><p className="page2__content__skip">SKIP</p></Link>
            </main>
        </Link>
    )
}