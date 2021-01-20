import CircleIcon from "../CircleIcon/CircleIcon";
import CirclePortrait from "../CirclePortrait/CirclePortrait";
import TalkingAbout from "../TalkingAbout/TalkingAbout";
import "./TrendingCard.css";
// import image from "./concert.png"

export default function TrendingCard({props}) {
    
    return (
        <article className="trendingCard">
            <div className="trendingCard__overlay"></div>
            <img className="trendingCard__bgImage" src={props.image} alt="" />
            <div className="trendingCard__circleIcon">
                <CircleIcon />
            </div>

            <section className="trendingCard__info">
                <h2 className="trendingCard__info__title">{props.title}</h2>
                <h3 className="trendingCard__info__hashtag">{props.hashtag} #hashtags</h3>
                <div>
                    <TalkingAbout props={props} />
                </div>
            </section>
        </article>
    )
}