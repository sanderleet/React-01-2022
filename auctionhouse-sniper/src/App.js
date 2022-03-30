import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar'
import Home from './pages/Home';

import CreateNewItem from './pages/CreateNewItem';
import CreateNewCrafting from './pages/CreateNewCrafting';
import CraftingOverview from './pages/CraftingOverview';
import PageNotFound from './pages/PageNotFound'
import ItemOverview from './pages/ItemOverview'


function App() {
  return (

    <div /* className="container" */>

      <NavigationBar />
      <Routes >
        <Route path='/' exact element={<Home />} />
        <Route path='/create-new-crafting' exact element={<CreateNewCrafting />} />
        <Route path='/create-new-item' exact element={<CreateNewItem />} />
        <Route path='/crafting-overview' exact element={<CraftingOverview />} />
        <Route path='/item-overview' exact element={<ItemOverview />} />
        <Route path='/*' exact element={<PageNotFound />} />

      </Routes>
      
    </div>
  );
}

export default App;
