"use client";

import { TestimonialsSplit } from "@/components/ui/split-testimonial";

const testimonialsList = [
  // {
  //   quote:
  //     "Another startup is LivNSense. It is a platform based artificial intelligence and machine learning. With its help, effective monitoring of water distribution can be achieved. This will also help ascertain where and how much water is being wasted.",
  //   name: "Shri Narendra Modi",
  //   title: "Prime Minister of India",
  //   avatar: "/avatars/Modi.png",
  // },
  {
    quote:
      "Congratulation LivNSense for the NetApp Excellerator startup awards for the Globle cause Net Zero challenges with your unique idea focus to technologies solution for the SAAS based AI ML platform.",
    name: "Harnath Babu",
    title: "Partner and CIO KPMG",
    avatar: "https://vicasinfo.livnsense.com/media/testimonials/Harnath-Babu.jpg",
  },
  {
    quote:
      "Appreciable Platform and product innovation in mining looking forward for next innovation. Best of Luck. We will soon collaboration with government bodies for scaling the product to address Safety and Sustainability challenges of industry.",
    name: "Pralhad Joshi",
    title: "Ministry of Mining",
    avatar: "https://vicasinfo.livnsense.com/media/testimonials/Pralhad_Joshi.webp",
  },
  {
    quote:
      "It was a pleasure to share my perspectives and witness Electraverse—a brilliant initiative that supports startups and fosters the country's entrepreneurship ecosystem. Congratulations to IEEMA on organizing a successful event that brings together diverse stakeholders to drive progress and growth. Congratulation LivNSense for brilliant innovation in Sustainability and Decarbonization.",
    name: "Amit Jain",
    title: "Car Dekho",
    avatar: "https://vicasinfo.livnsense.com/media/testimonials/Amit-Jain-Cardekho%201.jpg",
  },
  {
    quote:
      "The team did a great job.The use case targets many industries that utilize high energy assets like kilns and furnaces. It presents tremendous opportunities to reduce overall costs and environmental impact. The business case and market analysis were thorough. The business obvious and wide ranging and the technology a beautiful blend of applied science, loT and SAS analytics. This is a strong proposal, and we look forward to seeing what comes next.",
    name: "Kevin Kalish & Jane Howell",
    title: "SAS Track Lead",
    avatar: "https://vicasinfo.livnsense.com/media/testimonials/Kevin-and-jane%201.png",
  },
  {
    quote:
      "The team did a great job! The description of their use case was clear, concise and compelling. It is obvious they have a deep understanding of their industry and the application of advanced analytics. Moreover, their approach could be applied to a wide range of manufacturers outside their immediate industry. Their use of The SAS Platform was equally impressive. From data exploration to machine learning, the team illustrated how SAS’ end-to-end capabilities.",
    name: "Gen Grabwski",
    title: "SAS Track Lead",
    avatar: "/avatars/Gen-Grabwski.jpg",
  },
  {
    quote:
      "LivNSense is one the rising startup to challenge and sharing their sustainable ideas at Elecrama 2023. Congratulations for Winning the award in the category of Future Engines of Decarbonization.",
    name: "Jitender Kumar Agarwal",
    title: "JMD, Genus Power Infrastructures Ltd || Chairman, ELECRAMA 2023.",
    avatar: "https://vicasinfo.livnsense.com/media/testimonials/Jitendra-Kumar-Agarwal.jpg",
  },
  {
    quote:
      "It is such an honor to be part of Austin where all employee-owners diligently pursue a Piloting AI technology on our equipment is just another example of embracing innovation to advance the safety of our workers and all other stakeholders who enter our work zones.",
    name: "Richard Mills",
    title: "President Austin Bridge & Road",
    avatar: "https://vicasinfo.livnsense.com/media/testimonials/Richard-Mills.jpg",
  },
  {
    quote:
      "I am intrigued by LivNSense as the way they the solved problem that is addressing Carbon Emissions from Smelting to Cement Industries, with unique solution by capturing more data points with better AI models and Digital Twins. GreenOps™ is not only changing the energy efficiency but the optimizing raw materials the way its consumed.",
    name: "Matt Hurford",
    title: "Vice President, Solutions Engineering, NetApp",
    avatar: "https://vicasinfo.livnsense.com/media/testimonials/Matt-Hurford.jpeg",
  },
  {
    quote:
      "LivNSense has been our innovation partner for digital factory initiatives since pasty one year. This encompasses a strong domain led team in IIOT with a deep understanding of Industry4.0 concepts, quick adoption across business use cases from sensor to cloud and are able to bring out innovative IoT solutions which are reliable and secured to help our customers improve machine utilization, efficiency, operator productivity, safety and predictive maintenance. We, at Leadec Industrial Services, are happy to embark on a digital journey with LivNSense to offer value added solutions to our customers.",
    name: "Sudhir Gurtoo",
    title: "Managing Director at Leadec India",
    avatar: "https://vicasinfo.livnsense.com/media/testimonials/sudhir-gurtoo.jpg",
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
        <h2 className="text-4xl md:text-5xl font-bold text-[#00A755]">Testimonials</h2>
      </div>
      <TestimonialsSplit testimonials={formattedTestimonials} />
    </div>
  );
}
