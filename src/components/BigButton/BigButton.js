import "./BigButton.css";

export default function BigButton(props) {
    return (
        <button style={{border: `3px solid ${props.color}`, color: props.color}} className="bigButton">{props.text}</button>
    )
}