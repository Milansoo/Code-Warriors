
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";
import { 
  BarChart, 
  LineChart, 
  PieChart, 
  Area, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  Line,
  Pie,
  Cell
} from "recharts";
import { Button } from "@/components/ui/button";
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
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import {
  Calendar,
  Download,
  Filter,
  Share,
  TrendingUp,
  TrendingDown,
  Users,
  FileText,
  BarChart2,
  PieChart as PieChartIcon,
  MessageSquare,
  CheckCircle2,
  Clock
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  const [timeFrame, setTimeFrame] = useState("6m");
  
  // Mock data for charts
  const participationData = [
    { month: 'Jan', comments: 120, users: 85 },
    { month: 'Feb', comments: 180, users: 110 },
    { month: 'Mar', comments: 250, users: 170 },
    { month: 'Apr', comments: 310, users: 195 },
    { month: 'May', comments: 290, users: 185 },
    { month: 'Jun', comments: 350, users: 220 },
  ];

  const policyImpactData = [
    { name: 'Strongly Influenced', value: 35 },
    { name: 'Somewhat Influenced', value: 45 },
    { name: 'Little/No Influence', value: 20 },
  ];

  const agencyResponseTimeData = [
    { name: 'Within 7 days', value: 45 },
    { name: 'Within 14 days', value: 30 },
    { name: 'Within 30 days', value: 15 },
    { name: 'Over 30 days', value: 10 },
  ];

  const policyStatusData = [
    { name: 'Open', value: 42 },
    { name: 'Closed - Implemented', value: 35 },
    { name: 'Closed - Rejected', value: 20 },
    { name: 'Under Review', value: 15 },
  ];

  const commentsByDemographicData = [
    { name: 'Age 18-34', comments: 245 },
    { name: 'Age 35-49', comments: 320 },
    { name: 'Age 50-64', comments: 280 },
    { name: 'Age 65+', comments: 155 },
  ];

  const topPoliciesData = [
    { id: 1, name: 'City Center Redevelopment Plan', comments: 452, approval: 67 },
    { id: 2, 'name': 'Environmental Protection Standards 2025', comments: 328, approval: 78 },
    { id: 3, 'name': 'School Boundary Redistricting', comments: 615, approval: 45 },
    { id: 4, 'name': 'Public Safety Camera Deployment', comments: 389, approval: 52 },
    { id: 5, 'name': 'Public Transportation Funding Proposal', comments: 213, approval: 81 },
  ];

  // Colors for charts
  const COLORS = ['#9b87f5', '#0EA5E9', '#22c55e', '#eab308', '#F97316'];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Engagement Dashboard</h1>
              <p className="text-muted-foreground mt-2">
                Real-time data on community participation and policy impact
              </p>
            </div>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <Select defaultValue={timeFrame} onValueChange={setTimeFrame}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Time Frame" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7d">Last 7 days</SelectItem>
                  <SelectItem value="1m">Last month</SelectItem>
                  <SelectItem value="3m">Last 3 months</SelectItem>
                  <SelectItem value="6m">Last 6 months</SelectItem>
                  <SelectItem value="1y">Last year</SelectItem>
                  <SelectItem value="all">All time</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Share className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Comments</p>
                    <p className="text-2xl font-bold mt-1">2,483</p>
                    <div className="flex items-center text-green-600 text-sm mt-1">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span>24% increase</span>
                    </div>
                  </div>
                  <div className="bg-civic-purple-light p-2 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-civic-purple" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Active Participants</p>
                    <p className="text-2xl font-bold mt-1">10,847</p>
                    <div className="flex items-center text-green-600 text-sm mt-1">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span>12% increase</span>
                    </div>
                  </div>
                  <div className="bg-civic-blue/10 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-civic-blue" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Policies Influenced</p>
                    <p className="text-2xl font-bold mt-1">35</p>
                    <div className="flex items-center text-green-600 text-sm mt-1">
                      <CheckCircle2 className="h-4 w-4 mr-1" />
                      <span>8 this month</span>
                    </div>
                  </div>
                  <div className="bg-civic-green/10 p-2 rounded-lg">
                    <FileText className="h-6 w-6 text-civic-green" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Avg. Agency Response</p>
                    <p className="text-2xl font-bold mt-1">12.5 days</p>
                    <div className="flex items-center text-red-600 text-sm mt-1">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span>3.2 days slower</span>
                    </div>
                  </div>
                  <div className="bg-civic-orange/10 p-2 rounded-lg">
                    <Clock className="h-6 w-6 text-civic-orange" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Dashboard Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main chart - 2/3 width */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Participation Trends</CardTitle>
                <CardDescription>
                  Comments and active users over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={participationData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="comments" 
                        stroke="#9b87f5" 
                        strokeWidth={2}
                        activeDot={{ r: 8 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="users" 
                        stroke="#0EA5E9" 
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            {/* Policy Impact - 1/3 width */}
            <Card>
              <CardHeader>
                <CardTitle>Policy Impact</CardTitle>
                <CardDescription>
                  How public comments influence policy decisions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={policyImpactData}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={90}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                        label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                        labelLine={false}
                      >
                        {policyImpactData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
              <CardFooter className="text-sm text-muted-foreground">
                Based on analysis of policy changes after public comment periods
              </CardFooter>
            </Card>
          </div>
          
          {/* Second Row of Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {/* Agency Response Time */}
            <Card>
              <CardHeader>
                <CardTitle>Agency Response Time</CardTitle>
                <CardDescription>
                  How quickly agencies respond to public comments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={agencyResponseTimeData}
                      layout="vertical"
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="name" type="category" />
                      <Tooltip />
                      <Bar dataKey="value" fill="#9b87f5" barSize={20} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            {/* Comment Demographics */}
            <Card>
              <CardHeader>
                <CardTitle>Comments by Demographic</CardTitle>
                <CardDescription>
                  Participation across different age groups
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={commentsByDemographicData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="comments" fill="#0EA5E9" barSize={40} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            {/* Policy Status */}
            <Card>
              <CardHeader>
                <CardTitle>Policy Status</CardTitle>
                <CardDescription>
                  Current status of policies after public input
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={policyStatusData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {policyStatusData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Top Policies Table */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Top Policies by Engagement</CardTitle>
              <CardDescription>
                Policies with the most public participation and impact
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Policy Name</TableHead>
                    <TableHead className="text-right">Comments</TableHead>
                    <TableHead className="text-right">Public Approval</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topPoliciesData.map((policy) => (
                    <TableRow key={policy.id}>
                      <TableCell className="font-medium">{policy.name}</TableCell>
                      <TableCell className="text-right">{policy.comments}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Progress value={policy.approval} className="w-16 h-2" />
                          <span>{policy.approval}%</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Badge className={
                          policy.approval > 70 
                            ? "bg-green-100 text-green-800" 
                            : policy.approval > 50 
                              ? "bg-amber-100 text-amber-800" 
                              : "bg-red-100 text-red-800"
                        }>
                          {policy.approval > 70 
                            ? "Strong Support" 
                            : policy.approval > 50 
                              ? "Mixed Support" 
                              : "Low Support"}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button variant="outline">
                View All Policies
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
