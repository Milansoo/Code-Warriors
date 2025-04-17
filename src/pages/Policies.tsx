
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Search, 
  Calendar, 
  MessageSquare, 
  BarChart, 
  FileText,
  Clock,
  Filter
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

// Mock data for policies
const policiesData = [
  {
    id: 1,
    title: "Environmental Protection Standards 2025",
    agency: "Environmental Protection Agency",
    description: "Proposed updates to air and water quality standards for commercial zones.",
    deadline: "June 15, 2025",
    daysLeft: 45,
    status: "Open",
    comments: 328,
    category: "Environmental",
    impact: "High"
  },
  {
    id: 2,
    title: "City Center Redevelopment Plan",
    agency: "Urban Planning Department",
    description: "Proposal for revitalizing the downtown area with mixed-use development and public spaces.",
    deadline: "May 10, 2025",
    daysLeft: 12,
    status: "Open",
    comments: 452,
    category: "Infrastructure",
    impact: "High"
  },
  {
    id: 3,
    title: "Public Transportation Funding Proposal",
    agency: "Transit Authority",
    description: "Plan to allocate funds for expanding bus routes and improving transit infrastructure.",
    deadline: "July 20, 2025",
    daysLeft: 78,
    status: "Open",
    comments: 213,
    category: "Transportation",
    impact: "Medium"
  },
  {
    id: 4,
    title: "Affordable Housing Initiative",
    agency: "Housing Department",
    description: "Policy to increase affordable housing units in new residential developments.",
    deadline: "August 5, 2025",
    daysLeft: 94,
    status: "Open",
    comments: 187,
    category: "Housing",
    impact: "High"
  },
  {
    id: 5,
    title: "School Boundary Redistricting",
    agency: "Education Department",
    description: "Proposed changes to school assignment zones to balance enrollment.",
    deadline: "April 28, 2025",
    daysLeft: 3,
    status: "Closing Soon",
    comments: 615,
    category: "Education",
    impact: "Medium"
  },
  {
    id: 6,
    title: "Public Safety Camera Deployment",
    agency: "Police Department",
    description: "Plan to install security cameras in public areas for safety monitoring.",
    deadline: "April 30, 2025",
    daysLeft: 5,
    status: "Closing Soon",
    comments: 389,
    category: "Public Safety",
    impact: "Medium"
  },
  {
    id: 7,
    title: "Community Garden Expansion",
    agency: "Parks & Recreation",
    description: "Initiative to convert vacant lots into community garden spaces.",
    deadline: "September 15, 2025",
    daysLeft: 130,
    status: "Open",
    comments: 94,
    category: "Environmental",
    impact: "Low"
  },
  {
    id: 8,
    title: "Public Health Emergency Response Plan",
    agency: "Health Department",
    description: "Updated procedures for coordinating emergency health services.",
    deadline: "June 30, 2025",
    daysLeft: 60,
    status: "Open",
    comments: 145,
    category: "Healthcare",
    impact: "High"
  },
];

