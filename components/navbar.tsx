import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-primary text-primary-foreground">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="bg-white rounded-md p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-primary"
            >
              <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" />
              <polyline points="14 2 14 8 20 8" />
              <path d="M2 15h10" />
              <path d="M9 18l3-3-3-3" />
            </svg>
          </div>
          <span className="text-xl font-bold">My Chartered Accountants</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-accent">
            Home
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-accent"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-accent"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-accent"
          >
            Contact
          </Link>
        </nav>
        <Button asChild className="hidden md:flex bg-white text-primary hover:bg-white/90">
          <Link href="/contact">Get in Touch</Link>
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-primary-foreground">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/" className="text-lg font-medium transition-colors hover:text-accent">
                Home
              </Link>
              <Link href="/services" className="text-lg font-medium transition-colors hover:text-accent">
                Services
              </Link>
              <Link href="/about" className="text-lg font-medium transition-colors hover:text-accent">
                About
              </Link>
              <Link href="/contact" className="text-lg font-medium transition-colors hover:text-accent">
                Contact
              </Link>
              <Button asChild className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
