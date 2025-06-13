export function getFlagEmoji(countryCode: string): string {
  const code = countryCode.toUpperCase();
  return code.replace(/./g, (char) =>
    String.fromCodePoint(127397 + char.charCodeAt(0))
  );
}
