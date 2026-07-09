import { processSchema, type ProcessContent } from "./schema";

const data: ProcessContent = {
  eyebrow: "How I work",
  title: "A clear process, from first call to ongoing support",
  description:
    "No black boxes. Here's how a typical engagement runs — designed to keep you informed and de-risk delivery at every step.",
  phases: [
    {
      title: "Discovery",
      description:
        "I start by understanding your goals, users, and constraints — so we build the right thing, not just any thing.",
    },
    {
      title: "Plan & shape",
      description:
        "We agree scope, approach, and a clear plan up front, so there are no surprises on timeline or budget.",
    },
    {
      title: "Build",
      description:
        "I develop in small, reviewable increments with regular check-ins, so you always see progress.",
    },
    {
      title: "Test & assure quality",
      description:
        "Automated and exploratory testing means features are proven to work before they reach you or your users.",
    },
    {
      title: "Deliver",
      description:
        "I ship to production with documentation and a smooth handover — no lock-in, no mess.",
    },
    {
      title: "Support",
      description:
        "After launch I'm available for maintenance, improvements, and ongoing support as your needs evolve.",
    },
  ],
};

export const workProcess = processSchema.parse(data);
