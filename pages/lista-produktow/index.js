import ProductList from "../../components/ProductList";

const products = [
  {
    id: 1,
    name: "mydlo 1",
    ingredients: ["ingredient 1"],
    description: "Lorem...",
    image: "",
    price: 5,
  },
  {
    id: 2,
    name: "mydlo 2",
    ingredients: ["ingredient 2"],
    description: "Lorem...",
    image: "",
    price: 10,
  },
];

const ProductPage = () => {
  return (
    <>
      <h2>Lista produktów</h2>
      <ProductList products={products} />
    </>
  );
};

export default ProductPage;
