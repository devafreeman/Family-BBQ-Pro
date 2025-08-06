import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Flame, Shield, Truck, Users, FlameIcon as Grill, Heart, Award, Clock } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-red-800 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Grill className="h-8 w-8 text-yellow-400" />
            <span className="text-xl font-bold">Family BBQ Pro</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
            <Link href="/shop" className="hover:text-yellow-400 transition-colors">Shop</Link>
            <Link href="/services" className="hover:text-yellow-400 transition-colors">Services</Link>
            <Link href="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link>
            <Link href="/cart" className="hover:text-yellow-400 transition-colors">Cart</Link>
            <Link href="/admin" className="hover:text-yellow-400 transition-colors">Admin</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-800 via-red-700 to-orange-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Bringing Families Together Around the Grill</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your trusted family BBQ partner since 2003. Quality propane, grilling accessories, 
            and everything you need for unforgettable backyard memories.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-red-900 font-semibold">
              <Link href="/shop">Start Grilling</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-red-800">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-red-800">Why Families Choose Us</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We understand that great BBQ brings people together. That's why we're committed to providing 
            everything your family needs for the perfect cookout.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-red-800">Family Safe</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  All our products meet the highest safety standards to keep your family protected during every cookout.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Truck className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-red-800">Quick Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Same-day delivery so you never miss a family gathering. We get your BBQ essentials to you fast.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-red-800">Family Owned</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  As a family business, we understand the importance of quality time around the grill with loved ones.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Award className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-red-800">BBQ Experts</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our team of grilling enthusiasts provides expert advice to make every family BBQ a success.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-red-800">BBQ Essentials for Your Family</h2>
          <p className="text-center text-gray-600 mb-12">Everything you need to create delicious memories</p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image 
                  src="/propane-tank.png" 
                  alt="Propane Tank" 
                  width={300} 
                  height={200}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-red-800">20lb Propane Tank</CardTitle>
                <CardDescription className="mb-4">
                  Perfect for family BBQs and weekend grilling sessions. Clean-burning fuel for delicious results.
                </CardDescription>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-600">$24.99</span>
                  <Button className="bg-red-600 hover:bg-red-700">Add to Cart</Button>
                </div>
              </CardContent>
            </Card>
            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image 
                  src="/propane-regulator.png" 
                  alt="Propane Regulator" 
                  width={300} 
                  height={200}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-red-800">High-Pressure Regulator</CardTitle>
                <CardDescription className="mb-4">
                  Reliable pressure control for consistent grilling. Keep your family cookouts running smoothly.
                </CardDescription>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-600">$45.99</span>
                  <Button className="bg-red-600 hover:bg-red-700">Add to Cart</Button>
                </div>
              </CardContent>
            </Card>
            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image 
                  src="/propane-hose.png" 
                  alt="Propane Hose" 
                  width={300} 
                  height={200}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-red-800">10ft Propane Hose</CardTitle>
                <CardDescription className="mb-4">
                  Extra length for flexible grill placement. Safety shut-off valve for peace of mind.
                </CardDescription>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-600">$32.99</span>
                  <Button className="bg-red-600 hover:bg-red-700">Add to Cart</Button>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
              <Link href="/shop">Shop All BBQ Essentials</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Family BBQ Tips Section */}
      <section className="py-16 bg-gradient-to-r from-orange-100 to-red-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-red-800">Creating Perfect Family Moments</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-red-800">Quick Setup</h3>
                    <p className="text-gray-600">Get your grill ready in minutes with our easy-connect systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-red-800">Family Recipes</h3>
                    <p className="text-gray-600">Free recipe cards with every purchase to inspire your next cookout</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-red-800">Community Events</h3>
                    <p className="text-gray-600">Join our monthly family BBQ competitions and workshops</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-red-200">
              <h3 className="text-xl font-bold mb-4 text-red-800">This Week's Family Special</h3>
              <p className="text-gray-600 mb-4">
                Get everything you need for the perfect family BBQ weekend!
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span>20lb Propane Tank</span>
                  <span className="line-through text-gray-400">$24.99</span>
                </div>
                <div className="flex justify-between">
                  <span>BBQ Tool Set</span>
                  <span className="line-through text-gray-400">$39.99</span>
                </div>
                <div className="flex justify-between">
                  <span>Grill Cover</span>
                  <span className="line-through text-gray-400">$29.99</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-bold text-lg text-red-600">
                  <span>Family Bundle Price:</span>
                  <span>$69.99</span>
                </div>
              </div>
              <Button className="w-full bg-red-600 hover:bg-red-700">Get Family Bundle</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Grill className="h-6 w-6 text-yellow-400" />
                <span className="text-lg font-bold">Family BBQ Pro</span>
              </div>
              <p className="text-red-200">
                Your family BBQ partner since 2003. Creating delicious memories, one cookout at a time.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-yellow-400">Quick Links</h3>
              <ul className="space-y-2 text-red-200">
                <li><Link href="/shop" className="hover:text-white">Shop BBQ Essentials</Link></li>
                <li><Link href="/services" className="hover:text-white">Grill Services</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-yellow-400">Family Services</h3>
              <ul className="space-y-2 text-red-200">
                <li>Propane Tank Refills</li>
                <li>Grill Setup & Installation</li>
                <li>BBQ Equipment Maintenance</li>
                <li>Family BBQ Catering</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-yellow-400">Visit Our Family Store</h3>
              <div className="text-red-200 space-y-2">
                <p>123 BBQ Boulevard</p>
                <p>Grill Town, TX 73301</p>
                <p>(555) 123-GRILL</p>
                <p>hello@familybbqpro.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-red-800 mt-8 pt-8 text-center text-red-200">
            <p>&copy; 2024 Family BBQ Pro. Bringing families together since 2003.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
