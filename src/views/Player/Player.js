import Header from "../../components/Header/Header";
import "./Player.css";
import background from "./sound-wave.png";
import CircleIcon from "../../components/CircleIcon/CircleIcon";

export default function Player(props) {
    return (
        <main className="player">
            <Header heading="PLAYING" visibility="hidden" />
            <section className="player__image" style={{backgroundImage: `url(${background})`}}>
                <img className="player__image__main" src="./images/disc.png" alt="disc player" />
            </section>

            <section className="player__content">
                <div className="player__content__info">
                    <h1>{props.song}</h1>
                    <p>{props.artist}</p>
                </div>

                <div>
                    <div className="player__content__soundBar">
                        <div className="player__content__soundBar__progress"></div>
                    </div>
                    <div className="player__content__time">
                        <p className="player__content__time__start">0:00</p>
                        <p className="player__content__time__end">{props.songLength}</p>
                    </div>
                </div>

                <div className="player__content__controls">
                    <img src="./images/icons/playerBack.png" alt="back" />
                    <img src="./images/icons/playerRewind.png" alt="rewind" />
                    <CircleIcon icon="./images/icons/playerPlay.png" />
                    <img src="./images/icons/playerForward.png" alt="forward" />
                    <img src="./images/icons/playerSkip.png" alt="skip" />
                </div>
            </section>
        </main>
    )
}