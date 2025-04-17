
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { ArrowRight, ThumbsUp, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

export function CommentSection() {
  const [commentText, setCommentText] = useState("");
  
  return (
    <section className="py-16 bg-muted">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Share Your Voice on Open Policies</h2>
            <p className="text-lg text-muted-foreground">
              Public comments help shape government decisions. Our interactive system makes it easy to submit thoughtful feedback on policies that matter to you.
            </p>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
              <h3 className="font-semibold text-lg mb-4">Currently Open for Comment</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "City Park Renovation Plan",
                    deadline: "Ends in 5 days",
                    comments: 128,
                    agency: "Parks & Recreation"
                  },
                  {
                    title: "Downtown Traffic Management Proposal",
                    deadline: "Ends in 12 days",
                    comments: 241,
                    agency: "Transportation"
                  },
                  {
                    title: "Clean Energy Initiative 2025",
                    deadline: "Ends in 18 days",
                    comments: 87,
                    agency: "Environmental Protection"
                  }
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-base">{item.title}</h4>
                      <span className="text-xs bg-civic-yellow-light text-civic-yellow-dark px-2 py-1 rounded">
                        {item.deadline}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>Agency: {item.agency}</span>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-3 w-3" />
                        <span>{item.comments} comments</span>
                      </div>
                    </div>
                  </div>
                ))}
                
                <Button asChild variant="ghost" className="w-full">
                  <Link to="/policies">
                    View All Open Policies <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-border">
            <h3 className="font-semibold text-lg mb-4">Submit Your Comment</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-civic-purple-light border border-civic-purple/20">
                <h4 className="font-medium mb-2">City Park Renovation Plan</h4>
                <p className="text-sm text-muted-foreground">
                  The city is considering a major renovation of Central Park, including new playground equipment, improved walking paths, and expanded green spaces.
                </p>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="comment" className="block text-sm font-medium">
                  Your Comment
                </label>
                <Textarea
                  id="comment"
                  placeholder="Share your thoughts on this policy..."
                  className="resize-none min-h-[150px]"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-muted rounded-lg p-3 text-center hover:bg-muted/80 cursor-pointer transition-colors">
                  <ThumbsUp className="h-5 w-5 mx-auto mb-1" />
                  <span className="text-sm font-medium">Support</span>
                </div>
                <div className="bg-muted rounded-lg p-3 text-center hover:bg-muted/80 cursor-pointer transition-colors">
                  <ThumbsUp className="h-5 w-5 mx-auto mb-1 rotate-180" />
                  <span className="text-sm font-medium">Oppose</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Button className="bg-civic-purple hover:bg-civic-purple-dark flex-1">
                  Submit Comment
                </Button>
                <Button variant="outline" className="flex-1">
                  Save Draft
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4">
                Your comment will be public and may be published by the relevant government agency.
                See our <Link to="/privacy" className="underline">Privacy Policy</Link> for more information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
