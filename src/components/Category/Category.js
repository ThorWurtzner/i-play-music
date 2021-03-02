import "./Category.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import TokenContext from "../../TokenContext";
import Undercategory from "./Undercategory/Undercategory";

export default function Category(props) {

    var [token] = useContext(TokenContext);
    var [content, setContent] = useState({});

    useEffect(function() {
        axios.get(props.href + "/playlists", {
            headers: {
                "Authorization": "Bearer " + token.access_token
            }
        })
        .then(response => setContent(response.data))
    }, [token, setContent, props.href])

    console.log(content);

    function handleClick(event) {
        if (event.target.nextElementSibling.style.display === "none") {
            event.target.nextElementSibling.style.display = "flex";
        } else {
            event.target.nextElementSibling.style.display = "none";
        }
    }

    return (
        <article className="categoryContainer">
            <div onClick={handleClick} className="categoryContainer__category" style={{backgroundColor: props.color}}>
                <h3>{props.category}</h3>
                <img src="./images/icons/dots.svg" alt="dropdown" />
            </div>
            <aside className="categoryContainer__undercategories" style={{display: "none"}}>
                {content.playlists?.items.map(function(subcategory) {
                    return (
                        <Undercategory category={subcategory.name} key={subcategory.name} />
                    )
                })}
            </aside>
        </article>
    )
}