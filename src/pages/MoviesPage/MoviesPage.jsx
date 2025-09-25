import SearchForm from 'components/SearchForm/SearchForm'
import css from './MoviePage.module.css'
import { useEffect, useState } from 'react'
import { searchMovie } from 'services/getApiData'
import { Link, useSearchParams } from 'react-router-dom'



const MoviesPage = () => {


    const [movies, setMovies] = useState([])
    // const [searchQuery, setSearchQuery] = useState('')
    const [searchParams, setSearchParams] = useSearchParams()
    const [filter, setFilter] = useState('')
    const queryValue = searchParams.get('query');

    useEffect(() => {
        console.log(queryValue)
        searchMovie(filter).then(movies => {
            setMovies(movies.results)
            console.log(movies)
        })
    }, [queryValue, filter])

    const handleFormSubmit = (query) => {
        setSearchParams(`query=${query}`);
        setFilter(query)
        console.log(searchParams)
    }

    return (<section className={css.moviespage__section}>
        <SearchForm onSubmit={handleFormSubmit} />
        {movies && <ul className={css.movies__list}>
            {
                movies.map(({ title, poster_path, id }) => {
                    return (<li className={css.movies__item} key={id}>

                        <Link to={`/movies/${id}`}>
                            <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
                            <p >{title}</p>
                        </Link>
                    </li>)
                })
            }
        </ul>
        }

    </section>)
}

export default MoviesPage

