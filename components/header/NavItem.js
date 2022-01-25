import Link from "next/link";

const NavItem = ({ text, href }) => {
  return (
    <Link href={href}>
      <a className="text-lg font-medium hover:bg-slate-700 uppercase text-center px-2 py-2 sm: py-0">
        {text}
      </a>
    </Link>
  );
};

export default NavItem;
