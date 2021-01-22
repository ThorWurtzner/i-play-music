import AlbumCover from "../AlbumCover/AlbumCover";
import "./AlbumSpecifics.css";

export default function AlbumSpecifics(props) {
    return (
        <article className="albumSpecifics">
            <div className="albumSpecifics__content">
                <AlbumCover image={props.image} size="60px" />
                <div>
                    <h3>{props.album}</h3>
                    <p>{props.artist}</p>
                </div>
            </div>
            <p className="albumSpecifics__songCount">{props.songCount} Songs</p>
        </article>
    )
}