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
      className="group flex gap-4 border-b border-border py-5"
    >
      <div className="min-w-0 flex-1">
        <p className="leading-relaxed transition-colors group-hover:text-highlight">{title}</p>
        <p className="mt-1.5 flex flex-wrap gap-x-3 text-xs text-muted-foreground">
          {date ? <time className="font-mono tabular-nums">{date}</time> : null}
          {meta ? <span>{meta}</span> : null}
        </p>
      </div>
      {image ? (
        <div className="relative h-20 w-14 shrink-0 overflow-hidden ring-1 ring-border">
          <Image src={image} alt="" fill className="object-cover" sizes="56px" />
        </div>
      ) : null}
    </Link>
  );
}
