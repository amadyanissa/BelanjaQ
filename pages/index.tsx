import { GetServerSideProps } from "next";
import Layout from "../src/layout/layout";
import fetch from "node-fetch";
import styles from "../styles/home.module.sass";
import { RawData } from "../types";
import Categories from "../src/components/category";
import Product from "../src/components/product";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProduct, setFetchResult } from "../src/redux/actions/detailProduct";
import { useEffect } from "react";
import { useRouter } from "next/router";
import {
  addWishlist,
  removeWishlist,
} from "../src/redux/actions/detailProduct";
interface IHomeProps {
  data: RawData;
}
export default function Home(props: IHomeProps) {
  const dispatch = useDispatch();
  const Router = useRouter();
  useEffect(() => {
    if (!localStorage.accessToken) {
      void Router.push("/login", undefined, { shallow: true });
    }
    dispatch(setFetchResult(props.data));
    props.data.productPromo.map((data) => {
      if (data.loved) {
        dispatch(addWishlist(data));
      }
    });
  }, []);
  return (
    <Layout onChange={() => {}}>
      <div className={styles.container}>
        <Categories category={props.data.category} />
        {props.data.productPromo.map((product) => {
          return (
            <div
              onClick={() => {
                dispatch(setProduct(product));
              }}
              key={product?.id}
            >
              <Product product={product} />;
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
export const getServerSideProps: GetServerSideProps<IHomeProps> = async () => {
  let data = await axios(
    "https://private-4639ce-ecommerce56.apiary-mock.com/home"
  );
  return {
    props: {
      data: data.data[0].data,
    },
  };
};
