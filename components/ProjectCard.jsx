import { Card, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";
import { useToast } from "./ui/use-toast";

function ProjectCard({ project }) {
  const { toast } = useToast();

  const handleRequest = (e) => {
    toast({
      title: "Request access permission",
      description: "Redirecting you to the contact section to request GitHub access.",
      duration: 5000,
    });
    // Scroll to contact section
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Card className="group overflow-hidden relative backdrop-blur-[10px] bg-white/5 dark:bg-black/20 border border-white/20 dark:border-primary/20 shadow-2xl transition-all duration-500 hover:border-primary/50 hover:shadow-primary/20">
      <CardHeader className="p-0">
        <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:bg-[110%] xl:dark:bg-work_project_bg_dark xl:bg-no-repeat overflow-hidden transition-all duration-500">
          <div className="relative w-[80%] h-[90%] transition-transform duration-500 group-hover:scale-105">
            <Image
              src={project.image}
              fill
              className="object-contain drop-shadow-2xl"
              priority
              alt="img"
            />
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleRequest}
              className="bg-primary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 hover:bg-secondary group/link text-primary-foreground"
              title="Request GitHub Access"
            >
              <Github />
            </button>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-4 absolute top-4 left-5 backdrop-blur-[10px] bg-primary/20 text-primary border border-primary/20">
          {project.category}
        </Badge>
        <h4 className="h4 mb-2 text-primary group-hover:text-accent transition-colors duration-300">
          {project.name}
        </h4>
        <p className="text-muted-foreground text-lg leading-relaxed">
          {project.description}
        </p>
      </div>
      {/* Accent line at the bottom */}
      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full" />
    </Card>
  );
}

export default ProjectCard;
