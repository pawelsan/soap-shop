import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <Link href="/">
      <a className="mx-auto mb-5 flex flex-wrap flex-col items-center">
        <Image
          src="/images/logo-circle.png"
          width={240}
          height={240}
          alt="logo"
        />
        <h1 className="ml-3 text-3xl sm:text-4xl font-bold tracking-wider uppercase">
          Mydełka Joasi
        </h1>
      </a>
    </Link>
  );
};

export default Hero;
