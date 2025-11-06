import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Clock, Award, PlayCircle, FileText } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Digital Literacy Fundamentals",
    description: "Master essential computer and internet skills for the modern workplace",
    instructor: "Cameron De Vries",
    duration: "6 weeks",
    students: 124,
    level: "Beginner",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop",
    modules: 12
  },
  {
    id: 2,
    title: "Entrepreneurship for Community Impact",
    description: "Learn to build sustainable businesses that serve your community",
    instructor: "Cameron De Vries",
    duration: "8 weeks",
    students: 89,
    level: "Intermediate",
    category: "Business",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop",
    modules: 16
  },
  {
    id: 3,
    title: "Leadership & Personal Development",
    description: "Develop leadership skills to create positive change in your community",
    instructor: "Cameron De Vries",
    duration: "4 weeks",
    students: 156,
    level: "All Levels",
    category: "Leadership",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop",
    modules: 8
  },
  {
    id: 4,
    title: "Basic Web Development",
    description: "Build your first website from scratch with HTML, CSS, and JavaScript",
    instructor: "Cameron De Vries",
    duration: "10 weeks",
    students: 203,
    level: "Beginner",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
    modules: 20
  }
];

const CommunityClassroom = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16 space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Community Classroom
            </h1>
            <p className="text-xl text-muted-foreground">
              Free educational courses designed to empower and uplift our community
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Button size="lg">Browse Courses</Button>
              <Button size="lg" variant="outline">Become an Instructor</Button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="max-w-5xl mx-auto mb-16 grid grid-cols-2 md:grid-cols-4 gap-4 animate-slide-up">
            <Card className="text-center">
              <CardContent className="pt-6">
                <BookOpen className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-3xl font-bold text-foreground">{courses.length}</p>
                <p className="text-sm text-muted-foreground">Active Courses</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-3xl font-bold text-foreground">572</p>
                <p className="text-sm text-muted-foreground">Students</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Award className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-3xl font-bold text-foreground">340</p>
                <p className="text-sm text-muted-foreground">Completions</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Clock className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-3xl font-bold text-foreground">100%</p>
                <p className="text-sm text-muted-foreground">Free Access</p>
              </CardContent>
            </Card>
          </div>

          {/* Course Grid */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Available Courses</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {courses.map((course, index) => (
                <Card 
                  key={course.id}
                  className="hover:shadow-xl transition-all animate-slide-up overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative w-full h-48 overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 right-4" variant="secondary">
                      {course.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{course.level}</Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>{course.students}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        <span>{course.modules} modules</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Instructor: {course.instructor}
                    </p>
                    <Button className="w-full group">
                      <PlayCircle className="w-4 h-4 mr-2" />
                      Start Learning
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CommunityClassroom;
