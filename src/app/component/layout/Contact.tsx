"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import axios from "axios";

/**
 * Contact (Light Theme)
 * - Brighter, airy visuals
 * - Subtle gradients, soft borders, generous whitespace
 * - Accessible labels, inputs, focus states
 * - Basic client-side validation + success state
 */
const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<null | {
    type: "success" | "error";
    message: string;
  }>(null);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "info@cryptionverse.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+61 430 052 221",
      description: "Mon–Sat from 8:00 to 18:00",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Melbourne, Australia",
      description: "In the heart of Silicon Valley",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Monday – Saturday",
      description: "08:00 – 18:00 (GMT+10)",
    },
  ];

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const validate = () => {
    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.subject ||
      !form.message
    ) {
      return { ok: false, message: "Please fill in all required fields." };
    }
    const emailOk = /[^\s@]+@[^\s@]+\.[^\s@]+/.test(form.email);
    if (!emailOk)
      return { ok: false, message: "Please enter a valid email address." };
    return { ok: true } as const;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log("form", form);
    e.preventDefault();
    setStatus(null);
    const v = validate();
    if (!("ok" in v && v.ok)) {
      setStatus({ type: "error", message: (v as any).message });
      return;
    }
    try {
      setSubmitting(true);

      const response = await axios.post(
        "https://cryption-backend.vercel.app/auth/email",
        {
          fullName: form.firstName + form.lastName,
          email: form.email,
          company: form.company,
          subject: form.subject,
          message: form.message,
        }
      );
      if (response?.status === 200) {
        setStatus({
          type: "success",
          message: "Your message has been sent successfully.",
        });
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.log(error);
      setStatus({ type: "error", message: "Something went wrong." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* <Header /> */}
      <main>
        {/* Hero */}
        <section className="pt-24 pb-14 bg-gradient-to-b from-white via-slate-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-5">
                Get In{" "}
                <span className="bg-clip-text text-transparent bg-black">
                  Touch
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600">
                Ready to transform your business? Tell us about your project and
                we’ll get back within 24 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-14">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 xl:grid-cols-5 gap-10">
              {/* Form */}
              <div className="xl:col-span-3 space-y-6">
                <Card className="border-slate-200 shadow-sm rounded-2xl">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl md:text-3xl">
                      Send Us a Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-slate-600 mb-6">
                      Fill out the form and we’ll reply shortly.
                    </p>

                    {status && (
                      <div
                        role="status"
                        className={`mb-6 flex items-start gap-3 rounded-xl border p-3 text-sm ${
                          status.type === "success"
                            ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                            : "border-rose-200 bg-rose-50 text-rose-800"
                        }`}
                      >
                        {status.type === "success" ? (
                          <CheckCircle2 className="h-5 w-5 mt-0.5" />
                        ) : (
                          <AlertCircle className="h-5 w-5 mt-0.5" />
                        )}
                        <p>{status.message}</p>
                      </div>
                    )}

                    <form
                      className="space-y-5"
                      onSubmit={handleSubmit}
                      noValidate
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">
                            First Name<span className="text-rose-500"> *</span>
                          </Label>
                          <Input
                            id="firstName"
                            placeholder="John"
                            value={form.firstName}
                            onChange={onChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">
                            Last Name<span className="text-rose-500"> *</span>
                          </Label>
                          <Input
                            id="lastName"
                            placeholder="Doe"
                            value={form.lastName}
                            onChange={onChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">
                          Email<span className="text-rose-500"> *</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={form.email}
                          onChange={onChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          placeholder="Your Company"
                          value={form.company}
                          onChange={onChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">
                          Subject<span className="text-rose-500"> *</span>
                        </Label>
                        <Input
                          id="subject"
                          placeholder="How can we help?"
                          value={form.subject}
                          onChange={onChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">
                          Message<span className="text-rose-500"> *</span>
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your project and requirements..."
                          className="min-h-[140px]"
                          value={form.message}
                          onChange={onChange}
                          required
                        />
                      </div>

                      <button className="mt-6 px-8 py-3 bg-black text-white font-semibold rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:from-blue-600 hover:to-purple-600 focus:outline-none">
                        {submitting ? "Sending..." : "Send Message"}
                      </button>

                      <p className="text-xs text-slate-500 text-center">
                        By sending this form you agree to our terms and privacy
                        policy.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="xl:col-span-2 space-y-6">
                <Card className="border-slate-200 shadow-sm rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    {contactInfo.map((info, idx) => {
                      const Icon = info.icon;
                      return (
                        <div
                          key={idx}
                          className="flex items-start gap-4 rounded-xl border border-slate-200 p-4 hover:shadow-md transition-shadow"
                        >
                          <div className="h-12 w-12 rounded-xl bg-black text-white flex items-center justify-center shadow-sm">
                            <Icon className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="font-medium text-slate-900">
                              {info.title}
                            </h3>
                            <p className="text-gray-600 font-medium">
                              {info.content}
                            </p>
                            <p className="text-sm text-slate-600">
                              {info.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>

                {/* <Card className="rounded-2xl border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-blue-50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-indigo-800">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Live Chat Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 mb-4">
                      Need immediate assistance? Chat with our team in real time
                      and get instant answers.
                    </p>
                    <Button variant="default" className="rounded-xl">
                      Start Live Chat
                    </Button>
                  </CardContent>
                </Card> */}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Frequently Asked{" "}
                <span className="bg-clip-text text-transparent bg-black">
                  Questions
                </span>
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Quick answers to common questions about our services and
                processes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <Card className="rounded-2xl border-slate-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base">
                    How long does a typical project take?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Timelines vary by complexity and scope. Most projects range
                    from 4–12 weeks with milestone check‑ins.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-slate-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base">
                    Do you offer ongoing support?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Yes. We provide maintenance, updates, and technical
                    assistance to keep your solution performing.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-slate-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base">
                    What industries do you work with?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    We partner across industries: healthcare, finance,
                    e‑commerce, education, and technology startups.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-slate-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base">
                    How do you ensure project success?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    We use agile delivery, transparent communication, and
                    iterative development with regular feedback loops.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Contact;
