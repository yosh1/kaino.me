import Image from "next/image";
import Link from "next/link";

export default function ListItem({
  href,
  date,
  title,
  meta,
  image,
}: {
  href: string;
  date?: string;
  title: string;
  meta?: string;
  image?: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-4 group border-b border-border pb-4"
    >
      {image ? (
        <div className="shrink-0 w-20 h-28 relative rounded overflow-hidden border border-border">
          <Image src={image} alt={title} fill className="object-cover" sizes="80px" />
        </div>
      ) : null}
      <div className="min-w-0">
        {date ? (
          <time className="block text-xs text-foreground/60 font-mono">{date}</time>
        ) : null}
        <p className="mt-1 text-lg font-semibold text-foreground group-hover:underline">{title}</p>
        {meta ? <span className="text-sm text-foreground/60">{meta}</span> : null}
      </div>
    </Link>
  );
}
