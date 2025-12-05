/**
 * Site configuration for AINative Studio
 * Uses environment variables for Next.js compatibility
 */

export const siteConfig = {
  company: {
    name: "AINative Studio",
    email: process.env.NEXT_PUBLIC_COMPANY_EMAIL || "hello@ainative.studio",
    phone: process.env.NEXT_PUBLIC_COMPANY_PHONE || "(831) 295-1482",
    address: process.env.NEXT_PUBLIC_COMPANY_ADDRESS || "1101 Pacific Avenue, Santa Cruz, CA 95060",
    location: process.env.NEXT_PUBLIC_COMPANY_LOCATION || "Santa Cruz, California",
    businessHours: process.env.NEXT_PUBLIC_BUSINESS_HOURS || "Monday - Friday, 9:00 AM - 6:00 PM PST",
  },
  links: {
    calendly: process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/seedlingstudio/",
    blog: process.env.NEXT_PUBLIC_BLOG_URL || "https://blog.ainative.studio",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/company/cody-agent/posts/?feedView=all",
    github: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/AINative-Studio",
    zerodb: process.env.NEXT_PUBLIC_ZERODB_URL || "https://zerodb.ainative.studio",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.ainative.studio",
} as const;

export type SiteConfig = typeof siteConfig;
