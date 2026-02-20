import Socials from "@/components/Socials";

function Footer(props) {
  return (
    <footer className="bg-secondary/80 backdrop-blur-md py-8 border-t border-white/5 mt-auto">
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-muted-foreground text-sm font-medium tracking-wider">
          Copyright &copy; Leul Abera. All rights reserved. {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
