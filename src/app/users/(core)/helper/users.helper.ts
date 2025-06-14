export function getFlagImageUrl(countryCode: string): string {
  return `${
    process.env.NEXT_PUBLIC_FLAG_CDN
  }/w80/${countryCode.toLowerCase()}.png`;
}
