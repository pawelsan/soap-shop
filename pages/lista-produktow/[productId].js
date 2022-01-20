import { useRouter } from "next/router";
import ProductDetail from "../../components/ProductDetail";

const product = {
  id: 2,
  name: "mydlo 2",
  ingredients: ["ingredient 2"],
  description: "Lorem...",
  image: "",
  price: 10,
};

const ProductDetailPage = () => {
  const router = useRouter();

  console.log(router.query.productId);

  return <ProductDetail product={product} />;
};

export default ProductDetailPage;
