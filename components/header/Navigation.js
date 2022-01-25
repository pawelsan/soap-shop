import NavItem from "./NavItem";

const Navigation = () => {
  const navItemData = [
    { href: "/", text: "Strona główna" },
    { href: "/lista-produktow", text: "Galeria produktów" },
    { href: "/koszyk", text: "Koszyk" },
  ];

  const navItemList = navItemData.map((navItem) => (
    <NavItem key={navItem.href} href={navItem.href} text={navItem.text} />
  ));

  return (
    <nav className="bg-black/[.6] flex flex-wrap flex-col sm:flex-row py-5 md:pr-14 justify-around">
      {navItemList}
    </nav>
  );
};

export default Navigation;
