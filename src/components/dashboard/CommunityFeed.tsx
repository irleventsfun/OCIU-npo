import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageSquare, ThumbsUp, Share2 } from "lucide-react";

export const CommunityFeed = () => {
  const posts = [
    {
      id: 1,
      author: "Mentor Sarah",
      content: "Just uploaded new learning materials for the 'React Hooks' lesson in StudyBuddy. Check it out!",
      time: "2h ago",
      likes: 12,
    },
    {
      id: 2,
      author: "Member Kevin",
      content: "I just built my first portfolio website using the Website Builder! Thanks Community Buddy!",
      time: "5h ago",
      likes: 24,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Community Feed</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="space-y-3 pb-4 border-b last:border-0 border-border">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback>{post.author[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-bold">{post.author}</p>
                <p className="text-[10px] text-muted-foreground">{post.time}</p>
              </div>
            </div>
            <p className="text-sm text-foreground/90">{post.content}</p>
            <div className="flex gap-4 text-muted-foreground">
              <button className="flex items-center gap-1 text-xs hover:text-primary"><ThumbsUp size={14} /> {post.likes}</button>
              <button className="flex items-center gap-1 text-xs hover:text-primary"><MessageSquare size={14} /> Comment</button>
              <button className="flex items-center gap-1 text-xs hover:text-primary"><Share2 size={14} /> Share</button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
