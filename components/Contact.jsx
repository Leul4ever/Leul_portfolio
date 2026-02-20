"use client";
import { HomeIcon, MailIcon, PhoneCall } from "lucide-react";
import Form from "./Form";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
    return (
        <section id="contact" className="py-24 border-t border-white/5">
            <div className="container mx-auto">
                <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
                    <div className="flex flex-col justify-center">
                        <motion.div
                            variants={fadeIn("right", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.2 }}
                            className="flex items-center gap-x-4 text-primary text-lg mb-4"
                        >
                            <span className="w-[30px] h-[2px] bg-primary"></span>
                            Say Hello
                        </motion.div>
                        <motion.h1
                            variants={fadeIn("right", 0.4)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.2 }}
                            className="h1 max-w-md mb-8"
                        >
                            Let's Work Together
                        </motion.h1>
                        <motion.p
                            variants={fadeIn("right", 0.6)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.2 }}
                            className="subtitle max-w-[400px]"
                        >
                            I'm currently available for new projects and collaborations. If you have any questions or want to discuss a project, feel free to reach out.
                        </motion.p>
                    </div>
                    <motion.div
                        variants={fadeIn("left", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.2 }}
                        className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"
                    ></motion.div>
                </div>
                <div className="grid xl:grid-cols-2 mb-24 xl:mb-32 gap-x-12">
                    <motion.div
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.2 }}
                        className="flex flex-col gap-y-4 xl:gap-y-10 mb-12 xl:mb-24 text-base xl:text-lg"
                    >
                        <div className="flex items-center gap-x-8">
                            <MailIcon size={24} className="text-primary" />
                            <div className="text-muted-foreground">leulabera70@gmail.com</div>
                        </div>
                        <div className="flex items-center gap-x-8">
                            <HomeIcon size={24} className="text-primary" />
                            <div className="text-muted-foreground">Addis Ababa, Ethiopia</div>
                        </div>
                        <div className="flex items-center gap-x-8">
                            <PhoneCall size={24} className="text-primary" />
                            <div className="text-muted-foreground">+251 943 366 036</div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("up", 0.4)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.2 }}
                        className="backdrop-blur-[10px] bg-white/5 dark:bg-black/20 p-8 rounded-[30px] border border-white/10 dark:border-primary/10 shadow-2xl"
                    >
                        <Form />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
