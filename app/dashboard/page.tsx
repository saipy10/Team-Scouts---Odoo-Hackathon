"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Plus, Search, LogOut, Settings, Star, Clock, CheckCircle, Coins, Leaf } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ProtectedRoute } from "@/components/protected-route"
import { useAuth } from "@/contexts/auth-context"

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
  const { user, logout } = useAuth()

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <Leaf className="h-8 w-8 text-green-600 dark:text-green-400" />
                <span className="text-xl font-bold text-green-800 dark:text-green-400">ReWear</span>
              </Link>

              <nav className="hidden md:flex items-center gap-6">
                <Link
                  href="/browse"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                >
                  <Search className="h-4 w-4" />
                  Browse Items
                </Link>
                <Link
                  href="/items/new"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                >
                  <Plus className="h-4 w-4" />
                  Add Item
                </Link>
              </nav>

              <div className="flex items-center gap-3">
                <Button variant="ghost" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" onClick={logout}>
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Search Bar */}
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search your items..."
                className="pl-10 h-10 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <Avatar className="h-20 w-20 mx-auto mb-4">
                      <AvatarImage src={user?.avatar || "/placeholder.svg"} alt={user?.name} />
                      <AvatarFallback>
                        {user?.name
                          ?.split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{user?.name}</h2>
                    <p className="text-gray-600 dark:text-gray-300">{user?.email}</p>
                    <div className="flex items-center justify-center gap-1 mt-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">4.8</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Coins className="h-5 w-5 text-green-600 dark:text-green-400" />
                        <span className="font-medium text-gray-900 dark:text-white">Points</span>
                      </div>
                      <span className="text-xl font-bold text-green-600 dark:text-green-400">{user?.points}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">12</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">Total Swaps</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">{userItems.length}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">Listed Items</div>
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
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">My Listed Items</h3>
                    <Link href="/items/new">
                      <Button className="bg-green-600 hover:bg-green-700">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Item
                      </Button>
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {userItems.map((item) => (
                      <Card
                        key={item.id}
                        className="group hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                      >
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
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                            <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
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
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Ongoing Swaps</h3>

                  <div className="space-y-4">
                    {ongoingSwaps.map((swap) => (
                      <Card key={swap.id} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
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
                              <h4 className="font-semibold text-gray-900 dark:text-white">{swap.item}</h4>
                              <p className="text-gray-600 dark:text-gray-300">Swap with {swap.withUser}</p>
                              <div className="flex items-center gap-2 mt-2">
                                <Clock className="h-4 w-4 text-yellow-500" />
                                <span className="text-sm text-gray-600 dark:text-gray-300">{swap.status}</span>
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
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Completed Swaps</h3>

                  <div className="space-y-4">
                    {completedSwaps.map((swap) => (
                      <Card key={swap.id} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
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
                              <h4 className="font-semibold text-gray-900 dark:text-white">{swap.item}</h4>
                              <p className="text-gray-600 dark:text-gray-300">Swapped with {swap.withUser}</p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">{swap.date}</p>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center gap-1 mb-2">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span className="text-sm text-green-600 dark:text-green-400">Completed</span>
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
    </ProtectedRoute>
  )
}
