import Types from "./ActionTypes";

const init = {
  products: loadItems(),
  cart: [],
};

export default function AppReducer(state = init, { type, payload }) {
  switch (type) {
    case Types.add_to_cart:
      let product = state.cart.find((item) => item.id === payload.id);
      if (product) {
        let index = state.cart.findIndex((item) => item.id === payload.id);
        let tmp = [...state.cart];
        tmp[index] = { ...product, count: product.count + 1 };
        return {
          ...state,
          cart: [...tmp],
        };
      }
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    case Types.remove_from_cart:
      let index = state.cart.findIndex((item) => item.id === payload.id);
      let tmp = [...state.cart];
      tmp.splice(index, 1);
      return {
        ...state,
        cart: [...tmp],
      };
    case Types.clear_cart:
      return {
        ...state,
        cart: [],
      };
    case Types.add_new_product:
      return {
        ...state,
        products: [...state.products, payload],
      };
    case Types.add_comment:
      //console.log(payload);
      const productIndex = state.products.findIndex(
        (item) => item.id === payload.id
      );
      const array = [...state.products];
      if (state.products[productIndex].comments) {
        const comments = [...state.products[productIndex].comments];
        array[productIndex] = {
          ...array[productIndex],
          comments: [...comments, { ...payload, count: comments.length + 1 }],
        };
        console.log("Next comment");
      } else {
        array[productIndex] = {
          ...array[productIndex],
          comments: [{ ...payload }],
        };
        console.log("First comment");
      }
      return {
        ...state,
        products: [...array],
      };

    default:
      return state;
  }
}

