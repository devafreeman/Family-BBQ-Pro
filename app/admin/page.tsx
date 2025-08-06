"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { FlameIcon as Grill, Package, ShoppingCart, MessageSquare, Plus, Edit, Trash2, Eye, DollarSign, Users, TrendingUp, Search, Filter, Download, Mail, Phone, Calendar, CheckCircle, XCircle, Clock } from 'lucide-react'

// Enhanced mock data with more details
const initialOrders = [
  { 
    id: "ORD-001", 
    customer: "John Smith", 
    email: "john@email.com",
    phone: "(555) 123-4567",
    total: 74.98, 
    status: "pending", 
    date: "2024-01-15",
    items: [
      { name: "20lb Propane Tank", quantity: 2, price: 24.99 },
      { name: "High-Pressure Regulator", quantity: 1, price: 25.00 }
    ],
    shippingAddress: "123 Main St, Arlen, TX 73301"
  },
  { 
    id: "ORD-002", 
    customer: "Sarah Johnson", 
    email: "sarah@email.com",
    phone: "(555) 987-6543",
    total: 129.99, 
    status: "shipped", 
    date: "2024-01-14",
    items: [
      { name: "40lb Propane Tank", quantity: 1, price: 49.99 },
      { name: "10ft Propane Hose", quantity: 2, price: 32.99 },
      { name: "Tank Storage Rack", quantity: 1, price: 14.02 }
    ],
    shippingAddress: "456 Oak Ave, Arlen, TX 73302"
  },
  { 
    id: "ORD-003", 
    customer: "Mike Wilson", 
    email: "mike@email.com",
    phone: "(555) 456-7890",
    total: 45.99, 
    status: "delivered", 
    date: "2024-01-13",
    items: [
      { name: "High-Pressure Regulator", quantity: 1, price: 45.99 }
    ],
    shippingAddress: "789 Pine St, Arlen, TX 73303"
  },
]

const initialProducts = [
  { id: 1, name: "20lb Propane Tank", price: 24.99, stock: 45, category: "Tanks", description: "Perfect for family BBQs and weekend grilling sessions.", image: "/propane-tank.png" },
  { id: 2, name: "High-Pressure Regulator", price: 45.99, stock: 23, category: "Regulators", description: "Reliable pressure control for consistent grilling.", image: "/propane-regulator.png" },
  { id: 3, name: "10ft Propane Hose", price: 32.99, stock: 18, category: "Hoses", description: "Extra length for flexible grill placement.", image: "/propane-hose.png" },
  { id: 4, name: "40lb Propane Tank", price: 49.99, stock: 12, category: "Tanks", description: "Heavy-duty tank for large family gatherings.", image: "/large-propane-tank.png" },
  { id: 5, name: "BBQ Propane Gauge", price: 18.99, stock: 35, category: "Accessories", description: "Never run out of propane mid-cookout!", image: "/propane-gauge.png" },
  { id: 6, name: "Quick Connect Fitting", price: 12.99, stock: 28, category: "Fittings", description: "Easy-connect fitting for quick tank changes.", image: "/propane-fitting.png" },
]

const initialMessages = [
  { 
    id: 1, 
    name: "David Lee", 
    email: "david@email.com", 
    phone: "(555) 111-2222",
    subject: "Family BBQ Setup Help", 
    message: "Hi! We're planning our first big family reunion BBQ and need help setting up our new grill. Can you help us schedule an installation? We have about 30 family members coming!", 
    date: "2024-01-15", 
    status: "unread",
    priority: "normal"
  },
  { 
    id: 2, 
    name: "Emma Davis", 
    email: "emma@email.com", 
    phone: "(555) 333-4444",
    subject: "Weekend BBQ Delivery", 
    message: "I placed order ORD-002 yesterday for our family BBQ this weekend. When can I expect delivery? The kids are so excited for our cookout!", 
    date: "2024-01-14", 
    status: "read",
    priority: "normal"
  },
  { 
    id: 3, 
    name: "Tom Anderson", 
    email: "tom@email.com", 
    phone: "(555) 555-6666",
    subject: "Safety Concern", 
    message: "URGENT: I smell gas near my propane tank during our family BBQ. Kids are around - need immediate assistance. Please call me right away!", 
    date: "2024-01-13", 
    status: "urgent",
    priority: "high"
  },
  { 
    id: 4, 
    name: "Lisa Brown", 
    email: "lisa@email.com", 
    phone: "(555) 777-8888",
    subject: "Large Family Event", 
    message: "Do you have any 100lb propane tanks in stock? We're hosting a big family reunion with multiple grills running all day.", 
    date: "2024-01-12", 
    status: "read",
    priority: "normal"
  },
]

