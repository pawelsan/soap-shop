import ProductList from "../components/ProductList";

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
    id: 1,
    name: "mydlo 2",
    ingredients: ["ingredient 2"],
    description: "Lorem...",
    image: "",
    price: 10,
  },
];

const HomePage = () => {
  return (
    <>
      <h1>Strona Główna</h1>
      <ProductList products={products} />
    </>
  );
};

export default HomePage;
