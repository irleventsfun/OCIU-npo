import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Layout, Palette, Code, ExternalLink } from "lucide-react";
import { toast } from "sonner";

export const WebsiteBuilder = () => {
  const [description, setDescription] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [plan, setPlan] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!description) {
      toast.error("Please describe your website");
      return;
    }
    setIsGenerating(true);
    try {
      const response = await fetch('http://localhost:8000/api/agent/website', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description }),
      });
      const data = await response.json();
      setPlan(data.output);
      toast.success("Website plan generated!");
    } catch (error) {
      toast.error("Failed to generate plan");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Card className="border-accent/50 bg-accent/5">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Layout className="text-accent" />
          Community Website Builder
        </CardTitle>
        <p className="text-sm text-muted-foreground">Describe your vision, and I'll generate the structure and copy.</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Input
            placeholder="e.g. A portfolio for a local artist or a page for a community garden"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full bg-accent hover:bg-accent/80 text-accent-foreground"
          >
            {isGenerating ? "Generating..." : "Generate Website Plan"}
          </Button>
        </div>

        {plan && (
          <div className="mt-4 p-4 bg-background border rounded-md space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-sm flex items-center gap-2">
                <Palette size={14} /> Generated Vision
              </h4>
              <Button size="sm" variant="ghost" className="h-7 text-xs">
                <ExternalLink size={12} className="mr-1" /> Export to Webflow
              </Button>
            </div>
            <div className="text-xs font-mono whitespace-pre-wrap max-h-48 overflow-y-auto p-2 bg-muted rounded">
              {plan}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
