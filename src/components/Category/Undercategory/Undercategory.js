import "./Undercategory.css";

export default function Undercategory(props) {
    return (
        <div className="undercategory">
            <p>{props.category}</p>
            <img src="./images/icons/forwardArrow.svg" alt="forward" />
        </div>
    )
}