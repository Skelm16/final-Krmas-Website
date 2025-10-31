import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { particlesConfig } from "@/lib/particlesConfig";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Code,
  Zap,
  Video,
  MessageSquare,
  ChevronDown,
  Brain,
  Image,
  Cpu,
  Globe,
  Sparkles,
} from "lucide-react";

type SkillCardProps = {
  skill: {
    icon: React.ElementType;
    title: string;
    description: string;
    color: string;
  };
  index: number;
};

const SkillCard = ({ skill, index }: SkillCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <Card className="bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
          <CollapsibleTrigger className="w-full">
            <div className="p-6 flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-4 flex-1">
                <Icon
                  className={`w-8 h-8 ${skill.color} transition-transform group-hover:scale-110`}
                />
                <h3 className="text-xl font-bold text-left">{skill.title}</h3>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
            <div className="px-6 pb-6 pt-0">
              <p className="text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </div>
          </CollapsibleContent>
        </Card>
      </Collapsible>
    </motion.div>
  );
};

type ProjectCardProps = {
  project: {
    title: string;
    description: string;
  };
  index: number;
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <Card className="bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
          <CollapsibleTrigger className="w-full">
            <div className="p-6 flex items-center justify-between group cursor-pointer">
              <h3 className="text-xl font-bold text-left pr-4">{project.title}</h3>
              <ChevronDown
                className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
            <div className="px-6 pb-6 pt-0">
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>
          </CollapsibleContent>
        </Card>
      </Collapsible>
    </motion.div>
  );
};

