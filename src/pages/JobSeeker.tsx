import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Clock, DollarSign, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const jobListings = [
  {
    id: 1,
    title: "Community Outreach Coordinator",
    company: "Community & Unity",
    location: "Cape Town, South Africa",
    type: "Full-time",
    salary: "R25,000 - R35,000",
    description: "Lead community engagement initiatives and build partnerships with local organizations.",
    skills: ["Communication", "Event Planning", "Community Building"],
    posted: "2 days ago"
  },
  {
    id: 2,
    title: "Digital Marketing Specialist",
    company: "Community & Unity Digital Agency",
    location: "Remote",
    type: "Full-time",
    salary: "R30,000 - R45,000",
    description: "Create and execute digital marketing strategies for community-focused businesses.",
    skills: ["SEO", "Social Media", "Content Creation"],
    posted: "5 days ago"
  },
  {
    id: 3,
    title: "Youth Program Facilitator",
    company: "Community & Unity",
    location: "Johannesburg, South Africa",
    type: "Part-time",
    salary: "R15,000 - R20,000",
    description: "Facilitate educational workshops and mentorship programs for young adults.",
    skills: ["Teaching", "Mentorship", "Youth Development"],
    posted: "1 week ago"
  },
  {
    id: 4,
    title: "Web Developer",
    company: "Community & Unity Digital Agency",
    location: "Hybrid",
    type: "Full-time",
    salary: "R35,000 - R55,000",
    description: "Build and maintain websites for community organizations and small businesses.",
    skills: ["React", "TypeScript", "Responsive Design"],
    posted: "3 days ago"
  }
];

const JobSeeker = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-12 space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Career Opportunities
            </h1>
            <p className="text-xl text-muted-foreground">
              Join our mission to build stronger communities through meaningful work
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input 
                  placeholder="Search job titles, keywords..." 
                  className="pl-10"
                />
              </div>
              <Button>Search</Button>
            </div>
          </div>

          {/* Job Listings */}
          <div className="max-w-4xl mx-auto space-y-6">
            {jobListings.map((job, index) => (
              <Card 
                key={job.id}
                className="hover:shadow-xl transition-all animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-2xl">{job.title}</CardTitle>
                      <CardDescription className="text-base">{job.company}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="text-sm">
                      {job.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{job.description}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <DollarSign className="w-4 h-4" />
                      <span>{job.salary}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{job.posted}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full md:w-auto">
                    <Briefcase className="w-4 h-4 mr-2" />
                    Apply Now
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

export default JobSeeker;
