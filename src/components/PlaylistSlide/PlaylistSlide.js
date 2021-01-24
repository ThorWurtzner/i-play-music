import AlbumCover from "../AlbumCover/AlbumCover";
import "./PlaylistSlide.css";

export default function PlaylistSlide(props) {
    return (
        <div className="playlistSlide" style={{transform: `scale(${props.scale})`}}>
            <AlbumCover size="150px" image="https://picsum.photos/200" alt="album cover" />
            <div className="playlistSlide__content" style={{visibility: props.visibility}}>
                <h2>{props.top}</h2>
                <h2>{props.playlist}</h2>
            </div>
        </div>
    )
}