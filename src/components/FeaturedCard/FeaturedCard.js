import { Link } from "@reach/router";
import "./FeaturedCard.css";

export default function FeaturedCard(props) {
    // throw new Error("Simulated error");
    return (
        <Link to={"/playlists/" + props.id}>
            <article className="featuredCard">
                <img src={props.image} alt="" />
                <div className="featuredCard__overlay"></div>
                <div className="featuredCard__content">
                    <h2>{props.album}</h2>
                    <p>{props.type}</p>
                </div>
            </article>
        </Link>
    )
}