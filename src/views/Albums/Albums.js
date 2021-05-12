import AlbumCover from "../../components/AlbumCover/AlbumCover";
import AlbumSpecifics from "../../components/AlbumSpecifics/AlbumSpecifics";
import FooterNav from "../../components/FooterNav/FooterNav";
import Header from "../../components/Header/Header";
import Headline from "../../components/Headline/Headline";
import ViewAll from "../../components/ViewAll/ViewAll";
import "./Albums.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import TokenContext from "../../TokenContext";


import { Redirect } from "@reach/router";
import Login from "../Login/Login";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function Albums() {

    var [token] = useContext(TokenContext);
    var [content, setContent] = useState({});
    

    useEffect(function() {
        axios.get("https://api.spotify.com/v1/browse/new-releases", {
            headers: {
                "Authorization": "Bearer " + token.access_token
            }
        })
        .then(response => setContent(response.data))
    }, [token, setContent])

    
    

    var albums = [];
    content.albums?.items.forEach(element => {
        if (element.album_type === "album") {
            albums.push(element);
        }
    });

    return (
        <>
        <main className="albums">
            <Header heading="MUSIC" />
            <Headline title="All Albums" />
            <section className="albums__featured">
                <ViewAll title="Featured Albums" />
                <div className="albums__featured__images">
                    <Carousel
                        autoPlay={false}
                        showArrows={true}
                        showIndicators={false}
                        centerMode={true}
                        centerSlidePercentage={45}
                        // selectedItem={2}
                        // swipeable={true}
                        swipeScrollTolerance={20}
                    >
                        {albums.map(function(album) {
                            return (
                                <AlbumCover size="130px" image={album.images[1].url} key={album.name} />
                            )
                        })}
                    </Carousel>
                </div>
            </section>

            <section className="albums__list">
                <ViewAll title="New Releases" />
                <div>
                    {albums.map(function(album) {
                        return (
                            <AlbumSpecifics size="50px" image={album.images[2].url} album={album.name} artist={album.artists[0].name} songCount={album.total_tracks} id={album.id} key={album.name} />
                        )
                    })}
                </div>
            </section>
        </main>
        <FooterNav />
        </>
    )
}