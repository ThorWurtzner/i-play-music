import "./ArtistSlide.css";

export default function ArtistSlide(props) {
    return (
        <div className="artistSlide" style={{transform: `scale(${props.scale})`}}>
            <img src={props.image} alt="" />
            <div>
                <p>{props.month}</p>
                <h4>{props.artist}</h4>
            </div>
        </div>
    )
}