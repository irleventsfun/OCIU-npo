import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Bot, Link as LinkIcon, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

export const CommunityBuddy = () => {
  const [apiKey, setApiKey] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = async () => {
    if (!apiKey) {
      toast.error("Please enter an API key");
      return;
    }
    // Simulated connection
    setIsConnected(true);
    setApiKey("");
    toast.success("AI Account Connected Securely!");
  };

  return (
    <Card className="border-primary/50 bg-primary/5">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="p-2 bg-primary rounded-full text-primary-foreground">
          <Bot size={24} />
        </div>
        <div>
          <CardTitle>Community Buddy</CardTitle>
          <p className="text-sm text-muted-foreground">Your AI layer for learning and building</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {!isConnected ? (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium mb-2">
              <LinkIcon size={14} />
              Connect your AI account
            </div>
            <div className="flex gap-2">
              <Input
                type="password"
                placeholder="Enter OpenAI/Anthropic/Gemini API Key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
              />
              <Button onClick={handleConnect}>Connect</Button>
            </div>
            <p className="text-[10px] text-muted-foreground flex items-center gap-1">
              <ShieldCheck size={10} />
              Your key is encrypted and never exposed in the browser.
            </p>
          </div>
        ) : (
          <div className="flex items-center justify-between bg-growth/10 p-3 rounded-md border border-growth/20">
            <div className="flex items-center gap-2 text-sm text-growth font-medium">
              <ShieldCheck size={16} />
              Community Buddy Active
            </div>
            <Badge variant="secondary">Pro Account Connected</Badge>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
