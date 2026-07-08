/**
 * Keyboard-accessibility helper: a link that is visually hidden until focused,
 * letting keyboard and screen-reader users jump straight to the main content
 * without tabbing through the header.
 */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only bg-background ring-ring focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:shadow-lg focus:ring-2 focus:outline-none"
    >
      Skip to main content
    </a>
  );
}
