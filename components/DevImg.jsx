import Image from "next/image";

const DevImg = ({ containerStyles, imgSource }) => {
  return (
    <div className={`${containerStyles} rounded-full overflow-hidden`}>
      <Image src={imgSource} fill priority alt="Leul Img" className="object-cover" />
    </div>
  );
};

export default DevImg;
