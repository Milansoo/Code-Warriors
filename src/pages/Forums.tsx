
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Search,
  MessageSquare,
  Users,
  Calendar,
  ThumbsUp,
  Eye,
  Clock,
  Pin,
  ArrowUpRight,
  Filter,
  PlusCircle
} from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Mock data for forums
const forumTopicsData = [
  {
    id: 1,
    title: "Environmental Impact of New Zoning Laws",
    category: "Environmental",
    author: "Maria Johnson",
    authorRole: "Community Advocate",
    authorAvatar: "MJ",
    replies: 42,
    views: 312,
    lastActive: "2 hours ago",
    isPinned: true,
    isExpertModerated: true,
  },
  {
    id: 2,
    title: "Public Transportation Improvements Discussion",
    category: "Transportation",
    author: "David Chen",
    authorRole: "Urban Planner",
    authorAvatar: "DC",
    replies: 35,
    views: 289,
    lastActive: "5 hours ago",
    isPinned: false,
    isExpertModerated: true,
  },
  {
    id: 3,
    title: "Downtown Revitalization Project Feedback",
    category: "Infrastructure",
    author: "Samantha Lee",
    authorRole: "Resident",
    authorAvatar: "SL",
    replies: 68,
    views: 541,
    lastActive: "1 day ago",
    isPinned: true,
    isExpertModerated: false,
  },
  {
    id: 4,
    title: "School Budget Allocation Debate",
    category: "Education",
    author: "James Wilson",
    authorRole: "Parent Council",
    authorAvatar: "JW",
    replies: 87,
    views: 623,
    lastActive: "2 days ago",
    isPinned: false,
    isExpertModerated: true,
  },
  {
    id: 5,
    title: "New Park Design Suggestions",
    category: "Parks & Recreation",
    author: "Elena Martinez",
    authorRole: "Landscape Architect",
    authorAvatar: "EM",
    replies: 29,
    views: 246,
    lastActive: "3 days ago",
    isPinned: false,
    isExpertModerated: false,
  },
  {
    id: 6,
    title: "Affordable Housing Options in City Center",
    category: "Housing",
    author: "Michael Brown",
    authorRole: "Housing Advocate",
    authorAvatar: "MB",
    replies: 53,
    views: 412,
    lastActive: "4 days ago",
    isPinned: false,
    isExpertModerated: false,
  },
  {
    id: 7,
    title: "Traffic Congestion Solutions",
    category: "Transportation",
    author: "Sarah Anderson",
    authorRole: "Civil Engineer",
    authorAvatar: "SA",
    replies: 41,
    views: 287,
    lastActive: "5 days ago",
    isPinned: false,
    isExpertModerated: true,
  },
  {
    id: 8,
    title: "Public Health Initiatives Post-Pandemic",
    category: "Healthcare",
    author: "Dr. Robert Kim",
    authorRole: "Public Health Officer",
    authorAvatar: "RK",
    replies: 32,
    views: 314,
    lastActive: "6 days ago",
    isPinned: false,
    isExpertModerated: true,
  }
];

const upcomingEventsData = [
  {
    id: 1,
    title: "Virtual Town Hall: Environmental Policy Updates",
    date: "May 15, 2025",
    time: "6:00 PM - 8:00 PM",
    attendees: 124,
    isVirtual: true,
    category: "Environmental",
  },
  {
    id: 2,
    title: "Transportation Committee Public Meeting",
    date: "May 20, 2025",
    time: "5:30 PM - 7:30 PM",
    attendees: 87,
    isVirtual: false,
    category: "Transportation",
  },
  {
    id: 3,
    title: "School Budget Town Hall",
    date: "May 25, 2025",
    time: "7:00 PM - 9:00 PM",
    attendees: 156,
    isVirtual: true,
    category: "Education",
  },
];

