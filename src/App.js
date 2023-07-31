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
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  goerli
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { ConnectButton } from '@rainbow-me/rainbowkit';


function App() {

  const { chains, publicClient } = configureChains(
    [goerli],
    [
      alchemyProvider({ apiKey: '-6HI52W0oAMki2mFCFQVdCuCBT7I924N' }),
      publicProvider()
    ]
  );

  const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    projectId: 'earnlab',
    chains
  });

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
  })
  
  const livepeerClient = createReactClient({
    provider: studioProvider({
      apiKey: '2df1219b-52f9-43bb-b5cb-bd8d7b9998a8',
    }),
  });

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <LivepeerConfig client={livepeerClient}>
          <nav className="navbar navbar-expand-sm bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
            <ul class="navbar-nav me-auto ps-5 mb-lg-0 ">
              <li class="navbar-brand fw-semibold fs-3">
                <a class="nav-link active" aria-current="page" href="/">Earnlab</a>
              </li>
            </ul>
            <p className='pe-4 pt-3'>
              <ConnectButton />
            </p>
          </nav>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user" element={<User />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/team_home" element={<TeamHome />} />
            </Routes>
          </BrowserRouter>
        </LivepeerConfig>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
