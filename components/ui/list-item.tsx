import Link from "next/link";

export default function ListItem({
  href,
  date,
  title,
  meta,
}: {
  href: string;
  date?: string;
  title: string;
  meta?: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block group border-b border-border pb-4"
    >
      {date ? (
        <time className="block text-xs text-foreground/60 font-mono">{date}</time>
      ) : null}
      <p className="mt-1 text-lg font-semibold text-foreground group-hover:underline">{title}</p>
      {meta ? <span className="text-sm text-foreground/60">{meta}</span> : null}
    </Link>
  );
}
