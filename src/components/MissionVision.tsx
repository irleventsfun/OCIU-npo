import { Target, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const MissionVision = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our Purpose
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building stronger futures through shared knowledge and collective action
            </p>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl animate-slide-up">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">
                    Our Mission
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Build stronger futures by teaching digital skills, sharing knowledge, and connecting people through collaboration and opportunity.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Vision Card */}
            <Card className="border-2 border-secondary/20 hover:border-secondary/40 transition-all hover:shadow-xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 rounded-full bg-gradient-growth flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">
                    Our Vision
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    A global network of empowered communities where shared learning drives sustainable change and creates opportunities for all.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
