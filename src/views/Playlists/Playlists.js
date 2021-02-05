import "./Playlists.css";
import FooterNav from "../../components/FooterNav/FooterNav";
import Header from "../../components/Header/Header";
import Headline from "../../components/Headline/Headline";
import Song from "../../components/Song/Song";
import BigButton from "../../components/BigButton/BigButton";
import PlaylistSlide from "../../components/PlaylistSlide/PlaylistSlide";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import TokenContext from "../../TokenContext";
// import Fetcher from "../../Fetcher";

export default function Playlists(props) {

    var [token] = useContext(TokenContext);
    var [content, setContent] = useState({});
    var [songs, setSongs] = useState({});
    
    useEffect(function() {
        axios.get("https://api.spotify.com/v1/me/playlists", {
            headers: {
                "Authorization": "Bearer " + token.access_token
            }
        })
        .then(response => setContent(response.data))
        
        if (props.id) {
            axios.get("https://api.spotify.com/v1/playlists/" + props.id, {
                headers: {
                    "Authorization": "Bearer " + token.access_token
                }
            })
            .then(response => setSongs(response.data))
        }
    }, [token, props.id, setContent, setSongs])
    
    var hidden = "hidden";
    if (props.id) {
        hidden = "visible";
    }

    return (
        <main className="playlists">
            <Header heading="PLAYLISTS" />
            <Headline title="Playlists" font="var(--darkFont)" />
            <img className="playlists__decoration" src="/images/playlistsBg.svg" alt="decoration" />

            <section className="playlists__slider">
                {content.items && content.items.map(function(playlist) {
                    return (
                        <PlaylistSlide playlist={playlist.name} image={playlist.images[0].url} id={playlist.id} key={playlist.name} />
                    )
                })}
            </section>

            <section className="playlists__songList">
                {songs.tracks?.items.map(function(song) {
                    console.log(song)
                    return (
                        <Song song={song.track.name} artist={song.track.artists[0].name} length={song.track.duration_ms} id={song.track.id} key={song.track.name} />
                    )
                })}
                <BigButton text="LISTEN ALL" color="var(--darkPink)" visibility={hidden} />
            </section>

            <FooterNav />
        </main>
    )
}