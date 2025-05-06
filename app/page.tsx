import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  BookOpen,
  Calculator,
  CheckCircle2,
  ChevronRight,
  FileText,
  Handshake,
  Rocket,
  ShieldCheck,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/samuel1.jpeg"
              alt="Samuel Beckett Bridge in Dublin"
              fill
              className="object-cover brightness-[0.6]"
              priority
            />
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-start gap-4 md:gap-8 lg:w-2/3">
              <div
                className="space-y-4 animate-fade-up"
                style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
              >
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  Your Trusted Business Advisors
                </h1>
                <p className="max-w-[600px] text-white md:text-xl">
                  Expert accounting and business advisory services tailored to your needs. We help businesses grow,
                  optimize, and succeed.
                </p>
              </div>
              <div
                className="flex flex-col gap-2 min-[400px]:flex-row animate-fade-up"
                style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
              >
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20"
                >
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted" id="services">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Comprehensive Financial Solutions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We provide a wide range of accounting and business advisory services to help your business thrive.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 items-stretch">
              {[
                {
                  title: "Accounting",
                  description:
                    "Comprehensive accounting services to keep your finances in order and compliant with regulations.",
                  icon: <Calculator className="h-10 w-10 text-primary" />,
                },
                {
                  title: "Start-Ups",
                  description: "Specialized guidance for new businesses, from formation to growth strategies.",
                  icon: <Rocket className="h-10 w-10 text-primary" />,
                },
                {
                  title: "Assurance",
                  description:
                    "Independent verification of financial information to provide confidence to stakeholders.",
                  icon: <ShieldCheck className="h-10 w-10 text-primary" />,
                },
                {
                  title: "Taxation",
                  description: "Strategic tax planning and compliance services to optimize your tax position.",
                  icon: <FileText className="h-10 w-10 text-primary" />,
                },
                {
                  title: "Mergers and Acquisitions",
                  description: "Expert guidance through complex M&A transactions to maximize value.",
                  icon: <Handshake className="h-10 w-10 text-primary" />,
                },
                {
                  title: "Book Keeping",
                  description: "Accurate and timely recording of financial transactions to maintain organized records.",
                  icon: <BookOpen className="h-10 w-10 text-primary" />,
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="flex flex-col h-full transform transition-all duration-300 hover:shadow-lg border-t-4 border-t-primary"
                >
                  <CardHeader>
                    <div className="mb-2">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href={`/services#${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-accent"
                    >
                      Learn more
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Why Choose Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Approach</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We combine expertise with personalized service to deliver exceptional results.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-8 py-12 lg:grid-cols-2">
              <div className="relative h-[400px] overflow-hidden rounded-xl">
                <Image
                  src="/images/business.webp"
                  alt="Business professionals in a meeting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-4">
                  {[
                    "Personalized approach tailored to your business needs",
                    "Team of certified professionals with extensive experience",
                    "Proactive advice to help you stay ahead",
                    "Transparent communication and reporting",
                    "Commitment to your long-term success",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Button asChild size="lg">
                    <Link href="/about">About Our Team</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted" id="testimonials">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't just take our word for it. Here's what our clients have to say about our services.
                </p>
              </div>
            </div>
            <div className="mx-auto py-12">
              <Tabs defaultValue="tab1" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="tab1">Small Business</TabsTrigger>
                  <TabsTrigger value="tab2">Corporate</TabsTrigger>
                  <TabsTrigger value="tab3">Start-Up</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="pt-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-primary/10 p-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-6 w-6 text-primary"
                            >
                              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                            </svg>
                          </div>
                          <div className="grid gap-1">
                            <h3 className="font-semibold">Sarah O'Connor</h3>
                            <p className="text-sm text-muted-foreground">Dublin Cafe Owner</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground">
                          "My Chartered Accountants has been instrumental in helping my small cafe navigate the
                          complexities of business finances. Their bookkeeping and tax services have saved me countless
                          hours and helped me focus on growing my business."
                        </p>
                        <div className="flex gap-1">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-5 w-5 text-primary"
                              >
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                              </svg>
                            ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="tab2" className="pt-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-primary/10 p-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-6 w-6 text-primary"
                            >
                              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                            </svg>
                          </div>
                          <div className="grid gap-1">
                            <h3 className="font-semibold">Michael Brennan</h3>
                            <p className="text-sm text-muted-foreground">CEO, Irish Tech Solutions</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground">
                          "The team at My Chartered Accountants has been an invaluable partner in our corporate growth.
                          Their expertise in mergers and acquisitions guided us through two successful company
                          integrations, and their ongoing financial advisory services continue to provide strategic
                          value."
                        </p>
                        <div className="flex gap-1">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-5 w-5 text-primary"
                              >
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                              </svg>
                            ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="tab3" className="pt-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-primary/10 p-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-6 w-6 text-primary"
                            >
                              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                            </svg>
                          </div>
                          <div className="grid gap-1">
                            <h3 className="font-semibold">Emma Kelly</h3>
                            <p className="text-sm text-muted-foreground">Founder, GreenTech Innovations</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground">
                          "As a first-time entrepreneur, I was overwhelmed by the financial aspects of starting a
                          business. My Chartered Accountants provided clear guidance from day one, helping with company
                          formation, initial bookkeeping setup, and strategic tax planning. Their start-up expertise has
                          been crucial to our early success."
                        </p>
                        <div className="flex gap-1">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-5 w-5 text-primary"
                              >
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                              </svg>
                            ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/businessm.jpeg"
              alt="Dublin business district"
              fill
              className="object-cover brightness-[0.4]"
            />
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">
                  Ready to Transform Your Business?
                </h2>
                <p className="max-w-[600px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let's work together to achieve your financial goals and business objectives.
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
