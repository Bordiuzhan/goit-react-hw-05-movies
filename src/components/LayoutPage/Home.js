import { useEffect, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';

import { toast } from 'react-toastify';
import { APItrending } from '../../API';
import { Item, Link } from './Home.styled';

export default function Home() {
  const [items, setItems] = useState([]);
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
        toast.error('Error happened!!!');
      } finally {
        setIsLoading(false);
      }
    }
    fetchTrending();
  }, [items]);

  return (
    <div>
      <h2>Trending today</h2>
      {isLoading && <RotatingLines />}
      <ul>
        {items.map(item => (
          <Item key={item.id}>
            <Link to={`/movies/${item.id}`}>
              {item.title ? item.title : item.name}
            </Link>
          </Item>
        ))}
      </ul>
    </div>
  );
}
