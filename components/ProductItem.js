const ProductItem = ({ product }) => {
  const { id, name, ingredients, description, image, price } = product;

  return (
    <div key={product.id}>
      <h3>{name}</h3>
      <span>{ingredients}</span>
      <p>{description}</p>
      <img src={image} />
      <span>{price}</span>
    </div>
  );
};

export default ProductItem;
