import { ProductPromo, RawData } from "../../../types";

export const setProduct = (product: ProductPromo) => ({
  type: "SET_DETAIL_PRODUCT",
  payload: {
    product,
  },
});

export const addPurchased = (purchased: ProductPromo) => ({
  type: "ADD_PURCHASE",
  payload: {
    purchased,
  },
});

export const addWishlist = (wishList: ProductPromo) => ({
  type: "ADD_WISHLIST",
  payload: {
    wishList,
  },
});

export const removeWishlist = (wishList: ProductPromo) => ({
  type: "REMOVE_WISHLIST",
  payload: {
    wishList,
  },
});

export const setFetchResult = (rawData: RawData) => ({
  type: "SAVE_FETCH_RESULT",
  payload: {
    rawData,
  },
});
