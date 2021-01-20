import "./Walkthrough.css";
import Welcome from "../../components/Welcome/Welcome";

export default function Walkthrough({data}) {

    if (data === undefined) {
        return null;
    } else {
        data.map(content => console.log(content))
    }

    return (
        <>
        <Welcome />

        <main className="walkthrough">
            {/* <img className="walkthrough__bgImage" src="./images/bgAsset2.png" alt="" /> */}
            {/* <div className="walkthrough__bgImage"></div> */}

            <section className="walkthrough__content">
                <h1 className="walkthrough__content__title">Where Words Fail, Music Speaks</h1>
                <p className="walkthrough__content__text">Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo. Vestibulum pellentesque lacinia eleifend.</p>
                <div className="walkthrough__content__icons">
                    <div>
                        <img src="./images/icons/sonar.png" alt="sound icon" />
                    </div>
                    <div>
                        <img src="./images/icons/heart.png" alt="sound icon" />
                    </div>
                    <div>
                        <img src="./images/icons/music-note.png" alt="sound icon" />
                    </div>
                </div>
                <p className="walkthrough__content__skip">SKIP</p>
            </section>
            
            {/* <section className="walkthrough__content">
                <h1 className="walkthrough__content__title">{}</h1>
                <p className="walkthrough__content__text">Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo. Vestibulum pellentesque lacinia eleifend.</p>
                <div className="walkthrough__content__icons">
                    <div>
                        <img src="./images/icons/sonar.png" alt="sound icon" />
                    </div>
                    <div>
                        <img src="./images/icons/heart.png" alt="sound icon" />
                    </div>
                    <div>
                        <img src="./images/icons/music-note.png" alt="sound icon" />
                    </div>
                </div>
                <p className="walkthrough__content__skip">SKIP</p>
            </section> */}
        </main>
        </>
    )
}