import React from "react";
import "./postCard.css"

const PostCard = ({ post, favArr }) => {
    const handleSave = (e) => {
        e.preventDefault();
        favArr.push(post);
    }
    return (<div id="outer-container">
        <div id="post-card" className={post.sold_out ? "sold-out" : ""}>
            <div>
                <div>
                    <img id="thumbs" src={post.image} alt="offer" />
                    <div>
                        <h5 id="company-name">{post.company}</h5>
                        <h5 id="info">Grocery</h5>
                        <h5 id="distance">{post.distance}</h5>
                    </div>
                </div>
                <div>
                    <h5 id="offer-title">{post.title}</h5>
                    <h5 id="timeframe">{"Offer Window: " + post.timeframe}</h5>
                </div>
            </div>
            <div>
                <h5 id="time-since">{post.time_since_post > 60 ? Math.floor(post.time_since_post / 60) + "hours ago" : post.time_since_post + "minutes ago"}</h5>
                <section id="diet-icon-group">
                    {post.diet.pescetrarian ? process.env.PUBLIC_URL + "/icon/pes.svg" : null}
                    {post.diet.glutenFree? process.env.PUBLIC_URL + "/icon/gf.svg": null}
                {post.diet.vegan ? process.env.PUBLIC_URL + "/icon/vegan.svg": null}
                {post.diet.kosher ? process.env.PUBLIC_URL + "/icon/kosher.svg": null}
                {post.diet.vegetarian ? process.env.PUBLIC_URL + "/icon/veg.svg": null}
                {post.diet.dairyFree ? process.env.PUBLIC_URL + "/icon/df.svg": null}
                {post.diet.halal ? process.env.PUBLIC_URL + "/icon/halal.svg": null}
                </section>
                <button onClick={handleSave}><img src={process.env.PUBLIC_URL + "/icon/bookmark.svg"} alt="bookmark" /></button>
            </div>
        </div>
        </div>
    );
}

export default PostCard;