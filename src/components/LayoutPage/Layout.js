import { AppBar } from 'components/LayoutPage/AppBar/AppBar';
import { Suspense } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Container, Header } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <ToastContainer autoClose={3000} pauseOnHover={false} />
      <Header>
        <AppBar />
      </Header>
      <Suspense
        fallback={
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
        }
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};
