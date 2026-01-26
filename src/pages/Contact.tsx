import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    social: "",
    pitch: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-hero-gradient">
      <Header />

      {/* Form Section */}
      <main className="px-6 md:px-12 lg:px-24 py-12 lg:py-24">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
            Let's work together
          </h1>
          <p className="text-muted-foreground mb-12">
            Tell us about your project and we'll be in touch.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Name */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="name" className="text-sm text-foreground">
                Name <span className="text-muted-foreground">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-secondary border-border focus:border-foreground transition-colors"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="email" className="text-sm text-foreground">
                Email <span className="text-muted-foreground">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-secondary border-border focus:border-foreground transition-colors"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="phone" className="text-sm text-foreground">
                Phone
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="bg-secondary border-border focus:border-foreground transition-colors"
              />
            </div>

            {/* Company */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="company" className="text-sm text-foreground">
                Company / Brand name <span className="text-muted-foreground">*</span>
              </Label>
              <Input
                id="company"
                name="company"
                type="text"
                required
                value={formData.company}
                onChange={handleChange}
                className="bg-secondary border-border focus:border-foreground transition-colors"
              />
            </div>

            {/* Website */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="website" className="text-sm text-foreground">
                Website or product link
              </Label>
              <Input
                id="website"
                name="website"
                type="url"
                value={formData.website}
                onChange={handleChange}
                placeholder="https://"
                className="bg-secondary border-border focus:border-foreground transition-colors placeholder:text-muted-foreground/50"
              />
            </div>

            {/* Social */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="social" className="text-sm text-foreground">
                Instagram or X handle
              </Label>
              <Input
                id="social"
                name="social"
                type="text"
                value={formData.social}
                onChange={handleChange}
                placeholder="@"
                className="bg-secondary border-border focus:border-foreground transition-colors placeholder:text-muted-foreground/50"
              />
            </div>

            {/* Pitch */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="pitch" className="text-sm text-foreground">
                Pitch your business in two sentences or less? <span className="text-muted-foreground">*</span>
              </Label>
              <Textarea
                id="pitch"
                name="pitch"
                required
                value={formData.pitch}
                onChange={handleChange}
                rows={4}
                className="bg-secondary border-border focus:border-foreground transition-colors resize-none"
              />
            </div>

            <Button 
              type="submit"
              variant="default" 
              size="lg"
              className="rounded-full px-8 py-6 text-base font-medium w-fit mt-4"
            >
              Submit
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;