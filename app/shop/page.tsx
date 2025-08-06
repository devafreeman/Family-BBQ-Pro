import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FlameIcon as Grill, Search, Star } from 'lucide-react'

const products = [
  {
    id: 1,
    name: "20lb Propane Tank",
    price: 24.99,
    category: "Tanks",
    image: "/propane-tank.png",
    description: "Perfect for family BBQs and weekend grilling sessions. Clean-burning fuel for delicious results.",
    rating: 4.8,
    familyFavorite: true
  },
  {
    id: 2,
    name: "High-Pressure Regulator",
    price: 45.99,
    category: "Regulators",
    image: "/propane-regulator.png",
    description: "Reliable pressure control for consistent grilling. Keep your family cookouts running smoothly.",
    rating: 4.9
  },
  {
    id: 3,
    name: "10ft Propane Hose",
    price: 32.99,
    category: "Hoses",
    image: "/propane-hose.png",
    description: "Extra length for flexible grill placement. Safety shut-off valve for peace of mind.",
    rating: 4.7
  },
  {
    id: 4,
    name: "40lb Propane Tank",
    price: 49.99,
    category: "Tanks",
    image: "/large-propane-tank.png",
    description: "Heavy-duty tank for large family gatherings and extended grilling sessions.",
    rating: 4.6
  },
  {
    id: 5,
    name: "BBQ Propane Gauge",
    price: 18.99,
    category: "Accessories",
    image: "/propane-gauge.png",
    description: "Never run out of propane mid-cookout! Accurate gauge for family peace of mind.",
    rating: 4.5,
    familyFavorite: true
  },
  {
    id: 6,
    name: "Quick Connect Fitting",
    price: 12.99,
    category: "Fittings",
    image: "/propane-fitting.png",
    description: "Easy-connect fitting for quick tank changes during family BBQ events.",
    rating: 4.4
  },
  {
    id: 7,
    name: "Propane Leak Detector",
    price: 29.99,
    category: "Safety",
    image: "/placeholder-wlomz.png",
    description: "Keep your family safe with our electronic leak detector for enhanced BBQ safety.",
    rating: 4.8
  },
  {
    id: 8,
    name: "Grill Tank Storage Rack",
    price: 89.99,
    category: "Storage",
    image: "/placeholder-0k61m.png",
    description: "Organize your BBQ area with secure storage for multiple propane tanks.",
    rating: 4.3
  }
]

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-orange-50">
      {/* Navigation */}
      <nav className="bg-red-800 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Grill className="h-8 w-8 text-yellow-400" />
            <span className="text-xl font-bold">Family BBQ Pro</span>
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
            <Link href="/shop" className="text-yellow-400">Shop</Link>
            <Link href="/services" className="hover:text-yellow-400 transition-colors">Services</Link>
            <Link href="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link>
            <Link href="/cart" className="hover:text-yellow-400 transition-colors">Cart</Link>
            <Link href="/admin" className="hover:text-yellow-400 transition-colors">Admin</Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-red-800 mb-2">Family BBQ Essentials</h1>
          <p className="text-gray-600">Everything you need for unforgettable family cookouts</p>
        </div>
        
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input placeholder="Search BBQ products..." className="pl-10 border-red-200 focus:border-red-400" />
          </div>
          <Select>
            <SelectTrigger className="w-full md:w-48 border-red-200">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="tanks">Propane Tanks</SelectItem>
              <SelectItem value="regulators">Regulators</SelectItem>
              <SelectItem value="hoses">Hoses</SelectItem>
              <SelectItem value="accessories">BBQ Accessories</SelectItem>
              <SelectItem value="safety">Safety Equipment</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full md:w-48 border-red-200">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="border-red-200 hover:shadow-lg transition-shadow bg-white">
              <CardHeader className="p-0 relative">
                {product.familyFavorite && (
                  <div className="absolute top-2 left-2 bg-yellow-400 text-red-800 px-2 py-1 rounded-full text-xs font-semibold z-10">
                    Family Favorite
                  </div>
                )}
                <Image 
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-4">
                <div className="mb-2">
                  <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>
                <CardTitle className="text-lg mb-2 text-red-800">{product.name}</CardTitle>
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
                </div>
                <CardDescription className="mb-4 text-sm">
                  {product.description}
                </CardDescription>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-600">
                    ${product.price}
                  </span>
                  <Button size="sm" className="bg-red-600 hover:bg-red-700">Add to Cart</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Family BBQ Tips */}
        <div className="mt-16 bg-gradient-to-r from-red-100 to-orange-100 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-red-800 mb-4 text-center">Family BBQ Tips</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                1
              </div>
              <h3 className="font-semibold text-red-800 mb-2">Plan Your Menu</h3>
              <p className="text-sm text-gray-600">Choose family favorites and prep ingredients ahead of time for stress-free grilling.</p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                2
              </div>
              <h3 className="font-semibold text-red-800 mb-2">Check Your Propane</h3>
              <p className="text-sm text-gray-600">Always have a backup tank ready so you never run out during family gatherings.</p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                3
              </div>
              <h3 className="font-semibold text-red-800 mb-2">Create Memories</h3>
              <p className="text-sm text-gray-600">Get the kids involved! Teaching them to grill safely creates lasting family traditions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
