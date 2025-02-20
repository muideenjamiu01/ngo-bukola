import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  Heart,
  Calendar,
  Clock,
  Mail,
  Phone,
  Star,
  BookOpen,
  Shield,
  Brain,
  Award,
  BookOpen as Book,
  Users,
  Globe,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";
import TestimonialCarousel from "./components/TestimonialCarousel";
import FounderReview from "./components/FounderReview";
import Bonus from "./components/Bonus";
import founderIMage from "./assests/founder.jpeg";
import stressImage from "./assests/Stress-pana.svg"

const heroImages = [
  "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?auto=format&fit=crop&q=80",
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);
  const [currentFounderReview, setCurrentFounderReview] = useState(0);

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Hero Carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Reviews Carousel Controls
  // const nextReview = useCallback(() => {
  //   setCurrentReview((prev) => (prev + 1) % founderReviews.length);
  // }, []);

  // const prevReview = useCallback(() => {
  //   setCurrentReview((prev) => (prev - 1 + founderReviews.length) % founderReviews.length);
  // }, []);

  // useEffect(() => {
  //   const timer = setInterval(nextReview, 6000);
  //   return () => clearInterval(timer);
  // }, [nextReview]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0 overflow-hidden">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60" />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center px-4 max-w-4xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Thrive & Flourish: Emotional and Mental Well-being for Special
              Needs Parents
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-[#F97100] font-semibold">
              Because You Deserve to Thrive, Not Just Survive!
            </p>
            <p className="text-lg mb-8">
              Parenting a child with special needs can be overwhelming,
              exhausting, and emotionally draining. You love your child, but who
              takes care of YOU?
            </p>
            <button className="bg-[#F97100] hover:bg-[#e66700] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors animate-scale-in">
              Register Now - Limited Slots Available!
            </button>
          </div>
        </div>
      </div>

      {/* Pain Points */}
      <div className="bg-green-50 py-16 reveal">
        <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row gap-16 items-center justify-between">
          <div className="md:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <img
                src={stressImage} // Replace with your image path
                alt="Happy Parent"
                width={500}
                height={500}
                className="duration-500 transition-opacity ease-in mx-auto"
              />
            </motion.div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Do you often feel:
            </h2>
            <div className="flex gap-x-4 items-center mb-4">
              <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center">
                {" "}
                <Check className="text-white text-sm" />
              </div>
              <p className="text-sm md:text-lg font-semibold text-black">
                Stressed, exhausted, or emotionally drained?
              </p>
            </div>
            <div className="flex gap-x-4 items-center mb-4">
              <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center">
                {" "}
                <Check className="text-white text-sm" />
              </div>
              <p className="text-sm md:text-lg font-semibold text-black">
                Overwhelmed by caregiving responsibilities?
              </p>
            </div>
            <div className="flex gap-x-4 items-center mb-4">
              <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center">
                {" "}
                <Check className="text-white text-sm" />
              </div>
              <p className="text-sm md:text-lg font-semibold text-black">
                Guilty for wanting a break or time for yourself?
              </p>
            </div>
            <div className="flex gap-x-4 items-center mb-4">
              <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center">
                {" "}
                <Check className="text-white text-sm" />
              </div>
              <p className="text-sm md:text-lg font-semibold text-black">
                Alone, with no one who truly understands your struggles?
              </p>
            </div>

            <p className="md-16 md:mt-20 text-sm md:text-lg font-semibold text-orange-500 italic text-center md:text-left">
              If you answered yes to any of these, this training is for you! 🎯
            </p>
          </div>
        </div>
      </div>

      {/* Modules */}
      <div className="py-20 bg-white reveal">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#F97100]">
            What You'll Learn in This Transformational Program
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-8 rounded-xl shadow-lg">
              <Heart className="w-12 h-12 text-[#F97100] mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                Module 1: Understanding Your Emotional Journey
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>• How to navigate guilt, fear, frustration & acceptance</li>
                <li>
                  • Managing the emotional highs and lows of special needs
                  parenting
                </li>
              </ul>
            </div>
            <div className="bg-green-50 p-8 rounded-xl shadow-lg">
              <Brain className="w-12 h-12 text-[#F97100] mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                Module 2: Managing Stress & Avoiding Burnout
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  • Practical stress management strategies for busy parents
                </li>
                <li>• Simple self-care routines that fit your lifestyle</li>
              </ul>
            </div>
            <div className="bg-green-50 p-8 rounded-xl shadow-lg">
              <Shield className="w-12 h-12 text-[#F97100] mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                Module 3: Strengthening Your Mindset
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>• How to shift from survival mode to thriving mode</li>
                <li>• Emotional Freedom Techniques (EFT) for stress relief</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Meet the Founder */}
      <div className="py-20 bg-white reveal">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
              src={founderIMage}
                // src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
                alt="Bukola Ayinde"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[#F97100]">
                Meet Our Founder
              </h2>
              <h3 className="text-2xl font-semibold mb-4">Bukola Ayinde</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Founder of the Diary of a Special Needs Mum Initiative under the
                P4:13 Foundation, Bukola Ayinde is a passionate advocate for
                disability inclusion and special needs parenting.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-[#F97100] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Certified Expert</h4>
                    <p className="text-sm text-gray-600">
                      Special Needs Therapist, NLP Practitioner, and Trauma Care
                      Coach
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Book className="w-6 h-6 text-[#F97100] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Published Author</h4>
                    <p className="text-sm text-gray-600">
                      Six books on disability awareness including "My Name is
                      Nimi"
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-[#F97100] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Community Leader</h4>
                    <p className="text-sm text-gray-600">
                      Mentored over 100 special needs parents
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="w-6 h-6 text-[#F97100] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Change Maker</h4>
                    <p className="text-sm text-gray-600">
                      Advocate for inclusive education and disability rights
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="font-semibold mb-3 text-[#F97100]">
                  Professional Background
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    • Bachelor of Laws (LL.B.) and Master's in Managerial
                    Psychology
                  </li>
                  <li>• Former litigation lawyer and HR professional</li>
                  <li>
                    • Founder of D.P.I Services and Diary of a Special Needs Mum
                    Initiative
                  </li>
                  <li>
                    • Chairperson of Safe Schools for Children with Special
                    Needs Committee
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-10 text-gray-800">
              Notable Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100">
                <h4 className="font-semibold text-[#F97100] mb-3">
                  Breaking Barriers Project
                </h4>
                <p className="text-gray-700">
                  Founded the Breaking Barriers: Disability Inclusion Through
                  Book Reading project, reaching over 500 students across Lagos
                  and Abuja.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100">
                <h4 className="font-semibold text-[#F97100] mb-3">
                  Visual Storytelling
                </h4>
                <p className="text-gray-700">
                  Produced "Mindshift" - a short film on mental health
                  challenges of special needs parents, and multiple
                  documentaries on inclusive education.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100">
                <h4 className="font-semibold text-[#F97100] mb-3">
                  Advocacy Work
                </h4>
                <p className="text-gray-700">
                  Active member of the Gender and Disability Inclusion Team and
                  advocate for inclusive education through various platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#F97100]">
          What People Say About Our Founder
        </h2>
        <FounderReview />
      </div>

     

      {/* Testimonials */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-bold text-green-700 mb-8">
            What Our Participants Say
          </h2>
          <TestimonialCarousel />
        </div>
      </section>

      <Bonus />

      {/* <div className="py-20 bg-green-50 reveal">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Reviews from our Students
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-gray-700 mb-6">
                "The course was fully packed. I looked forward to the classes every weekend. 
                It has given me a lot of clarity and helped me to untangle myself from cobwebs 
                in my mind. I had a lot of fun and it helped me to realise that I am not alone 
                on the journey of my healing."
              </p>
              <div className="font-semibold text-[#F97100]">- Arin</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-gray-700 mb-6">
                "Immediately from the first lesson, I was hooked. The course helped me 
                rediscover my love for writing. Bukola shared knowledge and techniques 
                which not only help with improving our writing, but also tips and tools 
                that have a real therapeutic effect."
              </p>
              <div className="font-semibold text-[#F97100]">- T. M.</div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Contact */}
       {/* Event Details */}
       <div className="bg-[#F97100] py-16 text-white reveal">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Event Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Calendar className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Date</h3>
              <p>4th & 5th, 11th & 12th April, 2025</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Time</h3>
              <p>7pm – 9:30pm</p>
            </div>
            <div className="text-center">
              <BookOpen className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Venue</h3>
              <p>Virtual event</p>
            </div>
            <div className="text-center">
              <Star className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Investment</h3>
              <p>N50,000 / $50 per participant</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-white py-12 reveal">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <div className="flex flex-col gap-y-6 sm:flex-row items-center justify-center space-x-8 mb-6">
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-2" />
                <a
                  href="mailto:dpiservicesng@gmail.com"
                  className="hover:text-[#F97100]"
                >
                  dpiservicesng@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-2" />
                <a href="https://wa.me/+2347046468669 ">0704 646 8669 (WhatsApp msg only)</a>
              </div>
            </div>
            <button className="bg-[#F97100] hover:bg-[#e66700] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors">
              Enroll Now
            </button>
            <p className="mt-8 text-lg">
              💙 Take the first step toward your emotional healing and
              well-being. You deserve it! 💙
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
