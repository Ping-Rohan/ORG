import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import OurTeams from './Pages/OurTeams';
import PhotoGallery from './Pages/PhotoGallery';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            index
            element={<HomePage />}
          />
          <Route
            path='/aboutus'
            element={<AboutUs />}
          />
          <Route
            path='/ourteams'
            element={<OurTeams />}
          />
          <Route
            path='/gallery'
            element={<PhotoGallery />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
