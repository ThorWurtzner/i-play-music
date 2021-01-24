import "./FeaturedCard.css";

export default function FeaturedCard(props) {
    return (
        <article className="featuredCard">
            <img src={props.image} alt="" />
            <div className="featuredCard__overlay"></div>
            <div className="featuredCard__content">
                <h2>{props.album}</h2>
                <p>{props.type}</p>
            </div>
        </article>
    )
}