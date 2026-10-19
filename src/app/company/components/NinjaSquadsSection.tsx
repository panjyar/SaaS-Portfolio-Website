import React from "react";
import Image from "next/image";

const squads = [
  {
    title: "CEO & Co-Founder",
    codename: "Ōkami Circle",
    tagline: "Founders of the path, guardians of the vision.",
    description:
      "Ōkami Circle leads from the front — sharp-eyed, composed, and fiercely strategic. As the founding minds behind the clan, the CEO and Co-Founder don’t just command; they inspire, guide, and protect the vision with unwavering intent.",
    icon: "/ninjas/ceo.png",
    alt: "Ōkami Circle CEO & Co-Founder logo",
    priority: true,
  },
  {
    title: "AI Team",
    codename: "Ronin Core",
    tagline: "They don’t follow rules — they rewrite them with code.",
    description:
      "Ronin squad is a legendary duo—wandering minds with unmatched mastery over data and intelligence. They train and refine the brain of the system, ensuring every prediction is fast, accurate, and battle-tested in the real world. As seasoned warriors, they lead by example, training the next generation of AI ninjas with wisdom and rigor.",
    icon: "/ninjas/ai.png",
    alt: "Ronin Core AI Team logo",
    priority: true,
  },
  {
    title: "UI Team",
    codename: "Hikari Forge",
    tagline:
      "Where clarity meets code, the Hikari Forge creates interfaces that shine.",
    description:
      "Makers of brilliance — the Hikari Forge blends light, form, and code into seamless user experiences. This elite duo leads the squad with clarity and craftsmanship, forging interfaces that are not just seen, but felt. Every pixel, motion, and transition is deliberate — shaping products that speak without saying a word.",
    icon: "/ninjas/UI.png",
    alt: "Hikari Forge UI Team logo",
  },
  {
    title: "API Team",
    codename: "Kage Link",
    tagline: "You don’t see them, but they hold the world together.",
    description:
      "Kage squad are the silent bridges between worlds — unseen, but vital. They craft the core of communication, allowing every part of the system to speak seamlessly. Like ninjas moving through shadows, their integrations are fast, secure, and invisible to the eye.",
    icon: "/ninjas/api.png",
    alt: "Kage Link API Team logo",
  },
  {
    title: "Testing Team",
    codename: "Tenshi Guard",
    tagline: "They don’t break things — they break what’s broken.",
    description:
      "Tenshi squad are guardians of perfection — silent watchers who let nothing slip. With eyes sharper than blades, they patrol every release, every feature, and every line of code. Their mission: protect the user experience with relentless precision.",
    icon: "/ninjas/testing.png",
    alt: "Tenshi Guard Testing Team logo",
  },
  {
    title: "DevOps Team",
    codename: "RaijinOps",
    tagline: "Uptime is their art. Automation, their blade.",
    description:
      "RaijinOps squad are storm tamers — masters of balance between chaos and control. Named after the god of thunder, they keep the system alive, fast, and unshakable. From CI/CD pipelines to real-time infrastructure scaling, they automate everything so teams can move like lightning.",
    icon: "/ninjas/devops.png",
    alt: "RaijinOps DevOps Team logo",
  },
  {
    title: "Marketing & Pre-Sales Team",
    codename: "Yurei Vanguard",
    tagline: "They move first, speak last, and leave an impression.",
    description:
      "Yurei Vanguard are the shadow messengers — unseen, but always ahead. As the frontline storytellers and strategists, they shape perception before a single line of code is seen. Blending precision messaging with tactical timing, they move fast, strike deep, and leave a lasting impression.",
    icon: "/ninjas/marketing.png",
    alt: "Yurei Vanguard Marketing & Pre-Sales Team logo",
  },
  {
    title: "Management Team",
    codename: "Shogun Command",
    tagline: "Not every battle needs a blade — some require vision.",
    description:
      "Shogun Command leads with vision, strategy, and unwavering calm. While others move in shadows or strike with speed, the Shoguns stand above — seeing the entire battlefield. They align teams, set direction, and ensure every squad operates with purpose and unity.",
    icon: "/ninjas/management.png",
    alt: "Shogun Command Management Team logo",
  },
];

function SquadCard({
  codename,
  icon,
  description,
  tagline,
  alt,
  priority = false,
}: {
  codename: string;
  icon: string;
  description: string;
  tagline: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <article
      tabIndex={0}
      aria-label={`${codename} ninja squad`}
      className="bg-[#112A2E] rounded-2xl p-8 flex items-center gap-8 shadow-xl hover:scale-105 transition-transform duration-200"
    >
      <div className="flex-shrink-0">
        <Image
          src={icon}
          width={140}
          height={140}
          alt={alt}
          className="object-contain"
          priority={priority}
          sizes="(max-width: 768px) 140px, 140px"
        />
      </div>
      <div className="flex flex-col">
        <div className="text-sm uppercase tracking-[2px] text-[#FE9A00] mb-4">{codename}</div>
        <p className="text-white-400 leading-relaxed max-w-xl text-sm text-justify">{description}</p>
        <div className="italic text-[#FE9A00] font-semibold max-w-lg text-xs mt-3">{tagline}</div>
      </div>
    </article>
  );
}
const MemoizedSquadCard = React.memo(SquadCard);
export default function NinjaSquadsSection() {
  return (
    <section
      aria-label="Ninja squads team section"
      className="w-full py-16 flex flex-col items-center"
    >
      <h2
        tabIndex={0}
        className="text-white text-5xl font-bold text-center mb-2 tracking-wider"
      >
        Our Ninjas
      </h2>
      <p className="text-xl text-[#FE9A00] text-center mb-12 font-semibold max-w-xl">
        Elite squads mastering code, silence, and the art of technology.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full px-6">
        {squads.map(({ codename, icon, description, tagline, alt, priority }) => (
          <MemoizedSquadCard
            key={codename}
            codename={codename}
            icon={icon}
            description={description}
            tagline={tagline}
            alt={alt}
            priority={priority}
          />
        ))}
      </div>
    </section>
  );
}
