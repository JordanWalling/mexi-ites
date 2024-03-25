import "../pages/MenuListPage.css";
import { useEffect, useState } from "react";
import MenuListItemCard from "../components/MenuListItemCard/MenuListItemCard";
import FilterButtons from "../components/FilterButtons/FilterButtons";
import filters from "../data";
function MenuListPage() {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState("mains");
  //   const items = [
  //     {
  //       id: 1,
  //       title: "burritos",
  //       category: "mains",
  //       image:
  //         "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800",
  //       description:
  //         "The fan favourite! Enjoy the freshest ingredients inside a beautifully made tortilla.",
  //       ingredients: [
  //         "Flour tortilla",
  //         "Fluffy white or brown rice",
  //         "Succulent meat or veggies of your choice",
  //         "Australian Jack cheese",
  //         "Black beans",
  //         "Pico de Gallo (a fresh-chopped tomato salsa)",
  //         "House-blend salsa",
  //       ],
  //       addOns: ["cheese", "beans", "rice", "salsa", "sour cream", "avocado"],
  //     },
  //     {
  //       id: 2,
  //       title: "bowls",
  //       category: "mains",
  //       image:
  //         "https://images.pexels.com/photos/8696479/pexels-photo-8696479.jpeg?auto=compress&cs=tinysrgb&w=800",
  //       description:
  //         "Want the delicious Mexican flavours of our burrito but feel like something without the tortilla? Try your favourite burrito in a bowl!",
  //       ingredients: [
  //         "Fluffy white or brown rice",
  //         "Succulent meat or veggies of your choice",
  //         "Australian Jack cheese",
  //         "Black beans",
  //         "House-made corn chips",
  //         "Pico de Gallo (a fresh-chopped tomato salsa)",
  //         "House-blend salsa",
  //       ],
  //       addOns: ["cheese", "beans", "rice", "salsa", "sour cream", "avocado"],
  //     },
  //     {
  //       id: 3,
  //       title: "enchiladas",
  //       category: "mains",
  //       image:
  //         "https://images.pexels.com/photos/9213936/pexels-photo-9213936.jpeg?auto=compress&cs=tinysrgb&w=400",
  //       description:
  //         "Engorge in a crowd favorite, Enchiladas. Perfect as a snack or to share!",
  //       ingredients: [
  //         "Cheese",
  //         "Ground Beef",
  //         "Chicken",
  //         "Sautee Vegetables",
  //         "Chilli Sauce",
  //         "Sour Cream",
  //       ],
  //       addOns: ["cheese", "beans", "salsa", "sour cream", "avocado"],
  //     },
  //     {
  //       id: 4,
  //       title: "quesadillas",
  //       category: "mains",
  //       image:
  //         "https://images.pexels.com/photos/4955210/pexels-photo-4955210.jpeg?auto=compress&cs=tinysrgb&w=400",
  //       description:
  //         "Quesadillas and perfect for every occasion! The perfect finger food!",
  //       ingredients: [
  //         "Spinach",
  //         "Fajita Beef",
  //         "Fajita Chicken",
  //         "Tomatoes",
  //         "Sour Cream",
  //         "Guacamole",
  //         "Rice",
  //         "Onions",
  //       ],
  //       addOns: ["cheese", "salsa", "sour cream", "avocado"],
  //     },
  //     {
  //       id: 5,
  //       title: "Coca Cola",
  //       category: "Drinks",
  //       image:
  //         "https://images.pexels.com/photos/39720/pexels-photo-39720.jpeg?auto=compress&cs=tinysrgb&w=400",
  //       description: "The refreshing taste of the iconic Coca Cola.",
  //     },
  //     {
  //       id: 6,
  //       title: "Nachos",
  //       category: "Appetizers",
  //       image:
  //         "https://images.pexels.com/photos/1108775/pexels-photo-1108775.jpeg?auto=compress&cs=tinysrgb&w=400",
  //       description:
  //         "Our Nachos are topped with fresh cheese and has your choice of meaty goodness",
  //       ingredients: [
  //         "Corn Chips",
  //         "Beef",
  //         "Chicken",
  //         "Sour Cream",
  //         "Cheese",
  //         "Guacamole",
  //       ],
  //     },
  //     {
  //       id: 7,
  //       title: "Corn Chips and Guacamole",
  //       category: "Appetizers",
  //       image:
  //         "https://images.pexels.com/photos/1108775/pexels-photo-1108775.jpeg?auto=compress&cs=tinysrgb&w=400",
  //       description:
  //         "Roasted Corn Chips with perfectly blended spices with avacado.",
  //       ingredients: ["Corn Chips", "Avocado", "Spices", "Sour Cream"],
  //     },
  //     {
  //       id: 8,
  //       title: "Churros",
  //       category: "Appetizers",
  //       image:
  //         "https://images.pexels.com/photos/1108775/pexels-photo-1108775.jpeg?auto=compress&cs=tinysrgb&w=400",
  //       description: "Desert for the masses",
  //       ingredients: ["Deep fried Dough", "Cinnamon", "Sugar", "Egg"],
  //       addOns: ["chocolate", "salted caramel"],
  //     },
  //     {
  //       id: 9,
  //       title: "Corn Spears",
  //       category: "Appetizers",
  //       image:
  //         "https://images.pexels.com/photos/1108775/pexels-photo-1108775.jpeg?auto=compress&cs=tinysrgb&w=400",
  //       description: "Grilled corn on a cob with blended spices and butter",
  //       ingredients: ["Corn", "Butter", "Spices"],
  //       addOns: ["chocolate", "salted caramel"],
  //     },
  //     {
  //       id: 10,
  //       title: "Corona",
  //       category: "Drinks",
  //       image:
  //         "https://images.pexels.com/photos/39720/pexels-photo-39720.jpeg?auto=compress&cs=tinysrgb&w=400",
  //       description: "Mexican Beer",
  //     },
  //     {
  //       id: 11,
  //       title: "Tequila Mixer",
  //       category: "Drinks",
  //       image:
  //         "https://images.pexels.com/photos/39720/pexels-photo-39720.jpeg?auto=compress&cs=tinysrgb&w=400",
  //       description: "Mexican Beer",
  //       addOns: ["lemonade", "soda water", "coca cola", "orange juice"],
  //     },
  //     {
  //       id: 12,
  //       title: "Bottled Water",
  //       category: "Drinks",
  //       image:
  //         "https://images.pexels.com/photos/39720/pexels-photo-39720.jpeg?auto=compress&cs=tinysrgb&w=400",
  //       description: "600ml Bottled Water",
  //     },
  //     {
  //       id: 13,
  //       title: "Margarita",
  //       category: "Drinks",
  //       image:
  //         "https://images.pexels.com/photos/39720/pexels-photo-39720.jpeg?auto=compress&cs=tinysrgb&w=400",
  //       description: "Classic Tequila Based Mexican Cocktail",
  //       ingredients: ["Tequila", "Lime Juice", "Triple Sec", "Salt"],
  //     },
  //   ];

  async function fetchItems() {
    const resp = await fetch("http://localhost:4000/items", {
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
