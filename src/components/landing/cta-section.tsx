import { Button } from "@/components/ui/button"
import Image from "next/image"

export function CTASection() {
  return (
    <section className="py-16 bg-slate-950">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
              Ready to simplify your financial transactions?
            </h2>
            <p className="text-slate-400 md:text-xl">
              Join thousands of satisfied users and experience the difference.
            </p>
            <Button size="lg" className="w-full sm:w-auto">
              Get Started Now
            </Button>
          </div>
          <div className="relative h-[300px] lg:h-[400px]">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Credit card illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

