import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProduct, updateProduct } from "../store/singleProduct"
import { allProducts, deleteProduct } from "../store/allProducts"

class UpdateProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      imageURL: "",
      price: 0,
      description: "",
      inventory: 0,
      category: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params; 
    this.props.fetchProduct(id); //  <--
  }

  componentDidUpdate(prevProps) {
    console.log('this.props in componentDidUpdate: \n', this.props)
    if (prevProps.product.id !== this.props.product.id) { //
      this.setState({
        name: this.props.product.name || "",
        imageURL: this.props.product.imageURL || "",
        price: this.props.product.price || "",
        description: this.props.product.description || "",
        inventory: this.props.product.inventory || "",
        category: this.props.product.category || "",
      });
    }
  }

  handleChange(event) {
    this.setState({...this.state,
      [event.target.name]: event.target.value,
    });
    console.log('this.state in handleChange: \n', this.state)
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('this.props in handleSubmit: \n', this.props);
    this.props.updateProduct({ ...this.props.product, ...this.state });
  }

  handleDelete() {

  }

  render() {
    const { name, imageURL, price, description, category, inventory } = this.state;
    const { handleSubmit, handleChange } = this;
    console.log('this.props in render: \n', this.props);
    return (
      <div className="add-product-form">
        <form className="add-form-input" onSubmit={handleSubmit}>
          <h1 style={{ textAlign: "center" }}>Update Product</h1>
          <label htmlFor="productName">Name</label>
          <br />
          <input
            name="name"
            onChange={handleChange}
            value={name}
            required
            onInvalid={(e) =>
              e.target.setCustomValidity(
                "Product name is a required field",
                alert("Go back and add a product name")
              )
            }
            onInput={(e) => e.target.setCustomValidity("")}
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
                "Product picture is a required field",
                alert("Go back and add a product picture")
              )
            }
            onInput={(e) => e.target.setCustomValidity("")}
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
                "Product price is a required field",
                alert("How do you plan to sell a product without a price?")
              )
            }
            onInput={(e) => e.target.setCustomValidity("")}
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
                "Product description is a required field",
                alert("Go back and add a product description")
              )
            }
            onInput={(e) => e.target.setCustomValidity("")}
          />
          <br />
          <br />
          <label htmlFor="productInventory">Inventory</label>
          <br />
          <input
            name="inventory"
            onChange={handleChange}
            value={inventory}
            min="0"
            max="100"
          />
          <br />
          <br />
          <label htmlFor="productName">Category</label>
          <select onChange={handleChange} name='category'>
            <option value={category}></option>
            <option value="cake">cake</option>
            <option value="cookie">cookie</option>
            <option value="cupcake">cupcake</option>
            <option value="mini">mini</option>
            <option value="other">other</option>
          </select>
          <br />
          <br />
          <button type="submit">Update</button>
          <br />
          <button type="button" onClick={() => {
            this.props.deleteProduct(this.props.match.params.id)
          }}>Delete</button>
          <br />
          <button type="button">
            <Link to="/products">Cancel</Link>
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    product: state.singleProduct
})
const mapDispatchToProps = (dispatch, { history }) => ({
  fetchProduct: (id) => dispatch(fetchProduct(id)),
  updateProduct: (product) => (dispatch(updateProduct(product, history))),
  deleteProduct: (id) => dispatch(deleteProduct(id, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProduct);