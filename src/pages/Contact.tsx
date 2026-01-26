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
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: "", email: "", phone: "", company: "", website: "", social: "", pitch: "" });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-hero-gradient">
      <Header />

      <main className="px-6 md:px-12 lg:px-24 py-12 lg:py-24">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
            Let's work together
          </h1>
          <p className="text-muted-foreground mb-12">
            Tell us about your project and we'll be in touch.
          </p>

          {status === 'success' ? (
            <div className="rounded-lg bg-neon/10 border border-neon/20 p-6">
              <h3 className="text-lg font-medium text-neon mb-2">Message sent!</h3>
              <p className="text-muted-foreground">We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
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

              <div className="flex flex-col gap-2">
                <Label htmlFor="company" className="text-sm text-foreground">
                  Company / Brand name
                </Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-secondary border-border focus:border-foreground transition-colors"
                />
              </div>

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

              <div className="flex flex-col gap-2">
                <Label htmlFor="pitch" className="text-sm text-foreground">
                  Tell us about your project <span className="text-muted-foreground">*</span>
                </Label>
                <Textarea
                  id="pitch"
                  name="pitch"
                  required
                  rows={5}
                  value={formData.pitch}
                  onChange={handleChange}
                  className="bg-secondary border-border focus:border-foreground transition-colors"
                />
              </div>

              <Button 
                type="submit" 
                variant="chrome"
                size="lg" 
                className="w-full mt-4 rounded-full" 
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending...' : 'Send message'}
              </Button>
              
              {status === 'error' && (
                <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
              )}
            </form>
          )}
        </div>
      </main>
    </div>
  );
};

export default Contact;
