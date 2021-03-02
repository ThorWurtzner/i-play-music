import "./HighlightedSong.css";
import CircleIcon from "../../components/CircleIcon/CircleIcon";

export default function HighlightedSong(props) {
    return (
        <div className="highlightedSong">
            <section className="highlightedSong__imageContainer">
                <img className="highlightedSong__imageContainer__background" src={props.image} alt="Album Cover" />
                <CircleIcon icon="./images/icons/playerPlay.png" />
            </section>

            <section className="highlightedSong__content">
                <article>
                    <h3>{props.song}</h3>
                    <p>{props.artist}</p>
                </article>
                <p className="highlightedSong__content__songLength">{props.length}</p>
            </section>
        </div>
    )
}