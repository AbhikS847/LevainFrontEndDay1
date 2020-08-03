import React from 'react';
import {NavLink} from 'react-router-dom';

class Products extends React.Component{
    render(){
        return(
            <div>
            <div class="d-flex">
  <div class="mr-auto p-2"><NavLink to="/products" className="nav-link" activeClassName="nav-link-active"><h1><b>Products</b></h1></NavLink></div>
  <div class="p-2"><NavLink to="/product/new" className="nav-link" activeClassName="nav-link-active"><h1><i className="icon plus small"></i></h1></NavLink></div>
</div>
            <p className="px-4 py-2">Name</p>
            <div class="d-flex pt-3 pb-3 px-2" id="whiteBoard">
  <div class="mr-auto p-2"><p>Gluten Free</p></div>
  <div class="p-2"><p><i className="icon ellipsis vertical"></i></p></div>
</div>
<br></br>
            <div class="d-flex pt-3 pb-3 px-2" id="whiteBoard">
  <div class="mr-auto p-2"><p>Vegan</p></div>
  <div class="p-2"><p><i className="icon ellipsis vertical"></i></p></div>
</div>
<br></br>
            <div class="d-flex pt-3 pb-3 px-2" id="whiteBoard">
  <div class="mr-auto p-2"><p>Levain</p></div>
  <div class="p-2"><p><i className="icon ellipsis vertical"></i></p></div>
</div>
            </div>
        )
    }
}

export default Products;