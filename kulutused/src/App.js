import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import AddExpense from './Pages/AddExpense';
import History from './Pages/History';
import Overview from './Pages/Overview';

function App() {












  return (
    <div className="App">
      <NavBar/>
        <Routes>

          <Route path="/" exact element={ <Overview/> } />
          <Route path="/history" exact element={ <History/> } />
          <Route path="/addExpense" exact element={ <AddExpense/> } />

        </Routes>


    </div>
  );
}

export default App;
