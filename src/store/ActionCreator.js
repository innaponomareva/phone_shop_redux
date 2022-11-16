import Types from "./ActionTypes";

export function addToCart(item) {
  return {
    type: Types.add_to_cart,
    payload: {
      id: item.id,
      manufacture: item.manufacture,
      model: item.model,
      price: item.price,
      url: item.url,
      count: 1,
    },
  };
}

export function removeFromCart(id) {
  return {
    type: Types.remove_from_cart,
    payload: {
      id,
    },
  };
}

export function clearCart() {
  return {
    type: Types.clear_cart,
    payload: {},
  };
}

export function addProduct(item) {
  return {
    type: Types.add_new_product,
    payload: {
      id: item.id,
      manufacture: item.manufacture,
      model: item.model,
      description: item.description,
      price: item.price,
      url: item.url,
      comments: [],
    },
  };
}

export function addComment(item) {
  return {
    type: Types.add_comment,
    payload: {
      count: 1,
      id: item.product.id,
      date: item.date,
      rating: item.rating,
      userName: item.userName,
      commentText: item.commentText,
    },
  };
}
