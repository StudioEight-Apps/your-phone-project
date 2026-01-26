import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const WhisperPrivacy = () => {
  return (
    <div className="min-h-screen bg-[#F6F1EA]">
      <header className="px-6 md:px-12 lg:px-24 py-6">
        <Link 
          to="/whisper" 
          className="inline-flex items-center gap-2 text-sm text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Whisper
        </Link>
      </header>

      <main className="px-6 md:px-12 lg:px-24 py-12 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-[#1a1a1a] mb-8">
          Privacy Policy
        </h1>
        
        <div className="prose prose-gray max-w-none space-y-6 text-[#1a1a1a]/70">
          <p className="text-sm">Last updated: January 2025</p>
          
          <section className="space-y-4">
            <h2 className="text-xl font-medium text-[#1a1a1a]">Introduction</h2>
            <p>
              Whisper ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-[#1a1a1a]">Information We Collect</h2>
            <p>We collect information you provide directly to us, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Journal entries and personal reflections you create within the app</li>
              <li>Account information such as your email address</li>
              <li>Usage data and app preferences</li>
              <li>Device information and identifiers</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-[#1a1a1a]">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve the Whisper app</li>
              <li>Personalize your experience and deliver tailored insights</li>
              <li>Process and respond to your requests and inquiries</li>
              <li>Send you technical notices and support messages</li>
              <li>Analyze usage patterns to improve our services</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-[#1a1a1a]">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information. Your journal entries are encrypted and stored securely. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-[#1a1a1a]">Data Retention</h2>
            <p>
              We retain your personal information for as long as your account is active or as needed to provide you services. You may request deletion of your data at any time by contacting us.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-[#1a1a1a]">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access and receive a copy of your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing of your data</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-[#1a1a1a]">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:support@whisper.io" className="text-[#1a1a1a] underline">
                support@whisper.io
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default WhisperPrivacy;
