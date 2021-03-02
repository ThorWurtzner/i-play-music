import "./Hashtag.css";

export default function Hashtag(props) {
    return (
        <div className="hashtag">
            <p>#{props.text}</p>
        </div>
    )
}