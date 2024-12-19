import Image from "next/image"

export function FeaturesSection() {
  return (
    <section className="py-16 dark:bg-black bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold  tracking-tighter sm:text-4xl md:text-5xl">
            Empower Your Money Transfer Journey
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            with Seamless Solutions
          </p>
          <p className="text-muted-foreground mt-2">
            Explore our powerful features for seamless payments experience.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {[
            {
              title: "Real-time Transaction",
              image: "/placeholder.svg?height=400&width=400",
            },
            {
              title: "Seamless Integration",
              image: "/placeholder.svg?height=400&width=400",
            },
            {
              title: "Multi-Currency Support",
              image: "/placeholder.svg?height=400&width=400",
            },
            {
              title: "User-Friendly Interface",
              image: "/placeholder.svg?height=400&width=400",
            },
          ].map((feature, index) => (
            <div key={index} className="relative group">
              <div className="overflow-hidden rounded-lg bg-violet-300 p-4">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={200}
                  height={200}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <h3 className="mt-4 text-xl text-primary font-bold">{feature.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
