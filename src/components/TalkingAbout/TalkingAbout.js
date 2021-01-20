import CirclePortrait from "../CirclePortrait/CirclePortrait";
import "./TalkingAbout.css";

export default function TalkingAbout({props}) {

    if (props === undefined) {
        return null;
    }

    return (
        <div className="talkingAbout">
            <div className="talkingAboutPortraits">
                {props.portraits.map(content => <CirclePortrait portrait={content.portrait} key={content.portrait} />)}
            </div>
            <p className="talkingAboutText"><span>{props.people}</span> are talking about this</p>
        </div>
    )
}