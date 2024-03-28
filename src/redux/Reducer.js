const initialState = {
  products: JSON.parse(localStorage.getItem("productBook")) || [],
  basket: JSON.parse(localStorage.getItem("basketBook")) || [],
  modal: false,
  cat: "",
  dark: false,
  valute: {
    usd: 1,
    eur: 0.92,
    rub: 92.29,
    som: 89.6,
  },
  valuteSymbol: {
    usd: "$",
    eur: "€",
    rub: "₽",
    som: "⃀",
  },
  changeValute: "USD",
};
export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CAT":
      return { ...state, cat: action.payload };
    case "OPEN_MODAL":
      return { ...state, modal: action.payload };
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "ADD_BASKET":
      let findPro = state.basket.find((el) => el.id === action.payload.id);
      if (findPro) {
        console.log("bar");
      } else {
        let res = [...state.basket, action.payload];
        localStorage.setItem("basketBook", JSON.stringify(res));
        return {
          ...state,
          basket: res,
        };
      }
    case "QUANTITY_PLUS":
      let plusBasket = state.basket.find((el) => el.id === action.payload.id);
      if (plusBasket) {
        let plus = state.basket.map((el) =>
          el.id === action.payload.id
            ? { ...el, quantity: el.quantity + 1 }
            : el
        );
        localStorage.setItem("basketBook", JSON.stringify(plus));
        return {
          ...state,
          basket: state.basket.map((el) =>
            el.id === action.payload.id
              ? { ...el, quantity: el.quantity + 1 }
              : el
          ),
        };
      }
    case "QUANTITY_MINUS":
      let minusBasket = state.basket.find((el) => el.id === action.payload.id);
      if (minusBasket) {
        let plus = state.basket.map((el) =>
          el.id === action.payload.id
            ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 }
            : el
        );
        localStorage.setItem("basketBook", JSON.stringify(plus));
        return {
          ...state,
          basket: state.basket.map((el) =>
            el.id === action.payload.id
              ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 }
              : el
          ),
        };
      }
    case "DELETE":
      let del = state.basket.filter((el) => el.id !== action.payload);
      localStorage.setItem("basketBook", JSON.stringify(del));
      return {
        ...state,
        basket: del,
      };
    case "DELETE_ADMIN":
      let delAdmin = state.products.filter((el) => el.id !== action.payload);
      localStorage.setItem("productBook", JSON.stringify(delAdmin));
      return {
        ...state,
        products: delAdmin,
      };
    case "SORT_PRODUCT":
      if ("expensive" === action.payload) {
        let sortPro = state.products.sort((a, b) => b.price - a.price);
        localStorage.setItem("productBook", JSON.stringify(sortPro));
        return { ...state, products: sortPro };
      } else if ("cheap" === action.payload) {
        let sortPro = state.products.sort((a, b) => a.price - b.price);
        localStorage.setItem("productBook", JSON.stringify(sortPro));
        return { ...state, products: sortPro };
      } else if ("a-z" === action.payload) {
        let sortPro = state.products.sort((a, b) =>
          a.title < b.title ? -1 : 1
        );
        localStorage.setItem("productBook", JSON.stringify(sortPro));
        return { ...state, products: sortPro };
      } else if ("z-a" === action.payload) {
        let sortPro = state.products.sort((a, b) =>
          a.title > b.title ? -1 : 1
        );
        localStorage.setItem("productBook", JSON.stringify(sortPro));
        return { ...state, products: sortPro };
      }
    case "VALUTE":
      return {
        ...state,
        changeValute: action.payload,
      };
      case "DARK" :
        return {...state, dark: !state.dark}

    default:
      return state;
  }
};
