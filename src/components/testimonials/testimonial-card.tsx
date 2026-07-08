import Link from "next/link";
import { BadgeCheck } from "lucide-react";

import { Rating } from "@/components/rating";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import type { TestimonialItem } from "@/content";

function initials(name: string): string {
  return name
    .split(/\s+/)
    .map((part) => part[0] ?? "")
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function TestimonialCard({
  testimonial,
}: {
  testimonial: TestimonialItem;
}) {
  const meta = [testimonial.role, testimonial.company].filter(
    (value): value is string => Boolean(value),
  );

  return (
    <figure className="flex h-full flex-col rounded-xl bg-card p-6 ring-1 ring-foreground/10">
      {typeof testimonial.rating === "number" && (
        <Rating value={testimonial.rating} className="mb-4" />
      )}

      <blockquote className="flex-1 text-pretty">
        {testimonial.quote}
      </blockquote>

      {testimonial.skills && testimonial.skills.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {testimonial.skills.map((skill) => (
            <li key={skill}>
              <Badge variant="secondary" className="font-normal">
                {skill}
              </Badge>
            </li>
          ))}
        </ul>
      )}

      <figcaption className="mt-6 flex items-center gap-3">
        <Avatar>
          {testimonial.avatar && (
            <AvatarImage
              src={testimonial.avatar.src}
              alt={testimonial.avatar.alt}
            />
          )}
          <AvatarFallback>{initials(testimonial.author)}</AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <div className="flex items-center gap-1 font-medium">
            <span>{testimonial.author}</span>
            {testimonial.verificationUrl && (
              <a
                href={testimonial.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Verify testimonial from ${testimonial.author}`}
                className="text-brand"
              >
                <BadgeCheck className="size-4" aria-hidden />
              </a>
            )}
          </div>
          {meta.length > 0 && (
            <div className="text-sm text-muted-foreground">
              {meta.join(" · ")}
            </div>
          )}
          {testimonial.date && (
            <div className="text-xs text-muted-foreground/80">
              {testimonial.date}
            </div>
          )}
        </div>
      </figcaption>

      {testimonial.project && (
        <Link
          href={`/projects/${testimonial.project}`}
          className="mt-4 text-sm font-medium text-brand hover:underline"
        >
          View related project
        </Link>
      )}
    </figure>
  );
}
