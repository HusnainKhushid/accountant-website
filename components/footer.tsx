import Link from "next/link"
import { Facebook, Linkedin, Mail, MapPin, Twitter } from "lucide-react"

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
              {/* Replace company name with logo image */}
              <img src="/images/Logo2.png" alt="Company Logo" className="h-8 w-auto" />
            </div>
            <p className="text-sm opacity-80">
              Your trusted partner for accounting and business advisory services in Ireland.
            </p>
            {/* Charted Accountants Ireland association logo at the end, left aligned and bigger */}
            <div>
              <img
                src="/images/charted.jpg"
                alt="Chartered Accountants Ireland"
                className="mt-2 bg-white shadow-sm"
                style={{ height: "64px", maxWidth: "160px", width: "auto", objectFit: "contain" }}
              />
            </div>
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
              {/* Removed phone number from footer */}
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-white" />
                <span className="opacity-80">
                  6 Fern Road, Sandyford, Dublin, D18 FP98, Ireland
                </span>
              </li>
            </ul>
            <div className="flex space-x-4 pt-2 items-center">
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
