import './App.css'
import { Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage/Homepage';
import Marketplace from './pages/Marketplace/Marketplace';
import ConnectWallet from './pages/ConnectWallet/ConnectWallet';
import RFBS from './pages/RFBS/RFBS';
import MQHA from './pages/MQHA/MQHA';
import Avatar from './pages/Avatar/Avatar';
import FBA from './pages/FBA/FBA';
import Community from './pages/Community/Community';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" exact element={<Homepage/>} />
      <Route path="/marketplace" exact element={<Marketplace/>} />
      <Route path="/avatar" exact element={<Avatar/>} />
      <Route path="/community" exact element={<Community/>} />
      <Route path="/wallet" exact element={<ConnectWallet/>} />
      <Route path="/request" exact element={<RFBS/>} />
      <Route path="/upload" exact element={<MQHA/>} />
      <Route path="/3davatar" exact element={<FBA/>} />
		</Routes>   
    </>
  );
}

export default App;
