import React from "react";
import { connect } from "react-redux";
import * as Action from "./../store/ActionCreator";

class AddProduct extends React.Component {
  state = {
    id: "",
    manufacture: "",
    model: "",
    description: "",
    price: "",
    url: "",
  };

  onChangeHandler = (event) => {
    const type = event.target.getAttribute("name");
    this.setState({ ...this.state, [type]: event.target.value });
  };

  render() {
    return (
      <div className="container">
        <h2>Add new product</h2>
        <form
          className="add-form"
          onSubmit={(event) => {
            event.preventDefault();
            this.props.addProduct(this.state);
            this.setState({
              id: "",
              manufacture: "",
              model: "",
              description: "",
              price: "",
              url: "",
            });
          }}
        >
          <input
            type="text"
            name="id"
            placeholder="Type id"
            value={this.state.id}
            onChange={this.onChangeHandler}
          />
          <input
            type="text"
            name="manufacture"
            placeholder="Type manufacture"
            value={this.state.manufacture}
            onChange={this.onChangeHandler}
          />
          <input
            type="text"
            name="model"
            placeholder="Type model"
            value={this.state.model}
            onChange={this.onChangeHandler}
          />
          <textarea
            type="text"
            name="description"
            placeholder="Type description"
            value={this.state.description}
            onChange={this.onChangeHandler}
          />
          <input
            type="text"
            name="price"
            placeholder="Type price"
            value={this.state.price}
            onChange={this.onChangeHandler}
          />
          <input
            type="text"
            name="url"
            placeholder="Type url"
            value={this.state.url}
            onChange={this.onChangeHandler}
          />
          <button className="btn" type="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (item) => dispatch(Action.addProduct(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
