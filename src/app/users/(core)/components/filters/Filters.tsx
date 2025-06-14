import React, { useEffect, useReducer } from "react";
import "./filters.scss";
import AppButton from "@/app/(applications)/components/button/Button";
import { useRouter } from "next/navigation";

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

const states = {
  gender: "",
  nat: [] as string[],
};

type State = typeof states;

const UserFilters = () => {
  const router = useRouter();
  const [state, updateState] = useReducer(
    (current: State, update: Partial<State>) => ({ ...current, ...update }),
    states
  );
  useEffect(() => {
    const url = new URL("/users", process.env.NEXT_PUBLIC_APP_URL);
    if (!state.gender || state.gender === "all")
      url.searchParams.delete("gender");
    else url.searchParams.append("gender", state.gender);
    if (state.nat.length === 0) url.searchParams.delete("nat");
    else
      state.nat.forEach((item) => {
        url.searchParams.append("nat", item);
      });

    router.push(`/users${url.search}`);
  }, [state]);

  return (
    <aside className="filter">
      <div className="filter__title">
        Filters
        <AppButton size="sm">Reset</AppButton>
      </div>
      <form className="filter__form">
        <fieldset>
          <legend>Nationality</legend>
        </fieldset>
        <fieldset>
          <legend>Gender</legend>
          {genders.map((item) => (
            <div key={item.value} className="filter__form__radio-group">
              <input
                className="filter__form__radio"
                type="radio"
                onChange={(e) => updateState({ gender: item.value })}
                name="gender"
                id={`gender-${item.value}`}
                value={item.value}
                defaultChecked={item.default}
              />
              <label htmlFor={`gender-${item.value}`}>{item.title}</label>
            </div>
          ))}
        </fieldset>
        <div className="filter__footer"></div>
      </form>
    </aside>
  );
};

export default UserFilters;
