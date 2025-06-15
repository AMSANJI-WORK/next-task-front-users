import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const NATIONALITIES = [
  "AU",
  "BR",
  "CA",
  "CH",
  "DE",
  "DK",
  "ES",
  "FI",
  "FR",
  "GB",
  "IE",
  "IN",
  "IR",
  "MX",
  "NL",
  "NO",
  "NZ",
  "RS",
  "TR",
  "UA",
  "US",
];

export const MultiSelector = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selected, setSelected] = useState<string[]>(
    searchParams.has("nat") ? searchParams.get("nat")?.split(",") ?? [] : []
  );

  const toggleSelection = (code: string) => {
    setSelected((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]
    );
  };
  useEffect(() => {
    const url = new URL("/users", process.env.NEXT_PUBLIC_APP_URL);
    if (selected.length === 0) url.searchParams.delete("nat");
    else url.searchParams.append("nat", selected.join(","));
    // fixed gender filter
    const gender = searchParams.get("gender");
    if (gender) url.searchParams.append("gender", gender);
    router.replace(`/users${url.search}`);
  }, [selected.length]);
  return (
    <fieldset className="filter__form__multi-selector">
      <legend>Nationalities</legend>
      <div className="options">
        {NATIONALITIES.map((code) => (
          <button
            key={code}
            type="button"
            className={`option ${selected.includes(code) ? "selected" : ""}`}
            onClick={() => toggleSelection(code)}
          >
            {code}
          </button>
        ))}
      </div>
    </fieldset>
  );
};

export default MultiSelector;
