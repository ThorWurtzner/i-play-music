import "./AlbumDetails.css";
import Header from "../../components/Header/Header";
import Hashtag from "../../components/Hashtag/Hashtag";
import ViewAll from "../../components/ViewAll/ViewAll";
import Song from "../../components/Song/Song";
import FooterNav from "../../components/FooterNav/FooterNav";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import TokenContext from "../../TokenContext";

export default function AlbumDetails(props) {

    var [token] = useContext(TokenContext);
    var [content, setContent] = useState({});

    useEffect(function() {
        axios.get("https://api.spotify.com/v1/albums/" + props.id, {
            headers: {
                "Authorization": "Bearer " + token.access_token
            }
        })
        .then(response => setContent(response.data));
    }, [token, setContent])

    console.log(content);


    return (
        <main className="albumDetails">
            <Header heading="ALBUM" />
            <section className="albumDetails__topContainer">
                <img src={content.images && content.images[0].url} alt="Album Cover" />
                <div className="albumDetails__topContainer__overlay"></div>

                <div className="albumDetails__topContainer__content">
                    <div className="albumDetails__topContainer__content__album">
                        <h1>{content.name}</h1>
                        <h3>{content.total_tracks} Songs</h3>
                    </div>
                    <div className="albumDetails__topContainer__content__hashtags">
                        <p className="albumDetails__topContainer__content__hashtags__title">genres hashtags</p>
                        <div>
                            <Hashtag text="country" />
                            <Hashtag text="ballad" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="albumDetails__songContainer">
                <ViewAll title="All Songs" visibility="hidden" />
                <div className="albumDetails__songContainer__songs">
                    {content.tracks?.items.map(function(song) {
                        return (
                            <Song song={song.name} artist={song.artists[0]?.name} length={song.duration_ms} id={song.id} key={song.name} />
                        )
                    })}
                </div>
            </section>
            <FooterNav />
        </main>
    )
}