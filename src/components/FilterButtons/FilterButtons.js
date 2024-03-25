import "../FilterButtons/FilterButtons.css";
function FilterButtons({ setCategoryChange, filters }) {
  return (
    <section className="filter__btn-wrapper">
      <ul>
        {filters.map((filter) => {
          return (
            <li key={filter.id}>
              <button onClick={() => setCategoryChange(filter.title)}>
                {filter.title}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
export default FilterButtons;
