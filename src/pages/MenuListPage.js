import "../pages/MenuListPage.css";
import { useEffect, useState } from "react";
import MenuTitle from "../components/MenuTitle/MenuTitle";
import MenuListItemCard from "../components/MenuListItemCard/MenuListItemCard";
import FilterButtons from "../components/FilterButtons/FilterButtons";
import filters from "../data";
function MenuListPage() {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState("mains");

  //
  async function fetchItems() {
    const resp = await fetch("https://backend-api-rh76.onrender.com/items", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await resp.json();
    setItems(data);
  }
  useEffect(() => {
    fetchItems();
  }, []);

  function setCategoryChange(category) {
    setCategory(category);
  }

  const filteredItems = items.filter((item) => {
    return item.category === category;
  });

  return (
    <>
      <MenuTitle />
      <FilterButtons setCategoryChange={setCategoryChange} filters={filters} />
      <section className="menulist__section">
        <ul>
          {filteredItems.map((item) => {
            return <MenuListItemCard item={item} key={item.id} />;
          })}
        </ul>
      </section>
    </>
  );
}
export default MenuListPage;
