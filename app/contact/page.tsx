import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, Building2, LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "Contact Us | AINative Studio",
  description:
    "Get in touch with AINative Studio. We're here to help with questions about our AI development tools, enterprise solutions, and technical support.",
  keywords: [
    "contact",
    "support",
    "AI development",
    "enterprise sales",
    "technical support",
    "AINative Studio",
  ],
  openGraph: {
    title: "Contact Us | AINative Studio",
    description:
      "Get in touch with AINative Studio. We're here to help with questions about our AI development tools and enterprise solutions.",
    url: `${siteConfig.url}/contact`,
    siteName: "AINative Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | AINative Studio",
    description:
      "Get in touch with AINative Studio for AI development tools and enterprise solutions.",
  },
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

// Contact info card component
interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  content: string;
  link?: string;
}

function ContactCard({ icon: Icon, title, content, link }: ContactCardProps) {
  return (
    <Card className="border border-primary/20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10" aria-hidden="true">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            {link ? (
              <a
                href={link}
                className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                {content}
              </a>
            ) : (
              <CardDescription>{content}</CardDescription>
            )}
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}

// JSON-LD structured data
function ContactPageSchema() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact AINative Studio",
    description:
      "Get in touch with AINative Studio for questions about AI development tools and enterprise solutions.",
    url: `${siteConfig.url}/contact`,
    mainEntity: {
      "@type": "Organization",
      name: siteConfig.company.name,
      email: siteConfig.company.email,
      telephone: siteConfig.company.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "1101 Pacific Avenue",
        addressLocality: "Santa Cruz",
        addressRegion: "CA",
        postalCode: "95060",
        addressCountry: "US",
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: `${siteConfig.url}/contact`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

export default function ContactPage() {
  return (
    <>
      <ContactPageSchema />
      <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Get in Touch
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                We&apos;re here to help with any questions about our products, services, or
                enterprise solutions.
              </p>
            </header>

            {/* Main content grid */}
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
              role="main"
              aria-label="Contact information and form"
            >
              {/* Contact Information */}
              <section aria-labelledby="contact-info-heading">
                <h2
                  id="contact-info-heading"
                  className="text-2xl font-bold text-gray-800 dark:text-white mb-6"
                >
                  Contact Information
                </h2>
                <div className="grid gap-6">
                  <ContactCard
                    icon={Mail}
                    title="Email Us"
                    content={siteConfig.company.email}
                    link={`mailto:${siteConfig.company.email}`}
                  />
                  <ContactCard
                    icon={Phone}
                    title="Call Us"
                    content={siteConfig.company.phone}
                    link="tel:+18312951482"
                  />
                  <ContactCard
                    icon={MapPin}
                    title="Visit Us"
                    content={siteConfig.company.address}
                  />
                  <ContactCard
                    icon={Clock}
                    title="Business Hours"
                    content={siteConfig.company.businessHours}
                  />
                </div>
              </section>

              {/* Contact Form */}
              <section aria-labelledby="contact-form-heading">
                <h2 id="contact-form-heading" className="sr-only">
                  Contact Form
                </h2>
                <ContactForm />
              </section>
            </div>

            {/* Enterprise Support Card */}
            <Card className="border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="h-6 w-6 text-primary" aria-hidden="true" />
                  <CardTitle>Enterprise Support</CardTitle>
                </div>
                <CardDescription className="text-lg">
                  Looking for enterprise-grade support? Our dedicated enterprise team is
                  ready to help with custom solutions, deployment options, and premium
                  support packages.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href={siteConfig.links.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="default"
                    className="bg-primary hover:bg-primary/90 text-white"
                  >
                    Contact Enterprise Sales
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
