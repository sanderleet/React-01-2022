
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Kodu from './pages/Kodu'
import Work1 from './pages/Work1';
import Skills2 from './pages/Skills2';
import LevelUp3 from './pages/LevelUp3';


function App() {
  return (    

    <div className="App"> 
      <title>portfoolio</title>
      <base href="./"/>

          <Routes>
            <Route path="/" exact element={ <Kodu/> }/>
            <Route path="/Work1" exact element={ <Work1/> }/>
            <Route path="/Skills2" exact element={ <Skills2/> }/>
            <Route path="/LevelUp3" exact element={ <LevelUp3/> }/>
          </Routes> 

    </div>
  );
}

export default App;
