import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Container, Header } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <AppBar />
      </Header>
      <Outlet />
    </Container>
  );
};
