"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Heart, Share2, Star, MapPin, Calendar, Package, Coins, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock data for the item
const itemData = {
  id: 1,
  title: "Vintage Denim Jacket",
  description:
    "Beautiful vintage denim jacket in excellent condition. Perfect for layering and adding a classic touch to any outfit. Features original brass buttons and minimal wear. Smoke-free home.",
  category: "Outerwear",
  type: "Jacket",
  size: "M",
  condition: "Excellent",
  tags: ["vintage", "denim", "classic", "unisex"],
  images: [
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
  ],
  points: 15,
  status: "Available",
  uploader: {
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4.8,
    totalSwaps: 23,
    joinDate: "2023-06-15",
    location: "San Francisco, CA",
  },
  uploadDate: "2024-01-20",
  views: 47,
  likes: 12,
}

export default function ItemDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/browse">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Browse
              </Button>
            </Link>
          </div>

          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="text-xl font-bold text-green-800">ReWear</span>
          </Link>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => setIsLiked(!isLiked)}>
              <Heart className={`h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
            </Button>
            <Button variant="ghost" size="sm">
              <Share2 className="h-4 w-4" />
            </Button>
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
                  className={`aspect-square overflow-hidden rounded-lg border-2 transition-colors ${
                    selectedImage === index ? "border-green-600" : "border-gray-200"
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

          {/* Item Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{itemData.title}</h1>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline">{itemData.category}</Badge>
                    <Badge variant="outline">{itemData.type}</Badge>
                    <Badge className="bg-green-600">{itemData.condition}</Badge>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600 mb-1">{itemData.points} points</div>
                  <Badge className={`${itemData.status === "Available" ? "bg-green-600" : "bg-yellow-600"}`}>
                    {itemData.status}
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <span className="text-sm text-gray-600">Size</span>
                  <div className="font-semibold">{itemData.size}</div>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Condition</span>
                  <div className="font-semibold">{itemData.condition}</div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
                <p className="text-gray-700 leading-relaxed">{itemData.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {itemData.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <Separator />

            {/* Uploader Info */}
            <Card>
              <CardContent className="p-6">
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
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{itemData.uploader.name}</h4>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{itemData.uploader.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Package className="h-4 w-4" />
                        <span>{itemData.uploader.totalSwaps} swaps</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{itemData.uploader.location}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                </div>

                <div className="text-sm text-gray-600">
                  <div className="flex items-center gap-1 mb-1">
                    <Calendar className="h-4 w-4" />
                    <span>Member since {new Date(itemData.uploader.joinDate).toLocaleDateString()}</span>
                  </div>
                  <div>Listed on {new Date(itemData.uploadDate).toLocaleDateString()}</div>
                </div>
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

            {/* Stats */}
            <div className="flex items-center justify-between text-sm text-gray-600 pt-4 border-t">
              <span>{itemData.views} views</span>
              <span>{itemData.likes} likes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
