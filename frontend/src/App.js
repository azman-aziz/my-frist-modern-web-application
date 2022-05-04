import React, { Component } from 'react';
import { BrowserRouter as Router,
  Routes,
  Route,
  
   } from 'react-router-dom';
import ProductList from './components/productList';
import AddProduct from './components/addProduct';
import EditProduct from './components/editProduct';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
        <div className="columns">
        <Routes>
      <Route exact path='/' element={< ProductList />}></Route>
      <Route path='/add' element={< AddProduct />}></Route>
      <Route path='/edit/:id' element={< EditProduct />}></Route>
      

      </Routes>
        </div>
        </div>
      
      
      </Router>



    );
  }
}




export default App;
