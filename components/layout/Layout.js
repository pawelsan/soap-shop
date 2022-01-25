import Header from "../header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container mx-auto my-7 p-5">{children}</main>
    </>
  );
};

export default Layout;
