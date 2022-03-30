
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Kodu from './pages/Kodu'
import Menüü from './components/Menüü';
import Ostukorv from './pages/Ostukorv';
import Pakiautomaadid from './components/Pakiautomaadid'
import Tegelased from './pages/Tegelased';
import UksikTegelane from './components/UksikTegelane';
import LisaTegelane from './pages/LisaTegelane';
import Autod from './pages/Autod';
import Admin from './components/Admin';
import LisaToode from './pages/LisaToode';
import VaataTooted from './pages/VaataTooted';
import UksikToode from './pages/UksikToode';
import MuudaToode from './pages/MuudaToode';




// to="/" -- localhost:3000
// to="/ostukorv"" -- localhost:3000/ostukorv

function App() {
  return (
    <div className="App">
      <Menüü/>
      <Routes>
        <Route path="/" exact element={ <Kodu/> }/>
        <Route path="/ostukorv" exact element={ <Ostukorv/> }/>
        <Route path="/pakiautomaadid" exact element={ <Pakiautomaadid/> }/>
        <Route path="/tegelased" exact element={ <Tegelased/> }/>
        <Route path="/tegelane/:tegelaseNimi" exact element={ <UksikTegelane/> }/>
        <Route path="/tegelased/lisa" exact element={ <LisaTegelane/> }/>
        <Route path="/autod" exact element={ <Autod/> }/>
        <Route path="/admin" exact element={ <Admin/> }/>
        <Route path="/admin/lisa" exact element={ <LisaToode/> }/>
        <Route path="/admin/muuda/:tooteNimi" exact element={ <MuudaToode/> }/>
        <Route path="/admin/tooted" exact element={ <VaataTooted/> }/>
        <Route path="/toode/:tooteNimi" exact element={ <UksikToode/> }/>
        
        


      </Routes>
      
    </div>
  );
}

export default App;
