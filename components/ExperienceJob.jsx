import Image from "next/image";

const ExperienceJob = ({ title, company, descriptions, icon, direction }) => {
  const isLeft = direction === "left";
  return (
    <div className="circle relative overflow-visible flex items-center justify-center h-20 w-20 shrink-0 rounded-full border-2 border-primary bg-background shadow-lg">
      <div className="relative w-12 h-12 flex items-center justify-center">
        <Image width={45} src={icon} height={45} alt={company} className="object-contain" />
      </div>
      <div
        className={`absolute px-6 py-4 z-30 job ${isLeft ? "right-[calc(100%+1.5rem)]" : "left-[calc(100%+1.5rem)]"
          } text-left items-start bg-secondary/90 dark:bg-secondary backdrop-blur-md rounded-[20px] w-[35vw] min-w-[280px] border border-border shadow-xl flex flex-col`}
      >
        <h3 className="text-xl xl:text-2xl font-extrabold text-foreground">{title}</h3>
        <h5 className="mt-1 text-primary font-bold text-sm xl:text-base">{company}</h5>
        <ul className="mt-4 list-disc pl-4 space-y-1 text-sm xl:text-base leading-snug text-muted-foreground">
          {descriptions.map((description, index) => (
            <li key={index}>{description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};



export default ExperienceJob;
