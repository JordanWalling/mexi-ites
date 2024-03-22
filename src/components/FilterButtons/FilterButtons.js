import filters from "../../data";
import "../FilterButtons/FilterButtons.css";
function FilterButtons() {
  return (
    <section className="filter__btn-wrapper">
      <ul>
        {filters.map((filter) => {
          return (
            <li key={filter.id}>
              <button>{filter.title}</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
export default FilterButtons;
