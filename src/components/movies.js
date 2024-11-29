import MovieItem from "./movieitem";
//Passes the ReloadData function to child components so they can trigger a refresh after deletion.
function movies(props){
    return props.myMovies.map((movie)=>{
                return  <MovieItem mymovie={movie} key={movie._id} Reload={props.ReloadData}/>
});
}
   export default movies;