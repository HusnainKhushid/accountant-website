import Link from "next/link"
import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

export function Footer() {
  const services = [
    { title: "Accounting", id: "accounting" },
    { title: "Start-Ups", id: "start-ups" },
    { title: "Assurance", id: "assurance" },
    { title: "Taxation", id: "taxation" },
    { title: "Mergers and Acquisitions", id: "mergers-and-acquisitions" },
    { title: "Book Keeping", id: "book-keeping" },
  ]

  return (
    <footer className="w-full py-6 md:py-12 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
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
              <h3 className="text-lg font-medium">My Chartered Accountants</h3>
            </div>
            <p className="text-sm opacity-80">
              Your trusted partner for accounting and business advisory services in Ireland.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Services</h3>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.id}>
                  <Link href={`/services#${service.id}`} className="opacity-80 hover:opacity-100 hover:text-white">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="opacity-80 hover:opacity-100 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="opacity-80 hover:opacity-100 hover:text-white">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="opacity-80 hover:opacity-100 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="opacity-80 hover:opacity-100 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-white" />
                <a
                  href="mailto:info@mycharteredaccountants.ie"
                  className="opacity-80 hover:opacity-100 hover:text-white"
                >
                  info@mycharteredaccountants.ie
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-white" />
                <a href="tel:+35315551234" className="opacity-80 hover:opacity-100 hover:text-white">
                  +353 1 555 1234
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-white" />
                <span className="opacity-80">123 Business Street, Dublin 2, Ireland</span>
              </li>
            </ul>
            <div className="flex space-x-4 pt-2">
              <Link href="#" className="text-white hover:text-accent">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white hover:text-accent">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white hover:text-accent">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-70">
          © {new Date().getFullYear()} My Chartered Accountants. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
