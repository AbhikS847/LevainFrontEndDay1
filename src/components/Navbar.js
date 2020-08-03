import React from 'react';
import { NavLink } from 'react-router-dom';


class Navbar extends React.Component{
    render(){
        return(
            <div>
            <ul class="nav flex-column">
            <h1><b>Levain</b></h1>
            <li class="nav-item">
              <NavLink to="/today" className="nav-link" activeClassName="nav-link active" ><i className="icon calendar outline"></i> Today</NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/production" className="nav-link" activeClassName="nav-link active" ><i className="icon calendar"></i> Production</NavLink>
            </li>
            <li class="nav-item">
            <hr></hr>
            </li>
            <li class="nav-item">
              <NavLink to="/orders" className="nav-link" activeClassName="nav-link active" ><i className="icon folder open"></i> Orders</NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/products" className="nav-link" activeClassName="nav-link active" ><i className="icon align center"></i> Products</NavLink>
            </li>
          </ul>
            </div>
        )
    }
}

export default Navbar;