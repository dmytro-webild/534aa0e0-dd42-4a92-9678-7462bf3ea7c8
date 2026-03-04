"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroLogoBillboard from "@/components/sections/hero/HeroLogoBillboard";
import FeatureCardTwentyThree from "@/components/sections/feature/FeatureCardTwentyThree";
import ProductCardTwo from "@/components/sections/product/ProductCardTwo";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TestimonialCardTwo from "@/components/sections/testimonial/TestimonialCardTwo";
import FaqSplitMedia from "@/components/sections/faq/FaqSplitMedia";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterCard from "@/components/sections/footer/FooterCard";
import { BarChart3, Clock, Github, Linkedin, ThumbsUp, TrendingUp, Twitter, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="mediumSmall"
      sizing="mediumSizeLargeTitles"
      background="grid"
      cardStyle="gradient-mesh"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="solid"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="puul ai"
          navItems={[
            { name: "Features", id: "features" },
            { name: "How It Works", id: "how-it-works" },
            { name: "Pricing", id: "pricing" },
            { name: "Contact", id: "contact" },
            { name: "Demo", id: "https://vapi.ai" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboard
          logoText="puul ai"
          description="Empower your dental practice with AI-powered lead engagement. Automatically answer patient questions through a smart widget on your website and social media. Convert more leads while your team focuses on patient care."
          buttons={[
            { text: "Start Free Trial", href: "#contact" },
            { text: "View Demo", href: "#how-it-works" }
          ]}
          background={{ variant: "sparkles-gradient" }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQIfAPgnVe6STU0xWKR6lfBPoV/a-clean-minimalist-ai-dashboard-interfac-1772607959906-5af1096e.png"
          imageAlt="Puul AI Dashboard Interface"
          frameStyle="browser"
          mediaAnimation="slide-up"
          buttonAnimation="entrance-slide"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwentyThree
          title="Powerful Features Built for Dental Practices"
          description="Everything you need to automate patient engagement and boost your appointment booking rate."
          tag="Features"
          features={[
            {
              id: "1",              title: "AI-Powered Responses",              tags: ["24/7 Availability", "Instant Answers"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQIfAPgnVe6STU0xWKR6lfBPoV/minimalist-illustration-showing-an-ai-re-1772607960846-56a64cc1.png",              imageAlt: "AI Response Interface"
            },
            {
              id: "2",              title: "Lead Management & Tracking",              tags: ["Smart Organization", "Real-time Updates"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQIfAPgnVe6STU0xWKR6lfBPoV/clean-dashboard-view-showing-lead-manage-1772607964802-5400f14f.png",              imageAlt: "Lead Management Dashboard"
            },
            {
              id: "3",              title: "Multi-Platform Deployment",              tags: ["Website Widget", "Social Media"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQIfAPgnVe6STU0xWKR6lfBPoV/illustration-showing-a-widget-deployed-a-1772607960494-801f98df.png",              imageAlt: "Multi-Platform Integration"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[{ text: "Explore All Features", href: "#contact" }]}
        />
      </div>

      <div id="how-it-works" data-section="how-it-works">
        <ProductCardTwo
          title="How the System Works"
          description="See how Puul AI transforms your dental practice's lead engagement in three simple steps."
          products={[
            {
              id: "1",              brand: "Step 1",              name: "Install the Widget",              price: "Easy Integration",              rating: 5,
              reviewCount: "100+ practices",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQIfAPgnVe6STU0xWKR6lfBPoV/screenshot-of-an-ai-widget-embedded-on-a-1772607961280-c8e25114.png",              imageAlt: "Widget Installation Interface"
            },
            {
              id: "2",              brand: "Step 2",              name: "AI Answers Patient Questions",              price: "24/7 Coverage",              rating: 5,
              reviewCount: "Instant Responses",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQIfAPgnVe6STU0xWKR6lfBPoV/mobile-screenshot-showing-the-puul-ai-wi-1772607960386-532c4c9a.png",              imageAlt: "AI Widget Responding to Patients"
            },
            {
              id: "3",              brand: "Step 3",              name: "Convert Leads to Appointments",              price: "Increased Bookings",              rating: 5,
              reviewCount: "Smart Handoff",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQIfAPgnVe6STU0xWKR6lfBPoV/desktop-view-of-the-ai-widget-handling-m-1772607961584-87df5bd8.png",              imageAlt: "Lead Conversion Dashboard"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Real Results for Dental Practices"
          description="See the impact Puul AI delivers for practices just like yours."
          metrics={[
            {
              id: "1",              value: "78",              title: "%",              description: "Increase in Lead Response Rate",              icon: TrendingUp
            },
            {
              id: "2",              value: "45",              title: "min",              description: "Average Response Time (was 4 hours)",              icon: Clock
            },
            {
              id: "3",              value: "3.5x",              title: "ROI",              description: "Average Return on Investment",              icon: BarChart3
            },
            {
              id: "4",              value: "89",              title: "%",              description: "Patient Satisfaction Score",              icon: ThumbsUp
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Loved by Dental Practice Owners"
          description="Hear from practices that have transformed their lead engagement with Puul AI."
          testimonials={[
            {
              id: "1",              name: "Dr. Sarah Mitchell",              role: "Practice Owner",              testimonial: "Puul AI has been a game-changer for our practice. We've cut down on missed leads by over 70% and our staff has more time to focus on patient care. The widget is seamless to use.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQIfAPgnVe6STU0xWKR6lfBPoV/professional-headshot-of-a-female-dental-1772607962223-4dc6f3af.png",              imageAlt: "Dr. Sarah Mitchell"
            },
            {
              id: "2",              name: "Michael Chen",              role: "Office Manager",              testimonial: "The ROI on Puul AI was immediate. Within the first month, we saw a 3x increase in appointment bookings from our website. The AI responses feel natural and patients love it.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQIfAPgnVe6STU0xWKR6lfBPoV/professional-headshot-of-a-male-dentist--1772607960513-4fe1f4df.png",              imageAlt: "Michael Chen"
            },
            {
              id: "3",              name: "Jessica Rodriguez",              role: "Lead Coordinator",              testimonial: "I was skeptical at first, but this system is incredible. It handles routine questions perfectly and escalates complex issues to our team. It's like having an extra receptionist working 24/7.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQIfAPgnVe6STU0xWKR6lfBPoV/professional-headshot-of-a-female-dental-1772607959637-0e642af0.png",              imageAlt: "Jessica Rodriguez"
            },
            {
              id: "4",              name: "Dr. James Thompson",              role: "Practice Director",              testimonial: "The multi-platform deployment is fantastic. Our patients can reach us on Instagram, our website, and Google Business - and the AI handles it all. Customer support from Puul is exceptional.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQIfAPgnVe6STU0xWKR6lfBPoV/professional-headshot-of-a-male-practice-1772607960448-0eea56b3.png",              imageAlt: "Dr. James Thompson"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Common Questions"
          description="Everything you need to know about implementing Puul AI in your practice."
          faqs={[
            {
              id: "1",              title: "How long does it take to install?",              content: "Installation typically takes less than 15 minutes. We provide a simple widget code that you paste into your website or social media platform. Our onboarding team is available to assist with setup at no extra cost."
            },
            {
              id: "2",              title: "Will the AI understand specific dental procedures?",              content: "Yes! The AI is trained on dental industry knowledge and can be customized with your specific practice information, service offerings, pricing, and policies. You control what information the AI uses to respond to patients."
            },
            {
              id: "3",              title: "Can we customize the AI responses?",              content: "Absolutely. You can set custom responses, guidelines, and escalation rules. The system learns from your practice's communication style and can be continuously refined to match your brand voice."
            },
            {
              id: "4",              title: "What platforms does the widget support?",              content: "Puul AI supports website integration, Instagram, Facebook, Google Business Profile, and other social platforms. The same AI powers all channels, providing consistent patient experience across your digital presence."
            },
            {
              id: "5",              title: "How is patient data protected?",              content: "We use enterprise-grade encryption and comply with HIPAA regulations for healthcare data. All patient conversations are securely stored and your data is never shared with third parties."
            },
            {
              id: "6",              title: "What kind of support do you provide?",              content: "We offer 24/7 email support, dedicated onboarding, monthly check-ins, and a comprehensive knowledge base. Premium plans include phone support and a dedicated account manager."
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQIfAPgnVe6STU0xWKR6lfBPoV/abstract-gradient-background-with-subtle-1772607960894-5fbe833a.png"
          imageAlt="Puul AI Support"
          mediaAnimation="slide-up"
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          mediaPosition="right"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Ready to Grow?"
          tagIcon={Zap}
          title="Start Converting More Leads Today"
          description="Join 100+ dental practices using Puul AI to automate lead engagement and boost appointment bookings. Get your free trial today."
          buttons={[
            { text: "Start Your Free Trial", href: "https://app.puul.ai/signup" },
            { text: "Schedule a Demo", href: "mailto:demo@puul.ai" }
          ]}
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="puul ai"
          copyrightText="© 2025 | Puul AI. All rights reserved."
          socialLinks={[
            { icon: Twitter, href: "https://twitter.com/puulai", ariaLabel: "Twitter" },
            { icon: Linkedin, href: "https://linkedin.com/company/puul-ai", ariaLabel: "LinkedIn" },
            { icon: Github, href: "https://github.com/puul-ai", ariaLabel: "GitHub" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
