"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-zinc-200 p-8">
      <h3 className="text-2xl font-bold mb-2">Have a Question?</h3>
      <p className="text-zinc-600 mb-6">Fill out the form below and we will get back to you as soon as possible.</p>
      
      <form 
        name="ask-question" 
        method="POST" 
        data-netlify="true" 
        action="/?success=true"
        className="space-y-4"
      >
        <input type="hidden" name="form-name" value="ask-question" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="parent-name">Parent Name <span className="text-red-500">*</span></Label>
            <Input id="parent-name" name="parent-name" required placeholder="John Doe" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="gymnast-age">Gymnast Age <span className="text-red-500">*</span></Label>
            <Input id="gymnast-age" name="gymnast-age" type="number" required placeholder="e.g. 6" min="3" max="18" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
            <Input id="email" name="email" type="email" required placeholder="john@example.com" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name="phone" type="tel" placeholder="(123) 456-7890" />
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
          />
        </div>

        <Button type="submit" className="w-full bg-bravo-purple hover:bg-bravo-purple/90 text-white font-medium rounded-full py-6 mt-2">
          Send Question
        </Button>
      </form>
    </div>
  );
}
