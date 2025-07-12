"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Heart, Star, Grid, List } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const items = [
  {
    id: 1,
    title: "Vintage Denim Jacket",
    size: "M",
    condition: "Excellent",
    image: "/placeholder.svg?height=300&width=300",
    points: 15,
    category: "Outerwear",
    uploader: "Sarah J.",
    rating: 4.8,
    likes: 12,
    location: "San Francisco",
  },
  {
    id: 2,
    title: "Floral Summer Dress",
    size: "S",
    condition: "Like New",
    image: "/placeholder.svg?height=300&width=300",
    points: 12,
    category: "Dresses",
    uploader: "Emma W.",
    rating: 4.9,
    likes: 8,
    location: "Los Angeles",
  },
  {
    id: 3,
    title: "Classic White Sneakers",
    size: "9",
    condition: "Good",
    image: "/placeholder.svg?height=300&width=300",
    points: 18,
    category: "Shoes",
    uploader: "Mike R.",
    rating: 4.7,
    likes: 15,
    location: "New York",
  },
  {
    id: 4,
    title: "Wool Sweater",
    size: "L",
    condition: "Excellent",
    image: "/placeholder.svg?height=300&width=300",
    points: 20,
    category: "Knitwear",
    uploader: "Lisa B.",
    rating: 4.8,
    likes: 6,
    location: "Chicago",
  },
  {
    id: 5,
    title: "Black Leather Boots",
    size: "8",
    condition: "Good",
    image: "/placeholder.svg?height=300&width=300",
    points: 22,
    category: "Shoes",
    uploader: "Alex K.",
    rating: 4.6,
    likes: 10,
    location: "Seattle",
  },
  {
    id: 6,
    title: "Silk Blouse",
    size: "M",
    condition: "Like New",
    image: "/placeholder.svg?height=300&width=300",
    points: 16,
    category: "Tops",
    uploader: "Rachel M.",
    rating: 4.9,
    likes: 14,
    location: "Miami",
  },
]

const categories = ["All", "Tops", "Bottoms", "Dresses", "Outerwear", "Shoes", "Accessories"]
const conditions = ["All", "New", "Like New", "Excellent", "Good", "Fair"]
const sizes = ["All", "XS", "S", "M", "L", "XL", "XXL"]

export default function BrowsePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedCondition, setSelectedCondition] = useState("All")
  const [selectedSize, setSelectedSize] = useState("All")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [likedItems, setLikedItems] = useState<number[]>([])

  const toggleLike = (itemId: number) => {
    setLikedItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
    const matchesCondition = selectedCondition === "All" || item.condition === selectedCondition
    const matchesSize = selectedSize === "All" || item.size === selectedSize

    return matchesSearch && matchesCategory && matchesCondition && matchesSize
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="text-xl font-bold text-green-800">ReWear</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/dashboard" className="text-gray-600 hover:text-green-600">
              Dashboard
            </Link>
            <Link href="/items/new" className="text-gray-600 hover:text-green-600">
              List Item
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-green-600 hover:bg-green-700">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedCondition} onValueChange={setSelectedCondition}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Condition" />
                </SelectTrigger>
                <SelectContent>
                  {conditions.map((condition) => (
                    <SelectItem key={condition} value={condition}>
                      {condition}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Size" />
                </SelectTrigger>
                <SelectContent>
                  {sizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* View Toggle and Results Count */}
          <div className="flex items-center justify-between">
            <p className="text-gray-600">{filteredItems.length} items found</p>

            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Items Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Link href={`/items/${item.id}`}>
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={300}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-3 right-3 h-8 w-8 p-0 bg-white/80 hover:bg-white"
                      onClick={() => toggleLike(item.id)}
                    >
                      <Heart
                        className={`h-4 w-4 ${
                          likedItems.includes(item.id) ? "fill-red-500 text-red-500" : "text-gray-600"
                        }`}
                      />
                    </Button>
                    <Badge className="absolute top-3 left-3 bg-green-600">{item.condition}</Badge>
                  </div>
                  <div className="p-4">
                    <Link href={`/items/${item.id}`}>
                      <h3 className="font-semibold text-gray-900 mb-2 hover:text-green-600 transition-colors">
                        {item.title}
                      </h3>
                    </Link>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Size {item.size}</span>
                      <Badge variant="outline">{item.category}</Badge>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-green-600 font-semibold">{item.points} points</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-600">{item.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>by {item.uploader}</span>
                      <span>{item.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredItems.map((item) => (
              <Card key={item.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-6">
                    <Link href={`/items/${item.id}`}>
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={120}
                        height={120}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                    </Link>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <Link href={`/items/${item.id}`}>
                          <h3 className="text-xl font-semibold text-gray-900 hover:text-green-600 transition-colors">
                            {item.title}
                          </h3>
                        </Link>
                        <Button variant="ghost" size="sm" onClick={() => toggleLike(item.id)}>
                          <Heart
                            className={`h-4 w-4 ${
                              likedItems.includes(item.id) ? "fill-red-500 text-red-500" : "text-gray-600"
                            }`}
                          />
                        </Button>
                      </div>
                      <div className="flex items-center gap-4 mb-3">
                        <Badge variant="outline">{item.category}</Badge>
                        <Badge className="bg-green-600">{item.condition}</Badge>
                        <span className="text-sm text-gray-600">Size {item.size}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span className="text-green-600 font-semibold text-lg">{item.points} points</span>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm text-gray-600">{item.rating}</span>
                          </div>
                        </div>
                        <div className="text-right text-sm text-gray-600">
                          <div>by {item.uploader}</div>
                          <div>{item.location}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No items found matching your criteria.</p>
            <p className="text-gray-500 mt-2">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </div>
    </div>
  )
}
