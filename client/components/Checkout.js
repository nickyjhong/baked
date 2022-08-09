import React from "react";
import { Link } from "react-router-dom";

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      phoneNumber: "",
      email: "",
      street: "",
      apartment: "",
      city: "",
      state: "",
      zip: "",
      nameOnCard: "",
      cardNumber: "",
      secureCode: "",
      expiration: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { handleSubmit, handleChange } = this;
    const {
      name,
      phoneNumber,
      email,
      street,
      apartment,
      city,
      state,
      zip,
      nameOnCard,
      cardNumber,
      secureCode,
      expiration,
    } = this.state;
    return (
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <h3>Shipping Information</h3>
            <label>Full Name</label>
            <input
              type="name"
              name="name"
              onChange={handleChange}
              value={name}
              required
              onInvalid={(e) =>
                e.target.setCustomValidity(
                  "Full name is a required field",
                  alert("Go back and add a name for your order")
                )
              }
              onInput={(e) => e.target.setCustomValidity("")}
            />
            <br />
            <br />

            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              onChange={handleChange}
              value={phoneNumber}
              required
              onInvalid={(e) =>
                e.target.setCustomValidity(
                  "Phone number is a required field",
                  alert("Go back and add a phone number for your order")
                )
              }
              onInput={(e) => e.target.setCustomValidity("")}
            />
            <br />
            <br />

            <label>Email Address</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={email}
              required
              onInvalid={(e) =>
                e.target.setCustomValidity(
                  "Email is a required field",
                  alert("Go back and add a valid email")
                )
              }
              onInput={(e) => e.target.setCustomValidity("")}
            />
            <br />
            <br />

            <label>Address</label>
            <input
              type="text"
              name="street"
              onChange={handleChange}
              placeholder="Street address or P.O. Box"
              value={street}
              required
              onInvalid={(e) =>
                e.target.setCustomValidity(
                  "Address is a required field",
                  alert("How else will we know where to ship your order to?")
                )
              }
              onInput={(e) => e.target.setCustomValidity("")}
            />
            <div>
            <input
              type="text"
              name="apartment"
              onChange={handleChange}
              placeholder="Apartment, suite, unit, building, floor, etc."
              value={apartment}
              />
            </div>
            <br />
            <br />

            <label>City</label>
            <input
              type="text"
              name="city"
              onChange={handleChange}
              value={city}
              required
              onInvalid={(e) =>
                e.target.setCustomValidity(
                  "City is a required field",
                  alert("We need a city to know where to ship your order to")
                )
              }
              onInput={(e) => e.target.setCustomValidity("")}
            />
            <br />
            <br />

            <label>State</label>
            <input
              type="text"
              name="state"
              onChange={handleChange}
              value={state}
              required
              onInvalid={(e) =>
                e.target.setCustomValidity(
                  "State is a required field",
                  alert("We need a state to konw where to ship your order to")
                )
              }
              onInput={(e) => e.target.setCustomValidity("")}
            />
            <br />
            <br />

            <label>ZIP Code</label>
            <input
              type="text"
              name="zip"
              onChange={handleChange}
              value={zip}
              required
              onInvalid={(e) =>
                e.target.setCustomValidity(
                  "ZIP Code is a required field",
                  alert(
                    "We need a zip code to know where to ship your order to"
                  )
                )
              }
              onInput={(e) => e.target.setCustomValidity("")}
            />
            <br />
            <br />
          </form>
        </div>
        <hr />
        <div>
          <form onSubmit={handleSubmit}>
            <h3>Billing Information</h3>
            <label>Name On Card</label>
            <input
              type="text"
              name="nameOnCard"
              onChange={handleChange}
              value={nameOnCard}
              required
              onInvalid={(e) =>
                e.target.setCustomValidity(
                  "A name on card is a required field",
                  alert("We need a name from the card so we know who to charge")
                )
              }
              onInput={(e) => e.target.setCustomValidity("")}
            />
            <br />
            <br />

            <label>Card Number</label>
            <input
              type="text"
              name="cardNumber"
              onChange={handleChange}
              value={cardNumber}
              required
              onInvalid={(e) =>
                e.target.setCustomValidity(
                  "is a required field",
                  alert("Go back and add a ")
                )
              }
              onInput={(e) => e.target.setCustomValidity("")}
            />
            <br />
            <br />

            <label>Expiration Date</label>
            <input
              type="text"
              name="expiration"
              onChange={handleChange}
              value={expiration}
              required
              onInvalid={(e) =>
                e.target.setCustomValidity(
                  "Expiration Date is a required field",
                  alert(
                    "We need to make sure we can charge you by seeing if your card is expired or not"
                  )
                )
              }
              onInput={(e) => e.target.setCustomValidity("")}
            />
            <br />
            <br />

            <label>Secure Code</label>
            <input
              type="text"
              name="secureCode"
              onChange={handleChange}
              value={secureCode}
              required
              onInvalid={(e) =>
                e.target.setCustomValidity(
                  "Secure Code is a required field",
                  alert("It is the last three digits on the back of your card")
                )
              }
              onInput={(e) => e.target.setCustomValidity("")}
            />
            <br />
            <br />
            <br />
          </form>
        </div>
        <button type="button">
          <Link to="/success">Place Order</Link>
        </button>
      </div>
    );
  }
}

export default Checkout;