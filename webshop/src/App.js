import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useContext, useState } from 'react';

import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import PaymentCompleted from './pages/PaymentCompleted';

import AdminHome from './pages/admin/AdminHome';
import AddProduct from './pages/admin/AddProduct';
import EditProduct from './pages/admin/EditProduct';
import ViewProduct from './pages/admin/ViewProduct';
import Login from './pages/auth/Login';

import NotFound from './pages/NotFound';
import SignUp from './pages/auth/SignUp';
//import { cartSumService } from './services/cartSumService';
import AuthContext from './store/authContext';
import Map from './pages/Map';

/* import { loggedInService } from './services/loggedInService'; */




function App() {
  const ctx = useContext(AuthContext)



  /* const [loggedIn, setLoggedIn] = useState(loggedInFromSS())
  loggedInService.getIsLoggedIn().subscribe(isLoggedInFromObs => setLoggedIn(isLoggedInFromObs))

  function loggedInFromSS() {
    return (sessionStorage.getItem("isLoggedIn"))
  }
 */
  return ( <div>
    <NavigationBar/>
    <Routes>

      <Route path='/' exact element={<Home />} />
      <Route path='/ostukorv' exact element={<Cart />} />
      <Route path='/tellimus' exact element={<PaymentCompleted />} />
      {ctx.loggedIn && <Route>
          <Route path='/admin' exact element={<AdminHome />} />
          <Route path='/admin/addProduct' exact element={<AddProduct />} />
          <Route path='/admin/editProduct/:productId' exact element={<EditProduct />} />
          <Route path='/admin/viewProduct' exact element={<ViewProduct />} />
          <Route path='/admin/registreeri' exact element={<SignUp/>}/> 
      </Route>}
      { !ctx.loggedIn && <Route path='/admin/*' exact element={<Login />} />}
      <Route path='/poed' exact element={<Map/>}/>
      <Route path='/logi-sisse' exact element={<Login />} />
      

      <Route path='*' exact element={<NotFound/>}/>
     
    </Routes>

    </div>);
}

export default App;
