import { Badge } from "@/components/ui/badge";
import type { TechnologyGroup } from "@/content";

/**
 * Renders grouped technology badges. Shared by the Technologies section and the
 * case-study `techStack` block so the two stay visually consistent.
 */
export function TechnologyGroups({ groups }: { groups: TechnologyGroup[] }) {
  return (
    <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
      {groups.map((group) => (
        <div key={group.category}>
          <h3 className="mb-3 text-sm font-semibold tracking-wider text-muted-foreground uppercase">
            {group.category}
          </h3>
          <ul className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <li key={item}>
                <Badge
                  variant="secondary"
                  className="h-7 px-3 text-sm font-medium"
                >
                  {item}
                </Badge>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
