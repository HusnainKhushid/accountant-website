import React from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto py-12 px-4 max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-primary">About Us</h1>
        <p className="mb-6 text-lg opacity-90">
          My Chartered Accountants is dedicated to providing expert accounting, tax, and business advisory services to individuals and businesses across Ireland. With years of experience and a passion for helping our clients succeed, we pride ourselves on our professionalism, integrity, and personalized approach.
        </p>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Our Mission</h2>
          <p className="opacity-90">
            To empower our clients with reliable financial guidance and support, enabling them to achieve their business and personal goals with confidence.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">Our Team</h2>
          <p className="opacity-90">
            Our team consists of qualified chartered accountants and experienced advisors who are committed to delivering exceptional service and value.
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
