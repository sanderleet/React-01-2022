
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Kodu from './pages/Kodu';
import Menüü from './components/Menüü';
import Tegelased from './pages/Tegelased';
import UksikTegelane from './components/UksikTegelane';
import LisaTegelane from './pages/LisaTegelane';
import PlaceholderEsemed from './pages/Placeholder';





// to="/" -- localhost:3000
// to="/ostukorv"" -- localhost:3000/ostukorv

function App() {
  return (
    <div className="App">
      <Menüü/>
      <Routes>
        <Route path="/" exact element={ <Kodu/> }/>
        <Route path="/tegelased" exact element={ <Tegelased/> }/>
        <Route path="/tegelane/:tegelaseNimi" exact element={ <UksikTegelane/> }/>
        <Route path="/tegelased/lisa" exact element={ <LisaTegelane/> }/>
        <Route path="/placeholderEsemed" exact element={ <PlaceholderEsemed/> }/>


      </Routes>
      
    </div>
  );
}

export default App;
