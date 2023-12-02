import { useEffect, useState } from "react";
import Movie from "../components/Movie"
function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovie] = useState([]);
    const getMovies = async () => {
        const res = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year')
        const json = await res.json();
        setMovie(json.data.movies);
        setLoading(false)
    }
    console.log(movies);
    useEffect(() => {
        getMovies()
    }, [])
    return (
        <div>
            {loading ? <h1>Loading...</h1> :
                <div>
                    {movies.map(movie => (
                        <Movie key={movie.id} id={movie.id} coverImg={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres} />
                    ))}
                </div>}
        </div>
    );
}
export default Home;