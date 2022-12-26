import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  :visited {
    color: blue;
  }
`;
export const Item = styled.li`
  color: blue;

  ::marker {
    color: black;
  }
`;