const categoryColors: Record<string, string> = {
  "Environmental": "bg-green-100 text-green-800",
  "Transportation": "bg-blue-100 text-blue-800",
  "Infrastructure": "bg-amber-100 text-amber-800",
  "Education": "bg-purple-100 text-purple-800",
  "Parks & Recreation": "bg-emerald-100 text-emerald-800",
  "Housing": "bg-red-100 text-red-800",
  "Healthcare": "bg-sky-100 text-sky-800",
  "Public Safety": "bg-orange-100 text-orange-800",
};

const Forums = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  // Filter forum topics based on search and category
  const filteredTopics = forumTopicsData.filter(topic => {
    const matchesSearch = topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      topic.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      topic.author.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || topic.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Community Forums</h1>
              <p className="text-muted-foreground mt-2">
                Connect with fellow citizens and discuss important community issues
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button className="bg-civic-purple hover:bg-civic-purple-dark">
                <PlusCircle className="mr-2 h-4 w-4" />
                Start New Discussion
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div 
                    className={`flex justify-between items-center p-2 rounded-md cursor-pointer hover:bg-muted ${selectedCategory === 'all' ? 'bg-muted' : ''}`}
                    onClick={() => setSelectedCategory('all')}
                  >
                    <span>All Categories</span>
                    <Badge variant="outline">{forumTopicsData.length}</Badge>
                  </div>
                  {Array.from(new Set(forumTopicsData.map(t => t.category))).map((category, i) => (
                    <div 
                      key={i} 
                      className={`flex justify-between items-center p-2 rounded-md cursor-pointer hover:bg-muted ${selectedCategory === category ? 'bg-muted' : ''}`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      <span>{category}</span>
                      <Badge variant="outline">
                        {forumTopicsData.filter(t => t.category === category).length}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                  <CardDescription>
                    Virtual and in-person engagement opportunities
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingEventsData.map((event) => (
                    <div key={event.id} className="border rounded-lg p-3 hover:shadow-sm transition-shadow">
                      <h3 className="font-medium text-sm">{event.title}</h3>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex justify-between items-center mt-3">
                        <Badge variant="outline" className="text-xs">
                          {event.isVirtual ? 'Virtual' : 'In-Person'}
                        </Badge>
                        <Badge className={categoryColors[event.category] || 'bg-gray-100 text-gray-800'}>
                          {event.category}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Events
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Community Guidelines</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p>
                    Be respectful and constructive in all discussions.
                  </p>
                  <p>
                    Focus on the issues, not personal attacks.
                  </p>
                  <p>
                    Share experiences and evidence to support your views.
                  </p>
                  <p>
                    Expert-moderated forums are facilitated by subject matter experts.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="p-0 h-auto">
                    Read Complete Guidelines
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Search discussions by title, category, or author..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex">
                  <Select defaultValue="latest">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="latest">Latest Activity</SelectItem>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="replies">Most Replies</SelectItem>
                      <SelectItem value="views">Most Views</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Tabs defaultValue="all">
                <TabsList>
                  <TabsTrigger value="all">All Discussions</TabsTrigger>
                  <TabsTrigger value="expert">Expert Moderated</TabsTrigger>
                  <TabsTrigger value="trending">Trending</TabsTrigger>
                  <TabsTrigger value="my">My Discussions</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all" className="mt-6">
                  <div className="space-y-4">
                    {filteredTopics.map((topic) => (
                      <div key={topic.id} className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src="" />
                            <AvatarFallback className="bg-civic-purple text-white">
                              {topic.authorAvatar}
                            </AvatarFallback>
                          </Avatar>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap gap-2 mb-1">
                              {topic.isPinned && (
                                <Badge variant="outline" className="text-xs flex items-center gap-1">
                                  <Pin className="h-3 w-3" />
                                  Pinned
                                </Badge>
                              )}
                              {topic.isExpertModerated && (
                                <Badge className="bg-civic-purple/10 text-civic-purple text-xs">
                                  Expert Moderated
                                </Badge>
                              )}
                              <Badge className={categoryColors[topic.category] || 'bg-gray-100 text-gray-800'}>
                                {topic.category}
                              </Badge>
                            </div>
                            
                            <h3 className="font-semibold text-base truncate">{topic.title}</h3>
                            
                            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-muted-foreground">
                              <span>Posted by {topic.author}</span>
                              <span className="flex items-center gap-1">
                                <MessageSquare className="h-3.5 w-3.5" />
                                {topic.replies} replies
                              </span>
                              <span className="flex items-center gap-1">
                                <Eye className="h-3.5 w-3.5" />
                                {topic.views} views
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3.5 w-3.5" />
                                {topic.lastActive}
                              </span>
                            </div>
                          </div>
                          
                          <Button size="sm" variant="ghost">
                            <ArrowUpRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="expert" className="mt-6">
                  <div className="space-y-4">
                    {filteredTopics.filter(t => t.isExpertModerated).map((topic) => (
                      <div key={topic.id} className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src="" />
                            <AvatarFallback className="bg-civic-purple text-white">
                              {topic.authorAvatar}
                            </AvatarFallback>
                          </Avatar>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap gap-2 mb-1">
                              {topic.isPinned && (
                                <Badge variant="outline" className="text-xs flex items-center gap-1">
                                  <Pin className="h-3 w-3" />
                                  Pinned
                                </Badge>
                              )}
                              <Badge className="bg-civic-purple/10 text-civic-purple text-xs">
                                Expert Moderated
                              </Badge>
                              <Badge className={categoryColors[topic.category] || 'bg-gray-100 text-gray-800'}>
                                {topic.category}
                              </Badge>
                            </div>
                            
                            <h3 className="font-semibold text-base truncate">{topic.title}</h3>
                            
                            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-muted-foreground">
                              <span>Posted by {topic.author} • <span className="text-civic-purple">{topic.authorRole}</span></span>
                              <span className="flex items-center gap-1">
                                <MessageSquare className="h-3.5 w-3.5" />
                                {topic.replies} replies
                              </span>
                              <span className="flex items-center gap-1">
                                <Eye className="h-3.5 w-3.5" />
                                {topic.views} views
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3.5 w-3.5" />
                                {topic.lastActive}
                              </span>
                            </div>
                          </div>
                          
                          <Button size="sm" variant="ghost">
                            <ArrowUpRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="trending" className="mt-6">
                  <div className="space-y-4">
                    {filteredTopics
                      .sort((a, b) => b.views - a.views)
                      .slice(0, 5)
                      .map((topic) => (
                        <div key={topic.id} className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-start gap-4">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src="" />
                              <AvatarFallback className="bg-civic-purple text-white">
                                {topic.authorAvatar}
                              </AvatarFallback>
                            </Avatar>
                            
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-wrap gap-2 mb-1">
                                <Badge className="bg-orange-100 text-orange-800 text-xs">
                                  Trending
                                </Badge>
                                <Badge className={categoryColors[topic.category] || 'bg-gray-100 text-gray-800'}>
                                  {topic.category}
                                </Badge>
                              </div>
                              
                              <h3 className="font-semibold text-base truncate">{topic.title}</h3>
                              
                              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-muted-foreground">
                                <span>Posted by {topic.author}</span>
                                <span className="flex items-center gap-1">
                                  <MessageSquare className="h-3.5 w-3.5" />
                                  {topic.replies} replies
                                </span>
                                <span className="flex items-center gap-1">
                                  <Eye className="h-3.5 w-3.5" />
                                  {topic.views} views
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="h-3.5 w-3.5" />
                                  {topic.lastActive}
                                </span>
                              </div>
                            </div>
                            
                            <Button size="sm" variant="ghost">
                              <ArrowUpRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="my" className="mt-6">
                  <div className="text-center py-12">
                    <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                      <MessageSquare className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">No Discussions Yet</h3>
                    <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                      You haven't participated in any discussions yet. Join the conversation to see your discussions here.
                    </p>
                    <Button className="bg-civic-purple hover:bg-civic-purple-dark">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Start New Discussion
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Forums;
