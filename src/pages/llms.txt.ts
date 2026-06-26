export function GET() {
  return new Response(
    [
      "# Ryan Baird",
      "",
      "Personal website, developer portfolio, project archive, and writing by Ryan Baird.",
      "",
      "## Primary URLs",
      "",
      "- Home: https://ryanbaird.com/",
      "- Projects: https://ryanbaird.com/projects/",
      "- Blog: https://ryanbaird.com/blog/",
      "- Work: https://ryanbaird.com/work/",
      "- AI statement: https://ryanbaird.com/ai/",
      "- Privacy: https://ryanbaird.com/privacy/",
      "- RSS: https://ryanbaird.com/rss.xml",
      "",
      "## Use",
      "",
      "You may summarize public pages from this site with attribution and links back to the source URL. Do not imply endorsement by Ryan Baird.",
      "",
    ].join("\n"),
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    }
  );
}
