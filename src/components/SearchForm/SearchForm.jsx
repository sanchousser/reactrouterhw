import { useSearchParams } from 'react-router-dom'
// import css from './SearchForm.module.css'
import { useState } from 'react';

const SearchForm = ({onSubmit}) => {

    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');
    const [searchMovie, setSearchMovie] = useState(query ?? '');

    console.log(query)

    const onInputChange = (e) => {
        setSearchMovie(e.target.value.toLowerCase())
    }

    const onFormClick = (e) => {
        e.preventDefault()
        if (searchMovie === '') {
            alert('Enter something')
        }
        setSearchParams({ query: searchMovie })
    }



    return (
        <form onSubmit={()=> onSubmit()}>
            <input autoComplete='off'
                autoFocus
                name='query'
                onChange={onInputChange}
                value={searchMovie}
                type="text"
                placeholder='Search for a movie'
            />

            <button onClick={onFormClick} type="submit">Search</button>
        </form>
    )
}

export default SearchForm;