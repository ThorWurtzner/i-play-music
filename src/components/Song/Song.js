import CircleIcon from "../CircleIcon/CircleIcon";
import "./Song.css";

export default function Song(props) {
    return (
        <article className="song">
            <div className="song__content">
                <CircleIcon icon="./images/icons/playerPlay.png" />
                <section>
                    <h3>{props.song}</h3>
                    <p>{props.artist}</p>
                </section>
            </div>
            <p className="song__songLength">{props.length}</p>
        </article>
    )
}