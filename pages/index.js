import Image from "next/image";
import { H2, Paragraph } from "../components/styled";

const HomePage = () => {
  return (
    <>
      <H2>O Mydełkach Joasi</H2>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illum
        rem amet et quis quam, voluptatibus iusto accusamus error qui!
      </Paragraph>
      <div className="flex flex-col items-center">
        <Image src="/images/home-2.jpg" width={1024} height={559} />
      </div>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illum
        rem amet et quis quam, voluptatibus iusto accusamus error qui!
      </Paragraph>
      <div className="flex flex-col items-center">
        <Image src="/images/home.jpg" width={1024} height={614} />
      </div>
    </>
  );
};

export default HomePage;
