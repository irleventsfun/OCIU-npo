import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Box, Wrench, Lightbulb, CheckSquare } from "lucide-react";
import { toast } from "sonner";

export const AIBuilder = () => {
  const [idea, setIdea] = useState("");
  const [isBuilding, setIsBuilding] = useState(false);
  const [blueprint, setBlueprint] = useState<string | null>(null);

  const handleBuildIdea = async () => {
    if (!idea) {
      toast.error("Please describe your idea");
      return;
    }
    setIsBuilding(true);
    try {
      const response = await fetch('http://localhost:8000/api/agent/code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: `Build a plan and app structure for: ${idea}` }),
      });
      const data = await response.json();
      setBlueprint(data.output);
      toast.success("AI Blueprint generated!");
    } catch (error) {
      toast.error("Failed to build idea");
    } finally {
      setIsBuilding(false);
    }
  };

  return (
    <Card className="border-growth/50 bg-growth/5">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Box className="text-growth" />
          OCIU AI Builder
        </CardTitle>
        <p className="text-sm text-muted-foreground">Turn your ideas into tools, workflows, or apps.</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-medium text-growth mb-1">
            <Lightbulb size={14} /> What do you want to build?
          </div>
          <Input
            placeholder="e.g. A community garden scheduling tool"
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
          />
          <Button
            onClick={handleBuildIdea}
            disabled={isBuilding}
            className="w-full bg-growth hover:bg-growth/80 text-white"
          >
            {isBuilding ? "Analyzing Idea..." : "Generate Build Plan"}
          </Button>
        </div>

        {blueprint && (
          <div className="mt-4 p-4 bg-background border rounded-md space-y-4">
            <h4 className="font-bold text-sm flex items-center gap-2">
              <CheckSquare size={14} className="text-growth" /> Step-by-Step Build Guide
            </h4>
            <div className="text-xs font-mono whitespace-pre-wrap max-h-48 overflow-y-auto p-2 bg-muted rounded">
              {blueprint}
            </div>
            <Button size="sm" variant="outline" className="w-full text-xs">
              <Wrench size={12} className="mr-2" /> Add to My Portfolio
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
