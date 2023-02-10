import React from "react";
import pescetrarianIcon from "./img"

const PostCard = ({ post, favArr }) => {
    const handleSave = (e) => {
        e.preventDefault();
        favArr.push(post);
    }
    return (
        <div className={post.sold_out ? "sold-out" : ""}>
            <img src={post.image} alt="offer" />
            <h5 id="offer-title">{post.title}</h5>
            <h5 id="timeframe">{post.timeframe}</h5>
            <h5 id="company-name">{post.company.lower()}</h5>
            <h5 id="distance">{post.distance}</h5>
            <h5 id="time-since">{post.time_since_post > 60 ? Math.floor(post.time_since_post / 60) + "hours ago" : post.time_since_post + "minutes ago"}</h5>
            <section id="diet-icon-group">
                {post.diet.pescetrarian ? pescetrarianIcon : null}
                {/* {post.diet.glutenFree? glutenFreeIcon: null}
                {post.diet.vegan ? veganIcon: null}
                {post.diet.kosher ? kosherIcon: null}
                {post.diet.vegetarian ? vegeterianIcon: null}
                {post.diet.dairyFree ? dairyFreeIcon: null}
                {post.diet.halal ? halalIcon: null} */}
            </section>
            <button onClick={handleSave}>save</button>
        </div>
    );
}

export default PostCard;