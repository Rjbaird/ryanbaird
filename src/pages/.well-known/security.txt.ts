export function GET() {
  return new Response(
    [
      "Contact: https://ryanbaird.com/",
      "Preferred-Languages: en",
      "Canonical: https://ryanbaird.com/.well-known/security.txt",
      "",
    ].join("\n"),
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    }
  );
}
