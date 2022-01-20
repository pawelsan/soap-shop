import Link from "next/link";

const ProductItem = ({ product }) => {
  const { id, name, ingredients, image, price } = product;

  return (
    <div>
      <h3>{name}</h3>
      <span>{ingredients}</span>
      <img src={image} />
      <span>{price}</span>
      <Link href={`/${id}`}>Zobacz szczegóły</Link>
    </div>
  );
};

export default ProductItem;
