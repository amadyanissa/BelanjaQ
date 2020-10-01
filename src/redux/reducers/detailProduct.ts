const initialState = {
  product: {
    id: "",
    imageUrl: "",
    title: "",
    description: "",
    price: "",
    loved: 0,
  },
  purchased: [],
  wishlist: [],
  rawData: [],
};

const detailProductReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "SET_DETAIL_PRODUCT":
      return {
        ...state,
        product: { ...actions.payload },
      };
    case "ADD_PURCHASE":
      return { ...state, purchased: [...state.purchased, actions.payload] };
    case "ADD_WISHLIST":
      return { ...state, wishlist: [...state.wishlist, actions.payload] };
    case "REMOVE_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter((el) => {
          return el.wishList.id !== actions.payload.wishList.id;
        }),
      };
    case "SAVE_FETCH_RESULT":
      if (state.rawData.length == 0) {
        return {
          ...state,
          rawData: [...state.rawData, actions.payload.rawData.productPromo],
        };
      }
    default:
      return state;
  }
};

export default detailProductReducer;
