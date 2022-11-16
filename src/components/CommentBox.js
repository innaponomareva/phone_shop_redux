import React from "react";
import { connect } from "react-redux";
import * as Action from "./../store/ActionCreator";
import { withRouter } from "react-router-dom";

class CommentBox extends React.Component {
  state = {
    product: this.props.products.find(
      (item) => item.id === parseInt(this.props.match.params.id)
    ),
    date: `${new Date().getDate()} / ${
      new Date().getMonth() + 1
    } / ${new Date().getFullYear()}`,
    rating: 0,
    userName: "",
    commentText: "",
  };

  onChangeHandler = (event) => {
    const name = event.target.getAttribute("name");
    this.setState({ ...this.state, [name]: event.target.value });
  };
  ratingHandler = (event) => {
    const num = event.target.dataset.index;
    this.setState({ ...this.state, rating: num });
    const arr = document.querySelectorAll(".star");
    arr.forEach((item) => item.classList.remove("yellow"));
    for (let i = 0; i < num; i++) {
      arr[i].className = "material-icons star yellow";
    }
  };

  render() {
    return (
      <div className="comment-box">
        <div
          className="close-icon"
          onClick={() => {
            document.querySelector(".product-box").classList.remove("blured");
            this.props.history.push(`/products/${this.state.product.id}`);
          }}
        >
          <span className="material-icons">clear</span>
        </div>
        <h4>{`Click the stars to rate ${this.state.product.manufacture} ${this.state.product.model}`}</h4>
        <div className="stars-box">
          <span
            data-index="1"
            onClick={this.ratingHandler}
            className="material-icons star"
          >
            grade
          </span>
          <span
            data-index="2"
            onClick={this.ratingHandler}
            className="material-icons star"
          >
            grade
          </span>
          <span
            data-index="3"
            onClick={this.ratingHandler}
            className="material-icons star"
          >
            grade
          </span>
          <span
            data-index="4"
            onClick={this.ratingHandler}
            className="material-icons star"
          >
            grade
          </span>
          <span
            data-index="5"
            onClick={this.ratingHandler}
            className="material-icons star"
          >
            grade
          </span>
        </div>
        <input
          type="text"
          name="userName"
          value={this.state.userName}
          onChange={this.onChangeHandler}
          placeholder="Type your name"
        />
        <textarea
          type="text"
          name="commentText"
          value={this.state.commentText}
          onChange={this.onChangeHandler}
          placeholder="Type your comment"
        />
        <button
          className="btn"
          onClick={() => {
            this.props.addComment(this.state);
            document.querySelector("input").value = "";
            document
              .querySelectorAll(".star")
              .forEach((item) => item.classList.remove("yellow"));
            this.setState({
              ...this.state,
              rating: 0,
              userName: "",
              commentText: "",
            });
          }}
        >
          Add comment
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (comment) => dispatch(Action.addComment(comment)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CommentBox)
);
