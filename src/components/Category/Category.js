import "./Category.css";

export default function Category(props) {
    return (
        <div className="category" style={{backgroundColor: props.color}}>
            <h3>{props.category}</h3>
            <img src="./images/icons/dots.svg" alt="dropdown" />
        </div>
    )
}