import { Link } from './AppBar.styled';

export const AppBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </nav>
  );
};
