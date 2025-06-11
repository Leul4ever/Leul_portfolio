import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap, TrophyIcon, AwardIcon } from "lucide-react";
import Paragraph from "./ui/paragraph";
import StarsCanvas from "./StarBackground";

const infoData = [
    {
        icon: <Briefcase size={28} />,
        text: "Full Stack Developer",
    },
    {
        icon: <GraduationCap size={28} />,
        text: "BSc in Computer Science",
    },
    {
        icon: <TrophyIcon size={28} />,
        text: "Huawei National Cloud-AI Track Winner",
    },
    {
        icon: <AwardIcon size={28} />,
        text: "ALX Software Engineering Graduate",
    },
];

const qualificationData = {
    experience: {
        title: "Experience",
        data: [
            {
                company: "Insa",
                role: "Software Application Developer",
                years: "2025 - Present",
            },
            {
                company: "Freelance",
                role: "Full Stack Mobile App and Web Developer",
                years: "2022 - Present",
            },
        ],
    },
    education: {
        title: "Education",
        data: [
            {
                university: "ALX",
                qualification: "Software Engineering",
                grade: "Distinction",
                years: "2023 - 2024",
            },
            {
                university: "Arba Minch University",
                qualification: "BSc in Software Engineering",
                grade: "First Class",
                years: "2019 - 2024",
            },
        ],
    },
};

const achievements = {
    "Awards and Winings": {
        title: "Awards and Winings",
        data: [
            {
                competition: "Huawei National Cloud-AI Track",
                ranking: "1st place",
                url: "https://example.com/huawei",
            },
        ],
    },
    "Licenses & Certifications": {
        title: "Licenses & Certifications",
        data: [
            {
                name: "ALX Software Engineering Programme",
                issued: "12th April 2024",
                skill: "Back-end Development",
                links: "https://example.com/alx",
            },
            {
                name: "Huawei Competition",
                issued: "2023",
                skill: "Cloud & AI",
                links: "https://example.com/huawei",
            },
        ],
    },
};

const getData = (data, category) => {
    return data[category];
};

