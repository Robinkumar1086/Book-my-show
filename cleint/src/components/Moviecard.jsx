import React from 'react';
import { useNavigate } from 'react-router-dom';

const Moviecard = (props) => {

    const {title, description , postUrl , _id} = props.movie;

    const navigate = useNavigate();

    const handleClick = () => {
      navigate(`/movie/${_id}`);
    };
    
  return (
    <div className='Movie-card' onClick={handleClick}>
        <div className='movie-img'>
            <img src={postUrl} alt={title}/>
        </div>
        <div className='movie-info'>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
      </div>
  )
}

export default Moviecard
