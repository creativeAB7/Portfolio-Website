import Image from "next/image";
import { Award, CalendarDays, ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { CertificationItem } from "@/content";

export function CertificationCard({
  certification,
}: {
  certification: CertificationItem;
}) {
  return (
    <article className="flex h-full flex-col rounded-xl bg-card p-6 ring-1 ring-foreground/10">
      <div className="flex items-start gap-4">
        {certification.badge ? (
          <Image
            src={certification.badge.src}
            alt={certification.badge.alt}
            width={48}
            height={48}
            className="size-12 shrink-0 rounded-md object-contain"
          />
        ) : (
          <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
            <Award className="size-6" aria-hidden />
          </span>
        )}
        <div className="min-w-0 flex-1">
          <h3 className="font-heading leading-snug font-semibold">
            {certification.name}
          </h3>
          <p className="text-sm text-muted-foreground">
            {certification.issuer}
          </p>
        </div>
      </div>

      <dl className="mt-4 space-y-1 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <CalendarDays className="size-4 shrink-0" aria-hidden />
          <dt className="sr-only">Issued</dt>
          <dd>
            Issued {certification.issueDate}
            {certification.expiryDate &&
              ` · Expires ${certification.expiryDate}`}
          </dd>
        </div>
        {certification.credentialId && (
          <div>
            <dt className="sr-only">Credential ID</dt>
            <dd>ID: {certification.credentialId}</dd>
          </div>
        )}
      </dl>

      {certification.skills && certification.skills.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {certification.skills.map((skill) => (
            <li key={skill}>
              <Badge variant="secondary" className="font-normal">
                {skill}
              </Badge>
            </li>
          ))}
        </ul>
      )}

      {certification.credentialUrl && (
        <div className="mt-auto pt-4">
          <Button asChild variant="outline" size="sm">
            <a
              href={certification.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="size-4" />
              View credential
            </a>
          </Button>
        </div>
      )}
    </article>
  );
}
