import Link from "next/link";

const Navigation = () => {
  return (
    <header>
      <div>Mydełka Joasi</div>
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
