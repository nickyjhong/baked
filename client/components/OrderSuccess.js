import React from "react";

class OrderSuccess extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center", marginTop: "150px" }}>
          Thank you for your order! ✺◟(＾∇＾)◞✺
        </h1>
        <div className="confirmation-div">
          <div>
            <h1 style={{ textAlign: "center" }}>YOUR ORDER WAS PLACED SUCCESSFULLY 🥳</h1>
            <h2 style={{ textAlign: "center" }}>Check your email for your order confirmation</h2>
          </div>
        </div>
        <h3 style={{ textAlign: "center" }}>Your Order Number: {Math.floor(Math.random() * Math.floor(999))}-{Math.floor(Math.random() * Math.floor(999))}-{Math.floor(Math.random() * Math.floor(9999))}</h3>
      </div>
    );
  }
}

export default OrderSuccess