const About = () => {
    return (
        <>
            <section className="flex flex-col xl:flex-row">
                <div className={`relative xl:flex mt-0 xl:w-[50%]`}>
                    <section className="flex flex-col h-[30rem] w-[30rem] pt-0 justify-start mx-auto xl:mx-0 xl:w-[650px] xl:h-[500px] gap-x-10">
                        <div className="mt-38 ml-32 absolute">
                            <Image
                                src="/about/Meh.svg"
                                alt="Profile"
                                width={180}
                                height={450}
                                className="hidden xl:flex w-[180px] h-[450px] z-10 relative bg-no-repeat bg-bottom"
                            />
                        </div>
                        <Paragraph className="mt-72 text-center xl:ml-64 font-sans absolute">
                            The best way to predict your future is to create it.
                            <br />
                            <span className="text-[#915EFF] text-end">- Abraham Lincoln</span>
                        </Paragraph>
                    </section>
                </div>
                <section className="xl:h-[680px] xl:w-[50%] pb-12 xl:pt-32 xl:mx-0">
                    <div className="container mx-auto">
                        <h2 className="section-title mb-8">About Me.</h2>
                        <div className="container mx-auto">
                            <Tabs defaultValue="qualifications">
                                <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border border-none dark:border-none mt-16 xl:mt-0">
                                    <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                                        Personal
                                    </TabsTrigger>
                                    <TabsTrigger className="w-[162px] xl:w-auto" value="qualifications">
                                        Qualifications
                                    </TabsTrigger>
                                    <TabsTrigger className="w-[162px] xl:w-auto" value="achievements">
                                        Achievements
                                    </TabsTrigger>
                                </TabsList>
                                <div className="text-lg mt-12 xl:mt-8">
                                    <TabsContent value="personal">
                                        <div className="text-center xl:text-left">
                                            <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                                {infoData.map((item, index) => {
                                                    return (
                                                        <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                                                            <div className="text-primary">{item.icon}</div>
                                                            <div>{item.text}</div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                            <div className="flex flex-col gap-y-2">
                                                <div className="text-primary">Language Skill</div>
                                                <div className="border-b border-border"></div>
                                                <div>English, Amharic</div>
                                            </div>
                                        </div>
                                    </TabsContent>
                                    <TabsContent value="qualifications">
                                        <div>
                                            <div className="grid md:grid-cols-2 gap-y-8">
                                                <div className="flex flex-col gap-y-6">
                                                    <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                        <Briefcase />
                                                        <h4 className="capitalize font-medium">
                                                            {getData(qualificationData, "experience").title}
                                                        </h4>
                                                    </div>
                                                    <div className="flex flex-col gap-y-8">
                                                        {getData(qualificationData, "experience").data.map((item, index) => {
                                                            const { company, role, years } = item;
                                                            return (
                                                                <div className="flex gap-x-8 group" key={index}>
                                                                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                        <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                                    </div>
                                                                    <div>
                                                                        <div className="font-semibold text-xl leading-none mb-2">
                                                                            {company}
                                                                        </div>
                                                                        <div className="text-lg leading-none text-muted-foreground mb-4">
                                                                            {role}
                                                                        </div>
                                                                        <div className="text-base font-medium">{years}</div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-y-6">
                                                    <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                        <GraduationCap size={28} />
                                                        <h4 className="capitalize font-medium">
                                                            {getData(qualificationData, "education").title}
                                                        </h4>
                                                    </div>
                                                    <div className="flex flex-col gap-y-8">
                                                        {getData(qualificationData, "education").data.map((item, index) => {
                                                            const { university, qualification, grade, years } = item;
                                                            return (
                                                                <div className="flex gap-x-8 group" key={index}>
                                                                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                        <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                                    </div>
                                                                    <div>
                                                                        <div className="font-semibold text-xl leading-none mb-2">
                                                                            {university}
                                                                        </div>
                                                                        <div className="text-lg leading-none text-muted-foreground mb-2">
                                                                            {qualification}
                                                                        </div>
                                                                        <div className="text-lg leading-none text-muted-foreground mb-4">
                                                                            {`Grade: ${grade}`}
                                                                        </div>
                                                                        <div className="text-base font-medium">{years}</div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TabsContent>
                                    <TabsContent value="achievements">
                                        <div>
                                            <div className="grid md:grid-cols-2 gap-y-8">
                                                <div className="flex flex-col gap-y-6">
                                                    <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                        <TrophyIcon />
                                                        <h4 className="capitalize font-medium">
                                                            {getData(achievements, "Awards and Winings").title}
                                                        </h4>
                                                    </div>
                                                    <div className="flex flex-col gap-y-8">
                                                        {getData(achievements, "Awards and Winings").data.map((item, index) => {
                                                            const { competition, ranking, url } = item;
                                                            return (
                                                                <div className="flex gap-x-8 group" key={index}>
                                                                    <div className="h-[80px] w-[1px] bg-border relative ml-2">
                                                                        <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[76px] transition-all duration-500"></div>
                                                                    </div>
                                                                    <div>
                                                                        <div className="font-semibold text-xl leading-none mb-2">
                                                                            {competition}
                                                                        </div>
                                                                        <div className="flex gap-x-8">
                                                                            <div className="text-lg leading-none text-muted-foreground">
                                                                                <Badge className="uppercase text-sm font-medium">
                                                                                    {ranking}
                                                                                </Badge>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-y-6">
                                                    <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                        <AwardIcon size={28} />
                                                        <h4 className="capitalize font-medium">
                                                            {getData(achievements, "Licenses & Certifications").title}
                                                        </h4>
                                                    </div>
                                                    <div className="flex flex-col gap-y-4">
                                                        {getData(achievements, "Licenses & Certifications").data.map((item, index) => {
                                                            const { name, issued, skill, links } = item;
                                                            return (
                                                                <div className="flex gap-x-8 group" key={index}>
                                                                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                        <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                                    </div>
                                                                    <div>
                                                                        <div className="font-semibold text-xl leading-none mb-2">
                                                                            {name}
                                                                        </div>
                                                                        <div className="text-lg leading-none text-muted-foreground mb-2">
                                                                            {issued}
                                                                        </div>
                                                                        <div>
                                                                            <div className="text-lg leading-none text-muted-foreground">
                                                                                <Badge className="uppercase text-sm font-medium">
                                                                                    {skill}
                                                                                </Badge>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TabsContent>
                                </div>
                            </Tabs>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
};

export default About; 