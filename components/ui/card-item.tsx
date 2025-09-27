"use client"

import Image from "next/image";
import Link from "next/link";
import Tag from "@/components/ui/tag";

export default function CardItem({
  href = "#",
  image,
  title,
  subtitle,
  description,
  tags = [],
  external,
}: {
  href?: string;
  image: string;
  title: string;
  subtitle?: string; // e.g. year
  description?: string;
  tags?: string[];
  external?: boolean;
}) {
  const linkProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <Link href={href} className="group block" {...linkProps}>
      <div className="relative aspect-[3/2] w-full overflow-hidden mb-4">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {tags?.length ? (
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, i) => (
            <Tag key={i}>{tag}</Tag>
          ))}
        </div>
      ) : null}

      <div className="mb-1">
        <h3 className="text-lg font-bold">{title}</h3>
        {subtitle ? <span className="text-xs text-foreground/60 font-mono">{subtitle}</span> : null}
      </div>

      {description ? <p className="text-sm text-foreground/80">{description}</p> : null}
    </Link>
  );
}
