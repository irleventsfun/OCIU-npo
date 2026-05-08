import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, Briefcase, Award } from "lucide-react";

export const ImpactReport = () => {
  const stats = [
    { label: "Members Supported", value: "1,250", icon: Users, color: "text-blue-500" },
    { label: "Lessons Completed", value: "3,400", icon: BookOpen, color: "text-green-500" },
    { label: "Projects Built", value: "85", icon: Award, color: "text-yellow-500" },
    { label: "Members Placed", value: "42", icon: Briefcase, color: "text-purple-500" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.label}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              {stat.label}
            </CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
