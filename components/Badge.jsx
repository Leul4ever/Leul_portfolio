"use client";
import CountUp from "react-countup";
const Badge = ({
  containerStyles,
  icon,
  endCountNum,
  endCountText,
  badgeText,
}) => {
  return (
    <div className={`badge ${containerStyles} backdrop-blur-[10px] bg-white/20 dark:bg-black/30 border border-white/20 dark:border-primary/20 shadow-2xl`}>
      <div className="text-3xl text-primary drop-shadow-sm">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-4xl leading-none font-bold text-primary drop-shadow-sm">
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </div>
        <div className="max-w-[70px] leading-none text-[15px] font-medium text-primary/80">
          {badgeText}
        </div>
      </div>
    </div>
  );
};

export default Badge;
