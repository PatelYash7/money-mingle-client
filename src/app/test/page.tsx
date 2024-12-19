import { CTASection } from "@/components/landing/cta-section"
import { FAQSection } from "@/components/landing/faq-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { Footer } from "@/components/landing/footer"
import { HeroSection } from "@/components/landing/hero-section"
import { HowItWorks } from "@/components/landing/how-it-works"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { FloatingNav } from "@/components/ui/floating-navbar"
import { IconHome } from "@tabler/icons-react"

export default function Home() {
    const navItems = [
        {
            name: 'Home',
            link: '/',
            icon: <IconHome className='h-4 w-4 text-neutral-500 dark:text-white' />,
        },
        {
            name: 'Dashboard',
            link: '/dashboard',
            icon: <IconHome className='h-4 w-4 text-neutral-500 dark:text-white' />,
        },
    ];
  return (
    <>
    <FloatingNav navItems={navItems}/>
      <main className="min-h-screen">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <HowItWorks />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

