
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export function AIFeature() {
  const [simplifiedText, setSimplifiedText] = useState<string | null>(null);
  
  // Mock function to simulate AI simplification
  const handleSimplify = () => {
    setSimplifiedText(
      "The city is planning to build more bike lanes on Main Street to make it safer for cyclists. This will reduce car lanes from 4 to 2. Construction will begin next summer and take about 3 months. The project will cost $1.2 million."
    );
  };

  const originalText = `
    NOTICE OF PROPOSED INFRASTRUCTURE MODIFICATION
    
    Pursuant to Municipal Code Section 12.4.5(b), the Department of Transportation hereby provides notice of intention to implement the Multimodal Transit Corridor Enhancement Project on Main Street between 1st Avenue and 10th Avenue.
    
    The aforementioned project entails the reduction of vehicular lanes from the existing four (4) lanes to two (2) lanes, with the concurrent installation of protected bicycle lanes on both the northbound and southbound sides of the roadway.
    
    Implementation is scheduled to commence in the third quarter of the fiscal year, with an anticipated duration of ninety (90) days. The estimated expenditure for this capital improvement project is $1,200,000, to be allocated from the Transportation Infrastructure Fund as authorized by Ordinance 2023-45.
    
    Interested parties may submit written comments during the designated 30-day comment period as specified in the accompanying documentation.
  `;

  return (
    <section className="py-16 bg-civic-gray-light">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">AI-Powered Policy Simplification</h2>
            <p className="text-muted-foreground text-lg">
              Understand complex government policies without the legal jargon. Our AI technology translates official documents into clear, accessible language.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-border">
            <Tabs defaultValue="original">
              <div className="bg-muted p-4 border-b">
                <div className="flex items-center justify-between">
                  <TabsList>
                    <TabsTrigger value="original">Original Document</TabsTrigger>
                    <TabsTrigger value="simplified">Simplified Version</TabsTrigger>
                  </TabsList>
                  <Button 
                    onClick={handleSimplify} 
                    className="bg-civic-purple hover:bg-civic-purple-dark"
                  >
                    Simplify This Document
                  </Button>
                </div>
              </div>
              
              <TabsContent value="original" className="p-6 min-h-[300px]">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-civic-gray flex items-center justify-center text-white font-semibold">
                      DOT
                    </div>
                    <div>
                      <p className="font-semibold">Department of Transportation</p>
                      <p className="text-sm text-muted-foreground">Official Document</p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-muted rounded-lg font-mono text-sm whitespace-pre-line">
                    {originalText}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="simplified" className="p-6 min-h-[300px]">
                {simplifiedText ? (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-full bg-civic-purple flex items-center justify-center text-white font-semibold">
                        AI
                      </div>
                      <div>
                        <p className="font-semibold">AI Simplified Version</p>
                        <p className="text-sm text-muted-foreground">Easy to understand</p>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-civic-purple-light rounded-lg text-base">
                      {simplifiedText}
                    </div>
                    
                    <div className="bg-civic-green-light p-4 rounded-lg">
                      <p className="text-sm">
                        <span className="font-semibold">Key Points: </span>
                        Bike lanes will be added, car lanes reduced, construction starts next summer, cost is $1.2 million
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full py-8">
                    <p className="text-muted-foreground">
                      Click "Simplify This Document" to convert the policy into plain language
                    </p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
