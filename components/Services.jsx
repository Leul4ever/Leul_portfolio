'use client';

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Database, Globe, Smartphone, Webhook } from "lucide-react";
import ServiceSlider from "./ServiceSlider";

const serviceData = [
  {
    icon: <Code2 size={28} />,
    title: "Web Development",
    description: "Crafting responsive and dynamic web applications using modern technologies.",
    features: [
      "Frontend Development",
      "Backend Development",
      "API Integration",
      "Performance Optimization",
    ],
  },
  {
    icon: <Smartphone size={28} />,
    title: "Mobile Development",
    description: "Building cross-platform mobile applications with Flutter for iOS and Android.",
    features: [
      "Flutter Development",
      "UI/UX Design",
      "State Management",
      "Native Features Integration",
    ],
  },
  {
    icon: <Database size={28} />,
    title: "Database Design",
    description: "Designing and implementing efficient database solutions for your applications.",
    features: [
      "Database Architecture",
      "Query Optimization",
      "Data Modeling",
      "Security Implementation",
    ],
  },
  {
    icon: <Webhook size={28} />,
    title: "API Development",
    description: "Creating robust and scalable APIs for seamless integration.",
    features: [
      "RESTful APIs",
      "GraphQL",
      "Authentication",
      "Documentation",
    ],
  },
  {
    icon: <Globe size={28} />,
    title: "Cloud Solutions",
    description: "Implementing cloud-based solutions for scalable and reliable applications.",
    features: [
      "AWS Services",
      "Cloud Architecture",
      "DevOps",
      "Security",
    ],
  },
];

const Services = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-16 text-center mx-auto">Professional Services.</h2>
        <ServiceSlider />
      </div>
    </section>
  );
};

export default Services;
