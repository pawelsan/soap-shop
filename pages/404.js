import Link from "next/link";
import Image from "next/image";
import { H2 } from "../components/styled";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <Image src="/images/logo-circle.png" width={100} height={100} />
      <H2 className="text-4xl my-5">Ups...</H2>
      <h3 className="text-3xl text-gray-400">
        Strona o podanym adresie nie istnieje.
      </h3>
    </div>
  );
};

export default PageNotFound;
