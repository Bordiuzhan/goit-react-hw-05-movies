import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MovieCard = styled.div`
  display: flex;
  margin-top: 50px;
  border: 1px solid #ececec;
  border-top: none;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
`;

export const Poster = styled.img`
  width: 350px;
`;
export const WrapMovie = styled.div`
  margin-left: 20px;
`;
export const WrapInfo = styled.div`
  margin-bottom: 10px;
  margin-top: 10px;
  padding-top: 10px;
  padding-left: 10px;
  border: 1px solid #ececec;
  border-top: none;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
`;

export const Link = styled(NavLink)`
  color: blue;
  :visited {
    color: blue;
  }
`;

export const Btn = styled(NavLink)`
  color: black;
  text-decoration: none;
  :visited {
    color: black;
  }
`;
