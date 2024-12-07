import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Smartphone, CreditCard, Shield, Zap, CheckCircle } from 'lucide-react'

const features = [
  { title: 'Mobile Banking', description: 'Bank on-the-go with our user-friendly mobile app', icon: Smartphone },
  { title: 'Secure Payments', description: 'Make safe and secure transactions anytime, anywhere', icon: CreditCard },
  { title: 'Data Protection', description: 'Your financial data is protected with state-of-the-art encryption', icon: Shield },
  { title: 'Instant Transfers', description: 'Transfer money instantly to any bank account', icon: Zap },
]

const steps = [
  'Download our app from the App Store or Google Play',
  'Sign up with your email and verify your identity',
  'Link your existing bank account or create a new one',
  'Start making payments and managing your finances',
]

const testimonials = [
  { name: 'John Doe', role: 'Small Business Owner', content: 'Money Mingle has revolutionized how I manage my business finances. It\'s fast, secure, and incredibly user-friendly.' },
  { name: 'Jane Smith', role: 'Freelance Designer', content: 'As a freelancer, I need a reliable payment system. Money Mingle delivers that and more. I couldn\'t be happier!' },
  { name: 'Mike Johnson', role: 'Tech Entrepreneur', content: 'The instant transfers and robust security features of Money Mingle give me peace of mind. It\'s a game-changer.' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <main>
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-blue-800">Welcome to Money Mingle</h1>
            <p className="text-xl mb-8 text-gray-600">Your trusted partner for seamless digital banking and payments</p>
            {/* <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white">Get Started</Button> */}
            <Link className="bg-green-500 hover:bg-green-600 text-white py-2 px-2 rounded-2xl" href={'/bank-account/create-account'}>Get Started</Link>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-6 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">Our Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <feature.icon className="w-10 h-10 text-green-500 mb-4" />
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 px-6 bg-blue-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">How It Works</h2>
            <div className="max-w-2xl mx-auto">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start mb-8">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 px-6 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardHeader>
                    <Avatar className="w-12 h-12 mb-4">
                      <AvatarImage src={`/placeholder.svg?height=50&width=50`} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <CardTitle>{testimonial.name}</CardTitle>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{testimonial.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-blue-600 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Simplify Your Finances?</h2>
            <p className="text-xl mb-8">Join Money Mingle today and experience the future of banking.</p>
            <Link href={'/create-account'}>Sign Up Now</Link>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-12 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Money Mingle</h3>
            <p className="text-sm text-gray-400">Your trusted partner for seamless digital banking and payments.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Features</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white">How It Works</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm text-gray-400">support@moneymingle.com</p>
            <p className="text-sm text-gray-400">+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="container mx-auto mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">&copy; 2023 Money Mingle. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

