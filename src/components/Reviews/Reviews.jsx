import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiService } from "services/apiService";
import { ReviewPost } from "./Reviews.styled";


const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchReviews() {
      try {
        const data = await apiService(`/movie/${movieId}/reviews`);
        setReviews(data.results)
      } catch (error) {
        console.log(error)
      }
    }
    fetchReviews();
  }, [movieId]);

  return (
   
    <div>
      {reviews.length > 0 && (
        <ul>
          {reviews.map(review => (
            <ReviewPost key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{ review.content }</p>
            </ReviewPost>
          ))}
        </ul>
      )}
      {reviews.length === 0 && <p>We don`t have any review for this movie</p>}
    </div>
  );
}

export default Reviews;