import CirclePortrait from "../CirclePortrait/CirclePortrait";
import "./FeaturedArtist.css";

export default function FeaturedArtist(props) {
    return (
        <div className="featuredArtist">
            <CirclePortrait portrait={props.portrait} />
            <p>{props.artist}</p>
        </div>
    )
}