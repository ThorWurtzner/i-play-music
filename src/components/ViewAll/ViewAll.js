import { Link } from "@reach/router";
import "./ViewAll.css";

export default function ViewAll(props) {
    return (
        <div className="viewAll">
            <h3>{props.title}</h3>
            <p style={{visibility: props.visibility}}>View All</p>
        </div>
    )
}