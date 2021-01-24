import "./Undercategories.css";
import Undercategory from "./Undercategory/Undercategory";

export default function Undercategories(props) {
    return (
        <aside className="undercategories">

            {/* loop will be placed here instead of hardcoded components */}
            <Undercategory category="Acoustic Blues" />
            <Undercategory category="Blues Rock" />
            <Undercategory category="Canadian Blues" />
            <Undercategory category="Jazz Blues" />
            <Undercategory category="Piano Blues" />
            <Undercategory category="Soul Blues" />
            <Undercategory category="Swamp Blues" />
        </aside>
    )
}