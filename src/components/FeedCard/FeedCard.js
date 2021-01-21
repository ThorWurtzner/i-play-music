import "./FeedCard.css";
import FeedCardHashtag from "./FeedCardHashtag/FeedCardHashtag";
import TalkingAbout from "../TalkingAbout/TalkingAbout";

export default function FeedCard(props) {
    return (
        <div className="feedCard">
            <img className="feedCard__image" src={props.image} alt="" />
            <section className="feedCard__content">
                <div className="feedCard__content__hashtags">
                    <FeedCardHashtag text="spotify" />
                    <FeedCardHashtag text="musicworld" />
                    <FeedCardHashtag text="grammy2020" />
                </div>
                <TalkingAbout people="2,003" />
                <h2>{props.title}</h2>
            </section>
        </div>
    )
}