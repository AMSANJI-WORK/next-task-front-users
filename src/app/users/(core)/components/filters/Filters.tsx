import "./filters.scss";
import AppButton from "@/app/(applications)/components/button/Button";
import MultiSelector from "../multiselect/MultiSelect";
import GenderSelect from "../gender-select/GenderSelect";

const UserFilters = () => {
  return (
    <aside className="filter">
      <div className="filter__title">
        Filters
        <AppButton size="sm">Reset</AppButton>
      </div>
      <form className="filter__form">
        <MultiSelector />
        <GenderSelect />
      </form>
    </aside>
  );
};

export default UserFilters;
