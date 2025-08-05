import Link from "next/link"
import { Github, Mail, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
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
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Hello, I'm <span className="text-primary">Your Name</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Software Developer | Designer | Problem Solver
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/experience">
                    <FileText className="mr-2 h-4 w-4" />
                    Resume
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
                <p className="text-gray-400 md:text-lg">
                  I'm a passionate developer focused on creating clean, user-friendly solutions to complex problems.
                  With a background in [your background], I bring a unique perspective to every project I work on.
                </p>
                <div className="flex flex-col gap-2">
                  <p className="font-medium">Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-md bg-gray-800 px-2.5 py-0.5 text-sm font-medium text-gray-200">
                      JavaScript
                    </span>
                    <span className="inline-flex items-center rounded-md bg-gray-800 px-2.5 py-0.5 text-sm font-medium text-gray-200">
                      React
                    </span>
                    <span className="inline-flex items-center rounded-md bg-gray-800 px-2.5 py-0.5 text-sm font-medium text-gray-200">
                      Node.js
                    </span>
                    <span className="inline-flex items-center rounded-md bg-gray-800 px-2.5 py-0.5 text-sm font-medium text-gray-200">
                      TypeScript
                    </span>
                    <span className="inline-flex items-center rounded-md bg-gray-800 px-2.5 py-0.5 text-sm font-medium text-gray-200">
                      UI/UX Design
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="h-[300px] w-[300px] overflow-hidden rounded-full bg-gray-800 flex items-center justify-center text-gray-500">
                  Your Photo
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-5xl space-y-8">
              <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Projects</h2>
                <p className="text-gray-400 md:text-lg">
                  Here are some of my recent projects. Check out my GitHub for more.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="group relative overflow-hidden rounded-lg border">
                  <div className="aspect-video overflow-hidden bg-gray-800 flex items-center justify-center text-gray-500">
                    Project Image
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">Project Name</h3>
                    <p className="text-sm text-gray-400">
                      A brief description of the project and the technologies used.
                    </p>
                    <div className="mt-2 flex gap-2">
                      <Link
                        className="text-xs text-primary hover:underline"
                        href="https://github.com/yourusername/project"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </Link>
                      <Link
                        className="text-xs text-primary hover:underline"
                        href="https://project-demo.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg border">
                  <div className="aspect-video overflow-hidden bg-gray-800 flex items-center justify-center text-gray-500">
                    Project Image
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">Project Name</h3>
                    <p className="text-sm text-gray-400">
                      A brief description of the project and the technologies used.
                    </p>
                    <div className="mt-2 flex gap-2">
                      <Link
                        className="text-xs text-primary hover:underline"
                        href="https://github.com/yourusername/project"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </Link>
                      <Link
                        className="text-xs text-primary hover:underline"
                        href="https://project-demo.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg border">
                  <div className="aspect-video overflow-hidden bg-gray-800 flex items-center justify-center text-gray-500">
                    Project Image
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">Project Name</h3>
                    <p className="text-sm text-gray-400">
                      A brief description of the project and the technologies used.
                    </p>
                    <div className="mt-2 flex gap-2">
                      <Link
                        className="text-xs text-primary hover:underline"
                        href="https://github.com/yourusername/project"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </Link>
                      <Link
                        className="text-xs text-primary hover:underline"
                        href="https://project-demo.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <Button asChild variant="outline">
                  <Link href="/projects">View All Projects</Link>
                </Button>
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
