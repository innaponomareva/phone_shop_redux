import Header from './components/Header';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './components/Home';
import ProductsList from './components/ProductsList';
import AddProduct from './components/AddProduct';
import Cart from './components/Cart';
import ProductPage from './components/ProductPage';


function App(){
  return (
    <div className="app">
      <Header/>
        <Switch>
          <Route path ='/' exact component={Home}/>
          <Route path = '/products/:id' component={ProductPage}/>
          <Route path = '/products' component={ProductsList}/>
          <Route path = '/add' component={AddProduct}/>
          <Route path = '/cart' component={Cart}/>
          <Redirect from="**" to="/" />
        </Switch>
    </div>
  );
}

export default App;
