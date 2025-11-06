import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Bot, BookOpen, MessageSquare, Sparkles, Brain, GraduationCap } from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: Brain,
    title: "Personalized Learning",
    description: "Adaptive AI that understands your learning style and pace"
  },
  {
    icon: MessageSquare,
    title: "Interactive Conversations",
    description: "Ask questions and get instant, detailed explanations"
  },
  {
    icon: BookOpen,
    title: "Multiple Subjects",
    description: "Support for math, science, languages, and more"
  },
  {
    icon: GraduationCap,
    title: "Skill Development",
    description: "Build practical skills for career advancement"
  }
];

const AITutor = () => {
  const [question, setQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleAsk = () => {
    if (!question.trim()) return;
    setIsLoading(true);
    // Placeholder for AI integration
    setTimeout(() => {
      setIsLoading(false);
      setQuestion("");
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16 space-y-4 animate-fade-in">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-primary/10 rounded-full">
                <Bot className="w-16 h-16 text-primary" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              AI Learning Assistant
            </h1>
            <p className="text-xl text-muted-foreground">
              Your personal AI tutor available 24/7 to help you learn and grow
            </p>
          </div>

          {/* Interactive Question Box */}
          <div className="max-w-3xl mx-auto mb-16 animate-slide-up">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Ask Your Question
                </CardTitle>
                <CardDescription>
                  Get instant help with homework, concepts, or skills you want to learn
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Example: Can you explain the Pythagorean theorem with a real-world example?"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  rows={4}
                  className="resize-none"
                />
                <Button 
                  onClick={handleAsk} 
                  disabled={isLoading || !question.trim()}
                  className="w-full"
                >
                  {isLoading ? "Thinking..." : "Get Answer"}
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  AI tutoring is coming soon! Join our waitlist to be notified.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Features Grid */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Why Choose AI Tutoring?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card 
                    key={feature.title}
                    className="text-center hover:shadow-xl transition-all animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-primary/10 rounded-full">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AITutor;
