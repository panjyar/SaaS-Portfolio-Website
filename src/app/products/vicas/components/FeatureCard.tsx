import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
}

export default function FeatureCard({
  title,
  description,
  image,
  imageAlt,
  tags,
}: FeatureCardProps) {
  return (
    <div
      className="flex gap-8 rounded-3xl border border-white/10 bg-[#111814] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,180,80,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,180,80,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    >
      <div className="w-[360px] shrink-0 overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={imageAlt}
          width={360}
          height={280}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-center gap-6">
        <div>
          <h3 className="mb-3 text-3xl font-bold text-white">
            {title}
          </h3>

          <p className="max-w-xl leading-7 text-white/60">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#00b450] px-4 py-2 text-sm font-medium text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}