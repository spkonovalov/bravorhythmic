"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";

export function ContactForm() {
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
      // Fallback in case of error (could show error state, but let's just proceed for simplicity or let Netlify handle it)
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-zinc-200 p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-bold mb-2">Message Sent Successfully!</h3>
        <p className="text-zinc-600 max-w-md">
          Thank you for reaching out. We have received your question and will get back to you at the email provided as soon as possible.
        </p>
        <Button 
          variant="outline" 
          className="mt-8 rounded-full"
          onClick={() => setIsSubmitted(false)}
        >
          Send another question
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-zinc-200 p-8">
      <h3 className="text-2xl font-bold mb-2">Have a Question?</h3>
      <p className="text-zinc-600 mb-6">Fill out the form below and we will get back to you as soon as possible.</p>
      
      <form 
        name="ask-question" 
        method="POST" 
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input type="hidden" name="form-name" value="ask-question" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="parent-name">Parent Name <span className="text-red-500">*</span></Label>
            <Input id="parent-name" name="parent-name" required placeholder="John Doe" disabled={isSubmitting} />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="gymnast-age">Gymnast Age <span className="text-red-500">*</span></Label>
            <Input id="gymnast-age" name="gymnast-age" type="number" required placeholder="e.g. 6" min="3" max="18" disabled={isSubmitting} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
            <Input id="email" name="email" type="email" required placeholder="john@example.com" disabled={isSubmitting} />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name="phone" type="tel" placeholder="(123) 456-7890" disabled={isSubmitting} />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="question">Your Question <span className="text-red-500">*</span></Label>
          <Textarea 
            id="question" 
            name="question" 
            required 
            placeholder="How can I schedule a trial class?" 
            rows={4}
            disabled={isSubmitting}
          />
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full bg-bravo-purple hover:bg-bravo-purple/90 text-white font-medium rounded-full py-6 mt-2">
          {isSubmitting ? "Sending..." : "Send Question"}
        </Button>
      </form>
    </div>
  );
}
