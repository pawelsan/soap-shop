import { useRouter } from "next/router";

const ProductItem = () => {
  const router = useRouter();

  console.log(router.query.productId);

  return <h1>Produkt</h1>;
};

export default ProductItem;
