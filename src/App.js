import './App.css';
import { Route, Switch, Redirect, useLocation } from "react-router-dom";

// components
import Loading from './components/Loading';
import Store from './components/Store';
import ShopCart from './components/ShopCart';
import Navbar from './components/shared/Navbar';
import ProductDetails from './components/ProductDetails';
import Favorites from './components/Favorites';
import loginBnner from './components/loginForm/loginBnner'
import Login from './components/loginForm/Login';
import SignUp from './components/loginForm/SignUp';
import NotFound from './components/NotFound';

// Context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';
import FavoritesContextProvider from './context/FavoriteContextProvider';


function App() {

  const location = useLocation();

  return (
    <FavoritesContextProvider>
      <ProductContextProvider>
          <CartContextProvider>
            {location.pathname !== "/loading" && <Navbar />}
              <Switch>
                <Route path="/loading" component={Loading} />
                <Redirect exact from="/" to="/loading" />
                <Route path="/products/:id" component={ProductDetails} />
                <Route path="/products" component={Store} />
                <Route path="/cart" component={ShopCart} />
                <Route path="/favorites" component={Favorites} />
                <Route path="/loginbanner" component={loginBnner} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route path="/notfound" component={NotFound} />
                <Redirect exact from="/" to="/products" />
                <Redirect to="/notfound" />
              </Switch>
          </CartContextProvider>
      </ProductContextProvider>
    </FavoritesContextProvider>
  )
}

export default App;