const AboutMe = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const loadParticles = async () => {
      // Wait for tsParticles CDN to load
      let attempts = 0;
      const maxAttempts = 10;
      
      const checkAndLoad = () => {
        if ((window as any).tsParticles) {
          (window as any).tsParticles
            .load("particles-aboutme", particlesConfig)
            .catch((error: any) => {
              console.warn("Failed to load particles:", error);
            });
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(checkAndLoad, 100);
        } else {
          console.warn(
            "tsParticles CDN not loaded after retries. Check network connection.",
          );
        }
      };

      checkAndLoad();
    };

    loadParticles();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="section-container">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => navigate("/")}
              className="text-2xl font-bold tracking-tight hover:text-primary transition-colors"
            >
              KRMAS
            </button>
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => navigate("/")}
                className="hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => {
                  navigate("/");
                  setTimeout(() => scrollToSection("services"), 100);
                }}
                className="hover:text-primary transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => {
                  navigate("/");
                  setTimeout(() => scrollToSection("portfolio"), 100);
                }}
                className="hover:text-primary transition-colors"
              >
                Portfolio
              </button>
              <Button
                size="sm"
                variant="secondary"
                asChild
                className="bg-white text-black hover:bg-gray-100"
              >
                <a
                  href="https://wa.me/919445582870"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Let's Talk
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        <div id="particles-aboutme" className="absolute inset-0 z-0 pointer-events-none"></div>
        <div className="hero-gradient absolute inset-0 z-10 pointer-events-none"></div>
        <div className="section-container relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
                Full-Stack Developer
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
                & AI Automation Engineer
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto"
            >
              Building the future, one automation at a time
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about-me" className="relative z-20 min-h-[600px] flex items-center bg-background">
        <div className="relative z-10 px-6 md:px-12 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-foreground text-left">
              About Me
            </h2>
            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-foreground text-left">
              <p>
                I'm Krish Sriram — a 19-year-old full-stack developer and AI automation engineer.
              </p>
              <p>
                I build websites, AI agents, chatbots, automations, and complete business systems end-to-end.
              </p>
              <p>
                I understand how computer systems work deeply and can fix, optimize, or build almost anything — from software to digital infrastructure.
              </p>
              <p>
                I also handle creative work like video editing, photo editing, and crafting AI-powered visual content.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Grid */}
      <section id="skills" className="relative z-20 section-padding bg-secondary/10">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills</h2>
            <p className="text-xl text-muted-foreground">
              Technologies and tools I work with
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Code,
                title: "Full-Stack Web Development",
                description:
                  "I build complete websites end-to-end (frontend, backend, databases, deployment). Supports both 2D & 3D interactive interfaces depending on project needs.",
                color: "text-blue-400",
              },
              {
                icon: Globe,
                title: "Websites",
                description:
                  "I create 2D and 3D interactive websites including e-commerce platforms, landing pages, and dynamic web experiences tailored to your business needs.",
                color: "text-indigo-400",
              },
              {
                icon: Zap,
                title: "AI Agents & Automation",
                description:
                  "I build fully automated systems using n8n/Make, AI voice agents, scheduling bots, AI receptionists, and workflow automation for businesses.",
                color: "text-purple-400",
              },
              {
                icon: Sparkles,
                title: "AI Tools Mastery",
                description:
                  "I work with cutting-edge AI tools to generate video content, code, and business solutions. Proficient with Sora 2, video generation models, and advanced AI platforms for content creation and automation.",
                color: "text-violet-400",
              },
              {
                icon: MessageSquare,
                title: "Chatbots for Businesses",
                description:
                  "WhatsApp / Instagram / Facebook / Website chatbots that auto-reply to DMs, generate leads, answer FAQs, take orders & more.",
                color: "text-emerald-400",
              },
              {
                icon: Video,
                title: "Video Editing (Premiere / AE)",
                description:
                  "High-quality Faceless content, reels, ads & cinematic visuals.",
                color: "text-red-400",
              },
              {
                icon: Image,
                title: "Photo Editing & Brand Visuals",
                description:
                  "Color-grading, product retouching, poster/banner design, and creative direction for e-commerce brands.",
                color: "text-pink-400",
              },
              {
                icon: Cpu,
                title: "Computer Systems",
                description:
                  "I can fix and optimize most computer issues — software, hardware, performance, networking, OS issues.",
                color: "text-cyan-400",
              },
            ].map((skill, index) => (
              <SkillCard key={skill.title} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-20 section-padding">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
            <p className="text-xl text-muted-foreground">
              Real-world solutions I've built
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Android Local Minecraft Server",
                description:
                  "A locally hosted Minecraft server running fully on Android hardware, configured for stable multiplayer performance.",
              },
              {
                title: "Airline Registration System",
                description:
                  "A complete airline ticket booking system built with backend automation and email ticket delivery.",
              },
              {
                title: "Event Management Website",
                description:
                  "A dynamic website with database storage for event registrations and form submissions.",
              },
              {
                title: "BMI Health System",
                description:
                  "A BMI calculator that generated lifestyle and health recommendations based on calculated BMI.",
              },
              {
                title: "Theramies.com",
                description:
                  "A full multi-category e-commerce website selling jewelry, bath accessories, chains, rings, bangles, and more.",
              },
              {
                title: "TheGhatsharvest.com",
                description:
                  "A full e-commerce fruits & vegetables website with product listings, cart system, and order handling.",
              },
              {
                title: "KannirukAssociates.com",
                description:
                  "A professional services website built to showcase consulting information.",
              },
              {
                title: "MSKTravel.in",
                description:
                  "A complete travel agency website featuring trip listings, inquiry forms, and lead capture.",
              },
              {
                title: "KrmasAI.com",
                description:
                  "My personal portfolio and agency website showcasing AI automation and development services.",
              },
              {
                title: "AI Receptionist System",
                description:
                  "A fully automated voice agent that handles calls, books appointments, takes orders, and manages customer interactions without human input.",
              },
            ].map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 bg-secondary/30 border-t border-border py-12">
        <div className="section-container text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-3xl font-bold hover:text-primary transition-colors duration-300 cursor-default"
          >
            Always building. Always learning. Always creating.
          </motion.p>
        </div>
      </footer>
    </div>
  );
};

export default AboutMe;

