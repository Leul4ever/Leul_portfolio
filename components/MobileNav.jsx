import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { AlignJustify } from "lucide-react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Socials from "./Socials";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer " />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8 ">
          <div className="flex flex-col items-center gap-y-36">
            <Logo />
            <Navbar
              containerStyles={"flex flex-col items-center gap-y-6"}
              linkStyles={"text-2xl"}
            />
          </div>
          <Socials containerStyles={"flex gap-x-4"} iconStyles={"text-2xl"} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
