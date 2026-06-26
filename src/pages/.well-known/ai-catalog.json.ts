export function GET() {
  return Response.json({
    name: "Ryan Baird",
    url: "https://ryanbaird.com",
    description: "Personal website, developer portfolio, project archive, and writing by Ryan Baird.",
    ai_statement: "https://ryanbaird.com/ai/",
    privacy: "https://ryanbaird.com/privacy/",
    llms_txt: "https://ryanbaird.com/llms.txt",
    allowed_uses: [
      "Summarize public pages with attribution",
      "Index public pages for search and discovery",
      "Link back to original source URLs",
    ],
    disallowed_uses: [
      "Implying endorsement",
      "Republishing full pages without attribution",
      "Using private contact attempts or form submissions as training data",
    ],
  });
}
