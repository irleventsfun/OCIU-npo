import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Users, Mic2, Briefcase, HandCoins } from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12 animate-fade-in">
          {/* Main CTA */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Join the Movement
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Learn. Teach. Build. Together.
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Be part of a global community that believes in the power of shared knowledge 
              and collective action to create lasting change.
            </p>
          </div>

          {/* Signup Form */}
          <div className="max-w-3xl mx-auto w-full">
            <div className="rounded-[2rem] border border-white/20 bg-white/10 p-8 text-left shadow-2xl shadow-black/25 backdrop-blur">
              <div className="flex flex-col gap-2">
                <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
                  <Users className="w-5 h-5" />
                  Get Involved
                </span>
                <p className="text-3xl font-semibold text-white">
                  Sign up to volunteer or collaborate with Community & Unity.
                </p>
              </div>
              <form className="mt-8 space-y-6">
                <div className="grid gap-2">
                  <Label htmlFor="cta-name" className="text-white/80">
                    Full Name
                  </Label>
                  <Input
                    id="cta-name"
                    placeholder="Your name"
                    className="border-white/30 bg-white/10 text-white placeholder:text-white/60 focus-visible:ring-white/70"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="cta-email" className="text-white/80">
                    Email Address
                  </Label>
                  <Input
                    id="cta-email"
                    type="email"
                    placeholder="you@example.com"
                    className="border-white/30 bg-white/10 text-white placeholder:text-white/60 focus-visible:ring-white/70"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="cta-message" className="text-white/80">
                    How would you like to help?
                  </Label>
                  <Textarea
                    id="cta-message"
                    placeholder="Tell us about your skills, availability, or questions..."
                    className="min-h-[140px] border-white/30 bg-white/10 text-white placeholder:text-white/60 focus-visible:ring-white/70"
                  />
                </div>
                <Button type="submit" size="lg" variant="growth" className="w-full text-lg">
                  Sign Up
                </Button>
                <p className="text-center text-sm text-white/70">
                  We’ll reach out with upcoming programs, volunteer ops, and community projects.
                </p>
              </form>
            </div>
          </div>

          {/* Secondary Actions */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" variant="energy" className="min-w-[220px] text-lg">
              <Mic2 className="mr-2 h-5 w-5" />
              Listen to the Podcast
            </Button>
            <Button size="lg" variant="secondary" className="min-w-[220px] text-lg bg-white text-primary hover:bg-white/90">
              <Briefcase className="mr-2 h-5 w-5" />
              Work With Us
            </Button>
          </div>

          {/* Donation Details */}
          <Card className="max-w-3xl mx-auto bg-white/10 border-white/20 text-left text-white">
            <CardHeader className="space-y-3">
              <div className="inline-flex items-center gap-2 text-white/80 uppercase tracking-wide text-sm">
                <HandCoins className="w-4 h-4" />
                Donate
              </div>
              <CardTitle className="text-3xl text-white">
                Banking Details
              </CardTitle>
              <p className="text-white/70 text-base">
                Direct contributions help us sustain programs and expand the reach of Community & Unity.
              </p>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <span className="text-white/70 text-sm uppercase tracking-wide">
                  Account Name
                </span>
                <span className="font-semibold">Our Community In Unity</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <span className="text-white/70 text-sm uppercase tracking-wide">
                  Bank
                </span>
                <span className="font-semibold">Nedbank Business</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <span className="text-white/70 text-sm uppercase tracking-wide">
                  Account Number
                </span>
                <span className="font-semibold tracking-widest">1328807983</span>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="pt-16 space-y-6 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-white/80">
              <a 
                href="https://ourcommunityinunity.org" 
                className="hover:text-white transition-colors font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                ourcommunityinunity.org
              </a>
              <span className="hidden md:inline">•</span>
              <a 
                href="https://ourcommunity.agency" 
                className="hover:text-white transition-colors font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                ourcommunity.agency
              </a>
            </div>
            <p className="text-white/60 text-sm">
              © 2025 Community & Unity. All rights reserved. | NPC Reg No: 2024/312217/08
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
