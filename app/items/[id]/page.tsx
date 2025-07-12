"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Heart, Star, Coins, MessageCircle, Leaf, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


const itemData = {
  id: 2,
  title: "Vintage Wool Blazer",
  description:
    "Timeless vintage wool blazer in outstanding condition. Ideal for elevating both casual and formal outfits. Features a structured fit, classic lapels, and original buttons. Carefully preserved in a smoke-free home, this piece adds a refined retro charm to any wardrobe.",
  category: "Outerwear",
  brand: "Raymond",
  size: "M",
  condition: "Excellent",
  color: "Charcoal Grey",
  material: "100% Wool",
  tags: ["vintage", "blazer", "formal", "unisex"],
  images: [
    "https://m.media-amazon.com/images/I/81-EMcSbl1L._SX425_.jpg?height=600&width=600",
    "https://m.media-amazon.com/images/I/81XnbRfaJgL._SX522_.jpg?height=600&width=600",
    "https://m.media-amazon.com/images/I/81-EMcSbl1L._SX425_.jpg?height=600&width=600",
  ],
  points: 18,
  status: "Available",
  uploader: {
    name: "Anany Mehta",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4.7,
    totalSwaps: 30,
    location: "Mumbai, India",
  },
  uploadDate: "2024-02-05",
  views: 39,
  likes: 15,
}


const relatedItems = [
  {
    id: 2,
    title: "Blue Denim Jeans",
    image: "/placeholder.svg?height=200&width=200",
    points: 12,
    rating: 4.7,
  },
  {
    id: 3,
    title: "White Cotton T-Shirt",
    image: "/placeholder.svg?height=200&width=200",
    points: 8,
    rating: 4.5,
  },
  {
    id: 4,
    title: "Brown Leather Boots",
    image: "/placeholder.svg?height=200&width=200",
    points: 25,
    rating: 4.9,
  },
]

export default function ItemDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Simple Header */}
      <header className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/browse">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Browse
                </Button>
              </Link>
            </div>

            <Link href="/" className="flex items-center gap-2">
              <Leaf className="h-8 w-8 text-green-600 dark:text-green-400" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">ReWear</span>
            </Link>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={() => setIsLiked(!isLiked)}>
                <Heart className={`h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-white">
              <Image
                src={itemData.images[selectedImage] || "/placeholder.svg"}
                alt={itemData.title}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-4 gap-2">
              {itemData.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded border-2 transition-colors ${
                    selectedImage === index ? "border-blue-500" : "border-gray-200"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${itemData.title} ${index + 1}`}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{itemData.title}</h1>

              <div className="flex items-center gap-1 mb-4">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(4.8) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">4.8 (24 reviews)</span>
              </div>

              <div className="text-3xl font-bold text-green-600 mb-4">{itemData.points} points</div>

              <div className="flex items-center gap-2 mb-6">
                <Badge className="bg-green-600">{itemData.condition}</Badge>
                <Badge variant="outline">{itemData.category}</Badge>
              </div>
            </div>

            <Separator />

            {/* Item Details */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Item Details</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Brand:</span>
                  <div className="font-medium">{itemData.brand}</div>
                </div>
                <div>
                  <span className="text-gray-600">Size:</span>
                  <div className="font-medium">{itemData.size}</div>
                </div>
                <div>
                  <span className="text-gray-600">Color:</span>
                  <div className="font-medium">{itemData.color}</div>
                </div>
                <div>
                  <span className="text-gray-600">Material:</span>
                  <div className="font-medium">{itemData.material}</div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Description */}
            <div>
              <h3 className="font-semibold text-lg mb-2">Description</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{itemData.description}</p>
            </div>

            {/* Tags */}
            <div>
              <h3 className="font-semibold text-lg mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {itemData.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator />

            {/* Seller Info */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={itemData.uploader.avatar || "/placeholder.svg"} alt={itemData.uploader.name} />
                    <AvatarFallback>
                      {itemData.uploader.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{itemData.uploader.name}</h4>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span>{itemData.uploader.rating}</span>
                      <span className="text-gray-600">({itemData.uploader.totalSwaps} swaps)</span>
                    </div>
                    <p className="text-sm text-gray-600">{itemData.uploader.location}</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Contact Seller
                </Button>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-green-600 hover:bg-green-700 text-lg py-6">Request Swap</Button>
              <Button variant="outline" className="w-full text-lg py-6 bg-transparent">
                <Coins className="h-5 w-5 mr-2" />
                Redeem with Points ({itemData.points} points)
              </Button>
            </div>
          </div>
        </div>

        {/* Related Items */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">You might also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <Link href={`/items/${item.id}`}>
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={200}
                      height={200}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </Link>
                  <div className="p-4">
                    <Link href={`/items/${item.id}`}>
                      <h3 className="font-medium hover:text-blue-600 transition-colors line-clamp-2">{item.title}</h3>
                    </Link>
                    <div className="flex items-center gap-1 mt-2">
                      <div className="flex items-center">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < Math.floor(item.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="text-green-600 font-semibold mt-2">{item.points} points</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
