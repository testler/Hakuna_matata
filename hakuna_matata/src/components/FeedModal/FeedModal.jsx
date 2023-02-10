import React from 'react'

const FeedModal = ({ post }) => {
  return (
    <div>
      <div className={post.sold_out ? "sold-out" : ""}>
        <img src={post.image} alt="offer" />
        <h5 id="offer-title">{post.title}</h5>
        <h5 id="timeframe">{post.timeframe}</h5>
        <h5 id="company-name">{post.company.lower()}</h5>
        <h5 id="distance">{post.distance}</h5>
        <h5 id="time-since">{post.time_since_post > 60 ? Math.floor(post.time_since_post / 60) + "hours ago" : post.time_since_post + "minutes ago"}</h5>
      </div>
    </div>
  )
}

export default FeedModal