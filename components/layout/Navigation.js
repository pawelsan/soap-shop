import Link from "next/link";

const Navigation = () => {
  return (
    <header>
      <h1>Mydełka Joasi</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">Stona główna</Link>
          </li>
          <li>
            <Link href="/lista-produktow">Stona produktów</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
