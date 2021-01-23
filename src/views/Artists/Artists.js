import "./Artists.css";
import Header from "../../components/Header/Header";
import Headline from "../../components/Headline/Headline";
import ViewAll from "../../components/ViewAll/ViewAll";
import ArtistSlide from "../../components/ArtistSlide/ArtistSlide";
import FeaturedArtist from "../../components/FeaturedArtist/FeaturedArtist";
import FooterNav from "../../components/FooterNav/FooterNav";

export default function Artists() {
    return (
        <main className="artists">
            <Header heading="MUSIC" />
            <Headline title="All Artists" />
            <section className="artists__artistsMonth">
                <ViewAll title="Artist of the Month" />
                <div className="artists__artistsMonth__slider">
                    <ArtistSlide scale="0.8" image="https://picsum.photos/300/200" artist="Jonas Brothers" month="September" />
                    <ArtistSlide scale="1" image="https://picsum.photos/300/201" artist="Jonas Brothers" month="September" />
                    <ArtistSlide scale="0.8" image="https://picsum.photos/300/202" artist="Jonas Brothers" month="September" />
                </div>
            </section>

            <section className="artists__featured">
                <ViewAll title="Featured Artists" />
                <div className="artists__featured__portraits">
                    <FeaturedArtist portrait="https://picsum.photos/100" artist="Aesop Rock" />
                    <FeaturedArtist portrait="https://picsum.photos/101" artist="ONE OK ROCK YES YES EYS" />
                    <FeaturedArtist portrait="https://picsum.photos/102" artist="PnB Rock" />
                </div>
            </section>

            <section className="artists__topArtists">
                <ViewAll title="Top Artists By Country" visibility="hidden" />
                <div className="artists__topArtists__countryBoxes">
                    <div className="artists__topArtists__countryBoxes__us">
                        <h2>TOP 50</h2>
                        <p>US - UK</p>
                    </div>
                    <div className="artists__topArtists__countryBoxes__global">
                        <h2>TOP 50</h2>
                        <p>GLOBAL</p>
                    </div>
                </div>
            </section>
            <FooterNav />
        </main>
    )
}