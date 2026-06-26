import career from "../content/resume/career.json";
import education from "../content/resume/education.json";
import employment from "../content/resume/employment.json";
import references from "../content/resume/references.json";

export type CareerMetadata = (typeof career)[number];
export type Employment = (typeof employment)[number];
export type Education = (typeof education)[number];
export type Reference = (typeof references)[number];

export const careerMetadata = career[0] satisfies CareerMetadata;
export const employmentEntries = employment satisfies Employment[];
export const activeEmployment = employmentEntries.filter((entry) => entry.active);
export const educationEntries = education satisfies Education[];
export const referenceEntries = references satisfies Reference[];

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

export function formatResumeDate(value: string) {
  if (value.startsWith("2055")) {
    return "Present";
  }

  const [year, month = "01"] = value.split("-");
  return dateFormatter.format(new Date(Date.UTC(Number(year), Number(month) - 1, 1)));
}

export function formatResumeRange(entry: Pick<Employment | Education, "startDate" | "endDate">) {
  return `${formatResumeDate(entry.startDate)} - ${formatResumeDate(entry.endDate)}`;
}

export const topSkills = Array.from(
  new Set(activeEmployment.flatMap((entry) => entry.skills))
).slice(0, 12);
