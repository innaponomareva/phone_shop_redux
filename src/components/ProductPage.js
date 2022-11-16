import React from "react";
import { connect } from "react-redux";
import * as Action from "./../store/ActionCreator";
import { withRouter, Route } from "react-router-dom";
import CommentBox from "./CommentBox";
import CommentSection from "./CommentSection";
import StarBox from "./StarBox";

function ProductPage({ products, addToCart, match, history }) {
  const product = products.find(
    (item) => item.id === parseFloat(match.params.id)
  );
  return (
    <div className="container">
      <div className="product-box">
        <img
          className="product-img"
          src={product.url}
          alt={`${product.manufacture} ${product.model}`}
        />
        <div className="product-info">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3 className="product-title">{product.manufacture}</h3>
            {product.comments ? (
              <StarBox
                rating={product.comments.reduce((acc, item) => {
                  return acc + parseInt(item.rating) / product.comments.length;
                }, 0)}
              />
            ) : (
              <StarBox />
            )}
          </div>
          <p className="product-model">{product.model}</p>
          <p className="product-price">${product.price}</p>
          <p className="product-description">{product.description}</p>
          <button
            className="btn inline-block"
            onClick={(event) => {
              addToCart(product);
              let interval = setInterval(
                () =>
                  (event.target.nextSibling.className =
                    "alert-success inline-block"),
                500
              );
              setTimeout(() => {
                event.target.nextSibling.className = "alert-success hidden";
                clearInterval(interval);
              }, 2500);
            }}
          >
            add to cart
          </button>
          <div className="alert-success hidden">The product is added</div>
          <button
            className="btn rate inline-block"
            onClick={() => {
              history.push(`/products/${product.id}/addcomment`);
              document.querySelector(".product-box").classList.add("blured");
            }}
          >
            Rate product
          </button>
          {product.comments ? <CommentSection product={product} /> : <></>}
        </div>
      </div>
      <Route path="/products/:id/addcomment" render={() => <CommentBox />} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(Action.addToCart(item)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductPage)
);
