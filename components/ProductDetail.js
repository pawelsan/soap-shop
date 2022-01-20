const ProductDetail = ({ product }) => {
  const { image, name, ingredients, description } = product;

  return (
    <>
      <img src={image} alt="" />
      <h1>{name}</h1>
      <h2>{ingredients}</h2>
      <p>{description}</p>
    </>
  );
};

export default ProductDetail;
