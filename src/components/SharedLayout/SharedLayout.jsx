import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <AppBar />

      <Outlet />
    </>
  );
};

export default SharedLayout;