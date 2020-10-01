export type RawData = {
  category: Category[];
  productPromo: ProductPromo[];
};

export type Category = {
  imageUrl: string;
  id: number;
  name: string;
};

export type ProductPromo = {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  price: string;
  loved: number;
};

export type MetaTagsData = {
  title: string;
  description: string;
  hrefLang: HrefLang;
  robots: string;
};
