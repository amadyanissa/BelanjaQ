import axios from "axios";
import { useEffect, useState } from "react";
export interface IData {
  category: {
    imageUrl: string;
    id: number;
    name: string;
  }[];
  productPromo: {
    id: string;
    imageUrl: string;
    title: string;
    description: string;
    price: string;
    loved: number;
  };
}
export default function useGetData() {
  const [data, setData] = useState<IData>();
  useEffect(() => {
    axios
      .get("https://private-4639ce-ecommerce56.apiary-mock.com/home")
      .then((result) => {
        setData(result.data[0].data);
      });
  }, []);
  return data;
}
