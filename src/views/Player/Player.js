import Header from "../../components/Header/Header";
import "./Player.css";
import background from "./sound-wave.png";
import CircleIcon from "../../components/CircleIcon/CircleIcon";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import TokenContext from "../../TokenContext";
import timeCalc from "../../timeCalc";

export default function Player(props) {

    var [token] = useContext(TokenContext);
    var [content, setContent] = useState({});

    useEffect(function() {
        axios.get("https://api.spotify.com/v1/tracks/" + props.id, {
            headers: {
                "Authorization": "Bearer " + token.access_token
            }
        })
        .then(response => setContent(response.data));
    }, [token, setContent, props.id])

    console.log(content);

    return (
        <main className="player">
            <Header heading="PLAYING" visibility="hidden" />
            <section className="player__image" style={{backgroundImage: `url(${background})`}}>
                <div></div>
                <img className="player__image__main" src={content.album?.images && content.album?.images[1].url} alt="disc player" />
            </section>

            <section className="player__content">
                <div className="player__content__info">
                    <h1>{content.name}</h1>
                    <p>{content.artists && content.artists[0].name}</p>
                </div>

                <div>
                    <div className="player__content__soundBar">
                        <div className="player__content__soundBar__progress"></div>
                    </div>
                    <div className="player__content__time">
                        <p className="player__content__time__start">0:00</p>
                        <p className="player__content__time__end">{timeCalc(content.duration_ms)}</p>
                    </div>
                </div>

                <div className="player__content__controls">
                    <img src="/images/icons/playerBack.png" alt="back" />
                    <img src="/images/icons/playerRewind.png" alt="rewind" />
                    <CircleIcon icon="/images/icons/playerPlay.png" />
                    <img src="/images/icons/playerForward.png" alt="forward" />
                    <img src="/images/icons/playerSkip.png" alt="skip" />
                </div>
            </section>
        </main>
    )
}