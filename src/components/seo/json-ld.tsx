/**
 * Renders a JSON-LD structured-data script. The payload is trusted (built from
 * our own content), so serialising it here is safe.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