const Policies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedImpact, setSelectedImpact] = useState("all");

  // Filter policies based on search and filters
  const filteredPolicies = policiesData.filter(policy => {
    // Search filter
    const matchesSearch = policy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      policy.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      policy.agency.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Category filter
    const matchesCategory = selectedCategory === "all" || policy.category === selectedCategory;
    
    // Status filter
    const matchesStatus = selectedStatus === "all" || policy.status === selectedStatus;
    
    // Impact filter
    const matchesImpact = selectedImpact === "all" || policy.impact === selectedImpact;
    
    return matchesSearch && matchesCategory && matchesStatus && matchesImpact;
  });

  // Get status badge color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-green-100 text-green-800 hover:bg-green-100";
      case "Closing Soon":
        return "bg-amber-100 text-amber-800 hover:bg-amber-100";
      case "Closed":
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
      default:
        return "bg-blue-100 text-blue-800 hover:bg-blue-100";
    }
  };

  // Get impact badge color
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High":
        return "bg-red-100 text-red-800 hover:bg-red-100";
      case "Medium":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100";
      case "Low":
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Open Policies</h1>
              <p className="text-muted-foreground mt-2">
                Browse, search, and comment on policies currently open for public input
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button asChild className="bg-civic-purple hover:bg-civic-purple-dark">
                <Link to="/comment">Submit a Comment</Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
            <div className="lg:col-span-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search policies by title, description, or agency..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" className="gap-2 flex-1">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
              <Select defaultValue="relevance">
                <SelectTrigger className="w-[130px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="deadline">Deadline</SelectItem>
                  <SelectItem value="comments">Most Comments</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Filters sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg border p-4">
                <h3 className="font-medium text-lg mb-3">Filter By</h3>
                
                <div className="space-y-4">
                  {/* Category filter */}
                  <div>
                    <h4 className="text-sm font-medium mb-2">Category</h4>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="All Categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="Environmental">Environmental</SelectItem>
                        <SelectItem value="Infrastructure">Infrastructure</SelectItem>
                        <SelectItem value="Transportation">Transportation</SelectItem>
                        <SelectItem value="Housing">Housing</SelectItem>
                        <SelectItem value="Education">Education</SelectItem>
                        <SelectItem value="Public Safety">Public Safety</SelectItem>
                        <SelectItem value="Healthcare">Healthcare</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Status filter */}
                  <div>
                    <h4 className="text-sm font-medium mb-2">Status</h4>
                    <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                      <SelectTrigger>
                        <SelectValue placeholder="All Statuses" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Statuses</SelectItem>
                        <SelectItem value="Open">Open</SelectItem>
                        <SelectItem value="Closing Soon">Closing Soon</SelectItem>
                        <SelectItem value="Closed">Closed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Impact filter */}
                  <div>
                    <h4 className="text-sm font-medium mb-2">Impact Level</h4>
                    <Select value={selectedImpact} onValueChange={setSelectedImpact}>
                      <SelectTrigger>
                        <SelectValue placeholder="All Impact Levels" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Impact Levels</SelectItem>
                        <SelectItem value="High">High</SelectItem>
                        <SelectItem value="Medium">Medium</SelectItem>
                        <SelectItem value="Low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border p-4">
                <h3 className="font-medium text-lg mb-3">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Open Policies</span>
                    <span className="font-medium">42</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Comments</span>
                    <span className="font-medium">2,483</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Agency Responses</span>
                    <span className="font-medium">68%</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Policies grid */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="grid">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-sm text-muted-foreground">
                    Showing {filteredPolicies.length} of {policiesData.length} policies
                  </p>
                  <TabsList>
                    <TabsTrigger value="grid">Grid</TabsTrigger>
                    <TabsTrigger value="list">List</TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="grid" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredPolicies.map((policy) => (
                      <Card key={policy.id} className="overflow-hidden hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-lg">{policy.title}</CardTitle>
                            <Badge className={getStatusColor(policy.status)}>
                              {policy.status}
                            </Badge>
                          </div>
                          <CardDescription className="flex items-center gap-1">
                            {policy.agency}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pb-3">
                          <p className="text-sm text-muted-foreground">{policy.description}</p>
                          <div className="flex flex-wrap gap-2 mt-3">
                            <Badge variant="outline" className="bg-muted">
                              {policy.category}
                            </Badge>
                            <Badge className={getImpactColor(policy.impact)}>
                              {policy.impact} Impact
                            </Badge>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between border-t pt-3">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{policy.deadline}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MessageSquare className="h-4 w-4" />
                            <span>{policy.comments} comments</span>
                          </div>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="list" className="mt-0">
                  <div className="space-y-3">
                    {filteredPolicies.map((policy) => (
                      <div key={policy.id} className="flex flex-col md:flex-row gap-4 p-4 bg-white rounded-lg border hover:shadow-md transition-shadow">
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                            <h3 className="font-semibold">{policy.title}</h3>
                            <Badge className={getStatusColor(policy.status)}>
                              {policy.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{policy.description}</p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>{policy.agency}</span>
                            <span>•</span>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>{policy.deadline}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col justify-between items-end gap-2 md:min-w-[100px]">
                          <div className="flex items-center gap-1 text-sm">
                            <MessageSquare className="h-4 w-4 text-civic-purple" />
                            <span className="font-medium">{policy.comments}</span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            <Badge variant="outline" className="bg-muted text-xs">
                              {policy.category}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
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

export default Policies;
