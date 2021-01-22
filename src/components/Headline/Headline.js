import "./Headline.css";

export default function Headline(props) {
    return (
        <h1 className="headline" style={{background: props.color, color: props.font}}>{props.title}</h1>
    )
}