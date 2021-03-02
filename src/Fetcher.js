import { useEffect, useState, useContext } from "react";
import axios from "axios";
import TokenContext from "./TokenContext";


export default function Fetcher(href) {
    var [token] = useContext(TokenContext);
    var [content, setContent] = useState({});

    useEffect(function() {
        axios.get(href, {
            headers: {
                "Authorization": "Bearer " + token.access_token
            }
        })
        .then(response => setContent(response.data))
    }, [token, setContent])
    return(content);
}