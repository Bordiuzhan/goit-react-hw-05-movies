import { APIreviews } from 'API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Reviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await APIreviews(id);
        setReviews(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        toast.error('Error happened!!!');
      }
    }
    fetchReviews();
  }, [id]);

  return (
    <>
      {reviews.length === 0 && <p>Has no reviews!!!</p>}
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
}
