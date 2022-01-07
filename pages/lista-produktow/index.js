import Link from "next/link";

const ProductList = () => {
  return (
    <>
      <h1>Lista produktów</h1>
      <ul>
        <li>
          <Link href="/lista-produktow/mydlo-a">Mydło A</Link>
        </li>
        <li>
          <Link href="/lista-produktow/mydlo-b">Mydło B</Link>
        </li>
      </ul>
    </>
  );
};

export default ProductList;
