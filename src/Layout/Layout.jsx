import TopBar from '../Components/TopBar/TopBar';
import Header from '../Components/Header/Header';
import Notice from '../Components/Notice/Notice';
import Menu from '../Components/Menu/Menu';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <TopBar />
      <Header />
      <Menu />
      <Notice />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
