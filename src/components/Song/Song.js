import { Link } from "@reach/router";
import CircleIcon from "../CircleIcon/CircleIcon";
import "./Song.css";
import timeCalc from "../../timeCalc";

export default function Song(props) {

    var length = timeCalc(props.length)
    
    return (
        <Link to={"/player/" + props.id}>
            <article className="song">
                <div className="song__content">
                    <CircleIcon icon="/images/icons/playerPlay.png" />
                    <section>
                        <h3>{props.song}</h3>
                        <p>{props.artist}</p>
                    </section>
                </div>
                <p className="song__songLength">{length}</p>
            </article>
        </Link>
    )
}