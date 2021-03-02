import AlbumCover from "../AlbumCover/AlbumCover";
import "./PlaylistSlide.css";
import { Link } from "@reach/router";

export default function PlaylistSlide(props) {
    return (
        <Link to={"/playlists/" + props.id} className="playlistSlide" style={{transform: `scale(${props.scale})`}}>
            <AlbumCover size="150px" image={props.image} alt="album cover" />
            <div className="playlistSlide__content" style={{visibility: props.visibility}}>
                <h2>{props.top}</h2>
                <h2>{props.playlist}</h2>
            </div>
        </Link>
    )
}