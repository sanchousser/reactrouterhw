import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMovieCast } from "services/getApiData"
import css from './Cast.module.css'

const Cast = () => {
    const { movieId } = useParams()

    const [cast, setCast] = useState([])

    useEffect(() => {
        getMovieCast(movieId)
            .then(data => {
                setCast(data.cast.slice(0, 6));
            })
            .catch(err => console.error(err));
        console.log(cast)
    }, [movieId])

    return (
        <ul className={css.castList} >
            {cast.length >= 0 &&
                cast.map(actor => (
                    <li key={actor.id} className={css.castItem}>
                        <img
                            className={css.castImg}
                            src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                            alt={actor.name}
                        />
                        <div className={css.castInfo}>
                            <p className={css.castName}>{actor.name}</p>
                            <p className={css.castRole}>Role: {actor.character}</p>
                        </div>
                    </li>
                ))
            }
        </ul >
    )
}

export default Cast