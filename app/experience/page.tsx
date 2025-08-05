import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function ExperiencePage() {
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
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h1>
                <p className="text-gray-400 md:text-lg">My professional journey and qualifications.</p>
              </div>
              <div className="flex justify-end">
                <Button asChild variant="outline" size="sm">
                  <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-4 w-4" />
                    Download Resume
                  </Link>
                </Button>
              </div>
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <CardTitle>Senior Developer</CardTitle>
                        <CardDescription>Company Name</CardDescription>
                      </div>
                      <div className="text-sm text-gray-400">Jan 2022 - Present</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Led the development of a major product feature that increased user engagement by 35%.</li>
                      <li>Mentored junior developers and conducted code reviews to maintain code quality.</li>
                      <li>Implemented CI/CD pipelines that reduced deployment time by 50%.</li>
                      <li>Technologies: React, Node.js, TypeScript, AWS</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <CardTitle>Full Stack Developer</CardTitle>
                        <CardDescription>Previous Company</CardDescription>
                      </div>
                      <div className="text-sm text-gray-400">Mar 2019 - Dec 2021</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Developed and maintained multiple web applications using React and Node.js.</li>
                      <li>Collaborated with UX designers to implement responsive and accessible interfaces.</li>
                      <li>Optimized database queries resulting in a 40% improvement in application performance.</li>
                      <li>Technologies: React, Express, MongoDB, Docker</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <CardTitle>Junior Web Developer</CardTitle>
                        <CardDescription>First Company</CardDescription>
                      </div>
                      <div className="text-sm text-gray-400">Jun 2017 - Feb 2019</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Built and maintained client websites using HTML, CSS, and JavaScript.</li>
                      <li>Assisted in the migration of legacy systems to modern frameworks.</li>
                      <li>Participated in daily stand-ups and sprint planning meetings.</li>
                      <li>Technologies: HTML, CSS, JavaScript, jQuery, PHP</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter">Education</h2>
                <Card>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <CardTitle>Bachelor of Science in Computer Science</CardTitle>
                        <CardDescription>University Name</CardDescription>
                      </div>
                      <div className="text-sm text-gray-400">2013 - 2017</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>Graduated with honors. Specialized in software engineering and web development.</p>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-md bg-gray-800 px-2.5 py-0.5 text-sm font-medium text-gray-800">
                    JavaScript
                  </span>
                  <span className="inline-flex items-center rounded-md bg-gray-800 px-2.5 py-0.5 text-sm font-medium text-gray-800">
                    TypeScript
                  </span>
                  <span className="inline-flex items-center rounded-md bg-gray-800 px-2.5 py-0.5 text-sm font-medium text-gray-800">
                    React
                  </span>
                  <span className="inline-flex items-center rounded-md bg-gray-800 px-2.5 py-0.5 text-sm font-medium text-gray-800">
                    Node.js
                  </span>
                  <span className="inline-flex items-center rounded-md bg-gray-800 px-2.5 py-0.5 text-sm font-medium text-gray-800">
                    Express
                  </span>
                  <span className="inline-flex items-center rounded-md bg-gray-800 px-2.5 py-0.5 text-sm font-medium text-gray-800">
                    MongoDB
                  </span>
                  <span className="inline-flex items-center rounded-md bg-gray-800 px-2.5 py-0.5 text-sm font-medium text-gray-800">
                    SQL
                  </span>
                  <span className="inline-flex items-center rounded-md bg-gray-800 px-2.5 py-0.5 text-sm font-medium text-gray-800">
                    Git
                  </span>
                  <span className="inline-flex items-center rounded-md bg-gray-800 px-2.5 py-0.5 text-sm font-medium text-gray-800">
                    Docker
                  </span>
                  <span className="inline-flex items-center rounded-md bg-gray-800 px-2.5 py-0.5 text-sm font-medium text-gray-800">
                    AWS
                  </span>
                  <span className="inline-flex items-center rounded-md bg-gray-800 px-2.5 py-0.5 text-sm font-medium text-gray-800">
                    CI/CD
                  </span>
                  <span className="inline-flex items-center rounded-md bg-gray-800 px-2.5 py-0.5 text-sm font-medium text-gray-800">
                    Agile
                  </span>
                </div>
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
