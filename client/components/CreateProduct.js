import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createProduct } from '../store/allProducts';

class CreateProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      imageURL: '',
      price: 0,
      description: '',
      inventory: 0,
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
    console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createProduct(this.state);
  }

  render() {
    const { name, imageURL, price, description, category, inventory } =
      this.state;
    const { handleSubmit, handleChange } = this;
    return (
      <div className="add-product-form div-container">
        <form className="add-form-input" onSubmit={handleSubmit}>
          <h1 style={{ textAlign: 'center' }}>Add Product</h1>
          <label htmlFor="productName">Name</label>
          <br />
          <input
            name="name"
            onChange={handleChange}
            value={name}
            required
            onInvalid={(e) =>
              e.target.setCustomValidity(
                'Product name is a required field',
                alert('Go back and add a product name')
              )
            }
            onInput={(e) => e.target.setCustomValidity('')}
          />
          <br />
          <br />

          <label htmlFor="productimageURL">Picture</label>
          <br />
          <input
            name="imageURL"
            onChange={handleChange}
            value={imageURL}
            required
            onInvalid={(e) =>
              e.target.setCustomValidity(
                'Product picture is a required field',
                alert('Go back and add a product picture')
              )
            }
            onInput={(e) => e.target.setCustomValidity('')}
          />
          <br />
          <br />
          <label htmlFor="productPrice">Price</label>
          <br />
          <input
            name="price"
            onChange={handleChange}
            value={price}
            required
            onInvalid={(e) =>
              e.target.setCustomValidity(
                'Product price is a required field',
                alert('How do you plan to sell a product without a price?')
              )
            }
            onInput={(e) => e.target.setCustomValidity('')}
          />
          <br />
          <br />
          <label htmlFor="productDescription">Description</label>
          <br />
          <input
            name="description"
            onChange={handleChange}
            value={description}
            required
            onInvalid={(e) =>
              e.target.setCustomValidity(
                'Product description is a required field',
                alert('Go back and add a product description')
              )
            }
            onInput={(e) => e.target.setCustomValidity('')}
          />
          <br />
          <br />
          {/* <label htmlFor="productInventory">Inventory</label>
          <br />
          <input
            name="inventory"
            onChange={handleChange}
            value={inventory}
            min="0"
            max="100"
          />
          <br />
          <br /> */}
          <label htmlFor="productName">Category</label>
          <select onChange={handleChange} name="category">
            <option value={category}></option>
            <option value="cake">cake</option>
            <option value="cookie">cookie</option>
            <option value="cupcake">cupcake</option>
            <option value="mini">mini</option>
            <option value="other">other</option>
          </select>
          <br />
          <br />
          <button type="submit">Add</button>
          <button type="button">
            <Link to="/products">Cancel</Link>
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => ({
  createProduct: (product) => dispatch(createProduct(product, history)),
});

export default connect(null, mapDispatchToProps)(CreateProduct);
