import React, { Component } from "react";
import connection from "./db";

class Products extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const [rows] = await connection.query("SELECT * FROM produtos");
    this.setState({ products: rows });
  }

  render() {
    return (
      <div>
        <h1>Products</h1>
        <ul>
          {this.state.products.map((product) => (
            <li key={product.id}>
              {product.name} - {product.price}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Products;
