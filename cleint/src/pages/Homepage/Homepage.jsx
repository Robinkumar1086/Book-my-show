import { useGetAllMoviesQuery } from '../../services/moviesService'
import Moviecard from '../../components/Moviecard';

  
function Homepage() {
  const {data , isLoading , isError} = useGetAllMoviesQuery();
  
  if(isLoading){
   return <p>Loading data...</p>   
  }
  if(isError){
    return <p>Something went wrong...</p>
  }
  
  return (
    <>
    <div className='movies'>
      {data?.map((movie)=> <Moviecard key={movie._id} movie={movie}/>)}
    </div>
    </>
  )
}

export default Homepage