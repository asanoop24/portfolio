"use client";
import { motion } from "framer-motion";
import { IconBrandPython, IconBrain, IconDatabase, IconBrandOpenai, IconDashboard, IconCloud, IconBrandGithub, IconBrandTwitter, IconBrandLinkedin, IconMail } from "@tabler/icons-react";
import SkillCard from "@/components/SkillCard";
import ProjectCard from "@/components/ProjectCard";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      setIsScrolled(show);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    try {
      const section = document.getElementById(sectionId);
      if (section) {
        const navHeight = 80;
        const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: sectionTop - navHeight,
          behavior: 'smooth'
        });
      }
    } catch (error) {
      console.warn('Error scrolling to section:', error);
    }
  };

  return (
    <main className="min-h-screen bg-neutral-950">
      {/* Enhanced Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-neutral-950" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(255 255 255 / 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(255 255 255 / 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        </div>

      <div className="relative">
        {/* Navigation remains the same */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={`fixed w-full z-50 transition-all duration-300 ${
            isScrolled ? 'bg-neutral-950/90 backdrop-blur-sm' : ''
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <motion.span 
                className="font-mono text-xl text-neutral-200"
                whileHover={{ scale: 1.05 }}
              >
                <div className="logo">
                  <Image width={48} height={48} src="favicon.svg" alt="Logo" />
                </div>
              </motion.span>
              <div className="flex space-x-12">
                {['skills', 'projects', 'contact'].map((section) => (
                  <motion.button
                    key={section}
                    whileHover={{ scale: 1.05 }}
                    className="text-sm font-mono text-neutral-400 hover:text-neutral-200 transition-colors"
                    onClick={() => scrollToSection(section)}
                  >
                    {section}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Enhanced Hero Section */}
        <section className="relative min-h-screen">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 lg:pt-40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="lg:sticky lg:top-32 lg:self-start space-y-8"
              >
                <div>
                  <motion.p 
                    className="text-neutral-400 font-mono mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    Hello, I&apos;m
                  </motion.p>
                  <motion.h1 
                    className="text-5xl lg:text-7xl font-bold text-neutral-200 font-mono tracking-tighter"
                    whileHover={{ scale: 1.02 }}
                  >
                    Anoop Sharma
                  </motion.h1>
                </div>

                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-xl lg:text-2xl text-neutral-400 font-mono">Staff ML Engineer</p>
                  <p className="text-neutral-500 font-mono">Based in Bangalore, India</p>
                </motion.div>

                <motion.div 
                  className="flex space-x-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <SocialLink href="https://github.com/asanoop24" icon={<IconBrandGithub />} />
                  <SocialLink href="https://twitter.com/asanoop24" icon={<IconBrandTwitter />} />
                  <SocialLink href="https://linkedin.com/in/asanoop24" icon={<IconBrandLinkedin />} />
                  <SocialLink href="mailto:asanoop24@gmail.com" icon={<IconMail />} />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="lg:pt-32 space-y-12"
              >
                <div className="space-y-6">
                  <p className="text-lg lg:text-xl text-neutral-400 leading-relaxed font-sans">
                    Building production-grade solutions in Natural Language Processing and Computer Vision, with a focus on LLMs and enterprise applications
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["Python", "PyTorch", "TensorFlow", "LangChain", "OpenAI", "FastAPI"].map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="px-3 py-1 bg-neutral-900 text-neutral-400 text-sm font-mono rounded-full"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-neutral-400 font-mono text-sm">CURRENTLY WORKING ON</p>
                    <p className="text-neutral-300 font-sans">
                      Developing an end-to-end MLOps platform for enterprise LLM applications
                    </p>
                  </div>
                  <motion.button 
                    onClick={() => scrollToSection('projects')}
                    className="inline-flex items-center space-x-2 text-sm font-mono text-neutral-300 hover:text-neutral-200 transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    <span>View All Projects</span>
                    <span className="font-sans">→</span>
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="relative py-32 lg:py-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="max-w-2xl"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-200 font-mono tracking-tight mb-4">Technical Expertise</h2>
              <p className="text-neutral-400 mb-16">
                11 years of experience in ML/AI technologies and production deployments
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <SkillCard
                icon={<IconBrandPython className="w-10 h-10" />}
                title="Core Technologies"
                description="Python, SQL, ReactJS, PyTorch, Scikit-learn, HuggingFace Transformers"
              />
              <SkillCard
                icon={<IconBrain className="w-10 h-10" />}
                title="Computer Vision"
                description="Vision Transformers (Donut, LayoutLM, DiT), CNNs, OpenCV"
              />
              <SkillCard
                icon={<IconBrandOpenai className="w-10 h-10" />}
                title="Natural Language Processing"
                description="BERT, RoBERTa, BART, GPT-3.5/4, LangChain, Semantic Search"
              />
              <SkillCard
                icon={<IconCloud className="w-10 h-10" />}
                title="MLOps & Cloud"
                description="Dagster, MLFlow, FastAPI, Docker, Kubernetes, Azure, GCP"
              />
              <SkillCard
                icon={<IconDatabase className="w-10 h-10" />}
                title="Databases"
                description="PostgreSQL, MySQL, SQL Server, Qdrant, Chroma, Weaviate"
              />
              <SkillCard
                icon={<IconDashboard className="w-10 h-10" />}
                title="Business Intelligence"
                description="Power BI, Tableau, Qlik Sense, Excel"
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative py-32 lg:py-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="max-w-2xl mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-200 font-mono tracking-tight mb-4">Featured Projects</h2>
              <p className="text-neutral-400">
                Key achievements and impactful solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <ProjectCard
                title="Planogram Optimization"
                description="Leading the development of a solution using Genetic Algorithms to optimize product placement and assortment in retail stores, maximizing sales through optimal product mix and positioning."
                tags={["Genetic Algorithms", "Optimization", "Python", "Retail Analytics"]}
              />
              <ProjectCard
                title="Intelligent Document Processing"
                description="Developed an automated multi-page claim classification solution achieving 95% page-level and 99% claim-level accuracy using vision and language models."
                tags={["Computer Vision", "NLP", "Deep Learning", "OCR"]}
              />
              <ProjectCard
                title="Generative AI QA System"
                description="Implemented a GPT-powered solution to automate QA process for customer chat interactions, including PII redaction and intelligent classification."
                tags={["GPT-4", "LLMs", "Privacy", "Classification"]}
              />
              <ProjectCard
                title="News Monitoring System"
                description="Architected a solution for predicting external factors' impact on operational metrics using web scraping, Seq2Seq models, and automated workflows."
                tags={["Seq2Seq", "NLP", "Web Scraping", "Dagster"]}
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative py-32 lg:py-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="lg:sticky lg:top-32 lg:self-start"
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-neutral-200 font-mono tracking-tight mb-4">Get in Touch</h2>
                <p className="text-neutral-400 max-w-md">
                  Let&apos;s discuss how we can work together on your next ML/AI project
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col space-y-6"
              >
                <ContactButton
                  href="mailto:asanoop24@gmail.com"
                  icon={<IconMail className="w-5 h-5" />}
                  text="Email Me"
                />
                <ContactButton
                  href="https://linkedin.com/in/asanoop24"
                  icon={<IconBrandLinkedin className="w-5 h-5" />}
                  text="Connect on LinkedIn"
                />
              </motion.div>
            </div>
          </div>
        </section>
    </div>
    </main>
  );
}

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="text-neutral-500 hover:text-neutral-300 transition-colors"
  >
    {icon}
  </motion.a>
);

const ContactButton = ({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center space-x-2 text-sm font-mono text-neutral-300 hover:text-neutral-200 transition-colors group"
    whileHover={{ x: 4 }}
  >
    {icon}
    <span>{text}</span>
    <span className="font-sans group-hover:translate-x-1 transition-transform">→</span>
  </motion.a>
);
