"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Star } from "lucide-react";

export function TrialForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        // @ts-ignore
        body: new URLSearchParams(formData).toString(),
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Form submission error", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="w-full max-w-xl mx-auto bg-white rounded-xl shadow-lg border border-zinc-200 p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
        <p className="text-zinc-600 max-w-sm">
          Thank you! We will contact you shortly to schedule your trial class.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto bg-white text-bravo-dark rounded-xl shadow-lg border border-zinc-200 p-8" id="trial-form">
      <h3 className="text-2xl font-bold mb-2 text-center">Sign up for a Trial Class</h3>
      <p className="text-zinc-600 mb-6 text-center text-sm">
        Leave your details and we will contact you to find the perfect time and class level for your gymnast.
      </p>
      
      <form 
        name="trial-signup" 
        method="POST" 
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input type="hidden" name="form-name" value="trial-signup" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="parent-name">Parent Name <span className="text-red-500">*</span></Label>
            <Input id="parent-name" name="parent-name" required placeholder="Jane Doe" disabled={isSubmitting} />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="gymnast-age">Gymnast Age <span className="text-red-500">*</span></Label>
            <Input id="gymnast-age" name="gymnast-age" type="number" required placeholder="e.g. 5" min="3" max="18" disabled={isSubmitting} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
            <Input id="email" name="email" type="email" required placeholder="jane@example.com" disabled={isSubmitting} />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone <span className="text-red-500">*</span></Label>
            <Input id="phone" name="phone" type="tel" required placeholder="(123) 456-7890" disabled={isSubmitting} />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="experience">Previous Experience (Optional)</Label>
          <Textarea 
            id="experience" 
            name="experience" 
            placeholder="Has your child done gymnastics or dance before?" 
            rows={2}
            disabled={isSubmitting}
          />
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full bg-bravo-purple hover:bg-bravo-purple/90 text-white font-bold rounded-full py-6 mt-4 text-lg">
          {isSubmitting ? "Sending..." : "Request a Trial"}
        </Button>
        <p className="text-center text-zinc-500 text-xs mt-3 flex items-center justify-center gap-1">
          <Star size={12} className="text-bravo-purple" /> 55 Minutes Free Trial Class
        </p>
      </form>
    </div>
  );
}
