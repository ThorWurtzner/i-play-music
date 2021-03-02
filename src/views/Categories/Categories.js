import Header from "../../components/Header/Header";
import Headline from "../../components/Headline/Headline";
import FooterNav from "../../components/FooterNav/FooterNav";
import "./Categories.css";
import Category from "../../components/Category/Category";
// import Undercategories from "../../components/Undercategories/Undercategories";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import TokenContext from "../../TokenContext";

export default function Categories(props) {
    var [token] = useContext(TokenContext);
    var [content, setContent] = useState({});

    useEffect(function() {
        axios.get("https://api.spotify.com/v1/browse/categories?country=DK", {
            headers: {
                "Authorization": "Bearer " + token.access_token
            }
        })
        .then(response => setContent(response.data));
    }, [token, setContent])

    function randomHsl() {
        return `hsla(${(Math.random() * 360)}, 80%, 40%, 1`;
    }

    return (
        <main className="categories">
            <Header heading="CATEGORIES" />
            <Headline title="Categories" />

            <section className="categories__container">
                {/* <Undercategories /> */}
                {content.categories?.items.map(function(category) {
                    return(
                        <Category category={category.name} href={category.href} color={randomHsl()} key={category.name} />
                    )
                })}
            </section>

            <FooterNav />
        </main>
    )
}