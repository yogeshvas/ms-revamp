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
  Clock,
  MessageCircle,
  ChevronDown,
} from "lucide-react";
import contentData from "@/data/products";

// Define types for form data and component state
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  interestedProduct: string;
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
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
      interestedProduct: formData.get("interestedProduct") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus({ result: "success", isLoading: false });
        event.currentTarget.reset();
      } else {
        console.error("Error", result);
        setFormStatus({ result: "error", isLoading: false });
      }
    } catch (error) {
      console.error("Error:", error);
      setFormStatus({ result: "error", isLoading: false });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white py-12 px-4 sm:px-6 lg:px-8 pt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageCircle className="h-4 w-4" />
            Get in Touch
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Start a Conversation
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your logistics operations? Our team is here to
            help you get started with Mamastops solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-red-100">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Contact Information
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Get in touch through your preferred channel
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email Us",
                    value: "support@mamastops.com",
                    description: "Send us an email anytime",
                  },
                  {
                    icon: Phone,
                    title: "Call Us",
                    value: "+260764149967",
                    description: "Mon to Fri from 9am to 6pm",
                  },
                  {
                    icon: MapPin,
                    title: "Visit Us",
                    value: "123 Business District",
                    description: "City, State 12345",
                  },
                  {
                    icon: Clock,
                    title: "Response Time",
                    value: "Within 24 hours",
                    description: "We respond quickly to all inquiries",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className="flex items-start space-x-4 p-4 rounded-lg border border-red-100 bg-white hover:border-red-200 transition-colors group"
                  >
                    <div className="flex-shrink-0 p-3 bg-red-100 rounded-xl group-hover:bg-red-200 transition-colors">
                      <item.icon className="h-5 w-5 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">
                        {item.title}
                      </p>
                      <p className="text-gray-900 font-medium mt-1">
                        {item.value}
                      </p>
                      <p className="text-gray-600 text-sm mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="border-red-100 bg-red-50">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-gray-900">24/7</div>
                    <div className="text-gray-600">Customer Support</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-gray-900">100+</div>
                    <div className="text-gray-600">Happy Clients</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-gray-900">
                      30min
                    </div>
                    <div className="text-gray-600">Average Response Time</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-red-100">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-gray-900">
                  Send us a Message
                </CardTitle>
                <CardDescription className="text-gray-600 text-lg">
                  Fill out the form below and we'll get back to you as soon as
                  possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label
                        htmlFor="name"
                        className="font-medium text-gray-900"
                      >
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="John Doe"
                        className="border-red-200 focus:border-red-400 focus:ring-red-400 transition-colors"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label
                        htmlFor="email"
                        className="font-medium text-gray-900"
                      >
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="border-red-200 focus:border-red-400 focus:ring-red-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label
                      htmlFor="subject"
                      className="font-medium text-gray-900"
                    >
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="How can we help you?"
                      className="border-red-200 focus:border-red-400 focus:ring-red-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label
                      htmlFor="interestedProduct"
                      className="font-medium text-gray-900"
                    >
                      Interested Product
                    </Label>
                    <div className="relative">
                      <select
                        id="interestedProduct"
                        name="interestedProduct"
                        className="w-full px-3 py-2 border border-red-200 rounded-md focus:border-red-400 focus:ring-red-400 transition-colors appearance-none bg-white"
                      >
                        <option value="">
                          Select a product you're interested in
                        </option>
                        <option value="Border Clearance Service">
                          Border Clearance Service
                        </option>
                        <option value="GPS Tracking Solution">
                          GPS Tracking Solution
                        </option>
                        <option value="Fleet Management">
                          Fleet Management
                        </option>
                        <option value="All Products">All Products</option>
                        <option value="Other">Other</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label
                      htmlFor="message"
                      className="font-medium text-gray-900"
                    >
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="border-red-200 focus:border-red-400 focus:ring-red-400 resize-none transition-colors"
                      placeholder="Tell us more about your logistics needs and how we can help..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={formStatus.isLoading}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-medium transition-colors"
                  >
                    {formStatus.isLoading ? (
                      <div className="flex items-center space-x-3">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-3">
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </div>
                    )}
                  </Button>

                  {formStatus.result === "success" && (
                    <Alert className="bg-green-50 border-green-200">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <div>
                        <AlertTitle className="text-green-800">
                          Success!
                        </AlertTitle>
                        <AlertDescription className="text-green-700">
                          Your message has been sent successfully! We'll respond
                          to your inquiry within 24 hours.
                        </AlertDescription>
                      </div>
                    </Alert>
                  )}

                  {formStatus.result === "error" && (
                    <Alert className="bg-red-50 border-red-200">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                      <div>
                        <AlertTitle className="text-red-800">Error</AlertTitle>
                        <AlertDescription className="text-red-700">
                          Something went wrong while sending your message.
                          Please try again or contact us directly via email or
                          phone.
                        </AlertDescription>
                      </div>
                    </Alert>
                  )}
                </form>
              </CardContent>
            </Card>

            {/* Map Section */}
            <Card className="border-red-100 mt-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Visit Our Office
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Located in the heart of the business district
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full h-64 bg-gray-100 rounded-b-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.123456789!2d-74.0059413!3d40.7128267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjIiTiA3NMKwMDAnMjEuNCJX!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
