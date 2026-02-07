export function formatDate(dateString: string): string {
  if (dateString == "TBD") {
    return "TBD";
  }

  const date = new Date(dateString + "T00:00:00");

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}