/** @format */
"use client";

import React, { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

// Define types for form data and component state
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  result: "success" | "error" | "sending" | "";
  isLoading: boolean;
}

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<FormStatus>({
    result: "",
    isLoading: false,
  });

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus({ result: "sending", isLoading: true });

    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "4c2b935c-b0cd-4e8d-860a-3a203f7a9411");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus({ result: "success", isLoading: false });
        event.currentTarget.reset();
      } else {
        console.error("Error", data);
        setFormStatus({ result: "error", isLoading: false });
      }
    } catch (error) {
      console.error("Error:", error);
      setFormStatus({ result: "error", isLoading: false });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4 tracking-tight">
            Connect With Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're here to help. Drop us a message, and we'll respond promptly.
          </p>
        </div>

        {/* First Row: Contact Form */}
        <div className="mb-12">
          <Card className="bg-card/90 shadow-md border border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Send Us a Message
              </CardTitle>
              <CardDescription>
                We'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="font-medium">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="How can we help you?"
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-medium">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="resize-none transition-all duration-300 focus:ring-2 focus:ring-primary"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                <Button
                  type="submit"
                  disabled={formStatus.isLoading}
                  className="w-full group hover:bg-primary-dark transition-colors duration-300 shadow-md"
                >
                  {formStatus.isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="h-4 w-4 group-hover:scale-110 transition-transform" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
                {formStatus.result === "success" && (
                  <Alert className="bg-green-50/80 border-green-200">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <div>
                      <AlertTitle>Success</AlertTitle>
                      <AlertDescription>
                        Your message has been sent successfully! We'll respond
                        soon.
                      </AlertDescription>
                    </div>
                  </Alert>
                )}
                {formStatus.result === "error" && (
                  <Alert
                    variant="destructive"
                    className="bg-red-50/80 border-red-200"
                  >
                    <AlertCircle className="h-4 w-4 text-red-600" />
                    <div>
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>
                        Something went wrong. Please try again or contact us
                        directly.
                      </AlertDescription>
                    </div>
                  </Alert>
                )}
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Second Row: Contact Information and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-card/90 shadow-md border border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Contact Information
              </CardTitle>
              <CardDescription>
                Reach out through your preferred channel
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "hello@yourcompany.com",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  value: "+1 (555) 123-4567",
                },
                {
                  icon: MapPin,
                  title: "Address",
                  value: "123 Business St, City, State 12345",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-center space-x-4 p-4 rounded-lg border bg-card hover:bg-accent/80 transition-colors"
                >
                  <div className="flex-shrink-0 p-2 bg-primary/10 rounded-full">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="bg-card/90 shadow-md border border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Visit Our Office
              </CardTitle>
              <CardDescription>
                Located in the heart of downtown
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="w-full h-80 bg-muted rounded-b-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.123456789!2d-74.0059413!3d40.7128267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjIiTiA3NMKwMDAnMjEuNCJX!5e0!3m2!1sen!2us!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
