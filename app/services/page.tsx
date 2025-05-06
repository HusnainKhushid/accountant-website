import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, Calculator, CheckCircle2, FileText, Handshake, Rocket, ShieldCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  const services = [
    {
      id: "accounting",
      title: "Accounting",
      description: "Comprehensive accounting services to keep your finances in order and compliant with regulations.",
      icon: <Calculator className="h-10 w-10 text-primary" />,
      features: [
        "Financial statement preparation",
        "Management accounts",
        "Accounting system setup and training",
        "Financial analysis and reporting",
        "Compliance with accounting standards",
      ],
      image: "/images/accounting.jpg",
    },
    {
      id: "start-ups",
      title: "Start-Ups",
      description: "Specialized guidance for new businesses, from formation to growth strategies.",
      icon: <Rocket className="h-10 w-10 text-primary" />,
      features: [
        "Business plan development",
        "Company formation and structure",
        "Initial accounting setup",
        "Funding application support",
        "Growth strategy planning",
      ],
      image: "/images/startup.jpg",
    },
    {
      id: "assurance",
      title: "Assurance",
      description: "Independent verification of financial information to provide confidence to stakeholders.",
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      features: [
        "Audit services",
        "Financial statement review",
        "Internal control assessment",
        "Compliance audits",
        "Due diligence",
      ],
      image: "/images/assurance.jpg",
    },
    {
      id: "taxation",
      title: "Taxation",
      description: "Strategic tax planning and compliance services to optimize your tax position.",
      icon: <FileText className="h-10 w-10 text-primary" />,
      features: [
        "Corporate tax planning",
        "Personal tax planning",
        "VAT compliance and planning",
        "International tax",
        "Tax dispute resolution",
      ],
      image: "/images/tax.jpg",
    },
    {
      id: "mergers-and-acquisitions",
      title: "Mergers and Acquisitions",
      description: "Expert guidance through complex M&A transactions to maximize value.",
      icon: <Handshake className="h-10 w-10 text-primary" />,
      features: [
        "Transaction advisory",
        "Due diligence",
        "Valuation services",
        "Post-merger integration",
        "Strategic planning",
      ],
      image: "/images/mergers.jpg",
    },
    {
      id: "book-keeping",
      title: "Book Keeping",
      description: "Accurate and timely recording of financial transactions to maintain organized records.",
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      features: [
        "Daily transaction recording",
        "Bank reconciliation",
        "Accounts payable and receivable",
        "Payroll processing",
        "Financial reporting",
      ],
      image: "/images/bookkeeping.jpg",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive financial and business advisory services tailored to your needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`w-full py-12 md:py-24 ${index % 2 === 0 ? "" : "bg-muted"}`}
          >
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <div className="inline-block mb-2">{service.icon}</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{service.title}</h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      {service.description}
                    </p>
                  </div>
                  <ul className="grid gap-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                    <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Link href="/contact">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={`${service.title} service illustration`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/businessm.jpeg"
              alt="Dublin financial district"
              fill
              className="object-cover brightness-[0.4]"
            />
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">Ready to Get Started?</h2>
                <p className="max-w-[600px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today to discuss how we can help your business succeed.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/contact">
                    Contact Us Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
