
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart, 
  Check, 
  FileText, 
  ThumbsUp, 
  Mic, 
  Camera, 
  Upload, 
  MessageSquare,
  AlertCircle,
  Info,
  X,
  Sparkles,
  Globe
} from "lucide-react";
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
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Comment = () => {
  const [selectedPolicy, setSelectedPolicy] = useState("1");
  const [commentText, setCommentText] = useState("");
  const [attachments, setAttachments] = useState<string[]>([]);
  const [stance, setStance] = useState<string | null>(null);
  const [aiSuggestions, setAiSuggestions] = useState<boolean>(false);
  
  // Mock function to generate AI suggestions
  const generateSuggestions = () => {
    setAiSuggestions(true);
  };
  
  // Calculate comment strength based on length and content
  const getCommentStrength = () => {
    if (commentText.length < 30) return 20;
    if (commentText.length < 100) return 40;
    if (commentText.length < 250) return 70;
    return 95;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Submit Your Comment</h1>
              <p className="text-muted-foreground mt-2">
                Share your thoughts on open policies and help shape your community
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button asChild variant="outline">
                <Link to="/policies">View All Policies</Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main comment form */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Select a Policy</CardTitle>
                  <CardDescription>
                    Choose the policy you want to comment on
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Select defaultValue={selectedPolicy} onValueChange={setSelectedPolicy}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a policy" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Environmental Protection Standards 2025</SelectItem>
                      <SelectItem value="2">City Center Redevelopment Plan</SelectItem>
                      <SelectItem value="3">Public Transportation Funding Proposal</SelectItem>
                      <SelectItem value="4">Affordable Housing Initiative</SelectItem>
                      <SelectItem value="5">School Boundary Redistricting</SelectItem>
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Policy Summary</CardTitle>
                  <CardDescription>
                    Environmental Protection Standards 2025
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h3 className="font-medium mb-2">Simplified Summary</h3>
                    <p className="text-sm text-muted-foreground">
                      This proposal would update air and water quality standards for commercial zones. It would require businesses to reduce pollution by 25% by 2025 through improved filtration systems and regular testing. The policy aims to improve public health and environmental conditions in urban areas.
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-800">Open</Badge>
                      <span className="text-muted-foreground">328 comments so far</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Info className="h-4 w-4" />
                      <span>Deadline: June 15, 2025</span>
                    </div>
                  </div>
                  
                  <div>
                    <Button variant="outline" className="w-full">
                      <FileText className="mr-2 h-4 w-4" />
                      Read Full Policy Document
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Your Comment</CardTitle>
                  <CardDescription>
                    Share your thoughts, concerns, or support
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="stance">Your Stance</Label>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-80 text-sm">
                              Indicating your stance helps agencies categorize feedback, but you can still submit a neutral or mixed comment.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        variant="outline" 
                        className={`flex-1 ${stance === 'support' ? 'bg-green-50 border-green-200 text-green-700' : ''}`}
                        onClick={() => setStance('support')}
                      >
                        <ThumbsUp className={`mr-2 h-4 w-4 ${stance === 'support' ? 'text-green-500' : ''}`} />
                        Support
                      </Button>
                      <Button 
                        variant="outline" 
                        className={`flex-1 ${stance === 'neutral' ? 'bg-blue-50 border-blue-200 text-blue-700' : ''}`}
                        onClick={() => setStance('neutral')}
                      >
                        <MessageSquare className={`mr-2 h-4 w-4 ${stance === 'neutral' ? 'text-blue-500' : ''}`} />
                        Neutral
                      </Button>
                      <Button 
                        variant="outline" 
                        className={`flex-1 ${stance === 'oppose' ? 'bg-red-50 border-red-200 text-red-700' : ''}`}
                        onClick={() => setStance('oppose')}
                      >
                        <ThumbsUp className={`mr-2 h-4 w-4 rotate-180 ${stance === 'oppose' ? 'text-red-500' : ''}`} />
                        Oppose
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="comment">Your Comment</Label>
                      <span className="text-xs text-muted-foreground">
                        {commentText.length} characters
                      </span>
                    </div>
                    <Textarea
                      id="comment"
                      placeholder="Share your thoughts on this policy. Consider mentioning specific parts of the policy and how they might affect you or your community."
                      className="min-h-[200px]"
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                    />
                    
                    <div className="flex flex-col space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Comment Strength</span>
                        <span className="text-xs text-muted-foreground">
                          {getCommentStrength()}% Complete
                        </span>
                      </div>
                      <Progress value={getCommentStrength()} className="h-2" />
                      <p className="text-xs text-muted-foreground">
                        Stronger comments include specific details, personal experiences, and suggestions.
                      </p>
                    </div>
                  </div>
                  
                  {!aiSuggestions ? (
                    <div className="p-4 border border-dashed rounded-lg flex items-center justify-between bg-muted/50">
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-civic-purple" />
                        <div>
                          <p className="text-sm font-medium">Need help crafting your comment?</p>
                          <p className="text-xs text-muted-foreground">
                            Our AI assistant can suggest talking points and improvements
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" onClick={generateSuggestions}>
                        Generate Suggestions
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-3 p-4 bg-civic-purple-light rounded-lg border border-civic-purple/20">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Sparkles className="h-5 w-5 text-civic-purple" />
                          <p className="font-medium text-sm">AI Suggestions</p>
                        </div>
                        <Button variant="ghost" size="sm" onClick={() => setAiSuggestions(false)}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                          <AccordionTrigger className="text-sm font-normal">
                            Consider addressing specific pollution concerns
                          </AccordionTrigger>
                          <AccordionContent className="text-xs text-muted-foreground">
                            Mention specific pollutants that concern you, such as particulate matter, nitrogen oxides, or chemical runoff. This makes your comment more specific and actionable.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                          <AccordionTrigger className="text-sm font-normal">
                            Share a personal experience
                          </AccordionTrigger>
                          <AccordionContent className="text-xs text-muted-foreground">
                            If you or someone you know has been affected by air or water quality issues, sharing this experience can make your comment more compelling.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                          <AccordionTrigger className="text-sm font-normal">
                            Suggest implementation timeline considerations
                          </AccordionTrigger>
                          <AccordionContent className="text-xs text-muted-foreground">
                            Comment on whether the 2025 timeline is reasonable, too ambitious, or not ambitious enough. Suggest phased implementation if appropriate.
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  )}
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Attachments & Supporting Materials</CardTitle>
                  <CardDescription>
                    Add photos, documents, or other evidence to strengthen your comment
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button variant="outline" className="h-auto py-6 flex flex-col gap-2">
                      <Upload className="h-6 w-6" />
                      <span>Upload File</span>
                      <span className="text-xs text-muted-foreground">PDF, DOCX, JPG</span>
                    </Button>
                    <Button variant="outline" className="h-auto py-6 flex flex-col gap-2">
                      <Camera className="h-6 w-6" />
                      <span>Take Photo</span>
                      <span className="text-xs text-muted-foreground">Use camera</span>
                    </Button>
                    <Button variant="outline" className="h-auto py-6 flex flex-col gap-2">
                      <Mic className="h-6 w-6" />
                      <span>Voice Memo</span>
                      <span className="text-xs text-muted-foreground">Record audio</span>
                    </Button>
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    <p>Supported file types: PDF, DOCX, JPG, PNG, MP3, MP4</p>
                    <p>Maximum file size: 10MB per file, 50MB total</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Submit Your Comment</CardTitle>
                  <CardDescription>
                    Review your comment before submitting
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-2">
                    <Checkbox id="terms" />
                    <div>
                      <Label 
                        htmlFor="terms" 
                        className="text-sm font-normal"
                      >
                        I understand my comment will be publicly visible and may be published by the relevant government agency
                      </Label>
                      <p className="text-xs text-muted-foreground mt-1">
                        Your name and contact information will be shared with the agency but not made public unless required by law.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Checkbox id="notifications" defaultChecked />
                    <div>
                      <Label 
                        htmlFor="notifications" 
                        className="text-sm font-normal"
                      >
                        Email me when there are updates to this policy or responses to my comment
                      </Label>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row gap-3">
                  <Button className="w-full sm:w-auto bg-civic-purple hover:bg-civic-purple-dark">
                    Submit Comment
                  </Button>
                  <Button variant="outline" className="w-full sm:w-auto">
                    Save Draft
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Comment Tips</CardTitle>
                  <CardDescription>
                    How to write effective comments
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      {
                        icon: <Check className="h-4 w-4 text-green-500" />,
                        tip: "Be specific about what you support or oppose",
                      },
                      {
                        icon: <Check className="h-4 w-4 text-green-500" />,
                        tip: "Share personal experiences or stories",
                      },
                      {
                        icon: <Check className="h-4 w-4 text-green-500" />,
                        tip: "Suggest alternatives or improvements",
                      },
                      {
                        icon: <Check className="h-4 w-4 text-green-500" />,
                        tip: "Use evidence and data when available",
                      },
                      {
                        icon: <Check className="h-4 w-4 text-green-500" />,
                        tip: "Keep comments respectful and constructive",
                      },
                      {
                        icon: <X className="h-4 w-4 text-red-500" />,
                        tip: "Avoid vague statements like \"I oppose this\"",
                      },
                      {
                        icon: <X className="h-4 w-4 text-red-500" />,
                        tip: "Don't submit identical form letters",
                      }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="mt-0.5">{item.icon}</div>
                        <p className="text-sm">{item.tip}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Your Impact</CardTitle>
                  <CardDescription>
                    How public comments shape policy
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-medium text-sm mb-2">City Park Renovation</h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      Public comments led to the addition of more accessible playground equipment and native plant gardens.
                    </p>
                    <Badge className="bg-green-100 text-green-800">
                      Community Success
                    </Badge>
                  </div>
                  
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-medium text-sm mb-2">Bike Lane Network</h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      Citizen feedback resulted in protected bike lanes instead of painted lanes, increasing safety.
                    </p>
                    <Badge className="bg-green-100 text-green-800">
                      Community Success
                    </Badge>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    <BarChart className="mr-2 h-4 w-4" />
                    View More Impact Stories
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Accessibility Options</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <Globe className="mr-2 h-4 w-4" />
                      Change Language
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Mic className="mr-2 h-4 w-4" />
                      Voice Comment
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Request Assistance
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Need help submitting your comment? Call our support line at (555) 123-4567 or visit a community center for in-person assistance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Comment;
