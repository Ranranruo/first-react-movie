import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Movie from "../components/Movie"
import ToHome from "../components/ToHome"
function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState();
    const getMovie = async () => {
        const res = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        const json = await res.json();
        setMovie(json.data.movie);
        setLoading(false);
    }
    console.log(movie)
    useEffect(() => {
        getMovie()
    }, [])
    return (
        <div>
            {loading ? <div>Loading...</div> :
                <div>
                    <ToHome/>
                    <Movie id={movie.id} coverImg={movie.large_cover_image} title={movie.title} summary={movie.description_full} genres={movie.genres}/>
                </div>
            }
        </div>
    )
}
export default Detail