import "./filters.scss";
import AppButton from "@/app/(applications)/components/button/Button";
import { useRouter } from "next/navigation";
import FilterGenderSelect from "../filter-gender-select/FilterGenderSelect";
import FilterMultiSelector from "../filter-multiselect/FilterMultiSelect";

const UserFilters = () => {
  const router = useRouter();
  return (
    <aside className="filter">
      <div className="filter__title">
        Filters
        <AppButton
          size="sm"
          background="#007bff"
          color="white"
          onClick={() => router.push("/users")}
        >
          Reset
        </AppButton>
      </div>
      <form className="filter__form">
        <FilterMultiSelector />
        <FilterGenderSelect />
      </form>
    </aside>
  );
};

export default UserFilters;
