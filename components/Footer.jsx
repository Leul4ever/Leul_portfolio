import Socials from "@/components/Socials";

function Footer(props) {
  return (
    <footer className="bg-secondary py-12">
      <div className="flex flex-col justify-between items-center">
        <Socials
          containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
          iconsStyles="text-primary text-white/70 dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all"
        />
        <div className="text-muted-foreground">
          Copyright &copy; Leul Abera. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
