import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Flame, Wrench, Shield, Truck, Clock, CheckCircle } from 'lucide-react'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-blue-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Flame className="h-8 w-8 text-orange-400" />
            <span className="text-xl font-bold">ProPane Pro</span>
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <Link href="/shop" className="hover:text-orange-400 transition-colors">Shop</Link>
            <Link href="/services" className="text-orange-400">Services</Link>
            <Link href="/contact" className="hover:text-orange-400 transition-colors">Contact</Link>
            <Link href="/cart" className="hover:text-orange-400 transition-colors">Cart</Link>
            <Link href="/admin" className="hover:text-orange-400 transition-colors">Admin</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Professional Propane Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            From installation to maintenance, our certified technicians provide comprehensive propane services you can trust.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Main Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Flame className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle>Tank Refills & Exchange</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Quick and safe propane tank refills and exchanges. We handle all tank sizes from 1lb to 100lb cylinders.
                </CardDescription>
                <ul className="text-sm text-left space-y-2 mb-4">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Fast 5-minute service</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Safety inspection included</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Competitive pricing</li>
                </ul>
                <Button>Learn More</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Wrench className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle>Installation & Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Professional installation of propane systems, appliances, and equipment by certified technicians.
                </CardDescription>
                <ul className="text-sm text-left space-y-2 mb-4">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Licensed technicians</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Code compliant work</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Warranty included</li>
                </ul>
                <Button>Schedule Service</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle>Safety Inspections</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Comprehensive safety inspections to ensure your propane system meets all safety standards and regulations.
                </CardDescription>
                <ul className="text-sm text-left space-y-2 mb-4">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Leak detection</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Pressure testing</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Compliance certification</li>
                </ul>
                <Button>Book Inspection</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Truck className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle>Delivery Service</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Convenient delivery service for propane tanks and accessories directly to your location.
                </CardDescription>
                <ul className="text-sm text-left space-y-2 mb-4">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Same-day delivery available</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Scheduled deliveries</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Free delivery over $50</li>
                </ul>
                <Button>Schedule Delivery</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Clock className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle>Emergency Service</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  24/7 emergency propane service for urgent repairs and safety concerns.
                </CardDescription>
                <ul className="text-sm text-left space-y-2 mb-4">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />24/7 availability</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Rapid response</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Emergency repairs</li>
                </ul>
                <Button variant="destructive">Call Emergency</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Wrench className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle>Maintenance & Repair</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Regular maintenance and repair services to keep your propane systems running safely and efficiently.
                </CardDescription>
                <ul className="text-sm text-left space-y-2 mb-4">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Preventive maintenance</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Equipment repairs</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Parts replacement</li>
                </ul>
                <Button>Schedule Maintenance</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Service Areas */}
        <section className="bg-white rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Service Areas</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Residential Services</h3>
              <ul className="space-y-2">
                <li>• Outdoor grills and fire pits</li>
                <li>• Pool and spa heaters</li>
                <li>• Patio heaters</li>
                <li>• Backup generators</li>
                <li>• RV and camping equipment</li>
                <li>• Home heating systems</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Commercial Services</h3>
              <ul className="space-y-2">
                <li>• Restaurant equipment</li>
                <li>• Industrial heating systems</li>
                <li>• Forklift fuel systems</li>
                <li>• Construction equipment</li>
                <li>• Agricultural applications</li>
                <li>• Fleet vehicle conversions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-blue-900 text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Contact us today to schedule your propane service or get a free quote.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Link href="/contact">Get Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-blue-900">
              <Link href="tel:555-123-8265">Call Now</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
