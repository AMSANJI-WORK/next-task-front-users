import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useMemo, useState } from "react";

type Gender = {
  title: string;
  value: string;
  default?: boolean;
};

const genders = [
  {
    title: "All",
    value: "all",
    default: true,
  },
  {
    title: "Male",
    value: "male",
  },
  {
    title: "Female",
    value: "female",
  },
];
const GenderSelect = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [gender, setgender] = useState<string>(() =>
    searchParams.has("gender") ? searchParams.get("gender") ?? "" : ""
  );
  const defualtChecked = useCallback(
    (item: Gender) =>
      searchParams.get("gender") ? item.value === gender : item.default,
    [searchParams]
  );

  useEffect(() => {
    const url = new URL("/users", process.env.NEXT_PUBLIC_APP_URL);
    // set gender
    if (!gender || gender === "all") url.searchParams.delete("gender");
    else url.searchParams.append("gender", gender);
    // fixed nat filter
    const nat = searchParams.get("nat");
    if (nat) url.searchParams.append("nat", nat);

    router.replace(`/users${url.search}`);
  }, [gender]);

  return (
    <fieldset>
      <legend>Gender</legend>
      {genders.map((item) => (
        <div key={item.value} className="filter__form__radio-group">
          <input
            className="filter__form__radio"
            type="radio"
            onChange={(e) => setgender(item.value)}
            name="gender"
            id={`gender-${item.value}`}
            value={item.value}
            defaultChecked={defualtChecked(item)}
          />
          <label htmlFor={`gender-${item.value}`}>{item.title}</label>
        </div>
      ))}
    </fieldset>
  );
};

export default GenderSelect;
