import Hero from '../Components/Hero/Hero';
import Horizontal from '../Components/Horizontal/Horizontal';
import Welcome from '../Components/Welcome/Welcome';
import NoticeBoard from '../Components/Noticeboard/Noticeboard';
function HomePage() {
  return (
    <>
      <Hero />
      <Horizontal />
      <Welcome />
      <NoticeBoard />
    </>
  );
}

export default HomePage;
