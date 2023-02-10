import React from 'react'

const FeedModal = ({timeframe,title,description, image}) => {
  return (
    <div>
        <h1>{title}</h1>
        <h2>{timeframe}</h2>
        <img src={image} alt="photo of this post" />
        <p>{description}</p>
    </div>
  )
}

export default FeedModal