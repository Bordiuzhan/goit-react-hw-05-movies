import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { APItrending } from '../../API';

export const Home = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchTrending() {
      if (items.length) {
        return;
      }
      try {
        setIsLoading(true);
        const response = await APItrending();
        setItems(response.data.results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchTrending();
  }, [items]);

  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`}>
              {item.title ? item.title : item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};