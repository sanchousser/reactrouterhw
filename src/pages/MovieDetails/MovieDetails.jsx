import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieCast, getMovieDetails, getMovieReviews } from "services/getApiData";
import css from './MovieDetails.module.css'

const MovieDetails = () => {

    const { movieId } = useParams()
    const location = useLocation()
    const [movie, setMovie] = useState('')
    // const [cast, setCast] = useState([])
    // const [reviews, setReviews] = useState([])
    // const [showCast, setShowCast] = useState(false)
    // const [showReviews, setShowReviews] = useState(false)

    const isCast = location.pathname.endsWith("cast");
    const isReviews = location.pathname.endsWith("reviews");


    useEffect(() => {
        getMovieDetails(movieId).then(setMovie)
    }, [movieId])

    // const onCastClick = (e) => {
    //     e.preventDefault();
    //     getMovieCast(movieId)
    //         .then(data => {
    //             setCast(data.cast.slice(0, 6));
    //         })
    //         .catch(err => console.error(err));
    //     console.log(cast)
    //     setShowCast(prev => !prev)
    // };

    // const onReviewClick = (e) => {
    //     e.preventDefault();
    //     getMovieReviews(movieId)
    //         .then(data => {
    //             setReviews(data.results.slice(0, 2));
    //         })
    //         .catch(err => console.error(err));
    //     console.log(reviews)
    //     setShowReviews(prev => !prev)
    // };




    return (
        <section className={css.details}>
            <Link to={location?.state?.from || '/'} className={css.backLink}>
                ← Back
            </Link>
            {movie.poster_path && (
                <img
                    className={css.poster}
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt={movie.title}
                />
            )}
            <div className={css.info}>
                <h1 className={css.title}>{movie.title}</h1>
                <p className={css.score}>User score: {Math.round(movie.vote_average * 10) / 10}/10</p>

                <h2 className={css.subtitle}>Overview</h2>
                <p className={css.overview}>{movie.overview}</p>

                <h3 className={css.subtitle}>Genres</h3>
                <ul className={css.genres}>
                    {movie.genres?.map(genre => (
                        <li key={genre.id} className={css.genre}>
                            {genre.name}
                        </li>
                    ))}
                </ul>

                <div className={css.additional}>
                    <h3 className={css.subtitle}>Additional information</h3>
                    <div className={css.additionalLinks}>
                        <Link to={isCast ? `/movies/${movieId}` : "cast"} className={css.link__btn}>
                            Cast
                        </Link>
                        <Link to={isReviews ? `/movies/${movieId}` : "reviews"} className={css.link__btn}>
                            Reviews
                        </Link>
                    </div>
                    {/* <ul className={css.castList}>
                        {showCast &&
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
                            ))}
                    </ul>

                    <ul className={css.reviewList}>
                        {showReviews &&
                            reviews.map(review => (
                                <li key={review.id} className={css.reviewItem}>
                                    <p className={css.reviewAuthor}>{review.author}</p>
                                    <p className={css.reviewContent}>{review.content.slice(0, 450)}...</p>
                                </li>
                            ))}
                    </ul> */}
                    <Outlet />
                </div>
            </div>
        </section >
    );


}

export default MovieDetails