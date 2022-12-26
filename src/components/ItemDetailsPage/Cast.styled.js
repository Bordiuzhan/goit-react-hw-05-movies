import styled from 'styled-components';

export const List = styled.ul`
  margin: 0;
  padding-left: 35px;
`;

export const Img = styled.img`
  width: 100px;
  margin-left: 18px;
`;

export const Item = styled.li`
  margin-bottom: 24px;
  list-style-type: none;
  p {
    display: flex;
    align-items: center;
  }

  p::before {
    width: 6px;
    height: 6px;
    background: black;
    border-radius: 50px;
    content: '';
    margin-right: 11px;
  }

  span {
    margin-left: 18px;
  }
`;
