import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Blocks, Gem, Rocket } from "lucide-react";

const serviceData = [
    {
        icon: <Brain size={72} strokeWidth={0.8} />,
        title: "ML and Generative AI Development",
        header: "Intelligent Solutions",
        description: "Building state-of-the-art Generative AI applications, RAG pipelines, and custom LLM solutions tailored for business automation and insights.",
        color: "from-cyan-500/20 to-cyan-600/20",
        iconColor: "text-cyan-500",
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: "Web Development",
        header: "Full-Stack Excellence",
        description: "Building scalable, secure, and performant web applications using cutting-edge technologies and industry best practices.",
        color: "from-purple-500/20 to-purple-600/20",
        iconColor: "text-purple-500",
    },
    {
        icon: <Gem size={72} strokeWidth={0.8} />,
        title: "App Development",
        header: "Native & Cloud Solutions",
        description: "Developing cross-platform applications with seamless user experiences, backed by robust cloud infrastructure on AWS and Google Cloud.",
        color: "from-emerald-500/20 to-emerald-600/20",
        iconColor: "text-emerald-500",
    },
    {
        icon: <Rocket size={72} strokeWidth={0.8} />,
        title: "Data Science",
        header: "Data-Driven Innovation",
        description: "Transforming complex data into actionable insights through advanced analytics, machine learning, and predictive modeling.",
        color: "from-rose-500/20 to-rose-600/20",
        iconColor: "text-rose-500",
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
                            <div className="flex flex-col h-full">
                                <h3 className="text-2xl font-bold mb-4 text-center">{item.title}</h3>
                                <Card className="w-full h-full hover:shadow-lg transition-all duration-300 bg-gradient-to-br dark:bg-gradient-to-br dark:from-background dark:to-background/80">
                                    <div className="flex flex-col items-center text-center p-6 h-full">
                                        <div className={`${item.color} p-4 rounded-lg mb-4 bg-gradient-to-br`}>
                                            <div className={item.iconColor}>
                                                {item.icon}
                                            </div>
                                        </div>
                                        <p className={`text-lg font-semibold ${item.iconColor} mb-3`}>{item.header}</p>
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