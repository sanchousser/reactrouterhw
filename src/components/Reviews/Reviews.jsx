import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMovieReviews } from "services/getApiData"
import css from './Reviews.module.css'

const Cast = () => {
    const { movieId } = useParams()

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        getMovieReviews(movieId)
            .then(data => {
                setReviews(data.results.slice(0, 2));
            })
            .catch(err => console.error(err));
        console.log(reviews)
    }, [movieId])

    return (
        <ul className={css.reviewList}>
            {reviews.length >= 0 &&
                reviews.map(review => (
                    <li key={review.id} className={css.reviewItem}>
                        <p className={css.reviewAuthor}>{review.author}</p>
                        <p className={css.reviewContent}>{review.content.slice(0, 450)}...</p>
                    </li>
                ))}
        </ul>
    )
}

export default Cast