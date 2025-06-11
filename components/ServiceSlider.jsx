import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Blocks, GanttChartSquare, Gem, Rocket } from "lucide-react";

const serviceData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: "Web Design",
        header: "Crafting Digital Experiences",
        description: "Creating intuitive, responsive, and visually stunning websites that engage users and drive results. Every pixel is placed with purpose.",
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: "Web Development",
        header: "Full-Stack Excellence",
        description: "Building scalable, secure, and performant web applications using cutting-edge technologies and industry best practices.",
    },
    {
        icon: <Gem size={72} strokeWidth={0.8} />,
        title: "App Development",
        header: "Native & Cloud Solutions",
        description: "Developing cross-platform applications with seamless user experiences, backed by robust cloud infrastructure on AWS and Google Cloud.",
    },
    {
        icon: <Rocket size={72} strokeWidth={0.8} />,
        title: "Data Science",
        header: "Data-Driven Innovation",
        description: "Transforming complex data into actionable insights through advanced analytics, machine learning, and predictive modeling.",
    },
];

const ServiceSlider = () => {
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {serviceData.map((item, index) => {
                    return (
                        <motion.div
                            key={index}
                            variants={fadeIn("up", 0.2 * index)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="w-full"
                        >
                            <div className="flex flex-col">
                                <h3 className="text-2xl font-bold mb-4 text-center">{item.title}</h3>
                                <Card className="w-full h-full hover:shadow-lg transition-all duration-300">
                                    <div className="flex flex-col items-center text-center p-6">
                                        <div className="text-primary bg-primary/10 p-4 rounded-lg mb-4">
                                            {item.icon}
                                        </div>
                                        <p className="text-lg font-semibold text-primary mb-3">{item.header}</p>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                                    </div>
                                </Card>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default ServiceSlider; 