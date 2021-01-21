import "./Welcome.css";

export default function Welcome() {

    function handleClick(event) {
        event.target.style.opacity = "0";

        setTimeout(() => {
            event.target.style.display = "none";
        }, 2000);
    }

    return (
        <div className="welcome" onClick={handleClick}>
            <img className="welcome__image" src="./images/icons/main.png" alt="iPlayMusic icon" />
        </div>
    )
}