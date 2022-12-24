import { Outlet } from 'react-router-dom';

export const Movies = () => {
  return (
    <div>
      <form>
        <input></input>
        <button type="button">Finde</button>
      </form>
      <Outlet />
    </div>
  );
};
