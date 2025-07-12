"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Search, LogOut, Settings, Star, Clock, CheckCircle, Coins } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const userItems = [
  {
    id: 1,
    title: "Vintage Leather Jacket",
    image: "/placeholder.svg?height=200&width=200",
    status: "Available",
    views: 24,
    likes: 8,
  },
  {
    id: 2,
    title: "Summer Floral Dress",
    image: "/placeholder.svg?height=200&width=200",
    status: "Pending",
    views: 12,
    likes: 3,
  },
]

const ongoingSwaps = [
  {
    id: 1,
    item: "Blue Denim Jeans",
    withUser: "Sarah M.",
    status: "Waiting for response",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    item: "Wool Sweater",
    withUser: "Mike R.",
    status: "Approved - Arrange pickup",
    image: "/placeholder.svg?height=100&width=100",
  },
]

const completedSwaps = [
  {
    id: 1,
    item: "Black Sneakers",
    withUser: "Emma L.",
    date: "2024-01-15",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    item: "Cotton T-Shirt",
    withUser: "Alex K.",
    date: "2024-01-10",
    rating: 4,
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function DashboardPage() {
  const [user] = useState({
    name: "John Doe",
    email: "john@example.com",
    avatar: "/placeholder.svg?height=100&width=100",
    points: 45,
    totalSwaps: 12,
    rating: 4.8,
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
            <Link href="/browse" className="flex items-center gap-2 text-gray-600 hover:text-green-600">
              <Search className="h-4 w-4" />
              Browse Items
            </Link>
            <Link href="/items/new" className="flex items-center gap-2 text-gray-600 hover:text-green-600">
              <Plus className="h-4 w-4" />
              Add Item
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Avatar className="h-20 w-20 mx-auto mb-4">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                    <AvatarFallback>
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-semibold text-gray-900">{user.name}</h2>
                  <p className="text-gray-600">{user.email}</p>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{user.rating}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Coins className="h-5 w-5 text-green-600" />
                      <span className="font-medium">Points</span>
                    </div>
                    <span className="text-xl font-bold text-green-600">{user.points}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900">{user.totalSwaps}</div>
                      <div className="text-sm text-gray-600">Total Swaps</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900">{userItems.length}</div>
                      <div className="text-sm text-gray-600">Listed Items</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <Link href="/items/new">
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <Plus className="h-4 w-4 mr-2" />
                      Add New Item
                    </Button>
                  </Link>
                  <Link href="/browse">
                    <Button variant="outline" className="w-full bg-transparent">
                      <Search className="h-4 w-4 mr-2" />
                      Browse Items
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="items" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="items">My Items</TabsTrigger>
                <TabsTrigger value="ongoing">Ongoing Swaps</TabsTrigger>
                <TabsTrigger value="history">Swap History</TabsTrigger>
              </TabsList>

              <TabsContent value="items" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-900">My Listed Items</h3>
                  <Link href="/items/new">
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Item
                    </Button>
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {userItems.map((item) => (
                    <Card key={item.id} className="group hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <div className="relative">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            width={200}
                            height={200}
                            className="w-full h-48 object-cover rounded-t-lg"
                          />
                          <Badge
                            className={`absolute top-3 right-3 ${
                              item.status === "Available" ? "bg-green-600" : "bg-yellow-600"
                            }`}
                          >
                            {item.status}
                          </Badge>
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                          <div className="flex items-center justify-between text-sm text-gray-600">
                            <span>{item.views} views</span>
                            <span>{item.likes} likes</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="ongoing" className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Ongoing Swaps</h3>

                <div className="space-y-4">
                  {ongoingSwaps.map((swap) => (
                    <Card key={swap.id}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <Image
                            src={swap.image || "/placeholder.svg"}
                            alt={swap.item}
                            width={100}
                            height={100}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">{swap.item}</h4>
                            <p className="text-gray-600">Swap with {swap.withUser}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <Clock className="h-4 w-4 text-yellow-500" />
                              <span className="text-sm text-gray-600">{swap.status}</span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="history" className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Completed Swaps</h3>

                <div className="space-y-4">
                  {completedSwaps.map((swap) => (
                    <Card key={swap.id}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <Image
                            src={swap.image || "/placeholder.svg"}
                            alt={swap.item}
                            width={100}
                            height={100}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">{swap.item}</h4>
                            <p className="text-gray-600">Swapped with {swap.withUser}</p>
                            <p className="text-sm text-gray-500">{swap.date}</p>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-1 mb-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-sm text-green-600">Completed</span>
                            </div>
                            <div className="flex items-center gap-1">
                              {Array.from({ length: swap.rating }).map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
