import React, { Component } from "react";
import axios from "axios";
import Product from "./Product";

class ProductList extends Component {
  url = "http://apolis-grocery.herokuapp.com/api/products";

  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://apolis-grocery.herokuapp.com/api/products")
      .then((response) => {
        this.setState({
          products: response.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div className="row">
          {
              this.state.products.map(x => <Product data={x}/>)
          }
        </div>
      </div>
    );
  }
}

export default ProductList;
