import { APIreviews } from 'API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await APIreviews(id);
        console.log(response.data.results);
        setReviews(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchReviews();
  }, [id]);

  return (
    <>
      {reviews && (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
