import "./CircleIcon.css";

export default function CircleIcon(props) {
    return (
        <div className="circleIcon">
            <img src={props.icon} alt="" />
        </div>
    )
}