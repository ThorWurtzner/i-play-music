import CirclePortrait from "../CirclePortrait/CirclePortrait";
import "./TalkingAbout.css";

export default function TalkingAbout(props) {

    // if (props === undefined) {
    //     return null;
    // }

    return (
        <div className="talkingAbout">
            <div className="talkingAboutPortraits">
                <CirclePortrait portrait="./images/portrait1.jfif" />
                <CirclePortrait portrait="./images/portrait2.jfif" />
                <CirclePortrait portrait="./images/portrait3.jfif" />
            </div>
            <p className="talkingAboutText"><span>{props.people}</span> are talking about this</p>
        </div>
    )
}