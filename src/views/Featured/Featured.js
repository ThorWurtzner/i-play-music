import "./Featured.css";
import Headline from "../../components/Headline/Headline";
import Header from "../../components/Header/Header";
import FooterNav from "../../components/FooterNav/FooterNav";
import FeaturedCard from "../../components/FeaturedCard/FeaturedCard";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import TokenContext from "../../TokenContext";

export default function Featured() {
    var [token] = useContext(TokenContext);
    var [content, setContent] = useState({});

    useEffect(function() {
        axios.get("https://api.spotify.com/v1/browse/featured-playlists", {
            headers: {
                "Authorization": "Bearer " + token.access_token
            }
        })
        .then(response => setContent(response.data));
    }, [token, setContent])

    console.log(content);

    return (
        <main className="featured">
            <Header heading="FEATURED" />
            <Headline title="Featured" />

            <div>
                {content.playlists && content.playlists.items.map(function(playlist) {
                    return (
                        <FeaturedCard image={playlist.images[0].url} album={playlist.name} type={playlist.type} id={playlist.id} />
                    )
                })}
            </div>

            <FooterNav />
        </main>
    )
}