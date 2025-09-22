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
        searchMovie(filter).then(movies => {
            setMovies(movies.results)
        })
    }, [queryValue, filter])

    const handleFormSubmit = (query) => {
        setSearchParams(`query=${query}`);
        setFilter(query)
    }

    return (<section className={css.moviespage__section}>
        <SearchForm onSubmit={handleFormSubmit} />
        {movies && (<ul>
            {movies.map(movie => <li key={movie.id}><Link>{movie.title}</Link></li>)}
        </ul>)
        }
    </section>)
}

export default MoviesPage

