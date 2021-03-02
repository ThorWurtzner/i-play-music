import "./CirclePortrait.css";

export default function CirclePortrait(props) {
    return (
        <img className="circlePortrait" src={props.portrait} alt="portrait" />
    )
}