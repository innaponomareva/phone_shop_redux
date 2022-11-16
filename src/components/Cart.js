import React from "react";
import { connect } from "react-redux";
import * as Action from "./../store/ActionCreator";

function Cart({ cart, removeFromCart, clearCart }) {
  return (
    <div className="container">
      <div className="cart-body">
        <ul className="cart-header">
          <li className="item-id">id</li>
          <li>image</li>
          <li className="item-model">model</li>
          <li>price</li>
          <li>count</li>
          <li>
            <button className="btn clear" onClick={() => clearCart()}>
              clear
            </button>
          </li>
        </ul>
        {cart.map((item) => {
          console.log(item.url);
          return (
            <ul key={item.id} className="cart-row">
              <li className="item-id">{item.id}</li>
              <li className="item-img">
                <img src={item.url} alt={`${item.model}`} />
              </li>
              <li className="item-model">
                {item.manufacture} {item.model}
              </li>
              <li>${item.price}</li>
              <li>{item.count}</li>
              <li>
                <button className="btn" onClick={() => removeFromCart(item.id)}>
                  remove
                </button>
              </li>
            </ul>
          );
        })}
        <hr />
        <h2 className="total-price">
          Total: $
          {cart.reduce((acc, item) => {
            return parseFloat(acc + item.price * item.count);
          }, 0)}
        </h2>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(Action.removeFromCart(id)),
    clearCart: () => dispatch(Action.clearCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
