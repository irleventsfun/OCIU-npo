import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Link as LinkIcon, Edit } from "lucide-react";

export const MemberProfile = () => {
  const member = {
    name: "John Doe",
    role: "Mentor / Builder",
    location: "Soweto, Johannesburg",
    skills: ["React", "TypeScript", "Tailwind CSS"],
    bio: "Passionate about building community tools and learning new technologies.",
    email: "john@example.com",
    links: ["github.com/johndoe", "portfolio.ociu.org/john"],
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src="" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>{member.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
            <Button size="icon" variant="ghost"><Edit size={16} /></Button>
          </div>
          <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
            <MapPin size={10} /> {member.location}
          </p>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold mb-2">Skills</h4>
          <div className="flex flex-wrap gap-2">
            {member.skills.map(s => <Badge key={s} variant="secondary">{s}</Badge>)}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-1">Bio</h4>
          <p className="text-sm text-muted-foreground">{member.bio}</p>
        </div>

        <div className="pt-2 space-y-2">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Mail size={12} /> {member.email}
          </div>
          {member.links.map(link => (
            <div key={link} className="flex items-center gap-2 text-xs text-primary hover:underline cursor-pointer">
              <LinkIcon size={12} /> {link}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
