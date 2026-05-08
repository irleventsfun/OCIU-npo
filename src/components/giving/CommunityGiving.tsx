import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Landmark, Send } from "lucide-react";

export const CommunityGiving = () => {
  return (
    <Card className="border-red-500/30">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Heart className="text-red-500" />
          Community Giving
        </CardTitle>
        <p className="text-sm text-muted-foreground">Support OCIU's mission to empower neighborhoods.</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="p-4 bg-muted rounded-lg space-y-3">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Landmark size={16} />
            OCIU Banking Details
          </div>
          <div className="text-xs space-y-1 font-mono">
            <p>Bank: FNB / Standard Bank</p>
            <p>Account Name: OCIU Community Trust</p>
            <p>Account Number: 1234567890</p>
            <p>Branch Code: 250655</p>
            <p>Reference: [Your Name]</p>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-xs text-center text-muted-foreground italic">
            "Your generosity helps us provide learning material and support to our members."
          </p>
          <Button className="w-full bg-red-500 hover:bg-red-600">
            <Send className="mr-2 h-4 w-4" /> Support via Payment App
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
