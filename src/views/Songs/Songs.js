import FooterNav from "../../components/FooterNav/FooterNav";
import Header from "../../components/Header/Header";
import Headline from "../../components/Headline/Headline";
import HighlightedSong from "../../components/HighlightedSong/HighlightedSong";
import Song from "../../components/Song/Song";
import "./Songs.css";

export default function Songs(props) {
    return (
        <main className="songs">
            <Header heading="MUSIC" />
            <Headline title="All Songs" />

            <section className="songs__container">
                <aside>
                    <p>A</p>
                    <p>B</p>
                    <p>C</p>
                    <p>D</p>
                    <p>E</p>
                    <p>F</p>
                    <p>G</p>
                    <p>H</p>
                    <p>I</p>
                    <p>J</p>
                    <p>K</p>
                    <p>L</p>
                    <p>M</p>
                    <p>N</p>
                    <p>O</p>
                    <p>Q</p>
                    <p>R</p>
                    <p>S</p>
                    <p>T</p>
                    <p>U</p>
                    <p>V</p>
                    <p>W</p>
                    <p>X</p>
                    <p>Y</p>
                    <p>Z</p>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>0</p>
                </aside>
                <div className="songs__container__songList">
                    <Song song="Hot N*gga" artist="Bobby Shmurda" length="2:58" />
                    <Song song="Hot N*gga" artist="Bobby Shmurda" length="2:58" />
                    <Song song="Hot N*gga" artist="Bobby Shmurda" length="2:58" />
                    <HighlightedSong image="https://picsum.photos/100" song="Here With Me" artist="Marshmello" length="3:37" />
                    <Song song="Hot N*gga" artist="Bobby Shmurda" length="2:58" />
                    <Song song="Hot N*gga" artist="Bobby Shmurda" length="2:58" />
                    <Song song="Hot N*gga" artist="Bobby Shmurda" length="2:58" />
                    <Song song="Hot N*gga" artist="Bobby Shmurda" length="2:58" />
                    <HighlightedSong image="https://picsum.photos/100" song="Here With Me" artist="Marshmello" length="3:37" />
                    <Song song="Hot N*gga" artist="Bobby Shmurda" length="2:58" />
                    <Song song="Hot N*gga" artist="Bobby Shmurda" length="2:58" />
                    <Song song="Hot N*gga" artist="Bobby Shmurda" length="2:58" />
                </div>
            </section>
            <FooterNav />
        </main>
    )
}
