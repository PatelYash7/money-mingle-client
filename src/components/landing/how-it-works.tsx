import Image from "next/image"

export function HowItWorks() {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
          How It Works
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Sign Up",
              description: "Create an account and set up your profile",
              image: "/placeholder.svg?height=300&width=400",
            },
            {
              title: "Add Your Bank Account",
              description: "Connect your bank account securely",
              image: "/placeholder.svg?height=300&width=400",
            },
            {
              title: "Start Transacting",
              description: "Begin sending and receiving payments",
              image: "/placeholder.svg?height=300&width=400",
            },
          ].map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative h-[300px] mb-4">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

