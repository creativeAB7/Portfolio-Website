import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import { Check } from "lucide-react";

import { TechnologyGroups } from "@/components/technology-groups";
import type { CaseStudyBlock, CaseStudyBlockType } from "@/content";

/** Narrow the block union to a single variant by its `type`. */
type BlockOf<K extends CaseStudyBlockType> = Extract<
  CaseStudyBlock,
  { type: K }
>;

function BlockHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-4 font-heading text-2xl font-bold tracking-tight">
      {children}
    </h2>
  );
}

function ProseBlock({ block }: { block: BlockOf<"prose"> }) {
  return (
    <section>
      {block.title && <BlockHeading>{block.title}</BlockHeading>}
      <div className="space-y-4 leading-relaxed text-muted-foreground">
        {block.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

function ListBlock({ block }: { block: BlockOf<"list"> }) {
  const style = block.style ?? "bullet";

  return (
    <section>
      {block.title && <BlockHeading>{block.title}</BlockHeading>}
      {style === "number" ? (
        <ol className="list-decimal space-y-2 pl-5 text-muted-foreground marker:text-brand">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      ) : style === "check" ? (
        <ul className="space-y-2">
          {block.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-muted-foreground"
            >
              <Check className="mt-1 size-4 shrink-0 text-brand" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="list-disc space-y-2 pl-5 text-muted-foreground marker:text-brand">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

function FeatureListBlock({ block }: { block: BlockOf<"featureList"> }) {
  return (
    <section>
      {block.title && <BlockHeading>{block.title}</BlockHeading>}
      <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
        {block.items.map((item) => (
          <div key={item.title} className="flex gap-3">
            <Check className="mt-1 size-4 shrink-0 text-brand" aria-hidden />
            <div>
              <h3 className="font-medium">{item.title}</h3>
              {item.description && (
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TechStackBlock({ block }: { block: BlockOf<"techStack"> }) {
  return (
    <section>
      {block.title && <BlockHeading>{block.title}</BlockHeading>}
      <TechnologyGroups groups={block.groups} />
    </section>
  );
}

function DecisionsBlock({ block }: { block: BlockOf<"decisions"> }) {
  return (
    <section>
      {block.title && <BlockHeading>{block.title}</BlockHeading>}
      <div className="space-y-4">
        {block.items.map((item) => (
          <div
            key={item.decision}
            className="rounded-xl bg-card p-6 ring-1 ring-foreground/10"
          >
            <h3 className="font-heading text-lg font-semibold">
              {item.decision}
            </h3>
            <dl className="mt-3 space-y-2 text-sm">
              <div>
                <dt className="inline font-medium text-foreground">Why: </dt>
                <dd className="inline text-muted-foreground">
                  {item.rationale}
                </dd>
              </div>
              {item.alternatives && (
                <div>
                  <dt className="inline font-medium text-foreground">
                    Alternatives considered:{" "}
                  </dt>
                  <dd className="inline text-muted-foreground">
                    {item.alternatives}
                  </dd>
                </div>
              )}
            </dl>
          </div>
        ))}
      </div>
    </section>
  );
}

function MetricsBlock({ block }: { block: BlockOf<"metrics"> }) {
  return (
    <section>
      {block.title && <BlockHeading>{block.title}</BlockHeading>}
      <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {block.items.map((item) => (
          <div
            key={item.label}
            className="rounded-xl bg-card p-5 ring-1 ring-foreground/10"
          >
            <dt className="sr-only">{item.label}</dt>
            <dd>
              <span className="block font-heading text-3xl font-bold text-brand">
                {item.value}
              </span>
              <span className="mt-1 block text-sm text-muted-foreground">
                {item.label}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function GalleryBlock({ block }: { block: BlockOf<"gallery"> }) {
  return (
    <section>
      {block.title && <BlockHeading>{block.title}</BlockHeading>}
      <ul className="grid gap-6 sm:grid-cols-2">
        {block.items.map((image) => (
          <li key={image.src}>
            <figure>
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-muted ring-1 ring-foreground/10">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              </div>
              {image.caption && (
                <figcaption className="mt-2 text-sm text-muted-foreground">
                  {image.caption}
                </figcaption>
              )}
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}

function QuoteBlock({ block }: { block: BlockOf<"quote"> }) {
  return (
    <figure className="border-l-2 border-brand pl-6">
      <blockquote className="text-lg text-pretty text-foreground">
        {block.quote}
      </blockquote>
      {block.attribution && (
        <figcaption className="mt-2 text-sm text-muted-foreground">
          — {block.attribution}
        </figcaption>
      )}
    </figure>
  );
}

/**
 * Block registry. The mapped type forces an entry for every block variant, so
 * adding a new block to the schema is a compile error until its renderer is
 * registered here — new sections never touch the template, routes, or layouts.
 */
const blockComponents: {
  [K in CaseStudyBlockType]: ComponentType<{ block: BlockOf<K> }>;
} = {
  prose: ProseBlock,
  list: ListBlock,
  featureList: FeatureListBlock,
  techStack: TechStackBlock,
  decisions: DecisionsBlock,
  metrics: MetricsBlock,
  gallery: GalleryBlock,
  quote: QuoteBlock,
};

/** Dispatches a single block to its registered renderer. */
export function CaseStudyBlockRenderer({ block }: { block: CaseStudyBlock }) {
  const Renderer = blockComponents[block.type] as ComponentType<{
    block: CaseStudyBlock;
  }>;
  return <Renderer block={block} />;
}

/** Renders an ordered list of blocks with consistent vertical rhythm. */
export function CaseStudyBody({ blocks }: { blocks: CaseStudyBlock[] }) {
  return (
    <div className="space-y-12">
      {blocks.map((block, index) => (
        <CaseStudyBlockRenderer key={index} block={block} />
      ))}
    </div>
  );
}
