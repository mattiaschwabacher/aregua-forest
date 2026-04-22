import Image from "next/image";

interface Props {
  image: string;
  alt: string;
  eyebrow?: string;
  quote: string;
  author?: string;
  overlay?: "light" | "dark";
}

export default function LuxuryBanner({
  image,
  alt,
  eyebrow,
  quote,
  author,
  overlay = "dark",
}: Props) {
  return (
    <div className="relative h-[55vh] min-h-[380px] w-full overflow-hidden">
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className={`absolute inset-0 ${
          overlay === "dark" ? "bg-stone/60" : "bg-white/30"
        }`}
      />
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center max-w-3xl mx-auto">
        {eyebrow && (
          <p className="text-xs tracking-[0.4em] text-gold uppercase mb-6">
            {eyebrow}
          </p>
        )}
        <blockquote className="font-heading text-3xl md:text-5xl font-light text-white leading-tight">
          &ldquo;{quote}&rdquo;
        </blockquote>
        {author && (
          <p className="mt-6 text-xs tracking-[0.3em] text-white/50 uppercase">
            — {author}
          </p>
        )}
      </div>
    </div>
  );
}
