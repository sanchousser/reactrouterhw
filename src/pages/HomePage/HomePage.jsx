import { useEffect, useState } from 'react'
import css from './HomePage.module.css'
import { fetchTrending } from 'services/getApiData';
import { Link } from 'react-router-dom';


const HomePage = () => {

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetchTrending().then(movies => {
            setMovies(movies.results)
        })
    }, [])

    return <section className={css.homepage__section}>
        <ul>
            {
                movies.map(({ title, poster_path, id }) => {
                    return (<li key={id}>

                        <Link>
                            <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
                            <p>{title}</p>
                        </Link>
                    </li>)
                })
            }
        </ul>


    </section>
}

export default HomePage;