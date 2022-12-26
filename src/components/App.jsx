import { Home } from 'components/AppBar/Home';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Cast } from './ItemDetails/Cast';
import { ItemDetails } from './ItemDetails/ItemDetails';
import { Reviews } from './ItemDetails/Reviews';
import { Layout } from './Layout/Layout';
import { Movies } from './MoviesPage/Movies';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<ItemDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
