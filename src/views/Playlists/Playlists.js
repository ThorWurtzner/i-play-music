import "./Playlists.css";
import FooterNav from "../../components/FooterNav/FooterNav";
import Header from "../../components/Header/Header";
import Headline from "../../components/Headline/Headline";
import Song from "../../components/Song/Song";
import BigButton from "../../components/BigButton/BigButton";
import PlaylistSlide from "../../components/PlaylistSlide/PlaylistSlide";

export default function Playlists() {
    return (
        <main className="playlists">
            <Header heading="PLAYLISTS" />
            <Headline title="Playlists" font="var(--darkFont)" />
            <img className="playlists__decoration" src="./images/playlistsBg.svg" alt="decoration" />

            <section className="playlists__slider">
                <PlaylistSlide top="Top 50" playlist="Rock Ballads" scale="0.7" visibility="hidden" />
                <PlaylistSlide top="Top 50" playlist="Rock Ballads" />
                <PlaylistSlide top="Top 50" playlist="Rock Ballads" scale="0.7" visibility="hidden" />
            </section>

            <section className="playlists__songList">
                <Song song="Old Town Road" artist="Billy Ray Cyrus" length="3:58" />
                <Song song="Old Town Road" artist="Billy Ray Cyrus" length="3:58" />
                <Song song="Old Town Road" artist="Billy Ray Cyrus" length="3:58" />
                <Song song="Old Town Road" artist="Billy Ray Cyrus" length="3:58" />
                <Song song="Old Town Road" artist="Billy Ray Cyrus" length="3:58" />
                <BigButton text="LISTEN ALL" color="var(--darkPink)" />
            </section>

            <FooterNav />
        </main>
    )
}