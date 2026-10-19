"use client";

import { TestimonialsSplit } from "@/components/ui/split-testimonial";

const testimonialsList = [
  {
    quote:
      "YatraGen has completely transformed how our agency handles group bookings. The AI itinerary builder saves us hours of manual work and creates experiences our clients absolutely love.",
    name: "Sarah Jenkins",
    title: "Director of Operations, Global Explorers",
    avatar: "https://images.pexels.com/photos/27086922/pexels-photo-27086922.jpeg",
  },
  {
    quote:
      "The dynamic routing feature is a game-changer. It automatically adjusted our clients' schedules during a major flight disruption seamlessly, keeping them happy and relaxed.",
    name: "David Chen",
    title: "Founder, TravelTech Solutions",
    avatar: "https://images.pexels.com/photos/8297585/pexels-photo-8297585.jpeg",
  },
  {
    quote:
      "Darshan AI's cultural context extraction gives our luxury clients the authentic local experiences they crave without the language barrier. Highly recommended!",
    name: "Elena Rodriguez",
    title: "Luxury Travel Consultant",
    avatar: "https://images.pexels.com/photos/29242833/pexels-photo-29242833.jpeg",
  },
  {
    quote:
      "We saw a 40% increase in customer satisfaction scores after integrating YatraGen's personalized recommendation engine into our booking platform.",
    name: "Marcus Thorne",
    title: "VP of Product, NextGen Vacations",
    avatar: "https://images.pexels.com/photos/31112197/pexels-photo-31112197.jpeg",
  },
  {
    quote:
      "Unbelievable efficiency! What used to take our agents days to plan is now generated in seconds, with better pricing optimization and localized insights.",
    name: "Priya Sharma",
    title: "Lead Travel Agent, Voyage Integrations",
    avatar: "https://images.pexels.com/photos/7688367/pexels-photo-7688367.jpeg",
  },
];

const formattedTestimonials = testimonialsList.map((t, index) => ({
  id: index + 1,
  quote: t.quote,
  name: t.name,
  role: t.title,
  image: t.avatar,
}));

export default function TestimonialSlider() {
  return (
    <div className="w-full overflow-hidden py-16 text-white min-h-[600px] flex flex-col justify-center">
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#FE9A00]">Testimonials</h2>
      </div>
      <TestimonialsSplit testimonials={formattedTestimonials} />
    </div>
  );
}
