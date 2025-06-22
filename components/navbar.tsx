import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-primary text-primary-foreground">
      <div className="container flex h-16 items-center justify-end">
        <Link href="/" className="flex items-center space-x-2 h-full mr-auto">
          {/* Make logo take 80% of header height */}
          <img src="/images/Logo.png" alt="Company Logo" className="h-[80%] w-auto max-h-16" />
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
