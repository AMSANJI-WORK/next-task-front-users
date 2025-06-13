import React from "react";
import "./filters.scss";
import AppButton from "@/app/(applications)/components/button/Button";
const UserFilters = () => {
  return (
    <aside className="filter">
      <span className="filter--title"> Filters</span>
      <form className="filter--form">
        <fieldset>
          <legend>Nationality</legend>
        </fieldset>
        <fieldset>
          <legend>Gender</legend>
          {/* <div>
            <input type="radio" name="gender" value="male" checked />
            <label>Male</label>
          </div>
          <div>
            <input type="radio" name="gender" value="female" />
            <label>Female</label>
          </div> */}
        </fieldset>
        <div className="filter--footer">
          <AppButton size="sm">Submit</AppButton>
          <AppButton size="sm">Reset</AppButton>
        </div>
      </form>
    </aside>
  );
};

export default UserFilters;
