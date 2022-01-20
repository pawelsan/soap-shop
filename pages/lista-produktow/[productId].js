import ProductDetail from "../../components/ProductDetail";

const dummyProducts = [
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

const ProductDetailPage = ({ product }) => {
  console.log(product);

  return <ProductDetail product={product} />;
};

export async function getStaticPaths() {
  const paths = [];
  dummyProducts.forEach((product) =>
    paths.push({
      params: {
        productId: product.id.toString(),
      },
    })
  );

  return {
    fallback: false,
    paths: paths,
  };
}

export async function getStaticProps(context) {
  // get the id from url
  const productId = context.params.productId;

  const product = dummyProducts.find((product) => product.id == productId);

  return {
    props: {
      product: product,
    },
  };
}

export default ProductDetailPage;
