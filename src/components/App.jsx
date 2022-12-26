import { Route, Routes } from 'react-router-dom';
import { Layout } from './LayoutPage/Layout';
import { lazy } from 'react';

const Home = lazy(() => import('components/LayoutPage/Home'));
const Cast = lazy(() => import('./ItemDetailsPage/Cast'));
const ItemDetails = lazy(() => import('./ItemDetailsPage/ItemDetails'));
const Reviews = lazy(() => import('./ItemDetailsPage/Reviews'));
const Movies = lazy(() => import('./MoviesPage/Movies'));

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
