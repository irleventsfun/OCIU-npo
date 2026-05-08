import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Briefcase, MapPin, Sparkles } from "lucide-react";

export const JobBoard = () => {
  const jobs = [
    { title: "Junior Frontend Developer", company: "TechFlow", type: "Remote", skills: ["React", "Tailwind"] },
    { title: "UI/UX Design Intern", company: "Creative Co", type: "Cape Town", skills: ["Figma", "Design Systems"] },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Briefcase className="text-primary" />
          Real Opportunities
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {jobs.map((job) => (
          <div key={job.title} className="p-4 bg-muted/30 rounded-xl border border-border group hover:border-primary/50 transition-all">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-bold text-lg">{job.title}</h4>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  {job.company} • <MapPin size={12} /> {job.type}
                </p>
              </div>
              <Badge variant="energy">New</Badge>
            </div>
            <div className="flex gap-2 mb-4">
              {job.skills.map(s => <Badge key={s} variant="secondary" className="text-[10px]">{s}</Badge>)}
            </div>
            <div className="flex gap-2">
              <Button size="sm" className="w-full">Apply Now</Button>
              <Button size="sm" variant="growth" className="w-full">
                <Sparkles className="mr-2 h-4 w-4" /> Prepare Me
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
