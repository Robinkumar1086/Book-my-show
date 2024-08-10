import React, { useState }  from 'react'
import { Tabs , Button} from 'antd';
import { useGetAllMoviesQuery } from '../../services/moviesService';
import AddMovieForm from '../../components/AddMovieForm';


function Adminprofile () {

  const {data: allMovies , isLoading , isError} = useGetAllMoviesQuery();
  

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const items = [
    {
      label: 'Movies',
      key: 'Admin-Movies',
      children:  (
      <div className="Movie-cards">
        <div className='Add'>
        <Button  type="primary" onClick={showDrawer}>Add Movie</Button>
        </div>
       {allMovies && allMovies.length ? (
         allMovies.map((movie)=>(
          <div className="Movie-list-item" key={movie._id}>
            <h4>{movie.title}</h4>
            <p>{movie.description}</p>
            <div>
              <button>Update</button>
              <button>Delete</button>
            </div>
          </div>
         ))
       ) : <p>No movies....</p>}
       <AddMovieForm  open={open} onClose={onClose} setOpen={setOpen}/>
      </div>
      ),
      
    },
    {
      label: 'Theater',
      key: 'Theater',
      children: 'Theater',
    }
]

if(isLoading){
  return <p>Loading data...</p>   
 }
 if(isError){
   return <p>Something went wrong...</p>
 }

  return (
    <div className='container'>
      <Tabs
    defaultActiveKey="1"
    centered
    items={items}
  />
    </div>
  )
}

export default Adminprofile