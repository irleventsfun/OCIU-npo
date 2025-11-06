import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const newsArticles = [
  {
    id: 1,
    title: "Community Unity Launches New Youth Development Program",
    excerpt: "Empowering the next generation through mentorship and skills training initiatives across local communities.",
    date: "2025-03-15",
    author: "Cameron De Vries",
    category: "Programs",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Unspoken Truths Podcast Reaches 10,000 Listeners",
    excerpt: "Celebrating a milestone in authentic conversations that matter, connecting communities through shared stories.",
    date: "2025-03-10",
    author: "Cameron De Vries",
    category: "Podcast",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Digital Agency Partners with Local Businesses",
    excerpt: "Supporting community growth through innovative digital solutions and strategic partnerships.",
    date: "2025-03-05",
    author: "Cameron De Vries",
    category: "Business",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop"
  }
];

const CommunityNews = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16 space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Community News
            </h1>
            <p className="text-xl text-muted-foreground">
              Stay informed about our latest initiatives, achievements, and community impact
            </p>
          </div>

          {/* News Grid */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <Card 
                key={article.id} 
                className="hover:shadow-xl transition-all animate-slide-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-full h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                  </div>
                  <CardTitle className="text-xl line-clamp-2">{article.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CommunityNews;
