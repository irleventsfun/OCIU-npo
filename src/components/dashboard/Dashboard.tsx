import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Cpu, Database, Activity, Code, PenTool, Mic, Layout } from "lucide-react";

export const Dashboard = () => {
  const [ramUsage, setRamUsage] = useState(45);
  const [agents, setAgents] = useState([
    { name: 'Code Generator', status: 'idle', model: 'Qwen3-8B', icon: Code },
    { name: 'Content Gen', status: 'idle', model: 'Qwen3-4B', icon: PenTool },
    { name: 'Voice Studio', status: 'idle', model: 'Qwen3-1.7B', icon: Mic },
    { name: 'Web Designer', status: 'idle', model: 'Qwen3-8B', icon: Layout },
  ]);

  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");

  const handleRunAgent = async (agentName: string) => {
    const endpoint = agentName === 'Code Generator' ? '/api/agent/code' : '/api/agent/content';
    const body = agentName === 'Code Generator' ? { prompt } : { topic: prompt };

    try {
      const response = await fetch(`http://localhost:8000${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      setOutput(data.output);
    } catch (error) {
      console.error(error);
      setOutput("Error connecting to backend");
    }
  };

  return (
    <div className="p-8 bg-background min-h-screen text-foreground">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight">CamoFlow OS</h1>
        <div className="flex items-center gap-4">
          <Badge variant={ramUsage > 80 ? "destructive" : "secondary"} className="flex items-center gap-1">
            <Cpu size={14} />
            RAM: {ramUsage}%
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Database size={14} />
            Vault Synced
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {agents.map((agent) => (
          <Card key={agent.name}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {agent.name}
              </CardTitle>
              <agent.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{agent.model}</div>
              <p className="text-xs text-muted-foreground capitalize">
                Status: {agent.status}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Task Control</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Prompt</label>
              <Textarea
                placeholder="Enter instructions for the agent..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={() => handleRunAgent('Code Generator')}>Run Code Agent</Button>
              <Button variant="outline" onClick={() => handleRunAgent('Content Gen')}>Run Content Agent</Button>
            </div>
            {output && (
              <div className="mt-4 p-4 bg-muted rounded-md font-mono text-sm">
                <pre>{output}</pre>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>CPU Load</span>
                  <span>12%</span>
                </div>
                <Progress value={12} />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Task Queue</span>
                  <span>0 active</span>
                </div>
                <Progress value={0} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