export default function AdminPage() {
  const [orders, setOrders] = useState(initialOrders)
  const [products, setProducts] = useState(initialProducts)
  const [messages, setMessages] = useState(initialMessages)
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [selectedMessage, setSelectedMessage] = useState(null)
  const [editingProduct, setEditingProduct] = useState(null)
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
    description: "",
    image: ""
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-yellow-100 text-yellow-800"
      case "shipped": return "bg-blue-100 text-blue-800"
      case "delivered": return "bg-green-100 text-green-800"
      case "cancelled": return "bg-red-100 text-red-800"
      case "unread": return "bg-red-100 text-red-800"
      case "read": return "bg-gray-100 text-gray-800"
      case "urgent": return "bg-red-500 text-white"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ))
  }

  const deleteProduct = (productId: number) => {
    setProducts(products.filter(product => product.id !== productId))
  }

  const addProduct = async () => {
    if (newProduct.name && newProduct.price && newProduct.stock && newProduct.category) {
      setIsAddingProduct(true);
      try {
        // Send to backend API
        const response = await fetch('/api/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: newProduct.name,
            price: parseFloat(newProduct.price),
            stock: parseInt(newProduct.stock),
            category: newProduct.category,
            description: newProduct.description,
            image: newProduct.image || "/placeholder.svg"
          }),
        });
  
        if (response.ok) {
          const createdProduct = await response.json();
          
          // Update local state with the new product from backend
          setProducts([...products, createdProduct]);
          
          // Reset form
          setNewProduct({ 
            name: "", 
            price: "", 
            stock: "", 
            category: "", 
            description: "", 
            image: "" 
          });
          
          // Optional: Show success message
          console.log('Product added successfully!');
        } else {
          console.error('Failed to add product');
        }
      } catch (error) {
        console.error('Error adding product:', error);
      } finally {
        setIsAddingProduct(false);
      }
    }
  };

  const updateProduct = (updatedProduct) => {
    setProducts(products.map(product => 
      product.id === updatedProduct.id ? updatedProduct : product
    ))
    setEditingProduct(null)
  }

  const markMessageAsRead = (messageId: number) => {
    setMessages(messages.map(message => 
      message.id === messageId ? { ...message, status: "read" } : message
    ))
  }

  const deleteMessage = (messageId: number) => {
    setMessages(messages.filter(message => message.id !== messageId))
  }

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Navigation */}
      <nav className="bg-red-800 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Grill className="h-8 w-8 text-yellow-400" />
            <span className="text-xl font-bold">Family BBQ Pro - Admin</span>
          </Link>
          <div className="flex space-x-4">
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-red-800" asChild>
              <Link href="/">View Store</Link>
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-red-800">
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-red-800">Family BBQ Admin Dashboard</h1>

        {/* Enhanced Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="border-red-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-red-800">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">$12,345</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card className="border-red-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-red-800">Family Orders</CardTitle>
              <ShoppingCart className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{orders.length}</div>
              <p className="text-xs text-muted-foreground">
                {orders.filter(o => o.status === 'pending').length} pending
              </p>
            </CardContent>
          </Card>
          <Card className="border-red-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-red-800">BBQ Products</CardTitle>
              <Package className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{products.length}</div>
              <p className="text-xs text-muted-foreground">
                {products.filter(p => p.stock < 20).length} low stock
              </p>
            </CardContent>
          </Card>
          <Card className="border-red-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-red-800">Family Messages</CardTitle>
              <MessageSquare className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{messages.length}</div>
              <p className="text-xs text-muted-foreground">
                {messages.filter(m => m.status === 'unread' || m.status === 'urgent').length} unread
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-red-100">
            <TabsTrigger value="orders" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">Family Orders</TabsTrigger>
            <TabsTrigger value="products" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">BBQ Products</TabsTrigger>
            <TabsTrigger value="messages" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">Customer Messages</TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">Analytics</TabsTrigger>
          </TabsList>

          {/* Enhanced Orders Tab */}
          <TabsContent value="orders">
            <Card className="border-red-200">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-red-800">Family Order Management</CardTitle>
                  <CardDescription>View and manage customer BBQ orders</CardDescription>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="border-red-200 text-red-600 hover:bg-red-50">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                  <Button variant="outline" size="sm" className="border-red-200 text-red-600 hover:bg-red-50">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <div>{order.email}</div>
                            <div className="text-gray-500">{order.phone}</div>
                          </div>
                        </TableCell>
                        <TableCell>${order.total.toFixed(2)}</TableCell>
                        <TableCell>
                          <Select 
                            value={order.status} 
                            onValueChange={(value) => updateOrderStatus(order.id, value)}
                          >
                            <SelectTrigger className="w-32">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pending">Pending</SelectItem>
                              <SelectItem value="shipped">Shipped</SelectItem>
                              <SelectItem value="delivered">Delivered</SelectItem>
                              <SelectItem value="cancelled">Cancelled</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="sm" onClick={() => setSelectedOrder(order)}>
                                  <Eye className="h-4 w-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-2xl">
                                <DialogHeader>
                                  <DialogTitle>Family Order Details - {order.id}</DialogTitle>
                                  <DialogDescription>
                                    Complete order information and BBQ items
                                  </DialogDescription>
                                </DialogHeader>
                                {selectedOrder && (
                                  <div className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                      <div>
                                        <h3 className="font-semibold mb-2">Customer Information</h3>
                                        <div className="space-y-1 text-sm">
                                          <p><strong>Name:</strong> {selectedOrder.customer}</p>
                                          <p><strong>Email:</strong> {selectedOrder.email}</p>
                                          <p><strong>Phone:</strong> {selectedOrder.phone}</p>
                                          <p><strong>Address:</strong> {selectedOrder.shippingAddress}</p>
                                        </div>
                                      </div>
                                      <div>
                                        <h3 className="font-semibold mb-2">Order Information</h3>
                                        <div className="space-y-1 text-sm">
                                          <p><strong>Order ID:</strong> {selectedOrder.id}</p>
                                          <p><strong>Date:</strong> {selectedOrder.date}</p>
                                          <p><strong>Status:</strong> 
                                            <Badge className={`ml-2 ${getStatusColor(selectedOrder.status)}`}>
                                              {selectedOrder.status}
                                            </Badge>
                                          </p>
                                          <p><strong>Total:</strong> ${selectedOrder.total.toFixed(2)}</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      <h3 className="font-semibold mb-2">BBQ Items Ordered</h3>
                                      <Table>
                                        <TableHeader>
                                          <TableRow>
                                            <TableHead>Product</TableHead>
                                            <TableHead>Quantity</TableHead>
                                            <TableHead>Price</TableHead>
                                            <TableHead>Total</TableHead>
                                          </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                          {selectedOrder.items.map((item, index) => (
                                            <TableRow key={index}>
                                              <TableCell>{item.name}</TableCell>
                                              <TableCell>{item.quantity}</TableCell>
                                              <TableCell>${item.price.toFixed(2)}</TableCell>
                                              <TableCell>${(item.quantity * item.price).toFixed(2)}</TableCell>
                                            </TableRow>
                                          ))}
                                        </TableBody>
                                      </Table>
                                    </div>
                                  </div>
                                )}
                              </DialogContent>
                            </Dialog>
                            <Button variant="outline" size="sm">
                              <Mail className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Enhanced Products Tab */}
          <TabsContent value="products">
            <div className="space-y-6">
              <Card className="border-red-200">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-red-800">BBQ Product Management</CardTitle>
                    <CardDescription>Add, edit, and manage your family BBQ inventory</CardDescription>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-red-600 hover:bg-red-700">
                        <Plus className="h-4 w-4 mr-2" />
                        Add BBQ Product
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-sm">
                      <DialogHeader>
                        <DialogTitle className="text-red-800">Add New BBQ Product</DialogTitle>
                        <DialogDescription>
                          Enter the details for the new family BBQ product.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-3">
                        <div>
                          <Label htmlFor="productName" className="text-sm">Product Name</Label>
                          <Input
                            id="productName"
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                            placeholder="Enter BBQ product name"
                            className="h-8 border-red-200 focus:border-red-400"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <Label htmlFor="productPrice" className="text-sm">Price</Label>
                            <Input
                              id="productPrice"
                              type="number"
                              step="0.01"
                              value={newProduct.price}
                              onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                              placeholder="0.00"
                              className="h-8 border-red-200 focus:border-red-400"
                            />
                          </div>
                          <div>
                            <Label htmlFor="productStock" className="text-sm">Stock</Label>
                            <Input
                              id="productStock"
                              type="number"
                              value={newProduct.stock}
                              onChange={(e) => setNewProduct({...newProduct, stock: e.target.value})}
                              placeholder="0"
                              className="h-8 border-red-200 focus:border-red-400"
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="productCategory" className="text-sm">Category</Label>
                          <Select value={newProduct.category} onValueChange={(value) => setNewProduct({...newProduct, category: value})}>
                            <SelectTrigger className="h-8 border-red-200">
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Tanks">Propane Tanks</SelectItem>
                              <SelectItem value="Regulators">Regulators</SelectItem>
                              <SelectItem value="Hoses">Hoses</SelectItem>
                              <SelectItem value="Accessories">BBQ Accessories</SelectItem>
                              <SelectItem value="Safety">Safety Equipment</SelectItem>
                              <SelectItem value="Fittings">Fittings</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="productDescription" className="text-sm">Description</Label>
                          <Textarea
                            id="productDescription"
                            value={newProduct.description}
                            onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                            placeholder="Enter family-friendly product description"
                            rows={2}
                            className="text-sm border-red-200 focus:border-red-400"
                          />
                        </div>
                        <div>
                          <Label htmlFor="productImage" className="text-sm">Image URL</Label>
                          <Input
                            id="productImage"
                            value={newProduct.image}
                            onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                            placeholder="/path/to/image.png"
                            className="h-8 border-red-200 focus:border-red-400"
                          />
                        </div>
                        <Button 
                          className="w-full h-8 bg-red-600 hover:bg-red-700" 
                          onClick={addProduct}
                          disabled={isAddingProduct}
                        >
                          {isAddingProduct ? 'Adding...' : 'Add BBQ Product'}
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Image</TableHead>
                        <TableHead>Product</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Stock</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {products.map((product) => (
                        <TableRow key={product.id}>
                          <TableCell>
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              width={40}
                              height={40}
                              className="rounded"
                            />
                          </TableCell>
                          <TableCell className="font-medium">{product.name}</TableCell>
                          <TableCell>${product.price.toFixed(2)}</TableCell>
                          <TableCell>
                            <Badge variant={product.stock < 20 ? "destructive" : "secondary"}>
                              {product.stock}
                            </Badge>
                          </TableCell>
                          <TableCell>{product.category}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button variant="outline" size="sm" onClick={() => setEditingProduct(product)}>
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-md">
                                  <DialogHeader>
                                    <DialogTitle className="text-red-800">Edit BBQ Product</DialogTitle>
                                    <DialogDescription>
                                      Update product information
                                    </DialogDescription>
                                  </DialogHeader>
                                  {editingProduct && (
                                    <div className="space-y-4">
                                      <div>
                                        <Label>Product Name</Label>
                                        <Input
                                          value={editingProduct.name}
                                          onChange={(e) => setEditingProduct({...editingProduct, name: e.target.value})}
                                          className="border-red-200 focus:border-red-400"
                                        />
                                      </div>
                                      <div>
                                        <Label>Price</Label>
                                        <Input
                                          type="number"
                                          step="0.01"
                                          value={editingProduct.price}
                                          onChange={(e) => setEditingProduct({...editingProduct, price: parseFloat(e.target.value)})}
                                          className="border-red-200 focus:border-red-400"
                                        />
                                      </div>
                                      <div>
                                        <Label>Stock</Label>
                                        <Input
                                          type="number"
                                          value={editingProduct.stock}
                                          onChange={(e) => setEditingProduct({...editingProduct, stock: parseInt(e.target.value)})}
                                          className="border-red-200 focus:border-red-400"
                                        />
                                      </div>
                                      <div>
                                        <Label>Category</Label>
                                        <Select value={editingProduct.category} onValueChange={(value) => setEditingProduct({...editingProduct, category: value})}>
                                          <SelectTrigger className="border-red-200">
                                            <SelectValue />
                                          </SelectTrigger>
                                          <SelectContent>
                                            <SelectItem value="Tanks">Propane Tanks</SelectItem>
                                            <SelectItem value="Regulators">Regulators</SelectItem>
                                            <SelectItem value="Hoses">Hoses</SelectItem>
                                            <SelectItem value="Accessories">BBQ Accessories</SelectItem>
                                            <SelectItem value="Safety">Safety Equipment</SelectItem>
                                            <SelectItem value="Fittings">Fittings</SelectItem>
                                          </SelectContent>
                                        </Select>
                                      </div>
                                      <div>
                                        <Label>Description</Label>
                                        <Textarea
                                          value={editingProduct.description}
                                          onChange={(e) => setEditingProduct({...editingProduct, description: e.target.value})}
                                          className="border-red-200 focus:border-red-400"
                                        />
                                      </div>
                                      <Button className="w-full bg-red-600 hover:bg-red-700" onClick={() => updateProduct(editingProduct)}>
                                        Update Product
                                      </Button>
                                    </div>
                                  )}
                                </DialogContent>
                              </Dialog>
                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <Button variant="outline" size="sm">
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogTitle>Delete BBQ Product</AlertDialogTitle>
                                    <AlertDialogDescription>
                                      Are you sure you want to delete "{product.name}"? This action cannot be undone.
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction onClick={() => deleteProduct(product.id)} className="bg-red-600 hover:bg-red-700">
                                      Delete
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Enhanced Messages Tab */}
          <TabsContent value="messages">
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-red-800">Family Customer Messages</CardTitle>
                <CardDescription>View and respond to family BBQ inquiries</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Priority</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {messages.map((message) => (
                      <TableRow key={message.id} className={message.status === 'urgent' ? 'bg-red-50' : ''}>
                        <TableCell>
                          {message.priority === 'high' ? (
                            <Badge variant="destructive">High</Badge>
                          ) : (
                            <Badge variant="secondary">Normal</Badge>
                          )}
                        </TableCell>
                        <TableCell className="font-medium">{message.name}</TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <div>{message.email}</div>
                            <div className="text-gray-500">{message.phone}</div>
                          </div>
                        </TableCell>
                        <TableCell>{message.subject}</TableCell>
                        <TableCell>{message.date}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(message.status)}>
                            {message.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="sm" onClick={() => setSelectedMessage(message)}>
                                  <Eye className="h-4 w-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-2xl">
                                <DialogHeader>
                                  <DialogTitle>Family Message from {message.name}</DialogTitle>
                                  <DialogDescription>
                                    {message.subject} - {message.date}
                                  </DialogDescription>
                                </DialogHeader>
                                {selectedMessage && (
                                  <div className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                      <div>
                                        <h3 className="font-semibold mb-2">Contact Information</h3>
                                        <div className="space-y-1 text-sm">
                                          <p><strong>Name:</strong> {selectedMessage.name}</p>
                                          <p><strong>Email:</strong> {selectedMessage.email}</p>
                                          <p><strong>Phone:</strong> {selectedMessage.phone}</p>
                                        </div>
                                      </div>
                                      <div>
                                        <h3 className="font-semibold mb-2">Message Details</h3>
                                        <div className="space-y-1 text-sm">
                                          <p><strong>Subject:</strong> {selectedMessage.subject}</p>
                                          <p><strong>Date:</strong> {selectedMessage.date}</p>
                                          <p><strong>Priority:</strong> 
                                            <Badge className={`ml-2 ${selectedMessage.priority === 'high' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'}`}>
                                              {selectedMessage.priority}
                                            </Badge>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div>
