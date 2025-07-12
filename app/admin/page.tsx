"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Check, X, Search, Eye, Trash2, Users, Package, AlertTriangle, TrendingUp } from "lucide-react"
import Image from "next/image"

const pendingItems = [
  {
    id: 1,
    title: "Vintage Leather Jacket",
    uploader: "John Doe",
    category: "Outerwear",
    condition: "Excellent",
    uploadDate: "2024-01-22",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    title: "Designer Handbag",
    uploader: "Sarah Smith",
    category: "Accessories",
    condition: "Like New",
    uploadDate: "2024-01-22",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    title: "Summer Dress",
    uploader: "Emma Wilson",
    category: "Dresses",
    condition: "Good",
    uploadDate: "2024-01-21",
    image: "/placeholder.svg?height=100&width=100",
  },
]

const allItems = [
  {
    id: 4,
    title: "Blue Denim Jeans",
    uploader: "Mike Johnson",
    category: "Bottoms",
    status: "Active",
    views: 45,
    likes: 12,
    uploadDate: "2024-01-20",
  },
  {
    id: 5,
    title: "White Sneakers",
    uploader: "Lisa Brown",
    category: "Shoes",
    status: "Swapped",
    views: 67,
    likes: 23,
    uploadDate: "2024-01-18",
  },
]

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    joinDate: "2023-12-15",
    totalItems: 5,
    totalSwaps: 12,
    rating: 4.8,
    status: "Active",
  },
  {
    id: 2,
    name: "Sarah Smith",
    email: "sarah@example.com",
    joinDate: "2023-11-20",
    totalItems: 8,
    totalSwaps: 15,
    rating: 4.9,
    status: "Active",
  },
]

export default function AdminPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const handleApprove = (itemId: number) => {
    console.log(`Approved item ${itemId}`)
    // In a real app, this would make an API call
  }

  const handleReject = (itemId: number) => {
    console.log(`Rejected item ${itemId}`)
    // In a real app, this would make an API call
  }

  const handleDeleteItem = (itemId: number) => {
    console.log(`Deleted item ${itemId}`)
    // In a real app, this would make an API call
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="text-xl font-bold text-green-800">ReWear Admin</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Button variant="outline">Logout</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">2,547</p>
                  <p className="text-gray-600 text-sm">Total Users</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <Package className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">15,234</p>
                  <p className="text-gray-600 text-sm">Total Items</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-yellow-100 rounded-full">
                  <AlertTriangle className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{pendingItems.length}</p>
                  <p className="text-gray-600 text-sm">Pending Review</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-100 rounded-full">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">8,456</p>
                  <p className="text-gray-600 text-sm">Total Swaps</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList>
            <TabsTrigger value="pending">Pending Items ({pendingItems.length})</TabsTrigger>
            <TabsTrigger value="items">All Items</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
          </TabsList>

          <TabsContent value="pending">
            <Card>
              <CardHeader>
                <CardTitle>Items Pending Review</CardTitle>
                <CardDescription>Review and approve or reject items submitted by users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={100}
                        height={100}
                        className="w-20 h-20 object-cover rounded-lg"
                      />

                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-gray-600">by {item.uploader}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="outline">{item.category}</Badge>
                          <Badge variant="secondary">{item.condition}</Badge>
                          <span className="text-sm text-gray-500">Uploaded {item.uploadDate}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                        <Button
                          size="sm"
                          className="bg-green-600 hover:bg-green-700"
                          onClick={() => handleApprove(item.id)}
                        >
                          <Check className="h-4 w-4 mr-2" />
                          Approve
                        </Button>
                        <Button variant="destructive" size="sm" onClick={() => handleReject(item.id)}>
                          <X className="h-4 w-4 mr-2" />
                          Reject
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="items">
            <Card>
              <CardHeader>
                <CardTitle>All Items</CardTitle>
                <CardDescription>Manage all items in the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Uploader</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Views</TableHead>
                      <TableHead>Likes</TableHead>
                      <TableHead>Upload Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {allItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.title}</TableCell>
                        <TableCell>{item.uploader}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{item.category}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={item.status === "Active" ? "bg-green-600" : "bg-gray-600"}>
                            {item.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{item.views}</TableCell>
                        <TableCell>{item.likes}</TableCell>
                        <TableCell>{item.uploadDate}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="destructive" size="sm" onClick={() => handleDeleteItem(item.id)}>
                              <Trash2 className="h-4 w-4" />
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

          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>View and manage platform users</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Join Date</TableHead>
                      <TableHead>Items</TableHead>
                      <TableHead>Swaps</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.joinDate}</TableCell>
                        <TableCell>{user.totalItems}</TableCell>
                        <TableCell>{user.totalSwaps}</TableCell>
                        <TableCell>{user.rating}</TableCell>
                        <TableCell>
                          <Badge className="bg-green-600">{user.status}</Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            View Profile
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
