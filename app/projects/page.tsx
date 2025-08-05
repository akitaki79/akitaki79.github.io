import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <span className="font-bold text-lg">YourName</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/experience">
            Experience
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/projects">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
            Contact
          </Link>
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-5xl space-y-8">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h1>
                <p className="text-gray-400 md:text-lg">
                  A collection of my work, side projects, and open source contributions.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <div className="aspect-video overflow-hidden rounded-lg bg-gray-800 flex items-center justify-center text-gray-500">
                      Project Image
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <CardTitle>Project Name</CardTitle>
                    <CardDescription>
                      A detailed description of the project, its purpose, and the problems it solves. Explain the
                      technologies used and your role in the development.
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">MongoDB</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Link
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                      href="https://github.com/yourusername/project"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </Link>
                    <Link
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                      href="https://project-demo.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="aspect-video overflow-hidden rounded-lg bg-gray-800 flex items-center justify-center text-gray-500">
                      Project Image
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <CardTitle>Project Name</CardTitle>
                    <CardDescription>
                      A detailed description of the project, its purpose, and the problems it solves. Explain the
                      technologies used and your role in the development.
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">Next.js</Badge>
                      <Badge variant="secondary">Tailwind CSS</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Link
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                      href="https://github.com/yourusername/project"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </Link>
                    <Link
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                      href="https://project-demo.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="aspect-video overflow-hidden rounded-lg bg-gray-800 flex items-center justify-center text-gray-500">
                      Project Image
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <CardTitle>Project Name</CardTitle>
                    <CardDescription>
                      A detailed description of the project, its purpose, and the problems it solves. Explain the
                      technologies used and your role in the development.
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Badge variant="secondary">Python</Badge>
                      <Badge variant="secondary">Django</Badge>
                      <Badge variant="secondary">PostgreSQL</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Link
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                      href="https://github.com/yourusername/project"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </Link>
                    <Link
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                      href="https://project-demo.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="aspect-video overflow-hidden rounded-lg bg-gray-800 flex items-center justify-center text-gray-500">
                      Project Image
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <CardTitle>Project Name</CardTitle>
                    <CardDescription>
                      A detailed description of the project, its purpose, and the problems it solves. Explain the
                      technologies used and your role in the development.
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Badge variant="secondary">Vue.js</Badge>
                      <Badge variant="secondary">Express</Badge>
                      <Badge variant="secondary">Firebase</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Link
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                      href="https://github.com/yourusername/project"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </Link>
                    <Link
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                      href="https://project-demo.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full border-t px-4 md:px-6">
        <p className="text-xs text-gray-400">© 2025 YourName. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="https://github.com/yourusername">
            GitHub
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="https://linkedin.com/in/yourusername">
            LinkedIn
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="https://twitter.com/yourusername">
            Twitter
          </Link>
        </nav>
      </footer>
    </div>
  )
}
