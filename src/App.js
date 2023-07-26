import Upload from './pages/uvideo/Upload';
import Home from "./pages/home/Home";
import User from "./pages/user/User";
import Teams from "./pages/teams/Teams";
import TeamHome from "./pages/team_home/TeamHome";
import './App.css';
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  const livepeerClient = createReactClient({
    provider: studioProvider({
      apiKey: '2df1219b-52f9-43bb-b5cb-bd8d7b9998a8',
    }),
  });

  return (
    <LivepeerConfig client={livepeerClient}>
      <nav className="navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
        <ul class="navbar-nav me-auto mb-2 ps-5 mb-lg-0 fw-semibold fs-3 ">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Earnlab</a>
          </li>
        </ul>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teamhome" element={<TeamHome />} />
        </Routes>
      </BrowserRouter>
    </LivepeerConfig>
  );
}

export default App;
