import React from 'react'

const Moviecard = (props) => {
    const {title, description , postUrl} = props.movie;
  return (
    <div>
      <div className='Movie-card'>
        <div className='movie-img'>
            <img src={postUrl} alt={title}/>
        </div>
        <div className='movie-info'>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Moviecard
