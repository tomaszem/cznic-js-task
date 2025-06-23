/**
 * Readable date-time
 */
export function formatDate(timestamp) {
  if (!timestamp) return "—";
  const date = new Date(timestamp);

  const options = {
    year: "numeric",
    month: "long", // Full month name
    day: "2-digit",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "UTC",
  };

  const parts = new Intl.DateTimeFormat("en-US", options).formatToParts(date);
  const month = parts.find((p) => p.type === "month")?.value;
  const day = parts.find((p) => p.type === "day")?.value;
  const year = parts.find((p) => p.type === "year")?.value;
  const time = `${parts.find((p) => p.type === "hour")?.value}:${
    parts.find((p) => p.type === "minute")?.value
  }:${parts.find((p) => p.type === "second")?.value} ${
    parts.find((p) => p.type === "dayPeriod")?.value
  }`;

  return `${month}/${day}/${year}, ${time}`;
}