import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import {
  Cpu,
  Code,
  Database,
  Wind,
  Bot,
  Palette,
  GitMerge,
  Server,
  Cloud,
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="container mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl font-display my-4">
          Omar Yasser
        </h1>
        <p className="my-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Full-Stack Web Developer & Mechatronics Engineer
        </p>
        <div className="my-4 flex gap-4">
          <Button asChild size="lg">
            <Link href="#projects">View My Projects</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
      </section>

      <section id="about" className="container mx-auto p-15 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-display text-primary">
            About Me
          </h2>
        </div>
        <div className="grid items-center gap-12 md:grid-cols-2 mx-16">
          <div className="flex justify-center">
            <Image
              src="https://i.ibb.co/Sw12MGkM/1739318797084.jpg"
              alt="Omar Yasser - Full-Stack Developer"
              width={300}
              height={300}
              className="h-[300px] w-[300px] rounded-full object-cover border-4 border-primary/50"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-lg text-foreground">
              Full-stack developer passionate about building seamless digital
              experiences and solving complex problems with clean, efficient
              code.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              My background in Mechatronics Engineering gives me a unique
              perspective. It taught me to think in terms of integrated systems
              and to approach challenges with an analytical, problem-solving
              mindset—a principle I now apply to architecting robust web
              applications.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}

      <section id="skills" className="container mx-auto py-20 text-center mb-20">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-display">
          My Tech Stack & Tools
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          The technologies I use to build modern, high-performance web
          applications.
        </p>
        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="flex flex-col items-center gap-2">
            <Code className="h-10 w-10 text-primary" />
            <p className="font-semibold">Next.js</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Bot className="h-10 w-10 text-primary" />
            <p className="font-semibold">React</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Server className="h-10 w-10 text-primary" />
            <p className="font-semibold">Node.js</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Database className="h-10 w-10 text-primary" />
            <p className="font-semibold">PostgreSQL</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Code className="h-10 w-10 text-primary" />
            <p className="font-semibold">TypeScript</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Wind className="h-10 w-10 text-primary" />
            <p className="font-semibold">Tailwind CSS</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Palette className="h-10 w-10 text-primary" />
            <p className="font-semibold">Figma</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <GitMerge className="h-10 w-10 text-primary" />
            <p className="font-semibold">Git</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Cpu className="h-10 w-10 text-primary" />
            <p className="font-semibold">Express.js</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Cloud className="h-10 w-10 text-primary" />
            <p className="font-semibold">Vercel</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto py-20 text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-display">
          My Featured Projects
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 mx-10">
          <Card className="overflow-hidden text-left">
            <CardHeader className="p-0">
              <div className="h-48 w-full bg-card-foreground ">
                
              </div>
            </CardHeader>
            <CardContent className="pt-4 ">
              <CardTitle className="mb-2">BudgetWise App</CardTitle>
              <p className="text-sm text-muted-foreground">
                A full-stack expense tracker with user authentication, built
                with Next.js, Node.js, and PostgreSQL.
              </p>
            </CardContent>
            <CardFooter className="flex gap-4">
              <Button asChild variant="secondary">
                <Link href="#">Code</Link>
              </Button>
              <Button asChild>
                <Link href="#">Live Demo</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="overflow-hidden text-left">
            <CardHeader className="p-0">
              <div className="h-48 w-full bg-card-foreground">
                {" "}
                <Image
                  src="https://i.ibb.co/5XBkM4wM/Screenshot-2025-07-18-220451.png"
                  alt="Modern Blog project"
                  width={470}
                  height={470}
                />
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <CardTitle className="mb-2">Modern Blog</CardTitle>
              <p className="text-sm text-muted-foreground">
                A high-performance blog frontend built with Next.js and a
                headless CMS (Ghost API).
              </p>
            </CardContent>
            <CardFooter className="flex gap-4">
              <Button asChild variant="secondary">
                <Link href="https://github.com/Ghost-web-ops/blog-frontend-nextjs">
                  Code
                </Link>
              </Button>
              <Button asChild>
                <Link href="https://fullstack-blog-nextjs-rouge.vercel.app/">
                  Live Demo
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="overflow-hidden text-left">
            <CardHeader className="p-0">
              <div className="h-48 w-full bg-card-foreground">
                 <Image
                  src="https://i.ibb.co/PGFQf6mZ/Screenshot-2025-06-24-103153.png"
                  alt="Old Portfolio project"
                  width={470}
                  height={470}
                />
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <CardTitle className="mb-2">Old Portfolio</CardTitle>
              <p className="text-sm text-muted-foreground">
                My first portfolio website, built with vanilla HTML, CSS, and
                JavaScript, featuring a custom dark/light mode toggle.
              </p>
            </CardContent>
            <CardFooter className="flex gap-4">
              <Button asChild variant="secondary">
                <Link href="https://github.com/Ghost-web-ops/Ghost-web-ops.github.io">
                  Code
                </Link>
              </Button>
              <Button asChild>
                <Link href="https://ghost-web-ops.github.io/">Live Demo</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      {/* ================================================================== */}
      {/* Contact Section - انسخ هذا الجزء بالكامل */}
      {/* ================================================================== */}
      <section id="contact" className="container mx-auto py-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-display text-primary">
          Get In Touch
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          I&apos;m currently open to new opportunities. My inbox is always open,
          feel free to reach out!
        </p>

        <div className="mt-8 flex justify-center gap-8">
          {/* LinkedIn Icon Link */}
          <a
            href="https://www.linkedin.com/in/omar-yasser-017995344/"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <span className="sr-only">LinkedIn</span>
          </a>

          {/* GitHub Icon Link */}
          <a
            href="https://github.com/Ghost-web-ops"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            <span className="sr-only">GitHub</span>
          </a>

          {/* Email Icon Link */}
          <a
            href="mailto:omaryasser011549@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            <span className="sr-only">Email</span>
          </a>
        </div>
      </section>
    </>
  );
}
