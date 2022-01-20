import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  const list = products.map((product) => <ProductItem product={product} />);
  return <ul>{list}</ul>;
};

export default ProductList;