function loadItems() {
  return JSON.parse(`
  [
    {
      "id": 101,
      "manufacture": "Blackberry",
      "model": "9650",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec turpis eget nisl vehicula dapibus. Phasellus euismod ligula euismod odio pulvinar pellentesque. Donec vel dui imperdiet, ultricies dolor eu, ullamcorper erat. Donec sit amet tortor nulla. In et metus nec justo mattis dignissim sed a ante. Phasellus elementum, odio at efficitur consectetur, neque orci euismod justo, eu tincidunt sem urna vel magna. Aenean facilisis accumsan diam, quis dictum ante euismod vel. Aliquam et massa ante. Praesent vitae leo id metus commodo bibendum in nec quam. Phasellus faucibus, sem vel varius vulputate, ex justo cursus diam, at fringilla massa ex sit amet sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque faucibus purus purus, ut dapibus odio feugiat non. Cras varius eu urna quis egestas.",
      "price": 130,
      "url": "https://res.cloudinary.com/sheygam/image/upload/v1603111593/phones_croped/blackberry-9650.png"
    },
    {
      "id": 102,
      "manufacture": "Ericsson",
      "model": "T65",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec turpis eget nisl vehicula dapibus. Phasellus euismod ligula euismod odio pulvinar pellentesque. Donec vel dui imperdiet, ultricies dolor eu, ullamcorper erat. Donec sit amet tortor nulla. In et metus nec justo mattis dignissim sed a ante. Phasellus elementum, odio at efficitur consectetur, neque orci euismod justo, eu tincidunt sem urna vel magna. Aenean facilisis accumsan diam, quis dictum ante euismod vel. Aliquam et massa ante. Praesent vitae leo id metus commodo bibendum in nec quam. Phasellus faucibus, sem vel varius vulputate, ex justo cursus diam, at fringilla massa ex sit amet sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque faucibus purus purus, ut dapibus odio feugiat non. Cras varius eu urna quis egestas.",
      "price": 80,
      "url": "https://res.cloudinary.com/sheygam/image/upload/v1603114461/phones_croped/ericsson-t65.png"
    },
    {
      "id": 103,
      "manufacture": "Nokia",
      "model": "5210",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec turpis eget nisl vehicula dapibus. Phasellus euismod ligula euismod odio pulvinar pellentesque. Donec vel dui imperdiet, ultricies dolor eu, ullamcorper erat. Donec sit amet tortor nulla. In et metus nec justo mattis dignissim sed a ante. Phasellus elementum, odio at efficitur consectetur, neque orci euismod justo, eu tincidunt sem urna vel magna. Aenean facilisis accumsan diam, quis dictum ante euismod vel. Aliquam et massa ante. Praesent vitae leo id metus commodo bibendum in nec quam. Phasellus faucibus, sem vel varius vulputate, ex justo cursus diam, at fringilla massa ex sit amet sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque faucibus purus purus, ut dapibus odio feugiat non. Cras varius eu urna quis egestas.",
      "price": 95,
      "url": "https://res.cloudinary.com/sheygam/image/upload/v1603111592/phones_croped/nokia-5210.png"
    },
    {
      "id": 104,
      "manufacture": "Nokia",
      "model": "E63",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec turpis eget nisl vehicula dapibus. Phasellus euismod ligula euismod odio pulvinar pellentesque. Donec vel dui imperdiet, ultricies dolor eu, ullamcorper erat. Donec sit amet tortor nulla. In et metus nec justo mattis dignissim sed a ante. Phasellus elementum, odio at efficitur consectetur, neque orci euismod justo, eu tincidunt sem urna vel magna. Aenean facilisis accumsan diam, quis dictum ante euismod vel. Aliquam et massa ante. Praesent vitae leo id metus commodo bibendum in nec quam. Phasellus faucibus, sem vel varius vulputate, ex justo cursus diam, at fringilla massa ex sit amet sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque faucibus purus purus, ut dapibus odio feugiat non. Cras varius eu urna quis egestas.",
      "price": 70,
      "url": "https://res.cloudinary.com/sheygam/image/upload/v1603111592/phones_croped/nokia-e63.png"
    },
    {
      "id": 105,
      "manufacture": "Nokia",
      "model": "6300",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec turpis eget nisl vehicula dapibus. Phasellus euismod ligula euismod odio pulvinar pellentesque. Donec vel dui imperdiet, ultricies dolor eu, ullamcorper erat. Donec sit amet tortor nulla. In et metus nec justo mattis dignissim sed a ante. Phasellus elementum, odio at efficitur consectetur, neque orci euismod justo, eu tincidunt sem urna vel magna. Aenean facilisis accumsan diam, quis dictum ante euismod vel. Aliquam et massa ante. Praesent vitae leo id metus commodo bibendum in nec quam. Phasellus faucibus, sem vel varius vulputate, ex justo cursus diam, at fringilla massa ex sit amet sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque faucibus purus purus, ut dapibus odio feugiat non. Cras varius eu urna quis egestas.",
      "price": 110,
      "url": "https://res.cloudinary.com/sheygam/image/upload/v1603111592/phones_croped/nokia-6300.png"
    },
    {
      "id": 106,
      "manufacture": "Siemens",
      "model": "A50",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec turpis eget nisl vehicula dapibus. Phasellus euismod ligula euismod odio pulvinar pellentesque. Donec vel dui imperdiet, ultricies dolor eu, ullamcorper erat. Donec sit amet tortor nulla. In et metus nec justo mattis dignissim sed a ante. Phasellus elementum, odio at efficitur consectetur, neque orci euismod justo, eu tincidunt sem urna vel magna. Aenean facilisis accumsan diam, quis dictum ante euismod vel. Aliquam et massa ante. Praesent vitae leo id metus commodo bibendum in nec quam. Phasellus faucibus, sem vel varius vulputate, ex justo cursus diam, at fringilla massa ex sit amet sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque faucibus purus purus, ut dapibus odio feugiat non. Cras varius eu urna quis egestas.",
      "price": 80,
      "url": "https://res.cloudinary.com/sheygam/image/upload/v1603111592/phones_croped/siemens-a50.png"
    },
    {
      "id": 107,
      "manufacture": "Sony Ericsson",
      "model": "W710i",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec turpis eget nisl vehicula dapibus. Phasellus euismod ligula euismod odio pulvinar pellentesque. Donec vel dui imperdiet, ultricies dolor eu, ullamcorper erat. Donec sit amet tortor nulla. In et metus nec justo mattis dignissim sed a ante. Phasellus elementum, odio at efficitur consectetur, neque orci euismod justo, eu tincidunt sem urna vel magna. Aenean facilisis accumsan diam, quis dictum ante euismod vel. Aliquam et massa ante. Praesent vitae leo id metus commodo bibendum in nec quam. Phasellus faucibus, sem vel varius vulputate, ex justo cursus diam, at fringilla massa ex sit amet sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque faucibus purus purus, ut dapibus odio feugiat non. Cras varius eu urna quis egestas.",
      "price": 95,
      "url": "https://res.cloudinary.com/sheygam/image/upload/v1603111591/phones_croped/sony-ericsson-w710i.png"
    },
    {
      "id": 108,
      "manufacture": "Motorola",
      "model": "Razr V3i",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec turpis eget nisl vehicula dapibus. Phasellus euismod ligula euismod odio pulvinar pellentesque. Donec vel dui imperdiet, ultricies dolor eu, ullamcorper erat. Donec sit amet tortor nulla. In et metus nec justo mattis dignissim sed a ante. Phasellus elementum, odio at efficitur consectetur, neque orci euismod justo, eu tincidunt sem urna vel magna. Aenean facilisis accumsan diam, quis dictum ante euismod vel. Aliquam et massa ante. Praesent vitae leo id metus commodo bibendum in nec quam. Phasellus faucibus, sem vel varius vulputate, ex justo cursus diam, at fringilla massa ex sit amet sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque faucibus purus purus, ut dapibus odio feugiat non. Cras varius eu urna quis egestas.",
      "price": 90,
      "url": "https://res.cloudinary.com/sheygam/image/upload/v1603111591/phones_croped/motorola-razr-v3i.png"
    },
    {
      "id": 109,
      "manufacture": "Nokia",
      "model": "E5",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec turpis eget nisl vehicula dapibus. Phasellus euismod ligula euismod odio pulvinar pellentesque. Donec vel dui imperdiet, ultricies dolor eu, ullamcorper erat. Donec sit amet tortor nulla. In et metus nec justo mattis dignissim sed a ante. Phasellus elementum, odio at efficitur consectetur, neque orci euismod justo, eu tincidunt sem urna vel magna. Aenean facilisis accumsan diam, quis dictum ante euismod vel. Aliquam et massa ante. Praesent vitae leo id metus commodo bibendum in nec quam. Phasellus faucibus, sem vel varius vulputate, ex justo cursus diam, at fringilla massa ex sit amet sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque faucibus purus purus, ut dapibus odio feugiat non. Cras varius eu urna quis egestas.",
      "price": 115,
      "url": "https://res.cloudinary.com/sheygam/image/upload/v1603111591/phones_croped/nokia-e5.png" 
    },
    {
      "id": 110,
      "manufacture": "Motorola",
      "model": "E398",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec turpis eget nisl vehicula dapibus. Phasellus euismod ligula euismod odio pulvinar pellentesque. Donec vel dui imperdiet, ultricies dolor eu, ullamcorper erat. Donec sit amet tortor nulla. In et metus nec justo mattis dignissim sed a ante. Phasellus elementum, odio at efficitur consectetur, neque orci euismod justo, eu tincidunt sem urna vel magna. Aenean facilisis accumsan diam, quis dictum ante euismod vel. Aliquam et massa ante. Praesent vitae leo id metus commodo bibendum in nec quam. Phasellus faucibus, sem vel varius vulputate, ex justo cursus diam, at fringilla massa ex sit amet sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque faucibus purus purus, ut dapibus odio feugiat non. Cras varius eu urna quis egestas.",
      "price": 75,
      "url": "https://res.cloudinary.com/sheygam/image/upload/v1603111591/phones_croped/motorola-e398.png"
    },
    {
      "id": 111,
      "manufacture": "Ericsson",
      "model": "T20s",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec turpis eget nisl vehicula dapibus. Phasellus euismod ligula euismod odio pulvinar pellentesque. Donec vel dui imperdiet, ultricies dolor eu, ullamcorper erat. Donec sit amet tortor nulla. In et metus nec justo mattis dignissim sed a ante. Phasellus elementum, odio at efficitur consectetur, neque orci euismod justo, eu tincidunt sem urna vel magna. Aenean facilisis accumsan diam, quis dictum ante euismod vel. Aliquam et massa ante. Praesent vitae leo id metus commodo bibendum in nec quam. Phasellus faucibus, sem vel varius vulputate, ex justo cursus diam, at fringilla massa ex sit amet sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque faucibus purus purus, ut dapibus odio feugiat non. Cras varius eu urna quis egestas.",
      "price": 75,
      "url": "https://res.cloudinary.com/sheygam/image/upload/v1603111591/phones_croped/ericsson-t20s.png"
    },
    {
      "id": 112,
      "manufacture": "Nokia",
      "model": "6310i",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec turpis eget nisl vehicula dapibus. Phasellus euismod ligula euismod odio pulvinar pellentesque. Donec vel dui imperdiet, ultricies dolor eu, ullamcorper erat. Donec sit amet tortor nulla. In et metus nec justo mattis dignissim sed a ante. Phasellus elementum, odio at efficitur consectetur, neque orci euismod justo, eu tincidunt sem urna vel magna. Aenean facilisis accumsan diam, quis dictum ante euismod vel. Aliquam et massa ante. Praesent vitae leo id metus commodo bibendum in nec quam. Phasellus faucibus, sem vel varius vulputate, ex justo cursus diam, at fringilla massa ex sit amet sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque faucibus purus purus, ut dapibus odio feugiat non. Cras varius eu urna quis egestas.",
      "price": 80,
      "url": "https://res.cloudinary.com/sheygam/image/upload/v1603111591/phones_croped/nokia-6310i.png"
    }
  ]
  `);
}
