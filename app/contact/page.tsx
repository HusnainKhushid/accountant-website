import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're here to help. Get in touch with our team.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold tracking-tighter">Get in Touch</h2>
                  <p className="text-muted-foreground md:text-xl/relaxed">
                    Have questions about our services? Need expert financial advice? Our team is ready to assist you.
                  </p>
                </div>
                <div className="grid gap-4">
                  <Card>
                    <CardContent className="p-6 flex items-start gap-4">
                      <Mail className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <CardTitle className="text-base">Email Us</CardTitle>
                        <CardDescription className="text-sm mt-1">For general inquiries:</CardDescription>
                        <a
                          href="mailto:info@mycharteredaccountants.ie"
                          className="text-primary hover:underline mt-1 block"
                        >
                          info@mycharteredaccountants.ie
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 flex items-start gap-4">
                      <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <CardTitle className="text-base">Call Us</CardTitle>
                        <CardDescription className="text-sm mt-1">Monday to Friday, 9am to 5pm</CardDescription>
                        <a href="tel:+35315551234" className="text-primary hover:underline mt-1 block">
                          +353 1 555 1234
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <CardTitle className="text-base">Visit Us</CardTitle>
                        <CardDescription className="text-sm mt-1">
                          Our office is located in central Dublin
                        </CardDescription>
                        <p className="mt-1">6 Fern Road, Sandyford, Dubin, DIB FP98, Ireland</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="relative h-[300px] overflow-hidden rounded-xl">
                  <iframe
                    title="Office Location"
                    src="https://www.google.com/maps?q=6+Fern+Road,+Sandyford,+Dublin,+D18+FP98,+Ireland&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <div>
                <form className="grid gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="service">Service of Interest</Label>
                    <select
                      id="service"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select a service</option>
                      <option value="accounting">Accounting</option>
                      <option value="start-ups">Start-Ups</option>
                      <option value="assurance">Assurance</option>
                      <option value="taxation">Taxation</option>
                      <option value="mergers-and-acquisitions">Mergers and Acquisitions</option>
                      <option value="book-keeping">Book Keeping</option>
                    </select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Enter your message" className="min-h-[150px]" />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

