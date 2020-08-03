import React from 'react';
import {NavLink} from 'react-router-dom';

class AddProduct extends React.Component{
    constructor(props){
        super(props)
        
        this.onProductName = this.onProductName.bind(this);
        this.onProductMethod = this.onProductMethod.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            product_name:"",
            product_method:""
        }
    }

    onProductName = (event) => {
        this.setState({
            product_name:event.target.value
        })
    }

    onProductMethod = (event) => {
        this.setState({
            product_method:event.target.value
        })
    }

    onSubmit = (event) =>{
        event.preventDefault();
        console.log("Product added!");
        console.log(`Product name: ${this.state.product_name}`);
        console.log(`Product method: ${this.state.product_method}`);

        this.setState({
            product_name:"",
            product_method:""
        })
    }

    render(){
        return(
            <div>
            <div class="ui items">
  <div class="item">
    <div class="middle aligned content">
      <div class="ui left floated">
      <NavLink to="/products">Back</NavLink>
      <h1><b><i></i>Add a product</b></h1>
      </div>
    </div>
  </div>
                </div>
                <div className="px-4 py-3" id="whiteBoard">
                <h3>Details</h3>
                <p>Name</p>
                <div className="ui fluid icon input" value={this.state.product_name} onChange={this.onProductName}>
  <input type="text" placeholder="Product name goes here..." />
    </div>
    <br></br>
    <p>Method</p>
  <div className="ui field">
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Example, pour one cup flour..." value={this.state.product_method} onChange={this.onProductMethod}></textarea>
  </div>
  <br></br>
  </div>
  <table class="ui celled table">
  <thead>
    <tr><th>Ingridient</th>
    <th>Weight(gm)</th>
  </tr></thead>
  <tbody>
    <tr>
      <td data-label="Ingredient">
      <div className="ui fluid transparent icon input">
  <input type="text" placeholder="Enter ingredient name " />
    </div>
      </td>
      <td data-label="Weight">      <div className="ui fluid transparent icon input">
  <input type="text" placeholder="Enter weight " />
    </div></td>
    </tr>
  </tbody>
</table>
  <table class="ui celled table">
  <thead>
    <tr><th>Name</th>
    <th>Unit Weight(gm)</th>
    <th>Batch Weight(gm)</th>
    <th>Batch Yield(gm)</th>
  </tr></thead>
  <tbody>
    <tr>
      <td data-label="Name">
      <div className="ui fluid transparent icon input">
  <input type="text" placeholder="Enter ingridient name " />
    </div>
      </td>
      <td data-label="Weight">      <div className="ui fluid transparent icon input">
  <input type="text" placeholder="Enter weight " />
    </div></td>
    <td data-label="Batch Weight">      <div className="ui fluid transparent icon input">
  <input type="text" placeholder="Enter batch weight " />
    </div></td>
    <td data-label="Batch Yield">      <div className="ui fluid transparent icon input">
  <input type="text" placeholder="Enter batch yield " />
    </div></td>
    </tr>
  </tbody>
</table>
  <button class="fluid blue ui button large" onClick={this.onSubmit}>Add product</button>
  </div>
        )
    }
}

export default AddProduct;