import Hero from "./Hero";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="h-full bg-[url('/images/banner.jpg')] bg-center h-96 text-gray-100 shadow w-full">
      <div className="container mx-auto flex flex-wrap p-5 flex-col">
        <Hero />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
