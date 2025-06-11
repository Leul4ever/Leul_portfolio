import Image from "next/image";

const ExperienceJob = ({ title, company, descriptions, icon, direction }) => {
  return (
    <div className="circle relative overflow-visible flex items-center justify-center h-28 w-full rounded-full border-2 border-white">
      <Image width={60} src={icon} height={60} alt="" />
      <div
        className={`absolute px-10 py-8 z-30 job ${direction} bg-gradient-to-r from-blueOne via-blueTwo to-blueThree rounded-[25px] w-[50vw]`}
      >
        <h3 className="text-3xl font-extrabold">{title}</h3>
        <h5 className="mt-2 text-[#905EFF] font-extrabold">{company}</h5>
        <ul className="mt-6 list-disc space-y-4 text-lg leading-9">
          {descriptions.map((description, index) => (
            <li key={index}>{description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceJob;
