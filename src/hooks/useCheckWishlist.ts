import { useSelector } from "react-redux";

export default function useCheckWishList(id) {
  const wishlist = useSelector((state) => state.detailProductReducer.wishlist);
  let wished = false;
  wishlist.map((el) => {
    if (el.wishList.id == id) {
      wished = true;
    }
  });
  return { wished };
}
