import "./AlbumCover.css";

export default function AlbumCover(props) {
    return (
        <img className="albumCover" src={props.image} alt="" style={{height: props.size, width: props.size}} />
    )
}